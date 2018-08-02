export default class {
  initialize(css) {
    this.style = null;
    this.css = '';
    if (css) {
      for (var i = 0; i < css.length; i++) {
        this.css = this.css + css[i];
      }
    }
  }

  create() {
    this.style = document.createElement('style');
    this.style.setAttribute('type', 'text/css');
  }

  append() {
    var body = document.getElementsByTagName('body')[0];
    if (this.style.styleSheet) {
      this.style.styleSheet.cssText = this.css
    } else {
      this.style.appendChild(document.createTextNode(this.css))
    }
    body.appendChild(this.style);
  }

  remove() {
    var body = document.getElementsByTagName('body')[0];
    if (this.style) {
      body.removeChild(this.style);
    }
  }
}