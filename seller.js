document.getElementById('seller').addEventListener('submit' , function(event) {
    event.defaultPrevented();

    const formData = {

    shoeImg : document.getElementById('img').value,
    shoeName : document.getElementById('modelName').value,
    shoePrice : document.getElementById('modelPrice').value
    };

    const jsonData = JSON.stringify(formData ,null , 2);
     
    console.log(jsonData);

    document.getElementById('seller').reset();



 
});


