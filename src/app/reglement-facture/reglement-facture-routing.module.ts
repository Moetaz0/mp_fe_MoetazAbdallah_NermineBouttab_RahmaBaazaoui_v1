import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: 'reglementFacture', redirectTo: 'reglementFacture/index', pathMatch: 'full'},
{ path: 'reglementFacture/index', component: IndexComponent },
{ path: 'reglementFacture/create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReglementFactureRoutingModule { }
