console.log('hello')

document.addEventListener('DOMContentLoaded', function(){
    // the h2 tag(movement tag)
let movementDisplay = document.getElementById('movement');
// canvas
let game = document.getElementById('game');

//set some canvas configs
game.setAttribute('height', 400);
game.setAttribute('width', 800);
// context
let ctx = game.getContext('2d');


const drawBox = (x, y, size, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size) // (x,y,width,height)
}

drawBox(200, 100, 200, 'hotpink');
//draw a box
//set a fill color
ctx.fillStyle = '#ffffff';
// set a line width
ctx.lineWidth = 5;
//set a line color
ctx.strokeStyle = 'red';
//call the fillRect to draw the filled square
ctx.fillRect(10,10,100,100);
//call strokeRect to draw the line rectangle
ctx.strokeRect(10, 10, 100, 100);

})

