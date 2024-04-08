import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistBrowserComponent } from './artist-browser/artist-browser.component';
import { ArtistPageComponent } from './artist-page/artist-page.component';

export const routes: Routes = [
  {
    path: '',
    component: ArtistBrowserComponent,
  },
  {
    path: ':id',
    component: ArtistPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistRoutingModule {}
