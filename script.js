function addTech() {
  let input = document.querySelector("#inputValue").value;

  if (input != "") {
    const newDiv = document.createElement("div");
    newDiv.classList.add("col-5", "border", "text-center", "mt-5", "ms-5", "me-5", "pb-3", "pt-3", "divStyle");
    newDiv.innerText = document.querySelector("#inputValue").value;
    newDiv.classList.add("divText");
    spot.appendChild(newDiv);

    document.querySelector("#inputValue").value = "";
  } else {
    alert("Please enter new technology!");
  }
}

function removeAll() {
  const element = document.getElementById("spot");
  element.remove();
}
