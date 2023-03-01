import { Inter } from '@next/font/google';
import Head from 'next/head';
import Link from 'next/link';

// eslint-disable-next-line no-unused-vars
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const test = true;
  return (
    <>
      <Head>
        <title>Daz Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Home Page</h1>
        <Link href="about">About Me</Link>
      </main>
    </>
  );
}
