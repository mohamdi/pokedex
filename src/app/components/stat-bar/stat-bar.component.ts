import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-stat-bar',
    templateUrl: './stat-bar.component.html',
    styleUrls: ['./stat-bar.component.scss']
})
export class StatBarComponent {
    @Input({required: true}) value: number;
    @Input({required: true}) progressColor: string;

}
