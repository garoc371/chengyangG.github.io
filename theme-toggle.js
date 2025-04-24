// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  // Check for saved theme preference or use user's system preference
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const storedTheme = localStorage.getItem("theme");
  
  if (storedTheme === "dark" || (!storedTheme && prefersDarkScheme.matches)) {
    document.body.classList.add("dark-theme");
    updateThemeIcon(true);
  } else {
    document.body.classList.remove("dark-theme");
    updateThemeIcon(false);
  }
  
  // Create and add the theme toggle button to the navbar
  const navbarTools = document.querySelector('.navbar-nav.navbar-nav-scroll.ms-auto');
  if (navbarTools) {
    const themeToggle = document.createElement('li');
    themeToggle.className = 'nav-item';
    themeToggle.innerHTML = `
      <button class="theme-toggle nav-link" aria-label="Toggle dark/light mode">
        <i class="bi bi-sun-fill"></i>
      </button>
    `;
    navbarTools.appendChild(themeToggle);
    
    // Add click event to the theme toggle button
    const toggleButton = document.querySelector('.theme-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', function() {
        if (document.body.classList.contains("dark-theme")) {
          document.body.classList.remove("dark-theme");
          localStorage.setItem("theme", "light");
          updateThemeIcon(false);
        } else {
          document.body.classList.add("dark-theme");
          localStorage.setItem("theme", "dark");
          updateThemeIcon(true);
        }
      });
    }
  }
  
  // Update the icon based on the current theme
  function updateThemeIcon(isDarkMode) {
    const toggleButton = document.querySelector('.theme-toggle');
    if (toggleButton) {
      toggleButton.innerHTML = isDarkMode 
        ? '<i class="bi bi-moon-fill"></i>' 
        : '<i class="bi bi-sun-fill"></i>';
    }
  }
});
