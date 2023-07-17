import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA';
import { useEffect, useState } from 'react';

function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['João Pedro Aded Garuba', 'Desenvolvedor Full-Stack'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 150;
    const [delta, setDelta] = useState(100);


    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => {clearInterval(ticker)}

    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1)
        }
    }

    return (
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem-vindo ao meu Portfólio </strong></h4>
            <h1>Olá, eu sou {text}</h1>
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