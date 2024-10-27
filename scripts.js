const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // check both inputs are provided
  if (!dividend || !divider) {
    console.error("Both fields are required!");
    result.innerText = "Both fields are required!";
    return;
  }

  const dividedNumber = Number(dividend);
  const dividerNumber = Number(divider);

  // Check if the inputs are numbers
  if (isNaN(dividedNumber) || isNaN(dividerNumber)) {
    console.error("Both fields should be numbers!");
    document.body.innerHTML = "Something critical went wrong. Please reload the page.";
    throw new Error("Program crashed due to invalid input.");
  }
    


  // Check if the divider is 0
  if (divider === 0) {
    console.error("Divider can't be 0!");
    result.innerText = "Divider can't be 0!";
    return;
  }

  // display the result with whole numbers only
  const quotient = dividedNumber / dividerNumber;

  // math.floor() is used to diaplay the whole number only
  result.innerText = Math.floor(quotient);
});

