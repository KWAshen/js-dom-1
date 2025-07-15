const lamp = document.getElementById('lamp');
const button = document.getElementById('button');


button.addEventListener('click', function(){
  if(lamp.src.includes('yellow_lamp.png')){
    lamp.src = '.img/white_lamp.png';
    button.innertext = 'accedi'
  }
  else{
    lamp.src = "/img/yellow_lamp.png"
    button.innerText = 'spegni'
  }  
});