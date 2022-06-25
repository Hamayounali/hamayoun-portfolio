// Project section Data
const projects = [
  {
    name: 'Multy-Post Stories Website',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    image: 'link_to_image.jpg',
    html: 'HTML',
    bootStrap: 'BootStrap',
    ruby: 'Ruby',
    emage: 'assets/images/popup.png',
    link: 'link_to_live_version.com',
    source: 'link_to_live_version.com',
  },
  {
    name: 'Multy-Post Stories Website',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    image: 'link_to_image.jpg',
    html: 'HTML',
    bootStrap: 'BootStrap',
    ruby: 'Ruby',
    emage: 'assets/images/placeholder-2.png',
    link: 'link_to_live_version.com',
    source: 'link_to_live_version.com',
  },
  {
    name: 'Website Portfolio design wali',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    image: 'link_to_image.jpg',
    html: 'HTML',
    bootStrap: 'BootStrap',
    ruby: 'Ruby',
    emage: 'assets/images/first-col.png',
    link: 'link_to_live_version.com',
    source: 'link_to_live_version.com',
  },
  {
    name: 'Profesionl art Printing Data more Jan',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    image: 'link_to_image.jpg',
    html: 'HTML',
    bootStrap: 'BootStrap',
    ruby: 'Ruby',
    emage: 'assets/images/first-col.png',
    link: 'link_to_live_version.com',
    source: 'link_to_live_version.com',
  },
  {
    name: 'Website Portfolio design',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    image: 'link_to_image.jpg',
    html: 'HTML',
    bootStrap: 'BootStrap',
    ruby: 'Ruby',
    emage: 'assets/images/placeholder.png',
    link: 'link_to_live_version.com',
    source: 'link_to_live_version.com',
  },
  {
    name: 'Data Dashboard Health Care',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    image: 'link_to_image.jpg',
    html: 'HTML',
    bootStrap: 'BootStrap',
    ruby: 'Ruby',
    emage: 'assets/images/placeholder.png',
    link: 'link_to_live_version.com',
    source: 'link_to_live_version.com',
  },
  {
    name: 'Profesionl art Printing Data more',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    image: 'link_to_image.jpg',
    html: 'HTML',
    bootStrap: 'BootStrap',
    ruby: 'Ruby',
    emage: 'assets/images/placeholder.png',
    link: 'link_to_live_version.com',
    source: 'link_to_live_version.com',
  },
  {
    name: 'Profesionl art Printing Data more',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    image: 'link_to_image.jpg',
    html: 'HTML',
    bootStrap: 'BootStrap',
    ruby: 'Ruby',
    emage: 'assets/images/placeholder.png',
    link: 'link_to_live_version.com',
    source: 'link_to_live_version.com',
  },
  {
    name: 'Profesionl art Printing Data more',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    image: 'link_to_image.jpg',
    html: 'HTML',
    bootStrap: 'BootStrap',
    ruby: 'Ruby',
    emage: 'assets/images/placeholder.png',
    link: 'link_to_live_version.com',
    source: 'link_to_live_version.com',
  },
  {
    name: 'Profesionl art Printing Data more',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    image: 'link_to_image.jpg',
    html: 'HTML',
    bootStrap: 'BootStrap',
    ruby: 'Ruby',
    emage: 'assets/images/placeholder.png',
    link: 'link_to_live_version.com',
    source: 'link_to_live_version.com',
  },
  {
    name: 'Profesionl art Printing Data more',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    image: 'link_to_image.jpg',
    html: 'HTML',
    bootStrap: 'BootStrap',
    ruby: 'Ruby',
    emage:'assets/images/placeholder.png',
    link: 'link_to_live_version.com',
    source: 'link_to_live_version.com',
  },
  {
    name: 'Profesionl art Printing Data more',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
    image: 'link_to_image.jpg',
    html: 'HTML',
    bootStrap: 'BootStrap',
    ruby: 'Ruby',
    emage:'assets/images/placeholder.png',
    link: 'link_to_live_version.com',
    source: 'link_to_live_version.com',
  },
];

let DivContainer = 2;
DivContainer = 2 + 2;
DivContainer = 4;
console.log(DivContainer);
for (let i = 1; i < 12; i += 1) {
  window[`DivContainer${i}`] = document.getElementById(`cards-sample-${i}`);
}

function AddNew() {
  for (let j = 1; j < 12; j += 1) {
    const newH1 = document.createElement('h1');
    newH1.insertAdjacentText('beforeend', projects[j].name);
    newH1.classList.add('work-sample');
    window[`DivContainer${j}`].appendChild(newH1);

    const newP = document.createElement('p');
    newP.insertAdjacentText('beforeend', projects[j].description);
    newP.classList.add('work-sample-text');
    window[`DivContainer${j}`].appendChild(newP);

    const newLi = document.createElement('li');
    newLi.insertAdjacentText('beforeend', projects[j].html);
    newLi.classList.add('tag');
    window[`DivContainer${j}`].appendChild(newLi);

    const newLi2 = document.createElement('li');
    newLi2.insertAdjacentText('beforeend', projects[j].bootStrap);
    newLi2.classList.add('tag');
    window[`DivContainer${j}`].appendChild(newLi2);

    const newLi3 = document.createElement('li');
    newLi3.insertAdjacentText('beforeend', projects[j].ruby);
    newLi3.classList.add('tag');
    window[`DivContainer${j}`].appendChild(newLi3);
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

function menuFunction() {
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

menuFunction();

function hideMenu() {
  const z = document.getElementById('myTopnav');
  z.className = 'topnav';
}

hideMenu();
