import STUFF from '../Stuff'

export default class {
    constructor () {
      this.state = {};
      this.store = {};
    }

  initialize () {
    this.element = null;
    this.toggler = null;
    this.turnner = null;
    this.information = null;
  }

  create () {
    this.element = document.createElement('div');
    this.toggler = document.createElement('button');
    this.turnner = document.createElement('button');
    this.information = document.createElement('div');
    this.element.setAttribute('id', STUFF.DRAWER_ID);
    this.toggler.setAttribute('id', STUFF.DRAWER_TOGGLER_ID);
    this.turnner.setAttribute('id', STUFF.DRAWER_TURNNER_ID);
    this.information.setAttribute('id', STUFF.DRAWER_INFORMATION_ID);
    this.element.appendChild(this.toggler);
    this.element.appendChild(this.turnner);
    this.element.appendChild(this.information);
    this.set();
    this.setEvent();
  }

  append () {
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(this.element);
  }

  remove () {
    var body = document.getElementsByTagName('body')[0];
    if (this.element) {
      body.removeChild(this.element);
    }
  }

  set () {
    this.informationHide();

    var html = '<h2 class="__fontPadding_modal_title">Font Padding</h2>';
    html += '<dl class="__fontPadding_modal_dl">';
    html += '<dt class="__fontPadding_modal_dt">font-family</dt>';
    html += '<dd class="__fontPadding_modal_dd">' + this.store.styles.fontFamily + '</dd>';
    html += '</dl>';
    html += '<dl class="__fontPadding_modal_dl">';
    html += '<dt class="__fontPadding_modal_dt">font-size</dt>';
    html += '<dd class="__fontPadding_modal_dd">' + this.store.styles.fontSize + '</dd>';
    html += '</dl>';
    html += '<dl class="__fontPadding_modal_dl">';
    html += '<dt class="__fontPadding_modal_dt">font-weight</dt>';
    html += '<dd class="__fontPadding_modal_dd">' + this.store.styles.fontWeight + '</dd>';
    html += '</dl>';
    html += '<dl class="__fontPadding_modal_dl">';
    html += '<dt class="__fontPadding_modal_dt">line-height</dt>';
    html += '<dd class="__fontPadding_modal_dd">' + this.store.styles.lineHeight + '</dd>';
    html += '</dl>';
    html += '<dl class="__fontPadding_modal_dl">';
    html += '<dt class="__fontPadding_modal_dt">upSpace</dt>';
    html += '<dd class="__fontPadding_modal_dd">' + this.store.value.upSpacing + '</dd>';
    html += '</dl>';
    html += '<dl class="__fontPadding_modal_dl">';
    html += '<dt class="__fontPadding_modal_dt">DownSpace</dt>';
    html += '<dd class="__fontPadding_modal_dd">' + this.store.value.downSpacing + '</dd>';
    html += '</dl>';
    html += '<dl class="__fontPadding_modal_dl">';
    html += '<dt class="__fontPadding_modal_dt">BetweenSpace</dt>';
    html += '<dd class="__fontPadding_modal_dd">' + this.store.value.betweenSpacing + '</dd>';
    html += '</dl>';
    html += '<dl class="__fontPadding_modal_dl">';
    html += '<dt class="__fontPadding_modal_dt">fontHeight</dt>';
    html += '<dd class="__fontPadding_modal_dd">' + this.store.value.fontHeight + '</dd>';
    html += '</dl>';

    this.information.innerHTML = html;
    this.element.appendChild(this.information);
  }

  setEvent() {
    this.toggler.addEventListener('click', this.onClickToggler.bind(this));
    this.turnner.addEventListener('click', this.onClickTurnner.bind(this));
  }

  show() {
    this.element.classList.add('on');
    this.state.isDrawerShow = true;
  }

  hide() {
    this.element.classList.remove('on');
    this.state.isDrawerShow = false;
  }

  informationHide() {
    if (this.element && this.information) {
      this.element.removeChild(this.information);
    }
  }

  onClickToggler() {
    if (this.state.isDrawerShow) {
      this.hide();
    } else {
      this.show();
    }
  }

  onClickTurnner() {
    if (this.state.isTurnOn) {
      this.turnner.classList.remove('on');
      this.state.isTurnOn = false;
      document.getElementsByTagName('body')[0].style.cursor = '';
    } else {
      this.turnner.classList.add('on');
      this.state.isTurnOn = true;
      document.getElementsByTagName('body')[0].style.cursor = 'pointer';
    }
  }
}