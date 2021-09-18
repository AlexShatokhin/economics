$(document).ready(function(){

    $('.menu').on('click', 'div:not(.active)', function() {
        $(this)
          .addClass('div_active').siblings().removeClass('div_active')
          .closest('div.container').find('div.content').removeClass('content_active').eq($(this).index()).addClass('content_active');
      });
    var $page = $('html, body');
      $('a[href*="#we"]').click(function() {
          $page.animate({
              scrollTop: $($.attr(this, 'href')).offset().top
          }, 800);
          return false;
      });
      var $page = $('html, body');
      $('a[href*="#skills"]').click(function() {
          $page.animate({
              scrollTop: $($.attr(this, 'href')).offset().top
          }, 800);
          return false;
      });
      var $page = $('html, body');
      $('a[href*="#about_us"]').click(function() {
          $page.animate({
              scrollTop: $($.attr(this, 'href')).offset().top
          }, 800);
          return false;
      });

});

const photos = document.querySelectorAll('.profile_photo'),
      profile = document.querySelectorAll('.profile_photo_main'),
      hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu_media'),
      links = menu.querySelectorAll('a'),
      text = document.querySelectorAll('.text');
let       copy = 0;

    profile[0].style.display = 'block';
    text[0].style.display = 'block';
    photos.forEach((item,i) =>{
        copy = 0;
            item.addEventListener('click',()=>{
                profile[copy].style.display = 'none';
                text[copy].style.display = 'none';
                copy=i;
                profile[i].style.display = 'block';
                text[i].style.display = 'block';
            });
        });
    hamburger.addEventListener('click',()=>{
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_media_active');
        links.forEach(item=>{
            item.addEventListener('click',()=>{
                hamburger.classList.remove('hamburger_active');
                menu.classList.remove('menu_media_active');
            });
        });
    });