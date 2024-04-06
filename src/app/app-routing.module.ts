import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworkModule } from './artwork/artwork.module';
import { ArtistModule } from './artist/artist.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'artwork',
    loadChildren: () => ArtworkModule,
  },
  {
    path: 'artist',
    loadChildren: () => ArtistModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
