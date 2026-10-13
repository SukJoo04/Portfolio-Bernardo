(function () {
  "use strict";

  var cfg = window.PORTFOLIO;
  if (!cfg) {
    console.error("js/config.js não foi carregado. Verifique o <script> no index.html.");
    if (window.Anim) window.Anim.revealAll();
    return;
  }

  function $(sel, root) { return (root || document).querySelector(sel); }

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }

  function safeUrl(u) {
    return typeof u === "string" && /^(https?:\/\/|mailto:)/i.test(u.trim()) ? u.trim() : "";
  }

  var SVG_NS = "http://www.w3.org/2000/svg";
  var ICONS = {
    user: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5",
    route: "M6 19a2 2 0 100-4 2 2 0 000 4zM18 9a2 2 0 100-4 2 2 0 000 4zM8 17h6a3 3 0 003-3V9M6 15V9a3 3 0 013-3h7",
    cpu: "M7 7h10v10H7zM9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4",
    layers: "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5",
    target: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 16a4 4 0 100-8 4 4 0 000 8zM12 12h.01",
    puzzle: "M10 4a2 2 0 114 0v2h4v4h-2a2 2 0 100 4h2v4h-4v-2a2 2 0 10-4 0v2H6v-4h2a2 2 0 100-4H6V6h4V4z",
    mail: "M3 6h18v12H3zM3 7l9 6 9-6",
    linkedin: "M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zM8 10v7M8 7v.01M12 17v-7M12 13a3 3 0 016 0v4",
    github: "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a11.9 11.9 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21",
    whatsapp: "M3 21l1.65-4.8A9 9 0 118 19.4L3 21zM9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-.8.6a3 3 0 01-1.4-1.4l.6-.8-1-2L9 9.5z",
    phone: "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
    instagram: "M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zM12 16a4 4 0 100-8 4 4 0 000 8zM17.5 6.5h.01",
    link: "M10 14a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 10a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"
  };

  function icon(name) {
    var s = document.createElementNS(SVG_NS, "svg");
    s.setAttribute("viewBox", "0 0 24 24");
    s.setAttribute("aria-hidden", "true");
    var p = document.createElementNS(SVG_NS, "path");
    p.setAttribute("d", ICONS[name] || ICONS.link);
    s.appendChild(p);
    return s;
  }

  document.title = cfg.name + " — " + cfg.title;
  var map = { name: cfg.name.toUpperCase(), title: cfg.title, tagline: cfg.tagline, desc: cfg.heroDescription };
  document.querySelectorAll("[data-hero]").forEach(function (n) {
    var v = map[n.getAttribute("data-hero")];
    if (v) n.textContent = v;
  });
  document.querySelectorAll("[data-footer-name]").forEach(function (n) { n.textContent = cfg.name; });
  $("#year").textContent = new Date().getFullYear();

  var img = $("#profile-img"), ph = $("#photo-placeholder");
  if (img && cfg.photo) {
    img.alt = cfg.photo.alt || "";
    img.addEventListener("load", function () { ph.hidden = true; img.style.display = ""; });
    img.addEventListener("error", function () {
      img.style.display = "none";
      ph.hidden = false;
      var small = ph.querySelector(".small");
      if (small) small.textContent = cfg.photo.src;
    });
    img.src = cfg.photo.src;
  }

  $("#about-intro").textContent = cfg.about.intro;
  var aboutGrid = $("#about-grid");
  cfg.about.blocks.forEach(function (b) {
    var ic = el("div", { class: "card__icon" }); ic.appendChild(icon(b.icon));
    aboutGrid.appendChild(el("article", { class: "card reveal" }, [
      ic, el("h3", { text: b.title }), el("p", { text: b.text })
    ]));
  });

  function timeline(listId, items, head, sub) {
    var ol = $(listId);
    (items || []).forEach(function (it) {
      var kids = [
        el("div", { class: "tl__head" }, [
          el("h4", { text: it[head] }),
          el("span", { class: "mono tl__period", text: it.period })
        ])
      ];
      if (it[sub]) kids.push(el("p", { class: "tl__sub", text: it[sub] }));
      if (it.note) kids.push(el("p", { class: "tl__note", text: it.note }));
      if (it.bullets && it.bullets.length) {
        var ul = el("ul", { class: "tl__list" });
        it.bullets.forEach(function (b) { ul.appendChild(el("li", { text: b })); });
        kids.push(ul);
      }
      ol.appendChild(el("li", { class: "tl__item" }, kids));
    });
  }
  timeline("#exp-list", cfg.experience, "role", null);
  timeline("#edu-list", cfg.education, "title", "school");

  var projectsGrid = $("#projects-grid");

  function safeProjectUrl(u) {
    if (typeof u !== "string") return "";
    u = u.trim();
    return safeUrl(u) || (/^[\w][\w./-]*$/.test(u) && u.indexOf("..") < 0 ? u : "");
  }

  function actionLink(url, label, ghost) {
    var u = safeProjectUrl(url);
    if (!u) return null;
    return el("a", { class: "btn btn--sm " + (ghost ? "btn--ghost" : "btn--primary"), href: u, target: "_blank", rel: "noopener noreferrer", text: label });
  }

  function techTags(list) {
    var ul = el("ul", { class: "tags", "aria-label": "Tecnologias" });
    (list || []).forEach(function (t) { ul.appendChild(el("li", { text: t })); });
    return ul;
  }

  var teamCfg = cfg.team || { projects: [], members: [] };
  var allProjects = cfg.projects.concat(teamCfg.projects || []);

  function renderProject(p, idx, grid) {
    var media = el("div", { class: "project__media" });
    var fallback = el("div", { class: "project__fallback", "aria-hidden": "true", text: "</>" });
    media.appendChild(fallback);
    if (p.image) {
      var im = el("img", { src: p.image, alt: "Prévia do projeto " + p.title, loading: "lazy", decoding: "async" });
      im.addEventListener("error", function () { im.remove(); });
      media.appendChild(im);
    }
    if (p.placeholder) media.appendChild(el("span", { class: "badge-ex", text: "EXEMPLO" }));

    var openBtn = el("button", { class: "project__open", type: "button", "aria-haspopup": "dialog" }, [
      el("h3", { text: p.title })
    ]);
    openBtn.addEventListener("click", function (e) { e.stopPropagation(); openModal(idx, openBtn); });

    var actions = el("div", { class: "card__actions" }, [
      actionLink(p.demoUrl, "Demonstração", false),
      actionLink(p.githubUrl, "GitHub", true)
    ]);
    if (!actions.children.length) {
      actions.appendChild(el("span", { class: "mono small muted", text: "Links ainda não disponíveis" }));
    }
    actions.addEventListener("click", function (e) { e.stopPropagation(); });

    var card = el("article", { class: "card project reveal" }, [
      media,
      el("div", { class: "project__body" }, [
        openBtn, el("p", { text: p.description }), techTags(p.technologies), actions
      ])
    ]);
    card.addEventListener("click", function () { openModal(idx, openBtn); });
    grid.appendChild(card);
  }

  cfg.projects.forEach(function (p, i) { renderProject(p, i, projectsGrid); });

  if (teamCfg.name) $("#equipe-title").textContent = "Projetos em equipe — " + teamCfg.name;
  $("#team-lead").textContent = teamCfg.description || "";
  var membersEl = $("#team-members");
  (teamCfg.members || []).forEach(function (m) {
    var initials = m.name.split(/\s+/).filter(Boolean).map(function (w) { return w[0]; }).slice(0, 2).join("").toUpperCase();
    var links = el("div", { class: "member__links" });
    if (safeUrl(m.linkedin)) links.appendChild(el("a", { href: m.linkedin, target: "_blank", rel: "noopener noreferrer", class: "mono", text: "LinkedIn" }));
    if (safeUrl(m.github)) links.appendChild(el("a", { href: m.github, target: "_blank", rel: "noopener noreferrer", class: "mono", text: "GitHub" }));
    membersEl.appendChild(el("li", { class: "member" }, [
      el("span", { class: "member__avatar mono", "aria-hidden": "true", text: initials }),
      el("div", {}, [
        el("strong", { text: m.name }),
        m.role ? el("small", { class: "mono", text: m.role }) : null,
        links.children.length ? links : null
      ])
    ]));
  });

  var teamGrid = $("#team-projects");
  (teamCfg.projects || []).forEach(function (p, i) { renderProject(p, cfg.projects.length + i, teamGrid); });
  if (!(teamCfg.projects || []).length) {
    teamGrid.className = "";
    teamGrid.appendChild(el("p", { class: "team-empty mono", text: "Os projetos da equipe aparecem aqui em breve." }));
  }

  var modal = $("#modal"), panel = $(".modal__panel", modal), lastFocus = null;

  function openModal(i, trigger) {
    var p = allProjects[i];
    lastFocus = trigger || document.activeElement;
    $("#modal-title").textContent = p.title + (p.placeholder ? " (exemplo)" : "");
    $("#modal-desc").textContent = p.description;
    $("#modal-details").textContent = p.details || "";
    var tags = $("#modal-tags"); tags.innerHTML = "";
    (p.technologies || []).forEach(function (t) { tags.appendChild(el("li", { text: t })); });
    var acts = $("#modal-actions"); acts.innerHTML = "";
    [actionLink(p.demoUrl, "Demonstração", false), actionLink(p.githubUrl, "GitHub", true)].forEach(function (a) { if (a) acts.appendChild(a); });
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    panel.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  modal.addEventListener("click", function (e) { if (e.target.hasAttribute("data-close")) closeModal(); });
  document.addEventListener("keydown", function (e) {
    if (modal.hidden) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "Tab") {
      var f = panel.querySelectorAll("a[href], button");
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  var skillsGrid = $("#skills-grid");
  cfg.skills.forEach(function (cat) {
    var chips = el("div", { class: "skill-chips" });
    cat.items.forEach(function (it) { chips.appendChild(el("span", { class: "chip", text: it })); });
    var card = el("article", { class: "card reveal" }, [el("h3", { text: cat.category, style: "margin-top:0" }), chips]);
    if (cat.placeholder) card.appendChild(el("span", { class: "badge-ex", text: "EXEMPLO" }));
    skillsGrid.appendChild(card);
  });

  var links = $("#contact-links");
  var c = cfg.contact;

  function contactItem(ic, label, value, href, actionLabel) {
    var d = el("div", { class: "card__icon" }); d.appendChild(icon(ic));
    var hint = el("span", { class: "hint", text: "Clique para mostrar" });
    var btn = el("button", { class: "reveal-btn", type: "button", "aria-expanded": "false", "aria-label": "Mostrar " + label }, [
      d, el("div", {}, [el("small", { text: label }), hint])
    ]);
    var open = el("a", {
      class: "open-link", href: href, hidden: "",
      target: /^(mailto|tel):/.test(href) ? "_self" : "_blank", rel: "noopener noreferrer", text: actionLabel || "Abrir"
    });
    btn.addEventListener("click", function () {
      var show = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(show));
      btn.setAttribute("aria-label", (show ? "Esconder " : "Mostrar ") + label);
      hint.textContent = show ? value : "Clique para mostrar";
      hint.className = show ? "v" : "hint";
      open.hidden = !show;
    });
    return el("li", { class: "contact-item" }, [btn, open]);
  }

  var any = false;
  if (c.email) { links.appendChild(contactItem("mail", "E-mail", c.email, "mailto:" + c.email, "Enviar e-mail")); any = true; }
  if (c.phone) {
    var digits = String(c.phoneLink || c.phone).replace(/\D/g, "");
    links.appendChild(contactItem("whatsapp", "WhatsApp", c.phone, "https://wa.me/" + digits, "Conversar")); any = true;
  }
  if (safeUrl(c.linkedin)) { links.appendChild(contactItem("linkedin", "LinkedIn", c.linkedin.replace(/^https?:\/\/(www\.)?/, ""), c.linkedin)); any = true; }
  if (safeUrl(c.instagram)) { links.appendChild(contactItem("instagram", "Instagram", c.instagram.replace(/^https?:\/\/(www\.)?/, ""), c.instagram)); any = true; }
  if (safeUrl(c.github)) { links.appendChild(contactItem("github", "GitHub", c.github.replace(/^https?:\/\//, ""), c.github)); any = true; }
  (c.others || []).forEach(function (o) {
    if (safeUrl(o.url)) { links.appendChild(contactItem("link", o.label, o.url.replace(/^https?:\/\//, ""), o.url)); any = true; }
  });
  if (!any) {
    links.appendChild(el("li", {}, [el("div", { class: "na mono small", text: "Canais de contato ainda não configurados. Edite contact em js/config.js." })]));
  }

  var r = cfg.resume;
  var resumeLinks = document.querySelectorAll(".js-resume-download");
  var resumeMsgs = document.querySelectorAll("[data-resume-msg]");
  var resumeMissing = false;

  resumeLinks.forEach(function (a) {
    a.setAttribute("href", r.path);
    a.setAttribute("download", r.downloadName);
    a.addEventListener("click", function (e) {
      if (resumeMissing) {
        e.preventDefault();
        resumeMsgs.forEach(function (m) {
          m.classList.remove("is-ok");
          m.textContent = "O arquivo PDF ainda não foi adicionado em " + r.path + ".";
        });
        return;
      }
      a.classList.add("is-downloading");
      setTimeout(function () { a.classList.remove("is-downloading"); }, 700);
    });
  });
  var lbl = $("[data-resume-label]"); if (lbl && r.label) lbl.textContent = r.label;

  if (/^https?:$/.test(location.protocol)) {
    fetch(r.path, { method: "HEAD" }).then(function (res) {
      if (!res.ok) resumeMissing = true;
    }).catch(function () { });
  }

  if (window.Anim) window.Anim.init();
})();
