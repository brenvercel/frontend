// -------------------------------------------------------
// Light / Dark mode toggle
// -------------------------------------------------------

const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("change", () => {
    // Toggle the dark-mode class on the body element
    document.body.classList.toggle("dark-mode");
});