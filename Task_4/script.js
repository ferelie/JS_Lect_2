let radius = prompt("What is the value of your circle's radius?");
alert("The area of your circle is " + Math.PI * radius ** 2);

let squared = prompt(
    "What is the value you want to calculate the square root of?"
);
alert("The square root of " + squared + " is " + Math.sqrt(squared));

let angle = prompt("What is the value of your angle?");
document.body.innerHTML =
    document.body.innerHTML +
    "The cosine of " +
    angle +
    " is " +
    Math.cos(angle);
