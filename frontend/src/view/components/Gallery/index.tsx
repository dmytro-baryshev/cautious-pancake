import styled from '@emotion/styled';
import { Image as ImageT } from 'types/image';
import Image from './components/Image';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 16px;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, auto);
  }
`;

type GalleryProps = { images: ImageT[] };

export default function Gallery({ images }: GalleryProps) {
  if (!images.length) {
    return <>There is no images to show</>;
  }

  return (
    <GalleryContainer>
      {images.map((image) => (
        <Image key={`${image.albumId}-${image.id}`} {...image} />
      ))}
    </GalleryContainer>
  );
}
