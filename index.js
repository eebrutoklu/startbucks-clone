const box = document.querySelector(".box");
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

canvas.width = box.clientWidth;
canvas.height = box.clientHeight;

const snowflakes = [];
const numSnowflakes = 200;

for (let i = 0; i < numSnowflakes; i++) {
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 4 + 1,
    speed: Math.random() * 3 + 1,
  });
}

let alpha = 0;
let textX = Math.random() * canvas.width;
let textY = Math.random() * canvas.height;

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  for (let i = 0; i < numSnowflakes; i++) {
    const flake = snowflakes[i];
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2, true);
  }
  ctx.fill();
  moveSnowflakes();

  // Metni ekleme
  ctx.font = "20px Arial";
  ctx.textAlign = "center";
  ctx.fillStyle = `rgba(200, 0, 0, ${alpha})`;

  const text = "Happy New Year";
  const textWidth = ctx.measureText(text).width;
  ctx.fillText(text, textX, textY);

  alpha += 0.02;
  if (alpha >= 1) {
    alpha = 0;
    textX = Math.random() * canvas.width;
    textY = Math.random() * canvas.height;
  }
}

function moveSnowflakes() {
  for (let i = 0; i < numSnowflakes; i++) {
    const flake = snowflakes[i];
    flake.y += flake.speed;
    if (flake.y > canvas.height) {
      flake.y = -5;
      flake.x = Math.random() * canvas.width;
    }
  }
}

setInterval(drawSnowflakes, 60);
