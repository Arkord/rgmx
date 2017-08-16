import { Component, OnInit } from '@angular/core';
import { MasonryOptions } from 'angular2-masonry';

import { Tile } from '../tile';
import { TileService } from '../tile.service';

@Component({
    selector: 'view-tiles',
    templateUrl: './tiles.component.html',
    styleUrls: ['./tiles.component.css']
})

export class TilesComponent implements OnInit{
    tiles: Tile[];
    message: string;

    constructor(private tileService: TileService) {}

    ngOnInit() {
        this.tileService.serviceTiles.subscribe(tiles => this.tiles = tiles);
        this.tileService.currentMessage.subscribe(message => this.message = message);
        console.log(this.tileService.serviceTiles);
    }

    public tileOptions: MasonryOptions = {
        gutter: 2
    }

    showData() {
        this.tileService.filterTiles("vegetables");
        console.log(this.tiles);
    }

    removeBrick() {
        
    }

   addBrick() {
       
   }

}