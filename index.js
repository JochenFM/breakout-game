const grid = document.querySelector('.grid')
const blockWith = 100
const blockHeight = 20 
//create Block

class Block{
    constructor(xAxis, yAxis)
}

//draw my block'
function addBlock() {
const block = document.createElement('div')//create a div, store it as block
block.classList.add('block')//give the block the class list as styled in CSS
block.style.left = '100px'
block.style.bottom = '50px'
grid.appendChild(block) //put in the newly created block with the style of block       
}
addBlock()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         