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
    const [search, setSearch] = useState('');

    async function getCharacters(page: number, search: string, reset: boolean) {
        try {
            const query = new URLSearchParams({
                page: String(page),
                ...(search && { name: search }),
            });
            const { characters, next } = await api.getCharacters(
                query.toString()
            );
            setCharacters((previousCharacters) =>
                reset ? characters : [...previousCharacters, ...characters]
            );
            if (next) {
                setPage((page) => page + 1);
                setLoading(true);
            } else {
                setLoading(false);
            }
        } catch {
            message.error('Failed to load characters');
            setLoading(false);
        }
    }

    async function searchCharacters(search: string) {
        setSearch(search);
        setPage(1);
        setLoading(true);
        getCharacters(1, search, true);
    }

    useEffect(() => {
        if (spinner.current && observer) {
            observer.observe(spinner.current);
        }
    }, [spinner, observer]);

    useEffect(() => {
        if (isIntersecting && loading) {
            getCharacters(page, search, false);
        }
    }, [isIntersecting]);

    return (
        <div className={styles.mainContainer}>
            <Search className={styles.searchBar} onSearch={searchCharacters} />

            <div className={styles.grid}>
                {characters.map((character) => (
                    <CharacterThumbnail
                        key={character.id}
                        character={character}
                    />
                ))}
            </div>
            <div ref={spinner} style={{ margin: '16px' }}>
                {loading && (
                    <Spin
                        indicator={
                            <LoadingOutlined
                                style={{ fontSize: 36, color: 'white' }}
                                spin
                            />
                        }
                    />
                )}
            </div>
        </div>
    );
}
