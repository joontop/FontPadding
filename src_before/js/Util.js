if (typeof __FontPadding === 'undefined') {
    __FontPadding = {}
}
__FontPadding.Util = (function () {

    isTouchDevice = function () {
        return (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
    };

    getScrollTop = function () {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    };

    isDrawerChild = function (target, drawer) {
        return (target === drawer || target.parentNode === drawer || target.parentNode.parentNode === drawer || target.parentNode.parentNode.parentNode === drawer);
    };

    getMin = function (obj) {
        var min = obj[0];
        for (var i = 0; i < obj.length; i++) {
            min = Math.min(min, obj[i]);
        }
        return min;
    };

    getMax = function (obj) {
        var max = obj[0];
        for (var i = 0; i < obj.length; i++) {
            max = Math.max(max, obj[i]);
        }
        return max;
    };

    getOffsetX = function (obj) {
        var value = 0;
        if (obj.offsetParent) {
            do {
                value += obj.offsetLeft;
            } while (obj = obj.offsetParent);
        }
        return value;
    };

    getOffsetY = function (obj) {
        var value = 0;
        if (obj.offsetParent) {
            do {
                value += obj.offsetTop;
            } while (obj = obj.offsetParent);
        }
        return value;
    };

    getRgbToHex = function (r, g, b) {
        if (r > 255 || g > 255 || b > 255) {
            throw 'Invalid Color Component';
        }
        return ((r << 16) | (g << 8) | b).toString(16);
    };

    getDeepText = function (node) {
        var arr = [];
        if (node) {
            node = node.firstChild;
            while (node != null) {
                if (node.nodeType == 3) arr[arr.length] = node;
                else arr = arr.concat(getDeepText(node));
                node = node.nextSibling;
            }
        }
        return arr;
    };

    return this;

})();