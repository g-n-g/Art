const root = document.documentElement;
const toggle = document.getElementById('langToggle');
function setLang(lang) {
  root.setAttribute('data-lang', lang);
  root.lang = lang;
  document.querySelectorAll('img[data-es-src]').forEach(img => {
    img.src = img.dataset[lang + 'Src'];
    img.alt = img.dataset[lang + 'Alt'];
  });
  document.querySelectorAll('a[data-es-href]').forEach(a => {
    const href = a.dataset[lang + 'Href'];
    a.href = href || '#';
    a.classList.toggle('placeholder', href === '#');
    a.toggleAttribute('aria-disabled', href === '#');
  });
  localStorage.setItem('almapura-lang', lang);
}
toggle.addEventListener('click', () => {
  setLang(root.getAttribute('data-lang') === 'es' ? 'en' : 'es');
});
setLang(localStorage.getItem('almapura-lang') || 'es');
