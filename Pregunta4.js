// ❌ ERROR: async directamente en useEffect
import { useEffect, useState } from 'react';

export default function Pregunta4() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    const data = await res.json();
    setPokemon(data);
  }, []);

  return <div>{pokemon?.name}</div>;
}
