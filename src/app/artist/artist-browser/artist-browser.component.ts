import { Component } from '@angular/core';
import { Artist } from 'src/app/shared/models/artist';
import { Pagination } from 'src/app/shared/models/pagiantion';
import { ArtistService } from 'src/app/shared/services/artist.service';

@Component({
  selector: 'app-artist-browser',
  templateUrl: './artist-browser.component.html',
  styleUrls: ['./artist-browser.component.scss'],
})
export class ArtistBrowserComponent {
  artistList!: Array<Artist>;
  pagination!: Pagination;

  constructor(public artistService: ArtistService) {}

  goToArtistPage(event: number) {
    console.log(event);
  }

  searchArtist(event: { q: string; page: number }) {
    this.artistService.searchArtist(event.q, event.page).subscribe((data) => {
      console.log(data.artistList);
      this.artistList = data.artistList;
      this.pagination = data.pagination;
    });
  }
}
