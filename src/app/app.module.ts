import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonHeaderModule } from '@scfr/common-header';
import { AppComponent } from './app.component';
import { HeaderImageComponent } from './components/header-image/header-image.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { BackgroundComponent } from './components/background/background.component';
import { HolorgbDirective } from './directives/holorgb.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderImageComponent,
    CanvasComponent,
    BackgroundComponent,
    HolorgbDirective
  ],
  imports: [
    BrowserModule,
    CommonHeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
