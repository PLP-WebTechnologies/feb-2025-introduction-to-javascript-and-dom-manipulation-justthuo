// Change heading text
function changeHeadingText() {
  const heading = document.querySelector('h1');
  heading.textContent = "Welcome to a dynamic page!";
}

// Modify paragraph styles
function changeStyles() {
  const paragraph = document.querySelector('p');
  paragraph.style.color = 'darkred';
  paragraph.style.backgroundColor = '#f0f0f0';
  paragraph.style.padding = '15px';
  paragraph.style.border = '2px solid #ccc';
}

// Add or remove a paragraph
function toggleExtraParagraph() {
  const container = document.querySelector('.container');
  const existingPara = document.getElementById('extraPara');

  if (existingPara) {
    existingPara.remove();
  } else {
    const newPara = document.createElement('p');
    newPara.id = 'extraPara';
    newPara.textContent = 'This is a new paragraph added with JavaScript.';
    newPara.style.color = 'green';
    container.appendChild(newPara);
  }
}
