import { Component, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CharacterListComponent } from '../character-list/character-list.component';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any
  , public dialogRef: MatDialogRef<DialogComponent>){
    console.log()
  }

  ngOnInit() {
  }

}
