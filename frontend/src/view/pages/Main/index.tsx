import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { fetchImages as fetchApiImages } from 'services/api/images';
import Gallery from 'view/components/Gallery';
import Carousel from 'view/components/Carousel';
import Switch from 'view/components/Switch';
import Loader from 'view/components/Loader';
import { SwitchContainer, Page, PageContent } from './styled';

enum Layout {
  Gallery = 'gallery',
  Carousel = 'carousel'
}

function MainPage() {
  const [loading, setLoading] = useState(true);
  const [layout, setLayout] = useState(Layout.Gallery);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const images = await fetchApiImages();
        setImages(images);
      } catch (err) {
        alert((err as AxiosError).message);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  const onLayoutChange = () =>
    setLayout((prevState) =>
      prevState === Layout.Gallery ? Layout.Carousel : Layout.Gallery
    );

  if (loading) {
    return <Loader />;
  }

  const isGalleryLayout = layout === Layout.Gallery;

  return (
    <Page>
      <SwitchContainer>
        <Switch
          label="Carousel view"
          onClick={onLayoutChange}
          checked={!isGalleryLayout}
        />
      </SwitchContainer>
      <PageContent>
        {isGalleryLayout ? (
          <Gallery images={images} />
        ) : (
          <Carousel images={images} />
        )}
      </PageContent>
    </Page>
  );
}

export default MainPage;
