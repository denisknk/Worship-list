import React from 'react';
import im from '../../../assets/images/im.jpeg';

import { DeleteOutline } from '@material-ui/icons';

import styles from '../home.module.css';

type Props = {
  band: string;
  songName: string;
  id: string;
  onDelete: (id: string) => void;
};

const RowItem: React.FC<Props> = ({ band, id, onDelete, songName }: Props) => {
  return (
    <li className={styles.rowWrapper}>
      <div className={styles.imgParent}>
        <img src={im} className={styles.img} />
      </div>
      <div className={`${styles.singleOverflow} ${styles.titleWrapper}`}>
        <div className={styles.nameWrapper}>
          <div className={`${styles.bandName}`}>
            <span>{band}</span>
          </div>
          <div className={`${styles.songName}`}>
            <span> {songName}</span>
          </div>
        </div>

        <div className={styles.iconWrapper} onClick={() => onDelete(id)}>
          <DeleteOutline />
        </div>
      </div>
    </li>
  );
};

export default RowItem;
