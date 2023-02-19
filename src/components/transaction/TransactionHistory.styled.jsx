import styled from '@emotion/styled';

export const BaseTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  background-color: ${props => props.theme.colors.lightGrey};
  text-align: center;

  box-shadow: ${props => props.theme.shadows.regular};
`;

export const THead = styled.thead`
  background-color: #008080;
  text-transform: uppercase;
 
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.bgGrey};
  color: ${props => props.theme.colors.bgGrey};
`;

export const Th = styled.th`
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.white};
`;

export const Tr = styled.tr`
  &:nth-of-type(odd) {
    background-color: ${props => props.theme.colors.white};
  }
`;

