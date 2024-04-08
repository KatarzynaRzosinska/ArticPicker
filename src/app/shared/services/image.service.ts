import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Artwork } from '../models/artwork';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}

  getArtwork(id: number): Observable<Artwork> {
    const url = environment.urls.artwork(id);
    return this.http.get<Artwork>(url).pipe(
      map((response: any): Artwork => {
        return {
          id: response.data.id,
          imageId: response.data.image_id,
          title: response.data.title,
          artistDisplay: response.data.artist_display,
          artistTitle: response.data.artist_title,
          artistId: response.data.artist_id,
          artistIds: response.data.artist_ids,
          mediumDisplay: response.data.medium_display,
          styleTitle: response.data.style_title,
          inscriptions: response.data.inscriptions,
          dimensions: response.data.dimensions,
          dateDisplay: response.data.date_display,
          classification: response.data.classification_title,
          publicDomain: response.data.is_public_domain,
          placeOfOrigin: response.data.place_of_origin,
          typeTitle: response.data.artwork_type_title,
          altText: response.data.thumbnail.alt_text,
        };
      })
    );
  }

  getImageUrl(id: string): string {
    return environment.urls.imageUrl(id);
  }
}
