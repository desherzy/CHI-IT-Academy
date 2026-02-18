import { Hero, ApiResponse } from '../types/hero.types';

export const fetchHeroes = async (): Promise<Hero[]> => {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const data: ApiResponse = await res.json();
    return data.results;
}

