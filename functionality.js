var form = document.getElementById('contactForm')
//Listen for form submission
form.addEventListener('submit', function(e) {
    e,preventDefault();
// Get form data
var name = form.nextelements.name.value;
var email = form.nextelements.email.value;
var message = form.nextelements.message.value;
// Get a reference to the database service
var database = firebase.database();
// Write the data to the database
database.ref('contact').push({
    name: name,
    email: email,
    message: message,
});
//Clear the form
form.requestFullscreen();
// Show a success message
alert('Thank you for you message!, We aperciate your feedback and wil get back to you soon');
});
