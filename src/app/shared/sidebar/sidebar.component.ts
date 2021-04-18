import {
  Component,
  OnInit,
  AfterViewInit,
  Renderer2,
  ElementRef,
  ViewChild
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sideBarMenu')
  sidebarMenu!: ElementRef;
  constructor(private rendered: Renderer2, private router: Router) {}

  ngOnInit(): void {}

  public onHome() {
    this.router.navigate(['/home']);
  }

  ngAfterViewInit() {
    this.showSideBar();
  }

  public showSideBar() {
    var $this = this;
    setTimeout(function() {
      $this.sidebarMenu.nativeElement.classList.add('sidebar-menu--open');
    }, 200);
  }
}
