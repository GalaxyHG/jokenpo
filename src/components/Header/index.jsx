import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <section className={styles.header}>
                <span className={styles.white}><span className={styles.red}>ARCADE</span> GAMES</span>
                <ul>
                    <li><Link className={styles.link} to="/">HOME</Link></li>
                    <li><Link className={styles.link} to="/jokenpo">JOKENPÔ</Link></li>
                    <li><Link className={styles.link} to="/tictactoe">TIC TAC TOE</Link></li>
                </ul>
            </section>
        </>
    )
}

export default Header