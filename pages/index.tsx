import { Nav } from 'components/Nav';
import {
  Flex,
  Text,
  Container,
  Heading,
  HStack,
  VStack,
  Icon,
  Box,
  Button,
} from '@chakra-ui/react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { NowPlaying } from 'components/NowPlaying';

export default function Home() {
  return (
    <>
      <Nav />
      <Flex maxW="768px" mx="auto" d="col" p="6">
        <NowPlaying />
        <Container mt={8} w="100%" maxW="120ch">
          <Heading size="lg">Hi there, My name is Odysseas</Heading>
          <Text>
            Welcome to my little corner of the internet. I'm a software
            developer currently employed at Vobling. I like React, jazz music,
            and in my spare time i play dungeons and dragons.
          </Text>
        </Container>
        <Timeline />
      </Flex>
    </>
  );
}

interface TimelineItemProps {
  title: string;
  date?: Date;
}

const Timeline: React.FC = () => {
  const TimelineItem: React.FC<TimelineItemProps> = ({ children, title }) => (
    <Box>
      <HStack d="collumn">
        <Icon as={AiOutlineCheckCircle} w="5" h="5" color="green.600" />
        <Text textAlign="center" as="b">
          {title}
        </Text>
      </HStack>
      <Box>
        <Text ml="7" fontSize="sm" textAlign="justify">
          {children}
        </Text>
      </Box>
    </Box>
  );

  return (
    <VStack alignItems="flex-start" m={4} mt="8" spacing="6" pr="4">
      <Heading size="lg">Timeline</Heading>
      <Heading size="md">2020</Heading>
      <TimelineItem title="Hired as software developer at Vobling 💻">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </TimelineItem>
      <TimelineItem title="Graduate from Nackademin 🏆">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </TimelineItem>
      <Heading size="md">2019</Heading>
      <TimelineItem title="Summer internship at Vobling 🎈">
        I got the opportunity to do a summer internship at Vobling in 2019,
        where i helped ship a fire fighting solution to the norwegian train
        company VY
      </TimelineItem>
      <TimelineItem title="Started VR developer program at Nackademin 📚">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </TimelineItem>
    </VStack>
  );
};
