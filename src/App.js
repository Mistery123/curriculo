import logo from './logo.svg';
import './App.css';

import Micomponente from './components/Micomponente';


function Bienvenida(){
  var presentacion = <div>
        
      </div>
  return presentacion;
}
function App() {
  var nombre = "Josue";
  

  return (
    <div className="App">
      <header className="componentes">
        <section className="componente">
          <Micomponente></Micomponente>
        </section>
        
      </header>
          
    </div>
  );
}

export default App;
