import { Component } from '@angular/core';
import { CurrentPageService } from 'src/app/services/current-page.service';

// Datatypes for the articles Array
interface Articel {
  imgSrc: string;
  date: string;
  headline: string;
  subTitle: string;
  informationHref: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  // Recieves ervery information
  articles: Articel[] =  [
    {
      imgSrc: '../../assets/Images/politik.jfif',
      date : "23.01.2005",
      headline : 'Einladung zur Jahrespressekonferenz',
      subTitle  : 'Olaf Scholz hält Rede im Bundestag.',
      informationHref : '#',
    },
    {
      imgSrc: '../../assets/Images/FC.png',
      date : "23.01.2005",
      headline : '1FC Köln gewinnt!',
      subTitle  : '5:2 gegen FC Bayer München.',
      informationHref : '#',
    },
    {
      imgSrc: '../../assets/Images/Schwanstein.jfif',
      date : "23.01.2005",
      headline : 'Schloss Neuschwansteig rennoviert!',
      subTitle  : '15 Jahre lang wurde am Märchenschloss rennoviert.',
      informationHref : '#',
    },
  ];

  //Navigation of the tabs
  constructor(
    private currentPageService: CurrentPageService
  ){
    this.currentPageService.activePage.next("news");
  }
  public articleTracker(_: number, article:Articel): string {
    return article.headline
  }
}
