import { useEffect, useState } from "react";
import equipmentListApi from "../service/EquipmentList.api";
import { EquipmentCard } from "../models/equipmentApi.model";

const useEquipmentApi = () => {
  // Stato per la lista delle attrezzature
  const [equipmentList, setEquipmentList] = useState<EquipmentCard[]>([]);

  useEffect(() => {
    equipmentListApi()
      .then((result) => {
        console.log(result); 
        setEquipmentList(result); 
      })
      .catch((err) => {
        console.error("Errore durante la richiesta API:", err);
      });
  }, []); // Effettua la chiamata solo al primo render

  return equipmentList;
};

export default useEquipmentApi;
