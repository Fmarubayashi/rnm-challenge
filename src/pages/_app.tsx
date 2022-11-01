import { Layout } from 'antd';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import AppHeader from '../components/AppHeader/AppHeader';
import AppMenu from '../components/MenuSider/MenuSider';
import '../styles/globals.css';
import styles from './app.module.scss';

export default function App({ Component, pageProps }: AppProps) {
    const { Sider, Content } = Layout;
    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    theme="light"
                    trigger={null}
                    className={styles.siderMenuCustom}
                >
                    <AppMenu />
                </Sider>
                <Layout className="layout">
                    <AppHeader />
                    <Content className={styles.contentContainer}>
                        <Component {...pageProps} />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
}
