const grid = document.querySelector('.grid')
const scoreDisplay = document.querySelector('#score')
const blockWidth = 100;
const blockHeight = 20;
const ballDiameter = 20;
const boardWidth = 560;
boardHeight = 300;
let timerId
let xDirection = 2
let yDirection = 2

const userStart = [230, 10]//default start position user, 230px, 10px
let currentPosition = userStart

const ballStart = [270, 40]
let ballCurrentPosition = ballStart

//create Block

class Block { //to create the blocks in the grid by passing through 2 values
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]//block as anchor point
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
        this.topLeft = [xAxis, yAxis + blockHeight]
       
    }
}


//all my blocks
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),   
]

//draw all my blocks
function addBlocks() {       
for (let i = 0; i < blocks.length; i++) { //as long as i is smaller than the blocks array length, we increment i by 1//
const block = document.createElement('div')//create a div, store it as block//
block.classList.add('block')//give the block the class list as styled in CSS//
block.style.left = blocks[i].bottomLeft[0] + 'px'//style the first item in the blocks array, with the bottom left as anchor point i.e., 10px as result//
block.style.bottom = blocks[i].bottomLeft[1] +'px'//style the first item in the blocks array, with the bottom left as anchor point i.e., 270px as result//
grid.appendChild(block) //put in the newly created block with the style of block
    }
}
addBlocks()  


// add user

const user = document.createElement('div')
user.classList.add('user')
grid.appendChild(user)
drawUser()


//draw the user
function drawUser() {
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] + 'px'
}

//draw the ball
function drawBall() {
    ball.style.left = ballCurrentPosition[0] + 'px'
    ball.style.bottom = ballCurrentPosition[1] + 'px'
}

// move user 

function moveUser(e) {//function, pass through an event
    switch(e.key) {//
        case 'ArrowLeft':    //switch case listening out for keys, value assigned to that click is =>, then grab currentvalue andmove it -10
            if (currentPosition[0] > 0) { //as lomg as user (left bottom point of rectangle is larger than zero, function is executed, otherwise stop
            currentPosition[0] -= 10
            drawUser() //redraw the user
        
            }
            break;  
        case 'ArrowRight':
            if (currentPosition[0] < boardWidth - blockWidth) {
            currentPosition[0] += 10     
            drawUser()   
            }
            break;                    
    }
}
document.addEventListener('keydown', moveUser)

//add ball

const ball = document.createElement('div')
ball.classList.add('ball')
drawBall()
grid.appendChild(ball)//grab ball inside the HTML grid class


// move ball

function moveBall() {
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
    checkForCollisions()

}

timerId = setInterval(moveBall, 30) //invoke the function every 30ms

//function check for collisions

function checkForCollisions() {
    //check for wall collisions
    if (
        ballCurrentPosition[0] >= (boardWidth - ballDiameter) ||
        ballCurrentPosition[1] >= (boardHeight - ballDiameter) ||
        ballCurrentPosition[0] <= 0
        ){
        changeDirection()
    }


//check for game over

    if (ballCurrentPosition[1] <= 0) {
        clearInterval(timerId)
        scoreDisplay.innerHTML = 'You lose'
        document.removeEventListener('keydown', moveUser)
    }
}


function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
        yDirection = -2
        return
    }
    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2
        return
    }
    if (xDirection === -2 && yDirection === -2) {
        yDirection = 2
        return
    }
    if (xDirection === -2 && yDirection === 2) {
        xDirection = 2
        return
    }
}