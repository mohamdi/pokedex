import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

    @Input()
    title: string | undefined;

    goBack() {
        history.back();
    }

}
