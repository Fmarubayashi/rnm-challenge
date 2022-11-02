import { Card, Col, Image, Row } from 'antd';
import React from 'react';
import {
    ICharacter,
    ICharacterLocation,
    ICharacterOrigin,
} from '../../Utils/Utils';
import styles from './CharacterDetailsCard.module.scss';

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
        <Card title={character?.name} className={styles.characterCard}>
            <Col className={styles.cardCol}>
                <Row>
                    <Image src={character?.image} />
                </Row>
                <Row>
                    <span className={styles.subText}>Status:</span>
                    <span>{character?.status || 'Uknown'}</span>
                </Row>
                <Row>
                    <span className={styles.subText}>Species:</span>
                    <span>{character?.species || 'Uknown'}</span>
                </Row>
                <Row>
                    <span className={styles.subText}>Type:</span>
                    <span>{character?.type || 'Uknown'}</span>
                </Row>
                <Row>
                    <span className={styles.subText}>Gender:</span>
                    <span>{character?.gender || 'Uknown'}</span>
                </Row>
                <Row>
                    <span className={styles.subText}>Location of origin:</span>
                    <span>{origin?.name || 'Uknown'}</span>
                </Row>
                <Row>
                    <span className={styles.subText}>Episode appearances:</span>
                    <span>{character?.episode.length || 'Uknown'}</span>
                </Row>
                <Row>
                    <span className={styles.subText}>Last seen location: </span>
                    <span>{location?.name || 'Uknown'}</span>
                </Row>
            </Col>
        </Card>
    );
};

export default CharacterDetailsCard;
