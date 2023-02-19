import styled from '@emotion/styled';


export const StatisticSection = styled.section`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  width: 300px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;

  box-shadow: ${props => props.theme.shadows.regular}}; 
  background-color: #fff;  
`;

export const StatisticTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  text-align: center;
  margin-top: 30px; 
`;

export const StatisticsList = styled.ul`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;   
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticItem = styled.li`
 border: 1px solid black; 
 width: 60px;
 height: auto;
 padding: 8px;
 display: flex;
 flex-direction: column;
 align-items: center;
 row-gap: 5px;
 background-color: ${props => {
    return getRandomHexColor();
 }
    };
 `;

export const StatisticLabel = styled.span`
color: ${props => props.theme.colors.white};
font-size: 12px;
`;

export const StatisticPercentage = styled.span`
color: ${props => props.theme.colors.white};
font-size: 16px;
`;