import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { HomeComponent } from './components/home/home.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchdataComponent } from './components/fetchdata/fetchdata.component';
import { MakeService } from './services/make.service';

@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponent,
    HomeComponent,
    NavmenuComponent,
    CounterComponent,
    FetchdataComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,

  BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'vehicles/new', component: VehicleFormComponent },
      { path: 'home', component: HomeComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchdataComponent },
    ])
  ],
  providers: [MakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

