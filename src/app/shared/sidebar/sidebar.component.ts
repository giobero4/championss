import {
  Component,
  AfterViewInit,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('sideBarMenu')
  sideBarMenu!: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.showSideBar();
  }

  public showSideBar(): void {
    const $this = this;
    setTimeout(() => {
      $this.sideBarMenu.nativeElement.classList.add('sidebar-menu--open');
    }, 200);
  }

  public navigateToSection(event: any): void {
    event.preventDefault();
    const sectionNameToNavigate = event.currentTarget;
    document
      .getElementById(
        sectionNameToNavigate.attributes.href.nodeValue.substring(1)
      )
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}
