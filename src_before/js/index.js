(function () {

    var FontPadding = __FontPadding || {};
    var STUFF = FontPadding && FontPadding.Stuff;
    var Util = FontPadding && FontPadding.Util;

    var fontPaddingState = {
        isPossible: true,
        isTurnOn: false,
        isDrawerShow: false
    };

    var fontPaddingStore = {
        currentScrollTop: 0,
        element: null,
        width: 0,
        height: 0,
        texts: '',
        position: {
            upTop: 0,
            downTop: 0,
            upLeft: 0,
            downLeft: 0
        },
        styles: {
            fontSize: 0,
            paddingTop: 0,
            paddingBottom: 0,
            fontFamily: '',
            fontWeight: 0,
            lineHeight: 0
        },
        value: {
            upSpacing: 0,
            downSpacing: 0,
            betweenSpacing: 0,
            fontHeight: 0
        }
    };

    try {
        var style = new FontPadding.Style();
        style.initialize(STUFF.CSS);
        style.create();
        style.append();

        var drawer = new FontPadding.Drawer();
        drawer.state = fontPaddingState;
        drawer.store = fontPaddingStore;
        drawer.initialize();
        drawer.create();
        drawer.append();

        var upDownGuider = new FontPadding.UpDownGuider();
        upDownGuider.state = fontPaddingState;
        upDownGuider.store = fontPaddingStore;
        upDownGuider.init();
        upDownGuider.create();
        upDownGuider.append();

        var canvas = new FontPadding.Canvas();
        canvas.state = fontPaddingState;
        canvas.store = fontPaddingStore;
        canvas.init();

        var textGuider = new FontPadding.TextGuider();
        textGuider.state = fontPaddingState;
        textGuider.store = fontPaddingStore;
        textGuider.init();

        var txtNodes = Util.getDeepText(document.querySelector('body'));

        function actionFontPadding () {

            setTimeout(function () {
                textGuider.hide();
                textGuider.set();
                upDownGuider.hide();
            }.bind(this), 0);

            setTimeout(function () {
                textGuider.show();
            }.bind(this), 10);

            setTimeout(function () {
                canvas.create(textGuider.element);
            }.bind(this), 20);

            setTimeout(function () {
                canvas.calculate();
            }.bind(this), 30);

            setTimeout(function () {
                canvas.hide();
                textGuider.hide();
            }.bind(this), 40);

            setTimeout(function () {
                window.scroll(0, fontPaddingStore.currentScrollTop);
                upDownGuider.set();
                upDownGuider.show();
                drawer.set();
            }.bind(this), 50);
            setTimeout(function () {
                fontPaddingState.isPossible = true;
            }.bind(this), 60);

        }

        function setFontPadding (e) {
            if (fontPaddingState.isTurnOn && fontPaddingState.isPossible) {
                e.preventDefault();
                if (Util.isDrawerChild(e.target, document.getElementById(STUFF.DRAWER_ID))) {
                } else {
                    fontPaddingStore.currentScrollTop = Util.getScrollTop();
                    for (var i = 0; i < txtNodes.length; i++) {
                        if (e.target === txtNodes[i].parentNode) {
                            fontPaddingStore.element = e.target;
                            if (e.target.childNodes.length > 1) {
                                return;
                            }
                            fontPaddingState.isPossible = false;
                            fontPaddingStore.texts = e.target.childNodes[0].textContent + '<br>' + e.target.childNodes[0].textContent;
                            fontPaddingStore.styles = {
                                fontSize: window.getComputedStyle(e.target, null).getPropertyValue('font-size'),
                                paddingTop: window.getComputedStyle(e.target, null).getPropertyValue('padding-top'),
                                paddingBottom: window.getComputedStyle(e.target, null).getPropertyValue('padding-bottom'),
                                fontFamily: window.getComputedStyle(e.target, null).getPropertyValue('font-family'),
                                fontWeight: window.getComputedStyle(e.target, null).getPropertyValue('font-weight'),
                                lineHeight: window.getComputedStyle(e.target, null).getPropertyValue('line-height')
                            };
                            fontPaddingStore.position = {
                                upTop: Util.getOffsetY(e.target) - 20 + 'px',
                                downTop: Util.getOffsetY(e.target) + e.target.offsetHeight + 'px',
                                upLeft: Util.getOffsetX(e.target) + (e.target.offsetWidth / 2) + 'px',
                                downLeft: Util.getOffsetX(e.target) + (e.target.offsetWidth / 2) + 'px'
                            };
                            actionFontPadding();
                        }
                    }
                }
            } else {
                e.stopPropagation();
            }
        }
        if (Util.isTouchDevice()) {
            document.addEventListener('touchstart', setFontPadding.bind(this));
        } else {
            document.addEventListener('click', setFontPadding.bind(this));
        }
    } catch (e) {
        console.log(e);
    }

})();