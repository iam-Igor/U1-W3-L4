const table = [];

const cells = 76;

for (let i = 1; i <= cells; i++) {
  table.push(i);
}

const maintable = document.getElementById("table");

for (let y = 0; y < cells / 9; y++) {
  const rows = document.createElement("tr");
  for (let x = 0; x < 9; x++) {
    const cell = document.createElement("td");
    const number = table[y * 9 + x];
    cell.textContent = number;
    rows.appendChild(cell);
  }
  maintable.appendChild(rows);
}

const getNumber = function () {
  const randomNumber = Math.floor(Math.random() * 76) + 1;

  const selectedNumber =
    document.querySelectorAll("#table td")[randomNumber - 1];
  if (selectedNumber) {
    selectedNumber.classList.add("number-color");
  }
};

const btn = document.getElementById("get-number");
btn.addEventListener("click", getNumber);
