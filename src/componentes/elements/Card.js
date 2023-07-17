import styles from './Card.module.css'
import ButtonB from './ButtonB'
import {useState} from 'react'

function Card({ img, title, tech, description,repo ,site }){

    const [info, setInfo] = useState(false)

    function infoOn(){
        setInfo(true)
    }

    function infoOff(){
        setInfo(false)
    }

    return(
        <div onMouseLeave={infoOff} className={styles.card} id='Projects'>
            <a onMouseEnter={infoOn} href={site} target="_blank">
                <img src={img} alt='ERRO'/>
            </a>

            {info === true &&(
                <section>
                    <h3>{title}</h3>
                    <p><strong>Tecnologia:</strong> {tech}</p>
                    <p>{description}</p>
                    <ButtonB text="Acesse meu repositório" link={repo} target="_blank"/>
                </section>
            )}

        </div>
    )
}


export default Card