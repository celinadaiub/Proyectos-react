import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Here is what our alumni say about freeCodeCamp:</h1>
    <Testimonio
    nombre='Emma Bostian'
    pais='Suecia'
    imagen='emma'
    cargo='Ingeniera de software'
    empresa='Spotify'
    testimonio='Ive always struggled with learning javascript. Ive taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.'
    />

<Testimonio
    nombre='Shawn Wang'
    pais='Singapore'
    imagen='shawn'
    cargo='Ingeniero de software'
    empresa='Amazon'
    testimonio='Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.' />
  

    
<Testimonio
    nombre='Sarah Chima'
    pais='Nigeria'
    imagen='sarah'
    cargo='Ingeniera de software'
    empresa='ChatDesk'
    testimonio='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.' />
    </div></div>



  );
}

export default App;
