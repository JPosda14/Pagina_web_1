

let currentTheme = 0;
function changeStyle() {
  const body = document.body;
  const themes = ["theme-1", "theme-2", "theme-3", "theme-4", "theme-5", "theme-6"];
  

  body.classList.remove(themes[currentTheme]);


  currentTheme = (currentTheme + 1) % themes.length;


  body.classList.add(themes[currentTheme]);
}

let currentFont = 0;
const fonts = ["Arial, sans-serif", "Verdana, sans-serif", "Times New Roman, serif"];

function changeFont() {
  const h2Elements = document.querySelectorAll('h2');
  const h3Elements = document.querySelectorAll('h3');
  const pElements = document.querySelectorAll('p');

  // Cambiar la fuente de h2
  h2Elements.forEach(element => {
    element.style.fontFamily = fonts[currentFont];
  });

  // Cambiar la fuente de h3
  h3Elements.forEach(element => {
    element.style.fontFamily = fonts[currentFont];
  });

  // Cambiar la fuente de p
  pElements.forEach(element => {
    element.style.fontFamily = fonts[currentFont];
  });

  // Avanzar al siguiente estilo de fuente o volver al primero si es el último
  currentFont = (currentFont + 1) % fonts.length;
}

let currentStyle = 0;
const styles = [
  { // Estilo 1
    font: "Arial, sans-serif",
    color: "#333"
  },
  { // Estilo 2
    font: "Verdana, sans-serif",
    color: "#666"
  },
  { // Estilo 3
    font: "Times New Roman, serif",
    color: "#999"
  }
];

function changeTheme() {
  const body = document.body;
  const h2Elements = document.querySelectorAll('h2');
  const h3Elements = document.querySelectorAll('h3');
  const pElements = document.querySelectorAll('p');

  body.style.fontFamily = styles[currentStyle].font;
  body.style.color = styles[currentStyle].color;

  h2Elements.forEach(element => {
    element.style.fontFamily = styles[currentStyle].font;
    element.style.color = styles[currentStyle].color;
  });

  h3Elements.forEach(element => {
    element.style.fontFamily = styles[currentStyle].font;
    element.style.color = styles[currentStyle].color;
  });
  
  pElements.forEach(element => {
    element.style.fontFamily = styles[currentStyle].font;
    element.style.color = styles[currentStyle].color;
  });

  currentStyle = (currentStyle + 1) % styles.length;
}



  
