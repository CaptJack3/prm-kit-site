"use strict";

const video = document.getElementById("project-video");
document.getElementById("watch-demo").addEventListener("click", () => {
  video.scrollIntoView({ block: "center", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  video.focus({ preventScroll: true });
  video.play().catch(() => { document.getElementById("video-error").hidden = false; });
});
video.addEventListener("error", () => { document.getElementById("video-error").hidden = false; });
video.querySelector("source").addEventListener("error", () => { document.getElementById("video-error").hidden = false; });

const dialog = document.getElementById("scene-dialog");
const dialogImage = document.getElementById("scene-dialog-image");
document.querySelectorAll("[data-lightbox]").forEach(link => {
  link.addEventListener("click", event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof dialog.showModal !== "function") return;
    event.preventDefault();
    dialogImage.src = link.getAttribute("href");
    dialogImage.alt = link.querySelector("img").alt;
    document.getElementById("scene-dialog-title").textContent = link.dataset.lightbox;
    dialog.showModal();
  });
});
document.getElementById("close-scene").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});

const copyButton = document.getElementById("copy-command");
const copyStatus = document.getElementById("copy-status");
copyButton.addEventListener("click", async () => {
  const code = document.getElementById("quickstart-command");
  try {
    if (!navigator.clipboard) throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(code.textContent);
    copyButton.textContent = "Copied";
    copyStatus.textContent = "Quickstart commands copied to the clipboard.";
    window.setTimeout(() => { copyButton.textContent = "Copy commands"; }, 2200);
  } catch {
    const range = document.createRange();
    range.selectNodeContents(code);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = "Commands selected. Use your browser's Copy command.";
    copyButton.textContent = "Text selected";
  }
});
