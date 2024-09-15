let container = document.getElementById("container");
let detailsBtn = document.querySelector(".detailsBtn")
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        json.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}" width="100%">
                <h3>${product.title}</h3>
                <p>${product.price}$</p>
                <button class="detailsBtn">View Details</button>
            `;
            container.appendChild(productCard);
        });
    })
    .catch(err => console.error('Fetch error: ', err));
detailsBtn.add("click",)