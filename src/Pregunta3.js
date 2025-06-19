// ❌ ERROR: Hook dentro de condicional
import { useEffect } from 'react';

export default function Pregunta3({ nombre }) {
  if (nombre) {
    useEffect(() => {
      console.log('¡Hola, ' + nombre + '!');
    }, []);
  }

  return <h1>Bienvenido</h1>;
}
