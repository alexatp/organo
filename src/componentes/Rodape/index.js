
import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul  aria-label="Redes Sociais">
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/imagens/facebook.png" alt="Facebook da Alura" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/imagens/twitter.png" alt="Twitter da Alura" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/imagens/instagram.png" alt="Instagran da Alura" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Alura.
            </p>
        </section>
    </footer>)
}

export default Rodape