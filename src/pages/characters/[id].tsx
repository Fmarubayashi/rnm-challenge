import { message } from 'antd';
import { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
    ICharacter,
    ICharacterLocation,
    ICharacterOrigin,
} from '../../Utils/Utils';
export default function Character() {
    const router = useRouter();
    const { id } = router.query;
    const [character, setCharacter] = useState<ICharacter>();
    const [location, setLocation] = useState<ICharacterLocation>();
    const [origin, setOrigin] = useState<ICharacterOrigin>();
    useEffect(() => {
        async function getCharacter() {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/${id}`
            );
            const charData = await res.json();
            if (charData) {
                setCharacter(charData);
                getCharacterLocation(charData?.location?.url);
                getCharacterOrigin(charData?.origin?.url);
            } else {
                message.error('failed to load character');
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
    }, []);
    console.log(character);
    console.log(location);
    console.log(origin);
    return <span>{character?.name}</span>;
}
