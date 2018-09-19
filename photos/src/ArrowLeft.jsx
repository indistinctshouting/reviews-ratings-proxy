import React from 'react';
import arrows from './../public/arrows.css';


class ArrowLeft extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.previousPhoto();
  }


  render() {
    return (
      <img className='arrow left-arrow' src='../public/left-arrow.gif' onClick={this.handleClick}/>
    );
  }
}

export default ArrowLeft;
