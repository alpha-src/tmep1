const isUserColorTheme = localStorage.getItem("color-theme");
const isOsColorTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

const getUserTheme = () =>
  isUserColorTheme ? isUserColorTheme : isOsColorTheme;

window.onload = function () {
  if (getUserTheme === "dark") {
    localStorage.setItem("data-theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    $checkbox.setAttribute("checked", true);
  } else {
    localStorage.setItem("data-theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  }
};

function themeToggle(e) {
  if (e.target.checked) {
    localStorage.setItem("data-theme", "light");
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    localStorage.setItem("data-theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  }
}
