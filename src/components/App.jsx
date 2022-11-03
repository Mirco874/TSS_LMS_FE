import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.App}>
      <div className={styles.Header}>
        Header
      </div>
      <div className={styles.test}>
        <div className={styles.NavBar}>
          NavBar
        </div>
        <div className={styles.Content}>
          Content
        </div>
      </div>
    </div>
  )
}

