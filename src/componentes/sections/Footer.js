import { FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/jpaded/' target="_blank"><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/joao-pedro-aded-garuba-b4ba01128/' target="_blank"><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/jpadedg' target="_blank"><FaGithub size={30}/></a></li>
            </ul>
            <p>joaopedro.aded@gmail.com</p>
            <p>João Pedro Aded © 2023</p>
        </div>
    )
}

export default Footer;