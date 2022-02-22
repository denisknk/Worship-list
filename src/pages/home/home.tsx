import React, { useEffect, useState } from 'react';

import { Container } from '../../components/container';
import Axios from '../../axiosHeaders/axios';
import RowItem from './components/rowItem';
import Modal from '../../components/modal/modal';

import styles from './home.module.css';
import logo from '../../assets/images/main_logo.png';

type SongType = {
  complete: boolean;
  band: string;
  songName: string;
  timestamp: string;
  id: string;
};

const Home: React.FC = () => {
  const [songs, setSongs] = useState<SongType[]>([]);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [bandNameInput, setBandNameInput] = useState('');
  const [songNameInput, setSongNameInput] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [deleteId, setDeleteId] = useState('');

  const getSongs = () => {
    Axios.get('/song', {
      params: {
        search: searchInput
      }
    })
      .then(async ({ data }) => {
        setSongs(data);
      })
      .catch((error) => {
        console.error(`Error \n\n${error}`);
      });
  };

  const addSong = async () => {
    Axios.post('/song', {
      band: bandNameInput,
      songName: songNameInput
    })
      .then(async (res) => {
        getSongs();
        // setSongs([...songs, res.data]);
      })
      .catch((error) => {
        alert(`Ошибка добавления \n${error}`);
      });
    handleCloseAddModal();
  };

  const handleCancelClick = () => {
    setDeleteModalIsOpen(false);
    setDeleteId('');
  };

  const deleteSong = async (id: string) => {
    console.log('delete Id in Axios', id);
    Axios.delete(`/song/${id}`)
      .then(async () => {
        setSongs((songs) => songs.filter((s) => s.id !== id));
      })
      .catch((error) => {
        console.log('before alert id', id);
        alert(`Ошибка удаления ${error}`);
      });
    setDeleteModalIsOpen(false);
  };

  const handleDeleteSong = (id: string) => {
    setDeleteId(id);
    setDeleteModalIsOpen(true);
  };

  useEffect(() => {
    getSongs();
  }, [searchInput]);

  const handleCloseAddModal = () => {
    setBandNameInput('');
    setSongNameInput('');
    setAddModalIsOpen(false);
  };
  const handleCloseDeleteModal = () => setDeleteModalIsOpen(false);
  const handleOpenAddModal = () => setAddModalIsOpen(true);

  const handleChangeBandInput = (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) =>
    setBandNameInput(e.target.value);

  const handleChangeSongNameInput = (
    e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => setSongNameInput(e.target.value);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) =>
    setSearchInput(e.target.value);

  return (
    <Container>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="logo" className={styles.mainLogo} />
      </div>
      <input
        className={`${styles.input} ${styles.searchInput}`}
        type="text"
        id="search"
        autoComplete="off"
        placeholder="Поиск"
        onChange={handleSearchInput}
        value={searchInput}
      />
      <div className={styles.listWrapper}>
        <ul className={styles.list}>
          {songs &&
            songs.map((t, i) => (
              <RowItem
                key={i}
                band={t.band}
                songName={t.songName}
                id={t.id}
                onDelete={handleDeleteSong}
              />
            ))}
        </ul>
      </div>
      <Modal isOpen={addModalIsOpen} setClose={handleCloseAddModal}>
        <div className={styles.modalTitle}>Добавить песню</div>
        <label className={styles.label} htmlFor="band">
          Исполнитель
        </label>
        <input
          className={`${styles.input} ${styles.modalInput}`}
          type="text"
          id="band"
          autoComplete="off"
          onChange={handleChangeBandInput}
          value={bandNameInput}
        />
        <label className={styles.label} htmlFor="songName">
          Песня
        </label>
        <input
          className={`${styles.input} ${styles.modalInput} ${styles.modalInputLast}`}
          type="text"
          id="songName"
          autoComplete="off"
          onChange={handleChangeSongNameInput}
          value={songNameInput}
        />
        <div className={styles.modalBottomBlock}>
          <button className={styles.modalButton} onClick={addSong}>
            Добавить
          </button>
        </div>
      </Modal>
      <Modal size="big" isOpen={deleteModalIsOpen} setClose={handleCloseDeleteModal}>
        <div className={`${styles.modalTitle} ${styles.modalTitleDelete}`}>
          Удалить выбранную песню?
        </div>
        <div className={`${styles.modalBottomBlock} ${styles.deleteModalBottomBlock}`}>
          <button
            className={`${styles.modalButton} ${styles.modalButtonDelete}`}
            onClick={handleCancelClick}>
            Отмена
          </button>
          <button
            className={`${styles.modalButton} ${styles.modalButtonDelete}`}
            onClick={() => deleteSong(deleteId)}>
            Удалить
          </button>
        </div>
      </Modal>
      <button className={styles.button} onClick={handleOpenAddModal}>
        +
      </button>
    </Container>
  );
};

export default Home;
