// -------------------------------------------------------
// Light / Dark mode toggle
// -------------------------------------------------------

const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("change", () => {
    // Toggle the dark-mode class on the body element
    document.body.classList.toggle("dark-mode");
});

// -------------------------------------------------------
// Font size range slider
// -------------------------------------------------------

const fontSizeRange  = document.getElementById("fontSizeRange");
const fontSizeValue  = document.getElementById("fontSizeValue");
const sampleText     = document.getElementById("sampleText");

fontSizeRange.addEventListener("input", () => {
    const size = fontSizeRange.value;

    // Update the live numeric display in the label
    fontSizeValue.textContent = size;

    // Apply the new font size to the sample paragraph
    sampleText.style.fontSize = `${size}px`;
});