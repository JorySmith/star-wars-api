// take radio input value 
// take number input value 

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

// const choice = document.getElementsByName('choices');
const num = document.getElementById('myNumber');
const button = document.getElementById('submit');


function radioValue() { 
  var ele = document.getElementsByName('choices');     
  for(i = 0; i < ele.length; i++) { 
    if(ele[i].checked) {
      return ele[i].value; 
    }      
  } 
}   

function returnPicks() {
  radioSelection = radioValue()
  numSelection = num.value;
  return [radioSelection, numSelection];  
  
}



button.addEventListener('click', returnPicks);