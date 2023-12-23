function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputElement = document.querySelector('#controls input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  function createBoxes(amount) {
    boxesContainer.innerHTML = '';

    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
      size += 10;
    }
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  createButton.addEventListener('click', function () {
    const amount = parseInt(inputElement.value, 10);

    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      inputElement.value = '';
    }
  });

  destroyButton.addEventListener('click', destroyBoxes);