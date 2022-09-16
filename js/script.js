window.onload = function(){  

new Swiper('.abc', {
  effect: "cube",
  grabCursor: true,
  loop:true,
  speed: 1000,
  autoplay: {
    delay: 2000
  },
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  }
});


}