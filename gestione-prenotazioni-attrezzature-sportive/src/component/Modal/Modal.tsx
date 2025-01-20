import { useState } from "react";
import { EquipmentCard } from "../../models/equipmentApi.model";
import "./Modal.css";

type EquipmentProps = {
  equipment: EquipmentCard;
  onClose: () => void;
  onSubmit: () => void;
  onCancel: () => void;
};

const Modal = ({ onClose, onSubmit, onCancel, equipment }: EquipmentProps) => {
  const [duration, setDuration] = useState<number>(10);
  return (
    <>
      <div className="modal-container">
        <div className="modal">
          <div className="modal-header">
            <p className="close" onClick={() => onClose()}>
              X
            </p>
          </div>
          <div className="modal-content">
            <h3>{equipment.name}</h3>
            <p>{equipment.claim}</p>
            <img src={equipment.image} alt={equipment.name} />
            <label htmlFor="duration">Duration:</label>
            <div className="duration-box">
              <button
                onClick={() => {
                  if (duration > 10) {
                    setDuration(duration - 10);
                  }
                }}
              >
                -10
              </button>
              <input
                type="number"
                id="duration"
                value={duration}
                min={10}
                // onChange={handleDurationChange}
              />
              <button
                onClick={() => {
                  if (duration < 60) {
                    setDuration(duration + 10);
                  }
                }}
              >
                +10
              </button>
            </div>
            <p>{equipment.pricePerMinute.toFixed(2)}€ al minuto</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-submit" onClick={() => onSubmit()}>
              Submit
            </button>
            <button className="btn btn-cancel" onClick={() => onCancel()}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
