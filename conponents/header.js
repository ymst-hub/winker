import styles from '../styles/header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>Winker</h1>
        </header>
    )
}