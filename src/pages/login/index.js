import "./index.scss";

export default function Login() {
  return (
    <main className="page-login">
      <section>
        <div className="logo">
          <img className="imagem" src="/images/odontotooths 1.svg" alt="" />
          <a className="voltar" href="../home">Voltar</a>
        </div>
        <div className="destacar-login">
          <div className="conteudo">
            <div className="txt-icones">
              <img src="/images/perfil 1 (1).svg" alt="perfil" />
              <p>Nome*</p>
            </div>
            <div>
              <input className="f-1" type="text" />
            </div>

            <div className="txt-icones">
              <img src="/images/o-email 1.svg" alt="email" />
              <p>E-mail*</p>
            </div>
            <div>
              <input className="f-1" type="text" />
            </div>

            <div className="txt-icones">
              <img src="/images/cadeado 1.svg" alt="cadeado" />
              <p>Senha*</p>
            </div>
            <div>
              <input className="f-1" type="password" />
            </div>

            <a href="../administrativo">
              <button className="botao">Entrar</button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
