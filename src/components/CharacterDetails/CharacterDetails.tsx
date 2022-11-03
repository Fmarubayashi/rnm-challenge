import { Card, Col, Collapse, Image, Row } from 'antd';
import React from 'react';
import { ICharacter, ICharacterLocation } from '../../Utils/Utils';
import styles from './CharacterDetails.module.scss';
const { Panel } = Collapse;

interface ICharacterDetails {
    character: ICharacter;
    location: ICharacterLocation;
    origin: ICharacterLocation;
}

const CharacterDetails: React.FC<ICharacterDetails> = ({
    character,
    location,
    origin,
}) => {
    return (
        <Row
            justify='space-evenly'
            align="middle"
            className={styles.characterDetailsRow}
            gutter={10}
        >
            <Col>
                <Row>
                    <Image
                        src={character?.image}
                        className={styles.characterImage}
                    />
                </Row>
            </Col>
            <Col className={styles.collapseContainer}>
                <Collapse ghost className={styles.detailsCollapse}>
                    <Panel header={'About'} key={'1'}>
                        <span>
                            {character?.name}, of the {''}
                            {character?.species.toLocaleLowerCase() ||
                                'uknown'}{' '}
                            species, {''}
                            {character?.gender.toLocaleLowerCase() ||
                                'uknown'}{' '}
                            gender and {''}
                            {character?.type.toLocaleLowerCase() ||
                                'uknown'}{' '}
                            type. Current status is {''}
                            {character?.status.toLocaleLowerCase() || 'uknown'}.
                        </span>
                    </Panel>
                    <Panel header={'Last seen location'} key={'2'}>
                        {location ? (
                            <span>
                                The last seen location of {character?.name} is{' '}
                                {''}
                                {location?.name}, in the {''}
                                {location?.dimension ||
                                    'uknown dimension'}. {''}
                                {location.residents.length
                                    ? ` It currently has ${location.residents.length} residents.`
                                    : ''}
                            </span>
                        ) : (
                            <span>Uknown.</span>
                        )}
                    </Panel>
                    <Panel header={'Origin'} key={'3'}>
                        {origin ? (
                            <span>
                                The location of origin of {character?.name} is{' '}
                                {''}
                                {origin?.name}, in the
                                {origin?.dimension || 'uknown dimension'}. {''}
                                {origin.residents.length
                                    ? ` It currently has ${origin.residents.length} residents.`
                                    : ''}
                            </span>
                        ) : (
                            <span>Uknown.</span>
                        )}
                    </Panel>
                    <Panel header={'Episodes'} key={'4'}>
                        <span>
                            {character?.name} has been in{' '}
                            {character?.episode.length} episodes as of today.{' '}
                        </span>
                    </Panel>
                </Collapse>
            </Col>
        </Row>
    );
};

export default CharacterDetails;
