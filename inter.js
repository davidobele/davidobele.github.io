document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.querySelector('.theme-toggle');
  const body = document.body;
  
  // Check for saved theme preference in localStorage
  const savedTheme = localStorage.getItem('theme');
  
  // Apply saved theme if it exists
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
  }
  
  // Toggle theme when button is clicked
  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Save preference to localStorage
    if (body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });
});