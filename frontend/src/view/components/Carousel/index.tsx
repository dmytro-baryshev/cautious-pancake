import { useState } from 'react';
import Button from 'view/components/Button';
import { white, gray } from 'view/theme/colors';
import ArrowIcon from 'view/components/icons/Arrow';
import {
  StyledCarousel,
  CarouselNavigation,
  CarouselNavigationItem,
  ImageContainer,
  CarouselImage
} from './styled';
import { Image } from 'types/image';

type ArrowButtonProps = {
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  rightArrow?: boolean;
};

const ArrowButton = ({ disabled, onClick, rightArrow }: ArrowButtonProps) => (
  <Button disabled={disabled} onClick={onClick}>
    <ArrowIcon right={rightArrow} />
  </Button>
);

type CarouselProps = { images: Image[] };

export default function Carousel({ images }: CarouselProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const onPreviousClick = () => setActiveImageIdx((prevState) => prevState - 1);
  const onNextClick = () => setActiveImageIdx((prevState) => prevState + 1);
  const onNavigationItemClick = (idx: number) => setActiveImageIdx(idx);

  const NextButton = () => (
    <div style={{ position: 'absolute', top: '50%', right: 16 }}>
      <ArrowButton
        disabled={activeImageIdx === images.length - 1}
        onClick={onNextClick}
        rightArrow
      />
    </div>
  );

  const PrevButton = () => (
    <div style={{ position: 'absolute', top: '50%', left: 16 }}>
      <ArrowButton disabled={activeImageIdx === 0} onClick={onPreviousClick} />
    </div>
  );

  const carouselItems = Array(images.length).fill(0);
  const activeImage = images[activeImageIdx];

  if (!images.length) {
    return <>There is no images to show</>;
  }

  return (
    <StyledCarousel>
      <ImageContainer>
        <CarouselImage src={activeImage.url} alt={activeImage.title} />
      </ImageContainer>
      <PrevButton />
      <NextButton />
      <CarouselNavigation>
        {carouselItems.map((_, idx) => (
          <CarouselNavigationItem
            key={idx}
            style={{ background: idx === activeImageIdx ? white : gray }}
            onClick={() => onNavigationItemClick(idx)}
          />
        ))}
      </CarouselNavigation>
    </StyledCarousel>
  );
}
