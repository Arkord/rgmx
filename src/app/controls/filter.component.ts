import { Component, OnInit } from '@angular/core';
import { TilesComponent } from '../views/tiles.component';

import { Tile } from '../tile';
import { TileService } from '../tile.service';

@Component({
    selector: 'control-filter',
    templateUrl: './filter.component.html',
    styleUrls: [ '../../assets/css/bootstrap.min.css']
})

export class FilterComponent implements OnInit {
    search: string;
    tiles: Tile[];
    message: string;

    constructor(private tileService: TileService) {}

    ngOnInit() {
        this.tileService.serviceTiles.subscribe(tiles => this.tiles = tiles);
        this.tileService.currentMessage.subscribe(message => this.message = message);
    }

    onClick() {
        //this.tileService.changeMessage("Another message");
        //console.log("Changing...");
        this.tileService.filterTiles(this.search);
        console.log(this.tiles);
        //console.log(this.tileService.tiles);

        //this.tileService.tiles = this.tileService.tiles.filter(tile => tile.category.toLowerCase() == this.search.toLowerCase());

        //console.log(this.tileService.tiles);
    }
}