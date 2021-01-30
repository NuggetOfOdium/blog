import { Image } from '@chakra-ui/react';

export const Hero: React.FC = () => {
  return (
    <Image
      justifySelf="center"
      w="100%"
      h="380px"
      fit="cover"
      src="https://source.unsplash.com/random/1600x900?nature,water"
    />
  );
};
