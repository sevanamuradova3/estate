const products = document.getElementById("productsList");

function getCart () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    customers.innerHTML = ''
    cart.map((item, index) => {
        let basket= document.createElement("div");
        basket.className = "basketBox";
        basket.innerHTML = `
                  <img src="${item.thumbnail}" alt="">
                  <div class="basketTextBox">
                      <h2>${item.title}</h2>
                      <p>${item.description}</p>
                      <p>${item.price} $</p>
                  </div>
                  <button onclick="removeItem(${index})">SebetdenSil</button>
              `;
              productsList.appendChild(basket);
      });
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getCart()
}

window.onload = () => {
    getCart()
}