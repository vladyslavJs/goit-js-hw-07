function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNumber = document.querySelector("#controls > input");

const btnCreate = document.querySelector("button[data-create]");

const btnDestroy = document.querySelector("button[data-destroy]");

const containerBox = document.querySelector("#boxes");

const createBox = (amount) => {
  if (amount >= 1 && amount <= 100) {
    let size = 30;
    const elements = [];

    for (let i = 0; i < amount; i++) {
      size += 10;

      const box = document.createElement("div");
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;

      elements.push(box);
    }

    containerBox.append(...elements);
  }
};

const destroyBoxes = () => {
  containerBox.innerHTML = "";
};

btnCreate.addEventListener("click" , () => {
  destroyBoxes();
  const amount = inputNumber.value;
  createBox(amount);
});

btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});

