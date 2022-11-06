import React from 'react';

import Header from '../Header/Header';
import Content from './Content/Content';
import styles from './Main.module.css';
import SideBar from './SideBar/SideBar';

const MainDos = () => {
  return (
    <div className={styles.parent}>
      <Header />
      <div className={styles.main}>
        <SideBar />
        <Content />
      </div>
    </div>
  );
};

export default MainDos;