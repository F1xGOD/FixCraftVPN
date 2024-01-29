// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/uv/service/",
  bare: "/bare/",
  encodeUrl: "https://networkcalc.com/api/encoder/",
  decodeUrl: "https://networkcalc.com/api/encoder/",
  handler: "/uv/uv.handler.js",
  client: "/uv/uv.client.js",
  bundle: "/uv/uv.bundle.js",
  config: "/uv/uv.config.js",
  sw: "/uv/uv.sw.js",
};
