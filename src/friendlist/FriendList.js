import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li class="item" key={id}>
          <span class="status">{isOnline}</span>
          <img class="avatar" src={avatar} alt={name} width="48" />
          <p class="name">{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
