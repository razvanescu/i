import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'store-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerSize: number;

  constructor() {
    this.headerSize = 10;
  }

  ngOnInit(): void {
    this.headerSize = 20;
  }
}
