import Card from '../Card';

export default function ExperienciaTrabalho(props) {
    return (
        <section className={`${props.darkTheme ? 'bg-gray-700' : 'bg-gray-100'} 
        py-9 flex flex-wrap`}>
            <div className='flex flex-col text-center justify-center w-4/5 mx-auto mt-9 max-w-3xl'>

                <h2 className={`${props.darkTheme ? 'text-gray-300' : 'text-gray-800'} 
                text-5xl font-poppins font-sans my-6 font-extrabold`}>Experiências De Trabalho</h2>

                <hr className='bg-yellow-500 w-1/5 h-1 mx-auto'></hr>

                <p className={`${props.darkTheme ? 'text-gray-400' :'text-gray-500'} 
                my-9 text-lg`}>
                Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                Sites e Marketing Digital, nos empenhamos diariamente para entregar
                resultados que tragam impacto aos nossos clientes.
                </p>
            </div>
            <div className=
            {`${props.darkTheme ? 'bg-gray-700' : 'bg-gray-100'} 
            lg:flex justify-center mx-auto max-w-7xl h-full p-7`}>
                <Card darkTheme={props.darkTheme}
                data="JUNHO 2012 - 2016"
                titulo="Web Designer"
                empresa="Pied Piper StartUp."
                paragrafo="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
                />
                <Card darkTheme={props.darkTheme}
                    data="AGOSTO 2016 - 2019"
                    titulo="Product Designer"
                    empresa="E Corp."
                    paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra, impactando o no momento certo"
                />
                <Card darkTheme={props.darkTheme}
                    data="FEVEREIRO 2019 - 2021"
                    titulo="Digital Consulting"
                    empresa="Arasaka Inc."
                    paragrafo="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
                />
            </div>
        </section>
)}