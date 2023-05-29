import { Component, Input } from '@angular/core';
import { Result, ICharacterResponse } from 'src/app/services/rick-morty.interface';
import { RickMortyService } from 'src/app/services/rick-morty.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';






@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {
  characters: Result[] = [];
  nextPage: string | any = ""
  prevPage: string | any = ""
  pageNumber: number | any
  searchTerm: string | any

  nameForDialog: string = ""
  imageForDialog: string = ""
  idForDialog: any
  

  constructor(private rickMortyService: RickMortyService,  public dialog: MatDialog) {}

 
    handleInputValue(value: string) {
      this.searchTerm = value
    }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(apiLink?: string ) {
    this.rickMortyService.fetchData(apiLink).subscribe((response: ICharacterResponse) => {
      this.characters = response.results;
      this.nextPage = response.info.next;
      this.prevPage = response.info.prev  
      this.pageNumber = Number(this.nextPage.match(/\d+$/)?.[0] - 1);
        
    });
  }

  nextClicked(nextPage: string | null) {
    this.getCharacters(this.nextPage);
   
  }

  prevClicked(prevPage: string | null ) {
    this.getCharacters(this.prevPage)
  }

  onOpenDialogClick(name: string, id: number, image: string){
  this.nameForDialog = name
  this.imageForDialog = image
  this.idForDialog = id

  this.dialog.open(DialogComponent, {data: {
    name: this.nameForDialog,
    image: this.imageForDialog,
    id: this.idForDialog

  }})
  console.log("nameB4",this.nameForDialog )


  }
  

}
