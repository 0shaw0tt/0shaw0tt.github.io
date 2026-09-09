const obj = document.createElement("div");

obj.textContent = "⟡";
obj.id = "screensaver-object";

document.body.appendChild(obj);

let x = 100;
let y = 100;

let dx = 3.0;
let dy = 1.7;

function move() {
  const maxX = window.innerWidth - obj.offsetWidth;
  const maxY = window.innerHeight - obj.offsetHeight;

  x += dx;
  y += dy;

  if (x <= 0 || x >= maxX) dx *= -1;
  if (y <= 0 || y >= maxY) dy *= -1;

  obj.style.transform = `translate(${x}px, ${y}px)`;

  requestAnimationFrame(move);
}

move();
