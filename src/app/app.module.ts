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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CollectesComponent,
    ClientsComponent,
    CollecteEditComponent,
    CollecteDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
