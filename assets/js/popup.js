const popup = document.getElementById('myPopup');
const span = document.getElementsByClassName('close')[0];

const DivContainer2 = document.getElementById('div-container');
const DivContainer3 = document.getElementById('div-container2');

function popupContent(id) {
  const newH1 = document.createElement('h1');
  newH1.insertAdjacentText('beforeend', projects[id].name);
  newH1.classList.add('work-sample-popup');
  DivContainer2.appendChild(newH1);

  const newLi = document.createElement('li');
  newLi.insertAdjacentText('beforeend', projects[id].html);
  newLi.classList.add('tag-popup');
  DivContainer2.appendChild(newLi);

  const newLi1 = document.createElement('li');
  newLi1.insertAdjacentText('beforeend', projects[id].bootStrap);
  newLi1.classList.add('tag-popup');
  DivContainer2.appendChild(newLi1);

  const newLi2 = document.createElement('li');
  newLi2.insertAdjacentText('beforeend', projects[id].ruby);
  newLi2.classList.add('tag-popup');
  DivContainer2.appendChild(newLi2);
  
  const img = document.createElement('img');
  img.src = projects[id].emage;
  img.classList.add('img-popup');
  const src = document.getElementById('div-container');
  src.appendChild(img);
}

function popupContent2(id) {
  const newP = document.createElement('p');
  newP.insertAdjacentText('beforeend', projects[0].description);
  newP.classList.add('work-sample-text-popup');
  DivContainer3.appendChild(newP);
  
  const img3 = document.createElement('img');
  img3.src = 'assets/images/Enable2.png';

  const img2 = document.createElement('img');
  img2.src = 'assets/images/source2.png';

  const b = document.createElement('a');
  b.appendChild(img3);
  b.href = "https://hamayounali.github.io/hamayoun-portfolio";
  b.classList.add('tag-popup-2');
  DivContainer3.appendChild(b);

  const a = document.createElement('a');
  a.appendChild(img2);
  a.href = "https://github.com/Hamayounali/hamayoun-portfolio";
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
