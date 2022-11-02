import { Layout } from 'antd';
import * as React from 'react';
import styles from './AppHeader.module.scss';

const { Header } = Layout;

const AppHeader: React.FC = ({}) => {
    return (
        <Header id="header" className={styles.appHeader}>
            <div className={styles.leftAlign}>
                <h1>{'Rick and Morty Characters'}</h1>
            </div>
        </Header>
    );
};

export default AppHeader;
