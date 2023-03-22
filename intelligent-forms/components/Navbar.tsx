import Link from 'next/link';
import React, { ReactNode } from 'react';
import Head from 'next/head';
import navbar from '../styles/navbar.module.css';
import appLogo from '../images/app-logo.png';
import Image from 'next/image';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => {
  // const navbarStyles = {
  //   navbar: {
  //     backgroundColor: '#333',
  //     color: '#fff',
  //     display: 'flex',
  //     padding: '1rem',
  //     alignItems: 'center',
  //   },
  //   linkStyles: {
  //     color: '#fff',
  //     textDecoration: 'none',
  //     margin: '0 1rem',
  //   },
  // };

  return (
    <div>
      <Head>
        <title>WonderTech Intelligent Forms</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className={navbar.main}>
          <Image className={navbar.appLogo} src={appLogo} alt="App Logo" width="100" height="20"></Image>
          <div className={navbar.allLinks}>
            {' '}
            <Link className={navbar.link} href="/">
              Home
            </Link>
            <Link className={navbar.link} href="/my-forms">
              My Forms
            </Link>
            <Link className={navbar.link} href="/create-form">
              Create Form
            </Link>
            <Link className={navbar.link} href="/scan-doc">
              Scan Doc
            </Link>{' '}
            |{' '}
            <button className={navbar.authButton} id={navbar.signInButton}>
              <Link className={navbar.authLink} href="/api/auth/signin">
                Sign In
              </Link>
            </button>
            <button className={navbar.authButton}>
              <Link className={navbar.authLink} href="/register">
                Register
              </Link>
            </button>
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
};

export default Layout;
