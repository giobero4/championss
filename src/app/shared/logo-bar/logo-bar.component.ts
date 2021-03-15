import { Component, OnInit,AfterViewInit ,Renderer2, ElementRef ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-logo-bar',
  templateUrl: './logo-bar.component.html',
  styleUrls: ['./logo-bar.component.css']
})
export class LogoBarComponent implements OnInit, AfterViewInit {
  isShowing :boolean = true;

  //@ViewChild('iframe') iframe: ElementRef;

  constructor( private rendered: Renderer2) { 
   // this.iframe : 
  
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() { 

    console.log('iframee');
  
  }

   mouseenter():void {
      this.isShowing = true;
    
  }

   close(): void {
    console.log('hola');
    this.isShowing = false;

  }

}
