import './Apresentacao.css'



export default function Apresentacao(){
    return(
       <>
        <section className='apresentacao-container'>
       <div className="apresentacao">

        <div className='descricao'>
            <h1>Bem-Vindo ao meu Portfólio!</h1>
            <p>Olá, meu nome é Vítor Gabriel e sou um Desenvolvedor Front-End apaixonado por criar soluções digitais atraentes e intuitivas.</p>
        </div>

        <img id='foto' src="/img/perfilDoLinkedin.jpg" alt="" />

        </div>
        </section>

    
        </>
        
      
    )
}