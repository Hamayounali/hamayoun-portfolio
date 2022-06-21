function toggleButton(a) {
  a.classList.toggle('change');
}

toggleButton();

function myFunction() {
  const x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

myFunction();

function hideMenu() {
  const x = document.getElementById('myTopnav');
  x.className = 'topnav';
}

hideMenu();