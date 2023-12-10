import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReglementFacture } from '../reglement-facture';
import { ReglementFactureService } from '../reglement-facture.service';
import { ReglementService } from 'src/app/reglement/reglement.service';
import { Reglement } from 'src/app/reglement/reglement';
import { th } from 'date-fns/locale';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";
  reglement: ReglementFacture = new ReglementFacture()
  rg : Reglement[];

  constructor(
    private reg: ReglementFactureService, private regServ : ReglementService) { }
  ngOnInit(): void {
this.loadspec();

  }
  openModal() {
    this.display = "block";

  }
  closeModal() {
    this.display = "none";

    this.reglement = new ReglementFacture();
  }
  loadspec() {
    return this.regServ.getAll().subscribe(data =>
      this.rg = data),
      (error: any) => console.log(error)
  }
  AddReglementFacture = () => {
    

    this.reg.create(this.reglement).subscribe((response: any) => {
    console.log('Post successful', response.message);
    // Additional handling if needed
  },
  (error) => {
    console.error('Error in POST request', error);
  }
  
);
      
this.closeModal()
window.location.reload();
  }

}
