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
  heading: "EAST",
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
  if (eddy.heading == "SOUTH") {
    eddy.posX = eddy.posX + 1;
  }
  if (eddy.heading == "WEST") {
    eddy.posX = eddy.posX - 1;
  }
  /*
    FALLS SÜDEN, DANN Y UM EINS ERHÖREN
    */
  if (eddy.heading == "NORD") {
    eddy.posY = eddy.posY - 1;
  }

  /* dsjnksnkjsdnskjs
    TODO: FALLS WESTEN, DANN X UM EINS VERRINGERN
    TODO: FALLS NORDEN, DANN Y UM EINS VERRINGERN
    */
}

function rotate() {
  // FALLS OSTEN, DANN SÜDEN
  if (eddy.heading == "OSTEN") {
    eddy.heading = "SÜDEN";
  }

  if (eddy.heading == "SÜDEN") {
    eddy.heading = "WEST";
  }

  if (eddy.heading == "WEST") {
    eddy.heading = "NORDEN";
  }

  // FALLS SÜDEN, DANN WESTEN
  if (eddy.heading == "NORD") {
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
