// Refactor: extraer lógica del reloj en un custom hook
import { useEffect, useState } from 'react';

export default function Pregunta7() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);
  }, []);

  return <h2>{hora.toLocaleTimeString()}</h2>;
}
