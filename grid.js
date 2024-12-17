fetch("seller.json")
    .then(response => response.json())
    .then(data => {
        const shoeData = data.shoesData;
        const shoeDiv = document.querySelector("#gridC");
        shoeDiv.innerHTML = '';

        shoeData.forEach(item => {
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
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
