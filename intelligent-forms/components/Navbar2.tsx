import { Flex, Box, Button } from '@chakra-ui/react';
import Link from 'next/link';
import appLogo2 from '../images/app-logo2.png';
import Image from 'next/image';
import navbar2 from '../styles/navbar2.module.css';

import React from 'react'; //{ ReactNode } 

export default function Layout() {
  return (
    <div>
      <Flex className={navbar2.all} backgroundColor="#630000" flexDirection="column" height="100vh" width="30vh" p={10}>
        <Image src={appLogo2} alt="App Logo" height="30"></Image>
        <Box>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Button className={navbar2.authButton} backgroundColor="#630000">
            <Link className={navbar2.lcolor} href="/">
              Home
            </Link>
          </Button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Box>
        <Box>
          <Button className={navbar2.authButton} backgroundColor="#630000">
            <Link className={navbar2.lcolor} href="/my-forms">
              My Forms
            </Link>
          </Button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Box>
        <Box>
          <Button className={navbar2.authButton} backgroundColor="#630000">
            <Link className={navbar2.lcolor} href="/my-forms">
              Delete Form
            </Link>
          </Button>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </Box>
        <Box>
          <Button className={navbar2.authButton} backgroundColor="#630000">
            <Link className={navbar2.lcolor} href="/my-forms">
              Update Form
            </Link>
          </Button>
        </Box>
      </Flex>
    </div>
  );
}
