import {Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'lechatong-web';

  lang: string = 'fr';
  navbarOpen:boolean = false;
  customNavbar:boolean = true;

  texte:string = '';
  couleur:string = '';

  constructor(private translateService: TranslateService){
    translateService.setDefaultLang(this.lang);
    //this.changeLanguage(this.lang);
  }

  ngOnInit() {
    /*let currentLang = this.translateService.currentLang;
    this.lang = currentLang.match(/en|fr/) ? currentLang : 'fr';*/
  }

  changeLanguage(lang:string) {
    this.translateService.use(lang);
    this.lang = lang;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
