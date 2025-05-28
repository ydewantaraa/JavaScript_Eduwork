// Data produk
const products = [
  {
    name: "Smartphone X",
    price: 3000000,
    description: "Smartphone canggih dengan layar AMOLED.",
    image: "https://via.placeholder.com/200x150?text=Smartphone",
    category: "elektronik"
  },
  {
    name: "Kaos Polos",
    price: 50000,
    description: "Kaos nyaman untuk sehari-hari.",
    image: "https://via.placeholder.com/200x150?text=Kaos",
    category: "fashion"
  },
  {
    name: "Cokelat Premium",
    price: 25000,
    description: "Cokelat manis berkualitas tinggi.",
    image: "https://via.placeholder.com/200x150?text=Cokelat",
    category: "makanan"
  },
  {
    name: "Laptop Pro",
    price: 12000000,
    description: "Laptop kuat untuk kerja dan gaming.",
    image: "https://via.placeholder.com/200x150?text=Laptop",
    category: "elektronik"
  }
];

// Fungsi untuk menampilkan produk
function displayProducts(filterCategory = "all") {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  const filteredProducts = filterCategory === "all"
    ? products
    : products.filter(p => p.category === filterCategory);

  filteredProducts.forEach(product => {
    const productHTML = `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p><strong>Rp ${product.price.toLocaleString()}</strong></p>
        <p>${product.description}</p>
      </div>
    `;
    container.innerHTML += productHTML;
  });
}

// Event listener untuk filter kategori
document.getElementById("categoryFilter").addEventListener("change", (e) => {
  displayProducts(e.target.value);
});

// Tampilkan semua produk saat pertama kali
displayProducts();
