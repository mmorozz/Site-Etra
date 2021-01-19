const slide = document.querySelector('.slide');
const imagens = document.querySelectorAll('.slide img');

//botões

const prev = document.querySelector('#prev')
const next = document.querySelector('#next')

//counter

let counter = 1;
const size = imagens[0].clientWidth;

slide.style.transform = 'translateX(' + ( - size + counter ) + 'px)';

//buttonlisteners

next.addEventListener('click',()=>{
  slide.style.transition = "transform 0.4s easy-in-out";
  couter++;
  slide.style.transform = 'translateX(' + (-size + counter) + 'px)';
});

prev.addEventListener('click', () => {
  slide.style.transition = "transform 0.4s easy-in-out";
  couter++;
  slide.style.transform = 'translateX(' + (-size + counter) + 'px)';
});