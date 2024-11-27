// Get elements
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const buyButtons = document.querySelectorAll('.buy-now');
const cartCountElement = document.getElementById('cart-count');
const form = document.querySelector('form');
const formDetails = form.querySelector('div');
let cartCount = 0;

// Event listeners for "Add to Cart" buttons
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const cartItemsContainer = document.getElementById('cart-items-container');
        const productCard = event.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('p').textContent;

        // Increment cart count
        cartCount++;
        cartCountElement.textContent = `(${cartCount})`;

        // Display alert for added item
        alert(`"${productName}" added to cart!`);

        // Add item to the cart section
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.textContent = `${productName} - ${productPrice}`;
        cartItemsContainer.appendChild(cartItem);
    });
});

// Event listeners for "Buy" buttons
buyButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const productCard = event.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('p').textContent;


        // Display item details on the form
        formDetails.textContent = `Your order: ${productName} - ${productPrice}`;
        form.style.display = 'block';  // Show the form when "Buy" is clicked
    });
});

// Initially hide the payment form
form.style.display = 'none';

// Event listener for navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            // Hide all sections
            document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
            // Display the target section
            section.style.display = 'block';
        }
    });
});

document.querySelectorAll('.arrow').forEach(arrow => {
    arrow.addEventListener('click', function() {
        const productList = this.parentElement.querySelector('.product-list');
        const scrollAmount = 220; // Adjust based on your card width

        if (this.classList.contains('left-arrow')) {
            productList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else if (this.classList.contains('right-arrow')) {
            productList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    });
});
