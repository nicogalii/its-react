import EquipmentList from "../../component/EquipmentList/EquipmentList";
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
