import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, forkJoin } from 'rxjs';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';

type ProviderImageBase = {
  albumId: number;
  id: number;
  title: string;
};

type ProviderPhoto = ProviderImageBase & {
  url: string;
  thumbnailUrl: string;
};

type ProviderImage = ProviderImageBase & { path: string };

type Image = {
  albumId: number;
  id: number;
  title: string;
  url: string;
};

@Injectable()
export class ImagesService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  private parseProviderImage(image: ProviderImage): Image {
    return {
      id: image.id,
      title: image.title,
      url: image.path,
      albumId: image.albumId,
    };
  }

  private parseProviderPhoto(photo: ProviderPhoto): Image {
    return {
      id: photo.id,
      title: photo.title,
      url: photo.url,
      albumId: photo.albumId,
    };
  }

  create(createImageDto: CreateImageDto) {
    return 'This action adds a new image';
  }

  async findAll(): Promise<Image[]> {
    const imageProviderUrl = this.configService.get('app.imageService.url');
    const imagesUrl = `${imageProviderUrl}/images`;
    const photosUrl = `${imageProviderUrl}/photos`;

    const [images, photos] = await firstValueFrom(
      forkJoin([
        this.httpService.get(imagesUrl),
        this.httpService.get(photosUrl),
      ]),
    );

    const parsedImages = images.data[0].map(this.parseProviderImage);
    const parsedPhotos = photos.data[0].map(this.parseProviderPhoto);
    return [...parsedImages, ...parsedPhotos].flat();
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
