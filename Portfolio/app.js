
// ScrollReveal animations
        ScrollReveal({ 
            reset: true,
            distance: '80px',
            duration: 2000,
            delay: 200
        });
        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .services-container, .portfolio-box', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1', { origin: 'left' });

        // Navbar highlighting on scroll
        const sections = document.querySelectorAll('section, .about');
        const navLinks = document.querySelectorAll('.navbar a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // Mobile menu toggle
        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.querySelector('.navbar');
        menuIcon.onclick = () => {
            navbar.classList.toggle('active');
        };

        // Typed.js for dynamic text
        const typed = new Typed('.typed-text', {
            strings: ['Web Developer', 'Coder', 'Software Developer','Debugger'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });