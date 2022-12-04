if ("serviceWorker" in navigator) {
   window.addEventListener("load", function(){
      navigator.serviceWorker
      .register("/ServiceWorker.js", {scope: "./"})
      .then(res => console.log("ServiceWorker registrado"))
      .catch(err => console.log("ServiceWorker con error", err))
   })
}