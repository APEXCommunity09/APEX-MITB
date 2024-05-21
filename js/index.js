// Reveal Animation & Button Hover for Index Page **************************
window.addEventListener("load", () => {
  let banner = document.querySelector("div.banner");
  let startBtn = document.querySelector("a.btn_start");
  setTimeout(() => {
    banner.classList.add("loaded");
  }, 1000);

  startBtn.addEventListener("mouseenter", () => {
    startBtn.style.background = colors[(Math.random() * colors.length) | 0];
  });
});

// End ******************************

