import { useState } from 'react';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import './Formulario.css';

const Formulario = (props) => {
    
    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado ({
            nome,
            cargo,
            imagem,
            time
        })
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    return (
        <section>
            <h2>Preencha os dados para criar o card do colaborador:</h2>
            <form className="formulario" onSubmit={aoSalvar}>
                <CampoTexto
                    label="Nome"
                    placeholder="Digite seu nome completo"
                    idcampo="nome"
                    obrigatorio={true}
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />

                <CampoTexto
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    idcampo="cargo"
                    obrigatorio={true}
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço completo da imagem"
                    idcampo="imagem"
                    obrigatorio={false}
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa 
                label="Qual é o seu time?" 
                idcampo="times" 
                itens={props.times} 
                obrigatorio={true} 
                aoAlterado={valor => setTime(valor)}
                valor={time}
                />
                <Botao >
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;  