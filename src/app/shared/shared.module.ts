import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from "@ngx-translate/core";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        TranslateModule,
        NgbModule,
        ReactiveFormsModule
    ],
    exports: [
        TranslateModule,
        NgbModule,
        ReactiveFormsModule
    ]
})
export class SharedModule {
}
