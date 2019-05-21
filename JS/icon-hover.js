const icons = document.querySelectorAll('.icon')


function hover() {
  // console.log(this.dataset.hover);
  this.setAttribute('src', this.dataset.hover);
};

function leave() {
  this.setAttribute('src', this.dataset.leave);
}


icons.forEach(icon => {
  icon.addEventListener('mouseenter', hover);
});

icons.forEach(icon => {
  icon.addEventListener('mouseleave', leave);
});
