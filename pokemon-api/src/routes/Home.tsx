import NameCard from "../components/NameCard/NameCard";
import Pagination from "../components/Pagination/Pagination";
import usePokeApi from "../hooks/usePokeApi";

const Home = () => {
  const {
    pokemon,
    goToPreviousPage,
    goToNextPage,
    hasNextPage,
    hasPrevPage,
    page,
    totPages,
  } = usePokeApi(10);

  return (
    <>
      <h1>Pokemon List</h1>

      <div className="pokedex">
        <Pagination
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
          page={page}
          totPages={totPages}
        ></Pagination>
        <ul>
          {pokemon.map((poke, index) => {
            return <NameCard key={index} name={poke.name} />;
          })}
        </ul>
        <Pagination
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
          page={page}
          totPages={totPages}
        ></Pagination>
      </div>
    </>
  );
};

export default Home;
