// script.js
let count = 0;

function addField() {
  const type = document.getElementById("fieldType").value;
  count++;

  const div = document.createElement("div");
  div.id = `field-${count}`;

  const input = document.createElement("input");
  input.type = type;
  input.placeholder = `Enter ${type}`;
  input.required = true;

  const removeBtn = document.createElement("button");
  removeBtn.innerText = "X";
  removeBtn.className = "removeBtn";
  removeBtn.type = "button";
  removeBtn.onclick = () => div.remove();

  div.appendChild(input);
  div.appendChild(removeBtn);
  document.getElementById("formFields").appendChild(div);
}

function handleSubmit(event) {
  event.preventDefault();

  const inputs = document.querySelectorAll("#formFields input");
  const headers = [];
  const values = [];

  document.getElementById("tableHeader").innerHTML = "";
  document.getElementById("tableBody").innerHTML = "";

  inputs.forEach((input, index) => {
    headers.push(input.placeholder);
    values.push(input.value);
  });

  headers.forEach(header => {
    const th = document.createElement("th");
    th.innerText = header;
    document.getElementById("tableHeader").appendChild(th);
  });

  const row = document.createElement("tr");
  values.forEach(value => {
    const td = document.createElement("td");
    td.innerText = value;
    row.appendChild(td);
  });

  document.getElementById("tableBody").appendChild(row);

 
}
