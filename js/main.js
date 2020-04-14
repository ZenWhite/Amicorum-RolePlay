document.addEventListener("DOMContentLoaded", function() {
    //Регистрация и авторизация
    const forms = document.forms,
          switcher = document.querySelector('.form__switch'),
          formTitles = document.querySelectorAll('.form__title');

    formTitles[0].addEventListener('click', () => {
        switcher.style.left = '-1px';
        forms[0].classList.remove('hide');
        forms[1].classList.add('hide');
    });
    formTitles[1].addEventListener('click', function() {
        switcher.style.left = '50%';
        forms[1].classList.remove('hide');
        forms[0].classList.add('hide');
    });
});