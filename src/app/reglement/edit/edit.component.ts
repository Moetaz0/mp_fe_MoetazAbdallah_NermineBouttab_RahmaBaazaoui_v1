import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Reglement } from '../reglement';
import { ReglementService } from '../reglement.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @Input() reglementID: object;
  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";
  reglement: Reglement = new Reglement()

  constructor(private reg:ReglementService
) { }
  ngOnInit(): void {
    this.reg.find(this.reglementID).subscribe(data => {

   

      this.reglement = data;
    
    });

  }
  
  

  
  openModal() {
    this.display = "block";
    
   
  }
  closeModal() {
    this.display = "none";
 
    this.reglement = new Reglement();
  }
  
  
  
  
  update = () => {
    const inputDate = this.reglement.date;
  
    // Check if the input date matches the expected format 'DD-MM-YYYY'
    const isDateFormatValid = /^\d{2}-\d{2}-\d{4}$/.test(inputDate);
  
    if (!isDateFormatValid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid date format. Please enter a date in the format DD-MM-YYYY.',
      });
      return; // Stop the update process
    }
  
    const [day, month, year] = inputDate.split('-');
    const transformedDate = new Date(`${day}-${month}-${year}`);
  
    // Check if the transformed date is a valid JavaScript Date object
    if (isNaN(transformedDate.getTime())) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid date.',
      });
      return; // Stop the update process
    }
  
  
    
    
    // Check if the transformed date is within the specified range (2002 to today)
    const dateIn2002 = new Date('01-01-2002');
    const currentDate = new Date();
  
    if (transformedDate < dateIn2002 || transformedDate > currentDate) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: 'Please enter a date between 2002 and today.',
      });
      return; // Stop the update process
    }
    const a = transformedDate.getDate();
    const b = transformedDate.getMonth() + 1;
    const c =transformedDate.getFullYear();  
    // Proceed with the update
    this.reg.update(this.reglement.id, { ...this.reglement, date: a+"-"+b+"-"+c }).subscribe(data => {
      console.log(data);
      alert(data.date);
      this.closeModal();
      window.location.reload();
    });
  }
  


}
