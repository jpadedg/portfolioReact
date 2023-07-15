import styles from './Card.module.css'
import ButtonB from './ButtonB'

function Card({ img, title, tech, description,repo ,site }){
    return(
        <div className={styles.card} id='Projects'>
            <a href={site} target="_blank">
                <img src={img} alt='ERRO'/>
            </a>
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia:</strong> {tech}</p>
                <p>{description}</p>
                <ButtonB text="Acesse meu repositório" link={repo} target="_blank"/>
            </section>
        </div>
    )
}


export default Card