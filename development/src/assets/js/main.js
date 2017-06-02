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
	
	var _DisplayTextureBg = __webpack_require__(25);
	
	var _DisplayTextureBg2 = _interopRequireDefault(_DisplayTextureBg);
	
	var _DisplayTextureMovie = __webpack_require__(30);
	
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
	
	var _Scene = __webpack_require__(23);
	
	var _Scene2 = _interopRequireDefault(_Scene);
	
	var _Scene3 = __webpack_require__(24);
	
	var _Scene4 = _interopRequireDefault(_Scene3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	
	      gb.in.sceneManger.addScene(gb.in.sceneBoxA);
	      gb.in.sceneManger.addScene(gb.in.sceneBoxB);
	
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
	
	    _this.canvas = null;
	    _this.renderer = null; // Renderer
	
	    _this.addScene = _this._addScene.bind(_this);
	
	    _this.onResize = _this._onResize.bind(_this);
	    _this.checkNum = _this._checkNum.bind(_this);
	    _this.onKeyDown = _this._onKeyDown.bind(_this);
	    _this.fadeInOut = _this._fadeInOut.bind(_this);
	    _this.draw = _this._draw.bind(_this);
	
	    _this.keyname = null;
	
	    _this.init(); // 初期化処理後、イベント登録
	
	    return _this;
	  }
	
	  /**
	   * 初期化
	   */
	
	
	  _createClass(SceneManger, [{
	    key: 'init',
	    value: function init() {
	
	      window.addEventListener('resize', this.onResize, false);
	
	      document.addEventListener("resize", this.onResize, false);
	      document.addEventListener("keydown", this.onKeyDown, true);
	
	      // Renderer作成
	      this.renderer = new THREE.WebGLRenderer({ antialias: true });
	      this.renderer.setPixelRatio(window.devicePixelRatio);
	      this.renderer.setSize(window.innerWidth, window.innerHeight);
	      this.renderer.sortObjects = false;
	      this.renderer.shadowMap.enabled = true;
	      this.renderer.shadowMap.type = THREE.PCFShadowMap;
	      this.renderer.domElement.id = "main";
	      this.canvas = this.renderer.domElement;
	      document.body.appendChild(this.canvas);
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
	    }
	
	    /**
	      * 現在のシーン番号が、不適切な値にならないようにチェック
	     * @private
	     */
	
	  }, {
	    key: '_checkNum',
	    value: function _checkNum() {
	      window.console.log(this.keyname);
	      if (this.NUM < 0) {
	        this.NUM = this.scenes.length - 1;
	      }
	
	      if (this.NUM >= this.scenes.length) {
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
	
	      document.onkeydown = function (e) {
	        // console.log(e);
	        _this2.keyname = e.key;
	        // window.console.log(this.keyname);
	        // if(this.keyname == "ArrowRight") {
	        //   this.NUM++;
	        //   this.checkNum();
	        // }
	        // if(this.keyname == "ArrowLeft") {
	        //   this.NUM--;
	        //   this.checkNum();
	        // }
	        if (_this2.keyname == "ArrowRight" || _this2.keyname == "ArrowLeft") {
	          // keyname = event.key;
	
	          _this2.fadeInOutTimer = 0;
	          //scenes[0].meshMaterial.color = 0xffffff*Math.random();
	        }
	        // switch (e.key) {
	        // 	case "ArrowRight":
	        // 		this.NUM++;
	        // 		this.checkNum();
	        // 		break;
	        // 	// case "ArrowRight":
	        // 	// 	this.NUM--;
	        // 	// 	this.checkNum();
	        // 	// 	break;
	        //  case "ArrowLeft":
	        //    this.NUM--;
	        //    this.checkNum();
	        //    break;
	        // 	default:
	        // }
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
	        var op = Math.sin(this.fadeInOutTimer);
	
	        $("#fadeInOut").css({
	          opacity: op
	        });
	      } else {
	
	        this.fadeInOutTimer = -1;
	        op = 0.0;
	      }
	
	      if (op > 0.95 && op <= 1.0) {
	        switch (this.keyname) {
	          case 'ArrowRight':
	            // console.log(this.scenes[this.NUM].END);
	            //scenes[NUM].endEnabled();
	            this.NUM++;
	            this.checkNum();
	            // alphaReset();
	            if (this.scenes.length == this.NUM) {
	              this.NUM = 0;
	            }
	            break;
	
	          case 'ArrowLeft':
	            // console.log(this.scenes[this.NUM].END);
	            // alphaReset();
	            //scenes[NUM].endEnabled();
	            this.NUM--;
	            this.checkNum();
	
	            if (this.NUM < 0) {
	              this.NUM = this.scenes.length - 1;
	            }
	            break;
	        }
	      }
	    }
	
	    /**
	      * 最終的な描写処理と、アニメーション関数をワンフレームごとに実行
	     * @private
	     */
	
	  }, {
	    key: '_draw',
	    value: function _draw() {
	
	      this.scenes[this.NUM].update();
	      this.renderer.render(this.scenes[this.NUM].scene, this.scenes[this.NUM].camera);
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
	    _this.Box = null;
	    _this.timer = 0;
	
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
	
	      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
	      this.camera.position.z = 1000;
	
	      this.Box = new THREE.Mesh(new THREE.BoxGeometry(50, 50, 50), new THREE.MeshBasicMaterial(0xffffff));
	
	      this.scene.add(this.Box);
	    }
	
	    /**
	     *
	     * @private
	     */
	
	  }, {
	    key: '_update',
	    value: function _update() {
	
	      this.timer += 0.1;
	      this.Box.position.x = 50 * Math.sin(this.timer);
	    }
	  }]);
	
	  return Scene01;
	}(_Entry3.default);
	
	exports.default = Scene01;

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
	
	    _this.createScene = _this._createScene.bind(_this);
	    _this.update = _this._update.bind(_this);
	
	    _this.createScene();
	
	    return _this;
	  }
	
	  /**
	   * シーンを作成。オブジェクトを格納
	   * @private
	   */
	
	
	  _createClass(Scene02, [{
	    key: '_createScene',
	    value: function _createScene() {
	
	      this.scene = new THREE.Scene(); //シーン作成
	
	      this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
	      this.camera.position.z = 1000;
	
	      this.Box = new THREE.Mesh(new THREE.BoxGeometry(50, 50, 50), new THREE.MeshBasicMaterial(0x888888));
	
	      this.scene.add(this.Box);
	    }
	
	    /**
	     *
	     * @private
	     */
	
	  }, {
	    key: '_update',
	    value: function _update() {
	
	      this.timer += 0.1;
	      this.Box.position.y = 50 * Math.sin(this.timer);
	    }
	  }]);
	
	  return Scene02;
	}(_Entry3.default);
	
	exports.default = Scene02;

