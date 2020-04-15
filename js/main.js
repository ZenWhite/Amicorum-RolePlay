document.addEventListener("DOMContentLoaded", function() {
    //Регистрация и авторизация
    const forms = document.querySelectorAll('.reg-form'),
          switcher = document.querySelector('.form__switch'),
          formTitles = document.querySelectorAll('.form__title');

    formTitles[0].addEventListener('click', function() {
        switcher.style.left = '-1px';
        forms[0].classList.remove('hide');
        forms[1].classList.add('hide');
    });
    formTitles[1].addEventListener('click', function() {
        switcher.style.left = '50%';
        forms[1].classList.remove('hide');
        forms[0].classList.add('hide');
    });

    //Мобильные карточки персонажа

    const cards = document.querySelectorAll('.characters__item'),
          dots = document.querySelectorAll('.characters__dot');
    
    dots.forEach(item => {
        item.addEventListener('click', function(e) {
           e.preventDefault();
           let index = [...dots].indexOf(item);

           dots.forEach(element => {element.classList.remove('active-dot')})
           item.classList.add('active-dot');
           
           cards.forEach(element => element.className = 'characters__item mobile-card');
           cards[index].className = 'characters__item fade';
        });
    });
});