import html2canvas from 'html2canvas';
import STUFF from '../Stuff'
import Util from '../Util'

export default class {
  constructor () {
    this.store = {};
  }

  init () {
    this.element = null;
  }

  create (target) {
    return html2canvas(target, {
      allowTaint: false,
      logging: false,
      width: this.store.width,
      height: this.store.height
    }).then(canvas => {
      var body = document.getElementsByTagName('body')[0];
      canvas.setAttribute('id', STUFF.CANVAS_ID);
      body.appendChild(canvas);
      this.element = canvas;
    });
  }

  calculate () {
    var ctx = this.element.getContext('2d');
    var lineY = [];
    var ry = [];
    var xy = [];
    var arrayWhite = [];
    var dct = 0;
    var r = [];
    var rdct = 0;
    var dd = [];
    for (var i = 0; i < this.store.height; i++) {
      xy[i] = [];
      for (var j = 0; j < this.store.width; j++) {
        dd[j] = '#ffffff';
        var imgData = ctx.getImageData(j, i, 1, 1).data;
        var hex = '#' + ('000000' + Util.getRgbToHex(imgData[0], imgData[1], imgData[2])).slice(-6);
        xy[i][j] = hex;
        if (hex === '#ff0000') {
          lineY.push(i);
        } else if (hex !== '#ffffff') {
          ry.push(i);
        }
      }
      if (xy[i].indexOf('#ffffff') !== -1 && xy[i].sort().join(',') === dd.sort().join(',')) {
        arrayWhite[dct] = i;
        dct++;
      }
    }
    for (var l = 0; l < arrayWhite.length; l++) {
      if (arrayWhite[l + 1] - arrayWhite[l] != 1 && rdct < 4) {
        r[rdct] = arrayWhite[l];
        rdct++;
        r[rdct] = arrayWhite[l + 1];
        rdct++;
      }
    }
    this.store.value = {
      upSpacing: Util.getMin(ry) - (Util.getMin(lineY) + 1) || 0,
      downSpacing: (Util.getMax(lineY) - 1) - Util.getMax(ry) || 0,
      betweenSpacing: r[2] - r[1] + 1 || 0,
      fontHeight: r[1] - r[0] - 1 || 0
    };

  }
  hide () {
    var body = document.getElementsByTagName('body')[0];
    if (body && this.element) {
      body.removeChild(this.element);
    }
  }
}