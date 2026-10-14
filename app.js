/* Renders the page from cohort.js. No build step, no dependencies. */
(function () {
  var $ = function (id) { return document.getElementById(id); };

  // If cohort.js has a typo, show a clear message instead of a blank page.
  if (!window.COHORT) {
    var m = document.getElementById("main");
    m.innerHTML = '<section class="section"><div class="wrap narrow"><h2>Page content failed to load</h2>' +
      '<p>There is likely a typo in <code>cohort.js</code> (often a missing comma or quote). ' +
      'Open the browser console (F12) to see the line number.</p></div></section>';
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

  document.title = (c.title || "Building Connections") + ": " + (c.subtitle || "");
  $("cohort-label").textContent = c.label || "";
  $("title").textContent = c.title || "";
  $("subtitle").textContent = c.subtitle || "";
  $("intro").textContent = (c.tagline ? c.tagline + ". " : "") + (c.intro || "");

  // Apply links
  if (c.applyUrl) {
    document.querySelectorAll(".js-apply").forEach(function (a) {
      a.href = c.applyUrl; a.target = "_blank"; a.rel = "noopener";
    });
  }

  // Contact
  if (c.contact && c.contact.email) {
    var ct = $("contact");
    ct.appendChild(document.createTextNode("Questions? Contact " + (c.contact.name ? c.contact.name + " at " : "")));
    ct.appendChild(el("a", { href: "mailto:" + c.contact.email, text: c.contact.email }));
    ct.appendChild(document.createTextNode("."));
    ct.hidden = false;
  }

  // Deadline
  if (c.applicationDeadline) {
    ["deadline", "deadline-2"].forEach(function (id) {
      var d = $(id);
      d.textContent = "Applications are due " + c.applicationDeadline + ".";
      d.hidden = false;
    });
  }

  // Key facts
  var facts = $("facts");
  (c.keyFacts || []).forEach(function (f) {
    facts.appendChild(el("div", {}, [el("dt", { text: f.label }), el("dd", { text: f.value })]));
  });

  // About
  paras($("about"), c.about && c.about.paragraphs);
  var lec = $("lectures");
  (c.lectures || []).forEach(function (l) {
    lec.appendChild(el("li", {}, [el("strong", { text: l.title }), el("span", { text: l.text })]));
  });

  // Work
  if (c.work) {
    $("work-intro").textContent = c.work.intro || "";
    $("work-research").textContent = c.work.research || "";
    $("work-extension").textContent = c.work.extension || "";
    $("work-note").textContent = c.work.note || "";
  }

  // Projects
  var list = $("project-list");
  (c.projects || []).forEach(function (p, i) {
    var meta = el("p", { class: "meta" });
    var parts = [];
    if (p.advisor) parts.push(el("span", { text: p.advisor }));
    if (p.institution) parts.push(el("span", { text: p.institution }));
    if (p.email) parts.push(el("a", { href: "mailto:" + p.email, text: p.email }));
    parts.forEach(function (part, k) {
      if (k) meta.appendChild(document.createTextNode(" · "));
      meta.appendChild(part);
    });
    var card = el("article", { class: "project" + (p.placeholder ? " placeholder" : ""), id: "project-" + (i + 1) }, [
      el("p", { class: "num", text: "Project " + (i + 1) }),
      el("h3", { text: p.title }),
      meta
    ]);
    var body = el("div", { class: "prose" });
    paras(body, p.paragraphs);
    card.appendChild(body);
    if (p.targetStudents) {
      card.appendChild(el("p", { class: "target" }, [
        el("strong", { text: "Target students: " }),
        document.createTextNode(p.targetStudents)
      ]));
    }
    list.appendChild(card);
  });
  var n = (c.projects || []).length;
  $("projects-heading").textContent = (c.label ? c.label + " research projects" : "Research projects");
  if (n === 0) list.appendChild(el("p", { class: "muted", text: "Projects will be posted soon." }));

  // Mentorship / conference
  $("mentorship-text").textContent = c.mentorship || "";
  $("conference-text").textContent = c.conference || "";

  // Footer
  var pl = $("partners");
  (c.partners || []).forEach(function (p) {
    var inner = p.logo
      ? el("img", { src: p.logo, alt: p.name, loading: "lazy" })
      : document.createTextNode(p.name);
    var item = p.url ? el("a", { href: p.url, rel: "noopener" }, [inner]) : el("span", {}, [inner]);
    if (p.url) item.target = "_blank";
    pl.appendChild(el("li", {}, [item]));
  });
  $("funding").textContent = c.funding || "";
  $("year").textContent = new Date().getFullYear();
})();
