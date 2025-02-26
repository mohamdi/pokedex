import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {appRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MdbModalModule} from "mdb-angular-ui-kit/modal";
import {NgxSpinnerModule} from "ngx-spinner";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {NgOptimizedImage, registerLocaleData} from "@angular/common";
import localeFr from '@angular/common/locales/fr';
import {SearchFormComponent} from './pages/search-form/search-form.component';
import {PokemonViewComponent} from './pages/pokemon-view/pokemon-view.component';
import {NoResultComponent} from './pages/no-result/no-result.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { StatsComponent } from './components/stats/stats.component';
import { StatBarComponent } from './components/stat-bar/stat-bar.component';
import { EvolutionChainComponent } from './components/evolution-chain/evolution-chain.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

registerLocaleData(localeFr);

export function HttpLoaderFactory(httpClient: HttpClient) {
    return new TranslateHttpLoader(httpClient);
}

@NgModule({
    declarations: [
        AppComponent,
        SearchFormComponent,
        PokemonViewComponent,
        NoResultComponent,
        NavigationBarComponent,
        StatsComponent,
        StatBarComponent,
        EvolutionChainComponent,
        UnderConstructionComponent,
        PokemonCardComponent
    ],
    imports: [
        BrowserModule,
        appRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
        TranslateModule.forRoot(
            {
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                }
            }
        ),
        NgbModule,
        MdbModalModule,
        SharedModule,
        NgxSpinnerModule,
        NgOptimizedImage,
    ],
    exports: [
        TranslateModule
    ],
    providers: [
        {provide: LOCALE_ID, useValue: "fr-FR"}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
