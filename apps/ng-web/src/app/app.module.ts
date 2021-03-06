import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AdAuthenticationComponent } from './ad-authentication/ad-authentication.component';
import { ContextComponent } from './context/context/context.component';
import { ButtonComponent } from '../atom/button/button.component';

const routes: Routes = [
  {
    path: 'ad/authentication',
    component: AdAuthenticationComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AdAuthenticationComponent,
    ContextComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
