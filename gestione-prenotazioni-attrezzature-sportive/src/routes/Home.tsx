import EquipmentList from "../component/EquipmentList";

// Componente che rappresenta la pagina principale dell'applicazione
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>

      {/* Componente che mostra una lista di attrezzature */}
      <EquipmentList />
    </div>
  );
};

export default Home;
