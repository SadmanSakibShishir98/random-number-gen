const number = document.getElementById("number");
const btn = document.getElementById("generate");

const generateNumber = () => {
  const rand = Math.floor(Math.random() * 10 + 1);
  number.innerHTML = rand;
};
btn.addEventListener("click", generateNumber);
