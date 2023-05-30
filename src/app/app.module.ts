import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './components/dialog/dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';





@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    NavBarComponent,
    SearchPipePipe,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    TranslateModule,
    MatCardModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}


export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/translations/', '.json');
}
