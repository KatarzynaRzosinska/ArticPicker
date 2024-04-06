import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistPageComponent } from './artist-page/artist-page.component';
import { ArtistBrowserComponent } from './artist-browser/artist-browser.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { ArtistTableComponent } from './artist-table/artist-table.component';
import { ArtistRoutingModule } from './artist-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ArtistPageComponent,
    ArtistBrowserComponent,
    ArtistTableComponent,
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatListModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
  ],
})
export class ArtistModule {}
