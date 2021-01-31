import { NextApiRequest, NextApiResponse } from 'next';
import querystring from 'querystring';

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('code', req.query['code']);

  const basicAuth = Buffer.from(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString('base64');

  const spotifyRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'authorization_code',
      code: req.query['code'],
      redirect_uri: 'http://localhost:3000/api/callback',
    }),
  }).then((data) => data.json());

  console.log(spotifyRes);
  await res.redirect('/');
};
