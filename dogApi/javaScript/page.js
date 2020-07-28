let doggiesSelect = document.getElementById("doggies");
let doggiesButton = document.getElementById('doggiesButton');
let item;

addDoggies();

doggiesButton.addEventListener('click', getDogImage(doggies.value));


//fetch functions
function addDoggies() {
  fetch('http://localhost:3000/dogs')
    .then(res => res.json())
    .then(data => {

      console.log(Object.keys(data.message))
      generateOptions(Object.keys(data.message));
    })
}

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      chooseImage(Object.keys(data));
    })
}

//helper function
function generateOptions(data) {
  const options = data.map(item => `
    <option value='${item}'>${item}</option>
  `).join('');
  doggiesSelect.innerHTML = options;
}

function chooseImage(images) {

}
