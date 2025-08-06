window.addEventListener('DOMContentLoaded', function() {
  const pre = document.getElementById('lyricsPre');
  const scrollDiv = document.getElementById('lyricsScroll');
  const audio = document.getElementById('lyricsAudio');
  if (!pre || !scrollDiv || !audio) return;

  function syncScroll() {
    const preHeight = pre.scrollHeight;
    const divHeight = scrollDiv.clientHeight;
    const scrollable = preHeight - divHeight;
    if (scrollable <= 0) return;

    const percent = audio.currentTime / audio.duration;
    scrollDiv.scrollTop = percent * scrollable;
  }

  audio.addEventListener('timeupdate', syncScroll);
  audio.addEventListener('seeked', syncScroll);
  audio.addEventListener('play', syncScroll);
});

