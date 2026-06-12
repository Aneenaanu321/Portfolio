const roles = [
  'Senior Software Engineer',
  'Technical Lead',
  'Technical Manager',
  'Pre-Sales Product Engineer',
  'Software Manager',
  'Full-Stack Developer',
  'Cloud Architect',
  'Team Mentor',
  'Product Engineer',
  'Software Engineer',
  'Cloud Engineer',
  'DevOps Engineer',
  'System Architect',
  'System Administrator',
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEl = document.getElementById('typed-role');

function typeRole() {
  if (!typeEl) return;

  const current = roles[roleIndex];
  const display = isDeleting
    ? current.substring(0, charIndex - 1)
    : current.substring(0, charIndex + 1);

  typeEl.textContent = display;
  charIndex += isDeleting ? -1 : 1;

  let delay = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === current.length + 1) {
    delay = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }

  setTimeout(typeRole, delay);
}

typeRole();

const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle?.addEventListener('click', () => {
  navList.classList.toggle('open');
});

navList?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navList.classList.remove('open'));
});

const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-list a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (scrollY >= top) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

document.querySelector('.contact-form')?.addEventListener('submit', e => {
  e.preventDefault();
});

const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  if (themeIcon) {
    themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }

  themeToggle?.setAttribute(
    'aria-label',
    theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
  );
}

themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  setTheme(current === 'dark' ? 'light' : 'dark');
});

setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
