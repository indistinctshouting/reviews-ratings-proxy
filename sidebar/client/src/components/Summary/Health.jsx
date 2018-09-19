import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import style from './Summary.css';

library.add(faPlusSquare);

const Health = (props) => (
  <li className={style.container}>
    <div className={style.summaryicon}>
      <FontAwesomeIcon icon="plus-square"/>
    </div>
    <div>
      <span className={`${style.bluetext} ${style.bolded}`}>Health Score </span>
      <span className={style.bolded}>{props.score} out of 100</span>
    </div>
  </li>
)

export default Health