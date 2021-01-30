import { Box, Button, Flex, Heading, HStack, Stack } from '@chakra-ui/react';
import { Link } from './Link';
import Image from 'next/image';

export const Nav: React.FC = () => {
  return (
    <Flex h="45px" bg="gray.700" w="100vw" p={4}>
      <Flex
        mx="auto"
        w="100%"
        maxW="768px"
        color="white"
        justify="space-between"
      >
        <Brand />
        <Links />
      </Flex>
    </Flex>
  );
};

const Brand: React.FC = () => {
  return (
    <HStack>
      <Image width="32px" height="32px" src="/logo.png" />
      <Heading size="md" alignSelf="center">
        Virtual Oddity
      </Heading>
    </HStack>
  );
};

const Links: React.FC = () => {
  return (
    <HStack spacing={4}>
      <Link href="/">Home</Link>
      <Link href="/Dashboard">Dashboard</Link>
      <Link href="/About">About</Link>
    </HStack>
  );
};
