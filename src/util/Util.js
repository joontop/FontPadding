export default (() => {
  let isTouchDevice = () => {
    return (
      navigator.maxTouchPoints || "ontouchstart" in document.documentElement
    );
  };

  let getScrollTop = () => {
    return (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    );
  };

  let getOffsetTop = element => {
    let value = 0;
    if (element.offsetParent) {
      do {
        value += element.offsetTop;
      } while ((element = element.offsetParent));
    }
    return value;
  };

  let getOffsetLeft = element => {
    let value = 0;
    if (element.offsetParent) {
      do {
        value += element.offsetLeft;
      } while ((element = element.offsetParent));
    }
    return value;
  };

  let getRgbToHex = (r, g, b) => {
    if (r > 255 || g > 255 || b > 255) {
      throw "Invalid Color Component";
    }
    return ((r << 16) | (g << 8) | b).toString(16);
  };

  return {
    isTouchDevice,
    getScrollTop,
    getOffsetTop,
    getOffsetLeft,
    getRgbToHex
  };
})();
