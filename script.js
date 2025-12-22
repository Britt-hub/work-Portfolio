document.addEventListener('DOMContentLoaded', () => {
  // Fade-in sections
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  elements.forEach(el => observer.observe(el));

  // Vinyl easter egg
  const vinylEgg = document.querySelector('.vinyl-easter-egg');
  setTimeout(() => {
    vinylEgg.classList.add('active'); // appear after 3s
  }, 3000);

  const vinylSpin = document.querySelector('.vinyl-spin');
  const vinylStack = document.querySelector('.vinyl-stack'); // updated

  // Toggle fan-out vinyl stack
  vinylSpin.addEventListener('click', () => {
    vinylStack.classList.toggle('active'); // toggle fan-out
  });
});