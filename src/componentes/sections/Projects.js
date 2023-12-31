import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import ldccpx from '../../image/projects/ldccpx.svg'
import arquitetura from '../../image/projects/arquitetura.svg'
import buscador from '../../image/projects/buscador.svg'
import portfolio from '../../image/projects/portfolio.svg'
import tarefas from '../../image/projects/tarefas.svg'
import filmes from '../../image/projects/filmes.svg'

function Projects() {
    return(
        <div className={styles.projects} id="Projects">
            <h1>Projetos</h1>
            <Card 
            img={filmes}
            title="Um Movie List de filmes alimentado por uma API usando React."
            tech="HTML, SASS, React, React Router e Axios."
            description="Um site onde aparecem diversos filmes, podendo realizar buscas e ao selecionar um filme 
                            vai para outra página onde tem informações a mais sobre o filme selecionado. 
                            O site é alimentado pela API The Movie DB"
            repo="https://github.com/jpadedg/Movies"
            site="https://movies-flame.vercel.app"
                />
            
            <Card 
            img={tarefas}
            title="Organizador de tarefas usando React."
            tech="HTML, SASS, React e React Router."
            description="Um site onde é possivel adicionar novas tarefas e dar um check quando ela for realizada,
                         podendo ir para outra página onde passa dinamicamente os dados."
            repo="https://github.com/jpadedg/gerenciadorTarefas"
            site="https://gerenciador-tarefas-lilac.vercel.app"
                />
            
            <Card 
            img={portfolio}
            title="Portfolio utilizando React."
            tech="HTML, CSS e React."
            description="Criando uma página de portfolio com skills e projetos realizados."
            repo="https://github.com/jpadedg/portfolioReact"
            site="https://portfolio-react-navy-xi.vercel.app"
                />

            <Card 
            img={ldccpx}
            title="landing Page para CCXP."
            tech="HTML, CSS e Javascript."
            description="Desenvolvimento de uma Landing Page durante o curso de formação em tecnologia."
            repo="https://github.com/jpadedg/landingPage-ccxp"
            site="https://landingpage-ccxp.vercel.app"
                />
            
            <Card
             img={arquitetura}
             title="landing Page para o ramo de arquitetura."
             tech="HTML, CSS e Javascript."
             description="Desenvolvimento de uma Landing Page, captando os usuarios que preenchem o formulario com o MonkeySheet."
             repo="https://github.com/jpadedg/landingPage_arquitetura"
             site="https://landingpage-arquitetura.netlify.app"
                />

            <Card 
            img={buscador}
            title="Buscador de paises usando API."
            tech="HTML, CSS, Javascript e usando uma API de países"
            description="Criando uma pagina para busca de países, alimentado por uma API para buscar informações sobre os países."
            repo="https://github.com/jpadedg/buscadorPaises"
            site="https://buscadorpaises-api.netlify.app"
                />

            <div className={styles.center} >
                <ButtonB text="Ver Repositorio Completo" target="_blank" link="https://github.com/jpadedg"/>
            </div>
        </div>
    )
}

export default Projects