const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id')); 

   
    fetch('seller.json')
      .then(response => response.json())
      .then(data => {
        const product = data.shoesData.find(p => p.id === productId);

        if (product) {
         
          document.getElementById('product-image').src = product.img;
          document.getElementById('product-name').innerText = product.modelName;
          document.getElementById('product-price').innerText = `Price: $${product.price}`;
          document.getElementById('product-description').innerText = product.description;
          document.getElementById('product-details-list').innerText = product.details;
        } else
         {
         document.querySelector('.container').innerHTML = '<h1>not found</h1>';
        }
      })
      .catch(error => {document.querySelector('.container').innerHTML = `<h1>Error</h1>`;

      });
