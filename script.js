// Sairaj Deshmukh portfolio interactions
(() => {
  const menuToggle = document.querySelector('#menu-toggle');
  const navLinks = document.querySelector('#nav-links');

  menuToggle?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open menu');
  }));

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((el, index) => {
      el.style.transitionDelay = `${Math.min(index % 4, 3) * 60}ms`;
      observer.observe(el);
    });
  } else {
    revealItems.forEach(el => el.classList.add('visible'));
  }

  const aura = document.querySelector('.cursor-aura');
  if (aura && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('pointermove', event => {
      aura.style.left = `${event.clientX}px`;
      aura.style.top = `${event.clientY}px`;
    }, { passive: true });
  }

  // Single audio element remains mounted across sections; scroll never resets playback.
  const audio = document.querySelector('#portfolio-audio');
  const player = document.querySelector('#music-player');
  const toggle = document.querySelector('#music-toggle');
  const status = document.querySelector('#music-status');
  const mute = document.querySelector('#music-mute');
  const volume = document.querySelector('#music-volume');
  const progress = document.querySelector('#music-progress');
  if (!audio || !player || !toggle || !status || !mute || !volume || !progress) return;

  audio.volume = Number(volume.value);
  const fmt = seconds => {
    if (!Number.isFinite(seconds)) return '0:00';
    return `${Math.floor(seconds / 60)}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;
  };
  function updateStatus() {
    if (audio.error) {
      status.textContent = 'Audio unavailable · check MP3 file';
    } else if (audio.paused) {
      status.textContent = audio.currentTime > 0 ? `Paused at ${fmt(audio.currentTime)}` : 'Tap to play';
    } else {
      status.textContent = `${fmt(audio.currentTime)} / ${fmt(audio.duration)}`;
    }
  }
  function updatePlayer() {
    const playing = !audio.paused;
    player.classList.toggle('is-playing', playing);
    toggle.setAttribute('aria-label', playing ? 'Pause Malhari soundtrack' : 'Play Malhari soundtrack');
    toggle.setAttribute('aria-pressed', String(playing));
    toggle.innerHTML = `<span class="music-disc-icon" aria-hidden="true">${playing ? 'Ⅱ' : '♫'}</span>`;
    updateStatus();
  }
  toggle.addEventListener('click', async () => {
    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        status.textContent = 'Playback blocked · tap play again';
      }
    } else {
      audio.pause();
    }
    updatePlayer();
  });
  mute.addEventListener('click', () => {
    audio.muted = !audio.muted;
    mute.setAttribute('aria-pressed', String(audio.muted));
    mute.setAttribute('aria-label', audio.muted ? 'Unmute audio' : 'Mute audio');
    mute.textContent = audio.muted ? '×' : '♫';
  });
  volume.addEventListener('input', () => {
    audio.volume = Number(volume.value);
    if (audio.volume > 0 && audio.muted) {
      audio.muted = false;
      mute.setAttribute('aria-pressed', 'false');
      mute.setAttribute('aria-label', 'Mute audio');
      mute.textContent = '♫';
    }
  });
  audio.addEventListener('loadedmetadata', () => {
    progress.disabled = false;
    updateStatus();
  });
  audio.addEventListener('timeupdate', () => {
    if (Number.isFinite(audio.duration) && audio.duration > 0) {
      progress.value = String((audio.currentTime / audio.duration) * 100);
    }
    updateStatus();
  });
  progress.addEventListener('input', () => {
    if (Number.isFinite(audio.duration) && audio.duration > 0) {
      audio.currentTime = (Number(progress.value) / 100) * audio.duration;
    }
  });
  audio.addEventListener('play', updatePlayer);
  audio.addEventListener('pause', updatePlayer);
  audio.addEventListener('error', updateStatus);
  updatePlayer();
})();
