let eddy = {
    posX: 0,
    posY: 0,
   
    heading: 'EAST'
};

function step() {
   
    if (eddy.heading == 'EAST') {
        if (eddy.posX == canvas.width) {
            alert("Du bist an eine Grenze gestoßen!")
        }
        else {
            eddy.posX = eddy.posX + 1;
        }
    }
    if (eddy.heading == "SOUTH") {
        if(eddy.posY == canvas.width) {
            alert("Du bist an eine Grenze gestoßen!")
        } else {
            eddy.posY = eddy.posY + 1;
        }
    }
  
    if (eddy.heading == "WEST") {
       
        if (eddy.posX == canvas.width) {
            alert("Du bist an eine Grenze gestoßen!")
        } else {
            eddy.posX = eddy.posX - 1;
        }
    }

 
    if (eddy.heading == "NORTH") {
      
        if(eddy.posY == canvas.width) {
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
    ctx.drawImage(img, eddy.posX, eddy.posY, img.width / 4, img.height / 4);
}


var img = document.getElementById('meinBild');
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.drawImage(img, 0, 0, img.width / 4, img.height / 4 );

