function abrirCarta() {
  const contenedor = document.getElementById("contenedor");
  const mensaje = document.getElementById("mensaje");
  contenedor.classList.toggle("abierto");

  if (contenedor.classList.contains("abierto")) {
    mensaje.style.opacity = "0";
    setTimeout(() => {
      mensaje.style.animation = "aparecer 2s ease forwards";
    }, 500);

    const confetti = document.getElementById("confetti");
    for (let i = 0; i < 40; i++) {
      const part = document.createElement("div");
      part.className = "particula";
      part.style.left = Math.random() * 100 + "vw";
      part.style.top = -10 + "px";
      part.style.background = `hsl(${Math.random()*360}, 90%, 70%)`;
      part.style.animationDuration = 5 + Math.random() * 5 + "s";
      confetti.appendChild(part);
      setTimeout(() => part.remove(), 10000);
    }
  }
}
