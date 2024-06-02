const sortArray = (arr) => {
    let descendingOrder = [].concat(arr);
    descendingOrder.sort((a, b) => b - a);

    let ascendingOrder = [].concat(arr);
    ascendingOrder.sort((a, b) => a - b);

    document.body.innerHTML += `<h3>The sorted array in descending order is: ${descendingOrder}</h3>`;
    document.body.innerHTML += `<h3>The sorted array in ascending order is:  ${ascendingOrder}</h3>`;
};

let userInput = prompt("Enter a list of numbers separated by commas:");

let numbers = userInput.split(",").map((num) => parseInt(num));
document.body.innerHTML += `<p>You have entered the values: ${numbers}</p>`;
sortArray(numbers);
