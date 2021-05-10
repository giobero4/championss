import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //public mbar = true;
  constructor(public router: Router) {}

  ngOnInit(): void {}

  // mouseover(): void {
  //   this.mbar = true;
  // }

  // public toggleSidebar(): void {
  //   if (this.mbar) {
  //     console.log('open sidebar');
  //   } else {
  //     console.log('closing sidebar');
  //   }
  // }

  goInter(): void {
    this.router.navigate(['/entrevistas']);
  }
}
