// Zmiana nazwy cache wymusza wyczyszczenie starego
const CACHE = 'hampolpro-v3';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Nie cachujemy nic — zawsze pobieraj świeże pliki
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
