import Topo from './componentes/Header/';
import Banner from './componentes/SectionBanner';
import ExperienciaTrabalho from './componentes/SectionWorkExperience';
import Rodape from './componentes/Footer';
import "./App.css";
import React, { useState } from 'react';

function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  const atualizarTema = () => {
      setDarkTheme(!darkTheme);
  }

  return (
    <main className='m-0 p-0 box-border font-poppins font-sans'>
      <Topo atualizarTema={atualizarTema} darkTheme={darkTheme} />
      <Banner darkTheme={darkTheme} />
      <ExperienciaTrabalho darkTheme={darkTheme}/>
      <Rodape darkTheme={darkTheme} />
    </main>
  );
}

export default App;
