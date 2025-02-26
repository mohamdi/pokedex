import {RouterModule, Routes} from '@angular/router';
import {SearchFormComponent} from "./pages/search-form/search-form.component";
import {NoResultComponent} from "./pages/no-result/no-result.component";
import {PokemonViewComponent} from "./pages/pokemon-view/pokemon-view.component";

const routes: Routes = [
    {
        path: 'search',
        component: SearchFormComponent
    },
    {
        path: 'pokemon/:keyword',
        component: PokemonViewComponent
    },
    {
        path: 'not-found',
        component: NoResultComponent
    },
    {
        path: '**',
        redirectTo: 'search',
        pathMatch: 'full'
    }
];
export const appRoutingModule = RouterModule.forRoot(routes);
