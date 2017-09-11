import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[scfrBarscHolorgb]'
})
export class HolorgbDirective {
  private _bg: Element;

  constructor(private _elRef: ElementRef) {
  }

  ngAfterViewInit() {
    this.initBg();
  }

  private initBg() {
    if (!this._bg) {
      this._bg = this._elRef.nativeElement.cloneNode(true);
      this._bg.removeAttribute("scfrBarscHolorgb");
      console.log(this._bg);
      this.initBg();


      this._bg.classList.add("holo");
      this.changeId(this._bg);
      document.getElementById("main-canvas").appendChild(this._bg);
    }

  }

  private changeId(el: Element) {
    if (el) {
      el.id = "bg-" + el.id;

      if (el.children)
        [].forEach.call(el.children, (child) => {
          this.changeId(child);
        });
    }
  }



}
