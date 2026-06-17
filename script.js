const container = document.querySelector("#container");
const slider = document.querySelector("#grid-size");
const valueDisplay = document.querySelector("#grid-value");

const colorPicker = document.querySelector("#color-picker");
const colorSwatch = document.querySelector("#color-swatch");

let currentColor = colorPicker.value;
let isDrawing = false;

/* ---------- Color Picker ---------- */

function updateSwatch(color) {
    colorSwatch.style.backgroundColor = color;
}

updateSwatch(currentColor);

colorSwatch.addEventListener("click", () => {
    colorPicker.click();
});

colorPicker.addEventListener("input", (e) => {
    currentColor = e.target.value;
    updateSwatch(currentColor);
});

/* ---------- Drawing State ---------- */

document.addEventListener("mousedown", () => {
    isDrawing = true;
});

document.addEventListener("mouseup", () => {
    isDrawing = false;
});

/* ---------- Grid ---------- */

function createGrid(size) {
    if (size > 64) size = 64;

    container.innerHTML = "";

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener("mousedown", () => {
            square.style.backgroundColor = currentColor;
        });

        square.addEventListener("mouseenter", () => {
            if (!isDrawing) return;

            square.style.backgroundColor = currentColor;
        });

        container.appendChild(square);
    }
}

createGrid(16);

/* ---------- Slider ---------- */

slider.addEventListener("input", () => {
    const size = slider.value;

    valueDisplay.textContent = size;

    createGrid(size);
});