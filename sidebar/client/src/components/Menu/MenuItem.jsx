import React from 'react';
import { Media } from 'react-bootstrap';
import style from './Menu.css';

let emptyImage = "https://s3-media2.fl.yelpcdn.com/assets/2/www/img/dca54f97fb84/default_avatars/menu_medium_square.png";

const MenuItem = (props) => {
  return (
    <div>
      <hr/>
      <Media>
        <Media.Left align="middle">
          <img className={style.menuimage} width={70} height={70} src={emptyImage} alt="thumbnail"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading componentClass="h5" bsClass="pull-left">
            <strong className={style.bluetext}>
              {props.details.item_name}
            </strong>
        </Media.Heading>
          <Media.Heading componentClass="h5" bsClass="pull-right">
            <strong>
              {props.details.item_price}
            </strong>
        </Media.Heading>
          <br></br>
          <br></br>
          <p>{props.details.item_description}</p>
        </Media.Body>
      </Media>
    </div>
  )
}
export default MenuItem
