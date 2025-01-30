import "../EquipmentList/EquipmentList.css";

import useEquipmentBookedApi from "../../hooks/useEquipmentBookedApi";

const EquipmentBookedList = () => {
  // Chiamata all'API per ottenere la lista delle attrezzature prenotate
  const EquipmentBookedResult = useEquipmentBookedApi();

  return (
    // Lista delle attrezzature
    <>
      <h2>Le tue prenotazioni</h2>
      <div className="container-box">
        {EquipmentBookedResult.map((equipment, index) => (
          <div key={index} className="container">
            <div className="container-info">
              <h3>{equipment.id}</h3>
              <p>{equipment.user_id}</p>
              <p>{equipment.start_date}</p>
              <p>{equipment.end_date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EquipmentBookedList;
