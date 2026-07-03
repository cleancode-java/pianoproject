document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("themeToggle");
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const root = document.documentElement;
  const img = document.getElementById("heroImage");

  function setTheme(theme) {

    if (theme === "dark") {
      root.classList.add("dark");
      if (img) img.src = "image/main-photo2.jpg";
    } else {
      root.classList.remove("dark");
      if (img) img.src = "image/photo-light3.jpg";
    }

    localStorage.setItem("theme", theme);
  }

  // INIT (важливо: НЕ дублюємо HTML стан)
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    setTheme("light");
  } else {
    setTheme("dark");
  }

  // TOGGLE
  if (btn) {
    btn.addEventListener("click", () => {
      const newTheme = root.classList.contains("dark") ? "light" : "dark";
      setTheme(newTheme);
    });
  }

  // BURGER
if (burgerBtn && mobileMenu) {
  burgerBtn.addEventListener("click", () => {
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("flex");
    } else {
      mobileMenu.classList.remove("flex");
      mobileMenu.classList.add("hidden");
    }
  });
}

});
