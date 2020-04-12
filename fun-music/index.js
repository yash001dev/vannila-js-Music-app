
  $(document).ready(function(){
    const sound=$(".sound");
    const pads=$(".pads div");
    const visual=$(".visual");
    const colors=[
    "#511845",
    "#900c3f",
    "#c70039",
    "#ff5733",
    "#d8345f",
    "#e58a8a"
  });

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });

  const createBubble = index => {
    //Create bubbles
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = `jump 1s ease`;
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
