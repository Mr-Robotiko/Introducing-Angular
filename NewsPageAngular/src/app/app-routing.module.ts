import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { NewsComponent } from './components/news/news.component';

// Navigation of the tabs
const routes: Routes = [
  {
    path: "news", component: NewsComponent
  },
  {
    path: "events", component: EventsComponent
  },
  {
    path: '', component: NewsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
