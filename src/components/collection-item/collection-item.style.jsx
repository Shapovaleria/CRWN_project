import styled from 'styled-components';
import { StyledCustomButton } from '../custom-button/custom-button.styles';


export const StyledImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const StyledCustomButtonInsideItem = styled(StyledCustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 225px;
  display: none;
`;

export const StyledCollectionItem = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin: 0 3px 30px 3px;
  cursor: pointer;

  &:hover {
    ${StyledCustomButtonInsideItem} {
      opacity: 0.85;
      display: flex;
      width: 90%;
    };

    ${StyledImage} {
      opacity: 0.8
    }
  }   
`;

export const StyledFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const StyledName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const StyledPrice = styled.span`
   width: 10%;
`;
