

// people/1/ or 
// vehicles/2/ or
// planets/3/ or 
// starships/9/

// put into URL like http swapi.co/api/planets/1/
// fetch that URL (send stringify? request to server)
// json() the response

// display json(response) in a card I designed

// const choice = document.getElementByID('choice');

// fetch(`http://swapi.co/api/{type}/{num}/`)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(() => console.log('error'))

// cache variables
// const choice = document.getElementsByName('choices');
const num = document.getElementById('myNumber');
const button = document.getElementById('submit');
const result = document.getElementsByClassName('result-name');

// add button listener for click to initiate grab radio and number values
// get radio input value 
// get number input value 
// put both values into the fetch URL: `http swapi.co/api/${radio}/${number}/`

radio = function radioValue() { 
  let ele = document.getElementsByName('choices');     
  for (i = 0; i < ele.length; i++) { 
    if (ele[i].checked) {
      return ele[i].value; 
    }      
  } 
}   

number = function numberValue() {
  return num.value;
}

async function returnPicks() {
  c = [];
  a = radio();
  b = number();
  c.push(a, b);  
  
  var response = await fetch(`https://swapi.co/api/${c[0]}/${c[1]}/`)
  var data = await response.json();
  console.log(data);

  // grab result div, input results from fetch
  result.innerHTML = data[name];



}





button.addEventListener('click', returnPicks);