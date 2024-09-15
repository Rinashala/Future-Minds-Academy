const productsContainer = document.getElementById('productsContainer');
const productModal = document.getElementById('productModal');
const closeModal = document.getElementById('closeModal');
const productTitle = document.getElementById('productTitle');
const productImage = document.getElementById('productImage');
const productDescription = document.getElementById('productDescription');
const productPrice = document.getElementById('productPrice');

// Fetch products from API
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.price}$</p>
                <button class="view-details-btn">View Details</button>
            `;

            productCard.querySelector('.view-details-btn').addEventListener('click', () => {
                productTitle.textContent = product.title;
                productImage.src = product.image;
                productDescription.textContent = product.description;
                productPrice.textContent = `Price: $${product.price}`;
                productModal.style.display = 'flex';
            });

            productsContainer.appendChild(productCard);
        });
    });

// Close modal
closeModal.addEventListener('click', () => {
    productModal.style.display = 'none';
});

// Close modal if clicked outside of content
window.addEventListener('click', (event) => {
    if (event.target === productModal) {
        productModal.style.display = 'none';
    }
});
