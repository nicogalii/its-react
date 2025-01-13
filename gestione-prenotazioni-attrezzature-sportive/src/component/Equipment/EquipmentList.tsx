import useEquipmentApi from "../../hooks/useEquipmentApi";
import "./EquipmentList.css";

// Funzione per l'interfaccia per i dati delle attrezzature
const EquipmentList = () => {
  // Chiamata all'API remota per ottenere la lista delle attrezzature
  const EquipmentListResult = useEquipmentApi();

  return (
    // Lista delle attrezzature
    <div className="container-box">
      {EquipmentListResult.map((equipment, index) => (
        <div key={index} className="container">
          <h2>{equipment.name}</h2>
          <p>{equipment.claim}</p>
          <img src={equipment.image} alt={equipment.name} />
          <p>{equipment.pricePerMinute.toFixed(2)}€</p>
          <button
            onClick={() => {
              alert("funziona!");
            }}
          >
            Prenota
          </button>
        </div>
      ))}
    </div>
  );
};

export default EquipmentList;
