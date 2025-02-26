import {TestBed} from '@angular/core/testing';

import {PokemonSearchService} from './pokemon-search.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('PokemonSearchService', () => {
    let service: PokemonSearchService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });
        service = TestBed.inject(PokemonSearchService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

});
