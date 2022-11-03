import { ArrowLeftOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/logo.png';
import styles from './AppHeader.module.scss';
const AppHeader: React.FC = ({}) => {
    return (
        <header className={styles.header}>
            <Link type="text" className={styles.backArrow} href={'/'}>
                <ArrowLeftOutlined />
            </Link>

            <Image src={Logo} alt="Logo" width={300} className={styles.logo} />
        </header>
    );
};

export default AppHeader;
