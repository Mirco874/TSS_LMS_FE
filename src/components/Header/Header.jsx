import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        fill="currentColor"
        class="bi bi-1-circle"
        viewBox="0 0 16 16"
      >
        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
      </svg>
      <div>Edukit</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="currentColor"
        class="bi bi-divst"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
      <div className={styles.User}>User</div>
    </div>
  );
};

export default Header;
