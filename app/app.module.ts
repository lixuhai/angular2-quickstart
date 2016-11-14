import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { HeroSearchComponent } from './hero-search.component'
import { DashboardComponent } from './dashboard.component';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HeroesModule,
    routing
  ],

  declarations: [
    AppComponent,
    HeroSearchComponent,
    DashboardComponent
  ],

  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],

  bootstrap: [ AppComponent ]

})
export class AppModule { }

