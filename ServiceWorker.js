const MY_CACHE = "duung-pwa-v1"
const assets = [
   "/",
   "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback",
   "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
   "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
   "/admin/plugins/admin-lte-3/css/adminlte.min.css",
   "/admin/plugins/admin-lte-3/css/icheck-bootstrap.min.css",
   "https://cdn.datatables.net/v/bs5/dt-1.11.3/af-2.3.7/b-2.0.1/b-html5-2.0.1/b-print-2.0.1/r-2.2.9/sc-2.0.5/datatables.min.css",
   "https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css",
   "https://site-assets.fontawesome.com/releases/v6.1.0/css/all.css",
   "https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.1.9/sweetalert2.min.css",
   "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js",


   "/index.html",
   "/admin/css/misEstilos.css",
   "/admin/css/responsivo.css",
   "/admin/js/app.js",
   "/admin/js/globals.js",
   "/admin/js/master.js",
   "/admin/js/navbar.js",
   "/admin/js/sidebar.js",
   "/favicon.ico",
   "/assets/images/logo_duung.png"
]

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