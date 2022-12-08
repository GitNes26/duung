const cacheName = "pwa-duung-v1.0.1";
const filesToCache = [
	"./",
	"./index.html",

    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
    "https://cdn.jsdelivr.net/npm/sweetalert2@11.1.9/dist/sweetalert2.all.min.js",
    "https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js",
    "https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
    "https://use.fontawesome.com/releases/v5.7.2/css/all.css",
    
	"./OneSignalSDKWorker.js",

	"./app/assets/css/loginStyle.css",
	"./app/assets/css/fondo.css",
	"./app/assets/css/menu.css",
	"./app/assets/css/style.css",

	"./app/assets/fonts/LuckiestGuy-Regular.ttf",

	"./app/assets/plugins/block-ui/jquery.blockui.min.js",

	"./app/assets/audios/musica-espera-separador-musical-.mp3",
	"./app/assets/audios/correct_answer2.mp3",

	"./app/assets/images/1.png",
	"./app/assets/images/logo_duung.png",
	"./app/assets/images/duung_icon.ico",

	"./app/helpers/api.js",
	"./app/helpers/fetchRequest.js",
	"./app/helpers/helpers.js",

	"./app/components/Loader.js",
	"./app/components/Router.js",
	"./app/components/SideBar.js",

	// "./app/views/",
	"./app/views/Splash.js",
	"./app/views/Login.js",
	"./app/views/Main.js",

	"./app/App.js",
	"./app/index.js",

	"./favicon.ico",
];

// "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback",
// "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
// "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
// "https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.1.9/sweetalert2.min.css",
// "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js",

// // Cache on install
// self.addEventListener("install",installEvent => {
//    installEvent.waitUntil(
//       caches.open(cacheName).then(cache => {
//          cache.addAll(filesToCache);
//       })
//    )
// })

// self.addEventListener("fetch",fetchEvent => {
//    fetchEvent.respondWith(
//       caches.match(fetchEvent.request).then( res => {
//          return res || fetch(fetchEvent.request)
//       })
//    )
// })
// // Clear cache on activate
// self.addEventListener('activate', event => {
//     event.waitUntil(
//         caches.keys().then(cache => {
//             return Promise.all(
//                 cache
//                     .filter(cache => (cache.startsWith("pwa-")))
//                     .filter(cache => (cache !== cacheName))
//                     .map(cache => caches.delete(cache))
//             );
//         })
//     );
//  });





















// SEGUNDA OPCION

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





// TERCERA OPCION

// // Cache on install
// self.addEventListener("install", e => {
//     console.log("[ServiceWorker**] - Install");
//     e.waitUntil(
//         caches.open(cacheName).then(cache => {
//             console.log("[ServiceWorker**] - Caching app shell");
//             return cache.addAll(filesToCache);
//         })
//     );
// });

// self.addEventListener("activate", event => {
//     caches.keys().then(keyList => {
//         return Promise.all(
//             keyList.map(key => {
//                 if (key !== cacheName) {
//                     console.log("[ServiceWorker] - Removing old cache", key);
//                     return caches.delete(key);
//                 }
//             })
//         );
//     });
//     event.waitUntil(self.clients.claim());
// });

// self.addEventListener("fetch", event => {
//     event.respondWith(
//         caches.match(event.request, { ignoreSearch: true }).then(response => {
//             return response || fetch(event.request);
//         })
//     );
// });



// // Serve from Cache
// self.addEventListener("fetch", event => {
//     event.respondWith(
//         caches.match(event.request)
//         .then(response => {
//             return response || fetch(event.request);
//         })
//         .catch(() => {
//             return caches.match('/offline.html');   
//         })   )
// });

// self.addEventListener("install", installEvent => {
//     installEvent.waitUntil(
//         caches.open(cacheName).then(function(cache) {
//             return cache.addAll(filesToCache);
//         })
//     )
// })

// self.addEventListener("fetch", fetchEvent => {
//     fetchEvent.respondWith(
//         caches.match(fetchEvent.request).then(res => {
//             return res || fetch(fetchEvent.request)
//         })
//     )
// })

// self.addEventListener("activate", event => {
//     caches.keys().then(keyList => {
//         return Promise.all(
//             keyList.map(key => {
//                 if (key !== cacheName) {
//                     console.log("[ServiceWorker] - Removing old cache", key);
//                     return caches.delete(key);
//                 }
//             })
//         );
//     });
//     event.waitUntil(self.clients.claim());
// });
