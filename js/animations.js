(function () {
  "use strict";

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var observer = null;

  function revealAll() {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("is-visible"); });
  }

  function observe(root) {
    var cfg = window.PORTFOLIO || {};
    var enabled = !cfg.effects || cfg.effects.scrollReveal !== false;
    var els = (root || document).querySelectorAll(".reveal:not(.is-visible)");

    if (!enabled || reduced || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    if (!observer) {
      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            observer.unobserve(en.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    }
    els.forEach(function (el, i) {
      if (el.parentElement && el.parentElement.classList.contains("grid")) {
        el.style.setProperty("--d", (Array.prototype.indexOf.call(el.parentElement.children, el) % 3) * 0.08 + "s");
      }
      observer.observe(el);
    });
  }

  function typing(phrases) {
    var target = document.getElementById("typing-text");
    if (!target) return;
    if (!phrases || !phrases.length) { target.parentElement.hidden = true; return; }
    if (reduced) { target.textContent = phrases[0]; return; }

    var p = 0, c = 0, deleting = false;
    function tick() {
      var full = phrases[p];
      c += deleting ? -1 : 1;
      target.textContent = full.slice(0, c);
      var delay = deleting ? 28 : 55;
      if (!deleting && c === full.length) { deleting = true; delay = 1700; }
      else if (deleting && c === 0) { deleting = false; p = (p + 1) % phrases.length; delay = 350; }
      setTimeout(tick, delay);
    }
    tick();
  }

  function terminal() {
    var body = document.getElementById("terminal-body");
    if (!body) return;
    var lines = [
      "> Initializing portfolio...",
      "> Loading projects...",
      '> Developer status: <span class="on">ONLINE</span>'
    ];
    if (reduced) { body.innerHTML = lines.join("<br>"); return; }

    var started = false;
    function run() {
      if (started) return;
      started = true;
      var i = 0;
      (function next() {
        if (i >= lines.length) return;
        var div = document.createElement("div");
        div.innerHTML = lines[i++];
        body.appendChild(div);
        setTimeout(next, 750);
      })();
    }
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (en) {
        if (en[0].isIntersecting) { run(); io.disconnect(); }
      }, { threshold: 0.4 });
      io.observe(body);
    } else run();
  }

  function network() {
    var cfg = window.PORTFOLIO || {};
    var canvas = document.getElementById("net-canvas");
    if (!canvas) return;
    if (reduced || (cfg.effects && cfg.effects.networkCanvas === false)) { canvas.style.display = "none"; return; }

    var ctx = canvas.getContext("2d");
    var w, h, pts = [], raf = null, dpr = Math.min(window.devicePixelRatio || 1, 2);

    function size() {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.max(14, Math.min(46, Math.floor((w * h) / 42000)));
      pts = [];
      for (var i = 0; i < n; i++) {
        pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25 });
      }
    }

    function frame() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < pts.length; i++) {
        var a = pts[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        ctx.fillStyle = "rgba(95,227,240,.6)";
        ctx.beginPath(); ctx.arc(a.x, a.y, 1.4, 0, 6.283); ctx.fill();
        for (var j = i + 1; j < pts.length; j++) {
          var b = pts[j], dx = a.x - b.x, dy = a.y - b.y, d = dx * dx + dy * dy;
          if (d < 19000) {
            ctx.strokeStyle = "rgba(77,163,255," + (0.22 * (1 - d / 19000)).toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(frame);
    }

    size();
    frame();
    var t;
    window.addEventListener("resize", function () { clearTimeout(t); t = setTimeout(size, 200); });
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { cancelAnimationFrame(raf); raf = null; }
      else if (!raf) frame();
    });
  }

  window.Anim = {
    observe: observe,
    revealAll: revealAll,
    init: function () {
      var cfg = window.PORTFOLIO || {};
      var fx = cfg.effects || {};
      if (fx.gridBackground === false) {
        var g = document.querySelector(".bg-grid"); if (g) g.style.display = "none";
      }
      observe();
      if (fx.typing !== false) typing(cfg.typingPhrases);
      else { var t = document.querySelector(".hero__typing"); if (t) t.hidden = true; }
      terminal();
      network();
    }
  };
})();
