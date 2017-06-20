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
	    value: function onReady() {}
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
	
	    /**
	     *
	     * @returns {array}
	     */
	
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
	
	    /**
	     * ハッシュ取得 : location.hashの#を削除したやつ
	     * @returns {string}
	     */
	
	  }, {
	    key: "hash",
	    value: function hash() {
	
	      return location.hash.replace("#", "");
	    }
	
	    /**
	     * cookie取得
	     * @param key
	     * @returns {*}
	     */
	
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
	
	    /**
	     * cookie設定
	     * @param key : パラメータ名
	     * @param val : 値
	     * @returns {string}
	     */
	
	  }, {
	    key: "setCookie",
	    value: function setCookie(key, val) {
	
	      return document.cookie = key + "=" + val;
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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author: Teraguchi
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
	
	var _checkClient = __webpack_require__(8);
	
	var _checkClient2 = _interopRequireDefault(_checkClient);
	
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
	      this.checkClient = new _checkClient2.default();
	
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
	 * File: checkClient
	 * Date:
	 * Author: Teraguchi
	 */
	
	var parser = __webpack_require__(9);
	
	'use strict';
	
	var checkClient = function () {
	  function checkClient() {
	    _classCallCheck(this, checkClient);
	
	    this.ua = new parser();
	  }
	
	  /**
	   * IEかどうか判定
	   * @returns {boolean}
	   */
	
	
	  _createClass(checkClient, [{
	    key: 'isIE',
	    value: function isIE() {
	      var browser = this.ua.getBrowser().name;
	      return browser === 'IE' ? true : false;
	    }
	
	    /**
	     * Firefoxかどうか判定
	     * @returns {boolean}
	     */
	
	  }, {
	    key: 'isFirefox',
	    value: function isFirefox() {
	      var browser = this.ua.getBrowser().name;
	      return browser === 'Firefox' ? true : false;
	    }
	
	    /**
	     * Chromeかどうか判定
	     * @returns {boolean}
	     */
	
	  }, {
	    key: 'isChrome',
	    value: function isChrome() {
	      var browser = this.ua.getBrowser().name;
	      return browser === 'Chrome' ? true : false;
	    }
	
	    /**
	     * Safariかどうか判定
	     * @returns {boolean}
	     */
	
	  }, {
	    key: 'isSafari',
	    value: function isSafari() {
	      var browser = this.ua.getBrowser().name;
	      return browser === 'Safari' ? true : false;
	    }
	
	    /**
	     * モバイルかどうか判定
	     * @returns {*}
	     */
	
	  }, {
	    key: 'isMobile',
	    value: function isMobile() {
	      var device = this.ua.getDevice().type;
	      return device === 'mobile' ? true : null;
	    }
	
	    /**
	     * タブレットかどうか判定
	     * @returns {*}
	     */
	
	  }, {
	    key: 'isTablet',
	    value: function isTablet() {
	      var device = this.ua.getDevice().type;
	      return device === 'tablet' ? true : null;
	    }
	
	    /**
	     * OS名を取得
	     * @returns {string}
	     */
	
	  }, {
	    key: 'os',
	    value: function os() {
	      return this.ua.getOS().name;
	    }
	
	    /**
	     * デバイス名を取得
	     * @returns {vendor|{HTC, Sprint}}
	     */
	
	  }, {
	    key: 'device_name',
	    value: function device_name() {
	      var device_name = this.ua.getDevice().vendor;
	      return device_name;
	    }
	
	    /**
	     * ブラウザ名を取得
	     */
	
	  }, {
	    key: 'browser_name',
	    value: function browser_name() {
	      return this.ua.getBrowser().name;
	    }
	
	    /**
	     * ユーザーエージェント情報：全てを取得
	     */
	
	  }, {
	    key: 'all',
	    value: function all() {
	      return this.ua.getUA();
	    }
	  }]);
	
	  return checkClient;
	}();
	
	exports.default = checkClient;

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
	
	var _DisplayTextureBg = __webpack_require__(31);
	
	var _DisplayTextureBg2 = _interopRequireDefault(_DisplayTextureBg);
	
	var _DisplayTextureMovie = __webpack_require__(36);
	
	var _DisplayTextureMovie2 = _interopRequireDefault(_DisplayTextureMovie);
	
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
	
	        case 'textureBg':
	
	          new _DisplayTextureBg2.default();
	
	          break;
	
	        case 'textureMovie':
	
	          new _DisplayTextureMovie2.default();
	
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

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Display
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author: Teraguchi
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _SceneManger = __webpack_require__(20);
	
	var _SceneManger2 = _interopRequireDefault(_SceneManger);
	
	var _Scene = __webpack_require__(24);
	
	var _Scene2 = _interopRequireDefault(_Scene);
	
	var _Scene3 = __webpack_require__(25);
	
	var _Scene4 = _interopRequireDefault(_Scene3);
	
	var _Scene5 = __webpack_require__(27);
	
	var _Scene6 = _interopRequireDefault(_Scene5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	// import OverScene from "../visual/overScene";
	
	// import WebGLinit from './WebGLinit.js';
	
	// import Canvas from "../visual/Canvas";
	
	'use strict';
	
	var DisplayTop = function () {
	  function DisplayTop() {
	    _classCallCheck(this, DisplayTop);
	
	    this.setup();
	    this.setEvents();
	  }
	
	  _createClass(DisplayTop, [{
	    key: "setup",
	    value: function setup() {
	
	      // アニメーションループスタート
	      // gb.in.up.loop();
	
	    }
	  }, {
	    key: "onLoad",
	    value: function onLoad() {
	
	      gb.in.sceneManger = new _SceneManger2.default();
	
	      gb.in.sceneBoxA = new _Scene2.default();
	      gb.in.sceneBoxB = new _Scene4.default();
	      gb.in.sceneBoxC = new _Scene6.default();
	      gb.in.sceneBoxD = new _Scene4.default();
	      // gb.in.sceneOver = new OverScene();
	
	      gb.in.sceneManger.addScene(gb.in.sceneBoxA);
	      gb.in.sceneManger.addScene(gb.in.sceneBoxB);
	      gb.in.sceneManger.addScene(gb.in.sceneBoxC);
	      gb.in.sceneManger.addScene(gb.in.sceneBoxD);
	      // gb.in.sceneManger.addScene(gb.in.sceneOver);
	
	      gb.in.sceneManger.draw();
	
	      // gb.in.canvas = new Canvas();
	      // gb.in.canvas.init();
	
	    }
	  }, {
	    key: "setEvents",
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }], [{
	    key: "run",
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
	
	var _overScene = __webpack_require__(23);
	
	var _overScene2 = _interopRequireDefault(_overScene);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * File: SceneManger
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 17/05/29
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: Teraguchi
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	'use strict';
	
	var SceneManger = function (_Entry) {
	  _inherits(SceneManger, _Entry);
	
	  function SceneManger() {
	    _classCallCheck(this, SceneManger);
	
	    var _this = _possibleConstructorReturn(this, (SceneManger.__proto__ || Object.getPrototypeOf(SceneManger)).call(this));
	
	    _this.NUM = 0; // 現在のシーンの番号
	    _this.scenes = []; // シーンを格納する配列
	    _this.fadeInOutTimer = -1; //
	    _this.op = 0;
	
	    _this.canvas = null;
	    _this.renderer = null; // Renderer
	    _this.renderer02 = null; // Renderer02
	
	    // this.$subWrap = $('#subWrap');
	
	    _this.overscene = []; // overscene
	
	
	    _this.overAlpha = 0;
	    _this.mainOP = 1.0;
	
	    _this.addScene = _this._addScene.bind(_this);
	
	    _this.onResize = _this._onResize.bind(_this);
	    _this.checkNum = _this._checkNum.bind(_this);
	    _this.onKeyDown = _this._onKeyDown.bind(_this);
	    _this.fadeInOut = _this._fadeInOut.bind(_this);
	    _this.draw = _this._draw.bind(_this);
	
	    _this.alphaReset = _this._alphaReset.bind(_this);
	
	    _this.keyname = null;
	
	    _this.init(); // 初期化処理後、イベント登録
	
	    window.addEventListener('resize', _this.onResize, false);
	    document.addEventListener("keydown", _this.onKeyDown, true);
	
	    return _this;
	  }
	
	  /**
	   * 初期化
	   */
	
	
	  _createClass(SceneManger, [{
	    key: 'init',
	    value: function init() {
	
	      this.overscene.push(new _overScene2.default());
	
	      // Renderer作成
	      this.renderer = new THREE.WebGLRenderer({ alpha: true });
	      this.renderer.setPixelRatio(window.devicePixelRatio);
	      this.renderer.setSize(window.innerWidth, window.innerHeight);
	      this.renderer.sortObjects = false;
	      this.renderer.shadowMap.enabled = true;
	      this.renderer.shadowMap.type = THREE.PCFShadowMap;
	      this.renderer.domElement.id = "main";
	      this.canvas = this.renderer.domElement;
	      document.body.appendChild(this.canvas);
	
	      // Renderer02作成
	      // this.renderer02 = new THREE.WebGLRenderer({antialias: true,alpha: true});
	      // this.renderer02.setPixelRatio( window.devicePixelRatio );
	      // this.renderer02.setSize( window.innerWidth, window.innerHeight );
	      // this.renderer02.sortObjects = false;
	      // this.renderer02.shadowMap.enabled = true;
	      // this.renderer02.shadowMap.type = THREE.PCFShadowMap;
	      // this.renderer02.domElement.id = "sub";
	      // this.renderer02.setClearColor(0x000000, 0.5);
	      // this.canvas02 = this.renderer02.domElement;
	      // document.body.appendChild(this.canvas02);
	    }
	
	    /**
	      * 管理したいシーンを格納する関数
	     * @param scene
	     */
	
	  }, {
	    key: '_addScene',
	    value: function _addScene(scene) {
	
	      this.scenes.push(scene);
	    }
	
	    /**
	     *　ウィンドウの幅が変わったときの処理
	     * @private
	     */
	
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	
	      // 表示しているシーンごとにカメラのリサイズを走らせる
	      this.scenes[this.NUM].camera.aspect = window.innerWidth / window.innerHeight;
	      this.scenes[this.NUM].camera.updateProjectionMatrix();
	
	      // rendererは全てのシーンで共通
	      this.renderer.setSize(window.innerWidth, window.innerHeight);
	
	      // this.overscene[0].camera.aspect = window.innerWidth / window.innerHeight;
	      // this.overscene[0].camera.updateProjectionMatrix();
	      // this.renderer02.setSize(window.innerWidth, window.innerHeight);
	    }
	
	    /**
	      * 現在のシーン番号が、不適切な値にならないようにチェック
	     * @private
	     */
	
	  }, {
	    key: '_checkNum',
	    value: function _checkNum() {
	
	      if (this.NUM < 0) {
	        window.console.log('aa');
	        this.NUM = this.scenes.length - 1;
	      }
	
	      if (this.NUM >= this.scenes.length) {
	        window.console.log('bb');
	        this.NUM = 0;
	      }
	    }
	
	    /**
	      * ←→キーでシーン番号を足し引き
	     * @private
	     */
	
	  }, {
	    key: '_onKeyDown',
	    value: function _onKeyDown() {
	      var _this2 = this;
	
	      window.onkeydown = function (e) {
	        // console.log(e);
	        _this2.keyname = e.key;
	
	        if (_this2.keyname == "ArrowRight") {
	          _this2.checkNum();
	          _this2.alphaReset();
	        }
	
	        if (_this2.keyname == "ArrowLeft") {
	          _this2.checkNum();
	          _this2.alphaReset();
	        }
	
	        if (_this2.keyname == "ArrowRight" || _this2.keyname == "ArrowLeft") {
	
	          _this2.fadeInOutTimer = 0;
	        }
	
	        if (_this2.keyname == "ArrowUp") {
	          // window.console.log('Up');
	
	          _this2.overAlpha += 0.05;
	          if (_this2.overAlpha > 1) {
	            _this2.overAlpha = 1.0;
	          }
	        }
	
	        if (_this2.keyname == "ArrowDown") {
	          // window.console.log('Down');
	
	          _this2.overAlpha -= 0.05;
	          if (_this2.overAlpha < 0) {
	            _this2.overAlpha = 0.0;
	          }
	        }
	
	        window.console.log('this.overAlpha', _this2.overAlpha);
	        // window.console.log($("#sub"));
	        $("#sub").css({ opacity: _this2.overAlpha });
	        window.console.log('現在のシーン番号は', _this2.NUM);
	      };
	    }
	
	    /**
	    * シーンチェンジ時のレイヤー
	     * @private
	     */
	
	  }, {
	    key: '_fadeInOut',
	    value: function _fadeInOut() {
	      if (this.fadeInOutTimer <= Math.PI * 2) {
	        this.fadeInOutTimer += 0.07;
	        //screen.style.opacity = Math.sin(fadeInOutTimer);
	        this.op = Math.sin(this.fadeInOutTimer);
	
	        $("#fadeInOut").css({
	          opacity: this.op
	        });
	      } else {
	
	        this.fadeInOutTimer = -1;
	        this.op = 0.0;
	      }
	
	      if (this.op > 0.95 && this.op <= 1.0) {
	
	        switch (this.keyname) {
	          case 'ArrowRight':
	
	            this.NUM++;
	            this.checkNum();
	
	            // if(this.scenes.length == this.NUM){
	            //   this.NUM=0;
	            // }
	            break;
	
	          case 'ArrowLeft':
	
	            this.NUM--;
	            this.checkNum();
	
	            // if(this.NUM <0){
	            //   this.NUM = this.scenes.length-1;
	            // }
	            break;
	        }
	      }
	    }
	  }, {
	    key: '_alphaReset',
	    value: function _alphaReset() {
	      this.overAlpha = 0.0;
	      this.mainOP = 1.0;
	
	      $("#sub").css({ opacity: this.overAlpha });
	    }
	
	    /**
	      * 最終的な描写処理と、アニメーション関数をワンフレームごとに実行
	     * @private
	     */
	
	  }, {
	    key: '_draw',
	    value: function _draw() {
	
	      // window.console.log(this.overscene[0]);
	
	      this.scenes[this.NUM].update();
	      // this.overscene[this.NUM].update();
	      // this.overscene[0].update();
	      this.renderer.render(this.scenes[this.NUM].scene, this.scenes[this.NUM].camera);
	      // this.renderer02.render(this.overscene[0].scene, this.overscene[0].camera);
	      requestAnimationFrame(this.draw.bind(this));
	
	      if (this.fadeInOutTimer >= 0) {
	        this.fadeInOut();
	      }
	    }
	  }]);
	
	  return SceneManger;
	}(_Entry3.default);
	
	exports.default = SceneManger;

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

/***/ }),
/* 23 */
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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * File: overScene
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 17/06/19
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: Teraguchi
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	'use strict';
	
	var overScene = function (_Entry) {
		_inherits(overScene, _Entry);
	
		function overScene() {
			_classCallCheck(this, overScene);
	
			var _this = _possibleConstructorReturn(this, (overScene.__proto__ || Object.getPrototypeOf(overScene)).call(this));
	
			_this.scene = null;
			_this.camera = null;
			_this.step = 0;
			_this.knot = null; // 結び目
	
			//トーラス生成で必要なパラメータ
			_this.radius = 40;
			_this.tube = 28.2;
			_this.radialSegments = 600;
			_this.tubularSegments = 12;
			_this.p = 5;
			_this.q = 4;
			_this.heightScale = 4;
			_this.asParticles = true;
			_this.rotate = true;
	
			_this.generateSprite = _this._generateSprite.bind(_this);
			_this.createParticleSystem = _this._createParticleSystem.bind(_this);
			_this.createMesh = _this._createMesh.bind(_this);
	
			_this.createScene = _this._createScene.bind(_this);
			_this.update = _this._update.bind(_this);
	
			_this.createScene();
	
			return _this;
		}
	
		// from THREE.js examples
	
	
		_createClass(overScene, [{
			key: '_generateSprite',
			value: function _generateSprite() {
	
				var canvas = document.createElement('canvas');
				canvas.width = 16;
				canvas.height = 16;
	
				var context = canvas.getContext('2d');
				var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
				gradient.addColorStop(0, 'rgba(255,255,255,1)');
				gradient.addColorStop(0.2, 'rgba(0,255,255,1)');
				gradient.addColorStop(0.4, 'rgba(0,0,64,1)');
				gradient.addColorStop(1, 'rgba(0,0,0,1)');
	
				context.fillStyle = gradient;
				context.fillRect(0, 0, canvas.width, canvas.height);
	
				var texture = new THREE.Texture(canvas);
				texture.needsUpdate = true;
				return texture;
			}
		}, {
			key: '_createParticleSystem',
			value: function _createParticleSystem(geom) {
				var material = new THREE.ParticleBasicMaterial({
					color: 0xffffff,
					size: 3,
					transparent: true,
					blending: THREE.AdditiveBlending,
					map: this.generateSprite()
				});
	
				var system = new THREE.ParticleSystem(geom, material);
				system.sortParticles = true;
				return system;
			}
		}, {
			key: '_createMesh',
			value: function _createMesh(geom) {
	
				// assign two materials
				var meshMaterial = new THREE.MeshNormalMaterial({});
				meshMaterial.side = THREE.DoubleSide;
	
				// create a multimaterial
				var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);
	
				return mesh;
			}
	
			/**
	   * シーンを作成。オブジェクトを格納
	   * @private
	   */
	
		}, {
			key: '_createScene',
			value: function _createScene() {
	
				this.scene = new THREE.Scene(); //シーン作成
	
				this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
				this.camera.position.x = -30;
				this.camera.position.y = 40;
				this.camera.position.z = 50;
				this.camera.lookAt(new THREE.Vector3(10, 0, 0));
	
				if (this.knot) this.scene.remove(this.knot);
				// create a new one
				var geom = new THREE.TorusKnotGeometry(this.radius, this.tube, Math.round(this.radialSegments), Math.round(this.tubularSegments), Math.round(this.p), Math.round(this.q), this.heightScale);
	
				if (this.asParticles) {
					this.knot = this.createParticleSystem(geom);
				} else {
					this.knot = this.createMesh(geom);
				}
	
				this.scene.add(this.knot);
			}
	
			/**
	   * update関数
	   * @private
	   */
	
		}, {
			key: '_update',
			value: function _update() {
	
				if (this.rotate) {
					this.knot.rotation.y = this.step += 0.005;
				}
			}
		}]);
	
		return overScene;
	}(_Entry3.default);
	
	exports.default = overScene;

/***/ }),
/* 24 */
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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * File: Scene01
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 17/05/31
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: Teraguchi
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	'use strict';
	
	var Scene01 = function (_Entry) {
	  _inherits(Scene01, _Entry);
	
	  function Scene01() {
	    _classCallCheck(this, Scene01);
	
	    var _this = _possibleConstructorReturn(this, (Scene01.__proto__ || Object.getPrototypeOf(Scene01)).call(this));
	
	    _this.scene = null;
	    _this.camera = null;
	    // this.Box = null;
	    _this.cube = null;
	    _this.timer = 0;
	
	    _this.group = null;
	
	    _this.render = _this._render.bind(_this);
	
	    _this.createScene = _this._createScene.bind(_this);
	    _this.update = _this._update.bind(_this);
	
	    _this.createScene();
	
	    return _this;
	  }
	
	  /**
	   * シーンを作成。オブジェクトを格納
	   * @private
	   */
	
	
	  _createClass(Scene01, [{
	    key: '_createScene',
	    value: function _createScene() {
	
	      this.scene = new THREE.Scene(); //シーン作成
	
	      this.group = new THREE.Group();
	      var step = 30;
	      var num = 10;
	      for (var x = 1; x <= num; x++) {
	        for (var y = 1; y <= num; y++) {
	          for (var z = 1; z <= num; z++) {
	            this.cube = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), new THREE.MeshLambertMaterial(0xffffff));
	            this.cube.position.set((x - num / 2) * step, (y - num / 2) * step, (z - num / 2) * step);
	            this.group.add(this.cube);
	          }
	        }
	      }
	      this.scene.add(this.group);
	
	      var pointLight = new THREE.PointLight(0xffffff);
	      pointLight.position.set(200, 200, 200);
	      this.scene.add(pointLight);
	
	      this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
	      this.camera.position.z = 200;
	    }
	  }, {
	    key: '_render',
	    value: function _render() {
	      this.group.rotation.x += 0.01;
	      this.group.rotation.y += 0.01;
	      this.group.rotation.z += 0.01;
	      this.group.traverse(function (obj) {
	        if (obj != this.group) {
	          obj.rotation.x += 0.01;
	          obj.rotation.y += 0.01;
	          obj.rotation.z += 0.01;
	        }
	      }.bind(this));
	      // stats.update();
	      // renderer.render(scene, camera);
	      // requestAnimationFrame(render);
	    }
	
	    /**
	     *
	     * @private
	     */
	
	  }, {
	    key: '_update',
	    value: function _update() {
	
	      // window.console.log('update01');
	
	      this.render();
	    }
	  }]);
	
	  return Scene01;
	}(_Entry3.default);
	
	exports.default = Scene01;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Entry2 = __webpack_require__(21);
	
	var _Entry3 = _interopRequireDefault(_Entry2);
	
	var _audio = __webpack_require__(26);
	
	var _audio2 = _interopRequireDefault(_audio);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * File: Scene02
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 17/05/31
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: Teraguchi
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	'use strict';
	
	var Scene02 = function (_Entry) {
	  _inherits(Scene02, _Entry);
	
	  function Scene02() {
	    _classCallCheck(this, Scene02);
	
	    var _this = _possibleConstructorReturn(this, (Scene02.__proto__ || Object.getPrototypeOf(Scene02)).call(this));
	
	    _this.scene = null;
	    _this.camera = null;
	    _this.Box = null;
	    _this.timer = 0;
	
	    _this.elVolume = null;
	    _this.elVolumeVal = null;
	
	    // this.audio = this._audio.bind(this);
	
	    _this.createScene = _this._createScene.bind(_this);
	    _this.update = _this._update.bind(_this);
	
	    _this.createScene();
	
	    _this.audioInit = new _audio2.default();
	    //
	    // this.aaa = this.audioInit.execute();
	    // window.console.log(this.aaa);
	
	    // this.aaa = this.audioInit.elVolumeVal();
	    // window.console.log(this.audioInit);
	
	    // this.audioInit(); //audioInit実行
	
	    return _this;
	  }
	
	  _createClass(Scene02, [{
	    key: 'audioInit',
	    value: function audioInit() {
	
	      var ctx = void 0,
	          analyser = void 0,
	          frequencies = void 0,
	          getByteFrequencyDataAverage = void 0,
	          execute = void 0;
	
	      window.AudioContext = window.AudioContext || window.webkitAudioContext;
	      ctx = new AudioContext();
	
	      analyser = ctx.createAnalyser();
	      frequencies = new Uint8Array(analyser.frequencyBinCount);
	
	      getByteFrequencyDataAverage = function getByteFrequencyDataAverage() {
	        analyser.getByteFrequencyData(frequencies);
	        return frequencies.reduce(function (previous, current) {
	          return previous + current;
	        }) / analyser.frequencyBinCount;
	      };
	
	      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
	        window.hackForMozzila = stream;
	        ctx.createMediaStreamSource(stream)
	        // AnalyserNodeに接続
	        .connect(analyser);
	      }).catch(function (err) {
	        window.console.log(err.message);
	      });
	
	      // 音量を表示する要素
	      this.elVolume = document.getElementById('volume');
	
	      // 可能な限り高いフレームレートで音量を取得し、表示を更新する
	      execute = function () {
	        this.elVolume.innerHTML = Math.floor(getByteFrequencyDataAverage());
	        this.elVolumeVal = Math.floor(getByteFrequencyDataAverage());
	
	        requestAnimationFrame(execute);
	      }.bind(this);
	
	      //
	      execute();
	    }
	
	    /**
	     * シーンを作成。オブジェクトを格納
	     * @private
	     */
	
	  }, {
	    key: '_createScene',
	    value: function _createScene() {
	
	      this.scene = new THREE.Scene(); //シーン作成
	
	      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
	      this.camera.position.z = 1000;
	
	      this.geometry = new THREE.BoxGeometry(50, 50, 50);
	      this.material = new THREE.MeshBasicMaterial(0x888888);
	
	      this.Box = new THREE.Mesh(this.geometry, this.material);
	
	      this.scene.add(this.Box);
	    }
	
	    /**
	     * update関数
	     * @private
	     */
	
	  }, {
	    key: '_update',
	    value: function _update() {
	
	      // requestAnimationFrame(this.audioInit.execute());
	
	      this.timer += 0.1;
	      this.Box.position.y = 50 * Math.sin(this.timer);
	      // this.Box.position.y = this.elVolumeVal * Math.sin(this.timer);
	    }
	  }]);
	
	  return Scene02;
	}(_Entry3.default);
	
	exports.default = Scene02;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	/**
	 * fileOverview:
	 * Project:
	 * File: audio
	 * Date:
	 * Author: Teraguchi
	 */
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var audio = function () {
	  function audio() {
	    _classCallCheck(this, audio);
	
	    this.elVolume = null;
	    this.elVolumeVal = null;
	
	    this.getByteFrequencyDataAverage = null;
	
	    this.execute = this._execute.bind(this);
	
	    this.getVal = this._getVal.bind(this);
	
	    this.audioInit();
	  }
	
	  /**
	   * 初期化
	   */
	
	
	  _createClass(audio, [{
	    key: 'audioInit',
	    value: function audioInit() {
	
	      var ctx = void 0,
	          analyser = void 0,
	          frequencies = void 0;
	
	      window.AudioContext = window.AudioContext || window.webkitAudioContext;
	      ctx = new AudioContext();
	
	      analyser = ctx.createAnalyser();
	      frequencies = new Uint8Array(analyser.frequencyBinCount);
	
	      this.getByteFrequencyDataAverage = function () {
	        analyser.getByteFrequencyData(frequencies);
	        return frequencies.reduce(function (previous, current) {
	          return previous + current;
	        }) / analyser.frequencyBinCount;
	      };
	
	      navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
	        window.hackForMozzila = stream;
	        ctx.createMediaStreamSource(stream)
	        // AnalyserNodeに接続
	        .connect(analyser);
	      }).catch(function (err) {
	        window.console.log(err.message);
	      });
	
	      this.execute();
	    }
	
	    /**
	     *
	     * @private
	     */
	
	  }, {
	    key: '_execute',
	    value: function _execute() {
	      // 音量を表示する要素
	      this.elVolume = document.getElementById('volume');
	
	      // 可能な限り高いフレームレートで音量を取得し、表示を更新する
	      this.elVolume.innerHTML = Math.floor(this.getByteFrequencyDataAverage());
	      this.elVolumeVal = Math.floor(this.getByteFrequencyDataAverage());
	
	      requestAnimationFrame(this.execute);
	
	      return this.elVolumeVal;
	    }
	  }, {
	    key: '_getVal',
	    value: function _getVal() {
	
	      return this.elVolumeVal;
	    }
	  }]);
	
	  return audio;
	}();
	
	exports.default = audio;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Entry2 = __webpack_require__(21);
	
	var _Entry3 = _interopRequireDefault(_Entry2);
	
	var _PlaneScene = __webpack_require__(28);
	
	var _PlaneScene2 = _interopRequireDefault(_PlaneScene);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * File: Scene03
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 17/06/19
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: Teraguchi
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	'use strict';
	
	var Scene03 = function (_Entry) {
	  _inherits(Scene03, _Entry);
	
	  function Scene03() {
	    _classCallCheck(this, Scene03);
	
	    var _this = _possibleConstructorReturn(this, (Scene03.__proto__ || Object.getPrototypeOf(Scene03)).call(this));
	
	    _this.canvas = document.getElementById('main');
	
	    _this.width = document.body.clientWidth;
	    _this.height = document.body.clientHeight;
	
	    _this.camera = null;
	    _this.renderer = null;
	    _this.scene = null;
	
	    _this.createScene = _this._createScene.bind(_this);
	
	    _this.onResize = _this._onResize.bind(_this);
	    _this.update = _this._update.bind(_this);
	    _this.loadTexture = _this._loadTexture.bind(_this);
	
	    _this.plane = new _PlaneScene2.default(); // plane
	
	    _this.init(); // 初期化実行
	
	    return _this;
	  }
	
	  /**
	   * 初期化
	   */
	
	
	  _createClass(Scene03, [{
	    key: 'init',
	    value: function init() {
	
	      this.createScene();
	
	      this.loadTexture();
	    }
	
	    /**
	     *　シーン作成
	     */
	
	  }, {
	    key: '_createScene',
	    value: function _createScene() {
	
	      this.scene = new THREE.Scene(); //シーン作成
	
	      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
	      this.camera.position.x = 0;
	      this.camera.position.y = 0;
	      this.camera.position.z = 100;
	
	      this.camera.lookAt(new THREE.Vector3(0, 0, 0));
	    }
	
	    /**
	     * 画像をロード
	     * @private
	     */
	
	  }, {
	    key: '_loadTexture',
	    value: function _loadTexture() {
	      var _this2 = this;
	
	      this.plane.loadTexture('../../../../assets/resource/img/shibuya01.jpg', function () {
	        _this2.scene.add(_this2.plane.mesh);
	        window.addEventListener('resize', function () {
	          _this2.onResize();
	        }, false);
	        _this2.onResize();
	        _this2.update();
	      });
	    }
	
	    /**
	     * 更新
	     * @private
	     */
	
	  }, {
	    key: '_update',
	    value: function _update() {
	
	      this.plane.uniforms.time.value += 0.05;
	
	      // window.console.log('03');
	    }
	
	    /**
	     *　画面リサイズイベント
	     */
	
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	      this.canvas.width = document.body.clientWidth;
	      this.canvas.height = document.body.clientHeight;
	      this.plane.mesh.material.uniforms.resolution.value.set(document.body.clientWidth, document.body.clientHeight);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }]);
	
	  return Scene03;
	}(_Entry3.default);
	
	exports.default = Scene03;

