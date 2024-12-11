document.getElementById('contactform').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = document.getElementById('nameinput').value; 
    
    const formContainer = document.getElementById('formcontainer');
    const thankYouContainer = document.getElementById('thankyoucontainer');
    const submitterNameSpan = document.getElementById('submittername');
    
    submitterNameSpan.textContent = name; 
    formContainer.style.opacity = 0;
    setTimeout(() => {
        formContainer.style.display = 'none';
        thankYouContainer.style.display = 'block';
    }, 500);
});
