import { message } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CharacterDetails from '../../components/CharacterDetailsCard/CharacterDetails';
import {
    ICharacter,
    ICharacterLocation,
} from '../../Utils/Utils';
export default function Character() {
    const { query: { id }, isReady } = useRouter();
    const [character, setCharacter] = useState<ICharacter>();
    const [location, setLocation] = useState<ICharacterLocation>();
    const [origin, setOrigin] = useState<ICharacterLocation>();
    useEffect(() => {
        async function getCharacter() {
            if (isReady) {
                const res = await fetch(
                    `https://rickandmortyapi.com/api/character/${id}`
                );
                const charData = await res.json();
                if (charData) {
                    setCharacter((prev) => prev ?? charData);
                    getCharacterLocation(charData?.location?.url);
                    getCharacterOrigin(charData?.origin?.url);
                } else {
                    message.error('failed to load character');
                }
            }
        }
        async function getCharacterLocation(url: string) {
            const res = await fetch(url);
            const locationData = await res.json();
            if (locationData) {
                setLocation(locationData);
            } else {
                message.error('failed to load character location');
            }
        }
        async function getCharacterOrigin(url: string) {
            const res = await fetch(url);
            const originData = await res.json();
            if (originData) {
                setOrigin(originData);
            } else {
                message.error('failed to load character origin');
            }
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
