const sortArray = (arr) => {
    let descendingOrder = [].concat(arr);
    descendingOrder.sort((a, b) => b - a);

    let ascendingOrder = [].concat(arr);
    ascendingOrder.sort((a, b) => a - b);

    alert(
        "Descending order: " +
            descendingOrder +
            "\nAscending order: " +
            ascendingOrder
    );
};

let userInput = prompt("Enter a list of numbers separated by commas:");

let numbers = userInput.split(",").map((num) => parseInt(num));
sortArray(numbers);
