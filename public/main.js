const showAccessibilityMenu = () => {
  const fontSelection = document.getElementById('font-selection')
  if (fontSelection.classList.contains('display-none')) {
    fontSelection.classList.remove('display-none');
  } else {
    fontSelection.classList.add('display-none');
  }
}

const changeFont = (event) => {
  console.log('You selected: ', event.target.value);
  const font = event.target.value;
  const bodyNode = document.getElementsByTagName('body')[0]
  bodyNode.classList.remove(
    'font-SylexiadSans',
    'font-Lora',
    'font-AtkinsonHyperlegible',
    'font-OpenDyslexicThree',
    'font-Ubuntu',
  );
  bodyNode.classList.add(`font-${font}`);
}

document.querySelector('#accessibility-options button')
  .addEventListener('click',showAccessibilityMenu);
document.getElementById('font-selection').addEventListener('change', changeFont);
