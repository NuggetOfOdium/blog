import NextLink from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

const Link = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <ChakraLink fontSize="md">{children}</ChakraLink>
    </NextLink>
  );
};

export { Link };
