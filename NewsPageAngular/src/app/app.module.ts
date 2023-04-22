import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticleComponent} from './components/article/article.component';
import { FurtherInformationComponent } from './components/further-information/further-information.component';
import { NewsComponent } from './components/news/news.component';
import { EventsComponent } from './components/events/events.component';

// Components

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticleComponent,
    FurtherInformationComponent,
    NewsComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
