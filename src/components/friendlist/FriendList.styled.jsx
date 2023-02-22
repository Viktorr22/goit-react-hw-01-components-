import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  margin-top: 50px;
  margin-bottom: 50px;
    display: flex;
  flex-direction: column;

  width: 300px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  box-shadow: ${props => props.theme.shadows.regular}; 
 `;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 20px;
  padding: 8px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: ${props => props.theme.colors.lightGrey};
  box-shadow: ${props => props.theme.shadows.regular};
`;
export const FriendsStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    switch (props.statusFriend) {
        case true:
            return '#008000';
        case false:
            return '#ff0000';        
        default:
            return '#000000';
    }
 }
    };`;

export const FriendsAvatar = styled.img`
width: 48px`;

export const FriendsName = styled.p`
margin-bottom: 0;
font-size: 20px;
font-weight: 700;`;

