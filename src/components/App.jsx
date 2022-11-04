import React from "react";
import styles from "./App.module.css";
import { Class } from "./Class/Class";

export const App = () => {
  return (
    <div className={styles.App}>
      <div className={styles.test}>
        <div className={styles.NavBar}>
          <div className={styles.Items}>
            <div>
              {" "}
              <p>Clases</p>
            </div>
            <div>
              {" "}
              <p>Material</p>
            </div>
            <div>
              {" "}
              <p>Chat</p>
            </div>
            <div>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="currentColor"
                class="bi bi-divst"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>{" "}
              Documentos
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Content}>
        Mis Clases
        <Class />
      </div>
    </div>
  );
};
