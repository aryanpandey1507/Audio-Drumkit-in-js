window.addEventListener("keydown",function(e){                                                      // window is an object in the js which has all the global functions and variables as its methods and properties
    console.log(e);                                                                                // window object represents the browser's window
    console.log(e.keyCode);                                                                           // keycode is a function in keybooard event for representing the keycode of that particular key pressed
    let audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);                              // this catches the particular element of audio tag which has the data key of pressed button
    let key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio); 
    console.log(key); 
    if(!audio)                                                                                      // if we press the key other than M,U,S,I,C
    {
        return;
    }  
    audio.currentTime=0;                                                                           // this attribute will help to play the audio from the time alloted on rhs after hitting the button

    audio.play();                                                                                  // if we would not have put the current time then the sound will not come again as the previous sound is already been played 
    key.classList.add('playing');                                                                 // this is made to add playing class into the key class, when we press the button

window.addEventListener("keydown",function(e){
    console.log(e);
    let code=e.keyCode;
    if(code==16)
    {
        audio.pause();
        key.classList.remove("playing");
    }

});  
    function removetransition(e)
    {
      console.log(e) ;
      if(e.propertyName!=="transform")                                                                      // we are taking only the transform propety from all the transition properties
      {
          return;
      }
      console.log(e.propertyName);                                                                          // this will be printed when the transition will be ended
      this.classList.remove("playing");
    }
    let keys=document.querySelectorAll(".key");
    keys.forEach(key =>key.addEventListener("transitionend",removetransition)); 
});                                                                                                              // this function will give all the transition that are associated with the function in which the transitionend listner is added, and then by function definition we can remove it                                       
                                                                                                           // a bunch of things will be transitioned so it will give all the transition and then we can select which one we can remove

