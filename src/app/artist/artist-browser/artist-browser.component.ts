import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil, throwError } from 'rxjs';
import { Artist } from 'src/app/shared/models/artist';
import { Pagination } from 'src/app/shared/models/pagiantion';
import { ArtistService } from 'src/app/shared/services/artist.service';
import { ComunicationService } from 'src/app/shared/services/comunication.service';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-artist-browser',
  templateUrl: './artist-browser.component.html',
  styleUrls: ['./artist-browser.component.scss'],
})
export class ArtistBrowserComponent implements OnInit, OnDestroy {
  artistList!: Array<Artist>;
  pagination!: Pagination;
  loading: Subject<boolean> = this.loadingService.isLoading;
  searchText: string = '';
  readonly unsubsribe$ = new Subject<void>();
  constructor(
    private artistService: ArtistService,
    private router: Router,
    private comunicationService: ComunicationService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.comunicationService
      .getSearchText()
      .pipe(takeUntil(this.unsubsribe$))
      .subscribe({
        next: (data: string) => {
          this.searchText = data;
          this.searchArtist(data, 1);
        },
        error: (error) => {
          throwError(() => new Error(error.message));
        },
      });
  }
  goToArtistPage(event: number) {
    this.router.navigate(['artist', event]);
  }

  setSearchQuery(event: { q: string; page: number }) {
    this.comunicationService.setSearchText(event.q);
    this.searchArtist(event.q, event.page);
  }

  searchArtist(q: string, page: number) {
    this.artistService
      .searchArtist(q, page)
      .pipe(takeUntil(this.unsubsribe$))
      .subscribe({
        next: (data) => {
          this.artistList = data.artistList;
          this.pagination = data.pagination;
        },
        error: (error) => {
          throwError(() => new Error(error.message));
        },
      });
  }

  ngOnDestroy(): void {
    this.unsubsribe$.next();
    this.unsubsribe$.complete();
  }
}
