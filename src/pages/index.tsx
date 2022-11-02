import { Card, Col, Image, message, Row } from 'antd';
import Search from 'antd/lib/input/Search';
import { useEffect, useState } from 'react';
import CharacterThumbnail from '../components/CharacterThumbnail/CharacterThumbnail';
import { ICharacter } from '../Utils/Utils';
import styles from './index.module.scss';

export default function Home() {
    const [data, setData] = useState<ICharacter[]>([]);
    useEffect(() => {
        async function getValues() {
            const res = await fetch(
                'https://rickandmortyapi.com/api/character'
            );
            const data = await res.json();
            if (data) {
                setData(data.results);
            } else {
                message.error('failed to load characters');
            }
        }
        getValues();
    }, []);
    return (
        <div className={styles.mainContainer    }>
            <Search className={styles.searchBar}/>
            <Row gutter={8}>
                {data.map((c) => (
                    <Col span={8}>
                        <CharacterThumbnail character={c} />
                    </Col>
                ))}
            </Row>
        </div>
    );
}
