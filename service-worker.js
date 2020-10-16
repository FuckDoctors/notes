/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about/index.html",
    "revision": "8f0c27154acbb61916507bf0e91456de"
  },
  {
    "url": "account/avatar/avatar2.jpg",
    "revision": "929b19fef9e25bd186eea10cc26f29f4"
  },
  {
    "url": "account/icons.svg",
    "revision": "c8de0f0e68e6e6775ce4e4f75d1c704b"
  },
  {
    "url": "assets/css/0.styles.2964c8f5.css",
    "revision": "beec7af63408b3b70efd7508e7138f80"
  },
  {
    "url": "assets/img/1-4.figure01.86b23a43.png",
    "revision": "86b23a43bb5d93802dc95bb589eb949b"
  },
  {
    "url": "assets/img/2-2.figure01.5bbc4cd8.png",
    "revision": "5bbc4cd8a6768a9d9118d350f3de6816"
  },
  {
    "url": "assets/img/3-1.use-strict.5d348d73.png",
    "revision": "5d348d7378f2df231b06e3fe97020eac"
  },
  {
    "url": "assets/img/4-1.structure.0f82387b.png",
    "revision": "0f82387b39aab037c4f0e548d8d2bc09"
  },
  {
    "url": "assets/img/4-2.prototype-01.c27ca880.png",
    "revision": "c27ca880cacdea676ac239681ec3d7d2"
  },
  {
    "url": "assets/img/4-2.prototype-02.3b437f8d.png",
    "revision": "3b437f8d698913cc32854b91215bc142"
  },
  {
    "url": "assets/img/4-2.prototype-03.13034d2b.png",
    "revision": "13034d2bfaa829c5535d6d3f7c2be077"
  },
  {
    "url": "assets/img/4-2.prototype-04.0ce03d28.png",
    "revision": "0ce03d2820ba472a058d08290fcd5e71"
  },
  {
    "url": "assets/img/4-4-get-set-prototype.6ac60004.png",
    "revision": "6ac60004a3c16d41a4f847e4a0aa256f"
  },
  {
    "url": "assets/img/4-5-properties.635940d3.png",
    "revision": "635940d39053db72e91f85c42ac043e0"
  },
  {
    "url": "assets/img/4-6-proto.c0a829db.png",
    "revision": "c0a829db259c27a6bedaa246c1992573"
  },
  {
    "url": "assets/img/http-https-ssh.ef67756c.png",
    "revision": "ef67756cc0f44af68496d0cd08ed0c79"
  },
  {
    "url": "assets/img/ipv6-settings.1ef357e1.png",
    "revision": "1ef357e1335a08f17a712b503b5c8e2e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.bb9fa5a4.js",
    "revision": "a5a17c08448977eda83f4dcc07cc59e9"
  },
  {
    "url": "assets/js/10.ba79732c.js",
    "revision": "b96fa390d05dff3c6e21f7d052d46c0e"
  },
  {
    "url": "assets/js/11.7c8f42f0.js",
    "revision": "60c19c3d1c5587ba1244ec93b6d22fb4"
  },
  {
    "url": "assets/js/12.a9b023bd.js",
    "revision": "4967b090cbdd55c6ccea947e93d824ab"
  },
  {
    "url": "assets/js/13.f5d6d5d1.js",
    "revision": "f30e13ce4465070d3fe02967599ca2e2"
  },
  {
    "url": "assets/js/14.ee542df5.js",
    "revision": "0902e8ddd0fa35f1821fc34c66906634"
  },
  {
    "url": "assets/js/15.58655b12.js",
    "revision": "fbad90203d09b5ed94cd9b19333571bf"
  },
  {
    "url": "assets/js/16.55bc7d89.js",
    "revision": "a370dd544ce52b0bef458bcc8e43ebf6"
  },
  {
    "url": "assets/js/17.1e932422.js",
    "revision": "8e8e826444fe35d34956351bd216afa6"
  },
  {
    "url": "assets/js/18.bc693f16.js",
    "revision": "8774587f50d35a763726773b5fdff64b"
  },
  {
    "url": "assets/js/19.a471c475.js",
    "revision": "fc413b429a9e230b9b0a3b94b0b830c0"
  },
  {
    "url": "assets/js/2.8c4a855a.js",
    "revision": "2cb50528f34405bb01163e322ef1a5c9"
  },
  {
    "url": "assets/js/20.2d6d3503.js",
    "revision": "fcdcba6e73485f8fc72c09e008896afa"
  },
  {
    "url": "assets/js/21.dd2fc17a.js",
    "revision": "bab9b010c9b15d7be6658242e8df3369"
  },
  {
    "url": "assets/js/22.9132bfbd.js",
    "revision": "956b53ec56676aca0c2017b016a52144"
  },
  {
    "url": "assets/js/23.0a543e8c.js",
    "revision": "67c703cefc13296b6a4d277420b2adfd"
  },
  {
    "url": "assets/js/24.2ca6e4e6.js",
    "revision": "16e642f085d1bd4d20fb1eeafbd04f4d"
  },
  {
    "url": "assets/js/25.61c84ce4.js",
    "revision": "21afbd0ae67ce6d9809cd5a21e8e3b1b"
  },
  {
    "url": "assets/js/26.599fe3eb.js",
    "revision": "4d979bc2dbd5975cc559ec76b5605cd0"
  },
  {
    "url": "assets/js/27.2aa3dcee.js",
    "revision": "a110be956e54d9f03a84f6f53b87a70c"
  },
  {
    "url": "assets/js/28.61a005f6.js",
    "revision": "221ce78bce21a87f826f365210ba0a0b"
  },
  {
    "url": "assets/js/29.6fa61929.js",
    "revision": "e7b3e5c976caf2d50788c8e3f50d423f"
  },
  {
    "url": "assets/js/3.e89252c6.js",
    "revision": "f3d257cbf1f861cffa83036248266e08"
  },
  {
    "url": "assets/js/30.75392a89.js",
    "revision": "24151650961674c0568bcc4c1ef13d65"
  },
  {
    "url": "assets/js/31.63f194a7.js",
    "revision": "eb48f6224c9dad9fce565f127f431e0b"
  },
  {
    "url": "assets/js/32.1e94a254.js",
    "revision": "ac33bf0f6bd69a2b136420a98ac65a51"
  },
  {
    "url": "assets/js/33.52b024be.js",
    "revision": "a00a3f1a0abb858c9298c88482a683b6"
  },
  {
    "url": "assets/js/34.2d73da57.js",
    "revision": "58d7e3db7548bef32e6a6e17424d5144"
  },
  {
    "url": "assets/js/35.7a175280.js",
    "revision": "aa7ffb3dcac1d19973459dbc1c21ca4c"
  },
  {
    "url": "assets/js/36.123f17d3.js",
    "revision": "a0404599f81d4642d4fa8d04aaacc0ec"
  },
  {
    "url": "assets/js/37.5f914db0.js",
    "revision": "d7a785721479aa0ebe638502a55349e9"
  },
  {
    "url": "assets/js/38.1c9a69cf.js",
    "revision": "251ef86fd5cb8e8e058a50c582dbf507"
  },
  {
    "url": "assets/js/39.ced38180.js",
    "revision": "bb8b612e7ce3ed6fdfed55b786b8604f"
  },
  {
    "url": "assets/js/40.c9919ab9.js",
    "revision": "5ff43f4d11af07a98218844da40e59fa"
  },
  {
    "url": "assets/js/41.ab3eb77d.js",
    "revision": "ac0fc3ecb56456fc7725cd7c7fb9c216"
  },
  {
    "url": "assets/js/42.a433092f.js",
    "revision": "6611e80177b93e90668bbca25627c368"
  },
  {
    "url": "assets/js/43.3910c30e.js",
    "revision": "6df4c16afa7c0aa8e88c071b4a848098"
  },
  {
    "url": "assets/js/44.6b10e61e.js",
    "revision": "83e3704d81040a30b1143ab0417f3681"
  },
  {
    "url": "assets/js/45.a37f2889.js",
    "revision": "b4626c7349dc592be2aee3fafcdc7ede"
  },
  {
    "url": "assets/js/46.f7e5fecd.js",
    "revision": "010cb259a615addd996074d0067f8eb1"
  },
  {
    "url": "assets/js/47.32e9c790.js",
    "revision": "38e423bf1b50c555d4491e15f7962632"
  },
  {
    "url": "assets/js/48.5032ae7d.js",
    "revision": "d3e46cec708ea26f375eac18dead6a51"
  },
  {
    "url": "assets/js/49.ba021122.js",
    "revision": "666d6e643a6f54d7a71e2bbf250086bb"
  },
  {
    "url": "assets/js/5.48f468c1.js",
    "revision": "8948a017975cefdcf6dee7f46eb6fd39"
  },
  {
    "url": "assets/js/6.23ff53d5.js",
    "revision": "b3d6d8fcd6191cb283a04c244ffec133"
  },
  {
    "url": "assets/js/7.aedd61a3.js",
    "revision": "4ca05ebe4fa5acd13702b6eee8b00653"
  },
  {
    "url": "assets/js/8.328a5cd9.js",
    "revision": "6590e292a50cd832f5116e4bed56bfff"
  },
  {
    "url": "assets/js/9.24dbc466.js",
    "revision": "4ba77761b05de8d3cf509700225c9ded"
  },
  {
    "url": "assets/js/app.c8a5a8e3.js",
    "revision": "d8b16c500d217c4b53a05f6ab7001bf3"
  },
  {
    "url": "blog/2019/12/03/vuepress-blog-hello-world/index.html",
    "revision": "fed2a8e2311db6b5e44dfded1c1f4e97"
  },
  {
    "url": "blog/index.html",
    "revision": "d807e855d97cd48f934d33c524e36c8a"
  },
  {
    "url": "en/about/index.html",
    "revision": "355d8dbed5f7672401d7c3e8f54f4869"
  },
  {
    "url": "en/blog/2019/12/03/vuepress-blog-hello-world/index.html",
    "revision": "be72c24c41e3fd5ba518500449ab3223"
  },
  {
    "url": "en/blog/index.html",
    "revision": "b98de293a7774d5cd76abf37465b74f7"
  },
  {
    "url": "en/index.html",
    "revision": "ae44dc0c3d617cced7ff39978d290544"
  },
  {
    "url": "en/notes/fe/index.html",
    "revision": "86a1d5aa303ba79358f98f1a20468d84"
  },
  {
    "url": "en/notes/index.html",
    "revision": "3c868f445c47b2e9a5ef82ae023bbb12"
  },
  {
    "url": "en/tag/docker/index.html",
    "revision": "2acf5d8393cb1b170ff74cfda5b100e1"
  },
  {
    "url": "en/tag/index.html",
    "revision": "bd86089797d1ddd3c2ee0903a6a80954"
  },
  {
    "url": "en/tag/js/index.html",
    "revision": "7c355f074cdcef4833e1615cfecf34c3"
  },
  {
    "url": "en/tag/vuepress-blog/index.html",
    "revision": "9b1414d80f72070229e7aa083d74e0a9"
  },
  {
    "url": "en/tag/vuepress/index.html",
    "revision": "e933b696eebc1afb137b76b180e87da1"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/documents.png",
    "revision": "dfd417ed705dff1e36a4a3ad3cb55ec5"
  },
  {
    "url": "icons/faq.png",
    "revision": "b74113ee27ad5fa10cff6a975297974d"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "icons/share.png",
    "revision": "3fc03e47188e7b4127b21d1c50cb970a"
  },
  {
    "url": "index.html",
    "revision": "af5a15976ad6d0231b892c86c67b1953"
  },
  {
    "url": "live2d/assets/autoload.js",
    "revision": "bafb6f444800830d97d70114b7f7a4d9"
  },
  {
    "url": "live2d/assets/flat-ui-icons-regular.eot",
    "revision": "f1d025e1d5dc1b25678397fcf6ae70d7"
  },
  {
    "url": "live2d/assets/flat-ui-icons-regular.svg",
    "revision": "ffc6ede02a31ec3b6990bfa29c64fdd6"
  },
  {
    "url": "live2d/assets/flat-ui-icons-regular.ttf",
    "revision": "71b22c7da4697bc0680e3f603929faba"
  },
  {
    "url": "live2d/assets/flat-ui-icons-regular.woff",
    "revision": "b850ecca5ab51e9035e6a36eb33b421a"
  },
  {
    "url": "live2d/assets/jquery-ui.min.js",
    "revision": "c15b1008dec3c8967ea657a7bb4baaec"
  },
  {
    "url": "live2d/assets/jquery.min.js",
    "revision": "a09e13ee94d51c524b7e2a728c7d4039"
  },
  {
    "url": "live2d/assets/live2d.js",
    "revision": "4af772ebedff81ae0580babc8a6e7a19"
  },
  {
    "url": "live2d/assets/live2d.min.js",
    "revision": "b82606b349484ab6b696144862b18b5a"
  },
  {
    "url": "live2d/assets/waifu-tips.js",
    "revision": "040289346847a1c193afabdc6939ee16"
  },
  {
    "url": "live2d/assets/waifu-tips.min.js",
    "revision": "c4493543340159a69ebdd9e7b138b3a4"
  },
  {
    "url": "live2d/assets/waifu.css",
    "revision": "41bd8bc01a9c54daf323f7358ef8a87c"
  },
  {
    "url": "live2d/assets/waifu.min.css",
    "revision": "61aabcb59e86d0f84790009f7a83d703"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "notes/be/dotnet/index.html",
    "revision": "925e4c734a83707be38dd9c521fc1897"
  },
  {
    "url": "notes/be/index.html",
    "revision": "c79dbd55bad1eec6c9e42921818a9013"
  },
  {
    "url": "notes/be/java/index.html",
    "revision": "bdb3ba28ee7aab51a6f8931e47996ec9"
  },
  {
    "url": "notes/be/spring/index.html",
    "revision": "308c1aaabb0e002e12ef7300fb5bd7d2"
  },
  {
    "url": "notes/fe/es6/index.html",
    "revision": "cf0bccfdef1213f3e13bc3f0f7c09004"
  },
  {
    "url": "notes/fe/index.html",
    "revision": "2fc83b6eddf30ab0945946b76c5e4108"
  },
  {
    "url": "notes/fe/js/bosn/chapter01.html",
    "revision": "8ad6016db76e00dc2b1efdb0b57199e4"
  },
  {
    "url": "notes/fe/js/bosn/chapter02.html",
    "revision": "ac69fca0ef72df7e11b39ff57b38728c"
  },
  {
    "url": "notes/fe/js/bosn/chapter03.html",
    "revision": "9a94d90e4cd0bb68680aeeb47b71a784"
  },
  {
    "url": "notes/fe/js/bosn/chapter04.html",
    "revision": "72f8864499773da63a86ce1e8fcdb22f"
  },
  {
    "url": "notes/fe/js/bosn/chapter05.html",
    "revision": "1cc414a97cf6cd006f6c52c18753335a"
  },
  {
    "url": "notes/fe/js/bosn/index.html",
    "revision": "41b79d1b07c1f869287266bc4907fa2f"
  },
  {
    "url": "notes/fe/js/index.html",
    "revision": "0ead2cc21fb4154a7f43bdc9e446daf5"
  },
  {
    "url": "notes/fe/js/wangdoc/index.html",
    "revision": "ed4e52fbd7eabbe9415974320330a81a"
  },
  {
    "url": "notes/fe/ts/index.html",
    "revision": "56d7954d6bfaf4490b083ba431345e63"
  },
  {
    "url": "notes/fe/vue/index.html",
    "revision": "8627690274b5ee6bb1503a4a2840e87a"
  },
  {
    "url": "notes/index.html",
    "revision": "31073c331f63c3fc4e8294b9d2f758e9"
  },
  {
    "url": "notes/other/docker/command.html",
    "revision": "ce5fab40eaca78fbef913c783436b47c"
  },
  {
    "url": "notes/other/docker/index.html",
    "revision": "d2d13d3d7ac7ae29dd992af87fe1a79b"
  },
  {
    "url": "notes/other/index.html",
    "revision": "2f652a955dbb5c7cd799934c1454fb0d"
  },
  {
    "url": "notes/other/router/index.html",
    "revision": "0048e09956026c80b4a0386ac943a7f7"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "61b9e809138520b91c0b76b12e9b4f75"
  },
  {
    "url": "tag/index.html",
    "revision": "78ba2eba5bcc428356d46f0fead1692d"
  },
  {
    "url": "tag/js/index.html",
    "revision": "f58b6f276a5a272e57f8d7f76d783287"
  },
  {
    "url": "tag/vuepress-blog/index.html",
    "revision": "e3931fe333db4df0a5f228d4c1a36c72"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "4f2eec3e48c1877c51932deca7389ee6"
  },
  {
    "url": "zhaobc.site/index.html",
    "revision": "a7c35d0d3c802f6a0d04a72706b14f71"
  },
  {
    "url": "zhaobc.site/script.js",
    "revision": "58e3c7757020f349c51970cb3b39de29"
  },
  {
    "url": "zhaobc.site/style.css",
    "revision": "3e686575662c32f6b7752c566ec72649"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
