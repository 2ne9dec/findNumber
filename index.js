const input = document.querySelector(".input");
const button = document.querySelector(".button");
const div = document.querySelector(".div");

function randomNum(min = 0, max = 10) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
const random = randomNum();
console.log(random);

const result = () => {
  if (input.value < random) {
    div.innerHTML = "Вы ввели число меньше";
  } else if (input.value > random) {
    div.innerHTML = "Вы ввели число больше";
  } else div.innerHTML = "Поздравляю, вы угадали";
};
button.addEventListener("click", result);
