const grid = document.querySelector('.grid')
const blockWidth = 100
const blockHeight = 20 

//create Block

class Block{ //to create the blocks in the grid by passing through 2 values
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]//block as anchor point
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}


//all my blocks
const blocks = [
    new Block(10, 270)
]

//draw all my blocks
function addBlocks() {       
for (let i = 0; i < blocks.length; i++){ //as long as i is smaller than the blocks array length, we increment i by 1
const block = document.createElement('div')//create a div, store it as block
block.classList.add('block')//give the block the class list as styled in CSS
block.style.left = blocks[i].bottomLeft[0] + 'px'//style the first item in the blocks array, with the bottom left as anchor point i.e., 10px as result
block.style.bottom = blocks[i].bottomLeft[1] +'px'//style the first item in the blocks array, with the bottom left as anchor point i.e., 270px as result
grid.appendChild(block) //put in the newly created block with the style of block
    }
}
addBlocks()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         