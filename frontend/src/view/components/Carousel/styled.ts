import styled from '@emotion/styled';
import { lightBlue } from 'view/theme/colors';

export const StyledCarousel = styled.div`
  background: ${lightBlue};
  padding: 48px 72px;
  border-radius: 15px;
  position: relative;

  @media screen and (max-width: 600px) {
    padding: 24px 56px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 600px;

  @media screen and (max-width: 600px) {
    width: 200px;
    height: 200px;
  }
`;

export const CarouselImage = styled.img`
  @media screen and (max-width: 600px) {
    width: 200px;
    height: 200px;
  }
`;

export const CarouselNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 24px;
`;

export const CarouselNavigationItem = styled.div`
  width: 8px;
  height: 8px;
  transition: background-color 0.2s;
  border-radius: 10px;
  cursor: pointer;
`;
