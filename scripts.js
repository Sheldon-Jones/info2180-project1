document.addEventListener ('DOMContentLoaded', function() {
   
    const form = document.querySelector('.newsletter form');
    const enteredEmail = document.getElementById('email'); 
    const msg = document.querySelector('.message'); 
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const emailAdd = enteredEmail.value.trim();
            if (emailAdd ===""){
                msg.textContent = 'You did not enter an email address';
                msg.style.color = '#ff0000';
            }
            else{
                msg.textContent = `Thank you! Your email address ${emailAdd} has been added to our mailing list!`;

                msg.style.color = '#fff';
                } 
                
                // Clears the input field
                enteredEmail.value = '';
            }
            
            
)}
});
