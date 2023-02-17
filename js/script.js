const bg = document.querySelector('#bg');
const scene = document.querySelector('#scene');
const parallax = new Parallax(scene, {
  scalarX: 5,
  scalarY: 5,
  frictionX: 0.075,
  frictionY: 0.075
});

function onImageHover(e) {
  const hover = (e.type === 'mouseover') || (e.type === 'touchstart');
  const id = this.dataset.id;

  document.body.classList.toggle('hover', hover);
  document.querySelector(`#bg > [data-id='${id}']`).classList.toggle('active', hover);
}

document.querySelectorAll('.card').forEach((elm, index) => {
  const div = document.querySelector('#bg > div').cloneNode(true);
  const img = elm.querySelector('img');

  elm.dataset.id = index;
  div.dataset.id = index;
  div.querySelector('img').src = img.src;
  div.querySelector('h2').innerText = img.alt;
  bg.append(div);

  elm.addEventListener('mouseout', onImageHover);
  elm.addEventListener('mouseover', onImageHover);
  elm.addEventListener('touchend', onImageHover);
  elm.addEventListener('touchstart', onImageHover);
});

(() => {
  document.body.classList.add('loaded');
  document.querySelector('#timer').innerText = new Date().toLocaleString('en-US');
})();

setInterval(() => {
  document.querySelector('#timer').innerText = new Date().toLocaleString('en-US');
}, 1000);
