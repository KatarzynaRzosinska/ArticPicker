import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkRoutingModule } from './artwork-routing.module';
import { ArtworkComponent } from './artwork/artwork.component';
import { ArtworkCardComponent } from './artwork-card/artwork-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ArtworkComponent, ArtworkCardComponent],
  imports: [
    CommonModule,
    ArtworkRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    HttpClientModule,
  ],
})
export class ArtworkModule {}
