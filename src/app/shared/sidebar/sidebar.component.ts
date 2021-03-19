import { Component, OnInit, AfterViewInit ,Renderer2, ElementRef ,ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @ViewChild('sidebar') sidebar: ElementRef;
  public mbar :boolean = true
  constructor(private rendered: Renderer2, private router:Router) { }
   
  ngOnInit(): void {
  }

  public onHome() {
    this.router.navigate(['/home']);
}

  ngAfterViewInit() { 
    this.toggleSidebar();
    console.log('logo');
  }

 

 public toggleSidebar() {
  if (this.mbar) {
  
    console.log("open sidebar");
    this.rendered.setStyle( this.sidebar.nativeElement, 'width', 30);
    //document.getElementById("main").style.marginLeft = "85px";
    this.mbar = false;

  } else {
    console.log("closing sidebar");
    this.rendered.setStyle( this.sidebar.nativeElement, 'width', 110);
    //document.getElementById("main").style.marginLeft = "250px";
    this.mbar = true;
  }


}



    
  



}
