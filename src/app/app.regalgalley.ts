import { Component } from '@angular/core';

import { Tile } from './tile';
import { TileService } from './tile.service';

@Component({
    selector: 'app-regalgallery',
    templateUrl: './app.regalgallery.html',
    styleUrls: [ '../assets/css/bootstrap.min.css'],
    providers: [TileService]
})

export class RegalGalleryComponent {
  

}