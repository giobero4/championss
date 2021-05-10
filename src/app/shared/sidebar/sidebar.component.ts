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
    const $this = this;
    setTimeout(() => {
      $this.showMenuSideBar();
    }, 1000);
    this.hideSideBarOnScroll();
  }

  public hideSideBarOnScroll(): void {
    window.addEventListener('scroll', () => {
      this.hideMenuSideBar();
    });
  }

  showMenuSideBar(): void {
    this.sideBarMenu.nativeElement.classList.add('sidebar-menu--open');
  }

  hideMenuSideBar(): void {
    if (window.scrollY > 120)
      this.sideBarMenu.nativeElement.classList.remove('sidebar-menu--open');
    else this.showMenuSideBar();
  }

  public navigateToSection(event: any): void {
    event.preventDefault();
    this.showMenuSideBar();
    const sectionNameToNavigate = event.currentTarget;
    document
      .getElementById(
        sectionNameToNavigate.attributes.href.nodeValue.substring(1)
      )
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}
