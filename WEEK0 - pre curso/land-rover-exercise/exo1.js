// Rover object goes here:
/*const rover = {
    direction: 'N', //North
    x: 0, //horizontal
    y: 0, //vertical
    travelLog: [] //To save all the moves
};

//Function to turn left
function turnLeft(rover) {
    console.log('turnLeft was called!');

    switch (rover.direction) {
        case 'N':
            rover.direction = 'W'
            break;
        case 'W':
            rover.direction = 'S';
            break;
        case 'S':
            rover.direction = 'E';
            break;
        case 'E':
            rover.direction = 'N';
            break;
    }
    console.log(`The Rover is now currently facing ${rover.direction} and its position is still x: ${rover.x}, y: ${rover.y}`);
}

//Function to turn right
function turnRight(rover) {
    console.log('turnRight was called!');

    switch (rover.direction) {
        case 'N':
            rover.direction = 'E'
            break;
        case 'W':
            rover.direction = 'N';
            break;
        case 'S':
            rover.direction = 'W';
            break;
        case 'E':
            rover.direction = 'S';
            break;
    }
    console.log(`The Rover is now currently facing ${rover.direction} and its position is still x: ${rover.x}, y: ${rover.y}`);
}

//Function to move forward the robot
function moveForward(rover) {
    console.log('moveForward was called');

    if (rover.direction === 'N' && rover.y > 0) {
        rover.y--;
    } else if (rover.direction === 'W' && rover.x > 0) {
        rover.x--;
    } else if (rover.direction === 'S' && rover.y < 9) {
        rover.y++;
    } else if (rover.direction === 'E' && rover.x < 9) {
        rover.x++;
    } else {
        console.error('You can\'t place the Rover outside of the planet!');
    }
    console.log(`The position of the rover is x: ${rover.x} y: ${rover.y}`);
}


//Function to move forward the robot
function moveBackward(rover) {
    console.log('moveBackward was called');

    if (rover.direction === 'N' && rover.y < 9) {
        rover.y++;
    } else if (rover.direction === 'W' && rover.x < 9) {
        rover.x++;
    } else if (rover.direction === 'S' && rover.y > 0) {
        rover.y--;
    } else if (rover.direction === 'E' && rover.x > 0) {
        rover.x--;
    } else {
        console.error('You can\'t place the Rover outside of the planet!');
    }
    console.log(`The position of the rover is x: ${rover.x} y: ${rover.y}`);
}

//Function to give orders to the Rover
function whereToGo(orders) {
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];

        rover.travelLog.push(`Our Rover was positioned on x: ${rover.x}, y: ${rover.y}`);

        //To check that the orders only contain f, b, r, l
        if (orders[i] === 'f' || orders[i] === 'b' || orders[i] === 'r' || orders[i] === 'l') {
            switch (order) {
                case 'f': //forward
                    moveForward(rover);
                    break;
                case 'b': //backward
                    moveBackward(rover);
                    break;
                case 'r': //right
                    turnRight(rover);
                    break;
                case 'l': //left
                    turnLeft(rover);
                    break;
            }
        } else {
            console.log('This order isn\'t recognized by our Rover so it moved to the next one.');
            orders[i + 1];
        }
    }
    rover.travelLog.push(`Finally, our Rover decided to have a break on x:${rover.x}, y: ${rover.y}`);
    console.log(rover.travelLog);
}

whereToGo('rfff');*/

// Rover object goes here:
const rover = {
    direction: 'N', //North
    x: 0, //horizontal
    y: 0, //vertical
    travelLog: [] //To save all the moves
};

//Function to turn left
function turnLeft(rover) {
    console.log('turnLeft was called!');

    switch (rover.direction) {
        case 'N':
            rover.direction = 'W'
            break;
        case 'W':
            rover.direction = 'S';
            break;
        case 'S':
            rover.direction = 'E';
            break;
        case 'E':
            rover.direction = 'N';
            break;
    }
    console.log(`The Rover is now currently facing ${rover.direction} and its position is still x: ${rover.x}, y: ${rover.y}`);
}

//Function to turn right
function turnRight(rover) {
    console.log('turnRight was called!');

    switch (rover.direction) {
        case 'N':
            rover.direction = 'E'
            break;
        case 'W':
            rover.direction = 'N';
            break;
        case 'S':
            rover.direction = 'W';
            break;
        case 'E':
            rover.direction = 'S';
            break;
    }
    console.log(`The Rover is now currently facing ${rover.direction} and its position is still x: ${rover.x}, y: ${rover.y}`);
}

//Function to move forward the robot
function moveForward(rover) {
    console.log('moveForward was called');

    if (rover.direction === 'N' && rover.y > 0) {
        rover.y--;
    } else if (rover.direction === 'W' && rover.x > 0) {
        rover.x--;
    } else if (rover.direction === 'S' && rover.y < 9) {
        rover.y++;
    } else if (rover.direction === 'E' && rover.x < 9) {
        rover.x++;
    } else {
        console.error('You can\'t place the Rover outside of the planet!');
    }
    console.log(`The position of the rover is x: ${rover.x} y: ${rover.y}`);

}

//Function to move forward the robot
function moveBackward(rover) {
    console.log('moveBackward was called');

    if (rover.direction === 'N' && rover.y < 9) {
        rover.y++;
    } else if (rover.direction === 'W' && rover.x < 9) {
        rover.x++;
    } else if (rover.direction === 'S' && rover.y > 0) {
        rover.y--;
    } else if (rover.direction === 'E' && rover.x > 0) {
        rover.x--;
    } else {
        console.error('You can\'t place the Rover outside of the planet!');
    }
    console.log(`The position of the rover is x: ${rover.x} y: ${rover.y}`);
}

//Function to give orders to the Rover
function whereToGo(orders) {
    for (let i = 0; i < orders.length; i++) {
        let order = orders[i];

        rover.travelLog.push(`Our Rover was positioned on x: ${rover.x}, y: ${rover.y}`);

        //To check that the orders only contain f, b, r, l

        switch (order) {
            case 'f': //forward
                moveForward(rover);
                break;
            case 'b': //backward
                moveBackward(rover);
                break;
            case 'r': //right
                turnRight(rover);
                break;
            case 'l': //left
                turnLeft(rover);
                break;
            default:
                console.log('This order isn\'t recognized by our Rover so it moved to the next one.');
                orders[i + 1];
        }

    }
    rover.travelLog.push(`Finally, our Rover decided to have a break on x:${rover.x}, y: ${rover.y}`);
    console.log(rover.travelLog);
}

whereToGo('rhhffffffffffffrffflflf');