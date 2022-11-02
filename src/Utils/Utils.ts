export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Partial<ICharacterLocation>;
    location: Partial<ICharacterLocation>;
    image: string;
    episode: string[];
    url: string;
    created: string;
}

export interface ICharacterLocation {
    id: string;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string;
}
