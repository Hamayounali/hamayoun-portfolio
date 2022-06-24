// Project section contents
const arr = [
  'Data Dashboard Health Care',
  'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  'HTML',
  'BootStrap',
  'Ruby',
  'See Live',
  'See Source',
];

const DivContainer = null;
for (let i = 1; i < 12; i +=1) {
  window[`DivContainer${i}`] = document.getElementById('cards-sample-'+i);
}

function AddNew(){
 
for (let j = 1 ; j < 12; j +=1) {
  const newH1 = document.createElement('h1');
  newH1.insertAdjacentText('beforeend', arr[0]);
  newH1.classList.add('work-sample');
  window[`DivContainer${j}`].appendChild(newH1);

  const newP = document.createElement('p');
  newP.insertAdjacentText('beforeend', arr[1]);
  newP.classList.add('work-sample-text');
  window[`DivContainer${j}`].appendChild(newP); 

  for (let i = 0; i < 3; i +=1) {
    const newLi = document.createElement('li');
    newLi.insertAdjacentText('beforeend', arr[i + 2]);
    newLi.classList.add('tag');
    window[`DivContainer${j}`].appendChild(newLi);
  }
}
}

document.addEventListener('DOMContentLoaded', () => {
  AddNew();
  });

// Mobile Menu Portions
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
