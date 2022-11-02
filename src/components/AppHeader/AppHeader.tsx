import Image from 'next/image'
import styles from './AppHeader.module.scss';
import Logo from '../../../public/logo.png';

const AppHeader: React.FC = ({ }) => {
    return (
        <header className={styles.header}>
            <Image src={Logo} alt="Logo" width={300} />
        </header>
    );
};

export default AppHeader;
