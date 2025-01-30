import useEquipmentApi from "../../hooks/useEquipmentApi";
import "./EquipmentList.css";
import { useState } from "react";
import { EquipmentCard } from "../../models/equipmentApi.model";
import Modal from "../Modal/Modal";

// Funzione per l'interfaccia per i dati delle attrezzature
const EquipmentList = () => {
  // Chiamata all'API remota per ottenere la lista delle attrezzature
  const EquipmentListResult = useEquipmentApi(); // Nome variabile reso più leggibile
  const [equipmentDetail, setEquipmentDetail] = useState<null | EquipmentCard>(
    null
  );

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const bottomClick = () => {
    setModalOpen(false);
  };

  return (
    // Lista delle attrezzature
    <>
      <h2>I nostri prodotti</h2>
      <div className="container-box">
        {EquipmentListResult.map((equipment, index) => (
          <div key={index} className="container">
            <div className="container-info">
              <h3>{equipment.name}</h3>
              <p>{equipment.claim}</p>
              <div dangerouslySetInnerHTML={{ __html: equipment.icon }} />
              <p>
                <span>{equipment.pricePerMinute.toFixed(2)}€</span> / min
              </p>

              <button
                onClick={() => {
                  setEquipmentDetail(equipment);
                  setModalOpen(true);
                }}
              >
                Book
              </button>
            </div>
            <img src={equipment.image} alt={equipment.name} />
          </div>
        ))}
        {equipmentDetail && modalOpen && (
          <Modal
            onSubmit={bottomClick}
            onClose={bottomClick}
            equipment={equipmentDetail}
          />
        )}
      </div>
    </>
  );
};

export default EquipmentList;
