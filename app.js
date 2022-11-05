let binaryNumber = document.querySelector("#binary");
let result = document.querySelector(".result");
let form = document.querySelector(".container");

form.addEventListener("submit", (x) => {
    x.preventDefault();
    let binary = binaryNumber.value;
    let decimal = parseInt(binary, 2);
    result.textContent = decimal;
});
