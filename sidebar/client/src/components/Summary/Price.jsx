import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import style from './Summary.css';

library.add(faDollarSign);

const Price = (props) => (
  <li className={style.container}>
    <div className={style.summaryicon}>
      <FontAwesomeIcon icon="dollar-sign" />
      <FontAwesomeIcon icon="dollar-sign" />
      <FontAwesomeIcon icon="dollar-sign" />
      <FontAwesomeIcon icon="dollar-sign" />
    </div>
    <div>
      <span>Price Range </span>
      <span className={style.bolded}>{props.priceRange}</span>
    </div>
  </li>
)

export default Price;