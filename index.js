// Declare a global variable for the currently playing audio
let currentAudio = null;

// Add click event listeners to all drum buttons
let drumButtons = document.querySelectorAll(".drum");
for (let i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    var innerButton = this.innerHTML.toUpperCase();
    makesound(innerButton);
    animation(innerButton);
  });
}

// Add keypress event listener
document.addEventListener("keypress", function (event) {
  makesound(event.key.toUpperCase()); // Ensure the key is uppercase to match button labels
  animation(event.key.toUpperCase());
});

// Add event listener to the "Pause" button
document.getElementById("pause-button").addEventListener("click", function () {
  if (currentAudio) {
    currentAudio.pause(); // Pause the currently playing audio
  }
});

// Add event listener to the "Play" button
document.getElementById("play-button").addEventListener("click", function () {
  if (currentAudio) {
    currentAudio.play(); // Resume the currently paused audio
  }
});

// Play the corresponding sound
function makesound(key) {
  // Stop the currently playing audio, if any
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0; // Reset to the beginning
  }

  let audio;

  switch (key) {
    case "A":
      audio = new Audio("sounds/Aaj-Ke-Baad.mp3");
      break;
    case "B":
      audio = new Audio("sounds/Barsaat-Aa-Gayi.mp3");
      break;
    case "C":
      audio = new Audio("sounds/Chala Jata Hoon.mp3");
      break;
    case "D":
      audio = new Audio("sounds/Dil Todeya Akaal 128 Kbps.mp3");
      break;
    case "E":
      audio = new Audio("sounds/Ek Ladki Ko Dekha.mp3");
      break;
    case "F":
      audio = new Audio("sounds/Fukrey.mp3");
      break;
    case "G":
      audio = new Audio("sounds/Gujju Pataka Satyaprem Ki Katha 128 Kbps.mp3");
      break;
    case "H":
      audio = new Audio("sounds/Hungama Ho Gaya Hungama 2 128 Kbps.mp3");
      break;
    case "I":
      audio = new Audio("sounds/Ishq Hua Xcuse Me 128 Kbps.mp3");
      break;
    case "J":
      audio = new Audio("sounds/Jab Se Tumko Dekha.mp3");
      break;
    case "K":
      audio = new Audio("sounds/Kahani Laal Singh Chaddha 128 Kbps.mp3");
      break;
    case "L":
      audio = new Audio("sounds/Loveyatri Mashup Loveyatri A Journey Of Love 128 Kbps.mp3");
      break;
    case "M":
      audio = new Audio("sounds/Mohabbat Amaal Mallik 128 Kbps.mp3");
      break;
    case "N":
      audio = new Audio("sounds/Na Tum Jano Na Hum.mp3");
      break;
    case "O":
      audio = new Audio("sounds/Oh-Mahiya-Mainu-Yaad-Aave(PagalWorlld.Com).mp3");
      break;
    case "P":
      audio = new Audio("sounds/Pehli Baarish Mein Jubin Nautiyal 128 Kbps.mp3");
      break;
    case "Q":
      audio = new Audio("sounds/4K Song_ कुसुर आप कामेरा नाम लीजिए न मेरे बाप का प्यारभरा गीत _ Kusoor Aapka Huzoor Aapka Hindi Song.mp3");
      break;
    case "R":
      audio = new Audio("sounds/Ruk Ja O Dil Deewane.mp3");
      break;
    case "S":
      audio = new Audio("sounds/Saanjha Zara Hatke Zara Bachke 128.mp3");
      break;
    case "T":
      audio = new Audio("sounds/Tere Hawaale Laal Singh Chaddha 128 Kbps.mp3");
      break;
    case "U":
      audio = new Audio("sounds/Udd Jaa Kaale Kaava.mp3");
      break;
    case "V":
      audio = new Audio("sounds/Ve Kamleya.mp3");
      break;
    case "W":
      audio = new Audio("sounds/Wah Wah Ramji .mp3");
      break;
    case "X":
      audio = new Audio("sounds/Xcuse Me Xcuse Me 128 Kbps.mp3");
      break;
    case "Y":
      audio = new Audio("sounds/yadav-brand.mp3");
      break;
    case "Z":
      audio = new Audio("sounds/Zihaal E Miskin Vishal Mishra 128 Kbps.mp3");
      break;
    default:
      return; // Exit if the key doesn't match any case
  }

  // Play the new audio and set it as the current audio
  currentAudio = audio;
  currentAudio.play();
}

// Add animation to the button
function animation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
