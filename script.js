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

var count1 = count2 = count3 = count4 = count5 = count6 = 0;

function incrementCounter(num)
{
  if(num == 1)
  {
    const counter1 = document.getElementById('counter1');
    count1++;
    counter1.innerHTML = count1;
  }
}

function decrementCounter(num) 
{
  if(num == 1)
  {
    if (count1 > 0)
    {
      const counter1 = document.getElementById('counter1');
      count1--;
      counter1.innerHTML = count1;
    }
  }
}
