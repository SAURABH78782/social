const darkBtn = document.getElementById('dark-btn');
const body = document.body;
const settingsmenu = document.querySelector(".settings-menu");

// Toggle the settings menu height
function settingsMenuToggle() {
    settingsmenu.classList.toggle("setting-menu-height");
}

// Dark mode toggle
darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    body.classList.toggle("dark-theme");

    // Update localStorage with the new theme
    if (localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
};

// Check the stored theme in localStorage on page load
if (localStorage.getItem("theme") === "light") {
    darkBtn.classList.remove("dark-btn-on");
    body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") === "dark") {
    darkBtn.classList.add("dark-btn-on");
    body.classList.add("dark-theme");
} else {
    localStorage.setItem("theme", "light"); // Default to light theme
}
