/* Menu JavaScript - Bertotto Boglione */

(function() {
    'use strict';
    
    const header = document.getElementById('mainHeader');
    let ticking = false;

    function updateHeader() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';
        }
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });

    console.log('Menu loaded successfully');
})();
