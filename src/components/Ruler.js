import STUFF from "../Stuff";
import util from "../util/Util";

export default class {
  constructor() {
    this.store = {};
  }
  init() {
    this.upElement = null;
    this.downElement = null;
  }
  create() {
    this.upElement = document.createElement("div");
    this.downElement = document.createElement("div");
    this.upElement.setAttribute("id", STUFF.RULER_UP_ID);
    this.downElement.setAttribute("id", STUFF.RULER_DOWN_ID);
  }
  append() {
    let body = document.getElementsByTagName("body")[0];
    body.appendChild(this.upElement);
    body.appendChild(this.downElement);
  }
  remove() {
    let body = document.getElementsByTagName("body")[0];
    if (this.upElement && this.downElement) {
      body.removeChild(this.upElement);
      body.removeChild(this.downElement);
    }
  }
  show() {
    if (this.upElement && this.downElement) {
      this.upElement.style.setProperty("display", "block");
      this.downElement.style.setProperty("display", "block");
    }
  }
  hide() {
    if (this.upElement && this.downElement) {
      this.upElement.style.setProperty("display", "none");
      this.downElement.style.setProperty("display", "none");
    }
  }
}
