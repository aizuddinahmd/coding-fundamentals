const letterContainer = document.getElementById("letter__container");
const optionsContainer = document.getElementById("options__container");
const userInputSection = document.getElementById("user__input");
const newGameContainer = document.getElementById("new__game__container");
const newGameButton = document.getElementById("new__game__button");
const canvas = document.getElementById("hangman__container");
const resultText = document.getElementById("result__text");

let options = {
  Fruits: [
    "Apple",
    "Blueberry",
    "Cherry",
    "Durian",
    "Figs",
    "Grape",
    "Honeydew",
    "Jackfruit",
    "Kiwi",
    "Lemon",
  ],
  animals: [
    "Alligator",
    "Badger",
    "Chicken",
    "Deer",
    "Eagle",
    "Frog",
    "Giraffe",
    "Horse",
    "Iguana",
    "Jellyfish",
  ],
  Countries: [
    "Australia",
    "Bahamas",
    "Chile",
    "Denmark",
    "England",
    "France",
    "Germany",
    "Honduras",
    "India",
    "Japan",
    "Korea",
  ],
};

let winCount = 0;
let count = 0;

let chosenWord = "";

const displayOptions = () => {
  optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
  let buttonContainer = document.createElement("div");
  for (let value in options) {
    buttonContainer.innerHTML += `<button class="button options" onclick="generateWord('${value}')">${value}</button>`;
  }
  optionsContainer.appendChild(buttonContainer);
};

const blocker = () => {
  let optionsButton = document.querySelectorAll(".options");
  let letterButton = document.querySelectorAll(".letters");

  optionsButton.forEach((button) => {
    button.disabled = true;
  });

  letterButton.forEach((button) => {
    button.disabled.true;
  });
  newGameContainer.classList.remove("hide");
};

const generateWord = (optionValue) => {
  let optionsButton = document.querySelectorAll(".options");
  optionsButton.forEach((button) => {
    if (button.innerText.toLowerCase() === optionValue) {
      button.classList.add("active");
    }
    button.disabled = true;
  });
  letterContainer.classList.remove("hide");
  userInputSection.innerText = "";

  let optionArray = options[optionValue];

  chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
  chosenWord = chosenWord.toUpperCase();

  let displayItem = chosenWord.replace(/./g, '<span class="dashes">_</span>');

  console.log(chosenWord);

  userInputSection.innerHTML = displayItem;
};

const initializer = () => {
  winCount = 0;
  count = 0;

  userInputSection.innerHTML = "";
  optionsContainer.innerHTML = "";
  letterContainer.classList.add("hide");
  newGameContainer.classList.add("hide");
  letterContainer.innerHTML = "";

  for (let i = 65; i < 91; i++) {
    let button = document.createElement("button");
    button.classList.add("letters");
    button.innerText = String.fromCharCode(i);

    button.addEventListener("click", () => {
      let charArray = chosenWord.split("");
      let dashes = document.getElementsByClassName("dashes");
      if (charArray.includes(button.innerText)) {
        charArray.forEach((char, index) => {
          if (char === button.innerText) {
            console.log(char);
            dashes[index].innerText = char;
            winCount += 1;
            if (winCount == charArray.length) {
              resultText.innerHTML = `<h2 class="win__msg">You Win</h2>`;
              blocker();
            }
          }
        });
      } else {
        count += 1;
        drawMan(count);
        console.log(count);
        if (count == 6) {
          resultText.innerHTML = `<h2 class="lose__msg">You Lose</h2>`;
          blocker();
        }
      }
      button.disabled = true;
    });
    letterContainer.append(button);
  }
  displayOptions();
  let { initialDrawing } = canvasCreator();
  initialDrawing();
};

const canvasCreator = () => {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;

  const drawLine = (fromX, fromY, toX, toY) => {
    context.moveTo(fromX, fromY);
    context.lineTo(toX, toY);
    context.stroke();
  };
  const head = () => {
    context.beginPath();
    context.arc(70, 30, 10, 0, Math.PI * 2, true);
    context.stroke();
  };
  const body = () => {
    drawLine(70, 40, 70, 80);
  };
  const leftArm = () => {
    drawLine(70, 50, 50, 70);
  };
  const rightArm = () => {
    drawLine(70, 50, 90, 70);
  };
  const leftLeg = () => {
    drawLine(70, 80, 50, 110);
  };
  const rightLeg = () => {
    drawLine(70, 80, 90, 110);
  };

  const initialDrawing = () => {
    //clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    //bottom line
    drawLine(10, 130, 130, 130);
    //left line
    drawLine(10, 10, 10, 131);
    //top line
    drawLine(10, 10, 70, 10);
    //small top line
    drawLine(70, 10, 70, 20);
  };
  return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };
};

const drawMan = (count) => {
  let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
  switch (count) {
    case 1:
      head();
      break;
    case 2:
      body();
      break;
    case 3:
      leftArm();
      break;
    case 4:
      rightArm();
      break;
    case 5:
      leftLeg();
      break;
    case 6:
      rightLeg();
      break;
    default:
      break;
  }
};

newGameButton.addEventListener("click", initializer);
window.onload = initializer;
