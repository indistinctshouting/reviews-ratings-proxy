import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const LinkText = styled.div`
  font-weight: bold;
  font-size: 12px;
  border-top: 1px solid #e6e6e6;
  :hover {
    text-decoration: underline;
  }
`;

const FirstLinkText = styled(LinkText)`
  border-top: none;
`;

const LinkWrapper = styled.li`
  display: grid;
  grid-template-columns: 14% 86%;
  padding-top: 3px;
  padding-bottom: 3px;
`;

const LinkContainer = styled.ul`
  padding-left: 15px;
  color: #0073bb;
`;

const ActionLinks = ({name}) => (
  <LinkContainer>
    <LinkWrapper>
      <div>
        <FontAwesomeIcon icon={faShareSquare}/>
      </div>
      <FirstLinkText>Share review</FirstLinkText>
    </LinkWrapper>
    <LinkWrapper>
      <div>
        <FontAwesomeIcon icon={faCode}/>
      </div>
      <LinkText>Embed review</LinkText>
    </LinkWrapper>
    <LinkWrapper>
      <div>
        <FontAwesomeIcon icon={faMedal}/>
      </div>
      <LinkText>Compliment</LinkText>
    </LinkWrapper>
    <LinkWrapper>
      <div>
        <FontAwesomeIcon icon={faComments}/>
      </div>
      <LinkText>Send message</LinkText>
    </LinkWrapper>
    <LinkWrapper>
      <div>
        <FontAwesomeIcon icon={faUserPlus}/>
      </div>
      <LinkText>Follow {name}</LinkText>
    </LinkWrapper>
  </LinkContainer>
);

export default ActionLinks;