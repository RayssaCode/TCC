import './index.scss';




export default function Login(){
    return(
        <main>
            <section className='page-login'>
                <div className='logo'>
                    <img className='imagem' src='/images/odontotooths 1.svg' alt=''></img>
                    <a className='voltar' href='../home'>Voltar</a>
                </div>
                <div className='destacar-login'>
                    <div className='conteudo'>
                        <br/>
                        <div className='logos'>
                            <img src='' alt='perfil'>Nome*</img>
                            <br/>
                        </div>
                        <input className='f-1' type='text'></input>
                        <br/>
                        <br/>
                        <div className='logos'>
                            <img src='' alt='email'>E-mail<br/></img>
                        </div>
                        <input className='f-1' type='text'></input>
                        <div className='logos'>
                            <br/>
                            <img src='' alt='cadeado'>Senha*</img>
                        </div>
                        <input className='f-1' type='password'></input>
                        <br/>
                        <br/>
                        <a href='../administrativo'>
                            <button className='botao'>
                                Entrar
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}