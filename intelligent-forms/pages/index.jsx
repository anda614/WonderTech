import { signOut, useSession } from 'next-auth/react';
//import { useRouter } from 'next/router';
//import getUserData from './api/get-user-data';
import { useState, useEffect } from 'react';

import Link from 'next/link';
import Layout from '../components/Navbar';
import BrowserUrlInput from '../components/BrowserUrlInput';
import { Button } from '@chakra-ui/react';

export default function Home() {
  const { data: session } = useSession();
  console.log('session: ', session);
  //const router = useRouter();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch('/api/get-user-data'); //getUserData
      const data = await response.json();
      setUserData(data.user);
    }

    fetchUserData();
  }, []);

  return (
    <div>
      <Layout>
        <h1>Home Page</h1>
        <p>This is the homepage</p>
        <Link href="/create-form">
          <Button colorScheme="teal" variant="solid">
            CREATE FORM
          </Button>
        </Link>
        <BrowserUrlInput />
      </Layout>
      {
        session ? (
          <div>
            <p>Hello, {session.user.email}!</p>
            <button onClick={() => signOut()}>Log out</button>
            {userData ? <p>{userData.email}</p> : null}
          </div>
        ) : null
        //   (<div>
        //     <button onClick={() => router.push('/api/auth/signin')}>Sign in</button>
        //     <button onClick={() => router.push('/register')}>Register</button>
        //   </div>
        // )
      }
    </div>
  );
}
