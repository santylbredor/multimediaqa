gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions:"play none none reverse"
})


$(document).ready(function() {
  $('.menu-toggle').click(function() {
      $('.menu').toggleClass('active'); // Agrega o quita la clase "active"
  });
});


$(document).ready(function() {
  $('#about-link').click(function(e) {
      e.preventDefault(); // Evita que el enlace recargue la página
      $('.v_container').toggleClass('visible'); // Agrega o quita la clase "visible"
  });
});
gsap.from('.content-box', {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
      trigger: '.content-box',
      start: 'top 80%',
  },
});

gsap.from('.gsap-image', {
  opacity: 0,
  y: 50,
  stagger: 0.3,
  duration: 1,
  scrollTrigger: {
      trigger: '.gsap-image',
      start: 'top 80%',
  },
});
