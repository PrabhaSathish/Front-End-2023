var showCheckBoxes = true;

// Show all the list of items:
function showOptions() {
  var options = document.getElementById("options");

  if (showCheckBoxes) {
    options.style.display = "flex";
    showCheckBoxes = !showCheckBoxes;
  } else {
    options.style.display = "none";
    showCheckBoxes = !showCheckBoxes;
  }
}

// Display the selected items using Array and Loop:

function getOptions1() {
  let arr = [];
  let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  for (let i = 0; i < checkboxes.length; i++) {
    arr.push(checkboxes[i].value);
  }

  document.getElementById("output").innerHTML = arr.join("<br>");
}
// To Select all the items :

function check() {
  var get = document.getElementsByName("items");

  for (var i = 0; i < get.length; i++) {
    get[i].checked = true;
  }
}

// To Clear the list:
function unCheck() {
  var get = document.getElementsByName("items");

  for (var i = 0; i < get.length; i++) {
    get[i].checked = false;
  }
}
