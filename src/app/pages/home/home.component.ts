
import { Component, OnInit, AfterViewInit ,Renderer2, ElementRef ,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bar:boolean = true;
  currentSection = 'section1';

  @ViewChild('sidebar') sidebar: ElementRef;
  public mbar :boolean = true
  constructor(public router: Router,private rendered: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() { 
    this.toggleSidebar();
    console.log('logo');
    //this.mouseleave();
  }

 
  mouseenter() {
    
      this.bar = true;
    
  }

  mouseleave() {
    this.rendered.setStyle( this.sidebar.nativeElement, 'width', 30);
  }

 public toggleSidebar() {
  if (this.mbar) {
  
    console.log("open sidebar");
    this.rendered.setStyle( this.sidebar.nativeElement, 'width', 30);
    this.mbar = false;

  } else {
    console.log("closing sidebar");
    this.rendered.setStyle( this.sidebar.nativeElement, 'width', 110);
    this.mbar = true;
  }


}




  goInter():void {
    this.router.navigate(['/entrevistas']);
   }

   onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /*scrollTo(section:Element|null):any  {
      document!.querySelector('#' + section).scrollIntoView();
  
  }*/

  public onHome() {
    this.router.navigate(['/home']);
}

}
