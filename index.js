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
    */
    if (eddy.heading == "EAST") {
        eddy.posX = eddy.posX + 1;
    }
    /*
     FALLS SÜDEN, DANN Y UM EINS ERHÖREN
         */
    if(eddy.heading == "SOUTH"){
        eddy.posY = eddy.posY + 1;
    }

    /*
        TODO: FALLS WESTEN, DANN X UM EINS VERRINGERN
    */
    if(eddy.heading == "WEST"){
        eddy.posY = eddy.posX - 1;
    }

    /* 
        TODO: FALLS NORDEN, DANN Y UM EINS VERRINGERN
    */
     if(eddy.heading == "NORTH"){
        eddy.posY = eddy.posY - 1;
    }
}

function rotate() {
    // FALLS OSTEN, DANN SÜDEN
    if(eddy.heading == "EAST"){
        eddy.heading = "SOUTH";
    }

    // FALLS SÜDEN, DANN WESTEN
    if(eddy.heading == "SOUTH"){
        eddy.heading = "WEST";
    }

    // FALLS WESTEN, DANN NORDEN
    if(eddy.heading == "WEST"){
        eddy.heading = "NORD";
    }

    // FALLS NORDEN, DANN Osten
    if(eddy.heading == "NORD"){
        eddy.heading = "EAST";
    }

    /*
        TODO:FALLS WESTEN, DANN NORDEN
        TODO:FALLS NORDEN, DANN Osten
    */
}

/*
CANVAS ZEICHNEN IN HTML UND ÜBER CONTEXT IMPORTIEREN
ROBOTER EINZEICHNEN
IN DER CANVAS BEWEGUNGEN AUSFÜHREN
*/