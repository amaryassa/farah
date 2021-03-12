import { ApplicationEditComponent } from './application/application-edit/application-edit.component';
import { ApplicationDetailComponent } from './application/application-detail/application-detail.component';
import { CollecteEditComponent } from './collectes/collecte-edit/collecte-edit.component';
import { CollecteDetailComponent } from './collectes/collecte-detail/collecte-detail.component';
import { CollectesComponent } from './collectes/collectes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'collectes', pathMatch: 'full' },

  { path: 'collectes', component: CollectesComponent },
  { path: 'collectes/new', component: CollecteEditComponent },
  { path: 'collectes/:id', component: CollecteDetailComponent },
  { path: 'collectes/:id/edit', component: CollecteEditComponent },

  { path: 'collectes/:id/new', component: ApplicationEditComponent },
  { path: 'collectes/:id/:id', component: ApplicationDetailComponent },
  { path: 'collectes/:id/:id/edit', component: ApplicationEditComponent },

  { path: '**', redirectTo: 'collectes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
