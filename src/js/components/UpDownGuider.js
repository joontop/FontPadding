import STUFF from '../Stuff'

export default class {
  constructor () {
    this.store = {}
  }

  init() {
    this.upElement = null;
    this.downElement = null;
  }

  create() {
    this.upElement = document.createElement('div');
    this.downElement = document.createElement('div');
    this.upElement.setAttribute('id', STUFF.UP_ID);
    this.downElement.setAttribute('id', STUFF.DOWN_ID);
  }

  append() {
    if (!document.getElementsByTagName('body')[0]) {
      return;
    }
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(this.upElement);
    body.appendChild(this.downElement);
  }

  remove() {
    if (!document.getElementsByTagName('body')[0]) {
      return;
    }
    var body = document.getElementsByTagName('body')[0];
    if (this.upElement && this.downElement) {
      body.removeChild(this.upElement);
      body.removeChild(this.downElement);
    }
  }

  set() {
    this.upElement.innerHTML = this.store.value.upSpacing || 0;
    this.downElement.innerHTML = this.store.value.downSpacing || 0;
    this.upElement.style.top = this.store.position.upTop || 0;
    this.upElement.style.left = this.store.position.upLeft || 0;
    this.downElement.style.top = this.store.position.downTop || 0;
    this.downElement.style.left = this.store.position.downLeft || 0;
  }

  show() {

    this.upElement.style.display = 'block';
    this.downElement.style.display = 'block';

  }

  hide() {
    if (this.upElement && this.downElement) {
      this.upElement.style.display = 'none';
      this.downElement.style.display = 'none';
    }
  }
}