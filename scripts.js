document.addEventListener('DOMContentLoaded', () => {
  const audioPlayer = document.getElementById('audioPlayer');
  const songImage = document.getElementById('songImage');
  const audioPath = 'assets/audio/';
  const imagePath = 'assets/images/';
  
  const playlist = [
    "kudasaibeats-alightofmine.mp3",
    "kudasaibeats-anighttogether.mp3",
    "kudasaibeats-attached.mp3",
    "kudasaibeats-lovelasts.mp3",
    "kudasaibeats-sapphire.mp3",
    "kudasaibeats-thegirlihaventmet.mp3",
    "kudasai-technicolor.mp3",
    "kudasai-wheniseeyou.mp3",
    "kudasai-youmakecolorsoutofgrey.mp3"
  ];

  let currentTrackIndex = 0;

  function loadTrack(index) {
    audioPlayer.src = audioPath + playlist[index];
    songImage.src = imagePath + 'foto' + (index + 1) + '.png'; // Atualiza a imagem de acordo com a música
    audioPlayer.load();
    audioPlayer.play().catch(error => {
      console.log('Erro ao tentar reproduzir:', error);
    });
  }

  function playNext() {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
  }

  function playPrev() {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
  }
  loadTrack(currentTrackIndex);

  // Troca de música ao terminar
  audioPlayer.addEventListener('ended', playNext);

  // Eventos de controle
  document.getElementById('nextBtn').addEventListener('click', playNext);
  document.getElementById('prevBtn').addEventListener('click', playPrev);
});

