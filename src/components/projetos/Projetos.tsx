import './Projetos.css'

export default function Projetos(){
    return(
        <>
    <section className='projetos-container'>

        <h1 className='projetos-titulo'>Projetos</h1>

        <div className='projetos' id='projetos'>

            <div className="projeto">
                <img src="/img/projeto-memoteca.png" alt="" />
            </div>

            <div className="projeto">
                <img src="/img/dphdm.png" alt="" />
            </div>

            <div className="projeto">
                <img src="/img/form-registro.png" alt="" />
            </div>

        </div>

        </section>
        </>
    )
}