import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchFormComponent} from './search-form.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {SharedModule} from "../../shared/shared.module";
import {AppModule} from "../../app.module";
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";
import {PokemonSearchService} from "../../services/pokemon-search.service";
import {of} from "rxjs";
import {Pokemon, PokemonListItem} from "../../models/pokemon";

describe('SearchFormComponent', () => {
    let component: SearchFormComponent;
    let fixture: ComponentFixture<SearchFormComponent>;
    let router: Router;
    let service: PokemonSearchService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SearchFormComponent],
            imports: [HttpClientTestingModule, SharedModule, AppModule, RouterTestingModule],
        });
        fixture = TestBed.createComponent(SearchFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        router = TestBed.inject(Router);
        service = TestBed.inject(PokemonSearchService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should search', () => {
        component.searchInput = 'pikachu';
        spyOn(router, 'navigateByUrl');

        component.search();

        expect(router.navigateByUrl).toHaveBeenCalledWith('/pokemon/pikachu');
    });

    it('should random search', () => {
        const pokemon = new PokemonListItem();
        pokemon.name = 'bulbasaur';
        const list = Array.of(pokemon);

        spyOn(service, 'getPokemonsList').and.returnValue(of({results: list}));
        spyOn(router, 'navigateByUrl');
        component.randomSearch();

        expect(router.navigateByUrl).toHaveBeenCalledWith('/pokemon/bulbasaur');
    });

});
