    $(window).scroll(function() {
      if($(this).scrollTop() > 650) { 
          $('header').addClass('solid');
          $('.openNav').removeClass('white');
      } else {
          $('header').removeClass('solid');
          $('.openNav').addClass('white');
      }
    });