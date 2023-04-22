import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';
import { CurrentPageService } from 'src/app/services/current-page.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// Inputs from news and events component.
export class ArticleComponent implements OnChanges {
  @Input() imgSrc: string = '';
  @Input() date: string = '';
  @Input() headline: string = '';
  @Input() subTitle: string = '';
  @Input() informationHref: string = '';

  public src?: string;
  public dateString?: string;
  public headlineString?: string
  public subHeader?: string;
  public information?: string;
  constructor(
    private currentPageService: CurrentPageService
  ){
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["imgSrc"] && changes["imgSrc"].currentValue){
      this.src = changes["imgSrc"].currentValue
    }
    if (changes["date"] && changes["date"].currentValue){
      this.dateString = changes["date"].currentValue
    }
    if (changes["headline"] && changes["headline"].currentValue){
      this.headlineString = changes["headline"].currentValue
    }
    if (changes["subTitle"] && changes["subTitle"].currentValue){
      this.subHeader = changes["subTitle"].currentValue
    }
    if (changes["informationHref"] && changes["informationHref"].currentValue){
      this.information = changes["informationHref"].currentValue
    }
  }
}
