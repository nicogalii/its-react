import useEquipmentApi from "../hooks/useEquipmentApi";

const EquipmentList = () => {
  const EquipmentListResult = useEquipmentApi();

  return (
    <div>
      {EquipmentListResult.map((equipment, index) => (
        <div key={index}>
          <h2>{equipment.name}</h2>
          <p>{equipment.claim}</p>
          <img>{equipment.image}</img>
          <p>{equipment.pricePerMinute}</p>
        
        </div>
      ))}
    </div>
  );
};

export default EquipmentList;
