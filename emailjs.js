// Initializing EMAil Js
(function() {
    emailjs.init("MqZVCgHJj77kTztRr");
})();

// Getting Form Data
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.innerHTML = '<i class="bi bi-arrow-up-right"></i> Sending...';

    const selectedSubjects = [];
    document.querySelectorAll('input[name="subjects[]"]:checked').forEach(checkbox => {
        selectedSubjects.push(checkbox.value);
    });

    
    const templateParams = {
        first_name: document.getElementById('first-name').value,
        last_name: document.getElementById('last-name').value,
        email: document.getElementById('mail').value,
        phone: document.getElementById('phone').value,
        subjects: selectedSubjects.join(', '), // Convert array to comma-separated string
        message: document.getElementById('message').value
    };

    // Setting Up EMialjs
    emailjs.send('service_00hqzf2', 'template_aiu035q', templateParams)
        .then(function(response) {
            // Success state
            formMessage.style.color = '#28a745';
            formMessage.innerHTML = 'Message sent successfully! ✓';
            contactForm.reset();
            
            // Cealr Success message after 5 secosn
            setTimeout(() => {
                formMessage.innerHTML = '';
            }, 5000);
        })
        .catch(function(error) {
            // IF Any ERRor Arise
            formMessage.style.color = '#dc3545';
            formMessage.innerHTML = 'Failed to send message. Please try again. ✗';
        })
        .finally(function() {
            // Doubara ENAble ho rha Hy after  the sbmission OF FORm
            submitButton.disabled = false;
            submitButton.innerHTML = '<i class="bi bi-arrow-up-right"></i> Let\'s Talk';
        });
});

const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', function(e) {
    // Remove any non-digit characters
    let value = e.target.value.replace(/\D/g, '');
    
    // here, Number ko format kiyya hy
    if (value.length > 0) {
        if (value.length <= 3) {
            value = value;
        } else if (value.length <= 6) {
            value = value.slice(0, 3) + '-' + value.slice(3);
        } else {
            value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
        }
    }
    
    // Input Value UPDtae
    e.target.value = value;
});


const messageTextarea = document.getElementById('message');
messageTextarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});