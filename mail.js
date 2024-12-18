document.getElementById("email-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_bccfxar", "template_oy5poll", params)
        .then(function(response) {
            alert("Order Confirmed!");
           
        })
       
});
