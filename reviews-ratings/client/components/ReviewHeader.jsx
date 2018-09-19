import React from 'react';
import RatingBox from './header-components/RatingBox.jsx';
import Date from './header-components/Date.jsx';
import UpdatedFlag from './header-components/UpdatedFlag.jsx';
import CheckInsFlag from './header-components/CheckInsFlag.jsx';
import styled from 'styled-components';

const ReviewHeaderWrapper = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
`;

const HeaderUpper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, min-content);
  grid-column-gap: 6px;
  align-items: center;
`;

const ReviewHeader = ({ rating, date, updated, checkIns}) => (
  <ReviewHeaderWrapper>
    <HeaderUpper>
      <RatingBox rating={rating}/>
      <Date date={date}/>
      <UpdatedFlag updated={updated} />
    </HeaderUpper>
    <CheckInsFlag checkIns={checkIns}/>
  </ReviewHeaderWrapper>
);

export default ReviewHeader;