import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworkModule } from './artwork/artwork.module';

const routes: Routes = [
  {
    path: 'artwork',
    loadChildren: () => ArtworkModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
