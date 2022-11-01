import { Card, Image, message } from 'antd';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        async function getValues() {
            const res = await fetch(
                'https://rickandmortyapi.com/api/character'
            );
            const data = await res.json();
            if (data) {
                message.success('loaded');
                setData(data.results);
            } else {
                message.error('could not load');
            }
        }
        getValues();
    }, []);
    console.log(data);
    return (
        <div>
            {data.map((c) => (
                <Card title={c.name}>
                    <Image src={c.image} />
                </Card>
            ))}
        </div>
    );
}
