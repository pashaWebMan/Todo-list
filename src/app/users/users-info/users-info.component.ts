import { Component, OnInit  } from '@angular/core';
import { HttpService } from '../services/http.service'
import { LanguageService } from '../services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { User } from './users';

@Component({
  selector: 'app-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.css']
})
export class UsersInfoComponent implements OnInit {

  constructor(private httpService: HttpService, private languageService: LanguageService, private translate: TranslateService) {
    translate.addLangs(['en', 'ru', 'ua']);
    translate.setDefaultLang('en');
    translate.use(localStorage.getItem('lang'));
  }
  public users:User[];
  public searchField;
  public isMapActive = false;
  public greeting;

  ngOnInit() {
    this.httpService.getUsers().subscribe(data => this.users = data);
    this.languageService.getLanguageSettings().subscribe(data => this.greeting = data);
  }
  changeLangToRu() {
    this.translate.use('ru');
    localStorage.setItem('lang', 'ru')
  }
  changeLangToUa() {
    this.translate.use('ua');
    localStorage.setItem('lang', 'ua')
  }
  changeLangToEn() {
    this.translate.use('en');
    localStorage.setItem('lang', 'en')
  }
}
