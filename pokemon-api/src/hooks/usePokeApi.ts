import { useEffect, useState } from "react";
import { pokemonListApi } from "../services/pokeAPI";

type PokemonResult = {
  name: string;
  url: string;
};

type PokemonApiResponse = {
  count: number;
  results: PokemonResult[];
};

const DEFAULT_MAX_RESULTS = 10;

const usePokeApi = (maxResults = DEFAULT_MAX_RESULTS) => {
  const [pokemon, setPokemon] = useState<PokemonResult[]>([]);
  const [page, setPage] = useState(0);
  const [totPages, setTotPages] = useState(0);

  // funzione di callback non deve essere una promise
  useEffect(() => {
    pokemonListApi({ maxResults, page })
      .then((data: PokemonApiResponse) => {
        setPokemon(data.results);
        setTotPages(Math.ceil(data.count / maxResults));
      })
      .catch((err) => console.error(err));
  }, [page, maxResults]);

  const goToNextPage = () => {
    if (page < totPages - 1) setPage(page + 1);
  };

  const goToPreviousPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const hasPrevPage = page === 0;
  const hasNextPage = page === totPages - 1;

  return {
    pokemon,
    goToPreviousPage,
    goToNextPage,
    hasPrevPage,
    hasNextPage,
    page,
    totPages,
  };
};

export default usePokeApi;
