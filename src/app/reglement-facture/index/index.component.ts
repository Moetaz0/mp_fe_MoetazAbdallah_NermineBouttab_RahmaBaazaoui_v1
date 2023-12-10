import { Component, OnInit } from '@angular/core';
import { ReglementFacture } from '../reglement-facture';
import { Facture } from '../facture';
import { Reglement } from 'src/app/reglement/reglement';
import { ReglementFactureService } from '../reglement-facture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  RF:ReglementFacture[];
  facture:Facture=new Facture();
  reglement:Reglement[];

  constructor(public regServ: ReglementFactureService , private router: Router) { }
  ngOnInit(): void {
    this.regServ.getAll().subscribe((data: ReglementFacture[])=>{
    this.RF = data;
    })
    }
    
      filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
  
    // Use filter to create a new array based on the filter criteria
    this.RF = this.RF.filter((RF: ReglementFacture) =>
      RF.idrf.toString().toLowerCase().includes(filterValue) 
    );
  }
  navigateToReglementF() {
    this.router.navigate(['reglementFacture/index']);
  }
  navigateToReglement() {
    this.router.navigate(['']);

  }
}
export { ReglementFacture };

