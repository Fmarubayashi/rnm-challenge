import { Col, Image, Row } from 'antd';
import Link from 'next/link';
import React from 'react';
import { ICharacter } from '../../Utils/Utils';
import styles from './CharacterThumbnail.module.scss';

interface ICharacterThumbnail {
    character: ICharacter;
}
const CharacterThumbnail: React.FC<ICharacterThumbnail> = ({ character }) => {
    return (
        <Link
            className={styles.thumbnailContainer}
            href={`/characters/${character.id}`}
        >
            <Image
                src={character.image}
                className={styles.image}
                preview={false}
            />
            <span className={styles.characterName}>{character.name}</span>
        </Link>
    );
};

export default CharacterThumbnail;
