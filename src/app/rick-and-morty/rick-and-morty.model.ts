import { RickAndMortyComponent } from "./rick-and-morty.component";

export interface RickAndMortyCharacterResponse {
    info: RickAndMortyPaginator;
    results: Array<RickAndMortyCharacter>;    
}

export interface RickAndMortyPaginator {
    count: number;
    next: string;
    pages: number;
    prev: string;
};

export interface RickAndMortyCharacter {
    created: string;
    episode: Array<string>;
    gender: string;
    id: number;
    image: string;
    location: RickAndMortyLocation;
    name: string;
    origin: RickAndMortyOrigin;
    status: string; 
    species: string;
    type: string;
    url: string;
}

interface RickAndMortyLocation {
    name: string;
    url: string;
}

interface RickAndMortyOrigin {
    name: string;
    url: string;
}