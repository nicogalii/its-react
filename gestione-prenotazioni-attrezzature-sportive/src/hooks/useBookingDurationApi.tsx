import { useState, useEffect } from "react";
import bookingDurationApi from "../service/bookingDuration.api";

const useBookingDurationApi = (id: number, duration: number) => {
  const [durationBooking, setDurationBooking] = useState(null);

  useEffect(() => {
    bookingDurationApi(id, duration)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella richiesta");
        }
        return response.json();
      })
      .then((result) => setDurationBooking(result))
      .catch((err) => {
        console.error("Errore durante la richiesta API:", err);
      });
  }, [id, duration]); // Effettua la chiamata ogni volta che `id` o `duration` cambiano

  return durationBooking;
};

export default useBookingDurationApi;
