const cacheName = 'spaans-trainer-v1';
const filesToCache = [
  '/', 'index.html', 'conjugation.html', 'translation.html', 'verbs.json',
  'manifest.json', 'icons/icon-192.png', 'icons/icon-512.png'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(cacheName).then(c => c.addAll(filesToCache)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});