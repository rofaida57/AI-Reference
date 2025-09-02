// Form validation
function validateForm() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if (username === "" || password === "") {
    alert("Please fill in all fields");
    return false;
  }
  
  // Here you would typically send the form data to a server
  // For demo purposes, we'll just show a success message
  alert("Login successful!");
  return false; // Prevent form submission for demo
}

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navCollapse = document.querySelector('.collapse');
  
  if (navToggle && navCollapse) {
    navToggle.addEventListener('click', function() {
      navCollapse.classList.toggle('active');
      
      // Update aria-expanded
      const isExpanded = navCollapse.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });
    
    // Close navigation when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navCollapse.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
  
  // Add smooth scrolling to all links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});