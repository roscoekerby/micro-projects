window.onload = function() {
    var canvasElement = document.getElementById('canvas'), spanProcent = document.getElementById('procent'), canvasContext = canvasElement.getContext('2d');
   
    var posX = canvasElement.width / 2,
        posY = canvasElement.height / 2,
        fps = 1000 / 200,
        procent = 0,
        oneProcent = 360 / 100,
        // Default Value = 0%
        result = oneProcent * 0;
    
    canvasContext.lineCap = 'round';
    arcMove();
    
    function arcMove(){
      var deegres = 0;
      var acrInterval = setInterval (function() {
        deegres += 1;
        canvasContext.clearRect( 0, 0, canvasElement.width, canvasElement.height );
        procent = deegres / oneProcent;
  
        spanProcent.innerHTML = procent.toFixed();
  
        canvasContext.beginPath();
        canvasContext.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
        canvasContext.strokeStyle = '#b1b1b1';
        canvasContext.lineWidth = '10';
        canvasContext.stroke();
  
        canvasContext.beginPath();
        canvasContext.strokeStyle = '#3949AB';
        canvasContext.lineWidth = '10';
        canvasContext.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
        canvasContext.stroke();
        if( deegres >= result ) clearInterval(acrInterval);
      }, fps);
    }
  }

function updatePercentage(){
   let percent = window.prompt("Percentage");

   var canvasElement = document.getElementById('canvas'), spanProcent = document.getElementById('procent'), canvasContext = canvasElement.getContext('2d');

var posX = canvasElement.width / 2,
   posY = canvasElement.height / 2,
   fps = 1000 / 200,
   procent = 0,
   oneProcent = 360 / 100,
   result = oneProcent * percent;

canvasContext.lineCap = 'round';
arcMove();

function arcMove(){
 var deegres = 0;
 var acrInterval = setInterval (function() {
   deegres += 1;
   canvasContext.clearRect( 0, 0, canvasElement.width, canvasElement.height );
   procent = deegres / oneProcent;

   spanProcent.innerHTML = procent.toFixed();

   canvasContext.beginPath();
   canvasContext.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
   canvasContext.strokeStyle = '#b1b1b1';
   canvasContext.lineWidth = '10';
   canvasContext.stroke();

   canvasContext.beginPath();
   canvasContext.strokeStyle = '#3949AB';
   canvasContext.lineWidth = '10';
   canvasContext.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
   canvasContext.stroke();
   if( deegres >= result ) clearInterval(acrInterval);
 }, fps);
}
}
