import { Component, OnInit,AfterViewInit ,Renderer2, ElementRef ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-logo-bar',
  templateUrl: './logo-bar.component.html',
  styleUrls: ['./logo-bar.component.css']
})
export class LogoBarComponent implements OnInit, AfterViewInit {
  
  @ViewChild('someInput') someInput: ElementRef;

  constructor( private rendered: Renderer2) { 
  
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() { 
  
    this.open();
    console.log('logo');
  
  }


  open(): void {
    setTimeout(()=>{ 
      this.rendered.setStyle( this.someInput.nativeElement, 'left', 0);
    }, 975);
   
  }


   close(): void {
    this.rendered.removeStyle(this.someInput.nativeElement, 'left', 0);

  }

}
