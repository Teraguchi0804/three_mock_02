/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Common = __webpack_require__(1);
	
	var _Common2 = _interopRequireDefault(_Common);
	
	var _Main = __webpack_require__(18);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * fileOverview:
	 * Project:
	 * File: Top
	 * Date:
	 * Author:
	 */
	
	(function () {
	
	  // globalオブジェクト
	  if (window.gb === undefined) window.gb = {};
	  window.gb.in = {}; //instance
	
	  gb.in.common = new _Common2.default();
	  gb.in.main = new _Main2.default();
	})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Common
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Conf = __webpack_require__(2);
	
	var _Conf2 = _interopRequireDefault(_Conf);
	
	var _Util = __webpack_require__(3);
	
	var _Util2 = _interopRequireDefault(_Util);
	
	var _Utils = __webpack_require__(4);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _Func = __webpack_require__(17);
	
	var _Func2 = _interopRequireDefault(_Func);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	'use strict';
	
	var Common = function () {
	  function Common() {
	    _classCallCheck(this, Common);
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Common, [{
	    key: 'setup',
	    value: function setup() {
	
	      /**
	         * @type {Conf} : 初期値の設定・データの配置
	       * @type {Util} : Util関数の初期化
	       * @type {Func} : イベントマネージャーの設置
	       */
	      gb.in.conf = new _Conf2.default();
	      gb.in.u = new _Util2.default();
	      gb.in.f = new _Func2.default();
	
	      gb.in.ut = new _Utils2.default();
	    }
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      // ------------------------------------------------------------
	      //  デバイス・ブラウザ判定
	      //  スマホの向き判定
	      //  ページ情報取得
	      // ------------------------------------------------------------
	
	
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(document).on('ready', this.onReady.bind(this));
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }]);
	
	  return Common;
	}();
	
	exports.default = Common;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * fileOverview:
	 * Project:
	 * File: Conf
	 * Date:
	 * Author:
	 */
	
	// import SoundData from './Data/Sound.js';
	
	var Conf = function () {
	  function Conf() {
	    _classCallCheck(this, Conf);
	
	    // ------------------------------------------------------------
	    //  本番フラグ
	    // ------------------------------------------------------------    
	    this.RELEASE = true;
	    // this.RELEASE = false;
	
	    // ------------------------------------------------------------
	    //  フラグ関連
	    // ------------------------------------------------------------
	    this.FLG = {
	      LOG: true, // ログ出力
	      PARAM: true, // パラメータチェック
	      STATS: true // Stats表示
	    };
	    if (!this.RELEASE) {
	      this.FLG = {
	        LOG: false,
	        PARAM: false,
	        STATS: false
	      };
	    }
	
	    // ------------------------------------------------------------
	    //  基本 width height
	    // ------------------------------------------------------------
	    this.defW = 1300;
	    this.defH = 850;
	
	    this.W = 1200;
	    this.H = 750;
	
	    this.spW = 375;
	    this.spH = 667;
	
	    // ------------------------------------------------------------
	    //  ブレイクポイント
	    // ------------------------------------------------------------
	    this.bp = 768;
	
	    // ------------------------------------------------------------
	    //  mode
	    // ------------------------------------------------------------
	    this.mode = null;
	    this.keys = [{
	      'key': 'movie',
	      'value': ['morning', 'afternoon', 'night']
	    }, {
	      'key': 'data',
	      'value': ['data01', 'data02', 'data03']
	    }, {
	      'key': 'product',
	      'value': ['01']
	    }];
	    this.switchMode();
	
	    // ------------------------------------------------------------
	    //  sound data
	    // ------------------------------------------------------------
	    // this.soundData = new SoundData();
	
	    // ------------------------------------------------------------
	    //  sec02 bg Img Num
	    // ------------------------------------------------------------
	    this.sec02ImgNum = 396;
	
	    // ------------------------------------------------------------
	    //  youtube ID
	    // ------------------------------------------------------------
	    this.youtubeID01 = 'xW2oNpNrKd0';
	    this.youtubeID02 = 't2WeRRdAFeI';
	
	    // ------------------------------------------------------------
	    //  web font loaded
	    // ------------------------------------------------------------
	    this.webFontLoaded = false;
	  }
	
	  _createClass(Conf, [{
	    key: 'switchMode',
	    value: function switchMode() {
	
	      var i, key, len, param, ref, ref1, value;
	
	      ref = location.search.replace('?', '').split('&');
	
	      for (i = 0, len = ref.length; i < len; i++) {
	        param = ref[i];
	        ref1 = param.split('='), key = ref1[0], value = ref1[1];
	
	        for (var j = 0; j < this.keys.length; j++) {
	
	          var obj = this.keys[j];
	
	          // パラメータがキーと一緒だったら
	          if (obj.key === key) {
	
	            // 各値と比較
	            for (var k = 0; k < obj.value.length; k++) {
	
	              var val = obj.value[k];
	
	              // キーをthis.keysのkeyに、valueを比較して同値だったものに
	              if (val === value) this[obj.key] = val;
	            };
	          };
	        };
	      }
	    }
	  }]);
	
	  return Conf;
	}();
	
	exports.default = Conf;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * fileOverview: 便利関数クラス
	 * Project:
	 * File: Util
	 * Date:
	 * Author:
	 */
	
	var Util = function () {
	  function Util() {
	    _classCallCheck(this, Util);
	
	    this.ua = window.navigator.userAgent.toLowerCase(); //useragent
	    this.appV = window.navigator.appVersion.toLowerCase(); //appVersion
	    this.isResSP = null; // responsive sp
	    this.isResPC = null; // responsive pc
	
	    this.isPC = null;
	    this.isSP = null;
	    this.isTAB = null;
	    this.isMB = null;
	
	    this.isIE = null;
	
	    this.isSetSPSize = false;
	
	    this.startTime = null;
	    this.elapsedTime = null;
	    this.now = new Date();
	  }
	
	  /**
	   * Math
	   */
	
	  /**
	   * ランダムな値を返す
	   * @param min : 最小値(int)
	   * @param max : 最大値(int)
	   * @returns {number} : minからmaxまでのランダムな整数(int)
	   */
	
	
	  _createClass(Util, [{
	    key: "random",
	    value: function random(min, max) {
	
	      return Math.floor(Math.random() * (max + 1 - min) + min);
	    }
	
	    /**
	     * ランダムな整数を2つの範囲から取得
	     * @param min1 : 最小値1(int)
	     * @param max1 : 最大値1(int)
	     * @param min2 : 最小値2(int)
	     * @param max2 : 最大値2(int)
	     * @returns {number} : minからmaxまでのランダムな整数(int)
	     */
	
	  }, {
	    key: "random2",
	    value: function random2(min1, max1, min2, max2) {
	
	      if (this.hit(2)) {
	        return this.random(min1, max1);
	      } else {
	        return this.random(min2, max2);
	      }
	    }
	
	    /**
	     * 1/@rangeの確率でtrueを取得
	     * @param range : 母数(int)
	     * @returns {boolean} : true or false(boolean)
	     */
	
	  }, {
	    key: "hit",
	    value: function hit(range) {
	
	      return this.random(0, range - 1) === 0;
	    }
	
	    // 0から範囲内でランダムな整数を取得
	    // -----------------------------------
	    // @val : 範囲(int)
	    // return : ランダムな整数(int)
	    // -----------------------------------
	
	  }, {
	    key: "range",
	    value: function range(val) {
	
	      return this.random(-val, val);
	    }
	
	    // 値をマッピング
	    // -----------------------------------
	    // @num : マッピングする値(Number)
	    // @resMin : 結果となる値の最小値(Number)
	    // @resMax : 結果となる値の最大値(Number)
	    // @baseMin : 元となる値の最小値(Number)
	    // @baseMax : 元となる値の最大値(Number)
	    // return : マッピングされた値(Number)
	    // -----------------------------------
	
	  }, {
	    key: "map",
	    value: function map(num, resMin, resMax, baseMin, baseMax) {
	
	      var p;
	      if (num < baseMin) {
	        return resMin;
	      }
	      if (num > baseMax) {
	        return resMax;
	      }
	      p = (resMax - resMin) / (baseMax - baseMin);
	
	      return (num - baseMin) * p + resMin;
	    }
	
	    // 数値に小数点第@n位までをつけた文字列を返す
	    // -----------------------------------
	    // @num : 値(Number)
	    // @n : 小数点の位(int)
	    // return : 変換された値(String)
	    // -----------------------------------
	
	  }, {
	    key: "decimal",
	    value: function decimal(num, n) {
	      var i, pos;
	      num = String(num);
	      pos = num.indexOf(".");
	      if (n === 0) {
	        return num.split(".")[0];
	      }
	      if (pos === -1) {
	        num += ".";
	        i = 0;
	        while (i < n) {
	          num += "0";
	          i++;
	        }
	        return num;
	      }
	      num = num.substr(0, pos) + num.substr(pos, n + 1);
	      return num;
	    }
	  }, {
	    key: "clamp",
	    value: function clamp(numerator, denominator, val) {
	
	      return val * (numerator / denominator);
	    }
	
	    /**
	      * ラジアンを角度に変換
	     * @param radians
	     * @returns {number}
	     */
	
	  }, {
	    key: "degree",
	    value: function degree(radians) {
	
	      return radians * 180 / Math.PI;
	    }
	
	    // to radians
	
	  }, {
	    key: "radian",
	    value: function radian(angle) {
	
	      return angle * Math.PI / 180; //1度何ラジアンか
	    }
	  }, {
	    key: "dist",
	    value: function dist(p1, p2) {
	
	      return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
	    }
	  }, {
	    key: "ascend",
	    value: function ascend(arr) {
	
	      arr.sort(function (a, b) {
	        if (a > b) return -1;
	        if (a < b) return 1;
	        return 0;
	      });
	      // var a = [5,3,9,1,10]
	      // 結果:10,9,5,3,1
	    }
	  }, {
	    key: "descend",
	    value: function descend(arr) {
	
	      arr.sort(function (a, b) {
	        if (a < b) return -1;
	        if (a > b) return 1;
	        return 0;
	      });
	
	      // var a = [5,3,9,1,10]
	      // 結果:1,3,5,9,10
	    }
	
	    // map(value, min01, max01, min02, max02) {
	
	    //   var dis01 = max01 - min01;
	    //   var dis02 = max02 - min02
	
	    //   var rate = dis02 / dis01;
	
	    //   value = value * rate;
	
	    //   return value;
	    // }
	
	  }, {
	    key: "constrain",
	    value: function constrain(value, min, max) {
	
	      return Math.min(max, Math.max(value, min));
	
	      // if (value <= low) value = low;
	      // if (value >= high) value = high;     
	      // return value;
	    }
	
	    // ユニークIDを取得
	    // -----------------------------------
	
	  }, {
	    key: "unique",
	    value: function unique() {
	
	      return new Date().getTime();
	    }
	
	    // **jquary使用
	    // ボタンモード変更
	    // trueならカーソルがポインターの形に
	    // falseならデフォルトのカーソルに
	    // -----------------------------------
	    // @flg : 適用するかどうか(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "buttonMode",
	    value: function buttonMode(flg) {
	
	      if (flg) {
	        return $("body").css("cursor", "pointer");
	      } else {
	        return $("body").css("cursor", "default");
	      }
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  device
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isDeviceSP",
	    value: function isDeviceSP() {
	
	      var media = ["iphone", "ipod", "ipad", "android", "dream", "cupcake", "blackberry9500", "blackberry9530", "blackberry9520", "blackberry9550", "blackberry9800", "webos", "incognito", "webmate"];
	      var pattern = new RegExp(media.join("|"), "i");
	
	      var b = pattern.test(this.ua);
	      if (b) $('body').addClass('isDeviceSP');
	
	      this.isSP = b;
	    }
	  }, {
	    key: "isDeviceTAB",
	    value: function isDeviceTAB() {
	
	      var b = this.ua.indexOf("windows") != -1 && this.ua.indexOf("touch") != -1 || this.ua.indexOf("ipad") != -1 || this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") == -1 || this.ua.indexOf("firefox") != -1 && this.ua.indexOf("tablet") != -1 || this.ua.indexOf("kindle") != -1 || this.ua.indexOf("silk") != -1 || this.ua.indexOf("playbook") != -1;
	      if (b) $('body').addClass('isDeviceTAB');
	
	      this.isTAB = b;
	    }
	  }, {
	    key: "isDeviceMB",
	    value: function isDeviceMB() {
	
	      var b = this.ua.indexOf("windows") != -1 && this.ua.indexOf("phone") != -1 || this.ua.indexOf("iphone") != -1 || this.ua.indexOf("ipod") != -1 || this.ua.indexOf("android") != -1 && this.ua.indexOf("mobile") != -1 || this.ua.indexOf("firefox") != -1 && this.ua.indexOf("mobile") != -1 || this.ua.indexOf("blackberry") != -1;
	      if (b) $('body').addClass('isDeviceMB');
	
	      this.isMB = b;
	    }
	  }, {
	    key: "isDevicePC",
	    value: function isDevicePC() {
	
	      if (!(this.isSP || this.isTAB || this.isMB)) {
	
	        $('body').addClass('isDevicePC');
	        this.isPC = true;
	        return;
	      }
	
	      this.isPC = false;
	    }
	
	    // スマフォ判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isSmt",
	    value: function isSmt() {
	
	      return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0;
	    }
	
	    // タブレット端末かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isTablet",
	    value: function isTablet() {
	
	      return this.isIpad() || this.isAndroid() && navigator.userAgent.indexOf('Mobile') === -1;
	    }
	
	    // iPad判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIpad",
	    value: function isIpad() {
	
	      return navigator.userAgent.indexOf('iPad') > 0;
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  OS
	    //
	    // ------------------------------------------------------------
	
	    // Android判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isAndroid",
	    value: function isAndroid() {
	
	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('BlackBerry') > 0 || u.indexOf('Android') > 0 || u.indexOf('Windows Phone') > 0;
	    }
	  }, {
	    key: "isiPhone",
	    value: function isiPhone() {
	      var pattern = new RegExp("iphone", "i");
	      return pattern.test(this.ua);
	    }
	
	    // iOS判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIos",
	    value: function isIos() {
	
	      return navigator.userAgent.indexOf('iPad') > 0 || navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0;
	    }
	
	    // PS3判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isPs3",
	    value: function isPs3() {
	
	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('PLAYSTATION 3') > 0;
	    }
	
	    // VITA判定
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isVita",
	    value: function isVita() {
	
	      var u;
	      u = navigator.userAgent;
	      return u.indexOf('PlayStation Vita') > 0;
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  browser
	    //
	    // ------------------------------------------------------------
	    // IEかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe",
	    value: function isIe() {
	
	      var ua;
	      ua = window.navigator.userAgent.toLowerCase();
	      return ua.indexOf('msie') !== -1 || ua.indexOf('trident/7') !== -1;
	    }
	
	    // WINかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isWin",
	    value: function isWin() {
	
	      return navigator.platform.indexOf("Win") !== -1;
	    }
	
	    // googleChromeかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isChrome",
	    value: function isChrome() {
	
	      return navigator.userAgent.indexOf('Chrome') > 0;
	    }
	
	    // FireFoxかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isFF",
	    value: function isFF() {
	
	      return window.navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
	    }
	  }, {
	    key: "isSafari",
	    value: function isSafari() {
	
	      if (this.ua.indexOf("chrome") != -1) return false;
	      if (this.ua.indexOf("lunascape") != -1) return false;
	      var pattern = new RegExp("safari", "i");
	      return pattern.test(this.ua);
	    }
	  }, {
	    key: "isOpera",
	    value: function isOpera() {
	
	      var pattern = new RegExp("opera", "i");
	      return pattern.test(this.ua);
	    }
	
	    // iOSのsafari以外かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIOSUiView",
	    value: function isIOSUiView() {
	
	      var a;
	      a = window.navigator.userAgent.toLowerCase();
	      return this.isIos() && a.indexOf('safari') === -1 || this.isIos() && a.indexOf('crios') > 0 || this.isIos() && a.indexOf('gsa') > 0;
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  version
	    //
	    // ------------------------------------------------------------
	    // IE8以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe8Under",
	    value: function isIe8Under() {
	
	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 8 && msie !== 0;
	    }
	
	    // IE9以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe9Under",
	    value: function isIe9Under() {
	
	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 9 && msie !== 0;
	    }
	
	    // IE10以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe10Under",
	    value: function isIe10Under() {
	
	      var msie;
	      msie = navigator.appVersion.toLowerCase();
	      msie = msie.indexOf('msie') > -1 ? parseInt(msie.replace(/.*msie[ ]/, '').match(/^[0-9]+/)) : 0;
	      return msie <= 10 && msie !== 0;
	    }
	
	    // IE11以下かどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isIe11Under",
	    value: function isIe11Under() {
	
	      var b = this.isIe10Under() || this.ua.indexOf("trident") != -1;
	      return b;
	      // return true;
	    }
	
	    // edgeかどうか
	    // -----------------------------------
	    // return : true or false(boolean)
	    // -----------------------------------
	
	  }, {
	    key: "isEdge",
	    value: function isEdge() {
	
	      log(this.ua.indexOf("AppleWebkit"), this.ua.indexOf("Edge"), this.ua, this.appV);
	      var b = this.ua.indexOf("applewebkit") >= 0 && this.ua.indexOf("edge") != -1;
	      return b;
	      // return true;
	    }
	  }, {
	    key: "isIEVersion",
	    value: function isIEVersion() {
	
	      $('body').addClass('ie');
	      this.isIE = true;
	
	      if (this.appV.indexOf("msie 10.") != -1) {
	        $('body').addClass('ie10');
	        return 'ie10';
	      } else if (this.appV.indexOf("msie 9.") != -1) {
	        $('body').addClass('ie9');
	        return 'ie9';
	      } else if (this.appV.indexOf("msie 8.") != -1) {
	        $('body').addClass('ie8');
	        return 'ie8';
	      } else if (this.appV.indexOf("msie 7.") != -1) {
	        $('body').addClass('ie7');
	        return 'ie7';
	      } else if (this.appV.indexOf("msie 6.") != -1) {
	        $('body').addClass('ie6');
	        return 'ie6';
	      } else if (this.appV.indexOf("trident") != -1) {
	        $('body').addClass('ie11');
	        this.isIE11 = true;
	        return 'ie11';
	      } else if (this.ua.indexOf("applewebkit") >= 0 && this.ua.indexOf("edge") != -1) {
	        $('body').addClass('isEdge');
	        return 'edge';
	      }
	
	      $('body').removeClass('ie');
	      this.isIE = false;
	    }
	  }, {
	    key: "isAndroidVersion",
	    value: function isAndroidVersion() {
	
	      if (this.ua.indexOf("android") > 0) {
	
	        var version = parseFloat(this.ua.slice(this.ua.indexOf("android") + 8));
	        return version;
	      }
	    }
	  }, {
	    key: "isiphoneVersion",
	    value: function isiphoneVersion() {
	
	      if (this.ua.indexOf("iPhone OS") > 0) {
	
	        var version = parseFloat(this.ua.slice(this.ua.indexOf("iPhone OS") + 10));
	        return version;
	      }
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  portrait / landscape
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isDirection",
	    value: function isDirection() {
	
	      var W = window.innerWidth,
	          H = window.innerHeight;
	
	      if (H > W) {
	        $("body").addClass("portrait");
	        $("body").removeClass("landscape");
	      } else {
	        $("body").addClass("landscape");
	        $("body").removeClass("portrait");
	      }
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  responsive 横幅を見る
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isResponsive",
	    value: function isResponsive(bp) {
	
	      if (bp == undefined) bp = 375;
	
	      var W = window.innerWidth,
	          H = window.innerHeight;
	
	      if (W > bp) {
	        this.isResSP = false;
	        this.isResPC = true;
	        $('body').removeClass('isResponsiveSP');
	        $('body').addClass('isResponsivePC');
	      } else {
	        this.isResSP = true;
	        this.isResPC = false;
	        $('body').addClass('isResponsiveSP');
	        $('body').removeClass('isResponsivePC');
	      }
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  URL
	    //
	    // ------------------------------------------------------------
	
	    // クエリ抜き出し
	    // -----------------------------------
	    // @key : 抜き出すパラメータ名(String)
	    // -----------------------------------
	    // getQuery(key) {
	
	    //   var qs, regex;
	    //   key = key.replace(/[€[]/, "€€€[").replace(/[€]]/, "€€€]");
	    //   regex = new RegExp("[€€?&]" + key + "=([^&#]*)");
	    //   qs = regex.exec(window.location.href);
	    //   if (qs === null) {
	    //     return "";
	    //   } else {
	    //     return qs[1];
	    //   }
	
	    // }
	
	  }, {
	    key: "getParam",
	    value: function getParam() {
	
	      var url = location.href;
	      var param = url.split('?')[1];
	      if (param == undefined) return undefined;
	      var paramItems = param.split('&');
	      var list = {};
	
	      for (var i = 0; i < paramItems.length; i++) {
	
	        paramItem = paramItems[i].split('=');
	        list[paramItem[0]] = paramItem[1];
	      }
	
	      return list;
	    }
	
	    // ハッシュ取得
	    // -----------------------------------
	    // return : location.hashの#を削除したやつ
	    // -----------------------------------
	
	  }, {
	    key: "hash",
	    value: function hash() {
	
	      return location.hash.replace("#", "");
	    }
	
	    // cookie取得
	    // -----------------------------------
	    // @key : パラメータ名
	    // -----------------------------------
	
	  }, {
	    key: "getCookie",
	    value: function getCookie(key) {
	
	      var a, arr, i, l, len1, val;
	      if (document.cookie === void 0 || document.cookie === null) {
	        return null;
	      }
	      arr = document.cookie.split("; ");
	      for (i = l = 0, len1 = arr.length; l < len1; i = ++l) {
	        val = arr[i];
	        a = val.split("=");
	        if (a[0] === key) {
	          return a[1];
	        }
	      }
	      return null;
	    }
	
	    // cookie設定
	    // -----------------------------------
	    // @key : パラメータ名
	    // @val : 値
	    // -----------------------------------
	
	  }, {
	    key: "setCookie",
	    value: function setCookie(key, val) {
	
	      return document.cookie = key + "=" + val;
	    }
	  }, {
	    key: "isPCSP",
	    value: function isPCSP() {
	
	      var url = location.href;
	
	      if (!this.isPC && !this.isTAB && url.indexOf('pc') != -1) {
	
	        location.href = '/op_golden';
	      }
	
	      if (this.isPC && url.indexOf('pc') == -1) {
	
	        location.href = '/op_golden/pc/';
	      }
	
	      if (this.isTAB && url.indexOf('pc') == -1) {
	
	        location.href = '/op_golden/pc/';
	      }
	
	      if (this.isContain(url, 'roulette')) location.href = '/op_golden';
	      if (this.isContain(url, 'topics')) location.href = '/op_golden';
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  Color
	    //
	    // ------------------------------------------------------------
	
	    // rgbからHEXカラー取得
	    // -----------------------------------
	    // @r : 0~255
	    // @g : 0~255
	    // @b : 0~255
	    // return : ex "#FFFFFF"
	    // -----------------------------------
	
	  }, {
	    key: "getHexColor",
	    value: function getHexColor(r, g, b) {
	      var str;
	      str = (r << 16 | g << 8 | b).toString(16);
	      return "#" + new Array(7 - str.length).join("0") + str;
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  String
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isContain",
	    value: function isContain(str, contain) {
	
	      // strの中に,containが存在したら
	      if (str.indexOf(contain) != -1) {
	        return true;
	      }
	
	      return false;
	    }
	
	    // 0埋めで2桁にする関数
	
	  }, {
	    key: "add0",
	    value: function add0(str) {
	      var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -2;
	
	
	      return ("000000000000" + str).substr(num);
	    }
	  }, {
	    key: "floatFormat",
	    value: function floatFormat(number, n) {
	
	      var _pow = Math.pow(10, n);
	      return Math.round(number * _pow) / _pow;
	    }
	
	    // 値段表記
	    // -----------------------------------
	
	  }, {
	    key: "price",
	    value: function price(num) {
	
	      return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
	    }
	
	    // 文字列を反転
	    // -----------------------------------
	    // @str : 文字列(String)
	    // return : 文字列(String)
	    // -----------------------------------
	
	  }, {
	    key: "strReverse",
	    value: function strReverse(str) {
	
	      var i, len, res;
	      res = "";
	      len = str.length;
	      i = 1;
	      while (i <= len) {
	        res += str.substr(-i, 1);
	        i++;
	      }
	      return res;
	    }
	
	    // 文字列の全置換
	    // -----------------------------------
	    // @val  : 文字列
	    // @oeg  : 置換前の文字列
	    // @dest : 置換後の文字列
	    // -----------------------------------
	
	  }, {
	    key: "replaceAll",
	    value: function replaceAll(val, org, dest) {
	
	      return val.split(org).join(dest);
	    }
	  }, {
	    key: "strReplace",
	    value: function strReplace(str, before, after) {
	
	      var r = new RegExp(before, 'g');
	
	      return str.replace(r, after);
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  Date
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "getNow",
	    value: function getNow() {
	
	      this.now = new Date();
	    }
	  }, {
	    key: "start",
	    value: function start() {
	
	      this.startTime = this.now.getTime();
	    }
	  }, {
	    key: "elapsed",
	    value: function elapsed() {
	
	      this.elapsedTime = this.now.getTime() - this.startTime;
	    }
	  }, {
	    key: "m",
	    value: function m() {
	
	      return Math.floor(this.elapsedTime + 100 / 60);
	    }
	  }, {
	    key: "s",
	    value: function s() {
	
	      return Math.floor(this.elapsedTime / 1000);
	    }
	  }, {
	    key: "ms",
	    value: function ms() {
	
	      return this.elapsedTime;
	    }
	  }, {
	    key: "time",
	    value: function time() {
	
	      this.getNow();
	
	      this.hour = this.now.getHours(); // 時
	      this.minute = this.now.getMinutes(); // 分
	      this.second = this.now.getSeconds();
	      this.millSecond = this.now.getMilliseconds();
	    }
	  }, {
	    key: "date",
	    value: function date() {
	
	      return this.now.getDate();
	    }
	  }, {
	    key: "months",
	    value: function months() {
	
	      var monthdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	
	      return this.now.getMonth() + 1;
	    }
	  }, {
	    key: "year",
	    value: function year() {
	
	      return this.now.getFullYear();
	    }
	  }, {
	    key: "day",
	    value: function day() {
	
	      // 曜日 (日本語)
	      var weekDayJP = ["日", "月", "火", "水", "木", "金", "土"];
	      var wDJ = weekDayJP[this.now.getDay()];
	
	      // 曜日 (英語)
	      var weekDayEN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	      var wDE = weekDayEN[this.now.getDay()];
	    }
	
	    // 数日後のDateオブジェクト取得
	    // -----------------------------------
	
	  }, {
	    key: "afterDay",
	    value: function afterDay(date, num) {
	
	      return new Date(date.getTime() + Number(num) * 24 * 60 * 60 * 1000);
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  Data type check
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "isObject",
	    value: function isObject(value, ignoreArray) {
	      return (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object' && value !== null;
	    }
	  }, {
	    key: "isNumber",
	    value: function isNumber(value) {
	      return typeof value === 'number';
	    }
	  }, {
	    key: "isString",
	    value: function isString(value) {
	      return typeof value === 'string';
	    }
	  }, {
	    key: "isFunction",
	    value: function isFunction(value) {
	      return typeof value === 'function';
	    }
	  }, {
	    key: "isArray",
	    value: function isArray(value) {
	      return Object.prototype.toString.call(value) === '[object Array]';
	    }
	  }, {
	    key: "isNull",
	    value: function isNull(value) {
	      return value === null;
	    }
	  }, {
	    key: "isUndefined",
	    value: function isUndefined(value) {
	      return typeof value === 'undefined';
	    }
	
	    // ------------------------------------------------------------
	    //
	    //  other
	    //
	    // ------------------------------------------------------------
	
	  }, {
	    key: "setImgSPSize",
	    value: function setImgSPSize($target) {
	
	      // responsive spのとき処理
	      if (!this.isResSP) return;
	      // 一度だけ処理
	      // if (this.isSetSPSize) return;
	      // this.isSetSPSize = true;
	
	      var $img = $target,
	          len = $img.length;
	
	      $img.each(function (i) {
	
	        var w = Math.floor($(this).width() / 2),
	            h = Math.floor($(this).height() / 2);
	
	        $(this).attr({
	          'width': w,
	          'height': h
	        });
	
	        if (len == i + 1) $(window).trigger('setSpZieEnd');
	      });
	    }
	
	    // ------------------------------------------------------------
	    //  スマホ操作無効
	    // ------------------------------------------------------------
	
	  }, {
	    key: "setPrevent",
	    value: function setPrevent() {
	
	      var self = this;
	
	      $(window).on('touchmove.noControl', function (e) {
	        e.preventDefault();
	      });
	    }
	  }, {
	    key: "removePrevent",
	    value: function removePrevent() {
	
	      $(window).off('touchmove.noControl');
	    }
	
	    // ------------------------------------------------------------
	    //  host,protcol
	    // ------------------------------------------------------------
	
	  }, {
	    key: "protocol",
	    value: function protocol() {
	
	      return location.protocol;
	    }
	  }, {
	    key: "host",
	    value: function host() {
	
	      return location.hostname;
	      // return location.host
	    }
	  }, {
	    key: "port",
	    value: function port() {
	
	      return location.port;
	    }
	  }, {
	    key: "path",
	    value: function path() {
	
	      return location.pathname;
	    }
	  }, {
	    key: "preventDefault",
	    value: function preventDefault(e) {
	
	      e = e || window.event;
	      if (e.preventDefault) e.preventDefault();
	      e.returnValue = false;
	    }
	  }, {
	    key: "preventDefaultForScrollKeys",
	    value: function preventDefaultForScrollKeys(e) {
	
	      if (keys[e.keyCode]) {
	        preventDefault(e);
	        return false;
	      }
	    }
	  }, {
	    key: "disableScroll",
	    value: function disableScroll() {
	
	      if (window.addEventListener) // older FF
	        window.addEventListener('DOMMouseScroll', this.preventDefault, false);
	      window.onwheel = this.preventDefault; // modern standard
	      window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
	      window.ontouchmove = this.preventDefault; // mobile
	      document.onkeydown = this.preventDefaultForScrollKeys;
	    }
	  }, {
	    key: "enableScroll",
	    value: function enableScroll() {
	
	      if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
	      window.onmousewheel = document.onmousewheel = null;
	      window.onwheel = null;
	      window.ontouchmove = null;
	      document.onkeydown = null;
	    }
	  }]);
	
	  return Util;
	}();
	
	exports.default = Util;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Utils
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	/**
	 * animation
	 */
	
	
	var _requestAnimationFrame = __webpack_require__(5);
	
	var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);
	
	var _cancelAnimationFrame = __webpack_require__(6);
	
	var _cancelAnimationFrame2 = _interopRequireDefault(_cancelAnimationFrame);
	
	var _Array = __webpack_require__(7);
	
	var _Array2 = _interopRequireDefault(_Array);
	
	var _checkEnvironment = __webpack_require__(8);
	
	var _checkEnvironment2 = _interopRequireDefault(_checkEnvironment);
	
	var _preloadImg = __webpack_require__(13);
	
	var _preloadImg2 = _interopRequireDefault(_preloadImg);
	
	var _setUpBtnTwitter = __webpack_require__(14);
	
	var _setUpBtnTwitter2 = _interopRequireDefault(_setUpBtnTwitter);
	
	var _setUpBtnLine = __webpack_require__(15);
	
	var _setUpBtnLine2 = _interopRequireDefault(_setUpBtnLine);
	
	var _setUpBtnFaceBook = __webpack_require__(16);
	
	var _setUpBtnFaceBook2 = _interopRequireDefault(_setUpBtnFaceBook);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Utils = function () {
	  function Utils() {
	    _classCallCheck(this, Utils);
	
	    this._setup();
	  }
	
	  _createClass(Utils, [{
	    key: '_setup',
	    value: function _setup() {
	      // window.console.log('Utils_Setup!!');
	
	      /**
	       * array
	       */
	      this.Array = new _Array2.default();
	
	      /**
	       * ua
	       */
	      this.checkEnvironment = new _checkEnvironment2.default();
	      if (this.checkEnvironment.isIE()) {
	        window.console.log('IEです');
	      } else {
	        window.console.log('IEじゃないです');
	      }
	
	      if (this.checkEnvironment.isChrome()) {
	        window.console.log('Chromeです');
	      } else {
	        window.console.log('Chromeじゃないです');
	      }
	
	      if (this.checkEnvironment.isMobile()) {
	        window.console.log('モバイルです');
	      } else {
	        window.console.log('モバイルじゃないです');
	      }
	
	      // window.console.log(this.checkEnvironment.all());
	
	      // let name = this.checkEnvironment;
	      // window.console.log(name);
	
	      // let log = this.checkEnvironment.device_name();
	      // window.console.log(log);
	
	      /**
	       * img
	       */
	      // this.preloadImg = new preloadImg();
	
	      /**
	       * sns
	       */
	      // this.setUpBtnTwitter = new setUpBtnTwitter;
	      // this.setUpBtnLine = new setUpBtnLine;
	      // this.setUpBtnFaceBook = new setUpBtnFaceBook;
	    }
	  }]);
	
	  return Utils;
	}();
	
	exports.default = Utils;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * requestAnimationFrame
	 */
	window.requestAnimationFrame = function (_this) {
	  return function () {
	    return window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	      return setTimeout(callback, 1000 / 30);
	    };
	  };
	}(undefined)();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * cancelAnimationFrame
	 */
	window.cancelAnimationFrame = function (_this) {
	  return function () {
	    return window.cancelAnimationFrame || window.mozCancelAnimationFrame || function (id) {
	      return clearTimeout(id);
	    };
	  };
	}(undefined)();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * fileOverview: 配列の操作系
	 * Project:
	 * File: Array
	 * Date:
	 * Author:
	 */
	var Array = function () {
	  function Array() {
	    _classCallCheck(this, Array);
	  }
	
	  /**
	   * 配列内のランダムな値をひとつ取得
	   * @param arr : 配列
	   * @returns {*} : 配列内の値
	   */
	
	
	  _createClass(Array, [{
	    key: "arrRand",
	    value: function arrRand(arr) {
	
	      return arr[this.random(0, arr.length - 1)];
	    }
	
	    /**
	      * 配列をランダムに並べ替え
	     * @param arr : 配列(Array)
	     * @returns {Array}
	     */
	
	  }, {
	    key: "shuffle",
	    value: function shuffle(arr) {
	
	      var Arr = [];
	      Arr = arr.slice();
	      var i = arr.length;
	      while (i) {
	        var j = Math.floor(Math.random() * i);
	        var t = Arr[--i];
	        Arr[i] = Arr[j];
	        Arr[j] = t;
	      }
	      return Arr;
	    }
	  }]);
	
	  return Array;
	}();
	
	exports.default = Array;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * fileOverview: Ua判別
	 * Project:
	 * File: checkEnvironment
	 * Date:
	 * Author: Teraguchi
	 */
	
	var parser = __webpack_require__(9);
	
	'use strict';
	
	var checkEnvironment = function () {
	  function checkEnvironment() {
	    _classCallCheck(this, checkEnvironment);
	
	    this.ua = new parser();
	  }
	
	  _createClass(checkEnvironment, [{
	    key: 'isIE',
	    value: function isIE() {
	      var browser = this.ua.getBrowser().name;
	      return browser === 'IE' ? true : false;
	    }
	  }, {
	    key: 'isFIREFOX',
	    value: function isFIREFOX() {
	      var browser = this.ua.getBrowser().name;
	      return browser === 'IE' ? true : false;
	    }
	  }, {
	    key: 'isChrome',
	    value: function isChrome() {
	      var browser = this.ua.getBrowser().name;
	      return browser === 'Chrome' ? true : false;
	    }
	  }, {
	    key: 'isMobile',
	
	
	    /*
	     ** UAParser.jsはユーザーエージェント内に詳細情報がセットされていれば、
	     **  isIOS9() , isWindows10(), isTablet()等のことも簡単にできます
	     */
	    // モバイルか判別
	    value: function isMobile() {
	      var device = this.ua.getDevice().type;
	      return device === 'mobile' ? true : null;
	    }
	
	    // OS名を取得
	    // return: iOS, Windows, Mac OS ..
	
	  }, {
	    key: 'os',
	    value: function os() {
	      return this.ua.getOS().name;
	    }
	
	    // デバイス名を取得
	    // iPad, iPhone .. モバイル以外だとnullを返す
	
	  }, {
	    key: 'device_name',
	    value: function device_name() {
	      var device = this.ua.device.model;
	      // return lodash.set(device) ? device : null;
	    }
	
	    // ブラウザ名を取得
	    // Chrome, Safari ...
	    // browser() {
	    //   return this.ua.browser.name;
	    // }
	
	    // ユーザーエージェント情報：全てを取得
	
	  }, {
	    key: 'all',
	    value: function all() {
	      return this.ua.getUA();
	    }
	  }]);
	
	  return checkEnvironment;
	}();
	
	exports.default = checkEnvironment;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * UAParser.js v0.7.12
	 * Lightweight JavaScript-based User-Agent string parser
	 * https://github.com/faisalman/ua-parser-js
	 *
	 * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
	 * Dual licensed under GPLv2 & MIT
	 */(function (e, t) {
	  "use strict";
	  var n = "0.7.12",
	      r = "",
	      i = "?",
	      s = "function",
	      o = "undefined",
	      u = "object",
	      a = "string",
	      f = "major",
	      l = "model",
	      c = "name",
	      h = "type",
	      p = "vendor",
	      d = "version",
	      v = "architecture",
	      m = "console",
	      g = "mobile",
	      y = "tablet",
	      b = "smarttv",
	      w = "wearable",
	      E = "embedded",
	      S = { extend: function extend(e, t) {
	      var n = {};for (var r in e) {
	        t[r] && t[r].length % 2 === 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
	      }return n;
	    }, has: function has(e, t) {
	      return typeof e == "string" ? t.toLowerCase().indexOf(e.toLowerCase()) !== -1 : !1;
	    }, lowerize: function lowerize(e) {
	      return e.toLowerCase();
	    }, major: function major(e) {
	      return (typeof e === "undefined" ? "undefined" : _typeof(e)) === a ? e.replace(/[^\d\.]/g, "").split(".")[0] : t;
	    }, trim: function trim(e) {
	      return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
	    } },
	      x = { rgx: function rgx() {
	      var e,
	          n = 0,
	          r,
	          i,
	          a,
	          f,
	          l,
	          c,
	          h = arguments;while (n < h.length && !l) {
	        var p = h[n],
	            d = h[n + 1];if ((typeof e === "undefined" ? "undefined" : _typeof(e)) === o) {
	          e = {};for (a in d) {
	            d.hasOwnProperty(a) && (f = d[a], (typeof f === "undefined" ? "undefined" : _typeof(f)) === u ? e[f[0]] = t : e[f] = t);
	          }
	        }r = i = 0;while (r < p.length && !l) {
	          l = p[r++].exec(this.getUA());if (!!l) for (a = 0; a < d.length; a++) {
	            c = l[++i], f = d[a], (typeof f === "undefined" ? "undefined" : _typeof(f)) === u && f.length > 0 ? f.length == 2 ? _typeof(f[1]) == s ? e[f[0]] = f[1].call(this, c) : e[f[0]] = f[1] : f.length == 3 ? _typeof(f[1]) === s && (!f[1].exec || !f[1].test) ? e[f[0]] = c ? f[1].call(this, c, f[2]) : t : e[f[0]] = c ? c.replace(f[1], f[2]) : t : f.length == 4 && (e[f[0]] = c ? f[3].call(this, c.replace(f[1], f[2])) : t) : e[f] = c ? c : t;
	          }
	        }n += 2;
	      }return e;
	    }, str: function str(e, n) {
	      for (var r in n) {
	        if (_typeof(n[r]) === u && n[r].length > 0) {
	          for (var s = 0; s < n[r].length; s++) {
	            if (S.has(n[r][s], e)) return r === i ? t : r;
	          }
	        } else if (S.has(n[r], e)) return r === i ? t : r;
	      }return e;
	    } },
	      T = { browser: { oldsafari: { version: { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } } }, device: { amazon: { model: { "Fire Phone": ["SD", "KF"] } }, sprint: { model: { "Evo Shift 4G": "7373KT" }, vendor: { HTC: "APA", Sprint: "Sprint" } } }, os: { windows: { version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" } } } },
	      N = { browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [c, d], [/(opios)[\/\s]+([\w\.]+)/i], [[c, "Opera Mini"], d], [/\s(opr)\/([\w\.]+)/i], [[c, "Opera"], d], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i], [c, d], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[c, "IE"], d], [/(edge)\/((\d+)?[\w\.]+)/i], [c, d], [/(yabrowser)\/([\w\.]+)/i], [[c, "Yandex"], d], [/(comodo_dragon)\/([\w\.]+)/i], [[c, /_/g, " "], d], [/(micromessenger)\/([\w\.]+)/i], [[c, "WeChat"], d], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [d, [c, "MIUI Browser"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[c, /(.+)/, "$1 WebView"], d], [/android.+samsungbrowser\/([\w\.]+)/i, /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [d, [c, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i], [c, d], [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /juc.+(ucweb)[\/\s]?([\w\.]+)/i], [[c, "UCBrowser"], d], [/(dolfin)\/([\w\.]+)/i], [[c, "Dolphin"], d], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[c, "Chrome"], d], [/;fbav\/([\w\.]+);/i], [d, [c, "Facebook"]], [/fxios\/([\w\.-]+)/i], [d, [c, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [d, [c, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [d, c], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [c, [d, x.str, T.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [c, d], [/(navigator|netscape)\/([\w\.-]+)/i], [[c, "Netscape"], d], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [c, d]], cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[v, "amd64"]], [/(ia32(?=;))/i], [[v, S.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[v, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[v, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[v, /ower/, "", S.lowerize]], [/(sun4\w)[;\)]/i], [[v, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[v, S.lowerize]]], device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [l, p, [h, y]], [/applecoremedia\/[\w\.]+ \((ipad)/], [l, [p, "Apple"], [h, y]], [/(apple\s{0,1}tv)/i], [[l, "Apple TV"], [p, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [p, l, [h, y]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [l, [p, "Amazon"], [h, y]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[l, x.str, T.device.amazon.model], [p, "Amazon"], [h, g]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [l, p, [h, g]], [/\((ip[honed|\s\w*]+);/i], [l, [p, "Apple"], [h, g]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [p, l, [h, g]], [/\(bb10;\s(\w+)/i], [l, [p, "BlackBerry"], [h, g]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [l, [p, "Asus"], [h, y]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[p, "Sony"], [l, "Xperia Tablet"], [h, y]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [[p, "Sony"], [l, "Xperia Phone"], [h, g]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [p, l, [h, m]], [/android.+;\s(shield)\sbuild/i], [l, [p, "Nvidia"], [h, m]], [/(playstation\s[34portablevi]+)/i], [l, [p, "Sony"], [h, m]], [/(sprint\s(\w+))/i], [[p, x.str, T.device.sprint.vendor], [l, x.str, T.device.sprint.model], [h, g]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [p, l, [h, y]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [p, [l, /_/g, " "], [h, g]], [/(nexus\s9)/i], [l, [p, "HTC"], [h, y]], [/(nexus\s6p)/i], [l, [p, "Huawei"], [h, g]], [/(microsoft);\s(lumia[\s\w]+)/i], [p, l, [h, g]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [l, [p, "Microsoft"], [h, m]], [/(kin\.[onetw]{3})/i], [[l, /\./g, " "], [p, "Microsoft"], [h, g]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [l, [p, "Motorola"], [h, g]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [l, [p, "Motorola"], [h, y]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[p, S.trim], [l, S.trim], [h, b]], [/hbbtv.+maple;(\d+)/i], [[l, /^/, "SmartTV"], [p, "Samsung"], [h, b]], [/\(dtv[\);].+(aquos)/i], [l, [p, "Sharp"], [h, b]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[p, "Samsung"], l, [h, y]], [/smart-tv.+(samsung)/i], [p, [h, b], l], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[p, "Samsung"], l, [h, g]], [/sie-(\w+)*/i], [l, [p, "Siemens"], [h, g]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[p, "Nokia"], l, [h, g]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [l, [p, "Acer"], [h, y]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[p, "LG"], l, [h, y]], [/(lg) netcast\.tv/i], [p, l, [h, b]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], [l, [p, "LG"], [h, g]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [l, [p, "Lenovo"], [h, y]], [/linux;.+((jolla));/i], [p, l, [h, g]], [/((pebble))app\/[\d\.]+\s/i], [p, l, [h, w]], [/android.+;\s(glass)\s\d/i], [l, [p, "Google"], [h, w]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i], [[l, /_/g, " "], [p, "Xiaomi"], [h, g]], [/android.+a000(1)\s+build/i], [l, [p, "OnePlus"], [h, g]], [/\s(tablet)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[h, S.lowerize], p, l]], engine: [[/windows.+\sedge\/([\w\.]+)/i], [d, [c, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [c, d], [/rv\:([\w\.]+).*(gecko)/i], [d, c]], os: [[/microsoft\s(windows)\s(vista|xp)/i], [c, d], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [c, [d, x.str, T.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[c, "Windows"], [d, x.str, T.os.windows.version]], [/\((bb)(10);/i], [[c, "BlackBerry"], d], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [c, d], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[c, "Symbian"], d], [/\((series40);/i], [c], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[c, "Firefox OS"], d], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [c, d], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[c, "Chromium OS"], d], [/(sunos)\s?([\w\.]+\d)*/i], [[c, "Solaris"], d], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [c, d], [/(haiku)\s(\w+)/i], [c, d], [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i], [[c, "iOS"], [d, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[c, "Mac OS"], [d, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [c, d]] },
	      C = function C(t, n) {
	    if (this instanceof C) {
	      var i = t || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : r),
	          s = n ? S.extend(N, n) : N;return this.getBrowser = function () {
	        var e = x.rgx.apply(this, s.browser);return e.major = S.major(e.version), e;
	      }, this.getCPU = function () {
	        return x.rgx.apply(this, s.cpu);
	      }, this.getDevice = function () {
	        return x.rgx.apply(this, s.device);
	      }, this.getEngine = function () {
	        return x.rgx.apply(this, s.engine);
	      }, this.getOS = function () {
	        return x.rgx.apply(this, s.os);
	      }, this.getResult = function () {
	        return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
	      }, this.getUA = function () {
	        return i;
	      }, this.setUA = function (e) {
	        return i = e, this;
	      }, this;
	    }return new C(t, n).getResult();
	  };C.VERSION = n, C.BROWSER = { NAME: c, MAJOR: f, VERSION: d }, C.CPU = { ARCHITECTURE: v }, C.DEVICE = { MODEL: l, VENDOR: p, TYPE: h, CONSOLE: m, MOBILE: g, SMARTTV: b, TABLET: y, WEARABLE: w, EMBEDDED: E }, C.ENGINE = { NAME: c, VERSION: d }, C.OS = { NAME: c, VERSION: d }, ( false ? "undefined" : _typeof(exports)) !== o ? (( false ? "undefined" : _typeof(module)) !== o && module.exports && (exports = module.exports = C), exports.UAParser = C) : ( false ? "undefined" : _typeof(__webpack_require__(11))) === s && __webpack_require__(12) ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return C;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e.UAParser = C;var k = e.jQuery || e.Zepto;if ((typeof k === "undefined" ? "undefined" : _typeof(k)) !== o) {
	    var L = new C();k.ua = L.getResult(), k.ua.get = function () {
	      return L.getUA();
	    }, k.ua.set = function (e) {
	      L.setUA(e);var t = L.getResult();for (var n in t) {
	        k.ua[n] = t[n];
	      }
	    };
	  }
	})((typeof window === "undefined" ? "undefined" : _typeof(window)) == "object" ? window : undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * preloadImg
	 * @param imgPath
	 * @returns {Promise}
	 */
	exports.default = function (imgPath) {
	  return new Promise(function (resolve) {
	    var img;
	    img = new Image();
	    img.addEventListener('load', function (e) {
	      img.removeEventListener('load', arguments.callee);
	      return resolve();
	    });
	    return img.src = imgPath;
	  });
	};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * setUpBtnTwitter
	 * @param $btn
	 * @param text
	 * @param shareURL
	 */
	exports.default = function ($btn, text, shareURL) {
	  var url;
	  if (shareURL == null) {
	    shareURL = '';
	  }
	  url = 'https://twitter.com/intent/tweet?';
	  if (shareURL === '') {
	    url += "text=" + encodeURIComponent(text);
	  } else {
	    url += "url=" + encodeURIComponent(shareURL) + "&text=" + encodeURIComponent(text);
	  }
	  return $btn.on('click', function (e) {
	    window.open(url, 'twitterShare', 'width=670,height=400');
	    return false;
	  });
	};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * setUpBtnLine
	 * @param $btn
	 * @param text
	 * @param shareURL
	 */
	exports.default = function ($btn, text) {
	  var shareURL = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	
	  var url;
	  if (shareURL == null) {
	    shareURL = '';
	  }
	  url = 'http://line.me/msg/text/?';
	  if (shareURL === '') {
	    url += "" + encodeURIComponent(text);
	  } else {
	    url += encodeURIComponent(text) + "\n" + encodeURIComponent(shareURL);
	  }
	  return $btn.on('click', function (e) {
	    window.open(url, 'lineShare');
	    return false;
	  });
	};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	/**
	 * setUpBtnFacebook
	 * @param $btn
	 * @param shareURL
	 * @param description
	 */
	exports.default = function ($btn, shareURL) {
	  var description = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	
	  var url;
	  if (description == null) {
	    description = '';
	  }
	  url = 'https://www.facebook.com/sharer/sharer.php?&display=popup&u=';
	  url += "" + encodeURIComponent(shareURL);
	  if (description) {
	    url += "&description=" + encodeURIComponent(description);
	  }
	  return $btn.on('click', function (e) {
	    window.open(url, "facebookShare" + new Date().getTime(), 'width=670,height=400');
	    return false;
	  });
	};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * fileOverview:
	 * Project:
	 * File: Func
	 * Date:
	 * Author:
	 */
	
	var Func = function () {
	  function Func() {
	    _classCallCheck(this, Func);
	
	    this.blank();
	    this.debugger();
	    this.requestAnimationFrame();
	    this.expandjQuery();
	  }
	
	  _createClass(Func, [{
	    key: 'blank',
	    value: function blank() {
	
	      $(function () {
	        $('.blank').attr('target', '_blank');
	      });
	    }
	  }, {
	    key: 'debugger',
	    value: function _debugger() {
	
	      // デバッグモード切替
	      var RELEASE = gb.in.conf.RELEASE;
	
	      // 置換対象のメソッドを配列として保持する
	      var methods = ['log', 'debug', 'info', 'warn', 'error', 'dir', 'trace', 'assert', 'dirxml', 'group', 'groupEnd', 'time', 'timeEnd', 'count', 'profile', 'profileEnd'];
	
	      // consoleが使えない場合は空のオブジェクトを設定しておく
	      if (typeof window.console === "undefined") {
	        window.console = {};
	      }
	
	      // 各メソッドをwindowへ直接追加して行く
	      for (var i in methods) {
	        (function (m) {
	
	          // consoleにある？デバッグモードは有効？consoleのものは関数？
	          if (console[m] && !RELEASE && typeof console[m] === "function") {
	            window[m] = console[m].bind(console);
	          } else {
	            // debugModeがfalse,もしくは該当メソッドが存在しない場合は、空のメソッドを用意する
	            window[m] = function () {};
	          }
	        })(methods[i]);
	      }
	    }
	  }, {
	    key: 'prepend',
	    value: function prepend(param) {
	
	      $('body').prepend(param);
	    }
	  }, {
	    key: 'requestAnimationFrame',
	    value: function requestAnimationFrame() {
	
	      var FPS = 1000 / 60;
	
	      window.requestAnimationFrame = window.requestAnimationFrame || // chromeや最新の
	      window.mozRequestAnimationFrame || // 古いfirefox用
	      window.webkitRequestAnimationFrame || // safari6以前、iOS6 safari用
	      function (callback) {
	        window.setTimeout(callback, FPS);
	      };
	
	      window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || function (timer) {
	        window.clearTimeout(timer);
	      };
	    }
	  }, {
	    key: 'expandjQuery',
	    value: function expandjQuery() {
	
	      jQuery.fn.extend({
	        w: 0,
	        h: 0,
	        adjust: function adjust() {
	          var w = $(this).innerWidth();
	          var h = $(this).innerHeight();
	          $(this).css({
	            'position': 'absolute',
	            'left': '50%',
	            'top': '50%',
	            'margin-left': '-' + w / 2 + 'px',
	            'margin-top': '-' + h / 2 + 'px'
	          });
	        },
	        adjustW: function adjustW() {
	          var w = $(this).innerWidth();
	          var h = $(this).innerHeight();
	          $(this).css({
	            'position': 'absolute',
	            'left': '50%',
	            'margin-left': '-' + w / 2 + 'px'
	          });
	        },
	        adjustH: function adjustH() {
	          var w = $(this).innerWidth();
	          var h = $(this).innerHeight();
	          $(this).css({
	            'position': 'absolute',
	            'top': '50%',
	            'margin-top': '-' + h / 2 + 'px'
	          });
	        }
	      });
	    }
	  }, {
	    key: 'checkCssBlend',
	    value: function checkCssBlend() {
	
	      if ('CSS' in window && 'supports' in window.CSS) {
	        if (!window.CSS.supports('mix-blend-mode', 'soft-light')) {
	          document.documentElement.classList.add('not-mix-blend-mode');
	        }
	      }
	
	      log(gb.in.u.isIE);
	
	      if (gb.in.u.isIE) {
	
	        document.documentElement.classList.add('not-mix-blend-mode');
	      };
	    }
	  }, {
	    key: 'notSaveImg',
	    value: function notSaveImg() {
	
	      // ------------------------------------------------------------
	      //
	      //  pc
	      //
	      // ------------------------------------------------------------
	
	      if (gb.in.u.isPC) {
	
	        $(function () {
	          $("img").on("contextmenu", function () {
	            return false;
	          });
	        });
	      }
	
	      // ------------------------------------------------------------
	      //
	      //  sp android
	      //
	      // ------------------------------------------------------------
	      var v = gb.in.u.isAndroidVersion();
	
	      if (v == undefined) return;
	      if (v < 5) {
	
	        var timer;
	        $("img").on("touchstart", function () {
	          timer = setTimeout(function () {
	            alert("画像は保存できません");
	          }, 500);
	          return false;
	        });
	        $("img").on("touchend", function () {
	          clearTimeout(timer);
	          return false;
	        });
	      }
	    }
	  }]);
	
	  return Func;
	}();
	
	exports.default = Func;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Main
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _DisplayTop = __webpack_require__(19);
	
	var _DisplayTop2 = _interopRequireDefault(_DisplayTop);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	'use strict';
	
	var Main = function () {
	  function Main() {
	    _classCallCheck(this, Main);
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(Main, [{
	    key: 'setup',
	    value: function setup() {}
	  }, {
	    key: 'onReady',
	    value: function onReady() {
	
	      //pageページ別のIDを取得
	      var page = $('body').data('id');
	
	      window.console.log('現在のページIDは ', page);
	
	      //pageのIDごとに発火するクラスの振り分け
	      switch (page) {
	
	        case 'top':
	
	          new _DisplayTop2.default();
	
	          break;
	
	      }
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {}
	  }, {
	    key: 'onRender',
	    value: function onRender() {}
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(document).on('ready', this.onReady.bind(this));
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }]);
	
	  return Main;
	}();
	
	exports.default = Main;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Display
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	// import WebGLinit from './WebGLinit.js';
	
	var _Canvas = __webpack_require__(20);
	
	var _Canvas2 = _interopRequireDefault(_Canvas);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	'use strict';
	
	var DisplayTop = function () {
	  function DisplayTop() {
	    _classCallCheck(this, DisplayTop);
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(DisplayTop, [{
	    key: 'setup',
	    value: function setup() {
	
	      // アニメーションループスタート
	      // gb.in.up.loop();
	
	    }
	  }, {
	    key: 'onLoad',
	    value: function onLoad() {
	
	      gb.in.canvas = new _Canvas2.default({
	        output: document.getElementById('webgl-output')
	      });
	
	      // gb.in.canvas.init();
	
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }], [{
	    key: 'run',
	    value: function run() {
	
	      // window.console.log('static_Run');
	
	    }
	  }]);
	
	  return DisplayTop;
	}();
	
	exports.default = DisplayTop;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Entry2 = __webpack_require__(21);
	
	var _Entry3 = _interopRequireDefault(_Entry2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * File: Canvas
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	// import Camera from './Utils/Camera.js';
	
	'use strict';
	
	var Canvas = function (_Entry) {
	  _inherits(Canvas, _Entry);
	
	  function Canvas() {
	    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    _classCallCheck(this, Canvas);
	
	    var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this));
	
	    _this.width = window.innerWidth;
	    _this.height = window.innerHeight;
	    _this.output = opts.output || document.createElement('div');
	
	    _this.camera = null;
	    _this.renderer = null;
	    _this.scene = null;
	    _this.cube = null;
	
	    _this.createCamera = _this._createCamera.bind(_this);
	    _this.createRenderer = _this._createRenderer.bind(_this);
	    _this.createScene = _this._createScene.bind(_this);
	    _this.createObject = _this._createObject.bind(_this);
	    _this.orbitControls = _this._orbitControls.bind(_this);
	
	    _this.onResize = _this._onResize.bind(_this);
	
	    _this.Update = _this._Update.bind(_this);
	
	    return _this;
	  }
	
	  /**
	   * 初期化
	   */
	
	
	  _createClass(Canvas, [{
	    key: 'init',
	    value: function init() {
	      var _this2 = this;
	
	      this.createCamera();
	      this.createScene();
	      this.createRenderer();
	
	      this.orbitControls();
	
	      this.createObject();
	
	      this.Update();
	
	      //リサイズイベント発火
	      window.addEventListener('resize', function () {
	        _this2.onResize();
	      }, false);
	    }
	
	    /**
	     * カメラ作成
	     */
	
	  }, {
	    key: '_createCamera',
	    value: function _createCamera() {
	
	      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
	      this.camera.position.x = -30;
	      this.camera.position.y = 40;
	      this.camera.position.z = 30;
	
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	    }
	
	    /**
	     * レンダラー作成
	     */
	
	  }, {
	    key: '_createRenderer',
	    value: function _createRenderer() {
	
	      this.renderer = new THREE.WebGLRenderer({
	        alpha: false,
	        antialias: false,
	        stencil: false,
	        depth: true,
	        premultipliedAlpha: false
	      });
	
	      this.renderer.setClearColor(0xffffff);
	      this.renderer.setPixelRatio(window.devicePixelRatio || 1);
	      this.renderer.setSize(this.width, this.height);
	      this.output.appendChild(this.renderer.domElement);
	    }
	
	    /**
	     *　シーン作成
	     */
	
	  }, {
	    key: '_createScene',
	    value: function _createScene() {
	
	      this.scene = new THREE.Scene();
	    }
	
	    /**
	     *　Object作成
	     */
	
	  }, {
	    key: '_createObject',
	    value: function _createObject() {
	
	      var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
	      var cubeMaterial = new THREE.MeshBasicMaterial({
	        color: 0x000000,
	        wireframe: true
	      });
	
	      this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	      this.cube.position.x = 3;
	      this.cube.position.y = 3;
	      this.cube.position.z = 3;
	
	      this.scene.add(this.cube);
	    }
	
	    /**
	     *　更新
	     */
	
	  }, {
	    key: '_Update',
	    value: function _Update() {
	      var _this3 = this;
	
	      requestAnimationFrame(function () {
	        _this3.Update();
	      });
	      // this.controls.update();
	      this.renderer.render(this.scene, this.camera);
	    }
	
	    /**
	     *　画面リサイズ
	     */
	
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	      this.camera.aspect = window.innerWidth / window.innerHeight;
	      this.camera.updateProjectionMatrix();
	      this.renderer.setSize(window.innerWidth, window.innerHeight);
	    }
	
	    /**
	      * カメラコントロール
	     */
	
	  }, {
	    key: '_orbitControls',
	    value: function _orbitControls() {
	      this.controls = new THREE.OrbitControls(this.camera);
	      this.controls.autoRotate = true;
	      var clock = new THREE.Clock();
	
	      var delta = clock.getDelta();
	      this.controls.update(delta);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }]);
	
	  return Canvas;
	}(_Entry3.default);
	
	exports.default = Canvas;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * fileOverview:
	 * Project:
	 * File: Entry
	 * Date:
	 * Author:
	 */
	
	__webpack_require__(22);
	
	'use strict';
	
	var Entry = function () {
		function Entry() {
			_classCallCheck(this, Entry);
		}
	
		/**
	  * 初期化
	  */
	
	
		_createClass(Entry, [{
			key: 'init',
			value: function init() {}
		}]);
	
		return Entry;
	}();
	
	exports.default = Entry;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * @author qiao / https://github.com/qiao
	 * @author mrdoob / http://mrdoob.com
	 * @author alteredq / http://alteredqualia.com/
	 * @author WestLangley / http://github.com/WestLangley
	 * @author erich666 / http://erichaines.com
	 */
	
	// This set of controls performs orbiting, dollying (zooming), and panning.
	// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
	//
	//    Orbit - left mouse / touch: one finger move
	//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
	//    Pan - right mouse, or arrow keys / touch: three finter swipe
	
	THREE.OrbitControls = function (object, domElement) {
	
		this.object = object;
	
		this.domElement = domElement !== undefined ? domElement : document;
	
		// Set to false to disable this control
		this.enabled = true;
	
		// "target" sets the location of focus, where the object orbits around
		this.target = new THREE.Vector3();
	
		// How far you can dolly in and out ( PerspectiveCamera only )
		this.minDistance = 0;
		this.maxDistance = Infinity;
	
		// How far you can zoom in and out ( OrthographicCamera only )
		this.minZoom = 0;
		this.maxZoom = Infinity;
	
		// How far you can orbit vertically, upper and lower limits.
		// Range is 0 to Math.PI radians.
		this.minPolarAngle = 0; // radians
		this.maxPolarAngle = Math.PI; // radians
	
		// How far you can orbit horizontally, upper and lower limits.
		// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
		this.minAzimuthAngle = -Infinity; // radians
		this.maxAzimuthAngle = Infinity; // radians
	
		// Set to true to enable damping (inertia)
		// If damping is enabled, you must call controls.update() in your animation loop
		this.enableDamping = false;
		this.dampingFactor = 0.25;
	
		// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
		// Set to false to disable zooming
		this.enableZoom = true;
		this.zoomSpeed = 1.0;
	
		// Set to false to disable rotating
		this.enableRotate = true;
		this.rotateSpeed = 1.0;
	
		// Set to false to disable panning
		this.enablePan = true;
		this.keyPanSpeed = 7.0; // pixels moved per arrow key push
	
		// Set to true to automatically rotate around the target
		// If auto-rotate is enabled, you must call controls.update() in your animation loop
		this.autoRotate = false;
		this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60
	
		// Set to false to disable use of the keys
		this.enableKeys = true;
	
		// The four arrow keys
		this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };
	
		// Mouse buttons
		this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };
	
		// for reset
		this.target0 = this.target.clone();
		this.position0 = this.object.position.clone();
		this.zoom0 = this.object.zoom;
	
		//
		// public methods
		//
	
		this.getPolarAngle = function () {
	
			return spherical.phi;
		};
	
		this.getAzimuthalAngle = function () {
	
			return spherical.theta;
		};
	
		this.reset = function () {
	
			scope.target.copy(scope.target0);
			scope.object.position.copy(scope.position0);
			scope.object.zoom = scope.zoom0;
	
			scope.object.updateProjectionMatrix();
			scope.dispatchEvent(changeEvent);
	
			scope.update();
	
			state = STATE.NONE;
		};
	
		// this method is exposed, but perhaps it would be better if we can make it private...
		this.update = function () {
	
			var offset = new THREE.Vector3();
	
			// so camera.up is the orbit axis
			var quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
			var quatInverse = quat.clone().inverse();
	
			var lastPosition = new THREE.Vector3();
			var lastQuaternion = new THREE.Quaternion();
	
			return function update() {
	
				var position = scope.object.position;
	
				offset.copy(position).sub(scope.target);
	
				// rotate offset to "y-axis-is-up" space
				offset.applyQuaternion(quat);
	
				// angle from z-axis around y-axis
				spherical.setFromVector3(offset);
	
				if (scope.autoRotate && state === STATE.NONE) {
	
					rotateLeft(getAutoRotationAngle());
				}
	
				spherical.theta += sphericalDelta.theta;
				spherical.phi += sphericalDelta.phi;
	
				// restrict theta to be between desired limits
				spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta));
	
				// restrict phi to be between desired limits
				spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
	
				spherical.makeSafe();
	
				spherical.radius *= scale;
	
				// restrict radius to be between desired limits
				spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));
	
				// move target to panned location
				scope.target.add(panOffset);
	
				offset.setFromSpherical(spherical);
	
				// rotate offset back to "camera-up-vector-is-up" space
				offset.applyQuaternion(quatInverse);
	
				position.copy(scope.target).add(offset);
	
				scope.object.lookAt(scope.target);
	
				if (scope.enableDamping === true) {
	
					sphericalDelta.theta *= 1 - scope.dampingFactor;
					sphericalDelta.phi *= 1 - scope.dampingFactor;
				} else {
	
					sphericalDelta.set(0, 0, 0);
				}
	
				scale = 1;
				panOffset.set(0, 0, 0);
	
				// update condition is:
				// min(camera displacement, camera rotation in radians)^2 > EPS
				// using small-angle approximation cos(x/2) = 1 - x^2 / 8
	
				if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
	
					scope.dispatchEvent(changeEvent);
	
					lastPosition.copy(scope.object.position);
					lastQuaternion.copy(scope.object.quaternion);
					zoomChanged = false;
	
					return true;
				}
	
				return false;
			};
		}();
	
		this.dispose = function () {
	
			scope.domElement.removeEventListener('contextmenu', onContextMenu, false);
			scope.domElement.removeEventListener('mousedown', onMouseDown, false);
			scope.domElement.removeEventListener('wheel', onMouseWheel, false);
	
			scope.domElement.removeEventListener('touchstart', onTouchStart, false);
			scope.domElement.removeEventListener('touchend', onTouchEnd, false);
			scope.domElement.removeEventListener('touchmove', onTouchMove, false);
	
			document.removeEventListener('mousemove', onMouseMove, false);
			document.removeEventListener('mouseup', onMouseUp, false);
	
			window.removeEventListener('keydown', onKeyDown, false);
	
			//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?
		};
	
		//
		// internals
		//
	
		var scope = this;
	
		var changeEvent = { type: 'change' };
		var startEvent = { type: 'start' };
		var endEvent = { type: 'end' };
	
		var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };
	
		var state = STATE.NONE;
	
		var EPS = 0.000001;
	
		// current position in spherical coordinates
		var spherical = new THREE.Spherical();
		var sphericalDelta = new THREE.Spherical();
	
		var scale = 1;
		var panOffset = new THREE.Vector3();
		var zoomChanged = false;
	
		var rotateStart = new THREE.Vector2();
		var rotateEnd = new THREE.Vector2();
		var rotateDelta = new THREE.Vector2();
	
		var panStart = new THREE.Vector2();
		var panEnd = new THREE.Vector2();
		var panDelta = new THREE.Vector2();
	
		var dollyStart = new THREE.Vector2();
		var dollyEnd = new THREE.Vector2();
		var dollyDelta = new THREE.Vector2();
	
		function getAutoRotationAngle() {
	
			return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
		}
	
		function getZoomScale() {
	
			return Math.pow(0.95, scope.zoomSpeed);
		}
	
		function rotateLeft(angle) {
	
			sphericalDelta.theta -= angle;
		}
	
		function rotateUp(angle) {
	
			sphericalDelta.phi -= angle;
		}
	
		var panLeft = function () {
	
			var v = new THREE.Vector3();
	
			return function panLeft(distance, objectMatrix) {
	
				v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
				v.multiplyScalar(-distance);
	
				panOffset.add(v);
			};
		}();
	
		var panUp = function () {
	
			var v = new THREE.Vector3();
	
			return function panUp(distance, objectMatrix) {
	
				v.setFromMatrixColumn(objectMatrix, 1); // get Y column of objectMatrix
				v.multiplyScalar(distance);
	
				panOffset.add(v);
			};
		}();
	
		// deltaX and deltaY are in pixels; right and down are positive
		var pan = function () {
	
			var offset = new THREE.Vector3();
	
			return function pan(deltaX, deltaY) {
	
				var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
	
				if (scope.object instanceof THREE.PerspectiveCamera) {
	
					// perspective
					var position = scope.object.position;
					offset.copy(position).sub(scope.target);
					var targetDistance = offset.length();
	
					// half of the fov is center to top of screen
					targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);
	
					// we actually don't use screenWidth, since perspective camera is fixed to screen height
					panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
					panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
				} else if (scope.object instanceof THREE.OrthographicCamera) {
	
					// orthographic
					panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
					panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
				} else {
	
					// camera neither orthographic nor perspective
					console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
					scope.enablePan = false;
				}
			};
		}();
	
		function dollyIn(dollyScale) {
	
			if (scope.object instanceof THREE.PerspectiveCamera) {
	
				scale /= dollyScale;
			} else if (scope.object instanceof THREE.OrthographicCamera) {
	
				scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
				scope.object.updateProjectionMatrix();
				zoomChanged = true;
			} else {
	
				console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
				scope.enableZoom = false;
			}
		}
	
		function dollyOut(dollyScale) {
	
			if (scope.object instanceof THREE.PerspectiveCamera) {
	
				scale *= dollyScale;
			} else if (scope.object instanceof THREE.OrthographicCamera) {
	
				scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
				scope.object.updateProjectionMatrix();
				zoomChanged = true;
			} else {
	
				console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
				scope.enableZoom = false;
			}
		}
	
		//
		// event callbacks - update the object state
		//
	
		function handleMouseDownRotate(event) {
	
			//console.log( 'handleMouseDownRotate' );
	
			rotateStart.set(event.clientX, event.clientY);
		}
	
		function handleMouseDownDolly(event) {
	
			//console.log( 'handleMouseDownDolly' );
	
			dollyStart.set(event.clientX, event.clientY);
		}
	
		function handleMouseDownPan(event) {
	
			//console.log( 'handleMouseDownPan' );
	
			panStart.set(event.clientX, event.clientY);
		}
	
		function handleMouseMoveRotate(event) {
	
			//console.log( 'handleMouseMoveRotate' );
	
			rotateEnd.set(event.clientX, event.clientY);
			rotateDelta.subVectors(rotateEnd, rotateStart);
	
			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
	
			// rotating across whole screen goes 360 degrees around
			rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);
	
			// rotating up and down along whole screen attempts to go 360, but limited to 180
			rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
	
			rotateStart.copy(rotateEnd);
	
			scope.update();
		}
	
		function handleMouseMoveDolly(event) {
	
			//console.log( 'handleMouseMoveDolly' );
	
			dollyEnd.set(event.clientX, event.clientY);
	
			dollyDelta.subVectors(dollyEnd, dollyStart);
	
			if (dollyDelta.y > 0) {
	
				dollyIn(getZoomScale());
			} else if (dollyDelta.y < 0) {
	
				dollyOut(getZoomScale());
			}
	
			dollyStart.copy(dollyEnd);
	
			scope.update();
		}
	
		function handleMouseMovePan(event) {
	
			//console.log( 'handleMouseMovePan' );
	
			panEnd.set(event.clientX, event.clientY);
	
			panDelta.subVectors(panEnd, panStart);
	
			pan(panDelta.x, panDelta.y);
	
			panStart.copy(panEnd);
	
			scope.update();
		}
	
		function handleMouseUp(event) {
	
			//console.log( 'handleMouseUp' );
	
		}
	
		function handleMouseWheel(event) {
	
			//console.log( 'handleMouseWheel' );
	
			if (event.deltaY < 0) {
	
				dollyOut(getZoomScale());
			} else if (event.deltaY > 0) {
	
				dollyIn(getZoomScale());
			}
	
			scope.update();
		}
	
		function handleKeyDown(event) {
	
			//console.log( 'handleKeyDown' );
	
			switch (event.keyCode) {
	
				case scope.keys.UP:
					pan(0, scope.keyPanSpeed);
					scope.update();
					break;
	
				case scope.keys.BOTTOM:
					pan(0, -scope.keyPanSpeed);
					scope.update();
					break;
	
				case scope.keys.LEFT:
					pan(scope.keyPanSpeed, 0);
					scope.update();
					break;
	
				case scope.keys.RIGHT:
					pan(-scope.keyPanSpeed, 0);
					scope.update();
					break;
	
			}
		}
	
		function handleTouchStartRotate(event) {
	
			//console.log( 'handleTouchStartRotate' );
	
			rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
		}
	
		function handleTouchStartDolly(event) {
	
			//console.log( 'handleTouchStartDolly' );
	
			var dx = event.touches[0].pageX - event.touches[1].pageX;
			var dy = event.touches[0].pageY - event.touches[1].pageY;
	
			var distance = Math.sqrt(dx * dx + dy * dy);
	
			dollyStart.set(0, distance);
		}
	
		function handleTouchStartPan(event) {
	
			//console.log( 'handleTouchStartPan' );
	
			panStart.set(event.touches[0].pageX, event.touches[0].pageY);
		}
	
		function handleTouchMoveRotate(event) {
	
			//console.log( 'handleTouchMoveRotate' );
	
			rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
			rotateDelta.subVectors(rotateEnd, rotateStart);
	
			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;
	
			// rotating across whole screen goes 360 degrees around
			rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);
	
			// rotating up and down along whole screen attempts to go 360, but limited to 180
			rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);
	
			rotateStart.copy(rotateEnd);
	
			scope.update();
		}
	
		function handleTouchMoveDolly(event) {
	
			//console.log( 'handleTouchMoveDolly' );
	
			var dx = event.touches[0].pageX - event.touches[1].pageX;
			var dy = event.touches[0].pageY - event.touches[1].pageY;
	
			var distance = Math.sqrt(dx * dx + dy * dy);
	
			dollyEnd.set(0, distance);
	
			dollyDelta.subVectors(dollyEnd, dollyStart);
	
			if (dollyDelta.y > 0) {
	
				dollyOut(getZoomScale());
			} else if (dollyDelta.y < 0) {
	
				dollyIn(getZoomScale());
			}
	
			dollyStart.copy(dollyEnd);
	
			scope.update();
		}
	
		function handleTouchMovePan(event) {
	
			//console.log( 'handleTouchMovePan' );
	
			panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
	
			panDelta.subVectors(panEnd, panStart);
	
			pan(panDelta.x, panDelta.y);
	
			panStart.copy(panEnd);
	
			scope.update();
		}
	
		function handleTouchEnd(event) {}
	
		//console.log( 'handleTouchEnd' );
	
		//
		// event handlers - FSM: listen for events and reset state
		//
	
		function onMouseDown(event) {
	
			if (scope.enabled === false) return;
	
			event.preventDefault();
	
			if (event.button === scope.mouseButtons.ORBIT) {
	
				if (scope.enableRotate === false) return;
	
				handleMouseDownRotate(event);
	
				state = STATE.ROTATE;
			} else if (event.button === scope.mouseButtons.ZOOM) {
	
				if (scope.enableZoom === false) return;
	
				handleMouseDownDolly(event);
	
				state = STATE.DOLLY;
			} else if (event.button === scope.mouseButtons.PAN) {
	
				if (scope.enablePan === false) return;
	
				handleMouseDownPan(event);
	
				state = STATE.PAN;
			}
	
			if (state !== STATE.NONE) {
	
				document.addEventListener('mousemove', onMouseMove, false);
				document.addEventListener('mouseup', onMouseUp, false);
	
				scope.dispatchEvent(startEvent);
			}
		}
	
		function onMouseMove(event) {
	
			if (scope.enabled === false) return;
	
			event.preventDefault();
	
			if (state === STATE.ROTATE) {
	
				if (scope.enableRotate === false) return;
	
				handleMouseMoveRotate(event);
			} else if (state === STATE.DOLLY) {
	
				if (scope.enableZoom === false) return;
	
				handleMouseMoveDolly(event);
			} else if (state === STATE.PAN) {
	
				if (scope.enablePan === false) return;
	
				handleMouseMovePan(event);
			}
		}
	
		function onMouseUp(event) {
	
			if (scope.enabled === false) return;
	
			handleMouseUp(event);
	
			document.removeEventListener('mousemove', onMouseMove, false);
			document.removeEventListener('mouseup', onMouseUp, false);
	
			scope.dispatchEvent(endEvent);
	
			state = STATE.NONE;
		}
	
		function onMouseWheel(event) {
	
			if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;
	
			event.preventDefault();
			event.stopPropagation();
	
			handleMouseWheel(event);
	
			scope.dispatchEvent(startEvent); // not sure why these are here...
			scope.dispatchEvent(endEvent);
		}
	
		function onKeyDown(event) {
	
			if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;
	
			handleKeyDown(event);
		}
	
		function onTouchStart(event) {
	
			if (scope.enabled === false) return;
	
			switch (event.touches.length) {
	
				case 1:
					// one-fingered touch: rotate
	
					if (scope.enableRotate === false) return;
	
					handleTouchStartRotate(event);
	
					state = STATE.TOUCH_ROTATE;
	
					break;
	
				case 2:
					// two-fingered touch: dolly
	
					if (scope.enableZoom === false) return;
	
					handleTouchStartDolly(event);
	
					state = STATE.TOUCH_DOLLY;
	
					break;
	
				case 3:
					// three-fingered touch: pan
	
					if (scope.enablePan === false) return;
	
					handleTouchStartPan(event);
	
					state = STATE.TOUCH_PAN;
	
					break;
	
				default:
	
					state = STATE.NONE;
	
			}
	
			if (state !== STATE.NONE) {
	
				scope.dispatchEvent(startEvent);
			}
		}
	
		function onTouchMove(event) {
	
			if (scope.enabled === false) return;
	
			event.preventDefault();
			event.stopPropagation();
	
			switch (event.touches.length) {
	
				case 1:
					// one-fingered touch: rotate
	
					if (scope.enableRotate === false) return;
					if (state !== STATE.TOUCH_ROTATE) return; // is this needed?...
	
					handleTouchMoveRotate(event);
	
					break;
	
				case 2:
					// two-fingered touch: dolly
	
					if (scope.enableZoom === false) return;
					if (state !== STATE.TOUCH_DOLLY) return; // is this needed?...
	
					handleTouchMoveDolly(event);
	
					break;
	
				case 3:
					// three-fingered touch: pan
	
					if (scope.enablePan === false) return;
					if (state !== STATE.TOUCH_PAN) return; // is this needed?...
	
					handleTouchMovePan(event);
	
					break;
	
				default:
	
					state = STATE.NONE;
	
			}
		}
	
		function onTouchEnd(event) {
	
			if (scope.enabled === false) return;
	
			handleTouchEnd(event);
	
			scope.dispatchEvent(endEvent);
	
			state = STATE.NONE;
		}
	
		function onContextMenu(event) {
	
			event.preventDefault();
		}
	
		//
	
		scope.domElement.addEventListener('contextmenu', onContextMenu, false);
	
		scope.domElement.addEventListener('mousedown', onMouseDown, false);
		scope.domElement.addEventListener('wheel', onMouseWheel, false);
	
		scope.domElement.addEventListener('touchstart', onTouchStart, false);
		scope.domElement.addEventListener('touchend', onTouchEnd, false);
		scope.domElement.addEventListener('touchmove', onTouchMove, false);
	
		window.addEventListener('keydown', onKeyDown, false);
	
		// force an update at start
	
		this.update();
	};
	
	THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);
	THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;
	
	Object.defineProperties(THREE.OrbitControls.prototype, {
	
		center: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .center has been renamed to .target');
				return this.target;
			}
	
		},
	
		// backward compatibility
	
		noZoom: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
				return !this.enableZoom;
			},
	
			set: function set(value) {
	
				console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
				this.enableZoom = !value;
			}
	
		},
	
		noRotate: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
				return !this.enableRotate;
			},
	
			set: function set(value) {
	
				console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
				this.enableRotate = !value;
			}
	
		},
	
		noPan: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
				return !this.enablePan;
			},
	
			set: function set(value) {
	
				console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
				this.enablePan = !value;
			}
	
		},
	
		noKeys: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
				return !this.enableKeys;
			},
	
			set: function set(value) {
	
				console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
				this.enableKeys = !value;
			}
	
		},
	
		staticMoving: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
				return !this.enableDamping;
			},
	
			set: function set(value) {
	
				console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
				this.enableDamping = !value;
			}
	
		},
	
		dynamicDampingFactor: {
	
			get: function get() {
	
				console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
				return this.dampingFactor;
			},
	
			set: function set(value) {
	
				console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
				this.dampingFactor = value;
			}
	
		}
	
	});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTliOTQ5MDFkZjNkZGMzNTA0YjkiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvcmUvQ29uZi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9VdGlsLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hbmltYXRpb24vcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL2NhbmNlbEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYXJyYXkvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy91YS9jaGVja0Vudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9saWJzL3VhLXBhcnNlci5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9pbWcvcHJlbG9hZEltZy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0blR3aXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5MaW5lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuRmFjZUJvb2suanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9teWxpYnMvRnVuYy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3BhZ2UvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0VudHJ5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9saWJzL09yYml0Q29udHJvbHMuanMiXSwibmFtZXMiOlsid2luZG93IiwiZ2IiLCJ1bmRlZmluZWQiLCJpbiIsImNvbW1vbiIsIm1haW4iLCJDb21tb24iLCJzZXR1cCIsInNldEV2ZW50cyIsImNvbmYiLCJ1IiwiZiIsInV0IiwiJCIsImRvY3VtZW50Iiwib24iLCJvblJlYWR5IiwiYmluZCIsIm9uTG9hZCIsIkNvbmYiLCJSRUxFQVNFIiwiRkxHIiwiTE9HIiwiUEFSQU0iLCJTVEFUUyIsImRlZlciLCJkZWZIIiwiVyIsIkgiLCJzcFciLCJzcEgiLCJicCIsIm1vZGUiLCJrZXlzIiwic3dpdGNoTW9kZSIsInNlYzAySW1nTnVtIiwieW91dHViZUlEMDEiLCJ5b3V0dWJlSUQwMiIsIndlYkZvbnRMb2FkZWQiLCJpIiwia2V5IiwibGVuIiwicGFyYW0iLCJyZWYiLCJyZWYxIiwidmFsdWUiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlcGxhY2UiLCJzcGxpdCIsImxlbmd0aCIsImoiLCJvYmoiLCJrIiwidmFsIiwiVXRpbCIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJhcHBWIiwiYXBwVmVyc2lvbiIsImlzUmVzU1AiLCJpc1Jlc1BDIiwiaXNQQyIsImlzU1AiLCJpc1RBQiIsImlzTUIiLCJpc0lFIiwiaXNTZXRTUFNpemUiLCJzdGFydFRpbWUiLCJlbGFwc2VkVGltZSIsIm5vdyIsIkRhdGUiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtaW4xIiwibWF4MSIsIm1pbjIiLCJtYXgyIiwiaGl0IiwicmFuZ2UiLCJudW0iLCJyZXNNaW4iLCJyZXNNYXgiLCJiYXNlTWluIiwiYmFzZU1heCIsInAiLCJuIiwicG9zIiwiU3RyaW5nIiwiaW5kZXhPZiIsInN1YnN0ciIsIm51bWVyYXRvciIsImRlbm9taW5hdG9yIiwicmFkaWFucyIsIlBJIiwiYW5nbGUiLCJwMSIsInAyIiwic3FydCIsInBvdyIsIngiLCJ5IiwiYXJyIiwic29ydCIsImEiLCJiIiwiZ2V0VGltZSIsImZsZyIsImNzcyIsIm1lZGlhIiwicGF0dGVybiIsIlJlZ0V4cCIsImpvaW4iLCJ0ZXN0IiwiYWRkQ2xhc3MiLCJpc0lwYWQiLCJpc0FuZHJvaWQiLCJwbGF0Zm9ybSIsImlzSW9zIiwibXNpZSIsInBhcnNlSW50IiwibWF0Y2giLCJpc0llMTBVbmRlciIsImxvZyIsImlzSUUxMSIsInJlbW92ZUNsYXNzIiwidmVyc2lvbiIsInBhcnNlRmxvYXQiLCJzbGljZSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInVybCIsImhyZWYiLCJwYXJhbUl0ZW1zIiwibGlzdCIsInBhcmFtSXRlbSIsImhhc2giLCJsIiwibGVuMSIsImNvb2tpZSIsImlzQ29udGFpbiIsInIiLCJnIiwic3RyIiwidG9TdHJpbmciLCJBcnJheSIsImNvbnRhaW4iLCJudW1iZXIiLCJfcG93Iiwicm91bmQiLCJyZXMiLCJvcmciLCJkZXN0IiwiYmVmb3JlIiwiYWZ0ZXIiLCJnZXROb3ciLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kIiwiZ2V0U2Vjb25kcyIsIm1pbGxTZWNvbmQiLCJnZXRNaWxsaXNlY29uZHMiLCJnZXREYXRlIiwibW9udGhkYXlzIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsIndlZWtEYXlKUCIsIndESiIsImdldERheSIsIndlZWtEYXlFTiIsIndERSIsImRhdGUiLCJOdW1iZXIiLCJpZ25vcmVBcnJheSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCIkdGFyZ2V0IiwiJGltZyIsImVhY2giLCJ3Iiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwiYXR0ciIsInRyaWdnZXIiLCJzZWxmIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib2ZmIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJwYXRobmFtZSIsImV2ZW50IiwicmV0dXJuVmFsdWUiLCJrZXlDb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ud2hlZWwiLCJvbm1vdXNld2hlZWwiLCJvbnRvdWNobW92ZSIsIm9ua2V5ZG93biIsInByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJVdGlscyIsIl9zZXR1cCIsImNoZWNrRW52aXJvbm1lbnQiLCJjb25zb2xlIiwiaXNDaHJvbWUiLCJpc01vYmlsZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl90aGlzIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJBcnIiLCJ0IiwicGFyc2VyIiwicmVxdWlyZSIsImJyb3dzZXIiLCJnZXRCcm93c2VyIiwibmFtZSIsImRldmljZSIsImdldERldmljZSIsInR5cGUiLCJnZXRPUyIsIm1vZGVsIiwiZ2V0VUEiLCJzIiwibyIsImMiLCJkIiwidiIsIm0iLCJFIiwiUyIsImV4dGVuZCIsImNvbmNhdCIsImhhcyIsImxvd2VyaXplIiwibWFqb3IiLCJ0cmltIiwicmd4IiwiYXJndW1lbnRzIiwiaGFzT3duUHJvcGVydHkiLCJleGVjIiwiVCIsIm9sZHNhZmFyaSIsImFtYXpvbiIsInNwcmludCIsInZlbmRvciIsIkhUQyIsIlNwcmludCIsIm9zIiwid2luZG93cyIsIk1FIiwiWFAiLCJWaXN0YSIsIlJUIiwiTiIsImNwdSIsImVuZ2luZSIsIkMiLCJhcHBseSIsImdldENQVSIsImdldEVuZ2luZSIsImdldFJlc3VsdCIsInNldFVBIiwiVkVSU0lPTiIsIkJST1dTRVIiLCJOQU1FIiwiTUFKT1IiLCJDUFUiLCJBUkNISVRFQ1RVUkUiLCJERVZJQ0UiLCJNT0RFTCIsIlZFTkRPUiIsIlRZUEUiLCJDT05TT0xFIiwiTU9CSUxFIiwiU01BUlRUViIsIlRBQkxFVCIsIldFQVJBQkxFIiwiRU1CRURERUQiLCJFTkdJTkUiLCJPUyIsImV4cG9ydHMiLCJtb2R1bGUiLCJVQVBhcnNlciIsImpRdWVyeSIsIlplcHRvIiwiTCIsImdldCIsInNldCIsImltZ1BhdGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsImltZyIsIkltYWdlIiwiY2FsbGVlIiwic3JjIiwiJGJ0biIsInRleHQiLCJzaGFyZVVSTCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm9wZW4iLCJkZXNjcmlwdGlvbiIsIkZ1bmMiLCJibGFuayIsImRlYnVnZ2VyIiwiZXhwYW5kalF1ZXJ5IiwibWV0aG9kcyIsInByZXBlbmQiLCJGUFMiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsInRpbWVyIiwiZm4iLCJhZGp1c3QiLCJhZGp1c3RXIiwiYWRqdXN0SCIsIkNTUyIsInN1cHBvcnRzIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaXNBbmRyb2lkVmVyc2lvbiIsImFsZXJ0IiwiTWFpbiIsInBhZ2UiLCJkYXRhIiwiRGlzcGxheVRvcCIsImNhbnZhcyIsIm91dHB1dCIsImdldEVsZW1lbnRCeUlkIiwiQ2FudmFzIiwib3B0cyIsImNyZWF0ZUVsZW1lbnQiLCJjYW1lcmEiLCJyZW5kZXJlciIsInNjZW5lIiwiY3ViZSIsImNyZWF0ZUNhbWVyYSIsIl9jcmVhdGVDYW1lcmEiLCJjcmVhdGVSZW5kZXJlciIsIl9jcmVhdGVSZW5kZXJlciIsImNyZWF0ZVNjZW5lIiwiX2NyZWF0ZVNjZW5lIiwiY3JlYXRlT2JqZWN0IiwiX2NyZWF0ZU9iamVjdCIsIm9yYml0Q29udHJvbHMiLCJfb3JiaXRDb250cm9scyIsIm9uUmVzaXplIiwiX29uUmVzaXplIiwiVXBkYXRlIiwiX1VwZGF0ZSIsIlRIUkVFIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJsb29rQXQiLCJWZWN0b3IzIiwiV2ViR0xSZW5kZXJlciIsImFscGhhIiwiYW50aWFsaWFzIiwic3RlbmNpbCIsImRlcHRoIiwicHJlbXVsdGlwbGllZEFscGhhIiwic2V0Q2xlYXJDb2xvciIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsIlNjZW5lIiwiY3ViZUdlb21ldHJ5IiwiQm94R2VvbWV0cnkiLCJjdWJlTWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwid2lyZWZyYW1lIiwiTWVzaCIsInJlbmRlciIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJjb250cm9scyIsIk9yYml0Q29udHJvbHMiLCJhdXRvUm90YXRlIiwiY2xvY2siLCJDbG9jayIsImRlbHRhIiwiZ2V0RGVsdGEiLCJ1cGRhdGUiLCJFbnRyeSIsIm9iamVjdCIsImVuYWJsZWQiLCJ0YXJnZXQiLCJtaW5EaXN0YW5jZSIsIm1heERpc3RhbmNlIiwiSW5maW5pdHkiLCJtaW5ab29tIiwibWF4Wm9vbSIsIm1pblBvbGFyQW5nbGUiLCJtYXhQb2xhckFuZ2xlIiwibWluQXppbXV0aEFuZ2xlIiwibWF4QXppbXV0aEFuZ2xlIiwiZW5hYmxlRGFtcGluZyIsImRhbXBpbmdGYWN0b3IiLCJlbmFibGVab29tIiwiem9vbVNwZWVkIiwiZW5hYmxlUm90YXRlIiwicm90YXRlU3BlZWQiLCJlbmFibGVQYW4iLCJrZXlQYW5TcGVlZCIsImF1dG9Sb3RhdGVTcGVlZCIsImVuYWJsZUtleXMiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkJPVFRPTSIsIm1vdXNlQnV0dG9ucyIsIk9SQklUIiwiTU9VU0UiLCJaT09NIiwiTUlERExFIiwiUEFOIiwidGFyZ2V0MCIsImNsb25lIiwicG9zaXRpb24wIiwiem9vbTAiLCJ6b29tIiwiZ2V0UG9sYXJBbmdsZSIsInNwaGVyaWNhbCIsInBoaSIsImdldEF6aW11dGhhbEFuZ2xlIiwidGhldGEiLCJyZXNldCIsInNjb3BlIiwiY29weSIsImRpc3BhdGNoRXZlbnQiLCJjaGFuZ2VFdmVudCIsInN0YXRlIiwiU1RBVEUiLCJOT05FIiwib2Zmc2V0IiwicXVhdCIsIlF1YXRlcm5pb24iLCJzZXRGcm9tVW5pdFZlY3RvcnMiLCJ1cCIsInF1YXRJbnZlcnNlIiwiaW52ZXJzZSIsImxhc3RQb3NpdGlvbiIsImxhc3RRdWF0ZXJuaW9uIiwic3ViIiwiYXBwbHlRdWF0ZXJuaW9uIiwic2V0RnJvbVZlY3RvcjMiLCJyb3RhdGVMZWZ0IiwiZ2V0QXV0b1JvdGF0aW9uQW5nbGUiLCJzcGhlcmljYWxEZWx0YSIsIm1ha2VTYWZlIiwicmFkaXVzIiwic2NhbGUiLCJwYW5PZmZzZXQiLCJzZXRGcm9tU3BoZXJpY2FsIiwiem9vbUNoYW5nZWQiLCJkaXN0YW5jZVRvU3F1YXJlZCIsIkVQUyIsImRvdCIsInF1YXRlcm5pb24iLCJkaXNwb3NlIiwib25Db250ZXh0TWVudSIsIm9uTW91c2VEb3duIiwib25Nb3VzZVdoZWVsIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsIm9uVG91Y2hNb3ZlIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJvbktleURvd24iLCJzdGFydEV2ZW50IiwiZW5kRXZlbnQiLCJST1RBVEUiLCJET0xMWSIsIlRPVUNIX1JPVEFURSIsIlRPVUNIX0RPTExZIiwiVE9VQ0hfUEFOIiwiU3BoZXJpY2FsIiwicm90YXRlU3RhcnQiLCJWZWN0b3IyIiwicm90YXRlRW5kIiwicm90YXRlRGVsdGEiLCJwYW5TdGFydCIsInBhbkVuZCIsInBhbkRlbHRhIiwiZG9sbHlTdGFydCIsImRvbGx5RW5kIiwiZG9sbHlEZWx0YSIsImdldFpvb21TY2FsZSIsInJvdGF0ZVVwIiwicGFuTGVmdCIsImRpc3RhbmNlIiwib2JqZWN0TWF0cml4Iiwic2V0RnJvbU1hdHJpeENvbHVtbiIsIm11bHRpcGx5U2NhbGFyIiwicGFuVXAiLCJwYW4iLCJkZWx0YVgiLCJkZWx0YVkiLCJlbGVtZW50IiwiYm9keSIsInRhcmdldERpc3RhbmNlIiwidGFuIiwiZm92IiwiY2xpZW50SGVpZ2h0IiwibWF0cml4IiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicmlnaHQiLCJsZWZ0IiwiY2xpZW50V2lkdGgiLCJ0b3AiLCJib3R0b20iLCJ3YXJuIiwiZG9sbHlJbiIsImRvbGx5U2NhbGUiLCJkb2xseU91dCIsImhhbmRsZU1vdXNlRG93blJvdGF0ZSIsImNsaWVudFgiLCJjbGllbnRZIiwiaGFuZGxlTW91c2VEb3duRG9sbHkiLCJoYW5kbGVNb3VzZURvd25QYW4iLCJoYW5kbGVNb3VzZU1vdmVSb3RhdGUiLCJzdWJWZWN0b3JzIiwiaGFuZGxlTW91c2VNb3ZlRG9sbHkiLCJoYW5kbGVNb3VzZU1vdmVQYW4iLCJoYW5kbGVNb3VzZVVwIiwiaGFuZGxlTW91c2VXaGVlbCIsImhhbmRsZUtleURvd24iLCJoYW5kbGVUb3VjaFN0YXJ0Um90YXRlIiwidG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJoYW5kbGVUb3VjaFN0YXJ0RG9sbHkiLCJkeCIsImR5IiwiaGFuZGxlVG91Y2hTdGFydFBhbiIsImhhbmRsZVRvdWNoTW92ZVJvdGF0ZSIsImhhbmRsZVRvdWNoTW92ZURvbGx5IiwiaGFuZGxlVG91Y2hNb3ZlUGFuIiwiaGFuZGxlVG91Y2hFbmQiLCJidXR0b24iLCJzdG9wUHJvcGFnYXRpb24iLCJjcmVhdGUiLCJFdmVudERpc3BhdGNoZXIiLCJjb25zdHJ1Y3RvciIsImRlZmluZVByb3BlcnRpZXMiLCJjZW50ZXIiLCJub1pvb20iLCJub1JvdGF0ZSIsIm5vUGFuIiwibm9LZXlzIiwic3RhdGljTW92aW5nIiwiZHluYW1pY0RhbXBpbmdGYWN0b3IiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM5QkE7Ozs7QUFDQTs7Ozs7O0FBVEE7Ozs7Ozs7O0FBV0EsRUFBQyxZQUFJOztBQUVIO0FBQ0EsT0FBSUEsT0FBT0MsRUFBUCxLQUFZQyxTQUFoQixFQUEyQkYsT0FBT0MsRUFBUCxHQUFZLEVBQVo7QUFDM0JELFVBQU9DLEVBQVAsQ0FBVUUsRUFBVixHQUFlLEVBQWYsQ0FKRyxDQUlnQjs7QUFFbkJGLE1BQUdFLEVBQUgsQ0FBTUMsTUFBTixHQUFlLHNCQUFmO0FBQ0FILE1BQUdFLEVBQUgsQ0FBTUUsSUFBTixHQUFhLG9CQUFiO0FBRUQsRUFURCxJOzs7Ozs7Ozs7Ozs7c2pCQ1hBOzs7Ozs7OztBQVFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBOztLQUVxQkMsTTtBQUVuQixxQkFBYztBQUFBOztBQUVaLFVBQUtDLEtBQUw7QUFDQSxVQUFLQyxTQUFMO0FBRUQ7Ozs7NkJBRU07O0FBRVA7Ozs7O0FBS0VQLFVBQUdFLEVBQUgsQ0FBTU0sSUFBTixHQUFhLG9CQUFiO0FBQ0FS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dkZ3Qzs7QUF5R3ZEZ2hCLHdCQUF1Qjs7QUFFdEI1USxRQUFLLGVBQVk7O0FBRWhCM0YsWUFBUStULElBQVIsQ0FBYywwRkFBZDtBQUNBLFdBQU8sS0FBS2xILGFBQVo7QUFFQSxJQVBxQjs7QUFTdEJqSCxRQUFLLGFBQVdyUSxLQUFYLEVBQW1COztBQUV2QnlLLFlBQVErVCxJQUFSLENBQWMsMEZBQWQ7QUFDQSxTQUFLbEgsYUFBTCxHQUFxQnRYLEtBQXJCO0FBRUE7O0FBZHFCOztBQXpHZ0MsRUFBeEQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTliOTQ5MDFkZjNkZGMzNTA0YjkiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBUb3BcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IENvbW1vbiBmcm9tICcuL3BhZ2UvQ29tbW9uJztcbmltcG9ydCBNYWluIGZyb20gJy4vcGFnZS9NYWluJztcblxuKCgpPT57XG5cbiAgLy8gZ2xvYmFs44Kq44OW44K444Kn44Kv44OIXG4gIGlmICh3aW5kb3cuZ2I9PT11bmRlZmluZWQpIHdpbmRvdy5nYiA9IHt9O1xuICB3aW5kb3cuZ2IuaW4gPSB7fTsgLy9pbnN0YW5jZVxuXG4gIGdiLmluLmNvbW1vbiA9IG5ldyBDb21tb24oKTtcbiAgZ2IuaW4ubWFpbiA9IG5ldyBNYWluKCk7XG5cbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBDb21tb25cbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IENvbmYgZnJvbSAnLi4vQ29yZS9Db25mJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL215bGlicy9VdGlsJztcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy9VdGlscyc7XG5pbXBvcnQgRnVuYyBmcm9tICcuLi9teWxpYnMvRnVuYyc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuXHRzZXR1cCgpIHtcblxuXHRcdC8qKlxuICAgICAqIEB0eXBlIHtDb25mfSA6IOWIneacn+WApOOBruioreWumuODu+ODh+ODvOOCv+OBrumFjee9rlxuXHRcdCAqIEB0eXBlIHtVdGlsfSA6IFV0aWzplqLmlbDjga7liJ3mnJ/ljJZcblx0XHQgKiBAdHlwZSB7RnVuY30gOiDjgqTjg5njg7Pjg4jjg57jg43jg7zjgrjjg6Pjg7zjga7oqK3nva5cblx0XHQgKi9cbiAgICBnYi5pbi5jb25mID0gbmV3IENvbmYoKTtcbiAgICBnYi5pbi51ID0gbmV3IFV0aWwoKTtcbiAgICBnYi5pbi5mID0gbmV3IEZ1bmMoKTtcblxuICAgIGdiLmluLnV0ID0gbmV3IFV0aWxzKCk7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OH44OQ44Kk44K544O744OW44Op44Km44K25Yik5a6aXG4gICAgLy8gIOOCueODnuODm+OBruWQkeOBjeWIpOWumlxuICAgIC8vICDjg5rjg7zjgrjmg4XloLHlj5blvpdcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIFxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbigncmVhZHknLCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENvbmZcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuLy8gaW1wb3J0IFNvdW5kRGF0YSBmcm9tICcuL0RhdGEvU291bmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25mIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDmnKznlarjg5Xjg6njgrBcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgXG4gICAgdGhpcy5SRUxFQVNFID0gdHJ1ZTtcbiAgICAvLyB0aGlzLlJFTEVBU0UgPSBmYWxzZTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5Xjg6njgrDplqLpgKNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLkZMRyA9IHtcbiAgICAgIExPRzp0cnVlLCAgLy8g44Ot44Kw5Ye65YqbXG4gICAgICBQQVJBTTp0cnVlLCAvLyDjg5Hjg6njg6Hjg7zjgr/jg4Hjgqfjg4Pjgq9cbiAgICAgIFNUQVRTOnRydWUgIC8vIFN0YXRz6KGo56S6XG4gICAgfTtcbiAgICBpZiAoIXRoaXMuUkVMRUFTRSkge1xuICAgICAgdGhpcy5GTEcgPSB7XG4gICAgICAgIExPRzpmYWxzZSxcbiAgICAgICAgUEFSQU06ZmFsc2UsXG4gICAgICAgIFNUQVRTOmZhbHNlIFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg5Z+65pysIHdpZHRoIGhlaWdodFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuZGVmVyA9IDEzMDA7XG4gICAgdGhpcy5kZWZIID0gODUwO1xuXG4gICAgdGhpcy5XID0gMTIwMDtcbiAgICB0aGlzLkggPSA3NTA7XG5cbiAgICB0aGlzLnNwVyA9IDM3NTtcbiAgICB0aGlzLnNwSCA9IDY2NztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5bjg6zjgqTjgq/jg53jgqTjg7Pjg4hcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmJwID0gNzY4O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIG1vZGVcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIHRoaXMua2V5cyA9IFtcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ21vdmllJyxcbiAgICAgICAgICAndmFsdWUnOiBbJ21vcm5pbmcnLCdhZnRlcm5vb24nLCduaWdodCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ2RhdGEnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnZGF0YTAxJywnZGF0YTAyJywnZGF0YTAzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgICdrZXknOiAncHJvZHVjdCcsXG4gICAgICAgICAgJ3ZhbHVlJzogWycwMSddLFxuICAgICAgfSxcbiAgICBdXG4gICAgdGhpcy5zd2l0Y2hNb2RlKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgc291bmQgZGF0YVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHRoaXMuc291bmREYXRhID0gbmV3IFNvdW5kRGF0YSgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHNlYzAyIGJnIEltZyBOdW1cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnNlYzAySW1nTnVtID0gMzk2O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHlvdXR1YmUgSURcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnlvdXR1YmVJRDAxID0gJ3hXMm9OcE5yS2QwJztcbiAgICB0aGlzLnlvdXR1YmVJRDAyID0gJ3QyV2VSUmRBRmVJJztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICB3ZWIgZm9udCBsb2FkZWRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLndlYkZvbnRMb2FkZWQgPSBmYWxzZTtcblxuICB9XG5cblxuICBzd2l0Y2hNb2RlKCl7XG5cbiAgICB2YXIgaSwga2V5LCBsZW4sIHBhcmFtLCByZWYsIHJlZjEsIHZhbHVlO1xuXG4gICAgcmVmID0gbG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykuc3BsaXQoJyYnKTtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgcGFyYW0gPSByZWZbaV07XG4gICAgICByZWYxID0gcGFyYW0uc3BsaXQoJz0nKSwga2V5ID0gcmVmMVswXSwgdmFsdWUgPSByZWYxWzFdO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMua2V5cy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgIHZhciBvYmogPSB0aGlzLmtleXNbal07XG5cbiAgICAgICAgLy8g44OR44Op44Oh44O844K/44GM44Kt44O844Go5LiA57eS44Gg44Gj44Gf44KJXG4gICAgICAgIGlmIChvYmoua2V5ID09PSBrZXkpIHtcblxuICAgICAgICAgIC8vIOWQhOWApOOBqOavlOi8g1xuICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgb2JqLnZhbHVlLmxlbmd0aDsgaysrKSB7XG5cbiAgICAgICAgICAgIHZhciB2YWwgPSBvYmoudmFsdWVba107XG5cbiAgICAgICAgICAgIC8vIOOCreODvOOCknRoaXMua2V5c+OBrmtleeOBq+OAgXZhbHVl44KS5q+U6LyD44GX44Gm5ZCM5YCk44Gg44Gj44Gf44KC44Gu44GrXG4gICAgICAgICAgICBpZiAodmFsID09PSB2YWx1ZSkgdGhpc1tvYmoua2V5XSA9IHZhbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH07XG5cblxuICAgICAgICB9O1xuXG4gICAgICAgIFxuICAgICAgfTtcblxuICAgIH1cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvcmUvQ29uZi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiDkvr/liKnplqLmlbDjgq/jg6njgrlcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBVdGlsXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWwge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy51YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7IC8vdXNlcmFnZW50XG4gICAgdGhpcy5hcHBWID0gd2luZG93Lm5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7IC8vYXBwVmVyc2lvblxuICAgIHRoaXMuaXNSZXNTUCA9IG51bGw7IC8vIHJlc3BvbnNpdmUgc3BcbiAgICB0aGlzLmlzUmVzUEMgPSBudWxsOyAvLyByZXNwb25zaXZlIHBjXG5cbiAgICB0aGlzLmlzUEMgPSBudWxsO1xuICAgIHRoaXMuaXNTUCA9IG51bGw7XG4gICAgdGhpcy5pc1RBQiA9IG51bGw7XG4gICAgdGhpcy5pc01CID0gbnVsbDtcblxuICAgIHRoaXMuaXNJRSA9IG51bGw7XG5cbiAgICB0aGlzLmlzU2V0U1BTaXplID0gZmFsc2U7XG5cblxuICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gbnVsbDtcbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRoXG4gICAqL1xuXG5cbiAgLyoqXG4gICAqIOODqeODs+ODgOODoOOBquWApOOCkui/lOOBmVxuICAgKiBAcGFyYW0gbWluIDog5pyA5bCP5YCkKGludClcbiAgICogQHBhcmFtIG1heCA6IOacgOWkp+WApChpbnQpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IDogbWlu44GL44KJbWF444G+44Gn44Gu44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgICovXG4gIHJhbmRvbShtaW4sIG1heCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAoKG1heCArIDEpIC0gbWluKSArIG1pbikpO1xuXG4gIH1cblxuICAvKipcbiAgICog44Op44Oz44OA44Og44Gq5pW05pWw44KSMuOBpOOBruevhOWbsuOBi+OCieWPluW+l1xuICAgKiBAcGFyYW0gbWluMSA6IOacgOWwj+WApDEoaW50KVxuICAgKiBAcGFyYW0gbWF4MSA6IOacgOWkp+WApDEoaW50KVxuICAgKiBAcGFyYW0gbWluMiA6IOacgOWwj+WApDIoaW50KVxuICAgKiBAcGFyYW0gbWF4MiA6IOacgOWkp+WApDIoaW50KVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSA6IG1pbuOBi+OCiW1heOOBvuOBp+OBruODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gICAqL1xuICByYW5kb20yKG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbiAgICBcbiAgICBpZiAodGhpcy5oaXQoMikpIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmRvbShtaW4xLCBtYXgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmFuZG9tKG1pbjIsIG1heDIpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIDEvQHJhbmdl44Gu56K6546H44GndHJ1ZeOCkuWPluW+l1xuICAgKiBAcGFyYW0gcmFuZ2UgOiDmr43mlbAoaW50KVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gICAqL1xuICBoaXQocmFuZ2UpIHtcblxuICAgIHJldHVybiB0aGlzLnJhbmRvbSgwLCByYW5nZSAtIDEpID09PSAwO1xuXG4gIH1cbiAgXG4gIC8vIDDjgYvjgonnr4Tlm7LlhoXjgafjg6njg7Pjg4Djg6DjgarmlbTmlbDjgpLlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHZhbCA6IOevhOWbsihpbnQpXG4gIC8vIHJldHVybiA6IOODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJhbmdlKHZhbCkge1xuXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKC12YWwsIHZhbCk7XG5cbiAgfVxuICBcbiAgLy8g5YCk44KS44Oe44OD44OU44Oz44KwXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBudW0gOiDjg57jg4Pjg5Tjg7PjgrDjgZnjgovlgKQoTnVtYmVyKVxuICAvLyBAcmVzTWluIDog57WQ5p6c44Go44Gq44KL5YCk44Gu5pyA5bCP5YCkKE51bWJlcilcbiAgLy8gQHJlc01heCA6IOe1kOaenOOBqOOBquOCi+WApOOBruacgOWkp+WApChOdW1iZXIpXG4gIC8vIEBiYXNlTWluIDog5YWD44Go44Gq44KL5YCk44Gu5pyA5bCP5YCkKE51bWJlcilcbiAgLy8gQGJhc2VNYXggOiDlhYPjgajjgarjgovlgKTjga7mnIDlpKflgKQoTnVtYmVyKVxuICAvLyByZXR1cm4gOiDjg57jg4Pjg5Tjg7PjgrDjgZXjgozjgZ/lgKQoTnVtYmVyKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBtYXAobnVtLCByZXNNaW4sIHJlc01heCwgYmFzZU1pbiwgYmFzZU1heCkge1xuXG4gICAgdmFyIHA7XG4gICAgaWYgKG51bSA8IGJhc2VNaW4pIHtcbiAgICAgIHJldHVybiByZXNNaW47XG4gICAgfVxuICAgIGlmIChudW0gPiBiYXNlTWF4KSB7XG4gICAgICByZXR1cm4gcmVzTWF4O1xuICAgIH1cbiAgICBwID0gKHJlc01heCAtIHJlc01pbikgLyAoYmFzZU1heCAtIGJhc2VNaW4pO1xuXG4gICAgcmV0dXJuICgobnVtIC0gYmFzZU1pbikgKiBwKSArIHJlc01pbjtcblxuICB9ICAgIFxuICBcbiAgLy8g5pWw5YCk44Gr5bCP5pWw54K556ysQG7kvY3jgb7jgafjgpLjgaTjgZHjgZ/mloflrZfliJfjgpLov5TjgZlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG51bSA6IOWApChOdW1iZXIpXG4gIC8vIEBuIDog5bCP5pWw54K544Gu5L2NKGludClcbiAgLy8gcmV0dXJuIDog5aSJ5o+b44GV44KM44Gf5YCkKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGVjaW1hbChudW0sIG4pIHtcbiAgICB2YXIgaSwgcG9zO1xuICAgIG51bSA9IFN0cmluZyhudW0pO1xuICAgIHBvcyA9IG51bS5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bS5zcGxpdChcIi5cIilbMF07XG4gICAgfVxuICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICBudW0gKz0gXCIuXCI7XG4gICAgICBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgbikge1xuICAgICAgICBudW0gKz0gXCIwXCI7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW07XG4gICAgfVxuICAgIG51bSA9IG51bS5zdWJzdHIoMCwgcG9zKSArIG51bS5zdWJzdHIocG9zLCBuICsgMSk7XG4gICAgcmV0dXJuIG51bTtcbiAgfVxuXG4gIGNsYW1wKG51bWVyYXRvcixkZW5vbWluYXRvcix2YWwpIHtcblxuICAgIHJldHVybiB2YWwgKiAobnVtZXJhdG9yIC8gZGVub21pbmF0b3IpO1xuXG4gIH1cblxuXHQvKipcbiAgICog44Op44K444Ki44Oz44KS6KeS5bqm44Gr5aSJ5o+bXG5cdCAqIEBwYXJhbSByYWRpYW5zXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdCAqL1xuICBkZWdyZWUocmFkaWFucykge1xuXG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xuXG4gIH1cblxuICAvLyB0byByYWRpYW5zXG4gIHJhZGlhbihhbmdsZSkgeyBcblxuICAgIHJldHVybiBhbmdsZSAqIE1hdGguUEkgLyAxODA7IC8vMeW6puS9leODqeOCuOOCouODs+OBi1xuXG4gIH1cblxuICBkaXN0KHAxLCBwMikge1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xuXG4gIH1cblxuICBhc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgICAvLyB2YXIgYSA9IFs1LDMsOSwxLDEwXVxuICAgIC8vIOe1kOaenDoxMCw5LDUsMywxXG5cbiAgfVxuXG4gIGRlc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIC8vIHZhciBhID0gWzUsMyw5LDEsMTBdXG4gICAgLy8g57WQ5p6cOjEsMyw1LDksMTBcblxuICB9XG5cbiAgLy8gbWFwKHZhbHVlLCBtaW4wMSwgbWF4MDEsIG1pbjAyLCBtYXgwMikge1xuXG4gIC8vICAgdmFyIGRpczAxID0gbWF4MDEgLSBtaW4wMTtcbiAgLy8gICB2YXIgZGlzMDIgPSBtYXgwMiAtIG1pbjAyXG5cbiAgLy8gICB2YXIgcmF0ZSA9IGRpczAyIC8gZGlzMDE7XG5cbiAgLy8gICB2YWx1ZSA9IHZhbHVlICogcmF0ZTtcblxuICAvLyAgIHJldHVybiB2YWx1ZTtcbiAgLy8gfVxuXG4gIGNvbnN0cmFpbih2YWx1ZSwgbWluLCBtYXgpIHtcblxuICAgIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KHZhbHVlLCBtaW4pKTtcblxuICAgIC8vIGlmICh2YWx1ZSA8PSBsb3cpIHZhbHVlID0gbG93O1xuICAgIC8vIGlmICh2YWx1ZSA+PSBoaWdoKSB2YWx1ZSA9IGhpZ2g7ICAgICBcbiAgICAvLyByZXR1cm4gdmFsdWU7XG5cbiAgfVxuXG4gIC8vIOODpuODi+ODvOOCr0lE44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVuaXF1ZSgpIHtcblxuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICB9XG4gIFxuICAvLyAqKmpxdWFyeeS9v+eUqFxuICAvLyDjg5zjgr/jg7Pjg6Ljg7zjg4nlpInmm7RcbiAgLy8gdHJ1ZeOBquOCieOCq+ODvOOCveODq+OBjOODneOCpOODs+OCv+ODvOOBruW9ouOBq1xuICAvLyBmYWxzZeOBquOCieODh+ODleOCqeODq+ODiOOBruOCq+ODvOOCveODq+OBq1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAZmxnIDog6YGp55So44GZ44KL44GL44Gp44GG44GLKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJ1dHRvbk1vZGUoZmxnKSB7XG5cbiAgICBpZiAoZmxnKSB7XG4gICAgICByZXR1cm4gJChcImJvZHlcIikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLCBcImRlZmF1bHRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIGRldmljZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc0RldmljZVNQKCl7XG5cbiAgICB2YXIgbWVkaWEgPSBbXCJpcGhvbmVcIixcImlwb2RcIixcImlwYWRcIixcImFuZHJvaWRcIixcImRyZWFtXCIsXCJjdXBjYWtlXCIsXCJibGFja2JlcnJ5OTUwMFwiLFwiYmxhY2tiZXJyeTk1MzBcIixcImJsYWNrYmVycnk5NTIwXCIsXCJibGFja2JlcnJ5OTU1MFwiLFwiYmxhY2tiZXJyeTk4MDBcIixcIndlYm9zXCIsXCJpbmNvZ25pdG9cIixcIndlYm1hdGVcIl07XG4gICAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKG1lZGlhLmpvaW4oXCJ8XCIpLFwiaVwiKTtcblxuICAgIHZhciBiID0gcGF0dGVybi50ZXN0KHRoaXMudWEpO1xuICAgIGlmIChiKSAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzRGV2aWNlU1AnKTtcblxuICAgIHRoaXMuaXNTUCA9IGI7XG5cbiAgfVxuICBpc0RldmljZVRBQigpe1xuXG4gICAgdmFyIGIgPSAodGhpcy51YS5pbmRleE9mKFwid2luZG93c1wiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJ0b3VjaFwiKSAhPSAtMSlcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcImlwYWRcIikgIT0gLTFcbiAgICAgIHx8ICh0aGlzLnVhLmluZGV4T2YoXCJhbmRyb2lkXCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcIm1vYmlsZVwiKSA9PSAtMSlcbiAgICAgIHx8ICh0aGlzLnVhLmluZGV4T2YoXCJmaXJlZm94XCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcInRhYmxldFwiKSAhPSAtMSlcbiAgICAgIHx8IHRoaXMudWEuaW5kZXhPZihcImtpbmRsZVwiKSAhPSAtMVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwic2lsa1wiKSAhPSAtMVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwicGxheWJvb2tcIikgIT0gLTE7XG4gICAgaWYgKGIpICQoJ2JvZHknKS5hZGRDbGFzcygnaXNEZXZpY2VUQUInKTtcblxuICAgIHRoaXMuaXNUQUIgPSBiO1xuXG4gIH1cblxuICBpc0RldmljZU1CKCl7XG5cbiAgICB2YXIgYiA9ICh0aGlzLnVhLmluZGV4T2YoXCJ3aW5kb3dzXCIpICE9IC0xICYmIHRoaXMudWEuaW5kZXhPZihcInBob25lXCIpICE9IC0xKVxuICAgICAgfHwgdGhpcy51YS5pbmRleE9mKFwiaXBob25lXCIpICE9IC0xXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJpcG9kXCIpICE9IC0xXG4gICAgICB8fCAodGhpcy51YS5pbmRleE9mKFwiYW5kcm9pZFwiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJtb2JpbGVcIikgIT0gLTEpXG4gICAgICB8fCAodGhpcy51YS5pbmRleE9mKFwiZmlyZWZveFwiKSAhPSAtMSAmJiB0aGlzLnVhLmluZGV4T2YoXCJtb2JpbGVcIikgIT0gLTEpXG4gICAgICB8fCB0aGlzLnVhLmluZGV4T2YoXCJibGFja2JlcnJ5XCIpICE9IC0xO1xuICAgIGlmIChiKSAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzRGV2aWNlTUInKTtcblxuICAgIHRoaXMuaXNNQiA9IGI7XG5cbiAgfVxuXG4gIGlzRGV2aWNlUEMoKXtcblxuICAgIGlmICghKHRoaXMuaXNTUCB8fCB0aGlzLmlzVEFCIHx8IHRoaXMuaXNNQikpIHtcbiAgICAgIFxuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc0RldmljZVBDJyk7XG4gICAgICB0aGlzLmlzUEMgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuXG4gICAgfVxuXG4gICAgdGhpcy5pc1BDID0gZmFsc2U7XG5cbiAgfVxuXG4gIC8vIOOCueODnuODleOCqeWIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzU210KCkge1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBhZCcpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQaG9uZScpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQb2QnKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdBbmRyb2lkJykgPiAwO1xuXG4gIH1cblxuICAvLyDjgr/jg5bjg6zjg4Pjg4jnq6/mnKvjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1RhYmxldCgpIHtcblxuICAgIHJldHVybiB0aGlzLmlzSXBhZCgpIHx8ICh0aGlzLmlzQW5kcm9pZCgpICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTW9iaWxlJykgPT09IC0xKTtcblxuICB9XG5cbiAgLy8gaVBhZOWIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSXBhZCgpIHtcblxuICAgIHJldHVybiBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ2lQYWQnKSA+IDA7XG5cbiAgfVxuXG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBPU1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyBBbmRyb2lk5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNBbmRyb2lkKCkge1xuXG4gICAgdmFyIHU7XG4gICAgdSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgcmV0dXJuIHUuaW5kZXhPZignQmxhY2tCZXJyeScpID4gMCB8fCB1LmluZGV4T2YoJ0FuZHJvaWQnKSA+IDAgfHwgdS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPiAwO1xuXG4gIH1cblxuICBpc2lQaG9uZSgpe1xuICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cChcImlwaG9uZVwiLFwiaVwiKTtcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KHRoaXMudWEpO1xuICB9XG5cbiAgLy8gaU9T5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJb3MoKSB7XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdpUGFkJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBob25lJykgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignaVBvZCcpID4gMDtcblxuICB9XG5cbiAgLy8gUFMz5Yik5a6aXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNQczMoKSB7XG5cbiAgICB2YXIgdTtcbiAgICB1ID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICByZXR1cm4gdS5pbmRleE9mKCdQTEFZU1RBVElPTiAzJykgPiAwO1xuXG4gIH1cbiAgICBcbiAgLy8gVklUQeWIpOWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzVml0YSgpIHtcblxuICAgIHZhciB1O1xuICAgIHUgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIHJldHVybiB1LmluZGV4T2YoJ1BsYXlTdGF0aW9uIFZpdGEnKSA+IDA7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgYnJvd3NlclxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gSUXjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0llKCkge1xuXG4gICAgdmFyIHVhO1xuICAgIHVhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gdWEuaW5kZXhPZignbXNpZScpICE9PSAtMSB8fCB1YS5pbmRleE9mKCd0cmlkZW50LzcnKSAhPT0gLTE7XG5cbiAgfVxuXG4gIC8vIFdJTuOBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzV2luKCkge1xuXG4gICAgcmV0dXJuIG5hdmlnYXRvci5wbGF0Zm9ybS5pbmRleE9mKFwiV2luXCIpICE9PSAtMTtcblxuICB9XG5cbiAgLy8gZ29vZ2xlQ2hyb21l44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNDaHJvbWUoKSB7XG5cbiAgICByZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSA+IDA7XG5cbiAgfSAgICBcbiAgXG4gIC8vIEZpcmVGb3jjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0ZGKCkge1xuXG4gICAgcmV0dXJuIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignZmlyZWZveCcpICE9PSAtMTtcblxuICB9XG5cbiAgaXNTYWZhcmkoKXtcblxuICAgIGlmKHRoaXMudWEuaW5kZXhPZihcImNocm9tZVwiKSAhPSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmKHRoaXMudWEuaW5kZXhPZihcImx1bmFzY2FwZVwiKSAhPSAtMSkgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cChcInNhZmFyaVwiLFwiaVwiKTtcbiAgICByZXR1cm4gcGF0dGVybi50ZXN0KHRoaXMudWEpO1xuXG4gIH1cblxuICBpc09wZXJhKCl7XG5cbiAgICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cChcIm9wZXJhXCIsXCJpXCIpO1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdCh0aGlzLnVhKTtcblxuICB9XG5cbiAgLy8gaU9T44Guc2FmYXJp5Lul5aSW44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJT1NVaVZpZXcoKSB7XG5cbiAgICB2YXIgYTtcbiAgICBhID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gKHRoaXMuaXNJb3MoKSAmJiBhLmluZGV4T2YoJ3NhZmFyaScpID09PSAtMSkgfHwgKHRoaXMuaXNJb3MoKSAmJiBhLmluZGV4T2YoJ2NyaW9zJykgPiAwKSB8fCAodGhpcy5pc0lvcygpICYmIGEuaW5kZXhPZignZ3NhJykgPiAwKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICB2ZXJzaW9uXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBJRTjku6XkuIvjgYvjganjgYbjgYtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0llOFVuZGVyKCkge1xuXG4gICAgdmFyIG1zaWU7XG4gICAgbXNpZSA9IG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgbXNpZSA9IG1zaWUuaW5kZXhPZignbXNpZScpID4gLTEgPyBwYXJzZUludChtc2llLnJlcGxhY2UoLy4qbXNpZVsgXS8sICcnKS5tYXRjaCgvXlswLTldKy8pKSA6IDA7XG4gICAgcmV0dXJuIG1zaWUgPD0gOCAmJiBtc2llICE9PSAwO1xuXG4gIH1cbiAgICBcbiAgLy8gSUU55Lul5LiL44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNJZTlVbmRlcigpIHtcblxuICAgIHZhciBtc2llO1xuICAgIG1zaWUgPSBuYXZpZ2F0b3IuYXBwVmVyc2lvbi50b0xvd2VyQ2FzZSgpO1xuICAgIG1zaWUgPSBtc2llLmluZGV4T2YoJ21zaWUnKSA+IC0xID8gcGFyc2VJbnQobXNpZS5yZXBsYWNlKC8uKm1zaWVbIF0vLCAnJykubWF0Y2goL15bMC05XSsvKSkgOiAwO1xuICAgIHJldHVybiBtc2llIDw9IDkgJiYgbXNpZSAhPT0gMDtcblxuICB9XG5cbiAgLy8gSUUxMOS7peS4i+OBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSWUxMFVuZGVyKCkge1xuXG4gICAgdmFyIG1zaWU7XG4gICAgbXNpZSA9IG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgbXNpZSA9IG1zaWUuaW5kZXhPZignbXNpZScpID4gLTEgPyBwYXJzZUludChtc2llLnJlcGxhY2UoLy4qbXNpZVsgXS8sICcnKS5tYXRjaCgvXlswLTldKy8pKSA6IDA7XG4gICAgcmV0dXJuIG1zaWUgPD0gMTAgJiYgbXNpZSAhPT0gMDtcblxuICB9XG5cbiAgLy8gSUUxMeS7peS4i+OBi+OBqeOBhuOBi1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyByZXR1cm4gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzSWUxMVVuZGVyKCkge1xuXG4gICAgdmFyIGIgPSB0aGlzLmlzSWUxMFVuZGVyKCkgfHwgKHRoaXMudWEuaW5kZXhPZihcInRyaWRlbnRcIikgIT0gLTEpO1xuICAgIHJldHVybiBiO1xuICAgIC8vIHJldHVybiB0cnVlO1xuXG4gIH1cblxuICAvLyBlZGdl44GL44Gp44GG44GLXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHJldHVybiA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNFZGdlKCkge1xuXG4gICAgbG9nKHRoaXMudWEuaW5kZXhPZihcIkFwcGxlV2Via2l0XCIpLHRoaXMudWEuaW5kZXhPZihcIkVkZ2VcIiksdGhpcy51YSx0aGlzLmFwcFYpO1xuICAgIHZhciBiID0gKHRoaXMudWEuaW5kZXhPZihcImFwcGxld2Via2l0XCIpID49IDAgJiYgdGhpcy51YS5pbmRleE9mKFwiZWRnZVwiKSAhPSAtMSk7XG4gICAgcmV0dXJuIGI7XG4gICAgLy8gcmV0dXJuIHRydWU7XG5cbiAgfVxuXG4gIGlzSUVWZXJzaW9uKCl7XG5cbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llJyk7XG4gICAgdGhpcy5pc0lFID0gdHJ1ZTtcbiAgICAgIFxuICAgIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgMTAuXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2llMTAnKTtcbiAgICAgIHJldHVybiAnaWUxMCc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgOS5cIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWU5Jyk7XG4gICAgICByZXR1cm4gJ2llOSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmFwcFYuaW5kZXhPZihcIm1zaWUgOC5cIikgIT0gLTEpIHtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaWU4Jyk7ICBcbiAgICAgIHJldHVybiAnaWU4JztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwibXNpZSA3LlwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTcnKTtcbiAgICAgIHJldHVybiAnaWU3JztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwibXNpZSA2LlwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTYnKTtcbiAgICAgIHJldHVybiAnaWU2JztcbiAgICB9IGVsc2UgaWYgKHRoaXMuYXBwVi5pbmRleE9mKFwidHJpZGVudFwiKSAhPSAtMSkge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpZTExJyk7XG4gICAgICB0aGlzLmlzSUUxMSA9IHRydWU7XG4gICAgICByZXR1cm4gJ2llMTEnO1xuICAgIH0gZWxzZSBpZiAodGhpcy51YS5pbmRleE9mKFwiYXBwbGV3ZWJraXRcIikgPj0gMCAmJiB0aGlzLnVhLmluZGV4T2YoXCJlZGdlXCIpICE9IC0xKSB7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzRWRnZScpO1xuICAgICAgcmV0dXJuICdlZGdlJztcbiAgICB9XG5cblxuICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaWUnKTtcbiAgICB0aGlzLmlzSUUgPSBmYWxzZTtcblxuICB9XG5cbiAgaXNBbmRyb2lkVmVyc2lvbigpIHtcblxuICAgIGlmKCB0aGlzLnVhLmluZGV4T2YoXCJhbmRyb2lkXCIpID4gMCApIHtcblxuICAgICAgICB2YXIgdmVyc2lvbiA9IHBhcnNlRmxvYXQodGhpcy51YS5zbGljZSh0aGlzLnVhLmluZGV4T2YoXCJhbmRyb2lkXCIpKzgpKTtcbiAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgICAgIFxuICAgIH1cblxuICB9XG5cbiAgaXNpcGhvbmVWZXJzaW9uKCkge1xuXG4gICAgaWYoIHRoaXMudWEuaW5kZXhPZihcImlQaG9uZSBPU1wiKSA+IDAgKSB7XG5cbiAgICAgICAgdmFyIHZlcnNpb24gPSBwYXJzZUZsb2F0KHRoaXMudWEuc2xpY2UodGhpcy51YS5pbmRleE9mKFwiaVBob25lIE9TXCIpKzEwKSk7XG4gICAgICAgIHJldHVybiB2ZXJzaW9uO1xuXG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHBvcnRyYWl0IC8gbGFuZHNjYXBlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0RpcmVjdGlvbiAoKSB7XG5cbiAgICB2YXIgVyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBIID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYgKEggPiBXKSB7XG4gICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcInBvcnRyYWl0XCIpO1xuICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJsYW5kc2NhcGVcIik7XG4gICAgfWVsc2V7XG4gICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImxhbmRzY2FwZVwiKTtcbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwicG9ydHJhaXRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHJlc3BvbnNpdmUg5qiq5bmF44KS6KaL44KLXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1Jlc3BvbnNpdmUgKGJwKSB7XG5cbiAgICBpZiAoYnA9PXVuZGVmaW5lZCkgYnA9Mzc1O1xuXG4gICAgdmFyIFcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgSCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmIChXID4gYnApIHtcbiAgICAgIHRoaXMuaXNSZXNTUCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1Jlc1BDID0gdHJ1ZTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXNSZXNwb25zaXZlU1AnKTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNSZXNwb25zaXZlUEMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1Jlc1NQID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNSZXNQQyA9IGZhbHNlO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc1Jlc3BvbnNpdmVTUCcpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpc1Jlc3BvbnNpdmVQQycpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBVUkxcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8g44Kv44Ko44Oq5oqc44GN5Ye644GXXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBrZXkgOiDmipzjgY3lh7rjgZnjg5Hjg6njg6Hjg7zjgr/lkI0oU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBnZXRRdWVyeShrZXkpIHtcblxuICAvLyAgIHZhciBxcywgcmVnZXg7XG4gIC8vICAga2V5ID0ga2V5LnJlcGxhY2UoL1vigqxbXS8sIFwi4oKs4oKs4oKsW1wiKS5yZXBsYWNlKC9b4oKsXV0vLCBcIuKCrOKCrOKCrF1cIik7XG4gIC8vICAgcmVnZXggPSBuZXcgUmVnRXhwKFwiW+KCrOKCrD8mXVwiICsga2V5ICsgXCI9KFteJiNdKilcIik7XG4gIC8vICAgcXMgPSByZWdleC5leGVjKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgLy8gICBpZiAocXMgPT09IG51bGwpIHtcbiAgLy8gICAgIHJldHVybiBcIlwiO1xuICAvLyAgIH0gZWxzZSB7XG4gIC8vICAgICByZXR1cm4gcXNbMV07XG4gIC8vICAgfVxuXG4gIC8vIH1cblxuICBnZXRQYXJhbSgpIHtcblxuICAgIHZhciB1cmwgPSBsb2NhdGlvbi5ocmVmO1xuICAgIHZhciBwYXJhbSA9IHVybC5zcGxpdCgnPycpWzFdO1xuICAgIGlmIChwYXJhbT09dW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHZhciBwYXJhbUl0ZW1zID0gcGFyYW0uc3BsaXQoJyYnKTtcbiAgICB2YXIgbGlzdCA9IHt9O1xuICBcbiAgICBmb3IoIHZhciBpID0gMDsgaTxwYXJhbUl0ZW1zLmxlbmd0aDsgaSsrICl7XG5cbiAgICAgICAgcGFyYW1JdGVtID0gcGFyYW1JdGVtc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICBsaXN0W3BhcmFtSXRlbVswXV0gPSBwYXJhbUl0ZW1bMV07XG5cbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcblxuICB9XG4gIFxuICAvLyDjg4/jg4Pjgrfjg6Xlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gcmV0dXJuIDogbG9jYXRpb24uaGFzaOOBriPjgpLliYrpmaTjgZfjgZ/jgoTjgaRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaGFzaCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuXG4gIH1cblxuICAvLyBjb29raWXlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGtleSA6IOODkeODqeODoeODvOOCv+WQjVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRDb29raWUoa2V5KSB7XG5cbiAgICB2YXIgYSwgYXJyLCBpLCBsLCBsZW4xLCB2YWw7XG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZSA9PT0gdm9pZCAwIHx8IGRvY3VtZW50LmNvb2tpZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGFyciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xuICAgIGZvciAoaSA9IGwgPSAwLCBsZW4xID0gYXJyLmxlbmd0aDsgbCA8IGxlbjE7IGkgPSArK2wpIHtcbiAgICAgIHZhbCA9IGFycltpXTtcbiAgICAgIGEgPSB2YWwuc3BsaXQoXCI9XCIpO1xuICAgICAgaWYgKGFbMF0gPT09IGtleSkge1xuICAgICAgICByZXR1cm4gYVsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG5cbiAgfSAgICAgIFxuXG4gIC8vIGNvb2tpZeioreWumlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAa2V5IDog44OR44Op44Oh44O844K/5ZCNXG4gIC8vIEB2YWwgOiDlgKRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0Q29va2llKGtleSwgdmFsKSB7XG5cbiAgICByZXR1cm4gZG9jdW1lbnQuY29va2llID0ga2V5ICsgXCI9XCIgKyB2YWw7XG5cbiAgfVxuICBcbiAgaXNQQ1NQKCkge1xuXG4gICAgdmFyIHVybCA9IGxvY2F0aW9uLmhyZWY7XG5cbiAgICBpZiAoIXRoaXMuaXNQQyAmJiAhdGhpcy5pc1RBQiAmJiAodXJsLmluZGV4T2YoJ3BjJykgIT0gLTEpKSB7XG5cbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnL29wX2dvbGRlbic7XG4gICAgXG4gICAgfSBcblxuICAgIGlmICh0aGlzLmlzUEMgJiYgdXJsLmluZGV4T2YoJ3BjJykgPT0gLTEpIHtcblxuICAgICAgbG9jYXRpb24uaHJlZiA9ICcvb3BfZ29sZGVuL3BjLyc7XG4gICAgXG4gICAgfSBcblxuICAgIGlmICh0aGlzLmlzVEFCICYmIHVybC5pbmRleE9mKCdwYycpID09IC0xKSB7XG5cbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnL29wX2dvbGRlbi9wYy8nO1xuICAgIFxuICAgIH0gXG5cbiAgICBpZiAodGhpcy5pc0NvbnRhaW4odXJsLCdyb3VsZXR0ZScpKSBsb2NhdGlvbi5ocmVmID0gJy9vcF9nb2xkZW4nO1xuICAgIGlmICh0aGlzLmlzQ29udGFpbih1cmwsJ3RvcGljcycpKSBsb2NhdGlvbi5ocmVmID0gJy9vcF9nb2xkZW4nO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIENvbG9yXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIHJnYuOBi+OCiUhFWOOCq+ODqeODvOWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAciA6IDB+MjU1XG4gIC8vIEBnIDogMH4yNTVcbiAgLy8gQGIgOiAwfjI1NVxuICAvLyByZXR1cm4gOiBleCBcIiNGRkZGRkZcIlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRIZXhDb2xvcihyLGcsYikge1xuICAgICAgdmFyIHN0cjtcbiAgICAgIHN0ciA9IChyIDw8IDE2IHwgZyA8PCA4IHwgYikudG9TdHJpbmcoMTYpO1xuICAgICAgcmV0dXJuIFwiI1wiICsgbmV3IEFycmF5KDcgLSBzdHIubGVuZ3RoKS5qb2luKFwiMFwiKSArIHN0cjtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgU3RyaW5nXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGlzQ29udGFpbihzdHIsY29udGFpbikge1xuXG4gICAgLy8gc3Ry44Gu5Lit44GrLGNvbnRhaW7jgYzlrZjlnKjjgZfjgZ/jgolcbiAgICBpZiAoIHN0ci5pbmRleE9mKGNvbnRhaW4pICE9IC0xICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuICAvLyAw5Z+L44KB44GnMuahgeOBq+OBmeOCi+mWouaVsFxuICBhZGQwKHN0cixudW09LTIpe1xuICAgIFxuICAgIHJldHVybiAoIFwiMDAwMDAwMDAwMDAwXCIgKyBzdHIgKS5zdWJzdHIoIG51bSApO1xuXG4gIH1cblxuICBmbG9hdEZvcm1hdCggbnVtYmVyLCBuICkge1xuXG4gICAgdmFyIF9wb3cgPSBNYXRoLnBvdyggMTAgLCBuICkgO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKCBudW1iZXIgKiBfcG93ICkgLyBfcG93IDtcblxuICB9XG4gICAgXG4gIC8vIOWApOauteihqOiomFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcmljZShudW0pIHtcblxuICAgIHJldHVybiBTdHJpbmcobnVtKS5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyg/IVxcZCkpL2csICckMSwnKTtcblxuICB9XG5cbiAgLy8g5paH5a2X5YiX44KS5Y+N6LuiXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBzdHIgOiDmloflrZfliJcoU3RyaW5nKVxuICAvLyByZXR1cm4gOiDmloflrZfliJcoU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdHJSZXZlcnNlKHN0cikge1xuXG4gICAgdmFyIGksIGxlbiwgcmVzO1xuICAgIHJlcyA9IFwiXCI7XG4gICAgbGVuID0gc3RyLmxlbmd0aDtcbiAgICBpID0gMTtcbiAgICB3aGlsZSAoaSA8PSBsZW4pIHtcbiAgICAgIHJlcyArPSBzdHIuc3Vic3RyKC1pLCAxKTtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcblxuICB9XG4gIFxuICAvLyDmloflrZfliJfjga7lhajnva7mj5tcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHZhbCAgOiDmloflrZfliJdcbiAgLy8gQG9lZyAgOiDnva7mj5vliY3jga7mloflrZfliJdcbiAgLy8gQGRlc3QgOiDnva7mj5vlvozjga7mloflrZfliJdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVwbGFjZUFsbCh2YWwsIG9yZywgZGVzdCkge1xuXG4gICAgcmV0dXJuIHZhbC5zcGxpdChvcmcpLmpvaW4oZGVzdCk7XG5cbiAgfSAgICBcbiAgXG4gIHN0clJlcGxhY2Uoc3RyLCBiZWZvcmUsIGFmdGVyKSB7XG5cbiAgICB2YXIgciA9IG5ldyBSZWdFeHAoIGJlZm9yZSwgJ2cnKTtcblxuICAgIHJldHVybiBzdHIucmVwbGFjZSggciAsIGFmdGVyICk7XG5cbiAgfSAgICBcbiAgXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRGF0ZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBnZXROb3coKSB7XG5cbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgfVxuXG4gIHN0YXJ0KCkge1xuXG4gICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLm5vdy5nZXRUaW1lKCk7XG5cbiAgfVxuXG4gIGVsYXBzZWQoKSB7XG5cbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gdGhpcy5ub3cuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWU7XG5cbiAgfVxuXG4gIG0oKSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vciggdGhpcy5lbGFwc2VkVGltZSArIDEwMCAvIDYwICk7XG5cbiAgfVxuXG4gIHMoKSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmVsYXBzZWRUaW1lIC8gMTAwMCk7XG5cbiAgfVxuXG4gIG1zKCkge1xuXG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZFRpbWU7XG4gICAgXG4gIH1cblxuICB0aW1lKCkge1xuXG4gICAgdGhpcy5nZXROb3coKTtcblxuICAgIHRoaXMuaG91ciA9IHRoaXMubm93LmdldEhvdXJzKCk7ICAgICAgICAgIC8vIOaZglxuICAgIHRoaXMubWludXRlID0gdGhpcy5ub3cuZ2V0TWludXRlcygpOyAgICAgIC8vIOWIhlxuICAgIHRoaXMuc2Vjb25kID0gdGhpcy5ub3cuZ2V0U2Vjb25kcygpO1xuICAgIHRoaXMubWlsbFNlY29uZCA9IHRoaXMubm93LmdldE1pbGxpc2Vjb25kcygpO1xuXG4gIH1cblxuICBkYXRlKCkge1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldERhdGUoKTtcblxuICB9XG5cbiAgbW9udGhzKCkge1xuXG4gICAgdmFyIG1vbnRoZGF5cyA9IG5ldyBBcnJheSgzMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxKTtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXRNb250aCgpICsgMTtcblxuICB9XG5cbiAgeWVhcigpIHtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXRGdWxsWWVhcigpO1xuXG4gIH1cblxuICBkYXkoKSB7XG5cbiAgICAvLyDmm5zml6UgKOaXpeacrOiqnilcbiAgICB2YXIgd2Vla0RheUpQID0gW1wi5pelXCIsXCLmnIhcIixcIueBq1wiLFwi5rC0XCIsXCLmnKhcIixcIumHkVwiLFwi5ZyfXCJdIDtcbiAgICB2YXIgd0RKID0gd2Vla0RheUpQW3RoaXMubm93LmdldERheSgpXSA7XG5cbiAgICAvLyDmm5zml6UgKOiLseiqnilcbiAgICB2YXIgd2Vla0RheUVOID0gW1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdIDtcbiAgICB2YXIgd0RFID0gd2Vla0RheUVOW3RoaXMubm93LmdldERheSgpXSA7XG5cbiAgfVxuICBcbiAgLy8g5pWw5pel5b6M44GuRGF0ZeOCquODluOCuOOCp+OCr+ODiOWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhZnRlckRheShkYXRlLCBudW0pIHtcblxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIE51bWJlcihudW0pICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRGF0YSB0eXBlIGNoZWNrXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGlzT2JqZWN0KHZhbHVlLCBpZ25vcmVBcnJheSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGw7XG4gIH1cblxuICBpc051bWJlcih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG4gIH1cblxuICBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgaXNBcnJheSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH1cblxuICBpc051bGwodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbiAgfVxuXG4gIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgb3RoZXJcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldEltZ1NQU2l6ZSAoJHRhcmdldCl7XG5cbiAgICAvLyByZXNwb25zaXZlIHNw44Gu44Go44GN5Yem55CGXG4gICAgaWYgKCF0aGlzLmlzUmVzU1ApIHJldHVybjtcbiAgICAvLyDkuIDluqbjgaDjgZHlh6bnkIZcbiAgICAvLyBpZiAodGhpcy5pc1NldFNQU2l6ZSkgcmV0dXJuO1xuICAgIC8vIHRoaXMuaXNTZXRTUFNpemUgPSB0cnVlO1xuXG4gICAgdmFyICRpbWcgPSAkdGFyZ2V0LFxuICAgICAgICBsZW4gPSAkaW1nLmxlbmd0aDtcblxuICAgICRpbWcuZWFjaChmdW5jdGlvbihpKSB7XG5cbiAgICAgICAgdmFyIHcgPSBNYXRoLmZsb29yKCQodGhpcykud2lkdGgoKSAvIDIpLFxuICAgICAgICAgICAgaCA9IE1hdGguZmxvb3IoJCh0aGlzKS5oZWlnaHQoKSAvIDIpO1xuXG4gICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAnd2lkdGgnOiB3LFxuICAgICAgICAgICAgJ2hlaWdodCc6IGgsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChsZW4gPT0gaSArIDEpICQod2luZG93KS50cmlnZ2VyKCdzZXRTcFppZUVuZCcpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAg44K544Oe44Ob5pON5L2c54Sh5Yq5XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRQcmV2ZW50KCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgJCh3aW5kb3cpLm9uKCd0b3VjaG1vdmUubm9Db250cm9sJywgZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO30pO1xuXG4gIH1cblxuICByZW1vdmVQcmV2ZW50KCkge1xuXG4gICAgJCh3aW5kb3cpLm9mZigndG91Y2htb3ZlLm5vQ29udHJvbCcpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gIGhvc3QscHJvdGNvbFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJvdG9jb2woKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2w7XG5cbiAgfVxuICAgIFxuICBob3N0KCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhvc3RuYW1lO1xuICAgIC8vIHJldHVybiBsb2NhdGlvbi5ob3N0XG5cbiAgfVxuXG4gIHBvcnQoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucG9ydDtcblxuICB9XG4gICAgICAgIFxuICBwYXRoKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdChlKSB7XG5cbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG5cbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyhlKSB7XG5cbiAgICBpZiAoa2V5c1tlLmtleUNvZGVdKSB7XG4gICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICBkaXNhYmxlU2Nyb2xsKCkge1xuXG4gICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSAvLyBvbGRlciBGRlxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLnByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93Lm9ud2hlZWwgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBtb2Rlcm4gc3RhbmRhcmRcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gb2xkZXIgYnJvd3NlcnMsIElFXG4gICAgd2luZG93Lm9udG91Y2htb3ZlICA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG1vYmlsZVxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biAgPSB0aGlzLnByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cztcblxuICB9XG5cbiAgZW5hYmxlU2Nyb2xsKCkge1xuXG4gICAgaWYgKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKVxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLnByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IG51bGw7IFxuICAgIHdpbmRvdy5vbndoZWVsID0gbnVsbDsgXG4gICAgd2luZG93Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL1V0aWwuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBVdGlsc1xuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG4vKipcbiAqIGFuaW1hdGlvblxuICovXG5pbXBvcnQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gJy4vYW5pbWF0aW9uL3JlcXVlc3RBbmltYXRpb25GcmFtZSc7XG5pbXBvcnQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgZnJvbSAnLi9hbmltYXRpb24vY2FuY2VsQW5pbWF0aW9uRnJhbWUnO1xuXG5pbXBvcnQgQXJyYXkgZnJvbSAnLi9hcnJheS9BcnJheSc7XG5pbXBvcnQgY2hlY2tFbnZpcm9ubWVudCBmcm9tIFwiLi91YS9jaGVja0Vudmlyb25tZW50XCI7XG5cbmltcG9ydCBwcmVsb2FkSW1nIGZyb20gJy4vaW1nL3ByZWxvYWRJbWcnO1xuaW1wb3J0IHNldFVwQnRuVHdpdHRlciBmcm9tICcuL3Nucy9zZXRVcEJ0blR3aXR0ZXInO1xuaW1wb3J0IHNldFVwQnRuTGluZSBmcm9tICcuL3Nucy9zZXRVcEJ0bkxpbmUnO1xuaW1wb3J0IHNldFVwQnRuRmFjZUJvb2sgZnJvbSAnLi9zbnMvc2V0VXBCdG5GYWNlQm9vayc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5fc2V0dXAoKTtcbiAgICBcbiAgfVxuXG4gIF9zZXR1cCgpIHtcbiAgICAvLyB3aW5kb3cuY29uc29sZS5sb2coJ1V0aWxzX1NldHVwISEnKTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBhcnJheVxuICAgICAqL1xuICAgIHRoaXMuQXJyYXkgPSBuZXcgQXJyYXkoKTtcblxuXG4gICAgLyoqXG4gICAgICogdWFcbiAgICAgKi9cbiAgICB0aGlzLmNoZWNrRW52aXJvbm1lbnQgPSBuZXcgY2hlY2tFbnZpcm9ubWVudCgpO1xuICAgIGlmKHRoaXMuY2hlY2tFbnZpcm9ubWVudC5pc0lFKCkpe1xuICAgICAgd2luZG93LmNvbnNvbGUubG9nKCdJReOBp+OBmScpO1xuICAgIH1lbHNlIHtcbiAgICAgIHdpbmRvdy5jb25zb2xlLmxvZygnSUXjgZjjgoPjgarjgYTjgafjgZknKTtcbiAgICB9XG5cbiAgICBpZih0aGlzLmNoZWNrRW52aXJvbm1lbnQuaXNDaHJvbWUoKSl7XG4gICAgICB3aW5kb3cuY29uc29sZS5sb2coJ0Nocm9tZeOBp+OBmScpO1xuICAgIH1lbHNlIHtcbiAgICAgIHdpbmRvdy5jb25zb2xlLmxvZygnQ2hyb21l44GY44KD44Gq44GE44Gn44GZJyk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5jaGVja0Vudmlyb25tZW50LmlzTW9iaWxlKCkpe1xuICAgICAgd2luZG93LmNvbnNvbGUubG9nKCfjg6Ljg5DjgqTjg6vjgafjgZknKTtcbiAgICB9ZWxzZSB7XG4gICAgICB3aW5kb3cuY29uc29sZS5sb2coJ+ODouODkOOCpOODq+OBmOOCg+OBquOBhOOBp+OBmScpO1xuICAgIH1cbiAgICBcbiAgICAvLyB3aW5kb3cuY29uc29sZS5sb2codGhpcy5jaGVja0Vudmlyb25tZW50LmFsbCgpKTtcblxuICAgIC8vIGxldCBuYW1lID0gdGhpcy5jaGVja0Vudmlyb25tZW50O1xuICAgIC8vIHdpbmRvdy5jb25zb2xlLmxvZyhuYW1lKTtcblxuICAgIC8vIGxldCBsb2cgPSB0aGlzLmNoZWNrRW52aXJvbm1lbnQuZGV2aWNlX25hbWUoKTtcbiAgICAvLyB3aW5kb3cuY29uc29sZS5sb2cobG9nKTtcblxuICAgIC8qKlxuICAgICAqIGltZ1xuICAgICAqL1xuICAgIC8vIHRoaXMucHJlbG9hZEltZyA9IG5ldyBwcmVsb2FkSW1nKCk7XG5cbiAgICAvKipcbiAgICAgKiBzbnNcbiAgICAgKi9cbiAgICAvLyB0aGlzLnNldFVwQnRuVHdpdHRlciA9IG5ldyBzZXRVcEJ0blR3aXR0ZXI7XG4gICAgLy8gdGhpcy5zZXRVcEJ0bkxpbmUgPSBuZXcgc2V0VXBCdG5MaW5lO1xuICAgIC8vIHRoaXMuc2V0VXBCdG5GYWNlQm9vayA9IG5ldyBzZXRVcEJ0bkZhY2VCb29rO1xuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL1V0aWxzLmpzIiwiLyoqXG4gKiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAqL1xud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9ICgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDMwKTtcbiAgICAgICAgfTtcbiAgfTtcbn0pKHRoaXMpKSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIi8qKlxuICogY2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAqL1xud2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gKChmdW5jdGlvbihfdGhpcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgfTtcbiAgfTtcbn0pKHRoaXMpKSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL2NhbmNlbEFuaW1hdGlvbkZyYW1lLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6IOmFjeWIl+OBruaTjeS9nOezu1xuICogUHJvamVjdDpcbiAqIEZpbGU6IEFycmF5XG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJheSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cblxuICB9XG5cblx0LyoqXG5cdCAqIOmFjeWIl+WGheOBruODqeODs+ODgOODoOOBquWApOOCkuOBsuOBqOOBpOWPluW+l1xuXHQgKiBAcGFyYW0gYXJyIDog6YWN5YiXXG5cdCAqIEByZXR1cm5zIHsqfSA6IOmFjeWIl+WGheOBruWApFxuXHQgKi9cbiAgYXJyUmFuZChhcnIpIHtcblxuICAgIHJldHVybiBhcnJbdGhpcy5yYW5kb20oMCwgYXJyLmxlbmd0aCAtIDEpXTtcblxuICB9XG5cblx0LyoqXG4gICAqIOmFjeWIl+OCkuODqeODs+ODgOODoOOBq+S4puOBueabv+OBiFxuXHQgKiBAcGFyYW0gYXJyIDog6YWN5YiXKEFycmF5KVxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqL1xuICBzaHVmZmxlKGFycikge1xuXG4gICAgbGV0IEFyciA9IFtdO1xuICAgIEFyciA9IGFyci5zbGljZSgpO1xuICAgIHZhciBpID0gYXJyLmxlbmd0aDtcbiAgICB3aGlsZShpKXtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmkpO1xuICAgICAgdmFyIHQgPSBBcnJbLS1pXTtcbiAgICAgIEFycltpXSA9IEFycltqXTtcbiAgICAgIEFycltqXSA9IHQ7XG4gICAgfVxuICAgIHJldHVybiBBcnI7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hcnJheS9BcnJheS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiBVYeWIpOWIpVxuICogUHJvamVjdDpcbiAqIEZpbGU6IGNoZWNrRW52aXJvbm1lbnRcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWJzL3VhLXBhcnNlci5taW4uanNcIik7XG5cbid1c2Ugc3RyaWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGVja0Vudmlyb25tZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMudWEgPSBuZXcgcGFyc2VyKCk7XG4gIH1cblxuICBpc0lFKCkge1xuICAgIGxldCBicm93c2VyID0gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgICByZXR1cm4gYnJvd3NlciA9PT0gJ0lFJyA/IHRydWUgOiBmYWxzZTtcbiAgfTtcblxuICBpc0ZJUkVGT1goKSB7XG4gICAgbGV0IGJyb3dzZXIgPSB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICAgIHJldHVybiBicm93c2VyID09PSAnSUUnID8gdHJ1ZSA6IGZhbHNlO1xuICB9O1xuXG4gIGlzQ2hyb21lKCkge1xuICAgIGxldCBicm93c2VyID0gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgICByZXR1cm4gYnJvd3NlciA9PT0gJ0Nocm9tZScgPyB0cnVlIDogZmFsc2U7XG4gIH07XG5cbiAgLypcbiAgICoqIFVBUGFyc2VyLmpz44Gv44Om44O844K244O844Ko44O844K444Kn44Oz44OI5YaF44Gr6Kmz57Sw5oOF5aCx44GM44K744OD44OI44GV44KM44Gm44GE44KM44Gw44CBXG4gICAqKiAgaXNJT1M5KCkgLCBpc1dpbmRvd3MxMCgpLCBpc1RhYmxldCgp562J44Gu44GT44Go44KC57Ch5Y2Y44Gr44Gn44GN44G+44GZXG4gICAqL1xuICAvLyDjg6Ljg5DjgqTjg6vjgYvliKTliKVcbiAgaXNNb2JpbGUoKSB7XG4gICAgbGV0IGRldmljZSA9IHRoaXMudWEuZ2V0RGV2aWNlKCkudHlwZTtcbiAgICByZXR1cm4gZGV2aWNlID09PSAnbW9iaWxlJyA/IHRydWUgOiBudWxsO1xuICB9XG5cbiAgLy8gT1PlkI3jgpLlj5blvpdcbiAgLy8gcmV0dXJuOiBpT1MsIFdpbmRvd3MsIE1hYyBPUyAuLlxuICBvcygpIHtcbiAgICByZXR1cm4gdGhpcy51YS5nZXRPUygpLm5hbWU7XG4gIH1cblxuICAvLyDjg4fjg5DjgqTjgrnlkI3jgpLlj5blvpdcbiAgLy8gaVBhZCwgaVBob25lIC4uIOODouODkOOCpOODq+S7peWkluOBoOOBqG51bGzjgpLov5TjgZlcbiAgZGV2aWNlX25hbWUoKSB7XG4gICAgY29uc3QgZGV2aWNlID0gdGhpcy51YS5kZXZpY2UubW9kZWw7XG4gICAgLy8gcmV0dXJuIGxvZGFzaC5zZXQoZGV2aWNlKSA/IGRldmljZSA6IG51bGw7XG4gIH1cblxuICAvLyDjg5bjg6njgqbjgrblkI3jgpLlj5blvpdcbiAgLy8gQ2hyb21lLCBTYWZhcmkgLi4uXG4gIC8vIGJyb3dzZXIoKSB7XG4gIC8vICAgcmV0dXJuIHRoaXMudWEuYnJvd3Nlci5uYW1lO1xuICAvLyB9XG5cbiAgLy8g44Om44O844K244O844Ko44O844K444Kn44Oz44OI5oOF5aCx77ya5YWo44Gm44KS5Y+W5b6XXG4gIGFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy51YS5nZXRVQSgpO1xuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3VhL2NoZWNrRW52aXJvbm1lbnQuanMiLCIvKipcbiAqIFVBUGFyc2VyLmpzIHYwLjcuMTJcbiAqIExpZ2h0d2VpZ2h0IEphdmFTY3JpcHQtYmFzZWQgVXNlci1BZ2VudCBzdHJpbmcgcGFyc2VyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFpc2FsbWFuL3VhLXBhcnNlci1qc1xuICpcbiAqIENvcHlyaWdodCDCqSAyMDEyLTIwMTYgRmFpc2FsIFNhbG1hbiA8Znl6bG1hbkBnbWFpbC5jb20+XG4gKiBEdWFsIGxpY2Vuc2VkIHVuZGVyIEdQTHYyICYgTUlUXG4gKi8oZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjt2YXIgbj1cIjAuNy4xMlwiLHI9XCJcIixpPVwiP1wiLHM9XCJmdW5jdGlvblwiLG89XCJ1bmRlZmluZWRcIix1PVwib2JqZWN0XCIsYT1cInN0cmluZ1wiLGY9XCJtYWpvclwiLGw9XCJtb2RlbFwiLGM9XCJuYW1lXCIsaD1cInR5cGVcIixwPVwidmVuZG9yXCIsZD1cInZlcnNpb25cIix2PVwiYXJjaGl0ZWN0dXJlXCIsbT1cImNvbnNvbGVcIixnPVwibW9iaWxlXCIseT1cInRhYmxldFwiLGI9XCJzbWFydHR2XCIsdz1cIndlYXJhYmxlXCIsRT1cImVtYmVkZGVkXCIsUz17ZXh0ZW5kOmZ1bmN0aW9uKGUsdCl7dmFyIG49e307Zm9yKHZhciByIGluIGUpdFtyXSYmdFtyXS5sZW5ndGglMj09PTA/bltyXT10W3JdLmNvbmNhdChlW3JdKTpuW3JdPWVbcl07cmV0dXJuIG59LGhhczpmdW5jdGlvbihlLHQpe3JldHVybiB0eXBlb2YgZT09XCJzdHJpbmdcIj90LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihlLnRvTG93ZXJDYXNlKCkpIT09LTE6ITF9LGxvd2VyaXplOmZ1bmN0aW9uKGUpe3JldHVybiBlLnRvTG93ZXJDYXNlKCl9LG1ham9yOmZ1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZT09PWE/ZS5yZXBsYWNlKC9bXlxcZFxcLl0vZyxcIlwiKS5zcGxpdChcIi5cIilbMF06dH0sdHJpbTpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxcIlwiKX19LHg9e3JneDpmdW5jdGlvbigpe3ZhciBlLG49MCxyLGksYSxmLGwsYyxoPWFyZ3VtZW50czt3aGlsZShuPGgubGVuZ3RoJiYhbCl7dmFyIHA9aFtuXSxkPWhbbisxXTtpZih0eXBlb2YgZT09PW8pe2U9e307Zm9yKGEgaW4gZClkLmhhc093blByb3BlcnR5KGEpJiYoZj1kW2FdLHR5cGVvZiBmPT09dT9lW2ZbMF1dPXQ6ZVtmXT10KX1yPWk9MDt3aGlsZShyPHAubGVuZ3RoJiYhbCl7bD1wW3IrK10uZXhlYyh0aGlzLmdldFVBKCkpO2lmKCEhbClmb3IoYT0wO2E8ZC5sZW5ndGg7YSsrKWM9bFsrK2ldLGY9ZFthXSx0eXBlb2YgZj09PXUmJmYubGVuZ3RoPjA/Zi5sZW5ndGg9PTI/dHlwZW9mIGZbMV09PXM/ZVtmWzBdXT1mWzFdLmNhbGwodGhpcyxjKTplW2ZbMF1dPWZbMV06Zi5sZW5ndGg9PTM/dHlwZW9mIGZbMV09PT1zJiYoIWZbMV0uZXhlY3x8IWZbMV0udGVzdCk/ZVtmWzBdXT1jP2ZbMV0uY2FsbCh0aGlzLGMsZlsyXSk6dDplW2ZbMF1dPWM/Yy5yZXBsYWNlKGZbMV0sZlsyXSk6dDpmLmxlbmd0aD09NCYmKGVbZlswXV09Yz9mWzNdLmNhbGwodGhpcyxjLnJlcGxhY2UoZlsxXSxmWzJdKSk6dCk6ZVtmXT1jP2M6dH1uKz0yfXJldHVybiBlfSxzdHI6ZnVuY3Rpb24oZSxuKXtmb3IodmFyIHIgaW4gbilpZih0eXBlb2YgbltyXT09PXUmJm5bcl0ubGVuZ3RoPjApe2Zvcih2YXIgcz0wO3M8bltyXS5sZW5ndGg7cysrKWlmKFMuaGFzKG5bcl1bc10sZSkpcmV0dXJuIHI9PT1pP3Q6cn1lbHNlIGlmKFMuaGFzKG5bcl0sZSkpcmV0dXJuIHI9PT1pP3Q6cjtyZXR1cm4gZX19LFQ9e2Jyb3dzZXI6e29sZHNhZmFyaTp7dmVyc2lvbjp7XCIxLjBcIjpcIi84XCIsMS4yOlwiLzFcIiwxLjM6XCIvM1wiLFwiMi4wXCI6XCIvNDEyXCIsXCIyLjAuMlwiOlwiLzQxNlwiLFwiMi4wLjNcIjpcIi80MTdcIixcIjIuMC40XCI6XCIvNDE5XCIsXCI/XCI6XCIvXCJ9fX0sZGV2aWNlOnthbWF6b246e21vZGVsOntcIkZpcmUgUGhvbmVcIjpbXCJTRFwiLFwiS0ZcIl19fSxzcHJpbnQ6e21vZGVsOntcIkV2byBTaGlmdCA0R1wiOlwiNzM3M0tUXCJ9LHZlbmRvcjp7SFRDOlwiQVBBXCIsU3ByaW50OlwiU3ByaW50XCJ9fX0sb3M6e3dpbmRvd3M6e3ZlcnNpb246e01FOlwiNC45MFwiLFwiTlQgMy4xMVwiOlwiTlQzLjUxXCIsXCJOVCA0LjBcIjpcIk5UNC4wXCIsMmUzOlwiTlQgNS4wXCIsWFA6W1wiTlQgNS4xXCIsXCJOVCA1LjJcIl0sVmlzdGE6XCJOVCA2LjBcIiw3OlwiTlQgNi4xXCIsODpcIk5UIDYuMlwiLDguMTpcIk5UIDYuM1wiLDEwOltcIk5UIDYuNFwiLFwiTlQgMTAuMFwiXSxSVDpcIkFSTVwifX19fSxOPXticm93c2VyOltbLyhvcGVyYVxcc21pbmkpXFwvKFtcXHdcXC4tXSspL2ksLyhvcGVyYVxcc1ttb2JpbGV0YWJdKykuK3ZlcnNpb25cXC8oW1xcd1xcLi1dKykvaSwvKG9wZXJhKS4rdmVyc2lvblxcLyhbXFx3XFwuXSspL2ksLyhvcGVyYSlbXFwvXFxzXSsoW1xcd1xcLl0rKS9pXSxbYyxkXSxbLyhvcGlvcylbXFwvXFxzXSsoW1xcd1xcLl0rKS9pXSxbW2MsXCJPcGVyYSBNaW5pXCJdLGRdLFsvXFxzKG9wcilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJPcGVyYVwiXSxkXSxbLyhraW5kbGUpXFwvKFtcXHdcXC5dKykvaSwvKGx1bmFzY2FwZXxtYXh0aG9ufG5ldGZyb250fGphc21pbmV8YmxhemVyKVtcXC9cXHNdPyhbXFx3XFwuXSspKi9pLC8oYXZhbnRcXHN8aWVtb2JpbGV8c2xpbXxiYWlkdSkoPzpicm93c2VyKT9bXFwvXFxzXT8oW1xcd1xcLl0qKS9pLC8oPzptc3xcXCgpKGllKVxccyhbXFx3XFwuXSspL2ksLyhyZWtvbnEpXFwvKFtcXHdcXC5dKykqL2ksLyhjaHJvbWl1bXxmbG9ja3xyb2NrbWVsdHxtaWRvcml8ZXBpcGhhbnl8c2lsa3xza3lmaXJlfG92aWJyb3dzZXJ8Ym9sdHxpcm9ufHZpdmFsZGl8aXJpZGl1bXxwaGFudG9tanMpXFwvKFtcXHdcXC4tXSspL2ldLFtjLGRdLFsvKHRyaWRlbnQpLitydls6XFxzXShbXFx3XFwuXSspLitsaWtlXFxzZ2Vja28vaV0sW1tjLFwiSUVcIl0sZF0sWy8oZWRnZSlcXC8oKFxcZCspP1tcXHdcXC5dKykvaV0sW2MsZF0sWy8oeWFicm93c2VyKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIllhbmRleFwiXSxkXSxbLyhjb21vZG9fZHJhZ29uKVxcLyhbXFx3XFwuXSspL2ldLFtbYywvXy9nLFwiIFwiXSxkXSxbLyhtaWNyb21lc3NlbmdlcilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJXZUNoYXRcIl0sZF0sWy94aWFvbWlcXC9taXVpYnJvd3NlclxcLyhbXFx3XFwuXSspL2ldLFtkLFtjLFwiTUlVSSBCcm93c2VyXCJdXSxbL1xcc3d2XFwpLisoY2hyb21lKVxcLyhbXFx3XFwuXSspL2ldLFtbYywvKC4rKS8sXCIkMSBXZWJWaWV3XCJdLGRdLFsvYW5kcm9pZC4rc2Ftc3VuZ2Jyb3dzZXJcXC8oW1xcd1xcLl0rKS9pLC9hbmRyb2lkLit2ZXJzaW9uXFwvKFtcXHdcXC5dKylcXHMrKD86bW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpKi9pXSxbZCxbYyxcIkFuZHJvaWQgQnJvd3NlclwiXV0sWy8oY2hyb21lfG9tbml3ZWJ8YXJvcmF8W3RpemVub2thXXs1fVxccz9icm93c2VyKVxcL3Y/KFtcXHdcXC5dKykvaSwvKHFxYnJvd3NlcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pXSxbYyxkXSxbLyh1Y1xccz9icm93c2VyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksL3Vjd2ViLisodWNicm93c2VyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksL2p1Yy4rKHVjd2ViKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ldLFtbYyxcIlVDQnJvd3NlclwiXSxkXSxbLyhkb2xmaW4pXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiRG9scGhpblwiXSxkXSxbLygoPzphbmRyb2lkLispY3Jtb3xjcmlvcylcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJDaHJvbWVcIl0sZF0sWy87ZmJhdlxcLyhbXFx3XFwuXSspOy9pXSxbZCxbYyxcIkZhY2Vib29rXCJdXSxbL2Z4aW9zXFwvKFtcXHdcXC4tXSspL2ldLFtkLFtjLFwiRmlyZWZveFwiXV0sWy92ZXJzaW9uXFwvKFtcXHdcXC5dKykuKz9tb2JpbGVcXC9cXHcrXFxzKHNhZmFyaSkvaV0sW2QsW2MsXCJNb2JpbGUgU2FmYXJpXCJdXSxbL3ZlcnNpb25cXC8oW1xcd1xcLl0rKS4rPyhtb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkvaV0sW2QsY10sWy93ZWJraXQuKz8obW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpKFxcL1tcXHdcXC5dKykvaV0sW2MsW2QseC5zdHIsVC5icm93c2VyLm9sZHNhZmFyaS52ZXJzaW9uXV0sWy8oa29ucXVlcm9yKVxcLyhbXFx3XFwuXSspL2ksLyh3ZWJraXR8a2h0bWwpXFwvKFtcXHdcXC5dKykvaV0sW2MsZF0sWy8obmF2aWdhdG9yfG5ldHNjYXBlKVxcLyhbXFx3XFwuLV0rKS9pXSxbW2MsXCJOZXRzY2FwZVwiXSxkXSxbLyhzd2lmdGZveCkvaSwvKGljZWRyYWdvbnxpY2V3ZWFzZWx8Y2FtaW5vfGNoaW1lcmF8ZmVubmVjfG1hZW1vXFxzYnJvd3NlcnxtaW5pbW98Y29ua2Vyb3IpW1xcL1xcc10/KFtcXHdcXC5cXCtdKykvaSwvKGZpcmVmb3h8c2VhbW9ua2V5fGstbWVsZW9ufGljZWNhdHxpY2VhcGV8ZmlyZWJpcmR8cGhvZW5peClcXC8oW1xcd1xcLi1dKykvaSwvKG1vemlsbGEpXFwvKFtcXHdcXC5dKykuK3J2XFw6LitnZWNrb1xcL1xcZCsvaSwvKHBvbGFyaXN8bHlueHxkaWxsb3xpY2FifGRvcmlzfGFtYXlhfHczbXxuZXRzdXJmfHNsZWlwbmlyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksLyhsaW5rcylcXHNcXCgoW1xcd1xcLl0rKS9pLC8oZ29icm93c2VyKVxcLz8oW1xcd1xcLl0rKSovaSwvKGljZVxccz9icm93c2VyKVxcL3Y/KFtcXHdcXC5fXSspL2ksLyhtb3NhaWMpW1xcL1xcc10oW1xcd1xcLl0rKS9pXSxbYyxkXV0sY3B1OltbLyg/OihhbWR8eCg/Oig/Ojg2fDY0KVtfLV0pP3x3b3d8d2luKTY0KVs7XFwpXS9pXSxbW3YsXCJhbWQ2NFwiXV0sWy8oaWEzMig/PTspKS9pXSxbW3YsUy5sb3dlcml6ZV1dLFsvKCg/OmlbMzQ2XXx4KTg2KVs7XFwpXS9pXSxbW3YsXCJpYTMyXCJdXSxbL3dpbmRvd3NcXHMoY2V8bW9iaWxlKTtcXHNwcGM7L2ldLFtbdixcImFybVwiXV0sWy8oKD86cHBjfHBvd2VycGMpKD86NjQpPykoPzpcXHNtYWN8O3xcXCkpL2ldLFtbdiwvb3dlci8sXCJcIixTLmxvd2VyaXplXV0sWy8oc3VuNFxcdylbO1xcKV0vaV0sW1t2LFwic3BhcmNcIl1dLFsvKCg/OmF2cjMyfGlhNjQoPz07KSl8NjhrKD89XFwpKXxhcm0oPzo2NHwoPz12XFxkKzspKXwoPz1hdG1lbFxccylhdnJ8KD86aXJpeHxtaXBzfHNwYXJjKSg/OjY0KT8oPz07KXxwYS1yaXNjKS9pXSxbW3YsUy5sb3dlcml6ZV1dXSxkZXZpY2U6W1svXFwoKGlwYWR8cGxheWJvb2spO1tcXHdcXHNcXCk7LV0rKHJpbXxhcHBsZSkvaV0sW2wscCxbaCx5XV0sWy9hcHBsZWNvcmVtZWRpYVxcL1tcXHdcXC5dKyBcXCgoaXBhZCkvXSxbbCxbcCxcIkFwcGxlXCJdLFtoLHldXSxbLyhhcHBsZVxcc3swLDF9dHYpL2ldLFtbbCxcIkFwcGxlIFRWXCJdLFtwLFwiQXBwbGVcIl1dLFsvKGFyY2hvcylcXHMoZ2FtZXBhZDI/KS9pLC8oaHApLisodG91Y2hwYWQpL2ksLyhocCkuKyh0YWJsZXQpL2ksLyhraW5kbGUpXFwvKFtcXHdcXC5dKykvaSwvXFxzKG5vb2spW1xcd1xcc10rYnVpbGRcXC8oXFx3KykvaSwvKGRlbGwpXFxzKHN0cmVhW2twclxcc1xcZF0qW1xcZGtvXSkvaV0sW3AsbCxbaCx5XV0sWy8oa2ZbQS16XSspXFxzYnVpbGRcXC9bXFx3XFwuXSsuKnNpbGtcXC8vaV0sW2wsW3AsXCJBbWF6b25cIl0sW2gseV1dLFsvKHNkfGtmKVswMzQ5aGlqb3JzdHV3XStcXHNidWlsZFxcL1tcXHdcXC5dKy4qc2lsa1xcLy9pXSxbW2wseC5zdHIsVC5kZXZpY2UuYW1hem9uLm1vZGVsXSxbcCxcIkFtYXpvblwiXSxbaCxnXV0sWy9cXCgoaXBbaG9uZWR8XFxzXFx3Kl0rKTsuKyhhcHBsZSkvaV0sW2wscCxbaCxnXV0sWy9cXCgoaXBbaG9uZWR8XFxzXFx3Kl0rKTsvaV0sW2wsW3AsXCJBcHBsZVwiXSxbaCxnXV0sWy8oYmxhY2tiZXJyeSlbXFxzLV0/KFxcdyspL2ksLyhibGFja2JlcnJ5fGJlbnF8cGFsbSg/PVxcLSl8c29ueWVyaWNzc29ufGFjZXJ8YXN1c3xkZWxsfGh1YXdlaXxtZWl6dXxtb3Rvcm9sYXxwb2x5dHJvbilbXFxzXy1dPyhbXFx3LV0rKSovaSwvKGhwKVxccyhbXFx3XFxzXStcXHcpL2ksLyhhc3VzKS0/KFxcdyspL2ldLFtwLGwsW2gsZ11dLFsvXFwoYmIxMDtcXHMoXFx3KykvaV0sW2wsW3AsXCJCbGFja0JlcnJ5XCJdLFtoLGddXSxbL2FuZHJvaWQuKyh0cmFuc2ZvW3ByaW1lXFxzXXs0LDEwfVxcc1xcdyt8ZWVlcGN8c2xpZGVyXFxzXFx3K3xuZXh1cyA3fHBhZGZvbmUpL2ldLFtsLFtwLFwiQXN1c1wiXSxbaCx5XV0sWy8oc29ueSlcXHModGFibGV0XFxzW3BzXSlcXHNidWlsZFxcLy9pLC8oc29ueSk/KD86c2dwLispXFxzYnVpbGRcXC8vaV0sW1twLFwiU29ueVwiXSxbbCxcIlhwZXJpYSBUYWJsZXRcIl0sW2gseV1dLFsvKD86c29ueSk/KD86KD86KD86Y3xkKVxcZHs0fSl8KD86c29bLWxdLispKVxcc2J1aWxkXFwvL2ldLFtbcCxcIlNvbnlcIl0sW2wsXCJYcGVyaWEgUGhvbmVcIl0sW2gsZ11dLFsvXFxzKG91eWEpXFxzL2ksLyhuaW50ZW5kbylcXHMoW3dpZHMzdV0rKS9pXSxbcCxsLFtoLG1dXSxbL2FuZHJvaWQuKztcXHMoc2hpZWxkKVxcc2J1aWxkL2ldLFtsLFtwLFwiTnZpZGlhXCJdLFtoLG1dXSxbLyhwbGF5c3RhdGlvblxcc1szNHBvcnRhYmxldmldKykvaV0sW2wsW3AsXCJTb255XCJdLFtoLG1dXSxbLyhzcHJpbnRcXHMoXFx3KykpL2ldLFtbcCx4LnN0cixULmRldmljZS5zcHJpbnQudmVuZG9yXSxbbCx4LnN0cixULmRldmljZS5zcHJpbnQubW9kZWxdLFtoLGddXSxbLyhsZW5vdm8pXFxzPyhTKD86NTAwMHw2MDAwKSsoPzpbLV1bXFx3K10pKS9pXSxbcCxsLFtoLHldXSxbLyhodGMpWztfXFxzLV0rKFtcXHdcXHNdKyg/PVxcKSl8XFx3KykqL2ksLyh6dGUpLShcXHcrKSovaSwvKGFsY2F0ZWx8Z2Vla3NwaG9uZXxodWF3ZWl8bGVub3ZvfG5leGlhbnxwYW5hc29uaWN8KD89O1xccylzb255KVtfXFxzLV0/KFtcXHctXSspKi9pXSxbcCxbbCwvXy9nLFwiIFwiXSxbaCxnXV0sWy8obmV4dXNcXHM5KS9pXSxbbCxbcCxcIkhUQ1wiXSxbaCx5XV0sWy8obmV4dXNcXHM2cCkvaV0sW2wsW3AsXCJIdWF3ZWlcIl0sW2gsZ11dLFsvKG1pY3Jvc29mdCk7XFxzKGx1bWlhW1xcc1xcd10rKS9pXSxbcCxsLFtoLGddXSxbL1tcXHNcXCg7XSh4Ym94KD86XFxzb25lKT8pW1xcc1xcKTtdL2ldLFtsLFtwLFwiTWljcm9zb2Z0XCJdLFtoLG1dXSxbLyhraW5cXC5bb25ldHddezN9KS9pXSxbW2wsL1xcLi9nLFwiIFwiXSxbcCxcIk1pY3Jvc29mdFwiXSxbaCxnXV0sWy9cXHMobWlsZXN0b25lfGRyb2lkKD86WzItNHhdfFxccyg/OmJpb25pY3x4Mnxwcm98cmF6cikpPyg6P1xcczRnKT8pW1xcd1xcc10rYnVpbGRcXC8vaSwvbW90W1xccy1dPyhcXHcrKSovaSwvKFhUXFxkezMsNH0pIGJ1aWxkXFwvL2ksLyhuZXh1c1xcczYpL2ldLFtsLFtwLFwiTW90b3JvbGFcIl0sW2gsZ11dLFsvYW5kcm9pZC4rXFxzKG16NjBcXGR8eG9vbVtcXHMyXXswLDJ9KVxcc2J1aWxkXFwvL2ldLFtsLFtwLFwiTW90b3JvbGFcIl0sW2gseV1dLFsvaGJidHZcXC9cXGQrXFwuXFxkK1xcLlxcZCtcXHMrXFwoW1xcd1xcc10qO1xccyooXFx3W147XSopOyhbXjtdKikvaV0sW1twLFMudHJpbV0sW2wsUy50cmltXSxbaCxiXV0sWy9oYmJ0di4rbWFwbGU7KFxcZCspL2ldLFtbbCwvXi8sXCJTbWFydFRWXCJdLFtwLFwiU2Ftc3VuZ1wiXSxbaCxiXV0sWy9cXChkdHZbXFwpO10uKyhhcXVvcykvaV0sW2wsW3AsXCJTaGFycFwiXSxbaCxiXV0sWy9hbmRyb2lkLisoKHNjaC1pWzg5XTBcXGR8c2h3LW0zODBzfGd0LXBcXGR7NH18Z3QtblxcZCt8c2doLXQ4WzU2XTl8bmV4dXMgMTApKS9pLC8oKFNNLVRcXHcrKSkvaV0sW1twLFwiU2Ftc3VuZ1wiXSxsLFtoLHldXSxbL3NtYXJ0LXR2Lisoc2Ftc3VuZykvaV0sW3AsW2gsYl0sbF0sWy8oKHNbY2dwXWgtXFx3K3xndC1cXHcrfGdhbGF4eVxcc25leHVzfHNtLVxcd1tcXHdcXGRdKykpL2ksLyhzYW1bc3VuZ10qKVtcXHMtXSooXFx3Ky0/W1xcdy1dKikqL2ksL3NlYy0oKHNnaFxcdyspKS9pXSxbW3AsXCJTYW1zdW5nXCJdLGwsW2gsZ11dLFsvc2llLShcXHcrKSovaV0sW2wsW3AsXCJTaWVtZW5zXCJdLFtoLGddXSxbLyhtYWVtb3xub2tpYSkuKihuOTAwfGx1bWlhXFxzXFxkKykvaSwvKG5va2lhKVtcXHNfLV0/KFtcXHctXSspKi9pXSxbW3AsXCJOb2tpYVwiXSxsLFtoLGddXSxbL2FuZHJvaWRcXHMzXFwuW1xcc1xcdzstXXsxMH0oYVxcZHszfSkvaV0sW2wsW3AsXCJBY2VyXCJdLFtoLHldXSxbL2FuZHJvaWRcXHMzXFwuW1xcc1xcdzstXXsxMH0obGc/KS0oWzA2Y3Y5XXszLDR9KS9pXSxbW3AsXCJMR1wiXSxsLFtoLHldXSxbLyhsZykgbmV0Y2FzdFxcLnR2L2ldLFtwLGwsW2gsYl1dLFsvKG5leHVzXFxzWzQ1XSkvaSwvbGdbZTtcXHNcXC8tXSsoXFx3KykqL2ldLFtsLFtwLFwiTEdcIl0sW2gsZ11dLFsvYW5kcm9pZC4rKGlkZWF0YWJbYS16MC05XFwtXFxzXSspL2ldLFtsLFtwLFwiTGVub3ZvXCJdLFtoLHldXSxbL2xpbnV4Oy4rKChqb2xsYSkpOy9pXSxbcCxsLFtoLGddXSxbLygocGViYmxlKSlhcHBcXC9bXFxkXFwuXStcXHMvaV0sW3AsbCxbaCx3XV0sWy9hbmRyb2lkLis7XFxzKGdsYXNzKVxcc1xcZC9pXSxbbCxbcCxcIkdvb2dsZVwiXSxbaCx3XV0sWy9hbmRyb2lkLisoXFx3KylcXHMrYnVpbGRcXC9obVxcMS9pLC9hbmRyb2lkLisoaG1bXFxzXFwtX10qbm90ZT9bXFxzX10qKD86XFxkXFx3KT8pXFxzK2J1aWxkL2ksL2FuZHJvaWQuKyhtaVtcXHNcXC1fXSooPzpvbmV8b25lW1xcc19dcGx1c3xub3RlIGx0ZSk/W1xcc19dKig/OlxcZFxcdyk/KVxccytidWlsZC9pXSxbW2wsL18vZyxcIiBcIl0sW3AsXCJYaWFvbWlcIl0sW2gsZ11dLFsvYW5kcm9pZC4rYTAwMCgxKVxccytidWlsZC9pXSxbbCxbcCxcIk9uZVBsdXNcIl0sW2gsZ11dLFsvXFxzKHRhYmxldClbO1xcL10vaSwvXFxzKG1vYmlsZSkoPzpbO1xcL118XFxzc2FmYXJpKS9pXSxbW2gsUy5sb3dlcml6ZV0scCxsXV0sZW5naW5lOltbL3dpbmRvd3MuK1xcc2VkZ2VcXC8oW1xcd1xcLl0rKS9pXSxbZCxbYyxcIkVkZ2VIVE1MXCJdXSxbLyhwcmVzdG8pXFwvKFtcXHdcXC5dKykvaSwvKHdlYmtpdHx0cmlkZW50fG5ldGZyb250fG5ldHN1cmZ8YW1heWF8bHlueHx3M20pXFwvKFtcXHdcXC5dKykvaSwvKGtodG1sfHRhc21hbnxsaW5rcylbXFwvXFxzXVxcKD8oW1xcd1xcLl0rKS9pLC8oaWNhYilbXFwvXFxzXShbMjNdXFwuW1xcZFxcLl0rKS9pXSxbYyxkXSxbL3J2XFw6KFtcXHdcXC5dKykuKihnZWNrbykvaV0sW2QsY11dLG9zOltbL21pY3Jvc29mdFxccyh3aW5kb3dzKVxccyh2aXN0YXx4cCkvaV0sW2MsZF0sWy8od2luZG93cylcXHNudFxcczZcXC4yO1xccyhhcm0pL2ksLyh3aW5kb3dzXFxzcGhvbmUoPzpcXHNvcykqKVtcXHNcXC9dPyhbXFxkXFwuXFxzXStcXHcpKi9pLC8od2luZG93c1xcc21vYmlsZXx3aW5kb3dzKVtcXHNcXC9dPyhbbnRjZVxcZFxcLlxcc10rXFx3KS9pXSxbYyxbZCx4LnN0cixULm9zLndpbmRvd3MudmVyc2lvbl1dLFsvKHdpbig/PTN8OXxuKXx3aW5cXHM5eFxccykoW250XFxkXFwuXSspL2ldLFtbYyxcIldpbmRvd3NcIl0sW2QseC5zdHIsVC5vcy53aW5kb3dzLnZlcnNpb25dXSxbL1xcKChiYikoMTApOy9pXSxbW2MsXCJCbGFja0JlcnJ5XCJdLGRdLFsvKGJsYWNrYmVycnkpXFx3KlxcLz8oW1xcd1xcLl0rKSovaSwvKHRpemVuKVtcXC9cXHNdKFtcXHdcXC5dKykvaSwvKGFuZHJvaWR8d2Vib3N8cGFsbVxcc29zfHFueHxiYWRhfHJpbVxcc3RhYmxldFxcc29zfG1lZWdvfGNvbnRpa2kpW1xcL1xccy1dPyhbXFx3XFwuXSspKi9pLC9saW51eDsuKyhzYWlsZmlzaCk7L2ldLFtjLGRdLFsvKHN5bWJpYW5cXHM/b3N8c3ltYm9zfHM2MCg/PTspKVtcXC9cXHMtXT8oW1xcd1xcLl0rKSovaV0sW1tjLFwiU3ltYmlhblwiXSxkXSxbL1xcKChzZXJpZXM0MCk7L2ldLFtjXSxbL21vemlsbGEuK1xcKG1vYmlsZTsuK2dlY2tvLitmaXJlZm94L2ldLFtbYyxcIkZpcmVmb3ggT1NcIl0sZF0sWy8obmludGVuZG98cGxheXN0YXRpb24pXFxzKFt3aWRzMzRwb3J0YWJsZXZ1XSspL2ksLyhtaW50KVtcXC9cXHNcXChdPyhcXHcrKSovaSwvKG1hZ2VpYXx2ZWN0b3JsaW51eClbO1xcc10vaSwvKGpvbGl8W2t4bG5dP3VidW50dXxkZWJpYW58W29wZW5dKnN1c2V8Z2VudG9vfCg/PVxccylhcmNofHNsYWNrd2FyZXxmZWRvcmF8bWFuZHJpdmF8Y2VudG9zfHBjbGludXhvc3xyZWRoYXR8emVud2Fsa3xsaW5wdXMpW1xcL1xccy1dPyg/IWNocm9tKShbXFx3XFwuLV0rKSovaSwvKGh1cmR8bGludXgpXFxzPyhbXFx3XFwuXSspKi9pLC8oZ251KVxccz8oW1xcd1xcLl0rKSovaV0sW2MsZF0sWy8oY3JvcylcXHNbXFx3XStcXHMoW1xcd1xcLl0rXFx3KS9pXSxbW2MsXCJDaHJvbWl1bSBPU1wiXSxkXSxbLyhzdW5vcylcXHM/KFtcXHdcXC5dK1xcZCkqL2ldLFtbYyxcIlNvbGFyaXNcIl0sZF0sWy9cXHMoW2ZyZW50b3BjLV17MCw0fWJzZHxkcmFnb25mbHkpXFxzPyhbXFx3XFwuXSspKi9pXSxbYyxkXSxbLyhoYWlrdSlcXHMoXFx3KykvaV0sW2MsZF0sWy8oaXBbaG9uZWFkXSspKD86Lipvc1xccyhbXFx3XSspKlxcc2xpa2VcXHNtYWN8O1xcc29wZXJhKS9pXSxbW2MsXCJpT1NcIl0sW2QsL18vZyxcIi5cIl1dLFsvKG1hY1xcc29zXFxzeClcXHM/KFtcXHdcXHNcXC5dK1xcdykqL2ksLyhtYWNpbnRvc2h8bWFjKD89X3Bvd2VycGMpXFxzKS9pXSxbW2MsXCJNYWMgT1NcIl0sW2QsL18vZyxcIi5cIl1dLFsvKCg/Om9wZW4pP3NvbGFyaXMpW1xcL1xccy1dPyhbXFx3XFwuXSspKi9pLC8oYWl4KVxccygoXFxkKSg/PVxcLnxcXCl8XFxzKVtcXHdcXC5dKikqL2ksLyhwbGFuXFxzOXxtaW5peHxiZW9zfG9zXFwvMnxhbWlnYW9zfG1vcnBob3N8cmlzY1xcc29zfG9wZW52bXMpL2ksLyh1bml4KVxccz8oW1xcd1xcLl0rKSovaV0sW2MsZF1dfSxDPWZ1bmN0aW9uKHQsbil7aWYodGhpcyBpbnN0YW5jZW9mIEMpe3ZhciBpPXR8fChlJiZlLm5hdmlnYXRvciYmZS5uYXZpZ2F0b3IudXNlckFnZW50P2UubmF2aWdhdG9yLnVzZXJBZ2VudDpyKSxzPW4/Uy5leHRlbmQoTixuKTpOO3JldHVybiB0aGlzLmdldEJyb3dzZXI9ZnVuY3Rpb24oKXt2YXIgZT14LnJneC5hcHBseSh0aGlzLHMuYnJvd3Nlcik7cmV0dXJuIGUubWFqb3I9Uy5tYWpvcihlLnZlcnNpb24pLGV9LHRoaXMuZ2V0Q1BVPWZ1bmN0aW9uKCl7cmV0dXJuIHgucmd4LmFwcGx5KHRoaXMscy5jcHUpfSx0aGlzLmdldERldmljZT1mdW5jdGlvbigpe3JldHVybiB4LnJneC5hcHBseSh0aGlzLHMuZGV2aWNlKX0sdGhpcy5nZXRFbmdpbmU9ZnVuY3Rpb24oKXtyZXR1cm4geC5yZ3guYXBwbHkodGhpcyxzLmVuZ2luZSl9LHRoaXMuZ2V0T1M9ZnVuY3Rpb24oKXtyZXR1cm4geC5yZ3guYXBwbHkodGhpcyxzLm9zKX0sdGhpcy5nZXRSZXN1bHQ9ZnVuY3Rpb24oKXtyZXR1cm57dWE6dGhpcy5nZXRVQSgpLGJyb3dzZXI6dGhpcy5nZXRCcm93c2VyKCksZW5naW5lOnRoaXMuZ2V0RW5naW5lKCksb3M6dGhpcy5nZXRPUygpLGRldmljZTp0aGlzLmdldERldmljZSgpLGNwdTp0aGlzLmdldENQVSgpfX0sdGhpcy5nZXRVQT1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNldFVBPWZ1bmN0aW9uKGUpe3JldHVybiBpPWUsdGhpc30sdGhpc31yZXR1cm4obmV3IEModCxuKSkuZ2V0UmVzdWx0KCl9O0MuVkVSU0lPTj1uLEMuQlJPV1NFUj17TkFNRTpjLE1BSk9SOmYsVkVSU0lPTjpkfSxDLkNQVT17QVJDSElURUNUVVJFOnZ9LEMuREVWSUNFPXtNT0RFTDpsLFZFTkRPUjpwLFRZUEU6aCxDT05TT0xFOm0sTU9CSUxFOmcsU01BUlRUVjpiLFRBQkxFVDp5LFdFQVJBQkxFOncsRU1CRURERUQ6RX0sQy5FTkdJTkU9e05BTUU6YyxWRVJTSU9OOmR9LEMuT1M9e05BTUU6YyxWRVJTSU9OOmR9LHR5cGVvZiBleHBvcnRzIT09bz8odHlwZW9mIG1vZHVsZSE9PW8mJm1vZHVsZS5leHBvcnRzJiYoZXhwb3J0cz1tb2R1bGUuZXhwb3J0cz1DKSxleHBvcnRzLlVBUGFyc2VyPUMpOnR5cGVvZiBkZWZpbmU9PT1zJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBDfSk6ZS5VQVBhcnNlcj1DO3ZhciBrPWUualF1ZXJ5fHxlLlplcHRvO2lmKHR5cGVvZiBrIT09byl7dmFyIEw9bmV3IEM7ay51YT1MLmdldFJlc3VsdCgpLGsudWEuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIEwuZ2V0VUEoKX0say51YS5zZXQ9ZnVuY3Rpb24oZSl7TC5zZXRVQShlKTt2YXIgdD1MLmdldFJlc3VsdCgpO2Zvcih2YXIgbiBpbiB0KWsudWFbbl09dFtuXX19fSkodHlwZW9mIHdpbmRvdz09XCJvYmplY3RcIj93aW5kb3c6dGhpcyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL2xpYnMvdWEtcGFyc2VyLm1pbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3RcIik7IH07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIHByZWxvYWRJbWdcbiAqIEBwYXJhbSBpbWdQYXRoXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGltZ1BhdGgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICB2YXIgaW1nO1xuICAgIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oZSkge1xuICAgICAgaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhcmd1bWVudHMuY2FsbGVlKTtcbiAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGltZy5zcmMgPSBpbWdQYXRoO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2ltZy9wcmVsb2FkSW1nLmpzIiwiLyoqXG4gKiBzZXRVcEJ0blR3aXR0ZXJcbiAqIEBwYXJhbSAkYnRuXG4gKiBAcGFyYW0gdGV4dFxuICogQHBhcmFtIHNoYXJlVVJMXG4gKi9cbmV4cG9ydCBkZWZhdWx0ICgkYnRuLCB0ZXh0LCBzaGFyZVVSTCkgPT4ge1xuICB2YXIgdXJsO1xuICBpZiAoc2hhcmVVUkwgPT0gbnVsbCkge1xuICAgIHNoYXJlVVJMID0gJyc7XG4gIH1cbiAgdXJsID0gJ2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0Pyc7XG4gIGlmIChzaGFyZVVSTCA9PT0gJycpIHtcbiAgICB1cmwgKz0gXCJ0ZXh0PVwiICsgKGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSk7XG4gIH0gZWxzZSB7XG4gICAgdXJsICs9IFwidXJsPVwiICsgKGVuY29kZVVSSUNvbXBvbmVudChzaGFyZVVSTCkpICsgXCImdGV4dD1cIiArIChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpO1xuICB9XG4gIHJldHVybiAkYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICB3aW5kb3cub3Blbih1cmwsICd0d2l0dGVyU2hhcmUnLCAnd2lkdGg9NjcwLGhlaWdodD00MDAnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuVHdpdHRlci5qcyIsIi8qKlxuICogc2V0VXBCdG5MaW5lXG4gKiBAcGFyYW0gJGJ0blxuICogQHBhcmFtIHRleHRcbiAqIEBwYXJhbSBzaGFyZVVSTFxuICovXG5leHBvcnQgZGVmYXVsdCAoJGJ0biwgdGV4dCwgc2hhcmVVUkwgPSAnJykgPT4ge1xuICB2YXIgdXJsO1xuICBpZiAoc2hhcmVVUkwgPT0gbnVsbCkge1xuICAgIHNoYXJlVVJMID0gJyc7XG4gIH1cbiAgdXJsID0gJ2h0dHA6Ly9saW5lLm1lL21zZy90ZXh0Lz8nO1xuICBpZiAoc2hhcmVVUkwgPT09ICcnKSB7XG4gICAgdXJsICs9IFwiXCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKTtcbiAgfSBlbHNlIHtcbiAgICB1cmwgKz0gKGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSkgKyBcIlxcblwiICsgKGVuY29kZVVSSUNvbXBvbmVudChzaGFyZVVSTCkpO1xuICB9XG4gIHJldHVybiAkYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICB3aW5kb3cub3Blbih1cmwsICdsaW5lU2hhcmUnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuTGluZS5qcyIsIi8qKlxuICogc2V0VXBCdG5GYWNlYm9va1xuICogQHBhcmFtICRidG5cbiAqIEBwYXJhbSBzaGFyZVVSTFxuICogQHBhcmFtIGRlc2NyaXB0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0ICgkYnRuLCBzaGFyZVVSTCwgZGVzY3JpcHRpb24gPSAnJykgPT4ge1xuICB2YXIgdXJsO1xuICBpZiAoZGVzY3JpcHRpb24gPT0gbnVsbCkge1xuICAgIGRlc2NyaXB0aW9uID0gJyc7XG4gIH1cbiAgdXJsID0gJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD8mZGlzcGxheT1wb3B1cCZ1PSc7XG4gIHVybCArPSBcIlwiICsgKGVuY29kZVVSSUNvbXBvbmVudChzaGFyZVVSTCkpO1xuICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICB1cmwgKz0gXCImZGVzY3JpcHRpb249XCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KGRlc2NyaXB0aW9uKSk7XG4gIH1cbiAgcmV0dXJuICRidG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHdpbmRvdy5vcGVuKHVybCwgXCJmYWNlYm9va1NoYXJlXCIgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkpLCAnd2lkdGg9NjcwLGhlaWdodD00MDAnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuRmFjZUJvb2suanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBGdW5jXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5ibGFuaygpO1xuICAgIHRoaXMuZGVidWdnZXIoKTtcbiAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xuICAgIHRoaXMuZXhwYW5kalF1ZXJ5KCk7XG5cbiAgfVxuXG4gIGJsYW5rKCkge1xuXG4gICAgJCgoKT0+eyQoJy5ibGFuaycpLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKTt9KTtcblxuICB9XG5cbiAgZGVidWdnZXIoKSB7XG5cbiAgICAvLyDjg4fjg5Djg4PjgrDjg6Ljg7zjg4nliIfmm79cbiAgICB2YXIgUkVMRUFTRSA9IGdiLmluLmNvbmYuUkVMRUFTRTtcblxuICAgIC8vIOe9ruaPm+WvvuixoeOBruODoeOCveODg+ODieOCkumFjeWIl+OBqOOBl+OBpuS/neaMgeOBmeOCi1xuICAgIHZhciBtZXRob2RzID0gW1xuICAgICAgJ2xvZycsXG4gICAgICAnZGVidWcnLFxuICAgICAgJ2luZm8nLFxuICAgICAgJ3dhcm4nLFxuICAgICAgJ2Vycm9yJyxcbiAgICAgICdkaXInLFxuICAgICAgJ3RyYWNlJyxcbiAgICAgICdhc3NlcnQnLFxuICAgICAgJ2RpcnhtbCcsXG4gICAgICAnZ3JvdXAnLFxuICAgICAgJ2dyb3VwRW5kJyxcbiAgICAgICd0aW1lJyxcbiAgICAgICd0aW1lRW5kJyxcbiAgICAgICdjb3VudCcsXG4gICAgICAncHJvZmlsZScsXG4gICAgICAncHJvZmlsZUVuZCdcbiAgICBdO1xuXG4gICAgLy8gY29uc29sZeOBjOS9v+OBiOOBquOBhOWgtOWQiOOBr+epuuOBruOCquODluOCuOOCp+OCr+ODiOOCkuioreWumuOBl+OBpuOBiuOBj1xuICAgIGlmKCB0eXBlb2Ygd2luZG93LmNvbnNvbGUgPT09IFwidW5kZWZpbmVkXCIgKXtcbiAgICAgIHdpbmRvdy5jb25zb2xlID0ge307XG4gICAgfVxuXG4gICAgLy8g5ZCE44Oh44K944OD44OJ44KSd2luZG9344G455u05o6l6L+95Yqg44GX44Gm6KGM44GPXG4gICAgZm9yKCB2YXIgaSBpbiBtZXRob2RzICl7XG4gICAgICAoZnVuY3Rpb24oIG0gKXtcblxuICAgICAgIC8vIGNvbnNvbGXjgavjgYLjgovvvJ/jg4fjg5Djg4PjgrDjg6Ljg7zjg4njga/mnInlirnvvJ9jb25zb2xl44Gu44KC44Gu44Gv6Zai5pWw77yfXG4gICAgICAgaWYoIGNvbnNvbGVbbV0gJiYgIVJFTEVBU0UgJiYgdHlwZW9mIGNvbnNvbGVbbV0gPT09IFwiZnVuY3Rpb25cIiApe1xuICAgICAgICB3aW5kb3dbbV0gPSBjb25zb2xlW21dLmJpbmQoY29uc29sZSk7XG4gICAgICAgfSBlbHNlIHvjgIAvLyBkZWJ1Z01vZGXjgYxmYWxzZSzjgoLjgZfjgY/jga/oqbLlvZPjg6Hjgr3jg4Pjg4njgYzlrZjlnKjjgZfjgarjgYTloLTlkIjjga/jgIHnqbrjga7jg6Hjgr3jg4Pjg4njgpLnlKjmhI/jgZnjgotcbiAgICAgICAgd2luZG93W21dID0gZnVuY3Rpb24oKXt9O1xuICAgICAgIH1cblxuICAgICAgfSkoIG1ldGhvZHNbaV0gKTtcbiAgICB9XG5cbiAgfVxuXG4gIHByZXBlbmQocGFyYW0pIHtcblxuICAgICQoJ2JvZHknKS5wcmVwZW5kKHBhcmFtKTtcblxuICB9XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkge1xuXG4gICAgdmFyIEZQUyA9IDEwMDAvNjA7XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAvLyBjaHJvbWXjgoTmnIDmlrDjga5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAvLyDlj6TjgYRmaXJlZm9455SoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgIC8vIHNhZmFyaTbku6XliY3jgIFpT1M2IHNhZmFyaeeUqFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIEZQUyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiggdGltZXIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9OyAgICAgIFxuXG4gIH1cblxuICBleHBhbmRqUXVlcnkoKSB7XG5cbiAgICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICAgIHc6MCwgXG4gICAgICBoOjAsIFxuICAgICAgYWRqdXN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICdsZWZ0JzonNTAlJyxcbiAgICAgICAgICAgICd0b3AnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzonLScgKyAodyAvIDIpICsgJ3B4JyxcbiAgICAgICAgICAgICdtYXJnaW4tdG9wJzonLScgKyAoaCAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGFkanVzdFc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ2xlZnQnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzonLScgKyAodyAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGFkanVzdEg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ3RvcCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLXRvcCc6Jy0nICsgKGggLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgY2hlY2tDc3NCbGVuZCgpIHtcblxuICAgIGlmICgnQ1NTJyBpbiB3aW5kb3cgJiYgJ3N1cHBvcnRzJyBpbiB3aW5kb3cuQ1NTKSB7XG4gICAgICBpZiAoIXdpbmRvdy5DU1Muc3VwcG9ydHMoJ21peC1ibGVuZC1tb2RlJywgJ3NvZnQtbGlnaHQnKSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm90LW1peC1ibGVuZC1tb2RlJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb2coZ2IuaW4udS5pc0lFKTtcblxuICAgIGlmIChnYi5pbi51LmlzSUUpIHtcbiAgICAgIFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1taXgtYmxlbmQtbW9kZScpXG4gICAgICBcbiAgICB9O1xuXG4gIH1cblxuICBub3RTYXZlSW1nKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgcGNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgaWYgKGdiLmluLnUuaXNQQykge1xuXG4gICAgICAkKCgpPT57XG4gICAgICAgICQoXCJpbWdcIikub24oXCJjb250ZXh0bWVudVwiLCgpPT57XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgc3AgYW5kcm9pZFxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdmFyIHYgPSBnYi5pbi51LmlzQW5kcm9pZFZlcnNpb24oKTtcblxuICAgIGlmICh2PT11bmRlZmluZWQpIHJldHVybjtcbiAgICBpZiAodjw1KSB7XG5cbiAgICAgIHZhciB0aW1lcjtcbiAgICAgICQoXCJpbWdcIikub24oXCJ0b3VjaHN0YXJ0XCIsKCk9PntcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgYWxlcnQoXCLnlLvlg4/jga/kv53lrZjjgafjgY3jgb7jgZvjgpNcIilcbiAgICAgICAgfSw1MDApXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAkKFwiaW1nXCIpLm9uKFwidG91Y2hlbmRcIiwoKT0+e1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KSAgICAgIFxuXG4gICAgfVxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL0Z1bmMuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBNYWluXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBEaXNwbGF5VG9wIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheVRvcCc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICAvL3BhZ2Xjg5rjg7zjgrjliKXjga5JROOCkuWPluW+l1xuICAgIHZhciBwYWdlID0gJCgnYm9keScpLmRhdGEoJ2lkJyk7XG5cbiAgICB3aW5kb3cuY29uc29sZS5sb2coJ+ePvuWcqOOBruODmuODvOOCuElE44GvICcsIHBhZ2UpO1xuXG5cdFx0Ly9wYWdl44GuSUTjgZTjgajjgavnmbrngavjgZnjgovjgq/jg6njgrnjga7mjK/jgorliIbjgZFcbiAgICBzd2l0Y2ggKHBhZ2UpIHtcblxuICAgICAgY2FzZSAndG9wJzpcblxuICAgICAgICBuZXcgRGlzcGxheVRvcCgpO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBcbiAgfVxuXG4gIG9uUmVuZGVyKCkge1xuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvcGFnZS9NYWluLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRGlzcGxheVxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG4vLyBpbXBvcnQgV2ViR0xpbml0IGZyb20gJy4vV2ViR0xpbml0LmpzJztcblxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi4vdmlzdWFsL0NhbnZhc1wiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlUb3Age1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICAvLyBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBnYi5pbi5jYW52YXMgPSBuZXcgQ2FudmFzKHtcbiAgICAgIG91dHB1dDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYmdsLW91dHB1dCcpXG4gICAgfSk7XG5cbiAgICAvLyBnYi5pbi5jYW52YXMuaW5pdCgpO1xuXG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblx0XHQvLyB3aW5kb3cuY29uc29sZS5sb2coJ3N0YXRpY19SdW4nKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENhbnZhc1xuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG4vLyBpbXBvcnQgQ2FtZXJhIGZyb20gJy4vVXRpbHMvQ2FtZXJhLmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcihvcHRzID0ge30pIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5vdXRwdXQgPSBvcHRzLm91dHB1dCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcblx0XHR0aGlzLmN1YmUgPSBudWxsO1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEgPSB0aGlzLl9jcmVhdGVDYW1lcmEuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyID0gdGhpcy5fY3JlYXRlUmVuZGVyZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVNjZW5lID0gdGhpcy5fY3JlYXRlU2NlbmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZU9iamVjdCA9IHRoaXMuX2NyZWF0ZU9iamVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3JiaXRDb250cm9scyA9IHRoaXMuX29yYml0Q29udHJvbHMuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25SZXNpemUgPSB0aGlzLl9vblJlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5VcGRhdGUgPSB0aGlzLl9VcGRhdGUuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMllxuICAgKi9cbiAgaW5pdCgpe1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKTtcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuXG5cdFx0dGhpcy5vcmJpdENvbnRyb2xzKCk7XG5cblx0XHR0aGlzLmNyZWF0ZU9iamVjdCgpO1xuXG4gICAgdGhpcy5VcGRhdGUoKTtcblxuICAgIC8v44Oq44K144Kk44K644Kk44OZ44Oz44OI55m654GrXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICB9LCBmYWxzZSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjgqvjg6Hjg6nkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVDYW1lcmEoKXtcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IC0zMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gNDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDMwO1xuXG4gICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsMCwwKSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njg7zkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVSZW5kZXJlcigpe1xuXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgIGFscGhhICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgYW50aWFsaWFzICAgICAgICAgIDogZmFsc2UsXG4gICAgICBzdGVuY2lsICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIGRlcHRoICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBwcmVtdWx0aXBsaWVkQWxwaGEgOiBmYWxzZVxuXHRcdH0pO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB0aGlzLm91dHB1dC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDjgrfjg7zjg7PkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gIH1cblxuXHQvKipcblx0ICrjgIBPYmplY3TkvZzmiJBcblx0ICovXG5cdF9jcmVhdGVPYmplY3QoKXtcblxuICAgIGxldCBjdWJlR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNCwgNCwgNCk7XG4gICAgbGV0IGN1YmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogMHgwMDAwMDAsXG4gICAgICB3aXJlZnJhbWU6IHRydWVcbiAgICB9KTtcblxuICAgIHRoaXMuY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGN1YmVHZW9tZXRyeSwgY3ViZU1hdGVyaWFsKTtcbiAgICB0aGlzLmN1YmUucG9zaXRpb24ueCA9IDM7XG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLnkgPSAzO1xuICAgIHRoaXMuY3ViZS5wb3NpdGlvbi56ID0gMztcblxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY3ViZSk7XG5cblx0fVxuXG4gIC8qKlxuICAgKuOAgOabtOaWsFxuICAgKi9cbiAgX1VwZGF0ZSgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcbiAgICAgIHRoaXMuVXBkYXRlKCk7XG4gICAgfSk7XG4gICAgLy8gdGhpcy5jb250cm9scy51cGRhdGUoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG4gIH1cblxuICAvKipcbiAgICrjgIDnlLvpnaLjg6rjgrXjgqTjgrpcbiAgICovXG4gIF9vblJlc2l6ZSgpIHtcbiAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9XG5cblx0LyoqXG4gICAqIOOCq+ODoeODqeOCs+ODs+ODiOODreODvOODq1xuXHQgKi9cblx0X29yYml0Q29udHJvbHMoKXtcblx0XHR0aGlzLmNvbnRyb2xzID0gbmV3IFRIUkVFLk9yYml0Q29udHJvbHModGhpcy5jYW1lcmEpO1xuXHRcdHRoaXMuY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWU7XG5cdFx0bGV0IGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XG5cblx0XHRsZXQgZGVsdGEgPSBjbG9jay5nZXREZWx0YSgpO1xuXHRcdHRoaXMuY29udHJvbHMudXBkYXRlKGRlbHRhKTtcbiAgfVxuXG5cdHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL0NhbnZhcy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IEVudHJ5XG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbnJlcXVpcmUoJy4uLy4uL2xpYnMvT3JiaXRDb250cm9scy5qcycpO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudHJ5IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHR9XG5cblx0LyoqXG5cdCAqIOWIneacn+WMllxuXHQgKi9cblx0aW5pdCgpe1xuXG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvQ29yZS9FbnRyeS5qcyIsIi8qKlxuICogQGF1dGhvciBxaWFvIC8gaHR0cHM6Ly9naXRodWIuY29tL3FpYW9cbiAqIEBhdXRob3IgbXJkb29iIC8gaHR0cDovL21yZG9vYi5jb21cbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gKiBAYXV0aG9yIFdlc3RMYW5nbGV5IC8gaHR0cDovL2dpdGh1Yi5jb20vV2VzdExhbmdsZXlcbiAqIEBhdXRob3IgZXJpY2g2NjYgLyBodHRwOi8vZXJpY2hhaW5lcy5jb21cbiAqL1xuXG4vLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy5cbi8vIFVubGlrZSBUcmFja2JhbGxDb250cm9scywgaXQgbWFpbnRhaW5zIHRoZSBcInVwXCIgZGlyZWN0aW9uIG9iamVjdC51cCAoK1kgYnkgZGVmYXVsdCkuXG4vL1xuLy8gICAgT3JiaXQgLSBsZWZ0IG1vdXNlIC8gdG91Y2g6IG9uZSBmaW5nZXIgbW92ZVxuLy8gICAgWm9vbSAtIG1pZGRsZSBtb3VzZSwgb3IgbW91c2V3aGVlbCAvIHRvdWNoOiB0d28gZmluZ2VyIHNwcmVhZCBvciBzcXVpc2hcbi8vICAgIFBhbiAtIHJpZ2h0IG1vdXNlLCBvciBhcnJvdyBrZXlzIC8gdG91Y2g6IHRocmVlIGZpbnRlciBzd2lwZVxuXG5USFJFRS5PcmJpdENvbnRyb2xzID0gZnVuY3Rpb24gKCBvYmplY3QsIGRvbUVsZW1lbnQgKSB7XG5cblx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cblx0dGhpcy5kb21FbGVtZW50ID0gKCBkb21FbGVtZW50ICE9PSB1bmRlZmluZWQgKSA/IGRvbUVsZW1lbnQgOiBkb2N1bWVudDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcblx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuXHQvLyBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgb2JqZWN0IG9yYml0cyBhcm91bmRcblx0dGhpcy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBkb2xseSBpbiBhbmQgb3V0ICggUGVyc3BlY3RpdmVDYW1lcmEgb25seSApXG5cdHRoaXMubWluRGlzdGFuY2UgPSAwO1xuXHR0aGlzLm1heERpc3RhbmNlID0gSW5maW5pdHk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIHpvb20gaW4gYW5kIG91dCAoIE9ydGhvZ3JhcGhpY0NhbWVyYSBvbmx5IClcblx0dGhpcy5taW5ab29tID0gMDtcblx0dGhpcy5tYXhab29tID0gSW5maW5pdHk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IHZlcnRpY2FsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxuXHR0aGlzLm1pblBvbGFyQW5nbGUgPSAwOyAvLyByYWRpYW5zXG5cdHRoaXMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEk7IC8vIHJhZGlhbnNcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgaG9yaXpvbnRhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHQvLyBJZiBzZXQsIG11c3QgYmUgYSBzdWItaW50ZXJ2YWwgb2YgdGhlIGludGVydmFsIFsgLSBNYXRoLlBJLCBNYXRoLlBJIF0uXG5cdHRoaXMubWluQXppbXV0aEFuZ2xlID0gLSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXHR0aGlzLm1heEF6aW11dGhBbmdsZSA9IEluZmluaXR5OyAvLyByYWRpYW5zXG5cblx0Ly8gU2V0IHRvIHRydWUgdG8gZW5hYmxlIGRhbXBpbmcgKGluZXJ0aWEpXG5cdC8vIElmIGRhbXBpbmcgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdHRoaXMuZW5hYmxlRGFtcGluZyA9IGZhbHNlO1xuXHR0aGlzLmRhbXBpbmdGYWN0b3IgPSAwLjI1O1xuXG5cdC8vIFRoaXMgb3B0aW9uIGFjdHVhbGx5IGVuYWJsZXMgZG9sbHlpbmcgaW4gYW5kIG91dDsgbGVmdCBhcyBcInpvb21cIiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHpvb21pbmdcblx0dGhpcy5lbmFibGVab29tID0gdHJ1ZTtcblx0dGhpcy56b29tU3BlZWQgPSAxLjA7XG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcm90YXRpbmdcblx0dGhpcy5lbmFibGVSb3RhdGUgPSB0cnVlO1xuXHR0aGlzLnJvdGF0ZVNwZWVkID0gMS4wO1xuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHBhbm5pbmdcblx0dGhpcy5lbmFibGVQYW4gPSB0cnVlO1xuXHR0aGlzLmtleVBhblNwZWVkID0gNy4wO1x0Ly8gcGl4ZWxzIG1vdmVkIHBlciBhcnJvdyBrZXkgcHVzaFxuXG5cdC8vIFNldCB0byB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgcm90YXRlIGFyb3VuZCB0aGUgdGFyZ2V0XG5cdC8vIElmIGF1dG8tcm90YXRlIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHR0aGlzLmF1dG9Sb3RhdGUgPSBmYWxzZTtcblx0dGhpcy5hdXRvUm90YXRlU3BlZWQgPSAyLjA7IC8vIDMwIHNlY29uZHMgcGVyIHJvdW5kIHdoZW4gZnBzIGlzIDYwXG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdXNlIG9mIHRoZSBrZXlzXG5cdHRoaXMuZW5hYmxlS2V5cyA9IHRydWU7XG5cblx0Ly8gVGhlIGZvdXIgYXJyb3cga2V5c1xuXHR0aGlzLmtleXMgPSB7IExFRlQ6IDM3LCBVUDogMzgsIFJJR0hUOiAzOSwgQk9UVE9NOiA0MCB9O1xuXG5cdC8vIE1vdXNlIGJ1dHRvbnNcblx0dGhpcy5tb3VzZUJ1dHRvbnMgPSB7IE9SQklUOiBUSFJFRS5NT1VTRS5MRUZULCBaT09NOiBUSFJFRS5NT1VTRS5NSURETEUsIFBBTjogVEhSRUUuTU9VU0UuUklHSFQgfTtcblxuXHQvLyBmb3IgcmVzZXRcblx0dGhpcy50YXJnZXQwID0gdGhpcy50YXJnZXQuY2xvbmUoKTtcblx0dGhpcy5wb3NpdGlvbjAgPSB0aGlzLm9iamVjdC5wb3NpdGlvbi5jbG9uZSgpO1xuXHR0aGlzLnpvb20wID0gdGhpcy5vYmplY3Quem9vbTtcblxuXHQvL1xuXHQvLyBwdWJsaWMgbWV0aG9kc1xuXHQvL1xuXG5cdHRoaXMuZ2V0UG9sYXJBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBzcGhlcmljYWwucGhpO1xuXG5cdH07XG5cblx0dGhpcy5nZXRBemltdXRoYWxBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBzcGhlcmljYWwudGhldGE7XG5cblx0fTtcblxuXHR0aGlzLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0c2NvcGUudGFyZ2V0LmNvcHkoIHNjb3BlLnRhcmdldDAgKTtcblx0XHRzY29wZS5vYmplY3QucG9zaXRpb24uY29weSggc2NvcGUucG9zaXRpb24wICk7XG5cdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBzY29wZS56b29tMDtcblxuXHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH07XG5cblx0Ly8gdGhpcyBtZXRob2QgaXMgZXhwb3NlZCwgYnV0IHBlcmhhcHMgaXQgd291bGQgYmUgYmV0dGVyIGlmIHdlIGNhbiBtYWtlIGl0IHByaXZhdGUuLi5cblx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0Ly8gc28gY2FtZXJhLnVwIGlzIHRoZSBvcmJpdCBheGlzXG5cdFx0dmFyIHF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyggb2JqZWN0LnVwLCBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApICk7XG5cdFx0dmFyIHF1YXRJbnZlcnNlID0gcXVhdC5jbG9uZSgpLmludmVyc2UoKTtcblxuXHRcdHZhciBsYXN0UG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHRcdHZhciBsYXN0UXVhdGVybmlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlICgpIHtcblxuXHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXG5cdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHQvLyByb3RhdGUgb2Zmc2V0IHRvIFwieS1heGlzLWlzLXVwXCIgc3BhY2Vcblx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXQgKTtcblxuXHRcdFx0Ly8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xuXHRcdFx0c3BoZXJpY2FsLnNldEZyb21WZWN0b3IzKCBvZmZzZXQgKTtcblxuXHRcdFx0aWYgKCBzY29wZS5hdXRvUm90YXRlICYmIHN0YXRlID09PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdHJvdGF0ZUxlZnQoIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzcGhlcmljYWwudGhldGEgKz0gc3BoZXJpY2FsRGVsdGEudGhldGE7XG5cdFx0XHRzcGhlcmljYWwucGhpICs9IHNwaGVyaWNhbERlbHRhLnBoaTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgdGhldGEgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnRoZXRhID0gTWF0aC5tYXgoIHNjb3BlLm1pbkF6aW11dGhBbmdsZSwgTWF0aC5taW4oIHNjb3BlLm1heEF6aW11dGhBbmdsZSwgc3BoZXJpY2FsLnRoZXRhICkgKTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdHNwaGVyaWNhbC5waGkgPSBNYXRoLm1heCggc2NvcGUubWluUG9sYXJBbmdsZSwgTWF0aC5taW4oIHNjb3BlLm1heFBvbGFyQW5nbGUsIHNwaGVyaWNhbC5waGkgKSApO1xuXG5cdFx0XHRzcGhlcmljYWwubWFrZVNhZmUoKTtcblxuXG5cdFx0XHRzcGhlcmljYWwucmFkaXVzICo9IHNjYWxlO1xuXG5cdFx0XHQvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnJhZGl1cyA9IE1hdGgubWF4KCBzY29wZS5taW5EaXN0YW5jZSwgTWF0aC5taW4oIHNjb3BlLm1heERpc3RhbmNlLCBzcGhlcmljYWwucmFkaXVzICkgKTtcblxuXHRcdFx0Ly8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXG5cdFx0XHRzY29wZS50YXJnZXQuYWRkKCBwYW5PZmZzZXQgKTtcblxuXHRcdFx0b2Zmc2V0LnNldEZyb21TcGhlcmljYWwoIHNwaGVyaWNhbCApO1xuXG5cdFx0XHQvLyByb3RhdGUgb2Zmc2V0IGJhY2sgdG8gXCJjYW1lcmEtdXAtdmVjdG9yLWlzLXVwXCIgc3BhY2Vcblx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXRJbnZlcnNlICk7XG5cblx0XHRcdHBvc2l0aW9uLmNvcHkoIHNjb3BlLnRhcmdldCApLmFkZCggb2Zmc2V0ICk7XG5cblx0XHRcdHNjb3BlLm9iamVjdC5sb29rQXQoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZURhbXBpbmcgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS5waGkgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNjYWxlID0gMTtcblx0XHRcdHBhbk9mZnNldC5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0Ly8gdXBkYXRlIGNvbmRpdGlvbiBpczpcblx0XHRcdC8vIG1pbihjYW1lcmEgZGlzcGxhY2VtZW50LCBjYW1lcmEgcm90YXRpb24gaW4gcmFkaWFucyleMiA+IEVQU1xuXHRcdFx0Ly8gdXNpbmcgc21hbGwtYW5nbGUgYXBwcm94aW1hdGlvbiBjb3MoeC8yKSA9IDEgLSB4XjIgLyA4XG5cblx0XHRcdGlmICggem9vbUNoYW5nZWQgfHxcblx0XHRcdFx0bGFzdFBvc2l0aW9uLmRpc3RhbmNlVG9TcXVhcmVkKCBzY29wZS5vYmplY3QucG9zaXRpb24gKSA+IEVQUyB8fFxuXHRcdFx0XHQ4ICogKCAxIC0gbGFzdFF1YXRlcm5pb24uZG90KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApICkgPiBFUFMgKSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0XHRsYXN0UG9zaXRpb24uY29weSggc2NvcGUub2JqZWN0LnBvc2l0aW9uICk7XG5cdFx0XHRcdGxhc3RRdWF0ZXJuaW9uLmNvcHkoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICk7XG5cdFx0XHRcdHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0dGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHRcdC8vc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZGlzcG9zZScgfSApOyAvLyBzaG91bGQgdGhpcyBiZSBhZGRlZCBoZXJlP1xuXG5cdH07XG5cblx0Ly9cblx0Ly8gaW50ZXJuYWxzXG5cdC8vXG5cblx0dmFyIHNjb3BlID0gdGhpcztcblxuXHR2YXIgY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XG5cdHZhciBzdGFydEV2ZW50ID0geyB0eXBlOiAnc3RhcnQnIH07XG5cdHZhciBlbmRFdmVudCA9IHsgdHlwZTogJ2VuZCcgfTtcblxuXHR2YXIgU1RBVEUgPSB7IE5PTkUgOiAtIDEsIFJPVEFURSA6IDAsIERPTExZIDogMSwgUEFOIDogMiwgVE9VQ0hfUk9UQVRFIDogMywgVE9VQ0hfRE9MTFkgOiA0LCBUT1VDSF9QQU4gOiA1IH07XG5cblx0dmFyIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR2YXIgRVBTID0gMC4wMDAwMDE7XG5cblx0Ly8gY3VycmVudCBwb3NpdGlvbiBpbiBzcGhlcmljYWwgY29vcmRpbmF0ZXNcblx0dmFyIHNwaGVyaWNhbCA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcblx0dmFyIHNwaGVyaWNhbERlbHRhID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXG5cdHZhciBzY2FsZSA9IDE7XG5cdHZhciBwYW5PZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHR2YXIgem9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHR2YXIgcm90YXRlU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcm90YXRlRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHJvdGF0ZURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHR2YXIgcGFuU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcGFuRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHBhbkRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHR2YXIgZG9sbHlTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBkb2xseUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBkb2xseURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRmdW5jdGlvbiBnZXRBdXRvUm90YXRpb25BbmdsZSgpIHtcblxuXHRcdHJldHVybiAyICogTWF0aC5QSSAvIDYwIC8gNjAgKiBzY29wZS5hdXRvUm90YXRlU3BlZWQ7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGdldFpvb21TY2FsZSgpIHtcblxuXHRcdHJldHVybiBNYXRoLnBvdyggMC45NSwgc2NvcGUuem9vbVNwZWVkICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHJvdGF0ZUxlZnQoIGFuZ2xlICkge1xuXG5cdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgLT0gYW5nbGU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHJvdGF0ZVVwKCBhbmdsZSApIHtcblxuXHRcdHNwaGVyaWNhbERlbHRhLnBoaSAtPSBhbmdsZTtcblxuXHR9XG5cblx0dmFyIHBhbkxlZnQgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW5MZWZ0KCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMCApOyAvLyBnZXQgWCBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCAtIGRpc3RhbmNlICk7XG5cblx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdHZhciBwYW5VcCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhblVwKCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMSApOyAvLyBnZXQgWSBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCBkaXN0YW5jZSApO1xuXG5cdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHQvLyBkZWx0YVggYW5kIGRlbHRhWSBhcmUgaW4gcGl4ZWxzOyByaWdodCBhbmQgZG93biBhcmUgcG9zaXRpdmVcblx0dmFyIHBhbiA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuICggZGVsdGFYLCBkZWx0YVkgKSB7XG5cblx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdC8vIHBlcnNwZWN0aXZlXG5cdFx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblx0XHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblx0XHRcdFx0dmFyIHRhcmdldERpc3RhbmNlID0gb2Zmc2V0Lmxlbmd0aCgpO1xuXG5cdFx0XHRcdC8vIGhhbGYgb2YgdGhlIGZvdiBpcyBjZW50ZXIgdG8gdG9wIG9mIHNjcmVlblxuXHRcdFx0XHR0YXJnZXREaXN0YW5jZSAqPSBNYXRoLnRhbiggKCBzY29wZS5vYmplY3QuZm92IC8gMiApICogTWF0aC5QSSAvIDE4MC4wICk7XG5cblx0XHRcdFx0Ly8gd2UgYWN0dWFsbHkgZG9uJ3QgdXNlIHNjcmVlbldpZHRoLCBzaW5jZSBwZXJzcGVjdGl2ZSBjYW1lcmEgaXMgZml4ZWQgdG8gc2NyZWVuIGhlaWdodFxuXHRcdFx0XHRwYW5MZWZ0KCAyICogZGVsdGFYICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRwYW5VcCggMiAqIGRlbHRhWSAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdC8vIG9ydGhvZ3JhcGhpY1xuXHRcdFx0XHRwYW5MZWZ0KCBkZWx0YVggKiAoIHNjb3BlLm9iamVjdC5yaWdodCAtIHNjb3BlLm9iamVjdC5sZWZ0ICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50V2lkdGgsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0cGFuVXAoIGRlbHRhWSAqICggc2NvcGUub2JqZWN0LnRvcCAtIHNjb3BlLm9iamVjdC5ib3R0b20gKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBjYW1lcmEgbmVpdGhlciBvcnRob2dyYXBoaWMgbm9yIHBlcnNwZWN0aXZlXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIHBhbiBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdHNjb3BlLmVuYWJsZVBhbiA9IGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHRmdW5jdGlvbiBkb2xseUluKCBkb2xseVNjYWxlICkge1xuXG5cdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0c2NhbGUgLz0gZG9sbHlTY2FsZTtcblxuXHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tICogZG9sbHlTY2FsZSApICk7XG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGRvbGx5T3V0KCBkb2xseVNjYWxlICkge1xuXG5cdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0c2NhbGUgKj0gZG9sbHlTY2FsZTtcblxuXHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tIC8gZG9sbHlTY2FsZSApICk7XG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8vXG5cdC8vIGV2ZW50IGNhbGxiYWNrcyAtIHVwZGF0ZSB0aGUgb2JqZWN0IHN0YXRlXG5cdC8vXG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Sb3RhdGUnICk7XG5cblx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93bkRvbGx5JyApO1xuXG5cdFx0ZG9sbHlTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25QYW4nICk7XG5cblx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVSb3RhdGUnICk7XG5cblx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcblx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZURvbGx5JyApO1xuXG5cdFx0ZG9sbHlFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH1cblxuXHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVBhbicgKTtcblxuXHRcdHBhbkVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuXHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VVcCggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VVcCcgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VXaGVlbCcgKTtcblxuXHRcdGlmICggZXZlbnQuZGVsdGFZIDwgMCApIHtcblxuXHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5kZWx0YVkgPiAwICkge1xuXG5cdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fVxuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZUtleURvd24oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZUtleURvd24nICk7XG5cblx0XHRzd2l0Y2ggKCBldmVudC5rZXlDb2RlICkge1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuVVA6XG5cdFx0XHRcdHBhbiggMCwgc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxuXHRcdFx0XHRwYW4oIDAsIC0gc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuTEVGVDpcblx0XHRcdFx0cGFuKCBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5SSUdIVDpcblx0XHRcdFx0cGFuKCAtIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydERvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0RG9sbHknICk7XG5cblx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXG5cdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0ZG9sbHlTdGFydC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRQYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRQYW4nICk7XG5cblx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUm90YXRlJyApO1xuXG5cdFx0cm90YXRlRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlRG9sbHknICk7XG5cblx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXG5cdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0ZG9sbHlFbmQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9XG5cblx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVQYW4nICk7XG5cblx0XHRwYW5FbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZCggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hFbmQnICk7XG5cblx0fVxuXG5cdC8vXG5cdC8vIGV2ZW50IGhhbmRsZXJzIC0gRlNNOiBsaXN0ZW4gZm9yIGV2ZW50cyBhbmQgcmVzZXQgc3RhdGVcblx0Ly9cblxuXHRmdW5jdGlvbiBvbk1vdXNlRG93biggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuT1JCSVQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLlJPVEFURTtcblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlpPT00gKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLkRPTExZO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuUEFOICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5QQU47XG5cblx0XHR9XG5cblx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmICggc3RhdGUgPT09IFNUQVRFLlJPVEFURSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuRE9MTFkgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLlBBTiApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VVcCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0aGFuZGxlTW91c2VVcCggZXZlbnQgKTtcblxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlIHx8ICggc3RhdGUgIT09IFNUQVRFLk5PTkUgJiYgc3RhdGUgIT09IFNUQVRFLlJPVEFURSApICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICk7XG5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7IC8vIG5vdCBzdXJlIHdoeSB0aGVzZSBhcmUgaGVyZS4uLlxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZUtleXMgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRoYW5kbGVLZXlEb3duKCBldmVudCApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoU3RhcnQoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRjYXNlIDE6XHQvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XHQvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ET0xMWTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoTW92ZSggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ST1RBVEUgKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfRE9MTFkgKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1BBTiApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaEVuZCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0aGFuZGxlVG91Y2hFbmQoIGV2ZW50ICk7XG5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbkNvbnRleHRNZW51KCBldmVudCApIHtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0fVxuXG5cdC8vXG5cblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSApO1xuXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHQvLyBmb3JjZSBhbiB1cGRhdGUgYXQgc3RhcnRcblxuXHR0aGlzLnVwZGF0ZSgpO1xuXG59O1xuXG5USFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUgKTtcblRIUkVFLk9yYml0Q29udHJvbHMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVEhSRUUuT3JiaXRDb250cm9scztcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFRIUkVFLk9yYml0Q29udHJvbHMucHJvdG90eXBlLCB7XG5cblx0Y2VudGVyOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmNlbnRlciBoYXMgYmVlbiByZW5hbWVkIHRvIC50YXJnZXQnICk7XG5cdFx0XHRyZXR1cm4gdGhpcy50YXJnZXQ7XG5cblx0XHR9XG5cblx0fSxcblxuXHQvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5cblx0bm9ab29tOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVpvb207XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlWm9vbSA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRub1JvdGF0ZToge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUm90YXRlO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVSb3RhdGUgPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0bm9QYW46IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVBhbjtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlUGFuID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdG5vS2V5czoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVLZXlzO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZUtleXMgPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0c3RhdGljTW92aW5nIDoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVEYW1waW5nO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZURhbXBpbmcgPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0ZHluYW1pY0RhbXBpbmdGYWN0b3IgOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiB0aGlzLmRhbXBpbmdGYWN0b3I7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5kYW1waW5nRmFjdG9yID0gdmFsdWU7XG5cblx0XHR9XG5cblx0fVxuXG59ICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy9PcmJpdENvbnRyb2xzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==