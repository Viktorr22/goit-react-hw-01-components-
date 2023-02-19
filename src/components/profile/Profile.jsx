import PropTypes from 'prop-types';
import { Card, ImageBox, ImageCard, TitleCard, TagCard, LocationCard, StatsList, StatsItem, StatsLabel, StatsQuantity } from './Profile.styled';

export function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <Card>
      <ImageBox>
        <ImageCard src={avatar} alt={username}></ImageCard>
        <TitleCard>{username}</TitleCard>
        <TagCard>{tag}</TagCard>
        <LocationCard>{location}</LocationCard>     
      </ImageBox>       
      <StatsList>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
         <StatsQuantity>{followers}</StatsQuantity>         
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
         <StatsQuantity>{views}</StatsQuantity>         
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
         <StatsQuantity>{likes}</StatsQuantity>        
        </StatsItem>
      </StatsList>    
    </Card>
     
    
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
