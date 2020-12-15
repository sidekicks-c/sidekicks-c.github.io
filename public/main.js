// toggle "Accessibility Options" menu
const showAccessibilityMenu = () => {
  const fontSelection = document.getElementById("font-selection");
  if (fontSelection.classList.contains("display-none")) {
    fontSelection.classList.remove("display-none");
  } else {
    fontSelection.classList.add("display-none");
  }
};

// set font
const changeFont = event => {
  console.log("You selected: ", event.target.value);
  const font = event.target.value;
  const contentNode = document.getElementsByClassName("fontchange")[0];
  contentNode.classList.remove(
    "font-SylexiadSans",
    "font-Lora",
    "font-AtkinsonHyperlegible",
    "font-OpenDyslexicThree",
    "font-Ubuntu",
    "font-serif",
    "font-sans"
  );
  contentNode.classList.add(`font-${font}`);
  window.localStorage.setItem("font", font);
};

// get font from localStorage
window.onload = function() {
  const previousFont = localStorage.getItem("font");
  const contentNode = document.getElementsByClassName("fontchange")[0];
  contentNode.classList.remove(
    "font-SylexiadSans",
    "font-Lora",
    "font-AtkinsonHyperlegible",
    "font-OpenDyslexicThree",
    "font-Ubuntu",
    "font-serif",
    "font-sans"
  );
  contentNode.classList.add(`font-${previousFont}`);
  console.log("Previously selected font: ", previousFont);
  radiobtn = document.getElementById(`font-${previousFont}`);
  radiobtn.checked = true;
};

document
  .querySelector("#accessibility-options button")
  .addEventListener("click", showAccessibilityMenu);
document
  .getElementById("font-selection")
  .addEventListener("change", changeFont);

// no-js handling
for (let el of document.querySelectorAll(".no-js")) el.style.display = "none";
for (let el of document.querySelectorAll(".js")) el.style.display = "block";
