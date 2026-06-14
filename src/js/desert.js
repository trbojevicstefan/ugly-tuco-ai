/* ═══════════════════════════════════════════════════════════════════
   UGLY TUCO AI — Desert Effects & Interactivity
   "When you have to shoot, shoot — don't talk!"
   ═══════════════════════════════════════════════════════════════════ */

// ── Dust Particles ──
(function initDust() {
  const count = 25;
  const container = document.body;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'dust-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (8 + Math.random() * 15) + 's';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.width = (1 + Math.random() * 2) + 'px';
    particle.style.height = particle.style.width;
    container.appendChild(particle);
  }
})();

// ── Cursor Trail ──
(function initCursorTrail() {
  let lastTrail = 0;
  const THROTTLE = 50; // ms between trail particles

  document.addEventListener('mousemove', function(e) {
    const now = Date.now();
    if (now - lastTrail < THROTTLE) return;
    lastTrail = now;

    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    document.body.appendChild(trail);

    setTimeout(() => trail.remove(), 500);
  });
})();

// ── Tuco Easter Eggs ──
(function initEasterEggs() {
  // Easter egg quotes — trigger randomly on page load
  const quotes = [
    "There are two kinds of people in this world, my friend — those who use AI, and those who get replaced by it.",
    "God is with us because he hates bad websites too!",
    "You see, Blondie, the secret to a good website... is never stopping.",
    "When you have to deploy, deploy — don't wait for QA!",
    "I'm not a web developer. I'm a survivor. And survivors ship code.",
    "The desert makes you tough. So does shipping every day.",
    "There's no such thing as a perfect website. Just a better one tomorrow.",
    "You want to know who built this? An ugly son of a bot named Tuco. That's who.",
  ];

  // Random quote in console
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(`%c🤠 Tuco says:%c "${quote}"`,
    'color: #C9A84C; font-size: 1.2em; font-weight: bold;',
    'color: #D4A574; font-style: italic;');

  // ASCII art in console
  console.log(`%c
    ⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣶⣿⣿⣿⣿⣿⣿⣷⣶⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠀⠀⠀⠀
    ⠀⠀⠀⠀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀
    ⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⡿⠋⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀
    ⠀⣰⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀
    ⣾⣿⣿⣿⣿⣿⣿⣿⠇⣀⣀⣀⣀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷
    ⣿⣿⣿⣿⣿⣿⣿⣿⠀⢿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⢻⣿⣿⣿⣿⣿⣿⣿⣷⣤⣤⣤⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟
    ⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀
    ⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀
    ⠀⠀⠀⠀⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠀⠀⠀⠀
    ⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀
                    UGLY TUCO AI
  `, 'color: #C9A84C; font-size: 0.6em;');

  // Konami-code style secret: type "tuco" for a surprise
  let buffer = '';
  document.addEventListener('keydown', function(e) {
    buffer += e.key.toLowerCase();
    if (buffer.length > 10) buffer = buffer.slice(-10);

    if (buffer.includes('tuco')) {
      buffer = '';
      // Fire confetti-like gold particles
      for (let i = 0; i < 30; i++) {
        setTimeout(() => {
          const spark = document.createElement('div');
          spark.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: #C9A84C;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: gold-spark 1s ease-out forwards;
          `;
          document.body.appendChild(spark);
          setTimeout(() => spark.remove(), 1000);
        }, i * 30);
      }

      // Add the keyframe if not already added
      if (!document.getElementById('gold-spark-style')) {
        const style = document.createElement('style');
        style.id = 'gold-spark-style';
        style.textContent = `
          @keyframes gold-spark {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(0) translateY(-50px); opacity: 0; }
          }
        `;
        document.head.appendChild(style);
      }

      console.log('%c💰 There\'s gold in them hills! %cType "blondie" for another secret...',
        'color: #C9A84C; font-size: 1.2em;',
        'color: #8B8378;');
    }

    if (buffer.includes('blondie')) {
      buffer = '';
      console.log('%c🤠 TUCO:%c "Blondie! You know what you are? Just a dirty son of a— No, Blondie, you\'re a genius. Building empires with AI agents. That\'s what we do."',
        'color: #C9A84C; font-size: 1.1em;',
        'color: #D4A574;');
    }
  });
})();

// ── Scroll Reveal ──
(function initScrollReveal() {
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.card, .tuco-quote, .wanted-border').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Trigger initial visible elements
  setTimeout(function() {
    document.querySelectorAll('.card, .tuco-quote, .wanted-border').forEach(function(el) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  }, 100);
})();

// ── Nav Scroll Effect ──
(function initNavScroll() {
  const nav = document.querySelector('.nav-saloon');
  if (!nav) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });
})();

// ── Loading Screen ──
(function initLoadingScreen() {
  const loader = document.getElementById('loading-screen');
  if (!loader) return;
  window.addEventListener('load', function() {
    setTimeout(function() {
      loader.classList.add('hidden');
      setTimeout(function() { loader.remove(); }, 500);
    }, 600);
  });
  // Fallback: hide after 3 seconds
  setTimeout(function() {
    if (loader.parentNode) {
      loader.classList.add('hidden');
      setTimeout(function() { if (loader.parentNode) loader.remove(); }, 500);
    }
  }, 3000);
})();

// ── Day/Night Mode Toggle ──
(function initModeToggle() {
  const toggle = document.getElementById('mode-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', function() {
    document.body.classList.toggle('dusk-mode');
    const isDusk = document.body.classList.contains('dusk-mode');
    toggle.innerHTML = isDusk
      ? '<i class="ph ph-sun-horizon"></i> DAWN'
      : '<i class="ph ph-moon-stars"></i> DUSK';
  });
})();

// ── Gold Dust Particles ──
(function initGoldDust() {
  const hero = document.getElementById('hero-desert');
  if (!hero) return;
  const count = 15;
  for (let i = 0; i < count; i++) {
    const dust = document.createElement('div');
    dust.className = 'gold-dust';
    dust.style.left = (10 + Math.random() * 80) + '%';
    dust.style.bottom = Math.random() * 60 + '%';
    dust.style.animationDuration = (4 + Math.random() * 8) + 's';
    dust.style.animationDelay = Math.random() * 8 + 's';
    hero.appendChild(dust);
  }
})();

// ── Parallax Dunes on Scroll ──
(function initParallaxDunes() {
  const dunes = document.querySelectorAll('.dune-layer');
  if (dunes.length === 0) return;
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    if (dunes[0]) dunes[0].style.transform = 'translateY(' + (scrollY * 0.02) + 'px)';
    if (dunes[1]) dunes[1].style.transform = 'translateY(' + (scrollY * 0.05) + 'px)';
    if (dunes[2]) dunes[2].style.transform = 'translateY(' + (scrollY * 0.08) + 'px)';
  });
})();

// ── Typing Animation for Terminal ──
(function initTerminalTyping() {
  const lines = document.querySelectorAll('.terminal-body .output');
  if (lines.length === 0) return;

  // Add typing cursor to last output line
  const lastOutput = lines[lines.length - 1];
  if (lastOutput && !lastOutput.querySelector('.typing-cursor')) {
    const span = document.createElement('span');
    span.className = 'typing-cursor';
    lastOutput.appendChild(span);
  }

  // Animate lines sequentially
  lines.forEach(function(line, i) {
    line.style.opacity = '0';
    line.style.transition = 'opacity 0.3s';
    setTimeout(function() {
      line.style.opacity = '1';
    }, 1500 + i * 600);
  });
})();
