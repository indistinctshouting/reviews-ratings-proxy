import React from 'react';
import style from './Hours.css';

const HoursItem = (props) => {
  let openOrClosedClass = style.checkopen;
  let statusText;
  if (props.isOpen) {
    openOrClosedClass = `${openOrClosedClass} ${style.greentext}`;
    statusText = 'Open Now';
  } else {
    openOrClosedClass = `${openOrClosedClass} ${style.redtext}`;
    statusText = 'Closed Now';
  }

  return(
    <tr>
      <th className={`${style.hours} ${style.day}`}>
        {props.day}
      </th>
      <td className={`${style.hours} ${style.time}`}>
        <span>
          {props.hours}
        </span>
      </td>
      <td className={openOrClosedClass}>
        <span>
          {(props.day === props.currDay) ? statusText : null}
        </span>
      </td>
    </tr>
  )
}

export default HoursItem;