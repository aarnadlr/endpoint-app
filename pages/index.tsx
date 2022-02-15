import React, { FC } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Card: FC<{}> = () => {
  return (
    <div className={styles.card}>
      <img
        src="https://picsum.photos/seed/1234/325/112"
        alt="picsum-image"
        width={325}
        height={112}
      />

      <div className={styles.textWrapper}>
        <h5>Lorem Ipsum</h5>
        <h6>Lorem Ipsum</h6>

        <hr />

        <ul>
          <li>
            <span className={styles.label}>Author</span>
            <span className={styles.value}>Chuck Ringer</span>
          </li>
          <li>
            <span className={styles.label}>Author</span>
            <span className={styles.value}>Chuck Ringer</span>
          </li>
          <li>
            <span className={styles.label}>Author</span>
            <span className={styles.value}>Chuck Ringer</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const CardWrapper: FC<{}> = ({ children }) => {
  return <div className={styles.cardWrapper}>{children}</div>;
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Endpoint CLosing</title>
        <meta name="description" content="Endpoint Closing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <CardWrapper>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <Card key={index} />
          ))}
        </CardWrapper>
      </main>
    </>
  );
};

export default Home;
