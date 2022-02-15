import React, { FC } from 'react';
import styles from '../styles/Home.module.css';

interface CardProps {
  image: {
    id: number;
    author: string;
    width: number;
    height: number;
    download_url: string | '';
  };
}

export const Card: FC<CardProps> = ({
  image: { id, author, download_url },
}) => {
  return (
    <div className={styles.card}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={download_url}
        alt="picsum-image"
        width={325}
        height={112}
        className={styles.image}
      />

      <div className={styles.textWrapper}>
        <h5>Lorem Ipsum</h5>
        <h6>Lorem Ipsum</h6>

        <hr />

        <ul>
          <li>
            <span className={styles.label}>Author</span>
            <span className={styles.value}>{author}</span>
          </li>
          <li>
            <span className={styles.label}>ID</span>
            <span className={styles.value}>{id}</span>
          </li>
          <li>
            <span className={styles.label}>URL</span>
            <span className={styles.value}>{download_url}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
