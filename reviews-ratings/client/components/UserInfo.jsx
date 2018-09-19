import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 0 15px;
`;

const UserInfoWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 18px);
  grid-row-gap: 2px;
`;

const UserInfoText = styled.span`
  font-size: 12px;
  color: #666;
  font-weight: 400;
`;

const LocationText = styled.span`
  font-size: 1vw;
  font-weight: 700;
  color: #333;
  white-space: nowrap;
`;

const UserInfoTextBold = styled(UserInfoText)`
  font-weight: 700;
`;

const NameText = styled(UserInfoText)`
  font-size: 14px;
  line-height: 1.28571em;
  font-weight: 700;
  color: #0073bb;
  :hover {
    text-decoration: underline;
  }
`;

const EliteText = styled(UserInfoText)`
  font-weight: 700;
  color: #f15c00;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 9px;
  border-radius: 4px;
`;

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 18px 100%;
  grid-column-gap: 4px;
  .info-icon {
    width: 18px;
    height: 18px;
    margin-right: 4px;
    color: #f15c00;
  }
`;


const UserInfo = (props) => (
  <SidebarWrapper>
    <Avatar src={props.owner.picture} />
    
    <UserInfoWrapper>
      <div className="user-name">
        <NameText>
          {props.owner.name}
        </NameText>
      </div>
      <div className="user-location">
        <LocationText>
          {props.owner.location}
        </LocationText>
      </div>
      <InfoWrapper>
        <span className="info-icon">
          <FontAwesomeIcon icon={faUserFriends}/>
        </span>
        <UserInfoText>
          <UserInfoTextBold>{props.owner.friends}</UserInfoTextBold> Friends
        </UserInfoText>
      </InfoWrapper>
      <InfoWrapper>
        <span className="info-icon">
          <FontAwesomeIcon icon={faStar}/>
        </span>
        <UserInfoText>
          <UserInfoTextBold>{props.owner.reviewCount}</UserInfoTextBold> Reviews
        </UserInfoText>
      </InfoWrapper>
      <InfoWrapper>
        <span className="info-icon">
          <FontAwesomeIcon icon={faCamera} />
        </span>
        <UserInfoText>
          <UserInfoTextBold>{props.owner.photos}</UserInfoTextBold> Photos
        </UserInfoText>
      </InfoWrapper>
      <div>
        <EliteText>
          {props.owner.elite ? 'Elite \'18' : ''}
        </EliteText>
      </div>
    </UserInfoWrapper>
  </SidebarWrapper>
);

export default UserInfo;