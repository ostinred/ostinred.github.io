"use strict";

var r = document.querySelector('.result');
var rp = document.querySelector('.result p span');
var ri = document.querySelector('.result p i');
var btn = document.querySelector('.is-button');
var close = document.querySelector('.btn-close');
var general = document.querySelector('#general');
var current = document.querySelector('#current');

btn.onclick = function () {
  var g = general.value;
  var c = current.value;

  if (g.length && c.length) {
    r.classList.add('is-active');
    var res = 100 - 100 / general.value * current.value;

    var ic = function ic(n) {
      var icon = '';

      if (res > 10) {
        icon = '😶';
      }

      if (res > 20) {
        icon = '😨';
      }

      if (res > 30) {
        icon = '😥';
      }

      if (res > 40) {
        icon = '😐';
      }

      if (res > 50) {
        icon = '😌';
      }

      if (res > 70) {
        icon = '😊';
      }

      if (res > 90) {
        icon = '🥰';
      }

      return icon;
    };

    rp.innerHTML = Math.ceil(res) + '%';
    ri.innerHTML = ic(res);
  }
};

close.onclick = function () {
  r.classList.remove('is-active');
};