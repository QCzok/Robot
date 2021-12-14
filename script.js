let eddy = {
    posX: 0,
    posY: 0,
   
    heading: 'EAST'
};

function step() {
   
    if (eddy.heading == 'EAST') {
        if (eddy.posX == 9) {
            alert("Du bist an eine Grenze gestoßen!")
        }
        else {
            eddy.posX = eddy.posX + 1;
        }
    }
    if (eddy.heading == "SOUTH") {
        if(eddy.posY == 9) {
            alert("Du bist an eine Grenze gestoßen!")
        } else {
            eddy.posY = eddy.posY + 1;
        }
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(eddy.posX * 50, eddy.posY * 50, 50, 50);
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = 'blue';
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
ctx.shadowBlur    = 5;
ctx.shadowColor   = 'rgba(204, 204, 204, 0)';
ctx.fillRect(5,5,50,50);
/*
CANVAS ZEICHNEN IN HTML UND ÜBER CONTEXT IMPORTIEREN
ROBOTER EINZEICHNEN
IN DER CANVAS BEWEGUNGEN AUSFÜHREN
*/