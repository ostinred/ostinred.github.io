"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

$(document).ready(function () {
  var $body = $('body');

  function hidePreloader() {
    var el = document.getElementById('preloading');
    el.classList.add('is-hidden');
    $body.removeClass('is-fixed');

    var fnHide = function fnHide() {
      el.style.display = 'none';
      el.removeEventListener('transitionend', fnHide);
    };

    el.addEventListener('transitionend', fnHide);
  }

  setTimeout(hidePreloader, 1000);
});

window.onload = function () {
  var tabsButtons = _toConsumableArray(document.querySelectorAll('button[data-tab]'));

  var data = _toConsumableArray(document.querySelectorAll('[data-tab]')); // default tab


  if (tabsButtons.length) {
    var defaultTab = tabsButtons[1];

    if (defaultTab) {
      defaultTab.classList.add('is-active');
      data.map(function (x) {
        return x.getAttribute('data-tab') === defaultTab.getAttribute('data-tab') ? x.classList.add('is-active') : null;
      });
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var tab = _step.value;
        tab.addEventListener('mouseenter', function () {
          var currentTabName = tab.getAttribute('data-tab');
          data.map(function (x) {
            return x.classList.remove('is-active');
          });
          tab.classList.add('is-active');
          data.map(function (x) {
            return x.getAttribute('data-tab') === currentTabName ? x.classList.add('is-active') : undefined;
          });
        });
      };

      for (var _iterator = tabsButtons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } // modal


  var body = document.querySelector('body');
  var modalOverlay = document.querySelector('#modalOverlay');
  var modalForm = document.querySelector('#modalForm');

  var modalFormButton = _toConsumableArray(document.querySelectorAll('[data-modal="form"]'));

  var modalContacts = document.querySelector('#modalContacts');
  var navBtn = document.querySelector('#navBtn');
  var header = document.querySelector('.is-header');
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = modalFormButton[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var modalBtn = _step2.value;
      modalBtn.addEventListener('click', function () {
        if (window.innerWidth < 1169 && body.classList.contains('header-is-opened')) {
          body.classList.remove('header-is-opened');
          header.classList.remove('is-open');
        }

        body.classList.add('modal-is-opened');
        modalForm.classList.add('is-active');
      });
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  modalOverlay.addEventListener('click', function () {
    body.classList.remove('modal-is-opened');
    modalForm.classList.remove('is-active');

    if (modalContacts) {
      modalContacts.classList.remove('is-active');
    }
  });

  if (window.innerWidth < 1199) {
    navBtn.addEventListener('click', function () {
      header.classList.toggle('is-open');
      body.classList.toggle('header-is-opened');
    });
  }
}; // remove after word press


if (window.location.href.indexOf('blog') > -1 || window.location.href.indexOf('article') > -1) {
  var navLinks = _toConsumableArray(document.querySelectorAll('.is-navigation a'));

  navLinks[1].classList.add('is-active');
}

$(document).ready(function () {
  var copies = ['Tell us who you are', 'Choose your type of business', 'Select a suitable vehicle and up-fit', 'Let us help you with your trade in', 'Provide payment method', 'Get approved and finalize subscription', 'Enjoy the moshn vehicle and service', 'Upgrade anytime'];

  var calculateCenterPadding = function calculateCenterPadding() {
    if (window.innerWidth < 375) {
      return '30px';
    }

    if (window.innerWidth < 414) {
      return '50px';
    }

    return '65px';
  };

  $('#isCarousel').slick({
    infinite: true,
    centerMode: true,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    mobileFirst: true,
    responsive: [{
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        centerPadding: '5px',
        dots: true,
        customPaging: function customPaging(slider, i) {
          return '<div class="pager__item" id=' + i + '>' + copies[i] + '</div>';
        }
      }
    }, {
      breakpoint: 200,
      settings: {
        autoplaySpeed: 2000,
        dots: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: calculateCenterPadding(),
        customPaging: function customPaging(slider, i) {
          return '<div class="pager__item" id=' + i + '><span class="pager__item-number">' + Number(i + 1) + '</span><span class="pager__item-dot"></span></div>';
        }
      }
    }]
  });

  function createSlider() {
    $('#fullpage').fullpage({
      scrollOverflow: true,
      keyboardScrolling: true,
      scrollingSpeed: 1000,
      onLeave: function onLeave(origin, destination, direction) {
        var body = document.querySelector('body');
        var header = document.querySelector('.is-header');
        var sections = document.querySelectorAll('#fullpage .section');

        if (destination === sections.length) {
          body.classList.add('last-slide');
          header.classList.add('is-active');
        } else {
          body.classList.remove('last-slide');
          header.classList.remove('is-active');
        }

        $.fn.fullpage.setAutoScrolling(true);
        $.fn.fullpage.setFitToSection(true);
      }
    });
  }

  if ($('#fullpage').length) {
    createSlider();
  }

  var sliderNavs = document.querySelectorAll('[data-id]');
  var sliderNavMenu = document.querySelector('#slider-menu');

  if (sliderNavs.length) {
    sliderNavMenu.classList.add('is-0');
  }

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    var _loop2 = function _loop2() {
      var sliderNav = _step3.value;
      var currentNav = sliderNav.getAttribute('data-id');
      sliderNav.addEventListener('click', function () {
        $.fn.fullpage.moveTo(Number(currentNav) + 1);
      });
    };

    for (var _iterator3 = sliderNavs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      _loop2();
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
});
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  if ($('#fullpage').length) {
    if (window.innerWidth < 766) {
      $('body').removeClass('header-is-opened');
      $('header').removeClass('is-open');
    }

    $('body').addClass('modal-is-opened');
    $('#modalContacts').addClass('is-active');
  } else {
    $('body').removeClass('header-is-opened');
    $('header').removeClass('is-open');
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  }
});