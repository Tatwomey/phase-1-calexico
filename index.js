
  fetch ('http://localhost:3000/menu')

  .then(response => response.json())
  //.then(json => console.log(json))
  then(menuItems => {

  
    const menuItemsDiv = document.getElementById('menu-items')
    menuItems.forEach(menuItems=> document.getElementById('menu-items')
    const spanElement = document.createElement('span');
     spanElement.textContent = menuItem.name
     menuItemsDic.appendChild(spanElement);
     
  const menuItems = document.querySelector('#menu-items');
  const dishName = document.querySelector('#dish-name');
  const dishDesc = document.querySelector('#dish-desc');
  const dishPrice = document.querySelector('#dish-price');
  const dishSection = document.querySelector('#dish-section');
  const cartForm = document.querySelector('#cart-form');
  const numBag = document.querySelector('#number-in-cart');


const fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3000/menu', {
      method: "GET",
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    })
    const data = await response.json();
    data.forEach (items => items.forEach (item => handleMenuItem(item)));
    renderFirst(data);
    ) catch (err) {
      console.log(err);
    }
  };

  const handleMenuItem = (item) =>
  const item = document.createElement("span");

  item.AddEventListener("click", () => {handleData(data);
  });

  item.textContent - data.name;
  menuItems.appendChild(item);
  }
  catch (err) {
    console.log(err);
  
  dishName = data.name 
  dishDesc = data.description
  dishPrice = data.price

}
function menuItems (data) {
const items = document.createElement('span')
items.textContent = data.name
menuItems.appendChild(items)
}


