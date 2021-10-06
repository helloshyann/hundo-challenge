function getNumbers(){

    let startValue = 0;
    let endValue = 100;

    //Get numbers from the UI
    startValue = document.getElementById("startValue").value;
    endValue = document.getElementById("endValue").value;

    //Turn potential decimal numbers to whole numbers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //Check if input are numbers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

        //Get all the numbers from start to end value
        let numbers = generateNumbers(startValue, endValue);
        //Display the numbers on the page
        displayNumbers(numbers)

    } else {
        
    }
}

function generateNumbers(startValue, endValue){
    let numbers = [];
    for (let i = startValue; i <= endValue; i++) {
        numbers.push(i);      
    }
    return numbers;
}

function displayNumbers(numbers){

    // First value is found at index 0 in the array
    let startValue = numbers[0];
    // Last value is the length of the array - 1,
    // because an array starting at 0 and ending at 99 has a length of 100,
    // but 100 does not exist in the array, so - 1 to get to the last position.
    let endValue = numbers.length; //Length of the array

    // let finalValue = numbers[number.length - 1]; //Final value in the array

    let tableBody = document.getElementById("results");
    //Clear out previous rows
    tableBody.innerHTML = "";

    for (let index = 0; index < endValue; index++) {
        
        let tableROw = "";

        // Get the value of the index, 
        // because the index position does not equal the variable being held there.

        let number = numbers[index];

        if (number % 2 == 0) {
            // The number is even
            tableRow = `<tr><td class="numberEven">${number}</td></tr>`;
        } else {
            // The number is odd
            tableRow = `<tr><td>${number}</td></tr>`;
        }
        tableBody.innerHTML += tableRow;
        
    }
}