/***/ }),
/* 25 */
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
	
	var _TextureBg = __webpack_require__(26);
	
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Entry2 = __webpack_require__(21);
	
	var _Entry3 = _interopRequireDefault(_Entry2);
	
	var _Plane = __webpack_require__(27);
	
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
/* 27 */
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
					vertexShader: __webpack_require__(28),
					fragmentShader: __webpack_require__(29)
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
/* 28 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}"

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform vec2 imageResolution;\nuniform sampler2D texture;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n    vec2 ratio = vec2(\n        min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),\n        min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)\n    );\n\n    vec2 uv = vec2(\n        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\n    );\n    gl_FragColor = texture2D(texture, uv);\n}"

/***/ }),
/* 30 */
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
	
	var _Canvas = __webpack_require__(31);
	
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
/* 31 */
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
	        vertexShader: __webpack_require__(32),
	        fragmentShader: __webpack_require__(33)
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
/* 32 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\n//attribute vec3 position;\n\nvoid main() {\n    gl_Position = vec4( position, 1.0 );\n}\n"

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform vec2 u_resolution;\nuniform float u_time;\n\nvoid main() {\n    vec2 st = gl_FragCoord.xy/u_resolution.xy;\n    gl_FragColor=vec4(st.x,st.y,0.0,1.0);\n}"

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDg4MmQ5OWU0NWI0MjE3ZDQ1MTEiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvcmUvQ29uZi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9VdGlsLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hbmltYXRpb24vcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL2NhbmNlbEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYXJyYXkvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy91YS9jaGVja0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy91YS1wYXJzZXIubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvaW1nL3ByZWxvYWRJbWcuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5Ud2l0dGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuTGluZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkZhY2VCb29rLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL0Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvU2NlbmVNYW5nZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0VudHJ5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9saWJzL09yYml0Q29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvU2NlbmUwMS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9TY2VuZTAyLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VGV4dHVyZUJnLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1RleHR1cmVCZy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9QbGFuZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL2NvdmVyLnZlcnQiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvZ2xzbC9jb3Zlci5mcmFnIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VGV4dHVyZU1vdmllLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL0NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QudmVydCIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QuZnJhZyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJnYiIsInVuZGVmaW5lZCIsImluIiwiY29tbW9uIiwibWFpbiIsIkNvbW1vbiIsInNldHVwIiwic2V0RXZlbnRzIiwiY29uZiIsInUiLCJmIiwidXQiLCIkIiwiZG9jdW1lbnQiLCJvbiIsIm9uUmVhZHkiLCJiaW5kIiwib25Mb2FkIiwiQ29uZiIsIlJFTEVBU0UiLCJGTEciLCJMT0ciLCJQQVJBTSIsIlNUQVRTIiwiZGVmVyIsImRlZkgiLCJXIiwiSCIsInNwVyIsInNwSCIsImJwIiwibW9kZSIsImtleXMiLCJzd2l0Y2hNb2RlIiwic2VjMDJJbWdOdW0iLCJ5b3V0dWJlSUQwMSIsInlvdXR1YmVJRDAyIiwid2ViRm9udExvYWRlZCIsImkiLCJrZXkiLCJsZW4iLCJwYXJhbSIsInJlZiIsInJlZjEiLCJ2YWx1ZSIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInNwbGl0IiwibGVuZ3RoIiwiaiIsIm9iaiIsImsiLCJ2YWwiLCJVdGlsIiwiaXNTZXRTUFNpemUiLCJzdGFydFRpbWUiLCJlbGFwc2VkVGltZSIsIm5vdyIsIkRhdGUiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtaW4xIiwibWF4MSIsIm1pbjIiLCJtYXgyIiwiaGl0IiwicmFuZ2UiLCJudW0iLCJyZXNNaW4iLCJyZXNNYXgiLCJiYXNlTWluIiwiYmFzZU1heCIsInAiLCJuIiwicG9zIiwiU3RyaW5nIiwiaW5kZXhPZiIsInN1YnN0ciIsIm51bWVyYXRvciIsImRlbm9taW5hdG9yIiwicmFkaWFucyIsIlBJIiwiYW5nbGUiLCJwMSIsInAyIiwic3FydCIsInBvdyIsIngiLCJ5IiwiYXJyIiwic29ydCIsImEiLCJiIiwiZ2V0VGltZSIsImZsZyIsImNzcyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJpc1Jlc1NQIiwiaXNSZXNQQyIsInVybCIsImhyZWYiLCJwYXJhbUl0ZW1zIiwibGlzdCIsInBhcmFtSXRlbSIsImhhc2giLCJsIiwibGVuMSIsImNvb2tpZSIsInIiLCJnIiwic3RyIiwidG9TdHJpbmciLCJBcnJheSIsImpvaW4iLCJjb250YWluIiwibnVtYmVyIiwiX3BvdyIsInJvdW5kIiwicmVzIiwib3JnIiwiZGVzdCIsImJlZm9yZSIsImFmdGVyIiwiUmVnRXhwIiwiZ2V0Tm93IiwiaG91ciIsImdldEhvdXJzIiwibWludXRlIiwiZ2V0TWludXRlcyIsInNlY29uZCIsImdldFNlY29uZHMiLCJtaWxsU2Vjb25kIiwiZ2V0TWlsbGlzZWNvbmRzIiwiZ2V0RGF0ZSIsIm1vbnRoZGF5cyIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ3ZWVrRGF5SlAiLCJ3REoiLCJnZXREYXkiLCJ3ZWVrRGF5RU4iLCJ3REUiLCJkYXRlIiwiTnVtYmVyIiwiaWdub3JlQXJyYXkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjYWxsIiwiJHRhcmdldCIsIiRpbWciLCJlYWNoIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImF0dHIiLCJ0cmlnZ2VyIiwic2VsZiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9mZiIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwicGF0aG5hbWUiLCJldmVudCIsInJldHVyblZhbHVlIiwia2V5Q29kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbndoZWVsIiwib25tb3VzZXdoZWVsIiwib250b3VjaG1vdmUiLCJvbmtleWRvd24iLCJwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiVXRpbHMiLCJfc2V0dXAiLCJjaGVja0NsaWVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl90aGlzIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJBcnIiLCJzbGljZSIsInQiLCJwYXJzZXIiLCJyZXF1aXJlIiwidWEiLCJicm93c2VyIiwiZ2V0QnJvd3NlciIsIm5hbWUiLCJkZXZpY2UiLCJnZXREZXZpY2UiLCJ0eXBlIiwiZ2V0T1MiLCJkZXZpY2VfbmFtZSIsInZlbmRvciIsImdldFVBIiwicyIsIm8iLCJjIiwiZCIsInYiLCJtIiwiRSIsIlMiLCJleHRlbmQiLCJjb25jYXQiLCJoYXMiLCJ0b0xvd2VyQ2FzZSIsImxvd2VyaXplIiwibWFqb3IiLCJ0cmltIiwicmd4IiwiYXJndW1lbnRzIiwiaGFzT3duUHJvcGVydHkiLCJleGVjIiwidGVzdCIsIlQiLCJvbGRzYWZhcmkiLCJ2ZXJzaW9uIiwiYW1hem9uIiwibW9kZWwiLCJzcHJpbnQiLCJIVEMiLCJTcHJpbnQiLCJvcyIsIndpbmRvd3MiLCJNRSIsIlhQIiwiVmlzdGEiLCJSVCIsIk4iLCJjcHUiLCJlbmdpbmUiLCJDIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiYXBwbHkiLCJnZXRDUFUiLCJnZXRFbmdpbmUiLCJnZXRSZXN1bHQiLCJzZXRVQSIsIlZFUlNJT04iLCJCUk9XU0VSIiwiTkFNRSIsIk1BSk9SIiwiQ1BVIiwiQVJDSElURUNUVVJFIiwiREVWSUNFIiwiTU9ERUwiLCJWRU5ET1IiLCJUWVBFIiwiQ09OU09MRSIsIk1PQklMRSIsIlNNQVJUVFYiLCJUQUJMRVQiLCJXRUFSQUJMRSIsIkVNQkVEREVEIiwiRU5HSU5FIiwiT1MiLCJleHBvcnRzIiwibW9kdWxlIiwiVUFQYXJzZXIiLCJqUXVlcnkiLCJaZXB0byIsIkwiLCJnZXQiLCJzZXQiLCJpbWdQYXRoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbWciLCJJbWFnZSIsImNhbGxlZSIsInNyYyIsIiRidG4iLCJ0ZXh0Iiwic2hhcmVVUkwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJvcGVuIiwiZGVzY3JpcHRpb24iLCJGdW5jIiwiYmxhbmsiLCJkZWJ1Z2dlciIsImV4cGFuZGpRdWVyeSIsIm1ldGhvZHMiLCJjb25zb2xlIiwicHJlcGVuZCIsIkZQUyIsIndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIiwidGltZXIiLCJmbiIsImFkanVzdCIsImFkanVzdFciLCJhZGp1c3RIIiwiQ1NTIiwic3VwcG9ydHMiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJsb2ciLCJpc0lFIiwiaXNQQyIsImlzQW5kcm9pZFZlcnNpb24iLCJhbGVydCIsIk1haW4iLCJwYWdlIiwiZGF0YSIsIkRpc3BsYXlUb3AiLCJzY2VuZU1hbmdlciIsInNjZW5lQm94QSIsInNjZW5lQm94QiIsImFkZFNjZW5lIiwiZHJhdyIsIlNjZW5lTWFuZ2VyIiwiTlVNIiwic2NlbmVzIiwiZmFkZUluT3V0VGltZXIiLCJjYW52YXMiLCJyZW5kZXJlciIsIl9hZGRTY2VuZSIsIm9uUmVzaXplIiwiX29uUmVzaXplIiwiY2hlY2tOdW0iLCJfY2hlY2tOdW0iLCJvbktleURvd24iLCJfb25LZXlEb3duIiwiZmFkZUluT3V0IiwiX2ZhZGVJbk91dCIsIl9kcmF3Iiwia2V5bmFtZSIsImluaXQiLCJUSFJFRSIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJzb3J0T2JqZWN0cyIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJQQ0ZTaGFkb3dNYXAiLCJkb21FbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2NlbmUiLCJwdXNoIiwiY2FtZXJhIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsIm9wIiwic2luIiwib3BhY2l0eSIsInVwZGF0ZSIsInJlbmRlciIsIkVudHJ5IiwiT3JiaXRDb250cm9scyIsIm9iamVjdCIsInRhcmdldCIsIlZlY3RvcjMiLCJtaW5EaXN0YW5jZSIsIm1heERpc3RhbmNlIiwiSW5maW5pdHkiLCJtaW5ab29tIiwibWF4Wm9vbSIsIm1pblBvbGFyQW5nbGUiLCJtYXhQb2xhckFuZ2xlIiwibWluQXppbXV0aEFuZ2xlIiwibWF4QXppbXV0aEFuZ2xlIiwiZW5hYmxlRGFtcGluZyIsImRhbXBpbmdGYWN0b3IiLCJlbmFibGVab29tIiwiem9vbVNwZWVkIiwiZW5hYmxlUm90YXRlIiwicm90YXRlU3BlZWQiLCJlbmFibGVQYW4iLCJrZXlQYW5TcGVlZCIsImF1dG9Sb3RhdGUiLCJhdXRvUm90YXRlU3BlZWQiLCJlbmFibGVLZXlzIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJCT1RUT00iLCJtb3VzZUJ1dHRvbnMiLCJPUkJJVCIsIk1PVVNFIiwiWk9PTSIsIk1JRERMRSIsIlBBTiIsInRhcmdldDAiLCJjbG9uZSIsInBvc2l0aW9uMCIsInBvc2l0aW9uIiwiem9vbTAiLCJ6b29tIiwiZ2V0UG9sYXJBbmdsZSIsInNwaGVyaWNhbCIsInBoaSIsImdldEF6aW11dGhhbEFuZ2xlIiwidGhldGEiLCJyZXNldCIsInNjb3BlIiwiY29weSIsImRpc3BhdGNoRXZlbnQiLCJjaGFuZ2VFdmVudCIsInN0YXRlIiwiU1RBVEUiLCJOT05FIiwib2Zmc2V0IiwicXVhdCIsIlF1YXRlcm5pb24iLCJzZXRGcm9tVW5pdFZlY3RvcnMiLCJ1cCIsInF1YXRJbnZlcnNlIiwiaW52ZXJzZSIsImxhc3RQb3NpdGlvbiIsImxhc3RRdWF0ZXJuaW9uIiwic3ViIiwiYXBwbHlRdWF0ZXJuaW9uIiwic2V0RnJvbVZlY3RvcjMiLCJyb3RhdGVMZWZ0IiwiZ2V0QXV0b1JvdGF0aW9uQW5nbGUiLCJzcGhlcmljYWxEZWx0YSIsIm1ha2VTYWZlIiwicmFkaXVzIiwic2NhbGUiLCJwYW5PZmZzZXQiLCJzZXRGcm9tU3BoZXJpY2FsIiwibG9va0F0Iiwiem9vbUNoYW5nZWQiLCJkaXN0YW5jZVRvU3F1YXJlZCIsIkVQUyIsImRvdCIsInF1YXRlcm5pb24iLCJkaXNwb3NlIiwib25Db250ZXh0TWVudSIsIm9uTW91c2VEb3duIiwib25Nb3VzZVdoZWVsIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsIm9uVG91Y2hNb3ZlIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJzdGFydEV2ZW50IiwiZW5kRXZlbnQiLCJST1RBVEUiLCJET0xMWSIsIlRPVUNIX1JPVEFURSIsIlRPVUNIX0RPTExZIiwiVE9VQ0hfUEFOIiwiU3BoZXJpY2FsIiwicm90YXRlU3RhcnQiLCJWZWN0b3IyIiwicm90YXRlRW5kIiwicm90YXRlRGVsdGEiLCJwYW5TdGFydCIsInBhbkVuZCIsInBhbkRlbHRhIiwiZG9sbHlTdGFydCIsImRvbGx5RW5kIiwiZG9sbHlEZWx0YSIsImdldFpvb21TY2FsZSIsInJvdGF0ZVVwIiwicGFuTGVmdCIsImRpc3RhbmNlIiwib2JqZWN0TWF0cml4Iiwic2V0RnJvbU1hdHJpeENvbHVtbiIsIm11bHRpcGx5U2NhbGFyIiwicGFuVXAiLCJwYW4iLCJkZWx0YVgiLCJkZWx0YVkiLCJlbGVtZW50IiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ0YXJnZXREaXN0YW5jZSIsInRhbiIsImZvdiIsImNsaWVudEhlaWdodCIsIm1hdHJpeCIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInJpZ2h0IiwibGVmdCIsImNsaWVudFdpZHRoIiwidG9wIiwiYm90dG9tIiwid2FybiIsImRvbGx5SW4iLCJkb2xseVNjYWxlIiwiZG9sbHlPdXQiLCJoYW5kbGVNb3VzZURvd25Sb3RhdGUiLCJjbGllbnRYIiwiY2xpZW50WSIsImhhbmRsZU1vdXNlRG93bkRvbGx5IiwiaGFuZGxlTW91c2VEb3duUGFuIiwiaGFuZGxlTW91c2VNb3ZlUm90YXRlIiwic3ViVmVjdG9ycyIsImhhbmRsZU1vdXNlTW92ZURvbGx5IiwiaGFuZGxlTW91c2VNb3ZlUGFuIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZU1vdXNlV2hlZWwiLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlVG91Y2hTdGFydFJvdGF0ZSIsInRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiaGFuZGxlVG91Y2hTdGFydERvbGx5IiwiZHgiLCJkeSIsImhhbmRsZVRvdWNoU3RhcnRQYW4iLCJoYW5kbGVUb3VjaE1vdmVSb3RhdGUiLCJoYW5kbGVUb3VjaE1vdmVEb2xseSIsImhhbmRsZVRvdWNoTW92ZVBhbiIsImhhbmRsZVRvdWNoRW5kIiwiYnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwiY3JlYXRlIiwiRXZlbnREaXNwYXRjaGVyIiwiY29uc3RydWN0b3IiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiY2VudGVyIiwibm9ab29tIiwibm9Sb3RhdGUiLCJub1BhbiIsIm5vS2V5cyIsInN0YXRpY01vdmluZyIsImR5bmFtaWNEYW1waW5nRmFjdG9yIiwiU2NlbmUwMSIsIkJveCIsImNyZWF0ZVNjZW5lIiwiX2NyZWF0ZVNjZW5lIiwiX3VwZGF0ZSIsIlNjZW5lIiwieiIsIk1lc2giLCJCb3hHZW9tZXRyeSIsIk1lc2hCYXNpY01hdGVyaWFsIiwiU2NlbmUwMiIsInRleHR1cmVCZyIsIlRleHR1cmVCZyIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlQ2FtZXJhIiwiX2NyZWF0ZUNhbWVyYSIsImNyZWF0ZVJlbmRlcmVyIiwiX2NyZWF0ZVJlbmRlcmVyIiwiVXBkYXRlIiwiX1VwZGF0ZSIsImxvYWRUZXh0dXJlIiwiX2xvYWRUZXh0dXJlIiwicGxhbmUiLCJhbHBoYSIsInN0ZW5jaWwiLCJkZXB0aCIsInByZW11bHRpcGxpZWRBbHBoYSIsInNldENsZWFyQ29sb3IiLCJtZXNoIiwibWF0ZXJpYWwiLCJ1bmlmb3JtcyIsInJlc29sdXRpb24iLCJQbGFuZSIsInRleHR1cmUiLCJjcmVhdGVNZXNoIiwiX2NyZWF0ZU1lc2giLCJfcmVuZGVyIiwicmVzaXplIiwiX3Jlc2l6ZSIsImltYWdlIiwibG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsImxvYWQiLCJtYWdGaWx0ZXIiLCJOZWFyZXN0RmlsdGVyIiwibWluRmlsdGVyIiwiaW1hZ2VSZXNvbHV0aW9uIiwiUGxhbmVCdWZmZXJHZW9tZXRyeSIsIlJhd1NoYWRlck1hdGVyaWFsIiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJ0aW1lIiwic3RvcCIsImludGVydmFsIiwicHJldl9udW0iLCJuZXh0X251bSIsInRleFByZXYiLCJ0ZXh0dXJlcyIsInRleE5leHQiLCJDYW52YXMiLCJ1X3RpbWUiLCJ1X3Jlc29sdXRpb24iLCJ1X21vdXNlIiwiY3ViZSIsImNyZWF0ZU9iamVjdCIsIl9jcmVhdGVPYmplY3QiLCJvcmJpdENvbnRyb2xzIiwiX29yYml0Q29udHJvbHMiLCJwbGFuZU9iamVjdCIsIl9wbGFuZU9iamVjdCIsImN1YmVHZW9tZXRyeSIsImN1YmVNYXRlcmlhbCIsImNvbG9yIiwid2lyZWZyYW1lIiwiU2hhZGVyTWF0ZXJpYWwiLCJjbG9jayIsIkNsb2NrIiwiZ2V0RGVsdGEiLCJjb250cm9scyIsImRlbHRhIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDOUJBOzs7O0FBQ0E7Ozs7OztBQVRBOzs7Ozs7OztBQVdBLEVBQUMsWUFBSTs7QUFFSDtBQUNBLE9BQUlBLE9BQU9DLEVBQVAsS0FBWUMsU0FBaEIsRUFBMkJGLE9BQU9DLEVBQVAsR0FBWSxFQUFaO0FBQzNCRCxVQUFPQyxFQUFQLENBQVVFLEVB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QSxXQUFJaU8sUUFBUSxJQUFJOVEsTUFBTStRLEtBQVYsRUFBWjs7QUFFQSxXQUFJRyxRQUFRSixNQUFNRSxRQUFOLEVBQVo7QUFDQSxZQUFLQyxRQUFMLENBQWM1UCxNQUFkLENBQXFCNlAsS0FBckI7QUFDQzs7O2lDQUVVOztBQUVUam1CLFNBQUViLE1BQUYsRUFBVWUsRUFBVixDQUFhLE1BQWIsRUFBcUIsS0FBS0csTUFBTCxDQUFZRCxJQUFaLENBQWlCLElBQWpCLENBQXJCO0FBRUQ7Ozs7OzttQkFyTWtCeWtCLE07Ozs7OztBQ2RyQixnRUFBK0QsaUJBQWlCLDBDQUEwQyxHQUFHLEc7Ozs7OztBQ0E3SCxnRUFBK0QsdUJBQXVCLGlCQUFpQixnREFBZ0QsMkNBQTJDLEdBQUcsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDg4MmQ5OWU0NWI0MjE3ZDQ1MTEiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBUb3BcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IENvbW1vbiBmcm9tICcuL3BhZ2UvQ29tbW9uJztcbmltcG9ydCBNYWluIGZyb20gJy4vcGFnZS9NYWluJztcblxuKCgpPT57XG5cbiAgLy8gZ2xvYmFs44Kq44OW44K444Kn44Kv44OIXG4gIGlmICh3aW5kb3cuZ2I9PT11bmRlZmluZWQpIHdpbmRvdy5nYiA9IHt9O1xuICB3aW5kb3cuZ2IuaW4gPSB7fTsgLy9pbnN0YW5jZVxuXG4gIGdiLmluLmNvbW1vbiA9IG5ldyBDb21tb24oKTtcbiAgZ2IuaW4ubWFpbiA9IG5ldyBNYWluKCk7XG5cbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBDb21tb25cbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IENvbmYgZnJvbSAnLi4vQ29yZS9Db25mJztcbmltcG9ydCBVdGlsIGZyb20gJy4uL215bGlicy9VdGlsJztcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy9VdGlscyc7XG5pbXBvcnQgRnVuYyBmcm9tICcuLi9teWxpYnMvRnVuYyc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbW9uIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuXHRzZXR1cCgpIHtcblxuXHRcdC8qKlxuICAgICAqIEB0eXBlIHtDb25mfSA6IOWIneacn+WApOOBruioreWumuODu+ODh+ODvOOCv+OBrumFjee9rlxuXHRcdCAqIEB0eXBlIHtVdGlsfSA6IFV0aWzplqLmlbDjga7liJ3mnJ/ljJZcblx0XHQgKiBAdHlwZSB7RnVuY30gOiDjgqTjg5njg7Pjg4jjg57jg43jg7zjgrjjg6Pjg7zjga7oqK3nva5cblx0XHQgKi9cbiAgICBnYi5pbi5jb25mID0gbmV3IENvbmYoKTtcbiAgICBnYi5pbi51ID0gbmV3IFV0aWwoKTtcbiAgICBnYi5pbi5mID0gbmV3IEZ1bmMoKTtcblxuICAgIGdiLmluLnV0ID0gbmV3IFV0aWxzKCk7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cblxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3BhZ2UvQ29tbW9uLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29uZlxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG4vLyBpbXBvcnQgU291bmREYXRhIGZyb20gJy4vRGF0YS9Tb3VuZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmYge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOacrOeVquODleODqeOCsFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICBcbiAgICB0aGlzLlJFTEVBU0UgPSB0cnVlO1xuICAgIC8vIHRoaXMuUkVMRUFTRSA9IGZhbHNlO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODleODqeOCsOmWoumAo1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuRkxHID0ge1xuICAgICAgTE9HOnRydWUsICAvLyDjg63jgrDlh7rliptcbiAgICAgIFBBUkFNOnRydWUsIC8vIOODkeODqeODoeODvOOCv+ODgeOCp+ODg+OCr1xuICAgICAgU1RBVFM6dHJ1ZSAgLy8gU3RhdHPooajnpLpcbiAgICB9O1xuICAgIGlmICghdGhpcy5SRUxFQVNFKSB7XG4gICAgICB0aGlzLkZMRyA9IHtcbiAgICAgICAgTE9HOmZhbHNlLFxuICAgICAgICBQQVJBTTpmYWxzZSxcbiAgICAgICAgU1RBVFM6ZmFsc2UgXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDln7rmnKwgd2lkdGggaGVpZ2h0XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5kZWZXID0gMTMwMDtcbiAgICB0aGlzLmRlZkggPSA4NTA7XG5cbiAgICB0aGlzLlcgPSAxMjAwO1xuICAgIHRoaXMuSCA9IDc1MDtcblxuICAgIHRoaXMuc3BXID0gMzc1O1xuICAgIHRoaXMuc3BIID0gNjY3O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOODluODrOOCpOOCr+ODneOCpOODs+ODiFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuYnAgPSA3Njg7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgbW9kZVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMubW9kZSA9IG51bGw7XG4gICAgdGhpcy5rZXlzID0gW1xuICAgICAge1xuICAgICAgICAgICdrZXknOiAnbW92aWUnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnbW9ybmluZycsJ2FmdGVybm9vbicsJ25pZ2h0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgICdrZXknOiAnZGF0YScsXG4gICAgICAgICAgJ3ZhbHVlJzogWydkYXRhMDEnLCdkYXRhMDInLCdkYXRhMDMnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdwcm9kdWN0JyxcbiAgICAgICAgICAndmFsdWUnOiBbJzAxJ10sXG4gICAgICB9LFxuICAgIF1cbiAgICB0aGlzLnN3aXRjaE1vZGUoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBzb3VuZCBkYXRhXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gdGhpcy5zb3VuZERhdGEgPSBuZXcgU291bmREYXRhKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgc2VjMDIgYmcgSW1nIE51bVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuc2VjMDJJbWdOdW0gPSAzOTY7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgeW91dHViZSBJRFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMueW91dHViZUlEMDEgPSAneFcyb05wTnJLZDAnO1xuICAgIHRoaXMueW91dHViZUlEMDIgPSAndDJXZVJSZEFGZUknO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHdlYiBmb250IGxvYWRlZFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMud2ViRm9udExvYWRlZCA9IGZhbHNlO1xuXG4gIH1cblxuXG4gIHN3aXRjaE1vZGUoKXtcblxuICAgIHZhciBpLCBrZXksIGxlbiwgcGFyYW0sIHJlZiwgcmVmMSwgdmFsdWU7XG5cbiAgICByZWYgPSBsb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKS5zcGxpdCgnJicpO1xuXG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBwYXJhbSA9IHJlZltpXTtcbiAgICAgIHJlZjEgPSBwYXJhbS5zcGxpdCgnPScpLCBrZXkgPSByZWYxWzBdLCB2YWx1ZSA9IHJlZjFbMV07XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5rZXlzLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgdmFyIG9iaiA9IHRoaXMua2V5c1tqXTtcblxuICAgICAgICAvLyDjg5Hjg6njg6Hjg7zjgr/jgYzjgq3jg7zjgajkuIDnt5LjgaDjgaPjgZ/jgolcbiAgICAgICAgaWYgKG9iai5rZXkgPT09IGtleSkge1xuXG4gICAgICAgICAgLy8g5ZCE5YCk44Go5q+U6LyDXG4gICAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBvYmoudmFsdWUubGVuZ3RoOyBrKyspIHtcblxuICAgICAgICAgICAgdmFyIHZhbCA9IG9iai52YWx1ZVtrXTtcblxuICAgICAgICAgICAgLy8g44Kt44O844KSdGhpcy5rZXlz44Gua2V544Gr44CBdmFsdWXjgpLmr5TovIPjgZfjgablkIzlgKTjgaDjgaPjgZ/jgoLjga7jgatcbiAgICAgICAgICAgIGlmICh2YWwgPT09IHZhbHVlKSB0aGlzW29iai5rZXldID0gdmFsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfTtcblxuXG4gICAgICAgIH07XG5cbiAgICAgICAgXG4gICAgICB9O1xuXG4gICAgfVxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvQ29yZS9Db25mLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6IOS+v+WIqemWouaVsOOCr+ODqeOCuVxuICogUHJvamVjdDpcbiAqIEZpbGU6IFV0aWxcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmlzU2V0U1BTaXplID0gZmFsc2U7XG5cbiAgICB0aGlzLnN0YXJ0VGltZSA9IG51bGw7XG4gICAgdGhpcy5lbGFwc2VkVGltZSA9IG51bGw7XG4gICAgdGhpcy5ub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICogTWF0aFxuICAgKi9cblxuXG4gIC8qKlxuICAgKiDjg6njg7Pjg4Djg6DjgarlgKTjgpLov5TjgZlcbiAgICogQHBhcmFtIG1pbiA6IOacgOWwj+WApChpbnQpXG4gICAqIEBwYXJhbSBtYXggOiDmnIDlpKflgKQoaW50KVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSA6IG1pbuOBi+OCiW1heOOBvuOBp+OBruODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gICAqL1xuICByYW5kb20obWluLCBtYXgpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogKChtYXggKyAxKSAtIG1pbikgKyBtaW4pKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODqeODs+ODgOODoOOBquaVtOaVsOOCkjLjgaTjga7nr4Tlm7LjgYvjgonlj5blvpdcbiAgICogQHBhcmFtIG1pbjEgOiDmnIDlsI/lgKQxKGludClcbiAgICogQHBhcmFtIG1heDEgOiDmnIDlpKflgKQxKGludClcbiAgICogQHBhcmFtIG1pbjIgOiDmnIDlsI/lgKQyKGludClcbiAgICogQHBhcmFtIG1heDIgOiDmnIDlpKflgKQyKGludClcbiAgICogQHJldHVybnMge251bWJlcn0gOiBtaW7jgYvjgoltYXjjgb7jgafjga7jg6njg7Pjg4Djg6DjgarmlbTmlbAoaW50KVxuICAgKi9cbiAgcmFuZG9tMihtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4gICAgXG4gICAgaWYgKHRoaXMuaGl0KDIpKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5kb20obWluMSwgbWF4MSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmRvbShtaW4yLCBtYXgyKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiAxL0ByYW5nZeOBrueiuueOh+OBp3RydWXjgpLlj5blvpdcbiAgICogQHBhcmFtIHJhbmdlIDog5q+N5pWwKGludClcbiAgICogQHJldHVybnMge2Jvb2xlYW59IDogdHJ1ZSBvciBmYWxzZShib29sZWFuKVxuICAgKi9cbiAgaGl0KHJhbmdlKSB7XG5cbiAgICByZXR1cm4gdGhpcy5yYW5kb20oMCwgcmFuZ2UgLSAxKSA9PT0gMDtcblxuICB9XG4gIFxuICAvLyAw44GL44KJ56+E5Zuy5YaF44Gn44Op44Oz44OA44Og44Gq5pW05pWw44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEB2YWwgOiDnr4Tlm7IoaW50KVxuICAvLyByZXR1cm4gOiDjg6njg7Pjg4Djg6DjgarmlbTmlbAoaW50KVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByYW5nZSh2YWwpIHtcblxuICAgIHJldHVybiB0aGlzLnJhbmRvbSgtdmFsLCB2YWwpO1xuXG4gIH1cbiAgXG4gIC8vIOWApOOCkuODnuODg+ODlOODs+OCsFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAbnVtIDog44Oe44OD44OU44Oz44Kw44GZ44KL5YCkKE51bWJlcilcbiAgLy8gQHJlc01pbiA6IOe1kOaenOOBqOOBquOCi+WApOOBruacgOWwj+WApChOdW1iZXIpXG4gIC8vIEByZXNNYXggOiDntZDmnpzjgajjgarjgovlgKTjga7mnIDlpKflgKQoTnVtYmVyKVxuICAvLyBAYmFzZU1pbiA6IOWFg+OBqOOBquOCi+WApOOBruacgOWwj+WApChOdW1iZXIpXG4gIC8vIEBiYXNlTWF4IDog5YWD44Go44Gq44KL5YCk44Gu5pyA5aSn5YCkKE51bWJlcilcbiAgLy8gcmV0dXJuIDog44Oe44OD44OU44Oz44Kw44GV44KM44Gf5YCkKE51bWJlcilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbWFwKG51bSwgcmVzTWluLCByZXNNYXgsIGJhc2VNaW4sIGJhc2VNYXgpIHtcblxuICAgIHZhciBwO1xuICAgIGlmIChudW0gPCBiYXNlTWluKSB7XG4gICAgICByZXR1cm4gcmVzTWluO1xuICAgIH1cbiAgICBpZiAobnVtID4gYmFzZU1heCkge1xuICAgICAgcmV0dXJuIHJlc01heDtcbiAgICB9XG4gICAgcCA9IChyZXNNYXggLSByZXNNaW4pIC8gKGJhc2VNYXggLSBiYXNlTWluKTtcblxuICAgIHJldHVybiAoKG51bSAtIGJhc2VNaW4pICogcCkgKyByZXNNaW47XG5cbiAgfSAgICBcbiAgXG4gIC8vIOaVsOWApOOBq+Wwj+aVsOeCueesrEBu5L2N44G+44Gn44KS44Gk44GR44Gf5paH5a2X5YiX44KS6L+U44GZXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBudW0gOiDlgKQoTnVtYmVyKVxuICAvLyBAbiA6IOWwj+aVsOeCueOBruS9jShpbnQpXG4gIC8vIHJldHVybiA6IOWkieaPm+OBleOCjOOBn+WApChTdHJpbmcpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRlY2ltYWwobnVtLCBuKSB7XG4gICAgdmFyIGksIHBvcztcbiAgICBudW0gPSBTdHJpbmcobnVtKTtcbiAgICBwb3MgPSBudW0uaW5kZXhPZihcIi5cIik7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIHJldHVybiBudW0uc3BsaXQoXCIuXCIpWzBdO1xuICAgIH1cbiAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgbnVtICs9IFwiLlwiO1xuICAgICAgaSA9IDA7XG4gICAgICB3aGlsZSAoaSA8IG4pIHtcbiAgICAgICAgbnVtICs9IFwiMFwiO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVtO1xuICAgIH1cbiAgICBudW0gPSBudW0uc3Vic3RyKDAsIHBvcykgKyBudW0uc3Vic3RyKHBvcywgbiArIDEpO1xuICAgIHJldHVybiBudW07XG4gIH1cblxuICBjbGFtcChudW1lcmF0b3IsZGVub21pbmF0b3IsdmFsKSB7XG5cbiAgICByZXR1cm4gdmFsICogKG51bWVyYXRvciAvIGRlbm9taW5hdG9yKTtcblxuICB9XG5cblx0LyoqXG4gICAqIOODqeOCuOOCouODs+OCkuinkuW6puOBq+WkieaPm1xuXHQgKiBAcGFyYW0gcmFkaWFuc1xuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cbiAgZGVncmVlKHJhZGlhbnMpIHtcblxuICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcblxuICB9XG5cbiAgLy8gdG8gcmFkaWFuc1xuICByYWRpYW4oYW5nbGUpIHsgXG5cbiAgICByZXR1cm4gYW5nbGUgKiBNYXRoLlBJIC8gMTgwOyAvLzHluqbkvZXjg6njgrjjgqLjg7PjgYtcblxuICB9XG5cbiAgZGlzdChwMSwgcDIpIHtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3cocDIueCAtIHAxLngsIDIpICsgTWF0aC5wb3cocDIueSAtIHAxLnksIDIpKTtcblxuICB9XG5cbiAgYXNjZW5kKGFycikge1xuXG4gICAgYXJyLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgIGlmKCBhID4gYiApIHJldHVybiAtMTtcbiAgICAgIGlmKCBhIDwgYiApIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gICAgLy8gdmFyIGEgPSBbNSwzLDksMSwxMF1cbiAgICAvLyDntZDmnpw6MTAsOSw1LDMsMVxuXG4gIH1cblxuICBkZXNjZW5kKGFycikge1xuXG4gICAgYXJyLnNvcnQoZnVuY3Rpb24oYSxiKXtcbiAgICAgIGlmKCBhIDwgYiApIHJldHVybiAtMTtcbiAgICAgIGlmKCBhID4gYiApIHJldHVybiAxO1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG5cbiAgICAvLyB2YXIgYSA9IFs1LDMsOSwxLDEwXVxuICAgIC8vIOe1kOaenDoxLDMsNSw5LDEwXG5cbiAgfVxuXG4gIC8vIG1hcCh2YWx1ZSwgbWluMDEsIG1heDAxLCBtaW4wMiwgbWF4MDIpIHtcblxuICAvLyAgIHZhciBkaXMwMSA9IG1heDAxIC0gbWluMDE7XG4gIC8vICAgdmFyIGRpczAyID0gbWF4MDIgLSBtaW4wMlxuXG4gIC8vICAgdmFyIHJhdGUgPSBkaXMwMiAvIGRpczAxO1xuXG4gIC8vICAgdmFsdWUgPSB2YWx1ZSAqIHJhdGU7XG5cbiAgLy8gICByZXR1cm4gdmFsdWU7XG4gIC8vIH1cblxuICBjb25zdHJhaW4odmFsdWUsIG1pbiwgbWF4KSB7XG5cbiAgICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heCh2YWx1ZSwgbWluKSk7XG5cbiAgICAvLyBpZiAodmFsdWUgPD0gbG93KSB2YWx1ZSA9IGxvdztcbiAgICAvLyBpZiAodmFsdWUgPj0gaGlnaCkgdmFsdWUgPSBoaWdoOyAgICAgXG4gICAgLy8gcmV0dXJuIHZhbHVlO1xuXG4gIH1cblxuICAvLyDjg6bjg4vjg7zjgq9JROOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICB1bmlxdWUoKSB7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgfVxuICBcbiAgLy8gKipqcXVhcnnkvb/nlKhcbiAgLy8g44Oc44K/44Oz44Oi44O844OJ5aSJ5pu0XG4gIC8vIHRydWXjgarjgonjgqvjg7zjgr3jg6vjgYzjg53jgqTjg7Pjgr/jg7zjga7lvaLjgatcbiAgLy8gZmFsc2Xjgarjgonjg4fjg5Xjgqnjg6vjg4jjga7jgqvjg7zjgr3jg6vjgatcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQGZsZyA6IOmBqeeUqOOBmeOCi+OBi+OBqeOBhuOBiyhib29sZWFuKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBidXR0b25Nb2RlKGZsZykge1xuXG4gICAgaWYgKGZsZykge1xuICAgICAgcmV0dXJuICQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkKFwiYm9keVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJkZWZhdWx0XCIpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBwb3J0cmFpdCAvIGxhbmRzY2FwZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNEaXJlY3Rpb24gKCkge1xuXG4gICAgdmFyIFcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgSCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmIChIID4gVykge1xuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJwb3J0cmFpdFwiKTtcbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibGFuZHNjYXBlXCIpO1xuICAgIH1lbHNle1xuICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJsYW5kc2NhcGVcIik7XG4gICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcInBvcnRyYWl0XCIpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICByZXNwb25zaXZlIOaoquW5heOCkuimi+OCi1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgaXNSZXNwb25zaXZlIChicCkge1xuXG4gICAgaWYgKGJwPT11bmRlZmluZWQpIGJwPTM3NTtcblxuICAgIHZhciBXID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIEggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAoVyA+IGJwKSB7XG4gICAgICB0aGlzLmlzUmVzU1AgPSBmYWxzZTtcbiAgICAgIHRoaXMuaXNSZXNQQyA9IHRydWU7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzUmVzcG9uc2l2ZVNQJyk7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzUmVzcG9uc2l2ZVBDJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNSZXNTUCA9IHRydWU7XG4gICAgICB0aGlzLmlzUmVzUEMgPSBmYWxzZTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNSZXNwb25zaXZlU1AnKTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXNSZXNwb25zaXZlUEMnKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgVVJMXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAqL1xuICBnZXRQYXJhbSgpIHtcblxuICAgIHZhciB1cmwgPSBsb2NhdGlvbi5ocmVmO1xuICAgIHZhciBwYXJhbSA9IHVybC5zcGxpdCgnPycpWzFdO1xuICAgIGlmIChwYXJhbT09dW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIHZhciBwYXJhbUl0ZW1zID0gcGFyYW0uc3BsaXQoJyYnKTtcbiAgICB2YXIgbGlzdCA9IHt9O1xuICBcbiAgICBmb3IoIHZhciBpID0gMDsgaTxwYXJhbUl0ZW1zLmxlbmd0aDsgaSsrICl7XG5cbiAgICAgICAgcGFyYW1JdGVtID0gcGFyYW1JdGVtc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICBsaXN0W3BhcmFtSXRlbVswXV0gPSBwYXJhbUl0ZW1bMV07XG5cbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODj+ODg+OCt+ODpeWPluW+lyA6IGxvY2F0aW9uLmhhc2jjga4j44KS5YmK6Zmk44GX44Gf44KE44GkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBoYXNoKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhhc2gucmVwbGFjZShcIiNcIiwgXCJcIik7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBjb29raWXlj5blvpdcbiAgICogQHBhcmFtIGtleVxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGdldENvb2tpZShrZXkpIHtcblxuICAgIHZhciBhLCBhcnIsIGksIGwsIGxlbjEsIHZhbDtcbiAgICBpZiAoZG9jdW1lbnQuY29va2llID09PSB2b2lkIDAgfHwgZG9jdW1lbnQuY29va2llID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgYXJyID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik7XG4gICAgZm9yIChpID0gbCA9IDAsIGxlbjEgPSBhcnIubGVuZ3RoOyBsIDwgbGVuMTsgaSA9ICsrbCkge1xuICAgICAgdmFsID0gYXJyW2ldO1xuICAgICAgYSA9IHZhbC5zcGxpdChcIj1cIik7XG4gICAgICBpZiAoYVswXSA9PT0ga2V5KSB7XG4gICAgICAgIHJldHVybiBhWzFdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcblxuICB9ICAgICAgXG5cbiAgLyoqXG4gICAqIGNvb2tpZeioreWumlxuICAgKiBAcGFyYW0ga2V5IDog44OR44Op44Oh44O844K/5ZCNXG4gICAqIEBwYXJhbSB2YWwgOiDlgKRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIHNldENvb2tpZShrZXksIHZhbCkge1xuXG4gICAgcmV0dXJuIGRvY3VtZW50LmNvb2tpZSA9IGtleSArIFwiPVwiICsgdmFsO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIENvbG9yXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIHJnYuOBi+OCiUhFWOOCq+ODqeODvOWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAciA6IDB+MjU1XG4gIC8vIEBnIDogMH4yNTVcbiAgLy8gQGIgOiAwfjI1NVxuICAvLyByZXR1cm4gOiBleCBcIiNGRkZGRkZcIlxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXRIZXhDb2xvcihyLGcsYikge1xuICAgICAgdmFyIHN0cjtcbiAgICAgIHN0ciA9IChyIDw8IDE2IHwgZyA8PCA4IHwgYikudG9TdHJpbmcoMTYpO1xuICAgICAgcmV0dXJuIFwiI1wiICsgbmV3IEFycmF5KDcgLSBzdHIubGVuZ3RoKS5qb2luKFwiMFwiKSArIHN0cjtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgU3RyaW5nXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGlzQ29udGFpbihzdHIsY29udGFpbikge1xuXG4gICAgLy8gc3Ry44Gu5Lit44GrLGNvbnRhaW7jgYzlrZjlnKjjgZfjgZ/jgolcbiAgICBpZiAoIHN0ci5pbmRleE9mKGNvbnRhaW4pICE9IC0xICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIH1cblxuICAvLyAw5Z+L44KB44GnMuahgeOBq+OBmeOCi+mWouaVsFxuICBhZGQwKHN0cixudW09LTIpe1xuICAgIFxuICAgIHJldHVybiAoIFwiMDAwMDAwMDAwMDAwXCIgKyBzdHIgKS5zdWJzdHIoIG51bSApO1xuXG4gIH1cblxuICBmbG9hdEZvcm1hdCggbnVtYmVyLCBuICkge1xuXG4gICAgdmFyIF9wb3cgPSBNYXRoLnBvdyggMTAgLCBuICkgO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKCBudW1iZXIgKiBfcG93ICkgLyBfcG93IDtcblxuICB9XG4gICAgXG4gIC8vIOWApOauteihqOiomFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcmljZShudW0pIHtcblxuICAgIHJldHVybiBTdHJpbmcobnVtKS5yZXBsYWNlKC8oXFxkKSg/PShcXGRcXGRcXGQpKyg/IVxcZCkpL2csICckMSwnKTtcblxuICB9XG5cbiAgLy8g5paH5a2X5YiX44KS5Y+N6LuiXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBzdHIgOiDmloflrZfliJcoU3RyaW5nKVxuICAvLyByZXR1cm4gOiDmloflrZfliJcoU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzdHJSZXZlcnNlKHN0cikge1xuXG4gICAgdmFyIGksIGxlbiwgcmVzO1xuICAgIHJlcyA9IFwiXCI7XG4gICAgbGVuID0gc3RyLmxlbmd0aDtcbiAgICBpID0gMTtcbiAgICB3aGlsZSAoaSA8PSBsZW4pIHtcbiAgICAgIHJlcyArPSBzdHIuc3Vic3RyKC1pLCAxKTtcbiAgICAgIGkrKztcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcblxuICB9XG4gIFxuICAvLyDmloflrZfliJfjga7lhajnva7mj5tcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHZhbCAgOiDmloflrZfliJdcbiAgLy8gQG9lZyAgOiDnva7mj5vliY3jga7mloflrZfliJdcbiAgLy8gQGRlc3QgOiDnva7mj5vlvozjga7mloflrZfliJdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmVwbGFjZUFsbCh2YWwsIG9yZywgZGVzdCkge1xuXG4gICAgcmV0dXJuIHZhbC5zcGxpdChvcmcpLmpvaW4oZGVzdCk7XG5cbiAgfSAgICBcbiAgXG4gIHN0clJlcGxhY2Uoc3RyLCBiZWZvcmUsIGFmdGVyKSB7XG5cbiAgICB2YXIgciA9IG5ldyBSZWdFeHAoIGJlZm9yZSwgJ2cnKTtcblxuICAgIHJldHVybiBzdHIucmVwbGFjZSggciAsIGFmdGVyICk7XG5cbiAgfSAgICBcbiAgXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRGF0ZVxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBnZXROb3coKSB7XG5cbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgfVxuXG4gIHN0YXJ0KCkge1xuXG4gICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLm5vdy5nZXRUaW1lKCk7XG5cbiAgfVxuXG4gIGVsYXBzZWQoKSB7XG5cbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gdGhpcy5ub3cuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWU7XG5cbiAgfVxuXG4gIG0oKSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vciggdGhpcy5lbGFwc2VkVGltZSArIDEwMCAvIDYwICk7XG5cbiAgfVxuXG4gIHMoKSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmVsYXBzZWRUaW1lIC8gMTAwMCk7XG5cbiAgfVxuXG4gIG1zKCkge1xuXG4gICAgcmV0dXJuIHRoaXMuZWxhcHNlZFRpbWU7XG4gICAgXG4gIH1cblxuICB0aW1lKCkge1xuXG4gICAgdGhpcy5nZXROb3coKTtcblxuICAgIHRoaXMuaG91ciA9IHRoaXMubm93LmdldEhvdXJzKCk7ICAgICAgICAgIC8vIOaZglxuICAgIHRoaXMubWludXRlID0gdGhpcy5ub3cuZ2V0TWludXRlcygpOyAgICAgIC8vIOWIhlxuICAgIHRoaXMuc2Vjb25kID0gdGhpcy5ub3cuZ2V0U2Vjb25kcygpO1xuICAgIHRoaXMubWlsbFNlY29uZCA9IHRoaXMubm93LmdldE1pbGxpc2Vjb25kcygpO1xuXG4gIH1cblxuICBkYXRlKCkge1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldERhdGUoKTtcblxuICB9XG5cbiAgbW9udGhzKCkge1xuXG4gICAgdmFyIG1vbnRoZGF5cyA9IG5ldyBBcnJheSgzMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxKTtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXRNb250aCgpICsgMTtcblxuICB9XG5cbiAgeWVhcigpIHtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXRGdWxsWWVhcigpO1xuXG4gIH1cblxuICBkYXkoKSB7XG5cbiAgICAvLyDmm5zml6UgKOaXpeacrOiqnilcbiAgICB2YXIgd2Vla0RheUpQID0gW1wi5pelXCIsXCLmnIhcIixcIueBq1wiLFwi5rC0XCIsXCLmnKhcIixcIumHkVwiLFwi5ZyfXCJdIDtcbiAgICB2YXIgd0RKID0gd2Vla0RheUpQW3RoaXMubm93LmdldERheSgpXSA7XG5cbiAgICAvLyDmm5zml6UgKOiLseiqnilcbiAgICB2YXIgd2Vla0RheUVOID0gW1wiU3VuXCIsXCJNb25cIixcIlR1ZVwiLFwiV2VkXCIsXCJUaHVcIixcIkZyaVwiLFwiU2F0XCJdIDtcbiAgICB2YXIgd0RFID0gd2Vla0RheUVOW3RoaXMubm93LmdldERheSgpXSA7XG5cbiAgfVxuICBcbiAgLy8g5pWw5pel5b6M44GuRGF0ZeOCquODluOCuOOCp+OCr+ODiOWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBhZnRlckRheShkYXRlLCBudW0pIHtcblxuICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIE51bWJlcihudW0pICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgRGF0YSB0eXBlIGNoZWNrXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGlzT2JqZWN0KHZhbHVlLCBpZ25vcmVBcnJheSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGw7XG4gIH1cblxuICBpc051bWJlcih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG4gIH1cblxuICBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gIH1cblxuICBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICB9XG5cbiAgaXNBcnJheSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH1cblxuICBpc051bGwodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbiAgfVxuXG4gIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgb3RoZXJcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldEltZ1NQU2l6ZSAoJHRhcmdldCl7XG5cbiAgICAvLyByZXNwb25zaXZlIHNw44Gu44Go44GN5Yem55CGXG4gICAgaWYgKCF0aGlzLmlzUmVzU1ApIHJldHVybjtcbiAgICAvLyDkuIDluqbjgaDjgZHlh6bnkIZcbiAgICAvLyBpZiAodGhpcy5pc1NldFNQU2l6ZSkgcmV0dXJuO1xuICAgIC8vIHRoaXMuaXNTZXRTUFNpemUgPSB0cnVlO1xuXG4gICAgdmFyICRpbWcgPSAkdGFyZ2V0LFxuICAgICAgICBsZW4gPSAkaW1nLmxlbmd0aDtcblxuICAgICRpbWcuZWFjaChmdW5jdGlvbihpKSB7XG5cbiAgICAgICAgdmFyIHcgPSBNYXRoLmZsb29yKCQodGhpcykud2lkdGgoKSAvIDIpLFxuICAgICAgICAgICAgaCA9IE1hdGguZmxvb3IoJCh0aGlzKS5oZWlnaHQoKSAvIDIpO1xuXG4gICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAnd2lkdGgnOiB3LFxuICAgICAgICAgICAgJ2hlaWdodCc6IGgsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChsZW4gPT0gaSArIDEpICQod2luZG93KS50cmlnZ2VyKCdzZXRTcFppZUVuZCcpO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAg44K544Oe44Ob5pON5L2c54Sh5Yq5XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRQcmV2ZW50KCkge1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgJCh3aW5kb3cpLm9uKCd0b3VjaG1vdmUubm9Db250cm9sJywgZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO30pO1xuXG4gIH1cblxuICByZW1vdmVQcmV2ZW50KCkge1xuXG4gICAgJCh3aW5kb3cpLm9mZigndG91Y2htb3ZlLm5vQ29udHJvbCcpO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gIGhvc3QscHJvdGNvbFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJvdG9jb2woKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucHJvdG9jb2w7XG5cbiAgfVxuICAgIFxuICBob3N0KCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLmhvc3RuYW1lO1xuICAgIC8vIHJldHVybiBsb2NhdGlvbi5ob3N0XG5cbiAgfVxuXG4gIHBvcnQoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucG9ydDtcblxuICB9XG4gICAgICAgIFxuICBwYXRoKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdChlKSB7XG5cbiAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgaWYgKGUucHJldmVudERlZmF1bHQpXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG5cbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyhlKSB7XG5cbiAgICBpZiAoa2V5c1tlLmtleUNvZGVdKSB7XG4gICAgICAgIHByZXZlbnREZWZhdWx0KGUpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gIH1cblxuICBkaXNhYmxlU2Nyb2xsKCkge1xuXG4gICAgaWYgKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSAvLyBvbGRlciBGRlxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLnByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93Lm9ud2hlZWwgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBtb2Rlcm4gc3RhbmRhcmRcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gb2xkZXIgYnJvd3NlcnMsIElFXG4gICAgd2luZG93Lm9udG91Y2htb3ZlICA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG1vYmlsZVxuICAgIGRvY3VtZW50Lm9ua2V5ZG93biAgPSB0aGlzLnByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cztcblxuICB9XG5cbiAgZW5hYmxlU2Nyb2xsKCkge1xuXG4gICAgaWYgKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKVxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCB0aGlzLnByZXZlbnREZWZhdWx0LCBmYWxzZSk7XG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IG51bGw7IFxuICAgIHdpbmRvdy5vbndoZWVsID0gbnVsbDsgXG4gICAgd2luZG93Lm9udG91Y2htb3ZlID0gbnVsbDtcbiAgICBkb2N1bWVudC5vbmtleWRvd24gPSBudWxsO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL1V0aWwuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBVdGlsc1xuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuLyoqXG4gKiBhbmltYXRpb25cbiAqL1xuaW1wb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tICcuL2FuaW1hdGlvbi9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUnO1xuaW1wb3J0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGZyb20gJy4vYW5pbWF0aW9uL2NhbmNlbEFuaW1hdGlvbkZyYW1lJztcblxuaW1wb3J0IEFycmF5IGZyb20gJy4vYXJyYXkvQXJyYXknO1xuaW1wb3J0IGNoZWNrQ2xpZW50IGZyb20gXCIuL3VhL2NoZWNrQ2xpZW50XCI7XG5cbmltcG9ydCBwcmVsb2FkSW1nIGZyb20gJy4vaW1nL3ByZWxvYWRJbWcnO1xuaW1wb3J0IHNldFVwQnRuVHdpdHRlciBmcm9tICcuL3Nucy9zZXRVcEJ0blR3aXR0ZXInO1xuaW1wb3J0IHNldFVwQnRuTGluZSBmcm9tICcuL3Nucy9zZXRVcEJ0bkxpbmUnO1xuaW1wb3J0IHNldFVwQnRuRmFjZUJvb2sgZnJvbSAnLi9zbnMvc2V0VXBCdG5GYWNlQm9vayc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXRpbHMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5fc2V0dXAoKTtcbiAgICBcbiAgfVxuXG4gIF9zZXR1cCgpIHtcbiAgICAvLyB3aW5kb3cuY29uc29sZS5sb2coJ1V0aWxzX1NldHVwISEnKTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBhcnJheVxuICAgICAqL1xuICAgIHRoaXMuQXJyYXkgPSBuZXcgQXJyYXkoKTtcblxuXG4gICAgLyoqXG4gICAgICogdWFcbiAgICAgKi9cbiAgICB0aGlzLmNoZWNrQ2xpZW50ID0gbmV3IGNoZWNrQ2xpZW50KCk7XG5cblxuICAgIC8qKlxuICAgICAqIGltZ1xuICAgICAqL1xuICAgIC8vIHRoaXMucHJlbG9hZEltZyA9IG5ldyBwcmVsb2FkSW1nKCk7XG5cbiAgICAvKipcbiAgICAgKiBzbnNcbiAgICAgKi9cbiAgICAvLyB0aGlzLnNldFVwQnRuVHdpdHRlciA9IG5ldyBzZXRVcEJ0blR3aXR0ZXI7XG4gICAgLy8gdGhpcy5zZXRVcEJ0bkxpbmUgPSBuZXcgc2V0VXBCdG5MaW5lO1xuICAgIC8vIHRoaXMuc2V0VXBCdG5GYWNlQm9vayA9IG5ldyBzZXRVcEJ0bkZhY2VCb29rO1xuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL1V0aWxzLmpzIiwiLyoqXG4gKiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAqL1xud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9ICgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDMwKTtcbiAgICAgICAgfTtcbiAgfTtcbn0pKHRoaXMpKSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIi8qKlxuICogY2FuY2VsQW5pbWF0aW9uRnJhbWVcbiAqL1xud2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gKChmdW5jdGlvbihfdGhpcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgfTtcbiAgfTtcbn0pKHRoaXMpKSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL2NhbmNlbEFuaW1hdGlvbkZyYW1lLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6IOmFjeWIl+OBruaTjeS9nOezu1xuICogUHJvamVjdDpcbiAqIEZpbGU6IEFycmF5XG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJheSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cblxuICB9XG5cblx0LyoqXG5cdCAqIOmFjeWIl+WGheOBruODqeODs+ODgOODoOOBquWApOOCkuOBsuOBqOOBpOWPluW+l1xuXHQgKiBAcGFyYW0gYXJyIDog6YWN5YiXXG5cdCAqIEByZXR1cm5zIHsqfSA6IOmFjeWIl+WGheOBruWApFxuXHQgKi9cbiAgYXJyUmFuZChhcnIpIHtcblxuICAgIHJldHVybiBhcnJbdGhpcy5yYW5kb20oMCwgYXJyLmxlbmd0aCAtIDEpXTtcblxuICB9XG5cblx0LyoqXG4gICAqIOmFjeWIl+OCkuODqeODs+ODgOODoOOBq+S4puOBueabv+OBiFxuXHQgKiBAcGFyYW0gYXJyIDog6YWN5YiXKEFycmF5KVxuXHQgKiBAcmV0dXJucyB7QXJyYXl9XG5cdCAqL1xuICBzaHVmZmxlKGFycikge1xuXG4gICAgbGV0IEFyciA9IFtdO1xuICAgIEFyciA9IGFyci5zbGljZSgpO1xuICAgIHZhciBpID0gYXJyLmxlbmd0aDtcbiAgICB3aGlsZShpKXtcbiAgICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmkpO1xuICAgICAgdmFyIHQgPSBBcnJbLS1pXTtcbiAgICAgIEFycltpXSA9IEFycltqXTtcbiAgICAgIEFycltqXSA9IHQ7XG4gICAgfVxuICAgIHJldHVybiBBcnI7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hcnJheS9BcnJheS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiBVYeWIpOWIpVxuICogUHJvamVjdDpcbiAqIEZpbGU6IGNoZWNrQ2xpZW50XG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5jb25zdCBwYXJzZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vbGlicy91YS1wYXJzZXIubWluLmpzXCIpO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNoZWNrQ2xpZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMudWEgPSBuZXcgcGFyc2VyKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBJReOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzSUUoKSB7XG4gICAgbGV0IGJyb3dzZXIgPSB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICAgIHJldHVybiBicm93c2VyID09PSAnSUUnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVmb3jjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0ZpcmVmb3goKSB7XG4gICAgbGV0IGJyb3dzZXIgPSB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICAgIHJldHVybiBicm93c2VyID09PSAnRmlyZWZveCcgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQ2hyb21l44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNDaHJvbWUoKSB7XG4gICAgbGV0IGJyb3dzZXIgPSB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICAgIHJldHVybiBicm93c2VyID09PSAnQ2hyb21lJyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTYWZhcmnjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc1NhZmFyaSgpIHtcbiAgICBsZXQgYnJvd3NlciA9IHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gICAgcmV0dXJuIGJyb3dzZXIgPT09ICdTYWZhcmknID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIOODouODkOOCpOODq+OBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGlzTW9iaWxlKCkge1xuICAgIGxldCBkZXZpY2UgPSB0aGlzLnVhLmdldERldmljZSgpLnR5cGU7XG4gICAgcmV0dXJuIGRldmljZSA9PT0gJ21vYmlsZScgPyB0cnVlIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgr/jg5bjg6zjg4Pjg4jjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBpc1RhYmxldCgpIHtcbiAgICBsZXQgZGV2aWNlID0gdGhpcy51YS5nZXREZXZpY2UoKS50eXBlO1xuICAgIHJldHVybiBkZXZpY2UgPT09ICd0YWJsZXQnID8gdHJ1ZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogT1PlkI3jgpLlj5blvpdcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIG9zKCkge1xuICAgIHJldHVybiB0aGlzLnVhLmdldE9TKCkubmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg4fjg5DjgqTjgrnlkI3jgpLlj5blvpdcbiAgICogQHJldHVybnMge3ZlbmRvcnx7SFRDLCBTcHJpbnR9fVxuICAgKi9cbiAgZGV2aWNlX25hbWUoKSB7XG4gICAgbGV0IGRldmljZV9uYW1lID0gdGhpcy51YS5nZXREZXZpY2UoKS52ZW5kb3I7XG4gICAgcmV0dXJuIGRldmljZV9uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIOODluODqeOCpuOCtuWQjeOCkuWPluW+l1xuICAgKi9cbiAgYnJvd3Nlcl9uYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIOODpuODvOOCtuODvOOCqOODvOOCuOOCp+ODs+ODiOaDheWgse+8muWFqOOBpuOCkuWPluW+l1xuICAgKi9cbiAgYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnVhLmdldFVBKCk7XG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvdWEvY2hlY2tDbGllbnQuanMiLCIvKipcbiAqIFVBUGFyc2VyLmpzIHYwLjcuMTJcbiAqIExpZ2h0d2VpZ2h0IEphdmFTY3JpcHQtYmFzZWQgVXNlci1BZ2VudCBzdHJpbmcgcGFyc2VyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZmFpc2FsbWFuL3VhLXBhcnNlci1qc1xuICpcbiAqIENvcHlyaWdodCDCqSAyMDEyLTIwMTYgRmFpc2FsIFNhbG1hbiA8Znl6bG1hbkBnbWFpbC5jb20+XG4gKiBEdWFsIGxpY2Vuc2VkIHVuZGVyIEdQTHYyICYgTUlUXG4gKi8oZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjt2YXIgbj1cIjAuNy4xMlwiLHI9XCJcIixpPVwiP1wiLHM9XCJmdW5jdGlvblwiLG89XCJ1bmRlZmluZWRcIix1PVwib2JqZWN0XCIsYT1cInN0cmluZ1wiLGY9XCJtYWpvclwiLGw9XCJtb2RlbFwiLGM9XCJuYW1lXCIsaD1cInR5cGVcIixwPVwidmVuZG9yXCIsZD1cInZlcnNpb25cIix2PVwiYXJjaGl0ZWN0dXJlXCIsbT1cImNvbnNvbGVcIixnPVwibW9iaWxlXCIseT1cInRhYmxldFwiLGI9XCJzbWFydHR2XCIsdz1cIndlYXJhYmxlXCIsRT1cImVtYmVkZGVkXCIsUz17ZXh0ZW5kOmZ1bmN0aW9uKGUsdCl7dmFyIG49e307Zm9yKHZhciByIGluIGUpdFtyXSYmdFtyXS5sZW5ndGglMj09PTA/bltyXT10W3JdLmNvbmNhdChlW3JdKTpuW3JdPWVbcl07cmV0dXJuIG59LGhhczpmdW5jdGlvbihlLHQpe3JldHVybiB0eXBlb2YgZT09XCJzdHJpbmdcIj90LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihlLnRvTG93ZXJDYXNlKCkpIT09LTE6ITF9LGxvd2VyaXplOmZ1bmN0aW9uKGUpe3JldHVybiBlLnRvTG93ZXJDYXNlKCl9LG1ham9yOmZ1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZT09PWE/ZS5yZXBsYWNlKC9bXlxcZFxcLl0vZyxcIlwiKS5zcGxpdChcIi5cIilbMF06dH0sdHJpbTpmdW5jdGlvbihlKXtyZXR1cm4gZS5yZXBsYWNlKC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxcIlwiKX19LHg9e3JneDpmdW5jdGlvbigpe3ZhciBlLG49MCxyLGksYSxmLGwsYyxoPWFyZ3VtZW50czt3aGlsZShuPGgubGVuZ3RoJiYhbCl7dmFyIHA9aFtuXSxkPWhbbisxXTtpZih0eXBlb2YgZT09PW8pe2U9e307Zm9yKGEgaW4gZClkLmhhc093blByb3BlcnR5KGEpJiYoZj1kW2FdLHR5cGVvZiBmPT09dT9lW2ZbMF1dPXQ6ZVtmXT10KX1yPWk9MDt3aGlsZShyPHAubGVuZ3RoJiYhbCl7bD1wW3IrK10uZXhlYyh0aGlzLmdldFVBKCkpO2lmKCEhbClmb3IoYT0wO2E8ZC5sZW5ndGg7YSsrKWM9bFsrK2ldLGY9ZFthXSx0eXBlb2YgZj09PXUmJmYubGVuZ3RoPjA/Zi5sZW5ndGg9PTI/dHlwZW9mIGZbMV09PXM/ZVtmWzBdXT1mWzFdLmNhbGwodGhpcyxjKTplW2ZbMF1dPWZbMV06Zi5sZW5ndGg9PTM/dHlwZW9mIGZbMV09PT1zJiYoIWZbMV0uZXhlY3x8IWZbMV0udGVzdCk/ZVtmWzBdXT1jP2ZbMV0uY2FsbCh0aGlzLGMsZlsyXSk6dDplW2ZbMF1dPWM/Yy5yZXBsYWNlKGZbMV0sZlsyXSk6dDpmLmxlbmd0aD09NCYmKGVbZlswXV09Yz9mWzNdLmNhbGwodGhpcyxjLnJlcGxhY2UoZlsxXSxmWzJdKSk6dCk6ZVtmXT1jP2M6dH1uKz0yfXJldHVybiBlfSxzdHI6ZnVuY3Rpb24oZSxuKXtmb3IodmFyIHIgaW4gbilpZih0eXBlb2YgbltyXT09PXUmJm5bcl0ubGVuZ3RoPjApe2Zvcih2YXIgcz0wO3M8bltyXS5sZW5ndGg7cysrKWlmKFMuaGFzKG5bcl1bc10sZSkpcmV0dXJuIHI9PT1pP3Q6cn1lbHNlIGlmKFMuaGFzKG5bcl0sZSkpcmV0dXJuIHI9PT1pP3Q6cjtyZXR1cm4gZX19LFQ9e2Jyb3dzZXI6e29sZHNhZmFyaTp7dmVyc2lvbjp7XCIxLjBcIjpcIi84XCIsMS4yOlwiLzFcIiwxLjM6XCIvM1wiLFwiMi4wXCI6XCIvNDEyXCIsXCIyLjAuMlwiOlwiLzQxNlwiLFwiMi4wLjNcIjpcIi80MTdcIixcIjIuMC40XCI6XCIvNDE5XCIsXCI/XCI6XCIvXCJ9fX0sZGV2aWNlOnthbWF6b246e21vZGVsOntcIkZpcmUgUGhvbmVcIjpbXCJTRFwiLFwiS0ZcIl19fSxzcHJpbnQ6e21vZGVsOntcIkV2byBTaGlmdCA0R1wiOlwiNzM3M0tUXCJ9LHZlbmRvcjp7SFRDOlwiQVBBXCIsU3ByaW50OlwiU3ByaW50XCJ9fX0sb3M6e3dpbmRvd3M6e3ZlcnNpb246e01FOlwiNC45MFwiLFwiTlQgMy4xMVwiOlwiTlQzLjUxXCIsXCJOVCA0LjBcIjpcIk5UNC4wXCIsMmUzOlwiTlQgNS4wXCIsWFA6W1wiTlQgNS4xXCIsXCJOVCA1LjJcIl0sVmlzdGE6XCJOVCA2LjBcIiw3OlwiTlQgNi4xXCIsODpcIk5UIDYuMlwiLDguMTpcIk5UIDYuM1wiLDEwOltcIk5UIDYuNFwiLFwiTlQgMTAuMFwiXSxSVDpcIkFSTVwifX19fSxOPXticm93c2VyOltbLyhvcGVyYVxcc21pbmkpXFwvKFtcXHdcXC4tXSspL2ksLyhvcGVyYVxcc1ttb2JpbGV0YWJdKykuK3ZlcnNpb25cXC8oW1xcd1xcLi1dKykvaSwvKG9wZXJhKS4rdmVyc2lvblxcLyhbXFx3XFwuXSspL2ksLyhvcGVyYSlbXFwvXFxzXSsoW1xcd1xcLl0rKS9pXSxbYyxkXSxbLyhvcGlvcylbXFwvXFxzXSsoW1xcd1xcLl0rKS9pXSxbW2MsXCJPcGVyYSBNaW5pXCJdLGRdLFsvXFxzKG9wcilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJPcGVyYVwiXSxkXSxbLyhraW5kbGUpXFwvKFtcXHdcXC5dKykvaSwvKGx1bmFzY2FwZXxtYXh0aG9ufG5ldGZyb250fGphc21pbmV8YmxhemVyKVtcXC9cXHNdPyhbXFx3XFwuXSspKi9pLC8oYXZhbnRcXHN8aWVtb2JpbGV8c2xpbXxiYWlkdSkoPzpicm93c2VyKT9bXFwvXFxzXT8oW1xcd1xcLl0qKS9pLC8oPzptc3xcXCgpKGllKVxccyhbXFx3XFwuXSspL2ksLyhyZWtvbnEpXFwvKFtcXHdcXC5dKykqL2ksLyhjaHJvbWl1bXxmbG9ja3xyb2NrbWVsdHxtaWRvcml8ZXBpcGhhbnl8c2lsa3xza3lmaXJlfG92aWJyb3dzZXJ8Ym9sdHxpcm9ufHZpdmFsZGl8aXJpZGl1bXxwaGFudG9tanMpXFwvKFtcXHdcXC4tXSspL2ldLFtjLGRdLFsvKHRyaWRlbnQpLitydls6XFxzXShbXFx3XFwuXSspLitsaWtlXFxzZ2Vja28vaV0sW1tjLFwiSUVcIl0sZF0sWy8oZWRnZSlcXC8oKFxcZCspP1tcXHdcXC5dKykvaV0sW2MsZF0sWy8oeWFicm93c2VyKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIllhbmRleFwiXSxkXSxbLyhjb21vZG9fZHJhZ29uKVxcLyhbXFx3XFwuXSspL2ldLFtbYywvXy9nLFwiIFwiXSxkXSxbLyhtaWNyb21lc3NlbmdlcilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJXZUNoYXRcIl0sZF0sWy94aWFvbWlcXC9taXVpYnJvd3NlclxcLyhbXFx3XFwuXSspL2ldLFtkLFtjLFwiTUlVSSBCcm93c2VyXCJdXSxbL1xcc3d2XFwpLisoY2hyb21lKVxcLyhbXFx3XFwuXSspL2ldLFtbYywvKC4rKS8sXCIkMSBXZWJWaWV3XCJdLGRdLFsvYW5kcm9pZC4rc2Ftc3VuZ2Jyb3dzZXJcXC8oW1xcd1xcLl0rKS9pLC9hbmRyb2lkLit2ZXJzaW9uXFwvKFtcXHdcXC5dKylcXHMrKD86bW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpKi9pXSxbZCxbYyxcIkFuZHJvaWQgQnJvd3NlclwiXV0sWy8oY2hyb21lfG9tbml3ZWJ8YXJvcmF8W3RpemVub2thXXs1fVxccz9icm93c2VyKVxcL3Y/KFtcXHdcXC5dKykvaSwvKHFxYnJvd3NlcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pXSxbYyxkXSxbLyh1Y1xccz9icm93c2VyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksL3Vjd2ViLisodWNicm93c2VyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksL2p1Yy4rKHVjd2ViKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ldLFtbYyxcIlVDQnJvd3NlclwiXSxkXSxbLyhkb2xmaW4pXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiRG9scGhpblwiXSxkXSxbLygoPzphbmRyb2lkLispY3Jtb3xjcmlvcylcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJDaHJvbWVcIl0sZF0sWy87ZmJhdlxcLyhbXFx3XFwuXSspOy9pXSxbZCxbYyxcIkZhY2Vib29rXCJdXSxbL2Z4aW9zXFwvKFtcXHdcXC4tXSspL2ldLFtkLFtjLFwiRmlyZWZveFwiXV0sWy92ZXJzaW9uXFwvKFtcXHdcXC5dKykuKz9tb2JpbGVcXC9cXHcrXFxzKHNhZmFyaSkvaV0sW2QsW2MsXCJNb2JpbGUgU2FmYXJpXCJdXSxbL3ZlcnNpb25cXC8oW1xcd1xcLl0rKS4rPyhtb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkvaV0sW2QsY10sWy93ZWJraXQuKz8obW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpKFxcL1tcXHdcXC5dKykvaV0sW2MsW2QseC5zdHIsVC5icm93c2VyLm9sZHNhZmFyaS52ZXJzaW9uXV0sWy8oa29ucXVlcm9yKVxcLyhbXFx3XFwuXSspL2ksLyh3ZWJraXR8a2h0bWwpXFwvKFtcXHdcXC5dKykvaV0sW2MsZF0sWy8obmF2aWdhdG9yfG5ldHNjYXBlKVxcLyhbXFx3XFwuLV0rKS9pXSxbW2MsXCJOZXRzY2FwZVwiXSxkXSxbLyhzd2lmdGZveCkvaSwvKGljZWRyYWdvbnxpY2V3ZWFzZWx8Y2FtaW5vfGNoaW1lcmF8ZmVubmVjfG1hZW1vXFxzYnJvd3NlcnxtaW5pbW98Y29ua2Vyb3IpW1xcL1xcc10/KFtcXHdcXC5cXCtdKykvaSwvKGZpcmVmb3h8c2VhbW9ua2V5fGstbWVsZW9ufGljZWNhdHxpY2VhcGV8ZmlyZWJpcmR8cGhvZW5peClcXC8oW1xcd1xcLi1dKykvaSwvKG1vemlsbGEpXFwvKFtcXHdcXC5dKykuK3J2XFw6LitnZWNrb1xcL1xcZCsvaSwvKHBvbGFyaXN8bHlueHxkaWxsb3xpY2FifGRvcmlzfGFtYXlhfHczbXxuZXRzdXJmfHNsZWlwbmlyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ksLyhsaW5rcylcXHNcXCgoW1xcd1xcLl0rKS9pLC8oZ29icm93c2VyKVxcLz8oW1xcd1xcLl0rKSovaSwvKGljZVxccz9icm93c2VyKVxcL3Y/KFtcXHdcXC5fXSspL2ksLyhtb3NhaWMpW1xcL1xcc10oW1xcd1xcLl0rKS9pXSxbYyxkXV0sY3B1OltbLyg/OihhbWR8eCg/Oig/Ojg2fDY0KVtfLV0pP3x3b3d8d2luKTY0KVs7XFwpXS9pXSxbW3YsXCJhbWQ2NFwiXV0sWy8oaWEzMig/PTspKS9pXSxbW3YsUy5sb3dlcml6ZV1dLFsvKCg/OmlbMzQ2XXx4KTg2KVs7XFwpXS9pXSxbW3YsXCJpYTMyXCJdXSxbL3dpbmRvd3NcXHMoY2V8bW9iaWxlKTtcXHNwcGM7L2ldLFtbdixcImFybVwiXV0sWy8oKD86cHBjfHBvd2VycGMpKD86NjQpPykoPzpcXHNtYWN8O3xcXCkpL2ldLFtbdiwvb3dlci8sXCJcIixTLmxvd2VyaXplXV0sWy8oc3VuNFxcdylbO1xcKV0vaV0sW1t2LFwic3BhcmNcIl1dLFsvKCg/OmF2cjMyfGlhNjQoPz07KSl8NjhrKD89XFwpKXxhcm0oPzo2NHwoPz12XFxkKzspKXwoPz1hdG1lbFxccylhdnJ8KD86aXJpeHxtaXBzfHNwYXJjKSg/OjY0KT8oPz07KXxwYS1yaXNjKS9pXSxbW3YsUy5sb3dlcml6ZV1dXSxkZXZpY2U6W1svXFwoKGlwYWR8cGxheWJvb2spO1tcXHdcXHNcXCk7LV0rKHJpbXxhcHBsZSkvaV0sW2wscCxbaCx5XV0sWy9hcHBsZWNvcmVtZWRpYVxcL1tcXHdcXC5dKyBcXCgoaXBhZCkvXSxbbCxbcCxcIkFwcGxlXCJdLFtoLHldXSxbLyhhcHBsZVxcc3swLDF9dHYpL2ldLFtbbCxcIkFwcGxlIFRWXCJdLFtwLFwiQXBwbGVcIl1dLFsvKGFyY2hvcylcXHMoZ2FtZXBhZDI/KS9pLC8oaHApLisodG91Y2hwYWQpL2ksLyhocCkuKyh0YWJsZXQpL2ksLyhraW5kbGUpXFwvKFtcXHdcXC5dKykvaSwvXFxzKG5vb2spW1xcd1xcc10rYnVpbGRcXC8oXFx3KykvaSwvKGRlbGwpXFxzKHN0cmVhW2twclxcc1xcZF0qW1xcZGtvXSkvaV0sW3AsbCxbaCx5XV0sWy8oa2ZbQS16XSspXFxzYnVpbGRcXC9bXFx3XFwuXSsuKnNpbGtcXC8vaV0sW2wsW3AsXCJBbWF6b25cIl0sW2gseV1dLFsvKHNkfGtmKVswMzQ5aGlqb3JzdHV3XStcXHNidWlsZFxcL1tcXHdcXC5dKy4qc2lsa1xcLy9pXSxbW2wseC5zdHIsVC5kZXZpY2UuYW1hem9uLm1vZGVsXSxbcCxcIkFtYXpvblwiXSxbaCxnXV0sWy9cXCgoaXBbaG9uZWR8XFxzXFx3Kl0rKTsuKyhhcHBsZSkvaV0sW2wscCxbaCxnXV0sWy9cXCgoaXBbaG9uZWR8XFxzXFx3Kl0rKTsvaV0sW2wsW3AsXCJBcHBsZVwiXSxbaCxnXV0sWy8oYmxhY2tiZXJyeSlbXFxzLV0/KFxcdyspL2ksLyhibGFja2JlcnJ5fGJlbnF8cGFsbSg/PVxcLSl8c29ueWVyaWNzc29ufGFjZXJ8YXN1c3xkZWxsfGh1YXdlaXxtZWl6dXxtb3Rvcm9sYXxwb2x5dHJvbilbXFxzXy1dPyhbXFx3LV0rKSovaSwvKGhwKVxccyhbXFx3XFxzXStcXHcpL2ksLyhhc3VzKS0/KFxcdyspL2ldLFtwLGwsW2gsZ11dLFsvXFwoYmIxMDtcXHMoXFx3KykvaV0sW2wsW3AsXCJCbGFja0JlcnJ5XCJdLFtoLGddXSxbL2FuZHJvaWQuKyh0cmFuc2ZvW3ByaW1lXFxzXXs0LDEwfVxcc1xcdyt8ZWVlcGN8c2xpZGVyXFxzXFx3K3xuZXh1cyA3fHBhZGZvbmUpL2ldLFtsLFtwLFwiQXN1c1wiXSxbaCx5XV0sWy8oc29ueSlcXHModGFibGV0XFxzW3BzXSlcXHNidWlsZFxcLy9pLC8oc29ueSk/KD86c2dwLispXFxzYnVpbGRcXC8vaV0sW1twLFwiU29ueVwiXSxbbCxcIlhwZXJpYSBUYWJsZXRcIl0sW2gseV1dLFsvKD86c29ueSk/KD86KD86KD86Y3xkKVxcZHs0fSl8KD86c29bLWxdLispKVxcc2J1aWxkXFwvL2ldLFtbcCxcIlNvbnlcIl0sW2wsXCJYcGVyaWEgUGhvbmVcIl0sW2gsZ11dLFsvXFxzKG91eWEpXFxzL2ksLyhuaW50ZW5kbylcXHMoW3dpZHMzdV0rKS9pXSxbcCxsLFtoLG1dXSxbL2FuZHJvaWQuKztcXHMoc2hpZWxkKVxcc2J1aWxkL2ldLFtsLFtwLFwiTnZpZGlhXCJdLFtoLG1dXSxbLyhwbGF5c3RhdGlvblxcc1szNHBvcnRhYmxldmldKykvaV0sW2wsW3AsXCJTb255XCJdLFtoLG1dXSxbLyhzcHJpbnRcXHMoXFx3KykpL2ldLFtbcCx4LnN0cixULmRldmljZS5zcHJpbnQudmVuZG9yXSxbbCx4LnN0cixULmRldmljZS5zcHJpbnQubW9kZWxdLFtoLGddXSxbLyhsZW5vdm8pXFxzPyhTKD86NTAwMHw2MDAwKSsoPzpbLV1bXFx3K10pKS9pXSxbcCxsLFtoLHldXSxbLyhodGMpWztfXFxzLV0rKFtcXHdcXHNdKyg/PVxcKSl8XFx3KykqL2ksLyh6dGUpLShcXHcrKSovaSwvKGFsY2F0ZWx8Z2Vla3NwaG9uZXxodWF3ZWl8bGVub3ZvfG5leGlhbnxwYW5hc29uaWN8KD89O1xccylzb255KVtfXFxzLV0/KFtcXHctXSspKi9pXSxbcCxbbCwvXy9nLFwiIFwiXSxbaCxnXV0sWy8obmV4dXNcXHM5KS9pXSxbbCxbcCxcIkhUQ1wiXSxbaCx5XV0sWy8obmV4dXNcXHM2cCkvaV0sW2wsW3AsXCJIdWF3ZWlcIl0sW2gsZ11dLFsvKG1pY3Jvc29mdCk7XFxzKGx1bWlhW1xcc1xcd10rKS9pXSxbcCxsLFtoLGddXSxbL1tcXHNcXCg7XSh4Ym94KD86XFxzb25lKT8pW1xcc1xcKTtdL2ldLFtsLFtwLFwiTWljcm9zb2Z0XCJdLFtoLG1dXSxbLyhraW5cXC5bb25ldHddezN9KS9pXSxbW2wsL1xcLi9nLFwiIFwiXSxbcCxcIk1pY3Jvc29mdFwiXSxbaCxnXV0sWy9cXHMobWlsZXN0b25lfGRyb2lkKD86WzItNHhdfFxccyg/OmJpb25pY3x4Mnxwcm98cmF6cikpPyg6P1xcczRnKT8pW1xcd1xcc10rYnVpbGRcXC8vaSwvbW90W1xccy1dPyhcXHcrKSovaSwvKFhUXFxkezMsNH0pIGJ1aWxkXFwvL2ksLyhuZXh1c1xcczYpL2ldLFtsLFtwLFwiTW90b3JvbGFcIl0sW2gsZ11dLFsvYW5kcm9pZC4rXFxzKG16NjBcXGR8eG9vbVtcXHMyXXswLDJ9KVxcc2J1aWxkXFwvL2ldLFtsLFtwLFwiTW90b3JvbGFcIl0sW2gseV1dLFsvaGJidHZcXC9cXGQrXFwuXFxkK1xcLlxcZCtcXHMrXFwoW1xcd1xcc10qO1xccyooXFx3W147XSopOyhbXjtdKikvaV0sW1twLFMudHJpbV0sW2wsUy50cmltXSxbaCxiXV0sWy9oYmJ0di4rbWFwbGU7KFxcZCspL2ldLFtbbCwvXi8sXCJTbWFydFRWXCJdLFtwLFwiU2Ftc3VuZ1wiXSxbaCxiXV0sWy9cXChkdHZbXFwpO10uKyhhcXVvcykvaV0sW2wsW3AsXCJTaGFycFwiXSxbaCxiXV0sWy9hbmRyb2lkLisoKHNjaC1pWzg5XTBcXGR8c2h3LW0zODBzfGd0LXBcXGR7NH18Z3QtblxcZCt8c2doLXQ4WzU2XTl8bmV4dXMgMTApKS9pLC8oKFNNLVRcXHcrKSkvaV0sW1twLFwiU2Ftc3VuZ1wiXSxsLFtoLHldXSxbL3NtYXJ0LXR2Lisoc2Ftc3VuZykvaV0sW3AsW2gsYl0sbF0sWy8oKHNbY2dwXWgtXFx3K3xndC1cXHcrfGdhbGF4eVxcc25leHVzfHNtLVxcd1tcXHdcXGRdKykpL2ksLyhzYW1bc3VuZ10qKVtcXHMtXSooXFx3Ky0/W1xcdy1dKikqL2ksL3NlYy0oKHNnaFxcdyspKS9pXSxbW3AsXCJTYW1zdW5nXCJdLGwsW2gsZ11dLFsvc2llLShcXHcrKSovaV0sW2wsW3AsXCJTaWVtZW5zXCJdLFtoLGddXSxbLyhtYWVtb3xub2tpYSkuKihuOTAwfGx1bWlhXFxzXFxkKykvaSwvKG5va2lhKVtcXHNfLV0/KFtcXHctXSspKi9pXSxbW3AsXCJOb2tpYVwiXSxsLFtoLGddXSxbL2FuZHJvaWRcXHMzXFwuW1xcc1xcdzstXXsxMH0oYVxcZHszfSkvaV0sW2wsW3AsXCJBY2VyXCJdLFtoLHldXSxbL2FuZHJvaWRcXHMzXFwuW1xcc1xcdzstXXsxMH0obGc/KS0oWzA2Y3Y5XXszLDR9KS9pXSxbW3AsXCJMR1wiXSxsLFtoLHldXSxbLyhsZykgbmV0Y2FzdFxcLnR2L2ldLFtwLGwsW2gsYl1dLFsvKG5leHVzXFxzWzQ1XSkvaSwvbGdbZTtcXHNcXC8tXSsoXFx3KykqL2ldLFtsLFtwLFwiTEdcIl0sW2gsZ11dLFsvYW5kcm9pZC4rKGlkZWF0YWJbYS16MC05XFwtXFxzXSspL2ldLFtsLFtwLFwiTGVub3ZvXCJdLFtoLHldXSxbL2xpbnV4Oy4rKChqb2xsYSkpOy9pXSxbcCxsLFtoLGddXSxbLygocGViYmxlKSlhcHBcXC9bXFxkXFwuXStcXHMvaV0sW3AsbCxbaCx3XV0sWy9hbmRyb2lkLis7XFxzKGdsYXNzKVxcc1xcZC9pXSxbbCxbcCxcIkdvb2dsZVwiXSxbaCx3XV0sWy9hbmRyb2lkLisoXFx3KylcXHMrYnVpbGRcXC9obVxcMS9pLC9hbmRyb2lkLisoaG1bXFxzXFwtX10qbm90ZT9bXFxzX10qKD86XFxkXFx3KT8pXFxzK2J1aWxkL2ksL2FuZHJvaWQuKyhtaVtcXHNcXC1fXSooPzpvbmV8b25lW1xcc19dcGx1c3xub3RlIGx0ZSk/W1xcc19dKig/OlxcZFxcdyk/KVxccytidWlsZC9pXSxbW2wsL18vZyxcIiBcIl0sW3AsXCJYaWFvbWlcIl0sW2gsZ11dLFsvYW5kcm9pZC4rYTAwMCgxKVxccytidWlsZC9pXSxbbCxbcCxcIk9uZVBsdXNcIl0sW2gsZ11dLFsvXFxzKHRhYmxldClbO1xcL10vaSwvXFxzKG1vYmlsZSkoPzpbO1xcL118XFxzc2FmYXJpKS9pXSxbW2gsUy5sb3dlcml6ZV0scCxsXV0sZW5naW5lOltbL3dpbmRvd3MuK1xcc2VkZ2VcXC8oW1xcd1xcLl0rKS9pXSxbZCxbYyxcIkVkZ2VIVE1MXCJdXSxbLyhwcmVzdG8pXFwvKFtcXHdcXC5dKykvaSwvKHdlYmtpdHx0cmlkZW50fG5ldGZyb250fG5ldHN1cmZ8YW1heWF8bHlueHx3M20pXFwvKFtcXHdcXC5dKykvaSwvKGtodG1sfHRhc21hbnxsaW5rcylbXFwvXFxzXVxcKD8oW1xcd1xcLl0rKS9pLC8oaWNhYilbXFwvXFxzXShbMjNdXFwuW1xcZFxcLl0rKS9pXSxbYyxkXSxbL3J2XFw6KFtcXHdcXC5dKykuKihnZWNrbykvaV0sW2QsY11dLG9zOltbL21pY3Jvc29mdFxccyh3aW5kb3dzKVxccyh2aXN0YXx4cCkvaV0sW2MsZF0sWy8od2luZG93cylcXHNudFxcczZcXC4yO1xccyhhcm0pL2ksLyh3aW5kb3dzXFxzcGhvbmUoPzpcXHNvcykqKVtcXHNcXC9dPyhbXFxkXFwuXFxzXStcXHcpKi9pLC8od2luZG93c1xcc21vYmlsZXx3aW5kb3dzKVtcXHNcXC9dPyhbbnRjZVxcZFxcLlxcc10rXFx3KS9pXSxbYyxbZCx4LnN0cixULm9zLndpbmRvd3MudmVyc2lvbl1dLFsvKHdpbig/PTN8OXxuKXx3aW5cXHM5eFxccykoW250XFxkXFwuXSspL2ldLFtbYyxcIldpbmRvd3NcIl0sW2QseC5zdHIsVC5vcy53aW5kb3dzLnZlcnNpb25dXSxbL1xcKChiYikoMTApOy9pXSxbW2MsXCJCbGFja0JlcnJ5XCJdLGRdLFsvKGJsYWNrYmVycnkpXFx3KlxcLz8oW1xcd1xcLl0rKSovaSwvKHRpemVuKVtcXC9cXHNdKFtcXHdcXC5dKykvaSwvKGFuZHJvaWR8d2Vib3N8cGFsbVxcc29zfHFueHxiYWRhfHJpbVxcc3RhYmxldFxcc29zfG1lZWdvfGNvbnRpa2kpW1xcL1xccy1dPyhbXFx3XFwuXSspKi9pLC9saW51eDsuKyhzYWlsZmlzaCk7L2ldLFtjLGRdLFsvKHN5bWJpYW5cXHM/b3N8c3ltYm9zfHM2MCg/PTspKVtcXC9cXHMtXT8oW1xcd1xcLl0rKSovaV0sW1tjLFwiU3ltYmlhblwiXSxkXSxbL1xcKChzZXJpZXM0MCk7L2ldLFtjXSxbL21vemlsbGEuK1xcKG1vYmlsZTsuK2dlY2tvLitmaXJlZm94L2ldLFtbYyxcIkZpcmVmb3ggT1NcIl0sZF0sWy8obmludGVuZG98cGxheXN0YXRpb24pXFxzKFt3aWRzMzRwb3J0YWJsZXZ1XSspL2ksLyhtaW50KVtcXC9cXHNcXChdPyhcXHcrKSovaSwvKG1hZ2VpYXx2ZWN0b3JsaW51eClbO1xcc10vaSwvKGpvbGl8W2t4bG5dP3VidW50dXxkZWJpYW58W29wZW5dKnN1c2V8Z2VudG9vfCg/PVxccylhcmNofHNsYWNrd2FyZXxmZWRvcmF8bWFuZHJpdmF8Y2VudG9zfHBjbGludXhvc3xyZWRoYXR8emVud2Fsa3xsaW5wdXMpW1xcL1xccy1dPyg/IWNocm9tKShbXFx3XFwuLV0rKSovaSwvKGh1cmR8bGludXgpXFxzPyhbXFx3XFwuXSspKi9pLC8oZ251KVxccz8oW1xcd1xcLl0rKSovaV0sW2MsZF0sWy8oY3JvcylcXHNbXFx3XStcXHMoW1xcd1xcLl0rXFx3KS9pXSxbW2MsXCJDaHJvbWl1bSBPU1wiXSxkXSxbLyhzdW5vcylcXHM/KFtcXHdcXC5dK1xcZCkqL2ldLFtbYyxcIlNvbGFyaXNcIl0sZF0sWy9cXHMoW2ZyZW50b3BjLV17MCw0fWJzZHxkcmFnb25mbHkpXFxzPyhbXFx3XFwuXSspKi9pXSxbYyxkXSxbLyhoYWlrdSlcXHMoXFx3KykvaV0sW2MsZF0sWy8oaXBbaG9uZWFkXSspKD86Lipvc1xccyhbXFx3XSspKlxcc2xpa2VcXHNtYWN8O1xcc29wZXJhKS9pXSxbW2MsXCJpT1NcIl0sW2QsL18vZyxcIi5cIl1dLFsvKG1hY1xcc29zXFxzeClcXHM/KFtcXHdcXHNcXC5dK1xcdykqL2ksLyhtYWNpbnRvc2h8bWFjKD89X3Bvd2VycGMpXFxzKS9pXSxbW2MsXCJNYWMgT1NcIl0sW2QsL18vZyxcIi5cIl1dLFsvKCg/Om9wZW4pP3NvbGFyaXMpW1xcL1xccy1dPyhbXFx3XFwuXSspKi9pLC8oYWl4KVxccygoXFxkKSg/PVxcLnxcXCl8XFxzKVtcXHdcXC5dKikqL2ksLyhwbGFuXFxzOXxtaW5peHxiZW9zfG9zXFwvMnxhbWlnYW9zfG1vcnBob3N8cmlzY1xcc29zfG9wZW52bXMpL2ksLyh1bml4KVxccz8oW1xcd1xcLl0rKSovaV0sW2MsZF1dfSxDPWZ1bmN0aW9uKHQsbil7aWYodGhpcyBpbnN0YW5jZW9mIEMpe3ZhciBpPXR8fChlJiZlLm5hdmlnYXRvciYmZS5uYXZpZ2F0b3IudXNlckFnZW50P2UubmF2aWdhdG9yLnVzZXJBZ2VudDpyKSxzPW4/Uy5leHRlbmQoTixuKTpOO3JldHVybiB0aGlzLmdldEJyb3dzZXI9ZnVuY3Rpb24oKXt2YXIgZT14LnJneC5hcHBseSh0aGlzLHMuYnJvd3Nlcik7cmV0dXJuIGUubWFqb3I9Uy5tYWpvcihlLnZlcnNpb24pLGV9LHRoaXMuZ2V0Q1BVPWZ1bmN0aW9uKCl7cmV0dXJuIHgucmd4LmFwcGx5KHRoaXMscy5jcHUpfSx0aGlzLmdldERldmljZT1mdW5jdGlvbigpe3JldHVybiB4LnJneC5hcHBseSh0aGlzLHMuZGV2aWNlKX0sdGhpcy5nZXRFbmdpbmU9ZnVuY3Rpb24oKXtyZXR1cm4geC5yZ3guYXBwbHkodGhpcyxzLmVuZ2luZSl9LHRoaXMuZ2V0T1M9ZnVuY3Rpb24oKXtyZXR1cm4geC5yZ3guYXBwbHkodGhpcyxzLm9zKX0sdGhpcy5nZXRSZXN1bHQ9ZnVuY3Rpb24oKXtyZXR1cm57dWE6dGhpcy5nZXRVQSgpLGJyb3dzZXI6dGhpcy5nZXRCcm93c2VyKCksZW5naW5lOnRoaXMuZ2V0RW5naW5lKCksb3M6dGhpcy5nZXRPUygpLGRldmljZTp0aGlzLmdldERldmljZSgpLGNwdTp0aGlzLmdldENQVSgpfX0sdGhpcy5nZXRVQT1mdW5jdGlvbigpe3JldHVybiBpfSx0aGlzLnNldFVBPWZ1bmN0aW9uKGUpe3JldHVybiBpPWUsdGhpc30sdGhpc31yZXR1cm4obmV3IEModCxuKSkuZ2V0UmVzdWx0KCl9O0MuVkVSU0lPTj1uLEMuQlJPV1NFUj17TkFNRTpjLE1BSk9SOmYsVkVSU0lPTjpkfSxDLkNQVT17QVJDSElURUNUVVJFOnZ9LEMuREVWSUNFPXtNT0RFTDpsLFZFTkRPUjpwLFRZUEU6aCxDT05TT0xFOm0sTU9CSUxFOmcsU01BUlRUVjpiLFRBQkxFVDp5LFdFQVJBQkxFOncsRU1CRURERUQ6RX0sQy5FTkdJTkU9e05BTUU6YyxWRVJTSU9OOmR9LEMuT1M9e05BTUU6YyxWRVJTSU9OOmR9LHR5cGVvZiBleHBvcnRzIT09bz8odHlwZW9mIG1vZHVsZSE9PW8mJm1vZHVsZS5leHBvcnRzJiYoZXhwb3J0cz1tb2R1bGUuZXhwb3J0cz1DKSxleHBvcnRzLlVBUGFyc2VyPUMpOnR5cGVvZiBkZWZpbmU9PT1zJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiBDfSk6ZS5VQVBhcnNlcj1DO3ZhciBrPWUualF1ZXJ5fHxlLlplcHRvO2lmKHR5cGVvZiBrIT09byl7dmFyIEw9bmV3IEM7ay51YT1MLmdldFJlc3VsdCgpLGsudWEuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIEwuZ2V0VUEoKX0say51YS5zZXQ9ZnVuY3Rpb24oZSl7TC5zZXRVQShlKTt2YXIgdD1MLmdldFJlc3VsdCgpO2Zvcih2YXIgbiBpbiB0KWsudWFbbl09dFtuXX19fSkodHlwZW9mIHdpbmRvdz09XCJvYmplY3RcIj93aW5kb3c6dGhpcyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL2xpYnMvdWEtcGFyc2VyLm1pbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3RcIik7IH07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX2FtZF9vcHRpb25zX187XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIHByZWxvYWRJbWdcbiAqIEBwYXJhbSBpbWdQYXRoXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGltZ1BhdGgpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICB2YXIgaW1nO1xuICAgIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oZSkge1xuICAgICAgaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhcmd1bWVudHMuY2FsbGVlKTtcbiAgICAgIHJldHVybiByZXNvbHZlKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGltZy5zcmMgPSBpbWdQYXRoO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2ltZy9wcmVsb2FkSW1nLmpzIiwiLyoqXG4gKiBzZXRVcEJ0blR3aXR0ZXJcbiAqIEBwYXJhbSAkYnRuXG4gKiBAcGFyYW0gdGV4dFxuICogQHBhcmFtIHNoYXJlVVJMXG4gKi9cbmV4cG9ydCBkZWZhdWx0ICgkYnRuLCB0ZXh0LCBzaGFyZVVSTCkgPT4ge1xuICB2YXIgdXJsO1xuICBpZiAoc2hhcmVVUkwgPT0gbnVsbCkge1xuICAgIHNoYXJlVVJMID0gJyc7XG4gIH1cbiAgdXJsID0gJ2h0dHBzOi8vdHdpdHRlci5jb20vaW50ZW50L3R3ZWV0Pyc7XG4gIGlmIChzaGFyZVVSTCA9PT0gJycpIHtcbiAgICB1cmwgKz0gXCJ0ZXh0PVwiICsgKGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSk7XG4gIH0gZWxzZSB7XG4gICAgdXJsICs9IFwidXJsPVwiICsgKGVuY29kZVVSSUNvbXBvbmVudChzaGFyZVVSTCkpICsgXCImdGV4dD1cIiArIChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpO1xuICB9XG4gIHJldHVybiAkYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICB3aW5kb3cub3Blbih1cmwsICd0d2l0dGVyU2hhcmUnLCAnd2lkdGg9NjcwLGhlaWdodD00MDAnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuVHdpdHRlci5qcyIsIi8qKlxuICogc2V0VXBCdG5MaW5lXG4gKiBAcGFyYW0gJGJ0blxuICogQHBhcmFtIHRleHRcbiAqIEBwYXJhbSBzaGFyZVVSTFxuICovXG5leHBvcnQgZGVmYXVsdCAoJGJ0biwgdGV4dCwgc2hhcmVVUkwgPSAnJykgPT4ge1xuICB2YXIgdXJsO1xuICBpZiAoc2hhcmVVUkwgPT0gbnVsbCkge1xuICAgIHNoYXJlVVJMID0gJyc7XG4gIH1cbiAgdXJsID0gJ2h0dHA6Ly9saW5lLm1lL21zZy90ZXh0Lz8nO1xuICBpZiAoc2hhcmVVUkwgPT09ICcnKSB7XG4gICAgdXJsICs9IFwiXCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKTtcbiAgfSBlbHNlIHtcbiAgICB1cmwgKz0gKGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSkgKyBcIlxcblwiICsgKGVuY29kZVVSSUNvbXBvbmVudChzaGFyZVVSTCkpO1xuICB9XG4gIHJldHVybiAkYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICB3aW5kb3cub3Blbih1cmwsICdsaW5lU2hhcmUnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuTGluZS5qcyIsIi8qKlxuICogc2V0VXBCdG5GYWNlYm9va1xuICogQHBhcmFtICRidG5cbiAqIEBwYXJhbSBzaGFyZVVSTFxuICogQHBhcmFtIGRlc2NyaXB0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0ICgkYnRuLCBzaGFyZVVSTCwgZGVzY3JpcHRpb24gPSAnJykgPT4ge1xuICB2YXIgdXJsO1xuICBpZiAoZGVzY3JpcHRpb24gPT0gbnVsbCkge1xuICAgIGRlc2NyaXB0aW9uID0gJyc7XG4gIH1cbiAgdXJsID0gJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD8mZGlzcGxheT1wb3B1cCZ1PSc7XG4gIHVybCArPSBcIlwiICsgKGVuY29kZVVSSUNvbXBvbmVudChzaGFyZVVSTCkpO1xuICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICB1cmwgKz0gXCImZGVzY3JpcHRpb249XCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KGRlc2NyaXB0aW9uKSk7XG4gIH1cbiAgcmV0dXJuICRidG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHdpbmRvdy5vcGVuKHVybCwgXCJmYWNlYm9va1NoYXJlXCIgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkpLCAnd2lkdGg9NjcwLGhlaWdodD00MDAnKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuRmFjZUJvb2suanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBGdW5jXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZ1bmMge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5ibGFuaygpO1xuICAgIHRoaXMuZGVidWdnZXIoKTtcbiAgICB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xuICAgIHRoaXMuZXhwYW5kalF1ZXJ5KCk7XG5cbiAgfVxuXG4gIGJsYW5rKCkge1xuXG4gICAgJCgoKT0+eyQoJy5ibGFuaycpLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKTt9KTtcblxuICB9XG5cbiAgZGVidWdnZXIoKSB7XG5cbiAgICAvLyDjg4fjg5Djg4PjgrDjg6Ljg7zjg4nliIfmm79cbiAgICB2YXIgUkVMRUFTRSA9IGdiLmluLmNvbmYuUkVMRUFTRTtcblxuICAgIC8vIOe9ruaPm+WvvuixoeOBruODoeOCveODg+ODieOCkumFjeWIl+OBqOOBl+OBpuS/neaMgeOBmeOCi1xuICAgIHZhciBtZXRob2RzID0gW1xuICAgICAgJ2xvZycsXG4gICAgICAnZGVidWcnLFxuICAgICAgJ2luZm8nLFxuICAgICAgJ3dhcm4nLFxuICAgICAgJ2Vycm9yJyxcbiAgICAgICdkaXInLFxuICAgICAgJ3RyYWNlJyxcbiAgICAgICdhc3NlcnQnLFxuICAgICAgJ2RpcnhtbCcsXG4gICAgICAnZ3JvdXAnLFxuICAgICAgJ2dyb3VwRW5kJyxcbiAgICAgICd0aW1lJyxcbiAgICAgICd0aW1lRW5kJyxcbiAgICAgICdjb3VudCcsXG4gICAgICAncHJvZmlsZScsXG4gICAgICAncHJvZmlsZUVuZCdcbiAgICBdO1xuXG4gICAgLy8gY29uc29sZeOBjOS9v+OBiOOBquOBhOWgtOWQiOOBr+epuuOBruOCquODluOCuOOCp+OCr+ODiOOCkuioreWumuOBl+OBpuOBiuOBj1xuICAgIGlmKCB0eXBlb2Ygd2luZG93LmNvbnNvbGUgPT09IFwidW5kZWZpbmVkXCIgKXtcbiAgICAgIHdpbmRvdy5jb25zb2xlID0ge307XG4gICAgfVxuXG4gICAgLy8g5ZCE44Oh44K944OD44OJ44KSd2luZG9344G455u05o6l6L+95Yqg44GX44Gm6KGM44GPXG4gICAgZm9yKCB2YXIgaSBpbiBtZXRob2RzICl7XG4gICAgICAoZnVuY3Rpb24oIG0gKXtcblxuICAgICAgIC8vIGNvbnNvbGXjgavjgYLjgovvvJ/jg4fjg5Djg4PjgrDjg6Ljg7zjg4njga/mnInlirnvvJ9jb25zb2xl44Gu44KC44Gu44Gv6Zai5pWw77yfXG4gICAgICAgaWYoIGNvbnNvbGVbbV0gJiYgIVJFTEVBU0UgJiYgdHlwZW9mIGNvbnNvbGVbbV0gPT09IFwiZnVuY3Rpb25cIiApe1xuICAgICAgICB3aW5kb3dbbV0gPSBjb25zb2xlW21dLmJpbmQoY29uc29sZSk7XG4gICAgICAgfSBlbHNlIHvjgIAvLyBkZWJ1Z01vZGXjgYxmYWxzZSzjgoLjgZfjgY/jga/oqbLlvZPjg6Hjgr3jg4Pjg4njgYzlrZjlnKjjgZfjgarjgYTloLTlkIjjga/jgIHnqbrjga7jg6Hjgr3jg4Pjg4njgpLnlKjmhI/jgZnjgotcbiAgICAgICAgd2luZG93W21dID0gZnVuY3Rpb24oKXt9O1xuICAgICAgIH1cblxuICAgICAgfSkoIG1ldGhvZHNbaV0gKTtcbiAgICB9XG5cbiAgfVxuXG4gIHByZXBlbmQocGFyYW0pIHtcblxuICAgICQoJ2JvZHknKS5wcmVwZW5kKHBhcmFtKTtcblxuICB9XG5cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCkge1xuXG4gICAgdmFyIEZQUyA9IDEwMDAvNjA7XG5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAvLyBjaHJvbWXjgoTmnIDmlrDjga5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAvLyDlj6TjgYRmaXJlZm9455SoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgIC8vIHNhZmFyaTbku6XliY3jgIFpT1M2IHNhZmFyaeeUqFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIEZQUyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiggdGltZXIgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9OyAgICAgIFxuXG4gIH1cblxuICBleHBhbmRqUXVlcnkoKSB7XG5cbiAgICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICAgIHc6MCwgXG4gICAgICBoOjAsIFxuICAgICAgYWRqdXN0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICdsZWZ0JzonNTAlJyxcbiAgICAgICAgICAgICd0b3AnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzonLScgKyAodyAvIDIpICsgJ3B4JyxcbiAgICAgICAgICAgICdtYXJnaW4tdG9wJzonLScgKyAoaCAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGFkanVzdFc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ2xlZnQnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi1sZWZ0JzonLScgKyAodyAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGFkanVzdEg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ3RvcCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLXRvcCc6Jy0nICsgKGggLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgY2hlY2tDc3NCbGVuZCgpIHtcblxuICAgIGlmICgnQ1NTJyBpbiB3aW5kb3cgJiYgJ3N1cHBvcnRzJyBpbiB3aW5kb3cuQ1NTKSB7XG4gICAgICBpZiAoIXdpbmRvdy5DU1Muc3VwcG9ydHMoJ21peC1ibGVuZC1tb2RlJywgJ3NvZnQtbGlnaHQnKSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm90LW1peC1ibGVuZC1tb2RlJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb2coZ2IuaW4udS5pc0lFKTtcblxuICAgIGlmIChnYi5pbi51LmlzSUUpIHtcbiAgICAgIFxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1taXgtYmxlbmQtbW9kZScpXG4gICAgICBcbiAgICB9O1xuXG4gIH1cblxuICBub3RTYXZlSW1nKCkge1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgcGNcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgaWYgKGdiLmluLnUuaXNQQykge1xuXG4gICAgICAkKCgpPT57XG4gICAgICAgICQoXCJpbWdcIikub24oXCJjb250ZXh0bWVudVwiLCgpPT57XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy9cbiAgICAvLyAgc3AgYW5kcm9pZFxuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdmFyIHYgPSBnYi5pbi51LmlzQW5kcm9pZFZlcnNpb24oKTtcblxuICAgIGlmICh2PT11bmRlZmluZWQpIHJldHVybjtcbiAgICBpZiAodjw1KSB7XG5cbiAgICAgIHZhciB0aW1lcjtcbiAgICAgICQoXCJpbWdcIikub24oXCJ0b3VjaHN0YXJ0XCIsKCk9PntcbiAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgYWxlcnQoXCLnlLvlg4/jga/kv53lrZjjgafjgY3jgb7jgZvjgpNcIilcbiAgICAgICAgfSw1MDApXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pXG4gICAgICAkKFwiaW1nXCIpLm9uKFwidG91Y2hlbmRcIiwoKT0+e1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KSAgICAgIFxuXG4gICAgfVxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL0Z1bmMuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBNYWluXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBEaXNwbGF5VG9wIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheVRvcCc7XG5pbXBvcnQgRGlzcGxheVRleHR1cmVCZyBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlUZXh0dXJlQmcnO1xuaW1wb3J0IERpc3BsYXlUZXh0dXJlTW92aWUgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5VGV4dHVyZU1vdmllJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuICAgIC8vcGFnZeODmuODvOOCuOWIpeOBrklE44KS5Y+W5b6XXG4gICAgdmFyIHBhZ2UgPSAkKCdib2R5JykuZGF0YSgnaWQnKTtcblxuICAgIHdpbmRvdy5jb25zb2xlLmxvZygn54++5Zyo44Gu44Oa44O844K4SUTjga8gJywgcGFnZSk7XG5cblx0XHQvL3BhZ2Xjga5JROOBlOOBqOOBq+eZuueBq+OBmeOCi+OCr+ODqeOCueOBruaMr+OCiuWIhuOBkVxuICAgIHN3aXRjaCAocGFnZSkge1xuXG4gICAgICBjYXNlICd0b3AnOlxuXG4gICAgICAgIG5ldyBEaXNwbGF5VG9wKCk7XG5cbiAgICAgICAgYnJlYWs7XG5cblx0XHRcdGNhc2UgJ3RleHR1cmVCZyc6XG5cblx0XHRcdFx0bmV3IERpc3BsYXlUZXh0dXJlQmcoKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAndGV4dHVyZU1vdmllJzpcblxuXHRcdFx0XHRuZXcgRGlzcGxheVRleHR1cmVNb3ZpZSgpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG4gICAgfVxuXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBcbiAgfVxuXG4gIG9uUmVuZGVyKCkge1xuXG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeScsIHRoaXMub25SZWFkeS5iaW5kKHRoaXMpKTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvcGFnZS9NYWluLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRGlzcGxheVxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IFNjZW5lTWFuZ2VyIGZyb20gXCIuLi92aXN1YWwvU2NlbmVNYW5nZXJcIjtcbmltcG9ydCBTY2VuZTAxIGZyb20gXCIuLi92aXN1YWwvU2NlbmUwMVwiO1xuaW1wb3J0IFNjZW5lMDIgZnJvbSBcIi4uL3Zpc3VhbC9TY2VuZTAyXCI7XG5cbi8vIGltcG9ydCBXZWJHTGluaXQgZnJvbSAnLi9XZWJHTGluaXQuanMnO1xuXG4vLyBpbXBvcnQgQ2FudmFzIGZyb20gXCIuLi92aXN1YWwvQ2FudmFzXCI7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheVRvcCB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIOOCouODi+ODoeODvOOCt+ODp+ODs+ODq+ODvOODl+OCueOCv+ODvOODiFxuICAgIC8vIGdiLmluLnVwLmxvb3AoKTtcbiAgICBcbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIGdiLmluLnNjZW5lTWFuZ2VyID0gbmV3IFNjZW5lTWFuZ2VyKCk7XG5cbiAgICBnYi5pbi5zY2VuZUJveEEgPSBuZXcgU2NlbmUwMSgpO1xuICAgIGdiLmluLnNjZW5lQm94QiA9IG5ldyBTY2VuZTAyKCk7XG5cbiAgICBnYi5pbi5zY2VuZU1hbmdlci5hZGRTY2VuZShnYi5pbi5zY2VuZUJveEEpO1xuICAgIGdiLmluLnNjZW5lTWFuZ2VyLmFkZFNjZW5lKGdiLmluLnNjZW5lQm94Qik7XG5cbiAgICBnYi5pbi5zY2VuZU1hbmdlci5kcmF3KCk7XG5cbiAgICAvLyBnYi5pbi5jYW52YXMgPSBuZXcgQ2FudmFzKCk7XG4gICAgLy8gZ2IuaW4uY2FudmFzLmluaXQoKTtcblxuXG4gIH1cblxuICBzdGF0aWMgcnVuKCkge1xuXG5cdFx0Ly8gd2luZG93LmNvbnNvbGUubG9nKCdzdGF0aWNfUnVuJyk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUb3AuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBTY2VuZU1hbmdlclxuICogRGF0ZTogMTcvMDUvMjlcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IEVudHJ5IGZyb20gJy4uL0NvcmUvRW50cnknO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lTWFuZ2VyIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG5cdFx0dGhpcy5OVU0gPSAwOyAvLyDnj77lnKjjga7jgrfjg7zjg7Pjga7nlarlj7dcblx0XHR0aGlzLnNjZW5lcyA9IFtdOyAvLyDjgrfjg7zjg7PjgpLmoLzntI3jgZnjgovphY3liJdcbiAgICB0aGlzLmZhZGVJbk91dFRpbWVyID0gLTE7IC8vXG5cblx0XHR0aGlzLmNhbnZhcyA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7IC8vIFJlbmRlcmVyXG5cbiAgICB0aGlzLmFkZFNjZW5lID0gdGhpcy5fYWRkU2NlbmUuYmluZCh0aGlzKTtcblxuXHRcdHRoaXMub25SZXNpemUgPSB0aGlzLl9vblJlc2l6ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2hlY2tOdW0gPSB0aGlzLl9jaGVja051bS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25LZXlEb3duID0gdGhpcy5fb25LZXlEb3duLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5mYWRlSW5PdXQgPSB0aGlzLl9mYWRlSW5PdXQuYmluZCh0aGlzKTtcblx0XHR0aGlzLmRyYXcgPSB0aGlzLl9kcmF3LmJpbmQodGhpcyk7XG5cblx0XHR0aGlzLmtleW5hbWUgPSBudWxsO1xuXG5cblx0XHR0aGlzLmluaXQoKTsgLy8g5Yid5pyf5YyW5Yem55CG5b6M44CB44Kk44OZ44Oz44OI55m76YyyXG5cbiAgfVxuXG4gIC8qKlxuICAgKiDliJ3mnJ/ljJZcbiAgICovXG4gIGluaXQoKXtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplLCBmYWxzZSApO1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLm9uUmVzaXplLCBmYWxzZSApO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMub25LZXlEb3duLCB0cnVlKTtcblxuXHRcdC8vIFJlbmRlcmVy5L2c5oiQXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHthbnRpYWxpYXM6IHRydWV9KTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8oIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICk7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXHRcdHRoaXMucmVuZGVyZXIuc29ydE9iamVjdHMgPSBmYWxzZTtcblx0XHR0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcblx0XHR0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC50eXBlID0gVEhSRUUuUENGU2hhZG93TWFwO1xuXHRcdHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5pZCA9IFwibWFpblwiO1xuICAgIHRoaXMuY2FudmFzID0gdGhpcy5yZW5kZXJlci5kb21FbGVtZW50O1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gIH1cblxuXHQvKipcbiAgICog566h55CG44GX44Gf44GE44K344O844Oz44KS5qC857SN44GZ44KL6Zai5pWwXG5cdCAqIEBwYXJhbSBzY2VuZVxuXHQgKi9cblx0X2FkZFNjZW5lKHNjZW5lKSB7XG5cblx0XHR0aGlzLnNjZW5lcy5wdXNoKHNjZW5lKTtcblxuXHR9XG5cbiAgLyoqXG4gICAq44CA44Km44Kj44Oz44OJ44Km44Gu5bmF44GM5aSJ44KP44Gj44Gf44Go44GN44Gu5Yem55CGXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25SZXNpemUoKSB7XG5cbiAgXHQvLyDooajnpLrjgZfjgabjgYTjgovjgrfjg7zjg7PjgZTjgajjgavjgqvjg6Hjg6njga7jg6rjgrXjgqTjgrrjgpLotbDjgonjgZvjgotcbiAgICB0aGlzLnNjZW5lc1t0aGlzLk5VTV0uY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuc2NlbmVzW3RoaXMuTlVNXS5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gICAgLy8gcmVuZGVyZXLjga/lhajjgabjga7jgrfjg7zjg7PjgaflhbHpgJpcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuXHQvKipcbiAgICog54++5Zyo44Gu44K344O844Oz55Wq5Y+344GM44CB5LiN6YGp5YiH44Gq5YCk44Gr44Gq44KJ44Gq44GE44KI44GG44Gr44OB44Kn44OD44KvXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfY2hlY2tOdW0oKXtcbiAgICB3aW5kb3cuY29uc29sZS5sb2codGhpcy5rZXluYW1lKTtcblx0XHRpZih0aGlzLk5VTSA8MCkge1xuXHRcdFx0dGhpcy5OVU0gPSB0aGlzLnNjZW5lcy5sZW5ndGgtMTtcblx0XHR9XG5cblx0XHRpZih0aGlzLk5VTSA+PSB0aGlzLnNjZW5lcy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuTlVNID0gMDtcblx0XHR9XG4gIH1cblxuXHQvKipcbiAgICog4oaQ4oaS44Kt44O844Gn44K344O844Oz55Wq5Y+344KS6Laz44GX5byV44GNXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfb25LZXlEb3duKCl7XG5cdFx0ZG9jdW1lbnQub25rZXlkb3duID0gKGUpID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKGUpO1xuICAgICAgdGhpcy5rZXluYW1lID0gZS5rZXk7XG4gICAgICAvLyB3aW5kb3cuY29uc29sZS5sb2codGhpcy5rZXluYW1lKTtcbiAgICAgIC8vIGlmKHRoaXMua2V5bmFtZSA9PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgLy8gICB0aGlzLk5VTSsrO1xuICAgICAgLy8gICB0aGlzLmNoZWNrTnVtKCk7XG4gICAgICAvLyB9XG4gICAgICAvLyBpZih0aGlzLmtleW5hbWUgPT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgLy8gICB0aGlzLk5VTS0tO1xuICAgICAgLy8gICB0aGlzLmNoZWNrTnVtKCk7XG4gICAgICAvLyB9XG4gICAgICBpZih0aGlzLmtleW5hbWUgPT0gXCJBcnJvd1JpZ2h0XCIgfHwgdGhpcy5rZXluYW1lID09IFwiQXJyb3dMZWZ0XCIpXG4gICAgICB7XG4gICAgICAgIC8vIGtleW5hbWUgPSBldmVudC5rZXk7XG5cbiAgICAgICAgdGhpcy5mYWRlSW5PdXRUaW1lciA9IDA7XG4gICAgICAgIC8vc2NlbmVzWzBdLm1lc2hNYXRlcmlhbC5jb2xvciA9IDB4ZmZmZmZmKk1hdGgucmFuZG9tKCk7XG4gICAgICB9XG5cdFx0XHQvLyBzd2l0Y2ggKGUua2V5KSB7XG5cdFx0XHQvLyBcdGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG5cdFx0XHQvLyBcdFx0dGhpcy5OVU0rKztcblx0XHRcdC8vIFx0XHR0aGlzLmNoZWNrTnVtKCk7XG5cdFx0XHQvLyBcdFx0YnJlYWs7XG5cdFx0XHQvLyBcdC8vIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG5cdFx0XHQvLyBcdC8vIFx0dGhpcy5OVU0tLTtcblx0XHRcdC8vIFx0Ly8gXHR0aGlzLmNoZWNrTnVtKCk7XG5cdFx0XHQvLyBcdC8vIFx0YnJlYWs7XG4gICAgICAgLy8gIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAvLyAgICB0aGlzLk5VTS0tO1xuICAgICAgIC8vICAgIHRoaXMuY2hlY2tOdW0oKTtcbiAgICAgICAvLyAgICBicmVhaztcblx0XHRcdC8vIFx0ZGVmYXVsdDpcblx0XHRcdC8vIH1cblx0XHRcdHdpbmRvdy5jb25zb2xlLmxvZygn54++5Zyo44Gu44K344O844Oz55Wq5Y+344GvJyx0aGlzLk5VTSk7XG5cdFx0fVxuXHR9XG5cbiAgLyoqXG5cdCAqIOOCt+ODvOODs+ODgeOCp+ODs+OCuOaZguOBruODrOOCpOODpOODvFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0X2ZhZGVJbk91dCgpe1xuICAgIGlmKHRoaXMuZmFkZUluT3V0VGltZXIgPD0gTWF0aC5QSSoyKXtcbiAgICAgIHRoaXMuZmFkZUluT3V0VGltZXIgKz0gMC4wNztcbiAgICAgIC8vc2NyZWVuLnN0eWxlLm9wYWNpdHkgPSBNYXRoLnNpbihmYWRlSW5PdXRUaW1lcik7XG4gICAgICB2YXIgb3AgPSBNYXRoLnNpbih0aGlzLmZhZGVJbk91dFRpbWVyKTtcblxuICAgICAgJChcIiNmYWRlSW5PdXRcIilcbiAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IG9wXG4gICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5mYWRlSW5PdXRUaW1lciA9IC0xO1xuICAgICAgb3AgPSAwLjA7XG4gICAgfVxuXG4gICAgaWYob3AgPiAwLjk1ICYmIG9wIDw9IDEuMClcbiAgICB7XG4gICAgICBzd2l0Y2ggKHRoaXMua2V5bmFtZSkge1xuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNjZW5lc1t0aGlzLk5VTV0uRU5EKTtcbiAgICAgICAgICAvL3NjZW5lc1tOVU1dLmVuZEVuYWJsZWQoKTtcbiAgICAgICAgICB0aGlzLk5VTSsrO1xuICAgICAgICAgIHRoaXMuY2hlY2tOdW0oKTtcbiAgICAgICAgICAvLyBhbHBoYVJlc2V0KCk7XG4gICAgICAgICAgaWYodGhpcy5zY2VuZXMubGVuZ3RoID09IHRoaXMuTlVNKXtcbiAgICAgICAgICAgIHRoaXMuTlVNPTA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zY2VuZXNbdGhpcy5OVU1dLkVORCk7XG4gICAgICAgICAgLy8gYWxwaGFSZXNldCgpO1xuICAgICAgICAgIC8vc2NlbmVzW05VTV0uZW5kRW5hYmxlZCgpO1xuICAgICAgICAgIHRoaXMuTlVNLS07XG4gICAgICAgICAgdGhpcy5jaGVja051bSgpO1xuXG4gICAgICAgICAgaWYodGhpcy5OVU0gPDApe1xuICAgICAgICAgICAgdGhpcy5OVU0gPSB0aGlzLnNjZW5lcy5sZW5ndGgtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXHR9XG5cblxuXHQvKipcbiAgICog5pyA57WC55qE44Gq5o+P5YaZ5Yem55CG44Go44CB44Ki44OL44Oh44O844K344On44Oz6Zai5pWw44KS44Ov44Oz44OV44Os44O844Og44GU44Go44Gr5a6f6KGMXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZHJhdygpIHtcblxuXHRcdHRoaXMuc2NlbmVzW3RoaXMuTlVNXS51cGRhdGUoKTtcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lc1t0aGlzLk5VTV0uc2NlbmUsIHRoaXMuc2NlbmVzW3RoaXMuTlVNXS5jYW1lcmEpO1xuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcuYmluZCh0aGlzKSk7XG5cbiAgICBpZih0aGlzLmZhZGVJbk91dFRpbWVyID49IDApXG4gICAge1xuICAgICAgdGhpcy5mYWRlSW5PdXQoKTtcbiAgICB9XG5cblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvU2NlbmVNYW5nZXIuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBFbnRyeVxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5yZXF1aXJlKCcuLi8uLi9saWJzL09yYml0Q29udHJvbHMuanMnKTtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyeSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiDliJ3mnJ/ljJZcblx0ICovXG5cdGluaXQoKXtcblxuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvcmUvRW50cnkuanMiLCIvKipcbiAqIEBhdXRob3IgcWlhbyAvIGh0dHBzOi8vZ2l0aHViLmNvbS9xaWFvXG4gKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuICogQGF1dGhvciBXZXN0TGFuZ2xleSAvIGh0dHA6Ly9naXRodWIuY29tL1dlc3RMYW5nbGV5XG4gKiBAYXV0aG9yIGVyaWNoNjY2IC8gaHR0cDovL2VyaWNoYWluZXMuY29tXG4gKi9cblxuLy8gVGhpcyBzZXQgb2YgY29udHJvbHMgcGVyZm9ybXMgb3JiaXRpbmcsIGRvbGx5aW5nICh6b29taW5nKSwgYW5kIHBhbm5pbmcuXG4vLyBVbmxpa2UgVHJhY2tiYWxsQ29udHJvbHMsIGl0IG1haW50YWlucyB0aGUgXCJ1cFwiIGRpcmVjdGlvbiBvYmplY3QudXAgKCtZIGJ5IGRlZmF1bHQpLlxuLy9cbi8vICAgIE9yYml0IC0gbGVmdCBtb3VzZSAvIHRvdWNoOiBvbmUgZmluZ2VyIG1vdmVcbi8vICAgIFpvb20gLSBtaWRkbGUgbW91c2UsIG9yIG1vdXNld2hlZWwgLyB0b3VjaDogdHdvIGZpbmdlciBzcHJlYWQgb3Igc3F1aXNoXG4vLyAgICBQYW4gLSByaWdodCBtb3VzZSwgb3IgYXJyb3cga2V5cyAvIHRvdWNoOiB0aHJlZSBmaW50ZXIgc3dpcGVcblxuVEhSRUUuT3JiaXRDb250cm9scyA9IGZ1bmN0aW9uICggb2JqZWN0LCBkb21FbGVtZW50ICkge1xuXG5cdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXG5cdHRoaXMuZG9tRWxlbWVudCA9ICggZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICkgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG5cdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cblx0Ly8gXCJ0YXJnZXRcIiBzZXRzIHRoZSBsb2NhdGlvbiBvZiBmb2N1cywgd2hlcmUgdGhlIG9iamVjdCBvcmJpdHMgYXJvdW5kXG5cdHRoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gZG9sbHkgaW4gYW5kIG91dCAoIFBlcnNwZWN0aXZlQ2FtZXJhIG9ubHkgKVxuXHR0aGlzLm1pbkRpc3RhbmNlID0gMDtcblx0dGhpcy5tYXhEaXN0YW5jZSA9IEluZmluaXR5O1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiB6b29tIGluIGFuZCBvdXQgKCBPcnRob2dyYXBoaWNDYW1lcmEgb25seSApXG5cdHRoaXMubWluWm9vbSA9IDA7XG5cdHRoaXMubWF4Wm9vbSA9IEluZmluaXR5O1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHQvLyBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFucy5cblx0dGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuXHR0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IGhvcml6b250YWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0Ly8gSWYgc2V0LCBtdXN0IGJlIGEgc3ViLWludGVydmFsIG9mIHRoZSBpbnRlcnZhbCBbIC0gTWF0aC5QSSwgTWF0aC5QSSBdLlxuXHR0aGlzLm1pbkF6aW11dGhBbmdsZSA9IC0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblx0dGhpcy5tYXhBemltdXRoQW5nbGUgPSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXG5cdC8vIFNldCB0byB0cnVlIHRvIGVuYWJsZSBkYW1waW5nIChpbmVydGlhKVxuXHQvLyBJZiBkYW1waW5nIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHR0aGlzLmVuYWJsZURhbXBpbmcgPSBmYWxzZTtcblx0dGhpcy5kYW1waW5nRmFjdG9yID0gMC4yNTtcblxuXHQvLyBUaGlzIG9wdGlvbiBhY3R1YWxseSBlbmFibGVzIGRvbGx5aW5nIGluIGFuZCBvdXQ7IGxlZnQgYXMgXCJ6b29tXCIgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB6b29taW5nXG5cdHRoaXMuZW5hYmxlWm9vbSA9IHRydWU7XG5cdHRoaXMuem9vbVNwZWVkID0gMS4wO1xuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHJvdGF0aW5nXG5cdHRoaXMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcblx0dGhpcy5yb3RhdGVTcGVlZCA9IDEuMDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBwYW5uaW5nXG5cdHRoaXMuZW5hYmxlUGFuID0gdHJ1ZTtcblx0dGhpcy5rZXlQYW5TcGVlZCA9IDcuMDtcdC8vIHBpeGVscyBtb3ZlZCBwZXIgYXJyb3cga2V5IHB1c2hcblxuXHQvLyBTZXQgdG8gdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IHJvdGF0ZSBhcm91bmQgdGhlIHRhcmdldFxuXHQvLyBJZiBhdXRvLXJvdGF0ZSBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0dGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XG5cdHRoaXMuYXV0b1JvdGF0ZVNwZWVkID0gMi4wOyAvLyAzMCBzZWNvbmRzIHBlciByb3VuZCB3aGVuIGZwcyBpcyA2MFxuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHVzZSBvZiB0aGUga2V5c1xuXHR0aGlzLmVuYWJsZUtleXMgPSB0cnVlO1xuXG5cdC8vIFRoZSBmb3VyIGFycm93IGtleXNcblx0dGhpcy5rZXlzID0geyBMRUZUOiAzNywgVVA6IDM4LCBSSUdIVDogMzksIEJPVFRPTTogNDAgfTtcblxuXHQvLyBNb3VzZSBidXR0b25zXG5cdHRoaXMubW91c2VCdXR0b25zID0geyBPUkJJVDogVEhSRUUuTU9VU0UuTEVGVCwgWk9PTTogVEhSRUUuTU9VU0UuTUlERExFLCBQQU46IFRIUkVFLk1PVVNFLlJJR0hUIH07XG5cblx0Ly8gZm9yIHJlc2V0XG5cdHRoaXMudGFyZ2V0MCA9IHRoaXMudGFyZ2V0LmNsb25lKCk7XG5cdHRoaXMucG9zaXRpb24wID0gdGhpcy5vYmplY3QucG9zaXRpb24uY2xvbmUoKTtcblx0dGhpcy56b29tMCA9IHRoaXMub2JqZWN0Lnpvb207XG5cblx0Ly9cblx0Ly8gcHVibGljIG1ldGhvZHNcblx0Ly9cblxuXHR0aGlzLmdldFBvbGFyQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gc3BoZXJpY2FsLnBoaTtcblxuXHR9O1xuXG5cdHRoaXMuZ2V0QXppbXV0aGFsQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gc3BoZXJpY2FsLnRoZXRhO1xuXG5cdH07XG5cblx0dGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHNjb3BlLnRhcmdldC5jb3B5KCBzY29wZS50YXJnZXQwICk7XG5cdFx0c2NvcGUub2JqZWN0LnBvc2l0aW9uLmNvcHkoIHNjb3BlLnBvc2l0aW9uMCApO1xuXHRcdHNjb3BlLm9iamVjdC56b29tID0gc2NvcGUuem9vbTA7XG5cblx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR9O1xuXG5cdC8vIHRoaXMgbWV0aG9kIGlzIGV4cG9zZWQsIGJ1dCBwZXJoYXBzIGl0IHdvdWxkIGJlIGJldHRlciBpZiB3ZSBjYW4gbWFrZSBpdCBwcml2YXRlLi4uXG5cdHRoaXMudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdC8vIHNvIGNhbWVyYS51cCBpcyB0aGUgb3JiaXQgYXhpc1xuXHRcdHZhciBxdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMoIG9iamVjdC51cCwgbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKSApO1xuXHRcdHZhciBxdWF0SW52ZXJzZSA9IHF1YXQuY2xvbmUoKS5pbnZlcnNlKCk7XG5cblx0XHR2YXIgbGFzdFBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0XHR2YXIgbGFzdFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG5cblx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblxuXHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0Ly8gcm90YXRlIG9mZnNldCB0byBcInktYXhpcy1pcy11cFwiIHNwYWNlXG5cdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0ICk7XG5cblx0XHRcdC8vIGFuZ2xlIGZyb20gei1heGlzIGFyb3VuZCB5LWF4aXNcblx0XHRcdHNwaGVyaWNhbC5zZXRGcm9tVmVjdG9yMyggb2Zmc2V0ICk7XG5cblx0XHRcdGlmICggc2NvcGUuYXV0b1JvdGF0ZSAmJiBzdGF0ZSA9PT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0XHRyb3RhdGVMZWZ0KCBnZXRBdXRvUm90YXRpb25BbmdsZSgpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c3BoZXJpY2FsLnRoZXRhICs9IHNwaGVyaWNhbERlbHRhLnRoZXRhO1xuXHRcdFx0c3BoZXJpY2FsLnBoaSArPSBzcGhlcmljYWxEZWx0YS5waGk7XG5cblx0XHRcdC8vIHJlc3RyaWN0IHRoZXRhIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdHNwaGVyaWNhbC50aGV0YSA9IE1hdGgubWF4KCBzY29wZS5taW5BemltdXRoQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhBemltdXRoQW5nbGUsIHNwaGVyaWNhbC50aGV0YSApICk7XG5cblx0XHRcdC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRzcGhlcmljYWwucGhpID0gTWF0aC5tYXgoIHNjb3BlLm1pblBvbGFyQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhQb2xhckFuZ2xlLCBzcGhlcmljYWwucGhpICkgKTtcblxuXHRcdFx0c3BoZXJpY2FsLm1ha2VTYWZlKCk7XG5cblxuXHRcdFx0c3BoZXJpY2FsLnJhZGl1cyAqPSBzY2FsZTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgcmFkaXVzIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgPSBNYXRoLm1heCggc2NvcGUubWluRGlzdGFuY2UsIE1hdGgubWluKCBzY29wZS5tYXhEaXN0YW5jZSwgc3BoZXJpY2FsLnJhZGl1cyApICk7XG5cblx0XHRcdC8vIG1vdmUgdGFyZ2V0IHRvIHBhbm5lZCBsb2NhdGlvblxuXHRcdFx0c2NvcGUudGFyZ2V0LmFkZCggcGFuT2Zmc2V0ICk7XG5cblx0XHRcdG9mZnNldC5zZXRGcm9tU3BoZXJpY2FsKCBzcGhlcmljYWwgKTtcblxuXHRcdFx0Ly8gcm90YXRlIG9mZnNldCBiYWNrIHRvIFwiY2FtZXJhLXVwLXZlY3Rvci1pcy11cFwiIHNwYWNlXG5cdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0SW52ZXJzZSApO1xuXG5cdFx0XHRwb3NpdGlvbi5jb3B5KCBzY29wZS50YXJnZXQgKS5hZGQoIG9mZnNldCApO1xuXG5cdFx0XHRzY29wZS5vYmplY3QubG9va0F0KCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVEYW1waW5nID09PSB0cnVlICkge1xuXG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEucGhpICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzY2FsZSA9IDE7XG5cdFx0XHRwYW5PZmZzZXQuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdC8vIHVwZGF0ZSBjb25kaXRpb24gaXM6XG5cdFx0XHQvLyBtaW4oY2FtZXJhIGRpc3BsYWNlbWVudCwgY2FtZXJhIHJvdGF0aW9uIGluIHJhZGlhbnMpXjIgPiBFUFNcblx0XHRcdC8vIHVzaW5nIHNtYWxsLWFuZ2xlIGFwcHJveGltYXRpb24gY29zKHgvMikgPSAxIC0geF4yIC8gOFxuXG5cdFx0XHRpZiAoIHpvb21DaGFuZ2VkIHx8XG5cdFx0XHRcdGxhc3RQb3NpdGlvbi5kaXN0YW5jZVRvU3F1YXJlZCggc2NvcGUub2JqZWN0LnBvc2l0aW9uICkgPiBFUFMgfHxcblx0XHRcdFx0OCAqICggMSAtIGxhc3RRdWF0ZXJuaW9uLmRvdCggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKSApID4gRVBTICkge1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRcdFx0bGFzdFBvc2l0aW9uLmNvcHkoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApO1xuXHRcdFx0XHRsYXN0UXVhdGVybmlvbi5jb3B5KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApO1xuXHRcdFx0XHR6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApO1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XG5cblx0XHQvL3Njb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2Rpc3Bvc2UnIH0gKTsgLy8gc2hvdWxkIHRoaXMgYmUgYWRkZWQgaGVyZT9cblxuXHR9O1xuXG5cdC8vXG5cdC8vIGludGVybmFsc1xuXHQvL1xuXG5cdHZhciBzY29wZSA9IHRoaXM7XG5cblx0dmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuXHR2YXIgc3RhcnRFdmVudCA9IHsgdHlwZTogJ3N0YXJ0JyB9O1xuXHR2YXIgZW5kRXZlbnQgPSB7IHR5cGU6ICdlbmQnIH07XG5cblx0dmFyIFNUQVRFID0geyBOT05FIDogLSAxLCBST1RBVEUgOiAwLCBET0xMWSA6IDEsIFBBTiA6IDIsIFRPVUNIX1JPVEFURSA6IDMsIFRPVUNIX0RPTExZIDogNCwgVE9VQ0hfUEFOIDogNSB9O1xuXG5cdHZhciBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0dmFyIEVQUyA9IDAuMDAwMDAxO1xuXG5cdC8vIGN1cnJlbnQgcG9zaXRpb24gaW4gc3BoZXJpY2FsIGNvb3JkaW5hdGVzXG5cdHZhciBzcGhlcmljYWwgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cdHZhciBzcGhlcmljYWxEZWx0YSA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcblxuXHR2YXIgc2NhbGUgPSAxO1xuXHR2YXIgcGFuT2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0dmFyIHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0dmFyIHJvdGF0ZVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHJvdGF0ZUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciByb3RhdGVEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0dmFyIHBhblN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHBhbkVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBwYW5EZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0dmFyIGRvbGx5U3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgZG9sbHlFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgZG9sbHlEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0ZnVuY3Rpb24gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSB7XG5cblx0XHRyZXR1cm4gMiAqIE1hdGguUEkgLyA2MCAvIDYwICogc2NvcGUuYXV0b1JvdGF0ZVNwZWVkO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBnZXRab29tU2NhbGUoKSB7XG5cblx0XHRyZXR1cm4gTWF0aC5wb3coIDAuOTUsIHNjb3BlLnpvb21TcGVlZCApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiByb3RhdGVMZWZ0KCBhbmdsZSApIHtcblxuXHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhIC09IGFuZ2xlO1xuXG5cdH1cblxuXHRmdW5jdGlvbiByb3RhdGVVcCggYW5nbGUgKSB7XG5cblx0XHRzcGhlcmljYWxEZWx0YS5waGkgLT0gYW5nbGU7XG5cblx0fVxuXG5cdHZhciBwYW5MZWZ0ID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuTGVmdCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDAgKTsgLy8gZ2V0IFggY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuXHRcdFx0di5tdWx0aXBseVNjYWxhciggLSBkaXN0YW5jZSApO1xuXG5cdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHR2YXIgcGFuVXAgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW5VcCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDEgKTsgLy8gZ2V0IFkgY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuXHRcdFx0di5tdWx0aXBseVNjYWxhciggZGlzdGFuY2UgKTtcblxuXHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0Ly8gZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGluIHBpeGVsczsgcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXG5cdHZhciBwYW4gPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbiAoIGRlbHRhWCwgZGVsdGFZICkge1xuXG5cdFx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHQvLyBwZXJzcGVjdGl2ZVxuXHRcdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cdFx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cdFx0XHRcdHZhciB0YXJnZXREaXN0YW5jZSA9IG9mZnNldC5sZW5ndGgoKTtcblxuXHRcdFx0XHQvLyBoYWxmIG9mIHRoZSBmb3YgaXMgY2VudGVyIHRvIHRvcCBvZiBzY3JlZW5cblx0XHRcdFx0dGFyZ2V0RGlzdGFuY2UgKj0gTWF0aC50YW4oICggc2NvcGUub2JqZWN0LmZvdiAvIDIgKSAqIE1hdGguUEkgLyAxODAuMCApO1xuXG5cdFx0XHRcdC8vIHdlIGFjdHVhbGx5IGRvbid0IHVzZSBzY3JlZW5XaWR0aCwgc2luY2UgcGVyc3BlY3RpdmUgY2FtZXJhIGlzIGZpeGVkIHRvIHNjcmVlbiBoZWlnaHRcblx0XHRcdFx0cGFuTGVmdCggMiAqIGRlbHRhWCAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0cGFuVXAoIDIgKiBkZWx0YVkgKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHQvLyBvcnRob2dyYXBoaWNcblx0XHRcdFx0cGFuTGVmdCggZGVsdGFYICogKCBzY29wZS5vYmplY3QucmlnaHQgLSBzY29wZS5vYmplY3QubGVmdCApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudFdpZHRoLCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdHBhblVwKCBkZWx0YVkgKiAoIHNjb3BlLm9iamVjdC50b3AgLSBzY29wZS5vYmplY3QuYm90dG9tICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gY2FtZXJhIG5laXRoZXIgb3J0aG9ncmFwaGljIG5vciBwZXJzcGVjdGl2ZVxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBwYW4gZGlzYWJsZWQuJyApO1xuXHRcdFx0XHRzY29wZS5lbmFibGVQYW4gPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0ZnVuY3Rpb24gZG9sbHlJbiggZG9sbHlTY2FsZSApIHtcblxuXHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdHNjYWxlIC89IGRvbGx5U2NhbGU7XG5cblx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAqIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBkb2xseU91dCggZG9sbHlTY2FsZSApIHtcblxuXHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdHNjYWxlICo9IGRvbGx5U2NhbGU7XG5cblx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAvIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvL1xuXHQvLyBldmVudCBjYWxsYmFja3MgLSB1cGRhdGUgdGhlIG9iamVjdCBzdGF0ZVxuXHQvL1xuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duUm90YXRlJyApO1xuXG5cdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Eb2xseScgKTtcblxuXHRcdGRvbGx5U3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duUGFuJyApO1xuXG5cdFx0cGFuU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUm90YXRlJyApO1xuXG5cdFx0cm90YXRlRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuXHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuXHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVEb2xseScgKTtcblxuXHRcdGRvbGx5RW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9XG5cblx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVQYW4nICk7XG5cblx0XHRwYW5FbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cblx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlVXAnICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlV2hlZWwnICk7XG5cblx0XHRpZiAoIGV2ZW50LmRlbHRhWSA8IDAgKSB7XG5cblx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuZGVsdGFZID4gMCApIHtcblxuXHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH1cblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVLZXlEb3duKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVLZXlEb3duJyApO1xuXG5cdFx0c3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLlVQOlxuXHRcdFx0XHRwYW4oIDAsIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLkJPVFRPTTpcblx0XHRcdFx0cGFuKCAwLCAtIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLkxFRlQ6XG5cdFx0XHRcdHBhbiggc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuUklHSFQ6XG5cdFx0XHRcdHBhbiggLSBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRSb3RhdGUnICk7XG5cblx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnREb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydERvbGx5JyApO1xuXG5cdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcblxuXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdGRvbGx5U3RhcnQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0UGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0UGFuJyApO1xuXG5cdFx0cGFuU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcblx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZURvbGx5JyApO1xuXG5cdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcblxuXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdGRvbGx5RW5kLnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fVxuXG5cdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUGFuJyApO1xuXG5cdFx0cGFuRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuXHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoRW5kJyApO1xuXG5cdH1cblxuXHQvL1xuXHQvLyBldmVudCBoYW5kbGVycyAtIEZTTTogbGlzdGVuIGZvciBldmVudHMgYW5kIHJlc2V0IHN0YXRlXG5cdC8vXG5cblx0ZnVuY3Rpb24gb25Nb3VzZURvd24oIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLk9SQklUICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5ST1RBVEU7XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5aT09NICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5ET0xMWTtcblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlBBTiApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuUEFOO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAoIHN0YXRlID09PSBTVEFURS5ST1RBVEUgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLkRPTExZICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5QQU4gKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlVXAoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGhhbmRsZU1vdXNlVXAoIGV2ZW50ICk7XG5cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSB8fCAoIHN0YXRlICE9PSBTVEFURS5OT05FICYmIHN0YXRlICE9PSBTVEFURS5ST1RBVEUgKSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApOyAvLyBub3Qgc3VyZSB3aHkgdGhlc2UgYXJlIGhlcmUuLi5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbktleURvd24oIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVLZXlzID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0aGFuZGxlS2V5RG93biggZXZlbnQgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuXHRcdFx0Y2FzZSAxOlx0Ly8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1JPVEFURTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlx0Ly8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydERvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfRE9MTFk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0UGFuKCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUEFOO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH1cblxuXHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaE1vdmUoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuXHRcdFx0Y2FzZSAxOiAvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUk9UQVRFICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjogLy8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX0RPTExZICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9QQU4gKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGhhbmRsZVRvdWNoRW5kKCBldmVudCApO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Db250ZXh0TWVudSggZXZlbnQgKSB7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdH1cblxuXHQvL1xuXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UgKTtcblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XG5cblx0Ly8gZm9yY2UgYW4gdXBkYXRlIGF0IHN0YXJ0XG5cblx0dGhpcy51cGRhdGUoKTtcblxufTtcblxuVEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICk7XG5USFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRIUkVFLk9yYml0Q29udHJvbHM7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBUSFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZSwge1xuXG5cdGNlbnRlcjoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5jZW50ZXIgaGFzIGJlZW4gcmVuYW1lZCB0byAudGFyZ2V0JyApO1xuXHRcdFx0cmV0dXJuIHRoaXMudGFyZ2V0O1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Ly8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuXG5cdG5vWm9vbToge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVab29tO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZVpvb20gPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0bm9Sb3RhdGU6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVJvdGF0ZTtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlUm90YXRlID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdG5vUGFuOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVQYW47XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZVBhbiA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRub0tleXM6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlS2V5cztcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVLZXlzID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdHN0YXRpY01vdmluZyA6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlRGFtcGluZztcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVEYW1waW5nID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdGR5bmFtaWNEYW1waW5nRmFjdG9yIDoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYW1waW5nRmFjdG9yO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZGFtcGluZ0ZhY3RvciA9IHZhbHVlO1xuXG5cdFx0fVxuXG5cdH1cblxufSApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL2xpYnMvT3JiaXRDb250cm9scy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFNjZW5lMDFcbiAqIERhdGU6IDE3LzA1LzMxXG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5JztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZTAxIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgIHRoaXMuQm94ID0gbnVsbDtcbiAgICB0aGlzLnRpbWVyID0gMDtcblxuICAgIHRoaXMuY3JlYXRlU2NlbmUgPSB0aGlzLl9jcmVhdGVTY2VuZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlID0gdGhpcy5fdXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIOOCt+ODvOODs+OCkuS9nOaIkOOAguOCquODluOCuOOCp+OCr+ODiOOCkuagvOe0jVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NyZWF0ZVNjZW5lKCl7XG5cbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7IC8v44K344O844Oz5L2c5oiQXG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2luZG93LmlubmVyV2lkdGgvd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDAwKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTAwMDtcblxuICAgIHRoaXMuQm94ID0gbmV3IFRIUkVFLk1lc2goXG4gICAgICAgIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg1MCw1MCw1MCksXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCgweGZmZmZmZilcbiAgICApO1xuXG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5Cb3gpO1xuXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91cGRhdGUoKXtcblxuICAgIHRoaXMudGltZXIgKz0gMC4xO1xuICAgIHRoaXMuQm94LnBvc2l0aW9uLnggPSA1MCAqIE1hdGguc2luKHRoaXMudGltZXIpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1NjZW5lMDEuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBTY2VuZTAyXG4gKiBEYXRlOiAxNy8wNS8zMVxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUwMiBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2NlbmUgPSBudWxsO1xuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLkJveCA9IG51bGw7XG4gICAgdGhpcy50aW1lciA9IDA7XG5cbiAgICB0aGlzLmNyZWF0ZVNjZW5lID0gdGhpcy5fY3JlYXRlU2NlbmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMuX3VwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuXG4gIH1cblxuXG4gIC8qKlxuICAgKiDjgrfjg7zjg7PjgpLkvZzmiJDjgILjgqrjg5bjgrjjgqfjgq/jg4jjgpLmoLzntI1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpOyAvL+OCt+ODvOODs+S9nOaIkFxuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoL3dpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwMCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDEwMDA7XG5cbiAgICB0aGlzLkJveCA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgICBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNTAsNTAsNTApLFxuICAgICAgICBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoMHg4ODg4ODgpXG4gICAgKTtcblxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuQm94KTtcblxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXBkYXRlKCl7XG5cbiAgICB0aGlzLnRpbWVyICs9IDAuMTtcbiAgICB0aGlzLkJveC5wb3NpdGlvbi55ID0gNTAgKiBNYXRoLnNpbih0aGlzLnRpbWVyKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9TY2VuZTAyLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRGlzcGxheVxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IFRleHR1cmVCZyBmcm9tIFwiLi4vdmlzdWFsL1RleHR1cmVCZ1wiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlUb3Age1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICAvLyBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBnYi5pbi50ZXh0dXJlQmcgPSBuZXcgVGV4dHVyZUJnKCk7XG5cbiAgICBnYi5pbi50ZXh0dXJlQmcuaW5pdCgpO1xuXG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblx0XHQvLyB3aW5kb3cuY29uc29sZS5sb2coJ3N0YXRpY19SdW4nKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVCZy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFRleHR1cmVCZ1xuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IEVudHJ5IGZyb20gJy4uL0NvcmUvRW50cnknO1xuaW1wb3J0IFBsYW5lIGZyb20gJy4vUGxhbmUnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVCZyBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYmdsLW91dHB1dCcpO1xuXG4gICAgdGhpcy53aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcblxuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcblxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhID0gdGhpcy5fY3JlYXRlQ2FtZXJhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlciA9IHRoaXMuX2NyZWF0ZVJlbmRlcmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTY2VuZSA9IHRoaXMuX2NyZWF0ZVNjZW5lLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5fb25SZXNpemUuYmluZCh0aGlzKTtcblx0XHR0aGlzLlVwZGF0ZSA9IHRoaXMuX1VwZGF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMubG9hZFRleHR1cmUgPSB0aGlzLl9sb2FkVGV4dHVyZS5iaW5kKHRoaXMpO1xuXG5cdFx0dGhpcy5wbGFuZSA9IG5ldyBQbGFuZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICog5Yid5pyf5YyWXG4gICAqL1xuICBpbml0KCl7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpO1xuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKCk7XG5cblx0XHR0aGlzLlVwZGF0ZSgpO1xuXG5cdFx0dGhpcy5sb2FkVGV4dHVyZSgpO1xuICB9XG5cblxuICAvKipcbiAgICog44Kr44Oh44Op5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlQ2FtZXJhKCl7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxMDA7XG5cbiAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwwLDApKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvOS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVJlbmRlcmVyKCl7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgYWxwaGEgICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICBhbnRpYWxpYXMgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIHN0ZW5jaWwgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgZGVwdGggICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIHByZW11bHRpcGxpZWRBbHBoYSA6IGZhbHNlLFxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhc1xuXHRcdH0pO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmLCAwLjApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDjgrfjg7zjg7PkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICog55S75YOP44KS44Ot44O844OJXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfbG9hZFRleHR1cmUoKXtcblxuXHRcdHRoaXMucGxhbmUubG9hZFRleHR1cmUoJy4uLy4uLy4uLy4uL2Fzc2V0cy9yZXNvdXJjZS9pbWcvc2hpYnV5YTAxLmpwZycsICgpID0+IHtcblx0XHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMucGxhbmUubWVzaCk7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9uUmVzaXplKCk7XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHR0aGlzLm9uUmVzaXplKCk7XG5cdFx0XHR0aGlzLlVwZGF0ZSgpO1xuXHRcdH0pO1xuXG5cdH1cblxuICAvKipcbiAgICog5pu05pawXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfVXBkYXRlKCkge1xuXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG4gICAgICB0aGlzLlVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDnlLvpnaLjg6rjgrXjgqTjgrrjgqTjg5njg7Pjg4hcbiAgICovXG4gIF9vblJlc2l6ZSgpIHtcblx0XHR0aGlzLmNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cdFx0dGhpcy5wbGFuZS5tZXNoLm1hdGVyaWFsLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcblxuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuXG5cdHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1RleHR1cmVCZy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFBsYW5lXG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmUgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cblx0XHR0aGlzLnVuaWZvcm1zID0ge307XG5cdFx0dGhpcy50ZXh0dXJlID0gbnVsbDtcblx0XHR0aGlzLm1lc2ggPSBudWxsO1xuXG5cdFx0dGhpcy5sb2FkVGV4dHVyZSA9IHRoaXMuX2xvYWRUZXh0dXJlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jcmVhdGVNZXNoID0gdGhpcy5fY3JlYXRlTWVzaC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVuZGVyID0gdGhpcy5fcmVuZGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZXNpemUgPSB0aGlzLl9yZXNpemUuYmluZCh0aGlzKTtcblxuICB9XG5cblx0X2xvYWRUZXh0dXJlKGltYWdlLCBjYWxsYmFjaykge1xuXHRcdGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG5cdFx0bG9hZGVyLmxvYWQoaW1hZ2UsICh0ZXh0dXJlKSA9PiB7XG5cdFx0XHR0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XG4gICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XG4gICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xuICAgICAgdGhpcy5tZXNoID0gdGhpcy5jcmVhdGVNZXNoKCk7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH0pO1xuXHR9XG5cblx0X2NyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy51bmlmb3JtcyA9IHtcblx0XHRcdHJlc29sdXRpb246IHtcblx0XHRcdFx0dHlwZTogJ3YyJyxcblx0XHRcdFx0dmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KSxcblx0XHRcdH0sXG5cdFx0XHRpbWFnZVJlc29sdXRpb246IHtcblx0XHRcdFx0dHlwZTogJ3YyJyxcblx0XHRcdFx0dmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKDIwNDgsIDEzNTYpLFxuXHRcdFx0fSxcblx0XHRcdHRleHR1cmU6IHtcblx0XHRcdFx0dHlwZTogJ3QnLFxuXHRcdFx0XHR2YWx1ZTogdGhpcy50ZXh0dXJlLFxuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIG5ldyBUSFJFRS5NZXNoKFxuXHRcdFx0bmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMiwgMiksXG5cdFx0XHRuZXcgVEhSRUUuUmF3U2hhZGVyTWF0ZXJpYWwoe1xuXHRcdFx0XHR1bmlmb3JtczogdGhpcy51bmlmb3Jtcyxcblx0XHRcdFx0dmVydGV4U2hhZGVyOiByZXF1aXJlKCcuLi8uLi8uLi8uLi9nbHNsL2NvdmVyLnZlcnQnKSxcblx0XHRcdFx0ZnJhZ21lbnRTaGFkZXI6IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsc2wvY292ZXIuZnJhZycpLFxuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblxuICAvKipcbiAgICog44Os44Oz44OA44Op44O8XG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfcmVuZGVyKHRpbWUpIHtcblxuXHRcdGlmICh0aGlzLnN0b3ApIHJldHVybjtcblx0XHR0aGlzLnVuaWZvcm1zLnRpbWUudmFsdWUgKz0gdGltZSAvIHRoaXMuaW50ZXJ2YWw7XG5cdFx0aWYgKHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSA+IDEpIHtcblx0XHRcdHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSA9IDA7XG5cdFx0XHR0aGlzLnByZXZfbnVtID0gdGhpcy5uZXh0X251bTtcblx0XHRcdHRoaXMudW5pZm9ybXMudGV4UHJldi52YWx1ZSA9IHRoaXMudGV4dHVyZXNbdGhpcy5uZXh0X251bV07XG5cdFx0XHR3aGlsZSAodGhpcy5uZXh0X251bSA9PSB0aGlzLnByZXZfbnVtKSB7XG5cdFx0XHRcdHRoaXMubmV4dF9udW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRleHR1cmVzLmxlbmd0aCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnVuaWZvcm1zLnRleE5leHQudmFsdWUgPSB0aGlzLnRleHR1cmVzW3RoaXMubmV4dF9udW1dO1xuXHRcdH1cbiAgfVxuXG5cdF9yZXNpemUoKXtcblx0XHR0aGlzLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvUGxhbmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiB1djtcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuICAgIHZVdiA9IHV2O1xcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocG9zaXRpb24sIDEuMCk7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL2NvdmVyLnZlcnRcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcXG51bmlmb3JtIHZlYzIgaW1hZ2VSZXNvbHV0aW9uO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4odm9pZCkge1xcbiAgICB2ZWMyIHJhdGlvID0gdmVjMihcXG4gICAgICAgIG1pbigocmVzb2x1dGlvbi54IC8gcmVzb2x1dGlvbi55KSAvIChpbWFnZVJlc29sdXRpb24ueCAvIGltYWdlUmVzb2x1dGlvbi55KSwgMS4wKSxcXG4gICAgICAgIG1pbigocmVzb2x1dGlvbi55IC8gcmVzb2x1dGlvbi54KSAvIChpbWFnZVJlc29sdXRpb24ueSAvIGltYWdlUmVzb2x1dGlvbi54KSwgMS4wKVxcbiAgICApO1xcblxcbiAgICB2ZWMyIHV2ID0gdmVjMihcXG4gICAgICAgIHZVdi54ICogcmF0aW8ueCArICgxLjAgLSByYXRpby54KSAqIDAuNSxcXG4gICAgICAgIHZVdi55ICogcmF0aW8ueSArICgxLjAgLSByYXRpby55KSAqIDAuNVxcbiAgICApO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodGV4dHVyZSwgdXYpO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3NyYy9hc3NldHMvZ2xzbC9jb3Zlci5mcmFnXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBEaXNwbGF5XG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG4vLyBpbXBvcnQgV2ViR0xpbml0IGZyb20gJy4vV2ViR0xpbml0LmpzJztcblxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi4vdmlzdWFsL0NhbnZhc1wiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlUb3Age1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICAvLyBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBnYi5pbi5jYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgICBnYi5pbi5jYW52YXMuaW5pdCgpO1xuXG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblx0XHQvLyB3aW5kb3cuY29uc29sZS5sb2coJ3N0YXRpY19SdW4nKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVNb3ZpZS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENhbnZhc1xuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IEVudHJ5IGZyb20gJy4uL0NvcmUvRW50cnknO1xuLy8gaW1wb3J0IFRpdGxlT2JqZWN0IGZyb20gXCIuL1RpdGxlT2JqZWN0XCI7XG4vLyBpbXBvcnQgQ2FtZXJhIGZyb20gJy4vVXRpbHMvQ2FtZXJhJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnVuaWZvcm1zID0ge1xuICAgICAgdV90aW1lOiB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXG4gICAgICB1X3Jlc29sdXRpb246IHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoKSB9LFxuICAgICAgdV9tb3VzZTogeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMigpIH1cbiAgICB9O1xuXG4gICAgLy8gdGhpcy50aXRsZU9iamVjdCA9IG5ldyBUaXRsZU9iamVjdCgpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2ViZ2wtb3V0cHV0Jyk7XG5cbiAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgLy8gdGhpcy5vdXRwdXQgPSBvcHRzLm91dHB1dCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcblx0XHR0aGlzLmN1YmUgPSBudWxsO1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEgPSB0aGlzLl9jcmVhdGVDYW1lcmEuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyID0gdGhpcy5fY3JlYXRlUmVuZGVyZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVNjZW5lID0gdGhpcy5fY3JlYXRlU2NlbmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZU9iamVjdCA9IHRoaXMuX2NyZWF0ZU9iamVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3JiaXRDb250cm9scyA9IHRoaXMuX29yYml0Q29udHJvbHMuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucGxhbmVPYmplY3QgPSB0aGlzLl9wbGFuZU9iamVjdC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5yZW5kZXIgPSB0aGlzLl9yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25SZXNpemUgPSB0aGlzLl9vblJlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5VcGRhdGUgPSB0aGlzLl9VcGRhdGUuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMllxuICAgKi9cbiAgaW5pdCgpe1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKTtcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuXG5cdFx0dGhpcy5vcmJpdENvbnRyb2xzKCk7XG5cdFx0Ly8gdGhpcy5jcmVhdGVPYmplY3QoKTtcblxuICAgIHRoaXMucGxhbmVPYmplY3QoKTtcblxuICAgIHRoaXMuVXBkYXRlKCk7XG5cbiAgICAvLyB0aGlzLnRpdGxlT2JqZWN0LmxvYWRUZXh0dXJlKCgpID0+IHtcbiAgICAvLyAgIHRoaXMuc2NlbmUuYWRkKHRoaXMudGl0bGVPYmplY3Qub2JqKTtcbiAgICAvLyB9KTtcblxuICAgIC8v44Oq44K144Kk44K644Kk44OZ44Oz44OI55m654GrXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICB9LCBmYWxzZSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjgqvjg6Hjg6nkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVDYW1lcmEoKXtcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDEwMDtcblxuICAgIHRoaXMuY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygwLDAsMCkpO1xuXG4gIH1cblxuICAvKipcbiAgICog44Os44Oz44OA44Op44O85L2c5oiQXG4gICAqL1xuICBfY3JlYXRlUmVuZGVyZXIoKXtcblxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICBhbHBoYSAgICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIGFudGlhbGlhcyAgICAgICAgICA6IGZhbHNlLFxuICAgICAgc3RlbmNpbCAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICBkZXB0aCAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgcHJlbXVsdGlwbGllZEFscGhhIDogZmFsc2UsXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzXG5cdFx0fSk7XG5cbiAgICAvLyB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhmZmZmZmYpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweDAwMDAwMCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgLy8gdGhpcy5vdXRwdXQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcblxuICB9XG5cbiAgLyoqXG4gICAq44CA44K344O844Oz5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlU2NlbmUoKXtcblxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIE9iamVjdOS9nOaIkFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0X2NyZWF0ZU9iamVjdCgpe1xuXG4gICAgbGV0IGN1YmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg0LCA0LCA0KTtcbiAgICBsZXQgY3ViZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICAgIHdpcmVmcmFtZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdGhpcy5jdWJlID0gbmV3IFRIUkVFLk1lc2goY3ViZUdlb21ldHJ5LCBjdWJlTWF0ZXJpYWwpO1xuICAgIHRoaXMuY3ViZS5wb3NpdGlvbi54ID0gMztcbiAgICB0aGlzLmN1YmUucG9zaXRpb24ueSA9IDM7XG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLnogPSAzO1xuXG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5jdWJlKTtcblxuXHR9XG5cblx0X3BsYW5lT2JqZWN0KCl7XG4gICAgdGhpcy5wbGFuZSA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgICAvLyBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSgyNTYsIDY0LCA0MCwgMTApLFxuICAgICAgICBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSg1LCAyMCwgMzIpLFxuICAgICAgICBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgICAgIHVuaWZvcm1zOiB0aGlzLnVuaWZvcm1zLFxuICAgICAgICAgIHZlcnRleFNoYWRlcjogcmVxdWlyZSgnLi4vLi4vLi4vLi4vZ2xzbC9pbmRleC90ZXN0LnZlcnQnKSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlcjogcmVxdWlyZSgnLi4vLi4vLi4vLi4vZ2xzbC9pbmRleC90ZXN0LmZyYWcnKSxcbiAgICAgICAgfSlcbiAgICApXG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5wbGFuZSk7XG4gIH1cblxuICAvKipcbiAgICog44Os44Oz44OA44Op44O8XG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfcmVuZGVyKCkge1xuICAgIGxldCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xuICAgIGxldCB0aW1lID0gY2xvY2suZ2V0RGVsdGEoKTtcblxuICAgIC8vIHRoaXMudGl0bGVPYmplY3QudGl0cmVuZGVyKHRpbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOabtOaWsFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX1VwZGF0ZSgpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuICAgICAgdGhpcy5VcGRhdGUoKTtcbiAgICB9KTtcbiAgICAvLyB0aGlzLmNvbnRyb2xzLnVwZGF0ZSgpO1xuICAgIHRoaXMudW5pZm9ybXMudV90aW1lLnZhbHVlICs9IDAuMDU7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICB9XG5cbiAgLyoqXG4gICAq44CA55S76Z2i44Oq44K144Kk44K6XG4gICAqL1xuICBfb25SZXNpemUoKSB7XG4gICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxuXG5cdC8qKlxuICAgKiDjgqvjg6Hjg6njgrPjg7Pjg4jjg63jg7zjg6tcblx0ICovXG5cdF9vcmJpdENvbnRyb2xzKCl7XG5cdFx0dGhpcy5jb250cm9scyA9IG5ldyBUSFJFRS5PcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhKTtcblx0XHR0aGlzLmNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlO1xuXHRcdGxldCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xuXG5cdFx0bGV0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcblx0XHR0aGlzLmNvbnRyb2xzLnVwZGF0ZShkZWx0YSk7XG4gIH1cblxuXHRzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9DYW52YXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG4vL2F0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QudmVydFxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSB2ZWMyIHVfcmVzb2x1dGlvbjtcXG51bmlmb3JtIGZsb2F0IHVfdGltZTtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzIgc3QgPSBnbF9GcmFnQ29vcmQueHkvdV9yZXNvbHV0aW9uLnh5O1xcbiAgICBnbF9GcmFnQ29sb3I9dmVjNChzdC54LHN0LnksMC4wLDEuMCk7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QuZnJhZ1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==