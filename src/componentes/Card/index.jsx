export default function Card (props) {

    const estiloCard = {
        height: '25rem',
    };

    return (
        <div className={`${props.darkTheme ? 'border-gray-500' : 'border-gray-200'}
        hover:border-yellow-500 text-gray-500 leading-loose border flex flex-col justify-center px-9 transition-all duration-1000 text-lg`}
        style={estiloCard}>
            <p className='mb-2'>{props.data}</p>
            <h3 className={`${props.darkTheme ? 'text-white' : 'text-gray-800'}
            font-semibold text-2xl mb-2`}>{props.titulo}</h3>
            <p>{props.empresa}</p>
            <p className=" py-4">{props.paragrafo}</p>
        </div>
    )
}