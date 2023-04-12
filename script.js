function displayBrowseView() {
  document.getElementById("BrowseView").style.display = 'block';
  document.getElementById("CartView").style.display = 'none';
  document.getElementById("ConfirmationView").style.display = 'none';
  return false;
}

function displayCartView() {
  document.getElementById("BrowseView").style.display = 'none';
  document.getElementById("CartView").style.display = 'block';
  document.getElementById("ConfirmationView").style.display = 'none';
  return false;
}

function displayConfirmationView() {
  document.getElementById("BrowseView").style.display = 'none';
  document.getElementById("CartView").style.display = 'none';
  document.getElementById("ConfirmationView").style.display = 'block';
  return false;
}

var btnPlus = document.getElementById('btn-plus1');
var btnMinus = document.getElementById('btn-minus1');
var counter = document.getElementById('counter1');
var count = 0;
counter.textContent = count;

btnPlus.addEventListener('click', function() {
  count++;
  counter.textContent = count;
});

btnMinus.addEventListener('click', function() {
  if (count > 0) {
    count--;
    counter.textContent = count;
  }
});