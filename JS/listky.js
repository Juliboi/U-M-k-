const buttons = document.querySelectorAll('.listek-button');
const jidlo = document.querySelector('.j-button');

function open() {
  // console.dir(this.previousElementSibling)
  const row = this.previousElementSibling;
  if(this.classList.contains('j-button'))  {
    row.classList.toggle('open-menu2');
    row.classList.toggle('open');
  } else {
    row.classList.toggle('open-menu');
    row.classList.toggle('open');
  }

  if(row.classList.contains('open')) {
    this.textContent = 'Zavřít';
  } else {
    this.textContent = 'Otevřít';
  }
}

buttons.forEach(button => button.addEventListener('click', open));
