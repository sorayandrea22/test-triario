
window.addEventListener('DOMContentLoaded', event => {

    let navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    }

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);
    //let display = 'none'

    const mainNav = document.body.querySelector('#main-nav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });

    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    document.body.style.display = display;
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
