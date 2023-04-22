import { Component, OnChanges, SimpleChanges, ChangeDetectionStrategy, } from '@angular/core';
import { CurrentPageService } from 'src/app/services/current-page.service';

interface Event {
  imgSrc: string;
  date: string;
  headline: string;
  subTitle: string;
  informationHref: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent{
  events: Event[] = [
    {
      imgSrc: '../../assets/Images/Karneval.jfif',
      date : "23.01.2005",
      headline : 'Nach Corona wieder Karneval!',
      subTitle  : 'Köln feiert wieder Karneval und das härter als zuvor!',
      informationHref : '#',
    },
    {
      imgSrc: '../../assets/Images/Markt.jfif',
      date : "23.01.2005",
      headline : 'Kölner Markt dieses Wochenende eröffnent!',
      subTitle  : 'Dieses Wochenende wird der jährliche Markt eröffnent.',
      informationHref : '#',
    },
  ];
  constructor(
    private currentPageService: CurrentPageService
  ){
    this.currentPageService.activePage.next("events");
  }
  public eventTracker(_: number, article:Event): string {
    return article.headline
  }
}
