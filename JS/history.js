const button = document.querySelector('.history-btn');

function more() {
  const extraText = document.querySelector('.extra');

  extraText.classList.toggle('showMore')

  if(extraText.classList.contains('showMore')) {
    this.textContent = 'méně';
  } else {
    this.textContent = 'více';
  }
}

button.addEventListener('click', more);
