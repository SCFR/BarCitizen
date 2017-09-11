import { CanvasBackgroundTile } from './canvas-background-tile';
import { Scene } from "three";

export class CanvasBackground {

    private _tiles: CanvasBackgroundTile[] = [];
    private _tileSize = 50;
    private _borderSize = 2;
    private _windowsWidth;
    private _windowsHeight;

    public constructor(private _scene: Scene, width = 1980, height: 1024) {
        this.update(width, height);
    }

    public update(width: number, height: number) {
        this._windowsHeight = height; this._windowsWidth = width;
        this.setRatio();
        this.ensureEnoughTiles();
    }


    public ensureEnoughTiles() {
        const needed = this.neededTiles;

        console.log(needed);

        while (this._tiles.length < needed) {
            const pos = this.getXYOf(this._tiles.length);
        }
    }

    public getXYOf(i): { x: number, y: number } {
        let x = Math.floor(i % this.cols) * this.totalTileSize;
        let y = Math.floor(i / this.cols) * this.totalTileSize;

        return { x: x, y: y };
    }

    public get totalTileSize(): number { return this._tileSize + this._borderSize; }

    public setRatio() {
        const r = 0.01;
        this._tileSize = Math.ceil(this._windowsWidth * r);
    }

    public get cols(): number {
        return (this._windowsWidth / this.totalTileSize);
    }

    public get rows(): number {
        return (this._windowsHeight / this.totalTileSize);
    }

    public get neededTiles(): number { return this.rows * this.cols }
}