import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Artist, ArtistInfo, ArtistList } from '../models/artist';

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
        return {
          artistList: response.data.map(
            (record: any): Artist => ({ id: record.id, title: record.title })
          ),
          pagination: { ...response.pagination },
        };
      })
    );
  }

  getArtist(id: number): Observable<ArtistInfo> {
    const url = environment.urls.artistById(id);
    return this.http.get(url).pipe(
      map((response: any) => {
        return {
          id: id,
          title: response.data.title,
          description: response.data.description,
          birthDate: response.data.birth_date,
          deathDate: response.data.death_date,
        };
      })
    );
  }
}
