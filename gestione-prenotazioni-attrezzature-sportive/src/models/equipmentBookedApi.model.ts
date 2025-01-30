
// Definizione dei tipi per l'API delle attrezzature
export interface EquipmentCardBooked {
  id: number;
  equipment_id: number;
  user_id: string;
  start_date: string;
  end_date: string;
}
