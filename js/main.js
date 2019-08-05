"use strict";

var form = document.querySelector('.is-form');
var input = document.querySelector('.is-input');
var content = document.querySelector('.is-content');
var img = document.querySelector('.img-opal');
var typedString = document.querySelector('.was-sent');
var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
var mobile = window.innerWidth < 1170;

window.onload = function (e) {
  if (isSafari) {
    document.querySelector('body').classList.add('isIos');
  }

  if (mobile) {
    input.setAttribute('autofocus', false);
  }

  var validateEmail = function validateEmail(email) {
    var reExpress = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var result = reExpress.test(String(email).toLowerCase());

    if (result) {
      console.log(input.value); // send here

      showTyped();

      if (mobile) {
        input.blur();
      }
    } else {
      form.classList.add('has-error');
    }

    return;
  };

  input.addEventListener('keydown', _.debounce(function () {
    return validateEmail(input.value);
  }, 2000));

  form.onsubmit = function (e) {
    e.preventDefault();
    e.stopPropagation();
    validateEmail(input.value);
    return;
  };

  var showTyped = function showTyped() {
    content.classList.add('is-hidden');
    content.addEventListener('transitionend', function (e) {
      e.target.style.display = 'none';
      document.querySelector('#typed').style.display = 'block';
      var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 60,
        smartBackspace: true,
        fadeOut: true
      });
    });
  };

  img.onclick = function () {
    showTyped();
  };
};