// ❌ ERROR: Event listener sin cleanup
import { useEffect } from 'react';

export default function Pregunta5() {
  useEffect(() => {
    document.addEventListener('click', () => console.log('Click!'));
  }, []);

  return <p>Haz click en cualquier parte.</p>;
}
