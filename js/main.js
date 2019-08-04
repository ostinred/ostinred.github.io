"use strict";

var form = document.querySelector('.is-form');
var input = document.querySelector('.is-input');
var content = document.querySelector('.is-content');
var img = document.querySelector('.img-opal');
var typedString = document.querySelector('.was-sent');

window.onload = function (e) {
  var validateEmail = function validateEmail(email) {
    var reExpress = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var result = reExpress.test(String(email).toLowerCase());

    if (result) {
      // send message
      console.log(input.value); // content.classList.add('is-hidden');

      showTyped();
    } else {
      form.classList.add('has-error');
    }

    return;
  };

  form.onsubmit = function (e) {
    e.preventDefault();
    e.stopPropagation();
    validateEmail(input.value);
    return;
  };
};

img.onclick = function () {
  showTyped();
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