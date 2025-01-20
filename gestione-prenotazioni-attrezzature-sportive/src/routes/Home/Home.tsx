import EquipmentList from "../../component/Equipment/Equipment";
import Hero from "../../component/Hero/Hero";
import "./Home.css";

// Componente che rappresenta la pagina principale dell'applicazione
const Home = () => {
  return (
    <>
      <Hero />
      <EquipmentList />
    </>
  );
};

export default Home;
