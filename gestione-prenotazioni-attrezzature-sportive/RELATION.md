# Nome del sito: Elite Equipment

## Sito con lo scopo di gestire delle prenotazioni di attrezzature per la palestra tramite una autentificazione o in modo anonimo

### Struttura

**Home**: Qui troviamo la lista delle attrezzature della palestra con ognuno un pulsante per aprire una **modale** dove inserire la durata della prenotazione e confermare la prenotazione.
**Equipment Booked**: Qui appare la lista degli attrezzi prenotati.
**Login/Register**: Qui si ha la possibilità di registrarsi e/o di accedere per avere le proprie prenotazioni personali.

### Hook

**useEquipmentListApi**: Salva la lista delle attrezzature all'interno dello stato
**useBookingDurationApi**: Salva la durata della prenotazione ogni volta che 'duration' e 'id' cambiano
**useEquipmentBookedApi**: Salva la lista delle attrezzature prenotate
**useLoginApi**: **login** -> Salva il token nel localStorage
                **logout** -> Rimuove il token dal localStorage
**useRegisterApi**:

### Service

**EquipmentList.api**: Recupera i dati dall'API contenenti la lista delle attrezzature disponibili.
**bookingDuration.api**: Invia all'API la durata della prenotazione.
**EquipmentBooked.api**: Recupera i dati dall'API contenenti la lista delle attrezzature prenotate.
**Login.api**: Invia all'API username e password per autenticare l'utente.
**Register.api** Invia all'API username e password per registrare l'utente.

### UI

Ho progettato l'inerfaccia evitando un design morbido che potrebbe suggerire pigrizia.
Per quanto riguarda la palette ho scelto il nero e il bianco per avere un aspetto moderno.

#### Installazione dell'icona per il menu-mobile

**menu-hamburger**: npm install hamburger-react
