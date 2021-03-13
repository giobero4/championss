import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrevistas',
  templateUrl: './entrevistas.component.html',
  styleUrls: ['./entrevistas.component.css']
})
export class EntrevistasComponent implements OnInit {
  show:boolean = false;
  isShowing :boolean = false;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  mouseenter() {
  
    this.show= true;
  
}

  goDetail():void {
    this.router.navigate(['/detalle']);
   }

   goVideo():void {
    this.router.navigate(['/video']);
   }
}
