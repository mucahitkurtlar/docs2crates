const path = window.location.pathname;
const cratesIoUrlPrefix = "https://crates.io/crates/";

if (path !== "/" && !path.startsWith("/index.html")) {
  const pathParts = path.split("/");
  if (pathParts.length > 1) {
    const crateName = pathParts[1];
    const crateUrl = `${cratesIoUrlPrefix}${crateName}`;

    const menu = document.querySelector(".pure-menu-list");
    if (menu) {
      const crateMenuItem = document.createElement("li");
      crateMenuItem.classList.add("pure-menu-item");
      crateMenuItem.innerHTML = `<a href="${crateUrl}" class="pure-menu-link" target="_blank">crates.io page</a>`;

      menu.appendChild(crateMenuItem);
    }
  }
}
