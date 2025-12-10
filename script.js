// Navegación suave
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
        
        // Cerrar menú móvil después de clic
        if (window.innerWidth <= 768) {
            document.getElementById('navMenu').classList.remove('active');
        }
    });
});

// Toggle menú móvil
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('active');
}

// Animación de entrada al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Manejo del formulario
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí conectaremos el formulario a un servicio real más adelante
    const formData = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        mensaje: document.getElementById('mensaje').value
    };
    
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.\n\n' +
          'Por ahora este es un formulario de prueba. Más adelante lo conectaremos a un servicio real.');
    
    this.reset();
});

// Efecto parallax suave en hero
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
    }
});