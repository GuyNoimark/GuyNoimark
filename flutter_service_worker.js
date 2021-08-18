'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a211cd131eda9266eb854a1194e59481",
".git/config": "3c64a85d53a5797b0a94912fcd8ba069",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a34ce31385aea784a52ecfa3c894ca21",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "13a0bb4749af5d9a5812d34cf06f8814",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "eb5ce4a39601bcc9a949ebb577c3257d",
".git/logs/refs/heads/main": "5efda36b8d6742292d9da9ddcb3b6a67",
".git/logs/refs/remotes/origin/main": "e78f11324866b6bc764517faf87273aa",
".git/logs/refs/remotes/upstream/main": "2f73e5e99df2188cb1177c985a08ebf0",
".git/logs/refs/stash": "30487ee58fa0c65be839b9cab5f185a6",
".git/objects/01/5208606e8556eee6c2e4f5a9af3c44f2f90103": "e7248c8ea7dec53043723e1a6f9812d6",
".git/objects/09/c0d2778e99ca051591f97a7ea2b10285f30023": "ed0c5ef37df78c757346329b16e895f2",
".git/objects/0a/b312554067ed2dda4f4d5b7a8031a1bda9b6b0": "8ce88b64a5653afd48e0c84a089f7164",
".git/objects/0b/2fea408d21f107c541cab1ee19e7238100a491": "b2cb4a01d64ab3effbc6152a25e689bc",
".git/objects/0c/579f2826e4fa0e86557ef8baff6a7030eff80f": "ab02b1cd1b3fe3a0385d9568c4c09e43",
".git/objects/11/56f29f5c49da2d0edcb061f909f5ce0ca87523": "c379b8519508863d4e7ca696cd066039",
".git/objects/15/03febd00695a4ba02b16041f27e86ccb3d943b": "3d9ffb3aa70f27de6592dd7d0017f81d",
".git/objects/18/b2198ae4c6424fa6f38e909ea13aa8d02996f5": "0d3a3e857d3cce13e131cb36a79b0391",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/f631f5a657738f3e954230b2f898b4594c29f2": "7e3c6418e1edb62b60d980f3b06da87b",
".git/objects/21/632215f13f465b7f5de753189b9d1cea4475bd": "17d2fbab432b87432f0a2894bcdba38b",
".git/objects/23/46ac6ca8d523684c856dfcc3b3d1aaa1b6492e": "ba1286b6c13815f59feaf6eda1685da9",
".git/objects/24/b432045439b93487e6b38c3af8e79dbf7f058e": "12ae4589b150153a7c12bc80c4665943",
".git/objects/25/e57ea4655dcdd0aaadf7ac1da051528392abdd": "9fbccdf860fccd72173d0898836ecedb",
".git/objects/2b/56faa2c7333350ef7d52f327c8b34d7ef11daa": "dd675f1cf5006739f4685ab484018c61",
".git/objects/30/49ccb61efe37c3c110a69bbc0ff71cbb4e0261": "7e4b753e3fd1bb6610ac7eb3bf570b06",
".git/objects/30/ede0a0cfb3223e19e91f1e3d92a2161e99c959": "a2da7afb3e5063289cd8fa82ea47493f",
".git/objects/31/7963f93ea22fb5fe6303f5cedf144b44e9f3ab": "eeb40b38d5257462f46a7e00cc2bf8ae",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/ca8535352fbbd493c38fd27407ad0eadb31f66": "cbfea3ab2f4089c82f3ab58002013c8f",
".git/objects/33/3cfc247a133e78a0ad0d688b99dd9f82d95171": "1a9f27cda38c5f9c33ae91e3c6573a23",
".git/objects/38/0862fe1a337a2fded3c1de11efa1ce71566cc3": "1e3eae17e805d98c22c922aa35f459bd",
".git/objects/39/7196c4f0315af3c3625b54fa5b9dbfd6f22725": "151acfc9d958d72a4ea84a93417dc48a",
".git/objects/3e/b178046d5591623275762e46bf8995b5a4610f": "c4076df79208d7a3979e42ae35f8b2eb",
".git/objects/3f/0ff850c8abfcedc39171c77271b216cdc794b0": "918db56ccb3b8b3512b23fdc78c433e3",
".git/objects/43/76345da966f87e752dadd3e43f8055d0151161": "0ed4efc6cdc25f614b426cbfa917d9ab",
".git/objects/45/3f39ea9f83e9b8e39011f26a39a648481a4950": "66f35280334cef0b5ea3b768b6e32891",
".git/objects/46/1b61f29b509b1cc51a33fa439d1cdfb3f7381b": "a3b9e0e482e0973d9a9fec14f6cb6880",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/db443a538dcea0e415c040129857c8ce5917a5": "0b96dbeb99a680e38205306716bed76e",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/e33b647db332ba238cd3570a50638d4ec0674b": "425d4a38fda5b5fde8bd8cd4c3682f41",
".git/objects/4c/617dafb2038f7f2fe6f61453aa3f7c7b950184": "d2a1847bdaf4e6a9097c2a18f7f25edf",
".git/objects/4e/a3fca6eb515647c992c2033a4136dff46e4226": "e71b49381248877c1fbadcf59872e0b0",
".git/objects/4e/a6408f814fba8fa7f6da5b1a1e12a3074e26ab": "bd2241bdbf3073d12c6b1e671ad66237",
".git/objects/51/de6f7a339821adaf550d087581dbcc5134c169": "ae3a2bb9777fe8e2b0089252edd9bfef",
".git/objects/52/2893c0b535f1b6196ae76b93af07d3e600c32b": "cacfed537b6bb76a8b7919a687f50210",
".git/objects/57/28b4995cb89e6279925de89704a3d00745e3fc": "3b35125df074772531303ccae78edc22",
".git/objects/59/6514a74796471d8766441b7f5219aa6f3ea805": "1dbe31b2e32d5302d6a821a9769eea96",
".git/objects/59/79b77b49ccc087d50e0e5b5928a7239960452b": "5aa6a2af4146a29065500c83940775a6",
".git/objects/5c/7561b4e09f73dd9cbb315ccf1424c07e56b7e9": "eb23f0eb71d2862c93793cd23c79498e",
".git/objects/60/10b5934a0a322725504f6403ef593d464c0b27": "e6a7ccf0c725ee2561d395c2e9185fd5",
".git/objects/61/72b87843f79110c7d2d8106ffab15bfb04eaa7": "e486744eca3dbd845897697a7c2fd64d",
".git/objects/66/d92d9ca3a9f9810db93d1176bb0a409214180f": "026fc0e60e710d4ba8af29f3c74d2609",
".git/objects/69/0e6429eafc506ea7e4d5bfe04da71dbeddf557": "959ea4eb89aa03ebaef2f874a47b4067",
".git/objects/6a/a3ed61b66d4476aa6a3958e095be00048a65a4": "d5ee58883e4ef9efd3fe0efd12e8ae3e",
".git/objects/6c/14fc7b23ff45a9a943021c058b0ec8525040f6": "db774be01cf57ca2aebfe4f5bb1e1e49",
".git/objects/6e/3b6460247b74d0b6aacfafd03141e6b1c9ec33": "2fa61d4a4a5fef4517363c671896795b",
".git/objects/71/efbfbfcf0910f7d52d4f1ba1136cd539aa9c0a": "4e1fe3c187c52cefee9b5b08a66cdd6f",
".git/objects/74/91b9fecb0bbdee5a0ba5e48977f8c11255d41e": "fa50c0d4e54afc4655b6c76ad2ca9d4a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/f637136b495be2a6aaba909a55ef5fc5070613": "dfc82b2c78a4a354e193392c451fdc78",
".git/objects/7d/5c06bac5b9e2ddd4c698ab44280c8058ce3d2a": "18856e7406970ca156da1c3e24680b7b",
".git/objects/7d/ec56d30abcf13c418cda5d44d736bfcbeae467": "50efb429b0decfc62f785998ec82dbab",
".git/objects/83/f784ea5765c56f4278e279ffe0cbb93daa22b2": "60f634400e12528878d55bf8ec15e3bb",
".git/objects/84/49047955c6ebadf33ef5509112329a4c7a4f2e": "b5c14456292159b42711d80c05fd47f4",
".git/objects/88/4befe488869624cd98aa5415ccebde98603494": "7776d9d72546a370254bde425ef79ab6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/c180978d7b41bfd308d52d06750915f4f4e25a": "fce91a86274ff1c2c3285f5236c32592",
".git/objects/8d/c20ff00ca2c1f7e3a851b77a02ed224aea78b8": "e7981a1a743f0e25b8be44a7aec3596f",
".git/objects/96/e72f228dbfdcd132c382c6b023f4555471fe39": "abc2be10821b1e37d68831b7272c91bf",
".git/objects/9c/4436415f55aeabf7e0a7fa28dc485fd2a65cb2": "7926ab9aa570d4d49d3b41861c568015",
".git/objects/9c/a07eb5789842da1eb415f1927e403d9492a125": "b80f33514427490bfeb05f1513e4b825",
".git/objects/9f/b2339b3d09ff15f034ddc542596427d835ec89": "991a4205c0551e1a820cf3cadf52786a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/598205b4320226ceade1c06db29120e2742cc0": "7f519145372bac854a53ec4c6edae367",
".git/objects/a7/b1b91615d50672d14a65241bbd8da4adca380e": "7dd17cdb64f2ea2b075da18c01b12639",
".git/objects/a7/f4c15755e493fcebe33e2d78b2afcbb14dc07e": "c604f6f374be22793ad172ade8a7f15f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/fff5376a3b6775ef750776d9b0518435b9c4fc": "abce2a2593a714f4c8288eab08bbfc1a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/8340d1f1172eeb7113b755311b9aa51df69397": "f84208a01e65c65add1de197918126e5",
".git/objects/ac/9e37e83d1c6638ca9361c904a8c0c699f7f249": "3da2eef0be4dc97e42a6dc253d2bd7f2",
".git/objects/af/78276aad98e4d0428d38ee51ee859ececbe6e2": "4a339eb3adecddfa74f066f368d504da",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/9d01b10f0891617b785e66ee3f6fb42ee24f76": "d9bb12b5998c5ae30d71dbdef1b79976",
".git/objects/b9/a6bf14ca09b6f9b361ff3a930a8c4462d3df03": "c0df723fb4a43eb4ae57f4b789c55af6",
".git/objects/ba/b818f1bcf51ac686051de87c062f89395a81f9": "7e00bca228f8eb8674bf064dbbef2a46",
".git/objects/be/d2eaf4d11a8fd1df0189fecd4255b6d63bc354": "2eeb20e34fccce20b4704d0c3dd352f2",
".git/objects/c0/85cb5e403d042a3b47b01045b7dba31fda2ca3": "6159d03b8b552e1431194260aad5c35d",
".git/objects/c6/b267d361ade2dd20538bda3e1f79ad0b5b72d9": "bc128438453e6fcf6c420dfbb1f79e4a",
".git/objects/c7/532c0fa6b5a915c868365f31181567d3ccc0b3": "ad6e90f9a0753f14c90506a836d75354",
".git/objects/cc/b5bb503869b3fa48f028a351e10f26979d79c0": "ac000dab6bd133641c5069f1dfc1597b",
".git/objects/d1/72b7413caacca06f99c2076f592badf7d2c769": "73c4324be859cd21b46f237d2d2abedb",
".git/objects/d2/d526ce1e1491f7d85ee4750811fb691de2569c": "e10810d83543e2a61135a06ddbd59602",
".git/objects/d4/697f5f6cebe362deed589c96c72464e5979513": "6c8d9f4a4ea628cb5c02bfafd7c748d1",
".git/objects/d5/29cc020ce78031d05aa74ff4b08618690e9bd6": "31cb3b9fde1d544c54ed1577a14663b7",
".git/objects/d5/db1b934f51edadf8c4fd3ceb5aa00a070b7d97": "e7d9b0b91e507139eaa82b4dbe8630e5",
".git/objects/d6/28c1644e64162e1e8caca1d3921c5c906a5b6f": "bf083d2625fb48636a9ab76f5dd1faa1",
".git/objects/d9/fc4766d9f9e494a137bf86b971eb3be96b435d": "1bde98c1ca37e8f5690d6f9cc52a3ede",
".git/objects/dd/f1ba180d5643093efa9684df490e34c16a4c09": "c633e48beb218bf9d16ffc868404fbd6",
".git/objects/e1/43df90b29dd053a87407663891953e39fd1843": "21ccbb16f955ae5da654f0ddce44b094",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/bde51c04fab8926e3e7bfa2002a8097ce541e6": "2624df6989fce3d7189386f0434e1473",
".git/objects/f3/b4de0fd4870cbb8a1abc357831585dc3eb6a86": "9147468e30a2a66cf4f13c852a9dfaea",
".git/objects/fa/28851d018bac1d7c1836dcd2029a1b029e722b": "3d5ae94188d08bb577bc0f369bdf2be8",
".git/objects/fb/ccd97adc5db5ac106fe52feac0d8bad2995082": "1cc5f037d7cb7312495c8dfcadb90140",
".git/objects/fe/e27f928967d3a5539d3ed367fd95cb9064cee2": "96caee0cc24a82db409fff34bb3fb529",
".git/objects/ff/b6904e65203a50a98b1e9f0fd6765eda32b09b": "790c5439d9990bd9ecf9da6807c32fe7",
".git/ORIG_HEAD": "ff3907d362a9f5cc2fbf0915264d9ab8",
".git/refs/heads/main": "ff3907d362a9f5cc2fbf0915264d9ab8",
".git/refs/remotes/origin/main": "ff3907d362a9f5cc2fbf0915264d9ab8",
".git/refs/remotes/upstream/main": "fef9e86c70f4a38d3d9134cbd1502996",
".git/refs/stash": "f50fd1455e034e8c44a617ff91edc2e6",
"assets/AssetManifest.json": "69b30a74506f14fef20ede1e66dcba01",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/lib/assets/Wheely.png": "7937486791e42e678ed3bb00a9704ff8",
"assets/lib/assets/willi.png": "e76fb092cb690e4c5a214629f5d6ebaf",
"assets/NOTICES": "eecf0ccc27c14a1285f28391f25c3c4f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "7fa56dc27694c28f0b8f7b437612ed70",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "5164263565b37ab266899aabfae8c314",
"/": "5164263565b37ab266899aabfae8c314",
"main.dart.js": "de93ab5ba754082cee1445cb42c66542",
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
