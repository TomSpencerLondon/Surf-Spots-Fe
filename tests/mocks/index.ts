/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */

if (typeof window === "undefined") {
  // console.log("Inside server");
  // const { server } = require("./server");
  // server.listen();
} else {
  const { worker } = require("./browser");
  worker.start();
}

export {};
