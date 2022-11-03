import { ArrowLeftOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../../../public/logo.png';
import styles from './AppHeader.module.scss';
const AppHeader: React.FC = ({}) => {
    const { pathname } = useRouter();
    return (
        <header className={styles.header}>
            {pathname !== '/' && (
                <Link type="text" className={styles.backArrow} href={'/'}>
                    <ArrowLeftOutlined />
                </Link>
            )}

            <Image
                src={Logo}
                alt="Logo"
                width={300}
                className={styles.logo}
                priority
            />
        </header>
    );
};

export default AppHeader;
