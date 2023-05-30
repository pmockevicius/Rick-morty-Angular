import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en'); // Set the default language
  }
  @Output() inputValue = new EventEmitter<string>();

  getInputValue(value: any) {
    this.inputValue.emit(value);
  }

  switchLanguage(lang: string) {
    this.translateService.use(lang); // Switch to the specified language
  }
}
