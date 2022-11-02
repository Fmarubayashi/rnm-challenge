import { TeamOutlined } from '@ant-design/icons';
import { Button, Divider, Menu } from 'antd';
import * as React from 'react';
import styles from './MenuSider.module.scss';

const AppMenu: React.FC = ({}) => {
    return (
        <>
            <div className={styles.logo}>
                <img
                    src={
                        'https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg'
                    }
                />
            </div>
            <Divider className={styles.menuDivider} />
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="characters">
                    <Button
                        className={styles.menuButton}
                        type="link"
                        icon={<TeamOutlined />}
                        href={'/'}
                    >
                        <span>Characters</span>
                    </Button>
                </Menu.Item>
            </Menu>
            <Divider className={styles.menuDivider} />
        </>
    );
};

export default AppMenu;
