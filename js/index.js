// JavaScript code for the tech blog

// Execute the code after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the navigation links
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default behavior of the link
            event.preventDefault();

            // Get the target section ID from the link's href attribute
            var targetId = link.getAttribute('href').substring(1);

            // Scroll to the target section
            var targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

