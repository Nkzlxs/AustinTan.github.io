    $(window).scroll(function() {
      if($(this).scrollTop() > 750) { 
          $('header').addClass('solid');
          $('.cu').addClass('white');
          $('.au').addClass('white');
          $('.dropbtn').addClass('white');
          $('.hp').addClass('white');
      } else {
          $('header').removeClass('solid');
          $('.cu').removeClass('white');
          $('.au').removeClass('white');
          $('.dropbtn').removeClass('white');
          $('.hp').removeClass('white');
      }
    });