import EquipmentList from "../Equipment/EquipmentList";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <h1>Gym Equipment</h1>
      {/* Componente che mostra una lista di attrezzature */}
      <EquipmentList />
    </div>
  );
};

export default Main;
