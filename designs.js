// Select color input
const chosenColor = document.getElementById('colorPicker').value;

//Select the skeleton's table to be constructed
const theTbl = document.getElementById('pixelCanvas');

//Select the submit action from the form
const submitReady = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // Select size input
    const heightSize = document.getElementById('inputHeight').value;
    const widthSize = document.getElementById('inputWidth').value;
    for (let i = 0; i < heightSize; i++) {
        let newRow = document.createElement('tr');
        theTbl.appendChild(newRow);
        for (let j = 0; j <widthSize; j++) {
            let newCell = document.createElement('td');
            newRow.appendChild(newCell);            
        }  
    }
}

//Add event listener to the submit-form-input 
submitReady.addEventListener('submit', function (e) {
    e.preventDefault();
    makeGrid();
})
