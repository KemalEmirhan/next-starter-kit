import React from 'react';
import Head from 'next/head';
import Header from '../components/Header/header';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
  </div>
);

export default Home;
