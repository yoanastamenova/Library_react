import "./App.css";
import { Footer } from "./components/Footer/Footer.jsx";
import { Header } from "./components/Header/Header.jsx";
import { Body } from "./views/body/Body.jsx";

// hooks son funciones que interactuan con el estado de las variables 
//USE STATE recibe un valor inicial 
// USE NAVIGATE usa la funcion navigate("le pasamos aqui la ruta") es el hook de navegacion entre rutas 
// Callback - 
// useEffect ( obligatorio pasar una funcion flecha anonima, segundo opcional array de dependencias )
// USE EFFECT tener preparada serie de instruciones que se produce cuando hara cambios en el array

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
