* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.evia-container {
  position: relative;
}

.evia {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FFE500, #FFCC00);
  position: relative;
  box-shadow: 0 15px 30px rgba(255, 204, 0, 0.35),
              0 0 20px rgba(255, 221, 0, 0.2);
  animation: float 3s ease-in-out infinite;
}

/* Shadow/glow below */
.evia::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 20px;
  background: rgba(255, 204, 0, 0.25);
  border-radius: 50%;
  filter: blur(8px);
  animation: shadowPulse 3s ease-in-out infinite;
}

/* Eyes — EXACT match style */
.eye {
  position: absolute;
  top: 50%;
  width: 20px;
  height: 32px;
  background: #ffffff;
  border-radius: 6px;
  transform: translateY(-50%);
}

.eye:first-child { left: 40px; }
.eye:last-child { right: 40px; }

/* Floating animation — matches your reference */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12px);
  }
}

@keyframes shadowPulse {
  0%, 100% {
    opacity: 0.4;
    transform: translateX(-50%) scale(1);
  }
  50% {
    opacity: 0.7;
    transform: translateX(-50%) scale(0.85);
  }
}

/* Blink animation */
.blink .eye {
  animation: blink 0.15s ease-in-out;
}

@keyframes blink {
  0%, 100% { transform: translateY(-50%) scaleY(1); }
  50% { transform: translateY(-50%) scaleY(0.05); }
}
