import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Artwork } from 'src/app/shared/models/artwork';

@Component({
  selector: 'app-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.scss'],
})
export class ArtworkCardComponent {
  @Output() clicked = new EventEmitter<void>();
  @Input() currentArtwork: Artwork | null = null;
  @Input() imageUrl!: string;
  @Input() loading: boolean = false;

  getRandomArtClick() {
    this.clicked.emit();
  }
}
