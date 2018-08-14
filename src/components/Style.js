import STUFF from "../Stuff";

export default class {
  initialize() {
    this.element = null;
    this.css = "";
    for (let i = 0; i < STUFF.CSS.length; i++) {
      this.css = this.css + STUFF.CSS[i];
    }
  }
  create() {
    this.element = document.createElement("style");
    this.element.setAttribute("type", "text/css");
  }
  append() {
    let body = document.getElementsByTagName("body")[0];
    if (this.element.styleSheet) {
      this.element.styleSheet.cssText = this.css;
    } else {
      this.element.appendChild(document.createTextNode(this.css));
    }
    body.appendChild(this.element);
  }
  remove() {
    let body = document.getElementsByTagName("body")[0];
    if (this.element) {
      body.removeChild(this.element);
    }
  }
}
