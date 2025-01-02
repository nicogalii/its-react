import { useEffect, useState } from "react";
import { pokemonDetailAPI } from "../services/pokeAPI";

type PokemonDetailResult = {
  name: string;
  weight: number;
  mainImageUrl: string;
};

type PokemonDetailResponse = {
  name: string;
  weight: number;
  sprite: {
    front_default: string;
    back_default: string;
  };
};

// response mapping
const mapPokemonDetailToClient = (
  pokemonApiResponse: PokemonDetailResponse
): PokemonDetailResult => {
  return {
    name: pokemonApiResponse.name,
    weight: pokemonApiResponse.weight,
    mainImageUrl: pokemonApiResponse.sprite.front_default,
  };
};

const usePokeDetailApi = (name: string) => {
  const [pokemonDetail, setPokemDetail] = useState<PokemonDetailResult>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    pokemonDetailAPI(name)
      .then((data: PokemonDetailResponse) => {
        const pokemonForClient = mapPokemonDetailToClient(data);
        setPokemDetail(pokemonForClient);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [name]);

  return { pokemonDetail, isLoading };
};

export default usePokeDetailApi;
