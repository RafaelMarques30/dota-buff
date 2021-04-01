import logo from './fae.webp';
import logoMamute from './images/maramutao-cabuloso.png';
import './App.css';
import {useState} from "react"

function App() {
  const guedes = true
  const [corBotao, setCorBotao] = useState("white")
  const [resultado, setResultado] = useState(0)
  const [valorA, setValorA] = useState(0)
  const [valorB, setValorB] = useState(0)
  const somar = () => {
    setResultado(valorA+valorB)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logoMamute} className="App-Mamute"/>
        <p style={{color: corBotao}}>
         Mamutao Do Fael {resultado}
        </p>
        {/* <input onChange={(input)=>setValorA( parseInt(input.target.value) )}></input>
        <input onChange={(input)=>setValorB( parseInt(input.target.value) )}></input>
        <button onClick={()=>somar()}>somar</button>
        <button onClick={()=>setCorBotao("green")}>Verde</button>
        <button onClick={()=>setCorBotao("blue")}>Azul</button> */}
      </header>
    </div>
  );
}

export default App;
