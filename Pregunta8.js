// ⚠️ TRAMPA: mutación directa de estado en onChange
import { useState } from 'react';

export default function Pregunta8() {
  const [valor, setValor] = useState('');

  return (
    <div>
      <input value={valor} onChange={(e) => valor = e.target.value} />
      <p>Valor: {valor}</p>
    </div>
  );
}
