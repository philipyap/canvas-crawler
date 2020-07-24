// console.log('hello')

// document.addEventListener('DOMContentLoaded', function(){
//     // the h2 tag(movement tag)
// let movementDisplay = document.getElementById('movement');
// // canvas
// let game = document.getElementById('game');

// //set some canvas configs
// game.setAttribute('height', 400);
// game.setAttribute('width', 800);
// // context
// let ctx = game.getContext('2d');

// //DRAW Bow 
// // const drawBox = (x, y, size, color) => {
// //     ctx.fillStyle = color;
// //     ctx.fillRect(x, y, size, size) // (x,y,width,height)
// // }

// // drawBox(200, 100, 200, 'hotpink');
// // //draw a box
// // //set a fill color
// // ctx.fillStyle = '#ffffff';
// // // set a line width
// // ctx.lineWidth = 5;
// // //set a line color
// // ctx.strokeStyle = 'red';
// // //call the fillRect to draw the filled square
// // ctx.fillRect(10,10,100,100);
// // //call strokeRect to draw the line rectangle
// // ctx.strokeRect(10, 10, 100, 100);





// //crawler construtor function
// function Crawler(x, y, width, height, color) {

// this.x = x;
// this.y = y;
// this.width = width;
// this.height = height;
// this.color = color;
// this.alive = true;
// this.render = function(){
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.width, this.height)
// }
// }
// // character refs
// // let ogre = {
// //     x: 500,
// //     y: 100,
// //     color: '#bada55',
// //     width: 40,
// //     height: 80,
// //     alive: true,
// //     render: function(){
// //         console.log('renderin an ogre')
// //         ctx.fillStyle = this.color;
// //         ctx.fillRect(this.x, this.y, this.width, this.height);
// //     }
// // }


// //Character refs
// let ogre = new Crawler(300, 100, 80, 120, '#bada55');
// let hero = new Crawler(20, 100, 50, 50, 'hotpink');

// const gameLoop = () => {
//     //console.log('looping ')
//     // clear the canvas
//     ctx.clearRect(0, 0, game.width, game.height);

//     // display the x, y, coordinates of our hero onto the DOM
//     movementDisplay.textContect = `X:${hero.x}\nY:${hero.y}`;

//     // check if the ogre is alive and 
//     if (ogre.alive) {
//         // render the ogre
//         ogre.render();
//         // check for colliston
//         //TODO detectHit()
//     }
//         hero.render();
//         //render the hero
// }

// const movementHandler = e => {
//     //w:87, a: 65. s:83. d:68
//     console.log(e)
//     switch(e.keyCode){
//         case (87):
//             if (hero.y > 0) hero.y -=5
//             break;
//         case (83):
//             if (hero.y + hero.height < game.height) hero.y +=5    
//             break;
//         case (65):
//             if (hero.x > 0) hero.x -=5
//             break;
//         case (68):
//             if (hero.x + hero.width < game.right) hero.x +=5
//             break; 
//             default:
//                 console.log("invalid keystroke")      

//     }
//     //when user presses w
//     // if(e.keyCode === 87 && hero.y > 0){
//     //     console.log(e)
        
//     //     //hero moves up
//     //     hero.y -=5;
//     // }else if (e.keyCode === 83 && hero.y + hero.height < game.height){
//     //     hero.y += 5;
//     // }
    
// }

// document.addEventListener('keydown', movementHandler)
// // game.addEventListener('click', (e) => {
// //     //console.log(e);
// //     //drawBox(e.offsetX, e.offsetY, 50, 'hotpink');
    
// //     //Clear the gameboard
// //     ctx.clearRect(0, 0, game.width, game.height)
// //     //render our hero
// //     hero.render()
// //     console.log('clicked!')
// //     ogre.x = e.offsetX;
// //     ogre.y = e.offsetY;
// //     ogre.render()
// // })
//      let gamePlay = setInterval(gameLoop, 60);
// // 

// })



console.log("ehllo!")
let movementDisplay;
let ctx
let game;
let hero;
let ogre;
// Crawler Constructor function
function Crawler(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.alive = true;
  this.render = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
const detectHit = () => {
  // check for collision on x axis
  // if the hero's bottom value is > ogre's top value
  if (hero.x + hero.width > ogre.x &&
    hero.x < ogre.x + ogre.width &&
    hero.y + hero.height > ogre.y &&
    hero.y < ogre.y + ogre.height) {
      ogre.alive = false;
    }
}
const gameLoop = () => {
  // console.log('looping in 💩')
  // clear the cavas
  ctx.clearRect(0, 0, game.width, game.height);
  // display the x, y coordinates of our hero onto the DOM
  movementDisplay.textContent = `X:${hero.x}\nY:${hero.y}`;
  // check if the ogre is alive and 
  if (ogre.alive) {
    // render the ogre
    ogre.render()
    // check for collision
    detectHit()
  }
  // render the hero
  hero.render()
}
const movementHandler = e => {
  // w: 87, a:65, s:83, d:68
  switch (e.keyCode) {
    case (87): // w up
      if (hero.y > 0) hero.y -=5
      break;
    case (83): // s down
      if (hero.y + hero.height < game.height) hero.y +=5
      break;
    case (65): // a left
      if (hero.x > 0) hero.x -=5
      break;
    case (68): // d right
      if (hero.x + hero.width < game.width) hero.x +=5
      break;
    default:
      console.log('invalid keystroke');
  }
}
document.addEventListener('DOMContentLoaded', () => {
  console.log('Dom loaded')
  // DOM REFS
  movementDisplay = document.getElementById('movement');
  game = document.getElementById('game');
  // CANVAS CONFIG
  game.setAttribute('height', 400);
  game.setAttribute('width', 800);
  ctx = game.getContext('2d');
  // CHARACTER REFS
  ogre = new Crawler(300, 100, 80, 120, '#bada55');
  hero = new Crawler(200, 100, 50, 50, 'hotpink');
  document.addEventListener('keydown', movementHandler);
  let runGame = setInterval(gameLoop, 60);
})





