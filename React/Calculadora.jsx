import React, { useState } from 'react';

function Calculadora() {
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const somar = () => setResultado(valor1 + valor2);
  const subtrair = () => setResultado(valor1 - valor2);
  const multiplicar = () => setResultado(valor1 * valor2);
  const dividir = () => setResultado(valor1 / valor2);

  return (
    <div>
      <input type="number" value={valor1} onChange={e => setValor1(+e.target.value)} />
      <input type="number" value={valor2} onChange={e => setValor2(+e.target.value)} />
      <button onClick={somar}>+</button>
      <button onClick={subtrair}>-</button>
      <button onClick={multiplicar}>*</button>
      <button onClick={dividir}>/</button>
      <h2>Resultado: {resultado}</h2>
    </div>
  );
}

export default Calculadora;
