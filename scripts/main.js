/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/puertoDelSol.jpg') {
      myImage.setAttribute ('src','images/granVia.jpg');
    } else {
      myImage.setAttribute ('src','images/puertoDelSol.jpg');
    }
}