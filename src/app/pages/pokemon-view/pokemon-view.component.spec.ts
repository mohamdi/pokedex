import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PokemonViewComponent} from './pokemon-view.component';
import {Pokemon} from "../../models/pokemon";
import {PokemonSearchService} from "../../services/pokemon-search.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {provideRouter} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {AppModule} from "../../app.module";
import {of} from "rxjs";

describe('PokemonViewComponent', () => {
    let component: PokemonViewComponent;
    let fixture: ComponentFixture<PokemonViewComponent>;
    let service: PokemonSearchService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PokemonViewComponent],
            imports: [HttpClientTestingModule, SharedModule, AppModule],
            providers: [provideRouter([])],
        });
        fixture = TestBed.createComponent(PokemonViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        service = TestBed.inject(PokemonSearchService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should fetch pokemon by name', () => {
        const pokemon = new Pokemon();
        pokemon.name = 'pikachu';

        spyOn(service, 'search').and.returnValue(of(pokemon));
        component.fetchData();

        expect(component.pokemonData).toEqual(pokemon);
    });
    it('should not find result', () => {
        spyOn(service, 'search').and.returnValue(of(undefined));
        component.fetchData();
        expect(component.pokemonData).toBeUndefined();
    });

    it('should not find result through graphql', () => {
        const pokemon = new Pokemon();
        pokemon.name = 'pikachu';

        spyOn(service, 'search').and.returnValue(of(pokemon));
        spyOn(service, 'getPokemonDataGraphQL').and.returnValue(of(undefined));

        component.fetchData();
        expect(component.notFound).toEqual(true);
        expect(component.pokemonData.stats).toBeUndefined();
        expect(component.pokemonData.types).toBeUndefined();
        expect(component.pokemonData.description).toBeUndefined();
    });

    it('should not find result through rest', () => {
        const pokemon = new Pokemon();
        pokemon.name = 'pikachu';

        spyOn(service, 'search').and.returnValue(of(undefined));
        spyOn(service, 'getPokemonDataGraphQL').and.returnValue(of(undefined));

        component.fetchData();
        expect(component.notFound).toBeTruthy();
    });

});
