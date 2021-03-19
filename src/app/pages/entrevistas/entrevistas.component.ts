import { Component, OnInit ,Renderer2, ElementRef ,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrevistas',
  templateUrl: './entrevistas.component.html',
  styleUrls: ['./entrevistas.component.css']
})
export class EntrevistasComponent implements OnInit {
  show:boolean = false;

  constructor(public router: Router, private rendered: Renderer2) { }

  ngOnInit(): void {
  }

  



}
