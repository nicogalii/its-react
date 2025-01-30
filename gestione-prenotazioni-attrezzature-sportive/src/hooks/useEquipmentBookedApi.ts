import { useEffect, useState } from "react";
import equipmentBookingApi from "../service/EquipmentBooked.api";
import { EquipmentCardBooked } from "../models/equipmentBookedApi.model";


const useEquipmentBookedApi = () => {

  const [equipmentBooked, setEquipmentBooked] = useState<EquipmentCardBooked[]>(
    []
  );

  useEffect(() => {
    equipmentBookingApi()
      .then((result) => {
        console.log(result);
        setEquipmentBooked(result);
      })
      .catch((err) => {
        console.error("Errore durante la richiesta API:", err);
      });
  }, []);

  return equipmentBooked;
};

export default useEquipmentBookedApi;
