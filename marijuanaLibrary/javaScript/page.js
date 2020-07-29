let main = document.getElementById('main');
let allStrains;

fetch('http://strainapi.evanbusse.com/MPlsljn/strains/search/all')
  .then(res => res.json())
  .then(data => {
    let strains;
    console.log(data);
    strains = Object.keys(data);
    allStrains = data;
    console.log(allStrains);
    createStrainList(strains);

  })


function createStrainList(strains) {
  let firstStrains = strains.slice(0, 20);
  let secondStrains = strains.slice(500, 520);
  let thirdStrains = strains.slice(1000, 1020);

  let combineAllStrains = [...firstStrains, ...secondStrains, ...thirdStrains];

  console.log(combineAllStrains);



  let selectStrain = document.createElement('SELECT');
  selectStrain.setAttribute('id', 'selectedStrain');

  for(let i = 0; i <= combineAllStrains.length; i++) {
    let optionElement = document.createElement('OPTION');
    optionElement.value = combineAllStrains[i];
    optionElement.innerHTML = combineAllStrains[i];

    selectStrain.appendChild(optionElement);
    }

    main.appendChild(selectStrain);
  };


const button = document.getElementById('button');

button.addEventListener('click', function() {

  let currentStrain = document.getElementById('selectedStrain').value
  console.log(currentStrain);
  let strainId = allStrains[currentStrain].id;
  console.log(strainId);

  fetch(`http://strainapi.evanbusse.com/MPlsljn/strains/data/desc/${strainId}`)
    .then(res => res.json())
    .then(data => {

      document.getElementById('description').innerHTML = data.desc;

    })

})
