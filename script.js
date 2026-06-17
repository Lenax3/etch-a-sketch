/* erstellt 1 square:
const square = document.createElement("div")
square.classList.add("square")
container.appendChild(square) */

const container = document.querySelector('#container');

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div")

    square.classList.add("square")
    square.addEventListener("mouseenter", () => { //* färbt das sqaure ein, wenn Maus es berührt
        square.style.backgroundColor = "#5A1861";
    });

    container.appendChild(square)
}
