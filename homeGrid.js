fetch("seller.json")
  .then(response => response.json())
  .then(data => {
    const shoeData = data.shoesData;
    const shoeDiv = document.querySelector("#gridC");
    shoeDiv.innerHTML = '';
    

    function displayProducts(products) {
      shoeDiv.innerHTML = ''; 

      products.forEach(item => {
        const shoeBox = document.createElement('div');
        shoeBox.classList.add('shoeIcon'); 

        shoeBox.onclick = () => {
          window.location.href = `product.html?id=${item.id}`;
        };

        const image = document.createElement('img');
        image.src = item.img;
        image.alt = item.modelName;

        shoeBox.appendChild(image);

        const shoeName = document.createElement('h4');

        shoeName.innerText = item.modelName;
        shoeBox.appendChild(shoeName);

        const shoePrice = document.createElement('h5');
        
        shoePrice.innerText = '$' + item.price;
        shoeBox.appendChild(shoePrice);

        shoeDiv.appendChild(shoeBox);
      });
    }

    displayProducts(shoeData);

    document.getElementById('search-btn').addEventListener('click', () => {
      let searchInput = document.querySelector('.search-input').value.toLowerCase();

      const filteredProducts = menShoes.filter(item => 
        item.modelName.toLowerCase().includes(searchInput)
      );

      displayProducts(filteredProducts);
    });

    document.querySelector('.search-input').addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        document.getElementById('search-btn').click();
      }
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
