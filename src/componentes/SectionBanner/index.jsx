import banner from '../../assets/banner.png';

export default function Banner(props) {

    return (
        <section className="flex h-screen">
            <div className={`${props.darkTheme ? 'bg-gray-800' : 'bg-white'} 
            hidden w-screen lg:w-1/2 lg:flex`}>
            <img src={banner} alt="banner" /></div>
            <div className="lg:w-1/2 w-full bg-gray-50 font-sans text-blue-950 font-semibold flex justify-center flex-col pl-5">
                <p className="text-sm tracking-widest">BRANDING / UI / UX / TECNOLOGIA</p>
                <h2 className="font-medium text-6xl leading-normal">Agência de Branding</h2>
                <span className="font-black text-5xl leading-relaxed">e design digital</span>
            </div>
        </section>
)};