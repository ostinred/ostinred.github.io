"use strict";

var tablet;
var laptop;
tablet = 767;
laptop = 1140;
$(document).ready(function () {
  var $header = $('.is-header');
  var $body = $('body');
  var $navBtn = $('#navBtn');
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
  }); // navigation

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
  });

  function closeNavigation() {
    $header.removeClass('is-active');
    $body.removeClass('is-nav-opened');
    clearTimeout(s);
    var s = setTimeout(function () {
      $header.removeClass('is-closing');
    }, 1000);
  } // video playing on hover


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
  } // animations in viewport


  var catalogProjects = $('.is-catalog__project');
  var zebras = $('.is-zebra');
  $(window).scroll(function () {
    inViewport(zebras);
    inViewport(catalogProjects);
  });
  $(window).resize(function () {
    inViewport(zebras);
    inViewport(catalogProjects);
  });
  inViewport(zebras);
  inViewport(catalogProjects);

  function inViewport(el) {
    el.each(function () {
      var divPos = $(this).offset().top,
          topOfWindow = $(window).scrollTop();

      if (window.innerWidth > tablet) {
        if (divPos < topOfWindow + window.innerHeight + 50) {
          $(this).addClass('is-visible');
        }
      }

      return;
    });
  } // expand text


  var aboutTextDescription = $('.is-block__expanded-description');
  var aboutExpandToggler = $('.is-block__expanded-toggler');

  function expandText() {
    if ($('.is-block__expanded-description > *').length <= 1) {
      aboutExpandToggler.hide();
    } else {
      var aboutFirstHeight = $('.is-block__expanded-description p:nth-child(1)').outerHeight();
      var aboutExpandedHeight = aboutFirstHeight;
      aboutTextDescription.css('maxHeight', aboutExpandedHeight);
      var totalHeight = 0;
      aboutTextDescription.children().each(function () {
        totalHeight = totalHeight + $(this).outerHeight(true);
      });
      aboutExpandToggler.click(function () {
        if (aboutTextDescription.hasClass('is-expanded')) {
          aboutTextDescription.css('maxHeight', aboutExpandedHeight);
        } else {
          aboutTextDescription.css('maxHeight', totalHeight);
        }

        aboutTextDescription.toggleClass('is-expanded');
      });
    }
  }

  expandText(); // expand credits

  var creditWrapper = $('.is-credit');
  var creditToggler = $('.is-credit__toggler');
  creditToggler.click(function () {
    creditWrapper.toggleClass('is-expanded');
  }); // gallery view of images in post page

  var blockImages = $('.is-block__image');
  blockImages.click(function () {
    $(this).addClass('is-active');
    $(body).addClass('overflow-hidden');
  });
  var blockImageGallery = $('.is-block__image-copied');
  blockImageGallery.click(function (e) {
    e.stopPropagation();

    var _this = $(this).parent('.is-active');

    _this.removeClass('is-active');

    $(body).removeClass('overflow-hidden');
  }); // video in modal

  var videoModal = $('.is-block__video');
  var videoIframe = $('.is-block__video iframe');
  videoModal.click(function () {
    $(this).addClass('is-active');
    $(body).addClass('overflow-hidden');
  });
  var videoOverlay = $('.is-block__video-overlay');
  videoOverlay.click(function (e) {
    e.stopPropagation();
    videoModal.removeClass('is-active');
    $(body).removeClass('overflow-hidden');
    videoIframe.each(function () {
      var el_src = $(this).attr('src');
      $(this).attr('src', el_src);
    });
  }); // carousel

  var slider = $('.is-slider');

  if (slider.length) {
    slider.slick({
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: $('.slider-prev'),
      nextArrow: $('.slider-next')
    });
  } // add copyright year


  $('.is-copyright span').text(new Date().getFullYear()); // add header transparent to specific pages

  var pagesHeader = [$('.is-homepage'), $('.is-director__page'), $('.is-creative__page'), $('.is-post__page')];

  for (var i = 0; i < pagesHeader.length; i++) {
    if (pagesHeader[i].length) {
      $header.addClass('header-transparent');
    }
  } // disable logo title for specific pages


  var pagesLogo = [$('.is-about__page'), $('.is-post__page')];
  var logoIcon = $('.is-logo__icon');
  var logoName = $('.is-logo__name');

  for (var i = 0; i < pagesLogo.length; i++) {
    if (pagesLogo[i].length) {
      logoName.addClass('is-hidden');
      logoIcon.addClass('is-white');
    }
  } // main link animation


  var mainPage = $('#mainPage');
  var creativeLink = $('#creativeLink');
  var directorLink = $('#directorLink');
  var homepageLinkFromCreative = $('#homepageLinkFromCreative');
  var homepageLinkFromDirector = $('#homepageLinkFromDirector'); // hover homepage main links

  function mainLinksHover(el, className) {
    el.hover(function () {
      mainPage.addClass('main-hovered ' + className);
    }, function () {
      mainPage.removeClass('main-hovered');
      mainPage.removeClass(className);
    });
  }

  mainLinksHover(directorLink, 'dir-hovered');
  mainLinksHover(creativeLink, 'creative-hovered');
  mainLinksHover(homepageLinkFromCreative, 'dir-hovered');
  mainLinksHover(homepageLinkFromDirector, 'creative-hovered');
  var logoName = $('.is-logo__name');
  var url = window.location.href;

  if (window.innerWidth >= laptop) {
    $(window).scroll(function () {
      if ($(document).scrollTop() > $(window).height() / 2) {
        $('.is-mainpage__content').addClass('unblocked');
      } else {
        $('.is-mainpage__content').removeClass('unblocked');
      }
    });
  }

  if (mainPage.length) {
    creativeLink.click(function () {
      mainPage.removeClass('is-homepage-from-creative');
      mainPage.addClass('is-creative__page');
      logoName.addClass('is-hidden');
      mainPage.addClass('is-animating'); // if (!window.location.href.includes('#creative')) {
      //   window.location.href += '#creative';
      // }

      clearTimeout(c);
      var c = setTimeout(function () {
        mainPage.removeClass('is-animating');
      }, 1500);
    });
    homepageLinkFromCreative.click(function () {
      mainPage.removeClass('is-creative__page');
      mainPage.addClass('is-homepage-from-creative');
      mainPage.addClass('is-animating');
      clearTimeout(ch1);
      var ch1 = setTimeout(function () {
        mainPage.removeClass('is-animating');
      }, 1500);
      clearTimeout(ch2);
      var ch2 = setTimeout(function () {
        mainPage.removeClass('is-homepage-from-creative');
      }, 1750);
    });
    directorLink.click(function () {
      mainPage.addClass('is-director__page');
      mainPage.removeClass('is-homepage-from-creative'); // // window.location.href += '#director';

      logoName.addClass('without-opacity');
      mainPage.addClass('is-animating');
      clearTimeout(d);
      var d = setTimeout(function () {
        mainPage.removeClass('is-animating');
      }, 1600);
    });
    homepageLinkFromDirector.click(function () {// mainPage.removeClass('is-director__page');
      // mainPage.addClass('is-homepage-from-director');
      // mainPage.addClass('is-animating');
      // clearTimeout(dh1);
      // var dh1 = setTimeout(function () {
      //   mainPage.removeClass('is-animating');
      // }, 1500);
      // clearTimeout(dh2);
      // var dh2 = setTimeout(function () {
      //   mainPage.removeClass('is-homepage-from-director');
      // }, 1750);
    });
  }
}); // smooth scrolling to anchors

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 1500);
}); // prevent instantaneous hover

var body = document.body;
var timer;
window.addEventListener('scroll', function () {
  clearTimeout(timer);

  if (window.innerWidth >= laptop && !body.classList.contains('disable-hover')) {
    body.classList.add('disable-hover');
  }

  timer = setTimeout(function () {
    body.classList.remove('disable-hover');
  }, 50);
}, false);