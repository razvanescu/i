import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderMagneticComponent } from './slider-magnetic/slider-magnetic.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SliderMagneticComponent,
    FooterComponent
  ],
  exports: [
    SliderMagneticComponent,
    FooterComponent
  ]
})
export class SharedUiModule {}
