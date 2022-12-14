// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

//get the element with the id current color
const currentColor = document.querySelector("#current-color");

//get all the color class elements (dont need the palette id, but doesnt hurt to be specific)
const colors = document.querySelectorAll("#palette .color");

//loop through the colors elements
for (const color of colors) {
  //add click event to the colors
  color.addEventListener("click", () => {
    //set the current color element background color to the clicked elements background color
    currentColor.style.backgroundColor =  color.style.backgroundColor;
  })
}

//get all the cell class elements
let cells = document.querySelectorAll(".cell");

//loop through the cells
for (const cell of cells) {
  //add click event to the cells
  cell.addEventListener("click", () => {
    //set the cells background color to the current colors backgrund color
    cell.style.backgroundColor = currentColor.style.backgroundColor ;
  })
}

//reset button, just for fun

// //create a div for the buttons
// const buttonDiv = document.createElement("div")
// //center it on screen
// buttonDiv.setAttribute("align", "center");
// //put div after the current color element
// currentColor.after(buttonDiv);

// //create button
// const reset = document.createElement("button");
// reset.textContent = "Reset Canvas";
// //append button to div
// buttonDiv.append(reset);

// //add click event to reset button
// reset.addEventListener("click", () => {
//   //loop through cells
//   for (const cell of cells) {
//     //remove the background color
//     cell.backgroundColor.remove();
//   }
// })