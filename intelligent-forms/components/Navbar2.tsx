import { Flex, Box, Button } from '@chakra-ui/react';
import Link from 'next/link';
import appLogo2 from '../images/app-logo2.png';
import Image from 'next/image';

export default function Layout() {
  return (
    <Flex backgroundColor="#630000" flexDirection="column" height="100vh" width="30vh" p={10}>
      <Image src={appLogo2} alt="App Logo" height="30"></Image>
      <Box>
        <Button>
          <Link href="/">Home</Link>
        </Button>
      </Box>
      <Box>
        <Button>
          <Link href="/my-forms">My Forms</Link>
        </Button>
      </Box>
      <Box>
        <Button>
          <Link href="/my-forms">Delete Form</Link>
        </Button>
      </Box>
      <Box>
        <Button>
          <Link href="/my-forms">Update Form</Link>
        </Button>
      </Box>
    </Flex>
  );
}
