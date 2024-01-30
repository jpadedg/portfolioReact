import styles from './Skills.module.css'
import javascript from '../../image/skills/javascript.svg'
import html from '../../image/skills/html.svg'
import css from '../../image/skills/css.svg'
import react from '../../image/skills/react.svg'
import typescript from '../../image/skills/typescript.svg'
import next from '../../image/skills/next.svg'
import node from '../../image/skills/node.svg'


function Skills() {
    return (
        <div className={styles.skill} id="Skills">
            <h1>Skills</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div className={styles.row}>
                <img src={javascript}></img>
                <img src={html}></img>
                <img src={css}></img>
                <img src={react}></img>
                <img src={typescript}></img>
                <img src={next}></img>
                <img src={node}></img>
            </div>
        </div>
    )
}

export default Skills;