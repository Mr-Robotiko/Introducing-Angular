import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CurrentPageService } from 'src/app/services/current-page.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('news')
  news?: ElementRef;

  @ViewChild('events')
  events?: ElementRef;

  activePageSub: Subscription = Subscription.EMPTY;
  constructor(private currentPageService: CurrentPageService) {}
  ngAfterViewInit(): void {
    this.activePageSub = this.currentPageService.activePage.subscribe(
      (activePage) => {
        if (activePage === 'news') {
          this.events?.nativeElement.classList.remove('active');
          this.news?.nativeElement.classList.add('active');
        } else if (activePage === 'events') {
          this.news?.nativeElement.classList.remove('active');
          this.events?.nativeElement.classList.add('active');
        }
      }
    );
  }
  ngOnDestroy(): void {
    this.activePageSub.unsubscribe();
  }
}
