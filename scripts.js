// ========== Step 3: Basic Interactivity ==========

// Hamburger menu toggle
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '☰';
document.querySelector('header').prepend(menuToggle);

const nav = document.querySelector('nav[role="navigation"]');
menuToggle.addEventListener('click', toggleMenu);

function toggleMenu() {
  nav.classList.toggle('active');
  menuToggle.classList.toggle('open');
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ========== Step 4: Add Interactivity to Projects ==========

// Filter Projects
function filterProjects(category) {
  const projects = document.querySelectorAll('#projects article');
  projects.forEach(project => {
    if (category === 'all' || project.dataset.category === category) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

// Example: you could trigger this via buttons (All, Web, API)
const filterButtons = document.createElement('div');
filterButtons.classList.add('project-filters');
filterButtons.innerHTML = `
  <button onclick="filterProjects('all')">All</button>
  <button onclick="filterProjects('web')">Web</button>
  <button onclick="filterProjects('api')">API</button>
`;
document.querySelector('#projects').prepend(filterButtons);

// Lightbox Effect for Project Images
const images = document.querySelectorAll('#projects img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

images.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
});

// ========== Step 5: Contact Form Validation ==========

const contactForm = document.querySelector('#contact form');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');

  let isValid = true;

  // Basic Validation
  if (name.value.trim() === '') {
    alert('Please enter your name.');
    isValid = false;
  } else if (!validateEmail(email.value)) {
    alert('Please enter a valid email address.');
    isValid = false;
  } else if (message.value.trim() === '') {
    alert('Please enter a message.');
    isValid = false;
  }

  if (isValid) {
    alert('Message sent successfully!');
    contactForm.reset();
  }
});

// Email validation helper
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Real-time feedback
['input', 'textarea'].forEach(type => {
  contactForm.querySelectorAll(type).forEach(field => {
    field.addEventListener('input', () => {
      if (field.value.trim() === '') {
        field.style.borderColor = 'red';
      } else {
        field.style.borderColor = 'green';
      }
    });
  });
});

// ========== Step 6: Debugging Helpers ==========
console.log("Portfolio JS Loaded Successfully");

// Add helpful console logs for testing
window.addEventListener('load', () => {
  console.log("All resources loaded correctly!");
});
