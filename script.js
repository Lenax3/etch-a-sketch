const container = document.querySelector("#container");
const slider = document.querySelector("#grid-size");
const valueDisplay = document.querySelector("#grid-value");

function createGrid(size) {

    if (size > 64) size = 64;

    container.innerHTML = "";

    // Grid Layout
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {

        const square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "#5A1861";
        });

        container.appendChild(square);
    }
}

// Initial grid
createGrid(16);

// Slider interaction
slider.addEventListener("input", () => {
    const size = slider.value;

    valueDisplay.textContent = size;

    createGrid(size);
});