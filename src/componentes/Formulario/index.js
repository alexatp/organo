import CampoTexto from '../CampoTexto'; 
import './Formulario.css';

const Formulario = () => {
    return (
        <section>
            <h2>Preencha os dados para criar o card do colaborador:</h2>
            <form className="formulario">
                <CampoTexto label="Nome" placeholder="Digite seu nome completo" idcampo="nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" idcampo="cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço completo da imagem" idcampo="imagem" />
            </form>
        </section>
    )
}

export default Formulario;  