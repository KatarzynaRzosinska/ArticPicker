import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouteConfigLoadEnd,
  Router,
  RouterModule,
  Routes,
} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { initializeArtist } from './artist/initializeArtist';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'artwork',
    loadChildren: () =>
      import('./artwork/artwork.module').then((module) => module.ArtworkModule),
  },
  {
    path: 'artist',
    loadChildren: () =>
      import('./artist/artist.module').then((module) => module.ArtistModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.events.subscribe(async (routerEvent) => {
      if (
        routerEvent instanceof RouteConfigLoadEnd &&
        routerEvent.route.path === 'artist'
      ) {
        console.log(routerEvent, this.router.config[2]);
        initializeArtist(this.router.config[2]);
        // initializeArtist(this.router.config, routerEvent.route.path)
      }
    });
  }
}
