import { Card, Image } from 'antd';
import React from 'react';
import {
    ICharacter,
    ICharacterLocation,
    ICharacterOrigin,
} from '../../Utils/Utils';

interface ICharacterDetailsCard {
    character: ICharacter;
    location: ICharacterLocation;
    origin: ICharacterOrigin;
}

const CharacterDetailsCard: React.FC<ICharacterDetailsCard> = ({
    character,
    location,
    origin,
}) => {
    return (
        <Card title={character?.name}>
            <Image src={character?.image} />
            <span>{location?.name}</span>
            <span>{location?.url}</span>
        </Card>
    );
};

export default CharacterDetailsCard;
