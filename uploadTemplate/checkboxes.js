function getSelectedCheckboxValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    alert(document.querySelectorAll('input[type="checkbox"]:checked').length);
    alert(document.querySelectorAll('input[type="checkbox"]').length);
    return values;
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
    alert(getSelectedCheckboxValues('video'));
});

window.onload = function() {
    var can = document.getElementById('canvas'),
        spanProcent = document.getElementById('procent'),
         c = can.getContext('2d');
   
    var posX = can.width / 2,
        posY = can.height / 2,
        fps = 1000 / 200,
        procent = 0,
        oneProcent = 360 / 100,
        // Default Value = 0%
        result = oneProcent * 0;
    
    c.lineCap = 'round';
    arcMove();
    
    function arcMove(){
      var deegres = 0;
      var acrInterval = setInterval (function() {
        deegres += 1;
        c.clearRect( 0, 0, can.width, can.height );
        procent = deegres / oneProcent;
  
        spanProcent.innerHTML = procent.toFixed();
  
        c.beginPath();
        c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
        c.strokeStyle = '#b1b1b1';
        c.lineWidth = '10';
        c.stroke();
  
        c.beginPath();
        c.strokeStyle = '#3949AB';
        c.lineWidth = '10';
        c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
        c.stroke();
        if( deegres >= result ) clearInterval(acrInterval);
      }, fps);
      
    }
    
    
  }

function updatePercentage(){
//    let percent = window.prompt("Percentage");
let percent = document.querySelectorAll('input[type="checkbox"]:checked').length/document.querySelectorAll('input[type="checkbox"]').length*100;

   var can = document.getElementById('canvas'),
   spanProcent = document.getElementById('procent'),
    c = can.getContext('2d');

var posX = can.width / 2,
   posY = can.height / 2,
   fps = 1000 / 200,
   procent = 0,
   oneProcent = 360 / 100,
   result = oneProcent * percent;

c.lineCap = 'round';
arcMove();

function arcMove(){
 var deegres = 0;
 var acrInterval = setInterval (function() {
   deegres += 1;
   c.clearRect( 0, 0, can.width, can.height );
   procent = deegres / oneProcent;

   spanProcent.innerHTML = procent.toFixed();

   c.beginPath();
   c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
   c.strokeStyle = '#b1b1b1';
   c.lineWidth = '10';
   c.stroke();

   c.beginPath();
   c.strokeStyle = '#3949AB';
   c.lineWidth = '10';
   c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
   c.stroke();
   if( deegres >= result ) clearInterval(acrInterval);
 }, fps);
 
}


}
