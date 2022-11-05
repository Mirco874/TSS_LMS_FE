import React from "react";
import styles from "./SideBar.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.child}>
      <ListGroup horizontal>
        <ListGroup.Item>
            <svg width="36" height="36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 2.25A9.75 9.75 0 0 0 2.25 12c0 5.384 4.365 9.75 9.75 9.75 5.384 0 9.75-4.366 9.75-9.75 0-5.385-4.366-9.75-9.75-9.75Z"></path>
  <path d="M12 2.25c-2.722 0-5.28 4.365-5.28 9.75 0 5.384 2.56 9.75 5.281 9.75 2.722 0 5.282-4.366 5.282-9.75 0-5.385-2.56-9.75-5.282-9.75Z"></path>
  <path d="M5.5 5.5C7.293 6.773 9.55 7.532 12 7.532c2.451 0 4.708-.76 6.5-2.032"></path>
  <path d="M18.5 18.5c-1.792-1.272-4.049-2.031-6.5-2.031-2.45 0-4.707.759-6.5 2.031"></path>
  <path d="M12 2.25v19.5"></path>
  <path d="M21.75 12H2.25"></path>
</svg>Clases</ListGroup.Item>
        <ListGroup.Item onClick={() => navigate("/material")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
</svg>
          Material
        </ListGroup.Item>
        <ListGroup.Item>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>
        Chat</ListGroup.Item>
        <ListGroup.Item>
        <svg width="36" height="36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.75 12.381v8.056c0 1.14-.893 2.063-2.013 2.063H5.016C3.893 22.5 3 21.577 3 20.437V8.063A2.075 2.075 0 0 1 5.063 6h4.411a1.15 1.15 0 0 1 .82.345l5.117 5.203c.217.223.34.522.339.833v0Z"></path>
  <path d="M9.375 6v5.063a1.328 1.328 0 0 0 1.313 1.312h5.062"></path>
  <path d="M8.25 6V3.562A2.075 2.075 0 0 1 10.313 1.5h4.406a1.164 1.164 0 0 1 .825.345l5.117 5.203c.217.22.34.517.339.827v8.063C21 17.076 20.107 18 18.987 18h-2.862"></path>
  <path d="M14.625 1.5v5.063a1.328 1.328 0 0 0 1.313 1.312H21"></path>
</svg>
Documentos</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default SideBar;
