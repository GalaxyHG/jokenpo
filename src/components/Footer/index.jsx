import styles from './Footer.module.css'

function Footer() {
    return (
        <>
            <section className={styles.footer}>
                <span className={styles.white}>Desenvolvido por <span className={styles.red}>Helena Rezende</span> - 2024</span>
            </section>
        </>
    )
}

export default Footer