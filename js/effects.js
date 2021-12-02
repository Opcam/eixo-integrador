function changeColorDiv1(){
  document.getElementsByClassName("searchs")[0].style.transform = "scale(1.1)";
}
function revertColorChangeDiv1(){
  document.getElementsByClassName("searchs")[0].style.transform = "scale(1)";
}

function changeColorDiv2(){
  document.getElementsByClassName("searchs")[1].style.transform = "scale(1.1)";
}
function revertColorChangeDiv2(){
  document.getElementsByClassName("searchs")[1].style.transform = "scale(1)";
}

function changeColorDiv3(){
  document.getElementsByClassName("searchs")[2].style.transform = "scale(1.1)";
}
function revertColorChangeDiv3(){
  document.getElementsByClassName("searchs")[2].style.transform = "scale(1)";
}

function changeColorDiv4(){
  document.getElementsByClassName("searchs")[3].style.transform = "scale(1.1)";
}
function revertColorChangeDiv4(){
  document.getElementsByClassName("searchs")[3].style.transform = "scale(1)";
}

/*Mostrar as informações*/
function showInfos(){
  document.getElementsByClassName("infos-content")[0].style.right = "50%";
  document.getElementsByClassName("infos-content")[0].style.transform = "translateX(50%)";
  document.getElementsByClassName("infos-content")[0].style.top = "0%";

  /*Tirar o switch*/
  document.getElementsByClassName("container")[0].style.display = "none";

  /**/
  document.getElementsByClassName("texts-1")[0].style.animation = "typing 1.5s steps(270, end)";
}

/*Mostrar balões de fala */
function showSpeechArea2(){
  document.getElementsByClassName("texts-1")[0].style.display = "none";
  document.getElementsByClassName("texts")[0].style.display = "block";
}
function showSpeechArea(n1, n2){
  document.getElementsByClassName("texts")[n1].style.display = "none";
  document.getElementsByClassName("texts")[n2].style.display = "block";


  if(n1 == 5 && n2 == 6){
    document.getElementsByClassName("progress")[0].style.backgroundImage = "linear-gradient(to right, #ffffff 25%, #2d2d2d 25%)";

    document.getElementsByClassName("progress-percent")[0].innerHTML = "25%";
  }
  if(n1 == 6 && n2 == 7){
    document.getElementsByClassName("progress")[0].style.backgroundImage = "linear-gradient(to right, #ffffff 50%, #2d2d2d 50%)";

    document.getElementsByClassName("progress-percent")[0].innerHTML = "50%";
  }
  if(n1 == 8 && n2 == 9){
    document.getElementsByClassName("progress")[0].style.backgroundImage = "linear-gradient(to right, #ffffff 75%, #2d2d2d 75%)";

    document.getElementsByClassName("progress-percent")[0].innerHTML = "75%";
  }
  if(n1 == 10 && n2 == 11){
    document.getElementsByClassName("progress")[0].style.backgroundImage = "linear-gradient(to right, #ffffff 100%, #2d2d2d 100%)";

    document.getElementsByClassName("progress-percent")[0].innerHTML = "100%";

    document.getElementsByClassName("next-level")[0].style.display = "block";
  }
  if(n1 == 10 && n2 == 11){
    document.getElementsByClassName("next-text")[0].style.display = "none";
  }
  /*var audio = new Audio('../themes/just-sans-talking.mp3');
  audio.play();*/
}


/*Trocar imagens e falas na conclusão*/
function changeConclusion1(numberImg,numberImgForDelete){
  
  document.getElementsByClassName("character-content-1")[0].style.display = "none";
  document.getElementsByClassName("character-content")[0].style.bottom = "10%";

  /*Faz a imagem requerida aparecer*/
  document.getElementsByTagName("img")[numberImg].style.display = "block";
  /*Faz a anterior desaparecer*/
  document.getElementsByTagName("img")[numberImgForDelete].style.display = "none";

  /*Aparecer lux*/
  document.getElementsByClassName("lux")[0].style.bottom = "10%";
 
}
function changeConclusion2(numberCharacterContent,numberCharacterContentDelete,numberImg,numberImgForDelete){

  document.getElementsByClassName("character-content")[numberCharacterContent].style.bottom = "10%";
  document.getElementsByClassName("character-content")[numberCharacterContentDelete].style.display = "none";

  /*Faz a anterior desaparecer*/
  document.getElementsByTagName("img")[numberImgForDelete].style.display = "none";

  /*Faz a imagem requerida aparecer*/
  document.getElementsByTagName("img")[numberImg].style.display = "block";


  /*Efeitos de transição para imagens*/
  
  if(numberImg == 1){
    document.getElementsByClassName("heimerdinger")[0].style.bottom = "13.5%";
  }
  if(numberImg == 2){
    document.getElementsByClassName("lux")[0].style.bottom = "10%";
  }
  if(numberImg == 3){
    document.getElementsByClassName("teemo")[0].style.bottom = "20%";
  }
  if(numberImg == 4){
    document.getElementsByClassName("gwen")[0].style.bottom = "5%";
  }
  if(numberImg == 5){
    document.getElementsByClassName("jhin")[0].style.bottom = "5%";
  }
 
  /*Ultima fala */
  if(numberCharacterContent == 11){
    document.getElementsByClassName("warning")[0].style.display = "none";
    document.getElementsByTagName("a")[0].style.display = "block";
  }
  

}
