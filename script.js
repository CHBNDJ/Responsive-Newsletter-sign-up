const myForm = document.getElementById('form');
const myInput = document.getElementById('email'); 
const emailError = document.getElementById('email__error');
const validEmail = "ash@loremcompany.com";
const popupContent = document.querySelector('.popupBackground');



myForm.addEventListener("submit", (e) => {
        if(email.value !== validEmail) {
            e.preventDefault();
            emailError.innerHTML = "Valid email required";
            email.style.cssText = "background-color: rgba(255,97,85,0.15); border-color: rgba(255,97,85); color: rgba(255,97,85)"     
                               
        } else {
            e.preventDefault();
            popupContent.style.display = "block";
        }
        
        

    })
   








  




