// ❓ Pregunta 7: Renderizado infinito por efecto mal configurado
// 🧩 ¿Qué está causando que la app se trabe o entre en bucle infinito?
// ¿Cómo podrías evitarlo respetando la lógica?

import { useState, useEffect } from 'react';

function AutoIncrement() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1); // ❌ ERROR: actualización sin control
  }, [count]);

  return <p>Count: {count}</p>;
}
