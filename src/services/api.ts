const api = {
    baseUrl: 'https://rickandmortyapi.com/api',

    async getCharacters(query?: string) {
        const res = await fetch(
            `${this.baseUrl}/character${query ? `?${query}` : ''}`
        );
        const data = await res.json();

        return {
            characters: data.results,
            next: !!data.info.next,
        };
    },

    async getCharacter(id: string) {
        const res = await fetch(`${this.baseUrl}/character/${id}`);
        const data = await res.json();

        return data;
    },

    async getLocation(id: string) {
        const res = await fetch(`${this.baseUrl}/locations/${id}`);
        const data = await res.json();

        return data;
    },
};

export { api };
