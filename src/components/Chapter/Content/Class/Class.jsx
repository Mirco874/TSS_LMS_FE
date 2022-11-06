import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import React from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import styles from './Class.module.css';

export const Class = () => {
  return (
    <div >
          {capitulos()}
   </div>
    
  );
};
const contenidoTema=['c1','c2', 'c3'];

{contenidoTema.map((t)=>(
  <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{`${t}`}</h5>
      </div>
  ))}  

const capitulos =()=>(contenidoTema.map((elem, index)=>(
 
  <div >
     
  <div class="d-flex w-100 justify-content-between" >
    <h5 class="mb-1">{`Tema ${index + 1 }`}</h5>
  </div>
  <DropdownButton
    as={ButtonGroup}
    title={elem}
    variant="dark"
    id="dropdown-basic"
    className={styles.Class}  >
    <Dropdown.Item eventKey="1">{`${elem}`}</Dropdown.Item>
    <Dropdown.Item eventKey="2">Revisar</Dropdown.Item>
      </DropdownButton>
  </div>
)));

