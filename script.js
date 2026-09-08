const evia = document.querySelector('.evia');

// Random blinking
function startBlinking() {
  const blinkInterval = () => {
    evia.classList.add('blink');
    setTimeout(() => evia.classList.remove('blink'), 150);
    setTimeout(blinkInterval, 2500 + Math.random() * 2500);
  };
  blinkInterval();
}

startBlinking();

// Click = little bounce
evia.addEventListener('click', () => {
  evia.style.animation = 'none';
  evia.offsetHeight; // trigger reset
  evia.style.animation = 'bounce 0.5s ease';
  setTimeout(() => {
    evia.style.animation = 'float 3s ease-in-out infinite';
  }, 500);
});
