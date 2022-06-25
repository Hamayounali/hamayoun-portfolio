const popup = document.getElementById('myPopup');
const span = document.getElementsByClassName('close')[0];

const DivContainer2 = document.getElementById('div-container');
const DivContainer3 = document.getElementById('div-container2');

const projects2 = [
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
];

function popupContent(id) {
  const newH1 = document.createElement('h1');
  newH1.insertAdjacentText('beforeend', projects2[id].name);
  newH1.classList.add('work-sample-popup');
  DivContainer2.appendChild(newH1);

  const newLi = document.createElement('li');
  newLi.insertAdjacentText('beforeend', projects2[id].html);
  newLi.classList.add('tag-popup');
  DivContainer2.appendChild(newLi);

  const newLi1 = document.createElement('li');
  newLi1.insertAdjacentText('beforeend', projects2[id].bootStrap);
  newLi1.classList.add('tag-popup');
  DivContainer2.appendChild(newLi1);

  const newLi2 = document.createElement('li');
  newLi2.insertAdjacentText('beforeend', projects2[id].ruby);
  newLi2.classList.add('tag-popup');
  DivContainer2.appendChild(newLi2);

  const img = document.createElement('img');
  img.src = projects2[id].emage;
  img.classList.add('img-popup');
  const src = document.getElementById('div-container');
  src.appendChild(img);
}

function popupContent2() {
  const newP = document.createElement('p');
  newP.insertAdjacentText('beforeend', projects2[0].description);
  newP.classList.add('work-sample-text-popup');
  DivContainer3.appendChild(newP);

  const img3 = document.createElement('img');
  img3.src = 'assets/images/Enable2.png';

  const img2 = document.createElement('img');
  img2.src = 'assets/images/source2.png';

  const b = document.createElement('a');
  b.appendChild(img3);
  b.href = 'https://hamayounali.github.io/hamayoun-portfolio';
  b.classList.add('tag-popup-2');
  DivContainer3.appendChild(b);

  const a = document.createElement('a');
  a.appendChild(img2);
  a.href = 'https://github.com/Hamayounali/hamayoun-portfolio';
  a.classList.add('tag-popup-2');
  DivContainer3.appendChild(a);
}

function myFunction(id) {
  popup.style.display = 'block';
  popupContent(id);
  popupContent2(id);
}

const a = 0;
if (a > 5) {
  myFunction();
}

span.onclick = () => {
  popup.style.display = 'none';
  window.location.reload();
};
