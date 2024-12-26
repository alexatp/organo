import CampoTexto from '../CampoTexto'; 
import ListaSuspensa from '../ListaSuspensa'; 
import Botao from '../Botao'; 
import './Formulario.css';

const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        ' Inovação e Gestão'
        ]

    return (
        <section>
            <h2>Preencha os dados para criar o card do colaborador:</h2>
            <form className="formulario">
                <CampoTexto label="Nome" placeholder="Digite seu nome completo" idcampo="nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" idcampo="cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço completo da imagem" idcampo="imagem" />
            <ListaSuspensa label="Qual é o seu time?" idcampo="times" itens={times} />    
            <Botao >
                Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;  