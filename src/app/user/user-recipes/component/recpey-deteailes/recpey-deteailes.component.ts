import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ItebleRecipey } from 'src/app/admin/Module/irecipey';

@Component({
  selector: 'app-recpey-deteailes',
  templateUrl: './recpey-deteailes.component.html',
  styleUrls: ['./recpey-deteailes.component.scss']
})
export class RecpeyDeteailesComponent {
  pathImag:string='https://upskilling-egypt.com:443/'
     dummyImg:string='../../../assets/image/recipy-images.jpeg'
  constructor(
    public dialogRef: MatDialogRef<RecpeyDeteailesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ItebleRecipey,
  ) {
    console.log(data);
    
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
