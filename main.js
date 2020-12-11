const showAccessibilityMenu = () => {
  const fontSelection = document.getElementById("font-selection");
  if (fontSelection.classList.contains("display-none")) {
    fontSelection.classList.remove("display-none");
  } else {
    fontSelection.classList.add("display-none");
  }
};

const changeFont = event => {
  console.log("You selected: ", event.target.value);
  const font = event.target.value;
  const contentNode = document.getElementsByClassName("content")[0];
  console.log(contentNode);
  contentNode.classList.remove(
    "font-SylexiadSans",
    "font-Lora",
    "font-AtkinsonHyperlegible",
    "font-OpenDyslexicThree",
    "font-Ubuntu"
  );
  contentNode.classList.add(`font-${font}`);
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
