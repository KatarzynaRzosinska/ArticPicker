import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Artist, ArtistList } from '../models/artist';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  constructor(private http: HttpClient) {}

  searchArtist(query: string, page: number): Observable<ArtistList> {
    const params = {
      q: query,
      size: 10,
      page: page,
    };
    const url = environment.urls.artist;
    return this.http.get<ArtistList>(url, { params }).pipe(
      map((response: any) => {
        console.log(response.data, response.pagiantion);
        return {
          artistList: response.data.map(
            (record: any): Artist => ({ id: record.id, title: record.title })
          ),
          pagination: { ...response.pagination },
        };
      })
    );
  }

  getArtist(id: number): Observable<any> {
    const url = environment.urls.artistById(id);
    return this.http.get(url);
  }
}
