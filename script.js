canvas.getContext("webgl");



let eddy = {
    posX: 0,
    posY: 0,
   
    heading: 'EAST'
};

function step() {
   
    if (eddy.heading == 'EAST') {
        eddy.posX = eddy.posX + 1;
    }
  
    if (eddy.heading == "SOUTH") {
        eddy.posY = eddy.posY + 1;
    }

  
    if (eddy.heading == "WEST") {
       
        if (eddy.posX == 0) {
            alert("Du bist an eine Grenze gestoßen!")
        } else {
            eddy.posX = eddy.posX - 1;
        }
    }

 
    if (eddy.heading == "NORTH") {
      
        if(eddy.posY == 0) {
            alert("Du bist an eine Grenze gestoßen!")
        } else {
            eddy.posY = eddy.posY - 1;
        }
    }
    update();
}

function rotate() {
  
    if (eddy.heading == "EAST") {
        eddy.heading = "SOUTH";
        update();
        return;
    };


   
    if (eddy.heading == "SOUTH") {
        eddy.heading = "WEST";
        update();
        return;
    }

  
    if (eddy.heading == "WEST") {
        eddy.heading = "NORTH";
        update();
        return;
    }

   
    if (eddy.heading == "NORTH") {
        eddy.heading = "EAST";
        update();
        return;
    }
}

function update() {
    document.getElementById("posX").innerHTML = eddy.posX;
    document.getElementById("posY").innerHTML = eddy.posY;
    document.getElementById("heading").innerHTML = eddy.heading;
}

/*
CANVAS ZEICHNEN IN HTML UND ÜBER CONTEXT IMPORTIEREN
ROBOTER EINZEICHNEN
IN DER CANVAS BEWEGUNGEN AUSFÜHREN
*/