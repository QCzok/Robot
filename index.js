/*
Eddy the robot
Eigenschaften:
1. position X
2. position Y
3. Himmelsrichtung
*/
let eddy = {
    posX: 0,
    posY: 0,
    // Orientierung - Himmelsrichtung (Norden, Osten, Süden, Westen)
    heading: 'EAST'
};

/*
Funktionen des Roboters
1. step() -> bewegt sich einen Schritt in seine Himmelsrichtung
2. rotate() -> rotiert sich um seine eigene Achse im Uhrzeigersinn
*/
function step() {
    /*
    FALLS OSTEN, DANN X UM EINS ERHÖHEN
    FALLS SÜDEN, DANN Y UM EINS ERHÖREN

    FALLS WESTEN, DANN X UM EINS VERRINGERN
    FALLS NORDEN, DANN Y UM EINS VERRINGERN
    */
}

function rotate() {
    /*
        FALLS OSTEN, DANN SÜDEN
        FALLS SÜDEN, DANN WESTEN
        FALLS WESTEN, DANN NORDEN
        FALLS NORDEn, DANN Osten
    */
}

/*
CANVAS ZEICHNEN IN HTML UND ÜBER CONTEXT IMPORTIEREN
ROBOTER EINZEICHNEN
IN DER CANVAS BEWEGUNGEN AUSFÜHREN
*/