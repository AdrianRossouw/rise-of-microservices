require('./slides.less');

var child = document.createElement("div");
child.innerHTML = require('./slides.jade')();
document.body.appendChild(child);

var bespoke = require('bespoke');
var scale = require('bespoke-scale');
var keys = require('bespoke-keys');
var bullets = require('bespoke-bullets');
var hash = require('bespoke-hash');
var progress = require('bespoke-progress');
var state = require('bespoke-state');
var backdrop = require('bespoke-backdrop');
var touch = require('bespoke-touch');
var nebula = require('bespoke-theme-nebula');

bespoke.from('article', [
  scale('zoom'),
  progress(),
  hash(),
  state(),
  backdrop(),
  touch(),
  nebula(),
  keys(),
  bullets('li, .bullet')
]);

require('prism');
