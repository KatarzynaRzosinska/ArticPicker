import { ImageService } from './image.service';
import { HttpClient } from '@angular/common/http';
import { Artwork } from '../models/artwork';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ImageService', () => {
  let service: ImageService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  const artwork: Artwork = {
    id: 1,
    imageId: 'abcd_1',
    title: 'Test Art',
    artistDisplay: 'Anna Novak',
    artistTitle: 'Anna Novak',
    mediumDisplay: 'paper',
    styleTitle: 'artdeco',
    inscriptions: '',
    dimensions: '45.5 \u00d7 37.5 cm (17 15/16 \u00d7 14 13/16 in.)',
    dateDisplay: '20024',
    classification: 'gouache',
    publicDomain: true,
    placeOfOrigin: 'Poland',
    typeTitle: 'painting',
    altText: 'a lovely picture',
  };

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ImageService(httpClientSpy);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return artwork', () => {
    httpClientSpy.get.and.returnValue(of(artwork));
    service.getArtwork(1).subscribe({
      next: (data) => {
        expect(data).toEqual(artwork);
      },
      error: () => {},
    });
  });

  it('should return url of the artwork', () => {
    const artURL = service.getImageUrl(artwork.imageId);
    expect(artURL).toEqual(
      'https://www.artic.edu/iiif/2/abcd_1/full/843,/0/default.jpg'
    );
  });
});
