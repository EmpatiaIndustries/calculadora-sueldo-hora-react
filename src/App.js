import "./App.css";
import { useState } from "react";

function App() {
  // const [state, setState] = useState({
  //   horas: null,
  //   sueldo: null,
  // });

  const [horas, setHoras] = useState(0);
  const [sueldo, setSueldo] = useState(0);

  const atrapaHoras = (e) => {
    setHoras(e.target.value);
  };

  const atrapaSueldo = (e) => {
    setSueldo(e.target.value);
  };

  const calculo = () => {
    let resultado = sueldo / horas;
    return resultado;
  };

  return (
    <div className="App">
      <h1>Calculadora de sueldo por hora</h1>
      <input
        type="number"
        min={0}
        placeholder="Horas Mensuales"
        onChange={atrapaHoras}
      />
      <input
        type="number"
        min={0}
        placeholder="Sueldo Mensual"
        onChange={atrapaSueldo}
      />

      <p>Resultado:</p>

      <p>{`Si quieres ganar $ ${sueldo} trabajando ${horas} horas, debes cobrar $ ${calculo()} por hora`}</p>
      <p></p>
    </div>
  );
}

export default App;