/***/ }),
/* 28 */
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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * File: Plane
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: Teraguchi
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	'use strict';
	
	var PlaneScene03 = function (_Entry) {
		_inherits(PlaneScene03, _Entry);
	
		function PlaneScene03() {
			_classCallCheck(this, PlaneScene03);
	
			var _this = _possibleConstructorReturn(this, (PlaneScene03.__proto__ || Object.getPrototypeOf(PlaneScene03)).call(this));
	
			_this.uniforms = {};
			_this.texture = null;
			_this.mesh = null;
	
			_this.loadTexture = _this._loadTexture.bind(_this);
			_this.createMesh = _this._createMesh.bind(_this);
			// this.render = this._render.bind(this);
			_this.resize = _this._resize.bind(_this);
	
			return _this;
		}
	
		_createClass(PlaneScene03, [{
			key: '_loadTexture',
			value: function _loadTexture(image, callback) {
				var _this2 = this;
	
				var loader = new THREE.TextureLoader();
				loader.load(image, function (texture) {
					texture.magFilter = THREE.NearestFilter;
					texture.minFilter = THREE.NearestFilter;
					_this2.texture = texture;
					_this2.mesh = _this2.createMesh();
					callback();
				});
			}
		}, {
			key: '_createMesh',
			value: function _createMesh() {
				this.uniforms = {
					time: { type: "f", value: 1.0 },
					resolution: { type: "v2", value: new THREE.Vector2() },
					mouse: { type: "v2", value: new THREE.Vector2() }
				};
				return new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), new THREE.RawShaderMaterial({
					uniforms: this.uniforms,
					vertexShader: __webpack_require__(29),
					fragmentShader: __webpack_require__(30)
				}));
			}
	
			/**
	   * レンダラー
	   * @private
	   */
			// _render(time) {
			//
			// if (this.stop) return;
			// this.uniforms.time.value += time / this.interval;
			// if (this.uniforms.time.value > 1) {
			// 	this.uniforms.time.value = 0;
			// 	this.prev_num = this.next_num;
			// 	this.uniforms.texPrev.value = this.textures[this.next_num];
			// 	while (this.next_num == this.prev_num) {
			// 		this.next_num = Math.floor(Math.random() * this.textures.length);
			// 	}
			// 	this.uniforms.texNext.value = this.textures[this.next_num];
			// }
			// }
	
			/**
	   *
	   * @private
	   */
	
		}, {
			key: '_resize',
			value: function _resize() {
				this.uniforms.resolution.value.set(document.body.clientWidth, document.body.clientHeight);
			}
		}]);
	
		return PlaneScene03;
	}(_Entry3.default);
	
	exports.default = PlaneScene03;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}"

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	module.exports = "/* 精度修飾子の宣言 */\nprecision mediump float;\n#define GLSLIFY 1\n\n/* WebGLで受け渡された変数 */\nuniform float time; // time (1second == 1.0)\nuniform vec2  mouse; // mouse (-1.0 ~ 1.0)\nuniform vec2  resolution; // 解像度 (512.0, 512.0)\n\nconst float PI = 3.14159265;\n\nvec2 squareFrame_3_0(vec2 screenSize) {\n  vec2 position = 2.0 * (gl_FragCoord.xy / screenSize.xy) - 1.0;\n  position.x *= screenSize.x / screenSize.y;\n  return position;\n}\n\nvec2 squareFrame_3_0(vec2 screenSize, vec2 coord) {\n  vec2 position = 2.0 * (coord.xy / screenSize.xy) - 1.0;\n  position.x *= screenSize.x / screenSize.y;\n  return position;\n}\n\n\n\nmat3 calcLookAtMatrix_5_1(vec3 origin, vec3 target, float roll) {\n  vec3 rr = vec3(sin(roll), cos(roll), 0.0);\n  vec3 ww = normalize(target - origin);\n  vec3 uu = normalize(cross(ww, rr));\n  vec3 vv = normalize(cross(uu, ww));\n\n  return mat3(uu, vv, ww);\n}\n\n\n\n\nvec3 getRay_1_2(mat3 camMat, vec2 screenPos, float lensLength) {\n  return normalize(camMat * vec3(screenPos, lensLength));\n}\n\nvec3 getRay_1_2(vec3 origin, vec3 target, vec2 screenPos, float lensLength) {\n  mat3 camMat = calcLookAtMatrix_5_1(origin, target, 0.0);\n  return getRay_1_2(camMat, screenPos, lensLength);\n}\n\n\n\nvec2 map(vec3 p);\n// Originally sourced from https://www.shadertoy.com/view/ldfSWs\n// Thank you Iñigo :)\n\nvec2 calcRayIntersection_4_3(vec3 rayOrigin, vec3 rayDir, float maxd, float precis, float reduction) {\n  float latest = precis * 2.0;\n  float dist   = +0.0;\n  float type   = -1.0;\n  vec2  res    = vec2(-1.0, -1.0);\n\n  for (int i = 0; i < 256; i++) {\n    if (latest < precis || dist > maxd) break;\n\n    vec2 result = map(rayOrigin + rayDir * dist);\n\n    latest = result.x;\n    type   = result.y;\n    dist  += latest * reduction;\n  }\n\n  if (dist < maxd) {\n    res = vec2(dist, type);\n  }\n\n  return res;\n}\n\nvec2 calcRayIntersection_4_3(vec3 rayOrigin, vec3 rayDir) {\n  return calcRayIntersection_4_3(rayOrigin, rayDir, 20.0, 0.001, 1.0);\n}\n\n\n\n// Originally sourced from https://www.shadertoy.com/view/ldfSWs\n// Thank you Iñigo :)\n\nvec3 calcNormal_2_4(vec3 pos, float eps) {\n  const vec3 v1 = vec3( 1.0,-1.0,-1.0);\n  const vec3 v2 = vec3(-1.0,-1.0, 1.0);\n  const vec3 v3 = vec3(-1.0, 1.0,-1.0);\n  const vec3 v4 = vec3( 1.0, 1.0, 1.0);\n\n  return normalize( v1 * map( pos + v1*eps ).x +\n                    v2 * map( pos + v2*eps ).x +\n                    v3 * map( pos + v3*eps ).x +\n                    v4 * map( pos + v4*eps ).x );\n}\n\nvec3 calcNormal_2_4(vec3 pos) {\n  return calcNormal_2_4(pos, 0.002);\n}\n\n\n\n#define NUM 1.\nfloat t() {\n    return time * 3.;\n}\n\nfloat random(in vec2 p) {\n    return fract(sin(dot(p.xy, vec2(12.34, 56.78))) * 90.0);\n}\n\nfloat sdGround(in vec3 p) {\n    return p.y;\n}\n\nfloat sdBuildings(in vec3 p) {\n    vec3 pp = mod(p, 1.) - .5;\n    float height = random(p.xz - mod(p.xz, 1.)) *3.;\n    float nearness = max(floor(p.z) - t() - 2., 0.3);\n    nearness = pow(nearness, .3);\n    pp.y = p.y * 0.4 * nearness - height * 0.1;\n    return length(max(abs(pp) - .25, .0));\n}\n\nvec2 map(vec3 p) {\n    return vec2(min(sdGround(p), sdBuildings(p)), 0.);\n}\n\n//\nvoid main (void) {\n    vec3 rayOrigin = vec3(0, 1.5, 0);\n    rayOrigin.x += (sin(t() * .7) + cos(t() * .67)) * 0.07;\n    rayOrigin.y += (sin(t() * .81) + cos(t() * .8)) * 0.2;\n    vec3 rayTarget = vec3(0, 1, 9999999.);\n    rayOrigin.z = t();\n    vec3 rayDirection = getRay_1_2(rayOrigin, rayTarget, squareFrame_3_0(resolution.xy), 2.);\n\n    vec3 lightDir = normalize(vec3(0.3, 3., 2.));\n    vec3 light = vec3(.4);\n    vec3 ambient = vec3(.4, .3, .5);\n\n    vec2 collision = calcRayIntersection_4_3(rayOrigin, rayDirection);\n    if (collision.x > 0.) {\n        vec3 pos = rayOrigin + rayDirection * collision.x;\n        vec3 normal = calcNormal_2_4(pos);\n        float diff = clamp(dot(lightDir, normal), 0.1, 1.0);\n        gl_FragColor = vec4(diff * light + ambient * 1./pos.y, 1.0);\n    }\n    else {\n        float c = gl_FragCoord.y / resolution.y;\n        gl_FragColor = vec4(c * 0.2, 0, c * 0.3, 1);\n    }\n}"

/***/ }),
/* 31 */
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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author: Teraguchi
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _TextureBg = __webpack_require__(32);
	
	var _TextureBg2 = _interopRequireDefault(_TextureBg);
	
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
	
	      gb.in.textureBg = new _TextureBg2.default();
	
	      gb.in.textureBg.init();
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Entry2 = __webpack_require__(21);
	
	var _Entry3 = _interopRequireDefault(_Entry2);
	
	var _Plane = __webpack_require__(33);
	
	var _Plane2 = _interopRequireDefault(_Plane);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * File: TextureBg
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: Teraguchi
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	'use strict';
	
	var TextureBg = function (_Entry) {
	  _inherits(TextureBg, _Entry);
	
	  function TextureBg() {
	    _classCallCheck(this, TextureBg);
	
	    var _this = _possibleConstructorReturn(this, (TextureBg.__proto__ || Object.getPrototypeOf(TextureBg)).call(this));
	
	    _this.canvas = document.getElementById('webgl-output');
	
	    _this.width = document.body.clientWidth;
	    _this.height = document.body.clientHeight;
	
	    _this.camera = null;
	    _this.renderer = null;
	    _this.scene = null;
	
	    _this.createCamera = _this._createCamera.bind(_this);
	    _this.createRenderer = _this._createRenderer.bind(_this);
	    _this.createScene = _this._createScene.bind(_this);
	
	    _this.onResize = _this._onResize.bind(_this);
	    _this.Update = _this._Update.bind(_this);
	    _this.loadTexture = _this._loadTexture.bind(_this);
	
	    _this.plane = new _Plane2.default();
	
	    return _this;
	  }
	
	  /**
	   * 初期化
	   */
	
	
	  _createClass(TextureBg, [{
	    key: 'init',
	    value: function init() {
	
	      this.createCamera();
	      this.createScene();
	      this.createRenderer();
	
	      this.Update();
	
	      this.loadTexture();
	    }
	
	    /**
	     * カメラ作成
	     */
	
	  }, {
	    key: '_createCamera',
	    value: function _createCamera() {
	
	      this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
	      this.camera.position.x = 0;
	      this.camera.position.y = 0;
	      this.camera.position.z = 100;
	
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
	        premultipliedAlpha: false,
	        canvas: this.canvas
	      });
	
	      this.renderer.setClearColor(0xffffff, 0.0);
	      this.renderer.setPixelRatio(window.devicePixelRatio || 1);
	      this.renderer.setSize(this.width, this.height);
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
	     * 画像をロード
	     * @private
	     */
	
	  }, {
	    key: '_loadTexture',
	    value: function _loadTexture() {
	      var _this2 = this;
	
	      this.plane.loadTexture('../../../../assets/resource/img/shibuya01.jpg', function () {
	        _this2.scene.add(_this2.plane.mesh);
	        window.addEventListener('resize', function () {
	          _this2.onResize();
	        }, false);
	        _this2.onResize();
	        _this2.Update();
	      });
	    }
	
	    /**
	     * 更新
	     * @private
	     */
	
	  }, {
	    key: '_Update',
	    value: function _Update() {
	      var _this3 = this;
	
	      this.renderer.render(this.scene, this.camera);
	
	      requestAnimationFrame(function () {
	        _this3.Update();
	      });
	    }
	
	    /**
	     *　画面リサイズイベント
	     */
	
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	      this.canvas.width = document.body.clientWidth;
	      this.canvas.height = document.body.clientHeight;
	      this.plane.mesh.material.uniforms.resolution.value.set(document.body.clientWidth, document.body.clientHeight);
	
	      this.camera.aspect = window.innerWidth / window.innerHeight;
	      this.camera.updateProjectionMatrix();
	      this.renderer.setSize(window.innerWidth, window.innerHeight);
	    }
	  }, {
	    key: 'setEvents',
	    value: function setEvents() {
	
	      $(window).on('load', this.onLoad.bind(this));
	    }
	  }]);
	
	  return TextureBg;
	}(_Entry3.default);
	
	exports.default = TextureBg;

/***/ }),
/* 33 */
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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * File: Plane
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: Teraguchi
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	'use strict';
	
	var Plane = function (_Entry) {
		_inherits(Plane, _Entry);
	
		function Plane() {
			_classCallCheck(this, Plane);
	
			var _this = _possibleConstructorReturn(this, (Plane.__proto__ || Object.getPrototypeOf(Plane)).call(this));
	
			_this.uniforms = {};
			_this.texture = null;
			_this.mesh = null;
	
			_this.loadTexture = _this._loadTexture.bind(_this);
			_this.createMesh = _this._createMesh.bind(_this);
			_this.render = _this._render.bind(_this);
			_this.resize = _this._resize.bind(_this);
	
			return _this;
		}
	
		_createClass(Plane, [{
			key: '_loadTexture',
			value: function _loadTexture(image, callback) {
				var _this2 = this;
	
				var loader = new THREE.TextureLoader();
				loader.load(image, function (texture) {
					texture.magFilter = THREE.NearestFilter;
					texture.minFilter = THREE.NearestFilter;
					_this2.texture = texture;
					_this2.mesh = _this2.createMesh();
					callback();
				});
			}
		}, {
			key: '_createMesh',
			value: function _createMesh() {
				this.uniforms = {
					resolution: {
						type: 'v2',
						value: new THREE.Vector2(document.body.clientWidth, document.body.clientHeight)
					},
					imageResolution: {
						type: 'v2',
						value: new THREE.Vector2(2048, 1356)
					},
					texture: {
						type: 't',
						value: this.texture
					}
				};
				return new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), new THREE.RawShaderMaterial({
					uniforms: this.uniforms,
					vertexShader: __webpack_require__(34),
					fragmentShader: __webpack_require__(35)
				}));
			}
	
			/**
	   * レンダラー
	   * @private
	   */
	
		}, {
			key: '_render',
			value: function _render(time) {
	
				if (this.stop) return;
				this.uniforms.time.value += time / this.interval;
				if (this.uniforms.time.value > 1) {
					this.uniforms.time.value = 0;
					this.prev_num = this.next_num;
					this.uniforms.texPrev.value = this.textures[this.next_num];
					while (this.next_num == this.prev_num) {
						this.next_num = Math.floor(Math.random() * this.textures.length);
					}
					this.uniforms.texNext.value = this.textures[this.next_num];
				}
			}
		}, {
			key: '_resize',
			value: function _resize() {
				this.uniforms.resolution.value.set(document.body.clientWidth, document.body.clientHeight);
			}
		}]);
	
		return Plane;
	}(_Entry3.default);
	
	exports.default = Plane;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}"

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform vec2 imageResolution;\nuniform sampler2D texture;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n    vec2 ratio = vec2(\n        min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),\n        min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)\n    );\n\n    vec2 uv = vec2(\n        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\n    );\n    gl_FragColor = texture2D(texture, uv);\n}"

