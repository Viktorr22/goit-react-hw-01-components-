import PropTypes from 'prop-types';
import { FriendsList, FriendsItem, FriendsStatus, FriendsAvatar, FriendsName } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendsItem key={id}>
          <FriendsStatus statusFriend = {isOnline}>{isOnline}</FriendsStatus>
          <FriendsAvatar src={avatar} alt={name}></FriendsAvatar>
          <FriendsName>{name}</FriendsName>     
        </FriendsItem>     
        ))}
    </FriendsList>
 );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
