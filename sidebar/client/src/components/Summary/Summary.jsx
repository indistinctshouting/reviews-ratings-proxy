import React from 'React';
import TimeToday from './TimeToday.jsx';
import Health from './Health.jsx';
import Price from './Price.jsx';
import MenuButton from './MenuButton.jsx';
import moment from 'moment';
import style from './Summary.css';

let currDay = moment().format('dddd').slice(0, 3);
let currHours = moment().format('h:mma');
let currHoursMoment = moment(currHours, 'h:mma');

const Summary = (props) => {
  let hourBounds, startToday, endToday, isOpen;
  if (!!props.hours[currDay]) {
    hourBounds = props.hours[currDay].replace(' ', '').split('-');
  }
  if (!!hourBounds) {
    startToday = moment(hourBounds[0], 'h:mma');
    endToday = moment(hourBounds[1], 'h:mma');
    isOpen = (currHoursMoment.isAfter(startToday) && currHoursMoment.isBefore(endToday));
  }

  return (
    <ul className={style.summary}>
      <div className={style.summaryitem}>
        <TimeToday
          times={props.hours[currDay]}
          isOpen={isOpen}
        />
      </div>
      <div className={style.summaryitem}>
        <MenuButton
          showMenu={props.showMenu}
        />
      </div>
      <div className={style.summaryitem}>
        <Price
          priceRange={props.priceRange}
        />
      </div>
      <div className={style.summaryitem}>
        <Health
          score={props.health}
        />
      </div>
    </ul>
  )
}

export default Summary;