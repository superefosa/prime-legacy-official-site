
document.addEventListener('DOMContentLoaded', () => {
  const yearEls = document.querySelectorAll('.year');
  yearEls.forEach(el => el.textContent = new Date().getFullYear());
});
