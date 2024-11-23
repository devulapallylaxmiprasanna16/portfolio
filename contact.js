// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Perform basic validation
    if (name && email && message) {
        // Show success message
        document.getElementById('success-message').style.display = 'block';

        // Clear the form
        document.getElementById('contact-form').reset();

        // Simulate sending the data (replace this with actual AJAX or backend logic)
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    } else {
        // Handle case where not all fields are filled
        alert('Please fill all fields before submitting.');
    }
});
