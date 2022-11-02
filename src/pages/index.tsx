import { message } from 'antd';
import Search from 'antd/lib/input/Search';
import { useEffect, useState } from 'react';
import CharacterThumbnail from '../components/CharacterThumbnail/CharacterThumbnail';
import { ICharacter } from '../Utils/Utils';
import styles from './index.module.scss';
import { api } from '../services/api';

export default function Home() {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getValues() {
            try {
                const query = new URLSearchParams({
                    page: String(page)
                })
                const { characters, next } = await api.getCharacters(query.toString());
                setCharacters(characters);
                if (next) {
                    setPage(page + 1);
                    setLoading(true);
                } else {
                    setLoading(false);
                }
            } catch {
                message.error('Failed to load characters');
            }
        }

        getValues();
    }, []);

    return (
        <div className={styles.mainContainer}>
            <Search className={styles.searchBar} />

            <div className={styles.grid}>
                {characters.map(character => (
                    <CharacterThumbnail character={character} />
                ))}
            </div>
        </div>
    );
}
