"use strict";

// The page, prices, phone links and directions work without JavaScript.
const strip = document.querySelector(".photo-strip");
const previous = document.querySelector("[data-gallery-prev]");
const next = document.querySelector("[data-gallery-next]");
const controls = document.querySelector(".gallery-controls");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (strip && previous && next && controls) {
  controls.hidden = false;
  const updateControls = () => {
    previous.disabled = strip.scrollLeft <= 2;
    next.disabled =
      strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 2;
  };
  const scrollPhotos = (direction) =>
    strip.scrollBy({
      left: direction * strip.clientWidth * 0.8,
      behavior: reducedMotion.matches ? "instant" : "smooth",
    });
  previous.addEventListener("click", () => scrollPhotos(-1));
  next.addEventListener("click", () => scrollPhotos(1));
  strip.addEventListener("scroll", updateControls, { passive: true });
  window.addEventListener("resize", updateControls);
  updateControls();
}

const dialog = document.querySelector(".photo-dialog");
if (dialog && typeof dialog.showModal === "function") {
  const photo = dialog.querySelector("img");
  const caption = document.querySelector("#photo-caption");
  let trigger;
  document.querySelectorAll(".gallery-photo").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;
      event.preventDefault();
      trigger = link;
      photo.src = link.href;
      photo.alt = link.querySelector("img").alt;
      caption.textContent = link.dataset.caption;
      dialog.showModal();
      document.body.classList.add("dialog-open");
    });
  });
  dialog
    .querySelector(".dialog-close")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (
      event.clientX < box.left ||
      event.clientX > box.right ||
      event.clientY < box.top ||
      event.clientY > box.bottom
    )
      dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    trigger?.focus();
  });
}
