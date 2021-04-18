// 画布相关变量
var bg = document.getElementById("bg");
var pw = document.getElementById("people");
var w = document.getElementById("wildanimal");
var final = document.getElementById("finallayer");
var bgcontext = bg.getContext("2d");
var pcontext = pw.getContext("2d");
var wildcontext = w.getContext("2d");
var f = final.getContext("2d");

//背景，人物，动物图片
var img = new Image();
var person = new Image();
var wild = new Image();


//广告牌！！！！！！！！！！！！！！！！！！
var billboard = new Image();
billboard.src = "billboard4.png"


//摄像头照的照片，暂时没用
//var photo = document.getElementById('photo');

//背景预览图
var intro_animal = document.getElementById("description")
var result = new Image();

//动物的图片可以在下面push
var animalList = new Array();
animalList.push("wl_gallery/1-kangaroo.png");
animalList.push("wl_gallery/2-gorilla.png");
animalList.push("wl_gallery/3-hippopotamus.png");
animalList.push("wl_gallery/4-crocodile.png");
animalList.push("wl_gallery/5-koala.png");
animalList.push("wl_gallery/6-wolf.png");
animalList.push("wl_gallery/7-green tree python.png");
animalList.push("wl_gallery/8-mandrill.png");
animalList.push("wl_gallery/9-groundhog.png");
animalList.push("wl_gallery/10-panda.png");
animalList.push("wl_gallery/11-white cockatoos.png");
animalList.push("wl_gallery/12-giraffe.png");
animalList.push("wl_gallery/13-brownbear.png");
animalList.push("wl_gallery/14-eagle.png");

//
var descriptionList = new Array();
descriptionList.push("wl_gallery/des.012.png");


//
var audio = document.getElementById("cheese")

//
var wildvoiceList = new Array();
wildvoiceList.push("wildvoice/1-kangaroo.mp3");
wildvoiceList.push("wildvoice/2-gorilla.mp3");
wildvoiceList.push("wildvoice/3-hippopotamus.mp3");
wildvoiceList.push("wildvoice/4-crocodile.mp3");
wildvoiceList.push("wildvoice/5-koala.mp3");
wildvoiceList.push("wildvoice/6-wolf.mp3");
wildvoiceList.push("wildvoice/7-green tree python.mp3");
wildvoiceList.push("wildvoice/8-mandrill.mp3");
wildvoiceList.push("wildvoice/9-groundhog.mp3");
wildvoiceList.push("wildvoice/10-panda.mp3");
wildvoiceList.push("wildvoice/11-white cockatoos.mp3");
wildvoiceList.push("wildvoice/12-giraffe.mp3");
wildvoiceList.push("wildvoice/13-brownbear.mp3");
wildvoiceList.push("wildvoice/14-eagle.mp3");




//对于黑白人物也可以进行类似操作


// popup 窗口的两个按钮
var div = document.getElementById('background1');
var close = document.getElementById('close-button');


//获取滚动条距顶端的距离
function getPageScroll() {
  var yScroll;
  if (self.pageYOffset) {
    yScroll = self.pageYOffset;
    xScroll = self.pageXOffset;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    yScroll = document.documentElement.scrollTop;
  } else if (document.body) {
    // all other Explorers
    yScroll = document.body.scrollTop;
  }

  return yScroll;
}


//图片合成
$("#confirm").click(function() {

  let bc= document.getElementById("backaudio");
  bc.paused;


  audio.play();

  bgcontext.drawImage(img, 0, 0, 800, 480);
  pcontext.drawImage(person, 100, 250, 250, 190);
  pcontext.drawImage(wild, 550, 180, 300, 300);
  pcontext.drawImage(billboard, 80, 230, 290, 260);
  f.drawImage(img, 0, 0, 800, 480);
  f.drawImage(person, 100, 250, 250, 190);
  f.drawImage(wild, 550, 180, 300, 300);
  f.drawImage(billboard, 80, 230, 290, 260);
  document.getElementById("result").src = final.toDataURL();
  div.style.display = "block";

});


//控制pop up窗口的
close.onclick = function close() {
  div.style.display = "none";
  img = new Image();
  person = new Image();
  wild = new Image();
  pcontext.clearRect(0, 0, 800, 480);
  f.clearRect(0, 0, 800, 480);
  bgcontext.clearRect(0, 0, 800, 480);
  wildcontext.clearRect(0, 0, 800, 480);
  
  

}
window.onclick = function close(e) {
  if (e.target == div) {
      div.style.display = "none";
  }
}


//根据照片们的高度来设置它，比如要设置成600，就把其中所有的480改成600
//注意，所有html文件里面的 bgimage id下的图片，它们的id要是连续的数字
document.addEventListener("scroll", function name(params) {
  let i = getPageScroll();
  if (i < 480) {
    bg.height = bg.height;
  } else {
    let j = Math.floor((i - 240-50) / 481) + 1;
    //prImg.src = document.getElementById(j).src;
    img.src = document.getElementById(j).src;
    img.onload = function() {
      bgcontext.drawImage(img, 0, 0, 800, 480);
    };
  }
});




//清理画布的
$("#bgclear").click(function() {
  img = new Image();
  person = new Image();
  wild = new Image();
  pcontext.clearRect(0, 0, 800, 480);
  f.clearRect(0, 0, 800, 480);
  bgcontext.clearRect(0, 0, 800, 480);
  wildcontext.clearRect(0, 0, 800, 480);

});


//有n个动物，就让1.99变成n-0.01
$("#animal").click(function() {
  let index = Math.floor(13.99 * Math.random());
  w.height = w.height;
  wild.src = animalList[index];
  wild.onload = function() {
    wildcontext.drawImage(wild, 500, 180, 300, 300);
  };

  intro_animal.scr = descriptionList[index];


  let wild_voice = new Audio(wildvoiceList[index]);
  wild_voice.play();
  
});

  
//upload the photo from front camera
/*Referenced from http://www.fly63.com/article/detial/672 A Chinese code blog.*/

!(function () {

  if (navigator.mediaDevices === undefined) {
      navigator.mediaDevices = {};
  }
  if (navigator.mediaDevices.getUserMedia === undefined) {
      navigator.mediaDevices.getUserMedia = function (constraints) {

          var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

          if (!getUserMedia) {
              return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
          }

          return new Promise(function (resolve, reject) {
              getUserMedia.call(navigator, constraints, resolve, reject);
          });
      }
  }

  const constraints = {
      video: true,
      audio: false
  };
  let videoPlaying = false;
  let v = document.getElementById('v');
  let promise = navigator.mediaDevices.getUserMedia(constraints);
  promise.then(stream => {

      if ("srcObject" in v) {
          v.srcObject = stream;
      } else {

          v.src = window.URL.createObjectURL(stream);
      }
      v.onloadedmetadata = function (e) {
          v.play();
          videoPlaying = true;
      };
  }).catch(err => {
      console.error(err.name + ": " + err.message);
  })
  document.getElementById('person1').addEventListener('click', function () {
      if (videoPlaying) {
          let canvas = document.getElementById('cam');
          canvas.width = v.videoWidth;
          canvas.height = v.videoHeight;
          canvas.getContext('2d').drawImage(v, 0, 0);
          let data = canvas.toDataURL('image/webp');
          
          person.src = data;
          person.onload = function() {
            pcontext.drawImage(person, 100, 250, 250, 190);
          };
          pcontext.drawImage(billboard, 80, 230, 290, 260);
      }
  }, false);

 
  


})();
  
 