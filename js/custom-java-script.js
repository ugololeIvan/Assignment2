var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
  
  return false;
});

function page1(){
   window.location.href  = 'page1.html';
}

function page2(){
   window.location.href  = 'page2.html';
}

function page3(){
   window.location.href = 'page3.html';
}

function page4(){
   window.location.href = 'page4.html';
}

function page5(){
   window.location.href = 'page5.html';
}

function page6(){
   window.location.href = 'page6.html';
}

function page7(){
   window.location.href = 'page7.html';
}

function page8(){
   window.location.href = 'page8.html';
}

function page9(){
   window.location.href = 'page9.html';
}

function page10(){
   window.location.href = 'page10.html';
}

function page11(){
   window.location.href = 'page11.html';
}

function page12(){
   window.location.href = 'page12.html';
}

function page13(){
   window.location.href = 'page13.html';
}

function page14(){
   window.location.href = 'page14.html';
}

function page15(){
   window.location.href = 'page15.html';
}

function page16(){
   window.location.href = 'page16.html';
}




