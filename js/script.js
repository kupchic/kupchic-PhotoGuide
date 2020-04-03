var mySwiper = new Swiper('.swiper-container', {
  speed: 1000,
  spaceBetween: 500,
  navigation: {
    nextEl: '.swiper_btn_active_next',
    prevEl: '.swiper_btn_active_prev',
    disabledClass: 'disabled'
  },
});

const form = document.getElementsByClassName('input_info')[0];
let inputs = form.getElementsByTagName('input');

for (let i = 0; i < inputs.length; i++) {

  addEventListener('focusin' || 'focusout', () => {
    if (inputs[i].value == '' || inputs[i].value == "+375") {
      inputs[i].className = '';
    } else
      inputs[i].className = 'full';
  });
}

lightbox.option({
  'resizeDuration': 300,
  'wrapAround': true,
  positionFromTop: 50,
  disableScrolling: true,
  maxWidth: 1100,
  maxHeight: 620,
  fitImagesInViewport: true,
});
const header = document.querySelector('.header_static');
const menuNav = document.querySelector('.nav_list');
let menuButton = document.querySelector('.menu_button');
menuButton.addEventListener('click', function () {
  console.log("click");
  menuButton.classList.toggle('menu_button_active');
  menuNav.classList.toggle('nav_list_mob');
  header.classList.toggle('header_static_mob');
});

window.addEventListener('scroll', function () {
  menuButton.classList.remove('menu_button_active');
  menuNav.classList.remove('nav_list_mob');
  header.classList.remove('header_static_mob');
});

window.addEventListener('scroll', function (e) {
  const head = document.getElementById('parallax_header');
  const team = document.getElementById('parallax_team');
  let headerToTop = head.getBoundingClientRect().top;
  let teamToTop = team.getBoundingClientRect().top;
  head.style.backgroundPositionY = `${headerToTop*0.4}px`;
  team.style.backgroundPositionY = `${teamToTop*0.4}px`;
});
