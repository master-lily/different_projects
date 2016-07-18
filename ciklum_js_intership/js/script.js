/**
 * Created by losik on 14.07.16.
 */
$(function(){
    $('nav  ul li, nav ul li ul li').hover(
        function() {

            // !!!останавливаем всю текущую анимацию. Усли эту строчку не писать, то выпадающее меню прыгает при наведении на него курсора
            $(this).find('ul:first').stop(true, true);

            $(this).find('ul:first').slideDown();
        },
        function() {
            $(this).find('ul:first').slideUp('fast');
        }
    );
    // всем элементам меню с вложенностью добавить символ &raquo;
    $('nav  li:has(ul)').find('a:first').append('&raquo;');
});
