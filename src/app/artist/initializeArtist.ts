import { Route } from '@angular/router';
import { ArtistGroupComponent } from './artist-group/artist-group.component';

export function initializeArtist(
  config: Route

): () => Promise<Route> {
  return () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let configIsChanged = false;
        console.log('hi',config)
        config.children!.push(
          {
            path: 'artist/dynamic',
            component: ArtistGroupComponent
          }
        );
        configIsChanged = true;
        if (configIsChanged) {
          resolve(config);
        } else{
          reject();
        }
      }, 0);
    })



    



}
