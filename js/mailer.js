const sendEmailButton = document.querySelector('.send-mail-button');
const successAlert = document.querySelector('.success');
const errorAlert = document.querySelector('.error');

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const sendMail = (e) => {
     
    const tempParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    }

    if(tempParams.email && tempParams.message && tempParams.name && tempParams.subject && validateEmail(tempParams.email)){
        e.preventDefault();
        emailjs.send('service_rbvmokd', 'template_decoikm', tempParams).then((res) => {
            successAlert.style.display="block";
        }).catch((error) => {
            console.log(error)
            errorAlert.style.display="block";
        });
    }
}

sendEmailButton.addEventListener('click', sendMail);