import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ImageService } from 'src/app/shared/services/image.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss'],
})
export class ArtworkComponent {
  loading: Subject<boolean> = this.loadingService.isLoading;

  constructor(
    public imageService: ImageService,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  getRandomArtClick() {
    const randomId = this.getRandomArtwork();
    this.router.navigate(['artwork', randomId]);
  }

  getRandomArtwork() {
    this.imageService.getRandomArtwork().subscribe((data) => console.log(data));
  }
}
