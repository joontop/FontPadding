import STUFF from '../Stuff'

export default class {
  constructor () {
    this.store = {}
  }

  init() {
    this.element = null;
    this.create();
  }

  create() {
    this.element = document.createElement('div');
    this.element.setAttribute('id', STUFF.TEXT_ID);
  }

  append() {
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(this.element);
  }

  remove() {
    var body = document.getElementsByTagName('body')[0];
    if (this.element) {
      body.appendChild(this.element);
    }
  }

  set() {
    this.element.innerHTML = this.store.texts || '';
    this.element.style.fontFamily = this.store.styles.fontFamily || '';
    this.element.style.fontSize = this.store.styles.fontSize || 0;
    this.element.style.fontWeight = this.store.styles.fontWeight || 0;
    this.element.style.lineHeight = this.store.styles.lineHeight || 0;
  }

  show() {
    var body = document.querySelector('body');
    body.appendChild(this.element);
    this.store.width = this.element.offsetWidth;
    this.store.height = this.element.offsetHeight;
  }

  hide() {
    var body = document.querySelector('body');
    if (document.getElementById(STUFF.TEXT_ID)) {
      body.removeChild(this.element);
      this.store.width = 0;
      this.store.height = 0;
    }
  }
}