const themeToggleButton = document.getElementById("theme-toggle");
const topicNav = document.querySelector(".topic-nav");
const sectionNav = document.getElementById("section-nav");
const sectionNavList = document.getElementById("section-nav-list");
const currentPage = document.body.dataset.page;

if (themeToggleButton) {
  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

document.querySelectorAll(".topic-nav a").forEach((link) => {
  const pageName = link.getAttribute("href")?.replace(".html", "");

  if (pageName === currentPage || (currentPage === "home" && pageName === "index")) {
    link.classList.add("active");
  }
});

if (sectionNav && sectionNavList) {
  const mainHeadings = document.querySelectorAll(".page-content h2");

  if (mainHeadings.length === 0) {
    sectionNav.hidden = true;
  } else {
    mainHeadings.forEach((heading) => {
      const slug = heading.textContent
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      heading.id = slug;

      const listItem = document.createElement("li");
      const link = document.createElement("a");

      link.href = `#${slug}`;
      link.textContent = heading.textContent;

      listItem.appendChild(link);
      sectionNavList.appendChild(listItem);
    });
  }
}

function createNavToggle(label, className, controlsId) {
  const button = document.createElement("button");
  const icon = document.createElement("span");
  const text = document.createElement("span");

  button.type = "button";
  button.className = `nav-toggle ${className}`;
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", controlsId);
  button.setAttribute("aria-label", label);

  icon.className = "nav-toggle-bar";
  icon.setAttribute("aria-hidden", "true");

  for (let index = 0; index < 3; index += 1) {
    icon.appendChild(document.createElement("span"));
  }

  text.className = "nav-toggle-label";
  text.textContent = label;

  button.append(icon, text);
  document.body.appendChild(button);

  return button;
}

if (topicNav || sectionNav) {
  if (topicNav && !topicNav.id) {
    topicNav.id = "topic-nav";
  }

  if (sectionNav && !sectionNav.id) {
    sectionNav.id = "section-nav";
  }

  const overlay = document.createElement("div");
  overlay.className = "nav-overlay";
  overlay.hidden = true;
  document.body.appendChild(overlay);

  const topicToggle = topicNav ? createNavToggle("Topics", "nav-toggle-left", topicNav.id) : null;
  const sectionToggle =
    sectionNav && !sectionNav.hidden
      ? createNavToggle("On This Page", "nav-toggle-right", sectionNav.id)
      : null;

  let activeNav = null;
  let activeToggle = null;

  function closeActiveNav() {
    if (!activeNav || !activeToggle) {
      return;
    }

    activeNav.classList.remove("is-open");
    activeToggle.setAttribute("aria-expanded", "false");
    overlay.classList.remove("is-visible");
    overlay.hidden = true;
    document.body.classList.remove("nav-open");
    activeNav = null;
    activeToggle = null;
  }

  function openNav(navElement, toggleButton) {
    if (!navElement || !toggleButton) {
      return;
    }

    if (activeNav === navElement) {
      closeActiveNav();
      return;
    }

    closeActiveNav();
    navElement.classList.add("is-open");
    toggleButton.setAttribute("aria-expanded", "true");
    overlay.hidden = false;
    overlay.classList.add("is-visible");
    document.body.classList.add("nav-open");
    activeNav = navElement;
    activeToggle = toggleButton;
  }

  topicToggle?.addEventListener("click", () => openNav(topicNav, topicToggle));
  sectionToggle?.addEventListener("click", () => openNav(sectionNav, sectionToggle));

  overlay.addEventListener("click", closeActiveNav);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeActiveNav();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1100) {
      closeActiveNav();
    }
  });

  [topicNav, sectionNav].forEach((navElement) => {
    navElement?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 1100) {
          closeActiveNav();
        }
      });
    });
  });
}
