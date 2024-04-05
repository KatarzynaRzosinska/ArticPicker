import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, EMPTY, throwError } from 'rxjs';
import { Artwork } from 'src/app/shared/models/artwork';
import { ImageService } from 'src/app/shared/services/image.service';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss'],
})
export class ArtworkComponent {
  imageUrl!: string;
  currentArtwork: Artwork | null = null;
  loading: boolean = false;

  constructor(public imageService: ImageService) {}

  getRandomArt() {
    const randomId = Math.floor(Math.random() * 1000000);
    this.currentArtwork = null;
    this.loading = true;
    this.imageService
      .getArtwork(randomId)
      .pipe(
        catchError((e: HttpErrorResponse) => {
          console.log('error', e);
          if (e.status === 404) {
            this.getRandomArt();
            return EMPTY;
          } else {
            return throwError(() => new Error(e.message));
          }
        })
      )
      .subscribe((artwork) => {
        this.getImage(artwork.imageId);
        this.currentArtwork = artwork;
        this.loading = false;
      });
  }

  getImage(id: string) {
    this.imageUrl = this.imageService.getImageUrl(id);
  }
}
