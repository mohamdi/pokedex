import {Component, Input} from '@angular/core';
import {Stat} from "../../models/pokemon";

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
    @Input({required: true}) stats: Stat[];
    @Input({required: true}) color: string;

}
