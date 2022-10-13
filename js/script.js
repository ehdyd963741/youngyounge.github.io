window.onload = function () {
  let gnbMenuA = $(".gnb > li > a");
  let sectionArr = $(".wrap > section");

  $.each(sectionArr, function (index, item) {
    new Waypoint({
      element: $(this),
      handler: function (direction) {
        if (direction == "down") {
          // 스크롤을 아래로 내릴떄
          gnbMenuA.removeClass("gnb-active");
          gnbMenuA.eq(index).addClass("gnb-active");
        } else if (direction == "up") {
          // 스크롤을 위로 올릴떄
          let tempIndex = index - 1;
          if (index != 0) {
            gnbMenuA.removeClass("gnb-active");
            gnbMenuA.eq(tempIndex).addClass("gnb-active");
          }
        }
      },
      offset: "50%",
    });
  });

  let slideMenu = $(".st-list a");
  $.each(slideMenu, function (index, item) {
    $(this).click(function (event) {
      //href막기
      event.preventDefault();
      swSlide.slideTo(index + 1);
    });
  });
  // 처음 슬라이드 표현을 위해서 0번이 포커스 된다.
  slideMenu.eq(0).addClass("slide-menu-active");

  let swSlide = new Swiper(".sw-port-cube", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  });

  swSlide.on("slideChange", function () {
    // 일단 모두 포커스 class 지운다.
    slideMenu.removeClass("slide-menu-active");
    // 나는 포커스 들어간다.
    slideMenu.eq(swSlide.realIndex).addClass("slide-menu-active");
  });

  $(".sw-port-cube").mouseenter(function () {
    swSlide.autoplay.stop();
  });
  $(".sw-port-cube").mouseleave(function () {
    swSlide.autoplay.start();
  });

  const $text = document.querySelector(".auto-text");
  // 글자 모음
  const letters = [
    "HELLOW",
    "MyFortPolio",
    "Always From Development 'WooJunKim'",
  ];
  const letters2 = ["From"];
  const letters3 = ["DevelopMent"];
  // 글자 입력 속도
  const speed = 100;
  let i = 0;
  // 타이핑 효과
  const typing = async () => {
    const letter = letters[i].split("");
    while (letter.length) {
      await wait(speed);
      // $text.innerHTML += letter.shift();
    }
    // 잠시 대기
    await wait(500);
    // 지우는 효과
    if (letters[i + 1]) remove();
  };

  // 글자 지우는 효과
  const remove = async () => {
    const letter = letters[i].split("");
    while (letter.length) {
      await wait(speed);
      letter.pop();
      $text.innerHTML = letter.join("");
    }
    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    i++;
    typing();
  };

  // 딜레이 기능 ( 마이크로초 )
  function wait(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  // 초기 실행
  setTimeout(typing, 1200);

  // 애니메이션
  var scene = document.getElementById("scene");
  var parallaxInstance = new Parallax(scene, {
    relativeInput: true,
    hoverOnly: true,
  });
  parallaxInstance.friction(0.05, 0.05);

  $(window)
    .resize(function () {
      var userAgent = window.navigator.userAgent;
      var isMobile = /mobile/i.test(userAgent);

      if (isMobile) {
        parallaxInstance.disable();
      } else {
        parallaxInstance.enable();
      }
    })
    .resize();
  // 애니2
  var scene = document.getElementById("scene2");
  var parallaxInstance = new Parallax(scene, {
    relativeInput: true,
    hoverOnly: true,
  });
  parallaxInstance.friction(0.05, 0.05);

  $(window)
    .resize(function () {
      var userAgent = window.navigator.userAgent;
      var isMobile = /mobile/i.test(userAgent);

      if (isMobile) {
        parallaxInstance.disable();
      } else {
        parallaxInstance.enable();
      }
    })
    .resize();

  // progressbar
  var bar = new ProgressBar.Line(H, {
    strokeWidth: 4,
    easing: "bounce",
    duration: 1400,
    color: "#108ee9",
    trailColor: "#eee",
    StrokeColor: "#108ee99",
    trailWidth: 4,
    svgStyle: { width: "100%", height: "100%" },
    from: { color: "#FFEA82" },
    to: { color: "#ED6A5A" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });

  // progressbar1
  var bar1 = new ProgressBar.Line(C, {
    strokeWidth: 4,
    easing: "bounce",
    duration: 1500,
    color: "#20f099",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "100%", height: "100%" },
    from: { color: "#20fff5" },
    to: { color: "#c5f099" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });

  // progressbar2
  var bar2 = new ProgressBar.Line(J, {
    strokeWidth: 4,
    easing: "bounce",
    duration: 1600,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "90%", height: "90%" },
    from: { color: "#579f89" },
    to: { color: "#5763c7" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });

  // progressbar3
  var bar3 = new ProgressBar.Line(S, {
    strokeWidth: 4.5,
    easing: "bounce",
    duration: 1700,
    color: "#57de10",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "80%", height: "100%" },
    from: { color: "#57631c" },
    to: { color: "#d7bed7" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });

  // progressbar4
  var bar4 = new ProgressBar.Line(G, {
    strokeWidth: 4,
    easing: "bounce",
    duration: 1800,
    color: "#e0b8c2",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "100%", height: "100%" },
    from: { color: "#b3b8c2" },
    to: { color: "#b3c2ff" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });

  // progressbar5
  var bar5 = new ProgressBar.Line(V, {
    strokeWidth: 9,
    easing: "bounce",
    duration: 1700,
    color: "#57de10",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "40%", height: "100%" },
    from: { color: "#57631c" },
    to: { color: "#ff980c" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });

  // progressbar6
  var bar6 = new ProgressBar.Line(P, {
    strokeWidth: 11,
    easing: "bounce",
    duration: 1700,
    color: "#57de10",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "35%", height: "100%" },
    from: { color: "#57631c" },
    to: { color: "#ffbc0d" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });

  // progressbar7
  var bar7 = new ProgressBar.Line(Q, {
    strokeWidth: 5,
    easing: "bounce",
    duration: 1700,
    color: "#57de10",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "75%", height: "100%" },
    from: { color: "#57631c" },
    to: { color: "#b17dc9" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });

  // progressbar8
  var bar8 = new ProgressBar.Line(M, {
    strokeWidth: 11,
    easing: "bounce",
    duration: 1700,
    color: "#57de10",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "30%", height: "100%" },
    from: { color: "#57631c" },
    to: { color: "#ffd214" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });

  // progressbar9
  var bar9 = new ProgressBar.Line(F, {
    strokeWidth: 4,
    easing: "bounce",
    duration: 1700,
    color: "#57de10",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "95%", height: "100%" },
    from: { color: "#57631c" },
    to: { color: "#00bed7" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });

  // progressbar10
  var bar10 = new ProgressBar.Line(T, {
    strokeWidth: 6,
    easing: "bounce",
    duration: 1700,
    color: "#57de10",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "60%", height: "100%" },
    from: { color: "#57631c" },
    to: { color: "#bcbed7" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });

  // progressbar11
  var bar11 = new ProgressBar.Line(L, {
    strokeWidth: 12,
    easing: "bounce",
    duration: 2200,
    color: "#ff9330",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "25%", height: "100%" },
    from: { color: "#ffa429" },
    to: { color: "#ffe61f" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });
  // vision스와이퍼 부분
  let visonSwiper = new Swiper(".visionswiper", {
    // grabCursor: true,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".visionswiper").mouseenter(function () {
    visonSwiper.autoplay.stop();
  });
  $(".visionswiper").mouseleave(function () {
    visonSwiper.autoplay.start();
  });

  //mixitup
  var mixer = mixitup(".mix-wrapper", {
    animation: {
      duration: 313,
      nudge: false,
      reverseOut: false,
      effects: "fade scale(0.3) translateX(36%) translateY(25%) rotateY(90deg)",
    },
  });

  // help 메뉴
  new Waypoint({
    element: $(".fix-menu"),
    handler: function (direction) {
      if (direction == "down") {
        $(".fix-menu").addClass("fix-menu-show");
      } else if (direction == "up") {
        $(".fix-menu").removeClass("fix-menu-show");
      }
    },
    offset: "0%",
  });
  // Skill 기능

  new Waypoint({
    element: $(".skill"),
    handler: function (direction) {
      if (direction == "down") {
        bar.animate(1.0);
        bar1.animate(1.0);
        bar2.animate(1.0);
        bar3.animate(1.0);
        bar4.animate(1.0);
        bar5.animate(1.0);
        bar6.animate(1.0);
        bar7.animate(1.0);
        bar8.animate(1.0);
        bar9.animate(1.0);
        bar10.animate(1.0);
        bar11.animate(1.0);
      } else if (direction == "up") {
        bar.animate(0.0);
        bar1.animate(0.0);
        bar2.animate(0.0);
        bar3.animate(0.0);
        bar4.animate(0.0);
        bar5.animate(0.0);
        bar6.animate(0.0);
        bar7.animate(0.0);
        bar8.animate(0.0);
        bar9.animate(0.0);
        bar10.animate(0.0);
        bar11.animate(0.0);
      }
    },
    offset: "70%",
  });
};
// 위로올리기
$(document).ready(function () {
  //위로가기 기능
  let go_top = $(".gotop");
  go_top.click(function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});

// 스크롤 적용
setTimeout(function () {
  $(".experience-item").niceScroll({
    cursorwidth: "8px",
    cursoropacitymax: 0.7,
  });
}, 3000);

$(window).resize(function () {
  $(".experience-item").niceScroll({
    cursorwidth: "8px",
    cursoropacitymax: 0.7,
  });
});
