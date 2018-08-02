if (typeof __FontPadding === 'undefined') {
    __FontPadding = {}
}
__FontPadding.Style = (function () {

    var Style = function () {};

    Style.prototype = {
        initialize: function (css) {
            this.style = null;
            this.css = '';
            if (css) {
                for (var i = 0; i < css.length; i++) {
                    this.css = this.css + css[i];
                }
            }
        },
        create: function () {
            this.style = document.createElement('style');
            this.style.setAttribute('type', 'text/css');
        },
        append: function () {
            var body = document.getElementsByTagName('body')[0];
            if (this.style.styleSheet) {
                this.style.styleSheet.cssText = this.css
            } else {
                this.style.appendChild(document.createTextNode(this.css))
            }
            body.appendChild(this.style);
        },
        remove: function () {
            var body = document.getElementsByTagName('body')[0];
            if (this.style) {
                body.removeChild(this.style);
            }
        }
    };

    return Style;

})();