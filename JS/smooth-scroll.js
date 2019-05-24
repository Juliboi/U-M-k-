const navLinks = document.querySelectorAll('.nav-link'); //navbar links
const frontpageButton = document.querySelector('.frontpage-button'); //O nas buttons
const cards = document.querySelectorAll('.card') //hostinec + tanecni sal cards

function smoothScroll(target, duration) {
  let section = document.querySelector(target); //section => where?
  let targetPosition = section.getBoundingClientRect().top; //where the element currently is
  let startPosition = window.pageYOffset; //where is the sections origin
  let distance = targetPosition - startPosition; //their distance between each other
  let startTime = null;

  function animation(currentTime) {
    if(startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime; //time passed
    let run = ease(timeElapsed, startPosition, targetPosition, duration); //passing in the parameters
    window.scrollTo(0, run); //horizontal + vertical scrolling
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {  //Ease in
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
  };

  requestAnimationFrame(animation);
}

function specificate(e) {
  smoothScroll(e.currentTarget.hash, 1000);
  console.dir(e.target.hash);
}


navLinks.forEach(link => link.addEventListener('click', specificate));
frontpageButton.addEventListener('click', specificate)
cards.forEach(card => card.addEventListener('click', specificate));

// const front = document.querySelector('#frontpage')
//
// console.dir(front.getBoundingClientRect())
