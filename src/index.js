import STUFF from "./Stuff";
import util from "./util/Util";

import Canvas from "./components/Canvas";
import Style from "./components/Style";

let start = function() {
  let state = {
    isSwitchOn: false,
    isDrawerShow: false
  };
  let store = {};
  const headElement = document.getElementsByTagName("head")[0];
  const bodyElement = document.getElementsByTagName("body")[0];

  // 루트에 style 태그 넣기

  // Drawer 만들기

  // Up/Down 가이더 넣기

  // 텍스트 가이더 넣기

  // 캔버스 생성

  // 액션

  // 클릭한 요소를 텍스트 가이더에 가져가서 쇼를 한다.

  // 텍스트 가이더를 캔버스로 가져간다.

  // 캔버스를 계산한다.

  // 업다운 가이더를 쇼한다.
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
