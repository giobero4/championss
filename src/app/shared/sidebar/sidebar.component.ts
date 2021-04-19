import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {
  showSideBarMenu = false;
  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.showSideBar();
  }

  public showSideBar(): void {
    this.showSideBarMenu = true;
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
