import React from "react";
import styles from "./SideBar.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.child}>
      <ListGroup horizontal>
        <ListGroup.Item>Clases</ListGroup.Item>
        <ListGroup.Item onClick={() => navigate("/material")}>
          Material
        </ListGroup.Item>
        <ListGroup.Item>Chat</ListGroup.Item>
        <ListGroup.Item>Documentos</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default SideBar;
