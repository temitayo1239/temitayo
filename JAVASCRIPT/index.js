const inputValue = document.getElementById("user-input");

const number = document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN") {
      inputValue.innerText = "";
    }
    if (inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerHTML.trim();
  });
});

const calculate = document.querySelectorAll(".operations").forEach((item) => {
  item.addEventListener("click", function (e) {
    console.log(e.target.innerHTML);
    let lastValue = inputValue.innerText.substring(
      inputValue.innerText.length,
      inputValue.innerText.length - 1
    );

    if (!isNaN(lastValue) && e.target.innerHTML === "=") {
      inputValue.innerText = eval(inputValue.innerText);
    } else if (e.target.innerHTML === "AC") {
      inputValue.innerText = 0;
    } else if (e.target.innerHTML === "DEL") {
      inputValue.innerText = inputValue.innerText.substring(
        0,
        inputValue.innerText.length - 1
      );
      if (inputValue.innerText.length == 0) {
        inputValue.innerText = 0;
      }
    } else {
      if (!isNaN(lastValue)) {
        inputValue.innerText += e.target.innerHTML;
      }
    }
  });
});
let fruits = ["apple", "banana", "orange"];
console.log(fruits[1])

let person = {
  username: "Sincere",
  age: "15",
  job: "Developer"
};
console.log(person.username)

let person1 = {
  username: "Akanwealth",
  age: 52,
  job: "Developer"
};
console.log(person.username)

let person2 = {
  username: "Temitayo",
  age: "16",
  job: "Developer"
};
console.log(person.username)

const paul = "paul"
const age = 10
const data = [
  {
    username: "Akanwealth",
    age: 52,
    job: "Developer"
  },
  {
    username: "Temitayo",
    age: "16",
    job: "Developer"
  },
  {
    username: "Sincere",
    age: "15",
    job: "Developer"
  },
]