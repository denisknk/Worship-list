import React from 'react';

import styles from './home.module.css';
import { Container } from '../../components/container';
import RowItem from './components/rowItem';

const Home: React.FC = () => {
  return (
    <Container>
      <h1 className={styles.header}>Песни</h1>
      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          <RowItem name="Song 1" />
          <RowItem name="Song 2" />
          <RowItem name="Song 3" />
          <RowItem name="Song 4" />
          <RowItem name="Song 5" />

          <RowItem name="Song 1" />
          <RowItem name="Song 2" />
          <RowItem name="Song 3" />
          <RowItem name="Song 4" />
          <RowItem name="Song 5" />
          <RowItem name="Song 1" />
          <RowItem name="Song 2" />
          <RowItem name="Song 3" />
          <RowItem name="Song 4" />
          <RowItem name="Song 5" />
        </ul>
      </div>
    </Container>
  );
};

export default Home;
