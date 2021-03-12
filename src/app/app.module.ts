import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CollectesComponent } from './collectes/collectes.component';
import { ClientsComponent } from './clients/clients.component';
import { CollecteEditComponent } from './collectes/collecte-edit/collecte-edit.component';
import { CollecteDetailComponent } from './collectes/collecte-detail/collecte-detail.component';
import { HttpClientModule } from '@angular/common/http';

import { ApplicationComponent } from './application/application.component';
import { ApplicationDetailComponent } from './application/application-detail/application-detail.component';
import { ApplicationEditComponent } from './application/application-edit/application-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CollectesComponent,
    ClientsComponent,
    CollecteEditComponent,
    CollecteDetailComponent,
    ApplicationComponent,
    ApplicationDetailComponent,
    ApplicationEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
