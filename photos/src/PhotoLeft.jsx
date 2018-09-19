import React from 'react';
import ArrowLeft from './ArrowLeft.jsx';

class PhotoLeft extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.showModal(this.props.info.images[0]);
  }

  render() {
    return (
      <div className='photo-container left-photo-container'>
        <img className='photo left-photo' images={this.props.images} src={this.props.info.images[0]} onClick={this.handleClick}/>
        <div className='left-caption'>
          <p>{this.props.info.name} - {this.props.info.location}, United States</p>
        </div>
      </div>
    );
  }
}

export default PhotoLeft;
