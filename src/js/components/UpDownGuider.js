if (typeof __FontPadding === 'undefined') {
    __FontPadding = {}
}
__FontPadding.UpDownGuider = (function () {

    var STUFF = __FontPadding.Stuff;

    var UpDownGuider = function () {
        this.store = {};
    };

    UpDownGuider.prototype = {
        init: function () {
            this.upElement = null;
            this.downElement = null;
        },
        create: function () {
            this.upElement = document.createElement('div');
            this.downElement = document.createElement('div');
            this.upElement.setAttribute('id', STUFF.UP_ID);
            this.downElement.setAttribute('id', STUFF.DOWN_ID);
        },
        append: function () {
            if (!document.getElementsByTagName('body')[0]) {
                return;
            }
            var body = document.getElementsByTagName('body')[0];
            body.appendChild(this.upElement);
            body.appendChild(this.downElement);
        },
        remove: function () {
            if (!document.getElementsByTagName('body')[0]) {
                return;
            }
            var body = document.getElementsByTagName('body')[0];
            if (this.upElement && this.downElement) {
                body.removeChild(this.upElement);
                body.removeChild(this.downElement);
            }
        },
        set: function () {
            this.upElement.innerHTML = '<em class="__up1">' + this.store.value.upSpacing + '</em><em class="__up2">px</em>';
            this.downElement.innerHTML = '<em class="__down1">' + this.store.value.downSpacing + '</em><em class="__down2">px</em>';
            this.upElement.style.top = this.store.position.upTop || 0;
            this.upElement.style.left = this.store.position.upLeft || 0;
            this.downElement.style.top = this.store.position.downTop || 0;
            this.downElement.style.left = this.store.position.downLeft || 0;

        },
        show: function () {

            this.upElement.style.display = 'block';
            this.downElement.style.display = 'block';

        },
        hide: function () {
            if (this.upElement && this.downElement) {
                this.upElement.style.display = 'none';
                this.downElement.style.display = 'none';
            }
        }
    };

    return UpDownGuider;

})
();