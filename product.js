const a = new URLSearchParams(window.location.search);
    const productId = parseInt(a.get('id')); 
    fetch('seller.json')
      .then(response => response.json())
      .then(data => {
        const product = data.shoesData.find(p => p.id === productId);

        if (product) {
         
          document.getElementById('productImg').src = product.img;
          document.getElementById('ModelName').innerText = product.modelName;
          document.getElementById('price').innerText = `Price: $${product.price}`;
          document.getElementById('description').innerText = product.description;
          document.getElementById('details').innerText = product.details;
        } else
         {
         document.querySelector('.container').innerHTML = '<h1>not found</h1>';
        }
      })
      .catch(error => {document.querySelector('.container').innerHTML = `<h1>Error</h1>`;

      });
