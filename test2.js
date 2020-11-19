var width = window.innerWidth 
var pictureSize = width/5; // picsum.photos/200

var pictures = `<img src="https://picsum.photos/seed/1/${pictureSize}">` ;      // holder for pictures1

var background1 = `https://picsum.photos/seed/2/${width}`; // background picture 1
var background2 = `https://picsum.photos/seed/4/${width}`;
var background3 = `https://picsum.photos/seed/6/${width}`;

 

function loopPic(){ 
    setTimeout(function() {
        document.getElementById("result").innerHTML += pictures;                       
        if (true) {         
          loopPic();             
        }                       
      }, 1100)
    }


function showPic1(){
    var bg = document.getElementById("bg");
    document.getElementById("result").innerHTML = '';
    bg.style.background = `url(${background1}) repeat center fixed`;
    //  bg.style.backgroundSize = "cover";
    //  bg.style.maxWidth = '100%';
    //  bg.style.maxHeight = '100%';
    loopPic();
}

function showPic2(){
  var bg = document.getElementById("bg");
  document.getElementById("result").innerHTML = '';
  bg.style.background = `url(${background2}) repeat center fixed`;
  loopPic();
}

function showPic3(){
  var bg = document.getElementById("bg");
  document.getElementById("result").innerHTML = '';
  bg.style.background = `url(${background3}) repeat center fixed`;
  loopPic();
}