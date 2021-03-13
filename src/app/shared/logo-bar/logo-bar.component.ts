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
    // TODO: ? Con esto aqui tiene todo el iframe Object
    // ? y puedes modificarlo agregando o quitando
    console.log('iframee'/*, this.iframe.nativeElement*/);
    //this.isShowing = true;
  
  
  }

  mouseenter() {
  
      this.isShowing = true;
    
  }

  public close(): void {
    console.log('hola');
    this.isShowing = false;

  }

}
