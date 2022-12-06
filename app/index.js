import { App } from "./App.js";


const audio_theme = document.querySelector("#audio_theme")
audio_theme.volume = 0.005;

document.addEventListener("mouseover", () => {
   if (audio_theme.currentTime == 0)
      setTimeout(() => audio_theme.play(),1000);
})

// audio_theme.play();
document.addEventListener("DOMContentLoaded",App);
window.addEventListener("hashchange",App);