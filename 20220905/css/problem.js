// js 동작 채우기
let icon = document.querySelector('.icon_menu');
let slide = document.querySelector('.slide_menu');

icon.addEventListener('click', click);

function click() {
  slide.classList.toggle('d-none');
}