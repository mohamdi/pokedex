import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(
        private router: Router,
        private translate: TranslateService
    ) {
        translate.addLangs(['fr', 'en']);
        translate.setDefaultLang('fr');
        translate.use('fr');
    }


}
