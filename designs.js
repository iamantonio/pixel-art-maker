/*jshint esversion: 6 */
/*
*  Pixel Art Maker Project
*  By: Antonio Vargas
* */
// Created variables that store the value of what the
// user inputted for Height and Width of the grid.
let gridHeight = 0;
let gridWidth = 0;

// Created variables to target elements by ID
const tableNode = document.getElementById('pixelCanvas');
const colorPicker = document.getElementById('colorPicker');

// Created function to debug code in the browser console.
// function myFunc() {
//     console.log(`Grid Height: ${gridHeight}\nGrid Width: ${gridWidth}`);
// }

// Created this function to clear the grid canvas when user inputs new values.
// Or if the user wants to clear the colors on the existing grid.
function clearGrid() {
    while(tableNode.hasChildNodes()) {
        tableNode.removeChild(tableNode.firstChild);
    }

}

// Function created that selects color input
function getColor() {
    // Get the value of the color
    const colorSelected = colorPicker.value;
    return colorSelected;
}


// Select size input
const sizePicker = document.querySelector('#sizePicker');
sizePicker.addEventListener('submit', function (e) {
    e.preventDefault();
    gridHeight = document.getElementById('inputHeight').value;
    gridWidth = document.getElementById('inputWidth').value;
    // Conditional to prevent site from crashing if user puts in a value
    // that is too high.
    if(gridWidth >= 101 || gridHeight >= 101) {
        alert('Height and\/or Width Value Too High!');
    } else {
        //myFunc();
        clearGrid();
        makeGrid();
    }

});




// When size is submitted by the user, call makeGrid()
function makeGrid() {
    let i = 0; // Iterator set for the loop below.
    // A while loop that creates the table based on the user input for
    // the grid size.
    while(i < gridHeight){
        const tr = document.createElement('tr');
        tr.setAttribute('id', `row-${i}`);
        tableNode.appendChild(tr);
        let x = 0; // Iterator for the nested loop to create the columns.
        while(x < gridWidth) {
            const td = document.createElement('td');
            //td.setAttribute('id', `col-${x}`);
            document.getElementById(`row-${i}`).appendChild(td);
            x ++;
        }
        i ++;
    }

}

// Function to go change the CSS Background Color of a target element.
function colorBackGround(e) {
    const target = e.target;
    console.log(target.tagName);
    if(target.tagName === 'TD') {
        //console.log('TRUE')
        target.style.backgroundColor = getColor();
    } else {
        //console.log('FALSE')
    }

}

// Added event listener to change background color of cell in grid when
// the user presses the button on the mouse.
tableNode.addEventListener('click', colorBackGround);