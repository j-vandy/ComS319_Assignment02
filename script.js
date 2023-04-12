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
  updateCart();
  return false;
}

function displayConfirmationView() {
  document.getElementById("BrowseView").style.display = 'none';
  document.getElementById("CartView").style.display = 'none';
  document.getElementById("ConfirmationView").style.display = 'block';
  return false;
}

// TODO need to reset the cart list when you go back to BrowseView
// Update productAndPrice to also include description

var cart = [];
var productAndPrice = [["Cat1", 100], ["Cat2", 200], ["Cat3", 300], ["Cat4", 400], ["Cat5", 500], ["Cat6", 600]];
var totalCost = 0;

function addToCart(num)
{
  cart.push(num);
}

function removeFromCart(num)
{
  const index = cart.indexOf(num);
  if (index != -1) 
    cart.splice(index, 1);
}

function updateCart()
{
  document.getElementById('cartCount').innerHTML = cart.length;

  var numItems = [0,0,0,0,0,0];
  for (let i = 0; i < cart.length; i++)
  {
    numItems[cart[i]]++;
  }
  for (let i = 0; i < numItems.length; i++)
  {
    createListElement(i, numItems[i]);
  }
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  var span = document.createElement("span");
  span.textContent = "Total (USD)";
  li.appendChild(span);
  var strong = document.createElement("strong");
  strong.textContent = "$" + totalCost;
  li.appendChild(strong);
  ul.appendChild(li);
}

function clearCart()
{

}

function createListElement(item, count)
{
  if (count <= 0 || item > 5 || item < 0) return false;
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between lh-sm";
  var div = document.createElement("div");
  var h6 = document.createElement("h6");
  h6.className = "my-0";
  h6.textContent = productAndPrice[item][0];
  div.appendChild(h6);
  var small = document.createElement("small");
  small.className = "text-muted";
  small.textContent = "Brief description";
  div.appendChild(small);
  li.appendChild(div);
  var span = document.createElement("span");
  span.className = "text-muted";
  span.textContent = "$" + productAndPrice[item][1] + " x " + count;
  totalCost += productAndPrice[item][1] * count;
  li.appendChild(span);
  ul.appendChild(li);
}

var count1 = count2 = count3 = count4 = count5 = count6 = 0;

function incrementCounter(num)
{
  addToCart(num - 1);
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
  document.getElementById('globalCounter').innerHTML = cart.length;
}

function decrementCounter(num) 
{
  if(num == 1)
  {
    if (count1 > 0)
    {
      removeFromCart(num - 1);
      const counter1 = document.getElementById('counter1');
      count1--;
      counter1.innerHTML = count1;
    }
  }
  else if(num == 2)
  {
    if (count2 > 0)
    {
      removeFromCart(num - 1);
      const counter2 = document.getElementById('counter2');
      count2--;
      counter2.innerHTML = count2;
    }
  }
  else if(num == 3)
  {
    if (count3 > 0)
    {
      removeFromCart(num - 1);
      const counter3 = document.getElementById('counter3');
      count3--;
      counter3.innerHTML = count3;
    }
  }
  else if(num == 4)
  {
    if (count4 > 0)
    {
      removeFromCart(num - 1);
      const counter4 = document.getElementById('counter4');
      count4--;
      counter4.innerHTML = count4;
    }
  }
  else if(num == 5)
  {
    if (count5 > 0)
    {
      removeFromCart(num - 1);
      const counter5 = document.getElementById('counter5');
      count5--;
      counter5.innerHTML = count5;
    }
  }
  else
  {
    if (count6 > 0)
    {
      removeFromCart(num - 1);
      const counter6 = document.getElementById('counter6');
      count6--;
      counter6.innerHTML = count6;
    }
  }
  document.getElementById('globalCounter').innerHTML = cart.length;
}

function search()
{
  
}