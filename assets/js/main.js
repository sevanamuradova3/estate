const div = document.getElementById('productsList')
const btn = document.getElementById('pagi')

axios.get('https://dummyjson.com/products')
.then(res => {
    svna = res.data.products;
    console.log(svna);
    svna.map(item => {
        let basket = document.createElement('div')
        basket.className = "basketBox";
        basket.innerHTML = `
        <img src="${item.thumbnail}" alt="">
            <div class="basketTextBox">

                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <p>${item.price} $</p>
            </div>
            <button onclick="addToCart(${item.id})">Add to cart</button>
        `;
        productsList.appendChild(basket);
    })
})
function addToCart(proIndex){
    let cart = json.parse(localStorage.getItem('cart')) || []
    cart.push(svna.find(item=> item.id==proIndex))
    localStorage.setItem('cart',JSON.stringify(cart))
    displayCartCount()
}

function displayCartCount () {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cartButton.innerHTML = `<i class="fa-solid fa-cart-shopping" style="font-size: 20px;"></i><p class="cartCount">${cart.length}</p>`
}

window.onload = () => {
    displayCartCount()
}

