var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 var birthday_img="";
function new_image()
{
  fabric.Image.fromURL('BirthdayImage.jpg' ,function(Img){
  birthday_img =Img;
  birthday_img.scaleToWidth(700) ;
  birthday_img.scaleToHeight(500) ;
  birthday_img.set({
    top:0,
    left:0
  });
canvas.add(birthday_img);
});
}

function play_sound(){
  x.play() ;
}