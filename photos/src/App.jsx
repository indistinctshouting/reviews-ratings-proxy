import React from 'react';
import $ from 'jquery';
import Photos from './Photos.jsx';
import app from './../public/app.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowUp);
library.add(faArrowDown);
library.add(faTruck);
library.add(faThLarge);
library.add(faShareSquare);
library.add(faFlag);


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      images: [],
    };

    this.getData = this.getData.bind(this);
    this.nextPhoto = this.nextPhoto.bind(this);
    this.previousPhoto = this.previousPhoto.bind(this);
    this.timedScroll = window.setInterval(this.nextPhoto, 8000);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    var context = this;
    var foodPics = [];
    const restId = window.location.pathname.split('/')[1];
    var getRandomInt = function(min, max) {
      return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
    };
    $.ajax({
      url: `/photos/${restId}`,
      method: 'GET',
      success: function(data) {
        for (var i = 0; i < data.length; i++) {
          foodPics.push(data[i].url);
        }
        context.setState({
          images: foodPics,
          name: data[0].name,
          location: data[0].location,
          avatar: data[0].url
        });
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

  nextPhoto() {
    var newArr = this.state.images;
    var hold = newArr.shift();
    newArr.push(hold);
    this.setState({
      images: newArr
    });
  }

  previousPhoto() {
    var newArr = this.state.images;
    var hold = newArr.pop();
    newArr.unshift(hold);
    this.setState({
      images: newArr
    });
  }


  render() {
    return (
      <div>
        <Photos info={this.state} nextPhoto={this.nextPhoto} previousPhoto={this.previousPhoto}/>
      </div>
    );
  }
}

export default App;
