import { Flex, Icon, Text } from '@chakra-ui/react';
import { FaSpotify } from 'react-icons/fa';
import useSWR from 'swr';

const fetcher = async (...args) => {
  //@ts-ignore
  const res = await fetch(...args);

  return res.json();
};

export const NowPlaying: React.FC = () => {
  const { data } = useSWR('/api/now-playing', fetcher);

  return (
    <Flex align="center">
      <Icon color="green.500" as={FaSpotify} />
      {data?.isPlaying ? (
        <Text>Now playing: {data.title} </Text>
      ) : (
        <Text>Not playing</Text>
      )}
    </Flex>
  );
};
