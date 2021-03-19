
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campeonatos',
  templateUrl: './campeonatos.component.html',
  styleUrls: ['./campeonatos.component.css']
})
export class CampeonatosComponent implements OnInit {
  

  constructor(public router: Router) { }

  ngOnInit(): void {
  }



  goTour():void {
    this.router.navigate(['/torneo']);
   }
}
