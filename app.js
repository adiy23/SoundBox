var sunconueSound = new Audio("sunconure.mp3");
var airbusSound = new Audio("airbus.mp3");
let babylaughSound = new Audio("babylaugh.mp3");
let gunfightSound = new Audio("gunfight.mp3");
let babycrySound = new Audio("babycry.mp3");

let sounds = [
  "sunconueSound",
  "airbusSound",
  "babylaughSound",
  "gunfightSound",
  "babycrySound",
];

function playSound(id) {
  if (id === "sunconure") {
    stopAudio();
    sunconueSound.play();
  } else if (id === "airbus") {
    stopAudio();
    airbusSound.play();
  } else if (id === "babylaugh") {
    stopAudio();
    babylaughSound.play();
  } else if (id === "gunfight") {
    stopAudio();
    gunfightSound.play();
  } else if (id === "crying") {
    stopAudio();
    babycrySound.play();
  }
}

function stopAudio() {
  for (let i = 0; i < sounds.length; i++) {
    eval(sounds[i]).pause();
  }
}
