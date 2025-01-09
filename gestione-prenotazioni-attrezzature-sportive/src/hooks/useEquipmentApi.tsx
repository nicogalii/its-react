import { useEffect, useState } from "react";
import EquipmentListApi from "../service/EquipmentList.api";

// Funzione per l'interfaccia per i dati delle attrezzature
const useEquipmentApi = () => {
  // Stato per la lista delle attrezzature
  const [EquipmentListResult, setEquipmentListResult] = useState<
    EquipmentResult[]
  >([]);

  // Chiamata all'API remota per ottenere la lista delle attrezzature
  useEffect(() => {
    // Chiamata all'API remota
    EquipmentListApi()
      // Estrazione dei dati dalla risposta
      .then((data: EquipmentResult[]) => {
        // Stampa dei dati estratti
        console.log(data);
        // Salvataggio dei dati estratti nello stato
        setEquipmentListResult(data);
      })
      // Gestione degli errori
      .catch((error) => {
        // Stampa degli errori
        console.log(error);
      });
  }, []);

  return EquipmentListResult;
};

export default useEquipmentApi;
