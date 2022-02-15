import React, { FC, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Card } from '../components/Card';
import { CardWrapper } from '../components/CardWrapper';

const Home: NextPage = () => {
  const [imageValues, setImageValues] = useState([]);

  // fetch images from API
  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=1&limit=5')
      .then((response) => response.json())
      .then((data) => {
        setImageValues(data);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Endpoint Closing</title>
        <meta name="description" content="Endpoint Closing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CardWrapper>
          {imageValues.map((image, index) => (
            <Card key={index} image={image} />
          ))}
        </CardWrapper>
      </main>
    </>
  );
};

export default Home;
