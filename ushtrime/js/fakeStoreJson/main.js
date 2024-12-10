
const cardContainer = document.getElementById("cardContainer");
const productTitle = document.getElementById('productTitle');
const productImage = document.getElementById('productImage');
const productDescription = document.getElementById('productDescription');
const productPrice = document.getElementById('productPrice');
const productRating = document.getElementById('productRating');

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
        console.log(products);
        products.forEach(product => {
            const card = document.createElement("div");
            card.innerHTML = ` <img src="${product.image}" alt="" id="productImage">
    <p id="productTitle">${product.title}</p>
    <div>
        <p id="productPrice">${product.price}</p>
        <p id="productRating">${product.rating}</p>
    </div>
            `
            cardContainer.appendChild(card);
        });
    }
    )