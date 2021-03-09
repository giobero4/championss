import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participacion',
  templateUrl: './participacion.component.html',
  styleUrls: ['./participacion.component.css']
})
export class ParticipacionComponent implements OnInit {
  public isCollapsed = false;
  public isSecond = false;
  public isThird = false;
  constructor() { }

  ngOnInit(): void {
  }

}
