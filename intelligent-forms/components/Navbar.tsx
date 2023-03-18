import Link from 'next/link';
import React, { ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => {
  
  const router = useRouter();
  
  const navbarStyles = {
    navbar: {
      backgroundColor: '#333',
      color: '#fff',
      display: 'flex',
      padding: '1rem',
      alignItems: 'center',
    },
    linkStyles: {
      color: '#fff',
      textDecoration: 'none',
      margin: '0 1rem',
    },
  };

  return (
    <div>
      <Head>
        <title>Intelligent Forms</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav style={navbarStyles.navbar}>
          <Link href="/" style={navbarStyles.linkStyles}>
            Home
          </Link>{' '}
          <Link href="/my-forms" style={navbarStyles.linkStyles}>
            My Forms
          </Link>{' '}
          <Link href="/create-form" style={navbarStyles.linkStyles}>
            Create Form
          </Link>{' '}
          |{' '}
          <button onClick={() => router.push('/api/auth/signin')}>SIGN IN</button>
          <Link href="/register" style={navbarStyles.linkStyles}>
            REGISTER
          </Link>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
