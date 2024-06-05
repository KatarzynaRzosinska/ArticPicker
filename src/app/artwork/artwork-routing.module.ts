import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtworkComponent } from './artwork/artwork.component';
import { ArtworkInfoComponent } from './artwork-info/artwork-info.component';

const routes: Routes = [
  {
    path: '',
    component: ArtworkComponent,
    children: [
      {
        path: ':id',
        component: ArtworkInfoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtworkRoutingModule {}
