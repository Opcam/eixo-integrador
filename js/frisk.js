/*Mexer textos no Nintendo Switch da Introdução*/
window.onload = function(){
    setInterval(function(){
      document.getElementsByClassName("game-text-3")[0].style.top = "51%";
    }, 700);
  
    setInterval(function(){
      document.getElementsByClassName("game-text-3")[0].style.top = "50%";
    }, 1400);
  }
  
/*Trocar imagem da frisk por gif */
function changeFriskFunction() {
  document.getElementsByTagName("img")[4].src = "img/frisk-gif.gif";
}
function changeFriskFunction2() {
  document.getElementsByTagName("img")[4].src = "img/frisk-image.png";
}

  
window.onload = function(){
  setInterval(changeFriskFunction, 10000);
  setInterval(changeFriskFunction2, 15000);
}