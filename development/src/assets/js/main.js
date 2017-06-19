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
	
	var _DisplayTextureBg = __webpack_require__(27);
	
	var _DisplayTextureBg2 = _interopRequireDefault(_DisplayTextureBg);
	
	var _DisplayTextureMovie = __webpack_require__(32);
	
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
	      // gb.in.sceneOver = new OverScene();
	
	      gb.in.sceneManger.addScene(gb.in.sceneBoxA);
	      gb.in.sceneManger.addScene(gb.in.sceneBoxB);
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
	
	      // this._Scene = new OverScene();
	      this.overscene.push(new _overScene2.default());
	
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
	
	      // Renderer02作成
	      this.renderer02 = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	      // this.renderer02.setPixelRatio( window.devicePixelRatio );
	      this.renderer02.setSize(window.innerWidth, window.innerHeight);
	      this.renderer02.sortObjects = false;
	      this.renderer02.shadowMap.enabled = true;
	      this.renderer02.shadowMap.type = THREE.PCFShadowMap;
	      this.renderer02.domElement.id = "sub";
	      // this.renderer02.setClearColor( 0x000000, 0 );
	      this.canvas02 = this.renderer02.domElement;
	      document.body.appendChild(this.canvas02);
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
	
	      this.overscene[0].camera.aspect = window.innerWidth / window.innerHeight;
	      this.overscene[0].camera.updateProjectionMatrix();
	
	      this.renderer02.setSize(window.innerWidth, window.innerHeight);
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
	
	        if (_this2.keyname == "ArrowRight" || _this2.keyname == "ArrowLeft") {
	          // keyname = event.key;
	
	          _this2.fadeInOutTimer = 0;
	          //scenes[0].meshMaterial.color = 0xffffff*Math.random();
	        }
	
	        if (_this2.keyname == "ArrowUp") {
	          window.console.log('Up');
	
	          _this2.overAlpha += 0.05;
	          if (_this2.overAlpha > 1) {
	            _this2.overAlpha = 1.0;
	          }
	        }
	
	        if (_this2.keyname == "ArrowDown") {
	          window.console.log('Down');
	
	          _this2.overAlpha -= 0.05;
	          if (_this2.overAlpha < 0) {
	            _this2.overAlpha = 0.0;
	          }
	        }
	
	        window.console.log('this.overAlpha', _this2.overAlpha);
	        window.console.log($("#sub"));
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
	            this.alphaReset();
	            if (this.scenes.length == this.NUM) {
	              this.NUM = 0;
	            }
	            break;
	
	          case 'ArrowLeft':
	            // console.log(this.scenes[this.NUM].END);
	            this.alphaReset();
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
	      this.overscene[0].update();
	      this.renderer.render(this.scenes[this.NUM].scene, this.scenes[this.NUM].camera);
	      this.renderer02.render(this.overscene[0].scene, this.overscene[0].camera);
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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * File: Scene02
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 17/06/15
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
			_this.knot = null;
	
			//
			_this.radius = 40;
			_this.tube = 28.2;
			_this.radialSegments = 600;
			_this.tubularSegments = 12;
			_this.p = 5;
			_this.q = 4;
			_this.heightScale = 4;
			_this.asParticles = true;
			_this.rotate = true;
	
			_this.controls = _this._controls.bind(_this);
			_this.createScene = _this._createScene.bind(_this);
			_this.update = _this._update.bind(_this);
	
			// this.controls.redraw();
			// this.controls();
	
			_this.createScene();
	
			return _this;
		}
	
		_createClass(overScene, [{
			key: '_controls',
			value: function _controls() {}
			// this.redraw = function () {
			// remove the old plane
			// if (this.knot) this.scene.remove(this.knot);
			// // create a new one
			// let geom = new THREE.TorusKnotGeometry(this.controls.radius, this.controls.tube, Math.round(this.controls.radialSegments), Math.round(this.controls.tubularSegments), Math.round(this.controls.p), Math.round(this.controls.q), this.controls.heightScale);
			//
			// if (this.controls.asParticles) {
			// 	this.knot = this.createParticleSystem(geom);
			// } else {
			// 	this.knot = this.createMesh(geom);
			// }
	
			// add it to the scene.
			// this.scene.add(this.knot);
			// }.bind(this);
	
	
			// from THREE.js examples
	
		}, {
			key: 'generateSprite',
			value: function generateSprite() {
	
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
			key: 'createParticleSystem',
			value: function createParticleSystem(geom) {
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
			key: 'createMesh',
			value: function createMesh(geom) {
	
				// assign two materials
				var meshMaterial = new THREE.MeshNormalMaterial({});
				meshMaterial.side = THREE.DoubleSide;
	
				// create a multimaterial
				var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);
	
				return mesh;
			}
	
			// render() {
			// 	stats.update();
			//
			// 	if (controls.rotate) {
			// 		knot.rotation.y = step += 0.01;
			// 	}
			//
			// 	// render using requestAnimationFrame
			// 	requestAnimationFrame(render);
			// 	webGLRenderer.render(scene, camera);
			// }
	
	
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
	
				// this.geometry = new THREE.BoxGeometry(50,50,50);
				// this.material = new THREE.MeshBasicMaterial(0x888888);
				//
				// this.Box = new THREE.Mesh(
				//     this.geometry,
				//     this.material
				// );
				// this.scene.add(this.Box);
	
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
					this.knot.rotation.y = this.step += 0.001;
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
	      this.camera.position.z = 1000;
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fileOverview:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Project:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * File: Display
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Date:
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Author: Teraguchi
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _TextureBg = __webpack_require__(28);
	
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Entry2 = __webpack_require__(21);
	
	var _Entry3 = _interopRequireDefault(_Entry2);
	
	var _Plane = __webpack_require__(29);
	
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
/* 29 */
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
					vertexShader: __webpack_require__(30),
					fragmentShader: __webpack_require__(31)
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
/* 30 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}"

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform vec2 imageResolution;\nuniform sampler2D texture;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n    vec2 ratio = vec2(\n        min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),\n        min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)\n    );\n\n    vec2 uv = vec2(\n        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\n    );\n    gl_FragColor = texture2D(texture, uv);\n}"

/***/ }),
/* 32 */
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
	
	var _Canvas = __webpack_require__(33);
	
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
	        vertexShader: __webpack_require__(34),
	        fragmentShader: __webpack_require__(35)
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
/* 34 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\n//attribute vec3 position;\n\nvoid main() {\n    gl_Position = vec4( position, 1.0 );\n}\n"

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform vec2 u_resolution;\nuniform float u_time;\n\nvoid main() {\n    vec2 st = gl_FragCoord.xy/u_resolution.xy;\n    gl_FragColor=vec4(st.x,st.y,0.0,1.0);\n}"

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTFmYmZiMjg0ZTIyMDlmOTA3NTkiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvcmUvQ29uZi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9VdGlsLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hbmltYXRpb24vcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL2NhbmNlbEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYXJyYXkvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy91YS9jaGVja0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy91YS1wYXJzZXIubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvaW1nL3ByZWxvYWRJbWcuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5Ud2l0dGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuTGluZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkZhY2VCb29rLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL0Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvU2NlbmVNYW5nZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0VudHJ5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9saWJzL09yYml0Q29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvb3ZlclNjZW5lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1NjZW5lMDEuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvU2NlbmUwMi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9VdGlscy9hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVCZy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9UZXh0dXJlQmcuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvUGxhbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvZ2xzbC9jb3Zlci52ZXJ0Iiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2dsc2wvY292ZXIuZnJhZyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVNb3ZpZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvZ2xzbC9pbmRleC90ZXN0LnZlcnQiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvZ2xzbC9pbmRleC90ZXN0LmZyYWciXSwibmFtZXMiOlsid2luZG93IiwiZ2IiLCJ1bmRlZmluZWQiLCJpbiIsImNvbW1vbiIsIm1haW4iLCJDb21tb24iLCJzZXR1cCIsInNldEV2ZW50cyIsImNvbmYiLCJ1IiwiZiIsInV0IiwiJCIsImRvY3VtZW50Iiwib24iLCJvblJlYWR5IiwiYmluZCIsIm9uTG9hZCIsIkNvbmYiLCJSRUxFQVNFIiwiRkxHIiwiTE9HIiwiUEFSQU0iLCJTVEFUUyIsImRlZlciLCJkZWZIIiwiVyIsIkgiLCJzcFciLCJzcEgiLCJicCIsIm1vZGUiLCJrZXlzIiwic3dpdGNoTW9kZSIsInNlYzAySW1nTnVtIiwieW91dHViZUlEMDEiLCJ5b3V0dWJlSUQwMiIsIndlYkZvbnRMb2FkZWQiLCJpIiwia2V5IiwibGVuIiwicGFyYW0iLCJyZWYiLCJyZWYxIiwidmFsdWUiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlcGxhY2UiLCJzcGxpdCIsImxlbmd0aCIsImoiLCJvYmoiLCJrIiwidmFsIiwiVXRpbCIsImlzU2V0U1BTaXplIiwic3RhcnRUaW1lIiwiZWxhcHNlZFRpbWUiLCJub3ciLCJEYXRlIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibWluMSIsIm1heDEiLCJtaW4yIiwibWF4MiIsImhpdCIsInJhbmdlIiwibnVtIiwicmVzTWluIiwicmVzTWF4IiwiYmFzZU1pbiIsImJhc2VNYXgiLCJwIiwibiIsInBvcyIsIlN0cmluZyIsImluZGV4T2YiLCJzdWJzdHIiLCJudW1lcmF0b3IiLCJkZW5vbWluYXRvciIsInJhZGlhbnMiLCJQSSIsImFuZ2xlIiwicDEiLCJwMiIsInNxcnQiLCJwb3ciLCJ4IiwieSIsImFyciIsInNvcnQiLCJhIiwiYiIsImdldFRpbWUiLCJmbGciLCJjc3MiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaXNSZXNTUCIsImlzUmVzUEMiLCJ1cmwiLCJocmVmIiwicGFyYW1JdGVtcyIsImxpc3QiLCJwYXJhbUl0ZW0iLCJoYXNoIiwibCIsImxlbjEiLCJjb29raWUiLCJyIiwiZyIsInN0ciIsInRvU3RyaW5nIiwiQXJyYXkiLCJqb2luIiwiY29udGFpbiIsIm51bWJlciIsIl9wb3ciLCJyb3VuZCIsInJlcyIsIm9yZyIsImRlc3QiLCJiZWZvcmUiLCJhZnRlciIsIlJlZ0V4cCIsImdldE5vdyIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwibWlsbFNlY29uZCIsImdldE1pbGxpc2Vjb25kcyIsImdldERhdGUiLCJtb250aGRheXMiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwid2Vla0RheUpQIiwid0RKIiwiZ2V0RGF5Iiwid2Vla0RheUVOIiwid0RFIiwiZGF0ZSIsIk51bWJlciIsImlnbm9yZUFycmF5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsIiR0YXJnZXQiLCIkaW1nIiwiZWFjaCIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJhdHRyIiwidHJpZ2dlciIsInNlbGYiLCJlIiwicHJldmVudERlZmF1bHQiLCJvZmYiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsInBhdGhuYW1lIiwiZXZlbnQiLCJyZXR1cm5WYWx1ZSIsImtleUNvZGUiLCJhZGRFdmVudExpc3RlbmVyIiwib253aGVlbCIsIm9ubW91c2V3aGVlbCIsIm9udG91Y2htb3ZlIiwib25rZXlkb3duIiwicHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlV0aWxzIiwiX3NldHVwIiwiY2hlY2tDbGllbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfdGhpcyIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsImlkIiwiY2xlYXJUaW1lb3V0IiwiQXJyIiwic2xpY2UiLCJ0IiwicGFyc2VyIiwicmVxdWlyZSIsInVhIiwiYnJvd3NlciIsImdldEJyb3dzZXIiLCJuYW1lIiwiZGV2aWNlIiwiZ2V0RGV2aWNlIiwidHlwZSIsImdldE9TIiwiZGV2aWNlX25hbWUiLCJ2ZW5kb3IiLCJnZXRVQSIsInMiLCJvIiwiYyIsImQiLCJ2IiwibSIsIkUiLCJTIiwiZXh0ZW5kIiwiY29uY2F0IiwiaGFzIiwidG9Mb3dlckNhc2UiLCJsb3dlcml6ZSIsIm1ham9yIiwidHJpbSIsInJneCIsImFyZ3VtZW50cyIsImhhc093blByb3BlcnR5IiwiZXhlYyIsInRlc3QiLCJUIiwib2xkc2FmYXJpIiwidmVyc2lvbiIsImFtYXpvbiIsIm1vZGVsIiwic3ByaW50IiwiSFRDIiwiU3ByaW50Iiwib3MiLCJ3aW5kb3dzIiwiTUUiLCJYUCIsIlZpc3RhIiwiUlQiLCJOIiwiY3B1IiwiZW5naW5lIiwiQyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImFwcGx5IiwiZ2V0Q1BVIiwiZ2V0RW5naW5lIiwiZ2V0UmVzdWx0Iiwic2V0VUEiLCJWRVJTSU9OIiwiQlJPV1NFUiIsIk5BTUUiLCJNQUpPUiIsIkNQVSIsIkFSQ0hJVEVDVFVSRSIsIkRFVklDRSIsIk1PREVMIiwiVkVORE9SIiwiVFlQRSIsIkNPTlNPTEUiLCJNT0JJTEUiLCJTTUFSVFRWIiwiVEFCTEVUIiwiV0VBUkFCTEUiLCJFTUJFRERFRCIsIkVOR0lORSIsIk9TIiwiZXhwb3J0cyIsIm1vZHVsZSIsIlVBUGFyc2VyIiwialF1ZXJ5IiwiWmVwdG8iLCJMIiwiZ2V0Iiwic2V0IiwiaW1nUGF0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW1nIiwiSW1hZ2UiLCJjYWxsZWUiLCJzcmMiLCIkYnRuIiwidGV4dCIsInNoYXJlVVJMIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib3BlbiIsImRlc2NyaXB0aW9uIiwiRnVuYyIsImJsYW5rIiwiZGVidWdnZXIiLCJleHBhbmRqUXVlcnkiLCJtZXRob2RzIiwiY29uc29sZSIsInByZXBlbmQiLCJGUFMiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsInRpbWVyIiwiZm4iLCJhZGp1c3QiLCJhZGp1c3RXIiwiYWRqdXN0SCIsIkNTUyIsInN1cHBvcnRzIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibG9nIiwiaXNJRSIsImlzUEMiLCJpc0FuZHJvaWRWZXJzaW9uIiwiYWxlcnQiLCJNYWluIiwicGFnZSIsImRhdGEiLCJEaXNwbGF5VG9wIiwic2NlbmVNYW5nZXIiLCJzY2VuZUJveEEiLCJzY2VuZUJveEIiLCJhZGRTY2VuZSIsImRyYXciLCJTY2VuZU1hbmdlciIsIk5VTSIsInNjZW5lcyIsImZhZGVJbk91dFRpbWVyIiwiY2FudmFzIiwicmVuZGVyZXIiLCJyZW5kZXJlcjAyIiwib3ZlcnNjZW5lIiwib3ZlckFscGhhIiwibWFpbk9QIiwiX2FkZFNjZW5lIiwib25SZXNpemUiLCJfb25SZXNpemUiLCJjaGVja051bSIsIl9jaGVja051bSIsIm9uS2V5RG93biIsIl9vbktleURvd24iLCJmYWRlSW5PdXQiLCJfZmFkZUluT3V0IiwiX2RyYXciLCJhbHBoYVJlc2V0IiwiX2FscGhhUmVzZXQiLCJrZXluYW1lIiwiaW5pdCIsInB1c2giLCJUSFJFRSIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJzb3J0T2JqZWN0cyIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJQQ0ZTaGFkb3dNYXAiLCJkb21FbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiYWxwaGEiLCJjYW52YXMwMiIsInNjZW5lIiwiY2FtZXJhIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsIm9wYWNpdHkiLCJvcCIsInNpbiIsInVwZGF0ZSIsInJlbmRlciIsIkVudHJ5IiwiT3JiaXRDb250cm9scyIsIm9iamVjdCIsInRhcmdldCIsIlZlY3RvcjMiLCJtaW5EaXN0YW5jZSIsIm1heERpc3RhbmNlIiwiSW5maW5pdHkiLCJtaW5ab29tIiwibWF4Wm9vbSIsIm1pblBvbGFyQW5nbGUiLCJtYXhQb2xhckFuZ2xlIiwibWluQXppbXV0aEFuZ2xlIiwibWF4QXppbXV0aEFuZ2xlIiwiZW5hYmxlRGFtcGluZyIsImRhbXBpbmdGYWN0b3IiLCJlbmFibGVab29tIiwiem9vbVNwZWVkIiwiZW5hYmxlUm90YXRlIiwicm90YXRlU3BlZWQiLCJlbmFibGVQYW4iLCJrZXlQYW5TcGVlZCIsImF1dG9Sb3RhdGUiLCJhdXRvUm90YXRlU3BlZWQiLCJlbmFibGVLZXlzIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJCT1RUT00iLCJtb3VzZUJ1dHRvbnMiLCJPUkJJVCIsIk1PVVNFIiwiWk9PTSIsIk1JRERMRSIsIlBBTiIsInRhcmdldDAiLCJjbG9uZSIsInBvc2l0aW9uMCIsInBvc2l0aW9uIiwiem9vbTAiLCJ6b29tIiwiZ2V0UG9sYXJBbmdsZSIsInNwaGVyaWNhbCIsInBoaSIsImdldEF6aW11dGhhbEFuZ2xlIiwidGhldGEiLCJyZXNldCIsInNjb3BlIiwiY29weSIsImRpc3BhdGNoRXZlbnQiLCJjaGFuZ2VFdmVudCIsInN0YXRlIiwiU1RBVEUiLCJOT05FIiwib2Zmc2V0IiwicXVhdCIsIlF1YXRlcm5pb24iLCJzZXRGcm9tVW5pdFZlY3RvcnMiLCJ1cCIsInF1YXRJbnZlcnNlIiwiaW52ZXJzZSIsImxhc3RQb3NpdGlvbiIsImxhc3RRdWF0ZXJuaW9uIiwic3ViIiwiYXBwbHlRdWF0ZXJuaW9uIiwic2V0RnJvbVZlY3RvcjMiLCJyb3RhdGVMZWZ0IiwiZ2V0QXV0b1JvdGF0aW9uQW5nbGUiLCJzcGhlcmljYWxEZWx0YSIsIm1ha2VTYWZlIiwicmFkaXVzIiwic2NhbGUiLCJwYW5PZmZzZXQiLCJzZXRGcm9tU3BoZXJpY2FsIiwibG9va0F0Iiwiem9vbUNoYW5nZWQiLCJkaXN0YW5jZVRvU3F1YXJlZCIsIkVQUyIsImRvdCIsInF1YXRlcm5pb24iLCJkaXNwb3NlIiwib25Db250ZXh0TWVudSIsIm9uTW91c2VEb3duIiwib25Nb3VzZVdoZWVsIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsIm9uVG91Y2hNb3ZlIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJzdGFydEV2ZW50IiwiZW5kRXZlbnQiLCJST1RBVEUiLCJET0xMWSIsIlRPVUNIX1JPVEFURSIsIlRPVUNIX0RPTExZIiwiVE9VQ0hfUEFOIiwiU3BoZXJpY2FsIiwicm90YXRlU3RhcnQiLCJWZWN0b3IyIiwicm90YXRlRW5kIiwicm90YXRlRGVsdGEiLCJwYW5TdGFydCIsInBhbkVuZCIsInBhbkRlbHRhIiwiZG9sbHlTdGFydCIsImRvbGx5RW5kIiwiZG9sbHlEZWx0YSIsImdldFpvb21TY2FsZSIsInJvdGF0ZVVwIiwicGFuTGVmdCIsImRpc3RhbmNlIiwib2JqZWN0TWF0cml4Iiwic2V0RnJvbU1hdHJpeENvbHVtbiIsIm11bHRpcGx5U2NhbGFyIiwicGFuVXAiLCJwYW4iLCJkZWx0YVgiLCJkZWx0YVkiLCJlbGVtZW50IiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ0YXJnZXREaXN0YW5jZSIsInRhbiIsImZvdiIsImNsaWVudEhlaWdodCIsIm1hdHJpeCIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInJpZ2h0IiwibGVmdCIsImNsaWVudFdpZHRoIiwidG9wIiwiYm90dG9tIiwid2FybiIsImRvbGx5SW4iLCJkb2xseVNjYWxlIiwiZG9sbHlPdXQiLCJoYW5kbGVNb3VzZURvd25Sb3RhdGUiLCJjbGllbnRYIiwiY2xpZW50WSIsImhhbmRsZU1vdXNlRG93bkRvbGx5IiwiaGFuZGxlTW91c2VEb3duUGFuIiwiaGFuZGxlTW91c2VNb3ZlUm90YXRlIiwic3ViVmVjdG9ycyIsImhhbmRsZU1vdXNlTW92ZURvbGx5IiwiaGFuZGxlTW91c2VNb3ZlUGFuIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZU1vdXNlV2hlZWwiLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlVG91Y2hTdGFydFJvdGF0ZSIsInRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiaGFuZGxlVG91Y2hTdGFydERvbGx5IiwiZHgiLCJkeSIsImhhbmRsZVRvdWNoU3RhcnRQYW4iLCJoYW5kbGVUb3VjaE1vdmVSb3RhdGUiLCJoYW5kbGVUb3VjaE1vdmVEb2xseSIsImhhbmRsZVRvdWNoTW92ZVBhbiIsImhhbmRsZVRvdWNoRW5kIiwiYnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwiY3JlYXRlIiwiRXZlbnREaXNwYXRjaGVyIiwiY29uc3RydWN0b3IiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiY2VudGVyIiwibm9ab29tIiwibm9Sb3RhdGUiLCJub1BhbiIsIm5vS2V5cyIsInN0YXRpY01vdmluZyIsImR5bmFtaWNEYW1waW5nRmFjdG9yIiwib3ZlclNjZW5lIiwic3RlcCIsImtub3QiLCJ0dWJlIiwicmFkaWFsU2VnbWVudHMiLCJ0dWJ1bGFyU2VnbWVudHMiLCJxIiwiaGVpZ2h0U2NhbGUiLCJhc1BhcnRpY2xlcyIsInJvdGF0ZSIsImNvbnRyb2xzIiwiX2NvbnRyb2xzIiwiY3JlYXRlU2NlbmUiLCJfY3JlYXRlU2NlbmUiLCJfdXBkYXRlIiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ3JhZGllbnQiLCJjcmVhdGVSYWRpYWxHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidGV4dHVyZSIsIlRleHR1cmUiLCJuZWVkc1VwZGF0ZSIsImdlb20iLCJtYXRlcmlhbCIsIlBhcnRpY2xlQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwic2l6ZSIsInRyYW5zcGFyZW50IiwiYmxlbmRpbmciLCJBZGRpdGl2ZUJsZW5kaW5nIiwibWFwIiwiZ2VuZXJhdGVTcHJpdGUiLCJzeXN0ZW0iLCJQYXJ0aWNsZVN5c3RlbSIsInNvcnRQYXJ0aWNsZXMiLCJtZXNoTWF0ZXJpYWwiLCJNZXNoTm9ybWFsTWF0ZXJpYWwiLCJzaWRlIiwiRG91YmxlU2lkZSIsIm1lc2giLCJTY2VuZVV0aWxzIiwiY3JlYXRlTXVsdGlNYXRlcmlhbE9iamVjdCIsIlNjZW5lIiwieiIsInJlbW92ZSIsIlRvcnVzS25vdEdlb21ldHJ5IiwiY3JlYXRlUGFydGljbGVTeXN0ZW0iLCJjcmVhdGVNZXNoIiwicm90YXRpb24iLCJTY2VuZTAxIiwiY3ViZSIsImdyb3VwIiwiX3JlbmRlciIsIkdyb3VwIiwiTWVzaCIsIkJveEdlb21ldHJ5IiwiTWVzaExhbWJlcnRNYXRlcmlhbCIsInBvaW50TGlnaHQiLCJQb2ludExpZ2h0IiwidHJhdmVyc2UiLCJTY2VuZTAyIiwiQm94IiwiZWxWb2x1bWUiLCJlbFZvbHVtZVZhbCIsImF1ZGlvSW5pdCIsImN0eCIsImFuYWx5c2VyIiwiZnJlcXVlbmNpZXMiLCJnZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UiLCJleGVjdXRlIiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwiY3JlYXRlQW5hbHlzZXIiLCJVaW50OEFycmF5IiwiZnJlcXVlbmN5QmluQ291bnQiLCJnZXRCeXRlRnJlcXVlbmN5RGF0YSIsInJlZHVjZSIsInByZXZpb3VzIiwiY3VycmVudCIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidGhlbiIsInN0cmVhbSIsImhhY2tGb3JNb3p6aWxhIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJjb25uZWN0IiwiY2F0Y2giLCJlcnIiLCJtZXNzYWdlIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJnZW9tZXRyeSIsIk1lc2hCYXNpY01hdGVyaWFsIiwiX2V4ZWN1dGUiLCJnZXRWYWwiLCJfZ2V0VmFsIiwidGV4dHVyZUJnIiwiVGV4dHVyZUJnIiwiY3JlYXRlQ2FtZXJhIiwiX2NyZWF0ZUNhbWVyYSIsImNyZWF0ZVJlbmRlcmVyIiwiX2NyZWF0ZVJlbmRlcmVyIiwiVXBkYXRlIiwiX1VwZGF0ZSIsImxvYWRUZXh0dXJlIiwiX2xvYWRUZXh0dXJlIiwicGxhbmUiLCJzdGVuY2lsIiwiZGVwdGgiLCJwcmVtdWx0aXBsaWVkQWxwaGEiLCJzZXRDbGVhckNvbG9yIiwidW5pZm9ybXMiLCJyZXNvbHV0aW9uIiwiUGxhbmUiLCJfY3JlYXRlTWVzaCIsInJlc2l6ZSIsIl9yZXNpemUiLCJpbWFnZSIsImxvYWRlciIsIlRleHR1cmVMb2FkZXIiLCJsb2FkIiwibWFnRmlsdGVyIiwiTmVhcmVzdEZpbHRlciIsIm1pbkZpbHRlciIsImltYWdlUmVzb2x1dGlvbiIsIlBsYW5lQnVmZmVyR2VvbWV0cnkiLCJSYXdTaGFkZXJNYXRlcmlhbCIsInZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwidGltZSIsInN0b3AiLCJpbnRlcnZhbCIsInByZXZfbnVtIiwibmV4dF9udW0iLCJ0ZXhQcmV2IiwidGV4dHVyZXMiLCJ0ZXhOZXh0IiwiQ2FudmFzIiwidV90aW1lIiwidV9yZXNvbHV0aW9uIiwidV9tb3VzZSIsImNyZWF0ZU9iamVjdCIsIl9jcmVhdGVPYmplY3QiLCJvcmJpdENvbnRyb2xzIiwiX29yYml0Q29udHJvbHMiLCJwbGFuZU9iamVjdCIsIl9wbGFuZU9iamVjdCIsImN1YmVHZW9tZXRyeSIsImN1YmVNYXRlcmlhbCIsIndpcmVm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QUFxQnBYLE9BQU9xRyxVQUFQLEdBQW9CckcsT0FBT3NHLFdBQWhEO0FBQ0EsWUFBSzZRLE1BQUwsQ0FBWUUsc0JBQVo7QUFDQSxZQUFLdEMsUUFBTCxDQUFjeUIsT0FBZCxDQUFzQnhXLE9BQU9xRyxVQUE3QixFQUF5Q3JHLE9BQU9zRyxXQUFoRDtBQUNEOztBQUVGOzs7Ozs7c0NBR2dCO0FBQ2YsWUFBSzJjLFFBQUwsR0FBZ0IsSUFBSTlNLE1BQU15QixhQUFWLENBQXdCLEtBQUtULE1BQTdCLENBQWhCO0FBQ0EsWUFBSzhMLFFBQUwsQ0FBY2hLLFVBQWQsR0FBMkIsSUFBM0I7QUFDQSxXQUFJa1QsUUFBUSxJQUFJaFcsTUFBTWlXLEtBQVYsRUFBWjs7QUFFQSxXQUFJRSxRQUFRSCxNQUFNRSxRQUFOLEVBQVo7QUFDQSxZQUFLcEosUUFBTCxDQUFjeEwsTUFBZCxDQUFxQjZVLEtBQXJCO0FBQ0M7OztpQ0FFVTs7QUFFVHpyQixTQUFFYixNQUFGLEVBQVVlLEVBQVYsQ0FBYSxNQUFiLEVBQXFCLEtBQUtHLE1BQUwsQ0FBWUQsSUFBWixDQUFpQixJQUFqQixDQUFyQjtBQUVEOzs7Ozs7bUJBck1rQm9xQixNOzs7Ozs7QUNkckIsZ0VBQStELGlCQUFpQiwwQ0FBMEMsR0FBRyxHOzs7Ozs7QUNBN0gsZ0VBQStELHVCQUF1QixpQkFBaUIsZ0RBQWdELDJDQUEyQyxHQUFHLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGExZmJmYjI4NGUyMjA5ZjkwNzU5IiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogVG9wXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBDb21tb24gZnJvbSAnLi9wYWdlL0NvbW1vbic7XG5pbXBvcnQgTWFpbiBmcm9tICcuL3BhZ2UvTWFpbic7XG5cbigoKT0+e1xuXG4gIC8vIGdsb2JhbOOCquODluOCuOOCp+OCr+ODiFxuICBpZiAod2luZG93LmdiPT09dW5kZWZpbmVkKSB3aW5kb3cuZ2IgPSB7fTtcbiAgd2luZG93LmdiLmluID0ge307IC8vaW5zdGFuY2VcblxuICBnYi5pbi5jb21tb24gPSBuZXcgQ29tbW9uKCk7XG4gIGdiLmluLm1haW4gPSBuZXcgTWFpbigpO1xuXG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvVG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29tbW9uXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBDb25mIGZyb20gJy4uL0NvcmUvQ29uZic7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9teWxpYnMvVXRpbCc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vdXRpbHMvVXRpbHMnO1xuaW1wb3J0IEZ1bmMgZnJvbSAnLi4vbXlsaWJzL0Z1bmMnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cblx0c2V0dXAoKSB7XG5cblx0XHQvKipcbiAgICAgKiBAdHlwZSB7Q29uZn0gOiDliJ3mnJ/lgKTjga7oqK3lrprjg7vjg4fjg7zjgr/jga7phY3nva5cblx0XHQgKiBAdHlwZSB7VXRpbH0gOiBVdGls6Zai5pWw44Gu5Yid5pyf5YyWXG5cdFx0ICogQHR5cGUge0Z1bmN9IDog44Kk44OZ44Oz44OI44Oe44ON44O844K444Oj44O844Gu6Kit572uXG5cdFx0ICovXG4gICAgZ2IuaW4uY29uZiA9IG5ldyBDb25mKCk7XG4gICAgZ2IuaW4udSA9IG5ldyBVdGlsKCk7XG4gICAgZ2IuaW4uZiA9IG5ldyBGdW5jKCk7XG5cbiAgICBnYi5pbi51dCA9IG5ldyBVdGlscygpO1xuXG4gIH1cblxuICBvblJlYWR5KCkge1xuXG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbigncmVhZHknLCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENvbmZcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuLy8gaW1wb3J0IFNvdW5kRGF0YSBmcm9tICcuL0RhdGEvU291bmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25mIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDmnKznlarjg5Xjg6njgrBcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgXG4gICAgdGhpcy5SRUxFQVNFID0gdHJ1ZTtcbiAgICAvLyB0aGlzLlJFTEVBU0UgPSBmYWxzZTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5Xjg6njgrDplqLpgKNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLkZMRyA9IHtcbiAgICAgIExPRzp0cnVlLCAgLy8g44Ot44Kw5Ye65YqbXG4gICAgICBQQVJBTTp0cnVlLCAvLyDjg5Hjg6njg6Hjg7zjgr/jg4Hjgqfjg4Pjgq9cbiAgICAgIFNUQVRTOnRydWUgIC8vIFN0YXRz6KGo56S6XG4gICAgfTtcbiAgICBpZiAoIXRoaXMuUkVMRUFTRSkge1xuICAgICAgdGhpcy5GTEcgPSB7XG4gICAgICAgIExPRzpmYWxzZSxcbiAgICAgICAgUEFSQU06ZmFsc2UsXG4gICAgICAgIFNUQVRTOmZhbHNlIFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg5Z+65pysIHdpZHRoIGhlaWdodFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuZGVmVyA9IDEzMDA7XG4gICAgdGhpcy5kZWZIID0gODUwO1xuXG4gICAgdGhpcy5XID0gMTIwMDtcbiAgICB0aGlzLkggPSA3NTA7XG5cbiAgICB0aGlzLnNwVyA9IDM3NTtcbiAgICB0aGlzLnNwSCA9IDY2NztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5bjg6zjgqTjgq/jg53jgqTjg7Pjg4hcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmJwID0gNzY4O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIG1vZGVcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIHRoaXMua2V5cyA9IFtcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ21vdmllJyxcbiAgICAgICAgICAndmFsdWUnOiBbJ21vcm5pbmcnLCdhZnRlcm5vb24nLCduaWdodCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ2RhdGEnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnZGF0YTAxJywnZGF0YTAyJywnZGF0YTAzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgICdrZXknOiAncHJvZHVjdCcsXG4gICAgICAgICAgJ3ZhbHVlJzogWycwMSddLFxuICAgICAgfSxcbiAgICBdXG4gICAgdGhpcy5zd2l0Y2hNb2RlKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgc291bmQgZGF0YVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHRoaXMuc291bmREYXRhID0gbmV3IFNvdW5kRGF0YSgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHNlYzAyIGJnIEltZyBOdW1cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnNlYzAySW1nTnVtID0gMzk2O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHlvdXR1YmUgSURcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnlvdXR1YmVJRDAxID0gJ3hXMm9OcE5yS2QwJztcbiAgICB0aGlzLnlvdXR1YmVJRDAyID0gJ3QyV2VSUmRBRmVJJztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICB3ZWIgZm9udCBsb2FkZWRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLndlYkZvbnRMb2FkZWQgPSBmYWxzZTtcblxuICB9XG5cblxuICBzd2l0Y2hNb2RlKCl7XG5cbiAgICB2YXIgaSwga2V5LCBsZW4sIHBhcmFtLCByZWYsIHJlZjEsIHZhbHVlO1xuXG4gICAgcmVmID0gbG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykuc3BsaXQoJyYnKTtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgcGFyYW0gPSByZWZbaV07XG4gICAgICByZWYxID0gcGFyYW0uc3BsaXQoJz0nKSwga2V5ID0gcmVmMVswXSwgdmFsdWUgPSByZWYxWzFdO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMua2V5cy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgIHZhciBvYmogPSB0aGlzLmtleXNbal07XG5cbiAgICAgICAgLy8g44OR44Op44Oh44O844K/44GM44Kt44O844Go5LiA57eS44Gg44Gj44Gf44KJXG4gICAgICAgIGlmIChvYmoua2V5ID09PSBrZXkpIHtcblxuICAgICAgICAgIC8vIOWQhOWApOOBqOavlOi8g1xuICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgb2JqLnZhbHVlLmxlbmd0aDsgaysrKSB7XG5cbiAgICAgICAgICAgIHZhciB2YWwgPSBvYmoudmFsdWVba107XG5cbiAgICAgICAgICAgIC8vIOOCreODvOOCknRoaXMua2V5c+OBrmtleeOBq+OAgXZhbHVl44KS5q+U6LyD44GX44Gm5ZCM5YCk44Gg44Gj44Gf44KC44Gu44GrXG4gICAgICAgICAgICBpZiAodmFsID09PSB2YWx1ZSkgdGhpc1tvYmoua2V5XSA9IHZhbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH07XG5cblxuICAgICAgICB9O1xuXG4gICAgICAgIFxuICAgICAgfTtcblxuICAgIH1cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvcmUvQ29uZi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiDkvr/liKnplqLmlbDjgq/jg6njgrlcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBVdGlsXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWwge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5pc1NldFNQU2l6ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5zdGFydFRpbWUgPSBudWxsO1xuICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBudWxsO1xuICAgIHRoaXMubm93ID0gbmV3IERhdGUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIE1hdGhcbiAgICovXG5cblxuICAvKipcbiAgICog44Op44Oz44OA44Og44Gq5YCk44KS6L+U44GZXG4gICAqIEBwYXJhbSBtaW4gOiDmnIDlsI/lgKQoaW50KVxuICAgKiBAcGFyYW0gbWF4IDog5pyA5aSn5YCkKGludClcbiAgICogQHJldHVybnMge251bWJlcn0gOiBtaW7jgYvjgoltYXjjgb7jgafjga7jg6njg7Pjg4Djg6DjgarmlbTmlbAoaW50KVxuICAgKi9cbiAgcmFuZG9tKG1pbiwgbWF4KSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqICgobWF4ICsgMSkgLSBtaW4pICsgbWluKSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6njg7Pjg4Djg6DjgarmlbTmlbDjgpIy44Gk44Gu56+E5Zuy44GL44KJ5Y+W5b6XXG4gICAqIEBwYXJhbSBtaW4xIDog5pyA5bCP5YCkMShpbnQpXG4gICAqIEBwYXJhbSBtYXgxIDog5pyA5aSn5YCkMShpbnQpXG4gICAqIEBwYXJhbSBtaW4yIDog5pyA5bCP5YCkMihpbnQpXG4gICAqIEBwYXJhbSBtYXgyIDog5pyA5aSn5YCkMihpbnQpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IDogbWlu44GL44KJbWF444G+44Gn44Gu44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgICovXG4gIHJhbmRvbTIobWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuICAgIFxuICAgIGlmICh0aGlzLmhpdCgyKSkge1xuICAgICAgcmV0dXJuIHRoaXMucmFuZG9tKG1pbjEsIG1heDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5kb20obWluMiwgbWF4Mik7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogMS9AcmFuZ2Xjga7norrnjofjgad0cnVl44KS5Y+W5b6XXG4gICAqIEBwYXJhbSByYW5nZSA6IOavjeaVsChpbnQpXG4gICAqIEByZXR1cm5zIHtib29sZWFufSA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgICovXG4gIGhpdChyYW5nZSkge1xuXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKDAsIHJhbmdlIC0gMSkgPT09IDA7XG5cbiAgfVxuICBcbiAgLy8gMOOBi+OCieevhOWbsuWGheOBp+ODqeODs+ODgOODoOOBquaVtOaVsOOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAdmFsIDog56+E5ZuyKGludClcbiAgLy8gcmV0dXJuIDog44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZ2UodmFsKSB7XG5cbiAgICByZXR1cm4gdGhpcy5yYW5kb20oLXZhbCwgdmFsKTtcblxuICB9XG4gIFxuICAvLyDlgKTjgpLjg57jg4Pjg5Tjg7PjgrBcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG51bSA6IOODnuODg+ODlOODs+OCsOOBmeOCi+WApChOdW1iZXIpXG4gIC8vIEByZXNNaW4gOiDntZDmnpzjgajjgarjgovlgKTjga7mnIDlsI/lgKQoTnVtYmVyKVxuICAvLyBAcmVzTWF4IDog57WQ5p6c44Go44Gq44KL5YCk44Gu5pyA5aSn5YCkKE51bWJlcilcbiAgLy8gQGJhc2VNaW4gOiDlhYPjgajjgarjgovlgKTjga7mnIDlsI/lgKQoTnVtYmVyKVxuICAvLyBAYmFzZU1heCA6IOWFg+OBqOOBquOCi+WApOOBruacgOWkp+WApChOdW1iZXIpXG4gIC8vIHJldHVybiA6IOODnuODg+ODlOODs+OCsOOBleOCjOOBn+WApChOdW1iZXIpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG1hcChudW0sIHJlc01pbiwgcmVzTWF4LCBiYXNlTWluLCBiYXNlTWF4KSB7XG5cbiAgICB2YXIgcDtcbiAgICBpZiAobnVtIDwgYmFzZU1pbikge1xuICAgICAgcmV0dXJuIHJlc01pbjtcbiAgICB9XG4gICAgaWYgKG51bSA+IGJhc2VNYXgpIHtcbiAgICAgIHJldHVybiByZXNNYXg7XG4gICAgfVxuICAgIHAgPSAocmVzTWF4IC0gcmVzTWluKSAvIChiYXNlTWF4IC0gYmFzZU1pbik7XG5cbiAgICByZXR1cm4gKChudW0gLSBiYXNlTWluKSAqIHApICsgcmVzTWluO1xuXG4gIH0gICAgXG4gIFxuICAvLyDmlbDlgKTjgavlsI/mlbDngrnnrKxAbuS9jeOBvuOBp+OCkuOBpOOBkeOBn+aWh+Wtl+WIl+OCkui/lOOBmVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAbnVtIDog5YCkKE51bWJlcilcbiAgLy8gQG4gOiDlsI/mlbDngrnjga7kvY0oaW50KVxuICAvLyByZXR1cm4gOiDlpInmj5vjgZXjgozjgZ/lgKQoU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkZWNpbWFsKG51bSwgbikge1xuICAgIHZhciBpLCBwb3M7XG4gICAgbnVtID0gU3RyaW5nKG51bSk7XG4gICAgcG9zID0gbnVtLmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVtLnNwbGl0KFwiLlwiKVswXTtcbiAgICB9XG4gICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgIG51bSArPSBcIi5cIjtcbiAgICAgIGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICAgIG51bSArPSBcIjBcIjtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG4gICAgbnVtID0gbnVtLnN1YnN0cigwLCBwb3MpICsgbnVtLnN1YnN0cihwb3MsIG4gKyAxKTtcbiAgICByZXR1cm4gbnVtO1xuICB9XG5cbiAgY2xhbXAobnVtZXJhdG9yLGRlbm9taW5hdG9yLHZhbCkge1xuXG4gICAgcmV0dXJuIHZhbCAqIChudW1lcmF0b3IgLyBkZW5vbWluYXRvcik7XG5cbiAgfVxuXG5cdC8qKlxuICAgKiDjg6njgrjjgqLjg7PjgpLop5LluqbjgavlpInmj5tcblx0ICogQHBhcmFtIHJhZGlhbnNcblx0ICogQHJldHVybnMge251bWJlcn1cblx0ICovXG4gIGRlZ3JlZShyYWRpYW5zKSB7XG5cbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG5cbiAgfVxuXG4gIC8vIHRvIHJhZGlhbnNcbiAgcmFkaWFuKGFuZ2xlKSB7IFxuXG4gICAgcmV0dXJuIGFuZ2xlICogTWF0aC5QSSAvIDE4MDsgLy8x5bqm5L2V44Op44K444Ki44Oz44GLXG5cbiAgfVxuXG4gIGRpc3QocDEsIHAyKSB7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAyLnggLSBwMS54LCAyKSArIE1hdGgucG93KHAyLnkgLSBwMS55LCAyKSk7XG5cbiAgfVxuXG4gIGFzY2VuZChhcnIpIHtcblxuICAgIGFyci5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICBpZiggYSA+IGIgKSByZXR1cm4gLTE7XG4gICAgICBpZiggYSA8IGIgKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICAgIC8vIHZhciBhID0gWzUsMyw5LDEsMTBdXG4gICAgLy8g57WQ5p6cOjEwLDksNSwzLDFcblxuICB9XG5cbiAgZGVzY2VuZChhcnIpIHtcblxuICAgIGFyci5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICBpZiggYSA8IGIgKSByZXR1cm4gLTE7XG4gICAgICBpZiggYSA+IGIgKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgLy8gdmFyIGEgPSBbNSwzLDksMSwxMF1cbiAgICAvLyDntZDmnpw6MSwzLDUsOSwxMFxuXG4gIH1cblxuICAvLyBtYXAodmFsdWUsIG1pbjAxLCBtYXgwMSwgbWluMDIsIG1heDAyKSB7XG5cbiAgLy8gICB2YXIgZGlzMDEgPSBtYXgwMSAtIG1pbjAxO1xuICAvLyAgIHZhciBkaXMwMiA9IG1heDAyIC0gbWluMDJcblxuICAvLyAgIHZhciByYXRlID0gZGlzMDIgLyBkaXMwMTtcblxuICAvLyAgIHZhbHVlID0gdmFsdWUgKiByYXRlO1xuXG4gIC8vICAgcmV0dXJuIHZhbHVlO1xuICAvLyB9XG5cbiAgY29uc3RyYWluKHZhbHVlLCBtaW4sIG1heCkge1xuXG4gICAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgodmFsdWUsIG1pbikpO1xuXG4gICAgLy8gaWYgKHZhbHVlIDw9IGxvdykgdmFsdWUgPSBsb3c7XG4gICAgLy8gaWYgKHZhbHVlID49IGhpZ2gpIHZhbHVlID0gaGlnaDsgICAgIFxuICAgIC8vIHJldHVybiB2YWx1ZTtcblxuICB9XG5cbiAgLy8g44Om44OL44O844KvSUTjgpLlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdW5pcXVlKCkge1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIH1cbiAgXG4gIC8vICoqanF1YXJ55L2/55SoXG4gIC8vIOODnOOCv+ODs+ODouODvOODieWkieabtFxuICAvLyB0cnVl44Gq44KJ44Kr44O844K944Or44GM44Od44Kk44Oz44K/44O844Gu5b2i44GrXG4gIC8vIGZhbHNl44Gq44KJ44OH44OV44Kp44Or44OI44Gu44Kr44O844K944Or44GrXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBmbGcgOiDpgannlKjjgZnjgovjgYvjganjgYbjgYsoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYnV0dG9uTW9kZShmbGcpIHtcblxuICAgIGlmIChmbGcpIHtcbiAgICAgIHJldHVybiAkKFwiYm9keVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJChcImJvZHlcIikuY3NzKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgcG9ydHJhaXQgLyBsYW5kc2NhcGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzRGlyZWN0aW9uICgpIHtcblxuICAgIHZhciBXID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIEggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAoSCA+IFcpIHtcbiAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwicG9ydHJhaXRcIik7XG4gICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImxhbmRzY2FwZVwiKTtcbiAgICB9ZWxzZXtcbiAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwibGFuZHNjYXBlXCIpO1xuICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJwb3J0cmFpdFwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgcmVzcG9uc2l2ZSDmqKrluYXjgpLopovjgotcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzUmVzcG9uc2l2ZSAoYnApIHtcblxuICAgIGlmIChicD09dW5kZWZpbmVkKSBicD0zNzU7XG5cbiAgICB2YXIgVyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBIID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYgKFcgPiBicCkge1xuICAgICAgdGhpcy5pc1Jlc1NQID0gZmFsc2U7XG4gICAgICB0aGlzLmlzUmVzUEMgPSB0cnVlO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpc1Jlc3BvbnNpdmVTUCcpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc1Jlc3BvbnNpdmVQQycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzUmVzU1AgPSB0cnVlO1xuICAgICAgdGhpcy5pc1Jlc1BDID0gZmFsc2U7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzUmVzcG9uc2l2ZVNQJyk7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzUmVzcG9uc2l2ZVBDJyk7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFVSTFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge2FycmF5fVxuICAgKi9cbiAgZ2V0UGFyYW0oKSB7XG5cbiAgICB2YXIgdXJsID0gbG9jYXRpb24uaHJlZjtcbiAgICB2YXIgcGFyYW0gPSB1cmwuc3BsaXQoJz8nKVsxXTtcbiAgICBpZiAocGFyYW09PXVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB2YXIgcGFyYW1JdGVtcyA9IHBhcmFtLnNwbGl0KCcmJyk7XG4gICAgdmFyIGxpc3QgPSB7fTtcbiAgXG4gICAgZm9yKCB2YXIgaSA9IDA7IGk8cGFyYW1JdGVtcy5sZW5ndGg7IGkrKyApe1xuXG4gICAgICAgIHBhcmFtSXRlbSA9IHBhcmFtSXRlbXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgbGlzdFtwYXJhbUl0ZW1bMF1dID0gcGFyYW1JdGVtWzFdO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg4/jg4Pjgrfjg6Xlj5blvpcgOiBsb2NhdGlvbi5oYXNo44GuI+OCkuWJiumZpOOBl+OBn+OChOOBpFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgaGFzaCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuXG4gIH1cblxuICAvKipcbiAgICogY29va2ll5Y+W5b6XXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBnZXRDb29raWUoa2V5KSB7XG5cbiAgICB2YXIgYSwgYXJyLCBpLCBsLCBsZW4xLCB2YWw7XG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZSA9PT0gdm9pZCAwIHx8IGRvY3VtZW50LmNvb2tpZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGFyciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xuICAgIGZvciAoaSA9IGwgPSAwLCBsZW4xID0gYXJyLmxlbmd0aDsgbCA8IGxlbjE7IGkgPSArK2wpIHtcbiAgICAgIHZhbCA9IGFycltpXTtcbiAgICAgIGEgPSB2YWwuc3BsaXQoXCI9XCIpO1xuICAgICAgaWYgKGFbMF0gPT09IGtleSkge1xuICAgICAgICByZXR1cm4gYVsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG5cbiAgfSAgICAgIFxuXG4gIC8qKlxuICAgKiBjb29raWXoqK3lrppcbiAgICogQHBhcmFtIGtleSA6IOODkeODqeODoeODvOOCv+WQjVxuICAgKiBAcGFyYW0gdmFsIDog5YCkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBzZXRDb29raWUoa2V5LCB2YWwpIHtcblxuICAgIHJldHVybiBkb2N1bWVudC5jb29raWUgPSBrZXkgKyBcIj1cIiArIHZhbDtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBDb2xvclxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyByZ2LjgYvjgolIRVjjgqvjg6njg7zlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHIgOiAwfjI1NVxuICAvLyBAZyA6IDB+MjU1XG4gIC8vIEBiIDogMH4yNTVcbiAgLy8gcmV0dXJuIDogZXggXCIjRkZGRkZGXCJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0SGV4Q29sb3IocixnLGIpIHtcbiAgICAgIHZhciBzdHI7XG4gICAgICBzdHIgPSAociA8PCAxNiB8IGcgPDwgOCB8IGIpLnRvU3RyaW5nKDE2KTtcbiAgICAgIHJldHVybiBcIiNcIiArIG5ldyBBcnJheSg3IC0gc3RyLmxlbmd0aCkuam9pbihcIjBcIikgKyBzdHI7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFN0cmluZ1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc0NvbnRhaW4oc3RyLGNvbnRhaW4pIHtcblxuICAgIC8vIHN0cuOBruS4reOBqyxjb250YWlu44GM5a2Y5Zyo44GX44Gf44KJXG4gICAgaWYgKCBzdHIuaW5kZXhPZihjb250YWluKSAhPSAtMSApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9XG5cbiAgLy8gMOWfi+OCgeOBpzLmoYHjgavjgZnjgovplqLmlbBcbiAgYWRkMChzdHIsbnVtPS0yKXtcbiAgICBcbiAgICByZXR1cm4gKCBcIjAwMDAwMDAwMDAwMFwiICsgc3RyICkuc3Vic3RyKCBudW0gKTtcblxuICB9XG5cbiAgZmxvYXRGb3JtYXQoIG51bWJlciwgbiApIHtcblxuICAgIHZhciBfcG93ID0gTWF0aC5wb3coIDEwICwgbiApIDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCggbnVtYmVyICogX3BvdyApIC8gX3BvdyA7XG5cbiAgfVxuICAgIFxuICAvLyDlgKTmrrXooajoqJhcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJpY2UobnVtKSB7XG5cbiAgICByZXR1cm4gU3RyaW5nKG51bSkucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoPyFcXGQpKS9nLCAnJDEsJyk7XG5cbiAgfVxuXG4gIC8vIOaWh+Wtl+WIl+OCkuWPjei7olxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAc3RyIDog5paH5a2X5YiXKFN0cmluZylcbiAgLy8gcmV0dXJuIDog5paH5a2X5YiXKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RyUmV2ZXJzZShzdHIpIHtcblxuICAgIHZhciBpLCBsZW4sIHJlcztcbiAgICByZXMgPSBcIlwiO1xuICAgIGxlbiA9IHN0ci5sZW5ndGg7XG4gICAgaSA9IDE7XG4gICAgd2hpbGUgKGkgPD0gbGVuKSB7XG4gICAgICByZXMgKz0gc3RyLnN1YnN0cigtaSwgMSk7XG4gICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG5cbiAgfVxuICBcbiAgLy8g5paH5a2X5YiX44Gu5YWo572u5o+bXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEB2YWwgIDog5paH5a2X5YiXXG4gIC8vIEBvZWcgIDog572u5o+b5YmN44Gu5paH5a2X5YiXXG4gIC8vIEBkZXN0IDog572u5o+b5b6M44Gu5paH5a2X5YiXXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcGxhY2VBbGwodmFsLCBvcmcsIGRlc3QpIHtcblxuICAgIHJldHVybiB2YWwuc3BsaXQob3JnKS5qb2luKGRlc3QpO1xuXG4gIH0gICAgXG4gIFxuICBzdHJSZXBsYWNlKHN0ciwgYmVmb3JlLCBhZnRlcikge1xuXG4gICAgdmFyIHIgPSBuZXcgUmVnRXhwKCBiZWZvcmUsICdnJyk7XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoIHIgLCBhZnRlciApO1xuXG4gIH0gICAgXG4gIFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIERhdGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZ2V0Tm93KCkge1xuXG4gICAgdGhpcy5ub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIH1cblxuICBzdGFydCgpIHtcblxuICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy5ub3cuZ2V0VGltZSgpO1xuXG4gIH1cblxuICBlbGFwc2VkKCkge1xuXG4gICAgdGhpcy5lbGFwc2VkVGltZSA9IHRoaXMubm93LmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lO1xuXG4gIH1cblxuICBtKCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoIHRoaXMuZWxhcHNlZFRpbWUgKyAxMDAgLyA2MCApO1xuXG4gIH1cblxuICBzKCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5lbGFwc2VkVGltZSAvIDEwMDApO1xuXG4gIH1cblxuICBtcygpIHtcblxuICAgIHJldHVybiB0aGlzLmVsYXBzZWRUaW1lO1xuICAgIFxuICB9XG5cbiAgdGltZSgpIHtcblxuICAgIHRoaXMuZ2V0Tm93KCk7XG5cbiAgICB0aGlzLmhvdXIgPSB0aGlzLm5vdy5nZXRIb3VycygpOyAgICAgICAgICAvLyDmmYJcbiAgICB0aGlzLm1pbnV0ZSA9IHRoaXMubm93LmdldE1pbnV0ZXMoKTsgICAgICAvLyDliIZcbiAgICB0aGlzLnNlY29uZCA9IHRoaXMubm93LmdldFNlY29uZHMoKTtcbiAgICB0aGlzLm1pbGxTZWNvbmQgPSB0aGlzLm5vdy5nZXRNaWxsaXNlY29uZHMoKTtcblxuICB9XG5cbiAgZGF0ZSgpIHtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXREYXRlKCk7XG5cbiAgfVxuXG4gIG1vbnRocygpIHtcblxuICAgIHZhciBtb250aGRheXMgPSBuZXcgQXJyYXkoMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMSk7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0TW9udGgoKSArIDE7XG5cbiAgfVxuXG4gIHllYXIoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0RnVsbFllYXIoKTtcblxuICB9XG5cbiAgZGF5KCkge1xuXG4gICAgLy8g5puc5pelICjml6XmnKzoqp4pXG4gICAgdmFyIHdlZWtEYXlKUCA9IFtcIuaXpVwiLFwi5pyIXCIsXCLngatcIixcIuawtFwiLFwi5pyoXCIsXCLph5FcIixcIuWcn1wiXSA7XG4gICAgdmFyIHdESiA9IHdlZWtEYXlKUFt0aGlzLm5vdy5nZXREYXkoKV0gO1xuXG4gICAgLy8g5puc5pelICjoi7Hoqp4pXG4gICAgdmFyIHdlZWtEYXlFTiA9IFtcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSA7XG4gICAgdmFyIHdERSA9IHdlZWtEYXlFTlt0aGlzLm5vdy5nZXREYXkoKV0gO1xuXG4gIH1cbiAgXG4gIC8vIOaVsOaXpeW+jOOBrkRhdGXjgqrjg5bjgrjjgqfjgq/jg4jlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYWZ0ZXJEYXkoZGF0ZSwgbnVtKSB7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyBOdW1iZXIobnVtKSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIERhdGEgdHlwZSBjaGVja1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc09iamVjdCh2YWx1ZSwgaWdub3JlQXJyYXkpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsO1xuICB9XG5cbiAgaXNOdW1iZXIodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xuICB9XG5cbiAgaXNTdHJpbmcodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGlzQXJyYXkodmFsdWUpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9XG5cbiAgaXNOdWxsKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG4gIH1cblxuICBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIG90aGVyXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRJbWdTUFNpemUgKCR0YXJnZXQpe1xuXG4gICAgLy8gcmVzcG9uc2l2ZSBzcOOBruOBqOOBjeWHpueQhlxuICAgIGlmICghdGhpcy5pc1Jlc1NQKSByZXR1cm47XG4gICAgLy8g5LiA5bqm44Gg44GR5Yem55CGXG4gICAgLy8gaWYgKHRoaXMuaXNTZXRTUFNpemUpIHJldHVybjtcbiAgICAvLyB0aGlzLmlzU2V0U1BTaXplID0gdHJ1ZTtcblxuICAgIHZhciAkaW1nID0gJHRhcmdldCxcbiAgICAgICAgbGVuID0gJGltZy5sZW5ndGg7XG5cbiAgICAkaW1nLmVhY2goZnVuY3Rpb24oaSkge1xuXG4gICAgICAgIHZhciB3ID0gTWF0aC5mbG9vcigkKHRoaXMpLndpZHRoKCkgLyAyKSxcbiAgICAgICAgICAgIGggPSBNYXRoLmZsb29yKCQodGhpcykuaGVpZ2h0KCkgLyAyKTtcblxuICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgJ3dpZHRoJzogdyxcbiAgICAgICAgICAgICdoZWlnaHQnOiBoLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobGVuID09IGkgKyAxKSAkKHdpbmRvdykudHJpZ2dlcignc2V0U3BaaWVFbmQnKTtcblxuICAgIH0pO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gIOOCueODnuODm+aTjeS9nOeEoeWKuVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0UHJldmVudCgpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICQod2luZG93KS5vbigndG91Y2htb3ZlLm5vQ29udHJvbCcsIGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt9KTtcblxuICB9XG5cbiAgcmVtb3ZlUHJldmVudCgpIHtcblxuICAgICQod2luZG93KS5vZmYoJ3RvdWNobW92ZS5ub0NvbnRyb2wnKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICBob3N0LHByb3Rjb2xcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByb3RvY29sKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sO1xuXG4gIH1cbiAgICBcbiAgaG9zdCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAvLyByZXR1cm4gbG9jYXRpb24uaG9zdFxuXG4gIH1cblxuICBwb3J0KCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBvcnQ7XG5cbiAgfVxuICAgICAgICBcbiAgcGF0aCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRobmFtZTtcblxuICB9XG5cbiAgcHJldmVudERlZmF1bHQoZSkge1xuXG4gICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIGlmIChlLnByZXZlbnREZWZhdWx0KVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMoZSkge1xuXG4gICAgaWYgKGtleXNbZS5rZXlDb2RlXSkge1xuICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICB9XG5cbiAgZGlzYWJsZVNjcm9sbCgpIHtcblxuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikgLy8gb2xkZXIgRkZcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIHdpbmRvdy5vbndoZWVsID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gbW9kZXJuIHN0YW5kYXJkXG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG9sZGVyIGJyb3dzZXJzLCBJRVxuICAgIHdpbmRvdy5vbnRvdWNobW92ZSAgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBtb2JpbGVcbiAgICBkb2N1bWVudC5vbmtleWRvd24gID0gdGhpcy5wcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXM7XG5cbiAgfVxuXG4gIGVuYWJsZVNjcm9sbCgpIHtcblxuICAgIGlmICh3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSBudWxsOyBcbiAgICB3aW5kb3cub253aGVlbCA9IG51bGw7IFxuICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IG51bGw7XG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9VdGlsLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogVXRpbHNcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbi8qKlxuICogYW5pbWF0aW9uXG4gKi9cbmltcG9ydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSAnLi9hbmltYXRpb24vcmVxdWVzdEFuaW1hdGlvbkZyYW1lJztcbmltcG9ydCBjYW5jZWxBbmltYXRpb25GcmFtZSBmcm9tICcuL2FuaW1hdGlvbi9jYW5jZWxBbmltYXRpb25GcmFtZSc7XG5cbmltcG9ydCBBcnJheSBmcm9tICcuL2FycmF5L0FycmF5JztcbmltcG9ydCBjaGVja0NsaWVudCBmcm9tIFwiLi91YS9jaGVja0NsaWVudFwiO1xuXG5pbXBvcnQgcHJlbG9hZEltZyBmcm9tICcuL2ltZy9wcmVsb2FkSW1nJztcbmltcG9ydCBzZXRVcEJ0blR3aXR0ZXIgZnJvbSAnLi9zbnMvc2V0VXBCdG5Ud2l0dGVyJztcbmltcG9ydCBzZXRVcEJ0bkxpbmUgZnJvbSAnLi9zbnMvc2V0VXBCdG5MaW5lJztcbmltcG9ydCBzZXRVcEJ0bkZhY2VCb29rIGZyb20gJy4vc25zL3NldFVwQnRuRmFjZUJvb2snO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuX3NldHVwKCk7XG4gICAgXG4gIH1cblxuICBfc2V0dXAoKSB7XG4gICAgLy8gd2luZG93LmNvbnNvbGUubG9nKCdVdGlsc19TZXR1cCEhJyk7XG4gICAgXG4gICAgLyoqXG4gICAgICogYXJyYXlcbiAgICAgKi9cbiAgICB0aGlzLkFycmF5ID0gbmV3IEFycmF5KCk7XG5cblxuICAgIC8qKlxuICAgICAqIHVhXG4gICAgICovXG4gICAgdGhpcy5jaGVja0NsaWVudCA9IG5ldyBjaGVja0NsaWVudCgpO1xuXG5cbiAgICAvKipcbiAgICAgKiBpbWdcbiAgICAgKi9cbiAgICAvLyB0aGlzLnByZWxvYWRJbWcgPSBuZXcgcHJlbG9hZEltZygpO1xuXG4gICAgLyoqXG4gICAgICogc25zXG4gICAgICovXG4gICAgLy8gdGhpcy5zZXRVcEJ0blR3aXR0ZXIgPSBuZXcgc2V0VXBCdG5Ud2l0dGVyO1xuICAgIC8vIHRoaXMuc2V0VXBCdG5MaW5lID0gbmV3IHNldFVwQnRuTGluZTtcbiAgICAvLyB0aGlzLnNldFVwQnRuRmFjZUJvb2sgPSBuZXcgc2V0VXBCdG5GYWNlQm9vaztcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9VdGlscy5qcyIsIi8qKlxuICogcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gKi9cbndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoKGZ1bmN0aW9uKF90aGlzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyAzMCk7XG4gICAgICAgIH07XG4gIH07XG59KSh0aGlzKSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FuaW1hdGlvbi9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMiLCIvKipcbiAqIGNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gKi9cbndpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9ICgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH07XG4gIH07XG59KSh0aGlzKSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FuaW1hdGlvbi9jYW5jZWxBbmltYXRpb25GcmFtZS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiDphY3liJfjga7mk43kvZzns7tcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBBcnJheVxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyYXkge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG5cbiAgfVxuXG5cdC8qKlxuXHQgKiDphY3liJflhoXjga7jg6njg7Pjg4Djg6DjgarlgKTjgpLjgbLjgajjgaTlj5blvpdcblx0ICogQHBhcmFtIGFyciA6IOmFjeWIl1xuXHQgKiBAcmV0dXJucyB7Kn0gOiDphY3liJflhoXjga7lgKRcblx0ICovXG4gIGFyclJhbmQoYXJyKSB7XG5cbiAgICByZXR1cm4gYXJyW3RoaXMucmFuZG9tKDAsIGFyci5sZW5ndGggLSAxKV07XG5cbiAgfVxuXG5cdC8qKlxuICAgKiDphY3liJfjgpLjg6njg7Pjg4Djg6DjgavkuKbjgbnmm7/jgYhcblx0ICogQHBhcmFtIGFyciA6IOmFjeWIlyhBcnJheSlcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKi9cbiAgc2h1ZmZsZShhcnIpIHtcblxuICAgIGxldCBBcnIgPSBbXTtcbiAgICBBcnIgPSBhcnIuc2xpY2UoKTtcbiAgICB2YXIgaSA9IGFyci5sZW5ndGg7XG4gICAgd2hpbGUoaSl7XG4gICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSppKTtcbiAgICAgIHZhciB0ID0gQXJyWy0taV07XG4gICAgICBBcnJbaV0gPSBBcnJbal07XG4gICAgICBBcnJbal0gPSB0O1xuICAgIH1cbiAgICByZXR1cm4gQXJyO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYXJyYXkvQXJyYXkuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzogVWHliKTliKVcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBjaGVja0NsaWVudFxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYnMvdWEtcGFyc2VyLm1pbi5qc1wiKTtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGVja0NsaWVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnVhID0gbmV3IHBhcnNlcigpO1xuXG4gIH1cblxuICAvKipcbiAgICogSUXjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0lFKCkge1xuICAgIGxldCBicm93c2VyID0gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgICByZXR1cm4gYnJvd3NlciA9PT0gJ0lFJyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZm9444GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNGaXJlZm94KCkge1xuICAgIGxldCBicm93c2VyID0gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgICByZXR1cm4gYnJvd3NlciA9PT0gJ0ZpcmVmb3gnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENocm9tZeOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQ2hyb21lKCkge1xuICAgIGxldCBicm93c2VyID0gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgICByZXR1cm4gYnJvd3NlciA9PT0gJ0Nocm9tZScgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogU2FmYXJp44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNTYWZhcmkoKSB7XG4gICAgbGV0IGJyb3dzZXIgPSB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICAgIHJldHVybiBicm93c2VyID09PSAnU2FmYXJpJyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6Ljg5DjgqTjg6vjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBpc01vYmlsZSgpIHtcbiAgICBsZXQgZGV2aWNlID0gdGhpcy51YS5nZXREZXZpY2UoKS50eXBlO1xuICAgIHJldHVybiBkZXZpY2UgPT09ICdtb2JpbGUnID8gdHJ1ZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICog44K/44OW44Os44OD44OI44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgaXNUYWJsZXQoKSB7XG4gICAgbGV0IGRldmljZSA9IHRoaXMudWEuZ2V0RGV2aWNlKCkudHlwZTtcbiAgICByZXR1cm4gZGV2aWNlID09PSAndGFibGV0JyA/IHRydWUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIE9T5ZCN44KS5Y+W5b6XXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBvcygpIHtcbiAgICByZXR1cm4gdGhpcy51YS5nZXRPUygpLm5hbWU7XG4gIH1cblxuICAvKipcbiAgICog44OH44OQ44Kk44K55ZCN44KS5Y+W5b6XXG4gICAqIEByZXR1cm5zIHt2ZW5kb3J8e0hUQywgU3ByaW50fX1cbiAgICovXG4gIGRldmljZV9uYW1lKCkge1xuICAgIGxldCBkZXZpY2VfbmFtZSA9IHRoaXMudWEuZ2V0RGV2aWNlKCkudmVuZG9yO1xuICAgIHJldHVybiBkZXZpY2VfbmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg5bjg6njgqbjgrblkI3jgpLlj5blvpdcbiAgICovXG4gIGJyb3dzZXJfbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6bjg7zjgrbjg7zjgqjjg7zjgrjjgqfjg7Pjg4jmg4XloLHvvJrlhajjgabjgpLlj5blvpdcbiAgICovXG4gIGFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy51YS5nZXRVQSgpO1xuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3VhL2NoZWNrQ2xpZW50LmpzIiwiLyoqXG4gKiBVQVBhcnNlci5qcyB2MC43LjEyXG4gKiBMaWdodHdlaWdodCBKYXZhU2NyaXB0LWJhc2VkIFVzZXItQWdlbnQgc3RyaW5nIHBhcnNlclxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhaXNhbG1hbi91YS1wYXJzZXItanNcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxMi0yMDE2IEZhaXNhbCBTYWxtYW4gPGZ5emxtYW5AZ21haWwuY29tPlxuICogRHVhbCBsaWNlbnNlZCB1bmRlciBHUEx2MiAmIE1JVFxuICovKGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49XCIwLjcuMTJcIixyPVwiXCIsaT1cIj9cIixzPVwiZnVuY3Rpb25cIixvPVwidW5kZWZpbmVkXCIsdT1cIm9iamVjdFwiLGE9XCJzdHJpbmdcIixmPVwibWFqb3JcIixsPVwibW9kZWxcIixjPVwibmFtZVwiLGg9XCJ0eXBlXCIscD1cInZlbmRvclwiLGQ9XCJ2ZXJzaW9uXCIsdj1cImFyY2hpdGVjdHVyZVwiLG09XCJjb25zb2xlXCIsZz1cIm1vYmlsZVwiLHk9XCJ0YWJsZXRcIixiPVwic21hcnR0dlwiLHc9XCJ3ZWFyYWJsZVwiLEU9XCJlbWJlZGRlZFwiLFM9e2V4dGVuZDpmdW5jdGlvbihlLHQpe3ZhciBuPXt9O2Zvcih2YXIgciBpbiBlKXRbcl0mJnRbcl0ubGVuZ3RoJTI9PT0wP25bcl09dFtyXS5jb25jYXQoZVtyXSk6bltyXT1lW3JdO3JldHVybiBufSxoYXM6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdHlwZW9mIGU9PVwic3RyaW5nXCI/dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZS50b0xvd2VyQ2FzZSgpKSE9PS0xOiExfSxsb3dlcml6ZTpmdW5jdGlvbihlKXtyZXR1cm4gZS50b0xvd2VyQ2FzZSgpfSxtYWpvcjpmdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGU9PT1hP2UucmVwbGFjZSgvW15cXGRcXC5dL2csXCJcIikuc3BsaXQoXCIuXCIpWzBdOnR9LHRyaW06ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csXCJcIil9fSx4PXtyZ3g6ZnVuY3Rpb24oKXt2YXIgZSxuPTAscixpLGEsZixsLGMsaD1hcmd1bWVudHM7d2hpbGUobjxoLmxlbmd0aCYmIWwpe3ZhciBwPWhbbl0sZD1oW24rMV07aWYodHlwZW9mIGU9PT1vKXtlPXt9O2ZvcihhIGluIGQpZC5oYXNPd25Qcm9wZXJ0eShhKSYmKGY9ZFthXSx0eXBlb2YgZj09PXU/ZVtmWzBdXT10OmVbZl09dCl9cj1pPTA7d2hpbGUocjxwLmxlbmd0aCYmIWwpe2w9cFtyKytdLmV4ZWModGhpcy5nZXRVQSgpKTtpZighIWwpZm9yKGE9MDthPGQubGVuZ3RoO2ErKyljPWxbKytpXSxmPWRbYV0sdHlwZW9mIGY9PT11JiZmLmxlbmd0aD4wP2YubGVuZ3RoPT0yP3R5cGVvZiBmWzFdPT1zP2VbZlswXV09ZlsxXS5jYWxsKHRoaXMsYyk6ZVtmWzBdXT1mWzFdOmYubGVuZ3RoPT0zP3R5cGVvZiBmWzFdPT09cyYmKCFmWzFdLmV4ZWN8fCFmWzFdLnRlc3QpP2VbZlswXV09Yz9mWzFdLmNhbGwodGhpcyxjLGZbMl0pOnQ6ZVtmWzBdXT1jP2MucmVwbGFjZShmWzFdLGZbMl0pOnQ6Zi5sZW5ndGg9PTQmJihlW2ZbMF1dPWM/ZlszXS5jYWxsKHRoaXMsYy5yZXBsYWNlKGZbMV0sZlsyXSkpOnQpOmVbZl09Yz9jOnR9bis9Mn1yZXR1cm4gZX0sc3RyOmZ1bmN0aW9uKGUsbil7Zm9yKHZhciByIGluIG4paWYodHlwZW9mIG5bcl09PT11JiZuW3JdLmxlbmd0aD4wKXtmb3IodmFyIHM9MDtzPG5bcl0ubGVuZ3RoO3MrKylpZihTLmhhcyhuW3JdW3NdLGUpKXJldHVybiByPT09aT90OnJ9ZWxzZSBpZihTLmhhcyhuW3JdLGUpKXJldHVybiByPT09aT90OnI7cmV0dXJuIGV9fSxUPXticm93c2VyOntvbGRzYWZhcmk6e3ZlcnNpb246e1wiMS4wXCI6XCIvOFwiLDEuMjpcIi8xXCIsMS4zOlwiLzNcIixcIjIuMFwiOlwiLzQxMlwiLFwiMi4wLjJcIjpcIi80MTZcIixcIjIuMC4zXCI6XCIvNDE3XCIsXCIyLjAuNFwiOlwiLzQxOVwiLFwiP1wiOlwiL1wifX19LGRldmljZTp7YW1hem9uOnttb2RlbDp7XCJGaXJlIFBob25lXCI6W1wiU0RcIixcIktGXCJdfX0sc3ByaW50Onttb2RlbDp7XCJFdm8gU2hpZnQgNEdcIjpcIjczNzNLVFwifSx2ZW5kb3I6e0hUQzpcIkFQQVwiLFNwcmludDpcIlNwcmludFwifX19LG9zOnt3aW5kb3dzOnt2ZXJzaW9uOntNRTpcIjQuOTBcIixcIk5UIDMuMTFcIjpcIk5UMy41MVwiLFwiTlQgNC4wXCI6XCJOVDQuMFwiLDJlMzpcIk5UIDUuMFwiLFhQOltcIk5UIDUuMVwiLFwiTlQgNS4yXCJdLFZpc3RhOlwiTlQgNi4wXCIsNzpcIk5UIDYuMVwiLDg6XCJOVCA2LjJcIiw4LjE6XCJOVCA2LjNcIiwxMDpbXCJOVCA2LjRcIixcIk5UIDEwLjBcIl0sUlQ6XCJBUk1cIn19fX0sTj17YnJvd3NlcjpbWy8ob3BlcmFcXHNtaW5pKVxcLyhbXFx3XFwuLV0rKS9pLC8ob3BlcmFcXHNbbW9iaWxldGFiXSspLit2ZXJzaW9uXFwvKFtcXHdcXC4tXSspL2ksLyhvcGVyYSkuK3ZlcnNpb25cXC8oW1xcd1xcLl0rKS9pLC8ob3BlcmEpW1xcL1xcc10rKFtcXHdcXC5dKykvaV0sW2MsZF0sWy8ob3Bpb3MpW1xcL1xcc10rKFtcXHdcXC5dKykvaV0sW1tjLFwiT3BlcmEgTWluaVwiXSxkXSxbL1xccyhvcHIpXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiT3BlcmFcIl0sZF0sWy8oa2luZGxlKVxcLyhbXFx3XFwuXSspL2ksLyhsdW5hc2NhcGV8bWF4dGhvbnxuZXRmcm9udHxqYXNtaW5lfGJsYXplcilbXFwvXFxzXT8oW1xcd1xcLl0rKSovaSwvKGF2YW50XFxzfGllbW9iaWxlfHNsaW18YmFpZHUpKD86YnJvd3Nlcik/W1xcL1xcc10/KFtcXHdcXC5dKikvaSwvKD86bXN8XFwoKShpZSlcXHMoW1xcd1xcLl0rKS9pLC8ocmVrb25xKVxcLyhbXFx3XFwuXSspKi9pLC8oY2hyb21pdW18ZmxvY2t8cm9ja21lbHR8bWlkb3JpfGVwaXBoYW55fHNpbGt8c2t5ZmlyZXxvdmlicm93c2VyfGJvbHR8aXJvbnx2aXZhbGRpfGlyaWRpdW18cGhhbnRvbWpzKVxcLyhbXFx3XFwuLV0rKS9pXSxbYyxkXSxbLyh0cmlkZW50KS4rcnZbOlxcc10oW1xcd1xcLl0rKS4rbGlrZVxcc2dlY2tvL2ldLFtbYyxcIklFXCJdLGRdLFsvKGVkZ2UpXFwvKChcXGQrKT9bXFx3XFwuXSspL2ldLFtjLGRdLFsvKHlhYnJvd3NlcilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJZYW5kZXhcIl0sZF0sWy8oY29tb2RvX2RyYWdvbilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsL18vZyxcIiBcIl0sZF0sWy8obWljcm9tZXNzZW5nZXIpXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiV2VDaGF0XCJdLGRdLFsveGlhb21pXFwvbWl1aWJyb3dzZXJcXC8oW1xcd1xcLl0rKS9pXSxbZCxbYyxcIk1JVUkgQnJvd3NlclwiXV0sWy9cXHN3dlxcKS4rKGNocm9tZSlcXC8oW1xcd1xcLl0rKS9pXSxbW2MsLyguKykvLFwiJDEgV2ViVmlld1wiXSxkXSxbL2FuZHJvaWQuK3NhbXN1bmdicm93c2VyXFwvKFtcXHdcXC5dKykvaSwvYW5kcm9pZC4rdmVyc2lvblxcLyhbXFx3XFwuXSspXFxzKyg/Om1vYmlsZVxccz9zYWZhcml8c2FmYXJpKSovaV0sW2QsW2MsXCJBbmRyb2lkIEJyb3dzZXJcIl1dLFsvKGNocm9tZXxvbW5pd2VifGFyb3JhfFt0aXplbm9rYV17NX1cXHM/YnJvd3NlcilcXC92PyhbXFx3XFwuXSspL2ksLyhxcWJyb3dzZXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaV0sW2MsZF0sWy8odWNcXHM/YnJvd3NlcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pLC91Y3dlYi4rKHVjYnJvd3NlcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pLC9qdWMuKyh1Y3dlYilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pXSxbW2MsXCJVQ0Jyb3dzZXJcIl0sZF0sWy8oZG9sZmluKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIkRvbHBoaW5cIl0sZF0sWy8oKD86YW5kcm9pZC4rKWNybW98Y3Jpb3MpXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiQ2hyb21lXCJdLGRdLFsvO2ZiYXZcXC8oW1xcd1xcLl0rKTsvaV0sW2QsW2MsXCJGYWNlYm9va1wiXV0sWy9meGlvc1xcLyhbXFx3XFwuLV0rKS9pXSxbZCxbYyxcIkZpcmVmb3hcIl1dLFsvdmVyc2lvblxcLyhbXFx3XFwuXSspLis/bW9iaWxlXFwvXFx3K1xccyhzYWZhcmkpL2ldLFtkLFtjLFwiTW9iaWxlIFNhZmFyaVwiXV0sWy92ZXJzaW9uXFwvKFtcXHdcXC5dKykuKz8obW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpL2ldLFtkLGNdLFsvd2Via2l0Lis/KG1vYmlsZVxccz9zYWZhcml8c2FmYXJpKShcXC9bXFx3XFwuXSspL2ldLFtjLFtkLHguc3RyLFQuYnJvd3Nlci5vbGRzYWZhcmkudmVyc2lvbl1dLFsvKGtvbnF1ZXJvcilcXC8oW1xcd1xcLl0rKS9pLC8od2Via2l0fGtodG1sKVxcLyhbXFx3XFwuXSspL2ldLFtjLGRdLFsvKG5hdmlnYXRvcnxuZXRzY2FwZSlcXC8oW1xcd1xcLi1dKykvaV0sW1tjLFwiTmV0c2NhcGVcIl0sZF0sWy8oc3dpZnRmb3gpL2ksLyhpY2VkcmFnb258aWNld2Vhc2VsfGNhbWlub3xjaGltZXJhfGZlbm5lY3xtYWVtb1xcc2Jyb3dzZXJ8bWluaW1vfGNvbmtlcm9yKVtcXC9cXHNdPyhbXFx3XFwuXFwrXSspL2ksLyhmaXJlZm94fHNlYW1vbmtleXxrLW1lbGVvbnxpY2VjYXR8aWNlYXBlfGZpcmViaXJkfHBob2VuaXgpXFwvKFtcXHdcXC4tXSspL2ksLyhtb3ppbGxhKVxcLyhbXFx3XFwuXSspLitydlxcOi4rZ2Vja29cXC9cXGQrL2ksLyhwb2xhcmlzfGx5bnh8ZGlsbG98aWNhYnxkb3Jpc3xhbWF5YXx3M218bmV0c3VyZnxzbGVpcG5pcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pLC8obGlua3MpXFxzXFwoKFtcXHdcXC5dKykvaSwvKGdvYnJvd3NlcilcXC8/KFtcXHdcXC5dKykqL2ksLyhpY2VcXHM/YnJvd3NlcilcXC92PyhbXFx3XFwuX10rKS9pLC8obW9zYWljKVtcXC9cXHNdKFtcXHdcXC5dKykvaV0sW2MsZF1dLGNwdTpbWy8oPzooYW1kfHgoPzooPzo4Nnw2NClbXy1dKT98d293fHdpbik2NClbO1xcKV0vaV0sW1t2LFwiYW1kNjRcIl1dLFsvKGlhMzIoPz07KSkvaV0sW1t2LFMubG93ZXJpemVdXSxbLygoPzppWzM0Nl18eCk4NilbO1xcKV0vaV0sW1t2LFwiaWEzMlwiXV0sWy93aW5kb3dzXFxzKGNlfG1vYmlsZSk7XFxzcHBjOy9pXSxbW3YsXCJhcm1cIl1dLFsvKCg/OnBwY3xwb3dlcnBjKSg/OjY0KT8pKD86XFxzbWFjfDt8XFwpKS9pXSxbW3YsL293ZXIvLFwiXCIsUy5sb3dlcml6ZV1dLFsvKHN1bjRcXHcpWztcXCldL2ldLFtbdixcInNwYXJjXCJdXSxbLygoPzphdnIzMnxpYTY0KD89OykpfDY4ayg/PVxcKSl8YXJtKD86NjR8KD89dlxcZCs7KSl8KD89YXRtZWxcXHMpYXZyfCg/OmlyaXh8bWlwc3xzcGFyYykoPzo2NCk/KD89Oyl8cGEtcmlzYykvaV0sW1t2LFMubG93ZXJpemVdXV0sZGV2aWNlOltbL1xcKChpcGFkfHBsYXlib29rKTtbXFx3XFxzXFwpOy1dKyhyaW18YXBwbGUpL2ldLFtsLHAsW2gseV1dLFsvYXBwbGVjb3JlbWVkaWFcXC9bXFx3XFwuXSsgXFwoKGlwYWQpL10sW2wsW3AsXCJBcHBsZVwiXSxbaCx5XV0sWy8oYXBwbGVcXHN7MCwxfXR2KS9pXSxbW2wsXCJBcHBsZSBUVlwiXSxbcCxcIkFwcGxlXCJdXSxbLyhhcmNob3MpXFxzKGdhbWVwYWQyPykvaSwvKGhwKS4rKHRvdWNocGFkKS9pLC8oaHApLisodGFibGV0KS9pLC8oa2luZGxlKVxcLyhbXFx3XFwuXSspL2ksL1xccyhub29rKVtcXHdcXHNdK2J1aWxkXFwvKFxcdyspL2ksLyhkZWxsKVxccyhzdHJlYVtrcHJcXHNcXGRdKltcXGRrb10pL2ldLFtwLGwsW2gseV1dLFsvKGtmW0Etel0rKVxcc2J1aWxkXFwvW1xcd1xcLl0rLipzaWxrXFwvL2ldLFtsLFtwLFwiQW1hem9uXCJdLFtoLHldXSxbLyhzZHxrZilbMDM0OWhpam9yc3R1d10rXFxzYnVpbGRcXC9bXFx3XFwuXSsuKnNpbGtcXC8vaV0sW1tsLHguc3RyLFQuZGV2aWNlLmFtYXpvbi5tb2RlbF0sW3AsXCJBbWF6b25cIl0sW2gsZ11dLFsvXFwoKGlwW2hvbmVkfFxcc1xcdypdKyk7LisoYXBwbGUpL2ldLFtsLHAsW2gsZ11dLFsvXFwoKGlwW2hvbmVkfFxcc1xcdypdKyk7L2ldLFtsLFtwLFwiQXBwbGVcIl0sW2gsZ11dLFsvKGJsYWNrYmVycnkpW1xccy1dPyhcXHcrKS9pLC8oYmxhY2tiZXJyeXxiZW5xfHBhbG0oPz1cXC0pfHNvbnllcmljc3NvbnxhY2VyfGFzdXN8ZGVsbHxodWF3ZWl8bWVpenV8bW90b3JvbGF8cG9seXRyb24pW1xcc18tXT8oW1xcdy1dKykqL2ksLyhocClcXHMoW1xcd1xcc10rXFx3KS9pLC8oYXN1cyktPyhcXHcrKS9pXSxbcCxsLFtoLGddXSxbL1xcKGJiMTA7XFxzKFxcdyspL2ldLFtsLFtwLFwiQmxhY2tCZXJyeVwiXSxbaCxnXV0sWy9hbmRyb2lkLisodHJhbnNmb1twcmltZVxcc117NCwxMH1cXHNcXHcrfGVlZXBjfHNsaWRlclxcc1xcdyt8bmV4dXMgN3xwYWRmb25lKS9pXSxbbCxbcCxcIkFzdXNcIl0sW2gseV1dLFsvKHNvbnkpXFxzKHRhYmxldFxcc1twc10pXFxzYnVpbGRcXC8vaSwvKHNvbnkpPyg/OnNncC4rKVxcc2J1aWxkXFwvL2ldLFtbcCxcIlNvbnlcIl0sW2wsXCJYcGVyaWEgVGFibGV0XCJdLFtoLHldXSxbLyg/OnNvbnkpPyg/Oig/Oig/OmN8ZClcXGR7NH0pfCg/OnNvWy1sXS4rKSlcXHNidWlsZFxcLy9pXSxbW3AsXCJTb255XCJdLFtsLFwiWHBlcmlhIFBob25lXCJdLFtoLGddXSxbL1xccyhvdXlhKVxccy9pLC8obmludGVuZG8pXFxzKFt3aWRzM3VdKykvaV0sW3AsbCxbaCxtXV0sWy9hbmRyb2lkLis7XFxzKHNoaWVsZClcXHNidWlsZC9pXSxbbCxbcCxcIk52aWRpYVwiXSxbaCxtXV0sWy8ocGxheXN0YXRpb25cXHNbMzRwb3J0YWJsZXZpXSspL2ldLFtsLFtwLFwiU29ueVwiXSxbaCxtXV0sWy8oc3ByaW50XFxzKFxcdyspKS9pXSxbW3AseC5zdHIsVC5kZXZpY2Uuc3ByaW50LnZlbmRvcl0sW2wseC5zdHIsVC5kZXZpY2Uuc3ByaW50Lm1vZGVsXSxbaCxnXV0sWy8obGVub3ZvKVxccz8oUyg/OjUwMDB8NjAwMCkrKD86Wy1dW1xcdytdKSkvaV0sW3AsbCxbaCx5XV0sWy8oaHRjKVs7X1xccy1dKyhbXFx3XFxzXSsoPz1cXCkpfFxcdyspKi9pLC8oenRlKS0oXFx3KykqL2ksLyhhbGNhdGVsfGdlZWtzcGhvbmV8aHVhd2VpfGxlbm92b3xuZXhpYW58cGFuYXNvbmljfCg/PTtcXHMpc29ueSlbX1xccy1dPyhbXFx3LV0rKSovaV0sW3AsW2wsL18vZyxcIiBcIl0sW2gsZ11dLFsvKG5leHVzXFxzOSkvaV0sW2wsW3AsXCJIVENcIl0sW2gseV1dLFsvKG5leHVzXFxzNnApL2ldLFtsLFtwLFwiSHVhd2VpXCJdLFtoLGddXSxbLyhtaWNyb3NvZnQpO1xccyhsdW1pYVtcXHNcXHddKykvaV0sW3AsbCxbaCxnXV0sWy9bXFxzXFwoO10oeGJveCg/Olxcc29uZSk/KVtcXHNcXCk7XS9pXSxbbCxbcCxcIk1pY3Jvc29mdFwiXSxbaCxtXV0sWy8oa2luXFwuW29uZXR3XXszfSkvaV0sW1tsLC9cXC4vZyxcIiBcIl0sW3AsXCJNaWNyb3NvZnRcIl0sW2gsZ11dLFsvXFxzKG1pbGVzdG9uZXxkcm9pZCg/OlsyLTR4XXxcXHMoPzpiaW9uaWN8eDJ8cHJvfHJhenIpKT8oOj9cXHM0Zyk/KVtcXHdcXHNdK2J1aWxkXFwvL2ksL21vdFtcXHMtXT8oXFx3KykqL2ksLyhYVFxcZHszLDR9KSBidWlsZFxcLy9pLC8obmV4dXNcXHM2KS9pXSxbbCxbcCxcIk1vdG9yb2xhXCJdLFtoLGddXSxbL2FuZHJvaWQuK1xccyhtejYwXFxkfHhvb21bXFxzMl17MCwyfSlcXHNidWlsZFxcLy9pXSxbbCxbcCxcIk1vdG9yb2xhXCJdLFtoLHldXSxbL2hiYnR2XFwvXFxkK1xcLlxcZCtcXC5cXGQrXFxzK1xcKFtcXHdcXHNdKjtcXHMqKFxcd1teO10qKTsoW147XSopL2ldLFtbcCxTLnRyaW1dLFtsLFMudHJpbV0sW2gsYl1dLFsvaGJidHYuK21hcGxlOyhcXGQrKS9pXSxbW2wsL14vLFwiU21hcnRUVlwiXSxbcCxcIlNhbXN1bmdcIl0sW2gsYl1dLFsvXFwoZHR2W1xcKTtdLisoYXF1b3MpL2ldLFtsLFtwLFwiU2hhcnBcIl0sW2gsYl1dLFsvYW5kcm9pZC4rKChzY2gtaVs4OV0wXFxkfHNody1tMzgwc3xndC1wXFxkezR9fGd0LW5cXGQrfHNnaC10OFs1Nl05fG5leHVzIDEwKSkvaSwvKChTTS1UXFx3KykpL2ldLFtbcCxcIlNhbXN1bmdcIl0sbCxbaCx5XV0sWy9zbWFydC10di4rKHNhbXN1bmcpL2ldLFtwLFtoLGJdLGxdLFsvKChzW2NncF1oLVxcdyt8Z3QtXFx3K3xnYWxheHlcXHNuZXh1c3xzbS1cXHdbXFx3XFxkXSspKS9pLC8oc2FtW3N1bmddKilbXFxzLV0qKFxcdystP1tcXHctXSopKi9pLC9zZWMtKChzZ2hcXHcrKSkvaV0sW1twLFwiU2Ftc3VuZ1wiXSxsLFtoLGddXSxbL3NpZS0oXFx3KykqL2ldLFtsLFtwLFwiU2llbWVuc1wiXSxbaCxnXV0sWy8obWFlbW98bm9raWEpLioobjkwMHxsdW1pYVxcc1xcZCspL2ksLyhub2tpYSlbXFxzXy1dPyhbXFx3LV0rKSovaV0sW1twLFwiTm9raWFcIl0sbCxbaCxnXV0sWy9hbmRyb2lkXFxzM1xcLltcXHNcXHc7LV17MTB9KGFcXGR7M30pL2ldLFtsLFtwLFwiQWNlclwiXSxbaCx5XV0sWy9hbmRyb2lkXFxzM1xcLltcXHNcXHc7LV17MTB9KGxnPyktKFswNmN2OV17Myw0fSkvaV0sW1twLFwiTEdcIl0sbCxbaCx5XV0sWy8obGcpIG5ldGNhc3RcXC50di9pXSxbcCxsLFtoLGJdXSxbLyhuZXh1c1xcc1s0NV0pL2ksL2xnW2U7XFxzXFwvLV0rKFxcdyspKi9pXSxbbCxbcCxcIkxHXCJdLFtoLGddXSxbL2FuZHJvaWQuKyhpZGVhdGFiW2EtejAtOVxcLVxcc10rKS9pXSxbbCxbcCxcIkxlbm92b1wiXSxbaCx5XV0sWy9saW51eDsuKygoam9sbGEpKTsvaV0sW3AsbCxbaCxnXV0sWy8oKHBlYmJsZSkpYXBwXFwvW1xcZFxcLl0rXFxzL2ldLFtwLGwsW2gsd11dLFsvYW5kcm9pZC4rO1xccyhnbGFzcylcXHNcXGQvaV0sW2wsW3AsXCJHb29nbGVcIl0sW2gsd11dLFsvYW5kcm9pZC4rKFxcdyspXFxzK2J1aWxkXFwvaG1cXDEvaSwvYW5kcm9pZC4rKGhtW1xcc1xcLV9dKm5vdGU/W1xcc19dKig/OlxcZFxcdyk/KVxccytidWlsZC9pLC9hbmRyb2lkLisobWlbXFxzXFwtX10qKD86b25lfG9uZVtcXHNfXXBsdXN8bm90ZSBsdGUpP1tcXHNfXSooPzpcXGRcXHcpPylcXHMrYnVpbGQvaV0sW1tsLC9fL2csXCIgXCJdLFtwLFwiWGlhb21pXCJdLFtoLGddXSxbL2FuZHJvaWQuK2EwMDAoMSlcXHMrYnVpbGQvaV0sW2wsW3AsXCJPbmVQbHVzXCJdLFtoLGddXSxbL1xccyh0YWJsZXQpWztcXC9dL2ksL1xccyhtb2JpbGUpKD86WztcXC9dfFxcc3NhZmFyaSkvaV0sW1toLFMubG93ZXJpemVdLHAsbF1dLGVuZ2luZTpbWy93aW5kb3dzLitcXHNlZGdlXFwvKFtcXHdcXC5dKykvaV0sW2QsW2MsXCJFZGdlSFRNTFwiXV0sWy8ocHJlc3RvKVxcLyhbXFx3XFwuXSspL2ksLyh3ZWJraXR8dHJpZGVudHxuZXRmcm9udHxuZXRzdXJmfGFtYXlhfGx5bnh8dzNtKVxcLyhbXFx3XFwuXSspL2ksLyhraHRtbHx0YXNtYW58bGlua3MpW1xcL1xcc11cXCg/KFtcXHdcXC5dKykvaSwvKGljYWIpW1xcL1xcc10oWzIzXVxcLltcXGRcXC5dKykvaV0sW2MsZF0sWy9ydlxcOihbXFx3XFwuXSspLiooZ2Vja28pL2ldLFtkLGNdXSxvczpbWy9taWNyb3NvZnRcXHMod2luZG93cylcXHModmlzdGF8eHApL2ldLFtjLGRdLFsvKHdpbmRvd3MpXFxzbnRcXHM2XFwuMjtcXHMoYXJtKS9pLC8od2luZG93c1xcc3Bob25lKD86XFxzb3MpKilbXFxzXFwvXT8oW1xcZFxcLlxcc10rXFx3KSovaSwvKHdpbmRvd3NcXHNtb2JpbGV8d2luZG93cylbXFxzXFwvXT8oW250Y2VcXGRcXC5cXHNdK1xcdykvaV0sW2MsW2QseC5zdHIsVC5vcy53aW5kb3dzLnZlcnNpb25dXSxbLyh3aW4oPz0zfDl8bil8d2luXFxzOXhcXHMpKFtudFxcZFxcLl0rKS9pXSxbW2MsXCJXaW5kb3dzXCJdLFtkLHguc3RyLFQub3Mud2luZG93cy52ZXJzaW9uXV0sWy9cXCgoYmIpKDEwKTsvaV0sW1tjLFwiQmxhY2tCZXJyeVwiXSxkXSxbLyhibGFja2JlcnJ5KVxcdypcXC8/KFtcXHdcXC5dKykqL2ksLyh0aXplbilbXFwvXFxzXShbXFx3XFwuXSspL2ksLyhhbmRyb2lkfHdlYm9zfHBhbG1cXHNvc3xxbnh8YmFkYXxyaW1cXHN0YWJsZXRcXHNvc3xtZWVnb3xjb250aWtpKVtcXC9cXHMtXT8oW1xcd1xcLl0rKSovaSwvbGludXg7Lisoc2FpbGZpc2gpOy9pXSxbYyxkXSxbLyhzeW1iaWFuXFxzP29zfHN5bWJvc3xzNjAoPz07KSlbXFwvXFxzLV0/KFtcXHdcXC5dKykqL2ldLFtbYyxcIlN5bWJpYW5cIl0sZF0sWy9cXCgoc2VyaWVzNDApOy9pXSxbY10sWy9tb3ppbGxhLitcXChtb2JpbGU7LitnZWNrby4rZmlyZWZveC9pXSxbW2MsXCJGaXJlZm94IE9TXCJdLGRdLFsvKG5pbnRlbmRvfHBsYXlzdGF0aW9uKVxccyhbd2lkczM0cG9ydGFibGV2dV0rKS9pLC8obWludClbXFwvXFxzXFwoXT8oXFx3KykqL2ksLyhtYWdlaWF8dmVjdG9ybGludXgpWztcXHNdL2ksLyhqb2xpfFtreGxuXT91YnVudHV8ZGViaWFufFtvcGVuXSpzdXNlfGdlbnRvb3woPz1cXHMpYXJjaHxzbGFja3dhcmV8ZmVkb3JhfG1hbmRyaXZhfGNlbnRvc3xwY2xpbnV4b3N8cmVkaGF0fHplbndhbGt8bGlucHVzKVtcXC9cXHMtXT8oPyFjaHJvbSkoW1xcd1xcLi1dKykqL2ksLyhodXJkfGxpbnV4KVxccz8oW1xcd1xcLl0rKSovaSwvKGdudSlcXHM/KFtcXHdcXC5dKykqL2ldLFtjLGRdLFsvKGNyb3MpXFxzW1xcd10rXFxzKFtcXHdcXC5dK1xcdykvaV0sW1tjLFwiQ2hyb21pdW0gT1NcIl0sZF0sWy8oc3Vub3MpXFxzPyhbXFx3XFwuXStcXGQpKi9pXSxbW2MsXCJTb2xhcmlzXCJdLGRdLFsvXFxzKFtmcmVudG9wYy1dezAsNH1ic2R8ZHJhZ29uZmx5KVxccz8oW1xcd1xcLl0rKSovaV0sW2MsZF0sWy8oaGFpa3UpXFxzKFxcdyspL2ldLFtjLGRdLFsvKGlwW2hvbmVhZF0rKSg/Oi4qb3NcXHMoW1xcd10rKSpcXHNsaWtlXFxzbWFjfDtcXHNvcGVyYSkvaV0sW1tjLFwiaU9TXCJdLFtkLC9fL2csXCIuXCJdXSxbLyhtYWNcXHNvc1xcc3gpXFxzPyhbXFx3XFxzXFwuXStcXHcpKi9pLC8obWFjaW50b3NofG1hYyg/PV9wb3dlcnBjKVxccykvaV0sW1tjLFwiTWFjIE9TXCJdLFtkLC9fL2csXCIuXCJdXSxbLygoPzpvcGVuKT9zb2xhcmlzKVtcXC9cXHMtXT8oW1xcd1xcLl0rKSovaSwvKGFpeClcXHMoKFxcZCkoPz1cXC58XFwpfFxccylbXFx3XFwuXSopKi9pLC8ocGxhblxcczl8bWluaXh8YmVvc3xvc1xcLzJ8YW1pZ2Fvc3xtb3JwaG9zfHJpc2NcXHNvc3xvcGVudm1zKS9pLC8odW5peClcXHM/KFtcXHdcXC5dKykqL2ldLFtjLGRdXX0sQz1mdW5jdGlvbih0LG4pe2lmKHRoaXMgaW5zdGFuY2VvZiBDKXt2YXIgaT10fHwoZSYmZS5uYXZpZ2F0b3ImJmUubmF2aWdhdG9yLnVzZXJBZ2VudD9lLm5hdmlnYXRvci51c2VyQWdlbnQ6cikscz1uP1MuZXh0ZW5kKE4sbik6TjtyZXR1cm4gdGhpcy5nZXRCcm93c2VyPWZ1bmN0aW9uKCl7dmFyIGU9eC5yZ3guYXBwbHkodGhpcyxzLmJyb3dzZXIpO3JldHVybiBlLm1ham9yPVMubWFqb3IoZS52ZXJzaW9uKSxlfSx0aGlzLmdldENQVT1mdW5jdGlvbigpe3JldHVybiB4LnJneC5hcHBseSh0aGlzLHMuY3B1KX0sdGhpcy5nZXREZXZpY2U9ZnVuY3Rpb24oKXtyZXR1cm4geC5yZ3guYXBwbHkodGhpcyxzLmRldmljZSl9LHRoaXMuZ2V0RW5naW5lPWZ1bmN0aW9uKCl7cmV0dXJuIHgucmd4LmFwcGx5KHRoaXMscy5lbmdpbmUpfSx0aGlzLmdldE9TPWZ1bmN0aW9uKCl7cmV0dXJuIHgucmd4LmFwcGx5KHRoaXMscy5vcyl9LHRoaXMuZ2V0UmVzdWx0PWZ1bmN0aW9uKCl7cmV0dXJue3VhOnRoaXMuZ2V0VUEoKSxicm93c2VyOnRoaXMuZ2V0QnJvd3NlcigpLGVuZ2luZTp0aGlzLmdldEVuZ2luZSgpLG9zOnRoaXMuZ2V0T1MoKSxkZXZpY2U6dGhpcy5nZXREZXZpY2UoKSxjcHU6dGhpcy5nZXRDUFUoKX19LHRoaXMuZ2V0VUE9ZnVuY3Rpb24oKXtyZXR1cm4gaX0sdGhpcy5zZXRVQT1mdW5jdGlvbihlKXtyZXR1cm4gaT1lLHRoaXN9LHRoaXN9cmV0dXJuKG5ldyBDKHQsbikpLmdldFJlc3VsdCgpfTtDLlZFUlNJT049bixDLkJST1dTRVI9e05BTUU6YyxNQUpPUjpmLFZFUlNJT046ZH0sQy5DUFU9e0FSQ0hJVEVDVFVSRTp2fSxDLkRFVklDRT17TU9ERUw6bCxWRU5ET1I6cCxUWVBFOmgsQ09OU09MRTptLE1PQklMRTpnLFNNQVJUVFY6YixUQUJMRVQ6eSxXRUFSQUJMRTp3LEVNQkVEREVEOkV9LEMuRU5HSU5FPXtOQU1FOmMsVkVSU0lPTjpkfSxDLk9TPXtOQU1FOmMsVkVSU0lPTjpkfSx0eXBlb2YgZXhwb3J0cyE9PW8/KHR5cGVvZiBtb2R1bGUhPT1vJiZtb2R1bGUuZXhwb3J0cyYmKGV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9QyksZXhwb3J0cy5VQVBhcnNlcj1DKTp0eXBlb2YgZGVmaW5lPT09cyYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gQ30pOmUuVUFQYXJzZXI9Qzt2YXIgaz1lLmpRdWVyeXx8ZS5aZXB0bztpZih0eXBlb2YgayE9PW8pe3ZhciBMPW5ldyBDO2sudWE9TC5nZXRSZXN1bHQoKSxrLnVhLmdldD1mdW5jdGlvbigpe3JldHVybiBMLmdldFVBKCl9LGsudWEuc2V0PWZ1bmN0aW9uKGUpe0wuc2V0VUEoZSk7dmFyIHQ9TC5nZXRSZXN1bHQoKTtmb3IodmFyIG4gaW4gdClrLnVhW25dPXRbbl19fX0pKHR5cGVvZiB3aW5kb3c9PVwib2JqZWN0XCI/d2luZG93OnRoaXMpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9saWJzL3VhLXBhcnNlci5taW4uanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpOyB9O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBwcmVsb2FkSW1nXG4gKiBAcGFyYW0gaW1nUGF0aFxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChpbWdQYXRoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgdmFyIGltZztcbiAgICBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgYXJndW1lbnRzLmNhbGxlZSk7XG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBpbWcuc3JjID0gaW1nUGF0aDtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9pbWcvcHJlbG9hZEltZy5qcyIsIi8qKlxuICogc2V0VXBCdG5Ud2l0dGVyXG4gKiBAcGFyYW0gJGJ0blxuICogQHBhcmFtIHRleHRcbiAqIEBwYXJhbSBzaGFyZVVSTFxuICovXG5leHBvcnQgZGVmYXVsdCAoJGJ0biwgdGV4dCwgc2hhcmVVUkwpID0+IHtcbiAgdmFyIHVybDtcbiAgaWYgKHNoYXJlVVJMID09IG51bGwpIHtcbiAgICBzaGFyZVVSTCA9ICcnO1xuICB9XG4gIHVybCA9ICdodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD8nO1xuICBpZiAoc2hhcmVVUkwgPT09ICcnKSB7XG4gICAgdXJsICs9IFwidGV4dD1cIiArIChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpO1xuICB9IGVsc2Uge1xuICAgIHVybCArPSBcInVybD1cIiArIChlbmNvZGVVUklDb21wb25lbnQoc2hhcmVVUkwpKSArIFwiJnRleHQ9XCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKTtcbiAgfVxuICByZXR1cm4gJGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgd2luZG93Lm9wZW4odXJsLCAndHdpdHRlclNoYXJlJywgJ3dpZHRoPTY3MCxoZWlnaHQ9NDAwJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0blR3aXR0ZXIuanMiLCIvKipcbiAqIHNldFVwQnRuTGluZVxuICogQHBhcmFtICRidG5cbiAqIEBwYXJhbSB0ZXh0XG4gKiBAcGFyYW0gc2hhcmVVUkxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCRidG4sIHRleHQsIHNoYXJlVVJMID0gJycpID0+IHtcbiAgdmFyIHVybDtcbiAgaWYgKHNoYXJlVVJMID09IG51bGwpIHtcbiAgICBzaGFyZVVSTCA9ICcnO1xuICB9XG4gIHVybCA9ICdodHRwOi8vbGluZS5tZS9tc2cvdGV4dC8/JztcbiAgaWYgKHNoYXJlVVJMID09PSAnJykge1xuICAgIHVybCArPSBcIlwiICsgKGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSk7XG4gIH0gZWxzZSB7XG4gICAgdXJsICs9IChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpICsgXCJcXG5cIiArIChlbmNvZGVVUklDb21wb25lbnQoc2hhcmVVUkwpKTtcbiAgfVxuICByZXR1cm4gJGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgd2luZG93Lm9wZW4odXJsLCAnbGluZVNoYXJlJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkxpbmUuanMiLCIvKipcbiAqIHNldFVwQnRuRmFjZWJvb2tcbiAqIEBwYXJhbSAkYnRuXG4gKiBAcGFyYW0gc2hhcmVVUkxcbiAqIEBwYXJhbSBkZXNjcmlwdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCAoJGJ0biwgc2hhcmVVUkwsIGRlc2NyaXB0aW9uID0gJycpID0+IHtcbiAgdmFyIHVybDtcbiAgaWYgKGRlc2NyaXB0aW9uID09IG51bGwpIHtcbiAgICBkZXNjcmlwdGlvbiA9ICcnO1xuICB9XG4gIHVybCA9ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/JmRpc3BsYXk9cG9wdXAmdT0nO1xuICB1cmwgKz0gXCJcIiArIChlbmNvZGVVUklDb21wb25lbnQoc2hhcmVVUkwpKTtcbiAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgdXJsICs9IFwiJmRlc2NyaXB0aW9uPVwiICsgKGVuY29kZVVSSUNvbXBvbmVudChkZXNjcmlwdGlvbikpO1xuICB9XG4gIHJldHVybiAkYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICB3aW5kb3cub3Blbih1cmwsIFwiZmFjZWJvb2tTaGFyZVwiICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSwgJ3dpZHRoPTY3MCxoZWlnaHQ9NDAwJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkZhY2VCb29rLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRnVuY1xuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuYmxhbmsoKTtcbiAgICB0aGlzLmRlYnVnZ2VyKCk7XG4gICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcbiAgICB0aGlzLmV4cGFuZGpRdWVyeSgpO1xuXG4gIH1cblxuICBibGFuaygpIHtcblxuICAgICQoKCk9PnskKCcuYmxhbmsnKS5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJyk7fSk7XG5cbiAgfVxuXG4gIGRlYnVnZ2VyKCkge1xuXG4gICAgLy8g44OH44OQ44OD44Kw44Oi44O844OJ5YiH5pu/XG4gICAgdmFyIFJFTEVBU0UgPSBnYi5pbi5jb25mLlJFTEVBU0U7XG5cbiAgICAvLyDnva7mj5vlr77osaHjga7jg6Hjgr3jg4Pjg4njgpLphY3liJfjgajjgZfjgabkv53mjIHjgZnjgotcbiAgICB2YXIgbWV0aG9kcyA9IFtcbiAgICAgICdsb2cnLFxuICAgICAgJ2RlYnVnJyxcbiAgICAgICdpbmZvJyxcbiAgICAgICd3YXJuJyxcbiAgICAgICdlcnJvcicsXG4gICAgICAnZGlyJyxcbiAgICAgICd0cmFjZScsXG4gICAgICAnYXNzZXJ0JyxcbiAgICAgICdkaXJ4bWwnLFxuICAgICAgJ2dyb3VwJyxcbiAgICAgICdncm91cEVuZCcsXG4gICAgICAndGltZScsXG4gICAgICAndGltZUVuZCcsXG4gICAgICAnY291bnQnLFxuICAgICAgJ3Byb2ZpbGUnLFxuICAgICAgJ3Byb2ZpbGVFbmQnXG4gICAgXTtcblxuICAgIC8vIGNvbnNvbGXjgYzkvb/jgYjjgarjgYTloLTlkIjjga/nqbrjga7jgqrjg5bjgrjjgqfjgq/jg4jjgpLoqK3lrprjgZfjgabjgYrjgY9cbiAgICBpZiggdHlwZW9mIHdpbmRvdy5jb25zb2xlID09PSBcInVuZGVmaW5lZFwiICl7XG4gICAgICB3aW5kb3cuY29uc29sZSA9IHt9O1xuICAgIH1cblxuICAgIC8vIOWQhOODoeOCveODg+ODieOCkndpbmRvd+OBuOebtOaOpei/veWKoOOBl+OBpuihjOOBj1xuICAgIGZvciggdmFyIGkgaW4gbWV0aG9kcyApe1xuICAgICAgKGZ1bmN0aW9uKCBtICl7XG5cbiAgICAgICAvLyBjb25zb2xl44Gr44GC44KL77yf44OH44OQ44OD44Kw44Oi44O844OJ44Gv5pyJ5Yq577yfY29uc29sZeOBruOCguOBruOBr+mWouaVsO+8n1xuICAgICAgIGlmKCBjb25zb2xlW21dICYmICFSRUxFQVNFICYmIHR5cGVvZiBjb25zb2xlW21dID09PSBcImZ1bmN0aW9uXCIgKXtcbiAgICAgICAgd2luZG93W21dID0gY29uc29sZVttXS5iaW5kKGNvbnNvbGUpO1xuICAgICAgIH0gZWxzZSB744CALy8gZGVidWdNb2Rl44GMZmFsc2Us44KC44GX44GP44Gv6Kmy5b2T44Oh44K944OD44OJ44GM5a2Y5Zyo44GX44Gq44GE5aC05ZCI44Gv44CB56m644Gu44Oh44K944OD44OJ44KS55So5oSP44GZ44KLXG4gICAgICAgIHdpbmRvd1ttXSA9IGZ1bmN0aW9uKCl7fTtcbiAgICAgICB9XG5cbiAgICAgIH0pKCBtZXRob2RzW2ldICk7XG4gICAgfVxuXG4gIH1cblxuICBwcmVwZW5kKHBhcmFtKSB7XG5cbiAgICAkKCdib2R5JykucHJlcGVuZChwYXJhbSk7XG5cbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHtcblxuICAgIHZhciBGUFMgPSAxMDAwLzYwO1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgLy8gY2hyb21l44KE5pyA5paw44GuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgLy8g5Y+k44GEZmlyZWZveOeUqFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICAvLyBzYWZhcmk25Lul5YmN44CBaU9TNiBzYWZhcmnnlKhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCBGUFMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIHRpbWVyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTsgICAgICBcblxuICB9XG5cbiAgZXhwYW5kalF1ZXJ5KCkge1xuXG4gICAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgICB3OjAsIFxuICAgICAgaDowLCBcbiAgICAgIGFkanVzdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAnbGVmdCc6JzUwJScsXG4gICAgICAgICAgICAndG9wJzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6Jy0nICsgKHcgLyAyKSArICdweCcsXG4gICAgICAgICAgICAnbWFyZ2luLXRvcCc6Jy0nICsgKGggLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBhZGp1c3RXOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICdsZWZ0JzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6Jy0nICsgKHcgLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBhZGp1c3RIOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICd0b3AnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi10b3AnOictJyArIChoIC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIGNoZWNrQ3NzQmxlbmQoKSB7XG5cbiAgICBpZiAoJ0NTUycgaW4gd2luZG93ICYmICdzdXBwb3J0cycgaW4gd2luZG93LkNTUykge1xuICAgICAgaWYgKCF3aW5kb3cuQ1NTLnN1cHBvcnRzKCdtaXgtYmxlbmQtbW9kZScsICdzb2Z0LWxpZ2h0JykpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1taXgtYmxlbmQtbW9kZScpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9nKGdiLmluLnUuaXNJRSk7XG5cbiAgICBpZiAoZ2IuaW4udS5pc0lFKSB7XG4gICAgICBcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3QtbWl4LWJsZW5kLW1vZGUnKVxuICAgICAgXG4gICAgfTtcblxuICB9XG5cbiAgbm90U2F2ZUltZygpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIHBjXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHtcblxuICAgICAgJCgoKT0+e1xuICAgICAgICAkKFwiaW1nXCIpLm9uKFwiY29udGV4dG1lbnVcIiwoKT0+e1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIHNwIGFuZHJvaWRcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHZhciB2ID0gZ2IuaW4udS5pc0FuZHJvaWRWZXJzaW9uKCk7XG5cbiAgICBpZiAodj09dW5kZWZpbmVkKSByZXR1cm47XG4gICAgaWYgKHY8NSkge1xuXG4gICAgICB2YXIgdGltZXI7XG4gICAgICAkKFwiaW1nXCIpLm9uKFwidG91Y2hzdGFydFwiLCgpPT57XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIGFsZXJ0KFwi55S75YOP44Gv5L+d5a2Y44Gn44GN44G+44Gb44KTXCIpXG4gICAgICAgIH0sNTAwKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KVxuICAgICAgJChcImltZ1wiKS5vbihcInRvdWNoZW5kXCIsKCk9PntcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSkgICAgICBcblxuICAgIH1cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9GdW5jLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogTWFpblxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgRGlzcGxheVRvcCBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlUb3AnO1xuaW1wb3J0IERpc3BsYXlUZXh0dXJlQmcgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5VGV4dHVyZUJnJztcbmltcG9ydCBEaXNwbGF5VGV4dHVyZU1vdmllIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVNb3ZpZSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICAvL3BhZ2Xjg5rjg7zjgrjliKXjga5JROOCkuWPluW+l1xuICAgIHZhciBwYWdlID0gJCgnYm9keScpLmRhdGEoJ2lkJyk7XG5cbiAgICB3aW5kb3cuY29uc29sZS5sb2coJ+ePvuWcqOOBruODmuODvOOCuElE44GvICcsIHBhZ2UpO1xuXG5cdFx0Ly9wYWdl44GuSUTjgZTjgajjgavnmbrngavjgZnjgovjgq/jg6njgrnjga7mjK/jgorliIbjgZFcbiAgICBzd2l0Y2ggKHBhZ2UpIHtcblxuICAgICAgY2FzZSAndG9wJzpcblxuICAgICAgICBuZXcgRGlzcGxheVRvcCgpO1xuXG4gICAgICAgIGJyZWFrO1xuXG5cdFx0XHRjYXNlICd0ZXh0dXJlQmcnOlxuXG5cdFx0XHRcdG5ldyBEaXNwbGF5VGV4dHVyZUJnKCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3RleHR1cmVNb3ZpZSc6XG5cblx0XHRcdFx0bmV3IERpc3BsYXlUZXh0dXJlTW92aWUoKTtcblxuXHRcdFx0XHRicmVhaztcblxuICAgIH1cblxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgXG4gIH1cblxuICBvblJlbmRlcigpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbigncmVhZHknLCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3BhZ2UvTWFpbi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IERpc3BsYXlcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBTY2VuZU1hbmdlciBmcm9tIFwiLi4vdmlzdWFsL1NjZW5lTWFuZ2VyXCI7XG5pbXBvcnQgU2NlbmUwMSBmcm9tIFwiLi4vdmlzdWFsL1NjZW5lMDFcIjtcbmltcG9ydCBTY2VuZTAyIGZyb20gXCIuLi92aXN1YWwvU2NlbmUwMlwiO1xuLy8gaW1wb3J0IE92ZXJTY2VuZSBmcm9tIFwiLi4vdmlzdWFsL292ZXJTY2VuZVwiO1xuXG4vLyBpbXBvcnQgV2ViR0xpbml0IGZyb20gJy4vV2ViR0xpbml0LmpzJztcblxuLy8gaW1wb3J0IENhbnZhcyBmcm9tIFwiLi4vdmlzdWFsL0NhbnZhc1wiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlUb3Age1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICAvLyBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBnYi5pbi5zY2VuZU1hbmdlciA9IG5ldyBTY2VuZU1hbmdlcigpO1xuXG4gICAgZ2IuaW4uc2NlbmVCb3hBID0gbmV3IFNjZW5lMDEoKTtcbiAgICBnYi5pbi5zY2VuZUJveEIgPSBuZXcgU2NlbmUwMigpO1xuICAgIC8vIGdiLmluLnNjZW5lT3ZlciA9IG5ldyBPdmVyU2NlbmUoKTtcblxuICAgIGdiLmluLnNjZW5lTWFuZ2VyLmFkZFNjZW5lKGdiLmluLnNjZW5lQm94QSk7XG4gICAgZ2IuaW4uc2NlbmVNYW5nZXIuYWRkU2NlbmUoZ2IuaW4uc2NlbmVCb3hCKTtcbiAgICAvLyBnYi5pbi5zY2VuZU1hbmdlci5hZGRTY2VuZShnYi5pbi5zY2VuZU92ZXIpO1xuXG4gICAgZ2IuaW4uc2NlbmVNYW5nZXIuZHJhdygpO1xuXG4gICAgLy8gZ2IuaW4uY2FudmFzID0gbmV3IENhbnZhcygpO1xuICAgIC8vIGdiLmluLmNhbnZhcy5pbml0KCk7XG5cblxuICB9XG5cbiAgc3RhdGljIHJ1bigpIHtcblxuXHRcdC8vIHdpbmRvdy5jb25zb2xlLmxvZygnc3RhdGljX1J1bicpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogU2NlbmVNYW5nZXJcbiAqIERhdGU6IDE3LzA1LzI5XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5JztcbmltcG9ydCBPdmVyU2NlbmUgZnJvbSBcIi4uL3Zpc3VhbC9vdmVyU2NlbmVcIjtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZU1hbmdlciBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKTtcblxuXHRcdHRoaXMuTlVNID0gMDsgLy8g54++5Zyo44Gu44K344O844Oz44Gu55Wq5Y+3XG5cdFx0dGhpcy5zY2VuZXMgPSBbXTsgLy8g44K344O844Oz44KS5qC857SN44GZ44KL6YWN5YiXXG4gICAgdGhpcy5mYWRlSW5PdXRUaW1lciA9IC0xOyAvL1xuXG5cdFx0dGhpcy5jYW52YXMgPSBudWxsO1xuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsOyAvLyBSZW5kZXJlclxuICAgIHRoaXMucmVuZGVyZXIwMiA9IG51bGw7IC8vIFJlbmRlcmVyMDJcblxuICAgIC8vIHRoaXMuJHN1YldyYXAgPSAkKCcjc3ViV3JhcCcpO1xuXG4gICAgdGhpcy5vdmVyc2NlbmUgPSBbXTsgLy8gb3ZlcnNjZW5lXG5cbiAgICB0aGlzLm92ZXJBbHBoYSA9IDA7XG4gICAgdGhpcy5tYWluT1AgPSAxLjA7XG5cbiAgICB0aGlzLmFkZFNjZW5lID0gdGhpcy5fYWRkU2NlbmUuYmluZCh0aGlzKTtcblxuXHRcdHRoaXMub25SZXNpemUgPSB0aGlzLl9vblJlc2l6ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2hlY2tOdW0gPSB0aGlzLl9jaGVja051bS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25LZXlEb3duID0gdGhpcy5fb25LZXlEb3duLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5mYWRlSW5PdXQgPSB0aGlzLl9mYWRlSW5PdXQuYmluZCh0aGlzKTtcblx0XHR0aGlzLmRyYXcgPSB0aGlzLl9kcmF3LmJpbmQodGhpcyk7XG5cblxuXHRcdHRoaXMuYWxwaGFSZXNldCA9IHRoaXMuX2FscGhhUmVzZXQuYmluZCh0aGlzKTtcblxuXHRcdHRoaXMua2V5bmFtZSA9IG51bGw7XG5cblxuXHRcdHRoaXMuaW5pdCgpOyAvLyDliJ3mnJ/ljJblh6bnkIblvozjgIHjgqTjg5njg7Pjg4jnmbvpjLJcblxuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMllxuICAgKi9cbiAgaW5pdCgpe1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUsIGZhbHNlICk7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemUsIGZhbHNlICk7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5vbktleURvd24sIHRydWUpO1xuXG4gICAgLy8gdGhpcy5fU2NlbmUgPSBuZXcgT3ZlclNjZW5lKCk7XG4gICAgdGhpcy5vdmVyc2NlbmUucHVzaChuZXcgT3ZlclNjZW5lKCkpO1xuXG5cdFx0Ly8gUmVuZGVyZXLkvZzmiJBcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2FudGlhbGlhczogdHJ1ZX0pO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyggd2luZG93LmRldmljZVBpeGVsUmF0aW8gKTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cdFx0dGhpcy5yZW5kZXJlci5zb3J0T2JqZWN0cyA9IGZhbHNlO1xuXHRcdHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xuXHRcdHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTaGFkb3dNYXA7XG5cdFx0dGhpcy5yZW5kZXJlci5kb21FbGVtZW50LmlkID0gXCJtYWluXCI7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQ7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICAvLyBSZW5kZXJlcjAy5L2c5oiQXG4gICAgdGhpcy5yZW5kZXJlcjAyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2FudGlhbGlhczogdHJ1ZSxhbHBoYTogdHJ1ZX0pO1xuICAgIC8vIHRoaXMucmVuZGVyZXIwMi5zZXRQaXhlbFJhdGlvKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyApO1xuICAgIHRoaXMucmVuZGVyZXIwMi5zZXRTaXplKCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0ICk7XG4gICAgdGhpcy5yZW5kZXJlcjAyLnNvcnRPYmplY3RzID0gZmFsc2U7XG4gICAgdGhpcy5yZW5kZXJlcjAyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLnJlbmRlcmVyMDIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTaGFkb3dNYXA7XG4gICAgdGhpcy5yZW5kZXJlcjAyLmRvbUVsZW1lbnQuaWQgPSBcInN1YlwiO1xuICAgIC8vIHRoaXMucmVuZGVyZXIwMi5zZXRDbGVhckNvbG9yKCAweDAwMDAwMCwgMCApO1xuICAgIHRoaXMuY2FudmFzMDIgPSB0aGlzLnJlbmRlcmVyMDIuZG9tRWxlbWVudDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzMDIpO1xuXG4gIH1cblxuXHQvKipcbiAgICog566h55CG44GX44Gf44GE44K344O844Oz44KS5qC857SN44GZ44KL6Zai5pWwXG5cdCAqIEBwYXJhbSBzY2VuZVxuXHQgKi9cblx0X2FkZFNjZW5lKHNjZW5lKSB7XG5cblx0XHR0aGlzLnNjZW5lcy5wdXNoKHNjZW5lKTtcblxuXHR9XG5cbiAgLyoqXG4gICAq44CA44Km44Kj44Oz44OJ44Km44Gu5bmF44GM5aSJ44KP44Gj44Gf44Go44GN44Gu5Yem55CGXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25SZXNpemUoKSB7XG5cbiAgXHQvLyDooajnpLrjgZfjgabjgYTjgovjgrfjg7zjg7PjgZTjgajjgavjgqvjg6Hjg6njga7jg6rjgrXjgqTjgrrjgpLotbDjgonjgZvjgotcbiAgICB0aGlzLnNjZW5lc1t0aGlzLk5VTV0uY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuc2NlbmVzW3RoaXMuTlVNXS5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXG4gICAgLy8gcmVuZGVyZXLjga/lhajjgabjga7jgrfjg7zjg7PjgaflhbHpgJpcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cbiAgICB0aGlzLm92ZXJzY2VuZVswXS5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5vdmVyc2NlbmVbMF0uY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgIHRoaXMucmVuZGVyZXIwMi5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9XG5cblx0LyoqXG4gICAqIOePvuWcqOOBruOCt+ODvOODs+eVquWPt+OBjOOAgeS4jemBqeWIh+OBquWApOOBq+OBquOCieOBquOBhOOCiOOBhuOBq+ODgeOCp+ODg+OCr1xuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2NoZWNrTnVtKCl7XG4gICAgd2luZG93LmNvbnNvbGUubG9nKHRoaXMua2V5bmFtZSk7XG5cdFx0aWYodGhpcy5OVU0gPDApIHtcblx0XHRcdHRoaXMuTlVNID0gdGhpcy5zY2VuZXMubGVuZ3RoLTE7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5OVU0gPj0gdGhpcy5zY2VuZXMubGVuZ3RoKSB7XG5cdFx0XHR0aGlzLk5VTSA9IDA7XG5cdFx0fVxuICB9XG5cblx0LyoqXG4gICAqIOKGkOKGkuOCreODvOOBp+OCt+ODvOODs+eVquWPt+OCkui2s+OBl+W8leOBjVxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X29uS2V5RG93bigpe1xuXHRcdGRvY3VtZW50Lm9ua2V5ZG93biA9IChlKSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHRoaXMua2V5bmFtZSA9IGUua2V5O1xuXG4gICAgICBpZih0aGlzLmtleW5hbWUgPT0gXCJBcnJvd1JpZ2h0XCIgfHwgdGhpcy5rZXluYW1lID09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgLy8ga2V5bmFtZSA9IGV2ZW50LmtleTtcblxuICAgICAgICB0aGlzLmZhZGVJbk91dFRpbWVyID0gMDtcbiAgICAgICAgLy9zY2VuZXNbMF0ubWVzaE1hdGVyaWFsLmNvbG9yID0gMHhmZmZmZmYqTWF0aC5yYW5kb20oKTtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5rZXluYW1lID09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZygnVXAnKTtcblxuICAgICAgICB0aGlzLm92ZXJBbHBoYSs9MC4wNTtcbiAgICAgICAgaWYodGhpcy5vdmVyQWxwaGEgPiAxKXtcbiAgICAgICAgICB0aGlzLm92ZXJBbHBoYSA9IDEuMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmtleW5hbWUgPT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgICB3aW5kb3cuY29uc29sZS5sb2coJ0Rvd24nKTtcblxuICAgICAgICB0aGlzLm92ZXJBbHBoYS09MC4wNTtcbiAgICAgICAgaWYodGhpcy5vdmVyQWxwaGEgPCAwKXtcbiAgICAgICAgICB0aGlzLm92ZXJBbHBoYSA9IDAuMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuY29uc29sZS5sb2coJ3RoaXMub3ZlckFscGhhJyx0aGlzLm92ZXJBbHBoYSk7XG4gICAgICB3aW5kb3cuY29uc29sZS5sb2coJChcIiNzdWJcIikpO1xuICAgICAgJChcIiNzdWJcIikuY3NzKHsgb3BhY2l0eTogdGhpcy5vdmVyQWxwaGEgfSk7XG5cdFx0XHR3aW5kb3cuY29uc29sZS5sb2coJ+ePvuWcqOOBruOCt+ODvOODs+eVquWPt+OBrycsdGhpcy5OVU0pO1xuXHRcdH1cblx0fVxuXG4gIC8qKlxuXHQgKiDjgrfjg7zjg7Pjg4Hjgqfjg7PjgrjmmYLjga7jg6zjgqTjg6Tjg7xcbiAgICogQHByaXZhdGVcbiAgICovXG5cdF9mYWRlSW5PdXQoKXtcbiAgICBpZih0aGlzLmZhZGVJbk91dFRpbWVyIDw9IE1hdGguUEkqMil7XG4gICAgICB0aGlzLmZhZGVJbk91dFRpbWVyICs9IDAuMDc7XG4gICAgICAvL3NjcmVlbi5zdHlsZS5vcGFjaXR5ID0gTWF0aC5zaW4oZmFkZUluT3V0VGltZXIpO1xuICAgICAgdmFyIG9wID0gTWF0aC5zaW4odGhpcy5mYWRlSW5PdXRUaW1lcik7XG5cbiAgICAgICQoXCIjZmFkZUluT3V0XCIpXG4gICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICBvcGFjaXR5OiBvcFxuICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIHRoaXMuZmFkZUluT3V0VGltZXIgPSAtMTtcbiAgICAgIG9wID0gMC4wO1xuICAgIH1cblxuICAgIGlmKG9wID4gMC45NSAmJiBvcCA8PSAxLjApXG4gICAge1xuICAgICAgc3dpdGNoICh0aGlzLmtleW5hbWUpIHtcbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zY2VuZXNbdGhpcy5OVU1dLkVORCk7XG4gICAgICAgICAgLy9zY2VuZXNbTlVNXS5lbmRFbmFibGVkKCk7XG4gICAgICAgICAgdGhpcy5OVU0rKztcbiAgICAgICAgICB0aGlzLmNoZWNrTnVtKCk7XG4gICAgICAgICAgdGhpcy5hbHBoYVJlc2V0KCk7XG4gICAgICAgICAgaWYodGhpcy5zY2VuZXMubGVuZ3RoID09IHRoaXMuTlVNKXtcbiAgICAgICAgICAgIHRoaXMuTlVNPTA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zY2VuZXNbdGhpcy5OVU1dLkVORCk7XG4gICAgICAgICAgdGhpcy5hbHBoYVJlc2V0KCk7XG4gICAgICAgICAgLy9zY2VuZXNbTlVNXS5lbmRFbmFibGVkKCk7XG4gICAgICAgICAgdGhpcy5OVU0tLTtcbiAgICAgICAgICB0aGlzLmNoZWNrTnVtKCk7XG5cbiAgICAgICAgICBpZih0aGlzLk5VTSA8MCl7XG4gICAgICAgICAgICB0aGlzLk5VTSA9IHRoaXMuc2NlbmVzLmxlbmd0aC0xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cdH1cblxuICBfYWxwaGFSZXNldCgpIHtcbiAgICB0aGlzLm92ZXJBbHBoYSA9IDAuMDtcbiAgICB0aGlzLm1haW5PUCA9IDEuMDtcblxuICAgICQoXCIjc3ViXCIpLmNzcyh7b3BhY2l0eTogdGhpcy5vdmVyQWxwaGF9KTtcbiAgfVxuXG5cblx0LyoqXG4gICAqIOacgOe1gueahOOBquaPj+WGmeWHpueQhuOBqOOAgeOCouODi+ODoeODvOOCt+ODp+ODs+mWouaVsOOCkuODr+ODs+ODleODrOODvOODoOOBlOOBqOOBq+Wun+ihjFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0X2RyYXcoKSB7XG4gICAgXG4gICAgLy8gd2luZG93LmNvbnNvbGUubG9nKHRoaXMub3ZlcnNjZW5lWzBdKTtcbiAgICBcblx0XHR0aGlzLnNjZW5lc1t0aGlzLk5VTV0udXBkYXRlKCk7XG5cdFx0Ly8gdGhpcy5vdmVyc2NlbmVbdGhpcy5OVU1dLnVwZGF0ZSgpO1xuXHRcdHRoaXMub3ZlcnNjZW5lWzBdLnVwZGF0ZSgpO1xuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmVzW3RoaXMuTlVNXS5zY2VuZSwgdGhpcy5zY2VuZXNbdGhpcy5OVU1dLmNhbWVyYSk7XG5cdFx0dGhpcy5yZW5kZXJlcjAyLnJlbmRlcih0aGlzLm92ZXJzY2VuZVswXS5zY2VuZSwgdGhpcy5vdmVyc2NlbmVbMF0uY2FtZXJhKTtcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcmF3LmJpbmQodGhpcykpO1xuXG4gICAgaWYodGhpcy5mYWRlSW5PdXRUaW1lciA+PSAwKVxuICAgIHtcbiAgICAgIHRoaXMuZmFkZUluT3V0KCk7XG4gICAgfVxuXG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1NjZW5lTWFuZ2VyLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRW50cnlcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxucmVxdWlyZSgnLi4vLi4vbGlicy9PcmJpdENvbnRyb2xzLmpzJyk7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cnkge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdH1cblxuXHQvKipcblx0ICog5Yid5pyf5YyWXG5cdCAqL1xuXHRpbml0KCl7XG5cblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0VudHJ5LmpzIiwiLyoqXG4gKiBAYXV0aG9yIHFpYW8gLyBodHRwczovL2dpdGh1Yi5jb20vcWlhb1xuICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbVxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cbiAqIEBhdXRob3IgV2VzdExhbmdsZXkgLyBodHRwOi8vZ2l0aHViLmNvbS9XZXN0TGFuZ2xleVxuICogQGF1dGhvciBlcmljaDY2NiAvIGh0dHA6Ly9lcmljaGFpbmVzLmNvbVxuICovXG5cbi8vIFRoaXMgc2V0IG9mIGNvbnRyb2xzIHBlcmZvcm1zIG9yYml0aW5nLCBkb2xseWluZyAoem9vbWluZyksIGFuZCBwYW5uaW5nLlxuLy8gVW5saWtlIFRyYWNrYmFsbENvbnRyb2xzLCBpdCBtYWludGFpbnMgdGhlIFwidXBcIiBkaXJlY3Rpb24gb2JqZWN0LnVwICgrWSBieSBkZWZhdWx0KS5cbi8vXG4vLyAgICBPcmJpdCAtIGxlZnQgbW91c2UgLyB0b3VjaDogb25lIGZpbmdlciBtb3ZlXG4vLyAgICBab29tIC0gbWlkZGxlIG1vdXNlLCBvciBtb3VzZXdoZWVsIC8gdG91Y2g6IHR3byBmaW5nZXIgc3ByZWFkIG9yIHNxdWlzaFxuLy8gICAgUGFuIC0gcmlnaHQgbW91c2UsIG9yIGFycm93IGtleXMgLyB0b3VjaDogdGhyZWUgZmludGVyIHN3aXBlXG5cblRIUkVFLk9yYml0Q29udHJvbHMgPSBmdW5jdGlvbiAoIG9iamVjdCwgZG9tRWxlbWVudCApIHtcblxuXHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblxuXHR0aGlzLmRvbUVsZW1lbnQgPSAoIGRvbUVsZW1lbnQgIT09IHVuZGVmaW5lZCApID8gZG9tRWxlbWVudCA6IGRvY3VtZW50O1xuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuXHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG5cdC8vIFwidGFyZ2V0XCIgc2V0cyB0aGUgbG9jYXRpb24gb2YgZm9jdXMsIHdoZXJlIHRoZSBvYmplY3Qgb3JiaXRzIGFyb3VuZFxuXHR0aGlzLnRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIGRvbGx5IGluIGFuZCBvdXQgKCBQZXJzcGVjdGl2ZUNhbWVyYSBvbmx5IClcblx0dGhpcy5taW5EaXN0YW5jZSA9IDA7XG5cdHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gem9vbSBpbiBhbmQgb3V0ICggT3J0aG9ncmFwaGljQ2FtZXJhIG9ubHkgKVxuXHR0aGlzLm1pblpvb20gPSAwO1xuXHR0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgdmVydGljYWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0Ly8gUmFuZ2UgaXMgMCB0byBNYXRoLlBJIHJhZGlhbnMuXG5cdHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcblx0dGhpcy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTsgLy8gcmFkaWFuc1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCBob3Jpem9udGFsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdC8vIElmIHNldCwgbXVzdCBiZSBhIHN1Yi1pbnRlcnZhbCBvZiB0aGUgaW50ZXJ2YWwgWyAtIE1hdGguUEksIE1hdGguUEkgXS5cblx0dGhpcy5taW5BemltdXRoQW5nbGUgPSAtIEluZmluaXR5OyAvLyByYWRpYW5zXG5cdHRoaXMubWF4QXppbXV0aEFuZ2xlID0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblxuXHQvLyBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgZGFtcGluZyAoaW5lcnRpYSlcblx0Ly8gSWYgZGFtcGluZyBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0dGhpcy5lbmFibGVEYW1waW5nID0gZmFsc2U7XG5cdHRoaXMuZGFtcGluZ0ZhY3RvciA9IDAuMjU7XG5cblx0Ly8gVGhpcyBvcHRpb24gYWN0dWFsbHkgZW5hYmxlcyBkb2xseWluZyBpbiBhbmQgb3V0OyBsZWZ0IGFzIFwiem9vbVwiIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgem9vbWluZ1xuXHR0aGlzLmVuYWJsZVpvb20gPSB0cnVlO1xuXHR0aGlzLnpvb21TcGVlZCA9IDEuMDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSByb3RhdGluZ1xuXHR0aGlzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XG5cdHRoaXMucm90YXRlU3BlZWQgPSAxLjA7XG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcGFubmluZ1xuXHR0aGlzLmVuYWJsZVBhbiA9IHRydWU7XG5cdHRoaXMua2V5UGFuU3BlZWQgPSA3LjA7XHQvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXG5cblx0Ly8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcblx0Ly8gSWYgYXV0by1yb3RhdGUgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdHRoaXMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xuXHR0aGlzLmF1dG9Sb3RhdGVTcGVlZCA9IDIuMDsgLy8gMzAgc2Vjb25kcyBwZXIgcm91bmQgd2hlbiBmcHMgaXMgNjBcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcblx0dGhpcy5lbmFibGVLZXlzID0gdHJ1ZTtcblxuXHQvLyBUaGUgZm91ciBhcnJvdyBrZXlzXG5cdHRoaXMua2V5cyA9IHsgTEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwIH07XG5cblx0Ly8gTW91c2UgYnV0dG9uc1xuXHR0aGlzLm1vdXNlQnV0dG9ucyA9IHsgT1JCSVQ6IFRIUkVFLk1PVVNFLkxFRlQsIFpPT006IFRIUkVFLk1PVVNFLk1JRERMRSwgUEFOOiBUSFJFRS5NT1VTRS5SSUdIVCB9O1xuXG5cdC8vIGZvciByZXNldFxuXHR0aGlzLnRhcmdldDAgPSB0aGlzLnRhcmdldC5jbG9uZSgpO1xuXHR0aGlzLnBvc2l0aW9uMCA9IHRoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XG5cdHRoaXMuem9vbTAgPSB0aGlzLm9iamVjdC56b29tO1xuXG5cdC8vXG5cdC8vIHB1YmxpYyBtZXRob2RzXG5cdC8vXG5cblx0dGhpcy5nZXRQb2xhckFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIHNwaGVyaWNhbC5waGk7XG5cblx0fTtcblxuXHR0aGlzLmdldEF6aW11dGhhbEFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIHNwaGVyaWNhbC50aGV0YTtcblxuXHR9O1xuXG5cdHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRzY29wZS50YXJnZXQuY29weSggc2NvcGUudGFyZ2V0MCApO1xuXHRcdHNjb3BlLm9iamVjdC5wb3NpdGlvbi5jb3B5KCBzY29wZS5wb3NpdGlvbjAgKTtcblx0XHRzY29wZS5vYmplY3Quem9vbSA9IHNjb3BlLnpvb20wO1xuXG5cdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0fTtcblxuXHQvLyB0aGlzIG1ldGhvZCBpcyBleHBvc2VkLCBidXQgcGVyaGFwcyBpdCB3b3VsZCBiZSBiZXR0ZXIgaWYgd2UgY2FuIG1ha2UgaXQgcHJpdmF0ZS4uLlxuXHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHQvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcblx0XHR2YXIgcXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKCBvYmplY3QudXAsIG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxLCAwICkgKTtcblx0XHR2YXIgcXVhdEludmVyc2UgPSBxdWF0LmNsb25lKCkuaW52ZXJzZSgpO1xuXG5cdFx0dmFyIGxhc3RQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdFx0dmFyIGxhc3RRdWF0ZXJuaW9uID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKCkge1xuXG5cdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cblx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgdG8gXCJ5LWF4aXMtaXMtdXBcIiBzcGFjZVxuXHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdCApO1xuXG5cdFx0XHQvLyBhbmdsZSBmcm9tIHotYXhpcyBhcm91bmQgeS1heGlzXG5cdFx0XHRzcGhlcmljYWwuc2V0RnJvbVZlY3RvcjMoIG9mZnNldCApO1xuXG5cdFx0XHRpZiAoIHNjb3BlLmF1dG9Sb3RhdGUgJiYgc3RhdGUgPT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdFx0cm90YXRlTGVmdCggZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNwaGVyaWNhbC50aGV0YSArPSBzcGhlcmljYWxEZWx0YS50aGV0YTtcblx0XHRcdHNwaGVyaWNhbC5waGkgKz0gc3BoZXJpY2FsRGVsdGEucGhpO1xuXG5cdFx0XHQvLyByZXN0cmljdCB0aGV0YSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRzcGhlcmljYWwudGhldGEgPSBNYXRoLm1heCggc2NvcGUubWluQXppbXV0aEFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4QXppbXV0aEFuZ2xlLCBzcGhlcmljYWwudGhldGEgKSApO1xuXG5cdFx0XHQvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnBoaSA9IE1hdGgubWF4KCBzY29wZS5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4UG9sYXJBbmdsZSwgc3BoZXJpY2FsLnBoaSApICk7XG5cblx0XHRcdHNwaGVyaWNhbC5tYWtlU2FmZSgpO1xuXG5cblx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgKj0gc2NhbGU7XG5cblx0XHRcdC8vIHJlc3RyaWN0IHJhZGl1cyB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRzcGhlcmljYWwucmFkaXVzID0gTWF0aC5tYXgoIHNjb3BlLm1pbkRpc3RhbmNlLCBNYXRoLm1pbiggc2NvcGUubWF4RGlzdGFuY2UsIHNwaGVyaWNhbC5yYWRpdXMgKSApO1xuXG5cdFx0XHQvLyBtb3ZlIHRhcmdldCB0byBwYW5uZWQgbG9jYXRpb25cblx0XHRcdHNjb3BlLnRhcmdldC5hZGQoIHBhbk9mZnNldCApO1xuXG5cdFx0XHRvZmZzZXQuc2V0RnJvbVNwaGVyaWNhbCggc3BoZXJpY2FsICk7XG5cblx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgYmFjayB0byBcImNhbWVyYS11cC12ZWN0b3ItaXMtdXBcIiBzcGFjZVxuXHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdEludmVyc2UgKTtcblxuXHRcdFx0cG9zaXRpb24uY29weSggc2NvcGUudGFyZ2V0ICkuYWRkKCBvZmZzZXQgKTtcblxuXHRcdFx0c2NvcGUub2JqZWN0Lmxvb2tBdCggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlRGFtcGluZyA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnBoaSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c2NhbGUgPSAxO1xuXHRcdFx0cGFuT2Zmc2V0LnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHQvLyB1cGRhdGUgY29uZGl0aW9uIGlzOlxuXHRcdFx0Ly8gbWluKGNhbWVyYSBkaXNwbGFjZW1lbnQsIGNhbWVyYSByb3RhdGlvbiBpbiByYWRpYW5zKV4yID4gRVBTXG5cdFx0XHQvLyB1c2luZyBzbWFsbC1hbmdsZSBhcHByb3hpbWF0aW9uIGNvcyh4LzIpID0gMSAtIHheMiAvIDhcblxuXHRcdFx0aWYgKCB6b29tQ2hhbmdlZCB8fFxuXHRcdFx0XHRsYXN0UG9zaXRpb24uZGlzdGFuY2VUb1NxdWFyZWQoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApID4gRVBTIHx8XG5cdFx0XHRcdDggKiAoIDEgLSBsYXN0UXVhdGVybmlvbi5kb3QoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICkgKSA+IEVQUyApIHtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0XHRcdGxhc3RQb3NpdGlvbi5jb3B5KCBzY29wZS5vYmplY3QucG9zaXRpb24gKTtcblx0XHRcdFx0bGFzdFF1YXRlcm5pb24uY29weSggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKTtcblx0XHRcdFx0em9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHR0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG5cdFx0Ly9zY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdkaXNwb3NlJyB9ICk7IC8vIHNob3VsZCB0aGlzIGJlIGFkZGVkIGhlcmU/XG5cblx0fTtcblxuXHQvL1xuXHQvLyBpbnRlcm5hbHNcblx0Ly9cblxuXHR2YXIgc2NvcGUgPSB0aGlzO1xuXG5cdHZhciBjaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcblx0dmFyIHN0YXJ0RXZlbnQgPSB7IHR5cGU6ICdzdGFydCcgfTtcblx0dmFyIGVuZEV2ZW50ID0geyB0eXBlOiAnZW5kJyB9O1xuXG5cdHZhciBTVEFURSA9IHsgTk9ORSA6IC0gMSwgUk9UQVRFIDogMCwgRE9MTFkgOiAxLCBQQU4gOiAyLCBUT1VDSF9ST1RBVEUgOiAzLCBUT1VDSF9ET0xMWSA6IDQsIFRPVUNIX1BBTiA6IDUgfTtcblxuXHR2YXIgc3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdHZhciBFUFMgPSAwLjAwMDAwMTtcblxuXHQvLyBjdXJyZW50IHBvc2l0aW9uIGluIHNwaGVyaWNhbCBjb29yZGluYXRlc1xuXHR2YXIgc3BoZXJpY2FsID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXHR2YXIgc3BoZXJpY2FsRGVsdGEgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cblx0dmFyIHNjYWxlID0gMTtcblx0dmFyIHBhbk9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdHZhciB6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdHZhciByb3RhdGVTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciByb3RhdGVFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcm90YXRlRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdHZhciBwYW5TdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBwYW5FbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcGFuRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdHZhciBkb2xseVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIGRvbGx5RW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIGRvbGx5RGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdGZ1bmN0aW9uIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkge1xuXG5cdFx0cmV0dXJuIDIgKiBNYXRoLlBJIC8gNjAgLyA2MCAqIHNjb3BlLmF1dG9Sb3RhdGVTcGVlZDtcblxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Wm9vbVNjYWxlKCkge1xuXG5cdFx0cmV0dXJuIE1hdGgucG93KCAwLjk1LCBzY29wZS56b29tU3BlZWQgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gcm90YXRlTGVmdCggYW5nbGUgKSB7XG5cblx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAtPSBhbmdsZTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gcm90YXRlVXAoIGFuZ2xlICkge1xuXG5cdFx0c3BoZXJpY2FsRGVsdGEucGhpIC09IGFuZ2xlO1xuXG5cdH1cblxuXHR2YXIgcGFuTGVmdCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbkxlZnQoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAwICk7IC8vIGdldCBYIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIC0gZGlzdGFuY2UgKTtcblxuXHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0dmFyIHBhblVwID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuVXAoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAxICk7IC8vIGdldCBZIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIGRpc3RhbmNlICk7XG5cblx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdC8vIGRlbHRhWCBhbmQgZGVsdGFZIGFyZSBpbiBwaXhlbHM7IHJpZ2h0IGFuZCBkb3duIGFyZSBwb3NpdGl2ZVxuXHR2YXIgcGFuID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW4gKCBkZWx0YVgsIGRlbHRhWSApIHtcblxuXHRcdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0Ly8gcGVyc3BlY3RpdmVcblx0XHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXHRcdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXHRcdFx0XHR2YXIgdGFyZ2V0RGlzdGFuY2UgPSBvZmZzZXQubGVuZ3RoKCk7XG5cblx0XHRcdFx0Ly8gaGFsZiBvZiB0aGUgZm92IGlzIGNlbnRlciB0byB0b3Agb2Ygc2NyZWVuXG5cdFx0XHRcdHRhcmdldERpc3RhbmNlICo9IE1hdGgudGFuKCAoIHNjb3BlLm9iamVjdC5mb3YgLyAyICkgKiBNYXRoLlBJIC8gMTgwLjAgKTtcblxuXHRcdFx0XHQvLyB3ZSBhY3R1YWxseSBkb24ndCB1c2Ugc2NyZWVuV2lkdGgsIHNpbmNlIHBlcnNwZWN0aXZlIGNhbWVyYSBpcyBmaXhlZCB0byBzY3JlZW4gaGVpZ2h0XG5cdFx0XHRcdHBhbkxlZnQoIDIgKiBkZWx0YVggKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdHBhblVwKCAyICogZGVsdGFZICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0Ly8gb3J0aG9ncmFwaGljXG5cdFx0XHRcdHBhbkxlZnQoIGRlbHRhWCAqICggc2NvcGUub2JqZWN0LnJpZ2h0IC0gc2NvcGUub2JqZWN0LmxlZnQgKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRXaWR0aCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRwYW5VcCggZGVsdGFZICogKCBzY29wZS5vYmplY3QudG9wIC0gc2NvcGUub2JqZWN0LmJvdHRvbSApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIGNhbWVyYSBuZWl0aGVyIG9ydGhvZ3JhcGhpYyBub3IgcGVyc3BlY3RpdmVcblx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicgKTtcblx0XHRcdFx0c2NvcGUuZW5hYmxlUGFuID0gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdGZ1bmN0aW9uIGRvbGx5SW4oIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRzY2FsZSAvPSBkb2xseVNjYWxlO1xuXG5cdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gKiBkb2xseVNjYWxlICkgKTtcblx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gZG9sbHlPdXQoIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRzY2FsZSAqPSBkb2xseVNjYWxlO1xuXG5cdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gLyBkb2xseVNjYWxlICkgKTtcblx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdH1cblxuXHR9XG5cblx0Ly9cblx0Ly8gZXZlbnQgY2FsbGJhY2tzIC0gdXBkYXRlIHRoZSBvYmplY3Qgc3RhdGVcblx0Ly9cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duRG9sbHknICk7XG5cblx0XHRkb2xseVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blBhbicgKTtcblxuXHRcdHBhblN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlRG9sbHknICk7XG5cblx0XHRkb2xseUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fVxuXG5cdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUGFuJyApO1xuXG5cdFx0cGFuRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVVwJyApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVdoZWVsJyApO1xuXG5cdFx0aWYgKCBldmVudC5kZWx0YVkgPCAwICkge1xuXG5cdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmRlbHRhWSA+IDAgKSB7XG5cblx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlS2V5RG93bicgKTtcblxuXHRcdHN3aXRjaCAoIGV2ZW50LmtleUNvZGUgKSB7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5VUDpcblx0XHRcdFx0cGFuKCAwLCBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5CT1RUT006XG5cdFx0XHRcdHBhbiggMCwgLSBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxuXHRcdFx0XHRwYW4oIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLlJJR0hUOlxuXHRcdFx0XHRwYW4oIC0gc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0Um90YXRlJyApO1xuXG5cdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnREb2xseScgKTtcblxuXHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcblx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cblx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRkb2xseVN0YXJ0LnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFBhbicgKTtcblxuXHRcdHBhblN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVSb3RhdGUnICk7XG5cblx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuXHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuXHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVEb2xseScgKTtcblxuXHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcblx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cblx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRkb2xseUVuZC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH1cblxuXHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVBhbicgKTtcblxuXHRcdHBhbkVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cblx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaEVuZCcgKTtcblxuXHR9XG5cblx0Ly9cblx0Ly8gZXZlbnQgaGFuZGxlcnMgLSBGU006IGxpc3RlbiBmb3IgZXZlbnRzIGFuZCByZXNldCBzdGF0ZVxuXHQvL1xuXG5cdGZ1bmN0aW9uIG9uTW91c2VEb3duKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5PUkJJVCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuUk9UQVRFO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuWk9PTSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuRE9MTFk7XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5QQU4gKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLlBBTjtcblxuXHRcdH1cblxuXHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKCBzdGF0ZSA9PT0gU1RBVEUuUk9UQVRFICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5ET0xMWSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuUEFOICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZVVwKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRoYW5kbGVNb3VzZVVwKCBldmVudCApO1xuXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgfHwgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSAmJiBzdGF0ZSAhPT0gU1RBVEUuUk9UQVRFICkgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0aGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKTtcblxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTsgLy8gbm90IHN1cmUgd2h5IHRoZXNlIGFyZSBoZXJlLi4uXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25LZXlEb3duKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlS2V5cyA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGhhbmRsZUtleURvd24oIGV2ZW50ICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hTdGFydCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdGNhc2UgMTpcdC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ST1RBVEU7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcdC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnREb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX0RPTExZO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1BBTjtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1JPVEFURSApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6IC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ET0xMWSApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUEFOICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoRW5kKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRoYW5kbGVUb3VjaEVuZCggZXZlbnQgKTtcblxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uQ29udGV4dE1lbnUoIGV2ZW50ICkge1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHR9XG5cblx0Ly9cblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlICk7XG5cblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApO1xuXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG5cdC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxuXG5cdHRoaXMudXBkYXRlKCk7XG5cbn07XG5cblRIUkVFLk9yYml0Q29udHJvbHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSApO1xuVEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUSFJFRS5PcmJpdENvbnRyb2xzO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggVEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUsIHtcblxuXHRjZW50ZXI6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuY2VudGVyIGhhcyBiZWVuIHJlbmFtZWQgdG8gLnRhcmdldCcgKTtcblx0XHRcdHJldHVybiB0aGlzLnRhcmdldDtcblxuXHRcdH1cblxuXHR9LFxuXG5cdC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcblxuXHRub1pvb206IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlWm9vbTtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVab29tID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdG5vUm90YXRlOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVSb3RhdGU7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZVJvdGF0ZSA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRub1Bhbjoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUGFuO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVQYW4gPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0bm9LZXlzOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZUtleXM7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlS2V5cyA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRzdGF0aWNNb3ZpbmcgOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZURhbXBpbmc7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlRGFtcGluZyA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRkeW5hbWljRGFtcGluZ0ZhY3RvciA6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuIHRoaXMuZGFtcGluZ0ZhY3RvcjtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmRhbXBpbmdGYWN0b3IgPSB2YWx1ZTtcblxuXHRcdH1cblxuXHR9XG5cbn0gKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9saWJzL09yYml0Q29udHJvbHMuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBTY2VuZTAyXG4gKiBEYXRlOiAxNy8wNi8xNVxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb3ZlclNjZW5lIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgIHRoaXMuc3RlcCA9IDA7XG4gICAgdGhpcy5rbm90ID0gbnVsbDtcblxuICAgIC8vXG5cdFx0dGhpcy5yYWRpdXMgPSA0MDtcblx0XHR0aGlzLnR1YmUgPSAyOC4yO1xuXHRcdHRoaXMucmFkaWFsU2VnbWVudHMgPSA2MDA7XG5cdFx0dGhpcy50dWJ1bGFyU2VnbWVudHMgPSAxMjtcblx0XHR0aGlzLnAgPSA1O1xuXHRcdHRoaXMucSA9IDQ7XG5cdFx0dGhpcy5oZWlnaHRTY2FsZSA9IDQ7XG5cdFx0dGhpcy5hc1BhcnRpY2xlcyA9IHRydWU7XG5cdFx0dGhpcy5yb3RhdGUgPSB0cnVlO1xuXG4gICAgdGhpcy5jb250cm9scyA9IHRoaXMuX2NvbnRyb2xzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTY2VuZSA9IHRoaXMuX2NyZWF0ZVNjZW5lLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLl91cGRhdGUuYmluZCh0aGlzKTtcblxuXHRcdC8vIHRoaXMuY29udHJvbHMucmVkcmF3KCk7XG5cdFx0Ly8gdGhpcy5jb250cm9scygpO1xuXG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuXG4gIH1cblxuICBfY29udHJvbHMoKXtcblx0XHQvLyB0aGlzLnJlZHJhdyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdC8vIHJlbW92ZSB0aGUgb2xkIHBsYW5lXG5cdFx0XHQvLyBpZiAodGhpcy5rbm90KSB0aGlzLnNjZW5lLnJlbW92ZSh0aGlzLmtub3QpO1xuXHRcdFx0Ly8gLy8gY3JlYXRlIGEgbmV3IG9uZVxuXHRcdFx0Ly8gbGV0IGdlb20gPSBuZXcgVEhSRUUuVG9ydXNLbm90R2VvbWV0cnkodGhpcy5jb250cm9scy5yYWRpdXMsIHRoaXMuY29udHJvbHMudHViZSwgTWF0aC5yb3VuZCh0aGlzLmNvbnRyb2xzLnJhZGlhbFNlZ21lbnRzKSwgTWF0aC5yb3VuZCh0aGlzLmNvbnRyb2xzLnR1YnVsYXJTZWdtZW50cyksIE1hdGgucm91bmQodGhpcy5jb250cm9scy5wKSwgTWF0aC5yb3VuZCh0aGlzLmNvbnRyb2xzLnEpLCB0aGlzLmNvbnRyb2xzLmhlaWdodFNjYWxlKTtcbiAgICAgIC8vXG5cdFx0XHQvLyBpZiAodGhpcy5jb250cm9scy5hc1BhcnRpY2xlcykge1xuXHRcdFx0Ly8gXHR0aGlzLmtub3QgPSB0aGlzLmNyZWF0ZVBhcnRpY2xlU3lzdGVtKGdlb20pO1xuXHRcdFx0Ly8gfSBlbHNlIHtcblx0XHRcdC8vIFx0dGhpcy5rbm90ID0gdGhpcy5jcmVhdGVNZXNoKGdlb20pO1xuXHRcdFx0Ly8gfVxuXG5cdFx0XHQvLyBhZGQgaXQgdG8gdGhlIHNjZW5lLlxuXHRcdFx0Ly8gdGhpcy5zY2VuZS5hZGQodGhpcy5rbm90KTtcblx0XHQvLyB9LmJpbmQodGhpcyk7XG4gIH1cblxuXHQvLyBmcm9tIFRIUkVFLmpzIGV4YW1wbGVzXG5cdGdlbmVyYXRlU3ByaXRlKCkge1xuXG5cdFx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRcdGNhbnZhcy53aWR0aCA9IDE2O1xuXHRcdGNhbnZhcy5oZWlnaHQgPSAxNjtcblxuXHRcdHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cdFx0dmFyIGdyYWRpZW50ID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudChjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiwgMCwgY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIsIGNhbnZhcy53aWR0aCAvIDIpO1xuXHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsMjU1LDI1NSwxKScpO1xuXHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjIsICdyZ2JhKDAsMjU1LDI1NSwxKScpO1xuXHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjQsICdyZ2JhKDAsMCw2NCwxKScpO1xuXHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAncmdiYSgwLDAsMCwxKScpO1xuXG5cdFx0Y29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcblx0XHRjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG5cblx0XHR2YXIgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKGNhbnZhcyk7XG5cdFx0dGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cdFx0cmV0dXJuIHRleHR1cmU7XG5cblx0fVxuXG5cdGNyZWF0ZVBhcnRpY2xlU3lzdGVtKGdlb20pIHtcblx0XHR2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuUGFydGljbGVCYXNpY01hdGVyaWFsKHtcblx0XHRcdGNvbG9yOiAweGZmZmZmZixcblx0XHRcdHNpemU6IDMsXG5cdFx0XHR0cmFuc3BhcmVudDogdHJ1ZSxcblx0XHRcdGJsZW5kaW5nOiBUSFJFRS5BZGRpdGl2ZUJsZW5kaW5nLFxuXHRcdFx0bWFwOiB0aGlzLmdlbmVyYXRlU3ByaXRlKClcblx0XHR9KTtcblxuXHRcdHZhciBzeXN0ZW0gPSBuZXcgVEhSRUUuUGFydGljbGVTeXN0ZW0oZ2VvbSwgbWF0ZXJpYWwpO1xuXHRcdHN5c3RlbS5zb3J0UGFydGljbGVzID0gdHJ1ZTtcblx0XHRyZXR1cm4gc3lzdGVtO1xuXHR9XG5cblx0Y3JlYXRlTWVzaChnZW9tKSB7XG5cblx0XHQvLyBhc3NpZ24gdHdvIG1hdGVyaWFsc1xuXHRcdHZhciBtZXNoTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaE5vcm1hbE1hdGVyaWFsKHt9KTtcblx0XHRtZXNoTWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XG5cblx0XHQvLyBjcmVhdGUgYSBtdWx0aW1hdGVyaWFsXG5cdFx0dmFyIG1lc2ggPSBUSFJFRS5TY2VuZVV0aWxzLmNyZWF0ZU11bHRpTWF0ZXJpYWxPYmplY3QoZ2VvbSwgW21lc2hNYXRlcmlhbF0pO1xuXG5cdFx0cmV0dXJuIG1lc2g7XG5cdH1cblxuXHQvLyByZW5kZXIoKSB7XG5cdC8vIFx0c3RhdHMudXBkYXRlKCk7XG5cdC8vXG5cdC8vIFx0aWYgKGNvbnRyb2xzLnJvdGF0ZSkge1xuXHQvLyBcdFx0a25vdC5yb3RhdGlvbi55ID0gc3RlcCArPSAwLjAxO1xuXHQvLyBcdH1cblx0Ly9cblx0Ly8gXHQvLyByZW5kZXIgdXNpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG5cdC8vIFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG5cdC8vIFx0d2ViR0xSZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG5cdC8vIH1cblxuXG4gIC8qKlxuICAgKiDjgrfjg7zjg7PjgpLkvZzmiJDjgILjgqrjg5bjgrjjgqfjgq/jg4jjgpLmoLzntI1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpOyAvL+OCt+ODvOODs+S9nOaIkFxuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHdpbmRvdy5pbm5lcldpZHRoL3dpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi54ID0gLTMwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSA0MDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNTA7XG5cdFx0dGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDEwLCAwLCAwKSk7XG5cbiAgICAvLyB0aGlzLmdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDUwLDUwLDUwKTtcbiAgICAvLyB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKDB4ODg4ODg4KTtcbiAgICAvL1xuICAgIC8vIHRoaXMuQm94ID0gbmV3IFRIUkVFLk1lc2goXG4gICAgLy8gICAgIHRoaXMuZ2VvbWV0cnksXG4gICAgLy8gICAgIHRoaXMubWF0ZXJpYWxcbiAgICAvLyApO1xuICAgIC8vIHRoaXMuc2NlbmUuYWRkKHRoaXMuQm94KTtcblxuICAgIGlmICh0aGlzLmtub3QpIHRoaXMuc2NlbmUucmVtb3ZlKHRoaXMua25vdCk7XG4gICAgLy8gY3JlYXRlIGEgbmV3IG9uZVxuICAgIGxldCBnZW9tID0gbmV3IFRIUkVFLlRvcnVzS25vdEdlb21ldHJ5KHRoaXMucmFkaXVzLCB0aGlzLnR1YmUsIE1hdGgucm91bmQodGhpcy5yYWRpYWxTZWdtZW50cyksIE1hdGgucm91bmQodGhpcy50dWJ1bGFyU2VnbWVudHMpLCBNYXRoLnJvdW5kKHRoaXMucCksIE1hdGgucm91bmQodGhpcy5xKSwgdGhpcy5oZWlnaHRTY2FsZSk7XG5cbiAgICBpZiAodGhpcy5hc1BhcnRpY2xlcykge1xuICAgICAgdGhpcy5rbm90ID0gdGhpcy5jcmVhdGVQYXJ0aWNsZVN5c3RlbShnZW9tKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5rbm90ID0gdGhpcy5jcmVhdGVNZXNoKGdlb20pO1xuICAgIH1cblxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMua25vdCk7XG5cblxuICB9XG5cblxuICAvKipcbiAgICogdXBkYXRl6Zai5pWwXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXBkYXRlKCl7XG5cblx0XHRpZiAodGhpcy5yb3RhdGUpIHtcblx0XHRcdHRoaXMua25vdC5yb3RhdGlvbi55ID0gdGhpcy5zdGVwICs9IDAuMDAxO1xuXHRcdH1cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9vdmVyU2NlbmUuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBTY2VuZTAxXG4gKiBEYXRlOiAxNy8wNS8zMVxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUwMSBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2NlbmUgPSBudWxsO1xuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICAvLyB0aGlzLkJveCA9IG51bGw7XG4gICAgdGhpcy5jdWJlID0gbnVsbDtcbiAgICB0aGlzLnRpbWVyID0gMDtcblxuICAgIHRoaXMuZ3JvdXAgPSBudWxsO1xuXG4gICAgdGhpcy5yZW5kZXIgPSB0aGlzLl9yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY3JlYXRlU2NlbmUgPSB0aGlzLl9jcmVhdGVTY2VuZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlID0gdGhpcy5fdXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIOOCt+ODvOODs+OCkuS9nOaIkOOAguOCquODluOCuOOCp+OCr+ODiOOCkuagvOe0jVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NyZWF0ZVNjZW5lKCl7XG5cbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7IC8v44K344O844Oz5L2c5oiQXG5cbiAgICB0aGlzLmdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgY29uc3Qgc3RlcCA9MzA7XG4gICAgY29uc3QgbnVtID0gMTA7XG4gICAgZm9yIChsZXQgeCA9IDE7IHggPD0gbnVtOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSAxOyB5IDw9IG51bTsgeSsrKSB7XG4gICAgICAgIGZvciAobGV0IHogPSAxOyB6IDw9IG51bTsgeiArKykge1xuICAgICAgICAgIHRoaXMuY3ViZSA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgICAgICAgICBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDEwLCAxMCksXG4gICAgICAgICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKDB4ZmZmZmZmKVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jdWJlLnBvc2l0aW9uLnNldChcbiAgICAgICAgICAgICAgKHggLSBudW0gLyAyKSAqIHN0ZXAsXG4gICAgICAgICAgICAgICh5IC0gbnVtIC8gMikgKiBzdGVwLFxuICAgICAgICAgICAgICAoeiAtIG51bSAvIDIpICogc3RlcFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5ncm91cC5hZGQodGhpcy5jdWJlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmdyb3VwKTtcblxuICAgIGNvbnN0IHBvaW50TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZik7XG4gICAgcG9pbnRMaWdodC5wb3NpdGlvbi5zZXQoMjAwLCAyMDAsIDIwMCk7XG4gICAgdGhpcy5zY2VuZS5hZGQocG9pbnRMaWdodCk7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgd2luZG93LmlubmVyV2lkdGgvd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxMDAwO1xuXG4gIH1cblxuXG4gIF9yZW5kZXIoKSB7XG4gICAgdGhpcy5ncm91cC5yb3RhdGlvbi54ICs9IDAuMDE7XG4gICAgdGhpcy5ncm91cC5yb3RhdGlvbi55ICs9IDAuMDE7XG4gICAgdGhpcy5ncm91cC5yb3RhdGlvbi56ICs9IDAuMDE7XG4gICAgdGhpcy5ncm91cC50cmF2ZXJzZShmdW5jdGlvbihvYmopIHtcbiAgICAgIGlmIChvYmogIT0gdGhpcy5ncm91cCkge1xuICAgICAgICBvYmoucm90YXRpb24ueCArPSAwLjAxO1xuICAgICAgICBvYmoucm90YXRpb24ueSArPSAwLjAxO1xuICAgICAgICBvYmoucm90YXRpb24ueiArPSAwLjAxO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgLy8gc3RhdHMudXBkYXRlKCk7XG4gICAgLy8gcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICB9XG5cblxuICAvKipcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91cGRhdGUoKXtcblxuICAgIC8vIHdpbmRvdy5jb25zb2xlLmxvZygndXBkYXRlMDEnKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvU2NlbmUwMS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFNjZW5lMDJcbiAqIERhdGU6IDE3LzA1LzMxXG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5JztcbmltcG9ydCBhdWRpbyBmcm9tIFwiLi9VdGlscy9hdWRpb1wiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lMDIgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcbiAgICB0aGlzLmNhbWVyYSA9IG51bGw7XG4gICAgdGhpcy5Cb3ggPSBudWxsO1xuICAgIHRoaXMudGltZXIgPSAwO1xuXG4gICAgdGhpcy5lbFZvbHVtZSA9IG51bGw7XG4gICAgdGhpcy5lbFZvbHVtZVZhbCA9IG51bGw7XG5cbiAgICAvLyB0aGlzLmF1ZGlvID0gdGhpcy5fYXVkaW8uYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY3JlYXRlU2NlbmUgPSB0aGlzLl9jcmVhdGVTY2VuZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlID0gdGhpcy5fdXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG5cbiAgICB0aGlzLmF1ZGlvSW5pdCA9IG5ldyBhdWRpbygpO1xuICAgIC8vXG4gICAgLy8gdGhpcy5hYWEgPSB0aGlzLmF1ZGlvSW5pdC5leGVjdXRlKCk7XG4gICAgLy8gd2luZG93LmNvbnNvbGUubG9nKHRoaXMuYWFhKTtcbiAgICBcbiAgICAvLyB0aGlzLmFhYSA9IHRoaXMuYXVkaW9Jbml0LmVsVm9sdW1lVmFsKCk7XG4gICAgLy8gd2luZG93LmNvbnNvbGUubG9nKHRoaXMuYXVkaW9Jbml0KTtcblxuICAgIC8vIHRoaXMuYXVkaW9Jbml0KCk7IC8vYXVkaW9Jbml05a6f6KGMXG5cbiAgfVxuXG5cbiAgYXVkaW9Jbml0KCl7XG5cbiAgICBsZXQgY3R4LCBhbmFseXNlciwgZnJlcXVlbmNpZXMsIGdldEJ5dGVGcmVxdWVuY3lEYXRhQXZlcmFnZSwgZXhlY3V0ZTtcblxuICAgIHdpbmRvdy5BdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG4gICAgY3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG4gICAgYW5hbHlzZXIgPSBjdHguY3JlYXRlQW5hbHlzZXIoKTtcbiAgICBmcmVxdWVuY2llcyA9IG5ldyBVaW50OEFycmF5KGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50KTtcblxuICAgIGdldEJ5dGVGcmVxdWVuY3lEYXRhQXZlcmFnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZnJlcXVlbmNpZXMpO1xuICAgICAgcmV0dXJuIGZyZXF1ZW5jaWVzLnJlZHVjZShmdW5jdGlvbihwcmV2aW91cywgY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzICsgY3VycmVudDtcbiAgICAgICAgICB9KSAvIGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50O1xuICAgIH07XG5cbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7YXVkaW86IHRydWV9KVxuICAgICAgICAudGhlbigoc3RyZWFtKSA9PiB7XG4gICAgICAgICAgd2luZG93LmhhY2tGb3JNb3p6aWxhID0gc3RyZWFtO1xuICAgICAgICAgIGN0eC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShzdHJlYW0pXG4gICAgICAgICAgLy8gQW5hbHlzZXJOb2Rl44Gr5o6l57aaXG4gICAgICAgICAgICAgIC5jb25uZWN0KGFuYWx5c2VyKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB3aW5kb3cuY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcblxuICAgIC8vIOmfs+mHj+OCkuihqOekuuOBmeOCi+imgee0oFxuICAgIHRoaXMuZWxWb2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9sdW1lJyk7XG5cbiAgICAvLyDlj6/og73jgarpmZDjgorpq5jjgYTjg5Xjg6zjg7zjg6Djg6zjg7zjg4jjgafpn7Pph4/jgpLlj5blvpfjgZfjgIHooajnpLrjgpLmm7TmlrDjgZnjgotcbiAgICBleGVjdXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmVsVm9sdW1lLmlubmVySFRNTCA9IE1hdGguZmxvb3IoZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlKCkpO1xuICAgICAgdGhpcy5lbFZvbHVtZVZhbCA9IE1hdGguZmxvb3IoZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlKCkpO1xuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZXhlY3V0ZSk7XG4gICAgfS5iaW5kKHRoaXMpO1xuXG4gICAgLy9cbiAgICBleGVjdXRlKCk7XG4gIH1cblxuICAvKipcbiAgICog44K344O844Oz44KS5L2c5oiQ44CC44Kq44OW44K444Kn44Kv44OI44KS5qC857SNXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY3JlYXRlU2NlbmUoKXtcblxuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTsgLy/jgrfjg7zjg7PkvZzmiJBcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aC93aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMDApO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxMDAwO1xuXG4gICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg1MCw1MCw1MCk7XG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCgweDg4ODg4OCk7XG5cbiAgICB0aGlzLkJveCA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgICB0aGlzLmdlb21ldHJ5LFxuICAgICAgICB0aGlzLm1hdGVyaWFsXG4gICAgKTtcblxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuQm94KTtcblxuICB9XG5cblxuICAvKipcbiAgICogdXBkYXRl6Zai5pWwXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXBkYXRlKCl7XG5cbiAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hdWRpb0luaXQuZXhlY3V0ZSgpKTtcblxuICAgIHRoaXMudGltZXIgKz0gMC4xO1xuICAgIHRoaXMuQm94LnBvc2l0aW9uLnkgPSA1MCAqIE1hdGguc2luKHRoaXMudGltZXIpO1xuICAgIC8vIHRoaXMuQm94LnBvc2l0aW9uLnkgPSB0aGlzLmVsVm9sdW1lVmFsICogTWF0aC5zaW4odGhpcy50aW1lcik7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvU2NlbmUwMi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IGF1ZGlvXG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYXVkaW8ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5lbFZvbHVtZSA9IG51bGw7XG4gICAgdGhpcy5lbFZvbHVtZVZhbCA9IG51bGw7XG5cbiAgICB0aGlzLmdldEJ5dGVGcmVxdWVuY3lEYXRhQXZlcmFnZSA9IG51bGw7XG5cbiAgICB0aGlzLmV4ZWN1dGUgPSB0aGlzLl9leGVjdXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmdldFZhbCA9IHRoaXMuX2dldFZhbC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5hdWRpb0luaXQoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMllxuICAgKi9cbiAgYXVkaW9Jbml0KCl7XG5cbiAgICBsZXQgY3R4LCBhbmFseXNlciwgZnJlcXVlbmNpZXM7XG5cbiAgICB3aW5kb3cuQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuICAgIGN0eCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcblxuICAgIGFuYWx5c2VyID0gY3R4LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgZnJlcXVlbmNpZXMgPSBuZXcgVWludDhBcnJheShhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudCk7XG5cbiAgICB0aGlzLmdldEJ5dGVGcmVxdWVuY3lEYXRhQXZlcmFnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgYW5hbHlzZXIuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEoZnJlcXVlbmNpZXMpO1xuICAgICAgcmV0dXJuIGZyZXF1ZW5jaWVzLnJlZHVjZShmdW5jdGlvbihwcmV2aW91cywgY3VycmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzICsgY3VycmVudDtcbiAgICAgICAgICB9KSAvIGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50O1xuICAgIH07XG5cbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7YXVkaW86IHRydWV9KVxuICAgICAgICAudGhlbigoc3RyZWFtKSA9PiB7XG4gICAgICAgICAgd2luZG93LmhhY2tGb3JNb3p6aWxhID0gc3RyZWFtO1xuICAgICAgICAgIGN0eC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShzdHJlYW0pXG4gICAgICAgICAgLy8gQW5hbHlzZXJOb2Rl44Gr5o6l57aaXG4gICAgICAgICAgICAgIC5jb25uZWN0KGFuYWx5c2VyKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB3aW5kb3cuY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9KTtcblxuICAgIHRoaXMuZXhlY3V0ZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9leGVjdXRlKCl7XG4gICAgLy8g6Z+z6YeP44KS6KGo56S644GZ44KL6KaB57SgXG4gICAgdGhpcy5lbFZvbHVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2x1bWUnKTtcblxuICAgIC8vIOWPr+iDveOBqumZkOOCiumrmOOBhOODleODrOODvOODoOODrOODvOODiOOBp+mfs+mHj+OCkuWPluW+l+OBl+OAgeihqOekuuOCkuabtOaWsOOBmeOCi1xuICAgIHRoaXMuZWxWb2x1bWUuaW5uZXJIVE1MID0gTWF0aC5mbG9vcih0aGlzLmdldEJ5dGVGcmVxdWVuY3lEYXRhQXZlcmFnZSgpKTtcbiAgICB0aGlzLmVsVm9sdW1lVmFsID0gTWF0aC5mbG9vcih0aGlzLmdldEJ5dGVGcmVxdWVuY3lEYXRhQXZlcmFnZSgpKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmV4ZWN1dGUpO1xuXG4gICAgcmV0dXJuKHRoaXMuZWxWb2x1bWVWYWwpO1xuICB9XG5cbiAgX2dldFZhbCgpe1xuXG4gICAgcmV0dXJuKHRoaXMuZWxWb2x1bWVWYWwpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1V0aWxzL2F1ZGlvLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRGlzcGxheVxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IFRleHR1cmVCZyBmcm9tIFwiLi4vdmlzdWFsL1RleHR1cmVCZ1wiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlUb3Age1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICAvLyBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBnYi5pbi50ZXh0dXJlQmcgPSBuZXcgVGV4dHVyZUJnKCk7XG5cbiAgICBnYi5pbi50ZXh0dXJlQmcuaW5pdCgpO1xuXG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblx0XHQvLyB3aW5kb3cuY29uc29sZS5sb2coJ3N0YXRpY19SdW4nKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVCZy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFRleHR1cmVCZ1xuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IEVudHJ5IGZyb20gJy4uL0NvcmUvRW50cnknO1xuaW1wb3J0IFBsYW5lIGZyb20gJy4vUGxhbmUnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVCZyBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYmdsLW91dHB1dCcpO1xuXG4gICAgdGhpcy53aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcblxuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcblxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhID0gdGhpcy5fY3JlYXRlQ2FtZXJhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlciA9IHRoaXMuX2NyZWF0ZVJlbmRlcmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTY2VuZSA9IHRoaXMuX2NyZWF0ZVNjZW5lLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5fb25SZXNpemUuYmluZCh0aGlzKTtcblx0XHR0aGlzLlVwZGF0ZSA9IHRoaXMuX1VwZGF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMubG9hZFRleHR1cmUgPSB0aGlzLl9sb2FkVGV4dHVyZS5iaW5kKHRoaXMpO1xuXG5cdFx0dGhpcy5wbGFuZSA9IG5ldyBQbGFuZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICog5Yid5pyf5YyWXG4gICAqL1xuICBpbml0KCl7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpO1xuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKCk7XG5cblx0XHR0aGlzLlVwZGF0ZSgpO1xuXG5cdFx0dGhpcy5sb2FkVGV4dHVyZSgpO1xuICB9XG5cblxuICAvKipcbiAgICog44Kr44Oh44Op5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlQ2FtZXJhKCl7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxMDA7XG5cbiAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwwLDApKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvOS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVJlbmRlcmVyKCl7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgYWxwaGEgICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICBhbnRpYWxpYXMgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIHN0ZW5jaWwgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgZGVwdGggICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIHByZW11bHRpcGxpZWRBbHBoYSA6IGZhbHNlLFxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhc1xuXHRcdH0pO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmLCAwLjApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDjgrfjg7zjg7PkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICog55S75YOP44KS44Ot44O844OJXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfbG9hZFRleHR1cmUoKXtcblxuXHRcdHRoaXMucGxhbmUubG9hZFRleHR1cmUoJy4uLy4uLy4uLy4uL2Fzc2V0cy9yZXNvdXJjZS9pbWcvc2hpYnV5YTAxLmpwZycsICgpID0+IHtcblx0XHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMucGxhbmUubWVzaCk7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9uUmVzaXplKCk7XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHR0aGlzLm9uUmVzaXplKCk7XG5cdFx0XHR0aGlzLlVwZGF0ZSgpO1xuXHRcdH0pO1xuXG5cdH1cblxuICAvKipcbiAgICog5pu05pawXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfVXBkYXRlKCkge1xuXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG4gICAgICB0aGlzLlVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDnlLvpnaLjg6rjgrXjgqTjgrrjgqTjg5njg7Pjg4hcbiAgICovXG4gIF9vblJlc2l6ZSgpIHtcblx0XHR0aGlzLmNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cdFx0dGhpcy5wbGFuZS5tZXNoLm1hdGVyaWFsLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcblxuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuXG5cdHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1RleHR1cmVCZy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFBsYW5lXG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmUgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cblx0XHR0aGlzLnVuaWZvcm1zID0ge307XG5cdFx0dGhpcy50ZXh0dXJlID0gbnVsbDtcblx0XHR0aGlzLm1lc2ggPSBudWxsO1xuXG5cdFx0dGhpcy5sb2FkVGV4dHVyZSA9IHRoaXMuX2xvYWRUZXh0dXJlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jcmVhdGVNZXNoID0gdGhpcy5fY3JlYXRlTWVzaC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVuZGVyID0gdGhpcy5fcmVuZGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZXNpemUgPSB0aGlzLl9yZXNpemUuYmluZCh0aGlzKTtcblxuICB9XG5cblx0X2xvYWRUZXh0dXJlKGltYWdlLCBjYWxsYmFjaykge1xuXHRcdGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG5cdFx0bG9hZGVyLmxvYWQoaW1hZ2UsICh0ZXh0dXJlKSA9PiB7XG5cdFx0XHR0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XG4gICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XG4gICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xuICAgICAgdGhpcy5tZXNoID0gdGhpcy5jcmVhdGVNZXNoKCk7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH0pO1xuXHR9XG5cblx0X2NyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy51bmlmb3JtcyA9IHtcblx0XHRcdHJlc29sdXRpb246IHtcblx0XHRcdFx0dHlwZTogJ3YyJyxcblx0XHRcdFx0dmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KSxcblx0XHRcdH0sXG5cdFx0XHRpbWFnZVJlc29sdXRpb246IHtcblx0XHRcdFx0dHlwZTogJ3YyJyxcblx0XHRcdFx0dmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKDIwNDgsIDEzNTYpLFxuXHRcdFx0fSxcblx0XHRcdHRleHR1cmU6IHtcblx0XHRcdFx0dHlwZTogJ3QnLFxuXHRcdFx0XHR2YWx1ZTogdGhpcy50ZXh0dXJlLFxuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIG5ldyBUSFJFRS5NZXNoKFxuXHRcdFx0bmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMiwgMiksXG5cdFx0XHRuZXcgVEhSRUUuUmF3U2hhZGVyTWF0ZXJpYWwoe1xuXHRcdFx0XHR1bmlmb3JtczogdGhpcy51bmlmb3Jtcyxcblx0XHRcdFx0dmVydGV4U2hhZGVyOiByZXF1aXJlKCcuLi8uLi8uLi8uLi9nbHNsL2NvdmVyLnZlcnQnKSxcblx0XHRcdFx0ZnJhZ21lbnRTaGFkZXI6IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsc2wvY292ZXIuZnJhZycpLFxuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblxuICAvKipcbiAgICog44Os44Oz44OA44Op44O8XG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfcmVuZGVyKHRpbWUpIHtcblxuXHRcdGlmICh0aGlzLnN0b3ApIHJldHVybjtcblx0XHR0aGlzLnVuaWZvcm1zLnRpbWUudmFsdWUgKz0gdGltZSAvIHRoaXMuaW50ZXJ2YWw7XG5cdFx0aWYgKHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSA+IDEpIHtcblx0XHRcdHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSA9IDA7XG5cdFx0XHR0aGlzLnByZXZfbnVtID0gdGhpcy5uZXh0X251bTtcblx0XHRcdHRoaXMudW5pZm9ybXMudGV4UHJldi52YWx1ZSA9IHRoaXMudGV4dHVyZXNbdGhpcy5uZXh0X251bV07XG5cdFx0XHR3aGlsZSAodGhpcy5uZXh0X251bSA9PSB0aGlzLnByZXZfbnVtKSB7XG5cdFx0XHRcdHRoaXMubmV4dF9udW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRleHR1cmVzLmxlbmd0aCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnVuaWZvcm1zLnRleE5leHQudmFsdWUgPSB0aGlzLnRleHR1cmVzW3RoaXMubmV4dF9udW1dO1xuXHRcdH1cbiAgfVxuXG5cdF9yZXNpemUoKXtcblx0XHR0aGlzLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvUGxhbmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiB1djtcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuICAgIHZVdiA9IHV2O1xcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocG9zaXRpb24sIDEuMCk7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL2NvdmVyLnZlcnRcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcXG51bmlmb3JtIHZlYzIgaW1hZ2VSZXNvbHV0aW9uO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4odm9pZCkge1xcbiAgICB2ZWMyIHJhdGlvID0gdmVjMihcXG4gICAgICAgIG1pbigocmVzb2x1dGlvbi54IC8gcmVzb2x1dGlvbi55KSAvIChpbWFnZVJlc29sdXRpb24ueCAvIGltYWdlUmVzb2x1dGlvbi55KSwgMS4wKSxcXG4gICAgICAgIG1pbigocmVzb2x1dGlvbi55IC8gcmVzb2x1dGlvbi54KSAvIChpbWFnZVJlc29sdXRpb24ueSAvIGltYWdlUmVzb2x1dGlvbi54KSwgMS4wKVxcbiAgICApO1xcblxcbiAgICB2ZWMyIHV2ID0gdmVjMihcXG4gICAgICAgIHZVdi54ICogcmF0aW8ueCArICgxLjAgLSByYXRpby54KSAqIDAuNSxcXG4gICAgICAgIHZVdi55ICogcmF0aW8ueSArICgxLjAgLSByYXRpby55KSAqIDAuNVxcbiAgICApO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodGV4dHVyZSwgdXYpO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3NyYy9hc3NldHMvZ2xzbC9jb3Zlci5mcmFnXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBEaXNwbGF5XG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG4vLyBpbXBvcnQgV2ViR0xpbml0IGZyb20gJy4vV2ViR0xpbml0LmpzJztcblxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi4vdmlzdWFsL0NhbnZhc1wiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlUb3Age1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICAvLyBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBnYi5pbi5jYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgICBnYi5pbi5jYW52YXMuaW5pdCgpO1xuXG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblx0XHQvLyB3aW5kb3cuY29uc29sZS5sb2coJ3N0YXRpY19SdW4nKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVNb3ZpZS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENhbnZhc1xuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IEVudHJ5IGZyb20gJy4uL0NvcmUvRW50cnknO1xuLy8gaW1wb3J0IFRpdGxlT2JqZWN0IGZyb20gXCIuL1RpdGxlT2JqZWN0XCI7XG4vLyBpbXBvcnQgQ2FtZXJhIGZyb20gJy4vVXRpbHMvQ2FtZXJhJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnVuaWZvcm1zID0ge1xuICAgICAgdV90aW1lOiB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXG4gICAgICB1X3Jlc29sdXRpb246IHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoKSB9LFxuICAgICAgdV9tb3VzZTogeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMigpIH1cbiAgICB9O1xuXG4gICAgLy8gdGhpcy50aXRsZU9iamVjdCA9IG5ldyBUaXRsZU9iamVjdCgpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2ViZ2wtb3V0cHV0Jyk7XG5cbiAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgLy8gdGhpcy5vdXRwdXQgPSBvcHRzLm91dHB1dCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcblx0XHR0aGlzLmN1YmUgPSBudWxsO1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEgPSB0aGlzLl9jcmVhdGVDYW1lcmEuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyID0gdGhpcy5fY3JlYXRlUmVuZGVyZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVNjZW5lID0gdGhpcy5fY3JlYXRlU2NlbmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZU9iamVjdCA9IHRoaXMuX2NyZWF0ZU9iamVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3JiaXRDb250cm9scyA9IHRoaXMuX29yYml0Q29udHJvbHMuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucGxhbmVPYmplY3QgPSB0aGlzLl9wbGFuZU9iamVjdC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5yZW5kZXIgPSB0aGlzLl9yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25SZXNpemUgPSB0aGlzLl9vblJlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5VcGRhdGUgPSB0aGlzLl9VcGRhdGUuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMllxuICAgKi9cbiAgaW5pdCgpe1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKTtcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuXG5cdFx0dGhpcy5vcmJpdENvbnRyb2xzKCk7XG5cdFx0Ly8gdGhpcy5jcmVhdGVPYmplY3QoKTtcblxuICAgIHRoaXMucGxhbmVPYmplY3QoKTtcblxuICAgIHRoaXMuVXBkYXRlKCk7XG5cbiAgICAvLyB0aGlzLnRpdGxlT2JqZWN0LmxvYWRUZXh0dXJlKCgpID0+IHtcbiAgICAvLyAgIHRoaXMuc2NlbmUuYWRkKHRoaXMudGl0bGVPYmplY3Qub2JqKTtcbiAgICAvLyB9KTtcblxuICAgIC8v44Oq44K144Kk44K644Kk44OZ44Oz44OI55m654GrXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICB9LCBmYWxzZSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjgqvjg6Hjg6nkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVDYW1lcmEoKXtcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDEwMDtcblxuICAgIHRoaXMuY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygwLDAsMCkpO1xuXG4gIH1cblxuICAvKipcbiAgICog44Os44Oz44OA44Op44O85L2c5oiQXG4gICAqL1xuICBfY3JlYXRlUmVuZGVyZXIoKXtcblxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICBhbHBoYSAgICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIGFudGlhbGlhcyAgICAgICAgICA6IGZhbHNlLFxuICAgICAgc3RlbmNpbCAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICBkZXB0aCAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgcHJlbXVsdGlwbGllZEFscGhhIDogZmFsc2UsXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzXG5cdFx0fSk7XG5cbiAgICAvLyB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhmZmZmZmYpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweDAwMDAwMCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgLy8gdGhpcy5vdXRwdXQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcblxuICB9XG5cbiAgLyoqXG4gICAq44CA44K344O844Oz5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlU2NlbmUoKXtcblxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIE9iamVjdOS9nOaIkFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0X2NyZWF0ZU9iamVjdCgpe1xuXG4gICAgbGV0IGN1YmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg0LCA0LCA0KTtcbiAgICBsZXQgY3ViZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICAgIHdpcmVmcmFtZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdGhpcy5jdWJlID0gbmV3IFRIUkVFLk1lc2goY3ViZUdlb21ldHJ5LCBjdWJlTWF0ZXJpYWwpO1xuICAgIHRoaXMuY3ViZS5wb3NpdGlvbi54ID0gMztcbiAgICB0aGlzLmN1YmUucG9zaXRpb24ueSA9IDM7XG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLnogPSAzO1xuXG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5jdWJlKTtcblxuXHR9XG5cblx0X3BsYW5lT2JqZWN0KCl7XG4gICAgdGhpcy5wbGFuZSA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgICAvLyBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSgyNTYsIDY0LCA0MCwgMTApLFxuICAgICAgICBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSg1LCAyMCwgMzIpLFxuICAgICAgICBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgICAgIHVuaWZvcm1zOiB0aGlzLnVuaWZvcm1zLFxuICAgICAgICAgIHZlcnRleFNoYWRlcjogcmVxdWlyZSgnLi4vLi4vLi4vLi4vZ2xzbC9pbmRleC90ZXN0LnZlcnQnKSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlcjogcmVxdWlyZSgnLi4vLi4vLi4vLi4vZ2xzbC9pbmRleC90ZXN0LmZyYWcnKSxcbiAgICAgICAgfSlcbiAgICApXG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5wbGFuZSk7XG4gIH1cblxuICAvKipcbiAgICog44Os44Oz44OA44Op44O8XG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfcmVuZGVyKCkge1xuICAgIGxldCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xuICAgIGxldCB0aW1lID0gY2xvY2suZ2V0RGVsdGEoKTtcblxuICAgIC8vIHRoaXMudGl0bGVPYmplY3QudGl0cmVuZGVyKHRpbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOabtOaWsFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX1VwZGF0ZSgpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuICAgICAgdGhpcy5VcGRhdGUoKTtcbiAgICB9KTtcbiAgICAvLyB0aGlzLmNvbnRyb2xzLnVwZGF0ZSgpO1xuICAgIHRoaXMudW5pZm9ybXMudV90aW1lLnZhbHVlICs9IDAuMDU7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICB9XG5cbiAgLyoqXG4gICAq44CA55S76Z2i44Oq44K144Kk44K6XG4gICAqL1xuICBfb25SZXNpemUoKSB7XG4gICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxuXG5cdC8qKlxuICAgKiDjgqvjg6Hjg6njgrPjg7Pjg4jjg63jg7zjg6tcblx0ICovXG5cdF9vcmJpdENvbnRyb2xzKCl7XG5cdFx0dGhpcy5jb250cm9scyA9IG5ldyBUSFJFRS5PcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhKTtcblx0XHR0aGlzLmNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlO1xuXHRcdGxldCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xuXG5cdFx0bGV0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcblx0XHR0aGlzLmNvbnRyb2xzLnVwZGF0ZShkZWx0YSk7XG4gIH1cblxuXHRzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9DYW52YXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG4vL2F0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QudmVydFxuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSB2ZWMyIHVfcmVzb2x1dGlvbjtcXG51bmlmb3JtIGZsb2F0IHVfdGltZTtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzIgc3QgPSBnbF9GcmFnQ29vcmQueHkvdV9yZXNvbHV0aW9uLnh5O1xcbiAgICBnbF9GcmFnQ29sb3I9dmVjNChzdC54LHN0LnksMC4wLDEuMCk7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QuZnJhZ1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==