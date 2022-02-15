import React, { FC } from 'react';
import styles from '../styles/Home.module.css';

interface CardWrapperProps {
  children: React.ReactNode;
}
export const CardWrapper: FC<CardWrapperProps> = ({ children }) => {
  return <div className={styles.cardWrapper}>{children}</div>;
};
