import logo from '../../assets/logo.png';
import moon from '../../assets/moon.png';
import sun from '../../assets/sun.png'

export default function Topo (props) {
    
    return (
        <header className={`${props.darkTheme ? 'bg-gray-800' : 'bg-white'} flex justify-between p-4`}>
            <img src={logo} alt="Logo" className='max-h-9' />
            <button onClick={props.atualizarTema} className='border-2 border-gray-100 rounded-full p-2'>
                <img src={props.darkTheme ? sun : moon} alt="Liga/desliga" className='max-h-7' />
            </button>
        </header>
)}