
const rover = {
    direction: "N",
    x: 0,
    y: 0,
};

function turnLeft(rover){
    if (rover.direction === "N"){
        rover.direction = "W";
        //console.log(rover.direction); 
    } else if (rover.direction === "W"){
        rover.direction = "S";
        //console.log(rover.direction); 
    } else if (rover.direction === "S"){
        rover.direction = "E";
        //console.log(rover.direction);
    } else if (rover.direction === "E"){
            rover.direction = "N";
            //console.log(rover.direction);
    }
}

function turnRight(rover){
    if (rover.direction === "N"){
        rover.direction = "E";
        //console.log(rover.direction); 
    } else if (rover.direction === "E"){
        rover.direction = "S";
        //console.log(rover.direction); 
    } else if (rover.direction === "S"){
        rover.direction = "W";
        //console.log(rover.direction);
    } else if (rover.direction === "W"){
            rover.direction = "N";
            //console.log(rover.direction);
    }
}

function moveForward(rover){
    if (rover.x >= 0 && rover.x < 9){
        if (rover.y >= 0 && rover.y < 9){
            if (rover.direction === "N"){
                rover.y--;
                //console.log(`Position is: ${rover.x}, ${rover.y}`);
            } else if (rover.direction === "S"){
                rover.y++;
                //console.log(`Position is: ${rover.x}, ${rover.y}`);
            } else if (rover.direction === "W"){
                rover.x--;
                //console.log(`Position is: ${rover.x}, ${rover.y}`);
            } else if (rover.direction === "E"){
                rover.x++;
                //console.log(`Position is: ${rover.x}, ${rover.y}`);
        } else {
            console.log("The rover cannot be placed outside the grid.");
        }
    }
    }
}

function manageRover(rover, directions){
    for (let i = 0; i <= directions.length; i++){
        let orientation = directions[i];
        switch(orientation){
            case "l":
                turnLeft(rover, orientation);
                //console.log(`Rover facing direction ${rover.direction}`);
                break;
            case "r":
                turnRight(rover, orientation);
                //console.log(`Rover facing direction ${rover.direction}`);
                break;
            case "f":
                moveForward(rover, orientation);
                console.log(`Rover facing direction ${rover.direction}, x is ${rover.x} and y is ${rover.y}`);
                break;
            
        }
        
    }
}
manageRover(rover, "lf");
manageRover(rover, "l");
manageRover(rover, "fff");