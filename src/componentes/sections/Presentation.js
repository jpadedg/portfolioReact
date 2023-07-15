import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA';
import ButtonB from '../elements/ButtonB';

function Presentation(){
    return (
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portfólio </strong></h4>
            <h1>Olá, eu sou o João Pedro Aded!</h1>
            <p>
                Sou uma pessoa apaixonada por tecnologia, <br/>
                gosto de desafios e de resolver problemas. <br/>
                Me formei em engenharia da computação e estou <br/>
                fazendo uma formação em Full-Stack na escola DNC <br/>
                para aprender tecnologias requisitadas no mercado como: <br/>
                React, Next, Node e bastante javascript!! <br/><br/>
                Estou em busca de oportunidade para por em prática <br/>
                todo o conhecimento adquirido e me desenvolver profissionalmente. <br/>
            </p>
            <ButtonA link='https://outlook.live.com/mail/0/' text='Conecte-se comigo!'></ButtonA>
        </div>
    )
}

export default Presentation;