import { HttpErrorResponse } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, EMPTY, throwError } from 'rxjs';
import { Artwork } from 'src/app/shared/models/artwork';
import { ImageService } from 'src/app/shared/services/image.service';

@Component({
  selector: 'app-artwork-info',
  templateUrl: './artwork-info.component.html',
  styleUrls: ['./artwork-info.component.scss']
})
export class ArtworkInfoComponent {
  imageUrl!: string;
  currentArtwork: Artwork | null = null;

  constructor(public imageService: ImageService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        console.log('dg',params)
        const id = params['id']; 
        this.getArtwork(id);
      }
    });
  }

  getArtwork(id:number) {
    this.currentArtwork = null;
    this.imageService
      .getArtwork(id)
      .pipe(
        catchError((e: HttpErrorResponse) => {
          if (e.status === 404) {
            return EMPTY;
          } else {
            return throwError(() => new Error(e.message));
          }
        })
      )
      .subscribe((artwork) => {
        this.getImage(artwork.imageId);
        this.currentArtwork = artwork;
      });
  }

  getImage(id: string) {
    this.imageUrl = this.imageService.getImageUrl(id);
  }

  goToArtistPage(event: number) {
    this.router.navigate(['artist', event]);
  }
}
