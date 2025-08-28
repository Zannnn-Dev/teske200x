// products.js - Product data management
const products = {
    // Category 1 products
    category1: [
        {
            id: "c1p1",
            name: "Script Justin V21",
            price: "Rp 60.000",
            description: "BUYER VIP PERMANEN : 100K,RESSELER NO IDENT : 80K,RESSELER IDENT : 130K",
            image: "https://raw.githubusercontent.com/NdikzDatabase/Database/main/Database/1756360820306-2nzlw1.jpg",
            checkoutUrl: "https://wa.me/6281802038115?text=Hay%20Min%2C%20saya%20ingin%20konfirmasi%20pembelian%20produk%20script%20justin%20offcial%20v21%20dengan%20harga%20Rp%2060.000.%20Berikut%20bukti%20pembayarannya."
        },
    ],
    
    // Category 2 products
    category2: [
        {
            id: "c2p1",
            name: "Script Nika V14",
            price: "Rp 35.000",
            description: "• RESELLER : 70K,PARTNER : 120K.",
            image: "https://raw.githubusercontent.com/NdikzDatabase/Database/main/Database/1756361241903-4qbruk.jpg",
            checkoutUrl: "https://wa.me/6281802038115?text=Hay%20Min%2C%20saya%20ingin%20konfirmasi%20pembelian%20produk%20script%20nika%v14%20dengan%20harga%20Rp%2035.000.%20Berikut%20bukti%20pembayarannya."
        },
    ],
    
    // Category 3 products
    category3: [
        {
            id: "c3p1",
            name: "Script Tredic Invictus V35.00",
            price: "Rp 70.000",
            description: "FREE UPDATE : 100K,RESSELER : 130K,PARTNER 170K.",
            image: "https://raw.githubusercontent.com/NdikzDatabase/Database/main/Database/1756361781396-tjerj6.jpg",
            checkoutUrl: "https://wa.me/6281802038115?text=Hay%20Min%2C%20saya%20ingin%20konfirmasi%20pembelian%20produk%20script%20tredic%invictus%20v35%3x%20up%20dengan%20harga%20Rp%2070.000.%20Berikut%20bukti%20pembayarannya."
        },
    ],
    
    // Category 4 products
    category4: [
        {
            id: "c4p1",
            name: "Murband",
            price: "Rp 20.000",
            description: "Auto Jadi Kang Band🗿.",
            image: "https://raw.githubusercontent.com/NdikzDatabase/Database/main/Database/1756362253207-7uz8ub.jpg",
            checkoutUrl: "https://wa.me/6281802038115?text=Hay%20Min%2C%20saya%20ingin%20konfirmasi%20pembelian%20produk%20Murband%20dengan%20harga%20Rp%20.000.%20Berikut%20bukti%20pembayarannya."
        },
    ]
};

// Function to generate HTML for product cards
function generateProductCards(categoryId) {
    const category = products[categoryId];
    if (!category) return '<p>Category not found</p>';
    
    let cardsHTML = '<div class="product-grid">';
    
    category.forEach(product => {
        cardsHTML += `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <span class="price">${product.price}</span>
                    <button class="buy-btn" data-product-id="${product.id}">Buy Now</button>
                </div>
            </div>
        `;
    });
    
    cardsHTML += '</div>';
    return cardsHTML;
}

// Function to load products for a specific tab
function loadProductsForTab(tabId) {
    const categoryMapping = {
        'product1': 'category1',
        'product2': 'category2',
        'product3': 'category3',
        'product4': 'category4'
    };
    
    const categoryId = categoryMapping[tabId];
    const tabElement = document.getElementById(tabId);
    
    if (tabElement && categoryId) {
        tabElement.innerHTML = generateProductCards(categoryId);
    }
}

// Function to get checkout URL for a product
function getCheckoutUrl(productId) {
    // Search through all categories for the product
    for (const category in products) {
        const productFound = products[category].find(p => p.id === productId);
        if (productFound) {
            return productFound.checkoutUrl;
        }
    }
    return null;
}

// Load products when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Load initial products
    loadProductsForTab('product1');
    
    // Add event handlers to Buy buttons
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('buy-btn')) {
            const productId = e.target.getAttribute('data-product-id');
            // Navigate to checkout page with product ID
            window.location.href = `checkout.html?id=${productId}`;
        }
    });
});

// Export for use in other scripts if needed
window.productManager = {
    products,
    loadProductsForTab,
    getCheckoutUrl
};
