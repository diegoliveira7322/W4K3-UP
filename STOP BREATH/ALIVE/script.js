document.addEventListener("DOMContentLoaded", () => {
  const v = document.getElementById("bgVideo");
  const audio = new Audio("musica.mp3");
  audio.loop = true;
  let isPlaying = false;
  let started = false;
  const redirectBtn = document.getElementById("redirectBtn");

  // garante que o vídeo rode sempre
  const tryPlayVideo = () => v.play().catch(() => {});
  if (v.readyState >= 2) {
    tryPlayVideo();
  } else {
    v.addEventListener("canplay", tryPlayVideo, { once: true });
  }

  // começa música no hover
  const startOnHover = () => {
    if (!started) {
      audio.play().catch(() => {});
      isPlaying = true;
      started = true;

      // mostra botão após iniciar música
      setTimeout(() => {
        redirectBtn.classList.add("show");
      }, 800);
    }
  };
  window.addEventListener("mouseenter", startOnHover, { once: true });
  window.addEventListener("touchstart", startOnHover, { once: true, passive: true });

  // clique na tela alterna play/pause da música
  const toggleAudio = (e) => {
    // não parar se clicar no botão
    if (e.target === redirectBtn) return;
    if (!started) return;
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
    } else {
      audio.play().catch(() => {});
      isPlaying = true;
    }
  };
  window.addEventListener("click", toggleAudio);
  window.addEventListener("touchend", toggleAudio);

  // clique no botão redireciona
  redirectBtn.addEventListener("click", () => {
    window.location.href = "https://google.com"; // 🔗 muda aqui para o site desejado
  });
});