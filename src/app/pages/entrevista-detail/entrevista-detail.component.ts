import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrevista-detail',
  templateUrl: './entrevista-detail.component.html',
  styleUrls: ['./entrevista-detail.component.css']
})
export class EntrevistaDetailComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goDetail():void {
    this.router.navigate(['/video']);
   }

}
