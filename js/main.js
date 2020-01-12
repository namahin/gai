(function ($) {
  "use strict";

  /*------------------------------------
  	Sticky Menu 
  --------------------------------------*/
  var windows = $(window);
  var stick = $(".header-sticky");
  windows.on('scroll', function () {
    var scroll = windows.scrollTop();
    if (scroll < 5) {
      stick.removeClass("sticky");
    } else {
      stick.addClass("sticky");
    }
  });
  /*------------------------------------
  	jQuery MeanMenu 
  --------------------------------------*/
  $('.main-menu nav').meanmenu({
    meanScreenWidth: "767",
    meanMenuContainer: '.mobile-menu'
  });


  /* last  2 li child add class */
  $('ul.menu>li').slice(-2).addClass('last-elements');


})(jQuery);


// sign up form image function
(function () {
  var uploader = document.createElement('input'),
    image = document.getElementById('img-result');

  uploader.type = 'file';
  uploader.accept = 'image/*';

  image.onclick = function () {
    uploader.click();
  }

  uploader.onchange = function () {
    var reader = new FileReader();
    reader.onload = function (evt) {
      image.classList.remove('no-image');
      image.style.backgroundImage = 'url(' + evt.target.result + ')';
      var request = {
        itemtype: 'test 1',
        brand: 'test 2',
        images: [{
          data: evt.target.result
        }]
      };

      document.querySelector('.show-button').style.display = 'block';
      document.querySelector('.upload-result__content').innerHTML = JSON.stringify(request, null, '  ');
    }
    reader.readAsDataURL(uploader.files[0]);
  }

  document.querySelector('.hide-button').onclick = function () {
    document.querySelector('.upload-result').style.display = 'none';
  };

  document.querySelector('.show-button').onclick = function () {
    document.querySelector('.upload-result').style.display = 'block';
  };
})();
// file upload preview
