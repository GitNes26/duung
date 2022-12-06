import { App } from "./App.js";


const audio_theme = document.querySelector("#audio_theme")
audio_theme.volume = 0.004;

document.addEventListener("mouseover", () => {
   audio_theme.muted=false
})

// audio_theme.play();
document.addEventListener("DOMContentLoaded",App);
window.addEventListener("hashchange",App);