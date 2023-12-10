import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'reglement', redirectTo: 'reglement/index', pathMatch: 'full'},
{ path: 'reglement/index', component: IndexComponent },
{ path: 'reglement/create', component: CreateComponent },
{ path: 'reglement/:reglementId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReglementRoutingModule { }
