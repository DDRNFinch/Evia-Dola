const evia = document.querySelector('.evia');
const eyes = document.querySelectorAll('.eye');

// Blink randomly
function blink() {
  eyes.forEach(eye => eye.classList.add('blink'));
  setTimeout(() => {
    eyes.forEach(eye => eye.classList.remove('blink'));
  }, 150);
}

setInterval(blink, 3000 + Math.random() * 2000);

// Click interaction
evia.addEventListener('click', () => {
  evia.style.transform = 'scale(1.2)';
  setTimeout(() => {
    evia.style.transform = '';
  }, 200);
});
