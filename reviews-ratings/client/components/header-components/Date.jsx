import React from 'react';
import styled from 'styled-components';

const StyledDate = styled.div`
  font-weight: normal;
  color: #666;
  text-align: center;
`;

const Date = ({date}) => {
  date = date.slice(0, 10).split('-').map((val) => {
    if (val[0] === '0') {
      return val[1];
    }
    return val;
  });
  return (
    <StyledDate>
      {`${date[1]}/${date[2]}/${date[0]}`}
    </StyledDate>
  );
};

export default Date;