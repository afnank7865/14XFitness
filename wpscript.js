const scriptURL = 'https://script.google.com/macros/s/AKfycbyiOm1sf_eEFzV_U5mrTjqlfNa6gfu47wwdORxEdz2DxQAMno99BST9Hi-4cJb2pPa1/exec';
            const form = document.forms['google-sheet'];
            const submitButton = document.getElementById('submit');
            
            form.addEventListener('submit', e => {
                e.preventDefault(); // Prevent default form submission
            
                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                    .then(response => {
                        // alert("Thanks for Contacting us..! We Will Contact You Soon...");
                        alert("You’ll be redirected to WhatsApp. Please click on 'Send' to confirm your message.");
                        gotowhatsapp(); // Run the WhatsApp function only after the response is successful
                        
                    })
                    .catch(error => console.error('Error!', error.message));
            });
            
            function gotowhatsapp() {
                var name = document.getElementById("name").value.trim();
                var phone = document.getElementById("phone").value.trim();
                var email = document.getElementById("email").value.trim();
            
                // Validation check
                if (!name || !phone) {
                    alert("All fields are required. Please fill in all fields.");
                    return; // Exit the function if validation fails
                }
                
                var url = "https://wa.me/919970963077?text="
                    + "👋 Hi! I'm interested in your services.%0a"
                    + "Name: " + name + "%0a"
                    + "Phone: " + phone + "%0a"
                    + "Email: " + email + "%0a"
                    + "%0aPlease find my details above.%0a";
            
                window.open(url, '_blank').focus();
            }

        
    