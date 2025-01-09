import EquipmentList from "../component/EquipmentList";
import Header from "../component/Header";
import "../routes/styles/Home.css";

// Componente che rappresenta la pagina principale dell'applicazione
const Home = () => {
  return (
    <div>
      <Header />
      <h1>Gym Equipment</h1>

      {/* Componente che mostra una lista di attrezzature */}
      <EquipmentList />
    </div>
  );
};

export default Home;
