//arrow down script: (jQuery)
$('header .arrow').on('click', function () {
  $('body, html').animate({
    scrollTop: $('.about').offset().top
  }, 500)
})


// player play/pause script: (vanillaJS)
const video = document.querySelector('.about video');
const play = document.querySelector('.about .play');
const pause = document.querySelector('.about .pause');

play.addEventListener('click', function () {
  video.play();
  play.classList.toggle('active');
})

pause.addEventListener('click', function () {
  video.pause();
  pause.classList.remove('active');
  play.classList.add('active');
})

//mobile click to show pause btn
if (window.outerWidth < 1024) {
  video.addEventListener('click', function () {
    if (play.classList.contains('active') == false) {
      pause.classList.add('active');

      setTimeout(function () {
        pause.classList.remove('active');
      }, 2000)
    }
  })
}

video.addEventListener('mouseover', function () {
  if (play.classList.contains('active') == false) {
    pause.classList.add('active');
  }
})

pause.addEventListener('mouseover', function () {
  if (play.classList.contains('active') == false)
    pause.classList.add('active');
})
video.addEventListener('mouseout', function () {
  if (play.classList.contains('active') == false)
    pause.classList.remove('active');
})

var timeout;
document.onmousemove = function () {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    pause.classList.remove('active');
  }, 1000);
}

video.addEventListener('ended', function () {
  play.classList.add('active');
  pause.classList.remove('active');
})

// who we are, effect on hover
if (window.outerWidth > 1024) {
  $('.who-we-are .wrapper .img-hover').hover(
    function () {
      $(this).css('opacity', '1');
    },
    function () {
      $(this).css('opacity', '0');
    })
}

// slider
let whichElement = 0;
const timeChange = 3000;

let p = document.querySelector('.our-work .container div:nth-of-type(2) p');
let img = document.querySelectorAll('.our-work .container div');
let dot = document.querySelectorAll('.our-work nav div');
// const leftDiv = document.querySelector('.our-work .container div:nth-of-type(1)');
// const rightDiv = document.querySelector('.our-work .container div:nth-of-type(3)');

function removeClasses() {
  for (let i = 0; i < dot.length; i++) {
    dot[i].classList.remove('active')
  }
}

function changeElement() {
  switch (whichElement) {
    case 0:
      p.textContent = 'coffee';
      img[0].style.backgroundImage = "url(img/slider2.jpg)";
      img[1].style.backgroundImage = "url(img/slider3.jpg)";
      img[2].style.backgroundImage = "url(img/slider4.jpg)";
      removeClasses()
      dot[2].classList.add('active');
      whichElement++;
      break;
    case 1:
      p.textContent = 'help';
      img[0].style.backgroundImage = "url(img/slider3.jpg)";
      img[1].style.backgroundImage = "url(img/slider4.jpg)";
      img[2].style.backgroundImage = "url(img/slider1.jpg)";
      removeClasses()
      dot[3].classList.add('active');
      whichElement++;
      break;
    case 2:
      p.textContent = 'achievements';
      img[0].style.backgroundImage = "url(img/slider4.jpg)";
      img[1].style.backgroundImage = "url(img/slider1.jpg)";
      img[2].style.backgroundImage = "url(img/slider2.jpg)";
      removeClasses()
      dot[0].classList.add('active');
      whichElement++;
      break;
    case 3:
      p.textContent = 'Web design';
      img[0].style.backgroundImage = "url(img/slider1.jpg)";
      img[1].style.backgroundImage = "url(img/slider2.jpg)";
      img[2].style.backgroundImage = "url(img/slider3.jpg)";
      removeClasses()
      dot[1].classList.add('active');
      whichElement = 0;
      break;
  }

  // rightDiv.addEventListener('click', function () {
  //   changeElement();
  // });
}
setInterval(changeElement, timeChange);