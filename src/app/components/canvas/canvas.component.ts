import { CanvasBackgroundTile } from './canvas-background-tile';
import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'scfr-barsc-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  private _sharedRotate: { x: number, y: number } = { x: 0, y: 0 }

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    const rect = this._elRef.nativeElement.getBoundingClientRect();
    const maxAngle = 3;

    const x = ((rect.width / 2 - event.clientX) / (rect.width / 2)) * maxAngle;
    const y = - ((rect.height / 2 - event.clientY) / (rect.height / 2)) * maxAngle;

    this._sharedRotate = { x: x, y: y };
    this.doRotate(); 
  }

  constructor(private _elRef: ElementRef) { }

  ngOnInit() {

  }

  public animate() {

  }

  public doRotate() {
    const els: HTMLElement[] = this._elRef.nativeElement.getElementsByTagName('svg');

    for (let el of els) {
      el.style.transform = "rotate3d(1, 1, 0, 30deg) rotateY(" + this._sharedRotate.x + "deg) rotateX(" + this._sharedRotate.y + "deg)";
    }

  }
}
