const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('results');

// Function to fetch product data from JSON
async function fetchProducts() {
  try {
    const response = await fetch('searxchBar.json'); // Replace with your JSON file path
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return empty array in case of error
  }
}

// Initialize products and add event listener after fetching
async function initializeSearch() {
  const products = await fetchProducts();

  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    resultsList.innerHTML = '';

    if (searchTerm.length === 0) {
      return;
    }

    const filteredProducts = products.filter(product => {
      return product.name.toLowerCase().includes(searchTerm) || (product.category && product.category.toLowerCase().includes(searchTerm)) || (product.description && product.description.toLowerCase().includes(searchTerm)); // Added description search
    });

    if (filteredProducts.length === 0) {
      const noResultsItem = document.createElement('li');
      noResultsItem.textContent = "No results found.";
      resultsList.appendChild(noResultsItem);
      return;
    }

    filteredProducts.forEach(product => {
      const listItem = document.createElement('li');
      listItem.textContent = product.name;
      listItem.addEventListener('click', function() {
        searchInput.value = product.name;
        resultsList.innerHTML = '';
        console.log("You selected: " + product.name);
        // Example redirect (replace with your actual product URLs)
        // window.location.href = `/product/${product.id}`;
      });
      resultsList.appendChild(listItem);
    });
  });
}

initializeSearch(); // Call the initialization function