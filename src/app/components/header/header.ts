import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public router = inject(Router);
  constructor() {
    console.log(this.router.url);
  }
  endGame() {
    this.router.navigate(['homw']);
  }
}
