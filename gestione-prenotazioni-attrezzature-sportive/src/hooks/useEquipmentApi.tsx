import { useEffect, useState } from "react";
import EquipmentListApi from "../service/EquipmentList.api";

const useEquipmentApi = () => {
  const [EquipmentListResult, setEquipmentListResult] = useState<
    EquipmentResult[]
  >([]);

  useEffect(() => {
    EquipmentListApi()
      .then((data: EquipmentResult[]) => {
        console.log(data);
        setEquipmentListResult(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return EquipmentListResult;
};

export default useEquipmentApi;
