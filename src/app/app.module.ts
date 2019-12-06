import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { ApiListComponent } from './components/api-list/api-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { DataTablesModule } from 'angular-datatables';
import { ApiInfoComponent } from './components/api-info/api-info.component';
import { AppRoutingModule } from './app-routing.module';
import { TykAPIService } from './services/tyk-api.service';
import { TykResolver } from './resolvers/tyk.resolver';


@NgModule({
  declarations: [
    AppComponent,
    ApiListComponent,
    NavbarComponent,
    ApiInfoComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TykAPIService, TykResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
