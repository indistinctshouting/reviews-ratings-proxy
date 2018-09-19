import React from 'react';
import Button from './Button.jsx';
import _ from 'lodash';
import styled from 'styled-components';

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 280px;
  height: 30px;
  grid-column-gap: 8px;
`;

const FooterContainer = styled.div`
  display: grid;
  grid-template-rows: 24px 30px;
`;

const FooterText = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #666;
`;

export default class VoteButtons extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleButtonClick(count, clicked) {
    if (!count && !clicked) {
      count = 1;
    } else if (!clicked) {
      count += 1;
    } else if (clicked) {
      count -= 1;
    }
    this.setState({
      count,
      clicked: !clicked
    });
  }

  render() {
    return (
      <FooterContainer>
        <FooterText>
          Was this review ...?
        </FooterText>
        <ButtonsWrapper>
          {
            _.map(this.props.votes, (value, key) => {
              return <Button name={key} count={value} handleButtonClick={this.handleButtonClick}/>;
            })
          }
        </ButtonsWrapper>
      </FooterContainer>
    );
  }
}