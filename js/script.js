function userScroll() {
    const navbar = document.querySelector('.navbar');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 35) {
        navbar.classList.add('bg-secondary');
      } else {
        navbar.classList.remove('bg-secondary');
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', userScroll);