const MY_CACHE = "duung-pwa-v1"
const assets = [
   "/",
   "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback",
   "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
   "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
   "https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.1.9/sweetalert2.min.css",
   "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js",


   "/index.html",
   "/app/assets/css/loginStyle.css",
   "/app/assets/css/fondo.css",
   "/app/assets/css/menu.css",
   "/app/assets/css/style.css",

   "/app/assets/fonts/LuckiestGuy-Regular.ttf",

   "/app/assets/images/1.png",
   "/app/assets/images/logo_duung.png",
   "/app/assets/images/duung_icon.ico",

   "/app/assets/helpers/",
   "/app/assets/helpers/api.js",
   "/app/assets/components/Loader.js",
   "/app/assets/components/Router.js",

   "/app/assets/views/Splash.js",
   "/app/assets/views/Login.js",
   "/app/assets/views/Main.js",

   "/app/assets/App.js",
   "/app/assets/index.js",
   
   "/favicon.ico",
]

// Cache on install
// self.addEventListener('install', function(event) {
//    // Perform install steps
//    event.waitUntil(
//       caches.open(MY_CACHE)
//       .then(function(cache) {
//          console.log('Opened cache');
//       return cache.addAll(assets);
//       })
//    );
// });

// self.addEventListener('fetch', function(event) {
//    event.respondWith(
//      caches.match(event.request)
//        .then(function(response) {
//          // Cache hit - return response
//          if (response) {
//            return response;
//          }
//          return fetch(event.request);
//       }
//      )
//    );
// });
// self.addEventListener('activate', function(event) {
//    var cacheWhitelist = ['pigment'];
//    event.waitUntil(
//       caches.keys().then(function(cacheNames) {
//          return Promise.all(
//             cacheNames.map(function(cacheName) {
//                if (cacheWhitelist.indexOf(cacheName) === -1) {
//                   return caches.delete(cacheName);
//                }
//             })
//          );
//       })
//    );
// });

// self.addEventListener("install", event => {
//    this.skipWaiting();
//    event.waitUntil(
//        caches.open(MY_CACHE)
//          .then(cache => {
//             return cache.addAll(assets);
//          })
//    )
// });

// // Clear cache on activate
// self.addEventListener('activate', event => {
//    event.waitUntil(
//        caches.keys().then(cacheNames => {
//            return Promise.all(
//                cacheNames
//                    .filter(cacheName => (cacheName.startsWith("pwa-")))
//                    .filter(cacheName => (cacheName !== MY_CACHE))
//                    .map(cacheName => caches.delete(cacheName))
//            );
//        })
//    );
// });



// Serve from Cache
self.addEventListener("fetch", event => {
   event.respondWith(
       caches.match(event.request)
           .then(response => {
               return response || fetch(event.request);
           })
           .catch(() => {
               return caches.match('/offline.html');
           })
    )
});

self.addEventListener("install",installEvent => {
   installEvent.waitUntil(
      caches.open(MY_CACHE).then(cache => {
         cache.addAll(assets);
      })
   )
})

self.addEventListener("fetch",fetchEvent => {
   fetchEvent.respondWith(
      caches.match(fetchEvent.request).then( res => {
         return res || fetch(fetchEvent.request)
      })
   )
})