'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1ca18409cebe5fb482c7352e921f06c0",
".git/config": "6ac70f1064e7b942af433b2016230348",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "23174203913160b761f03425732af79e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "bd2b8aa450513bf3b50a98555f0ab789",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "96e5c480780d12060c2a5e83316fbe50",
".git/logs/refs/heads/main": "300205a13df114affd1f933af97784de",
".git/logs/refs/heads/master": "f8d2e0dc7bfd8180fdc521f2922543be",
".git/logs/refs/remotes/origin/main": "4d026b68b608b24d2268bebd5a0185a7",
".git/logs/refs/remotes/origin/master": "6221e1bfd94b5bb374857887022a3487",
".git/objects/03/5687e8fe52d8129d53c15795ea318efddae6bb": "e8f23ca8ab72fc77a69e0224cac05095",
".git/objects/09/6956ffd568de47511fe13ade42151e7d9df4db": "87fab3875aed88a778814b48fbf3237e",
".git/objects/16/4439cc999dda4fb4775bea007c330015d37c21": "fbaa166267b54b91ef59a8670b48156c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/da896b9a594fa55ee2ec40b523e26ad233ac16": "212b09596f7d2a10c6695a0c3cc84d4b",
".git/objects/22/ee9ec09e8a70605dd7610a85cbaa3b4ff629d4": "2d281da5e3c8e82799e35bc749626896",
".git/objects/24/b432045439b93487e6b38c3af8e79dbf7f058e": "12ae4589b150153a7c12bc80c4665943",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/39/d82f8bdd225449ba2e93a27e3cde2e84670149": "176dc51301d8b7a1cb44fa95629aaa5d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/e33b647db332ba238cd3570a50638d4ec0674b": "425d4a38fda5b5fde8bd8cd4c3682f41",
".git/objects/4e/a3fca6eb515647c992c2033a4136dff46e4226": "e71b49381248877c1fbadcf59872e0b0",
".git/objects/69/a7febb50cf007dc347e593b170de46c9a4b54a": "98b6ba0af5ba1a54134cf4422cbbd30b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/ec56d30abcf13c418cda5d44d736bfcbeae467": "50efb429b0decfc62f785998ec82dbab",
".git/objects/7f/812e3a1aa78bcf59f178754629d4a8e88176c2": "e4bf24fe597ef6a90dec23d89e9b4a0f",
".git/objects/86/cce543b0eca146a43879ee3e3b35017ad979f0": "98e5c00d1da2d8516e9c9e82b24dc5d1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/90/b5af6d2935f5f87e283a91a24a784cb3ecd93f": "47b1bb25b8d5656afc575184c49c78d1",
".git/objects/9a/79c59816f0bd0e0ca543be554e90f794fc2a0b": "c4a5f396316cc951ee1e4b7e8f536536",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/713f265dce36244e41db9acd24480ef75aace2": "b6a0aa5ede2fa12ce16ffb1add52d0c0",
".git/objects/a6/3eb85326df8d9c3fda7a797b92e2a42570e292": "32b555531e9998e3147619f151f184d2",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/909530a1d3624f983720c942db2cd3c6b60841": "83b6003debbd55c79ff28fe4c6381cb8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/cbad16c91afed5b105c90a51ee707cd8c1f7ad": "6ebb1626c3d0443d1c7d090f1cd6f49d",
".git/objects/c2/6c11c4bb88607760583c22733457627983b4f7": "e66f586775d3ade2c9851216bf8344eb",
".git/objects/cc/f577d7e392b8c9f64d32e0d06bf89e3487938f": "0931e2cd5706116c35554ec2608eb2d2",
".git/objects/e1/43df90b29dd053a87407663891953e39fd1843": "21ccbb16f955ae5da654f0ddce44b094",
".git/objects/e1/653a0c9e00a74e905986850610c400d2a18a6e": "9c1c99689ba043027098b9b326f0fbd0",
".git/objects/e4/1a0593c42bf8bebcc76e36cef90b7f1b7f2967": "50cd444988985ba96fd79f3002e46088",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ed/15e80a1db4836fbd42eca0f170c6b7ee51e29d": "7bf375ebbaf2156cc11cdca3ed6ee41e",
".git/objects/f2/84adf6d7eeada12749aba899d7720b8586ac31": "116cdc3eed75f898f7ce5147bbe93cba",
".git/objects/f7/96edf576332dd2c4007a1041672c9d1ad85b77": "953fea25c3c1fd55e1bb13ffc9f4e6f8",
".git/objects/fd/232baebc3d27e9d8f20f562952ad4c653dbc1e": "04e8aae11f28adcfa0dd2c56516563ce",
".git/objects/fd/f61e7b2abcbb207e5c259831e06b4311fb8465": "9f9a83fc237b7a1962de8ea07f6df14d",
".git/objects/pack/pack-937a7366223c7540f22f92e4334afe7c69b5f724.idx": "75784bb3604bf3eac8f958c5b2ea812a",
".git/objects/pack/pack-937a7366223c7540f22f92e4334afe7c69b5f724.pack": "d2aff6d2e245b011e4d33cd9449a3805",
".git/ORIG_HEAD": "3c453a8f387ff1eebfd03670fe145972",
".git/refs/heads/main": "5169a2fa966d6523e710870fdca3ea94",
".git/refs/heads/master": "3c453a8f387ff1eebfd03670fe145972",
".git/refs/remotes/origin/main": "5169a2fa966d6523e710870fdca3ea94",
".git/refs/remotes/origin/master": "3c453a8f387ff1eebfd03670fe145972",
"assets/AssetManifest.json": "3534734527e38ff0637affdf798f1faa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lib/assets/logo.png": "a2349977b7d3fc28ae442f47c1a7d2a8",
"assets/lib/assets/Wheely.png": "7937486791e42e678ed3bb00a9704ff8",
"assets/lib/assets/Wheely3.png": "2131509a3631b0b740bd73a4ba30c42a",
"assets/lib/assets/willi.png": "e76fb092cb690e4c5a214629f5d6ebaf",
"assets/NOTICES": "aa1efd26d781c15adb2519004581186a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "7fa56dc27694c28f0b8f7b437612ed70",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f641200e211db21116636c899694462b",
"/": "f641200e211db21116636c899694462b",
"main.dart.js": "c86e06d1260d53a3ea1af16ae7b975a2",
"manifest.json": "c186c4324de2689976ba68c4edba1bc9",
"version.json": "775d5ad3dd0f5a033334e47d691791ca"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
