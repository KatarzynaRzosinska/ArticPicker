import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComunicationService {
  searchText$: ReplaySubject<string> = new ReplaySubject();

  getSearchText() {
    return this.searchText$.asObservable();
  }

  setSearchText(text: string) {
    this.searchText$.next(text);
  }
}
