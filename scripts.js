document.addEventListener('DOMContentLoaded', function() {
  const audioPlayer = document.getElementById('audioPlayer');

  function attemptAutoplay() {
    if (audioPlayer.paused) {
      audioPlayer.muted = false;
      const promise = audioPlayer.play();

      if (promise !== undefined) {
        promise.catch(error => {
          console.log('Autoplay bloqueado pelo navegador:', error);
        });
      }
    }
  }

  // Tentar autoplay após primeira interação do usuário
  document.addEventListener('click', function firstInteraction() {
    attemptAutoplay();
    document.removeEventListener('click', firstInteraction);
  }, { once: true });
});
