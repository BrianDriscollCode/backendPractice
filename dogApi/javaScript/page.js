let doggiesSelect = document.getElementById("doggies");
let doggiesButton = document.getElementById('doggiesButton');
let item;

addDoggies();

doggiesButton.addEventListener('click', function(){
  getDogImage(doggiesSelect.value);
});

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => res.json())
  .then(data => console.log(data))

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
  console.log(breed);
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(res => res.json())
    .then(data => {
      chooseImage(data.message);
    })
}

//helper function
function generateOptions(data) {
  const options = data.map(item => `
    <option value='${item}'>${item}</option>
  `).join('');
  doggiesSelect.innerHTML = options;
}

function chooseImage(image) {
  let dogDiv = document.getElementById('dogImage');
  dogDiv.innerHTML = `<img src="${image}">`;
}
