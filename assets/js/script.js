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
  const y = document.getElementById('brand');
  if (y.className === 'hide-2') {
    y.className = 'hide';
  } else {
    y.className = 'hide-2';
  }
}

myFunction();

function hideMenu() {
  const z = document.getElementById('myTopnav');
  z.className = 'topnav';
}

hideMenu();
