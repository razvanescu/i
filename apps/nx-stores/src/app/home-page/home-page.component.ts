import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stores-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  title = 'NX STORES PAGE';

  constructor() {
    console.log('Home page component from Stores');
  }

  ngOnInit(): void {}
}

function emptySwitch(param: number) {
  switch (param) {
    case 0:
      doSomething();
      break;
    default:
      // default clause should be the first or last one
      error();
      break;
    case 1:
      doSomethingElse();
      break;
  }
}
function doSomething() {
  throw new Error('Function not implemented.');
}

function doSomethingElse() {
  throw new Error('Function not implemented.');
}

function error() {
  throw new Error('funciton not implemented.');
}
