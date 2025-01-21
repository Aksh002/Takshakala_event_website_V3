import styles from '/styles/HButton.module.css'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

const HButtons = () => {
    return (
        <div className={styles.buttons}>
            <Link href="/events" passHref>
                    <button className={styles.b1}>Register</button>
            </Link>
            <button className={styles.b2}>
                <Link href="/" target="_blank">
                    <a target="_blank" href=''>
                        <FaWhatsapp className={styles.faicon} />
                        <span> Join Community </span>
                    </a>
                </Link>
            </button>
        </div>
    )
}

export default HButtons
