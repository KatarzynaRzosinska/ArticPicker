import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { Artist } from 'src/app/shared/models/artist';
import { Pagination } from 'src/app/shared/models/pagiantion';

@Component({
  selector: 'app-artist-table',
  templateUrl: './artist-table.component.html',
  styleUrls: ['./artist-table.component.scss'],
})
export class ArtistTableComponent {
  @Output() query = new EventEmitter<{ q: string; page: number }>();
  @Output() selectedArtist = new EventEmitter<number>();
  @Input() artistList!: Array<Artist>;
  @Input() pagination!: Pagination;
  @Input() loading!: Subject<boolean>;
  @Input() searchText!: string;
  page: number = 1;

  rowClicked(row: Artist) {
    this.selectedArtist.emit(row.id);
  }
  serachArtist(query: string) {
    this.searchText = query.trim().toLocaleLowerCase();
    this.sendRequest();
  }

  onPaginateChange(event: PageEvent) {
    this.page = event.pageIndex + 1;
    this.sendRequest();
  }
  sendRequest() {
    this.query.emit({ q: this.searchText, page: this.page });
  }
}
