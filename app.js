"use strict";

// No-JavaScript visitors receive native lazy-loaded images through <noscript>.
// Keep real photo URLs out of src/srcset until the image is near the viewport.
const deferredPhotos = document.querySelectorAll("img[data-src]");
const loadPhoto = (image) => {
  image.loading = "eager";
  if (image.dataset.srcset) image.srcset = image.dataset.srcset;
  image.src = image.dataset.src;
  delete image.dataset.srcset;
  delete image.dataset.src;
};
if ("IntersectionObserver" in window) {
  const photoObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadPhoto(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "150px 0px", threshold: 0 },
  );
  deferredPhotos.forEach((image) => photoObserver.observe(image));
} else {
  deferredPhotos.forEach(loadPhoto);
}

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
  let trigger;
  document.querySelectorAll(".gallery-photo").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
        return;
      event.preventDefault();
      trigger = link;
      photo.src = link.href;
      photo.alt = link.querySelector("img").alt;
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
