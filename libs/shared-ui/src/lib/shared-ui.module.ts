import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderMagneticComponent } from './slider-magnetic/slider-magnetic.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SliderMagneticComponent,
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    SliderMagneticComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedUiModule {}
