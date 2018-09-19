import React from 'react';
import Review from './Review.jsx';
import _ from 'lodash';
import styled from 'styled-components';

const ReviewListContainer = styled.ul`
  display: grid;
  grid-template-columns: 633px;
  width: 633px;
  margin: auto;

  :first-child {
    border-top: 1px solid #e6e6e6;
  }
`;

const ReviewList = (props) => (
  <div>
    <ReviewListContainer>
      {
        _.map(props.reviews, (review) => {
          return <Review key={review._id} review={review}/>;
        })
      }
    </ReviewListContainer>
  </div>
);

export default ReviewList;