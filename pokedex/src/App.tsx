import { useEffect, useState } from "react";

type PokemonResult = {
  name: string;
  url: string;
};

type PokemonApiResponse = {
  count: number;
  results: PokemonResult[];
};

const App = () => {
  const [pokemon, setPokemon] = useState<PokemonResult[]>([]);
  const [page, setPage] = useState(0);
  const [totPages, setTotPages] = useState(0);

  // useEffect non puo essere contenuta una funzione asincrona
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${page * 20}&limit=20`)
      .then((res) => {
        return res.json();
      })
      .then((data: PokemonApiResponse) => {
        setPokemon(data.results);
        setTotPages(Math.ceil(data.count / 20));
      });
  }, [page]);

  const goToNextPage = () => {
    if (page < totPages - 1) {
      setPage(page + 1);
    }
  };
  const goToPreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  //
  const hasPreviousPage = (): boolean => {
    return true;
  };
  const hasNextPage = (): boolean => {
    return true;
  };

  return (
    <div>
      <h1>Pokèmon List</h1>
      <ul>
        {pokemon.map((currentPokemon, index) => {
          return <li key={index}>{currentPokemon.name}</li>;
        })}
      </ul>
      <button onClick={goToPreviousPage} disabled={hasPreviousPage()}>
        Previous Page
      </button>
      <button onClick={goToNextPage} disabled={hasNextPage()}>
        Next Page
      </button>
      current page: {page + 1} of {totPages};
    </div>
  );
};

export default App;
