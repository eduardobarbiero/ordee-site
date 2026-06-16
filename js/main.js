const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');
const form = document.querySelector('[data-lead-form]');
const toast = document.querySelector('[data-toast]');
const yearEl = document.querySelector('[data-year]');

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

function onScroll() {
  header?.classList.toggle('is-scrolled', window.scrollY > 24);
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

navToggle?.addEventListener('click', () => {
  const open = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!open));
  if (mobileNav) {
    mobileNav.hidden = open;
  }
});

mobileNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    if (mobileNav) mobileNav.hidden = true;
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  toast.classList.add('is-visible');
  window.setTimeout(() => {
    toast.classList.remove('is-visible');
    window.setTimeout(() => {
      toast.hidden = true;
    }, 350);
  }, 4000);
}

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const nome = data.get('nome');
  console.info('[Ordee lead]', Object.fromEntries(data.entries()));
  showToast(`Obrigado, ${nome}! Entraremos em contato em breve.`);
  form.reset();
});
