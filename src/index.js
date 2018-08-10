import STUFF from "./Stuff";
import util from "./util/Util";

let start = function() {
  console.log("start");
};

let wait = setInterval(() => {
  switch (document.readyState) {
    case "complete":
    case "loaded":
      break;
    default:
      return;
  }
  clearInterval(wait);
  start();
}, 1);
