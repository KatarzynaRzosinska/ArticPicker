import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artwork } from 'src/app/shared/models/artwork';

@Component({
  selector: 'app-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.scss'],
})
export class ArtworkCardComponent  {
  @Output() randomClicked = new EventEmitter<void>();
  @Output() artistClicked = new EventEmitter<number>();
  @Input() currentArtwork: Artwork | null = null;
  @Input() imageUrl!: string;
  @Input() loading: boolean = false;

  getRandomArtClick() {
    this.randomClicked.emit();
  }

  artistInfoClick() {
    this.artistClicked.emit(this.currentArtwork?.artistId);
  }
}
