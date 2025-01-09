import useEquipmentApi from "../hooks/useEquipmentApi";

// Funzione per l'interfaccia per i dati delle attrezzature
const EquipmentList = () => {
  // Chiamata all'API remota per ottenere la lista delle attrezzature
  const EquipmentListResult = useEquipmentApi();

  return (
    // Lista delle attrezzature
    <div>
      {EquipmentListResult.map((equipment, index) => (
        <div key={index}>
          <h2>{equipment.name}</h2>
          <p>{equipment.claim}</p>
          <img src={equipment.image} alt={equipment.name} />
          <p>{equipment.pricePerMinute}</p>
        </div>
      ))}
    </div>
  );
};

export default EquipmentList;
