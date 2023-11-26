import Logo from '../../assets/logo.png'
import iconeFacebook from '../../assets/facebook.png'
import iconeTwitter from '../../assets/twitter.png'
import iconeLinkedin from '../../assets/linkedin.png'
import iconeDribble from '../../assets/dribble.png'
import iconeBehance from '../../assets/behance.png'
import iconeGooglePlus from '../../assets/google-plus.png'

export default function Rodape(props) {
    return(
    <section>
        <footer className={`${props.darkTheme ? 'bg-gray-800' : 'bg-white'}
        flex flex-col items-center justify-center pt-11`}>
            <img className='h-auto w-auto' src={Logo} alt="logomarca"/>
            <p className='font-sans text-gray-500 max-w-2xl leading-loose text-center text-lg p-9'>
            Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
            ferramentas e tecnologias personalizadas.
            </p>
            <div className='flex space-x-4'>
                <img className='h-11' src={iconeFacebook} alt="facebook"/>
                <img className='h-11' src={iconeTwitter} alt="twitter"/>
                <img className='h-11' src={iconeLinkedin} alt="linkedin"/>
                <img className='h-11' src={iconeDribble} alt="dribble"/>
                <img className='h-11' src={iconeBehance} alt="behance"/>
                <img className='h-11' src={iconeGooglePlus} alt="google plus"/>
            </div>
            <div className='pt-10 py-5'>
                <p className='text-gray-500'>Copyright 2022 &copy; <span className='text-yellow-500'>Brunä Gomes</span></p>
            </div>
        </footer>
    </section>
)}