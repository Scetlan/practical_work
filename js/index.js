const burgerMenu = document.querySelector('.mobil__burger-menu');
const dropDown = document.querySelector('.drop-down');
const menuClose = document.querySelector('.drop-down__burger-menu_close');

burgerMenu.addEventListener('click', () => {
    dropDown.classList.add('drop-down--active');
});

menuClose.addEventListener('click', () => {
    dropDown.classList.remove('drop-down--active');
})

// событие на кнопку 'показать еще'
const brandItems = document.querySelectorAll('.brand__item');
const brandBtn = document.querySelector('.more-buttom');
const brandAll = document.querySelector('.brand__all');
const brandSvgBtn = document.querySelector('.more-buttom__svg');

brandBtn.addEventListener('click', () => {
    brandItems.forEach(item => {
        item.classList.add('brand__item--avtive');
    });
    brandSvgBtn.classList.add('more-buttom__svg--transform');
    if (brandAll.textContent === 'Показать все') {
        brandAll.textContent = 'Скрыть';
    } else {
        brandAll.textContent = 'Показать все';
        brandItems.forEach(item => {
            item.classList.remove('brand__item--avtive');
        });
        brandSvgBtn.classList.remove('more-buttom__svg--transform');
    }
});


// swiper

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {

        320: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
    },

});