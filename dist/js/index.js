(function() {
	"use strict";

	window.sr = ScrollReveal();
  sr.reveal('.banner', {
    duration: 600,
    scale: 0.3,
    distance: '0px',
    reset: true
  }, 200);
  sr.reveal('.sr-foods', {
    duration: 600,
    scale: 0.3,
    distance: '0px',
    reset: true
  }, 100);
})();