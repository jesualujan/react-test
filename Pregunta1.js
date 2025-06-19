// ❌ ERROR: Mutación directa del estado
import { useState } from 'react';

export default function Pregunta1() {
  const [count, setCount] = useState(0);

  function incrementar() {
    count = count + 1; // ← Esto está mal, arreglalo
  }

  return <button onClick={incrementar}>Contador: {count}</button>;
}
