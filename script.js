//scroll section 

/*let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
         let top = window.scrollY;
         let offset =sec.offsetTop - 100;
         let height = sec.offsetHeight;
         let id = sec.getAttribute('id');

         if(top >= offset && top < offset + height) {
             //active navbar links
             navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
             });
         }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
}*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

function activateNavLink() {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
}

// Attach the scroll event listener
window.addEventListener('scroll', activateNavLink);

// Add click event listeners to nav links
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});
