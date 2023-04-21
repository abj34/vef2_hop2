import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../public/navbar.module.css';

const Navbar = () => {

    // Þarf að hafa þetta fyrir almennilega virkni á navbar (highlightar current page, sem er krafa)
    const router = useRouter();
    const currentRoute = router.pathname;
    //let currentRoute;

    return (
        <nav className={styles.nav}>
            <Link href='/'
                className={currentRoute === '/' ? styles.active : styles.notActive}>Home
            </Link>
            <Link href='/exams'
                className={currentRoute === '/exams' ? styles.active : styles.notActive}>Exams
            </Link>
            <Link href='/login'
                className={currentRoute === '/login' ? styles.active : styles.notActive}>Login
            </Link>
        </nav>
    );
};

export default Navbar;