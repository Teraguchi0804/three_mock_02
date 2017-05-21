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
	
	var _DisplayTextureMovie = __webpack_require__(26);
	
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
	        vertexShader: __webpack_require__(23),
	        fragmentShader: __webpack_require__(24)
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
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\n//attribute vec3 position;\n\nvoid main() {\n    gl_Position = vec4( position, 1.0 );\n}\n"

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform vec2 u_resolution;\nuniform float u_time;\n\nvoid main() {\n    vec2 st = gl_FragCoord.xy/u_resolution.xy;\n    gl_FragColor=vec4(st.x,st.y,0.0,1.0);\n}"

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
/* 26 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2UwNWE1NjgyOGUwNGQ4Y2ViNjIiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvcmUvQ29uZi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9VdGlsLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hbmltYXRpb24vcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL2NhbmNlbEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYXJyYXkvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy91YS9jaGVja0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy91YS1wYXJzZXIubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvaW1nL3ByZWxvYWRJbWcuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5Ud2l0dGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuTGluZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkZhY2VCb29rLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL0Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvQ2FudmFzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvQ29yZS9FbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy9PcmJpdENvbnRyb2xzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2dsc2wvaW5kZXgvdGVzdC52ZXJ0Iiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2dsc2wvaW5kZXgvdGVzdC5mcmFnIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VGV4dHVyZUJnLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VGV4dHVyZU1vdmllLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImdiIiwidW5kZWZpbmVkIiwiaW4iLCJjb21tb24iLCJtYWluIiwiQ29tbW9uIiwic2V0dXAiLCJzZXRFdmVudHMiLCJjb25mIiwidSIsImYiLCJ1dCIsIiQiLCJkb2N1bWVudCIsIm9uIiwib25SZWFkeSIsImJpbmQiLCJvbkxvYWQiLCJDb25mIiwiUkVMRUFTRSIsIkZMRyIsIkxPRyIsIlBBUkFNIiwiU1RBVFMiLCJkZWZXIiwiZGVmSCIsIlciLCJIIiwic3BXIiwic3BIIiwiYnAiLCJtb2RlIiwia2V5cyIsInN3aXRjaE1vZGUiLCJzZWMwMkltZ051bSIsInlvdXR1YmVJRDAxIiwieW91dHViZUlEMDIiLCJ3ZWJGb250TG9hZGVkIiwiaSIsImtleSIsImxlbiIsInBhcmFtIiwicmVmIiwicmVmMSIsInZhbHVlIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZXBsYWNlIiwic3BsaXQiLCJsZW5ndGgiLCJqIiwib2JqIiwiayIsInZhbCIsIlV0aWwiLCJpc1NldFNQU2l6ZSIsInN0YXJ0VGltZSIsImVsYXBzZWRUaW1lIiwibm93IiwiRGF0ZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm1pbjEiLCJtYXgxIiwibWluMiIsIm1heDIiLCJoaXQiLCJyYW5nZSIsIm51bSIsInJlc01pbiIsInJlc01heCIsImJhc2VNaW4iLCJiYXNlTWF4IiwicCIsIm4iLCJwb3MiLCJTdHJpbmciLCJpbmRleE9mIiwic3Vic3RyIiwibnVtZXJhdG9yIiwiZGVub21pbmF0b3IiLCJyYWRpYW5zIiwiUEkiLCJhbmdsZSIsInAxIiwicDIiLCJzcXJ0IiwicG93IiwieCIsInkiLCJhcnIiLCJzb3J0IiwiYSIsImIiLCJnZXRUaW1lIiwiZmxnIiwiY3NzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImlzUmVzU1AiLCJpc1Jlc1BDIiwidXJsIiwiaHJlZiIsInBhcmFtSXRlbXMiLCJsaXN0IiwicGFyYW1JdGVtIiwiaGFzaCIsImwiLCJsZW4xIiwiY29va2llIiwiciIsImciLCJzdHIiLCJ0b1N0cmluZyIsIkFycmF5Iiwiam9pbiIsImNvbnRhaW4iLCJudW1iZXIiLCJfcG93Iiwicm91bmQiLCJyZXMiLCJvcmciLCJkZXN0IiwiYmVmb3JlIiwiYWZ0ZXIiLCJSZWdFeHAiLCJnZXROb3ciLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kIiwiZ2V0U2Vjb25kcyIsIm1pbGxTZWNvbmQiLCJnZXRNaWxsaXNlY29uZHMiLCJnZXREYXRlIiwibW9udGhkYXlzIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsIndlZWtEYXlKUCIsIndESiIsImdldERheSIsIndlZWtEYXlFTiIsIndERSIsImRhdGUiLCJOdW1iZXIiLCJpZ25vcmVBcnJheSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCIkdGFyZ2V0IiwiJGltZyIsImVhY2giLCJ3Iiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwiYXR0ciIsInRyaWdnZXIiLCJzZWxmIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib2ZmIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJwYXRobmFtZSIsImV2ZW50IiwicmV0dXJuVmFsdWUiLCJrZXlDb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ud2hlZWwiLCJvbm1vdXNld2hlZWwiLCJvbnRvdWNobW92ZSIsIm9ua2V5ZG93biIsInByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJVdGlscyIsIl9zZXR1cCIsImNoZWNrQ2xpZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3RoaXMiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpZCIsImNsZWFyVGltZW91dCIsIkFyciIsInNsaWNlIiwidCIsInBhcnNlciIsInJlcXVpcmUiLCJ1YSIsImJyb3dzZXIiLCJnZXRCcm93c2VyIiwibmFtZSIsImRldmljZSIsImdldERldmljZSIsInR5cGUiLCJnZXRPUyIsImRldmljZV9uYW1lIiwidmVuZG9yIiwiZ2V0VUEiLCJzIiwibyIsImMiLCJkIiwidiIsIm0iLCJFIiwiUyIsImV4dGVuZCIsImNvbmNhdCIsImhhcyIsInRvTG93ZXJDYXNlIiwibG93ZXJpemUiLCJtYWpvciIsInRyaW0iLCJyZ3giLCJhcmd1bWVudHMiLCJoYXNPd25Qcm9wZXJ0eSIsImV4ZWMiLCJ0ZXN0IiwiVCIsIm9sZHNhZmFyaSIsInZlcnNpb24iLCJhbWF6b24iLCJtb2RlbCIsInNwcmludCIsIkhUQyIsIlNwcmludCIsIm9zIiwid2luZG93cyIsIk1FIiwiWFAiLCJWaXN0YSIsIlJUIiwiTiIsImNwdSIsImVuZ2luZSIsIkMiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJhcHBseSIsImdldENQVSIsImdldEVuZ2luZSIsImdldFJlc3VsdCIsInNldFVBIiwiVkVSU0lPTiIsIkJST1dTRVIiLCJOQU1FIiwiTUFKT1IiLCJDUFUiLCJBUkNISVRFQ1RVUkUiLCJERVZJQ0UiLCJNT0RFTCIsIlZFTkRPUiIsIlRZUEUiLCJDT05TT0xFIiwiTU9CSUxFIiwiU01BUlRUViIsIlRBQkxFVCIsIldFQVJBQkxFIiwiRU1CRURERUQiLCJFTkdJTkUiLCJPUyIsImV4cG9ydHMiLCJtb2R1bGUiLCJVQVBhcnNlciIsImpRdWVyeSIsIlplcHRvIiwiTCIsImdldCIsInNldCIsImltZ1BhdGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsImltZyIsIkltYWdlIiwiY2FsbGVlIiwic3JjIiwiJGJ0biIsInRleHQiLCJzaGFyZVVSTCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm9wZW4iLCJkZXNjcmlwdGlvbiIsIkZ1bmMiLCJibGFuayIsImRlYnVnZ2VyIiwiZXhwYW5kalF1ZXJ5IiwibWV0aG9kcyIsImNvbnNvbGUiLCJwcmVwZW5kIiwiRlBTIiwid2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ0aW1lciIsImZuIiwiYWRqdXN0IiwiYWRqdXN0VyIsImFkanVzdEgiLCJDU1MiLCJzdXBwb3J0cyIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImxvZyIsImlzSUUiLCJpc1BDIiwiaXNBbmRyb2lkVmVyc2lvbiIsImFsZXJ0IiwiTWFpbiIsInBhZ2UiLCJkYXRhIiwiRGlzcGxheVRvcCIsImNhbnZhcyIsImluaXQiLCJDYW52YXMiLCJ1bmlmb3JtcyIsInVfdGltZSIsInVfcmVzb2x1dGlvbiIsIlRIUkVFIiwiVmVjdG9yMiIsInVfbW91c2UiLCJnZXRFbGVtZW50QnlJZCIsImNhbWVyYSIsInJlbmRlcmVyIiwic2NlbmUiLCJjdWJlIiwiY3JlYXRlQ2FtZXJhIiwiX2NyZWF0ZUNhbWVyYSIsImNyZWF0ZVJlbmRlcmVyIiwiX2NyZWF0ZVJlbmRlcmVyIiwiY3JlYXRlU2NlbmUiLCJfY3JlYXRlU2NlbmUiLCJjcmVhdGVPYmplY3QiLCJfY3JlYXRlT2JqZWN0Iiwib3JiaXRDb250cm9scyIsIl9vcmJpdENvbnRyb2xzIiwicGxhbmVPYmplY3QiLCJfcGxhbmVPYmplY3QiLCJyZW5kZXIiLCJfcmVuZGVyIiwib25SZXNpemUiLCJfb25SZXNpemUiLCJVcGRhdGUiLCJfVXBkYXRlIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJsb29rQXQiLCJWZWN0b3IzIiwiV2ViR0xSZW5kZXJlciIsImFscGhhIiwiYW50aWFsaWFzIiwic3RlbmNpbCIsImRlcHRoIiwicHJlbXVsdGlwbGllZEFscGhhIiwic2V0Q2xlYXJDb2xvciIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsIlNjZW5lIiwiY3ViZUdlb21ldHJ5IiwiQm94R2VvbWV0cnkiLCJjdWJlTWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwid2lyZWZyYW1lIiwiTWVzaCIsInBsYW5lIiwiUGxhbmVCdWZmZXJHZW9tZXRyeSIsIlNoYWRlck1hdGVyaWFsIiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJjbG9jayIsIkNsb2NrIiwidGltZSIsImdldERlbHRhIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImNvbnRyb2xzIiwiT3JiaXRDb250cm9scyIsImF1dG9Sb3RhdGUiLCJkZWx0YSIsInVwZGF0ZSIsIkVudHJ5Iiwib2JqZWN0IiwiZG9tRWxlbWVudCIsImVuYWJsZWQiLCJ0YXJnZXQiLCJtaW5EaXN0YW5jZSIsIm1heERpc3RhbmNlIiwiSW5maW5pdHkiLCJtaW5ab29tIiwibWF4Wm9vbSIsIm1pblBvbGFyQW5nbGUiLCJtYXhQb2xhckFuZ2xlIiwibWluQXppbXV0aEFuZ2xlIiwibWF4QXppbXV0aEFuZ2xlIiwiZW5hYmxlRGFtcGluZyIsImRhbXBpbmdGYWN0b3IiLCJlbmFibGVab29tIiwiem9vbVNwZWVkIiwiZW5hYmxlUm90YXRlIiwicm90YXRlU3BlZWQiLCJlbmFibGVQYW4iLCJrZXlQYW5TcGVlZCIsImF1dG9Sb3RhdGVTcGVlZCIsImVuYWJsZUtleXMiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkJPVFRPTSIsIm1vdXNlQnV0dG9ucyIsIk9SQklUIiwiTU9VU0UiLCJaT09NIiwiTUlERExFIiwiUEFOIiwidGFyZ2V0MCIsImNsb25lIiwicG9zaXRpb24wIiwiem9vbTAiLCJ6b29tIiwiZ2V0UG9sYXJBbmdsZSIsInNwaGVyaWNhbCIsInBoaSIsImdldEF6aW11dGhhbEFuZ2xlIiwidGhldGEiLCJyZXNldCIsInNjb3BlIiwiY29weSIsImRpc3BhdGNoRXZlbnQiLCJjaGFuZ2VFdmVudCIsInN0YXRlIiwiU1RBVEUiLCJOT05FIiwib2Zmc2V0IiwicXVhdCIsIlF1YXRlcm5pb24iLCJzZXRGcm9tVW5pdFZlY3RvcnMiLCJ1cCIsInF1YXRJbnZlcnNlIiwiaW52ZXJzZSIsImxhc3RQb3NpdGlvbiIsImxhc3RRdWF0ZXJuaW9uIiwic3ViIiwiYXBwbHlRdWF0ZXJuaW9uIiwic2V0RnJvbVZlY3RvcjMiLCJyb3RhdGVMZWZ0IiwiZ2V0QXV0b1JvdGF0aW9uQW5nbGUiLCJzcGhlcmljYWxEZWx0YSIsIm1ha2VTYWZlIiwicmFkaXVzIiwic2NhbGUiLCJwYW5PZmZzZXQiLCJzZXRGcm9tU3BoZXJpY2FsIiwiem9vbUNoYW5nZWQiLCJkaXN0YW5jZVRvU3F1YXJlZCIsIkVQUyIsImRvdCIsInF1YXRlcm5pb24iLCJkaXNwb3NlIiwib25Db250ZXh0TWVudSIsIm9uTW91c2VEb3duIiwib25Nb3VzZVdoZWVsIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsIm9uVG91Y2hNb3ZlIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJvbktleURvd24iLCJzdGFydEV2ZW50IiwiZW5kRXZlbnQiLCJST1RBVEUiLCJET0xMWSIsIlRPVUNIX1JPVEFURSIsIlRPVUNIX0RPTExZIiwiVE9VQ0hfUEFOIiwiU3BoZXJpY2FsIiwicm90YXRlU3RhcnQiLCJyb3RhdGVFbmQiLCJyb3RhdGVEZWx0YSIsInBhblN0YXJ0IiwicGFuRW5kIiwicGFuRGVsdGEiLCJkb2xseVN0YXJ0IiwiZG9sbHlFbmQiLCJkb2xseURlbHRhIiwiZ2V0Wm9vbVNjYWxlIiwicm90YXRlVXAiLCJwYW5MZWZ0IiwiZGlzdGFuY2UiLCJvYmplY3RNYXRyaXgiLCJzZXRGcm9tTWF0cml4Q29sdW1uIiwibXVsdGlwbHlTY2FsYXIiLCJwYW5VcCIsInBhbiIsImRlbHRhWCIsImRlbHRhWSIsImVsZW1lbnQiLCJib2R5IiwidGFyZ2V0RGlzdGFuY2UiLCJ0YW4iLCJmb3YiLCJjbGllbnRIZWlnaHQiLCJtYXRyaXgiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJyaWdodCIsImxlZnQiLCJjbGllbnRXaWR0aCIsInRvcCIsImJvdHRvbSIsIndhcm4iLCJkb2xseUluIiwiZG9sbHlTY2FsZSIsImRvbGx5T3V0IiwiaGFuZGxlTW91c2VEb3duUm90YXRlIiwiY2xpZW50WCIsImNsaWVudFkiLCJoYW5kbGVNb3VzZURvd25Eb2xseSIsImhhbmRsZU1vdXNlRG93blBhbiIsImhhbmRsZU1vdXNlTW92ZVJvdGF0ZSIsInN1YlZlY3RvcnMiLCJoYW5kbGVNb3VzZU1vdmVEb2xseSIsImhhbmRsZU1vdXNlTW92ZVBhbiIsImhhbmRsZU1vdXNlVXAiLCJoYW5kbGVNb3VzZVdoZWVsIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZVRvdWNoU3RhcnRSb3RhdGUiLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsImhhbmRsZVRvdWNoU3RhcnREb2xseSIsImR4IiwiZHkiLCJoYW5kbGVUb3VjaFN0YXJ0UGFuIiwiaGFuZGxlVG91Y2hNb3ZlUm90YXRlIiwiaGFuZGxlVG91Y2hNb3ZlRG9sbHkiLCJoYW5kbGVUb3VjaE1vdmVQYW4iLCJoYW5kbGVUb3VjaEVuZCIsImJ1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsImNyZWF0ZSIsIkV2ZW50RGlzcGF0Y2hlciIsImNvbnN0cnVjdG9yIiwiZGVmaW5lUHJvcGVydGllcyIsImNlbnRlciIsIm5vWm9vbSIsIm5vUm90YXRlIiwibm9QYW4iLCJub0tleXMiLCJzdGF0aWNNb3ZpbmciLCJkeW5hbWljRGFtcGluZ0ZhY3RvciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQzlCQTs7OztBQUNBOzs7Ozs7QUFUQTs7Ozs7Ozs7QUFXQSxFQUFDLFlBQUk7O0FBRUg7QUFDQSxPQUFJQSxPQUFPQyxFQUFQLEtBQVlDLFNBQWhCLEVBQTJCRixPQUFPQyxFQUFQLEdBQVksRUFBWjtBQUMzQkQsVUFBT0MsRUFBUCxDQUFVRSxFQUFWLEdBQWUsRUFBZixDQUpHLENBSWdCOztBQUVuQkYsTUFBR0UsRUFBSCxDQUFNQyxNQUFOLEdBQWUsc0JBQWY7QUFDQUgsTUFBR0UsRUFBSCxDQUFNRSxJQUFOLEdBQWEsb0JBQWI7QUFFRCxFQVRELEk7Ozs7Ozs7Ozs7OztzakJDWEE7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SUFBYjtBQUdEOzs7aUNBUVc7O0FBRVZ6VCxTQUFFYixNQUFGLEVBQVVlLEVBQVYsQ0FBYSxNQUFiLEVBQXFCLEtBQUtHLE1BQUwsQ0FBWUQsSUFBWixDQUFpQixJQUFqQixDQUFyQjtBQUVEOzs7MkJBVlk7O0FBRWI7O0FBRUM7Ozs7OzttQkE3QmtCbVQsVTs7Ozs7Ozs7Ozs7O3NqQkNkckI7Ozs7Ozs7O0FBUUE7O0FBRUE7Ozs7Ozs7O0FBRUE7O0tBRXFCQSxVO0FBRW5CLHlCQUFhO0FBQUE7O0FBRVgsVUFBSzdULEtBQUw7QUFDQSxVQUFLQyxTQUFMO0FBRUQ7Ozs7NkJBRU87O0FBRU47QUFDQTs7QUFFRDs7OzhCQUVROztBQUVQUCxVQUFHRSxFQUFILENBQU1rVSxNQUFOLEdBQWUsc0JBQWY7O0FBRUFwVSxVQUFHRSxFQUFILENBQU1rVSxNQUFOLENBQWFDLElBQWI7QUFHRDs7O2lDQVFXOztBQUVWelQsU0FBRWIsTUFBRixFQUFVZSxFQUFWLENBQWEsTUFBYixFQUFxQixLQUFLRyxNQUFMLENBQVlELElBQVosQ0FBaUIsSUFBakIsQ0FBckI7QUFFRDs7OzJCQVZZOztBQUViOztBQUVDOzs7Ozs7bUJBN0JrQm1ULFUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNlMDVhNTY4MjhlMDRkOGNlYjYyIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogVG9wXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBDb21tb24gZnJvbSAnLi9wYWdlL0NvbW1vbic7XG5pbXBvcnQgTWFpbiBmcm9tICcuL3BhZ2UvTWFpbic7XG5cbigoKT0+e1xuXG4gIC8vIGdsb2JhbOOCquODluOCuOOCp+OCr+ODiFxuICBpZiAod2luZG93LmdiPT09dW5kZWZpbmVkKSB3aW5kb3cuZ2IgPSB7fTtcbiAgd2luZG93LmdiLmluID0ge307IC8vaW5zdGFuY2VcblxuICBnYi5pbi5jb21tb24gPSBuZXcgQ29tbW9uKCk7XG4gIGdiLmluLm1haW4gPSBuZXcgTWFpbigpO1xuXG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvVG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29tbW9uXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBDb25mIGZyb20gJy4uL0NvcmUvQ29uZic7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9teWxpYnMvVXRpbCc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vdXRpbHMvVXRpbHMnO1xuaW1wb3J0IEZ1bmMgZnJvbSAnLi4vbXlsaWJzL0Z1bmMnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cblx0c2V0dXAoKSB7XG5cblx0XHQvKipcbiAgICAgKiBAdHlwZSB7Q29uZn0gOiDliJ3mnJ/lgKTjga7oqK3lrprjg7vjg4fjg7zjgr/jga7phY3nva5cblx0XHQgKiBAdHlwZSB7VXRpbH0gOiBVdGls6Zai5pWw44Gu5Yid5pyf5YyWXG5cdFx0ICogQHR5cGUge0Z1bmN9IDog44Kk44OZ44Oz44OI44Oe44ON44O844K444Oj44O844Gu6Kit572uXG5cdFx0ICovXG4gICAgZ2IuaW4uY29uZiA9IG5ldyBDb25mKCk7XG4gICAgZ2IuaW4udSA9IG5ldyBVdGlsKCk7XG4gICAgZ2IuaW4uZiA9IG5ldyBGdW5jKCk7XG5cbiAgICBnYi5pbi51dCA9IG5ldyBVdGlscygpO1xuXG4gIH1cblxuICBvblJlYWR5KCkge1xuXG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbigncmVhZHknLCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENvbmZcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuLy8gaW1wb3J0IFNvdW5kRGF0YSBmcm9tICcuL0RhdGEvU291bmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25mIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDmnKznlarjg5Xjg6njgrBcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgXG4gICAgdGhpcy5SRUxFQVNFID0gdHJ1ZTtcbiAgICAvLyB0aGlzLlJFTEVBU0UgPSBmYWxzZTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5Xjg6njgrDplqLpgKNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLkZMRyA9IHtcbiAgICAgIExPRzp0cnVlLCAgLy8g44Ot44Kw5Ye65YqbXG4gICAgICBQQVJBTTp0cnVlLCAvLyDjg5Hjg6njg6Hjg7zjgr/jg4Hjgqfjg4Pjgq9cbiAgICAgIFNUQVRTOnRydWUgIC8vIFN0YXRz6KGo56S6XG4gICAgfTtcbiAgICBpZiAoIXRoaXMuUkVMRUFTRSkge1xuICAgICAgdGhpcy5GTEcgPSB7XG4gICAgICAgIExPRzpmYWxzZSxcbiAgICAgICAgUEFSQU06ZmFsc2UsXG4gICAgICAgIFNUQVRTOmZhbHNlIFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg5Z+65pysIHdpZHRoIGhlaWdodFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuZGVmVyA9IDEzMDA7XG4gICAgdGhpcy5kZWZIID0gODUwO1xuXG4gICAgdGhpcy5XID0gMTIwMDtcbiAgICB0aGlzLkggPSA3NTA7XG5cbiAgICB0aGlzLnNwVyA9IDM3NTtcbiAgICB0aGlzLnNwSCA9IDY2NztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5bjg6zjgqTjgq/jg53jgqTjg7Pjg4hcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmJwID0gNzY4O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIG1vZGVcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIHRoaXMua2V5cyA9IFtcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ21vdmllJyxcbiAgICAgICAgICAndmFsdWUnOiBbJ21vcm5pbmcnLCdhZnRlcm5vb24nLCduaWdodCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ2RhdGEnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnZGF0YTAxJywnZGF0YTAyJywnZGF0YTAzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgICdrZXknOiAncHJvZHVjdCcsXG4gICAgICAgICAgJ3ZhbHVlJzogWycwMSddLFxuICAgICAgfSxcbiAgICBdXG4gICAgdGhpcy5zd2l0Y2hNb2RlKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgc291bmQgZGF0YVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHRoaXMuc291bmREYXRhID0gbmV3IFNvdW5kRGF0YSgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHNlYzAyIGJnIEltZyBOdW1cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnNlYzAySW1nTnVtID0gMzk2O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHlvdXR1YmUgSURcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnlvdXR1YmVJRDAxID0gJ3hXMm9OcE5yS2QwJztcbiAgICB0aGlzLnlvdXR1YmVJRDAyID0gJ3QyV2VSUmRBRmVJJztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICB3ZWIgZm9udCBsb2FkZWRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLndlYkZvbnRMb2FkZWQgPSBmYWxzZTtcblxuICB9XG5cblxuICBzd2l0Y2hNb2RlKCl7XG5cbiAgICB2YXIgaSwga2V5LCBsZW4sIHBhcmFtLCByZWYsIHJlZjEsIHZhbHVlO1xuXG4gICAgcmVmID0gbG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykuc3BsaXQoJyYnKTtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgcGFyYW0gPSByZWZbaV07XG4gICAgICByZWYxID0gcGFyYW0uc3BsaXQoJz0nKSwga2V5ID0gcmVmMVswXSwgdmFsdWUgPSByZWYxWzFdO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMua2V5cy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgIHZhciBvYmogPSB0aGlzLmtleXNbal07XG5cbiAgICAgICAgLy8g44OR44Op44Oh44O844K/44GM44Kt44O844Go5LiA57eS44Gg44Gj44Gf44KJXG4gICAgICAgIGlmIChvYmoua2V5ID09PSBrZXkpIHtcblxuICAgICAgICAgIC8vIOWQhOWApOOBqOavlOi8g1xuICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgb2JqLnZhbHVlLmxlbmd0aDsgaysrKSB7XG5cbiAgICAgICAgICAgIHZhciB2YWwgPSBvYmoudmFsdWVba107XG5cbiAgICAgICAgICAgIC8vIOOCreODvOOCknRoaXMua2V5c+OBrmtleeOBq+OAgXZhbHVl44KS5q+U6LyD44GX44Gm5ZCM5YCk44Gg44Gj44Gf44KC44Gu44GrXG4gICAgICAgICAgICBpZiAodmFsID09PSB2YWx1ZSkgdGhpc1tvYmoua2V5XSA9IHZhbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH07XG5cblxuICAgICAgICB9O1xuXG4gICAgICAgIFxuICAgICAgfTtcblxuICAgIH1cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvcmUvQ29uZi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiDkvr/liKnplqLmlbDjgq/jg6njgrlcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBVdGlsXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWwge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5pc1NldFNQU2l6ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5zdGFydFRpbWUgPSBudWxsO1xuICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBudWxsO1xuICAgIHRoaXMubm93ID0gbmV3IERhdGUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIE1hdGhcbiAgICovXG5cblxuICAvKipcbiAgICog44Op44Oz44OA44Og44Gq5YCk44KS6L+U44GZXG4gICAqIEBwYXJhbSBtaW4gOiDmnIDlsI/lgKQoaW50KVxuICAgKiBAcGFyYW0gbWF4IDog5pyA5aSn5YCkKGludClcbiAgICogQHJldHVybnMge251bWJlcn0gOiBtaW7jgYvjgoltYXjjgb7jgafjga7jg6njg7Pjg4Djg6DjgarmlbTmlbAoaW50KVxuICAgKi9cbiAgcmFuZG9tKG1pbiwgbWF4KSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqICgobWF4ICsgMSkgLSBtaW4pICsgbWluKSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6njg7Pjg4Djg6DjgarmlbTmlbDjgpIy44Gk44Gu56+E5Zuy44GL44KJ5Y+W5b6XXG4gICAqIEBwYXJhbSBtaW4xIDog5pyA5bCP5YCkMShpbnQpXG4gICAqIEBwYXJhbSBtYXgxIDog5pyA5aSn5YCkMShpbnQpXG4gICAqIEBwYXJhbSBtaW4yIDog5pyA5bCP5YCkMihpbnQpXG4gICAqIEBwYXJhbSBtYXgyIDog5pyA5aSn5YCkMihpbnQpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IDogbWlu44GL44KJbWF444G+44Gn44Gu44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgICovXG4gIHJhbmRvbTIobWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuICAgIFxuICAgIGlmICh0aGlzLmhpdCgyKSkge1xuICAgICAgcmV0dXJuIHRoaXMucmFuZG9tKG1pbjEsIG1heDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5kb20obWluMiwgbWF4Mik7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogMS9AcmFuZ2Xjga7norrnjofjgad0cnVl44KS5Y+W5b6XXG4gICAqIEBwYXJhbSByYW5nZSA6IOavjeaVsChpbnQpXG4gICAqIEByZXR1cm5zIHtib29sZWFufSA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgICovXG4gIGhpdChyYW5nZSkge1xuXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKDAsIHJhbmdlIC0gMSkgPT09IDA7XG5cbiAgfVxuICBcbiAgLy8gMOOBi+OCieevhOWbsuWGheOBp+ODqeODs+ODgOODoOOBquaVtOaVsOOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAdmFsIDog56+E5ZuyKGludClcbiAgLy8gcmV0dXJuIDog44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZ2UodmFsKSB7XG5cbiAgICByZXR1cm4gdGhpcy5yYW5kb20oLXZhbCwgdmFsKTtcblxuICB9XG4gIFxuICAvLyDlgKTjgpLjg57jg4Pjg5Tjg7PjgrBcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG51bSA6IOODnuODg+ODlOODs+OCsOOBmeOCi+WApChOdW1iZXIpXG4gIC8vIEByZXNNaW4gOiDntZDmnpzjgajjgarjgovlgKTjga7mnIDlsI/lgKQoTnVtYmVyKVxuICAvLyBAcmVzTWF4IDog57WQ5p6c44Go44Gq44KL5YCk44Gu5pyA5aSn5YCkKE51bWJlcilcbiAgLy8gQGJhc2VNaW4gOiDlhYPjgajjgarjgovlgKTjga7mnIDlsI/lgKQoTnVtYmVyKVxuICAvLyBAYmFzZU1heCA6IOWFg+OBqOOBquOCi+WApOOBruacgOWkp+WApChOdW1iZXIpXG4gIC8vIHJldHVybiA6IOODnuODg+ODlOODs+OCsOOBleOCjOOBn+WApChOdW1iZXIpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG1hcChudW0sIHJlc01pbiwgcmVzTWF4LCBiYXNlTWluLCBiYXNlTWF4KSB7XG5cbiAgICB2YXIgcDtcbiAgICBpZiAobnVtIDwgYmFzZU1pbikge1xuICAgICAgcmV0dXJuIHJlc01pbjtcbiAgICB9XG4gICAgaWYgKG51bSA+IGJhc2VNYXgpIHtcbiAgICAgIHJldHVybiByZXNNYXg7XG4gICAgfVxuICAgIHAgPSAocmVzTWF4IC0gcmVzTWluKSAvIChiYXNlTWF4IC0gYmFzZU1pbik7XG5cbiAgICByZXR1cm4gKChudW0gLSBiYXNlTWluKSAqIHApICsgcmVzTWluO1xuXG4gIH0gICAgXG4gIFxuICAvLyDmlbDlgKTjgavlsI/mlbDngrnnrKxAbuS9jeOBvuOBp+OCkuOBpOOBkeOBn+aWh+Wtl+WIl+OCkui/lOOBmVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAbnVtIDog5YCkKE51bWJlcilcbiAgLy8gQG4gOiDlsI/mlbDngrnjga7kvY0oaW50KVxuICAvLyByZXR1cm4gOiDlpInmj5vjgZXjgozjgZ/lgKQoU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkZWNpbWFsKG51bSwgbikge1xuICAgIHZhciBpLCBwb3M7XG4gICAgbnVtID0gU3RyaW5nKG51bSk7XG4gICAgcG9zID0gbnVtLmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVtLnNwbGl0KFwiLlwiKVswXTtcbiAgICB9XG4gICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgIG51bSArPSBcIi5cIjtcbiAgICAgIGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICAgIG51bSArPSBcIjBcIjtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG4gICAgbnVtID0gbnVtLnN1YnN0cigwLCBwb3MpICsgbnVtLnN1YnN0cihwb3MsIG4gKyAxKTtcbiAgICByZXR1cm4gbnVtO1xuICB9XG5cbiAgY2xhbXAobnVtZXJhdG9yLGRlbm9taW5hdG9yLHZhbCkge1xuXG4gICAgcmV0dXJuIHZhbCAqIChudW1lcmF0b3IgLyBkZW5vbWluYXRvcik7XG5cbiAgfVxuXG5cdC8qKlxuICAgKiDjg6njgrjjgqLjg7PjgpLop5LluqbjgavlpInmj5tcblx0ICogQHBhcmFtIHJhZGlhbnNcblx0ICogQHJldHVybnMge251bWJlcn1cblx0ICovXG4gIGRlZ3JlZShyYWRpYW5zKSB7XG5cbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG5cbiAgfVxuXG4gIC8vIHRvIHJhZGlhbnNcbiAgcmFkaWFuKGFuZ2xlKSB7IFxuXG4gICAgcmV0dXJuIGFuZ2xlICogTWF0aC5QSSAvIDE4MDsgLy8x5bqm5L2V44Op44K444Ki44Oz44GLXG5cbiAgfVxuXG4gIGRpc3QocDEsIHAyKSB7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAyLnggLSBwMS54LCAyKSArIE1hdGgucG93KHAyLnkgLSBwMS55LCAyKSk7XG5cbiAgfVxuXG4gIGFzY2VuZChhcnIpIHtcblxuICAgIGFyci5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICBpZiggYSA+IGIgKSByZXR1cm4gLTE7XG4gICAgICBpZiggYSA8IGIgKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICAgIC8vIHZhciBhID0gWzUsMyw5LDEsMTBdXG4gICAgLy8g57WQ5p6cOjEwLDksNSwzLDFcblxuICB9XG5cbiAgZGVzY2VuZChhcnIpIHtcblxuICAgIGFyci5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICBpZiggYSA8IGIgKSByZXR1cm4gLTE7XG4gICAgICBpZiggYSA+IGIgKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgLy8gdmFyIGEgPSBbNSwzLDksMSwxMF1cbiAgICAvLyDntZDmnpw6MSwzLDUsOSwxMFxuXG4gIH1cblxuICAvLyBtYXAodmFsdWUsIG1pbjAxLCBtYXgwMSwgbWluMDIsIG1heDAyKSB7XG5cbiAgLy8gICB2YXIgZGlzMDEgPSBtYXgwMSAtIG1pbjAxO1xuICAvLyAgIHZhciBkaXMwMiA9IG1heDAyIC0gbWluMDJcblxuICAvLyAgIHZhciByYXRlID0gZGlzMDIgLyBkaXMwMTtcblxuICAvLyAgIHZhbHVlID0gdmFsdWUgKiByYXRlO1xuXG4gIC8vICAgcmV0dXJuIHZhbHVlO1xuICAvLyB9XG5cbiAgY29uc3RyYWluKHZhbHVlLCBtaW4sIG1heCkge1xuXG4gICAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgodmFsdWUsIG1pbikpO1xuXG4gICAgLy8gaWYgKHZhbHVlIDw9IGxvdykgdmFsdWUgPSBsb3c7XG4gICAgLy8gaWYgKHZhbHVlID49IGhpZ2gpIHZhbHVlID0gaGlnaDsgICAgIFxuICAgIC8vIHJldHVybiB2YWx1ZTtcblxuICB9XG5cbiAgLy8g44Om44OL44O844KvSUTjgpLlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdW5pcXVlKCkge1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIH1cbiAgXG4gIC8vICoqanF1YXJ55L2/55SoXG4gIC8vIOODnOOCv+ODs+ODouODvOODieWkieabtFxuICAvLyB0cnVl44Gq44KJ44Kr44O844K944Or44GM44Od44Kk44Oz44K/44O844Gu5b2i44GrXG4gIC8vIGZhbHNl44Gq44KJ44OH44OV44Kp44Or44OI44Gu44Kr44O844K944Or44GrXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBmbGcgOiDpgannlKjjgZnjgovjgYvjganjgYbjgYsoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYnV0dG9uTW9kZShmbGcpIHtcblxuICAgIGlmIChmbGcpIHtcbiAgICAgIHJldHVybiAkKFwiYm9keVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJChcImJvZHlcIikuY3NzKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgcG9ydHJhaXQgLyBsYW5kc2NhcGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzRGlyZWN0aW9uICgpIHtcblxuICAgIHZhciBXID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIEggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAoSCA+IFcpIHtcbiAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwicG9ydHJhaXRcIik7XG4gICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImxhbmRzY2FwZVwiKTtcbiAgICB9ZWxzZXtcbiAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwibGFuZHNjYXBlXCIpO1xuICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJwb3J0cmFpdFwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgcmVzcG9uc2l2ZSDmqKrluYXjgpLopovjgotcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzUmVzcG9uc2l2ZSAoYnApIHtcblxuICAgIGlmIChicD09dW5kZWZpbmVkKSBicD0zNzU7XG5cbiAgICB2YXIgVyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBIID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYgKFcgPiBicCkge1xuICAgICAgdGhpcy5pc1Jlc1NQID0gZmFsc2U7XG4gICAgICB0aGlzLmlzUmVzUEMgPSB0cnVlO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpc1Jlc3BvbnNpdmVTUCcpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc1Jlc3BvbnNpdmVQQycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzUmVzU1AgPSB0cnVlO1xuICAgICAgdGhpcy5pc1Jlc1BDID0gZmFsc2U7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzUmVzcG9uc2l2ZVNQJyk7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzUmVzcG9uc2l2ZVBDJyk7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFVSTFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge2FycmF5fVxuICAgKi9cbiAgZ2V0UGFyYW0oKSB7XG5cbiAgICB2YXIgdXJsID0gbG9jYXRpb24uaHJlZjtcbiAgICB2YXIgcGFyYW0gPSB1cmwuc3BsaXQoJz8nKVsxXTtcbiAgICBpZiAocGFyYW09PXVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB2YXIgcGFyYW1JdGVtcyA9IHBhcmFtLnNwbGl0KCcmJyk7XG4gICAgdmFyIGxpc3QgPSB7fTtcbiAgXG4gICAgZm9yKCB2YXIgaSA9IDA7IGk8cGFyYW1JdGVtcy5sZW5ndGg7IGkrKyApe1xuXG4gICAgICAgIHBhcmFtSXRlbSA9IHBhcmFtSXRlbXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgbGlzdFtwYXJhbUl0ZW1bMF1dID0gcGFyYW1JdGVtWzFdO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg4/jg4Pjgrfjg6Xlj5blvpcgOiBsb2NhdGlvbi5oYXNo44GuI+OCkuWJiumZpOOBl+OBn+OChOOBpFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgaGFzaCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuXG4gIH1cblxuICAvKipcbiAgICogY29va2ll5Y+W5b6XXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBnZXRDb29raWUoa2V5KSB7XG5cbiAgICB2YXIgYSwgYXJyLCBpLCBsLCBsZW4xLCB2YWw7XG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZSA9PT0gdm9pZCAwIHx8IGRvY3VtZW50LmNvb2tpZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGFyciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xuICAgIGZvciAoaSA9IGwgPSAwLCBsZW4xID0gYXJyLmxlbmd0aDsgbCA8IGxlbjE7IGkgPSArK2wpIHtcbiAgICAgIHZhbCA9IGFycltpXTtcbiAgICAgIGEgPSB2YWwuc3BsaXQoXCI9XCIpO1xuICAgICAgaWYgKGFbMF0gPT09IGtleSkge1xuICAgICAgICByZXR1cm4gYVsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG5cbiAgfSAgICAgIFxuXG4gIC8qKlxuICAgKiBjb29raWXoqK3lrppcbiAgICogQHBhcmFtIGtleSA6IOODkeODqeODoeODvOOCv+WQjVxuICAgKiBAcGFyYW0gdmFsIDog5YCkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBzZXRDb29raWUoa2V5LCB2YWwpIHtcblxuICAgIHJldHVybiBkb2N1bWVudC5jb29raWUgPSBrZXkgKyBcIj1cIiArIHZhbDtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBDb2xvclxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyByZ2LjgYvjgolIRVjjgqvjg6njg7zlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHIgOiAwfjI1NVxuICAvLyBAZyA6IDB+MjU1XG4gIC8vIEBiIDogMH4yNTVcbiAgLy8gcmV0dXJuIDogZXggXCIjRkZGRkZGXCJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0SGV4Q29sb3IocixnLGIpIHtcbiAgICAgIHZhciBzdHI7XG4gICAgICBzdHIgPSAociA8PCAxNiB8IGcgPDwgOCB8IGIpLnRvU3RyaW5nKDE2KTtcbiAgICAgIHJldHVybiBcIiNcIiArIG5ldyBBcnJheSg3IC0gc3RyLmxlbmd0aCkuam9pbihcIjBcIikgKyBzdHI7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFN0cmluZ1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc0NvbnRhaW4oc3RyLGNvbnRhaW4pIHtcblxuICAgIC8vIHN0cuOBruS4reOBqyxjb250YWlu44GM5a2Y5Zyo44GX44Gf44KJXG4gICAgaWYgKCBzdHIuaW5kZXhPZihjb250YWluKSAhPSAtMSApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9XG5cbiAgLy8gMOWfi+OCgeOBpzLmoYHjgavjgZnjgovplqLmlbBcbiAgYWRkMChzdHIsbnVtPS0yKXtcbiAgICBcbiAgICByZXR1cm4gKCBcIjAwMDAwMDAwMDAwMFwiICsgc3RyICkuc3Vic3RyKCBudW0gKTtcblxuICB9XG5cbiAgZmxvYXRGb3JtYXQoIG51bWJlciwgbiApIHtcblxuICAgIHZhciBfcG93ID0gTWF0aC5wb3coIDEwICwgbiApIDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCggbnVtYmVyICogX3BvdyApIC8gX3BvdyA7XG5cbiAgfVxuICAgIFxuICAvLyDlgKTmrrXooajoqJhcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJpY2UobnVtKSB7XG5cbiAgICByZXR1cm4gU3RyaW5nKG51bSkucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoPyFcXGQpKS9nLCAnJDEsJyk7XG5cbiAgfVxuXG4gIC8vIOaWh+Wtl+WIl+OCkuWPjei7olxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAc3RyIDog5paH5a2X5YiXKFN0cmluZylcbiAgLy8gcmV0dXJuIDog5paH5a2X5YiXKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RyUmV2ZXJzZShzdHIpIHtcblxuICAgIHZhciBpLCBsZW4sIHJlcztcbiAgICByZXMgPSBcIlwiO1xuICAgIGxlbiA9IHN0ci5sZW5ndGg7XG4gICAgaSA9IDE7XG4gICAgd2hpbGUgKGkgPD0gbGVuKSB7XG4gICAgICByZXMgKz0gc3RyLnN1YnN0cigtaSwgMSk7XG4gICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG5cbiAgfVxuICBcbiAgLy8g5paH5a2X5YiX44Gu5YWo572u5o+bXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEB2YWwgIDog5paH5a2X5YiXXG4gIC8vIEBvZWcgIDog572u5o+b5YmN44Gu5paH5a2X5YiXXG4gIC8vIEBkZXN0IDog572u5o+b5b6M44Gu5paH5a2X5YiXXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcGxhY2VBbGwodmFsLCBvcmcsIGRlc3QpIHtcblxuICAgIHJldHVybiB2YWwuc3BsaXQob3JnKS5qb2luKGRlc3QpO1xuXG4gIH0gICAgXG4gIFxuICBzdHJSZXBsYWNlKHN0ciwgYmVmb3JlLCBhZnRlcikge1xuXG4gICAgdmFyIHIgPSBuZXcgUmVnRXhwKCBiZWZvcmUsICdnJyk7XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoIHIgLCBhZnRlciApO1xuXG4gIH0gICAgXG4gIFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIERhdGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZ2V0Tm93KCkge1xuXG4gICAgdGhpcy5ub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIH1cblxuICBzdGFydCgpIHtcblxuICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy5ub3cuZ2V0VGltZSgpO1xuXG4gIH1cblxuICBlbGFwc2VkKCkge1xuXG4gICAgdGhpcy5lbGFwc2VkVGltZSA9IHRoaXMubm93LmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lO1xuXG4gIH1cblxuICBtKCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoIHRoaXMuZWxhcHNlZFRpbWUgKyAxMDAgLyA2MCApO1xuXG4gIH1cblxuICBzKCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5lbGFwc2VkVGltZSAvIDEwMDApO1xuXG4gIH1cblxuICBtcygpIHtcblxuICAgIHJldHVybiB0aGlzLmVsYXBzZWRUaW1lO1xuICAgIFxuICB9XG5cbiAgdGltZSgpIHtcblxuICAgIHRoaXMuZ2V0Tm93KCk7XG5cbiAgICB0aGlzLmhvdXIgPSB0aGlzLm5vdy5nZXRIb3VycygpOyAgICAgICAgICAvLyDmmYJcbiAgICB0aGlzLm1pbnV0ZSA9IHRoaXMubm93LmdldE1pbnV0ZXMoKTsgICAgICAvLyDliIZcbiAgICB0aGlzLnNlY29uZCA9IHRoaXMubm93LmdldFNlY29uZHMoKTtcbiAgICB0aGlzLm1pbGxTZWNvbmQgPSB0aGlzLm5vdy5nZXRNaWxsaXNlY29uZHMoKTtcblxuICB9XG5cbiAgZGF0ZSgpIHtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXREYXRlKCk7XG5cbiAgfVxuXG4gIG1vbnRocygpIHtcblxuICAgIHZhciBtb250aGRheXMgPSBuZXcgQXJyYXkoMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMSk7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0TW9udGgoKSArIDE7XG5cbiAgfVxuXG4gIHllYXIoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0RnVsbFllYXIoKTtcblxuICB9XG5cbiAgZGF5KCkge1xuXG4gICAgLy8g5puc5pelICjml6XmnKzoqp4pXG4gICAgdmFyIHdlZWtEYXlKUCA9IFtcIuaXpVwiLFwi5pyIXCIsXCLngatcIixcIuawtFwiLFwi5pyoXCIsXCLph5FcIixcIuWcn1wiXSA7XG4gICAgdmFyIHdESiA9IHdlZWtEYXlKUFt0aGlzLm5vdy5nZXREYXkoKV0gO1xuXG4gICAgLy8g5puc5pelICjoi7Hoqp4pXG4gICAgdmFyIHdlZWtEYXlFTiA9IFtcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSA7XG4gICAgdmFyIHdERSA9IHdlZWtEYXlFTlt0aGlzLm5vdy5nZXREYXkoKV0gO1xuXG4gIH1cbiAgXG4gIC8vIOaVsOaXpeW+jOOBrkRhdGXjgqrjg5bjgrjjgqfjgq/jg4jlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYWZ0ZXJEYXkoZGF0ZSwgbnVtKSB7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyBOdW1iZXIobnVtKSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIERhdGEgdHlwZSBjaGVja1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc09iamVjdCh2YWx1ZSwgaWdub3JlQXJyYXkpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsO1xuICB9XG5cbiAgaXNOdW1iZXIodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xuICB9XG5cbiAgaXNTdHJpbmcodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGlzQXJyYXkodmFsdWUpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9XG5cbiAgaXNOdWxsKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG4gIH1cblxuICBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIG90aGVyXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRJbWdTUFNpemUgKCR0YXJnZXQpe1xuXG4gICAgLy8gcmVzcG9uc2l2ZSBzcOOBruOBqOOBjeWHpueQhlxuICAgIGlmICghdGhpcy5pc1Jlc1NQKSByZXR1cm47XG4gICAgLy8g5LiA5bqm44Gg44GR5Yem55CGXG4gICAgLy8gaWYgKHRoaXMuaXNTZXRTUFNpemUpIHJldHVybjtcbiAgICAvLyB0aGlzLmlzU2V0U1BTaXplID0gdHJ1ZTtcblxuICAgIHZhciAkaW1nID0gJHRhcmdldCxcbiAgICAgICAgbGVuID0gJGltZy5sZW5ndGg7XG5cbiAgICAkaW1nLmVhY2goZnVuY3Rpb24oaSkge1xuXG4gICAgICAgIHZhciB3ID0gTWF0aC5mbG9vcigkKHRoaXMpLndpZHRoKCkgLyAyKSxcbiAgICAgICAgICAgIGggPSBNYXRoLmZsb29yKCQodGhpcykuaGVpZ2h0KCkgLyAyKTtcblxuICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgJ3dpZHRoJzogdyxcbiAgICAgICAgICAgICdoZWlnaHQnOiBoLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobGVuID09IGkgKyAxKSAkKHdpbmRvdykudHJpZ2dlcignc2V0U3BaaWVFbmQnKTtcblxuICAgIH0pO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gIOOCueODnuODm+aTjeS9nOeEoeWKuVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0UHJldmVudCgpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICQod2luZG93KS5vbigndG91Y2htb3ZlLm5vQ29udHJvbCcsIGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt9KTtcblxuICB9XG5cbiAgcmVtb3ZlUHJldmVudCgpIHtcblxuICAgICQod2luZG93KS5vZmYoJ3RvdWNobW92ZS5ub0NvbnRyb2wnKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICBob3N0LHByb3Rjb2xcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByb3RvY29sKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sO1xuXG4gIH1cbiAgICBcbiAgaG9zdCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAvLyByZXR1cm4gbG9jYXRpb24uaG9zdFxuXG4gIH1cblxuICBwb3J0KCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBvcnQ7XG5cbiAgfVxuICAgICAgICBcbiAgcGF0aCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRobmFtZTtcblxuICB9XG5cbiAgcHJldmVudERlZmF1bHQoZSkge1xuXG4gICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIGlmIChlLnByZXZlbnREZWZhdWx0KVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMoZSkge1xuXG4gICAgaWYgKGtleXNbZS5rZXlDb2RlXSkge1xuICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICB9XG5cbiAgZGlzYWJsZVNjcm9sbCgpIHtcblxuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikgLy8gb2xkZXIgRkZcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIHdpbmRvdy5vbndoZWVsID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gbW9kZXJuIHN0YW5kYXJkXG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG9sZGVyIGJyb3dzZXJzLCBJRVxuICAgIHdpbmRvdy5vbnRvdWNobW92ZSAgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBtb2JpbGVcbiAgICBkb2N1bWVudC5vbmtleWRvd24gID0gdGhpcy5wcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXM7XG5cbiAgfVxuXG4gIGVuYWJsZVNjcm9sbCgpIHtcblxuICAgIGlmICh3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSBudWxsOyBcbiAgICB3aW5kb3cub253aGVlbCA9IG51bGw7IFxuICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IG51bGw7XG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9VdGlsLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogVXRpbHNcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbi8qKlxuICogYW5pbWF0aW9uXG4gKi9cbmltcG9ydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSAnLi9hbmltYXRpb24vcmVxdWVzdEFuaW1hdGlvbkZyYW1lJztcbmltcG9ydCBjYW5jZWxBbmltYXRpb25GcmFtZSBmcm9tICcuL2FuaW1hdGlvbi9jYW5jZWxBbmltYXRpb25GcmFtZSc7XG5cbmltcG9ydCBBcnJheSBmcm9tICcuL2FycmF5L0FycmF5JztcbmltcG9ydCBjaGVja0NsaWVudCBmcm9tIFwiLi91YS9jaGVja0NsaWVudFwiO1xuXG5pbXBvcnQgcHJlbG9hZEltZyBmcm9tICcuL2ltZy9wcmVsb2FkSW1nJztcbmltcG9ydCBzZXRVcEJ0blR3aXR0ZXIgZnJvbSAnLi9zbnMvc2V0VXBCdG5Ud2l0dGVyJztcbmltcG9ydCBzZXRVcEJ0bkxpbmUgZnJvbSAnLi9zbnMvc2V0VXBCdG5MaW5lJztcbmltcG9ydCBzZXRVcEJ0bkZhY2VCb29rIGZyb20gJy4vc25zL3NldFVwQnRuRmFjZUJvb2snO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuX3NldHVwKCk7XG4gICAgXG4gIH1cblxuICBfc2V0dXAoKSB7XG4gICAgLy8gd2luZG93LmNvbnNvbGUubG9nKCdVdGlsc19TZXR1cCEhJyk7XG4gICAgXG4gICAgLyoqXG4gICAgICogYXJyYXlcbiAgICAgKi9cbiAgICB0aGlzLkFycmF5ID0gbmV3IEFycmF5KCk7XG5cblxuICAgIC8qKlxuICAgICAqIHVhXG4gICAgICovXG4gICAgdGhpcy5jaGVja0NsaWVudCA9IG5ldyBjaGVja0NsaWVudCgpO1xuXG5cbiAgICAvKipcbiAgICAgKiBpbWdcbiAgICAgKi9cbiAgICAvLyB0aGlzLnByZWxvYWRJbWcgPSBuZXcgcHJlbG9hZEltZygpO1xuXG4gICAgLyoqXG4gICAgICogc25zXG4gICAgICovXG4gICAgLy8gdGhpcy5zZXRVcEJ0blR3aXR0ZXIgPSBuZXcgc2V0VXBCdG5Ud2l0dGVyO1xuICAgIC8vIHRoaXMuc2V0VXBCdG5MaW5lID0gbmV3IHNldFVwQnRuTGluZTtcbiAgICAvLyB0aGlzLnNldFVwQnRuRmFjZUJvb2sgPSBuZXcgc2V0VXBCdG5GYWNlQm9vaztcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9VdGlscy5qcyIsIi8qKlxuICogcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gKi9cbndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoKGZ1bmN0aW9uKF90aGlzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyAzMCk7XG4gICAgICAgIH07XG4gIH07XG59KSh0aGlzKSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FuaW1hdGlvbi9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMiLCIvKipcbiAqIGNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gKi9cbndpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9ICgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH07XG4gIH07XG59KSh0aGlzKSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FuaW1hdGlvbi9jYW5jZWxBbmltYXRpb25GcmFtZS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiDphY3liJfjga7mk43kvZzns7tcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBBcnJheVxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyYXkge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG5cbiAgfVxuXG5cdC8qKlxuXHQgKiDphY3liJflhoXjga7jg6njg7Pjg4Djg6DjgarlgKTjgpLjgbLjgajjgaTlj5blvpdcblx0ICogQHBhcmFtIGFyciA6IOmFjeWIl1xuXHQgKiBAcmV0dXJucyB7Kn0gOiDphY3liJflhoXjga7lgKRcblx0ICovXG4gIGFyclJhbmQoYXJyKSB7XG5cbiAgICByZXR1cm4gYXJyW3RoaXMucmFuZG9tKDAsIGFyci5sZW5ndGggLSAxKV07XG5cbiAgfVxuXG5cdC8qKlxuICAgKiDphY3liJfjgpLjg6njg7Pjg4Djg6DjgavkuKbjgbnmm7/jgYhcblx0ICogQHBhcmFtIGFyciA6IOmFjeWIlyhBcnJheSlcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKi9cbiAgc2h1ZmZsZShhcnIpIHtcblxuICAgIGxldCBBcnIgPSBbXTtcbiAgICBBcnIgPSBhcnIuc2xpY2UoKTtcbiAgICB2YXIgaSA9IGFyci5sZW5ndGg7XG4gICAgd2hpbGUoaSl7XG4gICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSppKTtcbiAgICAgIHZhciB0ID0gQXJyWy0taV07XG4gICAgICBBcnJbaV0gPSBBcnJbal07XG4gICAgICBBcnJbal0gPSB0O1xuICAgIH1cbiAgICByZXR1cm4gQXJyO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYXJyYXkvQXJyYXkuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzogVWHliKTliKVcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBjaGVja0NsaWVudFxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYnMvdWEtcGFyc2VyLm1pbi5qc1wiKTtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGVja0NsaWVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnVhID0gbmV3IHBhcnNlcigpO1xuXG4gIH1cblxuICAvKipcbiAgICogSUXjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0lFKCkge1xuICAgIGxldCBicm93c2VyID0gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgICByZXR1cm4gYnJvd3NlciA9PT0gJ0lFJyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZm9444GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNGaXJlZm94KCkge1xuICAgIGxldCBicm93c2VyID0gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgICByZXR1cm4gYnJvd3NlciA9PT0gJ0ZpcmVmb3gnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENocm9tZeOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQ2hyb21lKCkge1xuICAgIGxldCBicm93c2VyID0gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgICByZXR1cm4gYnJvd3NlciA9PT0gJ0Nocm9tZScgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogU2FmYXJp44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNTYWZhcmkoKSB7XG4gICAgbGV0IGJyb3dzZXIgPSB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICAgIHJldHVybiBicm93c2VyID09PSAnU2FmYXJpJyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6Ljg5DjgqTjg6vjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBpc01vYmlsZSgpIHtcbiAgICBsZXQgZGV2aWNlID0gdGhpcy51YS5nZXREZXZpY2UoKS50eXBlO1xuICAgIHJldHVybiBkZXZpY2UgPT09ICdtb2JpbGUnID8gdHJ1ZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICog44K/44OW44Os44OD44OI44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgaXNUYWJsZXQoKSB7XG4gICAgbGV0IGRldmljZSA9IHRoaXMudWEuZ2V0RGV2aWNlKCkudHlwZTtcbiAgICByZXR1cm4gZGV2aWNlID09PSAndGFibGV0JyA/IHRydWUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIE9T5ZCN44KS5Y+W5b6XXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBvcygpIHtcbiAgICByZXR1cm4gdGhpcy51YS5nZXRPUygpLm5hbWU7XG4gIH1cblxuICAvKipcbiAgICog44OH44OQ44Kk44K55ZCN44KS5Y+W5b6XXG4gICAqIEByZXR1cm5zIHt2ZW5kb3J8e0hUQywgU3ByaW50fX1cbiAgICovXG4gIGRldmljZV9uYW1lKCkge1xuICAgIGxldCBkZXZpY2VfbmFtZSA9IHRoaXMudWEuZ2V0RGV2aWNlKCkudmVuZG9yO1xuICAgIHJldHVybiBkZXZpY2VfbmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg5bjg6njgqbjgrblkI3jgpLlj5blvpdcbiAgICovXG4gIGJyb3dzZXJfbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6bjg7zjgrbjg7zjgqjjg7zjgrjjgqfjg7Pjg4jmg4XloLHvvJrlhajjgabjgpLlj5blvpdcbiAgICovXG4gIGFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy51YS5nZXRVQSgpO1xuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3VhL2NoZWNrQ2xpZW50LmpzIiwiLyoqXG4gKiBVQVBhcnNlci5qcyB2MC43LjEyXG4gKiBMaWdodHdlaWdodCBKYXZhU2NyaXB0LWJhc2VkIFVzZXItQWdlbnQgc3RyaW5nIHBhcnNlclxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhaXNhbG1hbi91YS1wYXJzZXItanNcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxMi0yMDE2IEZhaXNhbCBTYWxtYW4gPGZ5emxtYW5AZ21haWwuY29tPlxuICogRHVhbCBsaWNlbnNlZCB1bmRlciBHUEx2MiAmIE1JVFxuICovKGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49XCIwLjcuMTJcIixyPVwiXCIsaT1cIj9cIixzPVwiZnVuY3Rpb25cIixvPVwidW5kZWZpbmVkXCIsdT1cIm9iamVjdFwiLGE9XCJzdHJpbmdcIixmPVwibWFqb3JcIixsPVwibW9kZWxcIixjPVwibmFtZVwiLGg9XCJ0eXBlXCIscD1cInZlbmRvclwiLGQ9XCJ2ZXJzaW9uXCIsdj1cImFyY2hpdGVjdHVyZVwiLG09XCJjb25zb2xlXCIsZz1cIm1vYmlsZVwiLHk9XCJ0YWJsZXRcIixiPVwic21hcnR0dlwiLHc9XCJ3ZWFyYWJsZVwiLEU9XCJlbWJlZGRlZFwiLFM9e2V4dGVuZDpmdW5jdGlvbihlLHQpe3ZhciBuPXt9O2Zvcih2YXIgciBpbiBlKXRbcl0mJnRbcl0ubGVuZ3RoJTI9PT0wP25bcl09dFtyXS5jb25jYXQoZVtyXSk6bltyXT1lW3JdO3JldHVybiBufSxoYXM6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdHlwZW9mIGU9PVwic3RyaW5nXCI/dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZS50b0xvd2VyQ2FzZSgpKSE9PS0xOiExfSxsb3dlcml6ZTpmdW5jdGlvbihlKXtyZXR1cm4gZS50b0xvd2VyQ2FzZSgpfSxtYWpvcjpmdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGU9PT1hP2UucmVwbGFjZSgvW15cXGRcXC5dL2csXCJcIikuc3BsaXQoXCIuXCIpWzBdOnR9LHRyaW06ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csXCJcIil9fSx4PXtyZ3g6ZnVuY3Rpb24oKXt2YXIgZSxuPTAscixpLGEsZixsLGMsaD1hcmd1bWVudHM7d2hpbGUobjxoLmxlbmd0aCYmIWwpe3ZhciBwPWhbbl0sZD1oW24rMV07aWYodHlwZW9mIGU9PT1vKXtlPXt9O2ZvcihhIGluIGQpZC5oYXNPd25Qcm9wZXJ0eShhKSYmKGY9ZFthXSx0eXBlb2YgZj09PXU/ZVtmWzBdXT10OmVbZl09dCl9cj1pPTA7d2hpbGUocjxwLmxlbmd0aCYmIWwpe2w9cFtyKytdLmV4ZWModGhpcy5nZXRVQSgpKTtpZighIWwpZm9yKGE9MDthPGQubGVuZ3RoO2ErKyljPWxbKytpXSxmPWRbYV0sdHlwZW9mIGY9PT11JiZmLmxlbmd0aD4wP2YubGVuZ3RoPT0yP3R5cGVvZiBmWzFdPT1zP2VbZlswXV09ZlsxXS5jYWxsKHRoaXMsYyk6ZVtmWzBdXT1mWzFdOmYubGVuZ3RoPT0zP3R5cGVvZiBmWzFdPT09cyYmKCFmWzFdLmV4ZWN8fCFmWzFdLnRlc3QpP2VbZlswXV09Yz9mWzFdLmNhbGwodGhpcyxjLGZbMl0pOnQ6ZVtmWzBdXT1jP2MucmVwbGFjZShmWzFdLGZbMl0pOnQ6Zi5sZW5ndGg9PTQmJihlW2ZbMF1dPWM/ZlszXS5jYWxsKHRoaXMsYy5yZXBsYWNlKGZbMV0sZlsyXSkpOnQpOmVbZl09Yz9jOnR9bis9Mn1yZXR1cm4gZX0sc3RyOmZ1bmN0aW9uKGUsbil7Zm9yKHZhciByIGluIG4paWYodHlwZW9mIG5bcl09PT11JiZuW3JdLmxlbmd0aD4wKXtmb3IodmFyIHM9MDtzPG5bcl0ubGVuZ3RoO3MrKylpZihTLmhhcyhuW3JdW3NdLGUpKXJldHVybiByPT09aT90OnJ9ZWxzZSBpZihTLmhhcyhuW3JdLGUpKXJldHVybiByPT09aT90OnI7cmV0dXJuIGV9fSxUPXticm93c2VyOntvbGRzYWZhcmk6e3ZlcnNpb246e1wiMS4wXCI6XCIvOFwiLDEuMjpcIi8xXCIsMS4zOlwiLzNcIixcIjIuMFwiOlwiLzQxMlwiLFwiMi4wLjJcIjpcIi80MTZcIixcIjIuMC4zXCI6XCIvNDE3XCIsXCIyLjAuNFwiOlwiLzQxOVwiLFwiP1wiOlwiL1wifX19LGRldmljZTp7YW1hem9uOnttb2RlbDp7XCJGaXJlIFBob25lXCI6W1wiU0RcIixcIktGXCJdfX0sc3ByaW50Onttb2RlbDp7XCJFdm8gU2hpZnQgNEdcIjpcIjczNzNLVFwifSx2ZW5kb3I6e0hUQzpcIkFQQVwiLFNwcmludDpcIlNwcmludFwifX19LG9zOnt3aW5kb3dzOnt2ZXJzaW9uOntNRTpcIjQuOTBcIixcIk5UIDMuMTFcIjpcIk5UMy41MVwiLFwiTlQgNC4wXCI6XCJOVDQuMFwiLDJlMzpcIk5UIDUuMFwiLFhQOltcIk5UIDUuMVwiLFwiTlQgNS4yXCJdLFZpc3RhOlwiTlQgNi4wXCIsNzpcIk5UIDYuMVwiLDg6XCJOVCA2LjJcIiw4LjE6XCJOVCA2LjNcIiwxMDpbXCJOVCA2LjRcIixcIk5UIDEwLjBcIl0sUlQ6XCJBUk1cIn19fX0sTj17YnJvd3NlcjpbWy8ob3BlcmFcXHNtaW5pKVxcLyhbXFx3XFwuLV0rKS9pLC8ob3BlcmFcXHNbbW9iaWxldGFiXSspLit2ZXJzaW9uXFwvKFtcXHdcXC4tXSspL2ksLyhvcGVyYSkuK3ZlcnNpb25cXC8oW1xcd1xcLl0rKS9pLC8ob3BlcmEpW1xcL1xcc10rKFtcXHdcXC5dKykvaV0sW2MsZF0sWy8ob3Bpb3MpW1xcL1xcc10rKFtcXHdcXC5dKykvaV0sW1tjLFwiT3BlcmEgTWluaVwiXSxkXSxbL1xccyhvcHIpXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiT3BlcmFcIl0sZF0sWy8oa2luZGxlKVxcLyhbXFx3XFwuXSspL2ksLyhsdW5hc2NhcGV8bWF4dGhvbnxuZXRmcm9udHxqYXNtaW5lfGJsYXplcilbXFwvXFxzXT8oW1xcd1xcLl0rKSovaSwvKGF2YW50XFxzfGllbW9iaWxlfHNsaW18YmFpZHUpKD86YnJvd3Nlcik/W1xcL1xcc10/KFtcXHdcXC5dKikvaSwvKD86bXN8XFwoKShpZSlcXHMoW1xcd1xcLl0rKS9pLC8ocmVrb25xKVxcLyhbXFx3XFwuXSspKi9pLC8oY2hyb21pdW18ZmxvY2t8cm9ja21lbHR8bWlkb3JpfGVwaXBoYW55fHNpbGt8c2t5ZmlyZXxvdmlicm93c2VyfGJvbHR8aXJvbnx2aXZhbGRpfGlyaWRpdW18cGhhbnRvbWpzKVxcLyhbXFx3XFwuLV0rKS9pXSxbYyxkXSxbLyh0cmlkZW50KS4rcnZbOlxcc10oW1xcd1xcLl0rKS4rbGlrZVxcc2dlY2tvL2ldLFtbYyxcIklFXCJdLGRdLFsvKGVkZ2UpXFwvKChcXGQrKT9bXFx3XFwuXSspL2ldLFtjLGRdLFsvKHlhYnJvd3NlcilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJZYW5kZXhcIl0sZF0sWy8oY29tb2RvX2RyYWdvbilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsL18vZyxcIiBcIl0sZF0sWy8obWljcm9tZXNzZW5nZXIpXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiV2VDaGF0XCJdLGRdLFsveGlhb21pXFwvbWl1aWJyb3dzZXJcXC8oW1xcd1xcLl0rKS9pXSxbZCxbYyxcIk1JVUkgQnJvd3NlclwiXV0sWy9cXHN3dlxcKS4rKGNocm9tZSlcXC8oW1xcd1xcLl0rKS9pXSxbW2MsLyguKykvLFwiJDEgV2ViVmlld1wiXSxkXSxbL2FuZHJvaWQuK3NhbXN1bmdicm93c2VyXFwvKFtcXHdcXC5dKykvaSwvYW5kcm9pZC4rdmVyc2lvblxcLyhbXFx3XFwuXSspXFxzKyg/Om1vYmlsZVxccz9zYWZhcml8c2FmYXJpKSovaV0sW2QsW2MsXCJBbmRyb2lkIEJyb3dzZXJcIl1dLFsvKGNocm9tZXxvbW5pd2VifGFyb3JhfFt0aXplbm9rYV17NX1cXHM/YnJvd3NlcilcXC92PyhbXFx3XFwuXSspL2ksLyhxcWJyb3dzZXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaV0sW2MsZF0sWy8odWNcXHM/YnJvd3NlcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pLC91Y3dlYi4rKHVjYnJvd3NlcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pLC9qdWMuKyh1Y3dlYilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pXSxbW2MsXCJVQ0Jyb3dzZXJcIl0sZF0sWy8oZG9sZmluKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIkRvbHBoaW5cIl0sZF0sWy8oKD86YW5kcm9pZC4rKWNybW98Y3Jpb3MpXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiQ2hyb21lXCJdLGRdLFsvO2ZiYXZcXC8oW1xcd1xcLl0rKTsvaV0sW2QsW2MsXCJGYWNlYm9va1wiXV0sWy9meGlvc1xcLyhbXFx3XFwuLV0rKS9pXSxbZCxbYyxcIkZpcmVmb3hcIl1dLFsvdmVyc2lvblxcLyhbXFx3XFwuXSspLis/bW9iaWxlXFwvXFx3K1xccyhzYWZhcmkpL2ldLFtkLFtjLFwiTW9iaWxlIFNhZmFyaVwiXV0sWy92ZXJzaW9uXFwvKFtcXHdcXC5dKykuKz8obW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpL2ldLFtkLGNdLFsvd2Via2l0Lis/KG1vYmlsZVxccz9zYWZhcml8c2FmYXJpKShcXC9bXFx3XFwuXSspL2ldLFtjLFtkLHguc3RyLFQuYnJvd3Nlci5vbGRzYWZhcmkudmVyc2lvbl1dLFsvKGtvbnF1ZXJvcilcXC8oW1xcd1xcLl0rKS9pLC8od2Via2l0fGtodG1sKVxcLyhbXFx3XFwuXSspL2ldLFtjLGRdLFsvKG5hdmlnYXRvcnxuZXRzY2FwZSlcXC8oW1xcd1xcLi1dKykvaV0sW1tjLFwiTmV0c2NhcGVcIl0sZF0sWy8oc3dpZnRmb3gpL2ksLyhpY2VkcmFnb258aWNld2Vhc2VsfGNhbWlub3xjaGltZXJhfGZlbm5lY3xtYWVtb1xcc2Jyb3dzZXJ8bWluaW1vfGNvbmtlcm9yKVtcXC9cXHNdPyhbXFx3XFwuXFwrXSspL2ksLyhmaXJlZm94fHNlYW1vbmtleXxrLW1lbGVvbnxpY2VjYXR8aWNlYXBlfGZpcmViaXJkfHBob2VuaXgpXFwvKFtcXHdcXC4tXSspL2ksLyhtb3ppbGxhKVxcLyhbXFx3XFwuXSspLitydlxcOi4rZ2Vja29cXC9cXGQrL2ksLyhwb2xhcmlzfGx5bnh8ZGlsbG98aWNhYnxkb3Jpc3xhbWF5YXx3M218bmV0c3VyZnxzbGVpcG5pcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pLC8obGlua3MpXFxzXFwoKFtcXHdcXC5dKykvaSwvKGdvYnJvd3NlcilcXC8/KFtcXHdcXC5dKykqL2ksLyhpY2VcXHM/YnJvd3NlcilcXC92PyhbXFx3XFwuX10rKS9pLC8obW9zYWljKVtcXC9cXHNdKFtcXHdcXC5dKykvaV0sW2MsZF1dLGNwdTpbWy8oPzooYW1kfHgoPzooPzo4Nnw2NClbXy1dKT98d293fHdpbik2NClbO1xcKV0vaV0sW1t2LFwiYW1kNjRcIl1dLFsvKGlhMzIoPz07KSkvaV0sW1t2LFMubG93ZXJpemVdXSxbLygoPzppWzM0Nl18eCk4NilbO1xcKV0vaV0sW1t2LFwiaWEzMlwiXV0sWy93aW5kb3dzXFxzKGNlfG1vYmlsZSk7XFxzcHBjOy9pXSxbW3YsXCJhcm1cIl1dLFsvKCg/OnBwY3xwb3dlcnBjKSg/OjY0KT8pKD86XFxzbWFjfDt8XFwpKS9pXSxbW3YsL293ZXIvLFwiXCIsUy5sb3dlcml6ZV1dLFsvKHN1bjRcXHcpWztcXCldL2ldLFtbdixcInNwYXJjXCJdXSxbLygoPzphdnIzMnxpYTY0KD89OykpfDY4ayg/PVxcKSl8YXJtKD86NjR8KD89dlxcZCs7KSl8KD89YXRtZWxcXHMpYXZyfCg/OmlyaXh8bWlwc3xzcGFyYykoPzo2NCk/KD89Oyl8cGEtcmlzYykvaV0sW1t2LFMubG93ZXJpemVdXV0sZGV2aWNlOltbL1xcKChpcGFkfHBsYXlib29rKTtbXFx3XFxzXFwpOy1dKyhyaW18YXBwbGUpL2ldLFtsLHAsW2gseV1dLFsvYXBwbGVjb3JlbWVkaWFcXC9bXFx3XFwuXSsgXFwoKGlwYWQpL10sW2wsW3AsXCJBcHBsZVwiXSxbaCx5XV0sWy8oYXBwbGVcXHN7MCwxfXR2KS9pXSxbW2wsXCJBcHBsZSBUVlwiXSxbcCxcIkFwcGxlXCJdXSxbLyhhcmNob3MpXFxzKGdhbWVwYWQyPykvaSwvKGhwKS4rKHRvdWNocGFkKS9pLC8oaHApLisodGFibGV0KS9pLC8oa2luZGxlKVxcLyhbXFx3XFwuXSspL2ksL1xccyhub29rKVtcXHdcXHNdK2J1aWxkXFwvKFxcdyspL2ksLyhkZWxsKVxccyhzdHJlYVtrcHJcXHNcXGRdKltcXGRrb10pL2ldLFtwLGwsW2gseV1dLFsvKGtmW0Etel0rKVxcc2J1aWxkXFwvW1xcd1xcLl0rLipzaWxrXFwvL2ldLFtsLFtwLFwiQW1hem9uXCJdLFtoLHldXSxbLyhzZHxrZilbMDM0OWhpam9yc3R1d10rXFxzYnVpbGRcXC9bXFx3XFwuXSsuKnNpbGtcXC8vaV0sW1tsLHguc3RyLFQuZGV2aWNlLmFtYXpvbi5tb2RlbF0sW3AsXCJBbWF6b25cIl0sW2gsZ11dLFsvXFwoKGlwW2hvbmVkfFxcc1xcdypdKyk7LisoYXBwbGUpL2ldLFtsLHAsW2gsZ11dLFsvXFwoKGlwW2hvbmVkfFxcc1xcdypdKyk7L2ldLFtsLFtwLFwiQXBwbGVcIl0sW2gsZ11dLFsvKGJsYWNrYmVycnkpW1xccy1dPyhcXHcrKS9pLC8oYmxhY2tiZXJyeXxiZW5xfHBhbG0oPz1cXC0pfHNvbnllcmljc3NvbnxhY2VyfGFzdXN8ZGVsbHxodWF3ZWl8bWVpenV8bW90b3JvbGF8cG9seXRyb24pW1xcc18tXT8oW1xcdy1dKykqL2ksLyhocClcXHMoW1xcd1xcc10rXFx3KS9pLC8oYXN1cyktPyhcXHcrKS9pXSxbcCxsLFtoLGddXSxbL1xcKGJiMTA7XFxzKFxcdyspL2ldLFtsLFtwLFwiQmxhY2tCZXJyeVwiXSxbaCxnXV0sWy9hbmRyb2lkLisodHJhbnNmb1twcmltZVxcc117NCwxMH1cXHNcXHcrfGVlZXBjfHNsaWRlclxcc1xcdyt8bmV4dXMgN3xwYWRmb25lKS9pXSxbbCxbcCxcIkFzdXNcIl0sW2gseV1dLFsvKHNvbnkpXFxzKHRhYmxldFxcc1twc10pXFxzYnVpbGRcXC8vaSwvKHNvbnkpPyg/OnNncC4rKVxcc2J1aWxkXFwvL2ldLFtbcCxcIlNvbnlcIl0sW2wsXCJYcGVyaWEgVGFibGV0XCJdLFtoLHldXSxbLyg/OnNvbnkpPyg/Oig/Oig/OmN8ZClcXGR7NH0pfCg/OnNvWy1sXS4rKSlcXHNidWlsZFxcLy9pXSxbW3AsXCJTb255XCJdLFtsLFwiWHBlcmlhIFBob25lXCJdLFtoLGddXSxbL1xccyhvdXlhKVxccy9pLC8obmludGVuZG8pXFxzKFt3aWRzM3VdKykvaV0sW3AsbCxbaCxtXV0sWy9hbmRyb2lkLis7XFxzKHNoaWVsZClcXHNidWlsZC9pXSxbbCxbcCxcIk52aWRpYVwiXSxbaCxtXV0sWy8ocGxheXN0YXRpb25cXHNbMzRwb3J0YWJsZXZpXSspL2ldLFtsLFtwLFwiU29ueVwiXSxbaCxtXV0sWy8oc3ByaW50XFxzKFxcdyspKS9pXSxbW3AseC5zdHIsVC5kZXZpY2Uuc3ByaW50LnZlbmRvcl0sW2wseC5zdHIsVC5kZXZpY2Uuc3ByaW50Lm1vZGVsXSxbaCxnXV0sWy8obGVub3ZvKVxccz8oUyg/OjUwMDB8NjAwMCkrKD86Wy1dW1xcdytdKSkvaV0sW3AsbCxbaCx5XV0sWy8oaHRjKVs7X1xccy1dKyhbXFx3XFxzXSsoPz1cXCkpfFxcdyspKi9pLC8oenRlKS0oXFx3KykqL2ksLyhhbGNhdGVsfGdlZWtzcGhvbmV8aHVhd2VpfGxlbm92b3xuZXhpYW58cGFuYXNvbmljfCg/PTtcXHMpc29ueSlbX1xccy1dPyhbXFx3LV0rKSovaV0sW3AsW2wsL18vZyxcIiBcIl0sW2gsZ11dLFsvKG5leHVzXFxzOSkvaV0sW2wsW3AsXCJIVENcIl0sW2gseV1dLFsvKG5leHVzXFxzNnApL2ldLFtsLFtwLFwiSHVhd2VpXCJdLFtoLGddXSxbLyhtaWNyb3NvZnQpO1xccyhsdW1pYVtcXHNcXHddKykvaV0sW3AsbCxbaCxnXV0sWy9bXFxzXFwoO10oeGJveCg/Olxcc29uZSk/KVtcXHNcXCk7XS9pXSxbbCxbcCxcIk1pY3Jvc29mdFwiXSxbaCxtXV0sWy8oa2luXFwuW29uZXR3XXszfSkvaV0sW1tsLC9cXC4vZyxcIiBcIl0sW3AsXCJNaWNyb3NvZnRcIl0sW2gsZ11dLFsvXFxzKG1pbGVzdG9uZXxkcm9pZCg/OlsyLTR4XXxcXHMoPzpiaW9uaWN8eDJ8cHJvfHJhenIpKT8oOj9cXHM0Zyk/KVtcXHdcXHNdK2J1aWxkXFwvL2ksL21vdFtcXHMtXT8oXFx3KykqL2ksLyhYVFxcZHszLDR9KSBidWlsZFxcLy9pLC8obmV4dXNcXHM2KS9pXSxbbCxbcCxcIk1vdG9yb2xhXCJdLFtoLGddXSxbL2FuZHJvaWQuK1xccyhtejYwXFxkfHhvb21bXFxzMl17MCwyfSlcXHNidWlsZFxcLy9pXSxbbCxbcCxcIk1vdG9yb2xhXCJdLFtoLHldXSxbL2hiYnR2XFwvXFxkK1xcLlxcZCtcXC5cXGQrXFxzK1xcKFtcXHdcXHNdKjtcXHMqKFxcd1teO10qKTsoW147XSopL2ldLFtbcCxTLnRyaW1dLFtsLFMudHJpbV0sW2gsYl1dLFsvaGJidHYuK21hcGxlOyhcXGQrKS9pXSxbW2wsL14vLFwiU21hcnRUVlwiXSxbcCxcIlNhbXN1bmdcIl0sW2gsYl1dLFsvXFwoZHR2W1xcKTtdLisoYXF1b3MpL2ldLFtsLFtwLFwiU2hhcnBcIl0sW2gsYl1dLFsvYW5kcm9pZC4rKChzY2gtaVs4OV0wXFxkfHNody1tMzgwc3xndC1wXFxkezR9fGd0LW5cXGQrfHNnaC10OFs1Nl05fG5leHVzIDEwKSkvaSwvKChTTS1UXFx3KykpL2ldLFtbcCxcIlNhbXN1bmdcIl0sbCxbaCx5XV0sWy9zbWFydC10di4rKHNhbXN1bmcpL2ldLFtwLFtoLGJdLGxdLFsvKChzW2NncF1oLVxcdyt8Z3QtXFx3K3xnYWxheHlcXHNuZXh1c3xzbS1cXHdbXFx3XFxkXSspKS9pLC8oc2FtW3N1bmddKilbXFxzLV0qKFxcdystP1tcXHctXSopKi9pLC9zZWMtKChzZ2hcXHcrKSkvaV0sW1twLFwiU2Ftc3VuZ1wiXSxsLFtoLGddXSxbL3NpZS0oXFx3KykqL2ldLFtsLFtwLFwiU2llbWVuc1wiXSxbaCxnXV0sWy8obWFlbW98bm9raWEpLioobjkwMHxsdW1pYVxcc1xcZCspL2ksLyhub2tpYSlbXFxzXy1dPyhbXFx3LV0rKSovaV0sW1twLFwiTm9raWFcIl0sbCxbaCxnXV0sWy9hbmRyb2lkXFxzM1xcLltcXHNcXHc7LV17MTB9KGFcXGR7M30pL2ldLFtsLFtwLFwiQWNlclwiXSxbaCx5XV0sWy9hbmRyb2lkXFxzM1xcLltcXHNcXHc7LV17MTB9KGxnPyktKFswNmN2OV17Myw0fSkvaV0sW1twLFwiTEdcIl0sbCxbaCx5XV0sWy8obGcpIG5ldGNhc3RcXC50di9pXSxbcCxsLFtoLGJdXSxbLyhuZXh1c1xcc1s0NV0pL2ksL2xnW2U7XFxzXFwvLV0rKFxcdyspKi9pXSxbbCxbcCxcIkxHXCJdLFtoLGddXSxbL2FuZHJvaWQuKyhpZGVhdGFiW2EtejAtOVxcLVxcc10rKS9pXSxbbCxbcCxcIkxlbm92b1wiXSxbaCx5XV0sWy9saW51eDsuKygoam9sbGEpKTsvaV0sW3AsbCxbaCxnXV0sWy8oKHBlYmJsZSkpYXBwXFwvW1xcZFxcLl0rXFxzL2ldLFtwLGwsW2gsd11dLFsvYW5kcm9pZC4rO1xccyhnbGFzcylcXHNcXGQvaV0sW2wsW3AsXCJHb29nbGVcIl0sW2gsd11dLFsvYW5kcm9pZC4rKFxcdyspXFxzK2J1aWxkXFwvaG1cXDEvaSwvYW5kcm9pZC4rKGhtW1xcc1xcLV9dKm5vdGU/W1xcc19dKig/OlxcZFxcdyk/KVxccytidWlsZC9pLC9hbmRyb2lkLisobWlbXFxzXFwtX10qKD86b25lfG9uZVtcXHNfXXBsdXN8bm90ZSBsdGUpP1tcXHNfXSooPzpcXGRcXHcpPylcXHMrYnVpbGQvaV0sW1tsLC9fL2csXCIgXCJdLFtwLFwiWGlhb21pXCJdLFtoLGddXSxbL2FuZHJvaWQuK2EwMDAoMSlcXHMrYnVpbGQvaV0sW2wsW3AsXCJPbmVQbHVzXCJdLFtoLGddXSxbL1xccyh0YWJsZXQpWztcXC9dL2ksL1xccyhtb2JpbGUpKD86WztcXC9dfFxcc3NhZmFyaSkvaV0sW1toLFMubG93ZXJpemVdLHAsbF1dLGVuZ2luZTpbWy93aW5kb3dzLitcXHNlZGdlXFwvKFtcXHdcXC5dKykvaV0sW2QsW2MsXCJFZGdlSFRNTFwiXV0sWy8ocHJlc3RvKVxcLyhbXFx3XFwuXSspL2ksLyh3ZWJraXR8dHJpZGVudHxuZXRmcm9udHxuZXRzdXJmfGFtYXlhfGx5bnh8dzNtKVxcLyhbXFx3XFwuXSspL2ksLyhraHRtbHx0YXNtYW58bGlua3MpW1xcL1xcc11cXCg/KFtcXHdcXC5dKykvaSwvKGljYWIpW1xcL1xcc10oWzIzXVxcLltcXGRcXC5dKykvaV0sW2MsZF0sWy9ydlxcOihbXFx3XFwuXSspLiooZ2Vja28pL2ldLFtkLGNdXSxvczpbWy9taWNyb3NvZnRcXHMod2luZG93cylcXHModmlzdGF8eHApL2ldLFtjLGRdLFsvKHdpbmRvd3MpXFxzbnRcXHM2XFwuMjtcXHMoYXJtKS9pLC8od2luZG93c1xcc3Bob25lKD86XFxzb3MpKilbXFxzXFwvXT8oW1xcZFxcLlxcc10rXFx3KSovaSwvKHdpbmRvd3NcXHNtb2JpbGV8d2luZG93cylbXFxzXFwvXT8oW250Y2VcXGRcXC5cXHNdK1xcdykvaV0sW2MsW2QseC5zdHIsVC5vcy53aW5kb3dzLnZlcnNpb25dXSxbLyh3aW4oPz0zfDl8bil8d2luXFxzOXhcXHMpKFtudFxcZFxcLl0rKS9pXSxbW2MsXCJXaW5kb3dzXCJdLFtkLHguc3RyLFQub3Mud2luZG93cy52ZXJzaW9uXV0sWy9cXCgoYmIpKDEwKTsvaV0sW1tjLFwiQmxhY2tCZXJyeVwiXSxkXSxbLyhibGFja2JlcnJ5KVxcdypcXC8/KFtcXHdcXC5dKykqL2ksLyh0aXplbilbXFwvXFxzXShbXFx3XFwuXSspL2ksLyhhbmRyb2lkfHdlYm9zfHBhbG1cXHNvc3xxbnh8YmFkYXxyaW1cXHN0YWJsZXRcXHNvc3xtZWVnb3xjb250aWtpKVtcXC9cXHMtXT8oW1xcd1xcLl0rKSovaSwvbGludXg7Lisoc2FpbGZpc2gpOy9pXSxbYyxkXSxbLyhzeW1iaWFuXFxzP29zfHN5bWJvc3xzNjAoPz07KSlbXFwvXFxzLV0/KFtcXHdcXC5dKykqL2ldLFtbYyxcIlN5bWJpYW5cIl0sZF0sWy9cXCgoc2VyaWVzNDApOy9pXSxbY10sWy9tb3ppbGxhLitcXChtb2JpbGU7LitnZWNrby4rZmlyZWZveC9pXSxbW2MsXCJGaXJlZm94IE9TXCJdLGRdLFsvKG5pbnRlbmRvfHBsYXlzdGF0aW9uKVxccyhbd2lkczM0cG9ydGFibGV2dV0rKS9pLC8obWludClbXFwvXFxzXFwoXT8oXFx3KykqL2ksLyhtYWdlaWF8dmVjdG9ybGludXgpWztcXHNdL2ksLyhqb2xpfFtreGxuXT91YnVudHV8ZGViaWFufFtvcGVuXSpzdXNlfGdlbnRvb3woPz1cXHMpYXJjaHxzbGFja3dhcmV8ZmVkb3JhfG1hbmRyaXZhfGNlbnRvc3xwY2xpbnV4b3N8cmVkaGF0fHplbndhbGt8bGlucHVzKVtcXC9cXHMtXT8oPyFjaHJvbSkoW1xcd1xcLi1dKykqL2ksLyhodXJkfGxpbnV4KVxccz8oW1xcd1xcLl0rKSovaSwvKGdudSlcXHM/KFtcXHdcXC5dKykqL2ldLFtjLGRdLFsvKGNyb3MpXFxzW1xcd10rXFxzKFtcXHdcXC5dK1xcdykvaV0sW1tjLFwiQ2hyb21pdW0gT1NcIl0sZF0sWy8oc3Vub3MpXFxzPyhbXFx3XFwuXStcXGQpKi9pXSxbW2MsXCJTb2xhcmlzXCJdLGRdLFsvXFxzKFtmcmVudG9wYy1dezAsNH1ic2R8ZHJhZ29uZmx5KVxccz8oW1xcd1xcLl0rKSovaV0sW2MsZF0sWy8oaGFpa3UpXFxzKFxcdyspL2ldLFtjLGRdLFsvKGlwW2hvbmVhZF0rKSg/Oi4qb3NcXHMoW1xcd10rKSpcXHNsaWtlXFxzbWFjfDtcXHNvcGVyYSkvaV0sW1tjLFwiaU9TXCJdLFtkLC9fL2csXCIuXCJdXSxbLyhtYWNcXHNvc1xcc3gpXFxzPyhbXFx3XFxzXFwuXStcXHcpKi9pLC8obWFjaW50b3NofG1hYyg/PV9wb3dlcnBjKVxccykvaV0sW1tjLFwiTWFjIE9TXCJdLFtkLC9fL2csXCIuXCJdXSxbLygoPzpvcGVuKT9zb2xhcmlzKVtcXC9cXHMtXT8oW1xcd1xcLl0rKSovaSwvKGFpeClcXHMoKFxcZCkoPz1cXC58XFwpfFxccylbXFx3XFwuXSopKi9pLC8ocGxhblxcczl8bWluaXh8YmVvc3xvc1xcLzJ8YW1pZ2Fvc3xtb3JwaG9zfHJpc2NcXHNvc3xvcGVudm1zKS9pLC8odW5peClcXHM/KFtcXHdcXC5dKykqL2ldLFtjLGRdXX0sQz1mdW5jdGlvbih0LG4pe2lmKHRoaXMgaW5zdGFuY2VvZiBDKXt2YXIgaT10fHwoZSYmZS5uYXZpZ2F0b3ImJmUubmF2aWdhdG9yLnVzZXJBZ2VudD9lLm5hdmlnYXRvci51c2VyQWdlbnQ6cikscz1uP1MuZXh0ZW5kKE4sbik6TjtyZXR1cm4gdGhpcy5nZXRCcm93c2VyPWZ1bmN0aW9uKCl7dmFyIGU9eC5yZ3guYXBwbHkodGhpcyxzLmJyb3dzZXIpO3JldHVybiBlLm1ham9yPVMubWFqb3IoZS52ZXJzaW9uKSxlfSx0aGlzLmdldENQVT1mdW5jdGlvbigpe3JldHVybiB4LnJneC5hcHBseSh0aGlzLHMuY3B1KX0sdGhpcy5nZXREZXZpY2U9ZnVuY3Rpb24oKXtyZXR1cm4geC5yZ3guYXBwbHkodGhpcyxzLmRldmljZSl9LHRoaXMuZ2V0RW5naW5lPWZ1bmN0aW9uKCl7cmV0dXJuIHgucmd4LmFwcGx5KHRoaXMscy5lbmdpbmUpfSx0aGlzLmdldE9TPWZ1bmN0aW9uKCl7cmV0dXJuIHgucmd4LmFwcGx5KHRoaXMscy5vcyl9LHRoaXMuZ2V0UmVzdWx0PWZ1bmN0aW9uKCl7cmV0dXJue3VhOnRoaXMuZ2V0VUEoKSxicm93c2VyOnRoaXMuZ2V0QnJvd3NlcigpLGVuZ2luZTp0aGlzLmdldEVuZ2luZSgpLG9zOnRoaXMuZ2V0T1MoKSxkZXZpY2U6dGhpcy5nZXREZXZpY2UoKSxjcHU6dGhpcy5nZXRDUFUoKX19LHRoaXMuZ2V0VUE9ZnVuY3Rpb24oKXtyZXR1cm4gaX0sdGhpcy5zZXRVQT1mdW5jdGlvbihlKXtyZXR1cm4gaT1lLHRoaXN9LHRoaXN9cmV0dXJuKG5ldyBDKHQsbikpLmdldFJlc3VsdCgpfTtDLlZFUlNJT049bixDLkJST1dTRVI9e05BTUU6YyxNQUpPUjpmLFZFUlNJT046ZH0sQy5DUFU9e0FSQ0hJVEVDVFVSRTp2fSxDLkRFVklDRT17TU9ERUw6bCxWRU5ET1I6cCxUWVBFOmgsQ09OU09MRTptLE1PQklMRTpnLFNNQVJUVFY6YixUQUJMRVQ6eSxXRUFSQUJMRTp3LEVNQkVEREVEOkV9LEMuRU5HSU5FPXtOQU1FOmMsVkVSU0lPTjpkfSxDLk9TPXtOQU1FOmMsVkVSU0lPTjpkfSx0eXBlb2YgZXhwb3J0cyE9PW8/KHR5cGVvZiBtb2R1bGUhPT1vJiZtb2R1bGUuZXhwb3J0cyYmKGV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9QyksZXhwb3J0cy5VQVBhcnNlcj1DKTp0eXBlb2YgZGVmaW5lPT09cyYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gQ30pOmUuVUFQYXJzZXI9Qzt2YXIgaz1lLmpRdWVyeXx8ZS5aZXB0bztpZih0eXBlb2YgayE9PW8pe3ZhciBMPW5ldyBDO2sudWE9TC5nZXRSZXN1bHQoKSxrLnVhLmdldD1mdW5jdGlvbigpe3JldHVybiBMLmdldFVBKCl9LGsudWEuc2V0PWZ1bmN0aW9uKGUpe0wuc2V0VUEoZSk7dmFyIHQ9TC5nZXRSZXN1bHQoKTtmb3IodmFyIG4gaW4gdClrLnVhW25dPXRbbl19fX0pKHR5cGVvZiB3aW5kb3c9PVwib2JqZWN0XCI/d2luZG93OnRoaXMpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9saWJzL3VhLXBhcnNlci5taW4uanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpOyB9O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBwcmVsb2FkSW1nXG4gKiBAcGFyYW0gaW1nUGF0aFxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChpbWdQYXRoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgdmFyIGltZztcbiAgICBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgYXJndW1lbnRzLmNhbGxlZSk7XG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBpbWcuc3JjID0gaW1nUGF0aDtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9pbWcvcHJlbG9hZEltZy5qcyIsIi8qKlxuICogc2V0VXBCdG5Ud2l0dGVyXG4gKiBAcGFyYW0gJGJ0blxuICogQHBhcmFtIHRleHRcbiAqIEBwYXJhbSBzaGFyZVVSTFxuICovXG5leHBvcnQgZGVmYXVsdCAoJGJ0biwgdGV4dCwgc2hhcmVVUkwpID0+IHtcbiAgdmFyIHVybDtcbiAgaWYgKHNoYXJlVVJMID09IG51bGwpIHtcbiAgICBzaGFyZVVSTCA9ICcnO1xuICB9XG4gIHVybCA9ICdodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD8nO1xuICBpZiAoc2hhcmVVUkwgPT09ICcnKSB7XG4gICAgdXJsICs9IFwidGV4dD1cIiArIChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpO1xuICB9IGVsc2Uge1xuICAgIHVybCArPSBcInVybD1cIiArIChlbmNvZGVVUklDb21wb25lbnQoc2hhcmVVUkwpKSArIFwiJnRleHQ9XCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKTtcbiAgfVxuICByZXR1cm4gJGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgd2luZG93Lm9wZW4odXJsLCAndHdpdHRlclNoYXJlJywgJ3dpZHRoPTY3MCxoZWlnaHQ9NDAwJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0blR3aXR0ZXIuanMiLCIvKipcbiAqIHNldFVwQnRuTGluZVxuICogQHBhcmFtICRidG5cbiAqIEBwYXJhbSB0ZXh0XG4gKiBAcGFyYW0gc2hhcmVVUkxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCRidG4sIHRleHQsIHNoYXJlVVJMID0gJycpID0+IHtcbiAgdmFyIHVybDtcbiAgaWYgKHNoYXJlVVJMID09IG51bGwpIHtcbiAgICBzaGFyZVVSTCA9ICcnO1xuICB9XG4gIHVybCA9ICdodHRwOi8vbGluZS5tZS9tc2cvdGV4dC8/JztcbiAgaWYgKHNoYXJlVVJMID09PSAnJykge1xuICAgIHVybCArPSBcIlwiICsgKGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSk7XG4gIH0gZWxzZSB7XG4gICAgdXJsICs9IChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpICsgXCJcXG5cIiArIChlbmNvZGVVUklDb21wb25lbnQoc2hhcmVVUkwpKTtcbiAgfVxuICByZXR1cm4gJGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgd2luZG93Lm9wZW4odXJsLCAnbGluZVNoYXJlJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkxpbmUuanMiLCIvKipcbiAqIHNldFVwQnRuRmFjZWJvb2tcbiAqIEBwYXJhbSAkYnRuXG4gKiBAcGFyYW0gc2hhcmVVUkxcbiAqIEBwYXJhbSBkZXNjcmlwdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCAoJGJ0biwgc2hhcmVVUkwsIGRlc2NyaXB0aW9uID0gJycpID0+IHtcbiAgdmFyIHVybDtcbiAgaWYgKGRlc2NyaXB0aW9uID09IG51bGwpIHtcbiAgICBkZXNjcmlwdGlvbiA9ICcnO1xuICB9XG4gIHVybCA9ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/JmRpc3BsYXk9cG9wdXAmdT0nO1xuICB1cmwgKz0gXCJcIiArIChlbmNvZGVVUklDb21wb25lbnQoc2hhcmVVUkwpKTtcbiAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgdXJsICs9IFwiJmRlc2NyaXB0aW9uPVwiICsgKGVuY29kZVVSSUNvbXBvbmVudChkZXNjcmlwdGlvbikpO1xuICB9XG4gIHJldHVybiAkYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICB3aW5kb3cub3Blbih1cmwsIFwiZmFjZWJvb2tTaGFyZVwiICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSwgJ3dpZHRoPTY3MCxoZWlnaHQ9NDAwJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkZhY2VCb29rLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRnVuY1xuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuYmxhbmsoKTtcbiAgICB0aGlzLmRlYnVnZ2VyKCk7XG4gICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcbiAgICB0aGlzLmV4cGFuZGpRdWVyeSgpO1xuXG4gIH1cblxuICBibGFuaygpIHtcblxuICAgICQoKCk9PnskKCcuYmxhbmsnKS5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJyk7fSk7XG5cbiAgfVxuXG4gIGRlYnVnZ2VyKCkge1xuXG4gICAgLy8g44OH44OQ44OD44Kw44Oi44O844OJ5YiH5pu/XG4gICAgdmFyIFJFTEVBU0UgPSBnYi5pbi5jb25mLlJFTEVBU0U7XG5cbiAgICAvLyDnva7mj5vlr77osaHjga7jg6Hjgr3jg4Pjg4njgpLphY3liJfjgajjgZfjgabkv53mjIHjgZnjgotcbiAgICB2YXIgbWV0aG9kcyA9IFtcbiAgICAgICdsb2cnLFxuICAgICAgJ2RlYnVnJyxcbiAgICAgICdpbmZvJyxcbiAgICAgICd3YXJuJyxcbiAgICAgICdlcnJvcicsXG4gICAgICAnZGlyJyxcbiAgICAgICd0cmFjZScsXG4gICAgICAnYXNzZXJ0JyxcbiAgICAgICdkaXJ4bWwnLFxuICAgICAgJ2dyb3VwJyxcbiAgICAgICdncm91cEVuZCcsXG4gICAgICAndGltZScsXG4gICAgICAndGltZUVuZCcsXG4gICAgICAnY291bnQnLFxuICAgICAgJ3Byb2ZpbGUnLFxuICAgICAgJ3Byb2ZpbGVFbmQnXG4gICAgXTtcblxuICAgIC8vIGNvbnNvbGXjgYzkvb/jgYjjgarjgYTloLTlkIjjga/nqbrjga7jgqrjg5bjgrjjgqfjgq/jg4jjgpLoqK3lrprjgZfjgabjgYrjgY9cbiAgICBpZiggdHlwZW9mIHdpbmRvdy5jb25zb2xlID09PSBcInVuZGVmaW5lZFwiICl7XG4gICAgICB3aW5kb3cuY29uc29sZSA9IHt9O1xuICAgIH1cblxuICAgIC8vIOWQhOODoeOCveODg+ODieOCkndpbmRvd+OBuOebtOaOpei/veWKoOOBl+OBpuihjOOBj1xuICAgIGZvciggdmFyIGkgaW4gbWV0aG9kcyApe1xuICAgICAgKGZ1bmN0aW9uKCBtICl7XG5cbiAgICAgICAvLyBjb25zb2xl44Gr44GC44KL77yf44OH44OQ44OD44Kw44Oi44O844OJ44Gv5pyJ5Yq577yfY29uc29sZeOBruOCguOBruOBr+mWouaVsO+8n1xuICAgICAgIGlmKCBjb25zb2xlW21dICYmICFSRUxFQVNFICYmIHR5cGVvZiBjb25zb2xlW21dID09PSBcImZ1bmN0aW9uXCIgKXtcbiAgICAgICAgd2luZG93W21dID0gY29uc29sZVttXS5iaW5kKGNvbnNvbGUpO1xuICAgICAgIH0gZWxzZSB744CALy8gZGVidWdNb2Rl44GMZmFsc2Us44KC44GX44GP44Gv6Kmy5b2T44Oh44K944OD44OJ44GM5a2Y5Zyo44GX44Gq44GE5aC05ZCI44Gv44CB56m644Gu44Oh44K944OD44OJ44KS55So5oSP44GZ44KLXG4gICAgICAgIHdpbmRvd1ttXSA9IGZ1bmN0aW9uKCl7fTtcbiAgICAgICB9XG5cbiAgICAgIH0pKCBtZXRob2RzW2ldICk7XG4gICAgfVxuXG4gIH1cblxuICBwcmVwZW5kKHBhcmFtKSB7XG5cbiAgICAkKCdib2R5JykucHJlcGVuZChwYXJhbSk7XG5cbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHtcblxuICAgIHZhciBGUFMgPSAxMDAwLzYwO1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgLy8gY2hyb21l44KE5pyA5paw44GuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgLy8g5Y+k44GEZmlyZWZveOeUqFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICAvLyBzYWZhcmk25Lul5YmN44CBaU9TNiBzYWZhcmnnlKhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCBGUFMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIHRpbWVyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTsgICAgICBcblxuICB9XG5cbiAgZXhwYW5kalF1ZXJ5KCkge1xuXG4gICAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgICB3OjAsIFxuICAgICAgaDowLCBcbiAgICAgIGFkanVzdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAnbGVmdCc6JzUwJScsXG4gICAgICAgICAgICAndG9wJzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6Jy0nICsgKHcgLyAyKSArICdweCcsXG4gICAgICAgICAgICAnbWFyZ2luLXRvcCc6Jy0nICsgKGggLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBhZGp1c3RXOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICdsZWZ0JzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6Jy0nICsgKHcgLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBhZGp1c3RIOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICd0b3AnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi10b3AnOictJyArIChoIC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIGNoZWNrQ3NzQmxlbmQoKSB7XG5cbiAgICBpZiAoJ0NTUycgaW4gd2luZG93ICYmICdzdXBwb3J0cycgaW4gd2luZG93LkNTUykge1xuICAgICAgaWYgKCF3aW5kb3cuQ1NTLnN1cHBvcnRzKCdtaXgtYmxlbmQtbW9kZScsICdzb2Z0LWxpZ2h0JykpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1taXgtYmxlbmQtbW9kZScpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9nKGdiLmluLnUuaXNJRSk7XG5cbiAgICBpZiAoZ2IuaW4udS5pc0lFKSB7XG4gICAgICBcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3QtbWl4LWJsZW5kLW1vZGUnKVxuICAgICAgXG4gICAgfTtcblxuICB9XG5cbiAgbm90U2F2ZUltZygpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIHBjXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHtcblxuICAgICAgJCgoKT0+e1xuICAgICAgICAkKFwiaW1nXCIpLm9uKFwiY29udGV4dG1lbnVcIiwoKT0+e1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIHNwIGFuZHJvaWRcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHZhciB2ID0gZ2IuaW4udS5pc0FuZHJvaWRWZXJzaW9uKCk7XG5cbiAgICBpZiAodj09dW5kZWZpbmVkKSByZXR1cm47XG4gICAgaWYgKHY8NSkge1xuXG4gICAgICB2YXIgdGltZXI7XG4gICAgICAkKFwiaW1nXCIpLm9uKFwidG91Y2hzdGFydFwiLCgpPT57XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIGFsZXJ0KFwi55S75YOP44Gv5L+d5a2Y44Gn44GN44G+44Gb44KTXCIpXG4gICAgICAgIH0sNTAwKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KVxuICAgICAgJChcImltZ1wiKS5vbihcInRvdWNoZW5kXCIsKCk9PntcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSkgICAgICBcblxuICAgIH1cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9GdW5jLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogTWFpblxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgRGlzcGxheVRvcCBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlUb3AnO1xuaW1wb3J0IERpc3BsYXlUZXh0dXJlQmcgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5VGV4dHVyZUJnJztcbmltcG9ydCBEaXNwbGF5VGV4dHVyZU1vdmllIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVNb3ZpZSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICAvL3BhZ2Xjg5rjg7zjgrjliKXjga5JROOCkuWPluW+l1xuICAgIHZhciBwYWdlID0gJCgnYm9keScpLmRhdGEoJ2lkJyk7XG5cbiAgICB3aW5kb3cuY29uc29sZS5sb2coJ+ePvuWcqOOBruODmuODvOOCuElE44GvICcsIHBhZ2UpO1xuXG5cdFx0Ly9wYWdl44GuSUTjgZTjgajjgavnmbrngavjgZnjgovjgq/jg6njgrnjga7mjK/jgorliIbjgZFcbiAgICBzd2l0Y2ggKHBhZ2UpIHtcblxuICAgICAgY2FzZSAndG9wJzpcblxuICAgICAgICBuZXcgRGlzcGxheVRvcCgpO1xuXG4gICAgICAgIGJyZWFrO1xuXG5cdFx0XHRjYXNlICd0ZXh0dXJlQmcnOlxuXG5cdFx0XHRcdG5ldyBEaXNwbGF5VGV4dHVyZUJnKCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3RleHR1cmVNb3ZpZSc6XG5cblx0XHRcdFx0bmV3IERpc3BsYXlUZXh0dXJlTW92aWUoKTtcblxuXHRcdFx0XHRicmVhaztcblxuICAgIH1cblxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgXG4gIH1cblxuICBvblJlbmRlcigpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbigncmVhZHknLCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3BhZ2UvTWFpbi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IERpc3BsYXlcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbi8vIGltcG9ydCBXZWJHTGluaXQgZnJvbSAnLi9XZWJHTGluaXQuanMnO1xuXG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuLi92aXN1YWwvQ2FudmFzXCI7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheVRvcCB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIOOCouODi+ODoeODvOOCt+ODp+ODs+ODq+ODvOODl+OCueOCv+ODvOODiFxuICAgIC8vIGdiLmluLnVwLmxvb3AoKTtcbiAgICBcbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIGdiLmluLmNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxuICAgIGdiLmluLmNhbnZhcy5pbml0KCk7XG5cblxuICB9XG5cbiAgc3RhdGljIHJ1bigpIHtcblxuXHRcdC8vIHdpbmRvdy5jb25zb2xlLmxvZygnc3RhdGljX1J1bicpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ2FudmFzXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5Jztcbi8vIGltcG9ydCBUaXRsZU9iamVjdCBmcm9tIFwiLi9UaXRsZU9iamVjdFwiO1xuLy8gaW1wb3J0IENhbWVyYSBmcm9tICcuL1V0aWxzL0NhbWVyYSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy51bmlmb3JtcyA9IHtcbiAgICAgIHVfdGltZTogeyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxuICAgICAgdV9yZXNvbHV0aW9uOiB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCkgfSxcbiAgICAgIHVfbW91c2U6IHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoKSB9XG4gICAgfTtcblxuICAgIC8vIHRoaXMudGl0bGVPYmplY3QgPSBuZXcgVGl0bGVPYmplY3QoKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYmdsLW91dHB1dCcpO1xuXG4gICAgdGhpcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIC8vIHRoaXMub3V0cHV0ID0gb3B0cy5vdXRwdXQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG5cdFx0dGhpcy5jdWJlID0gbnVsbDtcblxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhID0gdGhpcy5fY3JlYXRlQ2FtZXJhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlciA9IHRoaXMuX2NyZWF0ZVJlbmRlcmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTY2VuZSA9IHRoaXMuX2NyZWF0ZVNjZW5lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVPYmplY3QgPSB0aGlzLl9jcmVhdGVPYmplY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9yYml0Q29udHJvbHMgPSB0aGlzLl9vcmJpdENvbnRyb2xzLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnBsYW5lT2JqZWN0ID0gdGhpcy5fcGxhbmVPYmplY3QuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucmVuZGVyID0gdGhpcy5fcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5fb25SZXNpemUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuVXBkYXRlID0gdGhpcy5fVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDliJ3mnJ/ljJZcbiAgICovXG4gIGluaXQoKXtcblxuXG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpO1xuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKCk7XG5cblx0XHR0aGlzLm9yYml0Q29udHJvbHMoKTtcblxuXHRcdC8vIHRoaXMuY3JlYXRlT2JqZWN0KCk7XG5cbiAgICB0aGlzLnBsYW5lT2JqZWN0KCk7XG5cbiAgICB0aGlzLlVwZGF0ZSgpO1xuXG4gICAgLy8gdGhpcy50aXRsZU9iamVjdC5sb2FkVGV4dHVyZSgoKSA9PiB7XG4gICAgLy8gICB0aGlzLnNjZW5lLmFkZCh0aGlzLnRpdGxlT2JqZWN0Lm9iaik7XG4gICAgLy8gfSk7XG5cbiAgICAvL+ODquOCteOCpOOCuuOCpOODmeODs+ODiOeZuueBq1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgfSwgZmFsc2UpO1xuXG4gIH1cblxuICAvKipcbiAgICog44Kr44Oh44Op5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlQ2FtZXJhKCl7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxMDA7XG5cbiAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwwLDApKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvOS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVJlbmRlcmVyKCl7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgYWxwaGEgICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICBhbnRpYWxpYXMgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIHN0ZW5jaWwgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgZGVwdGggICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIHByZW11bHRpcGxpZWRBbHBoYSA6IGZhbHNlLFxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhc1xuXHRcdH0pO1xuXG4gICAgLy8gdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHgwMDAwMDApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIC8vIHRoaXMub3V0cHV0LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKuOAgOOCt+ODvOODs+S9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVNjZW5lKCl7XG5cblx0XHR0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBPYmplY3TkvZzmiJBcbiAgICogQHByaXZhdGVcbiAgICovXG5cdF9jcmVhdGVPYmplY3QoKXtcblxuICAgIGxldCBjdWJlR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNCwgNCwgNCk7XG4gICAgbGV0IGN1YmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogMHhmZmZmZmYsXG4gICAgICB3aXJlZnJhbWU6IHRydWVcbiAgICB9KTtcblxuICAgIHRoaXMuY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGN1YmVHZW9tZXRyeSwgY3ViZU1hdGVyaWFsKTtcbiAgICB0aGlzLmN1YmUucG9zaXRpb24ueCA9IDM7XG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLnkgPSAzO1xuICAgIHRoaXMuY3ViZS5wb3NpdGlvbi56ID0gMztcblxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY3ViZSk7XG5cblx0fVxuXG5cdF9wbGFuZU9iamVjdCgpe1xuICAgIHRoaXMucGxhbmUgPSBuZXcgVEhSRUUuTWVzaChcbiAgICAgICAgLy8gbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMjU2LCA2NCwgNDAsIDEwKSxcbiAgICAgICAgbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoNSwgMjAsIDMyKSxcbiAgICAgICAgbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcbiAgICAgICAgICB1bmlmb3JtczogdGhpcy51bmlmb3JtcyxcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsc2wvaW5kZXgvdGVzdC52ZXJ0JyksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsc2wvaW5kZXgvdGVzdC5mcmFnJyksXG4gICAgICAgIH0pXG4gICAgKVxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMucGxhbmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0X3JlbmRlcigpIHtcbiAgICBsZXQgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcbiAgICBsZXQgdGltZSA9IGNsb2NrLmdldERlbHRhKCk7XG5cbiAgICAvLyB0aGlzLnRpdGxlT2JqZWN0LnRpdHJlbmRlcih0aW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmm7TmlrBcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9VcGRhdGUoKSB7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcbiAgICAgIHRoaXMuVXBkYXRlKCk7XG4gICAgfSk7XG4gICAgLy8gdGhpcy5jb250cm9scy51cGRhdGUoKTtcbiAgICB0aGlzLnVuaWZvcm1zLnVfdGltZS52YWx1ZSArPSAwLjA1O1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgfVxuXG4gIC8qKlxuICAgKuOAgOeUu+mdouODquOCteOCpOOCulxuICAgKi9cbiAgX29uUmVzaXplKCkge1xuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuXHQvKipcbiAgICog44Kr44Oh44Op44Kz44Oz44OI44Ot44O844OrXG5cdCAqL1xuXHRfb3JiaXRDb250cm9scygpe1xuXHRcdHRoaXMuY29udHJvbHMgPSBuZXcgVEhSRUUuT3JiaXRDb250cm9scyh0aGlzLmNhbWVyYSk7XG5cdFx0dGhpcy5jb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZTtcblx0XHRsZXQgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcblxuXHRcdGxldCBkZWx0YSA9IGNsb2NrLmdldERlbHRhKCk7XG5cdFx0dGhpcy5jb250cm9scy51cGRhdGUoZGVsdGEpO1xuICB9XG5cblx0c2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvQ2FudmFzLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRW50cnlcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxucmVxdWlyZSgnLi4vLi4vbGlicy9PcmJpdENvbnRyb2xzLmpzJyk7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cnkge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdH1cblxuXHQvKipcblx0ICog5Yid5pyf5YyWXG5cdCAqL1xuXHRpbml0KCl7XG5cblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0VudHJ5LmpzIiwiLyoqXG4gKiBAYXV0aG9yIHFpYW8gLyBodHRwczovL2dpdGh1Yi5jb20vcWlhb1xuICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbVxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cbiAqIEBhdXRob3IgV2VzdExhbmdsZXkgLyBodHRwOi8vZ2l0aHViLmNvbS9XZXN0TGFuZ2xleVxuICogQGF1dGhvciBlcmljaDY2NiAvIGh0dHA6Ly9lcmljaGFpbmVzLmNvbVxuICovXG5cbi8vIFRoaXMgc2V0IG9mIGNvbnRyb2xzIHBlcmZvcm1zIG9yYml0aW5nLCBkb2xseWluZyAoem9vbWluZyksIGFuZCBwYW5uaW5nLlxuLy8gVW5saWtlIFRyYWNrYmFsbENvbnRyb2xzLCBpdCBtYWludGFpbnMgdGhlIFwidXBcIiBkaXJlY3Rpb24gb2JqZWN0LnVwICgrWSBieSBkZWZhdWx0KS5cbi8vXG4vLyAgICBPcmJpdCAtIGxlZnQgbW91c2UgLyB0b3VjaDogb25lIGZpbmdlciBtb3ZlXG4vLyAgICBab29tIC0gbWlkZGxlIG1vdXNlLCBvciBtb3VzZXdoZWVsIC8gdG91Y2g6IHR3byBmaW5nZXIgc3ByZWFkIG9yIHNxdWlzaFxuLy8gICAgUGFuIC0gcmlnaHQgbW91c2UsIG9yIGFycm93IGtleXMgLyB0b3VjaDogdGhyZWUgZmludGVyIHN3aXBlXG5cblRIUkVFLk9yYml0Q29udHJvbHMgPSBmdW5jdGlvbiAoIG9iamVjdCwgZG9tRWxlbWVudCApIHtcblxuXHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblxuXHR0aGlzLmRvbUVsZW1lbnQgPSAoIGRvbUVsZW1lbnQgIT09IHVuZGVmaW5lZCApID8gZG9tRWxlbWVudCA6IGRvY3VtZW50O1xuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuXHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG5cdC8vIFwidGFyZ2V0XCIgc2V0cyB0aGUgbG9jYXRpb24gb2YgZm9jdXMsIHdoZXJlIHRoZSBvYmplY3Qgb3JiaXRzIGFyb3VuZFxuXHR0aGlzLnRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIGRvbGx5IGluIGFuZCBvdXQgKCBQZXJzcGVjdGl2ZUNhbWVyYSBvbmx5IClcblx0dGhpcy5taW5EaXN0YW5jZSA9IDA7XG5cdHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gem9vbSBpbiBhbmQgb3V0ICggT3J0aG9ncmFwaGljQ2FtZXJhIG9ubHkgKVxuXHR0aGlzLm1pblpvb20gPSAwO1xuXHR0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgdmVydGljYWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0Ly8gUmFuZ2UgaXMgMCB0byBNYXRoLlBJIHJhZGlhbnMuXG5cdHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcblx0dGhpcy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTsgLy8gcmFkaWFuc1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCBob3Jpem9udGFsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdC8vIElmIHNldCwgbXVzdCBiZSBhIHN1Yi1pbnRlcnZhbCBvZiB0aGUgaW50ZXJ2YWwgWyAtIE1hdGguUEksIE1hdGguUEkgXS5cblx0dGhpcy5taW5BemltdXRoQW5nbGUgPSAtIEluZmluaXR5OyAvLyByYWRpYW5zXG5cdHRoaXMubWF4QXppbXV0aEFuZ2xlID0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblxuXHQvLyBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgZGFtcGluZyAoaW5lcnRpYSlcblx0Ly8gSWYgZGFtcGluZyBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0dGhpcy5lbmFibGVEYW1waW5nID0gZmFsc2U7XG5cdHRoaXMuZGFtcGluZ0ZhY3RvciA9IDAuMjU7XG5cblx0Ly8gVGhpcyBvcHRpb24gYWN0dWFsbHkgZW5hYmxlcyBkb2xseWluZyBpbiBhbmQgb3V0OyBsZWZ0IGFzIFwiem9vbVwiIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgem9vbWluZ1xuXHR0aGlzLmVuYWJsZVpvb20gPSB0cnVlO1xuXHR0aGlzLnpvb21TcGVlZCA9IDEuMDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSByb3RhdGluZ1xuXHR0aGlzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XG5cdHRoaXMucm90YXRlU3BlZWQgPSAxLjA7XG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcGFubmluZ1xuXHR0aGlzLmVuYWJsZVBhbiA9IHRydWU7XG5cdHRoaXMua2V5UGFuU3BlZWQgPSA3LjA7XHQvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXG5cblx0Ly8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcblx0Ly8gSWYgYXV0by1yb3RhdGUgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdHRoaXMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xuXHR0aGlzLmF1dG9Sb3RhdGVTcGVlZCA9IDIuMDsgLy8gMzAgc2Vjb25kcyBwZXIgcm91bmQgd2hlbiBmcHMgaXMgNjBcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcblx0dGhpcy5lbmFibGVLZXlzID0gdHJ1ZTtcblxuXHQvLyBUaGUgZm91ciBhcnJvdyBrZXlzXG5cdHRoaXMua2V5cyA9IHsgTEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwIH07XG5cblx0Ly8gTW91c2UgYnV0dG9uc1xuXHR0aGlzLm1vdXNlQnV0dG9ucyA9IHsgT1JCSVQ6IFRIUkVFLk1PVVNFLkxFRlQsIFpPT006IFRIUkVFLk1PVVNFLk1JRERMRSwgUEFOOiBUSFJFRS5NT1VTRS5SSUdIVCB9O1xuXG5cdC8vIGZvciByZXNldFxuXHR0aGlzLnRhcmdldDAgPSB0aGlzLnRhcmdldC5jbG9uZSgpO1xuXHR0aGlzLnBvc2l0aW9uMCA9IHRoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XG5cdHRoaXMuem9vbTAgPSB0aGlzLm9iamVjdC56b29tO1xuXG5cdC8vXG5cdC8vIHB1YmxpYyBtZXRob2RzXG5cdC8vXG5cblx0dGhpcy5nZXRQb2xhckFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIHNwaGVyaWNhbC5waGk7XG5cblx0fTtcblxuXHR0aGlzLmdldEF6aW11dGhhbEFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIHNwaGVyaWNhbC50aGV0YTtcblxuXHR9O1xuXG5cdHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRzY29wZS50YXJnZXQuY29weSggc2NvcGUudGFyZ2V0MCApO1xuXHRcdHNjb3BlLm9iamVjdC5wb3NpdGlvbi5jb3B5KCBzY29wZS5wb3NpdGlvbjAgKTtcblx0XHRzY29wZS5vYmplY3Quem9vbSA9IHNjb3BlLnpvb20wO1xuXG5cdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0fTtcblxuXHQvLyB0aGlzIG1ldGhvZCBpcyBleHBvc2VkLCBidXQgcGVyaGFwcyBpdCB3b3VsZCBiZSBiZXR0ZXIgaWYgd2UgY2FuIG1ha2UgaXQgcHJpdmF0ZS4uLlxuXHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHQvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcblx0XHR2YXIgcXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKCBvYmplY3QudXAsIG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxLCAwICkgKTtcblx0XHR2YXIgcXVhdEludmVyc2UgPSBxdWF0LmNsb25lKCkuaW52ZXJzZSgpO1xuXG5cdFx0dmFyIGxhc3RQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdFx0dmFyIGxhc3RRdWF0ZXJuaW9uID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKCkge1xuXG5cdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cblx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgdG8gXCJ5LWF4aXMtaXMtdXBcIiBzcGFjZVxuXHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdCApO1xuXG5cdFx0XHQvLyBhbmdsZSBmcm9tIHotYXhpcyBhcm91bmQgeS1heGlzXG5cdFx0XHRzcGhlcmljYWwuc2V0RnJvbVZlY3RvcjMoIG9mZnNldCApO1xuXG5cdFx0XHRpZiAoIHNjb3BlLmF1dG9Sb3RhdGUgJiYgc3RhdGUgPT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdFx0cm90YXRlTGVmdCggZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNwaGVyaWNhbC50aGV0YSArPSBzcGhlcmljYWxEZWx0YS50aGV0YTtcblx0XHRcdHNwaGVyaWNhbC5waGkgKz0gc3BoZXJpY2FsRGVsdGEucGhpO1xuXG5cdFx0XHQvLyByZXN0cmljdCB0aGV0YSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRzcGhlcmljYWwudGhldGEgPSBNYXRoLm1heCggc2NvcGUubWluQXppbXV0aEFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4QXppbXV0aEFuZ2xlLCBzcGhlcmljYWwudGhldGEgKSApO1xuXG5cdFx0XHQvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnBoaSA9IE1hdGgubWF4KCBzY29wZS5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4UG9sYXJBbmdsZSwgc3BoZXJpY2FsLnBoaSApICk7XG5cblx0XHRcdHNwaGVyaWNhbC5tYWtlU2FmZSgpO1xuXG5cblx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgKj0gc2NhbGU7XG5cblx0XHRcdC8vIHJlc3RyaWN0IHJhZGl1cyB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRzcGhlcmljYWwucmFkaXVzID0gTWF0aC5tYXgoIHNjb3BlLm1pbkRpc3RhbmNlLCBNYXRoLm1pbiggc2NvcGUubWF4RGlzdGFuY2UsIHNwaGVyaWNhbC5yYWRpdXMgKSApO1xuXG5cdFx0XHQvLyBtb3ZlIHRhcmdldCB0byBwYW5uZWQgbG9jYXRpb25cblx0XHRcdHNjb3BlLnRhcmdldC5hZGQoIHBhbk9mZnNldCApO1xuXG5cdFx0XHRvZmZzZXQuc2V0RnJvbVNwaGVyaWNhbCggc3BoZXJpY2FsICk7XG5cblx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgYmFjayB0byBcImNhbWVyYS11cC12ZWN0b3ItaXMtdXBcIiBzcGFjZVxuXHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdEludmVyc2UgKTtcblxuXHRcdFx0cG9zaXRpb24uY29weSggc2NvcGUudGFyZ2V0ICkuYWRkKCBvZmZzZXQgKTtcblxuXHRcdFx0c2NvcGUub2JqZWN0Lmxvb2tBdCggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlRGFtcGluZyA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnBoaSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c2NhbGUgPSAxO1xuXHRcdFx0cGFuT2Zmc2V0LnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHQvLyB1cGRhdGUgY29uZGl0aW9uIGlzOlxuXHRcdFx0Ly8gbWluKGNhbWVyYSBkaXNwbGFjZW1lbnQsIGNhbWVyYSByb3RhdGlvbiBpbiByYWRpYW5zKV4yID4gRVBTXG5cdFx0XHQvLyB1c2luZyBzbWFsbC1hbmdsZSBhcHByb3hpbWF0aW9uIGNvcyh4LzIpID0gMSAtIHheMiAvIDhcblxuXHRcdFx0aWYgKCB6b29tQ2hhbmdlZCB8fFxuXHRcdFx0XHRsYXN0UG9zaXRpb24uZGlzdGFuY2VUb1NxdWFyZWQoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApID4gRVBTIHx8XG5cdFx0XHRcdDggKiAoIDEgLSBsYXN0UXVhdGVybmlvbi5kb3QoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICkgKSA+IEVQUyApIHtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0XHRcdGxhc3RQb3NpdGlvbi5jb3B5KCBzY29wZS5vYmplY3QucG9zaXRpb24gKTtcblx0XHRcdFx0bGFzdFF1YXRlcm5pb24uY29weSggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKTtcblx0XHRcdFx0em9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHR0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG5cdFx0Ly9zY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdkaXNwb3NlJyB9ICk7IC8vIHNob3VsZCB0aGlzIGJlIGFkZGVkIGhlcmU/XG5cblx0fTtcblxuXHQvL1xuXHQvLyBpbnRlcm5hbHNcblx0Ly9cblxuXHR2YXIgc2NvcGUgPSB0aGlzO1xuXG5cdHZhciBjaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcblx0dmFyIHN0YXJ0RXZlbnQgPSB7IHR5cGU6ICdzdGFydCcgfTtcblx0dmFyIGVuZEV2ZW50ID0geyB0eXBlOiAnZW5kJyB9O1xuXG5cdHZhciBTVEFURSA9IHsgTk9ORSA6IC0gMSwgUk9UQVRFIDogMCwgRE9MTFkgOiAxLCBQQU4gOiAyLCBUT1VDSF9ST1RBVEUgOiAzLCBUT1VDSF9ET0xMWSA6IDQsIFRPVUNIX1BBTiA6IDUgfTtcblxuXHR2YXIgc3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdHZhciBFUFMgPSAwLjAwMDAwMTtcblxuXHQvLyBjdXJyZW50IHBvc2l0aW9uIGluIHNwaGVyaWNhbCBjb29yZGluYXRlc1xuXHR2YXIgc3BoZXJpY2FsID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXHR2YXIgc3BoZXJpY2FsRGVsdGEgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cblx0dmFyIHNjYWxlID0gMTtcblx0dmFyIHBhbk9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdHZhciB6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdHZhciByb3RhdGVTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciByb3RhdGVFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcm90YXRlRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdHZhciBwYW5TdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBwYW5FbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcGFuRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdHZhciBkb2xseVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIGRvbGx5RW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIGRvbGx5RGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdGZ1bmN0aW9uIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkge1xuXG5cdFx0cmV0dXJuIDIgKiBNYXRoLlBJIC8gNjAgLyA2MCAqIHNjb3BlLmF1dG9Sb3RhdGVTcGVlZDtcblxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Wm9vbVNjYWxlKCkge1xuXG5cdFx0cmV0dXJuIE1hdGgucG93KCAwLjk1LCBzY29wZS56b29tU3BlZWQgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gcm90YXRlTGVmdCggYW5nbGUgKSB7XG5cblx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAtPSBhbmdsZTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gcm90YXRlVXAoIGFuZ2xlICkge1xuXG5cdFx0c3BoZXJpY2FsRGVsdGEucGhpIC09IGFuZ2xlO1xuXG5cdH1cblxuXHR2YXIgcGFuTGVmdCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbkxlZnQoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAwICk7IC8vIGdldCBYIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIC0gZGlzdGFuY2UgKTtcblxuXHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0dmFyIHBhblVwID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuVXAoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAxICk7IC8vIGdldCBZIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIGRpc3RhbmNlICk7XG5cblx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdC8vIGRlbHRhWCBhbmQgZGVsdGFZIGFyZSBpbiBwaXhlbHM7IHJpZ2h0IGFuZCBkb3duIGFyZSBwb3NpdGl2ZVxuXHR2YXIgcGFuID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW4gKCBkZWx0YVgsIGRlbHRhWSApIHtcblxuXHRcdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0Ly8gcGVyc3BlY3RpdmVcblx0XHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXHRcdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXHRcdFx0XHR2YXIgdGFyZ2V0RGlzdGFuY2UgPSBvZmZzZXQubGVuZ3RoKCk7XG5cblx0XHRcdFx0Ly8gaGFsZiBvZiB0aGUgZm92IGlzIGNlbnRlciB0byB0b3Agb2Ygc2NyZWVuXG5cdFx0XHRcdHRhcmdldERpc3RhbmNlICo9IE1hdGgudGFuKCAoIHNjb3BlLm9iamVjdC5mb3YgLyAyICkgKiBNYXRoLlBJIC8gMTgwLjAgKTtcblxuXHRcdFx0XHQvLyB3ZSBhY3R1YWxseSBkb24ndCB1c2Ugc2NyZWVuV2lkdGgsIHNpbmNlIHBlcnNwZWN0aXZlIGNhbWVyYSBpcyBmaXhlZCB0byBzY3JlZW4gaGVpZ2h0XG5cdFx0XHRcdHBhbkxlZnQoIDIgKiBkZWx0YVggKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdHBhblVwKCAyICogZGVsdGFZICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0Ly8gb3J0aG9ncmFwaGljXG5cdFx0XHRcdHBhbkxlZnQoIGRlbHRhWCAqICggc2NvcGUub2JqZWN0LnJpZ2h0IC0gc2NvcGUub2JqZWN0LmxlZnQgKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRXaWR0aCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRwYW5VcCggZGVsdGFZICogKCBzY29wZS5vYmplY3QudG9wIC0gc2NvcGUub2JqZWN0LmJvdHRvbSApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIGNhbWVyYSBuZWl0aGVyIG9ydGhvZ3JhcGhpYyBub3IgcGVyc3BlY3RpdmVcblx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicgKTtcblx0XHRcdFx0c2NvcGUuZW5hYmxlUGFuID0gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdGZ1bmN0aW9uIGRvbGx5SW4oIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRzY2FsZSAvPSBkb2xseVNjYWxlO1xuXG5cdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gKiBkb2xseVNjYWxlICkgKTtcblx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gZG9sbHlPdXQoIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRzY2FsZSAqPSBkb2xseVNjYWxlO1xuXG5cdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gLyBkb2xseVNjYWxlICkgKTtcblx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdH1cblxuXHR9XG5cblx0Ly9cblx0Ly8gZXZlbnQgY2FsbGJhY2tzIC0gdXBkYXRlIHRoZSBvYmplY3Qgc3RhdGVcblx0Ly9cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duRG9sbHknICk7XG5cblx0XHRkb2xseVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blBhbicgKTtcblxuXHRcdHBhblN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlRG9sbHknICk7XG5cblx0XHRkb2xseUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fVxuXG5cdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUGFuJyApO1xuXG5cdFx0cGFuRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVVwJyApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVdoZWVsJyApO1xuXG5cdFx0aWYgKCBldmVudC5kZWx0YVkgPCAwICkge1xuXG5cdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmRlbHRhWSA+IDAgKSB7XG5cblx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlS2V5RG93bicgKTtcblxuXHRcdHN3aXRjaCAoIGV2ZW50LmtleUNvZGUgKSB7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5VUDpcblx0XHRcdFx0cGFuKCAwLCBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5CT1RUT006XG5cdFx0XHRcdHBhbiggMCwgLSBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxuXHRcdFx0XHRwYW4oIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLlJJR0hUOlxuXHRcdFx0XHRwYW4oIC0gc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0Um90YXRlJyApO1xuXG5cdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnREb2xseScgKTtcblxuXHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcblx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cblx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRkb2xseVN0YXJ0LnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFBhbicgKTtcblxuXHRcdHBhblN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVSb3RhdGUnICk7XG5cblx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuXHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuXHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVEb2xseScgKTtcblxuXHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcblx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cblx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRkb2xseUVuZC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH1cblxuXHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVBhbicgKTtcblxuXHRcdHBhbkVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cblx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaEVuZCcgKTtcblxuXHR9XG5cblx0Ly9cblx0Ly8gZXZlbnQgaGFuZGxlcnMgLSBGU006IGxpc3RlbiBmb3IgZXZlbnRzIGFuZCByZXNldCBzdGF0ZVxuXHQvL1xuXG5cdGZ1bmN0aW9uIG9uTW91c2VEb3duKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5PUkJJVCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuUk9UQVRFO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuWk9PTSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuRE9MTFk7XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5QQU4gKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLlBBTjtcblxuXHRcdH1cblxuXHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKCBzdGF0ZSA9PT0gU1RBVEUuUk9UQVRFICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5ET0xMWSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuUEFOICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZVVwKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRoYW5kbGVNb3VzZVVwKCBldmVudCApO1xuXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgfHwgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSAmJiBzdGF0ZSAhPT0gU1RBVEUuUk9UQVRFICkgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0aGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKTtcblxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTsgLy8gbm90IHN1cmUgd2h5IHRoZXNlIGFyZSBoZXJlLi4uXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25LZXlEb3duKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlS2V5cyA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGhhbmRsZUtleURvd24oIGV2ZW50ICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hTdGFydCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdGNhc2UgMTpcdC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ST1RBVEU7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcdC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnREb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX0RPTExZO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1BBTjtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1JPVEFURSApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6IC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ET0xMWSApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUEFOICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoRW5kKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRoYW5kbGVUb3VjaEVuZCggZXZlbnQgKTtcblxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uQ29udGV4dE1lbnUoIGV2ZW50ICkge1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHR9XG5cblx0Ly9cblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlICk7XG5cblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApO1xuXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG5cdC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxuXG5cdHRoaXMudXBkYXRlKCk7XG5cbn07XG5cblRIUkVFLk9yYml0Q29udHJvbHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSApO1xuVEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUSFJFRS5PcmJpdENvbnRyb2xzO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggVEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUsIHtcblxuXHRjZW50ZXI6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuY2VudGVyIGhhcyBiZWVuIHJlbmFtZWQgdG8gLnRhcmdldCcgKTtcblx0XHRcdHJldHVybiB0aGlzLnRhcmdldDtcblxuXHRcdH1cblxuXHR9LFxuXG5cdC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcblxuXHRub1pvb206IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlWm9vbTtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVab29tID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdG5vUm90YXRlOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVSb3RhdGU7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZVJvdGF0ZSA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRub1Bhbjoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUGFuO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVQYW4gPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0bm9LZXlzOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZUtleXM7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlS2V5cyA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRzdGF0aWNNb3ZpbmcgOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZURhbXBpbmc7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlRGFtcGluZyA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRkeW5hbWljRGFtcGluZ0ZhY3RvciA6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuIHRoaXMuZGFtcGluZ0ZhY3RvcjtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmRhbXBpbmdGYWN0b3IgPSB2YWx1ZTtcblxuXHRcdH1cblxuXHR9XG5cbn0gKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9saWJzL09yYml0Q29udHJvbHMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG4vL2F0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QudmVydFxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSB2ZWMyIHVfcmVzb2x1dGlvbjtcXG51bmlmb3JtIGZsb2F0IHVfdGltZTtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzIgc3QgPSBnbF9GcmFnQ29vcmQueHkvdV9yZXNvbHV0aW9uLnh5O1xcbiAgICBnbF9GcmFnQ29sb3I9dmVjNChzdC54LHN0LnksMC4wLDEuMCk7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QuZnJhZ1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRGlzcGxheVxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuLy8gaW1wb3J0IFdlYkdMaW5pdCBmcm9tICcuL1dlYkdMaW5pdC5qcyc7XG5cbmltcG9ydCBDYW52YXMgZnJvbSBcIi4uL3Zpc3VhbC9DYW52YXNcIjtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5VG9wIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8g44Ki44OL44Oh44O844K344On44Oz44Or44O844OX44K544K/44O844OIXG4gICAgLy8gZ2IuaW4udXAubG9vcCgpO1xuICAgIFxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgZ2IuaW4uY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gICAgZ2IuaW4uY2FudmFzLmluaXQoKTtcblxuXG4gIH1cblxuICBzdGF0aWMgcnVuKCkge1xuXG5cdFx0Ly8gd2luZG93LmNvbnNvbGUubG9nKCdzdGF0aWNfUnVuJyk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUZXh0dXJlQmcuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBEaXNwbGF5XG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG4vLyBpbXBvcnQgV2ViR0xpbml0IGZyb20gJy4vV2ViR0xpbml0LmpzJztcblxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi4vdmlzdWFsL0NhbnZhc1wiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlUb3Age1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICAvLyBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBnYi5pbi5jYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgICBnYi5pbi5jYW52YXMuaW5pdCgpO1xuXG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblx0XHQvLyB3aW5kb3cuY29uc29sZS5sb2coJ3N0YXRpY19SdW4nKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVNb3ZpZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=