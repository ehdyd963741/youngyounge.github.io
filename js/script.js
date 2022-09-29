window.onload = function () {
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
  // let swStList = new Swiper(".sw-stlist", {
  //   loop: true,
  // });
  // swSlide.controller.control = swStList;

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
    "Always From Development ㅡㅡㅡ is ㅡㅡㅡ 'WooJunKim' ㅡㅡㅡㅡㅡㅡㅡ ",
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
      $text.innerHTML += letter.shift();
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
    trailColor: "#108ee99",
    StrokeColor: "#108ee99",
    trailWidth: 4,
    svgStyle: { width: "100%", height: "100%" },
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: "#999",
        position: "absolute",
        right: "0",
        top: "30px",
        padding: 0,
        margin: 0,
        transform: null,
      },
      autoStyleContainer: false,
    },
    from: { color: "#FFEA82" },
    to: { color: "#ED6A5A" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });
  bar.animate(1.0);

  // progressbar1
  var bar1 = new ProgressBar.Line(C, {
    strokeWidth: 4,
    easing: "bounce",
    duration: 1500,
    color: "#20f099",
    trailColor: "#eeeee",
    trailWidth: 1,
    svgStyle: { width: "100%", height: "100%" },
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: "#999",
        position: "absolute",
        right: "0",
        top: "30px",
        padding: 0,
        margin: 0,
        transform: null,
      },
      autoStyleContainer: false,
    },
    from: { color: "#20fff5" },
    to: { color: "#c5f099" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });
  bar1.animate(1.0); // Number from 0.0 to 1.0

  // progressbar2
  var bar2 = new ProgressBar.Line(J, {
    strokeWidth: 4,
    easing: "bounce",
    duration: 1600,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "100%", height: "100%" },
    from: { color: "#579f89" },
    to: { color: "#5763c7" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });
  bar2.animate(1.0); // Number from 0.0 to 1.0

  // progressbar3
  var bar3 = new ProgressBar.Line(S, {
    strokeWidth: 4,
    easing: "bounce",
    duration: 1700,
    color: "#57de10",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "50%", height: "100%" },
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: "#999",
        position: "absolute",
        right: "0",
        top: "30px",
        padding: 0,
        margin: 0,
        transform: null,
      },
      autoStyleContainer: false,
    },
    from: { color: "#57631c" },
    to: { color: "#570f2a" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
      bar.setText(Math.round(bar.value() * 50) + " %");
    },
  });
  bar3.animate(1.0); // Number from 0.0 to 1.0

  // progressbar4
  var bar4 = new ProgressBar.Line(G, {
    strokeWidth: 4,
    easing: "bounce",
    duration: 1800,
    color: "#e0b8c2",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "100%", height: "100%" },
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: "#999",
        position: "absolute",
        right: "0",
        top: "30px",
        padding: 0,
        margin: 0,
        transform: null,
      },
      autoStyleContainer: false,
    },
    from: { color: "#b3b8c2" },
    to: { color: "#b3c2ff" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });
  bar4.animate(1.0); // Number from 0.0 to 1.0

  // progressbar5
  var bar5 = new ProgressBar.Line(V, {
    strokeWidth: 4,
    easing: "bounce",
    duration: 1900,
    color: "#1f4dac",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "93%", height: "100%" },
    from: { color: "#10768c" },
    to: { color: "#10757b" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });
  bar5.animate(1.0); // Number from 0.0 to 1.0

  // progressbar6
  var bar6 = new ProgressBar.Line(P, {
    strokeWidth: 4,
    easing: "bounce",
    duration: 2000,
    color: "#dfe599",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "80%", height: "100%" },
    from: { color: "#b3e599" },
    to: { color: "#67e599" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });
  bar6.animate(1.0); // Number from 0.0 to 1.0

  // progressbar7
  var bar7 = new ProgressBar.Line(Q, {
    strokeWidth: 4,
    easing: "bounce",
    duration: 2100,
    color: "#cc78e1",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "90%", height: "100%" },
    from: { color: "#9278e1" },
    to: { color: "#4d78e1" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });
  bar7.animate(1.0); 

  // progressbar8
  var bar8 = new ProgressBar.Line(M, {
    strokeWidth: 4,
    easing: "bounce",
    duration: 2200,
    color: "#ff9330",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "70%", height: "100%" },
    from: { color: "#ffa429" },
    to: { color: "#ffe61f" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });
  bar8.animate(1.0); 

  // progressbar9
  var bar9 = new ProgressBar.Line(F, {
    strokeWidth: 4,
    easing: "bounce",
    duration: 2300,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "40%", height: "100%" },
    from: { color: "#20fff5" },
    to: { color: "#c5f099" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });
  bar9.animate(1.0); 

  // progressbar10
  var bar10 = new ProgressBar.Line(T, {
    strokeWidth: 4,
    easing: "bounce",
    duration: 2400,
    color: "#a8de39",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "70%", height: "100%" },
    from: { color: "#90de39" },
    to: { color: "#63de39" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });
  bar10.animate(1.0); 

  // progressbar11
  var bar11 = new ProgressBar.Line(L, {
    strokeWidth: 4,
    easing: "bounce",
    duration: 2500,
    color: "#ff0ddd",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "50%", height: "100%" },
    from: { color: "#d90ddd" },
    to: { color: "#8a0ddd" },
    step: (state, bar) => {
      bar.path.setAttribute("stroke", state.color);
    },
  });
  bar11.animate(1.0); 

};
