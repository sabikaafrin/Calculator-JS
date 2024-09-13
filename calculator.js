document.addEventListener("keydown", function (event) {
  const key = event.key;
  console.log(key);
  const validKey = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    "%",
  ];
  console.log(validKey);
  if (validKey.includes(key)) {
    solve(key);
  } else if (key === "=" || key === "Enter") {
    result();
  } else {
    alert(" key not found");
  }
});
function solve(value) {
  let input = document.getElementById("result");
  input.value += value;
}
function result() {
  let num1 = document.getElementById("result").value;
  let num2 = eval(num1);
  document.getElementById("result").value = num2;
}
function clearValue() {
  document.getElementById("result").value = "";
}
