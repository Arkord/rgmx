import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Tile } from './tile';
import { TILES } from './mock-tiles';

@Injectable()
export class TileService {
    private tiles = TILES;
    private currentTiles = this.tiles;

    private behavior = new BehaviorSubject<Tile[]>(this.currentTiles)
    serviceTiles = this.behavior.asObservable();

    private messageSource = new BehaviorSubject<string>("Default message");
    currentMessage = this.messageSource.asObservable();
    
    constructor() {
        
    }
   
    changeMessage(message: string) {
        this.messageSource.next(message);
    }

    filterTiles(category: string) {
        this.currentTiles = this.tiles.filter(tile => tile.category == category);
        this.behavior.next(this.currentTiles);
        console.log(this.currentTiles);
    }

    resetTiles() {
        this.behavior.next(this.tiles);
    }

}