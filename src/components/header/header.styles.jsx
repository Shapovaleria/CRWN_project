import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.div`
  height: 70px;
  width: 96%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-right: 4%;
`;

export const StyledLogo = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const StyledOptions = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;