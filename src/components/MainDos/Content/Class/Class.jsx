import React from "react";
import styles from "./Class.module.css";

export const Class = () => {
  return (
    <div className={styles.Class}>
      <p>Clase 1-2023</p>
      <div className={styles.ClassImage}>
        <embed
          src="./Docs/Cap1.pdf"
          type="application/pdf"
          width="420"
          height="600"
        />
      </div>
    </div>
  );
};
