const cacheName = "duung-pwa-v1.0.0"
const filesToCache = [
   "./",
   "./index.html",
   "./app/assets/css/loginStyle.css",
   "./app/assets/css/fondo.css",
   "./app/assets/css/menu.css",
   "./app/assets/css/style.css",

   "./app/assets/fonts/LuckiestGuy-Regular.ttf",

   "./app/assets/images/1.png",
   "./app/assets/images/logo_duung.png",
   "./app/assets/images/duung_icon.ico",

   "./app/assets/helpers/",
   "./app/assets/helpers/api.js",
   "./app/assets/components/Loader.js",
   "./app/assets/components/Router.js",

   "./app/assets/views/Splash.js",
   "./app/assets/views/Login.js",
   "./app/assets/views/Main.js",

   "./app/assets/App.js",
   "./app/assets/index.js",
   
   "./favicon.ico"
];



// "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback",
// "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
// "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
// "https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.1.9/sweetalert2.min.css",
// "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js",




// // Cache on install
// self.addEventListener("install", e => {
//    console.log("[ServiceWorker**] - Install");
//    e.waitUntil(
//        caches.open(cacheName).then(cache => {
//            console.log("[ServiceWorker**] - Caching app shell");
//            return cache.addAll(filesToCache);
//        })
//    );
// });

// self.addEventListener("activate", event => {
//    caches.keys().then(keyList => {
//        return Promise.all(
//            keyList.map(key => {
//                if (key !== cacheName) {
//                    console.log("[ServiceWorker] - Removing old cache", key);
//                    return caches.delete(key);
//                }
//            })
//        );
//    });
//    event.waitUntil(self.clients.claim());
// });

// self.addEventListener("fetch", event => {
//    event.respondWith(
//        caches.match(event.request, { ignoreSearch: true }).then(response => {
//            return response || fetch(event.request);
//        })
//    );
// });
// // Serve from Cache
// self.addEventListener("fetch", event => {
//    event.respondWith(
//       caches.match(event.request)
//          .then(response => {
//             return response || fetch(event.request);
//          })
//          .catch(() => {
//             return caches.match('/offline.html');
//          }
//       )
//    )
// });





self.addEventListener("install",installEvent => {
   installEvent.waitUntil(
      caches.open(cacheName).then(function(cache) {
         return cache.addAll(filesToCache);
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

self.addEventListener("activate", event => {
   caches.keys().then(keyList => {
       return Promise.all(
           keyList.map(key => {
               if (key !== cacheName) {
                   console.log("[ServiceWorker] - Removing old cache", key);
                   return caches.delete(key);
               }
           })
       );
   });
   event.waitUntil(self.clients.claim());
});