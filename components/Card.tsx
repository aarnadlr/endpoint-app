import React, { FC, useState } from 'react';
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
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <div className={styles.card}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        // placeholder.jpg displays until API image loads
        src={imageLoaded ? download_url : '/placeholder.jpg'}
        alt="picsum-image"
        width={325}
        height={112}
        className={styles.image}
        onLoad={handleImageLoaded}
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
