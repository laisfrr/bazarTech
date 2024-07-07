import './Rodape.css'
function Rodape() {
  return (
    <footer className="rodape-container">
      <section className="rodape-midias">
        <p>Mídias Sociais</p>
        <article className="midias-icones">
          <a href="">
            <img src="/whatsapp.svg" alt="icone do whatsapp" />
          </a>
          <a href="">
            <img src="/instagram.svg" alt="icone do instagram" />
          </a>
          <a href="">
            <img src="/twitter-x.svg" alt="icone do twitter-x" />
          </a>
        </article>
      </section>
      <p className="rodape-copy">
        © 2024-2025 Bazar Tech.Todos os direitos reservados.
      </p>
      <section className="rodape-atendimento">
        <p className="rodape-contato">Contato</p>
        <strong>
          Email:<a href="mailto:bazartech@email.com">bazartech@email.com</a>
        </strong>
      </section>
    </footer>
  )
}

export default Rodape
