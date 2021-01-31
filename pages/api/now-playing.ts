import { getNowPlaying } from 'lib/spotify';
export default async (_, res) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    console.log(response.status);
    return res.status(200).json({ isPlaying: false });
  }

  const song: any = await response.json();
  const title = song.item.name;
  const isPlaying = song.is_playing;
  console.log(song);
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  );

  return res.status(200).json({
    isPlaying,
    title,
  });
};
