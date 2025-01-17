import { useEffect, useState } from "react";
import EquipmentListApi from "../service/EquipmentList.api";
import { EquipmentCard } from "../models/equipmentApi.model";

// Funzione per l'interfaccia per i dati delle attrezzature
const useEquipmentApi = () => {
  // Stato per la lista delle attrezzature
  const [EquipmentList, setEquipmentList] = useState<EquipmentCard[]>([]);

  // Chiamata all'API remota per ottenere la lista delle attrezzature
  useEffect(() => {
    // Chiamata all'API remota
    EquipmentListApi()
      // Estrazione dei dati dalla risposta
      .then((data: EquipmentCard[]) => {
        // Stampa dei dati estratti
        console.log(data);
        // Salvataggio dei dati estratti nello stato
        setEquipmentList(data);
      })
      // Gestione degli errori
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return EquipmentList;
};

export default useEquipmentApi;
