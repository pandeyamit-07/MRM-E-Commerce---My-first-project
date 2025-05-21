loadCart();


function loadCart() {
  let innerHtml = "";
  let cart = JSON.parse(localStorage.getItem("cart"));
  let total = 0;

  console.log(cart)

  if (cart.length == 0) {
    innerHtml = `<img src="./images/empty-cart.png" style="max-width: 600px; display:block;margin:auto;"/>`;
    document.querySelector(".items").innerHTML = innerHtml;
  } else {

    cart.forEach(function (item) {
      innerHtml += `<hr>
    <div class="product">
        <div class="image">
            <img src="${item.image[0]}" alt="">
        </div>
        <div class="detail">
            <div class="name">${item.title}</div>
            <div class="fragrance">Fragrance : ${item.fragrance}</div>
            <div class="quantity">Quantity : ${item.quantity}</div>
        </div>
        <div class="count-option">
            <div class="btn">
                <span onclick="decrement(${item.id})">-</span>
                <span id="${item.id}">${item.count}</span>
                <span onclick="increment(${item.id})">+</span>
            </div>
        </div>
        <div class="remove-from-cart" onclick="remove(${item.id})">&#10006;</div>
        <div class="remove">
            <div class="price">₹ ${item.current_price * item.count}</div>
        </div>
    </div>
       `;

      total += item.current_price * item.count;
    })
    document.querySelector(".items").innerHTML = innerHtml;
    innerHtml = `
        <div class="total" id="total-amount">Subtotal : ₹ ${total}</div>
        <a href="./order.html" class="proceed">Place Order</a>`;
    document.getElementsByClassName("subtotal")[0].innerHTML = innerHtml;
  }
}

function increment(id) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let newCart = cart.map((obj) => {
    if (obj.id == id) {
      return { ...obj, count: parseInt(obj.count) + 1 };
    }
    return obj;
  });

  localStorage.setItem("cart", JSON.stringify(newCart))
  loadCart();
}

function decrement(id) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart = cart.map((obj) => {
    if (obj.id == id) {
      return { ...obj, count: (parseInt(obj.count) == 1) ? 1 : parseInt(obj.count) - 1 }
    }
    return obj;
  });
  localStorage.setItem("cart", JSON.stringify(cart))
  loadCart();
}

function remove(id) {
  let cart = JSON.parse(localStorage.getItem("cart"))
  cart = cart.filter(function (item) {
    return item.id != id;
  })
  localStorage.setItem("cart", JSON.stringify(cart))
  loadCart()
  let count = JSON.parse(localStorage.getItem("count")).count;
  count--;
  localStorage.setItem('count', JSON.stringify({ 'count': count }))
  document.getElementById('count').innerHTML = count;
}