/*
- Idea of how to do this.


- start simple

*/

var canvas = document.getElementById("canvas").getContext("2d");

var fruit = [
    {name:"Apple", quantity:20, color:"red"},
    {name: "Banana", quantity:15, color:"yellow"},
    {name: "Orange", quantity: 13, color: "orange"},
    {name: "Watermelon", quantity: 25, color: "green"},
    {name: "Blueberry", quantity: 18, color: "#464196"}
];


var barWidth = 50;
var startingY = 0;
var barMulti = 15;


for (let i=0; i<fruit.length; i++) {

    const barHeight = fruit[i].quantity * barMulti;

    canvas.fillStyle = fruit[i].color;

    canvas.fillRect(0, startingY, barHeight, barWidth);

    canvas.font = '30px Arial';
    canvas.fillStyle = "black";
    canvas.fillText(fruit[i].name +": " + fruit[i].quantity, 0, startingY + 30 );

    startingY += barWidth;
    

}








// const drawBar = (color) => {

// }