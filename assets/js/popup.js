let popup = document.getElementById('myPopup');
let span = document.getElementsByClassName('close')[0];

const arr2 = [
  'Data Dashboard Health Care',
  'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard',
  'HTML',
  'BootStrap',
  'Ruby',
  'See Live',
  'See Source',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum is simply dummy text of the printing and typesetting industry.',
];

const DivContainer2 = document.getElementById('div-container');
const DivContainer3 = document.getElementById('div-container2');

function myFunction(elem) {
popup.style.display = 'block';
popupContent();
popupContent2();
}

myFunction(elem);

function popupContent() {
  const newH1 = document.createElement('h1');
  newH1.insertAdjacentText('beforeend', arr2[0]);
  newH1.classList.add('work-sample-popup');
  DivContainer2.appendChild(newH1);
  
  for(let i = 0; i < 3; i += 1){
    const newLi = document.createElement('li');
    newLi.insertAdjacentText('beforeend', arr2[i +2]);
    newLi.classList.add('tag-popup');
    DivContainer2.appendChild(newLi);
  }

  const img = document.createElement('img'); 
  img.src = 'assets/images/popup.png'; 
  img.classList.add('img-popup');
  const src = document.getElementById('div-container'); 
    
  src.appendChild(img); 

}

function popupContent2() {
  const newP = document.createElement('p');
  newP.insertAdjacentText('beforeend', arr2[7]);
  newP.classList.add('work-sample-text-popup');
  DivContainer3.appendChild(newP); 
  const img3 = document.createElement('img'); 
  img3.src = 'assets/images/Enable2.png'; 
  img3.classList.add('tag-popup-2');
  DivContainer3.appendChild(img3);
  const img2 = document.createElement('img');
  img2.src = 'assets/images/source2.png'; 
  img2.classList.add('tag-popup-2');
  DivContainer3.appendChild(img2);
}

span.onclick = () => {
  popup.style.display = 'none';
  window.location.reload();
}

window.onclick = (event) => {
  if (event.target === modal) {
    popup.style.display = 'none';
  }
}
