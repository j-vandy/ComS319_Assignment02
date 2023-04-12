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
  else if(num == 2)
  {
    const counter2 = document.getElementById('counter2');
    count2++;
    counter2.innerHTML = count2;
  }
  else if(num == 3)
  {
    const counter3 = document.getElementById('counter3');
    count3++;
    counter3.innerHTML = count3;
  }
  else if(num == 4)
  {
    const counter4 = document.getElementById('counter4');
    count4++;
    counter4.innerHTML = count4;
  }
  else if(num == 5)
  {
    const counter5 = document.getElementById('counter5');
    count5++;
    counter5.innerHTML = count5;
  }
  else
  {
    const counter6 = document.getElementById('counter6');
    count6++;
    counter6.innerHTML = count6;
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
  else if(num == 2)
  {
    if (count2 > 0)
    {
      const counter2 = document.getElementById('counter2');
      count2--;
      counter2.innerHTML = count2;
    }
  }
  else if(num == 3)
  {
    if (count3 > 0)
    {
      const counter3 = document.getElementById('counter3');
      count3--;
      counter3.innerHTML = count3;
    }
  }
  else if(num == 4)
  {
    if (count4 > 0)
    {
      const counter4 = document.getElementById('counter4');
      count4--;
      counter4.innerHTML = count4;
    }
  }
  else if(num == 5)
  {
    if (count5 > 0)
    {
      const counter5 = document.getElementById('counter5');
      count5--;
      counter5.innerHTML = count5;
    }
  }
  else
  {
    if (count6 > 0)
    {
      const counter6 = document.getElementById('counter6');
      count6--;
      counter6.innerHTML = count6;
    }
  }
}
