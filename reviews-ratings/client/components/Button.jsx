import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinAlt } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faGrinStars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledButtonShared = styled.button`
  padding: 5px 8px;
  border-radius: 3px;
  font-size: 12px;
  line-height: 1.5em;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
  border: 1px solid;
`;

const StyledButton = styled(StyledButtonShared)`
  font-weight: 400;
  color: #666;
  border-color: #ccc;
  background-color: #f7f7f7;
  background: linear-gradient(#fff,#f7f7f7);
  :hover {
    background-color: #fff;
  }
`;

const StyledButtonAlt = styled(StyledButtonShared)`
  color: white;
  text-shadow: rgba(0,0,0,0.2) 0 -1px;
  border-color: #007abe;
  background: #0097ec;
  font-weight: 700;
  background-color: none;
  :hover {
    background-color: none;
  }
`; 

const BoldButtonText = styled.b`
  font-weight: 700;
`;

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      count: this.props.count
    };
    this.handleButtonClick = this.props.handleButtonClick.bind(this);
  }

  render() {
    let name = this.props.name[0].toUpperCase() + this.props.name.slice(1);
    let count = this.state.count || '';
    let icon;
    if (name === 'Useful') {
      icon = faLightbulb;
    } else if (name === 'Funny') {
      icon = faGrinAlt;
    } else {
      icon = faGrinStars;
    }
    if (this.state.clicked) {
      return (
        <StyledButtonAlt onClick={() => { this.handleButtonClick(this.state.count, this.state.clicked); }}>
          <FontAwesomeIcon icon={icon}/> <b>{name}</b> {count}
        </StyledButtonAlt>
      );
    } else {
      return (
        <StyledButton onClick={() => { this.handleButtonClick(this.state.count, this.state.clicked); }}>
          <FontAwesomeIcon icon={icon}/> <BoldButtonText>{name}</BoldButtonText> {count}
        </StyledButton>
      );
    }
  }
}