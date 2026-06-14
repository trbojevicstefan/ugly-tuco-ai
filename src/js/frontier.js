/* ═══════════════════════════════════════════════════════════════════
   UGLY TUCO AI — Frontier Effects (Western 2.0)
   "When you have to shoot, shoot — don't talk!"
   ═══════════════════════════════════════════════════════════════════ */

// ── Loading Screen ──
(function initLoading() {
  const loader = document.getElementById('loading-screen');
  if (!loader) return;
  function hide() {
    loader.classList.add('hidden');
    setTimeout(function(){if(loader.parentNode)loader.remove()},600);
  }
  window.addEventListener('load',function(){setTimeout(hide,400)});
  setTimeout(function(){if(loader.parentNode)hide()},3000);
})();

// ── Nav Scroll Effect ──
(function initNavScroll() {
  const nav = document.querySelector('.nav-saloon');
  if (!nav) return;
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() {
        if (window.scrollY > 30) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
        ticking = false;
      });
      ticking = true;
    }
  }, {passive: true});
})();

// ── Active Nav Link Highlighting ──
(function initActiveNav() {
  const links = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!links.length) return;
  const sections = Array.from(links).map(function(a){
    return document.querySelector(a.getAttribute('href'));
  }).filter(Boolean);

  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      requestAnimationFrame(function() {
        var scrollPos = window.scrollY + 100;
        sections.forEach(function(section, i) {
          if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
            links.forEach(function(l){l.classList.remove('active')});
            if (links[i]) links[i].classList.add('active');
          }
        });
        ticking = false;
      });
      ticking = true;
    }
  }, {passive: true});
})();

// ── Mobile Menu ──
(function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const overlay = document.getElementById('mobile-menu-overlay');
  if (!toggle || !overlay) return;
  function open(){document.body.classList.add('mobile-menu-open')}
  function close(){document.body.classList.remove('mobile-menu-open')}
  toggle.addEventListener('click',function(){
    document.body.classList.contains('mobile-menu-open')?close():open();
  });
  overlay.addEventListener('click',close);
  document.querySelectorAll('.mobile-nav-links a').forEach(function(link){
    link.addEventListener('click',function(){setTimeout(close,200)});
  });
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&&document.body.classList.contains('mobile-menu-open'))close();
  });
})();

// ── Mode Toggle (Theme Switcher) ──
(function initModeToggle() {
  const toggle = document.getElementById('mode-toggle');
  if (!toggle) return;
  var modes = ['default','dusk'];
  var current = 0;
  toggle.addEventListener('click',function(){
    current = (current + 1) % modes.length;
    document.body.setAttribute('data-mode',modes[current]);
    var icons = {default:'<i class="ph ph-moon-stars"></i> DUSK',dusk:'<i class="ph ph-sun-horizon"></i> DAWN'};
    toggle.innerHTML = icons[modes[current]] || icons.default;
  });
})();

// ── Scroll-Triggered Animations (Intersection Observer) ──
(function initScrollReveal() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold:0.15,rootMargin:'0px 0px -40px 0px'});

  document.querySelectorAll('.fade-up,.slide-left,.slide-right,.card,.post-card,.stat-card,.timeline-item').forEach(function(el){
    observer.observe(el);
  });
})();

// ── Back to Top ──
(function initBackToTop() {
  var btn = document.getElementById('back-to-top');
  if (!btn) return;
  var ticking = false;
  window.addEventListener('scroll',function(){
    if(!ticking){
      requestAnimationFrame(function(){
        if(window.scrollY>600)btn.classList.add('visible');
        else btn.classList.remove('visible');
        ticking=false;
      });
      ticking=true;
    }
  },{passive:true});
  btn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
})();

// ── Smooth Scroll for Anchor Links ──
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click',function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
})();

// ── Counter Animation ──
(function initCounters() {
  var counters = document.querySelectorAll('.stat-value[data-count]');
  if (!counters.length) return;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-count'),10);
        var duration = 2000;
        var start = performance.now();
        function update(now) {
          var elapsed = now - start;
          var progress = Math.min(elapsed / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(target * eased);
          if (progress < 1) requestAnimationFrame(update);
          else el.textContent = target;
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  },{threshold:0.5});
  counters.forEach(function(c){observer.observe(c)});
})();

// ── Easter Eggs (keyboard) ──
(function initEasterEggs() {
  var buffer = '';
  document.addEventListener('keydown',function(e){
    buffer += e.key.toLowerCase();
    if(buffer.length>12)buffer=buffer.slice(-12);
    if(buffer.includes('tuco')){
      buffer='';
      for(var i=0;i<40;i++){(function(delay){
        setTimeout(function(){
          var spark=document.createElement('div');spark.className='gold-spark';
          spark.style.cssText='position:fixed;width:5px;height:5px;background:#D4A520;border-radius:50%;pointer-events:none;z-index:9999;left:'+(Math.random()*100)+'vw;top:'+(Math.random()*100)+'vh;';
          document.body.appendChild(spark);
          setTimeout(function(){spark.remove()},1000);
        },delay);
      })(i*25)}
    }
    if(buffer.includes('blondie')){
      buffer='';
      console.log('%c🤠 TUCO: %c"Blondie! You know what you are? A genius building empires with AI agents. That\'s what we do."',
        'color:#D4A520;font-size:1.2em;','color:#DCC8A0;');
    }
  });
})();

// ── Console Branding ──
console.log('%c\n    ⠀⠀⠀⢀⣤⣶⣿⣿⣿⣿⣿⣿⣷⣶⣤⡀\n    ⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷\n    ⣿⣿⣿⣿⣿⣿⣿⡿⠋⠙⣿⣿⣿⣿⣿\n    ⢻⣿⣿⣿⣿⣿⣿⣷⣤⣤⣤⣤⣾⣿⡟\n        UGLY TUCO AI — Western 2.0\n','color:#D4A520;');
console.log('%c"There are two kinds of people in this world — those who build with AI, and those who get left behind."%c\n  — Tuco','color:#C4A06A;font-style:italic;','');
