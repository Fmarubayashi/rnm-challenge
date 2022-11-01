import { CrownOutlined, HomeOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import * as React from 'react';
import styles from './MenuSider.module.scss';

const AppMenu: React.FC = ({}) => {
    return (
        <>
            <div className={styles.logo}>{/* <img src={logo} /> */}</div>
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="characters">
                    <Button type="link" onClick={() => console.log('clicked')}>
                        <HomeOutlined />
                        <span>Characters</span>
                    </Button>
                </Menu.Item>
            </Menu>
        </>
    );
};

export default AppMenu;
