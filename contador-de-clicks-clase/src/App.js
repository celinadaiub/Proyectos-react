import React from 'react';
import './App.css';
import freeCodeCampLogo from'./imagenes/logo.png'
import Boton from './componentes/Boton'
import Contador from './componentes/contador';


class App extends React.Component{
  constructor(){
    super();
    this.state ={
      numClics : 0 , 
    };
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic(){
    this.setState(({ numClics })=>({ numClics :numClics + 1}));
  }


  reiniciarContador(){
    this.setState({ numClics:0 });
  }







  render(){
    return (
      <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
          <img
            className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt='Logo de freeCodeCamp'
          />
          
        </div>
        <div className='contenedor-principalcontador'>
          <Contador numClics={this.state.numClics } />
          <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={this.manejarClic}/>
          <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={this.reiniciarContador}/>
  
  
  
  
  
        </div>
  
  
      </div>
    );
  }
  }








// function App() {
//   const[numClics, setNumClics]= useState(0);
  
//   const manejarClic=() => {
//     setNumClics(numClics+1);
//   }
  
//   const reiniciarContador = () => {
//     setNumClics(0);
   
//   }


//   return (
//     <div className='App'>
//       <div className='freecodecamp-logo-contenedor'>
//         <img
//           className='freecodecamp-logo'
//           src={freeCodeCampLogo}
//           alt='Logo de freeCodeCamp'
//         />
        
//       </div>
//       <div className='contenedor-principalcontador'>
//         <Contador numClics={numClics } />
//         <Boton
//         texto='Clic'
//         esBotonDeClic={true}
//         manejarClic={manejarClic}/>
//         <Boton
//         texto='Reiniciar'
//         esBotonDeClic={false}
//         manejarClic={reiniciarContador}/>





//       </div>


//     </div>
//   );
// }

export default App;
