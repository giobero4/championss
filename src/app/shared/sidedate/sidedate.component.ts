
import { Component, OnInit,AfterViewInit ,Renderer2, ElementRef ,ViewChild} from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sidedate',
  templateUrl: './sidedate.component.html',
  styleUrls: ['./sidedate.component.css']
})
export class SidedateComponent implements OnInit ,AfterViewInit {
  @ViewChild('side') side: ElementRef;

  constructor(public router: Router,private rendered: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() { 
  
    this.open();
  
  
  }

  open(): void {
    setTimeout(()=>{ 
      this.rendered.setStyle( this.side.nativeElement, 'right', 0);
    }, 975);
   
  }

  goDetail():void {
    this.router.navigate(['/detalle']);
   }


}
