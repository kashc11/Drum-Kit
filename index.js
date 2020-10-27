var arr = document.querySelectorAll(".drum");

// for mouse presses
for (var i = 0; i < arr.length; i++)
{
  arr[i].addEventListener("click", function(){
    var ins= this.innerHTML;
    makeSound(ins);
    btnAnimation(ins);
  });
}

// for keyboard presses
//when the key is pressed, it triggers all the events. Out of those events we only want to use key

document.addEventListener("keydown", function(e)
{
  makeSound(e.key);
  btnAnimation(e.key);
});

function makeSound(e)
{
  switch(e)
 {
   case "w":
   {
     var tom1=new Audio("sounds/tom-1.mp3");                            //Using audio
     tom1.play();                                                       //play audio
     break;
   }
   case "a":
     (new Audio("sounds/tom-2.mp3")).play();
     break;

   case "s":
     (new Audio("sounds/tom-3.mp3")).play();
     break;

   case "d":
     (new Audio("sounds/tom-4.mp3")).play();
     break;

   case "j":
     (new Audio("sounds/snare.mp3")).play();
     break;

   case "k":
     (new Audio("sounds/crash.mp3")).play();
     break;

   case "l":
     (new Audio("sounds/kick-bass.mp3")).play();
     break;

   default:
     console.log(instrument);
     break;
 }
}

function btnAnimation(e)
{
  document.querySelector("." + e).classList.add("pressed");

  setTimeout(function() {
    document.querySelector("." + e).classList.remove("pressed");
  }, 150);
}
