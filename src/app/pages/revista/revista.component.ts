import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-revista',
  templateUrl: './revista.component.html',
  styleUrls: ['./revista.component.css'],
  providers: [NgbCarouselConfig]

})
export class RevistaComponent implements OnInit {
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(config: NgbCarouselConfig,  public router: Router) {
    config.interval = 3000;
    config.keyboard = true;
    config.pauseOnHover = true;

   }

  ngOnInit(): void {
  }

  goFixture():void {
   this.router.navigate(['/fixture']);
  }

  openInter():void {
    this.router.navigate(['/entrevistas']);
   }
}
