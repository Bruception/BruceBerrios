const setCopyrightText = () => {
  const copyright = document.querySelector('.footer-text');
  const currentYear = new Date().getFullYear();
  copyright.innerText = `© ${currentYear} Bruce Berrios`;
}

window.onload = () => {
  addProjectCards(projects);
  setCopyrightText();
}
