import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTopComponent } from './header-top/header-top.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeaderTopComponent
  ],
  exports: [
    HeaderTopComponent
  ],
})
export class HeaderModule {}
