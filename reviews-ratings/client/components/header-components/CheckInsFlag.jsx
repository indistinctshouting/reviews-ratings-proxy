import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledCheckIn = styled.div`
  font-weight: normal;
  font-size: 14px;
  color: #666;
`;

const CheckInsFlag = ({checkIns}) => {
  let style = {color: '#0077BC'};
  if (checkIns >= 5) {
    style.color = '#ECAB25';
  }
  if (checkIns > 0) {
    return (<StyledCheckIn><FontAwesomeIcon className="check-in-icon" style={style} icon={faCheckCircle}/> {checkIns} check-ins</StyledCheckIn>);
  } else {
    return null;
  }
};

export default CheckInsFlag;