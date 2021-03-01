import { CollecteEditComponent } from './collectes/collecte-edit/collecte-edit.component';
import { CollecteDetailComponent } from './collectes/collecte-detail/collecte-detail.component';
import { ClientsComponent } from './clients/clients.component';
import { CollectesComponent } from './collectes/collectes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'collectes', pathMatch: 'full' },
  { path: 'collectes', component: CollectesComponent },
  { path: 'collectes/new', component: CollecteEditComponent },
  { path: 'collectes/:id', component: CollecteDetailComponent },
  { path: 'collectes/:id/edit', component: CollecteEditComponent },

  { path: 'clients', component: ClientsComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
