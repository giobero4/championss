import { Component, OnInit, AfterViewInit ,Renderer2, ElementRef ,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrevistas',
  templateUrl: './entrevistas.component.html',
  styleUrls: ['./entrevistas.component.css']
})
export class EntrevistasComponent implements OnInit {
  show:boolean = false;
  isShowing :boolean = false;
  @ViewChild('bar') bar: ElementRef;
  constructor(public router: Router, private rendered: Renderer2) { }

  ngOnInit(): void {
  }

  
  ngAfterViewInit() { 
  
    this.open();
    console.log('logo');
  
  }
  mouseenter() {
  
    this.show= true;
  
}

  goDetail():void {
    this.router.navigate(['/detalle']);
   }

   open(): void {
    setTimeout(()=>{ 
      this.rendered.setStyle( this.bar.nativeElement, 'right', 0);
    }, 975);
   
  }


   goVideo():void {
    this.router.navigate(['/video']);
   }

}