/***/ }),
/* 36 */
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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author: Teraguchi
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	// import WebGLinit from './WebGLinit.js';
	
	var _Canvas = __webpack_require__(37);
	
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
	
	      gb.in.canvas = new _Canvas2.default();
	
	      gb.in.canvas.init();
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
/* 37 */
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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: Teraguchi
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	// import TitleObject from "./TitleObject";
	// import Camera from './Utils/Camera';
	
	'use strict';
	
	var Canvas = function (_Entry) {
	  _inherits(Canvas, _Entry);
	
	  function Canvas() {
	    _classCallCheck(this, Canvas);
	
	    var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this));
	
	    _this.uniforms = {
	      u_time: { type: "f", value: 1.0 },
	      u_resolution: { type: "v2", value: new THREE.Vector2() },
	      u_mouse: { type: "v2", value: new THREE.Vector2() }
	    };
	
	    // this.titleObject = new TitleObject();
	
	    _this.canvas = document.getElementById('webgl-output');
	
	    _this.width = window.innerWidth;
	    _this.height = window.innerHeight;
	    // this.output = opts.output || document.createElement('div');
	
	    _this.camera = null;
	    _this.renderer = null;
	    _this.scene = null;
	    _this.cube = null;
	
	    _this.createCamera = _this._createCamera.bind(_this);
	    _this.createRenderer = _this._createRenderer.bind(_this);
	    _this.createScene = _this._createScene.bind(_this);
	    _this.createObject = _this._createObject.bind(_this);
	    _this.orbitControls = _this._orbitControls.bind(_this);
	
	    _this.planeObject = _this._planeObject.bind(_this);
	
	    _this.render = _this._render.bind(_this);
	
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
	      // this.createObject();
	
	      this.planeObject();
	
	      this.Update();
	
	      // this.titleObject.loadTexture(() => {
	      //   this.scene.add(this.titleObject.obj);
	      // });
	
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
	      this.camera.position.x = 0;
	      this.camera.position.y = 0;
	      this.camera.position.z = 100;
	
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
	        premultipliedAlpha: false,
	        canvas: this.canvas
	      });
	
	      // this.renderer.setClearColor(0xffffff);
	      this.renderer.setClearColor(0x000000);
	      this.renderer.setPixelRatio(window.devicePixelRatio || 1);
	      this.renderer.setSize(this.width, this.height);
	      // this.output.appendChild(this.renderer.domElement);
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
	     * Object作成
	     * @private
	     */
	
	  }, {
	    key: '_createObject',
	    value: function _createObject() {
	
	      var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
	      var cubeMaterial = new THREE.MeshBasicMaterial({
	        color: 0xffffff,
	        wireframe: true
	      });
	
	      this.cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
	      this.cube.position.x = 3;
	      this.cube.position.y = 3;
	      this.cube.position.z = 3;
	
	      this.scene.add(this.cube);
	    }
	  }, {
	    key: '_planeObject',
	    value: function _planeObject() {
	      this.plane = new THREE.Mesh(
	      // new THREE.PlaneBufferGeometry(256, 64, 40, 10),
	      new THREE.PlaneBufferGeometry(5, 20, 32), new THREE.ShaderMaterial({
	        uniforms: this.uniforms,
	        vertexShader: __webpack_require__(38),
	        fragmentShader: __webpack_require__(39)
	      }));
	      this.scene.add(this.plane);
	    }
	
	    /**
	     * レンダラー
	     * @private
	     */
	
	  }, {
	    key: '_render',
	    value: function _render() {
	      var clock = new THREE.Clock();
	      var time = clock.getDelta();
	
	      // this.titleObject.titrender(time);
	    }
	
	    /**
	     * 更新
	     * @private
	     */
	
	  }, {
	    key: '_Update',
	    value: function _Update() {
	      var _this3 = this;
	
	      this.render();
	      requestAnimationFrame(function () {
	        _this3.Update();
	      });
	      // this.controls.update();
	      this.uniforms.u_time.value += 0.05;
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
/* 38 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\n//attribute vec3 position;\n\nvoid main() {\n    gl_Position = vec4( position, 1.0 );\n}\n"

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform vec2 u_resolution;\nuniform float u_time;\n\nvoid main() {\n    vec2 st = gl_FragCoord.xy/u_resolution.xy;\n    gl_FragColor=vec4(st.x,st.y,0.0,1.0);\n}"

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjAxMGZhYWM2M2RlYTVkNDM3ZTYiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvcmUvQ29uZi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9VdGlsLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hbmltYXRpb24vcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL2NhbmNlbEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYXJyYXkvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy91YS9jaGVja0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy91YS1wYXJzZXIubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvaW1nL3ByZWxvYWRJbWcuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5Ud2l0dGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuTGluZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkZhY2VCb29rLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL0Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvU2NlbmVNYW5nZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0VudHJ5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9saWJzL09yYml0Q29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvb3ZlclNjZW5lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1NjZW5lMDEuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvU2NlbmUwMi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9VdGlscy9hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9TY2VuZTAzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1BsYW5lU2NlbmUwMy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL3NjZW5lMDMudmVydCIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL3NjZW5lMDMuZnJhZyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVCZy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9UZXh0dXJlQmcuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvUGxhbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvZ2xzbC9jb3Zlci52ZXJ0Iiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2dsc2wvY292ZXIuZnJhZyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVNb3ZpZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvZ2xzbC9pbmRleC90ZXN0LnZlcnQiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvZ2xzbC9pbmRleC90ZXN0LmZyYWciXSwibmFtZXMiOlsid2luZG93IiwiZ2IiLCJ1bmRlZmluZWQiLCJpbiIsImNvbW1vbiIsIm1haW4iLCJDb21tb24iLCJzZXR1cCIsInNldEV2ZW50cyIsImNvbmYiLCJ1IiwiZiIsInV0IiwiJCIsImRvY3VtZW50Iiwib24iLCJvblJlYWR5IiwiYmluZCIsIm9uTG9hZCIsIkNvbmYiLCJSRUxFQVNFIiwiRkxHIiwiTE9HIiwiUEFSQU0iLCJTVEFUUyIsImRlZlciLCJkZWZIIiwiVyIsIkgiLCJzcFciLCJzcEgiLCJicCIsIm1vZGUiLCJrZXlzIiwic3dpdGNoTW9kZSIsInNlYzAySW1nTnVtIiwieW91dHViZUlEMDEiLCJ5b3V0dWJlSUQwMiIsIndlYkZvbnRMb2FkZWQiLCJpIiwia2V5IiwibGVuIiwicGFyYW0iLCJyZWYiLCJyZWYxIiwidmFsdWUiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlcGxhY2UiLCJzcGxpdCIsImxlbmd0aCIsImoiLCJvYmoiLCJrIiwidmFsIiwiVXRpbCIsImlzU2V0U1BTaXplIiwic3RhcnRUaW1lIiwiZWxhcHNlZFRpbWUiLCJub3ciLCJEYXRlIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibWluMSIsIm1heDEiLCJtaW4yIiwibWF4MiIsImhpdCIsInJhbmdlIiwibnVtIiwicmVzTWluIiwicmVzTWF4IiwiYmFzZU1pbiIsImJhc2VNYXgiLCJwIiwibiIsInBvcyIsIlN0cmluZyIsImluZGV4T2YiLCJzdWJzdHIiLCJudW1lcmF0b3IiLCJkZW5vbWluYXRvciIsInJhZGlhbnMiLCJQSSIsImFuZ2xlIiwicDEiLCJwMiIsInNxcnQiLCJwb3ciLCJ4IiwieSIsImFyciIsInNvcnQiLCJhIiwiYiIsImdldFRpbWUiLCJmbGciLCJjc3MiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaXNSZXNTUCIsImlzUmVzUEMiLCJ1cmwiLCJocmVmIiwicGFyYW1JdGVtcyIsImxpc3QiLCJwYXJhbUl0ZW0iLCJoYXNoIiwibCIsImxlbjEiLCJjb29raWUiLCJyIiwiZyIsInN0ciIsInRvU3RyaW5nIiwiQXJyYXkiLCJqb2luIiwiY29udGFpbiIsIm51bWJlciIsIl9wb3ciLCJyb3VuZCIsInJlcyIsIm9yZyIsImRlc3QiLCJiZWZvcmUiLCJhZnRlciIsIlJlZ0V4cCIsImdldE5vdyIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwibWlsbFNlY29uZCIsImdldE1pbGxpc2Vjb25kcyIsImdldERhdGUiLCJtb250aGRheXMiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwid2Vla0RheUpQIiwid0RKIiwiZ2V0RGF5Iiwid2Vla0RheUVOIiwid0RFIiwiZGF0ZSIsIk51bWJlciIsImlnbm9yZUFycmF5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsIiR0YXJnZXQiLCIkaW1nIiwiZWFjaCIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJhdHRyIiwidHJpZ2dlciIsInNlbGYiLCJlIiwicHJldmVudERlZmF1bHQiLCJvZmYiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsInBhdGhuYW1lIiwiZXZlbnQiLCJyZXR1cm5WYWx1ZSIsImtleUNvZGUiLCJhZGRFdmVudExpc3RlbmVyIiwib253aGVlbCIsIm9ubW91c2V3aGVlbCIsIm9udG91Y2htb3ZlIiwib25rZXlkb3duIiwicHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlV0aWxzIiwiX3NldHVwIiwiY2hlY2tDbGllbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfdGhpcyIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsImlkIiwiY2xlYXJUaW1lb3V0IiwiQXJyIiwic2xpY2UiLCJ0IiwicGFyc2VyIiwicmVxdWlyZSIsInVhIiwiYnJvd3NlciIsImdldEJyb3dzZXIiLCJuYW1lIiwiZGV2aWNlIiwiZ2V0RGV2aWNlIiwidHlwZSIsImdldE9TIiwiZGV2aWNlX25hbWUiLCJ2ZW5kb3IiLCJnZXRVQSIsInMiLCJvIiwiYyIsImQiLCJ2IiwibSIsIkUiLCJTIiwiZXh0ZW5kIiwiY29uY2F0IiwiaGFzIiwidG9Mb3dlckNhc2UiLCJsb3dlcml6ZSIsIm1ham9yIiwidHJpbSIsInJneCIsImFyZ3VtZW50cyIsImhhc093blByb3BlcnR5IiwiZXhlYyIsInRlc3QiLCJUIiwib2xkc2FmYXJpIiwidmVyc2lvbiIsImFtYXpvbiIsIm1vZGVsIiwic3ByaW50IiwiSFRDIiwiU3ByaW50Iiwib3MiLCJ3aW5kb3dzIiwiTUUiLCJYUCIsIlZpc3RhIiwiUlQiLCJOIiwiY3B1IiwiZW5naW5lIiwiQyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImFwcGx5IiwiZ2V0Q1BVIiwiZ2V0RW5naW5lIiwiZ2V0UmVzdWx0Iiwic2V0VUEiLCJWRVJTSU9OIiwiQlJPV1NFUiIsIk5BTUUiLCJNQUpPUiIsIkNQVSIsIkFSQ0hJVEVDVFVSRSIsIkRFVklDRSIsIk1PREVMIiwiVkVORE9SIiwiVFlQRSIsIkNPTlNPTEUiLCJNT0JJTEUiLCJTTUFSVFRWIiwiVEFCTEVUIiwiV0VBUkFCTEUiLCJFTUJFRERFRCIsIkVOR0lORSIsIk9TIiwiZXhwb3J0cyIsIm1vZHVsZSIsIlVBUGFyc2VyIiwialF1ZXJ5IiwiWmVwdG8iLCJMIiwiZ2V0Iiwic2V0IiwiaW1nUGF0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW1nIiwiSW1hZ2UiLCJjYWxsZWUiLCJzcmMiLCIkYnRuIiwidGV4dCIsInNoYXJlVVJMIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib3BlbiIsImRlc2NyaXB0aW9uIiwiRnVuYyIsImJsYW5rIiwiZGVidWdnZXIiLCJleHBhbmRqUXVlcnkiLCJtZXRob2RzIiwiY29uc29sZSIsInByZXBlbmQiLCJGUFMiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsInRpbWVyIiwiZm4iLCJhZGp1c3QiLCJhZGp1c3RXIiwiYWRqdXN0SCIsIkNTUyIsInN1cHBvcnRzIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibG9nIiwiaXNJRSIsImlzUEMiLCJpc0FuZHJvaWRWZXJzaW9uIiwiYWxlcnQiLCJNYWluIiwicGFnZSIsImRhdGEiLCJEaXNwbGF5VG9wIiwic2NlbmVNYW5nZXIiLCJzY2VuZUJveEEiLCJzY2VuZUJveEIiLCJzY2VuZUJveEMiLCJzY2VuZUJveEQiLCJhZGRTY2VuZSIsImRyYXciLCJTY2VuZU1hbmdlciIsIk5VTSIsInNjZW5lcyIsImZhZGVJbk91dFRpbWVyIiwib3AiLCJjYW52YXMiLCJyZW5kZXJlciIsInJlbmRlcmVyMDIiLCJvdmVyc2NlbmUiLCJvdmVyQWxwaGEiLCJtYWluT1AiLCJfYWRkU2NlbmUiLCJvblJlc2l6ZSIsIl9vblJlc2l6ZSIsImNoZWNrTnVtIiwiX2NoZWNrTnVtIiwib25LZXlEb3duIiwiX29uS2V5RG93biIsImZhZGVJbk91dCIsIl9mYWRlSW5PdXQiLCJfZHJhdyIsImFscGhhUmVzZXQiLCJfYWxwaGFSZXNldCIsImtleW5hbWUiLCJpbml0IiwicHVzaCIsIlRIUkVFIiwiV2ViR0xSZW5kZXJlciIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJzZXRTaXplIiwic29ydE9iamVjdHMiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwiUENGU2hhZG93TWFwIiwiZG9tRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNjZW5lIiwiY2FtZXJhIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsIm9wYWNpdHkiLCJzaW4iLCJ1cGRhdGUiLCJyZW5kZXIiLCJFbnRyeSIsIk9yYml0Q29udHJvbHMiLCJvYmplY3QiLCJ0YXJnZXQiLCJWZWN0b3IzIiwibWluRGlzdGFuY2UiLCJtYXhEaXN0YW5jZSIsIkluZmluaXR5IiwibWluWm9vbSIsIm1heFpvb20iLCJtaW5Qb2xhckFuZ2xlIiwibWF4UG9sYXJBbmdsZSIsIm1pbkF6aW11dGhBbmdsZSIsIm1heEF6aW11dGhBbmdsZSIsImVuYWJsZURhbXBpbmciLCJkYW1waW5nRmFjdG9yIiwiZW5hYmxlWm9vbSIsInpvb21TcGVlZCIsImVuYWJsZVJvdGF0ZSIsInJvdGF0ZVNwZWVkIiwiZW5hYmxlUGFuIiwia2V5UGFuU3BlZWQiLCJhdXRvUm90YXRlIiwiYXV0b1JvdGF0ZVNwZWVkIiwiZW5hYmxlS2V5cyIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiQk9UVE9NIiwibW91c2VCdXR0b25zIiwiT1JCSVQiLCJNT1VTRSIsIlpPT00iLCJNSURETEUiLCJQQU4iLCJ0YXJnZXQwIiwiY2xvbmUiLCJwb3NpdGlvbjAiLCJwb3NpdGlvbiIsInpvb20wIiwiem9vbSIsImdldFBvbGFyQW5nbGUiLCJzcGhlcmljYWwiLCJwaGkiLCJnZXRBemltdXRoYWxBbmdsZSIsInRoZXRhIiwicmVzZXQiLCJzY29wZSIsImNvcHkiLCJkaXNwYXRjaEV2ZW50IiwiY2hhbmdlRXZlbnQiLCJzdGF0ZSIsIlNUQVRFIiwiTk9ORSIsIm9mZnNldCIsInF1YXQiLCJRdWF0ZXJuaW9uIiwic2V0RnJvbVVuaXRWZWN0b3JzIiwidXAiLCJxdWF0SW52ZXJzZSIsImludmVyc2UiLCJsYXN0UG9zaXRpb24iLCJsYXN0UXVhdGVybmlvbiIsInN1YiIsImFwcGx5UXVhdGVybmlvbiIsInNldEZyb21WZWN0b3IzIiwicm90YXRlTGVmdCIsImdldEF1dG9Sb3RhdGlvbkFuZ2xlIiwic3BoZXJpY2FsRGVsdGEiLCJtYWtlU2FmZSIsInJhZGl1cyIsInNjYWxlIiwicGFuT2Zmc2V0Iiwic2V0RnJvbVNwaGVyaWNhbCIsImxvb2tBdCIsInpvb21DaGFuZ2VkIiwiZGlzdGFuY2VUb1NxdWFyZWQiLCJFUFMiLCJkb3QiLCJxdWF0ZXJuaW9uIiwiZGlzcG9zZSIsIm9uQ29udGV4dE1lbnUiLCJvbk1vdXNlRG93biIsIm9uTW91c2VXaGVlbCIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJvblRvdWNoTW92ZSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwic3RhcnRFdmVudCIsImVuZEV2ZW50IiwiUk9UQVRFIiwiRE9MTFkiLCJUT1VDSF9ST1RBVEUiLCJUT1VDSF9ET0xMWSIsIlRPVUNIX1BBTiIsIlNwaGVyaWNhbCIsInJvdGF0ZVN0YXJ0IiwiVmVjdG9yMiIsInJvdGF0ZUVuZCIsInJvdGF0ZURlbHRhIiwicGFuU3RhcnQiLCJwYW5FbmQiLCJwYW5EZWx0YSIsImRvbGx5U3RhcnQiLCJkb2xseUVuZCIsImRvbGx5RGVsdGEiLCJnZXRab29tU2NhbGUiLCJyb3RhdGVVcCIsInBhbkxlZnQiLCJkaXN0YW5jZSIsIm9iamVjdE1hdHJpeCIsInNldEZyb21NYXRyaXhDb2x1bW4iLCJtdWx0aXBseVNjYWxhciIsInBhblVwIiwicGFuIiwiZGVsdGFYIiwiZGVsdGFZIiwiZWxlbWVudCIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwidGFyZ2V0RGlzdGFuY2UiLCJ0YW4iLCJmb3YiLCJjbGllbnRIZWlnaHQiLCJtYXRyaXgiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJyaWdodCIsImxlZnQiLCJjbGllbnRXaWR0aCIsInRvcCIsImJvdHRvbSIsIndhcm4iLCJkb2xseUluIiwiZG9sbHlTY2FsZSIsImRvbGx5T3V0IiwiaGFuZGxlTW91c2VEb3duUm90YXRlIiwiY2xpZW50WCIsImNsaWVudFkiLCJoYW5kbGVNb3VzZURvd25Eb2xseSIsImhhbmRsZU1vdXNlRG93blBhbiIsImhhbmRsZU1vdXNlTW92ZVJvdGF0ZSIsInN1YlZlY3RvcnMiLCJoYW5kbGVNb3VzZU1vdmVEb2xseSIsImhhbmRsZU1vdXNlTW92ZVBhbiIsImhhbmRsZU1vdXNlVXAiLCJoYW5kbGVNb3VzZVdoZWVsIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZVRvdWNoU3RhcnRSb3RhdGUiLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsImhhbmRsZVRvdWNoU3RhcnREb2xseSIsImR4IiwiZHkiLCJoYW5kbGVUb3VjaFN0YXJ0UGFuIiwiaGFuZGxlVG91Y2hNb3ZlUm90YXRlIiwiaGFuZGxlVG91Y2hNb3ZlRG9sbHkiLCJoYW5kbGVUb3VjaE1vdmVQYW4iLCJoYW5kbGVUb3VjaEVuZCIsImJ1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsImNyZWF0ZSIsIkV2ZW50RGlzcGF0Y2hlciIsImNvbnN0cnVjdG9yIiwiZGVmaW5lUHJvcGVydGllcyIsImNlbnRlciIsIm5vWm9vbSIsIm5vUm90YXRlIiwibm9QYW4iLCJub0tleXMiLCJzdGF0aWNNb3ZpbmciLCJkeW5hbWljRGFtcGluZ0ZhY3RvciIsIm92ZXJTY2VuZSIsInN0ZXAiLCJrbm90IiwidHViZSIsInJhZGlhbFNlZ21lbnRzIiwidHVidWxhclNlZ21lbnRzIiwicSIsImhlaWdodFNjYWxlIiwiYXNQYXJ0aWNsZXMiLCJyb3RhdGUiLCJnZW5lcmF0ZVNwcml0ZSIsIl9nZW5lcmF0ZVNwcml0ZSIsImNyZWF0ZVBhcnRpY2xlU3lzdGVtIiwiX2NyZWF0ZVBhcnRpY2xlU3lzdGVtIiwiY3JlYXRlTWVzaCIsIl9jcmVhdGVNZXNoIiwiY3JlYXRlU2NlbmUiLCJfY3JlYXRlU2NlbmUiLCJfdXBkYXRlIiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ3JhZGllbnQiLCJjcmVhdGVSYWRpYWxHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidGV4dHVyZSIsIlRleHR1cmUiLCJuZWVkc1VwZGF0ZSIsImdlb20iLCJtYXRlcmlhbCIsIlBhcnRpY2xlQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwic2l6ZSIsInRyYW5zcGFyZW50IiwiYmxlbmRpbmciLCJBZGRpdGl2ZUJsZW5kaW5nIiwibWFwIiwic3lzdGVtIiwiUGFydGljbGVTeXN0ZW0iLCJzb3J0UGFydGljbGVzIiwibWVzaE1hdGVyaWFsIiwiTWVzaE5vcm1hbE1hdGVyaWFsIiwic2lkZSIsIkRvdWJsZVNpZGUiLCJtZXNoIiwiU2NlbmVVdGlscyIsImNyZWF0ZU11bHRpTWF0ZXJpYWxPYmplY3QiLCJTY2VuZSIsInoiLCJyZW1vdmUiLCJUb3J1c0tub3RHZW9tZXRyeSIsInJvdGF0aW9uIiwiU2NlbmUwMSIsImN1YmUiLCJncm91cCIsIl9yZW5kZXIiLCJHcm91cCIsIk1lc2giLCJCb3hHZW9tZXRyeSIsIk1lc2hMYW1iZXJ0TWF0ZXJpYWwiLCJwb2ludExpZ2h0IiwiUG9pbnRMaWdodCIsInRyYXZlcnNlIiwiU2NlbmUwMiIsIkJveCIsImVsVm9sdW1lIiwiZWxWb2x1bWVWYWwiLCJhdWRpb0luaXQiLCJjdHgiLCJhbmFseXNlciIsImZyZXF1ZW5jaWVzIiwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlIiwiZXhlY3V0ZSIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImNyZWF0ZUFuYWx5c2VyIiwiVWludDhBcnJheSIsImZyZXF1ZW5jeUJpbkNvdW50IiwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEiLCJyZWR1Y2UiLCJwcmV2aW91cyIsImN1cnJlbnQiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInRoZW4iLCJzdHJlYW0iLCJoYWNrRm9yTW96emlsYSIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiY29ubmVjdCIsImNhdGNoIiwiZXJyIiwibWVzc2FnZSIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiZ2VvbWV0cnkiLCJNZXNoQmFzaWNNYXRlcmlhbCIsIl9leGVjdXRlIiwiZ2V0VmFsIiwiX2dldFZhbCIsIlNjZW5lMDMiLCJsb2FkVGV4dHVyZSIsIl9sb2FkVGV4dHVyZSIsInBsYW5lIiwidW5pZm9ybXMiLCJ0aW1lIiwicmVzb2x1dGlvbiIsIlBsYW5lU2NlbmUwMyIsInJlc2l6ZSIsIl9yZXNpemUiLCJpbWFnZSIsImxvYWRlciIsIlRleHR1cmVMb2FkZXIiLCJsb2FkIiwibWFnRmlsdGVyIiwiTmVhcmVzdEZpbHRlciIsIm1pbkZpbHRlciIsIm1vdXNlIiwiUGxhbmVCdWZmZXJHZW9tZXRyeSIsIlJhd1NoYWRlck1hdGVyaWFsIiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJ0ZXh0dXJlQmciLCJUZXh0dXJlQmciLCJjcmVhdGVDYW1lcmEiLCJfY3JlYXRlQ2FtZXJhIiwiY3JlYXRlUmVuZGVyZXIiLCJfY3JlYXRlUmVuZGVyZXIiLCJVcGRhdGUiLCJfVXBkYXRlIiwiYW50aWFsaWFzIiwic3RlbmNpbCIsImRlcHRoIiwicHJlbXVsdGlwbGllZEFscGhhIiwic2V0Q2xlYXJDb2xvciIsIlBsYW5lIiwiaW1hZ2VSZXNvbHV0aW9uIiwic3RvcCIsImludGVydmFsIiwicHJldl9udW0iLCJuZXh0X251bSIsInRleFByZXYiLCJ0ZXh0dXJlcyIsInRleE5leHQiLCJDYW52YXMiLCJ1X3RpbWUiLCJ1X3Jlc29sdXRpb24iLCJ1X21vdXNlIiwiY3JlYXRlT2JqZWN0IiwiX2NyZWF0ZU9iamVjdCIsIm9yYml0Q29udHJvbHMiLCJfb3JiaXRDb250cm9scyIsInBsYW5lT2JqZWN0IiwiX3BsYW5lT2JqZWN0IiwiY3ViZUdlb21ldHJ5IiwiY3ViZU1hdGVyaWFsIiwid2lyZWZyYW1lIiwiU2hhZGVyTWF0ZXJpYWwiLCJjbG9jayIsIkNsb2NrIiwiZ2V0RGVsdGEiLCJjb250cm9scyIsImRlbHRhIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDOUJBOzs7O0FBQ0E7Ozs7OztBQVRBOzs7Ozs7OztBQVdBLEVBQUMsWUFBSTs7QUFFSDtBQUNBLE9BQUlBLE9BQU9DLEVBQVAsS0FBWUMsU0FBaEIsRUFBMkJGLE9BQU9DLEVBQVAsR0FBWSxFQUFaO0FBQzNCRCxVQUFPQyxFQUFQLENBQVVFLEVBQVYsR0FBZSxFQUFmLENBSkcsQ0FJZ0I7O0FBRW5CRixNQUFHRSxFQUFILENBQU1DLE1BQU4sR0FBZSxzQkFBZjtBQUNBSCxNQUFHRSxFQUFILENBQU1FLElBQU4sR0FBYSxvQkFBYjtBQUVELEVBVEQsSTs7Ozs7Ozs7Ozs7O3NqQkNYQTs7Ozs7Ozs7QUFRQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7S0FFcUJDLE07QUFFbkIscUJBQWM7QUFBQTs7QUFFWixVQUFLQyxLQUFMO0FBQ0EsVUFB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QUFDQSxZQUFLOFEsTUFBTCxDQUFZRSxzQkFBWjtBQUNBLFlBQUtwQyxRQUFMLENBQWN5QixPQUFkLENBQXNCM1csT0FBT3FHLFVBQTdCLEVBQXlDckcsT0FBT3NHLFdBQWhEO0FBQ0Q7O0FBRUY7Ozs7OztzQ0FHZ0I7QUFDZixZQUFLb21CLFFBQUwsR0FBZ0IsSUFBSXBXLE1BQU1zQixhQUFWLENBQXdCLEtBQUtSLE1BQTdCLENBQWhCO0FBQ0EsWUFBS3NWLFFBQUwsQ0FBY3pULFVBQWQsR0FBMkIsSUFBM0I7QUFDQSxXQUFJc1QsUUFBUSxJQUFJalcsTUFBTWtXLEtBQVYsRUFBWjs7QUFFQSxXQUFJRyxRQUFRSixNQUFNRSxRQUFOLEVBQVo7QUFDQSxZQUFLQyxRQUFMLENBQWNqVixNQUFkLENBQXFCa1YsS0FBckI7QUFDQzs7O2lDQUVVOztBQUVUOXJCLFNBQUViLE1BQUYsRUFBVWUsRUFBVixDQUFhLE1BQWIsRUFBcUIsS0FBS0csTUFBTCxDQUFZRCxJQUFaLENBQWlCLElBQWpCLENBQXJCO0FBRUQ7Ozs7OzttQkFyTWtCd3FCLE07Ozs7OztBQ2RyQixnRUFBK0QsaUJBQWlCLDBDQUEwQyxHQUFHLEc7Ozs7OztBQ0E3SCxnRUFBK0QsdUJBQXVCLGlCQUFpQixnREFBZ0QsMkNBQTJDLEdBQUcsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjAxMGZhYWM2M2RlYTVkNDM3ZTYiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBUb3BcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IENvbW1vbiBmcm9tICcuL3BhZ2UvQ29tbW9uJztcbmltcG9ydCBNYWluIGZyb20gJy4vcGFnZS9NYWluJztcblxuKCgpPT57XG5cbiAgLy8gZ2xvYmFs44Kq44OW44K444Kn44Kv44OIXG4gIGlmICh3aW5kb3cuZ2I9PT11bmRlZmluZWQpIHdpbmRvdy5nYiA9IHt9O1xuICB3aW5kb3cuZ2IuaW4gPSB7fTsgLy9pbnN0YW5jZVxuXG4gIGdiLmluLmNvbW1vbiA9IG5ldyBDb21tb24oKTtcbiAgZ2IuaW4ubWFpbiA9IG5ldyBNYWluKCk7XG5cbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBDb21tb25cbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IENvbmYgZnJvbSAnLi4vQ29yZS9Db25mJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL215bGlicy9VdGlsJztcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy9VdGlscyc7XG5pbXBvcnQgRnVuYyBmcm9tICcuLi9teWxpYnMvRnVuYyc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuXHRzZXR1cCgpIHtcblxuXHRcdC8qKlxuICAgICAqIEB0eXBlIHtDb25mfSA6IOWIneacn+WApOOBruioreWumuODu+ODh+ODvOOCv+OBrumFjee9rlxuXHRcdCAqIEB0eXBlIHtVdGlsfSA6IFV0aWzplqLmlbDjga7liJ3mnJ/ljJZcblx0XHQgKiBAdHlwZSB7RnVuY30gOiDjgqTjg5njg7Pjg4jjg57jg43jg7zjgrjjg6Pjg7zjga7oqK3nva5cblx0XHQgKi9cbiAgICBnYi5pbi5jb25mID0gbmV3IENvbmYoKTtcbiAgICBnYi5pbi51ID0gbmV3IFV0aWwoKTtcbiAgICBnYi5pbi5mID0gbmV3IEZ1bmMoKTtcblxuICAgIGdiLmluLnV0ID0gbmV3IFV0aWxzKCk7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cblxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3BhZ2UvQ29tbW9uLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29uZlxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG4vLyBpbXBvcnQgU291bmREYXRhIGZyb20gJy4vRGF0YS9Tb3VuZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmYge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOacrOeVquODleODqeOCsFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICBcbiAgICB0aGlzLlJFTEVBU0UgPSB0cnVlO1xuICAgIC8vIHRoaXMuUkVMRUFTRSA9IGZhbHNlO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODleODqeOCsOmWoumAo1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuRkxHID0ge1xuICAgICAgTE9HOnRydWUsICAvLyDjg63jgrDlh7rliptcbiAgICAgIFBBUkFNOnRydWUsIC8vIOODkeODqeODoeODvOOCv+ODgeOCp+ODg+OCr1xuICAgICAgU1RBVFM6dHJ1ZSAgLy8gU3RhdHPooajnpLpcbiAgICB9O1xuICAgIGlmICghdGhpcy5SRUxFQVNFKSB7XG4gICAgICB0aGlzLkZMRyA9IHtcbiAgICAgICAgTE9HOmZhbHNlLFxuICAgICAgICBQQVJBTTpmYWxzZSxcbiAgICAgICAgU1RBVFM6ZmFsc2UgXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDln7rmnKwgd2lkdGggaGVpZ2h0XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5kZWZXID0gMTMwMDtcbiAgICB0aGlzLmRlZkggPSA4NTA7XG5cbiAgICB0aGlzLlcgPSAxMjAwO1xuICAgIHRoaXMuSCA9IDc1MDtcblxuICAgIHRoaXMuc3BXID0gMzc1O1xuICAgIHRoaXMuc3BIID0gNjY3O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODluODrOOCpOOCr+ODneOCpOODs+ODiFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuYnAgPSA3Njg7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgbW9kZVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgdGhpcy5rZXlzID0gW1xuICAgICAge1xuICAgICAgICAgICdrZXknOiAnbW92aWUnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnbW9ybmluZycsJ2FmdGVybm9vbicsJ25pZ2h0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgICdrZXknOiAnZGF0YScsXG4gICAgICAgICAgJ3ZhbHVlJzogWydkYXRhMDEnLCdkYXRhMDInLCdkYXRhMDMnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdwcm9kdWN0JyxcbiAgICAgICAgICAndmFsdWUnOiBbJzAxJ10sXG4gICAgICB9LFxuICAgIF1cbiAgICB0aGlzLnN3aXRjaE1vZGUoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBzb3VuZCBkYXRhXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gdGhpcy5zb3VuZERhdGEgPSBuZXcgU291bmREYXRhKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgc2VjMDIgYmcgSW1nIE51bVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuc2VjMDJJbWdOdW0gPSAzOTY7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgeW91dHViZSBJRFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMueW91dHViZUlEMDEgPSAneFcyb05wTnJLZDAnO1xuICAgIHRoaXMueW91dHViZUlEMDIgPSAndDJXZVJSZEFGZUknO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHdlYiBmb250IGxvYWRlZFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMud2ViRm9udExvYWRlZCA9IGZhbHNlO1xuXG4gIH1cblxuXG4gIHN3aXRjaE1vZGUoKXtcblxuICAgIHZhciBpLCBrZXksIGxlbiwgcGFyYW0sIHJlZiwgcmVmMSwgdmFsdWU7XG5cbiAgICByZWYgPSBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKS5zcGxpdCgnJicpO1xuXG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBwYXJhbSA9IHJlZltpXTtcbiAgICAgIHJlZjEgPSBwYXJhbS5zcGxpdCgnPScpLCBrZXkgPSByZWYxWzBdLCB2YWx1ZSA9IHJlZjFbMV07XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5rZXlzLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgdmFyIG9iaiA9IHRoaXMua2V5c1tqXTtcblxuICAgICAgICAvLyDjg5Hjg6njg6Hjg7zjgr/jgYzjgq3jg7zjgajkuIDnt5LjgaDjgaPjgZ/jgolcbiAgICAgICAgaWYgKG9iai5rZXkgPT09IGtleSkge1xuXG4gICAgICAgICAgLy8g5ZCE5YCk44Go5q+U6LyDXG4gICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBvYmoudmFsdWUubGVuZ3RoOyBrKyspIHtcblxuICAgICAgICAgICAgdmFyIHZhbCA9IG9iai52YWx1ZVtrXTtcblxuICAgICAgICAgICAgLy8g44Kt44O844KSdGhpcy5rZXlz44Gua2V544Gr44CBdmFsdWXjgpLmr5TovIPjgZfjgablkIzlgKTjgaDjgaPjgZ/jgoLjga7jgatcbiAgICAgICAgICAgIGlmICh2YWwgPT09IHZhbHVlKSB0aGlzW29iai5rZXldID0gdmFsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfTtcblxuXG4gICAgICAgIH07XG5cbiAgICAgICAgXG4gICAgICB9O1xuXG4gICAgfVxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvQ29yZS9Db25mLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6IOS+v+WIqemWouaVsOOCr+ODqeOCuVxuICogUHJvamVjdDpcbiAqIEZpbGU6IFV0aWxcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmlzU2V0U1BTaXplID0gZmFsc2U7XG5cbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy5lbGFwc2VkVGltZSA9IG51bGw7XG4gICAgdGhpcy5ub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICogTWF0aFxuICAgKi9cblxuXG4gIC8qKlxuICAgKiDjg6njg7Pjg4Djg6DjgarlgKTjgpLov5TjgZlcbiAgICogQHBhcmFtIG1pbiA6IOacgOWwj+WApChpbnQpXG4gICAqIEBwYXJhbSBtYXggOiDmnIDlpKflgKQoaW50KVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSA6IG1pbuOBi+OCiW1heOOBvuOBp+OBruODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gICAqL1xuICByYW5kb20obWluLCBtYXgpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKChtYXggKyAxKSAtIG1pbikgKyBtaW4pKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODqeODs+ODgOODoOOBquaVtOaVsOOCkjLjgaTjga7nr4Tlm7LjgYvjgonlj5blvpdcbiAgICogQHBhcmFtIG1pbjEgOiDmnIDlsI/lgKQxKGludClcbiAgICogQHBhcmFtIG1heDEgOiDmnIDlpKflgKQxKGludClcbiAgICogQHBhcmFtIG1pbjIgOiDmnIDlsI/lgKQyKGludClcbiAgICogQHBhcmFtIG1heDIgOiDmnIDlpKflgKQyKGludClcbiAgICogQHJldHVybnMge251bWJlcn0gOiBtaW7jgYvjgoltYXjjgb7jgafjga7jg6njg7Pjg4Djg6DjgarmlbTmlbAoaW50KVxuICAgKi9cbiAgcmFuZG9tMihtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4gICAgXG4gICAgaWYgKHRoaXMuaGl0KDIpKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5kb20obWluMSwgbWF4MSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmRvbShtaW4yLCBtYXgyKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiAxL0ByYW5nZeOBrueiuueOh+OBp3RydWXjgpLlj5blvpdcbiAgICogQHBhcmFtIHJhbmdlIDog5q+N5pWwKGludClcbiAgICogQHJldHVybnMge2Jvb2xlYW59IDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAgKi9cbiAgaGl0KHJhbmdlKSB7XG5cbiAgICByZXR1cm4gdGhpcy5yYW5kb20oMCwgcmFuZ2UgLSAxKSA9PT0gMDtcblxuICB9XG4gIFxuICAvLyAw44GL44KJ56+E5Zuy5YaF44Gn44Op44Oz44OA44Og44Gq5pW05pWw44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEB2YWwgOiDnr4Tlm7IoaW50KVxuICAvLyByZXR1cm4gOiDjg6njg7Pjg4Djg6DjgarmlbTmlbAoaW50KVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByYW5nZSh2YWwpIHtcblxuICAgIHJldHVybiB0aGlzLnJhbmRvbSgtdmFsLCB2YWwpO1xuXG4gIH1cbiAgXG4gIC8vIOWApOOCkuODnuODg+ODlOODs+OCsFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAbnVtIDog44Oe44OD44OU44Oz44Kw44GZ44KL5YCkKE51bWJlcilcbiAgLy8gQHJlc01pbiA6IOe1kOaenOOBqOOBquOCi+WApOOBruacgOWwj+WApChOdW1iZXIpXG4gIC8vIEByZXNNYXggOiDntZDmnpzjgajjgarjgovlgKTjga7mnIDlpKflgKQoTnVtYmVyKVxuICAvLyBAYmFzZU1pbiA6IOWFg+OBqOOBquOCi+WApOOBruacgOWwj+WApChOdW1iZXIpXG4gIC8vIEBiYXNlTWF4IDog5YWD44Go44Gq44KL5YCk44Gu5pyA5aSn5YCkKE51bWJlcilcbiAgLy8gcmV0dXJuIDog44Oe44OD44OU44Oz44Kw44GV44KM44Gf5YCkKE51bWJlcilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbWFwKG51bSwgcmVzTWluLCByZXNNYXgsIGJhc2VNaW4sIGJhc2VNYXgpIHtcblxuICAgIHZhciBwO1xuICAgIGlmIChudW0gPCBiYXNlTWluKSB7XG4gICAgICByZXR1cm4gcmVzTWluO1xuICAgIH1cbiAgICBpZiAobnVtID4gYmFzZU1heCkge1xuICAgICAgcmV0dXJuIHJlc01heDtcbiAgICB9XG4gICAgcCA9IChyZXNNYXggLSByZXNNaW4pIC8gKGJhc2VNYXggLSBiYXNlTWluKTtcblxuICAgIHJldHVybiAoKG51bSAtIGJhc2VNaW4pICogcCkgKyByZXNNaW47XG5cbiAgfSAgICBcbiAgXG4gIC8vIOaVsOWApOOBq+Wwj+aVsOeCueesrEBu5L2N44G+44Gn44KS44Gk44GR44Gf5paH5a2X5YiX44KS6L+U44GZXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBudW0gOiDlgKQoTnVtYmVyKVxuICAvLyBAbiA6IOWwj+aVsOeCueOBruS9jShpbnQpXG4gIC8vIHJldHVybiA6IOWkieaPm+OBleOCjOOBn+WApChTdHJpbmcpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRlY2ltYWwobnVtLCBuKSB7XG4gICAgdmFyIGksIHBvcztcbiAgICBudW0gPSBTdHJpbmcobnVtKTtcbiAgICBwb3MgPSBudW0uaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIHJldHVybiBudW0uc3BsaXQoXCIuXCIpWzBdO1xuICAgIH1cbiAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgbnVtICs9IFwiLlwiO1xuICAgICAgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IG4pIHtcbiAgICAgICAgbnVtICs9IFwiMFwiO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtO1xuICAgIH1cbiAgICBudW0gPSBudW0uc3Vic3RyKDAsIHBvcykgKyBudW0uc3Vic3RyKHBvcywgbiArIDEpO1xuICAgIHJldHVybiBudW07XG4gIH1cblxuICBjbGFtcChudW1lcmF0b3IsZGVub21pbmF0b3IsdmFsKSB7XG5cbiAgICByZXR1cm4gdmFsICogKG51bWVyYXRvciAvIGRlbm9taW5hdG9yKTtcblxuICB9XG5cblx0LyoqXG4gICAqIOODqeOCuOOCouODs+OCkuinkuW6puOBq+WkieaPm1xuXHQgKiBAcGFyYW0gcmFkaWFuc1xuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cbiAgZGVncmVlKHJhZGlhbnMpIHtcblxuICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcblxuICB9XG5cbiAgLy8gdG8gcmFkaWFuc1xuICByYWRpYW4oYW5nbGUpIHsgXG5cbiAgICByZXR1cm4gYW5nbGUgKiBNYXRoLlBJIC8gMTgwOyAvLzHluqbkvZXjg6njgrjjgqLjg7PjgYtcblxuICB9XG5cbiAgZGlzdChwMSwgcDIpIHtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDIueCAtIHAxLngsIDIpICsgTWF0aC5wb3cocDIueSAtIHAxLnksIDIpKTtcblxuICB9XG5cbiAgYXNjZW5kKGFycikge1xuXG4gICAgYXJyLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgIGlmKCBhID4gYiApIHJldHVybiAtMTtcbiAgICAgIGlmKCBhIDwgYiApIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gICAgLy8gdmFyIGEgPSBbNSwzLDksMSwxMF1cbiAgICAvLyDntZDmnpw6MTAsOSw1LDMsMVxuXG4gIH1cblxuICBkZXNjZW5kKGFycikge1xuXG4gICAgYXJyLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgIGlmKCBhIDwgYiApIHJldHVybiAtMTtcbiAgICAgIGlmKCBhID4gYiApIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICAvLyB2YXIgYSA9IFs1LDMsOSwxLDEwXVxuICAgIC8vIOe1kOaenDoxLDMsNSw5LDEwXG5cbiAgfVxuXG4gIC8vIG1hcCh2YWx1ZSwgbWluMDEsIG1heDAxLCBtaW4wMiwgbWF4MDIpIHtcblxuICAvLyAgIHZhciBkaXMwMSA9IG1heDAxIC0gbWluMDE7XG4gIC8vICAgdmFyIGRpczAyID0gbWF4MDIgLSBtaW4wMlxuXG4gIC8vICAgdmFyIHJhdGUgPSBkaXMwMiAvIGRpczAxO1xuXG4gIC8vICAgdmFsdWUgPSB2YWx1ZSAqIHJhdGU7XG5cbiAgLy8gICByZXR1cm4gdmFsdWU7XG4gIC8vIH1cblxuICBjb25zdHJhaW4odmFsdWUsIG1pbiwgbWF4KSB7XG5cbiAgICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heCh2YWx1ZSwgbWluKSk7XG5cbiAgICAvLyBpZiAodmFsdWUgPD0gbG93KSB2YWx1ZSA9IGxvdztcbiAgICAvLyBpZiAodmFsdWUgPj0gaGlnaCkgdmFsdWUgPSBoaWdoOyAgICAgXG4gICAgLy8gcmV0dXJuIHZhbHVlO1xuXG4gIH1cblxuICAvLyDjg6bjg4vjg7zjgq9JROOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1bmlxdWUoKSB7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgfVxuICBcbiAgLy8gKipqcXVhcnnkvb/nlKhcbiAgLy8g44Oc44K/44Oz44Oi44O844OJ5aSJ5pu0XG4gIC8vIHRydWXjgarjgonjgqvjg7zjgr3jg6vjgYzjg53jgqTjg7Pjgr/jg7zjga7lvaLjgatcbiAgLy8gZmFsc2Xjgarjgonjg4fjg5Xjgqnjg6vjg4jjga7jgqvjg7zjgr3jg6vjgatcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGZsZyA6IOmBqeeUqOOBmeOCi+OBi+OBqeOBhuOBiyhib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBidXR0b25Nb2RlKGZsZykge1xuXG4gICAgaWYgKGZsZykge1xuICAgICAgcmV0dXJuICQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkKFwiYm9keVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBwb3J0cmFpdCAvIGxhbmRzY2FwZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNEaXJlY3Rpb24gKCkge1xuXG4gICAgdmFyIFcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgSCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmIChIID4gVykge1xuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJwb3J0cmFpdFwiKTtcbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibGFuZHNjYXBlXCIpO1xuICAgIH1lbHNle1xuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJsYW5kc2NhcGVcIik7XG4gICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcInBvcnRyYWl0XCIpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICByZXNwb25zaXZlIOaoquW5heOCkuimi+OCi1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNSZXNwb25zaXZlIChicCkge1xuXG4gICAgaWYgKGJwPT11bmRlZmluZWQpIGJwPTM3NTtcblxuICAgIHZhciBXID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIEggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAoVyA+IGJwKSB7XG4gICAgICB0aGlzLmlzUmVzU1AgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNSZXNQQyA9IHRydWU7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzUmVzcG9uc2l2ZVNQJyk7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzUmVzcG9uc2l2ZVBDJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNSZXNTUCA9IHRydWU7XG4gICAgICB0aGlzLmlzUmVzUEMgPSBmYWxzZTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNSZXNwb25zaXZlU1AnKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXNSZXNwb25zaXZlUEMnKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgVVJMXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAqL1xuICBnZXRQYXJhbSgpIHtcblxuICAgIHZhciB1cmwgPSBsb2NhdGlvbi5ocmVmO1xuICAgIHZhciBwYXJhbSA9IHVybC5zcGxpdCgnPycpWzFdO1xuICAgIGlmIChwYXJhbT09dW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHZhciBwYXJhbUl0ZW1zID0gcGFyYW0uc3BsaXQoJyYnKTtcbiAgICB2YXIgbGlzdCA9IHt9O1xuICBcbiAgICBmb3IoIHZhciBpID0gMDsgaTxwYXJhbUl0ZW1zLmxlbmd0aDsgaSsrICl7XG5cbiAgICAgICAgcGFyYW1JdGVtID0gcGFyYW1JdGVtc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICBsaXN0W3BhcmFtSXRlbVswXV0gPSBwYXJhbUl0ZW1bMV07XG5cbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODj+ODg+OCt+ODpeWPluW+lyA6IGxvY2F0aW9uLmhhc2jjga4j44KS5YmK6Zmk44GX44Gf44KE44GkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBoYXNoKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBjb29raWXlj5blvpdcbiAgICogQHBhcmFtIGtleVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGdldENvb2tpZShrZXkpIHtcblxuICAgIHZhciBhLCBhcnIsIGksIGwsIGxlbjEsIHZhbDtcbiAgICBpZiAoZG9jdW1lbnQuY29va2llID09PSB2b2lkIDAgfHwgZG9jdW1lbnQuY29va2llID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgYXJyID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik7XG4gICAgZm9yIChpID0gbCA9IDAsIGxlbjEgPSBhcnIubGVuZ3RoOyBsIDwgbGVuMTsgaSA9ICsrbCkge1xuICAgICAgdmFsID0gYXJyW2ldO1xuICAgICAgYSA9IHZhbC5zcGxpdChcIj1cIik7XG4gICAgICBpZiAoYVswXSA9PT0ga2V5KSB7XG4gICAgICAgIHJldHVybiBhWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcblxuICB9ICAgICAgXG5cbiAgLyoqXG4gICAqIGNvb2tpZeioreWumlxuICAgKiBAcGFyYW0ga2V5IDog44OR44Op44Oh44O844K/5ZCNXG4gICAqIEBwYXJhbSB2YWwgOiDlgKRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHNldENvb2tpZShrZXksIHZhbCkge1xuXG4gICAgcmV0dXJuIGRvY3VtZW50LmNvb2tpZSA9IGtleSArIFwiPVwiICsgdmFsO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIENvbG9yXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIHJnYuOBi+OCiUhFWOOCq+ODqeODvOWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAciA6IDB+MjU1XG4gIC8vIEBnIDogMH4yNTVcbiAgLy8gQGIgOiAwfjI1NVxuICAvLyByZXR1cm4gOiBleCBcIiNGRkZGRkZcIlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRIZXhDb2xvcihyLGcsYikge1xuICAgICAgdmFyIHN0cjtcbiAgICAgIHN0ciA9IChyIDw8IDE2IHwgZyA8PCA4IHwgYikudG9TdHJpbmcoMTYpO1xuICAgICAgcmV0dXJuIFwiI1wiICsgbmV3IEFycmF5KDcgLSBzdHIubGVuZ3RoKS5qb2luKFwiMFwiKSArIHN0cjtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgU3RyaW5nXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGlzQ29udGFpbihzdHIsY29udGFpbikge1xuXG4gICAgLy8gc3Ry44Gu5Lit44GrLGNvbnRhaW7jgYzlrZjlnKjjgZfjgZ/jgolcbiAgICBpZiAoIHN0ci5pbmRleE9mKGNvbnRhaW4pICE9IC0xICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuICAvLyAw5Z+L44KB44GnMuahgeOBq+OBmeOCi+mWouaVsFxuICBhZGQwKHN0cixudW09LTIpe1xuICAgIFxuICAgIHJldHVybiAoIFwiMDAwMDAwMDAwMDAwXCIgKyBzdHIgKS5zdWJzdHIoIG51bSApO1xuXG4gIH1cblxuICBmbG9hdEZvcm1hdCggbnVtYmVyLCBuICkge1xuXG4gICAgdmFyIF9wb3cgPSBNYXRoLnBvdyggMTAgLCBuICkgO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKCBudW1iZXIgKiBfcG93ICkgLyBfcG93IDtcblxuICB9XG4gICAgXG4gIC8vIOWApOauteihqOiomFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcmljZShudW0pIHtcblxuICAgIHJldHVybiBTdHJpbmcobnVtKS5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyg/IVxcZCkpL2csICckMSwnKTtcblxuICB9XG5cbiAgLy8g5paH5a2X5YiX44KS5Y+N6LuiXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBzdHIgOiDmloflrZfliJcoU3RyaW5nKVxuICAvLyByZXR1cm4gOiDmloflrZfliJcoU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdHJSZXZlcnNlKHN0cikge1xuXG4gICAgdmFyIGksIGxlbiwgcmVzO1xuICAgIHJlcyA9IFwiXCI7XG4gICAgbGVuID0gc3RyLmxlbmd0aDtcbiAgICBpID0gMTtcbiAgICB3aGlsZSAoaSA8PSBsZW4pIHtcbiAgICAgIHJlcyArPSBzdHIuc3Vic3RyKC1pLCAxKTtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcblxuICB9XG4gIFxuICAvLyDmloflrZfliJfjga7lhajnva7mj5tcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHZhbCAgOiDmloflrZfliJdcbiAgLy8gQG9lZyAgOiDnva7mj5vliY3jga7mloflrZfliJdcbiAgLy8gQGRlc3QgOiDnva7mj5vlvozjga7mloflrZfliJdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVwbGFjZUFsbCh2YWwsIG9yZywgZGVzdCkge1xuXG4gICAgcmV0dXJuIHZhbC5zcGxpdChvcmcpLmpvaW4oZGVzdCk7XG5cbiAgfSAgICBcbiAgXG4gIHN0clJlcGxhY2Uoc3RyLCBiZWZvcmUsIGFmdGVyKSB7XG5cbiAgICB2YXIgciA9IG5ldyBSZWdFeHAoIGJlZm9yZSwgJ2cnKTtcblxuICAgIHJldHVybiBzdHIucmVwbGFjZSggciAsIGFmdGVyICk7XG5cbiAgfSAgICBcbiAgXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRGF0ZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBnZXROb3coKSB7XG5cbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgfVxuXG4gIHN0YXJ0KCkge1xuXG4gICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLm5vdy5nZXRUaW1lKCk7XG5cbiAgfVxuXG4gIGVsYXBzZWQoKSB7XG5cbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gdGhpcy5ub3cuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWU7XG5cbiAgfVxuXG4gIG0oKSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vciggdGhpcy5lbGFwc2VkVGltZSArIDEwMCAvIDYwICk7XG5cbiAgfVxuXG4gIHMoKSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmVsYXBzZWRUaW1lIC8gMTAwMCk7XG5cbiAgfVxuXG4gIG1zKCkge1xuXG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZFRpbWU7XG4gICAgXG4gIH1cblxuICB0aW1lKCkge1xuXG4gICAgdGhpcy5nZXROb3coKTtcblxuICAgIHRoaXMuaG91ciA9IHRoaXMubm93LmdldEhvdXJzKCk7ICAgICAgICAgIC8vIOaZglxuICAgIHRoaXMubWludXRlID0gdGhpcy5ub3cuZ2V0TWludXRlcygpOyAgICAgIC8vIOWIhlxuICAgIHRoaXMuc2Vjb25kID0gdGhpcy5ub3cuZ2V0U2Vjb25kcygpO1xuICAgIHRoaXMubWlsbFNlY29uZCA9IHRoaXMubm93LmdldE1pbGxpc2Vjb25kcygpO1xuXG4gIH1cblxuICBkYXRlKCkge1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldERhdGUoKTtcblxuICB9XG5cbiAgbW9udGhzKCkge1xuXG4gICAgdmFyIG1vbnRoZGF5cyA9IG5ldyBBcnJheSgzMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxKTtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXRNb250aCgpICsgMTtcblxuICB9XG5cbiAgeWVhcigpIHtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXRGdWxsWWVhcigpO1xuXG4gIH1cblxuICBkYXkoKSB7XG5cbiAgICAvLyDmm5zml6UgKOaXpeacrOiqnilcbiAgICB2YXIgd2Vla0RheUpQID0gW1wi5pelXCIsXCLmnIhcIixcIueBq1wiLFwi5rC0XCIsXCLmnKhcIixcIumHkVwiLFwi5ZyfXCJdIDtcbiAgICB2YXIgd0RKID0gd2Vla0RheUpQW3RoaXMubm93LmdldERheSgpXSA7XG5cbiAgICAvLyDmm5zml6UgKOiLseiqnilcbiAgICB2YXIgd2Vla0RheUVOID0gW1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdIDtcbiAgICB2YXIgd0RFID0gd2Vla0RheUVOW3RoaXMubm93LmdldERheSgpXSA7XG5cbiAgfVxuICBcbiAgLy8g5pWw5pel5b6M44GuRGF0ZeOCquODluOCuOOCp+OCr+ODiOWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhZnRlckRheShkYXRlLCBudW0pIHtcblxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIE51bWJlcihudW0pICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRGF0YSB0eXBlIGNoZWNrXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGlzT2JqZWN0KHZhbHVlLCBpZ25vcmVBcnJheSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGw7XG4gIH1cblxuICBpc051bWJlcih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG4gIH1cblxuICBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgaXNBcnJheSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH1cblxuICBpc051bGwodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbiAgfVxuXG4gIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgb3RoZXJcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldEltZ1NQU2l6ZSAoJHRhcmdldCl7XG5cbiAgICAvLyByZXNwb25zaXZlIHNw44Gu44Go44GN5Yem55CGXG4gICAgaWYgKCF0aGlzLmlzUmVzU1ApIHJldHVybjtcbiAgICAvLyDkuIDluqbjgaDjgZHlh6bnkIZcbiAgICAvLyBpZiAodGhpcy5pc1NldFNQU2l6ZSkgcmV0dXJuO1xuICAgIC8vIHRoaXMuaXNTZXRTUFNpemUgPSB0cnVlO1xuXG4gICAgdmFyICRpbWcgPSAkdGFyZ2V0LFxuICAgICAgICBsZW4gPSAkaW1nLmxlbmd0aDtcblxuICAgICRpbWcuZWFjaChmdW5jdGlvbihpKSB7XG5cbiAgICAgICAgdmFyIHcgPSBNYXRoLmZsb29yKCQodGhpcykud2lkdGgoKSAvIDIpLFxuICAgICAgICAgICAgaCA9IE1hdGguZmxvb3IoJCh0aGlzKS5oZWlnaHQoKSAvIDIpO1xuXG4gICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAnd2lkdGgnOiB3LFxuICAgICAgICAgICAgJ2hlaWdodCc6IGgsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChsZW4gPT0gaSArIDEpICQod2luZG93KS50cmlnZ2VyKCdzZXRTcFppZUVuZCcpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAg44K544Oe44Ob5pON5L2c54Sh5Yq5XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRQcmV2ZW50KCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgJCh3aW5kb3cpLm9uKCd0b3VjaG1vdmUubm9Db250cm9sJywgZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO30pO1xuXG4gIH1cblxuICByZW1vdmVQcmV2ZW50KCkge1xuXG4gICAgJCh3aW5kb3cpLm9mZigndG91Y2htb3ZlLm5vQ29udHJvbCcpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gIGhvc3QscHJvdGNvbFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJvdG9jb2woKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2w7XG5cbiAgfVxuICAgIFxuICBob3N0KCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhvc3RuYW1lO1xuICAgIC8vIHJldHVybiBsb2NhdGlvbi5ob3N0XG5cbiAgfVxuXG4gIHBvcnQoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucG9ydDtcblxuICB9XG4gICAgICAgIFxuICBwYXRoKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdChlKSB7XG5cbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG5cbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyhlKSB7XG5cbiAgICBpZiAoa2V5c1tlLmtleUNvZGVdKSB7XG4gICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICBkaXNhYmxlU2Nyb2xsKCkge1xuXG4gICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSAvLyBvbGRlciBGRlxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLnByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93Lm9ud2hlZWwgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBtb2Rlcm4gc3RhbmRhcmRcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gb2xkZXIgYnJvd3NlcnMsIElFXG4gICAgd2luZG93Lm9udG91Y2htb3ZlICA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG1vYmlsZVxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biAgPSB0aGlzLnByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cztcblxuICB9XG5cbiAgZW5hYmxlU2Nyb2xsKCkge1xuXG4gICAgaWYgKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKVxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLnByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IG51bGw7IFxuICAgIHdpbmRvdy5vbndoZWVsID0gbnVsbDsgXG4gICAgd2luZG93Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL1V0aWwuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBVdGlsc1xuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuLyoqXG4gKiBhbmltYXRpb25cbiAqL1xuaW1wb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tICcuL2FuaW1hdGlvbi9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUnO1xuaW1wb3J0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGZyb20gJy4vYW5pbWF0aW9uL2NhbmNlbEFuaW1hdGlvbkZyYW1lJztcblxuaW1wb3J0IEFycmF5IGZyb20gJy4vYXJyYXkvQXJyYXknO1xuaW1wb3J0IGNoZWNrQ2xpZW50IGZyb20gXCIuL3VhL2NoZWNrQ2xpZW50XCI7XG5cbmltcG9ydCBwcmVsb2FkSW1nIGZyb20gJy4vaW1nL3ByZWxvYWRJbWcnO1xuaW1wb3J0IHNldFVwQnRuVHdpdHRlciBmcm9tICcuL3Nucy9zZXRVcEJ0blR3aXR0ZXInO1xuaW1wb3J0IHNldFVwQnRuTGluZSBmcm9tICcuL3Nucy9zZXRVcEJ0bkxpbmUnO1xuaW1wb3J0IHNldFVwQnRuRmFjZUJvb2sgZnJvbSAnLi9zbnMvc2V0VXBCdG5GYWNlQm9vayc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5fc2V0dXAoKTtcbiAgICBcbiAgfVxuXG4gIF9zZXR1cCgpIHtcbiAgICAvLyB3aW5kb3cuY29uc29sZS5sb2coJ1V0aWxzX1NldHVwISEnKTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBhcnJheVxuICAgICAqL1xuICAgIHRoaXMuQXJyYXkgPSBuZXcgQXJyYXkoKTtcblxuXG4gICAgLyoqXG4gICAgICogdWFcbiAgICAgKi9cbiAgICB0aGlzLmNoZWNrQ2xpZW50ID0gbmV3IGNoZWNrQ2xpZW50KCk7XG5cblxuICAgIC8qKlxuICAgICAqIGltZ1xuICAgICAqL1xuICAgIC8vIHRoaXMucHJlbG9hZEltZyA9IG5ldyBwcmVsb2FkSW1nKCk7XG5cbiAgICAvKipcbiAgICAgKiBzbnNcbiAgICAgKi9cbiAgICAvLyB0aGlzLnNldFVwQnRuVHdpdHRlciA9IG5ldyBzZXRVcEJ0blR3aXR0ZXI7XG4gICAgLy8gdGhpcy5zZXRVcEJ0bkxpbmUgPSBuZXcgc2V0VXBCdG5MaW5lO1xuICAgIC8vIHRoaXMuc2V0VXBCdG5GYWNlQm9vayA9IG5ldyBzZXRVcEJ0bkZhY2VCb29rO1xuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL1V0aWxzLmpzIiwiLyoqXG4gKiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAqL1xud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9ICgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDMwKTtcbiAgICAgICAgfTtcbiAgfTtcbn0pKHRoaXMpKSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIi8qKlxuICogY2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAqL1xud2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gKChmdW5jdGlvbihfdGhpcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgfTtcbiAgfTtcbn0pKHRoaXMpKSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL2NhbmNlbEFuaW1hdGlvbkZyYW1lLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6IOmFjeWIl+OBruaTjeS9nOezu1xuICogUHJvamVjdDpcbiAqIEZpbGU6IEFycmF5XG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJheSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cblxuICB9XG5cblx0LyoqXG5cdCAqIOmFjeWIl+WGheOBruODqeODs+ODgOODoOOBquWApOOCkuOBsuOBqOOBpOWPluW+l1xuXHQgKiBAcGFyYW0gYXJyIDog6YWN5YiXXG5cdCAqIEByZXR1cm5zIHsqfSA6IOmFjeWIl+WGheOBruWApFxuXHQgKi9cbiAgYXJyUmFuZChhcnIpIHtcblxuICAgIHJldHVybiBhcnJbdGhpcy5yYW5kb20oMCwgYXJyLmxlbmd0aCAtIDEpXTtcblxuICB9XG5cblx0LyoqXG4gICAqIOmFjeWIl+OCkuODqeODs+ODgOODoOOBq+S4puOBueabv+OBiFxuXHQgKiBAcGFyYW0gYXJyIDog6YWN5YiXKEFycmF5KVxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqL1xuICBzaHVmZmxlKGFycikge1xuXG4gICAgbGV0IEFyciA9IFtdO1xuICAgIEFyciA9IGFyci5zbGljZSgpO1xuICAgIHZhciBpID0gYXJyLmxlbmd0aDtcbiAgICB3aGlsZShpKXtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmkpO1xuICAgICAgdmFyIHQgPSBBcnJbLS1pXTtcbiAgICAgIEFycltpXSA9IEFycltqXTtcbiAgICAgIEFycltqXSA9IHQ7XG4gICAgfVxuICAgIHJldHVybiBBcnI7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hcnJheS9BcnJheS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiBVYeWIpOWIpVxuICogUHJvamVjdDpcbiAqIEZpbGU6IGNoZWNrQ2xpZW50XG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vbGlicy91YS1wYXJzZXIubWluLmpzXCIpO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNoZWNrQ2xpZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMudWEgPSBuZXcgcGFyc2VyKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBJReOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzSUUoKSB7XG4gICAgbGV0IGJyb3dzZXIgPSB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICAgIHJldHVybiBicm93c2VyID09PSAnSUUnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVmb3jjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0ZpcmVmb3goKSB7XG4gICAgbGV0IGJyb3dzZXIgPSB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICAgIHJldHVybiBicm93c2VyID09PSAnRmlyZWZveCcgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hyb21l44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNDaHJvbWUoKSB7XG4gICAgbGV0IGJyb3dzZXIgPSB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICAgIHJldHVybiBicm93c2VyID09PSAnQ2hyb21lJyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYWZhcmnjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc1NhZmFyaSgpIHtcbiAgICBsZXQgYnJvd3NlciA9IHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gICAgcmV0dXJuIGJyb3dzZXIgPT09ICdTYWZhcmknID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIOODouODkOOCpOODq+OBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGlzTW9iaWxlKCkge1xuICAgIGxldCBkZXZpY2UgPSB0aGlzLnVhLmdldERldmljZSgpLnR5cGU7XG4gICAgcmV0dXJuIGRldmljZSA9PT0gJ21vYmlsZScgPyB0cnVlIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgr/jg5bjg6zjg4Pjg4jjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBpc1RhYmxldCgpIHtcbiAgICBsZXQgZGV2aWNlID0gdGhpcy51YS5nZXREZXZpY2UoKS50eXBlO1xuICAgIHJldHVybiBkZXZpY2UgPT09ICd0YWJsZXQnID8gdHJ1ZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogT1PlkI3jgpLlj5blvpdcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIG9zKCkge1xuICAgIHJldHVybiB0aGlzLnVhLmdldE9TKCkubmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg4fjg5DjgqTjgrnlkI3jgpLlj5blvpdcbiAgICogQHJldHVybnMge3ZlbmRvcnx7SFRDLCBTcHJpbnR9fVxuICAgKi9cbiAgZGV2aWNlX25hbWUoKSB7XG4gICAgbGV0IGRldmljZV9uYW1lID0gdGhpcy51YS5nZXREZXZpY2UoKS52ZW5kb3I7XG4gICAgcmV0dXJuIGRldmljZV9uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIOODluODqeOCpuOCtuWQjeOCkuWPluW+l1xuICAgKi9cbiAgYnJvd3Nlcl9uYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIOODpuODvOOCtuODvOOCqOODvOOCuOOCp+ODs+ODiOaDheWgse+8muWFqOOBpuOCkuWPluW+l1xuICAgKi9cbiAgYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnVhLmdldFVBKCk7XG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvdWEvY2hlY2tDbGllbnQuanMiLCIvKipcbiAqIFVBUGFyc2VyLmpzIHYwLjcuMTJcbiAqIExpZ2h0d2VpZ2h0IEphdmFTY3JpcHQtYmFzZWQgVXNlci1BZ2VudCBzdHJpbmcgcGFyc2VyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFpc2FsbWFuL3VhLXBhcnNlci1qc1xuICpcbiAqIENvcHlyaWdodCDCqSAyMDEyLTIwMTYgRmFpc2FsIFNhbG1hbiA8Znl6bG1hbkBnbWFpbC5jb20+XG4gKiBEdWFsIGxpY2Vuc2VkIHVuZGVyIEdQTHYyICYgTUlUXG4gKi8oZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjt2YXIgbj1cIjAuNy4xMlwiLHI9XCJcIixpPVwiP1wiLHM9XCJmdW5jdGlvblwiLG89XCJ1bmRlZmluZWRcIix1PVwib2JqZWN0XCIsYT1cInN0cmluZ1wiLGY9XCJtYWpvclwiLGw9XCJtb2RlbFwiLGM9XCJuYW1lXCIsaD1cInR5cGVcIixwPVwidmVuZG9yXCIsZD1cInZlcnNpb25cIix2PVwiYXJjaGl0ZWN0dXJlXCIsbT1cImNvbnNvbGVcIixnPVwibW9iaWxlXCIseT1cInRhYmxldFwiLGI9XCJzbWFydHR2XCIsdz1cIndlYXJhYmxlXCIsRT1cImVtYmVkZGVkXCIsUz17ZXh0ZW5kOmZ1bmN0aW9uKGUsdCl7dmFyIG49e307Zm9yKHZhciByIGluIGUpdFtyXSYmdFtyXS5sZW5ndGglMj09PTA/bltyXT10W3JdLmNvbmNhdChlW3JdKTpuW3JdPWVbcl07cmV0dXJuIG59LGhhczpmdW5jdGlvbihlLHQpe3JldHVybiB0eXBlb2YgZT09XCJzdHJpbmdcIj90LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihlLnRvTG93ZXJDYXNlKCkpIT09LTE6ITF9LGxvd2VyaXplOmZ1bmN0aW9uKGUpe3JldHVybiBlLnRvTG93ZXJDYXNlKCl9LG1ham9yOmZ1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZT09PWE/ZS5yZXBsYWNlKC9bXlxcZFxcLl0vZyxcIlwiKS5zcGxpdChcIi5cIilbMF06dH0sdHJpbTpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxcIlwiKX19LHg9e3JneDpmdW5jdGlvbigpe3ZhciBlLG49MCxyLGksYSxmLGwsYyxoPWFyZ3VtZW50czt3aGlsZShuPGgubGVuZ3RoJiYhbCl7dmFyIHA9aFtuXSxkPWhbbisxXTtpZih0eXBlb2YgZT09PW8pe2U9e307Zm9yKGEgaW4gZClkLmhhc093blByb3BlcnR5KGEpJiYoZj1kW2FdLHR5cGVvZiBmPT09dT9lW2ZbMF1dPXQ6ZVtmXT10KX1yPWk9MDt3aGlsZShyPHAubGVuZ3RoJiYhbCl7bD1wW3IrK10uZXhlYyh0aGlzLmdldFVBKCkpO2lmKCEhbClmb3IoYT0wO2E8ZC5sZW5ndGg7YSsrKWM9bFsrK2ldLGY9ZFthXSx0eXBlb2YgZj09PXUmJmYubGVuZ3RoPjA/Zi5sZW5ndGg9PTI/dHlwZW9mIGZbMV09PXM/ZVtmWzBdXT1mWzFdLmNhbGwodGhpcyxjKTplW2ZbMF1dPWZbMV06Zi5sZW5ndGg9PTM/dHlwZW9mIGZbMV09PT1zJiYoIWZbMV0uZXhlY3x8IWZbMV0udGVzdCk/ZVtmWzBdXT1jP2ZbMV0uY2FsbCh0aGlzLGMsZlsyXSk6dDplW2ZbMF1dPWM/Yy5yZXBsYWNlKGZbMV0sZlsyXSk6dDpmLmxlbmd0aD09NCYmKGVbZlswXV09Yz9mWzNdLmNhbGwodGhpcyxjLnJlcGxhY2UoZlsxXSxmWzJdKSk6dCk6ZVtmXT1jP2M6dH1uKz0yfXJldHVybiBlfSxzdHI6ZnVuY3Rpb24oZSxuKXtmb3IodmFyIHIgaW4gbilpZih0eXBlb2YgbltyXT09PXUmJm5bcl0ubGVuZ3RoPjApe2Zvcih2YXIgcz0wO3M8bltyXS5sZW5ndGg7cysrKWlmKFMuaGFzKG5bcl1bc10sZSkpcmV0dXJuIHI9PT1pP3Q6cn1lbHNlIGlmKFMuaGFzKG5bcl0sZSkpcmV0dXJuIHI9PT1pP3Q6cjtyZXR1cm4gZX19LFQ9e2Jyb3dzZXI6e29sZHNhZmFyaTp7dmVyc2lvbjp7XCIxLjBcIjpcIi84XCIsMS4yOlwiLzFcIiwxLjM6XCIvM1wiLFwiMi4wXCI6XCIvNDEyXCIsXCIyLjAuMlwiOlwiLzQxNlwiLFwiMi4wLjNcIjpcIi80MTdcIixcIjIuMC40XCI6XCIvNDE5XCIsXCI/XCI6XCIvXCJ9fX0sZGV2aWNlOnthbWF6b246e21vZGVsOntcIkZpcmUgUGhvbmVcIjpbXCJTRFwiLFwiS0ZcIl19fSxzcHJpbnQ6e21vZGVsOntcIkV2byBTaGlmdCA0R1wiOlwiNzM3M0tUXCJ9LHZlbmRvcjp7SFRDOlwiQVBBXCIsU3ByaW50OlwiU3ByaW50XCJ9fX0sb3M6e3dpbmRvd3M6e3ZlcnNpb246e01FOlwiNC45MFwiLFwiTlQgMy4xMVwiOlwiTlQzLjUxXCIsXCJOVCA0LjBcIjpcIk5UNC4wXCIsMmUzOlwiTlQgNS4wXCIsWFA6W1wiTlQgNS4xXCIsXCJOVCA1LjJcIl0sVmlzdGE6XCJOVCA2LjBcIiw3OlwiTlQgNi4xXCIsODpcIk5UIDYuMlwiLDguMTpcIk5UIDYuM1wiLDEwOltcIk5UIDYuNFwiLFwiTlQgMTAuMFwiXSxSVDpcIkFSTVwifX19fSxOPXticm93c2VyOltbLyhvcGVyYVxcc21pbmkpXFwvKFtcXHdcXC4tXSspL2ksLyhvcGVyYVxcc1ttb2JpbGV0YWJdKykuK3ZlcnNpb25cXC8oW1xcd1xcLi1dKykvaSwvKG9wZXJhKS4rdmVyc2lvblxcLyhbXFx3XFwuXSspL2ksLyhvcGVyYSlbXFwvXFxzXSsoW1xcd1xcLl0rKS9pXSxbYyxkXSxbLyhvcGlvcylbXFwvXFxzXSsoW1xcd1xcLl0rKS9pXSxbW2MsXCJPcGVyYSBNaW5pXCJdLGRdLFsvXFxzKG9wcilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJPcGVyYVwiXSxkXSxbLyhraW5kbGUpXFwvKFtcXHdcXC5dKykvaSwvKGx1bmFzY2FwZXxtYXh0aG9ufG5ldGZyb250fGphc21pbmV8YmxhemVyKVtcXC9cXHNdPyhbXFx3XFwuXSspKi9pLC8oYXZhbnRcXHN8aWVtb2JpbGV8c2xpbXxiYWlkdSkoPzpicm93c2VyKT9bXFwvXFxzXT8oW1xcd1xcLl0qKS9pLC8oPzptc3xcXCgpKGllKVxccyhbXFx3XFwuXSspL2ksLyhyZWtvbnEpXFwvKFtcXHdcXC5dKykqL2ksLyhjaHJvbWl1bXxmbG9ja3xyb2NrbWVsdHxtaWRvcml8ZXBpcGhhbnl8c2lsa3xza3lmaXJlfG92aWJyb3dzZXJ8Ym9sdHxpcm9ufHZpdmFsZGl8aXJpZGl1bXxwaGFudG9tanMpXFwvKFtcXHdcXC4tXSspL2ldLFtjLGRdLFsvKHRyaWRlbnQpLitydls6XFxzXShbXFx3XFwuXSspLitsaWtlXFxzZ2Vja28vaV0sW1tjLFwiSUVcIl0sZF0sWy8oZWRnZSlcXC8oKFxcZCspP1tcXHdcXC5dKykvaV0sW2MsZF0sWy8oeWFicm93c2VyKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIllhbmRleFwiXSxkXSxbLyhjb21vZG9fZHJhZ29uKVxcLyhbXFx3XFwuXSspL2ldLFtbYywvXy9nLFwiIFwiXSxkXSxbLyhtaWNyb21lc3NlbmdlcilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJXZUNoYXRcIl0sZF0sWy94aWFvbWlcXC9taXVpYnJvd3NlclxcLyhbXFx3XFwuXSspL2ldLFtkLFtjLFwiTUlVSSBCcm93c2VyXCJdXSxbL1xcc3d2XFwpLisoY2hyb21lKVxcLyhbXFx3XFwuXSspL2ldLFtbYywvKC4rKS8sXCIkMSBXZWJWaWV3XCJdLGRdLFsvYW5kcm9pZC4rc2Ftc3VuZ2Jyb3dzZXJcXC8oW1xcd1xcLl0rKS9pLC9hbmRyb2lkLit2ZXJzaW9uXFwvKFtcXHdcXC5dKylcXHMrKD86bW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpKi9pXSxbZCxbYyxcIkFuZHJvaWQgQnJvd3NlclwiXV0sWy8oY2hyb21lfG9tbml3ZWJ8YXJvcmF8W3RpemVub2thXXs1fVxccz9icm93c2VyKVxcL3Y/KFtcXHdcXC5dKykvaSwvKHFxYnJvd3NlcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pXSxbYyxkXSxbLyh1Y1xccz9icm93c2VyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksL3Vjd2ViLisodWNicm93c2VyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksL2p1Yy4rKHVjd2ViKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ldLFtbYyxcIlVDQnJvd3NlclwiXSxkXSxbLyhkb2xmaW4pXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiRG9scGhpblwiXSxkXSxbLygoPzphbmRyb2lkLispY3Jtb3xjcmlvcylcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJDaHJvbWVcIl0sZF0sWy87ZmJhdlxcLyhbXFx3XFwuXSspOy9pXSxbZCxbYyxcIkZhY2Vib29rXCJdXSxbL2Z4aW9zXFwvKFtcXHdcXC4tXSspL2ldLFtkLFtjLFwiRmlyZWZveFwiXV0sWy92ZXJzaW9uXFwvKFtcXHdcXC5dKykuKz9tb2JpbGVcXC9cXHcrXFxzKHNhZmFyaSkvaV0sW2QsW2MsXCJNb2JpbGUgU2FmYXJpXCJdXSxbL3ZlcnNpb25cXC8oW1xcd1xcLl0rKS4rPyhtb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkvaV0sW2QsY10sWy93ZWJraXQuKz8obW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpKFxcL1tcXHdcXC5dKykvaV0sW2MsW2QseC5zdHIsVC5icm93c2VyLm9sZHNhZmFyaS52ZXJzaW9uXV0sWy8oa29ucXVlcm9yKVxcLyhbXFx3XFwuXSspL2ksLyh3ZWJraXR8a2h0bWwpXFwvKFtcXHdcXC5dKykvaV0sW2MsZF0sWy8obmF2aWdhdG9yfG5ldHNjYXBlKVxcLyhbXFx3XFwuLV0rKS9pXSxbW2MsXCJOZXRzY2FwZVwiXSxkXSxbLyhzd2lmdGZveCkvaSwvKGljZWRyYWdvbnxpY2V3ZWFzZWx8Y2FtaW5vfGNoaW1lcmF8ZmVubmVjfG1hZW1vXFxzYnJvd3NlcnxtaW5pbW98Y29ua2Vyb3IpW1xcL1xcc10/KFtcXHdcXC5cXCtdKykvaSwvKGZpcmVmb3h8c2VhbW9ua2V5fGstbWVsZW9ufGljZWNhdHxpY2VhcGV8ZmlyZWJpcmR8cGhvZW5peClcXC8oW1xcd1xcLi1dKykvaSwvKG1vemlsbGEpXFwvKFtcXHdcXC5dKykuK3J2XFw6LitnZWNrb1xcL1xcZCsvaSwvKHBvbGFyaXN8bHlueHxkaWxsb3xpY2FifGRvcmlzfGFtYXlhfHczbXxuZXRzdXJmfHNsZWlwbmlyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksLyhsaW5rcylcXHNcXCgoW1xcd1xcLl0rKS9pLC8oZ29icm93c2VyKVxcLz8oW1xcd1xcLl0rKSovaSwvKGljZVxccz9icm93c2VyKVxcL3Y/KFtcXHdcXC5fXSspL2ksLyhtb3NhaWMpW1xcL1xcc10oW1xcd1xcLl0rKS9pXSxbYyxkXV0sY3B1OltbLyg/OihhbWR8eCg/Oig/Ojg2fDY0KVtfLV0pP3x3b3d8d2luKTY0KVs7XFwpXS9pXSxbW3YsXCJhbWQ2NFwiXV0sWy8oaWEzMig/PTspKS9pXSxbW3YsUy5sb3dlcml6ZV1dLFsvKCg/OmlbMzQ2XXx4KTg2KVs7XFwpXS9pXSxbW3YsXCJpYTMyXCJdXSxbL3dpbmRvd3NcXHMoY2V8bW9iaWxlKTtcXHNwcGM7L2ldLFtbdixcImFybVwiXV0sWy8oKD86cHBjfHBvd2VycGMpKD86NjQpPykoPzpcXHNtYWN8O3xcXCkpL2ldLFtbdiwvb3dlci8sXCJcIixTLmxvd2VyaXplXV0sWy8oc3VuNFxcdylbO1xcKV0vaV0sW1t2LFwic3BhcmNcIl1dLFsvKCg/OmF2cjMyfGlhNjQoPz07KSl8NjhrKD89XFwpKXxhcm0oPzo2NHwoPz12XFxkKzspKXwoPz1hdG1lbFxccylhdnJ8KD86aXJpeHxtaXBzfHNwYXJjKSg/OjY0KT8oPz07KXxwYS1yaXNjKS9pXSxbW3YsUy5sb3dlcml6ZV1dXSxkZXZpY2U6W1svXFwoKGlwYWR8cGxheWJvb2spO1tcXHdcXHNcXCk7LV0rKHJpbXxhcHBsZSkvaV0sW2wscCxbaCx5XV0sWy9hcHBsZWNvcmVtZWRpYVxcL1tcXHdcXC5dKyBcXCgoaXBhZCkvXSxbbCxbcCxcIkFwcGxlXCJdLFtoLHldXSxbLyhhcHBsZVxcc3swLDF9dHYpL2ldLFtbbCxcIkFwcGxlIFRWXCJdLFtwLFwiQXBwbGVcIl1dLFsvKGFyY2hvcylcXHMoZ2FtZXBhZDI/KS9pLC8oaHApLisodG91Y2hwYWQpL2ksLyhocCkuKyh0YWJsZXQpL2ksLyhraW5kbGUpXFwvKFtcXHdcXC5dKykvaSwvXFxzKG5vb2spW1xcd1xcc10rYnVpbGRcXC8oXFx3KykvaSwvKGRlbGwpXFxzKHN0cmVhW2twclxcc1xcZF0qW1xcZGtvXSkvaV0sW3AsbCxbaCx5XV0sWy8oa2ZbQS16XSspXFxzYnVpbGRcXC9bXFx3XFwuXSsuKnNpbGtcXC8vaV0sW2wsW3AsXCJBbWF6b25cIl0sW2gseV1dLFsvKHNkfGtmKVswMzQ5aGlqb3JzdHV3XStcXHNidWlsZFxcL1tcXHdcXC5dKy4qc2lsa1xcLy9pXSxbW2wseC5zdHIsVC5kZXZpY2UuYW1hem9uLm1vZGVsXSxbcCxcIkFtYXpvblwiXSxbaCxnXV0sWy9cXCgoaXBbaG9uZWR8XFxzXFx3Kl0rKTsuKyhhcHBsZSkvaV0sW2wscCxbaCxnXV0sWy9cXCgoaXBbaG9uZWR8XFxzXFx3Kl0rKTsvaV0sW2wsW3AsXCJBcHBsZVwiXSxbaCxnXV0sWy8oYmxhY2tiZXJyeSlbXFxzLV0/KFxcdyspL2ksLyhibGFja2JlcnJ5fGJlbnF8cGFsbSg/PVxcLSl8c29ueWVyaWNzc29ufGFjZXJ8YXN1c3xkZWxsfGh1YXdlaXxtZWl6dXxtb3Rvcm9sYXxwb2x5dHJvbilbXFxzXy1dPyhbXFx3LV0rKSovaSwvKGhwKVxccyhbXFx3XFxzXStcXHcpL2ksLyhhc3VzKS0/KFxcdyspL2ldLFtwLGwsW2gsZ11dLFsvXFwoYmIxMDtcXHMoXFx3KykvaV0sW2wsW3AsXCJCbGFja0JlcnJ5XCJdLFtoLGddXSxbL2FuZHJvaWQuKyh0cmFuc2ZvW3ByaW1lXFxzXXs0LDEwfVxcc1xcdyt8ZWVlcGN8c2xpZGVyXFxzXFx3K3xuZXh1cyA3fHBhZGZvbmUpL2ldLFtsLFtwLFwiQXN1c1wiXSxbaCx5XV0sWy8oc29ueSlcXHModGFibGV0XFxzW3BzXSlcXHNidWlsZFxcLy9pLC8oc29ueSk/KD86c2dwLispXFxzYnVpbGRcXC8vaV0sW1twLFwiU29ueVwiXSxbbCxcIlhwZXJpYSBUYWJsZXRcIl0sW2gseV1dLFsvKD86c29ueSk/KD86KD86KD86Y3xkKVxcZHs0fSl8KD86c29bLWxdLispKVxcc2J1aWxkXFwvL2ldLFtbcCxcIlNvbnlcIl0sW2wsXCJYcGVyaWEgUGhvbmVcIl0sW2gsZ11dLFsvXFxzKG91eWEpXFxzL2ksLyhuaW50ZW5kbylcXHMoW3dpZHMzdV0rKS9pXSxbcCxsLFtoLG1dXSxbL2FuZHJvaWQuKztcXHMoc2hpZWxkKVxcc2J1aWxkL2ldLFtsLFtwLFwiTnZpZGlhXCJdLFtoLG1dXSxbLyhwbGF5c3RhdGlvblxcc1szNHBvcnRhYmxldmldKykvaV0sW2wsW3AsXCJTb255XCJdLFtoLG1dXSxbLyhzcHJpbnRcXHMoXFx3KykpL2ldLFtbcCx4LnN0cixULmRldmljZS5zcHJpbnQudmVuZG9yXSxbbCx4LnN0cixULmRldmljZS5zcHJpbnQubW9kZWxdLFtoLGddXSxbLyhsZW5vdm8pXFxzPyhTKD86NTAwMHw2MDAwKSsoPzpbLV1bXFx3K10pKS9pXSxbcCxsLFtoLHldXSxbLyhodGMpWztfXFxzLV0rKFtcXHdcXHNdKyg/PVxcKSl8XFx3KykqL2ksLyh6dGUpLShcXHcrKSovaSwvKGFsY2F0ZWx8Z2Vla3NwaG9uZXxodWF3ZWl8bGVub3ZvfG5leGlhbnxwYW5hc29uaWN8KD89O1xccylzb255KVtfXFxzLV0/KFtcXHctXSspKi9pXSxbcCxbbCwvXy9nLFwiIFwiXSxbaCxnXV0sWy8obmV4dXNcXHM5KS9pXSxbbCxbcCxcIkhUQ1wiXSxbaCx5XV0sWy8obmV4dXNcXHM2cCkvaV0sW2wsW3AsXCJIdWF3ZWlcIl0sW2gsZ11dLFsvKG1pY3Jvc29mdCk7XFxzKGx1bWlhW1xcc1xcd10rKS9pXSxbcCxsLFtoLGddXSxbL1tcXHNcXCg7XSh4Ym94KD86XFxzb25lKT8pW1xcc1xcKTtdL2ldLFtsLFtwLFwiTWljcm9zb2Z0XCJdLFtoLG1dXSxbLyhraW5cXC5bb25ldHddezN9KS9pXSxbW2wsL1xcLi9nLFwiIFwiXSxbcCxcIk1pY3Jvc29mdFwiXSxbaCxnXV0sWy9cXHMobWlsZXN0b25lfGRyb2lkKD86WzItNHhdfFxccyg/OmJpb25pY3x4Mnxwcm98cmF6cikpPyg6P1xcczRnKT8pW1xcd1xcc10rYnVpbGRcXC8vaSwvbW90W1xccy1dPyhcXHcrKSovaSwvKFhUXFxkezMsNH0pIGJ1aWxkXFwvL2ksLyhuZXh1c1xcczYpL2ldLFtsLFtwLFwiTW90b3JvbGFcIl0sW2gsZ11dLFsvYW5kcm9pZC4rXFxzKG16NjBcXGR8eG9vbVtcXHMyXXswLDJ9KVxcc2J1aWxkXFwvL2ldLFtsLFtwLFwiTW90b3JvbGFcIl0sW2gseV1dLFsvaGJidHZcXC9cXGQrXFwuXFxkK1xcLlxcZCtcXHMrXFwoW1xcd1xcc10qO1xccyooXFx3W147XSopOyhbXjtdKikvaV0sW1twLFMudHJpbV0sW2wsUy50cmltXSxbaCxiXV0sWy9oYmJ0di4rbWFwbGU7KFxcZCspL2ldLFtbbCwvXi8sXCJTbWFydFRWXCJdLFtwLFwiU2Ftc3VuZ1wiXSxbaCxiXV0sWy9cXChkdHZbXFwpO10uKyhhcXVvcykvaV0sW2wsW3AsXCJTaGFycFwiXSxbaCxiXV0sWy9hbmRyb2lkLisoKHNjaC1pWzg5XTBcXGR8c2h3LW0zODBzfGd0LXBcXGR7NH18Z3QtblxcZCt8c2doLXQ4WzU2XTl8bmV4dXMgMTApKS9pLC8oKFNNLVRcXHcrKSkvaV0sW1twLFwiU2Ftc3VuZ1wiXSxsLFtoLHldXSxbL3NtYXJ0LXR2Lisoc2Ftc3VuZykvaV0sW3AsW2gsYl0sbF0sWy8oKHNbY2dwXWgtXFx3K3xndC1cXHcrfGdhbGF4eVxcc25leHVzfHNtLVxcd1tcXHdcXGRdKykpL2ksLyhzYW1bc3VuZ10qKVtcXHMtXSooXFx3Ky0/W1xcdy1dKikqL2ksL3NlYy0oKHNnaFxcdyspKS9pXSxbW3AsXCJTYW1zdW5nXCJdLGwsW2gsZ11dLFsvc2llLShcXHcrKSovaV0sW2wsW3AsXCJTaWVtZW5zXCJdLFtoLGddXSxbLyhtYWVtb3xub2tpYSkuKihuOTAwfGx1bWlhXFxzXFxkKykvaSwvKG5va2lhKVtcXHNfLV0/KFtcXHctXSspKi9pXSxbW3AsXCJOb2tpYVwiXSxsLFtoLGddXSxbL2FuZHJvaWRcXHMzXFwuW1xcc1xcdzstXXsxMH0oYVxcZHszfSkvaV0sW2wsW3AsXCJBY2VyXCJdLFtoLHldXSxbL2FuZHJvaWRcXHMzXFwuW1xcc1xcdzstXXsxMH0obGc/KS0oWzA2Y3Y5XXszLDR9KS9pXSxbW3AsXCJMR1wiXSxsLFtoLHldXSxbLyhsZykgbmV0Y2FzdFxcLnR2L2ldLFtwLGwsW2gsYl1dLFsvKG5leHVzXFxzWzQ1XSkvaSwvbGdbZTtcXHNcXC8tXSsoXFx3KykqL2ldLFtsLFtwLFwiTEdcIl0sW2gsZ11dLFsvYW5kcm9pZC4rKGlkZWF0YWJbYS16MC05XFwtXFxzXSspL2ldLFtsLFtwLFwiTGVub3ZvXCJdLFtoLHldXSxbL2xpbnV4Oy4rKChqb2xsYSkpOy9pXSxbcCxsLFtoLGddXSxbLygocGViYmxlKSlhcHBcXC9bXFxkXFwuXStcXHMvaV0sW3AsbCxbaCx3XV0sWy9hbmRyb2lkLis7XFxzKGdsYXNzKVxcc1xcZC9pXSxbbCxbcCxcIkdvb2dsZVwiXSxbaCx3XV0sWy9hbmRyb2lkLisoXFx3KylcXHMrYnVpbGRcXC9obVxcMS9pLC9hbmRyb2lkLisoaG1bXFxzXFwtX10qbm90ZT9bXFxzX10qKD86XFxkXFx3KT8pXFxzK2J1aWxkL2ksL2FuZHJvaWQuKyhtaVtcXHNcXC1fXSooPzpvbmV8b25lW1xcc19dcGx1c3xub3RlIGx0ZSk/W1xcc19dKig/OlxcZFxcdyk/KVxccytidWlsZC9pXSxbW2wsL18vZyxcIiBcIl0sW3AsXCJYaWFvbWlcIl0sW2gsZ11dLFsvYW5kcm9pZC4rYTAwMCgxKVxccytidWlsZC9pXSxbbCxbcCxcIk9uZVBsdXNcIl0sW2gsZ11dLFsvXFxzKHRhYmxldClbO1xcL10vaSwvXFxzKG1vYmlsZSkoPzpbO1xcL118XFxzc2FmYXJpKS9pXSxbW2gsUy5sb3dlcml6ZV0scCxsXV0sZW5naW5lOltbL3dpbmRvd3MuK1xcc2VkZ2VcXC8oW1xcd1xcLl0rKS9pXSxbZCxbYyxcIkVkZ2VIVE1MXCJdXSxbLyhwcmVzdG8pXFwvKFtcXHdcXC5dKykvaSwvKHdlYmtpdHx0cmlkZW50fG5ldGZyb250fG5ldHN1cmZ8YW1heWF8bHlueHx3M20pXFwvKFtcXHdcXC5dKykvaSwvKGtodG1sfHRhc21hbnxsaW5rcylbXFwvXFxzXVxcKD8oW1xcd1xcLl0rKS9pLC8oaWNhYilbXFwvXFxzXShbMjNdXFwuW1xcZFxcLl0rKS9pXSxbYyxkXSxbL3J2XFw6KFtcXHdcXC5dKykuKihnZWNrbykvaV0sW2QsY11dLG9zOltbL21pY3Jvc29mdFxccyh3aW5kb3dzKVxccyh2aXN0YXx4cCkvaV0sW2MsZF0sWy8od2luZG93cylcXHNudFxcczZcXC4yO1xccyhhcm0pL2ksLyh3aW5kb3dzXFxzcGhvbmUoPzpcXHNvcykqKVtcXHNcXC9dPyhbXFxkXFwuXFxzXStcXHcpKi9pLC8od2luZG93c1xcc21vYmlsZXx3aW5kb3dzKVtcXHNcXC9dPyhbbnRjZVxcZFxcLlxcc10rXFx3KS9pXSxbYyxbZCx4LnN0cixULm9zLndpbmRvd3MudmVyc2lvbl1dLFsvKHdpbig/PTN8OXxuKXx3aW5cXHM5eFxccykoW250XFxkXFwuXSspL2ldLFtbYyxcIldpbmRvd3NcIl0sW2QseC5zdHIsVC5vcy53aW5kb3dzLnZlcnNpb25dXSxbL1xcKChiYikoMTApOy9pXSxbW2MsXCJCbGFja0JlcnJ5XCJdLGRdLFsvKGJsYWNrYmVycnkpXFx3KlxcLz8oW1xcd1xcLl0rKSovaSwvKHRpemVuKVtcXC9cXHNdKFtcXHdcXC5dKykvaSwvKGFuZHJvaWR8d2Vib3N8cGFsbVxcc29zfHFueHxiYWRhfHJpbVxcc3RhYmxldFxcc29zfG1lZWdvfGNvbnRpa2kpW1xcL1xccy1dPyhbXFx3XFwuXSspKi9pLC9saW51eDsuKyhzYWlsZmlzaCk7L2ldLFtjLGRdLFsvKHN5bWJpYW5cXHM/b3N8c3ltYm9zfHM2MCg/PTspKVtcXC9cXHMtXT8oW1xcd1xcLl0rKSovaV0sW1tjLFwiU3ltYmlhblwiXSxkXSxbL1xcKChzZXJpZXM0MCk7L2ldLFtjXSxbL21vemlsbGEuK1xcKG1vYmlsZTsuK2dlY2tvLitmaXJlZm94L2ldLFtbYyxcIkZpcmVmb3ggT1NcIl0sZF0sWy8obmludGVuZG98cGxheXN0YXRpb24pXFxzKFt3aWRzMzRwb3J0YWJsZXZ1XSspL2ksLyhtaW50KVtcXC9cXHNcXChdPyhcXHcrKSovaSwvKG1hZ2VpYXx2ZWN0b3JsaW51eClbO1xcc10vaSwvKGpvbGl8W2t4bG5dP3VidW50dXxkZWJpYW58W29wZW5dKnN1c2V8Z2VudG9vfCg/PVxccylhcmNofHNsYWNrd2FyZXxmZWRvcmF8bWFuZHJpdmF8Y2VudG9zfHBjbGludXhvc3xyZWRoYXR8emVud2Fsa3xsaW5wdXMpW1xcL1xccy1dPyg/IWNocm9tKShbXFx3XFwuLV0rKSovaSwvKGh1cmR8bGludXgpXFxzPyhbXFx3XFwuXSspKi9pLC8oZ251KVxccz8oW1xcd1xcLl0rKSovaV0sW2MsZF0sWy8oY3JvcylcXHNbXFx3XStcXHMoW1xcd1xcLl0rXFx3KS9pXSxbW2MsXCJDaHJvbWl1bSBPU1wiXSxkXSxbLyhzdW5vcylcXHM/KFtcXHdcXC5dK1xcZCkqL2ldLFtbYyxcIlNvbGFyaXNcIl0sZF0sWy9cXHMoW2ZyZW50b3BjLV17MCw0fWJzZHxkcmFnb25mbHkpXFxzPyhbXFx3XFwuXSspKi9pXSxbYyxkXSxbLyhoYWlrdSlcXHMoXFx3KykvaV0sW2MsZF0sWy8oaXBbaG9uZWFkXSspKD86Lipvc1xccyhbXFx3XSspKlxcc2xpa2VcXHNtYWN8O1xcc29wZXJhKS9pXSxbW2MsXCJpT1NcIl0sW2QsL18vZyxcIi5cIl1dLFsvKG1hY1xcc29zXFxzeClcXHM/KFtcXHdcXHNcXC5dK1xcdykqL2ksLyhtYWNpbnRvc2h8bWFjKD89X3Bvd2VycGMpXFxzKS9pXSxbW2MsXCJNYWMgT1NcIl0sW2QsL18vZyxcIi5cIl1dLFsvKCg/Om9wZW4pP3NvbGFyaXMpW1xcL1xccy1dPyhbXFx3XFwuXSspKi9pLC8oYWl4KVxccygoXFxkKSg/PVxcLnxcXCl8XFxzKVtcXHdcXC5dKikqL2ksLyhwbGFuXFxzOXxtaW5peHxiZW9zfG9zXFwvMnxhbWlnYW9zfG1vcnBob3N8cmlzY1xcc29zfG9wZW52bXMpL2ksLyh1bml4KVxccz8oW1xcd1xcLl0rKSovaV0sW2MsZF1dfSxDPWZ1bmN0aW9uKHQsbil7aWYodGhpcyBpbnN0YW5jZW9mIEMpe3ZhciBpPXR8fChlJiZlLm5hdmlnYXRvciYmZS5uYXZpZ2F0b3IudXNlckFnZW50P2UubmF2aWdhdG9yLnVzZXJBZ2VudDpyKSxzPW4/Uy5leHRlbmQoTixuKTpOO3JldHVybiB0aGlzLmdldEJyb3dzZXI9ZnVuY3Rpb24oKXt2YXIgZT14LnJneC5hcHBseSh0aGlzLHMuYnJvd3Nlcik7cmV0dXJuIGUubWFqb3I9Uy5tYWpvcihlLnZlcnNpb24pLGV9LHRoaXMuZ2V0Q1BVPWZ1bmN0aW9uKCl7cmV0dXJuIHgucmd4LmFwcGx5KHRoaXMscy5jcHUpfSx0aGlzLmdldERldmljZT1mdW5jdGlvbigpe3JldHVybiB4LnJneC5hcHBseSh0aGlzLHMuZGV2aWNlKX0sdGhpcy5nZXRFbmdpbmU9ZnVuY3Rpb24oKXtyZXR1cm4geC5yZ3guYXBwbHkodGhpcyxzLmVuZ2luZSl9LHRoaXMuZ2V0T1M9ZnVuY3Rpb24oKXtyZXR1cm4geC5yZ3guYXBwbHkodGhpcyxzLm9zKX0sdGhpcy5nZXRSZXN1bHQ9ZnVuY3Rpb24oKXtyZXR1cm57dWE6dGhpcy5nZXRVQSgpLGJyb3dzZXI6dGhpcy5nZXRCcm93c2VyKCksZW5naW5lOnRoaXMuZ2V0RW5naW5lKCksb3M6dGhpcy5nZXRPUygpLGRldmljZTp0aGlzLmdldERldmljZSgpLGNwdTp0aGlzLmdldENQVSgpfX0sdGhpcy5nZXRVQT1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNldFVBPWZ1bmN0aW9uKGUpe3JldHVybiBpPWUsdGhpc30sdGhpc31yZXR1cm4obmV3IEModCxuKSkuZ2V0UmVzdWx0KCl9O0MuVkVSU0lPTj1uLEMuQlJPV1NFUj17TkFNRTpjLE1BSk9SOmYsVkVSU0lPTjpkfSxDLkNQVT17QVJDSElURUNUVVJFOnZ9LEMuREVWSUNFPXtNT0RFTDpsLFZFTkRPUjpwLFRZUEU6aCxDT05TT0xFOm0sTU9CSUxFOmcsU01BUlRUVjpiLFRBQkxFVDp5LFdFQVJBQkxFOncsRU1CRURERUQ6RX0sQy5FTkdJTkU9e05BTUU6YyxWRVJTSU9OOmR9LEMuT1M9e05BTUU6YyxWRVJTSU9OOmR9LHR5cGVvZiBleHBvcnRzIT09bz8odHlwZW9mIG1vZHVsZSE9PW8mJm1vZHVsZS5leHBvcnRzJiYoZXhwb3J0cz1tb2R1bGUuZXhwb3J0cz1DKSxleHBvcnRzLlVBUGFyc2VyPUMpOnR5cGVvZiBkZWZpbmU9PT1zJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBDfSk6ZS5VQVBhcnNlcj1DO3ZhciBrPWUualF1ZXJ5fHxlLlplcHRvO2lmKHR5cGVvZiBrIT09byl7dmFyIEw9bmV3IEM7ay51YT1MLmdldFJlc3VsdCgpLGsudWEuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIEwuZ2V0VUEoKX0say51YS5zZXQ9ZnVuY3Rpb24oZSl7TC5zZXRVQShlKTt2YXIgdD1MLmdldFJlc3VsdCgpO2Zvcih2YXIgbiBpbiB0KWsudWFbbl09dFtuXX19fSkodHlwZW9mIHdpbmRvdz09XCJvYmplY3RcIj93aW5kb3c6dGhpcyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL2xpYnMvdWEtcGFyc2VyLm1pbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3RcIik7IH07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIHByZWxvYWRJbWdcbiAqIEBwYXJhbSBpbWdQYXRoXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGltZ1BhdGgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICB2YXIgaW1nO1xuICAgIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oZSkge1xuICAgICAgaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhcmd1bWVudHMuY2FsbGVlKTtcbiAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGltZy5zcmMgPSBpbWdQYXRoO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2ltZy9wcmVsb2FkSW1nLmpzIiwiLyoqXG4gKiBzZXRVcEJ0blR3aXR0ZXJcbiAqIEBwYXJhbSAkYnRuXG4gKiBAcGFyYW0gdGV4dFxuICogQHBhcmFtIHNoYXJlVVJMXG4gKi9cbmV4cG9ydCBkZWZhdWx0ICgkYnRuLCB0ZXh0LCBzaGFyZVVSTCkgPT4ge1xuICB2YXIgdXJsO1xuICBpZiAoc2hhcmVVUkwgPT0gbnVsbCkge1xuICAgIHNoYXJlVVJMID0gJyc7XG4gIH1cbiAgdXJsID0gJ2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0Pyc7XG4gIGlmIChzaGFyZVVSTCA9PT0gJycpIHtcbiAgICB1cmwgKz0gXCJ0ZXh0PVwiICsgKGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSk7XG4gIH0gZWxzZSB7XG4gICAgdXJsICs9IFwidXJsPVwiICsgKGVuY29kZVVSSUNvbXBvbmVudChzaGFyZVVSTCkpICsgXCImdGV4dD1cIiArIChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpO1xuICB9XG4gIHJldHVybiAkYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICB3aW5kb3cub3Blbih1cmwsICd0d2l0dGVyU2hhcmUnLCAnd2lkdGg9NjcwLGhlaWdodD00MDAnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuVHdpdHRlci5qcyIsIi8qKlxuICogc2V0VXBCdG5MaW5lXG4gKiBAcGFyYW0gJGJ0blxuICogQHBhcmFtIHRleHRcbiAqIEBwYXJhbSBzaGFyZVVSTFxuICovXG5leHBvcnQgZGVmYXVsdCAoJGJ0biwgdGV4dCwgc2hhcmVVUkwgPSAnJykgPT4ge1xuICB2YXIgdXJsO1xuICBpZiAoc2hhcmVVUkwgPT0gbnVsbCkge1xuICAgIHNoYXJlVVJMID0gJyc7XG4gIH1cbiAgdXJsID0gJ2h0dHA6Ly9saW5lLm1lL21zZy90ZXh0Lz8nO1xuICBpZiAoc2hhcmVVUkwgPT09ICcnKSB7XG4gICAgdXJsICs9IFwiXCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKTtcbiAgfSBlbHNlIHtcbiAgICB1cmwgKz0gKGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSkgKyBcIlxcblwiICsgKGVuY29kZVVSSUNvbXBvbmVudChzaGFyZVVSTCkpO1xuICB9XG4gIHJldHVybiAkYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICB3aW5kb3cub3Blbih1cmwsICdsaW5lU2hhcmUnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuTGluZS5qcyIsIi8qKlxuICogc2V0VXBCdG5GYWNlYm9va1xuICogQHBhcmFtICRidG5cbiAqIEBwYXJhbSBzaGFyZVVSTFxuICogQHBhcmFtIGRlc2NyaXB0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0ICgkYnRuLCBzaGFyZVVSTCwgZGVzY3JpcHRpb24gPSAnJykgPT4ge1xuICB2YXIgdXJsO1xuICBpZiAoZGVzY3JpcHRpb24gPT0gbnVsbCkge1xuICAgIGRlc2NyaXB0aW9uID0gJyc7XG4gIH1cbiAgdXJsID0gJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD8mZGlzcGxheT1wb3B1cCZ1PSc7XG4gIHVybCArPSBcIlwiICsgKGVuY29kZVVSSUNvbXBvbmVudChzaGFyZVVSTCkpO1xuICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICB1cmwgKz0gXCImZGVzY3JpcHRpb249XCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KGRlc2NyaXB0aW9uKSk7XG4gIH1cbiAgcmV0dXJuICRidG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHdpbmRvdy5vcGVuKHVybCwgXCJmYWNlYm9va1NoYXJlXCIgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkpLCAnd2lkdGg9NjcwLGhlaWdodD00MDAnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuRmFjZUJvb2suanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBGdW5jXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5ibGFuaygpO1xuICAgIHRoaXMuZGVidWdnZXIoKTtcbiAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xuICAgIHRoaXMuZXhwYW5kalF1ZXJ5KCk7XG5cbiAgfVxuXG4gIGJsYW5rKCkge1xuXG4gICAgJCgoKT0+eyQoJy5ibGFuaycpLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKTt9KTtcblxuICB9XG5cbiAgZGVidWdnZXIoKSB7XG5cbiAgICAvLyDjg4fjg5Djg4PjgrDjg6Ljg7zjg4nliIfmm79cbiAgICB2YXIgUkVMRUFTRSA9IGdiLmluLmNvbmYuUkVMRUFTRTtcblxuICAgIC8vIOe9ruaPm+WvvuixoeOBruODoeOCveODg+ODieOCkumFjeWIl+OBqOOBl+OBpuS/neaMgeOBmeOCi1xuICAgIHZhciBtZXRob2RzID0gW1xuICAgICAgJ2xvZycsXG4gICAgICAnZGVidWcnLFxuICAgICAgJ2luZm8nLFxuICAgICAgJ3dhcm4nLFxuICAgICAgJ2Vycm9yJyxcbiAgICAgICdkaXInLFxuICAgICAgJ3RyYWNlJyxcbiAgICAgICdhc3NlcnQnLFxuICAgICAgJ2RpcnhtbCcsXG4gICAgICAnZ3JvdXAnLFxuICAgICAgJ2dyb3VwRW5kJyxcbiAgICAgICd0aW1lJyxcbiAgICAgICd0aW1lRW5kJyxcbiAgICAgICdjb3VudCcsXG4gICAgICAncHJvZmlsZScsXG4gICAgICAncHJvZmlsZUVuZCdcbiAgICBdO1xuXG4gICAgLy8gY29uc29sZeOBjOS9v+OBiOOBquOBhOWgtOWQiOOBr+epuuOBruOCquODluOCuOOCp+OCr+ODiOOCkuioreWumuOBl+OBpuOBiuOBj1xuICAgIGlmKCB0eXBlb2Ygd2luZG93LmNvbnNvbGUgPT09IFwidW5kZWZpbmVkXCIgKXtcbiAgICAgIHdpbmRvdy5jb25zb2xlID0ge307XG4gICAgfVxuXG4gICAgLy8g5ZCE44Oh44K944OD44OJ44KSd2luZG9344G455u05o6l6L+95Yqg44GX44Gm6KGM44GPXG4gICAgZm9yKCB2YXIgaSBpbiBtZXRob2RzICl7XG4gICAgICAoZnVuY3Rpb24oIG0gKXtcblxuICAgICAgIC8vIGNvbnNvbGXjgavjgYLjgovvvJ/jg4fjg5Djg4PjgrDjg6Ljg7zjg4njga/mnInlirnvvJ9jb25zb2xl44Gu44KC44Gu44Gv6Zai5pWw77yfXG4gICAgICAgaWYoIGNvbnNvbGVbbV0gJiYgIVJFTEVBU0UgJiYgdHlwZW9mIGNvbnNvbGVbbV0gPT09IFwiZnVuY3Rpb25cIiApe1xuICAgICAgICB3aW5kb3dbbV0gPSBjb25zb2xlW21dLmJpbmQoY29uc29sZSk7XG4gICAgICAgfSBlbHNlIHvjgIAvLyBkZWJ1Z01vZGXjgYxmYWxzZSzjgoLjgZfjgY/jga/oqbLlvZPjg6Hjgr3jg4Pjg4njgYzlrZjlnKjjgZfjgarjgYTloLTlkIjjga/jgIHnqbrjga7jg6Hjgr3jg4Pjg4njgpLnlKjmhI/jgZnjgotcbiAgICAgICAgd2luZG93W21dID0gZnVuY3Rpb24oKXt9O1xuICAgICAgIH1cblxuICAgICAgfSkoIG1ldGhvZHNbaV0gKTtcbiAgICB9XG5cbiAgfVxuXG4gIHByZXBlbmQocGFyYW0pIHtcblxuICAgICQoJ2JvZHknKS5wcmVwZW5kKHBhcmFtKTtcblxuICB9XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkge1xuXG4gICAgdmFyIEZQUyA9IDEwMDAvNjA7XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAvLyBjaHJvbWXjgoTmnIDmlrDjga5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAvLyDlj6TjgYRmaXJlZm9455SoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgIC8vIHNhZmFyaTbku6XliY3jgIFpT1M2IHNhZmFyaeeUqFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIEZQUyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiggdGltZXIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9OyAgICAgIFxuXG4gIH1cblxuICBleHBhbmRqUXVlcnkoKSB7XG5cbiAgICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICAgIHc6MCwgXG4gICAgICBoOjAsIFxuICAgICAgYWRqdXN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICdsZWZ0JzonNTAlJyxcbiAgICAgICAgICAgICd0b3AnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzonLScgKyAodyAvIDIpICsgJ3B4JyxcbiAgICAgICAgICAgICdtYXJnaW4tdG9wJzonLScgKyAoaCAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGFkanVzdFc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ2xlZnQnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzonLScgKyAodyAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGFkanVzdEg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ3RvcCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLXRvcCc6Jy0nICsgKGggLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgY2hlY2tDc3NCbGVuZCgpIHtcblxuICAgIGlmICgnQ1NTJyBpbiB3aW5kb3cgJiYgJ3N1cHBvcnRzJyBpbiB3aW5kb3cuQ1NTKSB7XG4gICAgICBpZiAoIXdpbmRvdy5DU1Muc3VwcG9ydHMoJ21peC1ibGVuZC1tb2RlJywgJ3NvZnQtbGlnaHQnKSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm90LW1peC1ibGVuZC1tb2RlJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb2coZ2IuaW4udS5pc0lFKTtcblxuICAgIGlmIChnYi5pbi51LmlzSUUpIHtcbiAgICAgIFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1taXgtYmxlbmQtbW9kZScpXG4gICAgICBcbiAgICB9O1xuXG4gIH1cblxuICBub3RTYXZlSW1nKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgcGNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgaWYgKGdiLmluLnUuaXNQQykge1xuXG4gICAgICAkKCgpPT57XG4gICAgICAgICQoXCJpbWdcIikub24oXCJjb250ZXh0bWVudVwiLCgpPT57XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgc3AgYW5kcm9pZFxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdmFyIHYgPSBnYi5pbi51LmlzQW5kcm9pZFZlcnNpb24oKTtcblxuICAgIGlmICh2PT11bmRlZmluZWQpIHJldHVybjtcbiAgICBpZiAodjw1KSB7XG5cbiAgICAgIHZhciB0aW1lcjtcbiAgICAgICQoXCJpbWdcIikub24oXCJ0b3VjaHN0YXJ0XCIsKCk9PntcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgYWxlcnQoXCLnlLvlg4/jga/kv53lrZjjgafjgY3jgb7jgZvjgpNcIilcbiAgICAgICAgfSw1MDApXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAkKFwiaW1nXCIpLm9uKFwidG91Y2hlbmRcIiwoKT0+e1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KSAgICAgIFxuXG4gICAgfVxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL0Z1bmMuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBNYWluXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBEaXNwbGF5VG9wIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheVRvcCc7XG5pbXBvcnQgRGlzcGxheVRleHR1cmVCZyBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlUZXh0dXJlQmcnO1xuaW1wb3J0IERpc3BsYXlUZXh0dXJlTW92aWUgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5VGV4dHVyZU1vdmllJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuICAgIC8vcGFnZeODmuODvOOCuOWIpeOBrklE44KS5Y+W5b6XXG4gICAgdmFyIHBhZ2UgPSAkKCdib2R5JykuZGF0YSgnaWQnKTtcblxuICAgIHdpbmRvdy5jb25zb2xlLmxvZygn54++5Zyo44Gu44Oa44O844K4SUTjga8gJywgcGFnZSk7XG5cblx0XHQvL3BhZ2Xjga5JROOBlOOBqOOBq+eZuueBq+OBmeOCi+OCr+ODqeOCueOBruaMr+OCiuWIhuOBkVxuICAgIHN3aXRjaCAocGFnZSkge1xuXG4gICAgICBjYXNlICd0b3AnOlxuXG4gICAgICAgIG5ldyBEaXNwbGF5VG9wKCk7XG5cbiAgICAgICAgYnJlYWs7XG5cblx0XHRcdGNhc2UgJ3RleHR1cmVCZyc6XG5cblx0XHRcdFx0bmV3IERpc3BsYXlUZXh0dXJlQmcoKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAndGV4dHVyZU1vdmllJzpcblxuXHRcdFx0XHRuZXcgRGlzcGxheVRleHR1cmVNb3ZpZSgpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG4gICAgfVxuXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBcbiAgfVxuXG4gIG9uUmVuZGVyKCkge1xuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvcGFnZS9NYWluLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRGlzcGxheVxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IFNjZW5lTWFuZ2VyIGZyb20gXCIuLi92aXN1YWwvU2NlbmVNYW5nZXJcIjtcbmltcG9ydCBTY2VuZTAxIGZyb20gXCIuLi92aXN1YWwvU2NlbmUwMVwiO1xuaW1wb3J0IFNjZW5lMDIgZnJvbSBcIi4uL3Zpc3VhbC9TY2VuZTAyXCI7XG5pbXBvcnQgU2NlbmUwMyBmcm9tIFwiLi4vdmlzdWFsL1NjZW5lMDNcIjtcbi8vIGltcG9ydCBPdmVyU2NlbmUgZnJvbSBcIi4uL3Zpc3VhbC9vdmVyU2NlbmVcIjtcblxuLy8gaW1wb3J0IFdlYkdMaW5pdCBmcm9tICcuL1dlYkdMaW5pdC5qcyc7XG5cbi8vIGltcG9ydCBDYW52YXMgZnJvbSBcIi4uL3Zpc3VhbC9DYW52YXNcIjtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5VG9wIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8g44Ki44OL44Oh44O844K344On44Oz44Or44O844OX44K544K/44O844OIXG4gICAgLy8gZ2IuaW4udXAubG9vcCgpO1xuICAgIFxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgZ2IuaW4uc2NlbmVNYW5nZXIgPSBuZXcgU2NlbmVNYW5nZXIoKTtcblxuICAgIGdiLmluLnNjZW5lQm94QSA9IG5ldyBTY2VuZTAxKCk7XG4gICAgZ2IuaW4uc2NlbmVCb3hCID0gbmV3IFNjZW5lMDIoKTtcbiAgICBnYi5pbi5zY2VuZUJveEMgPSBuZXcgU2NlbmUwMygpO1xuICAgIGdiLmluLnNjZW5lQm94RCA9IG5ldyBTY2VuZTAyKCk7XG4gICAgLy8gZ2IuaW4uc2NlbmVPdmVyID0gbmV3IE92ZXJTY2VuZSgpO1xuXG4gICAgZ2IuaW4uc2NlbmVNYW5nZXIuYWRkU2NlbmUoZ2IuaW4uc2NlbmVCb3hBKTtcbiAgICBnYi5pbi5zY2VuZU1hbmdlci5hZGRTY2VuZShnYi5pbi5zY2VuZUJveEIpO1xuICAgIGdiLmluLnNjZW5lTWFuZ2VyLmFkZFNjZW5lKGdiLmluLnNjZW5lQm94Qyk7XG4gICAgZ2IuaW4uc2NlbmVNYW5nZXIuYWRkU2NlbmUoZ2IuaW4uc2NlbmVCb3hEKTtcbiAgICAvLyBnYi5pbi5zY2VuZU1hbmdlci5hZGRTY2VuZShnYi5pbi5zY2VuZU92ZXIpO1xuXG4gICAgZ2IuaW4uc2NlbmVNYW5nZXIuZHJhdygpO1xuXG4gICAgLy8gZ2IuaW4uY2FudmFzID0gbmV3IENhbnZhcygpO1xuICAgIC8vIGdiLmluLmNhbnZhcy5pbml0KCk7XG5cblxuICB9XG5cbiAgc3RhdGljIHJ1bigpIHtcblxuXHRcdC8vIHdpbmRvdy5jb25zb2xlLmxvZygnc3RhdGljX1J1bicpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogU2NlbmVNYW5nZXJcbiAqIERhdGU6IDE3LzA1LzI5XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5JztcbmltcG9ydCBPdmVyU2NlbmUgZnJvbSBcIi4uL3Zpc3VhbC9vdmVyU2NlbmVcIjtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZU1hbmdlciBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKTtcblxuXHRcdHRoaXMuTlVNID0gMDsgLy8g54++5Zyo44Gu44K344O844Oz44Gu55Wq5Y+3XG5cdFx0dGhpcy5zY2VuZXMgPSBbXTsgLy8g44K344O844Oz44KS5qC857SN44GZ44KL6YWN5YiXXG4gICAgdGhpcy5mYWRlSW5PdXRUaW1lciA9IC0xOyAvL1xuICAgIHRoaXMub3AgPSAwO1xuXG5cdFx0dGhpcy5jYW52YXMgPSBudWxsO1xuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsOyAvLyBSZW5kZXJlclxuICAgIHRoaXMucmVuZGVyZXIwMiA9IG51bGw7IC8vIFJlbmRlcmVyMDJcblxuICAgIC8vIHRoaXMuJHN1YldyYXAgPSAkKCcjc3ViV3JhcCcpO1xuXG4gICAgdGhpcy5vdmVyc2NlbmUgPSBbXTsgLy8gb3ZlcnNjZW5lXG5cblxuXG4gICAgdGhpcy5vdmVyQWxwaGEgPSAwO1xuICAgIHRoaXMubWFpbk9QID0gMS4wO1xuXG4gICAgdGhpcy5hZGRTY2VuZSA9IHRoaXMuX2FkZFNjZW5lLmJpbmQodGhpcyk7XG5cblx0XHR0aGlzLm9uUmVzaXplID0gdGhpcy5fb25SZXNpemUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNoZWNrTnVtID0gdGhpcy5fY2hlY2tOdW0uYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uS2V5RG93biA9IHRoaXMuX29uS2V5RG93bi5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZmFkZUluT3V0ID0gdGhpcy5fZmFkZUluT3V0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5kcmF3ID0gdGhpcy5fZHJhdy5iaW5kKHRoaXMpO1xuXG5cblx0XHR0aGlzLmFscGhhUmVzZXQgPSB0aGlzLl9hbHBoYVJlc2V0LmJpbmQodGhpcyk7XG5cblx0XHR0aGlzLmtleW5hbWUgPSBudWxsO1xuXG5cblx0XHR0aGlzLmluaXQoKTsgLy8g5Yid5pyf5YyW5Yem55CG5b6M44CB44Kk44OZ44Oz44OI55m76YyyXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSwgZmFsc2UgKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93biwgdHJ1ZSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDliJ3mnJ/ljJZcbiAgICovXG4gIGluaXQoKXtcblxuICAgIHRoaXMub3ZlcnNjZW5lLnB1c2gobmV3IE92ZXJTY2VuZSgpKTtcblxuXHRcdC8vIFJlbmRlcmVy5L2c5oiQXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHthbHBoYTogdHJ1ZX0pO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyggd2luZG93LmRldmljZVBpeGVsUmF0aW8gKTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cdFx0dGhpcy5yZW5kZXJlci5zb3J0T2JqZWN0cyA9IGZhbHNlO1xuXHRcdHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xuXHRcdHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTaGFkb3dNYXA7XG5cdFx0dGhpcy5yZW5kZXJlci5kb21FbGVtZW50LmlkID0gXCJtYWluXCI7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQ7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICAvLyBSZW5kZXJlcjAy5L2c5oiQXG4gICAgLy8gdGhpcy5yZW5kZXJlcjAyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2FudGlhbGlhczogdHJ1ZSxhbHBoYTogdHJ1ZX0pO1xuICAgIC8vIHRoaXMucmVuZGVyZXIwMi5zZXRQaXhlbFJhdGlvKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyApO1xuICAgIC8vIHRoaXMucmVuZGVyZXIwMi5zZXRTaXplKCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0ICk7XG4gICAgLy8gdGhpcy5yZW5kZXJlcjAyLnNvcnRPYmplY3RzID0gZmFsc2U7XG4gICAgLy8gdGhpcy5yZW5kZXJlcjAyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcbiAgICAvLyB0aGlzLnJlbmRlcmVyMDIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTaGFkb3dNYXA7XG4gICAgLy8gdGhpcy5yZW5kZXJlcjAyLmRvbUVsZW1lbnQuaWQgPSBcInN1YlwiO1xuICAgIC8vIHRoaXMucmVuZGVyZXIwMi5zZXRDbGVhckNvbG9yKDB4MDAwMDAwLCAwLjUpO1xuICAgIC8vIHRoaXMuY2FudmFzMDIgPSB0aGlzLnJlbmRlcmVyMDIuZG9tRWxlbWVudDtcbiAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzMDIpO1xuXG4gIH1cblxuXHQvKipcbiAgICog566h55CG44GX44Gf44GE44K344O844Oz44KS5qC857SN44GZ44KL6Zai5pWwXG5cdCAqIEBwYXJhbSBzY2VuZVxuXHQgKi9cblx0X2FkZFNjZW5lKHNjZW5lKSB7XG5cblx0XHR0aGlzLnNjZW5lcy5wdXNoKHNjZW5lKTtcblxuXHR9XG5cbiAgLyoqXG4gICAq44CA44Km44Kj44Oz44OJ44Km44Gu5bmF44GM5aSJ44KP44Gj44Gf44Go44GN44Gu5Yem55CGXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25SZXNpemUoKSB7XG5cbiAgXHQvLyDooajnpLrjgZfjgabjgYTjgovjgrfjg7zjg7PjgZTjgajjgavjgqvjg6Hjg6njga7jg6rjgrXjgqTjgrrjgpLotbDjgonjgZvjgotcbiAgICB0aGlzLnNjZW5lc1t0aGlzLk5VTV0uY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuc2NlbmVzW3RoaXMuTlVNXS5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gICAgLy8gcmVuZGVyZXLjga/lhajjgabjga7jgrfjg7zjg7PjgaflhbHpgJpcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbiAgICAvLyB0aGlzLm92ZXJzY2VuZVswXS5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgLy8gdGhpcy5vdmVyc2NlbmVbMF0uY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICAvLyB0aGlzLnJlbmRlcmVyMDIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxuXG5cdC8qKlxuICAgKiDnj77lnKjjga7jgrfjg7zjg7Pnlarlj7fjgYzjgIHkuI3pganliIfjgarlgKTjgavjgarjgonjgarjgYTjgojjgYbjgavjg4Hjgqfjg4Pjgq9cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9jaGVja051bSgpe1xuXG5cdFx0aWYodGhpcy5OVU0gPCAwKSB7XG5cdFx0ICB3aW5kb3cuY29uc29sZS5sb2coJ2FhJyk7XG5cdFx0XHR0aGlzLk5VTSA9IHRoaXMuc2NlbmVzLmxlbmd0aC0xO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMuTlVNID49IHRoaXMuc2NlbmVzLmxlbmd0aCkge1xuICAgICAgd2luZG93LmNvbnNvbGUubG9nKCdiYicpO1xuXHRcdFx0dGhpcy5OVU0gPSAwO1xuXHRcdH1cblx0XHRcbiAgfVxuXG5cdC8qKlxuICAgKiDihpDihpLjgq3jg7zjgafjgrfjg7zjg7Pnlarlj7fjgpLotrPjgZflvJXjgY1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9vbktleURvd24oKXtcblx0XHR3aW5kb3cub25rZXlkb3duID0gKGUpID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKGUpO1xuICAgICAgdGhpcy5rZXluYW1lID0gZS5rZXk7XG5cbiAgICAgIGlmKHRoaXMua2V5bmFtZSA9PSBcIkFycm93UmlnaHRcIil7XG4gICAgICAgIHRoaXMuY2hlY2tOdW0oKTtcbiAgICAgICAgdGhpcy5hbHBoYVJlc2V0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMua2V5bmFtZSA9PSBcIkFycm93TGVmdFwiKXtcbiAgICAgICAgdGhpcy5jaGVja051bSgpO1xuXHRcdFx0XHR0aGlzLmFscGhhUmVzZXQoKTtcblxuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmtleW5hbWUgPT0gXCJBcnJvd1JpZ2h0XCIgfHwgdGhpcy5rZXluYW1lID09IFwiQXJyb3dMZWZ0XCIpIHtcblxuICAgICAgICB0aGlzLmZhZGVJbk91dFRpbWVyID0gMDtcblxuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmtleW5hbWUgPT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgLy8gd2luZG93LmNvbnNvbGUubG9nKCdVcCcpO1xuXG4gICAgICAgIHRoaXMub3ZlckFscGhhKz0wLjA1O1xuICAgICAgICBpZih0aGlzLm92ZXJBbHBoYSA+IDEpe1xuICAgICAgICAgIHRoaXMub3ZlckFscGhhID0gMS4wO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5rZXluYW1lID09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgLy8gd2luZG93LmNvbnNvbGUubG9nKCdEb3duJyk7XG5cbiAgICAgICAgdGhpcy5vdmVyQWxwaGEtPTAuMDU7XG4gICAgICAgIGlmKHRoaXMub3ZlckFscGhhIDwgMCl7XG4gICAgICAgICAgdGhpcy5vdmVyQWxwaGEgPSAwLjA7XG4gICAgICAgIH1cblxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuY29uc29sZS5sb2coJ3RoaXMub3ZlckFscGhhJyx0aGlzLm92ZXJBbHBoYSk7XG4gICAgICAvLyB3aW5kb3cuY29uc29sZS5sb2coJChcIiNzdWJcIikpO1xuICAgICAgJChcIiNzdWJcIikuY3NzKHsgb3BhY2l0eTogdGhpcy5vdmVyQWxwaGEgfSk7XG5cdFx0XHR3aW5kb3cuY29uc29sZS5sb2coJ+ePvuWcqOOBruOCt+ODvOODs+eVquWPt+OBrycsdGhpcy5OVU0pO1xuXHRcdH1cblx0fVxuXG4gIC8qKlxuXHQgKiDjgrfjg7zjg7Pjg4Hjgqfjg7PjgrjmmYLjga7jg6zjgqTjg6Tjg7xcbiAgICogQHByaXZhdGVcbiAgICovXG5cdF9mYWRlSW5PdXQoKXtcbiAgICBpZih0aGlzLmZhZGVJbk91dFRpbWVyIDw9IE1hdGguUEkqMil7XG4gICAgICB0aGlzLmZhZGVJbk91dFRpbWVyICs9IDAuMDc7XG4gICAgICAvL3NjcmVlbi5zdHlsZS5vcGFjaXR5ID0gTWF0aC5zaW4oZmFkZUluT3V0VGltZXIpO1xuICAgICAgdGhpcy5vcCA9IE1hdGguc2luKHRoaXMuZmFkZUluT3V0VGltZXIpO1xuXG4gICAgICAkKFwiI2ZhZGVJbk91dFwiKVxuICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgb3BhY2l0eTogdGhpcy5vcFxuICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuZmFkZUluT3V0VGltZXIgPSAtMTtcbiAgICAgIHRoaXMub3AgPSAwLjA7XG4gICAgfVxuXG4gICAgaWYodGhpcy5vcCA+IDAuOTUgJiYgdGhpcy5vcCA8PSAxLjApIHtcbiAgICAgIFxuICAgICAgc3dpdGNoICh0aGlzLmtleW5hbWUpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG5cbiAgICAgICAgICB0aGlzLk5VTSsrO1xuICAgICAgICAgIHRoaXMuY2hlY2tOdW0oKTtcblxuICAgICAgICAgIC8vIGlmKHRoaXMuc2NlbmVzLmxlbmd0aCA9PSB0aGlzLk5VTSl7XG4gICAgICAgICAgLy8gICB0aGlzLk5VTT0wO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuXG4gICAgICAgICAgdGhpcy5OVU0tLTtcbiAgICAgICAgICB0aGlzLmNoZWNrTnVtKCk7XG5cbiAgICAgICAgICAvLyBpZih0aGlzLk5VTSA8MCl7XG4gICAgICAgICAgLy8gICB0aGlzLk5VTSA9IHRoaXMuc2NlbmVzLmxlbmd0aC0xO1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cdH1cblxuICBfYWxwaGFSZXNldCgpIHtcbiAgICB0aGlzLm92ZXJBbHBoYSA9IDAuMDtcbiAgICB0aGlzLm1haW5PUCA9IDEuMDtcblxuICAgICQoXCIjc3ViXCIpLmNzcyh7b3BhY2l0eTogdGhpcy5vdmVyQWxwaGF9KTtcbiAgfVxuXG5cblx0LyoqXG4gICAqIOacgOe1gueahOOBquaPj+WGmeWHpueQhuOBqOOAgeOCouODi+ODoeODvOOCt+ODp+ODs+mWouaVsOOCkuODr+ODs+ODleODrOODvOODoOOBlOOBqOOBq+Wun+ihjFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2RyYXcoKSB7XG4gICAgXG4gICAgLy8gd2luZG93LmNvbnNvbGUubG9nKHRoaXMub3ZlcnNjZW5lWzBdKTtcbiAgICBcblx0XHR0aGlzLnNjZW5lc1t0aGlzLk5VTV0udXBkYXRlKCk7XG5cdFx0Ly8gdGhpcy5vdmVyc2NlbmVbdGhpcy5OVU1dLnVwZGF0ZSgpO1xuXHRcdC8vIHRoaXMub3ZlcnNjZW5lWzBdLnVwZGF0ZSgpO1xuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmVzW3RoaXMuTlVNXS5zY2VuZSwgdGhpcy5zY2VuZXNbdGhpcy5OVU1dLmNhbWVyYSk7XG5cdFx0Ly8gdGhpcy5yZW5kZXJlcjAyLnJlbmRlcih0aGlzLm92ZXJzY2VuZVswXS5zY2VuZSwgdGhpcy5vdmVyc2NlbmVbMF0uY2FtZXJhKTtcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3LmJpbmQodGhpcykpO1xuXG4gICAgaWYodGhpcy5mYWRlSW5PdXRUaW1lciA+PSAwKVxuICAgIHtcbiAgICAgIHRoaXMuZmFkZUluT3V0KCk7XG4gICAgfVxuXG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1NjZW5lTWFuZ2VyLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRW50cnlcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxucmVxdWlyZSgnLi4vLi4vbGlicy9PcmJpdENvbnRyb2xzLmpzJyk7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cnkge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdH1cblxuXHQvKipcblx0ICog5Yid5pyf5YyWXG5cdCAqL1xuXHRpbml0KCl7XG5cblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0VudHJ5LmpzIiwiLyoqXG4gKiBAYXV0aG9yIHFpYW8gLyBodHRwczovL2dpdGh1Yi5jb20vcWlhb1xuICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbVxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cbiAqIEBhdXRob3IgV2VzdExhbmdsZXkgLyBodHRwOi8vZ2l0aHViLmNvbS9XZXN0TGFuZ2xleVxuICogQGF1dGhvciBlcmljaDY2NiAvIGh0dHA6Ly9lcmljaGFpbmVzLmNvbVxuICovXG5cbi8vIFRoaXMgc2V0IG9mIGNvbnRyb2xzIHBlcmZvcm1zIG9yYml0aW5nLCBkb2xseWluZyAoem9vbWluZyksIGFuZCBwYW5uaW5nLlxuLy8gVW5saWtlIFRyYWNrYmFsbENvbnRyb2xzLCBpdCBtYWludGFpbnMgdGhlIFwidXBcIiBkaXJlY3Rpb24gb2JqZWN0LnVwICgrWSBieSBkZWZhdWx0KS5cbi8vXG4vLyAgICBPcmJpdCAtIGxlZnQgbW91c2UgLyB0b3VjaDogb25lIGZpbmdlciBtb3ZlXG4vLyAgICBab29tIC0gbWlkZGxlIG1vdXNlLCBvciBtb3VzZXdoZWVsIC8gdG91Y2g6IHR3byBmaW5nZXIgc3ByZWFkIG9yIHNxdWlzaFxuLy8gICAgUGFuIC0gcmlnaHQgbW91c2UsIG9yIGFycm93IGtleXMgLyB0b3VjaDogdGhyZWUgZmludGVyIHN3aXBlXG5cblRIUkVFLk9yYml0Q29udHJvbHMgPSBmdW5jdGlvbiAoIG9iamVjdCwgZG9tRWxlbWVudCApIHtcblxuXHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblxuXHR0aGlzLmRvbUVsZW1lbnQgPSAoIGRvbUVsZW1lbnQgIT09IHVuZGVmaW5lZCApID8gZG9tRWxlbWVudCA6IGRvY3VtZW50O1xuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuXHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG5cdC8vIFwidGFyZ2V0XCIgc2V0cyB0aGUgbG9jYXRpb24gb2YgZm9jdXMsIHdoZXJlIHRoZSBvYmplY3Qgb3JiaXRzIGFyb3VuZFxuXHR0aGlzLnRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIGRvbGx5IGluIGFuZCBvdXQgKCBQZXJzcGVjdGl2ZUNhbWVyYSBvbmx5IClcblx0dGhpcy5taW5EaXN0YW5jZSA9IDA7XG5cdHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gem9vbSBpbiBhbmQgb3V0ICggT3J0aG9ncmFwaGljQ2FtZXJhIG9ubHkgKVxuXHR0aGlzLm1pblpvb20gPSAwO1xuXHR0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgdmVydGljYWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0Ly8gUmFuZ2UgaXMgMCB0byBNYXRoLlBJIHJhZGlhbnMuXG5cdHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcblx0dGhpcy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTsgLy8gcmFkaWFuc1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCBob3Jpem9udGFsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdC8vIElmIHNldCwgbXVzdCBiZSBhIHN1Yi1pbnRlcnZhbCBvZiB0aGUgaW50ZXJ2YWwgWyAtIE1hdGguUEksIE1hdGguUEkgXS5cblx0dGhpcy5taW5BemltdXRoQW5nbGUgPSAtIEluZmluaXR5OyAvLyByYWRpYW5zXG5cdHRoaXMubWF4QXppbXV0aEFuZ2xlID0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblxuXHQvLyBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgZGFtcGluZyAoaW5lcnRpYSlcblx0Ly8gSWYgZGFtcGluZyBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0dGhpcy5lbmFibGVEYW1waW5nID0gZmFsc2U7XG5cdHRoaXMuZGFtcGluZ0ZhY3RvciA9IDAuMjU7XG5cblx0Ly8gVGhpcyBvcHRpb24gYWN0dWFsbHkgZW5hYmxlcyBkb2xseWluZyBpbiBhbmQgb3V0OyBsZWZ0IGFzIFwiem9vbVwiIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgem9vbWluZ1xuXHR0aGlzLmVuYWJsZVpvb20gPSB0cnVlO1xuXHR0aGlzLnpvb21TcGVlZCA9IDEuMDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSByb3RhdGluZ1xuXHR0aGlzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XG5cdHRoaXMucm90YXRlU3BlZWQgPSAxLjA7XG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcGFubmluZ1xuXHR0aGlzLmVuYWJsZVBhbiA9IHRydWU7XG5cdHRoaXMua2V5UGFuU3BlZWQgPSA3LjA7XHQvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXG5cblx0Ly8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcblx0Ly8gSWYgYXV0by1yb3RhdGUgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdHRoaXMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xuXHR0aGlzLmF1dG9Sb3RhdGVTcGVlZCA9IDIuMDsgLy8gMzAgc2Vjb25kcyBwZXIgcm91bmQgd2hlbiBmcHMgaXMgNjBcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcblx0dGhpcy5lbmFibGVLZXlzID0gdHJ1ZTtcblxuXHQvLyBUaGUgZm91ciBhcnJvdyBrZXlzXG5cdHRoaXMua2V5cyA9IHsgTEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwIH07XG5cblx0Ly8gTW91c2UgYnV0dG9uc1xuXHR0aGlzLm1vdXNlQnV0dG9ucyA9IHsgT1JCSVQ6IFRIUkVFLk1PVVNFLkxFRlQsIFpPT006IFRIUkVFLk1PVVNFLk1JRERMRSwgUEFOOiBUSFJFRS5NT1VTRS5SSUdIVCB9O1xuXG5cdC8vIGZvciByZXNldFxuXHR0aGlzLnRhcmdldDAgPSB0aGlzLnRhcmdldC5jbG9uZSgpO1xuXHR0aGlzLnBvc2l0aW9uMCA9IHRoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XG5cdHRoaXMuem9vbTAgPSB0aGlzLm9iamVjdC56b29tO1xuXG5cdC8vXG5cdC8vIHB1YmxpYyBtZXRob2RzXG5cdC8vXG5cblx0dGhpcy5nZXRQb2xhckFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIHNwaGVyaWNhbC5waGk7XG5cblx0fTtcblxuXHR0aGlzLmdldEF6aW11dGhhbEFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIHNwaGVyaWNhbC50aGV0YTtcblxuXHR9O1xuXG5cdHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRzY29wZS50YXJnZXQuY29weSggc2NvcGUudGFyZ2V0MCApO1xuXHRcdHNjb3BlLm9iamVjdC5wb3NpdGlvbi5jb3B5KCBzY29wZS5wb3NpdGlvbjAgKTtcblx0XHRzY29wZS5vYmplY3Quem9vbSA9IHNjb3BlLnpvb20wO1xuXG5cdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0fTtcblxuXHQvLyB0aGlzIG1ldGhvZCBpcyBleHBvc2VkLCBidXQgcGVyaGFwcyBpdCB3b3VsZCBiZSBiZXR0ZXIgaWYgd2UgY2FuIG1ha2UgaXQgcHJpdmF0ZS4uLlxuXHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHQvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcblx0XHR2YXIgcXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKCBvYmplY3QudXAsIG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxLCAwICkgKTtcblx0XHR2YXIgcXVhdEludmVyc2UgPSBxdWF0LmNsb25lKCkuaW52ZXJzZSgpO1xuXG5cdFx0dmFyIGxhc3RQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdFx0dmFyIGxhc3RRdWF0ZXJuaW9uID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKCkge1xuXG5cdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cblx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgdG8gXCJ5LWF4aXMtaXMtdXBcIiBzcGFjZVxuXHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdCApO1xuXG5cdFx0XHQvLyBhbmdsZSBmcm9tIHotYXhpcyBhcm91bmQgeS1heGlzXG5cdFx0XHRzcGhlcmljYWwuc2V0RnJvbVZlY3RvcjMoIG9mZnNldCApO1xuXG5cdFx0XHRpZiAoIHNjb3BlLmF1dG9Sb3RhdGUgJiYgc3RhdGUgPT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdFx0cm90YXRlTGVmdCggZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNwaGVyaWNhbC50aGV0YSArPSBzcGhlcmljYWxEZWx0YS50aGV0YTtcblx0XHRcdHNwaGVyaWNhbC5waGkgKz0gc3BoZXJpY2FsRGVsdGEucGhpO1xuXG5cdFx0XHQvLyByZXN0cmljdCB0aGV0YSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRzcGhlcmljYWwudGhldGEgPSBNYXRoLm1heCggc2NvcGUubWluQXppbXV0aEFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4QXppbXV0aEFuZ2xlLCBzcGhlcmljYWwudGhldGEgKSApO1xuXG5cdFx0XHQvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnBoaSA9IE1hdGgubWF4KCBzY29wZS5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4UG9sYXJBbmdsZSwgc3BoZXJpY2FsLnBoaSApICk7XG5cblx0XHRcdHNwaGVyaWNhbC5tYWtlU2FmZSgpO1xuXG5cblx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgKj0gc2NhbGU7XG5cblx0XHRcdC8vIHJlc3RyaWN0IHJhZGl1cyB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRzcGhlcmljYWwucmFkaXVzID0gTWF0aC5tYXgoIHNjb3BlLm1pbkRpc3RhbmNlLCBNYXRoLm1pbiggc2NvcGUubWF4RGlzdGFuY2UsIHNwaGVyaWNhbC5yYWRpdXMgKSApO1xuXG5cdFx0XHQvLyBtb3ZlIHRhcmdldCB0byBwYW5uZWQgbG9jYXRpb25cblx0XHRcdHNjb3BlLnRhcmdldC5hZGQoIHBhbk9mZnNldCApO1xuXG5cdFx0XHRvZmZzZXQuc2V0RnJvbVNwaGVyaWNhbCggc3BoZXJpY2FsICk7XG5cblx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgYmFjayB0byBcImNhbWVyYS11cC12ZWN0b3ItaXMtdXBcIiBzcGFjZVxuXHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdEludmVyc2UgKTtcblxuXHRcdFx0cG9zaXRpb24uY29weSggc2NvcGUudGFyZ2V0ICkuYWRkKCBvZmZzZXQgKTtcblxuXHRcdFx0c2NvcGUub2JqZWN0Lmxvb2tBdCggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlRGFtcGluZyA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnBoaSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c2NhbGUgPSAxO1xuXHRcdFx0cGFuT2Zmc2V0LnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHQvLyB1cGRhdGUgY29uZGl0aW9uIGlzOlxuXHRcdFx0Ly8gbWluKGNhbWVyYSBkaXNwbGFjZW1lbnQsIGNhbWVyYSByb3RhdGlvbiBpbiByYWRpYW5zKV4yID4gRVBTXG5cdFx0XHQvLyB1c2luZyBzbWFsbC1hbmdsZSBhcHByb3hpbWF0aW9uIGNvcyh4LzIpID0gMSAtIHheMiAvIDhcblxuXHRcdFx0aWYgKCB6b29tQ2hhbmdlZCB8fFxuXHRcdFx0XHRsYXN0UG9zaXRpb24uZGlzdGFuY2VUb1NxdWFyZWQoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApID4gRVBTIHx8XG5cdFx0XHRcdDggKiAoIDEgLSBsYXN0UXVhdGVybmlvbi5kb3QoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICkgKSA+IEVQUyApIHtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0XHRcdGxhc3RQb3NpdGlvbi5jb3B5KCBzY29wZS5vYmplY3QucG9zaXRpb24gKTtcblx0XHRcdFx0bGFzdFF1YXRlcm5pb24uY29weSggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKTtcblx0XHRcdFx0em9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHR0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG5cdFx0Ly9zY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdkaXNwb3NlJyB9ICk7IC8vIHNob3VsZCB0aGlzIGJlIGFkZGVkIGhlcmU/XG5cblx0fTtcblxuXHQvL1xuXHQvLyBpbnRlcm5hbHNcblx0Ly9cblxuXHR2YXIgc2NvcGUgPSB0aGlzO1xuXG5cdHZhciBjaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcblx0dmFyIHN0YXJ0RXZlbnQgPSB7IHR5cGU6ICdzdGFydCcgfTtcblx0dmFyIGVuZEV2ZW50ID0geyB0eXBlOiAnZW5kJyB9O1xuXG5cdHZhciBTVEFURSA9IHsgTk9ORSA6IC0gMSwgUk9UQVRFIDogMCwgRE9MTFkgOiAxLCBQQU4gOiAyLCBUT1VDSF9ST1RBVEUgOiAzLCBUT1VDSF9ET0xMWSA6IDQsIFRPVUNIX1BBTiA6IDUgfTtcblxuXHR2YXIgc3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdHZhciBFUFMgPSAwLjAwMDAwMTtcblxuXHQvLyBjdXJyZW50IHBvc2l0aW9uIGluIHNwaGVyaWNhbCBjb29yZGluYXRlc1xuXHR2YXIgc3BoZXJpY2FsID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXHR2YXIgc3BoZXJpY2FsRGVsdGEgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cblx0dmFyIHNjYWxlID0gMTtcblx0dmFyIHBhbk9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdHZhciB6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdHZhciByb3RhdGVTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciByb3RhdGVFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcm90YXRlRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdHZhciBwYW5TdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBwYW5FbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcGFuRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdHZhciBkb2xseVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIGRvbGx5RW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIGRvbGx5RGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdGZ1bmN0aW9uIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkge1xuXG5cdFx0cmV0dXJuIDIgKiBNYXRoLlBJIC8gNjAgLyA2MCAqIHNjb3BlLmF1dG9Sb3RhdGVTcGVlZDtcblxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Wm9vbVNjYWxlKCkge1xuXG5cdFx0cmV0dXJuIE1hdGgucG93KCAwLjk1LCBzY29wZS56b29tU3BlZWQgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gcm90YXRlTGVmdCggYW5nbGUgKSB7XG5cblx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAtPSBhbmdsZTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gcm90YXRlVXAoIGFuZ2xlICkge1xuXG5cdFx0c3BoZXJpY2FsRGVsdGEucGhpIC09IGFuZ2xlO1xuXG5cdH1cblxuXHR2YXIgcGFuTGVmdCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbkxlZnQoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAwICk7IC8vIGdldCBYIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIC0gZGlzdGFuY2UgKTtcblxuXHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0dmFyIHBhblVwID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuVXAoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAxICk7IC8vIGdldCBZIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIGRpc3RhbmNlICk7XG5cblx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdC8vIGRlbHRhWCBhbmQgZGVsdGFZIGFyZSBpbiBwaXhlbHM7IHJpZ2h0IGFuZCBkb3duIGFyZSBwb3NpdGl2ZVxuXHR2YXIgcGFuID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW4gKCBkZWx0YVgsIGRlbHRhWSApIHtcblxuXHRcdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0Ly8gcGVyc3BlY3RpdmVcblx0XHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXHRcdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXHRcdFx0XHR2YXIgdGFyZ2V0RGlzdGFuY2UgPSBvZmZzZXQubGVuZ3RoKCk7XG5cblx0XHRcdFx0Ly8gaGFsZiBvZiB0aGUgZm92IGlzIGNlbnRlciB0byB0b3Agb2Ygc2NyZWVuXG5cdFx0XHRcdHRhcmdldERpc3RhbmNlICo9IE1hdGgudGFuKCAoIHNjb3BlLm9iamVjdC5mb3YgLyAyICkgKiBNYXRoLlBJIC8gMTgwLjAgKTtcblxuXHRcdFx0XHQvLyB3ZSBhY3R1YWxseSBkb24ndCB1c2Ugc2NyZWVuV2lkdGgsIHNpbmNlIHBlcnNwZWN0aXZlIGNhbWVyYSBpcyBmaXhlZCB0byBzY3JlZW4gaGVpZ2h0XG5cdFx0XHRcdHBhbkxlZnQoIDIgKiBkZWx0YVggKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdHBhblVwKCAyICogZGVsdGFZICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0Ly8gb3J0aG9ncmFwaGljXG5cdFx0XHRcdHBhbkxlZnQoIGRlbHRhWCAqICggc2NvcGUub2JqZWN0LnJpZ2h0IC0gc2NvcGUub2JqZWN0LmxlZnQgKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRXaWR0aCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRwYW5VcCggZGVsdGFZICogKCBzY29wZS5vYmplY3QudG9wIC0gc2NvcGUub2JqZWN0LmJvdHRvbSApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIGNhbWVyYSBuZWl0aGVyIG9ydGhvZ3JhcGhpYyBub3IgcGVyc3BlY3RpdmVcblx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicgKTtcblx0XHRcdFx0c2NvcGUuZW5hYmxlUGFuID0gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdGZ1bmN0aW9uIGRvbGx5SW4oIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRzY2FsZSAvPSBkb2xseVNjYWxlO1xuXG5cdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gKiBkb2xseVNjYWxlICkgKTtcblx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gZG9sbHlPdXQoIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRzY2FsZSAqPSBkb2xseVNjYWxlO1xuXG5cdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gLyBkb2xseVNjYWxlICkgKTtcblx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdH1cblxuXHR9XG5cblx0Ly9cblx0Ly8gZXZlbnQgY2FsbGJhY2tzIC0gdXBkYXRlIHRoZSBvYmplY3Qgc3RhdGVcblx0Ly9cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duRG9sbHknICk7XG5cblx0XHRkb2xseVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blBhbicgKTtcblxuXHRcdHBhblN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlRG9sbHknICk7XG5cblx0XHRkb2xseUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fVxuXG5cdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUGFuJyApO1xuXG5cdFx0cGFuRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVVwJyApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVdoZWVsJyApO1xuXG5cdFx0aWYgKCBldmVudC5kZWx0YVkgPCAwICkge1xuXG5cdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmRlbHRhWSA+IDAgKSB7XG5cblx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlS2V5RG93bicgKTtcblxuXHRcdHN3aXRjaCAoIGV2ZW50LmtleUNvZGUgKSB7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5VUDpcblx0XHRcdFx0cGFuKCAwLCBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5CT1RUT006XG5cdFx0XHRcdHBhbiggMCwgLSBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxuXHRcdFx0XHRwYW4oIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLlJJR0hUOlxuXHRcdFx0XHRwYW4oIC0gc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0Um90YXRlJyApO1xuXG5cdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnREb2xseScgKTtcblxuXHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcblx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cblx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRkb2xseVN0YXJ0LnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFBhbicgKTtcblxuXHRcdHBhblN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVSb3RhdGUnICk7XG5cblx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuXHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuXHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVEb2xseScgKTtcblxuXHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcblx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cblx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRkb2xseUVuZC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH1cblxuXHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVBhbicgKTtcblxuXHRcdHBhbkVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cblx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaEVuZCcgKTtcblxuXHR9XG5cblx0Ly9cblx0Ly8gZXZlbnQgaGFuZGxlcnMgLSBGU006IGxpc3RlbiBmb3IgZXZlbnRzIGFuZCByZXNldCBzdGF0ZVxuXHQvL1xuXG5cdGZ1bmN0aW9uIG9uTW91c2VEb3duKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5PUkJJVCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuUk9UQVRFO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuWk9PTSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuRE9MTFk7XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5QQU4gKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLlBBTjtcblxuXHRcdH1cblxuXHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKCBzdGF0ZSA9PT0gU1RBVEUuUk9UQVRFICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5ET0xMWSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuUEFOICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZVVwKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRoYW5kbGVNb3VzZVVwKCBldmVudCApO1xuXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgfHwgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSAmJiBzdGF0ZSAhPT0gU1RBVEUuUk9UQVRFICkgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0aGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKTtcblxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTsgLy8gbm90IHN1cmUgd2h5IHRoZXNlIGFyZSBoZXJlLi4uXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25LZXlEb3duKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlS2V5cyA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGhhbmRsZUtleURvd24oIGV2ZW50ICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hTdGFydCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdGNhc2UgMTpcdC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ST1RBVEU7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcdC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnREb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX0RPTExZO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1BBTjtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1JPVEFURSApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6IC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ET0xMWSApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUEFOICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoRW5kKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRoYW5kbGVUb3VjaEVuZCggZXZlbnQgKTtcblxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uQ29udGV4dE1lbnUoIGV2ZW50ICkge1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHR9XG5cblx0Ly9cblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlICk7XG5cblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApO1xuXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG5cdC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxuXG5cdHRoaXMudXBkYXRlKCk7XG5cbn07XG5cblRIUkVFLk9yYml0Q29udHJvbHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSApO1xuVEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUSFJFRS5PcmJpdENvbnRyb2xzO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggVEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUsIHtcblxuXHRjZW50ZXI6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuY2VudGVyIGhhcyBiZWVuIHJlbmFtZWQgdG8gLnRhcmdldCcgKTtcblx0XHRcdHJldHVybiB0aGlzLnRhcmdldDtcblxuXHRcdH1cblxuXHR9LFxuXG5cdC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcblxuXHRub1pvb206IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlWm9vbTtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVab29tID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdG5vUm90YXRlOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVSb3RhdGU7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZVJvdGF0ZSA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRub1Bhbjoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUGFuO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVQYW4gPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0bm9LZXlzOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZUtleXM7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlS2V5cyA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRzdGF0aWNNb3ZpbmcgOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZURhbXBpbmc7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlRGFtcGluZyA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRkeW5hbWljRGFtcGluZ0ZhY3RvciA6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuIHRoaXMuZGFtcGluZ0ZhY3RvcjtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmRhbXBpbmdGYWN0b3IgPSB2YWx1ZTtcblxuXHRcdH1cblxuXHR9XG5cbn0gKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9saWJzL09yYml0Q29udHJvbHMuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBvdmVyU2NlbmVcbiAqIERhdGU6IDE3LzA2LzE5XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5JztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBvdmVyU2NlbmUgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcbiAgICB0aGlzLmNhbWVyYSA9IG51bGw7XG4gICAgdGhpcy5zdGVwID0gMDtcbiAgICB0aGlzLmtub3QgPSBudWxsOyAvLyDntZDjgbPnm65cblxuICAgIC8v44OI44O844Op44K555Sf5oiQ44Gn5b+F6KaB44Gq44OR44Op44Oh44O844K/XG5cdFx0dGhpcy5yYWRpdXMgPSA0MDtcblx0XHR0aGlzLnR1YmUgPSAyOC4yO1xuXHRcdHRoaXMucmFkaWFsU2VnbWVudHMgPSA2MDA7XG5cdFx0dGhpcy50dWJ1bGFyU2VnbWVudHMgPSAxMjtcblx0XHR0aGlzLnAgPSA1O1xuXHRcdHRoaXMucSA9IDQ7XG5cdFx0dGhpcy5oZWlnaHRTY2FsZSA9IDQ7XG5cdFx0dGhpcy5hc1BhcnRpY2xlcyA9IHRydWU7XG5cdFx0dGhpcy5yb3RhdGUgPSB0cnVlO1xuXG5cdFx0dGhpcy5nZW5lcmF0ZVNwcml0ZSA9IHRoaXMuX2dlbmVyYXRlU3ByaXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jcmVhdGVQYXJ0aWNsZVN5c3RlbSA9IHRoaXMuX2NyZWF0ZVBhcnRpY2xlU3lzdGVtLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jcmVhdGVNZXNoID0gdGhpcy5fY3JlYXRlTWVzaC5iaW5kKHRoaXMpO1xuXG5cbiAgICB0aGlzLmNyZWF0ZVNjZW5lID0gdGhpcy5fY3JlYXRlU2NlbmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMuX3VwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuXG4gIH1cblxuXHQvLyBmcm9tIFRIUkVFLmpzIGV4YW1wbGVzXG5cdF9nZW5lcmF0ZVNwcml0ZSgpIHtcblxuXHRcdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRcdGNhbnZhcy53aWR0aCA9IDE2O1xuXHRcdGNhbnZhcy5oZWlnaHQgPSAxNjtcblxuXHRcdGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblx0XHRjb25zdCBncmFkaWVudCA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIsIDAsIGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyLCBjYW52YXMud2lkdGggLyAyKTtcblx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjU1LDI1NSwyNTUsMSknKTtcblx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoMC4yLCAncmdiYSgwLDI1NSwyNTUsMSknKTtcblx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoMC40LCAncmdiYSgwLDAsNjQsMSknKTtcblx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMCwwLDAsMSknKTtcblxuXHRcdGNvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG5cdFx0Y29udGV4dC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG5cdFx0Y29uc3QgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKGNhbnZhcyk7XG5cdFx0dGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cdFx0cmV0dXJuIHRleHR1cmU7XG5cblx0fVxuXG5cdF9jcmVhdGVQYXJ0aWNsZVN5c3RlbShnZW9tKSB7XG5cdFx0Y29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuUGFydGljbGVCYXNpY01hdGVyaWFsKHtcblx0XHRcdGNvbG9yOiAweGZmZmZmZixcblx0XHRcdHNpemU6IDMsXG5cdFx0XHR0cmFuc3BhcmVudDogdHJ1ZSxcblx0XHRcdGJsZW5kaW5nOiBUSFJFRS5BZGRpdGl2ZUJsZW5kaW5nLFxuXHRcdFx0bWFwOiB0aGlzLmdlbmVyYXRlU3ByaXRlKClcblx0XHR9KTtcblxuXHRcdGNvbnN0IHN5c3RlbSA9IG5ldyBUSFJFRS5QYXJ0aWNsZVN5c3RlbShnZW9tLCBtYXRlcmlhbCk7XG5cdFx0c3lzdGVtLnNvcnRQYXJ0aWNsZXMgPSB0cnVlO1xuXHRcdHJldHVybiBzeXN0ZW07XG5cdH1cblxuXHRfY3JlYXRlTWVzaChnZW9tKSB7XG5cblx0XHQvLyBhc3NpZ24gdHdvIG1hdGVyaWFsc1xuXHRcdGNvbnN0IG1lc2hNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTm9ybWFsTWF0ZXJpYWwoe30pO1xuXHRcdG1lc2hNYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcblxuXHRcdC8vIGNyZWF0ZSBhIG11bHRpbWF0ZXJpYWxcblx0XHRjb25zdCBtZXNoID0gVEhSRUUuU2NlbmVVdGlscy5jcmVhdGVNdWx0aU1hdGVyaWFsT2JqZWN0KGdlb20sIFttZXNoTWF0ZXJpYWxdKTtcblxuXHRcdHJldHVybiBtZXNoO1xuXHR9XG5cblxuICAvKipcbiAgICog44K344O844Oz44KS5L2c5oiQ44CC44Kq44OW44K444Kn44Kv44OI44KS5qC857SNXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY3JlYXRlU2NlbmUoKXtcblxuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTsgLy/jgrfjg7zjg7PkvZzmiJBcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB3aW5kb3cuaW5uZXJXaWR0aC93aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IC0zMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gNDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDUwO1xuXHRcdHRoaXMuY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygxMCwgMCwgMCkpO1xuXG4gICAgaWYgKHRoaXMua25vdCkgdGhpcy5zY2VuZS5yZW1vdmUodGhpcy5rbm90KTtcbiAgICAvLyBjcmVhdGUgYSBuZXcgb25lXG4gICAgbGV0IGdlb20gPSBuZXcgVEhSRUUuVG9ydXNLbm90R2VvbWV0cnkodGhpcy5yYWRpdXMsIHRoaXMudHViZSwgTWF0aC5yb3VuZCh0aGlzLnJhZGlhbFNlZ21lbnRzKSwgTWF0aC5yb3VuZCh0aGlzLnR1YnVsYXJTZWdtZW50cyksIE1hdGgucm91bmQodGhpcy5wKSwgTWF0aC5yb3VuZCh0aGlzLnEpLCB0aGlzLmhlaWdodFNjYWxlKTtcblxuICAgIGlmICh0aGlzLmFzUGFydGljbGVzKSB7XG4gICAgICB0aGlzLmtub3QgPSB0aGlzLmNyZWF0ZVBhcnRpY2xlU3lzdGVtKGdlb20pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmtub3QgPSB0aGlzLmNyZWF0ZU1lc2goZ2VvbSk7XG4gICAgfVxuXG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5rbm90KTtcblxuXG4gIH1cblxuXG4gIC8qKlxuICAgKiB1cGRhdGXplqLmlbBcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91cGRhdGUoKXtcblxuXHRcdGlmICh0aGlzLnJvdGF0ZSkge1xuXHRcdFx0dGhpcy5rbm90LnJvdGF0aW9uLnkgPSB0aGlzLnN0ZXAgKz0gMC4wMDU7XG5cdFx0fVxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL292ZXJTY2VuZS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFNjZW5lMDFcbiAqIERhdGU6IDE3LzA1LzMxXG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5JztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZTAxIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgIC8vIHRoaXMuQm94ID0gbnVsbDtcbiAgICB0aGlzLmN1YmUgPSBudWxsO1xuICAgIHRoaXMudGltZXIgPSAwO1xuXG4gICAgdGhpcy5ncm91cCA9IG51bGw7XG5cbiAgICB0aGlzLnJlbmRlciA9IHRoaXMuX3JlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5jcmVhdGVTY2VuZSA9IHRoaXMuX2NyZWF0ZVNjZW5lLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLl91cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY3JlYXRlU2NlbmUoKTtcblxuICB9XG5cblxuICAvKipcbiAgICog44K344O844Oz44KS5L2c5oiQ44CC44Kq44OW44K444Kn44Kv44OI44KS5qC857SNXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY3JlYXRlU2NlbmUoKXtcblxuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTsgLy/jgrfjg7zjg7PkvZzmiJBcblxuICAgIHRoaXMuZ3JvdXAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICBjb25zdCBzdGVwID0zMDtcbiAgICBjb25zdCBudW0gPSAxMDtcbiAgICBmb3IgKGxldCB4ID0gMTsgeCA8PSBudW07IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDE7IHkgPD0gbnVtOyB5KyspIHtcbiAgICAgICAgZm9yIChsZXQgeiA9IDE7IHogPD0gbnVtOyB6ICsrKSB7XG4gICAgICAgICAgdGhpcy5jdWJlID0gbmV3IFRIUkVFLk1lc2goXG4gICAgICAgICAgICAgIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxMCwgMTAsIDEwKSxcbiAgICAgICAgICAgICAgbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoMHhmZmZmZmYpXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmN1YmUucG9zaXRpb24uc2V0KFxuICAgICAgICAgICAgICAoeCAtIG51bSAvIDIpICogc3RlcCxcbiAgICAgICAgICAgICAgKHkgLSBudW0gLyAyKSAqIHN0ZXAsXG4gICAgICAgICAgICAgICh6IC0gbnVtIC8gMikgKiBzdGVwXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmdyb3VwLmFkZCh0aGlzLmN1YmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuZ3JvdXApO1xuXG4gICAgY29uc3QgcG9pbnRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmKTtcbiAgICBwb2ludExpZ2h0LnBvc2l0aW9uLnNldCgyMDAsIDIwMCwgMjAwKTtcbiAgICB0aGlzLnNjZW5lLmFkZChwb2ludExpZ2h0KTtcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB3aW5kb3cuaW5uZXJXaWR0aC93aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDIwMDtcblxuICB9XG5cblxuICBfcmVuZGVyKCkge1xuICAgIHRoaXMuZ3JvdXAucm90YXRpb24ueCArPSAwLjAxO1xuICAgIHRoaXMuZ3JvdXAucm90YXRpb24ueSArPSAwLjAxO1xuICAgIHRoaXMuZ3JvdXAucm90YXRpb24ueiArPSAwLjAxO1xuICAgIHRoaXMuZ3JvdXAudHJhdmVyc2UoZnVuY3Rpb24ob2JqKSB7XG4gICAgICBpZiAob2JqICE9IHRoaXMuZ3JvdXApIHtcbiAgICAgICAgb2JqLnJvdGF0aW9uLnggKz0gMC4wMTtcbiAgICAgICAgb2JqLnJvdGF0aW9uLnkgKz0gMC4wMTtcbiAgICAgICAgb2JqLnJvdGF0aW9uLnogKz0gMC4wMTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICAgIC8vIHN0YXRzLnVwZGF0ZSgpO1xuICAgIC8vIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXBkYXRlKCl7XG5cbiAgICAvLyB3aW5kb3cuY29uc29sZS5sb2coJ3VwZGF0ZTAxJyk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1NjZW5lMDEuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBTY2VuZTAyXG4gKiBEYXRlOiAxNy8wNS8zMVxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5pbXBvcnQgYXVkaW8gZnJvbSBcIi4vVXRpbHMvYXVkaW9cIjtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZTAyIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgIHRoaXMuQm94ID0gbnVsbDtcbiAgICB0aGlzLnRpbWVyID0gMDtcblxuICAgIHRoaXMuZWxWb2x1bWUgPSBudWxsO1xuICAgIHRoaXMuZWxWb2x1bWVWYWwgPSBudWxsO1xuXG4gICAgLy8gdGhpcy5hdWRpbyA9IHRoaXMuX2F1ZGlvLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVNjZW5lID0gdGhpcy5fY3JlYXRlU2NlbmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMuX3VwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuXG4gICAgdGhpcy5hdWRpb0luaXQgPSBuZXcgYXVkaW8oKTtcbiAgICAvL1xuICAgIC8vIHRoaXMuYWFhID0gdGhpcy5hdWRpb0luaXQuZXhlY3V0ZSgpO1xuICAgIC8vIHdpbmRvdy5jb25zb2xlLmxvZyh0aGlzLmFhYSk7XG4gICAgXG4gICAgLy8gdGhpcy5hYWEgPSB0aGlzLmF1ZGlvSW5pdC5lbFZvbHVtZVZhbCgpO1xuICAgIC8vIHdpbmRvdy5jb25zb2xlLmxvZyh0aGlzLmF1ZGlvSW5pdCk7XG5cbiAgICAvLyB0aGlzLmF1ZGlvSW5pdCgpOyAvL2F1ZGlvSW5pdOWun+ihjFxuXG4gIH1cblxuXG4gIGF1ZGlvSW5pdCgpe1xuXG4gICAgbGV0IGN0eCwgYW5hbHlzZXIsIGZyZXF1ZW5jaWVzLCBnZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UsIGV4ZWN1dGU7XG5cbiAgICB3aW5kb3cuQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuICAgIGN0eCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcblxuICAgIGFuYWx5c2VyID0gY3R4LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgZnJlcXVlbmNpZXMgPSBuZXcgVWludDhBcnJheShhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudCk7XG5cbiAgICBnZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGZyZXF1ZW5jaWVzKTtcbiAgICAgIHJldHVybiBmcmVxdWVuY2llcy5yZWR1Y2UoZnVuY3Rpb24ocHJldmlvdXMsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cyArIGN1cnJlbnQ7XG4gICAgICAgICAgfSkgLyBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICB9O1xuXG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe2F1ZGlvOiB0cnVlfSlcbiAgICAgICAgLnRoZW4oKHN0cmVhbSkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5oYWNrRm9yTW96emlsYSA9IHN0cmVhbTtcbiAgICAgICAgICBjdHguY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2Uoc3RyZWFtKVxuICAgICAgICAgIC8vIEFuYWx5c2VyTm9kZeOBq+aOpee2mlxuICAgICAgICAgICAgICAuY29ubmVjdChhbmFseXNlcik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgd2luZG93LmNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICAvLyDpn7Pph4/jgpLooajnpLrjgZnjgovopoHntKBcbiAgICB0aGlzLmVsVm9sdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvbHVtZScpO1xuXG4gICAgLy8g5Y+v6IO944Gq6ZmQ44KK6auY44GE44OV44Os44O844Og44Os44O844OI44Gn6Z+z6YeP44KS5Y+W5b6X44GX44CB6KGo56S644KS5pu05paw44GZ44KLXG4gICAgZXhlY3V0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5lbFZvbHVtZS5pbm5lckhUTUwgPSBNYXRoLmZsb29yKGdldEJ5dGVGcmVxdWVuY3lEYXRhQXZlcmFnZSgpKTtcbiAgICAgIHRoaXMuZWxWb2x1bWVWYWwgPSBNYXRoLmZsb29yKGdldEJ5dGVGcmVxdWVuY3lEYXRhQXZlcmFnZSgpKTtcblxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGV4ZWN1dGUpO1xuICAgIH0uYmluZCh0aGlzKTtcblxuICAgIC8vXG4gICAgZXhlY3V0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCt+ODvOODs+OCkuS9nOaIkOOAguOCquODluOCuOOCp+OCr+ODiOOCkuagvOe0jVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NyZWF0ZVNjZW5lKCl7XG5cbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7IC8v44K344O844Oz5L2c5oiQXG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2luZG93LmlubmVyV2lkdGgvd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDAwKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTAwMDtcblxuICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNTAsNTAsNTApO1xuICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoMHg4ODg4ODgpO1xuXG4gICAgdGhpcy5Cb3ggPSBuZXcgVEhSRUUuTWVzaChcbiAgICAgICAgdGhpcy5nZW9tZXRyeSxcbiAgICAgICAgdGhpcy5tYXRlcmlhbFxuICAgICk7XG5cbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLkJveCk7XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIHVwZGF0ZemWouaVsFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3VwZGF0ZSgpe1xuXG4gICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYXVkaW9Jbml0LmV4ZWN1dGUoKSk7XG5cbiAgICB0aGlzLnRpbWVyICs9IDAuMTtcbiAgICB0aGlzLkJveC5wb3NpdGlvbi55ID0gNTAgKiBNYXRoLnNpbih0aGlzLnRpbWVyKTtcbiAgICAvLyB0aGlzLkJveC5wb3NpdGlvbi55ID0gdGhpcy5lbFZvbHVtZVZhbCAqIE1hdGguc2luKHRoaXMudGltZXIpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1NjZW5lMDIuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBhdWRpb1xuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGF1ZGlvIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuZWxWb2x1bWUgPSBudWxsO1xuICAgIHRoaXMuZWxWb2x1bWVWYWwgPSBudWxsO1xuXG4gICAgdGhpcy5nZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UgPSBudWxsO1xuXG4gICAgdGhpcy5leGVjdXRlID0gdGhpcy5fZXhlY3V0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5nZXRWYWwgPSB0aGlzLl9nZXRWYWwuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuYXVkaW9Jbml0KCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDliJ3mnJ/ljJZcbiAgICovXG4gIGF1ZGlvSW5pdCgpe1xuXG4gICAgbGV0IGN0eCwgYW5hbHlzZXIsIGZyZXF1ZW5jaWVzO1xuXG4gICAgd2luZG93LkF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbiAgICBjdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cbiAgICBhbmFseXNlciA9IGN0eC5jcmVhdGVBbmFseXNlcigpO1xuICAgIGZyZXF1ZW5jaWVzID0gbmV3IFVpbnQ4QXJyYXkoYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQpO1xuXG4gICAgdGhpcy5nZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGZyZXF1ZW5jaWVzKTtcbiAgICAgIHJldHVybiBmcmVxdWVuY2llcy5yZWR1Y2UoZnVuY3Rpb24ocHJldmlvdXMsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cyArIGN1cnJlbnQ7XG4gICAgICAgICAgfSkgLyBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICB9O1xuXG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe2F1ZGlvOiB0cnVlfSlcbiAgICAgICAgLnRoZW4oKHN0cmVhbSkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5oYWNrRm9yTW96emlsYSA9IHN0cmVhbTtcbiAgICAgICAgICBjdHguY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2Uoc3RyZWFtKVxuICAgICAgICAgIC8vIEFuYWx5c2VyTm9kZeOBq+aOpee2mlxuICAgICAgICAgICAgICAuY29ubmVjdChhbmFseXNlcik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgd2luZG93LmNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICB0aGlzLmV4ZWN1dGUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfZXhlY3V0ZSgpe1xuICAgIC8vIOmfs+mHj+OCkuihqOekuuOBmeOCi+imgee0oFxuICAgIHRoaXMuZWxWb2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9sdW1lJyk7XG5cbiAgICAvLyDlj6/og73jgarpmZDjgorpq5jjgYTjg5Xjg6zjg7zjg6Djg6zjg7zjg4jjgafpn7Pph4/jgpLlj5blvpfjgZfjgIHooajnpLrjgpLmm7TmlrDjgZnjgotcbiAgICB0aGlzLmVsVm9sdW1lLmlubmVySFRNTCA9IE1hdGguZmxvb3IodGhpcy5nZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UoKSk7XG4gICAgdGhpcy5lbFZvbHVtZVZhbCA9IE1hdGguZmxvb3IodGhpcy5nZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UoKSk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5leGVjdXRlKTtcblxuICAgIHJldHVybih0aGlzLmVsVm9sdW1lVmFsKTtcbiAgfVxuXG4gIF9nZXRWYWwoKXtcblxuICAgIHJldHVybih0aGlzLmVsVm9sdW1lVmFsKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9VdGlscy9hdWRpby5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFNjZW5lMDNcbiAqIERhdGU6IDE3LzA2LzE5XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5JztcbmltcG9ydCBQbGFuZVNjZW5lMDMgZnJvbSAnLi9QbGFuZVNjZW5lMDMnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lMDMgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG5cbiAgICB0aGlzLndpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuXG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuICAgIHRoaXMuc2NlbmUgPSBudWxsO1xuXG4gICAgdGhpcy5jcmVhdGVTY2VuZSA9IHRoaXMuX2NyZWF0ZVNjZW5lLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5fb25SZXNpemUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnVwZGF0ZSA9IHRoaXMuX3VwZGF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMubG9hZFRleHR1cmUgPSB0aGlzLl9sb2FkVGV4dHVyZS5iaW5kKHRoaXMpO1xuXG5cdFx0dGhpcy5wbGFuZSA9IG5ldyBQbGFuZVNjZW5lMDMoKTsgLy8gcGxhbmVcblxuXHRcdHRoaXMuaW5pdCgpOyAvLyDliJ3mnJ/ljJblrp/ooYxcblxuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMllxuICAgKi9cbiAgaW5pdCgpe1xuXG5cdFx0dGhpcy5jcmVhdGVTY2VuZSgpO1xuXG5cdFx0dGhpcy5sb2FkVGV4dHVyZSgpO1xuXG4gIH1cblxuXG5cbiAgLyoqXG4gICAq44CA44K344O844Oz5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlU2NlbmUoKXtcblxuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTsgLy/jgrfjg7zjg7PkvZzmiJBcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDEwMDtcblxuICAgIHRoaXMuY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygwLDAsMCkpO1xuXG4gIH1cblxuICAvKipcbiAgICog55S75YOP44KS44Ot44O844OJXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfbG9hZFRleHR1cmUoKXtcblxuXHRcdHRoaXMucGxhbmUubG9hZFRleHR1cmUoJy4uLy4uLy4uLy4uL2Fzc2V0cy9yZXNvdXJjZS9pbWcvc2hpYnV5YTAxLmpwZycsICgpID0+IHtcblx0XHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMucGxhbmUubWVzaCk7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9uUmVzaXplKCk7XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHR0aGlzLm9uUmVzaXplKCk7XG5cdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdH0pO1xuXG5cdH1cblxuICAvKipcbiAgICog5pu05pawXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXBkYXRlKCkge1xuXG5cdFx0dGhpcy5wbGFuZS51bmlmb3Jtcy50aW1lLnZhbHVlICs9IDAuMDU7XG5cblx0XHQvLyB3aW5kb3cuY29uc29sZS5sb2coJzAzJyk7XG4gIH1cblxuICAvKipcbiAgICrjgIDnlLvpnaLjg6rjgrXjgqTjgrrjgqTjg5njg7Pjg4hcbiAgICovXG4gIF9vblJlc2l6ZSgpIHtcblx0XHR0aGlzLmNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cdFx0dGhpcy5wbGFuZS5tZXNoLm1hdGVyaWFsLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcblxuICB9XG5cblxuXHRzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9TY2VuZTAzLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogUGxhbmVcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5JztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFuZVNjZW5lMDMgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cblx0XHR0aGlzLnVuaWZvcm1zID0ge307XG5cdFx0dGhpcy50ZXh0dXJlID0gbnVsbDtcblx0XHR0aGlzLm1lc2ggPSBudWxsO1xuXG5cdFx0dGhpcy5sb2FkVGV4dHVyZSA9IHRoaXMuX2xvYWRUZXh0dXJlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jcmVhdGVNZXNoID0gdGhpcy5fY3JlYXRlTWVzaC5iaW5kKHRoaXMpO1xuXHRcdC8vIHRoaXMucmVuZGVyID0gdGhpcy5fcmVuZGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZXNpemUgPSB0aGlzLl9yZXNpemUuYmluZCh0aGlzKTtcblxuICB9XG5cblx0X2xvYWRUZXh0dXJlKGltYWdlLCBjYWxsYmFjaykge1xuXHRcdGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG5cdFx0bG9hZGVyLmxvYWQoaW1hZ2UsICh0ZXh0dXJlKSA9PiB7XG5cdFx0XHR0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XG4gICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XG4gICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xuICAgICAgdGhpcy5tZXNoID0gdGhpcy5jcmVhdGVNZXNoKCk7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH0pO1xuXHR9XG5cblx0X2NyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy51bmlmb3JtcyA9IHtcblx0XHRcdHRpbWU6IHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjAgfSxcblx0XHRcdHJlc29sdXRpb246IHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoKSB9LFxuXHRcdFx0bW91c2U6IHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoKSB9XG5cdFx0fTtcblx0XHRyZXR1cm4gbmV3IFRIUkVFLk1lc2goXG5cdFx0XHRuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSgyLCAyKSxcblx0XHRcdG5ldyBUSFJFRS5SYXdTaGFkZXJNYXRlcmlhbCh7XG5cdFx0XHRcdHVuaWZvcm1zOiB0aGlzLnVuaWZvcm1zLFxuXHRcdFx0XHR2ZXJ0ZXhTaGFkZXI6IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsc2wvc2NlbmUwMy52ZXJ0JyksXG5cdFx0XHRcdGZyYWdtZW50U2hhZGVyOiByZXF1aXJlKCcuLi8uLi8uLi8uLi9nbHNsL3NjZW5lMDMuZnJhZycpLFxuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblxuICAvKipcbiAgICog44Os44Oz44OA44Op44O8XG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHQvLyBfcmVuZGVyKHRpbWUpIHtcblx0Ly9cblx0XHQvLyBpZiAodGhpcy5zdG9wKSByZXR1cm47XG5cdFx0Ly8gdGhpcy51bmlmb3Jtcy50aW1lLnZhbHVlICs9IHRpbWUgLyB0aGlzLmludGVydmFsO1xuXHRcdC8vIGlmICh0aGlzLnVuaWZvcm1zLnRpbWUudmFsdWUgPiAxKSB7XG5cdFx0Ly8gXHR0aGlzLnVuaWZvcm1zLnRpbWUudmFsdWUgPSAwO1xuXHRcdC8vIFx0dGhpcy5wcmV2X251bSA9IHRoaXMubmV4dF9udW07XG5cdFx0Ly8gXHR0aGlzLnVuaWZvcm1zLnRleFByZXYudmFsdWUgPSB0aGlzLnRleHR1cmVzW3RoaXMubmV4dF9udW1dO1xuXHRcdC8vIFx0d2hpbGUgKHRoaXMubmV4dF9udW0gPT0gdGhpcy5wcmV2X251bSkge1xuXHRcdC8vIFx0XHR0aGlzLm5leHRfbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXh0dXJlcy5sZW5ndGgpO1xuXHRcdC8vIFx0fVxuXHRcdC8vIFx0dGhpcy51bmlmb3Jtcy50ZXhOZXh0LnZhbHVlID0gdGhpcy50ZXh0dXJlc1t0aGlzLm5leHRfbnVtXTtcblx0XHQvLyB9XG4gIC8vIH1cblxuXHQvKipcblx0ICpcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9yZXNpemUoKXtcblx0XHR0aGlzLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvUGxhbmVTY2VuZTAzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxuYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgdXY7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4odm9pZCkge1xcbiAgICB2VXYgPSB1djtcXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3NyYy9hc3NldHMvZ2xzbC9zY2VuZTAzLnZlcnRcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIvKiDnsr7luqbkv67po77lrZDjga7lrqPoqIAgKi9cXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbi8qIFdlYkdM44Gn5Y+X44GR5rih44GV44KM44Gf5aSJ5pWwICovXFxudW5pZm9ybSBmbG9hdCB0aW1lOyAvLyB0aW1lICgxc2Vjb25kID09IDEuMClcXG51bmlmb3JtIHZlYzIgIG1vdXNlOyAvLyBtb3VzZSAoLTEuMCB+IDEuMClcXG51bmlmb3JtIHZlYzIgIHJlc29sdXRpb247IC8vIOino+WDj+W6piAoNTEyLjAsIDUxMi4wKVxcblxcbmNvbnN0IGZsb2F0IFBJID0gMy4xNDE1OTI2NTtcXG5cXG52ZWMyIHNxdWFyZUZyYW1lXzNfMCh2ZWMyIHNjcmVlblNpemUpIHtcXG4gIHZlYzIgcG9zaXRpb24gPSAyLjAgKiAoZ2xfRnJhZ0Nvb3JkLnh5IC8gc2NyZWVuU2l6ZS54eSkgLSAxLjA7XFxuICBwb3NpdGlvbi54ICo9IHNjcmVlblNpemUueCAvIHNjcmVlblNpemUueTtcXG4gIHJldHVybiBwb3NpdGlvbjtcXG59XFxuXFxudmVjMiBzcXVhcmVGcmFtZV8zXzAodmVjMiBzY3JlZW5TaXplLCB2ZWMyIGNvb3JkKSB7XFxuICB2ZWMyIHBvc2l0aW9uID0gMi4wICogKGNvb3JkLnh5IC8gc2NyZWVuU2l6ZS54eSkgLSAxLjA7XFxuICBwb3NpdGlvbi54ICo9IHNjcmVlblNpemUueCAvIHNjcmVlblNpemUueTtcXG4gIHJldHVybiBwb3NpdGlvbjtcXG59XFxuXFxuXFxuXFxubWF0MyBjYWxjTG9va0F0TWF0cml4XzVfMSh2ZWMzIG9yaWdpbiwgdmVjMyB0YXJnZXQsIGZsb2F0IHJvbGwpIHtcXG4gIHZlYzMgcnIgPSB2ZWMzKHNpbihyb2xsKSwgY29zKHJvbGwpLCAwLjApO1xcbiAgdmVjMyB3dyA9IG5vcm1hbGl6ZSh0YXJnZXQgLSBvcmlnaW4pO1xcbiAgdmVjMyB1dSA9IG5vcm1hbGl6ZShjcm9zcyh3dywgcnIpKTtcXG4gIHZlYzMgdnYgPSBub3JtYWxpemUoY3Jvc3ModXUsIHd3KSk7XFxuXFxuICByZXR1cm4gbWF0Myh1dSwgdnYsIHd3KTtcXG59XFxuXFxuXFxuXFxuXFxudmVjMyBnZXRSYXlfMV8yKG1hdDMgY2FtTWF0LCB2ZWMyIHNjcmVlblBvcywgZmxvYXQgbGVuc0xlbmd0aCkge1xcbiAgcmV0dXJuIG5vcm1hbGl6ZShjYW1NYXQgKiB2ZWMzKHNjcmVlblBvcywgbGVuc0xlbmd0aCkpO1xcbn1cXG5cXG52ZWMzIGdldFJheV8xXzIodmVjMyBvcmlnaW4sIHZlYzMgdGFyZ2V0LCB2ZWMyIHNjcmVlblBvcywgZmxvYXQgbGVuc0xlbmd0aCkge1xcbiAgbWF0MyBjYW1NYXQgPSBjYWxjTG9va0F0TWF0cml4XzVfMShvcmlnaW4sIHRhcmdldCwgMC4wKTtcXG4gIHJldHVybiBnZXRSYXlfMV8yKGNhbU1hdCwgc2NyZWVuUG9zLCBsZW5zTGVuZ3RoKTtcXG59XFxuXFxuXFxuXFxudmVjMiBtYXAodmVjMyBwKTtcXG4vLyBPcmlnaW5hbGx5IHNvdXJjZWQgZnJvbSBodHRwczovL3d3dy5zaGFkZXJ0b3kuY29tL3ZpZXcvbGRmU1dzXFxuLy8gVGhhbmsgeW91IEnDsWlnbyA6KVxcblxcbnZlYzIgY2FsY1JheUludGVyc2VjdGlvbl80XzModmVjMyByYXlPcmlnaW4sIHZlYzMgcmF5RGlyLCBmbG9hdCBtYXhkLCBmbG9hdCBwcmVjaXMsIGZsb2F0IHJlZHVjdGlvbikge1xcbiAgZmxvYXQgbGF0ZXN0ID0gcHJlY2lzICogMi4wO1xcbiAgZmxvYXQgZGlzdCAgID0gKzAuMDtcXG4gIGZsb2F0IHR5cGUgICA9IC0xLjA7XFxuICB2ZWMyICByZXMgICAgPSB2ZWMyKC0xLjAsIC0xLjApO1xcblxcbiAgZm9yIChpbnQgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xcbiAgICBpZiAobGF0ZXN0IDwgcHJlY2lzIHx8IGRpc3QgPiBtYXhkKSBicmVhaztcXG5cXG4gICAgdmVjMiByZXN1bHQgPSBtYXAocmF5T3JpZ2luICsgcmF5RGlyICogZGlzdCk7XFxuXFxuICAgIGxhdGVzdCA9IHJlc3VsdC54O1xcbiAgICB0eXBlICAgPSByZXN1bHQueTtcXG4gICAgZGlzdCAgKz0gbGF0ZXN0ICogcmVkdWN0aW9uO1xcbiAgfVxcblxcbiAgaWYgKGRpc3QgPCBtYXhkKSB7XFxuICAgIHJlcyA9IHZlYzIoZGlzdCwgdHlwZSk7XFxuICB9XFxuXFxuICByZXR1cm4gcmVzO1xcbn1cXG5cXG52ZWMyIGNhbGNSYXlJbnRlcnNlY3Rpb25fNF8zKHZlYzMgcmF5T3JpZ2luLCB2ZWMzIHJheURpcikge1xcbiAgcmV0dXJuIGNhbGNSYXlJbnRlcnNlY3Rpb25fNF8zKHJheU9yaWdpbiwgcmF5RGlyLCAyMC4wLCAwLjAwMSwgMS4wKTtcXG59XFxuXFxuXFxuXFxuLy8gT3JpZ2luYWxseSBzb3VyY2VkIGZyb20gaHR0cHM6Ly93d3cuc2hhZGVydG95LmNvbS92aWV3L2xkZlNXc1xcbi8vIFRoYW5rIHlvdSBJw7FpZ28gOilcXG5cXG52ZWMzIGNhbGNOb3JtYWxfMl80KHZlYzMgcG9zLCBmbG9hdCBlcHMpIHtcXG4gIGNvbnN0IHZlYzMgdjEgPSB2ZWMzKCAxLjAsLTEuMCwtMS4wKTtcXG4gIGNvbnN0IHZlYzMgdjIgPSB2ZWMzKC0xLjAsLTEuMCwgMS4wKTtcXG4gIGNvbnN0IHZlYzMgdjMgPSB2ZWMzKC0xLjAsIDEuMCwtMS4wKTtcXG4gIGNvbnN0IHZlYzMgdjQgPSB2ZWMzKCAxLjAsIDEuMCwgMS4wKTtcXG5cXG4gIHJldHVybiBub3JtYWxpemUoIHYxICogbWFwKCBwb3MgKyB2MSplcHMgKS54ICtcXG4gICAgICAgICAgICAgICAgICAgIHYyICogbWFwKCBwb3MgKyB2MiplcHMgKS54ICtcXG4gICAgICAgICAgICAgICAgICAgIHYzICogbWFwKCBwb3MgKyB2MyplcHMgKS54ICtcXG4gICAgICAgICAgICAgICAgICAgIHY0ICogbWFwKCBwb3MgKyB2NCplcHMgKS54ICk7XFxufVxcblxcbnZlYzMgY2FsY05vcm1hbF8yXzQodmVjMyBwb3MpIHtcXG4gIHJldHVybiBjYWxjTm9ybWFsXzJfNChwb3MsIDAuMDAyKTtcXG59XFxuXFxuXFxuXFxuI2RlZmluZSBOVU0gMS5cXG5mbG9hdCB0KCkge1xcbiAgICByZXR1cm4gdGltZSAqIDMuO1xcbn1cXG5cXG5mbG9hdCByYW5kb20oaW4gdmVjMiBwKSB7XFxuICAgIHJldHVybiBmcmFjdChzaW4oZG90KHAueHksIHZlYzIoMTIuMzQsIDU2Ljc4KSkpICogOTAuMCk7XFxufVxcblxcbmZsb2F0IHNkR3JvdW5kKGluIHZlYzMgcCkge1xcbiAgICByZXR1cm4gcC55O1xcbn1cXG5cXG5mbG9hdCBzZEJ1aWxkaW5ncyhpbiB2ZWMzIHApIHtcXG4gICAgdmVjMyBwcCA9IG1vZChwLCAxLikgLSAuNTtcXG4gICAgZmxvYXQgaGVpZ2h0ID0gcmFuZG9tKHAueHogLSBtb2QocC54eiwgMS4pKSAqMy47XFxuICAgIGZsb2F0IG5lYXJuZXNzID0gbWF4KGZsb29yKHAueikgLSB0KCkgLSAyLiwgMC4zKTtcXG4gICAgbmVhcm5lc3MgPSBwb3cobmVhcm5lc3MsIC4zKTtcXG4gICAgcHAueSA9IHAueSAqIDAuNCAqIG5lYXJuZXNzIC0gaGVpZ2h0ICogMC4xO1xcbiAgICByZXR1cm4gbGVuZ3RoKG1heChhYnMocHApIC0gLjI1LCAuMCkpO1xcbn1cXG5cXG52ZWMyIG1hcCh2ZWMzIHApIHtcXG4gICAgcmV0dXJuIHZlYzIobWluKHNkR3JvdW5kKHApLCBzZEJ1aWxkaW5ncyhwKSksIDAuKTtcXG59XFxuXFxuLy9cXG52b2lkIG1haW4gKHZvaWQpIHtcXG4gICAgdmVjMyByYXlPcmlnaW4gPSB2ZWMzKDAsIDEuNSwgMCk7XFxuICAgIHJheU9yaWdpbi54ICs9IChzaW4odCgpICogLjcpICsgY29zKHQoKSAqIC42NykpICogMC4wNztcXG4gICAgcmF5T3JpZ2luLnkgKz0gKHNpbih0KCkgKiAuODEpICsgY29zKHQoKSAqIC44KSkgKiAwLjI7XFxuICAgIHZlYzMgcmF5VGFyZ2V0ID0gdmVjMygwLCAxLCA5OTk5OTk5Lik7XFxuICAgIHJheU9yaWdpbi56ID0gdCgpO1xcbiAgICB2ZWMzIHJheURpcmVjdGlvbiA9IGdldFJheV8xXzIocmF5T3JpZ2luLCByYXlUYXJnZXQsIHNxdWFyZUZyYW1lXzNfMChyZXNvbHV0aW9uLnh5KSwgMi4pO1xcblxcbiAgICB2ZWMzIGxpZ2h0RGlyID0gbm9ybWFsaXplKHZlYzMoMC4zLCAzLiwgMi4pKTtcXG4gICAgdmVjMyBsaWdodCA9IHZlYzMoLjQpO1xcbiAgICB2ZWMzIGFtYmllbnQgPSB2ZWMzKC40LCAuMywgLjUpO1xcblxcbiAgICB2ZWMyIGNvbGxpc2lvbiA9IGNhbGNSYXlJbnRlcnNlY3Rpb25fNF8zKHJheU9yaWdpbiwgcmF5RGlyZWN0aW9uKTtcXG4gICAgaWYgKGNvbGxpc2lvbi54ID4gMC4pIHtcXG4gICAgICAgIHZlYzMgcG9zID0gcmF5T3JpZ2luICsgcmF5RGlyZWN0aW9uICogY29sbGlzaW9uLng7XFxuICAgICAgICB2ZWMzIG5vcm1hbCA9IGNhbGNOb3JtYWxfMl80KHBvcyk7XFxuICAgICAgICBmbG9hdCBkaWZmID0gY2xhbXAoZG90KGxpZ2h0RGlyLCBub3JtYWwpLCAwLjEsIDEuMCk7XFxuICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGRpZmYgKiBsaWdodCArIGFtYmllbnQgKiAxLi9wb3MueSwgMS4wKTtcXG4gICAgfVxcbiAgICBlbHNlIHtcXG4gICAgICAgIGZsb2F0IGMgPSBnbF9GcmFnQ29vcmQueSAvIHJlc29sdXRpb24ueTtcXG4gICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoYyAqIDAuMiwgMCwgYyAqIDAuMywgMSk7XFxuICAgIH1cXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zcmMvYXNzZXRzL2dsc2wvc2NlbmUwMy5mcmFnXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBEaXNwbGF5XG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgVGV4dHVyZUJnIGZyb20gXCIuLi92aXN1YWwvVGV4dHVyZUJnXCI7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheVRvcCB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIOOCouODi+ODoeODvOOCt+ODp+ODs+ODq+ODvOODl+OCueOCv+ODvOODiFxuICAgIC8vIGdiLmluLnVwLmxvb3AoKTtcbiAgICBcbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIGdiLmluLnRleHR1cmVCZyA9IG5ldyBUZXh0dXJlQmcoKTtcblxuICAgIGdiLmluLnRleHR1cmVCZy5pbml0KCk7XG5cblxuICB9XG5cbiAgc3RhdGljIHJ1bigpIHtcblxuXHRcdC8vIHdpbmRvdy5jb25zb2xlLmxvZygnc3RhdGljX1J1bicpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VGV4dHVyZUJnLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogVGV4dHVyZUJnXG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5pbXBvcnQgUGxhbmUgZnJvbSAnLi9QbGFuZSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZUJnIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2ViZ2wtb3V0cHV0Jyk7XG5cbiAgICB0aGlzLndpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuXG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuICAgIHRoaXMuc2NlbmUgPSBudWxsO1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEgPSB0aGlzLl9jcmVhdGVDYW1lcmEuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyID0gdGhpcy5fY3JlYXRlUmVuZGVyZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVNjZW5lID0gdGhpcy5fY3JlYXRlU2NlbmUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25SZXNpemUgPSB0aGlzLl9vblJlc2l6ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuVXBkYXRlID0gdGhpcy5fVXBkYXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5sb2FkVGV4dHVyZSA9IHRoaXMuX2xvYWRUZXh0dXJlLmJpbmQodGhpcyk7XG5cblx0XHR0aGlzLnBsYW5lID0gbmV3IFBsYW5lKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDliJ3mnJ/ljJZcbiAgICovXG4gIGluaXQoKXtcblxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhKCk7XG5cdFx0dGhpcy5jcmVhdGVTY2VuZSgpO1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKTtcblxuXHRcdHRoaXMuVXBkYXRlKCk7XG5cblx0XHR0aGlzLmxvYWRUZXh0dXJlKCk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiDjgqvjg6Hjg6nkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVDYW1lcmEoKXtcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDEwMDtcblxuICAgIHRoaXMuY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygwLDAsMCkpO1xuXG4gIH1cblxuICAvKipcbiAgICog44Os44Oz44OA44Op44O85L2c5oiQXG4gICAqL1xuICBfY3JlYXRlUmVuZGVyZXIoKXtcblxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICBhbHBoYSAgICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIGFudGlhbGlhcyAgICAgICAgICA6IGZhbHNlLFxuICAgICAgc3RlbmNpbCAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICBkZXB0aCAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgcHJlbXVsdGlwbGllZEFscGhhIDogZmFsc2UsXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzXG5cdFx0fSk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhmZmZmZmYsIDAuMCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKuOAgOOCt+ODvOODs+S9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVNjZW5lKCl7XG5cblx0XHR0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDnlLvlg4/jgpLjg63jg7zjg4lcbiAgICogQHByaXZhdGVcbiAgICovXG5cdF9sb2FkVGV4dHVyZSgpe1xuXG5cdFx0dGhpcy5wbGFuZS5sb2FkVGV4dHVyZSgnLi4vLi4vLi4vLi4vYXNzZXRzL3Jlc291cmNlL2ltZy9zaGlidXlhMDEuanBnJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5zY2VuZS5hZGQodGhpcy5wbGFuZS5tZXNoKTtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG5cdFx0XHRcdHRoaXMub25SZXNpemUoKTtcblx0XHRcdH0sIGZhbHNlKTtcblx0XHRcdHRoaXMub25SZXNpemUoKTtcblx0XHRcdHRoaXMuVXBkYXRlKCk7XG5cdFx0fSk7XG5cblx0fVxuXG4gIC8qKlxuICAgKiDmm7TmlrBcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9VcGRhdGUoKSB7XG5cblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcbiAgICAgIHRoaXMuVXBkYXRlKCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKuOAgOeUu+mdouODquOCteOCpOOCuuOCpOODmeODs+ODiFxuICAgKi9cbiAgX29uUmVzaXplKCkge1xuXHRcdHRoaXMuY2FudmFzLndpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcblx0XHR0aGlzLnBsYW5lLm1lc2gubWF0ZXJpYWwudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpO1xuXG4gICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxuXG5cblx0c2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvVGV4dHVyZUJnLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogUGxhbmVcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5JztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFuZSBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKTtcblxuXHRcdHRoaXMudW5pZm9ybXMgPSB7fTtcblx0XHR0aGlzLnRleHR1cmUgPSBudWxsO1xuXHRcdHRoaXMubWVzaCA9IG51bGw7XG5cblx0XHR0aGlzLmxvYWRUZXh0dXJlID0gdGhpcy5fbG9hZFRleHR1cmUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNyZWF0ZU1lc2ggPSB0aGlzLl9jcmVhdGVNZXNoLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZW5kZXIgPSB0aGlzLl9yZW5kZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlc2l6ZSA9IHRoaXMuX3Jlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gIH1cblxuXHRfbG9hZFRleHR1cmUoaW1hZ2UsIGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgbG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcblx0XHRsb2FkZXIubG9hZChpbWFnZSwgKHRleHR1cmUpID0+IHtcblx0XHRcdHRleHR1cmUubWFnRmlsdGVyID0gVEhSRUUuTmVhcmVzdEZpbHRlcjtcbiAgICAgIHRleHR1cmUubWluRmlsdGVyID0gVEhSRUUuTmVhcmVzdEZpbHRlcjtcbiAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XG4gICAgICB0aGlzLm1lc2ggPSB0aGlzLmNyZWF0ZU1lc2goKTtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSk7XG5cdH1cblxuXHRfY3JlYXRlTWVzaCgpIHtcblx0XHR0aGlzLnVuaWZvcm1zID0ge1xuXHRcdFx0cmVzb2x1dGlvbjoge1xuXHRcdFx0XHR0eXBlOiAndjInLFxuXHRcdFx0XHR2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpLFxuXHRcdFx0fSxcblx0XHRcdGltYWdlUmVzb2x1dGlvbjoge1xuXHRcdFx0XHR0eXBlOiAndjInLFxuXHRcdFx0XHR2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoMjA0OCwgMTM1NiksXG5cdFx0XHR9LFxuXHRcdFx0dGV4dHVyZToge1xuXHRcdFx0XHR0eXBlOiAndCcsXG5cdFx0XHRcdHZhbHVlOiB0aGlzLnRleHR1cmUsXG5cdFx0XHR9XG5cdFx0fTtcblx0XHRyZXR1cm4gbmV3IFRIUkVFLk1lc2goXG5cdFx0XHRuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSgyLCAyKSxcblx0XHRcdG5ldyBUSFJFRS5SYXdTaGFkZXJNYXRlcmlhbCh7XG5cdFx0XHRcdHVuaWZvcm1zOiB0aGlzLnVuaWZvcm1zLFxuXHRcdFx0XHR2ZXJ0ZXhTaGFkZXI6IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsc2wvY292ZXIudmVydCcpLFxuXHRcdFx0XHRmcmFnbWVudFNoYWRlcjogcmVxdWlyZSgnLi4vLi4vLi4vLi4vZ2xzbC9jb3Zlci5mcmFnJyksXG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njg7xcbiAgICogQHByaXZhdGVcbiAgICovXG5cdF9yZW5kZXIodGltZSkge1xuXG5cdFx0aWYgKHRoaXMuc3RvcCkgcmV0dXJuO1xuXHRcdHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSArPSB0aW1lIC8gdGhpcy5pbnRlcnZhbDtcblx0XHRpZiAodGhpcy51bmlmb3Jtcy50aW1lLnZhbHVlID4gMSkge1xuXHRcdFx0dGhpcy51bmlmb3Jtcy50aW1lLnZhbHVlID0gMDtcblx0XHRcdHRoaXMucHJldl9udW0gPSB0aGlzLm5leHRfbnVtO1xuXHRcdFx0dGhpcy51bmlmb3Jtcy50ZXhQcmV2LnZhbHVlID0gdGhpcy50ZXh0dXJlc1t0aGlzLm5leHRfbnVtXTtcblx0XHRcdHdoaWxlICh0aGlzLm5leHRfbnVtID09IHRoaXMucHJldl9udW0pIHtcblx0XHRcdFx0dGhpcy5uZXh0X251bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGV4dHVyZXMubGVuZ3RoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMudW5pZm9ybXMudGV4TmV4dC52YWx1ZSA9IHRoaXMudGV4dHVyZXNbdGhpcy5uZXh0X251bV07XG5cdFx0fVxuICB9XG5cblx0X3Jlc2l6ZSgpe1xuXHRcdHRoaXMudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS5zZXQoZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCwgZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQpO1xuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9QbGFuZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMyIHV2O1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG4gICAgdlV2ID0gdXY7XFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNChwb3NpdGlvbiwgMS4wKTtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zcmMvYXNzZXRzL2dsc2wvY292ZXIudmVydFxuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInByZWNpc2lvbiBoaWdocCBmbG9hdDtcXG4jZGVmaW5lIEdMU0xJRlkgMVxcblxcbnVuaWZvcm0gdmVjMiByZXNvbHV0aW9uO1xcbnVuaWZvcm0gdmVjMiBpbWFnZVJlc29sdXRpb247XFxudW5pZm9ybSBzYW1wbGVyMkQgdGV4dHVyZTtcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuICAgIHZlYzIgcmF0aW8gPSB2ZWMyKFxcbiAgICAgICAgbWluKChyZXNvbHV0aW9uLnggLyByZXNvbHV0aW9uLnkpIC8gKGltYWdlUmVzb2x1dGlvbi54IC8gaW1hZ2VSZXNvbHV0aW9uLnkpLCAxLjApLFxcbiAgICAgICAgbWluKChyZXNvbHV0aW9uLnkgLyByZXNvbHV0aW9uLngpIC8gKGltYWdlUmVzb2x1dGlvbi55IC8gaW1hZ2VSZXNvbHV0aW9uLngpLCAxLjApXFxuICAgICk7XFxuXFxuICAgIHZlYzIgdXYgPSB2ZWMyKFxcbiAgICAgICAgdlV2LnggKiByYXRpby54ICsgKDEuMCAtIHJhdGlvLngpICogMC41LFxcbiAgICAgICAgdlV2LnkgKiByYXRpby55ICsgKDEuMCAtIHJhdGlvLnkpICogMC41XFxuICAgICk7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh0ZXh0dXJlLCB1dik7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL2NvdmVyLmZyYWdcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IERpc3BsYXlcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbi8vIGltcG9ydCBXZWJHTGluaXQgZnJvbSAnLi9XZWJHTGluaXQuanMnO1xuXG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuLi92aXN1YWwvQ2FudmFzXCI7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheVRvcCB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIOOCouODi+ODoeODvOOCt+ODp+ODs+ODq+ODvOODl+OCueOCv+ODvOODiFxuICAgIC8vIGdiLmluLnVwLmxvb3AoKTtcbiAgICBcbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIGdiLmluLmNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICAgIGdiLmluLmNhbnZhcy5pbml0KCk7XG5cblxuICB9XG5cbiAgc3RhdGljIHJ1bigpIHtcblxuXHRcdC8vIHdpbmRvdy5jb25zb2xlLmxvZygnc3RhdGljX1J1bicpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VGV4dHVyZU1vdmllLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ2FudmFzXG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG4vLyBpbXBvcnQgVGl0bGVPYmplY3QgZnJvbSBcIi4vVGl0bGVPYmplY3RcIjtcbi8vIGltcG9ydCBDYW1lcmEgZnJvbSAnLi9VdGlscy9DYW1lcmEnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudW5pZm9ybXMgPSB7XG4gICAgICB1X3RpbWU6IHsgdHlwZTogXCJmXCIsIHZhbHVlOiAxLjAgfSxcbiAgICAgIHVfcmVzb2x1dGlvbjogeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMigpIH0sXG4gICAgICB1X21vdXNlOiB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCkgfVxuICAgIH07XG5cbiAgICAvLyB0aGlzLnRpdGxlT2JqZWN0ID0gbmV3IFRpdGxlT2JqZWN0KCk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJnbC1vdXRwdXQnKTtcblxuICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAvLyB0aGlzLm91dHB1dCA9IG9wdHMub3V0cHV0IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuICAgIHRoaXMuc2NlbmUgPSBudWxsO1xuXHRcdHRoaXMuY3ViZSA9IG51bGw7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSA9IHRoaXMuX2NyZWF0ZUNhbWVyYS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIgPSB0aGlzLl9jcmVhdGVSZW5kZXJlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUgPSB0aGlzLl9jcmVhdGVTY2VuZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlT2JqZWN0ID0gdGhpcy5fY3JlYXRlT2JqZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcmJpdENvbnRyb2xzID0gdGhpcy5fb3JiaXRDb250cm9scy5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wbGFuZU9iamVjdCA9IHRoaXMuX3BsYW5lT2JqZWN0LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnJlbmRlciA9IHRoaXMuX3JlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMuX29uUmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLlVwZGF0ZSA9IHRoaXMuX1VwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICAvKipcbiAgICog5Yid5pyf5YyWXG4gICAqL1xuICBpbml0KCl7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpO1xuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKCk7XG5cblx0XHR0aGlzLm9yYml0Q29udHJvbHMoKTtcblx0XHQvLyB0aGlzLmNyZWF0ZU9iamVjdCgpO1xuXG4gICAgdGhpcy5wbGFuZU9iamVjdCgpO1xuXG4gICAgdGhpcy5VcGRhdGUoKTtcblxuICAgIC8vIHRoaXMudGl0bGVPYmplY3QubG9hZFRleHR1cmUoKCkgPT4ge1xuICAgIC8vICAgdGhpcy5zY2VuZS5hZGQodGhpcy50aXRsZU9iamVjdC5vYmopO1xuICAgIC8vIH0pO1xuXG4gICAgLy/jg6rjgrXjgqTjgrrjgqTjg5njg7Pjg4jnmbrngatcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIH0sIGZhbHNlKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOOCq+ODoeODqeS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZUNhbWVyYSgpe1xuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHRoaXMud2lkdGggLyB0aGlzLmhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi54ID0gMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTAwO1xuXG4gICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsMCwwKSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njg7zkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVSZW5kZXJlcigpe1xuXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgIGFscGhhICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgYW50aWFsaWFzICAgICAgICAgIDogZmFsc2UsXG4gICAgICBzdGVuY2lsICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIGRlcHRoICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBwcmVtdWx0aXBsaWVkQWxwaGEgOiBmYWxzZSxcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXNcblx0XHR9KTtcblxuICAgIC8vIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweGZmZmZmZik7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4MDAwMDAwKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAvLyB0aGlzLm91dHB1dC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDjgrfjg7zjg7PkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICogT2JqZWN05L2c5oiQXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfY3JlYXRlT2JqZWN0KCl7XG5cbiAgICBsZXQgY3ViZUdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDQsIDQsIDQpO1xuICAgIGxldCBjdWJlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IDB4ZmZmZmZmLFxuICAgICAgd2lyZWZyYW1lOiB0cnVlXG4gICAgfSk7XG5cbiAgICB0aGlzLmN1YmUgPSBuZXcgVEhSRUUuTWVzaChjdWJlR2VvbWV0cnksIGN1YmVNYXRlcmlhbCk7XG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLnggPSAzO1xuICAgIHRoaXMuY3ViZS5wb3NpdGlvbi55ID0gMztcbiAgICB0aGlzLmN1YmUucG9zaXRpb24ueiA9IDM7XG5cbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmN1YmUpO1xuXG5cdH1cblxuXHRfcGxhbmVPYmplY3QoKXtcbiAgICB0aGlzLnBsYW5lID0gbmV3IFRIUkVFLk1lc2goXG4gICAgICAgIC8vIG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDI1NiwgNjQsIDQwLCAxMCksXG4gICAgICAgIG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDUsIDIwLCAzMiksXG4gICAgICAgIG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XG4gICAgICAgICAgdW5pZm9ybXM6IHRoaXMudW5pZm9ybXMsXG4gICAgICAgICAgdmVydGV4U2hhZGVyOiByZXF1aXJlKCcuLi8uLi8uLi8uLi9nbHNsL2luZGV4L3Rlc3QudmVydCcpLFxuICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiByZXF1aXJlKCcuLi8uLi8uLi8uLi9nbHNsL2luZGV4L3Rlc3QuZnJhZycpLFxuICAgICAgICB9KVxuICAgIClcbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLnBsYW5lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njg7xcbiAgICogQHByaXZhdGVcbiAgICovXG5cdF9yZW5kZXIoKSB7XG4gICAgbGV0IGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XG4gICAgbGV0IHRpbWUgPSBjbG9jay5nZXREZWx0YSgpO1xuXG4gICAgLy8gdGhpcy50aXRsZU9iamVjdC50aXRyZW5kZXIodGltZSk7XG4gIH1cblxuICAvKipcbiAgICog5pu05pawXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfVXBkYXRlKCkge1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG4gICAgICB0aGlzLlVwZGF0ZSgpO1xuICAgIH0pO1xuICAgIC8vIHRoaXMuY29udHJvbHMudXBkYXRlKCk7XG4gICAgdGhpcy51bmlmb3Jtcy51X3RpbWUudmFsdWUgKz0gMC4wNTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XG4gIH1cblxuICAvKipcbiAgICrjgIDnlLvpnaLjg6rjgrXjgqTjgrpcbiAgICovXG4gIF9vblJlc2l6ZSgpIHtcbiAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9XG5cblx0LyoqXG4gICAqIOOCq+ODoeODqeOCs+ODs+ODiOODreODvOODq1xuXHQgKi9cblx0X29yYml0Q29udHJvbHMoKXtcblx0XHR0aGlzLmNvbnRyb2xzID0gbmV3IFRIUkVFLk9yYml0Q29udHJvbHModGhpcy5jYW1lcmEpO1xuXHRcdHRoaXMuY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWU7XG5cdFx0bGV0IGNsb2NrID0gbmV3IFRIUkVFLkNsb2NrKCk7XG5cblx0XHRsZXQgZGVsdGEgPSBjbG9jay5nZXREZWx0YSgpO1xuXHRcdHRoaXMuY29udHJvbHMudXBkYXRlKGRlbHRhKTtcbiAgfVxuXG5cdHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL0NhbnZhcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbi8vYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zcmMvYXNzZXRzL2dsc2wvaW5kZXgvdGVzdC52ZXJ0XG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIHZlYzIgdV9yZXNvbHV0aW9uO1xcbnVuaWZvcm0gZmxvYXQgdV90aW1lO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgdmVjMiBzdCA9IGdsX0ZyYWdDb29yZC54eS91X3Jlc29sdXRpb24ueHk7XFxuICAgIGdsX0ZyYWdDb2xvcj12ZWM0KHN0Lngsc3QueSwwLjAsMS4wKTtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zcmMvYXNzZXRzL2dsc2wvaW5kZXgvdGVzdC5mcmFnXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9