import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'artwork',
    loadChildren: () => import('./artwork/artwork.module').then(module => module.ArtworkModule)
  },
  {
    path: 'artist',
    loadChildren: () => import('./artist/artist.module').then(module => module.ArtistModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
