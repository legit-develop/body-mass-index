const btnEl = document.getElementById("btn");
console.log(btnEl);
const bmiInputEl = document.getElementById("bmi-result");
console.log(bmiInputEl);
const weightConditionEl = document.getElementById("weight-condition");

function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  console.log(heightValue);
  const weightValue = document.getElementById("weight").value;
  console.log(weightValue);

  const bmiValue = Math.floor(weightValue / (heightValue * heightValue));
  console.log(bmiValue);
  bmiInputEl.value = bmiValue;

  if (bmiValue < 18.5) {
    weightConditionEl.innerText = "under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "over weight";
  } else if (bmiValue >= 30) {
    weightConditionEl.innerText = "obesity";
  }
}

btnEl.addEventListener("click", calculateBMI);
