import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistInfo } from 'src/app/shared/models/artist';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent {
  @Input() artistInfo!: Observable<ArtistInfo>

}
