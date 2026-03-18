const themeToggleButton = document.getElementById("theme-toggle");
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
