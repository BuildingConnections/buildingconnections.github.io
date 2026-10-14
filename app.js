/* Fills the page from cohort.js. No build step, no dependencies. */
(function () {
  var $ = function (id) { return document.getElementById(id); };

  // If cohort.js has a typo, show a clear message instead of a blank page.
  if (!window.COHORT) {
    $("main").innerHTML = '<article class="sheet"><h1>Page content failed to load</h1>' +
      '<p>There is likely a typo in <code>cohort.js</code> (often a missing comma or quote). ' +
      'Open the browser console (F12) to see the line number.</p></article>';
    return;
  }
  var c = window.COHORT;

  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") e.textContent = attrs[k];
      else e.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (ch) { if (ch) e.appendChild(ch); });
    return e;
  }
  function paras(container, list) {
    (list || []).forEach(function (t) { container.appendChild(el("p", { text: t })); });
  }
  function setText(id, text) { var n = $(id); if (n) n.textContent = text || ""; }

  // Header text
  var fullTitle = (c.title || "Building Connections") + (c.subtitle ? ": " + c.subtitle : "");
  document.title = fullTitle;
  setText("title", fullTitle);
  setText("cohort-label", c.label);
  setText("tagline", c.tagline);
  paras($("intro"), [c.intro]);

  // Apply links
  if (c.applyUrl) {
    document.querySelectorAll(".js-apply").forEach(function (a) {
      a.href = c.applyUrl; a.target = "_blank"; a.rel = "noopener";
    });
  }

  // Deadline (sidebar + apply section)
  if (c.applicationDeadline) {
    setText("deadline", "Applications due " + c.applicationDeadline);
    setText("deadline-2", "Applications are due " + c.applicationDeadline + ".");
    $("deadline").hidden = false;
    $("deadline-2").hidden = false;
  }

  // Contact
  if (c.contact && c.contact.email) {
    var ct = $("contact");
    ct.appendChild(document.createTextNode("Questions? Contact " + (c.contact.name ? c.contact.name + " at " : "")));
    ct.appendChild(el("a", { href: "mailto:" + c.contact.email, text: c.contact.email }));
    ct.appendChild(document.createTextNode("."));
    ct.hidden = false;
  }

  // Key dates table
  var facts = $("facts");
  (c.keyFacts || []).forEach(function (f) {
    facts.appendChild(el("tr", {}, [el("th", { scope: "row", text: f.label }), el("td", { text: f.value })]));
  });

  // Program description
  paras($("about"), c.about && c.about.paragraphs);
  var lec = $("lectures");
  (c.lectures || []).forEach(function (l) {
    lec.appendChild(el("li", {}, [el("strong", { text: l.title + "." }), document.createTextNode(" " + l.text)]));
  });
  if (c.work) {
    setText("work-intro", c.work.intro);
    setText("work-research", c.work.research);
    setText("work-extension", c.work.extension);
  }

  // Projects
  var list = $("project-list");
  (c.projects || []).forEach(function (p, i) {
    var card = el("section", { class: "project" + (p.placeholder ? " placeholder" : ""), id: "project-" + (i + 1) });
    card.appendChild(el("h3", { text: p.title }));
    var bits = [];
    if (p.advisor) bits.push(el("span", { text: p.advisor }));
    if (p.institution) bits.push(el("span", { text: p.institution }));
    if (p.email) bits.push(el("a", { href: "mailto:" + p.email, text: p.email }));
    if (bits.length) {
      var meta = el("p", { class: "meta" });
      bits.forEach(function (b, k) { if (k) meta.appendChild(document.createTextNode(", ")); meta.appendChild(b); });
      card.appendChild(meta);
    }
    paras(card, p.paragraphs);
    list.appendChild(card);
  });
  if (!(c.projects || []).length) list.appendChild(el("p", { text: "Projects will be posted soon." }));
  setText("projects-heading", c.label ? "Research projects, " + c.label : "Research projects");

  // Mentorship / conference
  setText("mentorship-text", c.mentorship);
  setText("conference-text", c.conference);

  // Lead photo
  if (c.heroImage && c.heroImage.src) {
    $("hero-img").src = c.heroImage.src;
    $("hero-img").alt = c.heroImage.alt || "";
    setText("hero-caption", c.heroImage.caption);
    $("hero-photo").hidden = false;
  }

  // Partners: logos in sidebar (desktop) and footer (phones); names in footer
  var names = [];
  (c.partners || []).forEach(function (p) {
    ["logo-row", "logo-row-footer"].forEach(function (id) {
      var inner = p.logo ? el("img", { src: p.logo, alt: p.name, loading: "lazy" }) : el("span", { text: p.name });
      var link = p.url ? el("a", { href: p.url, rel: "noopener", target: "_blank" }, [inner]) : inner;
      $(id).appendChild(el("li", {}, [link]));
    });
    names.push(p.name);
  });
  setText("partners", names.join(", "));
  setText("funding", c.funding);
  setText("year", new Date().getFullYear());
})();
