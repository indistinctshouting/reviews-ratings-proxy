import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const UpdatedFlagWrapper = styled.div`
  display: list-item;
  list-style-type: disk;
  list-style-position: inside;
  width 175px;
  font-size: 12px;
  font-weight: 700;
  color: #666;
  .updated-icon {
    font-weight: 100;
    color: #f15c00;
  }
  .dot {
    font-size: 16px;
    width: 12px;
    margin-right: 6px;
  }
`;


const UpdatedFlag = ({updated}) => {
  if (updated) {
    return (
      <UpdatedFlagWrapper>
        <span className="dot">&sdot;</span><FontAwesomeIcon className="updated-icon" icon={faSync}/> Updated review
      </UpdatedFlagWrapper>
    );
  } else {
    return null;
  }
};

export default UpdatedFlag;