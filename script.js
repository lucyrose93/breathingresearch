
function revealCredits () {

  var credits = document.getElementById('credits');
  var plusMinus = document.getElementById('plus_minus');

if (plusMinus.innerText === '+'){
  credits.style.display = 'inline'
  plusMinus.innerText = '–'
}

else {
  credits.style.display = 'none';
  plusMinus.innerText='+'
}

}

function changeMainImg () {

  var count = 0;
  var mainImg = document.getElementById('main_img')
  var imgSrcArray = mainImg.src.split('/')
  var imgFileName = imgSrcArray[imgSrcArray.length - 1]

  switch(imgFileName) {
    case 'placeholder-1.png':
      mainImg.src = 'images/placeholder-2.png';
    break;
    case 'placeholder-2.png':
      mainImg.src = 'images/placeholder-3.png';
    break;
    case 'placeholder-3.png':
      mainImg.src = 'images/placeholder-1.png'
    break;
  }

}

function showFirstImg () {
  var mainImg = document.getElementById('main_img')
  mainImg.src = 'images/placeholder-1.png';
}

function showSecondImg () {
  var mainImg = document.getElementById('main_img')
  mainImg.src = 'images/placeholder-2.png';
}

function showThirdImg () {
  var mainImg = document.getElementById('main_img')
  mainImg.src = 'images/placeholder-3.png';
}
