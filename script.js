
        let menu = document.querySelector('ul');
        let bars = document.querySelector('.header .fa-bars');

        bars.addEventListener('click', () => {
            menu.classList.toggle('show')
        });

        var typed = new Typed('#text' , {
            strings: ['Développeur Web et web mobile.'],
            typeSpeed: 25,
            backSpeed: 25,
            smartBackspace: true,
            loop: true,
        })

