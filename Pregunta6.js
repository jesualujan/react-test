// Mejora: evitar re-render innecesarios con useCallback
import { useCallback, useState } from 'react';

export default function Pregunta6({ items }) {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    console.log('Clic en item');
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={handleClick}>{item}</li>
      ))}
      <button onClick={() => setContador(contador + 1)}>
        Contador: {contador}
      </button>
    </ul>
  );
}
