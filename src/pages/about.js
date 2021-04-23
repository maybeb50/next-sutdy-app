import styles from './Button.module.css';

function About() {
    return (
        <div>
            <div>About Pape</div>
            <button
                type="button"
                className={styles.error}
            >
                Destory
            </button>
            <button
                type="button"
                className={styles.error}
            >
                Error
            </button>
        </div>
    )
}

export default About;