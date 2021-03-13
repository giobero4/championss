import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-participacion',
  templateUrl: './participacion.component.html',
  styleUrls: ['./participacion.component.css']
})
export class ParticipacionComponent implements OnInit {
  public isCollapsed = false;
  public isSecond = false;
  public isThird = false;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  
  goDetail():void {
    this.router.navigate(['/trayectoria']);
   }

}
