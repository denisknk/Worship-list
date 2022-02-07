import React from 'react';
import im from '../../../assets/images/im.jpeg';

import styles from '../home.module.css';

type Props = {
  name: string;
};

const RowItem: React.FC<Props> = ({ name }: Props) => {
  return (
    <li className={styles.rowWrapper}>
      <div className={styles.imgParent}>
        <img src={im} className={styles.img} />
      </div>
      <div className={styles.songName}>{name}</div>
    </li>
  );
};

export default RowItem;
