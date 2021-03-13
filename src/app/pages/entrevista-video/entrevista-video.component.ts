import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrevista-video',
  templateUrl: './entrevista-video.component.html',
  styleUrls: ['./entrevista-video.component.css']
})
export class EntrevistaVideoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goInterview():void {
    this.router.navigate(['/detalle']);
   }
}
