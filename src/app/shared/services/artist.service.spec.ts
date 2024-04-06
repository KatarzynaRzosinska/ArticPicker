import { ArtistService } from './artist.service';
import { HttpClient } from '@angular/common/http';
import { Artist, ArtistList } from '../models/artist';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArtistService', () => {
  let service: ArtistService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  const artist: Artist = {
    id: 1,
    title: 'Claude Monet',
  };
  const artistList: ArtistList = {
    artistList: [artist, { id: 2, title: 'Ellen Emmet Rand' }],
    pagination: {
      total: 18,
      limit: 10,
      offset: 0,
      total_pages: 2,
      current_page: 1,
    },
  };

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
  );

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ArtistService(httpClientSpy);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should return list of artists', () => {
    httpClientSpy.get.and.returnValue(
      of({ data: artistList.artistList, pagination: artistList.pagination })
    );
    service
      .searchArtist('monet', 1)
      .subscribe((data) => expect(data).toEqual(artistList));
  });

  it('should return artist info', () => {
    httpClientSpy.get.and.returnValue(of(artist));
    service.getArtist(1).subscribe({
      next: (data) => {
        expect(data).toEqual(artist);
      },
      error: () => {},
    });
  });
});
