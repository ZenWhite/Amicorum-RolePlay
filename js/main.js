document.addEventListener("DOMContentLoaded", function() {
    //Регистрация и авторизация
    const form = document.querySelectorAll('.reg-form');

    document.querySelector('.form__switcher').addEventListener('click', function(e) {

        form.forEach(form => {form.classList.add('hide')});
        const switcher = this.querySelector('.switcher');

        if( e.target.classList.contains('left-switch')  ) {
            switcher.style.left = '-1px';
            form[0].classList.remove('hide');
        }
        if( e.target.classList.contains('right-switch') ) {
            switcher.style.left = '50%';
            form[1].classList.remove('hide');
        }
        
    });

    //Мобильные карточки персонажа

    /*const cards = document.querySelectorAll('.characters__item'),
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
    });*/
});