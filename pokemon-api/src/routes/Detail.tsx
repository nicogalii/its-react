import { useParams } from "react-router";
import usePokeDetailApi from "../hooks/usePokeDetailApi";
import PokeDetailCard from "../components/PokeDetailCard/PokeDetailCard";

const Detail = () => {
  const { name } = useParams();

  const { pokemonDetail, isLoading } = usePokeDetailApi(name);

  return (
    <PokeDetailCard
      name={pokemonDetail?.name}
      weight={pokemonDetail?.weight}
      mainImageUrl={pokemonDetail?.mainImageUrl}
    />
  );

  // return (
  //   <pokemonCard.Conteiner loading={inLoading}>
  //     <PokeCard.element name={pokemonDetail?.name} />
  //   </pokemonCard.Conteiner>
  // );
};

export default Detail;
