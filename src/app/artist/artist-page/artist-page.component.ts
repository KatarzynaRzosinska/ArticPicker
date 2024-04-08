import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, concatMap } from 'rxjs';
import { ArtistInfo } from 'src/app/shared/models/artist';
import { ArtistService } from 'src/app/shared/services/artist.service';

@Component({
  selector: 'app-artist-page',
  templateUrl: './artist-page.component.html',
  styleUrls: ['./artist-page.component.scss'],
})
export class ArtistPageComponent implements OnInit {
  artistInfo!: Observable<ArtistInfo>;
  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService
  ) {}

  ngOnInit(): void {
    this.artistInfo = this.route.params.pipe(
      concatMap((params) => this.artistService.getArtist(params['id']))
    );
  }
}
