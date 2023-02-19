import styled from '@emotion/styled';


export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 300px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  box-shadow: ${props => props.theme.shadows.regular}}; 
  background: ${props => props.theme.colors.white}; 
`;
export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  overflow: hidden;
  background-color: ${props => props.theme.colors.lightGrey};
 `;
export const ImageCard = styled.img`
width: 100px;
border-radius: 50%;
 margin-bottom: 20px;
`;
export const TitleCard = styled.p`
font-size: 20px;
  font-weight: 700;
`;
export const TagCard = styled.p`
font-size: 16px;
color: ${props => props.theme.colors.bgGrey};
`;
export const LocationCard = styled.p`
font-size: 16px;
color: ${props => props.theme.colors.bgGrey};
`;
export const StatsList = styled.ul`
display: flex;
flex-wrap: nowrap;
width: 100%;
background-color: thistle;
`;

export const StatsItem = styled.li`
 border: 1px solid black; 
 width: 100px;
 height: auto;
 padding: 8px;
 display: flex;
 flex-direction: column;
 align-items: center;
 row-gap: 5px;
 `;

export const StatsLabel = styled.span`
font-size: 16px;
  font-weight: 700;

 `;
export const StatsQuantity = styled.span`
font-size: 12px;
color: ${props => props.theme.colors.bgGrey};
 `;






