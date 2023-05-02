import styled from '@emotion/styled';
import { Image as ImageT } from 'types/image';
import { lightBlue } from 'view/theme/colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${lightBlue};
  border-radius: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  height: 150px;
  object-fit: cover;
`;

const Description = styled.div`
  text-align: center;
  padding: 10px;
`;

export default function GalleryImage(image: ImageT) {
  return (
    <Container>
      <Image src={image.url} />
      <Description>{image.title}</Description>
    </Container>
  );
}
