const currentPage = window.location.pathname.toLowerCase().replace(/\/$/, "");
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  const linkHref = link.getAttribute('href').toLowerCase();
  if (currentPage.includes(linkHref)) {
    link.classList.add('active');
  }
});
