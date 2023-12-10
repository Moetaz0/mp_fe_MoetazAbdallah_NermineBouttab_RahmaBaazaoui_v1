import { Component, OnInit } from '@angular/core';
import { Reglement } from '../reglement';
import * as xml2js from 'xml2js';
import { ReglementService } from '../reglement.service';
import { window } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  
  regelement:Reglement[];

  constructor(public reg: ReglementService, private router: Router) { }
  ngOnInit(): void {
    this.reg.getAll().subscribe((data: Reglement[])=>{
    this.regelement = data;
    })
    }
    navigateToReglementF() {
      this.router.navigate(['reglementFacture/index']);
    }
    navigateToReglement() {
      this.router.navigate(['reglement/index']);
    }
    deleteReglement(id:object){
      this.reg.delete(id).subscribe(res => {
      this.regelement = this.regelement.filter(item => item.id !== id);
      
      console.log('Post deleted successfully!');
      
    })
    location.reload()
      }
      filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
  
    // Use filter to create a new array based on the filter criteria
    this.regelement = this.regelement.filter((reglement: Reglement) =>
      reglement.code.toLowerCase().includes(filterValue) 
    );
  }

}
