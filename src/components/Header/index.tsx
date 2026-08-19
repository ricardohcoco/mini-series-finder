import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { SiMyshows } from 'react-icons/si'

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                <SiMyshows />
                <h1>Mini Series Finder</h1>
            </Link>
        </header>
    )
}