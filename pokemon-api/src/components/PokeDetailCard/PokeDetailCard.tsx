import "./PokeDetailCard.css";

type PokemonDetailProps = {
  name: string;
  weight: number;
  mainImageUrl: string;
};

const PokeDetailCard = (props: PokemonDetailProps) => {
  return (
    <div>
      <img src="{props.mainImageUrl}" alt="{props.name}" />
      <h2>{props.name}</h2>
      <p>Weight: {props.weight}</p>
    </div>
  );
};

export default PokeDetailCard;
