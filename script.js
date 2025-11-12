// Simple typing effect (Ship, Scale, Secure)
const words = ["Ship", "Scale", "Secure"];
let i = 0, j = 0, deleting = false;
const el = document.getElementById("typed");
function type() {
  const word = words[i];
  if (!deleting) {
    el.textContent = word.slice(0, ++j);
    if (j === word.length) { deleting = true; setTimeout(type, 900); return; }
  } else {
    el.textContent = word.slice(0, --j);
    if (j === 0) { deleting = false; i = (i + 1) % words.length; }
  }
  setTimeout(type, deleting ? 60 : 90);
}
type();

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("show"); });
}, { threshold: 0.2 });
document.querySelectorAll(".reveal, .reveal-delay, .reveal-delay-2").forEach(el => observer.observe(el));

// Canvas orbs animation
const canvas = document.getElementById("orbs");
const ctx = canvas.getContext("2d");
let w, h, orbs = [];
function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = document.querySelector('.hero').offsetHeight;
}
window.addEventListener('resize', resize); resize();

function makeOrbs(n=28){
  orbs = Array.from({length:n}, ()=> ({
    x: Math.random()*w,
    y: Math.random()*h*.9,
    r: 2 + Math.random()*6,
    dx: -1 + Math.random()*2,
    dy: -0.6 + Math.random()*1.2,
    hue: 170 + Math.random()*140,
    life: 0.3 + Math.random()*0.7
  }));
}
makeOrbs();

function step(){
  ctx.clearRect(0,0,w,h);
  orbs.forEach(o=>{
    o.x += o.dx; o.y += o.dy;
    if(o.x<-50) o.x=w+50; if(o.x>w+50) o.x=-50;
    if(o.y<-50) o.y=h+50; if(o.y>h+50) o.y=-50;
    ctx.beginPath();
    const grad = ctx.createRadialGradient(o.x,o.y,0,o.x,o.y,o.r*6);
    grad.addColorStop(0, `hsla(${o.hue}, 85%, 65%, ${o.life})`);
    grad.addColorStop(1, 'transparent');
    ctx.fillStyle = grad;
    ctx.arc(o.x,o.y,o.r*6,0,Math.PI*2);
    ctx.fill();
  });
  requestAnimationFrame(step);
}
step();
