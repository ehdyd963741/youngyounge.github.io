window.onload = function () {
  let slideMenu = $(".st-list a");
  $.each(slideMenu, function (index, item) {
    $(this).click(function (event) {
      //href막기
      event.preventDefault();
      switchSlide.slideTo(index + 1);
    });
  });
  // 처음 슬라이드 표현을 위해서 0번이 포커스 된다.
  slideMenu.eq(0).addClass("slide-menu-active");

  let swSlide = new Swiper(".abc", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2000,
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
};
