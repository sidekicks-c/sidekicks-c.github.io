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

document.getElementById('font-selection').addEventListener('change', changeFont);