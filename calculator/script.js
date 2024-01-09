// Get all elements from the dom using id

const compoundInterestCalculator = document.getElementById(
    "CompoundInterestCalculator"
  ),
  initialBalance = document.getElementById("InitialBalance"),
  interestRate = document.getElementById("InterestRate"),
  years = document.getElementById("Years"),
  contribution = document.getElementById("Contribution"),
  duration = document.getElementById("Duration"),
  result = document.getElementById("Result");

// Form validation and submission
compoundInterestCalculator.onsubmit = (e) => {
  e.preventDefault();

  getValues();

  value.principleAmount === "" ||
  value.interestRate === "" ||
  value.years === ""
    ? alert("Complete all fields")
    : calculateCompoundInterest();
};


function getValues() {
  return (value = {
    principleAmount: initialBalance.value,
    interestRate: interestRate.value,
    years: years.value,
    contribution: contribution.value,
    duration:duration.value,
  });
}

// Calculate compound interest

function calculateCompoundInterest() {
  // Add fade effect
  result.classList.add("fade");
  setTimeout(function () {
    result.classList.remove("fade");
  }, 1000);

    if(value.contribution === ""|| value.contribution === "0"){
      result.innerHTML =
        (
          value.principleAmount *
          Math.pow(1 + value.interestRate / 100 / 12, 12 * value.years)
        ).toFixed(0) + "$"
    }
      else if(value.duration === 'monthly'){
          result.innerHTML =
        (
          value.principleAmount *
            Math.pow(1 + value.interestRate / 100 / 12, 12 * value.years) +
          value.contribution *
            ((Math.pow(1 + value.interestRate / 100 / 12, 12 * value.years) -
              1) /
              (value.interestRate / 100 / 12))
        ).toFixed(0) + "$"
        }
      else if(value.duration === 'annually'){
          result.innerHTML =
        (
          value.principleAmount *
            Math.pow(1 + value.interestRate / 100 / 12, 12 * value.years) +
          value.contribution/12 *
            ((Math.pow(1 + value.interestRate / 100 / 12, 12 * value.years) -
              1) /
              (value.interestRate / 100 / 12))
        ).toFixed(0) + "$"
        }
      else if(value.duration === 'weekly'){
          result.innerHTML =
        (
          value.principleAmount *
            Math.pow(1 + value.interestRate / 100 / 12, 12 * value.years) +
          (value.contribution/0.25) *
            ((Math.pow(1 + value.interestRate / 100 / 12, 12 * value.years) -
              1) /
              (value.interestRate / 100 / 12))
        ).toFixed(0) + "$"
        }
      else if(value.duration === 'semi-annually'){
          result.innerHTML =
        (
          value.principleAmount *
            Math.pow(1 + value.interestRate / 100 / 12, 12 * value.years) +
          (value.contribution/6) *
            ((Math.pow(1 + value.interestRate / 100 / 12, 12 * value.years) -
              1) /
              (value.interestRate / 100 / 12))
        ).toFixed(0) + "$"
        }
      else if(value.duration === 'bi-weekly'){
          result.innerHTML =
        (
          value.principleAmount *
            Math.pow(1 + value.interestRate / 100 / 12, 12 * value.years) +
          (value.contribution/0.5) *
            ((Math.pow(1 + value.interestRate / 100 / 12, 12 * value.years) -
              1) /
              (value.interestRate / 100 / 12))
        ).toFixed(0) + "$"
        }
}