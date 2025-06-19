// ❌ ERROR: setInterval no actualiza correctamente el estado
import { useEffect, useState } from 'react';

export default function Pregunta2() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(time + 1); // ← No siempre actualiza correctamente
    }, 1000);
  }, []);

  return <p>Tiempo: {time}</p>;
}
