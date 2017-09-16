import { CanvasBackgroundTile } from './canvas-background-tile';
import { Component, OnInit, ElementRef, HostListener, ViewChildren } from '@angular/core';
import * as Rematrix from 'rematrix';
import * as Vivus from 'vivus';

declare var jQuery;
@Component({
  selector: 'scfr-barsc-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})

export class CanvasComponent implements OnInit {
  private _sharedRotate: { x: number, y: number } = { x: 0, y: 0 };

  @HostListener('mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    const rect = this._elRef.nativeElement.getBoundingClientRect();
    const maxAngle = 10;

    const x = 10 + (((rect.width / 2 - event.clientX) / (rect.width / 2)) * maxAngle);
    const y = - ((rect.height / 2 - event.clientY) / (rect.height / 2)) * maxAngle;

    this._sharedRotate = { x: x, y: y };
    this.doRotate();
  }

  constructor(private _elRef: ElementRef) { }

  ngOnInit() {
    this.handleHovers();
  }

  ngAfterViewInit() {
    this.doLoadAnimation();
  }

  public animate() {

  }


  public handleHovers() {
    const st1OnHover = (event) => {
      const target: HTMLElement = event.target;
      jQuery("#bg-" + target.id).addClass("hover");
    }

    const st1OnEndHover = (event) => {
      const target: HTMLElement = event.target;
      console.log("raymove", "#bg-" + target.id, jQuery("#bg-" + target.id));

      jQuery("#bg-" + target.id).removeClass("hover");
    }

    jQuery("svg .st1").each(function () {
      jQuery(this).on("mouseenter", st1OnHover);
      jQuery(this).on("mouseleave", st1OnEndHover);
    });
  }

  public doRotate() {
    const el: HTMLElement = document.getElementById("main-transform-holder");

    // Do the product
    const product = [Rematrix.rotateY(), Rematrix.rotateX()].reduce(Rematrix.multiply);
    // Set the new rotation
    el.style.transform = "rotateY(" + this._sharedRotate.x + "deg) rotateX(" + this._sharedRotate.y + "deg)";
  }

  public engageAnimation() {

  }

  public doLoadAnimation() {
    const animOpts = { duration: 100, type: "oneByOne" }

    const anim1 = new Vivus('svg2', animOpts).stop().reset();
    const anim2 = new Vivus('bg-svg2', animOpts).stop().reset();

    setTimeout(() => {
      anim1.play();
      anim2.play();
    }, 5000);
  }
}
