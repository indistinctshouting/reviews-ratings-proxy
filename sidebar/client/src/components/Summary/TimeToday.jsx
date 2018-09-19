import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import style from './Summary.css';

library.add(faClock);

const TimeToday = (props) => {
  let openOrClosedClass = style.summarycheckopen;
  let statusText, iconColor;
  if (props.isOpen) {
    openOrClosedClass = `${openOrClosedClass} ${style.greentext}`;
    statusText = 'Open Now';
    iconColor = style.greentext;
  } else {
    openOrClosedClass = `${openOrClosedClass} ${style.redtext}`;
    statusText = 'Closed Now';
    iconColor = style.redtext;
  }

  return (
    <li className={style.container}>
      <div className={style.summaryicon}>
        <FontAwesomeIcon icon="clock" className={iconColor}/>
      </div>
      <div>
        <span>Today</span>
        <span className={style.bolded}> {props.times}</span>
        <span className={`${openOrClosedClass} + ${style.bolded}`}> {statusText}</span>
      </div>
    </li>
  )
}

export default TimeToday;