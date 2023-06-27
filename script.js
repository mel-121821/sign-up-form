let element = document.querySelector("h1");
let size = element.getBoundingClientRect();

let result = document.querySelector(".element-size");

console.log(element);
console.log(size);

function nameElement() {
    let elementName = document.createElement("p");
    elementName.textContent = `The element being tested is ${element}`;
    result.appendChild(elementName);
}

nameElement();

for (const key in size) {
    if (typeof size[key] !== "function") {
        let sizeResult = document.createElement("p");
        sizeResult.textContent = `${key} : ${size[key]}`;
        result.appendChild(sizeResult);
        console.log(sizeResult);
        console.log(element);
    }
}

