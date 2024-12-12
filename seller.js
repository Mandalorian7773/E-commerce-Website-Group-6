document.getElementById('seller').addEventListener('submit' , function() {
    event.defaultPrevented();

    const shoeImg = document.getElementById('img').files[0];
    const modelName = document.getElementById('modelName').value;
    const modelPrice = document.getElementById('modelPrice').value;

    const newElement = document.createElement('div');

    if(img){
        const read = new fileReader ();
        read.onload = function(event){
             const shoeBox=document.createElement("div");
             shoeBox.classList.add("grid-container > div");
              
             const img=document.createElement("img");
             img.src = event.target.result;
             img.alt= modelName;

             const modelname = document.createElement("h4");
             modelname.textContent=modelName;

             const modelprice = document.createElement("h5");
             modelprice.textContent=modelPrice;


             shoeBox.appendChild(img);
             shoeBox.appendChild(modelname);
             shoeBox.appendChild(modelprice);

             document.getElementById("gridC").appendChild(shoeBox)

        }
        read.readAsDataURL(img);


    }
    document.getElementById('img').value="";
    document.getElementById("modelName").value="";
    document.getElementById('modelPrice').value="";





});


