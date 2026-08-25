const header = document.querySelector<HTMLElement>("[data-header]");
const progress = document.querySelector<HTMLElement>("[data-scroll-progress]");
const menuToggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const mobileMenu = document.querySelector<HTMLElement>("[data-mobile-menu]");
const mobileCta = document.querySelector<HTMLElement>("[data-mobile-cta]");

const updateScrollState = () => {
  const scrollTop = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  header?.classList.toggle("is-scrolled", scrollTop > 24);
  mobileCta?.classList.toggle("is-visible", scrollTop > Math.min(460, window.innerHeight * 0.55));

  if (progress) {
    const percentage = scrollable > 0 ? Math.min(1, scrollTop / scrollable) : 0;
    progress.style.transform = `scaleX(${percentage})`;
  }
};

const closeMenu = () => {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  mobileMenu.hidden = true;
  document.body.classList.remove("menu-open");
};

menuToggle?.addEventListener("click", () => {
  if (!mobileMenu) return;
  const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  menuToggle.setAttribute("aria-label", willOpen ? "Fechar menu" : "Abrir menu");
  mobileMenu.hidden = !willOpen;
  document.body.classList.toggle("menu-open", willOpen);
});

document.querySelectorAll<HTMLElement>("[data-menu-link]").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const faqList = document.querySelector<HTMLElement>("[data-faq-list]");
faqList?.classList.add("is-enhanced");

document.querySelectorAll<HTMLButtonElement>("[data-faq-button]").forEach((button) => {
  const panelId = button.getAttribute("aria-controls");
  const initialPanel = panelId ? document.getElementById(panelId) : null;
  initialPanel?.setAttribute("aria-hidden", "true");

  button.addEventListener("click", () => {
    const panelId = button.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;
    if (!panel) return;

    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    panel.setAttribute("aria-hidden", String(isOpen));
    panel.closest(".faq__item")?.classList.toggle("is-open", !isOpen);
  });
});

window.addEventListener("scroll", updateScrollState, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth >= 900) closeMenu();
  updateScrollState();
});

updateScrollState();
