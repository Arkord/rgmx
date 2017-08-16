import { TileService } from './tile.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RegalGalleryComponent } from './app.regalgalley';
import { FilterComponent } from './controls/filter.component';
import { MasonryModule } from 'angular2-masonry';
import { TilesComponent} from './views/tiles.component';

@NgModule({
  declarations: [
    RegalGalleryComponent,
    FilterComponent,
    TilesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MasonryModule
  ],
  providers: [
    TileService
  ],
  bootstrap: [
    RegalGalleryComponent
  ]
})
export class AppModule { }
