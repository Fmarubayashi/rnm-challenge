import { message } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CharacterDetails from '../../components/CharacterDetails/CharacterDetails';
import { ICharacter, ICharacterLocation } from '../../Utils/Utils';
import api from '../../services/api';

export default function Character() {
    const {
        query: { id },
        isReady,
    } = useRouter();
    const [character, setCharacter] = useState<ICharacter>();
    const [location, setLocation] = useState<ICharacterLocation>();
    const [origin, setOrigin] = useState<ICharacterLocation>();
    useEffect(() => {
        async function getCharacter() {
            if (isReady) {
                try {
                    const character = await api.getCharacter(String(id));
                    if (!character) {
                        throw Error;
                    }
                    setCharacter(character);
                    const location = await getCharacterLocation(
                        character.location.url
                    );
                    setLocation(location);
                    const origin = await getCharacterOrigin(
                        character.origin.url
                    );
                    setOrigin(origin);
                } catch {
                    message.error('failed to load character');
                }
                const res = await fetch(
                    `https://rickandmortyapi.com/api/character/${id}`
                );
                const charData = await res.json();
                if (charData) {
                    setCharacter((prev) => prev ?? charData);
                    getCharacterLocation(charData?.location?.url);
                    getCharacterOrigin(charData?.origin?.url);
                } else {
                }
            }
        }
        async function getCharacterLocation(url: string) {
            const location = await api.getLocation(url);
            if (!location) {
                throw Error;
            }
            return location;
        }
        async function getCharacterOrigin(url: string) {
            const origin = await api.getLocation(url);
            if (!origin) {
                throw Error;
            }
            return origin;
        }
        getCharacter();
    }, [id]);

    return (
        <CharacterDetails
            character={character as ICharacter}
            location={location as ICharacterLocation}
            origin={origin as ICharacterLocation}
        />
    );
}
