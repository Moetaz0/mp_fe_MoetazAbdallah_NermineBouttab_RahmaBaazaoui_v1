import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReglementModule } from './reglement/reglement.module';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './reglement-facture/index/index.component';
import { CreateComponent } from './reglement-facture/create/create.component';
import { ReglementFactureModule } from './reglement-facture/reglement-facture.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReglementModule,
    FormsModule,
    ReglementFactureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
