import Link from "next/link";
import { useRouter } from "next/router";

import styles from '../public/navbar.module.css';

const Navbar = ({admin}) => {
    let currentRoute;
    if(admin){
        return (
            <nav className={styles.nav}>
                <ul>
                <Link href='/admin' className={currentRoute === '/admin/' ? styles.active : styles.notActive}>Home</Link>
                <Link href='/admin/exams' className={currentRoute === '/admin/exams' ? styles.active : styles.notActive}>Exams</Link>
                <Link href='/logout' className={currentRoute === '/logout' ? styles.active : styles.notActive}>Log Out</Link>
                </ul>
            </nav>
        );
    }
    return (
        <nav className={styles.nav}>
            <Link href='/' className={currentRoute === '/' ? styles.active : styles.notActive}>Home</Link>
            <Link href='/exams' className={currentRoute === '/exams' ? styles.active : styles.notActive}>Exams</Link>
            <Link href='/login' className={currentRoute === '/login' ? styles.active : styles.notActive}>Login</Link>
        </nav>
    );
};

export default Navbar;