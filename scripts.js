const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // check both inputs
  if (!dividend || !divider) {
    console.error("Both fields are required!");
    result.innerText = "Both fields are required!";
    return;
  }


  // Check if the divider is 0
  if (divider === 0) {
    console.error("Divider can't be 0!");
    result.innerText = "Divider can't be 0!";
    return;
  }

  result.innerText = dividend / divider;
});

