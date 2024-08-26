//importing prompt-sync library and invoking it
const prompt = require("prompt-sync")();

//compound interest calculator that prompts a user for some input, and finally calculates the compounded interest value

// let init_amount = 20000;
// let monthly_contirbution = 400;
// let number_of_years = 30;
// let interest_rate = 10;

//Step 1 - define a function that we can use to calculate the final value of the compounded interst

function compoundInterest(
  init_amount,
  monthly_contirbution,
  number_of_years,
  interest_rate
) {
  let total = init_amount;

  let anual_contirbution = monthly_contirbution * 12;

  for (let i = 0; i < number_of_years; i++) {
    total += anual_contirbution;
    total = total * ((100 + interest_rate) / 100);
  }

  //rounding the total to 2 digits after decimal point
  return total.toFixed(2);
}

//calculating the final amount if we didnt compound our interest.

//Step 2 - define a function that would calculate the difference (ie the effect compounding has had)

function calculateRegular(init_amount, monthly_contirbution, number_of_years) {
  return (init_amount + monthly_contirbution * 12 * number_of_years).toFixed(2);
}

//Step 3 - to create a run function that then prompts the user for all necessary inputs required the final amounts

function run() {
  let init_amount = Number(prompt("What is your initial investment ($) ?"));

  let monthly_contirbution = Number(
    prompt("What is your monthly contribution ($) ?")
  );

  let number_of_years = Number(
    prompt("For how many years would you like to compound your investment?")
  );

  let interest_rate = Number(
    prompt("What is your expected interest rate (%) over these years?")
  );

  printOutput(
    init_amount,
    monthly_contirbution,
    number_of_years,
    interest_rate
  );
}

//Step 4 - inside of said function, make a nice pretty statement using a template literal string that gives the financial breakdown

function printOutput(
  init_amount,
  monthly_contirbution,
  number_of_years,
  interest_rate
) {
  let final_value = compoundInterest(
    init_amount,
    monthly_contirbution,
    number_of_years,
    interest_rate
  );

  let value_without_compounding = calculateRegular(
    init_amount,
    monthly_contirbution,
    number_of_years
  );

  let summary = ` 
    INIT AMOUNT: $${init_amount}
    MONTHLY CONTIRBUTION: $${monthly_contirbution}
    NUMBER OF YEARS: ${number_of_years}
    INTEREST RATE: $${interest_rate}\n
    FINAL_COMPOUNDED_VALUE: $${final_value}
    REGULAR_AMOUNT: $${value_without_compounding}
    DIFFERENCE: $${final_value - value_without_compounding}`;

  console.log(summary);
}
run();
