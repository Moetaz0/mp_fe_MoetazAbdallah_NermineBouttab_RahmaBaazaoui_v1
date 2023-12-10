import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './reglement/index/index.component';
import { IndexComponent as index } from './reglement-facture/index/index.component'

const routes: Routes = [
  { path: '', redirectTo: 'reglement/index', pathMatch: 'full'},
  { path: 'reglement/index', component: IndexComponent },
  { path: 'reglementFacture/index', component: index  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
