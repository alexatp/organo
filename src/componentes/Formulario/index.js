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

        const aoSalvar = (event) => {
            event.preventDefault();
            console.log("formulário foi submetido");
        }

    return (
        <section>
            <h2>Preencha os dados para criar o card do colaborador:</h2>
            <form className="formulario" onSubmit={aoSalvar}>
                <CampoTexto label="Nome" placeholder="Digite seu nome completo" idcampo="nome" obrigatorio={true} />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" idcampo="cargo" obrigatorio={true} />
                <CampoTexto label="Imagem" placeholder="Digite o endereço completo da imagem" idcampo="imagem" obrigatorio={false} />
            <ListaSuspensa label="Qual é o seu time?" idcampo="times" itens={times} obrigatorio={true} />    
            <Botao >
                Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;  