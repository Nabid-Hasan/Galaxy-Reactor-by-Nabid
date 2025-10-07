function spinReactor() {
  const reactor = document.querySelector(".reactor-core");
  reactor.style.animation = "spin 3s linear infinite";
  setTimeout(() => {
    reactor.style.animation = "pulse 2s infinite alternate";
  }, 5000);
}

window.addEventListener("touchstart", () => {
  document.body.style.background = "radial-gradient(circle, #000022, #000010)";
  setTimeout(() => {
    document.body.style.background = "radial-gradient(circle at center, #000015, #000010, #000005)";
  }, 800);
});

const style = document.createElement("style");
style.innerHTML = `
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`;
document.head.appendChild(style);