import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
//import getUserData from './api/get-user-data';
//import { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../components/Navbar';
import BrowserUrlInput from '../components/BrowserUrlInput';
//import { Button } from '@chakra-ui/react';
import home from '../styles/home.module.css';

export default function Home() {
  const { data: session } = useSession();
  console.log('session: ', session);
  const router = useRouter();

  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   async function fetchUserData() {
  //     const response = await fetch('/api/get-user-data'); //getUserData
  //     const data = await response.json();
  //     setUserData(data.user);
  //   }

  //   fetchUserData();
  // }, []);
  const handleClick = async (event) => {
    event.preventDefault();
    if (session) router.push('/create-form');
    else router.push('/register');
  };
  return (
    <div>
      <Layout>
        {
          session ? (
            <div className={home.main}>
              <p>Hello, {session.user.email}!</p>
              <button className={home.buttons} onClick={() => signOut()}>
                Log out
              </button>
              {/* {userData ? <p>{userData.email}</p> : null} */}
            </div>
          ) : null
          //   (<div>
          //     <button onClick={() => router.push('/api/auth/signin')}>Sign in</button>
          //     <button onClick={() => router.push('/register')}>Register</button>
          //   </div>
          // )
        }
        <Link href="/create-form">
          <br></br>
          <button onClick={handleClick} className={home.buttons}>
            CREATE FORM
          </button>
        </Link>
        <BrowserUrlInput />
      </Layout>
    </div>
  );
}
