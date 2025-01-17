import { EquipmentCard } from "../../models/equipmentApi.model";

type EquipmentProps = {
  equipment: EquipmentCard;
};

const Modal = ({ equipment }: EquipmentProps) => {
  return (
    <div className="detail-container">
      <main>
        <h1>{equipment.name}</h1>
        <p>{equipment.claim}</p>
        <img src={equipment.image} alt={equipment.name} />
        <p>{equipment.pricePerMinute.toFixed(2)}€ al minuto</p>
      </main>
    </div>
  );
};

export default Modal;
