import { Hero } from '../types/hero.types';

export const fetchHeroesById = async (id: string | number): Promise<Hero> => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    return res.json();
}

