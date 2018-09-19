import React from 'react';
import arrows from './../public/arrows.css';

class ModalArrowLeft extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <img className='arrow modal-left-arrow' src='../public/left-arrow.gif' />
    );
  }
}

export default ModalArrowLeft;
