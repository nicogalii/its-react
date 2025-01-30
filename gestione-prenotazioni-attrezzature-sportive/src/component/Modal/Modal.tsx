import { useState } from "react";
import { EquipmentCard } from "../../models/equipmentApi.model";
import useEquipmentDetailApi from "../../hooks/useBookingDurationApi";
import "./Modal.css";

type EquipmentProps = {
  equipment: EquipmentCard;
  onClose: () => void;
  onSubmit: (duration: number) => void;
};

const Modal = ({ onClose, onSubmit, equipment }: EquipmentProps) => {
  const [duration, setDuration] = useState<number>(5);
  useEquipmentDetailApi(equipment.id, duration);

  return (
    <>
      <div className="modal-container">
        <div className="modal">
          <div className="modal-content">
            <h3>{equipment.name}</h3>
            <p>{equipment.claim}</p>
            <img src={equipment.image} alt={equipment.name} />
            <label htmlFor="duration">Duration:</label>
            <div className="duration-box">
              <button
                onClick={() => {
                  if (duration > 5) {
                    setDuration(duration - 5);
                  }
                }}
              >
                -
              </button>
              <input
                type="number"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
              />
              <button
                onClick={() => {
                  if (duration < 20) {
                    setDuration(duration + 5);
                  }
                }}
              >
                +
              </button>
            </div>
            <p>{equipment.pricePerMinute.toFixed(2)}€ al minuto</p>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-submit"
              onClick={() => {
                onSubmit(duration);
                console.log("click");
              }}
            >
              Submit
            </button>
            <button className="btn btn-close" onClick={() => onClose()}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
