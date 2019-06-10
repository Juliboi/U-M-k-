function hashDelete() {
  // Remove the # from the hash, as different browsers may or may not include it
  let hash = location.hash.replace('#', '');

  if (hash != '') {
    // Clear the hash in the URL
    location.hash = 'yo';
  }
}

navLinks.forEach(link => link.addEventListener('click', hashDelete));
frontpageButton.addEventListener('click', hashDelete);
cards.forEach(card => card.addEventListener('click', hashDelete));
viz.addEventListener('click', hashDelete);

console.log(132);
