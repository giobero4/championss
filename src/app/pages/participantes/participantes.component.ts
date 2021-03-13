import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }


  goParticipacion():void {
    this.router.navigate(['/participacion']);
   }

   
   goEntrevista():void {
    this.router.navigate(['/entrevistas']);
   }
 
}
