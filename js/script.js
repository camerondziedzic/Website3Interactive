var detroit = document.getElementById("detroitsound")
var cat = document.getElementById("caterpillarsound")

var background1 = 'https://iili.io/HnFdDLN.jpg' 
var background2 = 'https://iili.io/HnFF50P.jpg'
var vehicle1 = 'https://iili.io/HnBAFnV.md.png'
var vehicle2 = 'https://iili.io/HnBAFnV.md.png'
var car1 = 'https://iili.io/HnBAYFt.png'
var car2 = 'https://iili.io/HnBAYFt.png'

var background = [background1, background2]
var vehicle = [vehicle1, vehicle2]
var car = [car1, car2]

var counter = 0;
var counter2 = 0;

$("#westernstarimage").on('click', function (){
  detroit.play();
  console.log("Hello Detroit");
})

$("#peterbiltimage").on('click', function (){
  cat.play();
  console.log("Hello Cat");
})

$("#keys").on('click', function (){
  detroit.pause();
  cat.pause();
  detroit.currentTime=0;
  cat.currentTime=0;
})

  $("#BackgroundButton").on("click", function (){
var imageURL = (background[counter]);
counter++;

if(counter == 3) {
  imageURL = ("/Project3/imgs/pexels-photo-2208969.jpg")
  counter = 0
}
  $(".backgroundmain").css("background-image", "url(" + imageURL + ")");
console.log("HELLO1");
console.log(imageURL);
  });


  //ERROR WITHIN Possible #westernstarimage.html(vehicle[counter2])
  $("#SwapButton").on("click", function (){
    var imageURL2 = (vehicle[counter2]);
    var imageURL3 = (car[counter2])
    counter2++;
    
    if(counter2 == 3) {
      imageURL2 = ("/Project3/imgs/Subaru-WRX-STI-PNG-HD.png")
      imageURL3 = ("/Project3/imgs/Mitsubishi-PNG.png")
      counter2 = 0
    }
      $('#westernstarimage').html(vehicle[counter2]);
    console.log("HELLO2");
    console.log(imageURL2);
      });