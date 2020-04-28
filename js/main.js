"use strict";

$(document).ready(function () {
  var $body = $('body');
  var $header = $('.is-header');
  var $navBtn = $('#navBtn');
  var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
  var isChrome = /Chrome/i.test(navigator.userAgent);
  var mq = $(window).width() < 1023;
  var $main = $('.is-main'); // change logo colors

  if ($(document).scrollTop() > $main.height() - $header.height()) {
    $header.addClass('is-scrolled');
  }

  $(window).scroll(function () {
    if ($(document).scrollTop() > $(window).height() / 5 - $header.height()) {
      $header.addClass('is-scrolled');
    } else {
      $header.removeClass('is-scrolled');
    }
  });

  function closeNavigation() {
    $header.removeClass('is-active');
    $body.removeClass('is-nav-opened');
    clearTimeout(s);
    var s = setTimeout(function () {
      $header.removeClass('is-closing');
    }, 1000);
  } // open navigation


  $navBtn.click(function () {
    if ($header.hasClass('is-closing') && !$header.hasClass('is-active')) {
      return;
    }

    if ($header.hasClass('is-active')) {
      closeNavigation();
    } else {
      $header.addClass('is-active');
      $header.addClass('is-closing');
      $body.addClass('is-nav-opened');
    }
  });
  $('.navigation-link__footer').click(function () {
    closeNavigation();
  }); // function detectBrowser() {
  //   if (isSafari) {
  //     $body.addClass('isIos');
  //   } else if (isChrome && mq) {
  //     $body.addClass('isChrome');
  //   }
  // }
  // detectBrowser();
  // function fullHeightBanner() {
  //   if ($body.hasClass('isChrome')) {
  //     $main.css({ height: window.innerHeight });
  //   }
  // }
  // fullHeightBanner();
  // video playing on hover

  var figure = $('.with-video-bg ');
  var vid = figure.find('video');
  [].forEach.call(figure, function (item, index) {
    item.addEventListener('mouseover', hoverVideo.bind(item, index), false);
    item.addEventListener('mouseout', hideVideo.bind(item, index), false);
  });

  function hoverVideo(index, e) {
    // todo
    if (!vid[index].currentTime > 0) {
      vid[index].play();
    }
  }

  function hideVideo(index, e) {
    vid[index].pause();
    vid[index].currentTime = 0;
  } // hover main links


  function mainLinksHover(el, className) {
    el.hover(function () {
      $('.is-main').addClass('main-hovered ' + className);
    }, function () {
      $('.is-main').removeClass('main-hovered');
      $('.is-main').removeClass(className);
    });
  }

  mainLinksHover($('.is-homepage .main-side__right a.main-link'), 'dir-hovered');
  mainLinksHover($('.is-homepage .main-side__left a.main-link'), 'creative-hovered'); // catalog page

  var allMods = $('.is-catalog__project'); // Already visible modules

  allMods.each(function (i, el) {
    var el = $(el);

    if (el.visible(true)) {
      el.addClass('already-visible');
    }
  });
  $(window).scroll(function (event) {
    allMods.each(function (i, el) {
      var el = $(el);

      if (el.visible(true)) {
        el.addClass('come-in');
      }
    });
  });

  function expandText() {
    if ($('.is-about__description > *').length <= 2) {
      $('.about-expand-toggler').hide();
    } else {
      var aboutFirstHeight = $('.is-about__description p:nth-child(1)').outerHeight();
      var aboutSecondHeight = $('.is-about__description p:nth-child(2)').outerHeight();
      var aboutExpandedHeight = aboutFirstHeight + aboutSecondHeight;
      $('.is-about__description').css('maxHeight', aboutExpandedHeight);
      var totalHeight = 0;
      $('.is-about__description').children().each(function () {
        totalHeight = totalHeight + $(this).outerHeight(true);
      });
      $('.about-expand-toggler').click(function () {
        if ($('.is-about__description').hasClass('is-expanded')) {
          $('.is-about__description').css('maxHeight', aboutExpandedHeight);
        } else {
          $('.is-about__description').css('maxHeight', totalHeight);
        }

        $('.is-about__description').toggleClass('is-expanded');
      });
    }
  }

  expandText();
});

(function ($) {
  $.fn.visible = function (partial) {
    var $t = $(this),
        $w = $(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return compareBottom <= viewBottom && compareTop >= viewTop;
  };
})(jQuery);

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1500);
});
var body = document.body;
var timer;
window.addEventListener('scroll', function () {
  clearTimeout(timer);

  if (window.innerWidth >= 1100 && !body.classList.contains('disable-hover')) {
    body.classList.add('disable-hover');
  }

  timer = setTimeout(function () {
    body.classList.remove('disable-hover');
  }, 50);
}, false);