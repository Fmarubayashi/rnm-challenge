import { message, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Search from 'antd/lib/input/Search';
import { useEffect, useRef, useState } from 'react';
import CharacterThumbnail from '../components/CharacterThumbnail/CharacterThumbnail';
import { ICharacter } from '../Utils/Utils';
import styles from './index.module.scss';
import api from '../services/api';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Home() {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const spinner = useRef(null);
    const { isIntersecting, observer } = useIntersectionObserver();

    async function getCharacters() {
        try {
            const query = new URLSearchParams({
                page: String(page)
            })
            const { characters, next } = await api.getCharacters(query.toString());
            setCharacters((previousCharacters) => [...previousCharacters, ...characters]);
            if (next) {
                setPage(page => page + 1);
                setLoading(true);
            } else {
                setLoading(false);
            }
        } catch {
            message.error('Failed to load characters');
        }
    }

    useEffect(() => {
        if (spinner.current && observer) {
            observer.observe(spinner.current);
        }
    }, [spinner, observer]);

    useEffect(() => {
        if (isIntersecting) {
            getCharacters();
        }
    }, [isIntersecting]);

    return (
        <div className={styles.mainContainer}>
            <Search className={styles.searchBar} />

            <div className={styles.grid}>
                {characters.map(character => (
                    <CharacterThumbnail key={character.id} character={character} />
                ))}
            </div>
            {loading && (
                <div ref={spinner} style={{ margin: '16px' }}>
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 36, color: 'white' }} spin />} />
                </div>
            )}
        </div>
    );
}
