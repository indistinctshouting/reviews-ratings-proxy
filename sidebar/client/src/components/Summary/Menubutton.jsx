import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import style from './Summary.css';

library.add(faUtensils);

const MenuButton = (props) => (
  <li className={style.container}>
    <div className={style.summaryicon}>
      <FontAwesomeIcon icon="utensils"/>
    </div>
    <a onClick={props.showMenu} className={`${style.bolded} ${style.bluetext}`}> Full Menu</a>
  </li>
)

export default MenuButton;