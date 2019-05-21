const button = document.querySelector('.history-btn');

function more() {
  const extraText = document.querySelector('.extra');

  extraText.classList.toggle('showMore')
}

button.addEventListener('click', more);
