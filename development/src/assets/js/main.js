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
	      this.renderer02 = new THREE.WebGLRenderer({ antialias: true, alpha: true });
	      this.renderer02.setPixelRatio(window.devicePixelRatio);
	      this.renderer02.setSize(window.innerWidth, window.innerHeight);
	      this.renderer02.sortObjects = false;
	      this.renderer02.shadowMap.enabled = true;
	      this.renderer02.shadowMap.type = THREE.PCFShadowMap;
	      this.renderer02.domElement.id = "sub";
	      this.renderer02.setClearColor(0x000000, 0.5);
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
	        }
	
	        if (_this2.keyname == "ArrowLeft") {
	          _this2.checkNum();
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
	      // this.canvas.width = document.body.clientWidth;
	      // this.canvas.height = document.body.clientHeight;
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
			// this.resize = this._resize.bind(this);
	
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
			// _resize(){
			// 	this.uniforms.resolution.value.set(document.body.clientWidth, document.body.clientHeight);
			// }
	
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

	module.exports = "precision mediump float;\n#define GLSLIFY 1\nuniform float time;\nuniform vec2  mouse;\nuniform vec2  resolution;\nconst float PI = 3.14159265;\nvec2 squareFrame_1_0(vec2 screenSize) {\n  vec2 position = 2.0 * (gl_FragCoord.xy / screenSize.xy) - 1.0;\n  position.x *= screenSize.x / screenSize.y;\n  return position;\n}\n\nvec2 squareFrame_1_0(vec2 screenSize, vec2 coord) {\n  vec2 position = 2.0 * (coord.xy / screenSize.xy) - 1.0;\n  position.x *= screenSize.x / screenSize.y;\n  return position;\n}\n\n\n\nmat3 calcLookAtMatrix_5_1(vec3 origin, vec3 target, float roll) {\n  vec3 rr = vec3(sin(roll), cos(roll), 0.0);\n  vec3 ww = normalize(target - origin);\n  vec3 uu = normalize(cross(ww, rr));\n  vec3 vv = normalize(cross(uu, ww));\n\n  return mat3(uu, vv, ww);\n}\n\n\n\n\nvec3 getRay_3_2(mat3 camMat, vec2 screenPos, float lensLength) {\n  return normalize(camMat * vec3(screenPos, lensLength));\n}\n\nvec3 getRay_3_2(vec3 origin, vec3 target, vec2 screenPos, float lensLength) {\n  mat3 camMat = calcLookAtMatrix_5_1(origin, target, 0.0);\n  return getRay_3_2(camMat, screenPos, lensLength);\n}\n\n\n\nvec2 map(vec3 p);\n// Originally sourced from https://www.shadertoy.com/view/ldfSWs\n// Thank you Iñigo :)\n\nvec2 calcRayIntersection_4_3(vec3 rayOrigin, vec3 rayDir, float maxd, float precis, float reduction) {\n  float latest = precis * 2.0;\n  float dist   = +0.0;\n  float type   = -1.0;\n  vec2  res    = vec2(-1.0, -1.0);\n\n  for (int i = 0; i < 256; i++) {\n    if (latest < precis || dist > maxd) break;\n\n    vec2 result = map(rayOrigin + rayDir * dist);\n\n    latest = result.x;\n    type   = result.y;\n    dist  += latest * reduction;\n  }\n\n  if (dist < maxd) {\n    res = vec2(dist, type);\n  }\n\n  return res;\n}\n\nvec2 calcRayIntersection_4_3(vec3 rayOrigin, vec3 rayDir) {\n  return calcRayIntersection_4_3(rayOrigin, rayDir, 20.0, 0.001, 1.0);\n}\n\n\n\n// Originally sourced from https://www.shadertoy.com/view/ldfSWs\n// Thank you Iñigo :)\n\nvec3 calcNormal_2_4(vec3 pos, float eps) {\n  const vec3 v1 = vec3( 1.0,-1.0,-1.0);\n  const vec3 v2 = vec3(-1.0,-1.0, 1.0);\n  const vec3 v3 = vec3(-1.0, 1.0,-1.0);\n  const vec3 v4 = vec3( 1.0, 1.0, 1.0);\n\n  return normalize( v1 * map( pos + v1*eps ).x +\n                    v2 * map( pos + v2*eps ).x +\n                    v3 * map( pos + v3*eps ).x +\n                    v4 * map( pos + v4*eps ).x );\n}\n\nvec3 calcNormal_2_4(vec3 pos) {\n  return calcNormal_2_4(pos, 0.002);\n}\n\n\n\n#define NUM 1.\nfloat t() {\n    return time * 3.;\n}\n\nfloat random(in vec2 p) {\n    return fract(sin(dot(p.xy, vec2(12.34, 56.78))) * 90.0);\n}\n\nfloat sdGround(in vec3 p) {\n    return p.y;\n}\n\nfloat sdBuildings(in vec3 p) {\n    vec3 pp = mod(p, 1.) - .5;\n    float height = random(p.xz - mod(p.xz, 1.)) *3.;\n    float nearness = max(floor(p.z) - t() - 2., 0.3);\n    nearness = pow(nearness, .3);\n    pp.y = p.y * 0.4 * nearness - height * 0.1;\n    return length(max(abs(pp) - .25, .0));\n}\n\nvec2 map(vec3 p) {\n    return vec2(min(sdGround(p), sdBuildings(p)), 0.);\n}\n\n//\nvoid main (void) {\n    vec3 rayOrigin = vec3(0, 1.5, 0);\n    rayOrigin.x += (sin(t() * .7) + cos(t() * .67)) * 0.07;\n    rayOrigin.y += (sin(t() * .81) + cos(t() * .8)) * 0.2;\n    vec3 rayTarget = vec3(0, 2, 9999999.);\n    rayOrigin.z = t();\n    vec3 rayDirection = getRay_3_2(rayOrigin, rayTarget, squareFrame_1_0(resolution.xy), 2.);\n\n    vec3 lightDir = normalize(vec3(0.3, 3., 2.));\n    vec3 light = vec3(.4);\n    vec3 ambient = vec3(.4, .3, .5);\n\n    vec2 collision = calcRayIntersection_4_3(rayOrigin, rayDirection);\n    if (collision.x > 0.) {\n        vec3 pos = rayOrigin + rayDirection * collision.x;\n        vec3 normal = calcNormal_2_4(pos);\n        float diff = clamp(dot(lightDir, normal), 0.1, 1.0);\n        gl_FragColor = vec4(diff * light + ambient * 1./pos.y, 1.0);\n    }\n    else {\n        float c = gl_FragCoord.y / resolution.y;\n        gl_FragColor = vec4(c * 0.2, 0, c * 0.3, 1);\n    }\n}"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjdmZjMzMmQ3M2I4NjFjNDg2MzYiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvcmUvQ29uZi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9VdGlsLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hbmltYXRpb24vcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL2NhbmNlbEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYXJyYXkvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy91YS9jaGVja0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy91YS1wYXJzZXIubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvaW1nL3ByZWxvYWRJbWcuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5Ud2l0dGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuTGluZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkZhY2VCb29rLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL0Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvU2NlbmVNYW5nZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0VudHJ5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9saWJzL09yYml0Q29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvb3ZlclNjZW5lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1NjZW5lMDEuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvU2NlbmUwMi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9VdGlscy9hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9TY2VuZTAzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1BsYW5lU2NlbmUwMy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL3NjZW5lMDMudmVydCIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL3NjZW5lMDMuZnJhZyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVCZy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9UZXh0dXJlQmcuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvUGxhbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvZ2xzbC9jb3Zlci52ZXJ0Iiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2dsc2wvY292ZXIuZnJhZyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVNb3ZpZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvZ2xzbC9pbmRleC90ZXN0LnZlcnQiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvZ2xzbC9pbmRleC90ZXN0LmZyYWciXSwibmFtZXMiOlsid2luZG93IiwiZ2IiLCJ1bmRlZmluZWQiLCJpbiIsImNvbW1vbiIsIm1haW4iLCJDb21tb24iLCJzZXR1cCIsInNldEV2ZW50cyIsImNvbmYiLCJ1IiwiZiIsInV0IiwiJCIsImRvY3VtZW50Iiwib24iLCJvblJlYWR5IiwiYmluZCIsIm9uTG9hZCIsIkNvbmYiLCJSRUxFQVNFIiwiRkxHIiwiTE9HIiwiUEFSQU0iLCJTVEFUUyIsImRlZlciLCJkZWZIIiwiVyIsIkgiLCJzcFciLCJzcEgiLCJicCIsIm1vZGUiLCJrZXlzIiwic3dpdGNoTW9kZSIsInNlYzAySW1nTnVtIiwieW91dHViZUlEMDEiLCJ5b3V0dWJlSUQwMiIsIndlYkZvbnRMb2FkZWQiLCJpIiwia2V5IiwibGVuIiwicGFyYW0iLCJyZWYiLCJyZWYxIiwidmFsdWUiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlcGxhY2UiLCJzcGxpdCIsImxlbmd0aCIsImoiLCJvYmoiLCJrIiwidmFsIiwiVXRpbCIsImlzU2V0U1BTaXplIiwic3RhcnRUaW1lIiwiZWxhcHNlZFRpbWUiLCJub3ciLCJEYXRlIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibWluMSIsIm1heDEiLCJtaW4yIiwibWF4MiIsImhpdCIsInJhbmdlIiwibnVtIiwicmVzTWluIiwicmVzTWF4IiwiYmFzZU1pbiIsImJhc2VNYXgiLCJwIiwibiIsInBvcyIsIlN0cmluZyIsImluZGV4T2YiLCJzdWJzdHIiLCJudW1lcmF0b3IiLCJkZW5vbWluYXRvciIsInJhZGlhbnMiLCJQSSIsImFuZ2xlIiwicDEiLCJwMiIsInNxcnQiLCJwb3ciLCJ4IiwieSIsImFyciIsInNvcnQiLCJhIiwiYiIsImdldFRpbWUiLCJmbGciLCJjc3MiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwiaXNSZXNTUCIsImlzUmVzUEMiLCJ1cmwiLCJocmVmIiwicGFyYW1JdGVtcyIsImxpc3QiLCJwYXJhbUl0ZW0iLCJoYXNoIiwibCIsImxlbjEiLCJjb29raWUiLCJyIiwiZyIsInN0ciIsInRvU3RyaW5nIiwiQXJyYXkiLCJqb2luIiwiY29udGFpbiIsIm51bWJlciIsIl9wb3ciLCJyb3VuZCIsInJlcyIsIm9yZyIsImRlc3QiLCJiZWZvcmUiLCJhZnRlciIsIlJlZ0V4cCIsImdldE5vdyIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwibWlsbFNlY29uZCIsImdldE1pbGxpc2Vjb25kcyIsImdldERhdGUiLCJtb250aGRheXMiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwid2Vla0RheUpQIiwid0RKIiwiZ2V0RGF5Iiwid2Vla0RheUVOIiwid0RFIiwiZGF0ZSIsIk51bWJlciIsImlnbm9yZUFycmF5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiY2FsbCIsIiR0YXJnZXQiLCIkaW1nIiwiZWFjaCIsInciLCJ3aWR0aCIsImgiLCJoZWlnaHQiLCJhdHRyIiwidHJpZ2dlciIsInNlbGYiLCJlIiwicHJldmVudERlZmF1bHQiLCJvZmYiLCJwcm90b2NvbCIsImhvc3RuYW1lIiwicG9ydCIsInBhdGhuYW1lIiwiZXZlbnQiLCJyZXR1cm5WYWx1ZSIsImtleUNvZGUiLCJhZGRFdmVudExpc3RlbmVyIiwib253aGVlbCIsIm9ubW91c2V3aGVlbCIsIm9udG91Y2htb3ZlIiwib25rZXlkb3duIiwicHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIlV0aWxzIiwiX3NldHVwIiwiY2hlY2tDbGllbnQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfdGhpcyIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FsbGJhY2siLCJzZXRUaW1lb3V0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsImlkIiwiY2xlYXJUaW1lb3V0IiwiQXJyIiwic2xpY2UiLCJ0IiwicGFyc2VyIiwicmVxdWlyZSIsInVhIiwiYnJvd3NlciIsImdldEJyb3dzZXIiLCJuYW1lIiwiZGV2aWNlIiwiZ2V0RGV2aWNlIiwidHlwZSIsImdldE9TIiwiZGV2aWNlX25hbWUiLCJ2ZW5kb3IiLCJnZXRVQSIsInMiLCJvIiwiYyIsImQiLCJ2IiwibSIsIkUiLCJTIiwiZXh0ZW5kIiwiY29uY2F0IiwiaGFzIiwidG9Mb3dlckNhc2UiLCJsb3dlcml6ZSIsIm1ham9yIiwidHJpbSIsInJneCIsImFyZ3VtZW50cyIsImhhc093blByb3BlcnR5IiwiZXhlYyIsInRlc3QiLCJUIiwib2xkc2FmYXJpIiwidmVyc2lvbiIsImFtYXpvbiIsIm1vZGVsIiwic3ByaW50IiwiSFRDIiwiU3ByaW50Iiwib3MiLCJ3aW5kb3dzIiwiTUUiLCJYUCIsIlZpc3RhIiwiUlQiLCJOIiwiY3B1IiwiZW5naW5lIiwiQyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImFwcGx5IiwiZ2V0Q1BVIiwiZ2V0RW5naW5lIiwiZ2V0UmVzdWx0Iiwic2V0VUEiLCJWRVJTSU9OIiwiQlJPV1NFUiIsIk5BTUUiLCJNQUpPUiIsIkNQVSIsIkFSQ0hJVEVDVFVSRSIsIkRFVklDRSIsIk1PREVMIiwiVkVORE9SIiwiVFlQRSIsIkNPTlNPTEUiLCJNT0JJTEUiLCJTTUFSVFRWIiwiVEFCTEVUIiwiV0VBUkFCTEUiLCJFTUJFRERFRCIsIkVOR0lORSIsIk9TIiwiZXhwb3J0cyIsIm1vZHVsZSIsIlVBUGFyc2VyIiwialF1ZXJ5IiwiWmVwdG8iLCJMIiwiZ2V0Iiwic2V0IiwiaW1nUGF0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwiaW1nIiwiSW1hZ2UiLCJjYWxsZWUiLCJzcmMiLCIkYnRuIiwidGV4dCIsInNoYXJlVVJMIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwib3BlbiIsImRlc2NyaXB0aW9uIiwiRnVuYyIsImJsYW5rIiwiZGVidWdnZXIiLCJleHBhbmRqUXVlcnkiLCJtZXRob2RzIiwiY29uc29sZSIsInByZXBlbmQiLCJGUFMiLCJ3ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSIsInRpbWVyIiwiZm4iLCJhZGp1c3QiLCJhZGp1c3RXIiwiYWRqdXN0SCIsIkNTUyIsInN1cHBvcnRzIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibG9nIiwiaXNJRSIsImlzUEMiLCJpc0FuZHJvaWRWZXJzaW9uIiwiYWxlcnQiLCJNYWluIiwicGFnZSIsImRhdGEiLCJEaXNwbGF5VG9wIiwic2NlbmVNYW5nZXIiLCJzY2VuZUJveEEiLCJzY2VuZUJveEIiLCJzY2VuZUJveEMiLCJzY2VuZUJveEQiLCJhZGRTY2VuZSIsImRyYXciLCJTY2VuZU1hbmdlciIsIk5VTSIsInNjZW5lcyIsImZhZGVJbk91dFRpbWVyIiwib3AiLCJjYW52YXMiLCJyZW5kZXJlciIsInJlbmRlcmVyMDIiLCJvdmVyc2NlbmUiLCJvdmVyQWxwaGEiLCJtYWluT1AiLCJfYWRkU2NlbmUiLCJvblJlc2l6ZSIsIl9vblJlc2l6ZSIsImNoZWNrTnVtIiwiX2NoZWNrTnVtIiwib25LZXlEb3duIiwiX29uS2V5RG93biIsImZhZGVJbk91dCIsIl9mYWRlSW5PdXQiLCJfZHJhdyIsImFscGhhUmVzZXQiLCJfYWxwaGFSZXNldCIsImtleW5hbWUiLCJpbml0IiwicHVzaCIsIlRIUkVFIiwiV2ViR0xSZW5kZXJlciIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJzZXRTaXplIiwic29ydE9iamVjdHMiLCJzaGFkb3dNYXAiLCJlbmFibGVkIiwiUENGU2hhZG93TWFwIiwiZG9tRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImFudGlhbGlhcyIsInNldENsZWFyQ29sb3IiLCJjYW52YXMwMiIsInNjZW5lIiwiY2FtZXJhIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsIm9wYWNpdHkiLCJzaW4iLCJ1cGRhdGUiLCJyZW5kZXIiLCJFbnRyeSIsIk9yYml0Q29udHJvbHMiLCJvYmplY3QiLCJ0YXJnZXQiLCJWZWN0b3IzIiwibWluRGlzdGFuY2UiLCJtYXhEaXN0YW5jZSIsIkluZmluaXR5IiwibWluWm9vbSIsIm1heFpvb20iLCJtaW5Qb2xhckFuZ2xlIiwibWF4UG9sYXJBbmdsZSIsIm1pbkF6aW11dGhBbmdsZSIsIm1heEF6aW11dGhBbmdsZSIsImVuYWJsZURhbXBpbmciLCJkYW1waW5nRmFjdG9yIiwiZW5hYmxlWm9vbSIsInpvb21TcGVlZCIsImVuYWJsZVJvdGF0ZSIsInJvdGF0ZVNwZWVkIiwiZW5hYmxlUGFuIiwia2V5UGFuU3BlZWQiLCJhdXRvUm90YXRlIiwiYXV0b1JvdGF0ZVNwZWVkIiwiZW5hYmxlS2V5cyIsIkxFRlQiLCJVUCIsIlJJR0hUIiwiQk9UVE9NIiwibW91c2VCdXR0b25zIiwiT1JCSVQiLCJNT1VTRSIsIlpPT00iLCJNSURETEUiLCJQQU4iLCJ0YXJnZXQwIiwiY2xvbmUiLCJwb3NpdGlvbjAiLCJwb3NpdGlvbiIsInpvb20wIiwiem9vbSIsImdldFBvbGFyQW5nbGUiLCJzcGhlcmljYWwiLCJwaGkiLCJnZXRBemltdXRoYWxBbmdsZSIsInRoZXRhIiwicmVzZXQiLCJzY29wZSIsImNvcHkiLCJkaXNwYXRjaEV2ZW50IiwiY2hhbmdlRXZlbnQiLCJzdGF0ZSIsIlNUQVRFIiwiTk9ORSIsIm9mZnNldCIsInF1YXQiLCJRdWF0ZXJuaW9uIiwic2V0RnJvbVVuaXRWZWN0b3JzIiwidXAiLCJxdWF0SW52ZXJzZSIsImludmVyc2UiLCJsYXN0UG9zaXRpb24iLCJsYXN0UXVhdGVybmlvbiIsInN1YiIsImFwcGx5UXVhdGVybmlvbiIsInNldEZyb21WZWN0b3IzIiwicm90YXRlTGVmdCIsImdldEF1dG9Sb3RhdGlvbkFuZ2xlIiwic3BoZXJpY2FsRGVsdGEiLCJtYWtlU2FmZSIsInJhZGl1cyIsInNjYWxlIiwicGFuT2Zmc2V0Iiwic2V0RnJvbVNwaGVyaWNhbCIsImxvb2tBdCIsInpvb21DaGFuZ2VkIiwiZGlzdGFuY2VUb1NxdWFyZWQiLCJFUFMiLCJkb3QiLCJxdWF0ZXJuaW9uIiwiZGlzcG9zZSIsIm9uQ29udGV4dE1lbnUiLCJvbk1vdXNlRG93biIsIm9uTW91c2VXaGVlbCIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJvblRvdWNoTW92ZSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwic3RhcnRFdmVudCIsImVuZEV2ZW50IiwiUk9UQVRFIiwiRE9MTFkiLCJUT1VDSF9ST1RBVEUiLCJUT1VDSF9ET0xMWSIsIlRPVUNIX1BBTiIsIlNwaGVyaWNhbCIsInJvdGF0ZVN0YXJ0IiwiVmVjdG9yMiIsInJvdGF0ZUVuZCIsInJvdGF0ZURlbHRhIiwicGFuU3RhcnQiLCJwYW5FbmQiLCJwYW5EZWx0YSIsImRvbGx5U3RhcnQiLCJkb2xseUVuZCIsImRvbGx5RGVsdGEiLCJnZXRab29tU2NhbGUiLCJyb3RhdGVVcCIsInBhbkxlZnQiLCJkaXN0YW5jZSIsIm9iamVjdE1hdHJpeCIsInNldEZyb21NYXRyaXhDb2x1bW4iLCJtdWx0aXBseVNjYWxhciIsInBhblVwIiwicGFuIiwiZGVsdGFYIiwiZGVsdGFZIiwiZWxlbWVudCIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwidGFyZ2V0RGlzdGFuY2UiLCJ0YW4iLCJmb3YiLCJjbGllbnRIZWlnaHQiLCJtYXRyaXgiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJyaWdodCIsImxlZnQiLCJjbGllbnRXaWR0aCIsInRvcCIsImJvdHRvbSIsIndhcm4iLCJkb2xseUluIiwiZG9sbHlTY2FsZSIsImRvbGx5T3V0IiwiaGFuZGxlTW91c2VEb3duUm90YXRlIiwiY2xpZW50WCIsImNsaWVudFkiLCJoYW5kbGVNb3VzZURvd25Eb2xseSIsImhhbmRsZU1vdXNlRG93blBhbiIsImhhbmRsZU1vdXNlTW92ZVJvdGF0ZSIsInN1YlZlY3RvcnMiLCJoYW5kbGVNb3VzZU1vdmVEb2xseSIsImhhbmRsZU1vdXNlTW92ZVBhbiIsImhhbmRsZU1vdXNlVXAiLCJoYW5kbGVNb3VzZVdoZWVsIiwiaGFuZGxlS2V5RG93biIsImhhbmRsZVRvdWNoU3RhcnRSb3RhdGUiLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsImhhbmRsZVRvdWNoU3RhcnREb2xseSIsImR4IiwiZHkiLCJoYW5kbGVUb3VjaFN0YXJ0UGFuIiwiaGFuZGxlVG91Y2hNb3ZlUm90YXRlIiwiaGFuZGxlVG91Y2hNb3ZlRG9sbHkiLCJoYW5kbGVUb3VjaE1vdmVQYW4iLCJoYW5kbGVUb3VjaEVuZCIsImJ1dHRvbiIsInN0b3BQcm9wYWdhdGlvbiIsImNyZWF0ZSIsIkV2ZW50RGlzcGF0Y2hlciIsImNvbnN0cnVjdG9yIiwiZGVmaW5lUHJvcGVydGllcyIsImNlbnRlciIsIm5vWm9vbSIsIm5vUm90YXRlIiwibm9QYW4iLCJub0tleXMiLCJzdGF0aWNNb3ZpbmciLCJkeW5hbWljRGFtcGluZ0ZhY3RvciIsIm92ZXJTY2VuZSIsInN0ZXAiLCJrbm90IiwidHViZSIsInJhZGlhbFNlZ21lbnRzIiwidHVidWxhclNlZ21lbnRzIiwicSIsImhlaWdodFNjYWxlIiwiYXNQYXJ0aWNsZXMiLCJyb3RhdGUiLCJnZW5lcmF0ZVNwcml0ZSIsIl9nZW5lcmF0ZVNwcml0ZSIsImNyZWF0ZVBhcnRpY2xlU3lzdGVtIiwiX2NyZWF0ZVBhcnRpY2xlU3lzdGVtIiwiY3JlYXRlTWVzaCIsIl9jcmVhdGVNZXNoIiwiY3JlYXRlU2NlbmUiLCJfY3JlYXRlU2NlbmUiLCJfdXBkYXRlIiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ3JhZGllbnQiLCJjcmVhdGVSYWRpYWxHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwidGV4dHVyZSIsIlRleHR1cmUiLCJuZWVkc1VwZGF0ZSIsImdlb20iLCJtYXRlcmlhbCIsIlBhcnRpY2xlQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwic2l6ZSIsInRyYW5zcGFyZW50IiwiYmxlbmRpbmciLCJBZGRpdGl2ZUJsZW5kaW5nIiwibWFwIiwic3lzdGVtIiwiUGFydGljbGVTeXN0ZW0iLCJzb3J0UGFydGljbGVzIiwibWVzaE1hdGVyaWFsIiwiTWVzaE5vcm1hbE1hdGVyaWFsIiwic2lkZSIsIkRvdWJsZVNpZGUiLCJtZXNoIiwiU2NlbmVVdGlscyIsImNyZWF0ZU11bHRpTWF0ZXJpYWxPYmplY3QiLCJTY2VuZSIsInoiLCJyZW1vdmUiLCJUb3J1c0tub3RHZW9tZXRyeSIsInJvdGF0aW9uIiwiU2NlbmUwMSIsImN1YmUiLCJncm91cCIsIl9yZW5kZXIiLCJHcm91cCIsIk1lc2giLCJCb3hHZW9tZXRyeSIsIk1lc2hMYW1iZXJ0TWF0ZXJpYWwiLCJwb2ludExpZ2h0IiwiUG9pbnRMaWdodCIsInRyYXZlcnNlIiwiU2NlbmUwMiIsIkJveCIsImVsVm9sdW1lIiwiZWxWb2x1bWVWYWwiLCJhdWRpb0luaXQiLCJjdHgiLCJhbmFseXNlciIsImZyZXF1ZW5jaWVzIiwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlIiwiZXhlY3V0ZSIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImNyZWF0ZUFuYWx5c2VyIiwiVWludDhBcnJheSIsImZyZXF1ZW5jeUJpbkNvdW50IiwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEiLCJyZWR1Y2UiLCJwcmV2aW91cyIsImN1cnJlbnQiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInRoZW4iLCJzdHJlYW0iLCJoYWNrRm9yTW96emlsYSIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiY29ubmVjdCIsImNhdGNoIiwiZXJyIiwibWVzc2FnZSIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiZ2VvbWV0cnkiLCJNZXNoQmFzaWNNYXRlcmlhbCIsIl9leGVjdXRlIiwiZ2V0VmFsIiwiX2dldFZhbCIsIlNjZW5lMDMiLCJsb2FkVGV4dHVyZSIsIl9sb2FkVGV4dHVyZSIsInBsYW5lIiwidW5pZm9ybXMiLCJ0aW1lIiwicmVzb2x1dGlvbiIsIlBsYW5lU2NlbmUwMyIsImltYWdlIiwibG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsImxvYWQiLCJtYWdGaWx0ZXIiLCJOZWFyZXN0RmlsdGVyIiwibWluRmlsdGVyIiwibW91c2UiLCJQbGFuZUJ1ZmZlckdlb21ldHJ5IiwiUmF3U2hhZGVyTWF0ZXJpYWwiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsInRleHR1cmVCZyIsIlRleHR1cmVCZyIsImNyZWF0ZUNhbWVyYSIsIl9jcmVhdGVDYW1lcmEiLCJjcmVhdGVSZW5kZXJlciIsIl9jcmVhdGVSZW5kZXJlciIsIlVwZGF0ZSIsIl9VcGRhdGUiLCJzdGVuY2lsIiwiZGVwdGgiLCJwcmVtdWx0aXBsaWVkQWxwaGEiLCJQbGFuZSIsInJlc2l6ZSIsIl9yZXNpemUiLCJpbWFnZVJlc29sdXRpb24iLCJzdG9wIiwiaW50ZXJ2YWwiLCJwcmV2X251bSIsIm5leHRfbnVtIiwidGV4UHJldiIsInRleHR1cmVzIiwidGV4TmV4dCIsIkNhbnZhcyIsInVfdGltZSIsInVfcmVzb2x1dGlvbiIsInVfbW91c2UiLCJjcmVhdGVPYmplY3QiLCJfY3JlYXRlT2JqZWN0Iiwib3JiaXRDb250cm9scyIsIl9vcmJpdENvbnRyb2xzIiwicGxhbmVPYmplY3QiLCJfcGxhbmVPYmplY3QiLCJjdWJlR2VvbWV0cnkiLCJjdWJlTWF0ZXJpYWwiLCJ3aXJlZnJhbWUiLCJTaGFkZXJNYXRlcmlhbCIsImNsb2NrIiwiQ2xvY2siLCJnZXREZWx0YSIsImNvbnRyb2xzIiwiZGVsdGEiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM5QkE7Ozs7QUFDQTs7Ozs7O0FBVEE7Ozs7Ozs7O0FBV0EsRUFBQyxZQUFJOztBQUVIO0FBQ0EsT0FBSUEsT0FBT0MsRUFBUCxLQUFZQyxTQUFoQixFQUEyQkYsT0FBT0MsRUFBUCxHQUFZLEVBQVo7QUFDM0JELFVBQU9DLEVBQVAsQ0FBVUUsRUFBVixHQUFlLEVBQWYsQ0FKRyxDQUlnQjs7QUFFbkJGLE1BQUdFLEVBQUgsQ0FBTUMsTUFBTixHQUFlLHNCQUFmO0FBQ0FILE1BQUdFLEVBQUgsQ0FBTUUsSUFBTixHQUFhLG9CQUFiO0FBRUQsRUFURCxJOzs7Ozs7Ozs7Ozs7c2pCQ1hBOzs7Ozs7OztBQVFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBOztLQUVxQkMsTTtBQUVuQixxQkFBYztBQUFBOztBQUVaLFVBQUtDLEtB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TUUsUUFBTixFQUFaO0FBQ0EsWUFBS0MsUUFBTCxDQUFjL1UsTUFBZCxDQUFxQmdWLEtBQXJCO0FBQ0M7OztpQ0FFVTs7QUFFVC9yQixTQUFFYixNQUFGLEVBQVVlLEVBQVYsQ0FBYSxNQUFiLEVBQXFCLEtBQUtHLE1BQUwsQ0FBWUQsSUFBWixDQUFpQixJQUFqQixDQUFyQjtBQUVEOzs7Ozs7bUJBck1rQnlxQixNOzs7Ozs7QUNkckIsZ0VBQStELGlCQUFpQiwwQ0FBMEMsR0FBRyxHOzs7Ozs7QUNBN0gsZ0VBQStELHVCQUF1QixpQkFBaUIsZ0RBQWdELDJDQUEyQyxHQUFHLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGY3ZmYzMzJkNzNiODYxYzQ4NjM2IiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogVG9wXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBDb21tb24gZnJvbSAnLi9wYWdlL0NvbW1vbic7XG5pbXBvcnQgTWFpbiBmcm9tICcuL3BhZ2UvTWFpbic7XG5cbigoKT0+e1xuXG4gIC8vIGdsb2JhbOOCquODluOCuOOCp+OCr+ODiFxuICBpZiAod2luZG93LmdiPT09dW5kZWZpbmVkKSB3aW5kb3cuZ2IgPSB7fTtcbiAgd2luZG93LmdiLmluID0ge307IC8vaW5zdGFuY2VcblxuICBnYi5pbi5jb21tb24gPSBuZXcgQ29tbW9uKCk7XG4gIGdiLmluLm1haW4gPSBuZXcgTWFpbigpO1xuXG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvVG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29tbW9uXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBDb25mIGZyb20gJy4uL0NvcmUvQ29uZic7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9teWxpYnMvVXRpbCc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vdXRpbHMvVXRpbHMnO1xuaW1wb3J0IEZ1bmMgZnJvbSAnLi4vbXlsaWJzL0Z1bmMnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cblx0c2V0dXAoKSB7XG5cblx0XHQvKipcbiAgICAgKiBAdHlwZSB7Q29uZn0gOiDliJ3mnJ/lgKTjga7oqK3lrprjg7vjg4fjg7zjgr/jga7phY3nva5cblx0XHQgKiBAdHlwZSB7VXRpbH0gOiBVdGls6Zai5pWw44Gu5Yid5pyf5YyWXG5cdFx0ICogQHR5cGUge0Z1bmN9IDog44Kk44OZ44Oz44OI44Oe44ON44O844K444Oj44O844Gu6Kit572uXG5cdFx0ICovXG4gICAgZ2IuaW4uY29uZiA9IG5ldyBDb25mKCk7XG4gICAgZ2IuaW4udSA9IG5ldyBVdGlsKCk7XG4gICAgZ2IuaW4uZiA9IG5ldyBGdW5jKCk7XG5cbiAgICBnYi5pbi51dCA9IG5ldyBVdGlscygpO1xuXG4gIH1cblxuICBvblJlYWR5KCkge1xuXG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbigncmVhZHknLCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENvbmZcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuLy8gaW1wb3J0IFNvdW5kRGF0YSBmcm9tICcuL0RhdGEvU291bmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25mIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDmnKznlarjg5Xjg6njgrBcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgXG4gICAgdGhpcy5SRUxFQVNFID0gdHJ1ZTtcbiAgICAvLyB0aGlzLlJFTEVBU0UgPSBmYWxzZTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5Xjg6njgrDplqLpgKNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLkZMRyA9IHtcbiAgICAgIExPRzp0cnVlLCAgLy8g44Ot44Kw5Ye65YqbXG4gICAgICBQQVJBTTp0cnVlLCAvLyDjg5Hjg6njg6Hjg7zjgr/jg4Hjgqfjg4Pjgq9cbiAgICAgIFNUQVRTOnRydWUgIC8vIFN0YXRz6KGo56S6XG4gICAgfTtcbiAgICBpZiAoIXRoaXMuUkVMRUFTRSkge1xuICAgICAgdGhpcy5GTEcgPSB7XG4gICAgICAgIExPRzpmYWxzZSxcbiAgICAgICAgUEFSQU06ZmFsc2UsXG4gICAgICAgIFNUQVRTOmZhbHNlIFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg5Z+65pysIHdpZHRoIGhlaWdodFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuZGVmVyA9IDEzMDA7XG4gICAgdGhpcy5kZWZIID0gODUwO1xuXG4gICAgdGhpcy5XID0gMTIwMDtcbiAgICB0aGlzLkggPSA3NTA7XG5cbiAgICB0aGlzLnNwVyA9IDM3NTtcbiAgICB0aGlzLnNwSCA9IDY2NztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5bjg6zjgqTjgq/jg53jgqTjg7Pjg4hcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmJwID0gNzY4O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIG1vZGVcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIHRoaXMua2V5cyA9IFtcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ21vdmllJyxcbiAgICAgICAgICAndmFsdWUnOiBbJ21vcm5pbmcnLCdhZnRlcm5vb24nLCduaWdodCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ2RhdGEnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnZGF0YTAxJywnZGF0YTAyJywnZGF0YTAzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgICdrZXknOiAncHJvZHVjdCcsXG4gICAgICAgICAgJ3ZhbHVlJzogWycwMSddLFxuICAgICAgfSxcbiAgICBdXG4gICAgdGhpcy5zd2l0Y2hNb2RlKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgc291bmQgZGF0YVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHRoaXMuc291bmREYXRhID0gbmV3IFNvdW5kRGF0YSgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHNlYzAyIGJnIEltZyBOdW1cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnNlYzAySW1nTnVtID0gMzk2O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHlvdXR1YmUgSURcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnlvdXR1YmVJRDAxID0gJ3hXMm9OcE5yS2QwJztcbiAgICB0aGlzLnlvdXR1YmVJRDAyID0gJ3QyV2VSUmRBRmVJJztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICB3ZWIgZm9udCBsb2FkZWRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLndlYkZvbnRMb2FkZWQgPSBmYWxzZTtcblxuICB9XG5cblxuICBzd2l0Y2hNb2RlKCl7XG5cbiAgICB2YXIgaSwga2V5LCBsZW4sIHBhcmFtLCByZWYsIHJlZjEsIHZhbHVlO1xuXG4gICAgcmVmID0gbG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykuc3BsaXQoJyYnKTtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgcGFyYW0gPSByZWZbaV07XG4gICAgICByZWYxID0gcGFyYW0uc3BsaXQoJz0nKSwga2V5ID0gcmVmMVswXSwgdmFsdWUgPSByZWYxWzFdO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMua2V5cy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgIHZhciBvYmogPSB0aGlzLmtleXNbal07XG5cbiAgICAgICAgLy8g44OR44Op44Oh44O844K/44GM44Kt44O844Go5LiA57eS44Gg44Gj44Gf44KJXG4gICAgICAgIGlmIChvYmoua2V5ID09PSBrZXkpIHtcblxuICAgICAgICAgIC8vIOWQhOWApOOBqOavlOi8g1xuICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgb2JqLnZhbHVlLmxlbmd0aDsgaysrKSB7XG5cbiAgICAgICAgICAgIHZhciB2YWwgPSBvYmoudmFsdWVba107XG5cbiAgICAgICAgICAgIC8vIOOCreODvOOCknRoaXMua2V5c+OBrmtleeOBq+OAgXZhbHVl44KS5q+U6LyD44GX44Gm5ZCM5YCk44Gg44Gj44Gf44KC44Gu44GrXG4gICAgICAgICAgICBpZiAodmFsID09PSB2YWx1ZSkgdGhpc1tvYmoua2V5XSA9IHZhbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH07XG5cblxuICAgICAgICB9O1xuXG4gICAgICAgIFxuICAgICAgfTtcblxuICAgIH1cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvcmUvQ29uZi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiDkvr/liKnplqLmlbDjgq/jg6njgrlcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBVdGlsXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWwge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5pc1NldFNQU2l6ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5zdGFydFRpbWUgPSBudWxsO1xuICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBudWxsO1xuICAgIHRoaXMubm93ID0gbmV3IERhdGUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIE1hdGhcbiAgICovXG5cblxuICAvKipcbiAgICog44Op44Oz44OA44Og44Gq5YCk44KS6L+U44GZXG4gICAqIEBwYXJhbSBtaW4gOiDmnIDlsI/lgKQoaW50KVxuICAgKiBAcGFyYW0gbWF4IDog5pyA5aSn5YCkKGludClcbiAgICogQHJldHVybnMge251bWJlcn0gOiBtaW7jgYvjgoltYXjjgb7jgafjga7jg6njg7Pjg4Djg6DjgarmlbTmlbAoaW50KVxuICAgKi9cbiAgcmFuZG9tKG1pbiwgbWF4KSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqICgobWF4ICsgMSkgLSBtaW4pICsgbWluKSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6njg7Pjg4Djg6DjgarmlbTmlbDjgpIy44Gk44Gu56+E5Zuy44GL44KJ5Y+W5b6XXG4gICAqIEBwYXJhbSBtaW4xIDog5pyA5bCP5YCkMShpbnQpXG4gICAqIEBwYXJhbSBtYXgxIDog5pyA5aSn5YCkMShpbnQpXG4gICAqIEBwYXJhbSBtaW4yIDog5pyA5bCP5YCkMihpbnQpXG4gICAqIEBwYXJhbSBtYXgyIDog5pyA5aSn5YCkMihpbnQpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IDogbWlu44GL44KJbWF444G+44Gn44Gu44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgICovXG4gIHJhbmRvbTIobWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuICAgIFxuICAgIGlmICh0aGlzLmhpdCgyKSkge1xuICAgICAgcmV0dXJuIHRoaXMucmFuZG9tKG1pbjEsIG1heDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5kb20obWluMiwgbWF4Mik7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogMS9AcmFuZ2Xjga7norrnjofjgad0cnVl44KS5Y+W5b6XXG4gICAqIEBwYXJhbSByYW5nZSA6IOavjeaVsChpbnQpXG4gICAqIEByZXR1cm5zIHtib29sZWFufSA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgICovXG4gIGhpdChyYW5nZSkge1xuXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKDAsIHJhbmdlIC0gMSkgPT09IDA7XG5cbiAgfVxuICBcbiAgLy8gMOOBi+OCieevhOWbsuWGheOBp+ODqeODs+ODgOODoOOBquaVtOaVsOOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAdmFsIDog56+E5ZuyKGludClcbiAgLy8gcmV0dXJuIDog44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZ2UodmFsKSB7XG5cbiAgICByZXR1cm4gdGhpcy5yYW5kb20oLXZhbCwgdmFsKTtcblxuICB9XG4gIFxuICAvLyDlgKTjgpLjg57jg4Pjg5Tjg7PjgrBcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG51bSA6IOODnuODg+ODlOODs+OCsOOBmeOCi+WApChOdW1iZXIpXG4gIC8vIEByZXNNaW4gOiDntZDmnpzjgajjgarjgovlgKTjga7mnIDlsI/lgKQoTnVtYmVyKVxuICAvLyBAcmVzTWF4IDog57WQ5p6c44Go44Gq44KL5YCk44Gu5pyA5aSn5YCkKE51bWJlcilcbiAgLy8gQGJhc2VNaW4gOiDlhYPjgajjgarjgovlgKTjga7mnIDlsI/lgKQoTnVtYmVyKVxuICAvLyBAYmFzZU1heCA6IOWFg+OBqOOBquOCi+WApOOBruacgOWkp+WApChOdW1iZXIpXG4gIC8vIHJldHVybiA6IOODnuODg+ODlOODs+OCsOOBleOCjOOBn+WApChOdW1iZXIpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG1hcChudW0sIHJlc01pbiwgcmVzTWF4LCBiYXNlTWluLCBiYXNlTWF4KSB7XG5cbiAgICB2YXIgcDtcbiAgICBpZiAobnVtIDwgYmFzZU1pbikge1xuICAgICAgcmV0dXJuIHJlc01pbjtcbiAgICB9XG4gICAgaWYgKG51bSA+IGJhc2VNYXgpIHtcbiAgICAgIHJldHVybiByZXNNYXg7XG4gICAgfVxuICAgIHAgPSAocmVzTWF4IC0gcmVzTWluKSAvIChiYXNlTWF4IC0gYmFzZU1pbik7XG5cbiAgICByZXR1cm4gKChudW0gLSBiYXNlTWluKSAqIHApICsgcmVzTWluO1xuXG4gIH0gICAgXG4gIFxuICAvLyDmlbDlgKTjgavlsI/mlbDngrnnrKxAbuS9jeOBvuOBp+OCkuOBpOOBkeOBn+aWh+Wtl+WIl+OCkui/lOOBmVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAbnVtIDog5YCkKE51bWJlcilcbiAgLy8gQG4gOiDlsI/mlbDngrnjga7kvY0oaW50KVxuICAvLyByZXR1cm4gOiDlpInmj5vjgZXjgozjgZ/lgKQoU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkZWNpbWFsKG51bSwgbikge1xuICAgIHZhciBpLCBwb3M7XG4gICAgbnVtID0gU3RyaW5nKG51bSk7XG4gICAgcG9zID0gbnVtLmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVtLnNwbGl0KFwiLlwiKVswXTtcbiAgICB9XG4gICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgIG51bSArPSBcIi5cIjtcbiAgICAgIGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICAgIG51bSArPSBcIjBcIjtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG4gICAgbnVtID0gbnVtLnN1YnN0cigwLCBwb3MpICsgbnVtLnN1YnN0cihwb3MsIG4gKyAxKTtcbiAgICByZXR1cm4gbnVtO1xuICB9XG5cbiAgY2xhbXAobnVtZXJhdG9yLGRlbm9taW5hdG9yLHZhbCkge1xuXG4gICAgcmV0dXJuIHZhbCAqIChudW1lcmF0b3IgLyBkZW5vbWluYXRvcik7XG5cbiAgfVxuXG5cdC8qKlxuICAgKiDjg6njgrjjgqLjg7PjgpLop5LluqbjgavlpInmj5tcblx0ICogQHBhcmFtIHJhZGlhbnNcblx0ICogQHJldHVybnMge251bWJlcn1cblx0ICovXG4gIGRlZ3JlZShyYWRpYW5zKSB7XG5cbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG5cbiAgfVxuXG4gIC8vIHRvIHJhZGlhbnNcbiAgcmFkaWFuKGFuZ2xlKSB7IFxuXG4gICAgcmV0dXJuIGFuZ2xlICogTWF0aC5QSSAvIDE4MDsgLy8x5bqm5L2V44Op44K444Ki44Oz44GLXG5cbiAgfVxuXG4gIGRpc3QocDEsIHAyKSB7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAyLnggLSBwMS54LCAyKSArIE1hdGgucG93KHAyLnkgLSBwMS55LCAyKSk7XG5cbiAgfVxuXG4gIGFzY2VuZChhcnIpIHtcblxuICAgIGFyci5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICBpZiggYSA+IGIgKSByZXR1cm4gLTE7XG4gICAgICBpZiggYSA8IGIgKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICAgIC8vIHZhciBhID0gWzUsMyw5LDEsMTBdXG4gICAgLy8g57WQ5p6cOjEwLDksNSwzLDFcblxuICB9XG5cbiAgZGVzY2VuZChhcnIpIHtcblxuICAgIGFyci5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICBpZiggYSA8IGIgKSByZXR1cm4gLTE7XG4gICAgICBpZiggYSA+IGIgKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgLy8gdmFyIGEgPSBbNSwzLDksMSwxMF1cbiAgICAvLyDntZDmnpw6MSwzLDUsOSwxMFxuXG4gIH1cblxuICAvLyBtYXAodmFsdWUsIG1pbjAxLCBtYXgwMSwgbWluMDIsIG1heDAyKSB7XG5cbiAgLy8gICB2YXIgZGlzMDEgPSBtYXgwMSAtIG1pbjAxO1xuICAvLyAgIHZhciBkaXMwMiA9IG1heDAyIC0gbWluMDJcblxuICAvLyAgIHZhciByYXRlID0gZGlzMDIgLyBkaXMwMTtcblxuICAvLyAgIHZhbHVlID0gdmFsdWUgKiByYXRlO1xuXG4gIC8vICAgcmV0dXJuIHZhbHVlO1xuICAvLyB9XG5cbiAgY29uc3RyYWluKHZhbHVlLCBtaW4sIG1heCkge1xuXG4gICAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgodmFsdWUsIG1pbikpO1xuXG4gICAgLy8gaWYgKHZhbHVlIDw9IGxvdykgdmFsdWUgPSBsb3c7XG4gICAgLy8gaWYgKHZhbHVlID49IGhpZ2gpIHZhbHVlID0gaGlnaDsgICAgIFxuICAgIC8vIHJldHVybiB2YWx1ZTtcblxuICB9XG5cbiAgLy8g44Om44OL44O844KvSUTjgpLlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdW5pcXVlKCkge1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIH1cbiAgXG4gIC8vICoqanF1YXJ55L2/55SoXG4gIC8vIOODnOOCv+ODs+ODouODvOODieWkieabtFxuICAvLyB0cnVl44Gq44KJ44Kr44O844K944Or44GM44Od44Kk44Oz44K/44O844Gu5b2i44GrXG4gIC8vIGZhbHNl44Gq44KJ44OH44OV44Kp44Or44OI44Gu44Kr44O844K944Or44GrXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBmbGcgOiDpgannlKjjgZnjgovjgYvjganjgYbjgYsoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYnV0dG9uTW9kZShmbGcpIHtcblxuICAgIGlmIChmbGcpIHtcbiAgICAgIHJldHVybiAkKFwiYm9keVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJChcImJvZHlcIikuY3NzKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgcG9ydHJhaXQgLyBsYW5kc2NhcGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzRGlyZWN0aW9uICgpIHtcblxuICAgIHZhciBXID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIEggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAoSCA+IFcpIHtcbiAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwicG9ydHJhaXRcIik7XG4gICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImxhbmRzY2FwZVwiKTtcbiAgICB9ZWxzZXtcbiAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwibGFuZHNjYXBlXCIpO1xuICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJwb3J0cmFpdFwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgcmVzcG9uc2l2ZSDmqKrluYXjgpLopovjgotcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzUmVzcG9uc2l2ZSAoYnApIHtcblxuICAgIGlmIChicD09dW5kZWZpbmVkKSBicD0zNzU7XG5cbiAgICB2YXIgVyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBIID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYgKFcgPiBicCkge1xuICAgICAgdGhpcy5pc1Jlc1NQID0gZmFsc2U7XG4gICAgICB0aGlzLmlzUmVzUEMgPSB0cnVlO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpc1Jlc3BvbnNpdmVTUCcpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc1Jlc3BvbnNpdmVQQycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzUmVzU1AgPSB0cnVlO1xuICAgICAgdGhpcy5pc1Jlc1BDID0gZmFsc2U7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzUmVzcG9uc2l2ZVNQJyk7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzUmVzcG9uc2l2ZVBDJyk7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFVSTFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge2FycmF5fVxuICAgKi9cbiAgZ2V0UGFyYW0oKSB7XG5cbiAgICB2YXIgdXJsID0gbG9jYXRpb24uaHJlZjtcbiAgICB2YXIgcGFyYW0gPSB1cmwuc3BsaXQoJz8nKVsxXTtcbiAgICBpZiAocGFyYW09PXVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB2YXIgcGFyYW1JdGVtcyA9IHBhcmFtLnNwbGl0KCcmJyk7XG4gICAgdmFyIGxpc3QgPSB7fTtcbiAgXG4gICAgZm9yKCB2YXIgaSA9IDA7IGk8cGFyYW1JdGVtcy5sZW5ndGg7IGkrKyApe1xuXG4gICAgICAgIHBhcmFtSXRlbSA9IHBhcmFtSXRlbXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgbGlzdFtwYXJhbUl0ZW1bMF1dID0gcGFyYW1JdGVtWzFdO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg4/jg4Pjgrfjg6Xlj5blvpcgOiBsb2NhdGlvbi5oYXNo44GuI+OCkuWJiumZpOOBl+OBn+OChOOBpFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgaGFzaCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuXG4gIH1cblxuICAvKipcbiAgICogY29va2ll5Y+W5b6XXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBnZXRDb29raWUoa2V5KSB7XG5cbiAgICB2YXIgYSwgYXJyLCBpLCBsLCBsZW4xLCB2YWw7XG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZSA9PT0gdm9pZCAwIHx8IGRvY3VtZW50LmNvb2tpZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGFyciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xuICAgIGZvciAoaSA9IGwgPSAwLCBsZW4xID0gYXJyLmxlbmd0aDsgbCA8IGxlbjE7IGkgPSArK2wpIHtcbiAgICAgIHZhbCA9IGFycltpXTtcbiAgICAgIGEgPSB2YWwuc3BsaXQoXCI9XCIpO1xuICAgICAgaWYgKGFbMF0gPT09IGtleSkge1xuICAgICAgICByZXR1cm4gYVsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG5cbiAgfSAgICAgIFxuXG4gIC8qKlxuICAgKiBjb29raWXoqK3lrppcbiAgICogQHBhcmFtIGtleSA6IOODkeODqeODoeODvOOCv+WQjVxuICAgKiBAcGFyYW0gdmFsIDog5YCkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBzZXRDb29raWUoa2V5LCB2YWwpIHtcblxuICAgIHJldHVybiBkb2N1bWVudC5jb29raWUgPSBrZXkgKyBcIj1cIiArIHZhbDtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBDb2xvclxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyByZ2LjgYvjgolIRVjjgqvjg6njg7zlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHIgOiAwfjI1NVxuICAvLyBAZyA6IDB+MjU1XG4gIC8vIEBiIDogMH4yNTVcbiAgLy8gcmV0dXJuIDogZXggXCIjRkZGRkZGXCJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0SGV4Q29sb3IocixnLGIpIHtcbiAgICAgIHZhciBzdHI7XG4gICAgICBzdHIgPSAociA8PCAxNiB8IGcgPDwgOCB8IGIpLnRvU3RyaW5nKDE2KTtcbiAgICAgIHJldHVybiBcIiNcIiArIG5ldyBBcnJheSg3IC0gc3RyLmxlbmd0aCkuam9pbihcIjBcIikgKyBzdHI7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFN0cmluZ1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc0NvbnRhaW4oc3RyLGNvbnRhaW4pIHtcblxuICAgIC8vIHN0cuOBruS4reOBqyxjb250YWlu44GM5a2Y5Zyo44GX44Gf44KJXG4gICAgaWYgKCBzdHIuaW5kZXhPZihjb250YWluKSAhPSAtMSApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9XG5cbiAgLy8gMOWfi+OCgeOBpzLmoYHjgavjgZnjgovplqLmlbBcbiAgYWRkMChzdHIsbnVtPS0yKXtcbiAgICBcbiAgICByZXR1cm4gKCBcIjAwMDAwMDAwMDAwMFwiICsgc3RyICkuc3Vic3RyKCBudW0gKTtcblxuICB9XG5cbiAgZmxvYXRGb3JtYXQoIG51bWJlciwgbiApIHtcblxuICAgIHZhciBfcG93ID0gTWF0aC5wb3coIDEwICwgbiApIDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCggbnVtYmVyICogX3BvdyApIC8gX3BvdyA7XG5cbiAgfVxuICAgIFxuICAvLyDlgKTmrrXooajoqJhcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJpY2UobnVtKSB7XG5cbiAgICByZXR1cm4gU3RyaW5nKG51bSkucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoPyFcXGQpKS9nLCAnJDEsJyk7XG5cbiAgfVxuXG4gIC8vIOaWh+Wtl+WIl+OCkuWPjei7olxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAc3RyIDog5paH5a2X5YiXKFN0cmluZylcbiAgLy8gcmV0dXJuIDog5paH5a2X5YiXKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RyUmV2ZXJzZShzdHIpIHtcblxuICAgIHZhciBpLCBsZW4sIHJlcztcbiAgICByZXMgPSBcIlwiO1xuICAgIGxlbiA9IHN0ci5sZW5ndGg7XG4gICAgaSA9IDE7XG4gICAgd2hpbGUgKGkgPD0gbGVuKSB7XG4gICAgICByZXMgKz0gc3RyLnN1YnN0cigtaSwgMSk7XG4gICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG5cbiAgfVxuICBcbiAgLy8g5paH5a2X5YiX44Gu5YWo572u5o+bXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEB2YWwgIDog5paH5a2X5YiXXG4gIC8vIEBvZWcgIDog572u5o+b5YmN44Gu5paH5a2X5YiXXG4gIC8vIEBkZXN0IDog572u5o+b5b6M44Gu5paH5a2X5YiXXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcGxhY2VBbGwodmFsLCBvcmcsIGRlc3QpIHtcblxuICAgIHJldHVybiB2YWwuc3BsaXQob3JnKS5qb2luKGRlc3QpO1xuXG4gIH0gICAgXG4gIFxuICBzdHJSZXBsYWNlKHN0ciwgYmVmb3JlLCBhZnRlcikge1xuXG4gICAgdmFyIHIgPSBuZXcgUmVnRXhwKCBiZWZvcmUsICdnJyk7XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoIHIgLCBhZnRlciApO1xuXG4gIH0gICAgXG4gIFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIERhdGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZ2V0Tm93KCkge1xuXG4gICAgdGhpcy5ub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIH1cblxuICBzdGFydCgpIHtcblxuICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy5ub3cuZ2V0VGltZSgpO1xuXG4gIH1cblxuICBlbGFwc2VkKCkge1xuXG4gICAgdGhpcy5lbGFwc2VkVGltZSA9IHRoaXMubm93LmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lO1xuXG4gIH1cblxuICBtKCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoIHRoaXMuZWxhcHNlZFRpbWUgKyAxMDAgLyA2MCApO1xuXG4gIH1cblxuICBzKCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5lbGFwc2VkVGltZSAvIDEwMDApO1xuXG4gIH1cblxuICBtcygpIHtcblxuICAgIHJldHVybiB0aGlzLmVsYXBzZWRUaW1lO1xuICAgIFxuICB9XG5cbiAgdGltZSgpIHtcblxuICAgIHRoaXMuZ2V0Tm93KCk7XG5cbiAgICB0aGlzLmhvdXIgPSB0aGlzLm5vdy5nZXRIb3VycygpOyAgICAgICAgICAvLyDmmYJcbiAgICB0aGlzLm1pbnV0ZSA9IHRoaXMubm93LmdldE1pbnV0ZXMoKTsgICAgICAvLyDliIZcbiAgICB0aGlzLnNlY29uZCA9IHRoaXMubm93LmdldFNlY29uZHMoKTtcbiAgICB0aGlzLm1pbGxTZWNvbmQgPSB0aGlzLm5vdy5nZXRNaWxsaXNlY29uZHMoKTtcblxuICB9XG5cbiAgZGF0ZSgpIHtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXREYXRlKCk7XG5cbiAgfVxuXG4gIG1vbnRocygpIHtcblxuICAgIHZhciBtb250aGRheXMgPSBuZXcgQXJyYXkoMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMSk7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0TW9udGgoKSArIDE7XG5cbiAgfVxuXG4gIHllYXIoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0RnVsbFllYXIoKTtcblxuICB9XG5cbiAgZGF5KCkge1xuXG4gICAgLy8g5puc5pelICjml6XmnKzoqp4pXG4gICAgdmFyIHdlZWtEYXlKUCA9IFtcIuaXpVwiLFwi5pyIXCIsXCLngatcIixcIuawtFwiLFwi5pyoXCIsXCLph5FcIixcIuWcn1wiXSA7XG4gICAgdmFyIHdESiA9IHdlZWtEYXlKUFt0aGlzLm5vdy5nZXREYXkoKV0gO1xuXG4gICAgLy8g5puc5pelICjoi7Hoqp4pXG4gICAgdmFyIHdlZWtEYXlFTiA9IFtcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSA7XG4gICAgdmFyIHdERSA9IHdlZWtEYXlFTlt0aGlzLm5vdy5nZXREYXkoKV0gO1xuXG4gIH1cbiAgXG4gIC8vIOaVsOaXpeW+jOOBrkRhdGXjgqrjg5bjgrjjgqfjgq/jg4jlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYWZ0ZXJEYXkoZGF0ZSwgbnVtKSB7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyBOdW1iZXIobnVtKSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIERhdGEgdHlwZSBjaGVja1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc09iamVjdCh2YWx1ZSwgaWdub3JlQXJyYXkpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsO1xuICB9XG5cbiAgaXNOdW1iZXIodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xuICB9XG5cbiAgaXNTdHJpbmcodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGlzQXJyYXkodmFsdWUpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9XG5cbiAgaXNOdWxsKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG4gIH1cblxuICBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIG90aGVyXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRJbWdTUFNpemUgKCR0YXJnZXQpe1xuXG4gICAgLy8gcmVzcG9uc2l2ZSBzcOOBruOBqOOBjeWHpueQhlxuICAgIGlmICghdGhpcy5pc1Jlc1NQKSByZXR1cm47XG4gICAgLy8g5LiA5bqm44Gg44GR5Yem55CGXG4gICAgLy8gaWYgKHRoaXMuaXNTZXRTUFNpemUpIHJldHVybjtcbiAgICAvLyB0aGlzLmlzU2V0U1BTaXplID0gdHJ1ZTtcblxuICAgIHZhciAkaW1nID0gJHRhcmdldCxcbiAgICAgICAgbGVuID0gJGltZy5sZW5ndGg7XG5cbiAgICAkaW1nLmVhY2goZnVuY3Rpb24oaSkge1xuXG4gICAgICAgIHZhciB3ID0gTWF0aC5mbG9vcigkKHRoaXMpLndpZHRoKCkgLyAyKSxcbiAgICAgICAgICAgIGggPSBNYXRoLmZsb29yKCQodGhpcykuaGVpZ2h0KCkgLyAyKTtcblxuICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgJ3dpZHRoJzogdyxcbiAgICAgICAgICAgICdoZWlnaHQnOiBoLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobGVuID09IGkgKyAxKSAkKHdpbmRvdykudHJpZ2dlcignc2V0U3BaaWVFbmQnKTtcblxuICAgIH0pO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gIOOCueODnuODm+aTjeS9nOeEoeWKuVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0UHJldmVudCgpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICQod2luZG93KS5vbigndG91Y2htb3ZlLm5vQ29udHJvbCcsIGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt9KTtcblxuICB9XG5cbiAgcmVtb3ZlUHJldmVudCgpIHtcblxuICAgICQod2luZG93KS5vZmYoJ3RvdWNobW92ZS5ub0NvbnRyb2wnKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICBob3N0LHByb3Rjb2xcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByb3RvY29sKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sO1xuXG4gIH1cbiAgICBcbiAgaG9zdCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAvLyByZXR1cm4gbG9jYXRpb24uaG9zdFxuXG4gIH1cblxuICBwb3J0KCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBvcnQ7XG5cbiAgfVxuICAgICAgICBcbiAgcGF0aCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRobmFtZTtcblxuICB9XG5cbiAgcHJldmVudERlZmF1bHQoZSkge1xuXG4gICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIGlmIChlLnByZXZlbnREZWZhdWx0KVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMoZSkge1xuXG4gICAgaWYgKGtleXNbZS5rZXlDb2RlXSkge1xuICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICB9XG5cbiAgZGlzYWJsZVNjcm9sbCgpIHtcblxuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikgLy8gb2xkZXIgRkZcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIHdpbmRvdy5vbndoZWVsID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gbW9kZXJuIHN0YW5kYXJkXG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG9sZGVyIGJyb3dzZXJzLCBJRVxuICAgIHdpbmRvdy5vbnRvdWNobW92ZSAgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBtb2JpbGVcbiAgICBkb2N1bWVudC5vbmtleWRvd24gID0gdGhpcy5wcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXM7XG5cbiAgfVxuXG4gIGVuYWJsZVNjcm9sbCgpIHtcblxuICAgIGlmICh3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSBudWxsOyBcbiAgICB3aW5kb3cub253aGVlbCA9IG51bGw7IFxuICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IG51bGw7XG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9VdGlsLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogVXRpbHNcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbi8qKlxuICogYW5pbWF0aW9uXG4gKi9cbmltcG9ydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSAnLi9hbmltYXRpb24vcmVxdWVzdEFuaW1hdGlvbkZyYW1lJztcbmltcG9ydCBjYW5jZWxBbmltYXRpb25GcmFtZSBmcm9tICcuL2FuaW1hdGlvbi9jYW5jZWxBbmltYXRpb25GcmFtZSc7XG5cbmltcG9ydCBBcnJheSBmcm9tICcuL2FycmF5L0FycmF5JztcbmltcG9ydCBjaGVja0NsaWVudCBmcm9tIFwiLi91YS9jaGVja0NsaWVudFwiO1xuXG5pbXBvcnQgcHJlbG9hZEltZyBmcm9tICcuL2ltZy9wcmVsb2FkSW1nJztcbmltcG9ydCBzZXRVcEJ0blR3aXR0ZXIgZnJvbSAnLi9zbnMvc2V0VXBCdG5Ud2l0dGVyJztcbmltcG9ydCBzZXRVcEJ0bkxpbmUgZnJvbSAnLi9zbnMvc2V0VXBCdG5MaW5lJztcbmltcG9ydCBzZXRVcEJ0bkZhY2VCb29rIGZyb20gJy4vc25zL3NldFVwQnRuRmFjZUJvb2snO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuX3NldHVwKCk7XG4gICAgXG4gIH1cblxuICBfc2V0dXAoKSB7XG4gICAgLy8gd2luZG93LmNvbnNvbGUubG9nKCdVdGlsc19TZXR1cCEhJyk7XG4gICAgXG4gICAgLyoqXG4gICAgICogYXJyYXlcbiAgICAgKi9cbiAgICB0aGlzLkFycmF5ID0gbmV3IEFycmF5KCk7XG5cblxuICAgIC8qKlxuICAgICAqIHVhXG4gICAgICovXG4gICAgdGhpcy5jaGVja0NsaWVudCA9IG5ldyBjaGVja0NsaWVudCgpO1xuXG5cbiAgICAvKipcbiAgICAgKiBpbWdcbiAgICAgKi9cbiAgICAvLyB0aGlzLnByZWxvYWRJbWcgPSBuZXcgcHJlbG9hZEltZygpO1xuXG4gICAgLyoqXG4gICAgICogc25zXG4gICAgICovXG4gICAgLy8gdGhpcy5zZXRVcEJ0blR3aXR0ZXIgPSBuZXcgc2V0VXBCdG5Ud2l0dGVyO1xuICAgIC8vIHRoaXMuc2V0VXBCdG5MaW5lID0gbmV3IHNldFVwQnRuTGluZTtcbiAgICAvLyB0aGlzLnNldFVwQnRuRmFjZUJvb2sgPSBuZXcgc2V0VXBCdG5GYWNlQm9vaztcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9VdGlscy5qcyIsIi8qKlxuICogcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gKi9cbndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoKGZ1bmN0aW9uKF90aGlzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyAzMCk7XG4gICAgICAgIH07XG4gIH07XG59KSh0aGlzKSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FuaW1hdGlvbi9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMiLCIvKipcbiAqIGNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gKi9cbndpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9ICgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH07XG4gIH07XG59KSh0aGlzKSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FuaW1hdGlvbi9jYW5jZWxBbmltYXRpb25GcmFtZS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiDphY3liJfjga7mk43kvZzns7tcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBBcnJheVxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyYXkge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG5cbiAgfVxuXG5cdC8qKlxuXHQgKiDphY3liJflhoXjga7jg6njg7Pjg4Djg6DjgarlgKTjgpLjgbLjgajjgaTlj5blvpdcblx0ICogQHBhcmFtIGFyciA6IOmFjeWIl1xuXHQgKiBAcmV0dXJucyB7Kn0gOiDphY3liJflhoXjga7lgKRcblx0ICovXG4gIGFyclJhbmQoYXJyKSB7XG5cbiAgICByZXR1cm4gYXJyW3RoaXMucmFuZG9tKDAsIGFyci5sZW5ndGggLSAxKV07XG5cbiAgfVxuXG5cdC8qKlxuICAgKiDphY3liJfjgpLjg6njg7Pjg4Djg6DjgavkuKbjgbnmm7/jgYhcblx0ICogQHBhcmFtIGFyciA6IOmFjeWIlyhBcnJheSlcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKi9cbiAgc2h1ZmZsZShhcnIpIHtcblxuICAgIGxldCBBcnIgPSBbXTtcbiAgICBBcnIgPSBhcnIuc2xpY2UoKTtcbiAgICB2YXIgaSA9IGFyci5sZW5ndGg7XG4gICAgd2hpbGUoaSl7XG4gICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSppKTtcbiAgICAgIHZhciB0ID0gQXJyWy0taV07XG4gICAgICBBcnJbaV0gPSBBcnJbal07XG4gICAgICBBcnJbal0gPSB0O1xuICAgIH1cbiAgICByZXR1cm4gQXJyO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYXJyYXkvQXJyYXkuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzogVWHliKTliKVcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBjaGVja0NsaWVudFxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYnMvdWEtcGFyc2VyLm1pbi5qc1wiKTtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGVja0NsaWVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnVhID0gbmV3IHBhcnNlcigpO1xuXG4gIH1cblxuICAvKipcbiAgICogSUXjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0lFKCkge1xuICAgIGxldCBicm93c2VyID0gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgICByZXR1cm4gYnJvd3NlciA9PT0gJ0lFJyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZm9444GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNGaXJlZm94KCkge1xuICAgIGxldCBicm93c2VyID0gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgICByZXR1cm4gYnJvd3NlciA9PT0gJ0ZpcmVmb3gnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENocm9tZeOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQ2hyb21lKCkge1xuICAgIGxldCBicm93c2VyID0gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgICByZXR1cm4gYnJvd3NlciA9PT0gJ0Nocm9tZScgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogU2FmYXJp44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNTYWZhcmkoKSB7XG4gICAgbGV0IGJyb3dzZXIgPSB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICAgIHJldHVybiBicm93c2VyID09PSAnU2FmYXJpJyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6Ljg5DjgqTjg6vjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBpc01vYmlsZSgpIHtcbiAgICBsZXQgZGV2aWNlID0gdGhpcy51YS5nZXREZXZpY2UoKS50eXBlO1xuICAgIHJldHVybiBkZXZpY2UgPT09ICdtb2JpbGUnID8gdHJ1ZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICog44K/44OW44Os44OD44OI44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgaXNUYWJsZXQoKSB7XG4gICAgbGV0IGRldmljZSA9IHRoaXMudWEuZ2V0RGV2aWNlKCkudHlwZTtcbiAgICByZXR1cm4gZGV2aWNlID09PSAndGFibGV0JyA/IHRydWUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIE9T5ZCN44KS5Y+W5b6XXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBvcygpIHtcbiAgICByZXR1cm4gdGhpcy51YS5nZXRPUygpLm5hbWU7XG4gIH1cblxuICAvKipcbiAgICog44OH44OQ44Kk44K55ZCN44KS5Y+W5b6XXG4gICAqIEByZXR1cm5zIHt2ZW5kb3J8e0hUQywgU3ByaW50fX1cbiAgICovXG4gIGRldmljZV9uYW1lKCkge1xuICAgIGxldCBkZXZpY2VfbmFtZSA9IHRoaXMudWEuZ2V0RGV2aWNlKCkudmVuZG9yO1xuICAgIHJldHVybiBkZXZpY2VfbmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg5bjg6njgqbjgrblkI3jgpLlj5blvpdcbiAgICovXG4gIGJyb3dzZXJfbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6bjg7zjgrbjg7zjgqjjg7zjgrjjgqfjg7Pjg4jmg4XloLHvvJrlhajjgabjgpLlj5blvpdcbiAgICovXG4gIGFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy51YS5nZXRVQSgpO1xuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3VhL2NoZWNrQ2xpZW50LmpzIiwiLyoqXG4gKiBVQVBhcnNlci5qcyB2MC43LjEyXG4gKiBMaWdodHdlaWdodCBKYXZhU2NyaXB0LWJhc2VkIFVzZXItQWdlbnQgc3RyaW5nIHBhcnNlclxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhaXNhbG1hbi91YS1wYXJzZXItanNcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxMi0yMDE2IEZhaXNhbCBTYWxtYW4gPGZ5emxtYW5AZ21haWwuY29tPlxuICogRHVhbCBsaWNlbnNlZCB1bmRlciBHUEx2MiAmIE1JVFxuICovKGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49XCIwLjcuMTJcIixyPVwiXCIsaT1cIj9cIixzPVwiZnVuY3Rpb25cIixvPVwidW5kZWZpbmVkXCIsdT1cIm9iamVjdFwiLGE9XCJzdHJpbmdcIixmPVwibWFqb3JcIixsPVwibW9kZWxcIixjPVwibmFtZVwiLGg9XCJ0eXBlXCIscD1cInZlbmRvclwiLGQ9XCJ2ZXJzaW9uXCIsdj1cImFyY2hpdGVjdHVyZVwiLG09XCJjb25zb2xlXCIsZz1cIm1vYmlsZVwiLHk9XCJ0YWJsZXRcIixiPVwic21hcnR0dlwiLHc9XCJ3ZWFyYWJsZVwiLEU9XCJlbWJlZGRlZFwiLFM9e2V4dGVuZDpmdW5jdGlvbihlLHQpe3ZhciBuPXt9O2Zvcih2YXIgciBpbiBlKXRbcl0mJnRbcl0ubGVuZ3RoJTI9PT0wP25bcl09dFtyXS5jb25jYXQoZVtyXSk6bltyXT1lW3JdO3JldHVybiBufSxoYXM6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdHlwZW9mIGU9PVwic3RyaW5nXCI/dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZS50b0xvd2VyQ2FzZSgpKSE9PS0xOiExfSxsb3dlcml6ZTpmdW5jdGlvbihlKXtyZXR1cm4gZS50b0xvd2VyQ2FzZSgpfSxtYWpvcjpmdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGU9PT1hP2UucmVwbGFjZSgvW15cXGRcXC5dL2csXCJcIikuc3BsaXQoXCIuXCIpWzBdOnR9LHRyaW06ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csXCJcIil9fSx4PXtyZ3g6ZnVuY3Rpb24oKXt2YXIgZSxuPTAscixpLGEsZixsLGMsaD1hcmd1bWVudHM7d2hpbGUobjxoLmxlbmd0aCYmIWwpe3ZhciBwPWhbbl0sZD1oW24rMV07aWYodHlwZW9mIGU9PT1vKXtlPXt9O2ZvcihhIGluIGQpZC5oYXNPd25Qcm9wZXJ0eShhKSYmKGY9ZFthXSx0eXBlb2YgZj09PXU/ZVtmWzBdXT10OmVbZl09dCl9cj1pPTA7d2hpbGUocjxwLmxlbmd0aCYmIWwpe2w9cFtyKytdLmV4ZWModGhpcy5nZXRVQSgpKTtpZighIWwpZm9yKGE9MDthPGQubGVuZ3RoO2ErKyljPWxbKytpXSxmPWRbYV0sdHlwZW9mIGY9PT11JiZmLmxlbmd0aD4wP2YubGVuZ3RoPT0yP3R5cGVvZiBmWzFdPT1zP2VbZlswXV09ZlsxXS5jYWxsKHRoaXMsYyk6ZVtmWzBdXT1mWzFdOmYubGVuZ3RoPT0zP3R5cGVvZiBmWzFdPT09cyYmKCFmWzFdLmV4ZWN8fCFmWzFdLnRlc3QpP2VbZlswXV09Yz9mWzFdLmNhbGwodGhpcyxjLGZbMl0pOnQ6ZVtmWzBdXT1jP2MucmVwbGFjZShmWzFdLGZbMl0pOnQ6Zi5sZW5ndGg9PTQmJihlW2ZbMF1dPWM/ZlszXS5jYWxsKHRoaXMsYy5yZXBsYWNlKGZbMV0sZlsyXSkpOnQpOmVbZl09Yz9jOnR9bis9Mn1yZXR1cm4gZX0sc3RyOmZ1bmN0aW9uKGUsbil7Zm9yKHZhciByIGluIG4paWYodHlwZW9mIG5bcl09PT11JiZuW3JdLmxlbmd0aD4wKXtmb3IodmFyIHM9MDtzPG5bcl0ubGVuZ3RoO3MrKylpZihTLmhhcyhuW3JdW3NdLGUpKXJldHVybiByPT09aT90OnJ9ZWxzZSBpZihTLmhhcyhuW3JdLGUpKXJldHVybiByPT09aT90OnI7cmV0dXJuIGV9fSxUPXticm93c2VyOntvbGRzYWZhcmk6e3ZlcnNpb246e1wiMS4wXCI6XCIvOFwiLDEuMjpcIi8xXCIsMS4zOlwiLzNcIixcIjIuMFwiOlwiLzQxMlwiLFwiMi4wLjJcIjpcIi80MTZcIixcIjIuMC4zXCI6XCIvNDE3XCIsXCIyLjAuNFwiOlwiLzQxOVwiLFwiP1wiOlwiL1wifX19LGRldmljZTp7YW1hem9uOnttb2RlbDp7XCJGaXJlIFBob25lXCI6W1wiU0RcIixcIktGXCJdfX0sc3ByaW50Onttb2RlbDp7XCJFdm8gU2hpZnQgNEdcIjpcIjczNzNLVFwifSx2ZW5kb3I6e0hUQzpcIkFQQVwiLFNwcmludDpcIlNwcmludFwifX19LG9zOnt3aW5kb3dzOnt2ZXJzaW9uOntNRTpcIjQuOTBcIixcIk5UIDMuMTFcIjpcIk5UMy41MVwiLFwiTlQgNC4wXCI6XCJOVDQuMFwiLDJlMzpcIk5UIDUuMFwiLFhQOltcIk5UIDUuMVwiLFwiTlQgNS4yXCJdLFZpc3RhOlwiTlQgNi4wXCIsNzpcIk5UIDYuMVwiLDg6XCJOVCA2LjJcIiw4LjE6XCJOVCA2LjNcIiwxMDpbXCJOVCA2LjRcIixcIk5UIDEwLjBcIl0sUlQ6XCJBUk1cIn19fX0sTj17YnJvd3NlcjpbWy8ob3BlcmFcXHNtaW5pKVxcLyhbXFx3XFwuLV0rKS9pLC8ob3BlcmFcXHNbbW9iaWxldGFiXSspLit2ZXJzaW9uXFwvKFtcXHdcXC4tXSspL2ksLyhvcGVyYSkuK3ZlcnNpb25cXC8oW1xcd1xcLl0rKS9pLC8ob3BlcmEpW1xcL1xcc10rKFtcXHdcXC5dKykvaV0sW2MsZF0sWy8ob3Bpb3MpW1xcL1xcc10rKFtcXHdcXC5dKykvaV0sW1tjLFwiT3BlcmEgTWluaVwiXSxkXSxbL1xccyhvcHIpXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiT3BlcmFcIl0sZF0sWy8oa2luZGxlKVxcLyhbXFx3XFwuXSspL2ksLyhsdW5hc2NhcGV8bWF4dGhvbnxuZXRmcm9udHxqYXNtaW5lfGJsYXplcilbXFwvXFxzXT8oW1xcd1xcLl0rKSovaSwvKGF2YW50XFxzfGllbW9iaWxlfHNsaW18YmFpZHUpKD86YnJvd3Nlcik/W1xcL1xcc10/KFtcXHdcXC5dKikvaSwvKD86bXN8XFwoKShpZSlcXHMoW1xcd1xcLl0rKS9pLC8ocmVrb25xKVxcLyhbXFx3XFwuXSspKi9pLC8oY2hyb21pdW18ZmxvY2t8cm9ja21lbHR8bWlkb3JpfGVwaXBoYW55fHNpbGt8c2t5ZmlyZXxvdmlicm93c2VyfGJvbHR8aXJvbnx2aXZhbGRpfGlyaWRpdW18cGhhbnRvbWpzKVxcLyhbXFx3XFwuLV0rKS9pXSxbYyxkXSxbLyh0cmlkZW50KS4rcnZbOlxcc10oW1xcd1xcLl0rKS4rbGlrZVxcc2dlY2tvL2ldLFtbYyxcIklFXCJdLGRdLFsvKGVkZ2UpXFwvKChcXGQrKT9bXFx3XFwuXSspL2ldLFtjLGRdLFsvKHlhYnJvd3NlcilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJZYW5kZXhcIl0sZF0sWy8oY29tb2RvX2RyYWdvbilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsL18vZyxcIiBcIl0sZF0sWy8obWljcm9tZXNzZW5nZXIpXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiV2VDaGF0XCJdLGRdLFsveGlhb21pXFwvbWl1aWJyb3dzZXJcXC8oW1xcd1xcLl0rKS9pXSxbZCxbYyxcIk1JVUkgQnJvd3NlclwiXV0sWy9cXHN3dlxcKS4rKGNocm9tZSlcXC8oW1xcd1xcLl0rKS9pXSxbW2MsLyguKykvLFwiJDEgV2ViVmlld1wiXSxkXSxbL2FuZHJvaWQuK3NhbXN1bmdicm93c2VyXFwvKFtcXHdcXC5dKykvaSwvYW5kcm9pZC4rdmVyc2lvblxcLyhbXFx3XFwuXSspXFxzKyg/Om1vYmlsZVxccz9zYWZhcml8c2FmYXJpKSovaV0sW2QsW2MsXCJBbmRyb2lkIEJyb3dzZXJcIl1dLFsvKGNocm9tZXxvbW5pd2VifGFyb3JhfFt0aXplbm9rYV17NX1cXHM/YnJvd3NlcilcXC92PyhbXFx3XFwuXSspL2ksLyhxcWJyb3dzZXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaV0sW2MsZF0sWy8odWNcXHM/YnJvd3NlcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pLC91Y3dlYi4rKHVjYnJvd3NlcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pLC9qdWMuKyh1Y3dlYilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pXSxbW2MsXCJVQ0Jyb3dzZXJcIl0sZF0sWy8oZG9sZmluKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIkRvbHBoaW5cIl0sZF0sWy8oKD86YW5kcm9pZC4rKWNybW98Y3Jpb3MpXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiQ2hyb21lXCJdLGRdLFsvO2ZiYXZcXC8oW1xcd1xcLl0rKTsvaV0sW2QsW2MsXCJGYWNlYm9va1wiXV0sWy9meGlvc1xcLyhbXFx3XFwuLV0rKS9pXSxbZCxbYyxcIkZpcmVmb3hcIl1dLFsvdmVyc2lvblxcLyhbXFx3XFwuXSspLis/bW9iaWxlXFwvXFx3K1xccyhzYWZhcmkpL2ldLFtkLFtjLFwiTW9iaWxlIFNhZmFyaVwiXV0sWy92ZXJzaW9uXFwvKFtcXHdcXC5dKykuKz8obW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpL2ldLFtkLGNdLFsvd2Via2l0Lis/KG1vYmlsZVxccz9zYWZhcml8c2FmYXJpKShcXC9bXFx3XFwuXSspL2ldLFtjLFtkLHguc3RyLFQuYnJvd3Nlci5vbGRzYWZhcmkudmVyc2lvbl1dLFsvKGtvbnF1ZXJvcilcXC8oW1xcd1xcLl0rKS9pLC8od2Via2l0fGtodG1sKVxcLyhbXFx3XFwuXSspL2ldLFtjLGRdLFsvKG5hdmlnYXRvcnxuZXRzY2FwZSlcXC8oW1xcd1xcLi1dKykvaV0sW1tjLFwiTmV0c2NhcGVcIl0sZF0sWy8oc3dpZnRmb3gpL2ksLyhpY2VkcmFnb258aWNld2Vhc2VsfGNhbWlub3xjaGltZXJhfGZlbm5lY3xtYWVtb1xcc2Jyb3dzZXJ8bWluaW1vfGNvbmtlcm9yKVtcXC9cXHNdPyhbXFx3XFwuXFwrXSspL2ksLyhmaXJlZm94fHNlYW1vbmtleXxrLW1lbGVvbnxpY2VjYXR8aWNlYXBlfGZpcmViaXJkfHBob2VuaXgpXFwvKFtcXHdcXC4tXSspL2ksLyhtb3ppbGxhKVxcLyhbXFx3XFwuXSspLitydlxcOi4rZ2Vja29cXC9cXGQrL2ksLyhwb2xhcmlzfGx5bnh8ZGlsbG98aWNhYnxkb3Jpc3xhbWF5YXx3M218bmV0c3VyZnxzbGVpcG5pcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pLC8obGlua3MpXFxzXFwoKFtcXHdcXC5dKykvaSwvKGdvYnJvd3NlcilcXC8/KFtcXHdcXC5dKykqL2ksLyhpY2VcXHM/YnJvd3NlcilcXC92PyhbXFx3XFwuX10rKS9pLC8obW9zYWljKVtcXC9cXHNdKFtcXHdcXC5dKykvaV0sW2MsZF1dLGNwdTpbWy8oPzooYW1kfHgoPzooPzo4Nnw2NClbXy1dKT98d293fHdpbik2NClbO1xcKV0vaV0sW1t2LFwiYW1kNjRcIl1dLFsvKGlhMzIoPz07KSkvaV0sW1t2LFMubG93ZXJpemVdXSxbLygoPzppWzM0Nl18eCk4NilbO1xcKV0vaV0sW1t2LFwiaWEzMlwiXV0sWy93aW5kb3dzXFxzKGNlfG1vYmlsZSk7XFxzcHBjOy9pXSxbW3YsXCJhcm1cIl1dLFsvKCg/OnBwY3xwb3dlcnBjKSg/OjY0KT8pKD86XFxzbWFjfDt8XFwpKS9pXSxbW3YsL293ZXIvLFwiXCIsUy5sb3dlcml6ZV1dLFsvKHN1bjRcXHcpWztcXCldL2ldLFtbdixcInNwYXJjXCJdXSxbLygoPzphdnIzMnxpYTY0KD89OykpfDY4ayg/PVxcKSl8YXJtKD86NjR8KD89dlxcZCs7KSl8KD89YXRtZWxcXHMpYXZyfCg/OmlyaXh8bWlwc3xzcGFyYykoPzo2NCk/KD89Oyl8cGEtcmlzYykvaV0sW1t2LFMubG93ZXJpemVdXV0sZGV2aWNlOltbL1xcKChpcGFkfHBsYXlib29rKTtbXFx3XFxzXFwpOy1dKyhyaW18YXBwbGUpL2ldLFtsLHAsW2gseV1dLFsvYXBwbGVjb3JlbWVkaWFcXC9bXFx3XFwuXSsgXFwoKGlwYWQpL10sW2wsW3AsXCJBcHBsZVwiXSxbaCx5XV0sWy8oYXBwbGVcXHN7MCwxfXR2KS9pXSxbW2wsXCJBcHBsZSBUVlwiXSxbcCxcIkFwcGxlXCJdXSxbLyhhcmNob3MpXFxzKGdhbWVwYWQyPykvaSwvKGhwKS4rKHRvdWNocGFkKS9pLC8oaHApLisodGFibGV0KS9pLC8oa2luZGxlKVxcLyhbXFx3XFwuXSspL2ksL1xccyhub29rKVtcXHdcXHNdK2J1aWxkXFwvKFxcdyspL2ksLyhkZWxsKVxccyhzdHJlYVtrcHJcXHNcXGRdKltcXGRrb10pL2ldLFtwLGwsW2gseV1dLFsvKGtmW0Etel0rKVxcc2J1aWxkXFwvW1xcd1xcLl0rLipzaWxrXFwvL2ldLFtsLFtwLFwiQW1hem9uXCJdLFtoLHldXSxbLyhzZHxrZilbMDM0OWhpam9yc3R1d10rXFxzYnVpbGRcXC9bXFx3XFwuXSsuKnNpbGtcXC8vaV0sW1tsLHguc3RyLFQuZGV2aWNlLmFtYXpvbi5tb2RlbF0sW3AsXCJBbWF6b25cIl0sW2gsZ11dLFsvXFwoKGlwW2hvbmVkfFxcc1xcdypdKyk7LisoYXBwbGUpL2ldLFtsLHAsW2gsZ11dLFsvXFwoKGlwW2hvbmVkfFxcc1xcdypdKyk7L2ldLFtsLFtwLFwiQXBwbGVcIl0sW2gsZ11dLFsvKGJsYWNrYmVycnkpW1xccy1dPyhcXHcrKS9pLC8oYmxhY2tiZXJyeXxiZW5xfHBhbG0oPz1cXC0pfHNvbnllcmljc3NvbnxhY2VyfGFzdXN8ZGVsbHxodWF3ZWl8bWVpenV8bW90b3JvbGF8cG9seXRyb24pW1xcc18tXT8oW1xcdy1dKykqL2ksLyhocClcXHMoW1xcd1xcc10rXFx3KS9pLC8oYXN1cyktPyhcXHcrKS9pXSxbcCxsLFtoLGddXSxbL1xcKGJiMTA7XFxzKFxcdyspL2ldLFtsLFtwLFwiQmxhY2tCZXJyeVwiXSxbaCxnXV0sWy9hbmRyb2lkLisodHJhbnNmb1twcmltZVxcc117NCwxMH1cXHNcXHcrfGVlZXBjfHNsaWRlclxcc1xcdyt8bmV4dXMgN3xwYWRmb25lKS9pXSxbbCxbcCxcIkFzdXNcIl0sW2gseV1dLFsvKHNvbnkpXFxzKHRhYmxldFxcc1twc10pXFxzYnVpbGRcXC8vaSwvKHNvbnkpPyg/OnNncC4rKVxcc2J1aWxkXFwvL2ldLFtbcCxcIlNvbnlcIl0sW2wsXCJYcGVyaWEgVGFibGV0XCJdLFtoLHldXSxbLyg/OnNvbnkpPyg/Oig/Oig/OmN8ZClcXGR7NH0pfCg/OnNvWy1sXS4rKSlcXHNidWlsZFxcLy9pXSxbW3AsXCJTb255XCJdLFtsLFwiWHBlcmlhIFBob25lXCJdLFtoLGddXSxbL1xccyhvdXlhKVxccy9pLC8obmludGVuZG8pXFxzKFt3aWRzM3VdKykvaV0sW3AsbCxbaCxtXV0sWy9hbmRyb2lkLis7XFxzKHNoaWVsZClcXHNidWlsZC9pXSxbbCxbcCxcIk52aWRpYVwiXSxbaCxtXV0sWy8ocGxheXN0YXRpb25cXHNbMzRwb3J0YWJsZXZpXSspL2ldLFtsLFtwLFwiU29ueVwiXSxbaCxtXV0sWy8oc3ByaW50XFxzKFxcdyspKS9pXSxbW3AseC5zdHIsVC5kZXZpY2Uuc3ByaW50LnZlbmRvcl0sW2wseC5zdHIsVC5kZXZpY2Uuc3ByaW50Lm1vZGVsXSxbaCxnXV0sWy8obGVub3ZvKVxccz8oUyg/OjUwMDB8NjAwMCkrKD86Wy1dW1xcdytdKSkvaV0sW3AsbCxbaCx5XV0sWy8oaHRjKVs7X1xccy1dKyhbXFx3XFxzXSsoPz1cXCkpfFxcdyspKi9pLC8oenRlKS0oXFx3KykqL2ksLyhhbGNhdGVsfGdlZWtzcGhvbmV8aHVhd2VpfGxlbm92b3xuZXhpYW58cGFuYXNvbmljfCg/PTtcXHMpc29ueSlbX1xccy1dPyhbXFx3LV0rKSovaV0sW3AsW2wsL18vZyxcIiBcIl0sW2gsZ11dLFsvKG5leHVzXFxzOSkvaV0sW2wsW3AsXCJIVENcIl0sW2gseV1dLFsvKG5leHVzXFxzNnApL2ldLFtsLFtwLFwiSHVhd2VpXCJdLFtoLGddXSxbLyhtaWNyb3NvZnQpO1xccyhsdW1pYVtcXHNcXHddKykvaV0sW3AsbCxbaCxnXV0sWy9bXFxzXFwoO10oeGJveCg/Olxcc29uZSk/KVtcXHNcXCk7XS9pXSxbbCxbcCxcIk1pY3Jvc29mdFwiXSxbaCxtXV0sWy8oa2luXFwuW29uZXR3XXszfSkvaV0sW1tsLC9cXC4vZyxcIiBcIl0sW3AsXCJNaWNyb3NvZnRcIl0sW2gsZ11dLFsvXFxzKG1pbGVzdG9uZXxkcm9pZCg/OlsyLTR4XXxcXHMoPzpiaW9uaWN8eDJ8cHJvfHJhenIpKT8oOj9cXHM0Zyk/KVtcXHdcXHNdK2J1aWxkXFwvL2ksL21vdFtcXHMtXT8oXFx3KykqL2ksLyhYVFxcZHszLDR9KSBidWlsZFxcLy9pLC8obmV4dXNcXHM2KS9pXSxbbCxbcCxcIk1vdG9yb2xhXCJdLFtoLGddXSxbL2FuZHJvaWQuK1xccyhtejYwXFxkfHhvb21bXFxzMl17MCwyfSlcXHNidWlsZFxcLy9pXSxbbCxbcCxcIk1vdG9yb2xhXCJdLFtoLHldXSxbL2hiYnR2XFwvXFxkK1xcLlxcZCtcXC5cXGQrXFxzK1xcKFtcXHdcXHNdKjtcXHMqKFxcd1teO10qKTsoW147XSopL2ldLFtbcCxTLnRyaW1dLFtsLFMudHJpbV0sW2gsYl1dLFsvaGJidHYuK21hcGxlOyhcXGQrKS9pXSxbW2wsL14vLFwiU21hcnRUVlwiXSxbcCxcIlNhbXN1bmdcIl0sW2gsYl1dLFsvXFwoZHR2W1xcKTtdLisoYXF1b3MpL2ldLFtsLFtwLFwiU2hhcnBcIl0sW2gsYl1dLFsvYW5kcm9pZC4rKChzY2gtaVs4OV0wXFxkfHNody1tMzgwc3xndC1wXFxkezR9fGd0LW5cXGQrfHNnaC10OFs1Nl05fG5leHVzIDEwKSkvaSwvKChTTS1UXFx3KykpL2ldLFtbcCxcIlNhbXN1bmdcIl0sbCxbaCx5XV0sWy9zbWFydC10di4rKHNhbXN1bmcpL2ldLFtwLFtoLGJdLGxdLFsvKChzW2NncF1oLVxcdyt8Z3QtXFx3K3xnYWxheHlcXHNuZXh1c3xzbS1cXHdbXFx3XFxkXSspKS9pLC8oc2FtW3N1bmddKilbXFxzLV0qKFxcdystP1tcXHctXSopKi9pLC9zZWMtKChzZ2hcXHcrKSkvaV0sW1twLFwiU2Ftc3VuZ1wiXSxsLFtoLGddXSxbL3NpZS0oXFx3KykqL2ldLFtsLFtwLFwiU2llbWVuc1wiXSxbaCxnXV0sWy8obWFlbW98bm9raWEpLioobjkwMHxsdW1pYVxcc1xcZCspL2ksLyhub2tpYSlbXFxzXy1dPyhbXFx3LV0rKSovaV0sW1twLFwiTm9raWFcIl0sbCxbaCxnXV0sWy9hbmRyb2lkXFxzM1xcLltcXHNcXHc7LV17MTB9KGFcXGR7M30pL2ldLFtsLFtwLFwiQWNlclwiXSxbaCx5XV0sWy9hbmRyb2lkXFxzM1xcLltcXHNcXHc7LV17MTB9KGxnPyktKFswNmN2OV17Myw0fSkvaV0sW1twLFwiTEdcIl0sbCxbaCx5XV0sWy8obGcpIG5ldGNhc3RcXC50di9pXSxbcCxsLFtoLGJdXSxbLyhuZXh1c1xcc1s0NV0pL2ksL2xnW2U7XFxzXFwvLV0rKFxcdyspKi9pXSxbbCxbcCxcIkxHXCJdLFtoLGddXSxbL2FuZHJvaWQuKyhpZGVhdGFiW2EtejAtOVxcLVxcc10rKS9pXSxbbCxbcCxcIkxlbm92b1wiXSxbaCx5XV0sWy9saW51eDsuKygoam9sbGEpKTsvaV0sW3AsbCxbaCxnXV0sWy8oKHBlYmJsZSkpYXBwXFwvW1xcZFxcLl0rXFxzL2ldLFtwLGwsW2gsd11dLFsvYW5kcm9pZC4rO1xccyhnbGFzcylcXHNcXGQvaV0sW2wsW3AsXCJHb29nbGVcIl0sW2gsd11dLFsvYW5kcm9pZC4rKFxcdyspXFxzK2J1aWxkXFwvaG1cXDEvaSwvYW5kcm9pZC4rKGhtW1xcc1xcLV9dKm5vdGU/W1xcc19dKig/OlxcZFxcdyk/KVxccytidWlsZC9pLC9hbmRyb2lkLisobWlbXFxzXFwtX10qKD86b25lfG9uZVtcXHNfXXBsdXN8bm90ZSBsdGUpP1tcXHNfXSooPzpcXGRcXHcpPylcXHMrYnVpbGQvaV0sW1tsLC9fL2csXCIgXCJdLFtwLFwiWGlhb21pXCJdLFtoLGddXSxbL2FuZHJvaWQuK2EwMDAoMSlcXHMrYnVpbGQvaV0sW2wsW3AsXCJPbmVQbHVzXCJdLFtoLGddXSxbL1xccyh0YWJsZXQpWztcXC9dL2ksL1xccyhtb2JpbGUpKD86WztcXC9dfFxcc3NhZmFyaSkvaV0sW1toLFMubG93ZXJpemVdLHAsbF1dLGVuZ2luZTpbWy93aW5kb3dzLitcXHNlZGdlXFwvKFtcXHdcXC5dKykvaV0sW2QsW2MsXCJFZGdlSFRNTFwiXV0sWy8ocHJlc3RvKVxcLyhbXFx3XFwuXSspL2ksLyh3ZWJraXR8dHJpZGVudHxuZXRmcm9udHxuZXRzdXJmfGFtYXlhfGx5bnh8dzNtKVxcLyhbXFx3XFwuXSspL2ksLyhraHRtbHx0YXNtYW58bGlua3MpW1xcL1xcc11cXCg/KFtcXHdcXC5dKykvaSwvKGljYWIpW1xcL1xcc10oWzIzXVxcLltcXGRcXC5dKykvaV0sW2MsZF0sWy9ydlxcOihbXFx3XFwuXSspLiooZ2Vja28pL2ldLFtkLGNdXSxvczpbWy9taWNyb3NvZnRcXHMod2luZG93cylcXHModmlzdGF8eHApL2ldLFtjLGRdLFsvKHdpbmRvd3MpXFxzbnRcXHM2XFwuMjtcXHMoYXJtKS9pLC8od2luZG93c1xcc3Bob25lKD86XFxzb3MpKilbXFxzXFwvXT8oW1xcZFxcLlxcc10rXFx3KSovaSwvKHdpbmRvd3NcXHNtb2JpbGV8d2luZG93cylbXFxzXFwvXT8oW250Y2VcXGRcXC5cXHNdK1xcdykvaV0sW2MsW2QseC5zdHIsVC5vcy53aW5kb3dzLnZlcnNpb25dXSxbLyh3aW4oPz0zfDl8bil8d2luXFxzOXhcXHMpKFtudFxcZFxcLl0rKS9pXSxbW2MsXCJXaW5kb3dzXCJdLFtkLHguc3RyLFQub3Mud2luZG93cy52ZXJzaW9uXV0sWy9cXCgoYmIpKDEwKTsvaV0sW1tjLFwiQmxhY2tCZXJyeVwiXSxkXSxbLyhibGFja2JlcnJ5KVxcdypcXC8/KFtcXHdcXC5dKykqL2ksLyh0aXplbilbXFwvXFxzXShbXFx3XFwuXSspL2ksLyhhbmRyb2lkfHdlYm9zfHBhbG1cXHNvc3xxbnh8YmFkYXxyaW1cXHN0YWJsZXRcXHNvc3xtZWVnb3xjb250aWtpKVtcXC9cXHMtXT8oW1xcd1xcLl0rKSovaSwvbGludXg7Lisoc2FpbGZpc2gpOy9pXSxbYyxkXSxbLyhzeW1iaWFuXFxzP29zfHN5bWJvc3xzNjAoPz07KSlbXFwvXFxzLV0/KFtcXHdcXC5dKykqL2ldLFtbYyxcIlN5bWJpYW5cIl0sZF0sWy9cXCgoc2VyaWVzNDApOy9pXSxbY10sWy9tb3ppbGxhLitcXChtb2JpbGU7LitnZWNrby4rZmlyZWZveC9pXSxbW2MsXCJGaXJlZm94IE9TXCJdLGRdLFsvKG5pbnRlbmRvfHBsYXlzdGF0aW9uKVxccyhbd2lkczM0cG9ydGFibGV2dV0rKS9pLC8obWludClbXFwvXFxzXFwoXT8oXFx3KykqL2ksLyhtYWdlaWF8dmVjdG9ybGludXgpWztcXHNdL2ksLyhqb2xpfFtreGxuXT91YnVudHV8ZGViaWFufFtvcGVuXSpzdXNlfGdlbnRvb3woPz1cXHMpYXJjaHxzbGFja3dhcmV8ZmVkb3JhfG1hbmRyaXZhfGNlbnRvc3xwY2xpbnV4b3N8cmVkaGF0fHplbndhbGt8bGlucHVzKVtcXC9cXHMtXT8oPyFjaHJvbSkoW1xcd1xcLi1dKykqL2ksLyhodXJkfGxpbnV4KVxccz8oW1xcd1xcLl0rKSovaSwvKGdudSlcXHM/KFtcXHdcXC5dKykqL2ldLFtjLGRdLFsvKGNyb3MpXFxzW1xcd10rXFxzKFtcXHdcXC5dK1xcdykvaV0sW1tjLFwiQ2hyb21pdW0gT1NcIl0sZF0sWy8oc3Vub3MpXFxzPyhbXFx3XFwuXStcXGQpKi9pXSxbW2MsXCJTb2xhcmlzXCJdLGRdLFsvXFxzKFtmcmVudG9wYy1dezAsNH1ic2R8ZHJhZ29uZmx5KVxccz8oW1xcd1xcLl0rKSovaV0sW2MsZF0sWy8oaGFpa3UpXFxzKFxcdyspL2ldLFtjLGRdLFsvKGlwW2hvbmVhZF0rKSg/Oi4qb3NcXHMoW1xcd10rKSpcXHNsaWtlXFxzbWFjfDtcXHNvcGVyYSkvaV0sW1tjLFwiaU9TXCJdLFtkLC9fL2csXCIuXCJdXSxbLyhtYWNcXHNvc1xcc3gpXFxzPyhbXFx3XFxzXFwuXStcXHcpKi9pLC8obWFjaW50b3NofG1hYyg/PV9wb3dlcnBjKVxccykvaV0sW1tjLFwiTWFjIE9TXCJdLFtkLC9fL2csXCIuXCJdXSxbLygoPzpvcGVuKT9zb2xhcmlzKVtcXC9cXHMtXT8oW1xcd1xcLl0rKSovaSwvKGFpeClcXHMoKFxcZCkoPz1cXC58XFwpfFxccylbXFx3XFwuXSopKi9pLC8ocGxhblxcczl8bWluaXh8YmVvc3xvc1xcLzJ8YW1pZ2Fvc3xtb3JwaG9zfHJpc2NcXHNvc3xvcGVudm1zKS9pLC8odW5peClcXHM/KFtcXHdcXC5dKykqL2ldLFtjLGRdXX0sQz1mdW5jdGlvbih0LG4pe2lmKHRoaXMgaW5zdGFuY2VvZiBDKXt2YXIgaT10fHwoZSYmZS5uYXZpZ2F0b3ImJmUubmF2aWdhdG9yLnVzZXJBZ2VudD9lLm5hdmlnYXRvci51c2VyQWdlbnQ6cikscz1uP1MuZXh0ZW5kKE4sbik6TjtyZXR1cm4gdGhpcy5nZXRCcm93c2VyPWZ1bmN0aW9uKCl7dmFyIGU9eC5yZ3guYXBwbHkodGhpcyxzLmJyb3dzZXIpO3JldHVybiBlLm1ham9yPVMubWFqb3IoZS52ZXJzaW9uKSxlfSx0aGlzLmdldENQVT1mdW5jdGlvbigpe3JldHVybiB4LnJneC5hcHBseSh0aGlzLHMuY3B1KX0sdGhpcy5nZXREZXZpY2U9ZnVuY3Rpb24oKXtyZXR1cm4geC5yZ3guYXBwbHkodGhpcyxzLmRldmljZSl9LHRoaXMuZ2V0RW5naW5lPWZ1bmN0aW9uKCl7cmV0dXJuIHgucmd4LmFwcGx5KHRoaXMscy5lbmdpbmUpfSx0aGlzLmdldE9TPWZ1bmN0aW9uKCl7cmV0dXJuIHgucmd4LmFwcGx5KHRoaXMscy5vcyl9LHRoaXMuZ2V0UmVzdWx0PWZ1bmN0aW9uKCl7cmV0dXJue3VhOnRoaXMuZ2V0VUEoKSxicm93c2VyOnRoaXMuZ2V0QnJvd3NlcigpLGVuZ2luZTp0aGlzLmdldEVuZ2luZSgpLG9zOnRoaXMuZ2V0T1MoKSxkZXZpY2U6dGhpcy5nZXREZXZpY2UoKSxjcHU6dGhpcy5nZXRDUFUoKX19LHRoaXMuZ2V0VUE9ZnVuY3Rpb24oKXtyZXR1cm4gaX0sdGhpcy5zZXRVQT1mdW5jdGlvbihlKXtyZXR1cm4gaT1lLHRoaXN9LHRoaXN9cmV0dXJuKG5ldyBDKHQsbikpLmdldFJlc3VsdCgpfTtDLlZFUlNJT049bixDLkJST1dTRVI9e05BTUU6YyxNQUpPUjpmLFZFUlNJT046ZH0sQy5DUFU9e0FSQ0hJVEVDVFVSRTp2fSxDLkRFVklDRT17TU9ERUw6bCxWRU5ET1I6cCxUWVBFOmgsQ09OU09MRTptLE1PQklMRTpnLFNNQVJUVFY6YixUQUJMRVQ6eSxXRUFSQUJMRTp3LEVNQkVEREVEOkV9LEMuRU5HSU5FPXtOQU1FOmMsVkVSU0lPTjpkfSxDLk9TPXtOQU1FOmMsVkVSU0lPTjpkfSx0eXBlb2YgZXhwb3J0cyE9PW8/KHR5cGVvZiBtb2R1bGUhPT1vJiZtb2R1bGUuZXhwb3J0cyYmKGV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9QyksZXhwb3J0cy5VQVBhcnNlcj1DKTp0eXBlb2YgZGVmaW5lPT09cyYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gQ30pOmUuVUFQYXJzZXI9Qzt2YXIgaz1lLmpRdWVyeXx8ZS5aZXB0bztpZih0eXBlb2YgayE9PW8pe3ZhciBMPW5ldyBDO2sudWE9TC5nZXRSZXN1bHQoKSxrLnVhLmdldD1mdW5jdGlvbigpe3JldHVybiBMLmdldFVBKCl9LGsudWEuc2V0PWZ1bmN0aW9uKGUpe0wuc2V0VUEoZSk7dmFyIHQ9TC5nZXRSZXN1bHQoKTtmb3IodmFyIG4gaW4gdClrLnVhW25dPXRbbl19fX0pKHR5cGVvZiB3aW5kb3c9PVwib2JqZWN0XCI/d2luZG93OnRoaXMpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9saWJzL3VhLXBhcnNlci5taW4uanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpOyB9O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBwcmVsb2FkSW1nXG4gKiBAcGFyYW0gaW1nUGF0aFxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChpbWdQYXRoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgdmFyIGltZztcbiAgICBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgYXJndW1lbnRzLmNhbGxlZSk7XG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBpbWcuc3JjID0gaW1nUGF0aDtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9pbWcvcHJlbG9hZEltZy5qcyIsIi8qKlxuICogc2V0VXBCdG5Ud2l0dGVyXG4gKiBAcGFyYW0gJGJ0blxuICogQHBhcmFtIHRleHRcbiAqIEBwYXJhbSBzaGFyZVVSTFxuICovXG5leHBvcnQgZGVmYXVsdCAoJGJ0biwgdGV4dCwgc2hhcmVVUkwpID0+IHtcbiAgdmFyIHVybDtcbiAgaWYgKHNoYXJlVVJMID09IG51bGwpIHtcbiAgICBzaGFyZVVSTCA9ICcnO1xuICB9XG4gIHVybCA9ICdodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD8nO1xuICBpZiAoc2hhcmVVUkwgPT09ICcnKSB7XG4gICAgdXJsICs9IFwidGV4dD1cIiArIChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpO1xuICB9IGVsc2Uge1xuICAgIHVybCArPSBcInVybD1cIiArIChlbmNvZGVVUklDb21wb25lbnQoc2hhcmVVUkwpKSArIFwiJnRleHQ9XCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKTtcbiAgfVxuICByZXR1cm4gJGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgd2luZG93Lm9wZW4odXJsLCAndHdpdHRlclNoYXJlJywgJ3dpZHRoPTY3MCxoZWlnaHQ9NDAwJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0blR3aXR0ZXIuanMiLCIvKipcbiAqIHNldFVwQnRuTGluZVxuICogQHBhcmFtICRidG5cbiAqIEBwYXJhbSB0ZXh0XG4gKiBAcGFyYW0gc2hhcmVVUkxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCRidG4sIHRleHQsIHNoYXJlVVJMID0gJycpID0+IHtcbiAgdmFyIHVybDtcbiAgaWYgKHNoYXJlVVJMID09IG51bGwpIHtcbiAgICBzaGFyZVVSTCA9ICcnO1xuICB9XG4gIHVybCA9ICdodHRwOi8vbGluZS5tZS9tc2cvdGV4dC8/JztcbiAgaWYgKHNoYXJlVVJMID09PSAnJykge1xuICAgIHVybCArPSBcIlwiICsgKGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSk7XG4gIH0gZWxzZSB7XG4gICAgdXJsICs9IChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpICsgXCJcXG5cIiArIChlbmNvZGVVUklDb21wb25lbnQoc2hhcmVVUkwpKTtcbiAgfVxuICByZXR1cm4gJGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgd2luZG93Lm9wZW4odXJsLCAnbGluZVNoYXJlJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkxpbmUuanMiLCIvKipcbiAqIHNldFVwQnRuRmFjZWJvb2tcbiAqIEBwYXJhbSAkYnRuXG4gKiBAcGFyYW0gc2hhcmVVUkxcbiAqIEBwYXJhbSBkZXNjcmlwdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCAoJGJ0biwgc2hhcmVVUkwsIGRlc2NyaXB0aW9uID0gJycpID0+IHtcbiAgdmFyIHVybDtcbiAgaWYgKGRlc2NyaXB0aW9uID09IG51bGwpIHtcbiAgICBkZXNjcmlwdGlvbiA9ICcnO1xuICB9XG4gIHVybCA9ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/JmRpc3BsYXk9cG9wdXAmdT0nO1xuICB1cmwgKz0gXCJcIiArIChlbmNvZGVVUklDb21wb25lbnQoc2hhcmVVUkwpKTtcbiAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgdXJsICs9IFwiJmRlc2NyaXB0aW9uPVwiICsgKGVuY29kZVVSSUNvbXBvbmVudChkZXNjcmlwdGlvbikpO1xuICB9XG4gIHJldHVybiAkYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICB3aW5kb3cub3Blbih1cmwsIFwiZmFjZWJvb2tTaGFyZVwiICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSwgJ3dpZHRoPTY3MCxoZWlnaHQ9NDAwJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkZhY2VCb29rLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRnVuY1xuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuYmxhbmsoKTtcbiAgICB0aGlzLmRlYnVnZ2VyKCk7XG4gICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcbiAgICB0aGlzLmV4cGFuZGpRdWVyeSgpO1xuXG4gIH1cblxuICBibGFuaygpIHtcblxuICAgICQoKCk9PnskKCcuYmxhbmsnKS5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJyk7fSk7XG5cbiAgfVxuXG4gIGRlYnVnZ2VyKCkge1xuXG4gICAgLy8g44OH44OQ44OD44Kw44Oi44O844OJ5YiH5pu/XG4gICAgdmFyIFJFTEVBU0UgPSBnYi5pbi5jb25mLlJFTEVBU0U7XG5cbiAgICAvLyDnva7mj5vlr77osaHjga7jg6Hjgr3jg4Pjg4njgpLphY3liJfjgajjgZfjgabkv53mjIHjgZnjgotcbiAgICB2YXIgbWV0aG9kcyA9IFtcbiAgICAgICdsb2cnLFxuICAgICAgJ2RlYnVnJyxcbiAgICAgICdpbmZvJyxcbiAgICAgICd3YXJuJyxcbiAgICAgICdlcnJvcicsXG4gICAgICAnZGlyJyxcbiAgICAgICd0cmFjZScsXG4gICAgICAnYXNzZXJ0JyxcbiAgICAgICdkaXJ4bWwnLFxuICAgICAgJ2dyb3VwJyxcbiAgICAgICdncm91cEVuZCcsXG4gICAgICAndGltZScsXG4gICAgICAndGltZUVuZCcsXG4gICAgICAnY291bnQnLFxuICAgICAgJ3Byb2ZpbGUnLFxuICAgICAgJ3Byb2ZpbGVFbmQnXG4gICAgXTtcblxuICAgIC8vIGNvbnNvbGXjgYzkvb/jgYjjgarjgYTloLTlkIjjga/nqbrjga7jgqrjg5bjgrjjgqfjgq/jg4jjgpLoqK3lrprjgZfjgabjgYrjgY9cbiAgICBpZiggdHlwZW9mIHdpbmRvdy5jb25zb2xlID09PSBcInVuZGVmaW5lZFwiICl7XG4gICAgICB3aW5kb3cuY29uc29sZSA9IHt9O1xuICAgIH1cblxuICAgIC8vIOWQhOODoeOCveODg+ODieOCkndpbmRvd+OBuOebtOaOpei/veWKoOOBl+OBpuihjOOBj1xuICAgIGZvciggdmFyIGkgaW4gbWV0aG9kcyApe1xuICAgICAgKGZ1bmN0aW9uKCBtICl7XG5cbiAgICAgICAvLyBjb25zb2xl44Gr44GC44KL77yf44OH44OQ44OD44Kw44Oi44O844OJ44Gv5pyJ5Yq577yfY29uc29sZeOBruOCguOBruOBr+mWouaVsO+8n1xuICAgICAgIGlmKCBjb25zb2xlW21dICYmICFSRUxFQVNFICYmIHR5cGVvZiBjb25zb2xlW21dID09PSBcImZ1bmN0aW9uXCIgKXtcbiAgICAgICAgd2luZG93W21dID0gY29uc29sZVttXS5iaW5kKGNvbnNvbGUpO1xuICAgICAgIH0gZWxzZSB744CALy8gZGVidWdNb2Rl44GMZmFsc2Us44KC44GX44GP44Gv6Kmy5b2T44Oh44K944OD44OJ44GM5a2Y5Zyo44GX44Gq44GE5aC05ZCI44Gv44CB56m644Gu44Oh44K944OD44OJ44KS55So5oSP44GZ44KLXG4gICAgICAgIHdpbmRvd1ttXSA9IGZ1bmN0aW9uKCl7fTtcbiAgICAgICB9XG5cbiAgICAgIH0pKCBtZXRob2RzW2ldICk7XG4gICAgfVxuXG4gIH1cblxuICBwcmVwZW5kKHBhcmFtKSB7XG5cbiAgICAkKCdib2R5JykucHJlcGVuZChwYXJhbSk7XG5cbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHtcblxuICAgIHZhciBGUFMgPSAxMDAwLzYwO1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgLy8gY2hyb21l44KE5pyA5paw44GuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgLy8g5Y+k44GEZmlyZWZveOeUqFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICAvLyBzYWZhcmk25Lul5YmN44CBaU9TNiBzYWZhcmnnlKhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCBGUFMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIHRpbWVyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTsgICAgICBcblxuICB9XG5cbiAgZXhwYW5kalF1ZXJ5KCkge1xuXG4gICAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgICB3OjAsIFxuICAgICAgaDowLCBcbiAgICAgIGFkanVzdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAnbGVmdCc6JzUwJScsXG4gICAgICAgICAgICAndG9wJzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6Jy0nICsgKHcgLyAyKSArICdweCcsXG4gICAgICAgICAgICAnbWFyZ2luLXRvcCc6Jy0nICsgKGggLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBhZGp1c3RXOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICdsZWZ0JzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6Jy0nICsgKHcgLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBhZGp1c3RIOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICd0b3AnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi10b3AnOictJyArIChoIC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIGNoZWNrQ3NzQmxlbmQoKSB7XG5cbiAgICBpZiAoJ0NTUycgaW4gd2luZG93ICYmICdzdXBwb3J0cycgaW4gd2luZG93LkNTUykge1xuICAgICAgaWYgKCF3aW5kb3cuQ1NTLnN1cHBvcnRzKCdtaXgtYmxlbmQtbW9kZScsICdzb2Z0LWxpZ2h0JykpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1taXgtYmxlbmQtbW9kZScpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9nKGdiLmluLnUuaXNJRSk7XG5cbiAgICBpZiAoZ2IuaW4udS5pc0lFKSB7XG4gICAgICBcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3QtbWl4LWJsZW5kLW1vZGUnKVxuICAgICAgXG4gICAgfTtcblxuICB9XG5cbiAgbm90U2F2ZUltZygpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIHBjXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHtcblxuICAgICAgJCgoKT0+e1xuICAgICAgICAkKFwiaW1nXCIpLm9uKFwiY29udGV4dG1lbnVcIiwoKT0+e1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIHNwIGFuZHJvaWRcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHZhciB2ID0gZ2IuaW4udS5pc0FuZHJvaWRWZXJzaW9uKCk7XG5cbiAgICBpZiAodj09dW5kZWZpbmVkKSByZXR1cm47XG4gICAgaWYgKHY8NSkge1xuXG4gICAgICB2YXIgdGltZXI7XG4gICAgICAkKFwiaW1nXCIpLm9uKFwidG91Y2hzdGFydFwiLCgpPT57XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIGFsZXJ0KFwi55S75YOP44Gv5L+d5a2Y44Gn44GN44G+44Gb44KTXCIpXG4gICAgICAgIH0sNTAwKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KVxuICAgICAgJChcImltZ1wiKS5vbihcInRvdWNoZW5kXCIsKCk9PntcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSkgICAgICBcblxuICAgIH1cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9GdW5jLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogTWFpblxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgRGlzcGxheVRvcCBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlUb3AnO1xuaW1wb3J0IERpc3BsYXlUZXh0dXJlQmcgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5VGV4dHVyZUJnJztcbmltcG9ydCBEaXNwbGF5VGV4dHVyZU1vdmllIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVNb3ZpZSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICAvL3BhZ2Xjg5rjg7zjgrjliKXjga5JROOCkuWPluW+l1xuICAgIHZhciBwYWdlID0gJCgnYm9keScpLmRhdGEoJ2lkJyk7XG5cbiAgICB3aW5kb3cuY29uc29sZS5sb2coJ+ePvuWcqOOBruODmuODvOOCuElE44GvICcsIHBhZ2UpO1xuXG5cdFx0Ly9wYWdl44GuSUTjgZTjgajjgavnmbrngavjgZnjgovjgq/jg6njgrnjga7mjK/jgorliIbjgZFcbiAgICBzd2l0Y2ggKHBhZ2UpIHtcblxuICAgICAgY2FzZSAndG9wJzpcblxuICAgICAgICBuZXcgRGlzcGxheVRvcCgpO1xuXG4gICAgICAgIGJyZWFrO1xuXG5cdFx0XHRjYXNlICd0ZXh0dXJlQmcnOlxuXG5cdFx0XHRcdG5ldyBEaXNwbGF5VGV4dHVyZUJnKCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3RleHR1cmVNb3ZpZSc6XG5cblx0XHRcdFx0bmV3IERpc3BsYXlUZXh0dXJlTW92aWUoKTtcblxuXHRcdFx0XHRicmVhaztcblxuICAgIH1cblxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgXG4gIH1cblxuICBvblJlbmRlcigpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbigncmVhZHknLCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3BhZ2UvTWFpbi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IERpc3BsYXlcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBTY2VuZU1hbmdlciBmcm9tIFwiLi4vdmlzdWFsL1NjZW5lTWFuZ2VyXCI7XG5pbXBvcnQgU2NlbmUwMSBmcm9tIFwiLi4vdmlzdWFsL1NjZW5lMDFcIjtcbmltcG9ydCBTY2VuZTAyIGZyb20gXCIuLi92aXN1YWwvU2NlbmUwMlwiO1xuaW1wb3J0IFNjZW5lMDMgZnJvbSBcIi4uL3Zpc3VhbC9TY2VuZTAzXCI7XG4vLyBpbXBvcnQgT3ZlclNjZW5lIGZyb20gXCIuLi92aXN1YWwvb3ZlclNjZW5lXCI7XG5cbi8vIGltcG9ydCBXZWJHTGluaXQgZnJvbSAnLi9XZWJHTGluaXQuanMnO1xuXG4vLyBpbXBvcnQgQ2FudmFzIGZyb20gXCIuLi92aXN1YWwvQ2FudmFzXCI7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheVRvcCB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIOOCouODi+ODoeODvOOCt+ODp+ODs+ODq+ODvOODl+OCueOCv+ODvOODiFxuICAgIC8vIGdiLmluLnVwLmxvb3AoKTtcbiAgICBcbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIGdiLmluLnNjZW5lTWFuZ2VyID0gbmV3IFNjZW5lTWFuZ2VyKCk7XG5cbiAgICBnYi5pbi5zY2VuZUJveEEgPSBuZXcgU2NlbmUwMSgpO1xuICAgIGdiLmluLnNjZW5lQm94QiA9IG5ldyBTY2VuZTAyKCk7XG4gICAgZ2IuaW4uc2NlbmVCb3hDID0gbmV3IFNjZW5lMDMoKTtcbiAgICBnYi5pbi5zY2VuZUJveEQgPSBuZXcgU2NlbmUwMigpO1xuICAgIC8vIGdiLmluLnNjZW5lT3ZlciA9IG5ldyBPdmVyU2NlbmUoKTtcblxuICAgIGdiLmluLnNjZW5lTWFuZ2VyLmFkZFNjZW5lKGdiLmluLnNjZW5lQm94QSk7XG4gICAgZ2IuaW4uc2NlbmVNYW5nZXIuYWRkU2NlbmUoZ2IuaW4uc2NlbmVCb3hCKTtcbiAgICBnYi5pbi5zY2VuZU1hbmdlci5hZGRTY2VuZShnYi5pbi5zY2VuZUJveEMpO1xuICAgIGdiLmluLnNjZW5lTWFuZ2VyLmFkZFNjZW5lKGdiLmluLnNjZW5lQm94RCk7XG4gICAgLy8gZ2IuaW4uc2NlbmVNYW5nZXIuYWRkU2NlbmUoZ2IuaW4uc2NlbmVPdmVyKTtcblxuICAgIGdiLmluLnNjZW5lTWFuZ2VyLmRyYXcoKTtcblxuICAgIC8vIGdiLmluLmNhbnZhcyA9IG5ldyBDYW52YXMoKTtcbiAgICAvLyBnYi5pbi5jYW52YXMuaW5pdCgpO1xuXG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblx0XHQvLyB3aW5kb3cuY29uc29sZS5sb2coJ3N0YXRpY19SdW4nKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFNjZW5lTWFuZ2VyXG4gKiBEYXRlOiAxNy8wNS8yOVxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5pbXBvcnQgT3ZlclNjZW5lIGZyb20gXCIuLi92aXN1YWwvb3ZlclNjZW5lXCI7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVNYW5nZXIgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cblx0XHR0aGlzLk5VTSA9IDA7IC8vIOePvuWcqOOBruOCt+ODvOODs+OBrueVquWPt1xuXHRcdHRoaXMuc2NlbmVzID0gW107IC8vIOOCt+ODvOODs+OCkuagvOe0jeOBmeOCi+mFjeWIl1xuICAgIHRoaXMuZmFkZUluT3V0VGltZXIgPSAtMTsgLy9cbiAgICB0aGlzLm9wID0gMDtcblxuXHRcdHRoaXMuY2FudmFzID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDsgLy8gUmVuZGVyZXJcbiAgICB0aGlzLnJlbmRlcmVyMDIgPSBudWxsOyAvLyBSZW5kZXJlcjAyXG5cbiAgICAvLyB0aGlzLiRzdWJXcmFwID0gJCgnI3N1YldyYXAnKTtcblxuICAgIHRoaXMub3ZlcnNjZW5lID0gW107IC8vIG92ZXJzY2VuZVxuXG5cblxuICAgIHRoaXMub3ZlckFscGhhID0gMDtcbiAgICB0aGlzLm1haW5PUCA9IDEuMDtcblxuICAgIHRoaXMuYWRkU2NlbmUgPSB0aGlzLl9hZGRTY2VuZS5iaW5kKHRoaXMpO1xuXG5cdFx0dGhpcy5vblJlc2l6ZSA9IHRoaXMuX29uUmVzaXplLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jaGVja051bSA9IHRoaXMuX2NoZWNrTnVtLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vbktleURvd24gPSB0aGlzLl9vbktleURvd24uYmluZCh0aGlzKTtcblx0XHR0aGlzLmZhZGVJbk91dCA9IHRoaXMuX2ZhZGVJbk91dC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZHJhdyA9IHRoaXMuX2RyYXcuYmluZCh0aGlzKTtcblxuXG5cdFx0dGhpcy5hbHBoYVJlc2V0ID0gdGhpcy5fYWxwaGFSZXNldC5iaW5kKHRoaXMpO1xuXG5cdFx0dGhpcy5rZXluYW1lID0gbnVsbDtcblxuXG5cdFx0dGhpcy5pbml0KCk7IC8vIOWIneacn+WMluWHpueQhuW+jOOAgeOCpOODmeODs+ODiOeZu+mMslxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUsIGZhbHNlICk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5vbktleURvd24sIHRydWUpO1xuXG4gIH1cblxuICAvKipcbiAgICog5Yid5pyf5YyWXG4gICAqL1xuICBpbml0KCl7XG5cbiAgICB0aGlzLm92ZXJzY2VuZS5wdXNoKG5ldyBPdmVyU2NlbmUoKSk7XG5cblx0XHQvLyBSZW5kZXJlcuS9nOaIkFxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7YWxwaGE6IHRydWV9KTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8oIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvICk7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXHRcdHRoaXMucmVuZGVyZXIuc29ydE9iamVjdHMgPSBmYWxzZTtcblx0XHR0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcblx0XHR0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC50eXBlID0gVEhSRUUuUENGU2hhZG93TWFwO1xuXHRcdHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudC5pZCA9IFwibWFpblwiO1xuICAgIHRoaXMuY2FudmFzID0gdGhpcy5yZW5kZXJlci5kb21FbGVtZW50O1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4gICAgLy8gUmVuZGVyZXIwMuS9nOaIkFxuICAgIHRoaXMucmVuZGVyZXIwMiA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHthbnRpYWxpYXM6IHRydWUsYWxwaGE6IHRydWV9KTtcbiAgICB0aGlzLnJlbmRlcmVyMDIuc2V0UGl4ZWxSYXRpbyggd2luZG93LmRldmljZVBpeGVsUmF0aW8gKTtcbiAgICB0aGlzLnJlbmRlcmVyMDIuc2V0U2l6ZSggd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCApO1xuICAgIHRoaXMucmVuZGVyZXIwMi5zb3J0T2JqZWN0cyA9IGZhbHNlO1xuICAgIHRoaXMucmVuZGVyZXIwMi5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5yZW5kZXJlcjAyLnNoYWRvd01hcC50eXBlID0gVEhSRUUuUENGU2hhZG93TWFwO1xuICAgIHRoaXMucmVuZGVyZXIwMi5kb21FbGVtZW50LmlkID0gXCJzdWJcIjtcbiAgICB0aGlzLnJlbmRlcmVyMDIuc2V0Q2xlYXJDb2xvcigweDAwMDAwMCwgMC41KTtcbiAgICB0aGlzLmNhbnZhczAyID0gdGhpcy5yZW5kZXJlcjAyLmRvbUVsZW1lbnQ7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhczAyKTtcblxuICB9XG5cblx0LyoqXG4gICAqIOeuoeeQhuOBl+OBn+OBhOOCt+ODvOODs+OCkuagvOe0jeOBmeOCi+mWouaVsFxuXHQgKiBAcGFyYW0gc2NlbmVcblx0ICovXG5cdF9hZGRTY2VuZShzY2VuZSkge1xuXG5cdFx0dGhpcy5zY2VuZXMucHVzaChzY2VuZSk7XG5cblx0fVxuXG4gIC8qKlxuICAgKuOAgOOCpuOCo+ODs+ODieOCpuOBruW5heOBjOWkieOCj+OBo+OBn+OBqOOBjeOBruWHpueQhlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29uUmVzaXplKCkge1xuXG4gIFx0Ly8g6KGo56S644GX44Gm44GE44KL44K344O844Oz44GU44Go44Gr44Kr44Oh44Op44Gu44Oq44K144Kk44K644KS6LWw44KJ44Gb44KLXG4gICAgdGhpcy5zY2VuZXNbdGhpcy5OVU1dLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLnNjZW5lc1t0aGlzLk5VTV0uY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgIC8vIHJlbmRlcmVy44Gv5YWo44Gm44Gu44K344O844Oz44Gn5YWx6YCaXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXG4gICAgdGhpcy5vdmVyc2NlbmVbMF0uY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMub3ZlcnNjZW5lWzBdLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgICB0aGlzLnJlbmRlcmVyMDIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxuXG5cdC8qKlxuICAgKiDnj77lnKjjga7jgrfjg7zjg7Pnlarlj7fjgYzjgIHkuI3pganliIfjgarlgKTjgavjgarjgonjgarjgYTjgojjgYbjgavjg4Hjgqfjg4Pjgq9cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9jaGVja051bSgpe1xuXG5cdFx0aWYodGhpcy5OVU0gPCAwKSB7XG5cdFx0ICB3aW5kb3cuY29uc29sZS5sb2coJ2FhJyk7XG5cdFx0XHR0aGlzLk5VTSA9IHRoaXMuc2NlbmVzLmxlbmd0aC0xO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMuTlVNID49IHRoaXMuc2NlbmVzLmxlbmd0aCkge1xuICAgICAgd2luZG93LmNvbnNvbGUubG9nKCdiYicpO1xuXHRcdFx0dGhpcy5OVU0gPSAwO1xuXHRcdH1cblx0XHRcbiAgfVxuXG5cdC8qKlxuICAgKiDihpDihpLjgq3jg7zjgafjgrfjg7zjg7Pnlarlj7fjgpLotrPjgZflvJXjgY1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9vbktleURvd24oKXtcblx0XHR3aW5kb3cub25rZXlkb3duID0gKGUpID0+IHtcblx0XHRcdC8vIGNvbnNvbGUubG9nKGUpO1xuICAgICAgdGhpcy5rZXluYW1lID0gZS5rZXk7XG5cbiAgICAgIGlmKHRoaXMua2V5bmFtZSA9PSBcIkFycm93UmlnaHRcIil7XG4gICAgICAgIHRoaXMuY2hlY2tOdW0oKTtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5rZXluYW1lID09IFwiQXJyb3dMZWZ0XCIpe1xuICAgICAgICB0aGlzLmNoZWNrTnVtKCk7XG5cbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5rZXluYW1lID09IFwiQXJyb3dSaWdodFwiIHx8IHRoaXMua2V5bmFtZSA9PSBcIkFycm93TGVmdFwiKSB7XG5cbiAgICAgICAgdGhpcy5mYWRlSW5PdXRUaW1lciA9IDA7XG5cbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5rZXluYW1lID09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgIC8vIHdpbmRvdy5jb25zb2xlLmxvZygnVXAnKTtcblxuICAgICAgICB0aGlzLm92ZXJBbHBoYSs9MC4wNTtcbiAgICAgICAgaWYodGhpcy5vdmVyQWxwaGEgPiAxKXtcbiAgICAgICAgICB0aGlzLm92ZXJBbHBoYSA9IDEuMDtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMua2V5bmFtZSA9PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIC8vIHdpbmRvdy5jb25zb2xlLmxvZygnRG93bicpO1xuXG4gICAgICAgIHRoaXMub3ZlckFscGhhLT0wLjA1O1xuICAgICAgICBpZih0aGlzLm92ZXJBbHBoYSA8IDApe1xuICAgICAgICAgIHRoaXMub3ZlckFscGhhID0gMC4wO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgd2luZG93LmNvbnNvbGUubG9nKCd0aGlzLm92ZXJBbHBoYScsdGhpcy5vdmVyQWxwaGEpO1xuICAgICAgLy8gd2luZG93LmNvbnNvbGUubG9nKCQoXCIjc3ViXCIpKTtcbiAgICAgICQoXCIjc3ViXCIpLmNzcyh7IG9wYWNpdHk6IHRoaXMub3ZlckFscGhhIH0pO1xuXHRcdFx0d2luZG93LmNvbnNvbGUubG9nKCfnj77lnKjjga7jgrfjg7zjg7Pnlarlj7fjga8nLHRoaXMuTlVNKTtcblx0XHR9XG5cdH1cblxuICAvKipcblx0ICog44K344O844Oz44OB44Kn44Oz44K45pmC44Gu44Os44Kk44Ok44O8XG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfZmFkZUluT3V0KCl7XG4gICAgaWYodGhpcy5mYWRlSW5PdXRUaW1lciA8PSBNYXRoLlBJKjIpe1xuICAgICAgdGhpcy5mYWRlSW5PdXRUaW1lciArPSAwLjA3O1xuICAgICAgLy9zY3JlZW4uc3R5bGUub3BhY2l0eSA9IE1hdGguc2luKGZhZGVJbk91dFRpbWVyKTtcbiAgICAgIHRoaXMub3AgPSBNYXRoLnNpbih0aGlzLmZhZGVJbk91dFRpbWVyKTtcblxuICAgICAgJChcIiNmYWRlSW5PdXRcIilcbiAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IHRoaXMub3BcbiAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLmZhZGVJbk91dFRpbWVyID0gLTE7XG4gICAgICB0aGlzLm9wID0gMC4wO1xuICAgIH1cblxuICAgIGlmKHRoaXMub3AgPiAwLjk1ICYmIHRoaXMub3AgPD0gMS4wKSB7XG4gICAgICBcbiAgICAgIHN3aXRjaCAodGhpcy5rZXluYW1lKSB7XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuXG4gICAgICAgICAgdGhpcy5OVU0rKztcbiAgICAgICAgICB0aGlzLmNoZWNrTnVtKCk7XG5cbiAgICAgICAgICAvLyBpZih0aGlzLnNjZW5lcy5sZW5ndGggPT0gdGhpcy5OVU0pe1xuICAgICAgICAgIC8vICAgdGhpcy5OVU09MDtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcblxuICAgICAgICAgIHRoaXMuTlVNLS07XG4gICAgICAgICAgdGhpcy5jaGVja051bSgpO1xuXG4gICAgICAgICAgLy8gaWYodGhpcy5OVU0gPDApe1xuICAgICAgICAgIC8vICAgdGhpcy5OVU0gPSB0aGlzLnNjZW5lcy5sZW5ndGgtMTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXHR9XG5cbiAgX2FscGhhUmVzZXQoKSB7XG4gICAgdGhpcy5vdmVyQWxwaGEgPSAwLjA7XG4gICAgdGhpcy5tYWluT1AgPSAxLjA7XG5cbiAgICAkKFwiI3N1YlwiKS5jc3Moe29wYWNpdHk6IHRoaXMub3ZlckFscGhhfSk7XG4gIH1cblxuXG5cdC8qKlxuICAgKiDmnIDntYLnmoTjgarmj4/lhpnlh6bnkIbjgajjgIHjgqLjg4vjg6Hjg7zjgrfjg6fjg7PplqLmlbDjgpLjg6/jg7Pjg5Xjg6zjg7zjg6DjgZTjgajjgavlrp/ooYxcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9kcmF3KCkge1xuICAgIFxuICAgIC8vIHdpbmRvdy5jb25zb2xlLmxvZyh0aGlzLm92ZXJzY2VuZVswXSk7XG4gICAgXG5cdFx0dGhpcy5zY2VuZXNbdGhpcy5OVU1dLnVwZGF0ZSgpO1xuXHRcdC8vIHRoaXMub3ZlcnNjZW5lW3RoaXMuTlVNXS51cGRhdGUoKTtcblx0XHR0aGlzLm92ZXJzY2VuZVswXS51cGRhdGUoKTtcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lc1t0aGlzLk5VTV0uc2NlbmUsIHRoaXMuc2NlbmVzW3RoaXMuTlVNXS5jYW1lcmEpO1xuXHRcdHRoaXMucmVuZGVyZXIwMi5yZW5kZXIodGhpcy5vdmVyc2NlbmVbMF0uc2NlbmUsIHRoaXMub3ZlcnNjZW5lWzBdLmNhbWVyYSk7XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhdy5iaW5kKHRoaXMpKTtcblxuICAgIGlmKHRoaXMuZmFkZUluT3V0VGltZXIgPj0gMClcbiAgICB7XG4gICAgICB0aGlzLmZhZGVJbk91dCgpO1xuICAgIH1cblxuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9TY2VuZU1hbmdlci5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IEVudHJ5XG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbnJlcXVpcmUoJy4uLy4uL2xpYnMvT3JiaXRDb250cm9scy5qcycpO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudHJ5IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHR9XG5cblx0LyoqXG5cdCAqIOWIneacn+WMllxuXHQgKi9cblx0aW5pdCgpe1xuXG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvQ29yZS9FbnRyeS5qcyIsIi8qKlxuICogQGF1dGhvciBxaWFvIC8gaHR0cHM6Ly9naXRodWIuY29tL3FpYW9cbiAqIEBhdXRob3IgbXJkb29iIC8gaHR0cDovL21yZG9vYi5jb21cbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gKiBAYXV0aG9yIFdlc3RMYW5nbGV5IC8gaHR0cDovL2dpdGh1Yi5jb20vV2VzdExhbmdsZXlcbiAqIEBhdXRob3IgZXJpY2g2NjYgLyBodHRwOi8vZXJpY2hhaW5lcy5jb21cbiAqL1xuXG4vLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy5cbi8vIFVubGlrZSBUcmFja2JhbGxDb250cm9scywgaXQgbWFpbnRhaW5zIHRoZSBcInVwXCIgZGlyZWN0aW9uIG9iamVjdC51cCAoK1kgYnkgZGVmYXVsdCkuXG4vL1xuLy8gICAgT3JiaXQgLSBsZWZ0IG1vdXNlIC8gdG91Y2g6IG9uZSBmaW5nZXIgbW92ZVxuLy8gICAgWm9vbSAtIG1pZGRsZSBtb3VzZSwgb3IgbW91c2V3aGVlbCAvIHRvdWNoOiB0d28gZmluZ2VyIHNwcmVhZCBvciBzcXVpc2hcbi8vICAgIFBhbiAtIHJpZ2h0IG1vdXNlLCBvciBhcnJvdyBrZXlzIC8gdG91Y2g6IHRocmVlIGZpbnRlciBzd2lwZVxuXG5USFJFRS5PcmJpdENvbnRyb2xzID0gZnVuY3Rpb24gKCBvYmplY3QsIGRvbUVsZW1lbnQgKSB7XG5cblx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cblx0dGhpcy5kb21FbGVtZW50ID0gKCBkb21FbGVtZW50ICE9PSB1bmRlZmluZWQgKSA/IGRvbUVsZW1lbnQgOiBkb2N1bWVudDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcblx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuXHQvLyBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgb2JqZWN0IG9yYml0cyBhcm91bmRcblx0dGhpcy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBkb2xseSBpbiBhbmQgb3V0ICggUGVyc3BlY3RpdmVDYW1lcmEgb25seSApXG5cdHRoaXMubWluRGlzdGFuY2UgPSAwO1xuXHR0aGlzLm1heERpc3RhbmNlID0gSW5maW5pdHk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIHpvb20gaW4gYW5kIG91dCAoIE9ydGhvZ3JhcGhpY0NhbWVyYSBvbmx5IClcblx0dGhpcy5taW5ab29tID0gMDtcblx0dGhpcy5tYXhab29tID0gSW5maW5pdHk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IHZlcnRpY2FsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxuXHR0aGlzLm1pblBvbGFyQW5nbGUgPSAwOyAvLyByYWRpYW5zXG5cdHRoaXMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEk7IC8vIHJhZGlhbnNcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgaG9yaXpvbnRhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHQvLyBJZiBzZXQsIG11c3QgYmUgYSBzdWItaW50ZXJ2YWwgb2YgdGhlIGludGVydmFsIFsgLSBNYXRoLlBJLCBNYXRoLlBJIF0uXG5cdHRoaXMubWluQXppbXV0aEFuZ2xlID0gLSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXHR0aGlzLm1heEF6aW11dGhBbmdsZSA9IEluZmluaXR5OyAvLyByYWRpYW5zXG5cblx0Ly8gU2V0IHRvIHRydWUgdG8gZW5hYmxlIGRhbXBpbmcgKGluZXJ0aWEpXG5cdC8vIElmIGRhbXBpbmcgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdHRoaXMuZW5hYmxlRGFtcGluZyA9IGZhbHNlO1xuXHR0aGlzLmRhbXBpbmdGYWN0b3IgPSAwLjI1O1xuXG5cdC8vIFRoaXMgb3B0aW9uIGFjdHVhbGx5IGVuYWJsZXMgZG9sbHlpbmcgaW4gYW5kIG91dDsgbGVmdCBhcyBcInpvb21cIiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHpvb21pbmdcblx0dGhpcy5lbmFibGVab29tID0gdHJ1ZTtcblx0dGhpcy56b29tU3BlZWQgPSAxLjA7XG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcm90YXRpbmdcblx0dGhpcy5lbmFibGVSb3RhdGUgPSB0cnVlO1xuXHR0aGlzLnJvdGF0ZVNwZWVkID0gMS4wO1xuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHBhbm5pbmdcblx0dGhpcy5lbmFibGVQYW4gPSB0cnVlO1xuXHR0aGlzLmtleVBhblNwZWVkID0gNy4wO1x0Ly8gcGl4ZWxzIG1vdmVkIHBlciBhcnJvdyBrZXkgcHVzaFxuXG5cdC8vIFNldCB0byB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgcm90YXRlIGFyb3VuZCB0aGUgdGFyZ2V0XG5cdC8vIElmIGF1dG8tcm90YXRlIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHR0aGlzLmF1dG9Sb3RhdGUgPSBmYWxzZTtcblx0dGhpcy5hdXRvUm90YXRlU3BlZWQgPSAyLjA7IC8vIDMwIHNlY29uZHMgcGVyIHJvdW5kIHdoZW4gZnBzIGlzIDYwXG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdXNlIG9mIHRoZSBrZXlzXG5cdHRoaXMuZW5hYmxlS2V5cyA9IHRydWU7XG5cblx0Ly8gVGhlIGZvdXIgYXJyb3cga2V5c1xuXHR0aGlzLmtleXMgPSB7IExFRlQ6IDM3LCBVUDogMzgsIFJJR0hUOiAzOSwgQk9UVE9NOiA0MCB9O1xuXG5cdC8vIE1vdXNlIGJ1dHRvbnNcblx0dGhpcy5tb3VzZUJ1dHRvbnMgPSB7IE9SQklUOiBUSFJFRS5NT1VTRS5MRUZULCBaT09NOiBUSFJFRS5NT1VTRS5NSURETEUsIFBBTjogVEhSRUUuTU9VU0UuUklHSFQgfTtcblxuXHQvLyBmb3IgcmVzZXRcblx0dGhpcy50YXJnZXQwID0gdGhpcy50YXJnZXQuY2xvbmUoKTtcblx0dGhpcy5wb3NpdGlvbjAgPSB0aGlzLm9iamVjdC5wb3NpdGlvbi5jbG9uZSgpO1xuXHR0aGlzLnpvb20wID0gdGhpcy5vYmplY3Quem9vbTtcblxuXHQvL1xuXHQvLyBwdWJsaWMgbWV0aG9kc1xuXHQvL1xuXG5cdHRoaXMuZ2V0UG9sYXJBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBzcGhlcmljYWwucGhpO1xuXG5cdH07XG5cblx0dGhpcy5nZXRBemltdXRoYWxBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBzcGhlcmljYWwudGhldGE7XG5cblx0fTtcblxuXHR0aGlzLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0c2NvcGUudGFyZ2V0LmNvcHkoIHNjb3BlLnRhcmdldDAgKTtcblx0XHRzY29wZS5vYmplY3QucG9zaXRpb24uY29weSggc2NvcGUucG9zaXRpb24wICk7XG5cdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBzY29wZS56b29tMDtcblxuXHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH07XG5cblx0Ly8gdGhpcyBtZXRob2QgaXMgZXhwb3NlZCwgYnV0IHBlcmhhcHMgaXQgd291bGQgYmUgYmV0dGVyIGlmIHdlIGNhbiBtYWtlIGl0IHByaXZhdGUuLi5cblx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0Ly8gc28gY2FtZXJhLnVwIGlzIHRoZSBvcmJpdCBheGlzXG5cdFx0dmFyIHF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyggb2JqZWN0LnVwLCBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApICk7XG5cdFx0dmFyIHF1YXRJbnZlcnNlID0gcXVhdC5jbG9uZSgpLmludmVyc2UoKTtcblxuXHRcdHZhciBsYXN0UG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHRcdHZhciBsYXN0UXVhdGVybmlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlICgpIHtcblxuXHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXG5cdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHQvLyByb3RhdGUgb2Zmc2V0IHRvIFwieS1heGlzLWlzLXVwXCIgc3BhY2Vcblx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXQgKTtcblxuXHRcdFx0Ly8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xuXHRcdFx0c3BoZXJpY2FsLnNldEZyb21WZWN0b3IzKCBvZmZzZXQgKTtcblxuXHRcdFx0aWYgKCBzY29wZS5hdXRvUm90YXRlICYmIHN0YXRlID09PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdHJvdGF0ZUxlZnQoIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzcGhlcmljYWwudGhldGEgKz0gc3BoZXJpY2FsRGVsdGEudGhldGE7XG5cdFx0XHRzcGhlcmljYWwucGhpICs9IHNwaGVyaWNhbERlbHRhLnBoaTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgdGhldGEgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnRoZXRhID0gTWF0aC5tYXgoIHNjb3BlLm1pbkF6aW11dGhBbmdsZSwgTWF0aC5taW4oIHNjb3BlLm1heEF6aW11dGhBbmdsZSwgc3BoZXJpY2FsLnRoZXRhICkgKTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdHNwaGVyaWNhbC5waGkgPSBNYXRoLm1heCggc2NvcGUubWluUG9sYXJBbmdsZSwgTWF0aC5taW4oIHNjb3BlLm1heFBvbGFyQW5nbGUsIHNwaGVyaWNhbC5waGkgKSApO1xuXG5cdFx0XHRzcGhlcmljYWwubWFrZVNhZmUoKTtcblxuXG5cdFx0XHRzcGhlcmljYWwucmFkaXVzICo9IHNjYWxlO1xuXG5cdFx0XHQvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnJhZGl1cyA9IE1hdGgubWF4KCBzY29wZS5taW5EaXN0YW5jZSwgTWF0aC5taW4oIHNjb3BlLm1heERpc3RhbmNlLCBzcGhlcmljYWwucmFkaXVzICkgKTtcblxuXHRcdFx0Ly8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXG5cdFx0XHRzY29wZS50YXJnZXQuYWRkKCBwYW5PZmZzZXQgKTtcblxuXHRcdFx0b2Zmc2V0LnNldEZyb21TcGhlcmljYWwoIHNwaGVyaWNhbCApO1xuXG5cdFx0XHQvLyByb3RhdGUgb2Zmc2V0IGJhY2sgdG8gXCJjYW1lcmEtdXAtdmVjdG9yLWlzLXVwXCIgc3BhY2Vcblx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXRJbnZlcnNlICk7XG5cblx0XHRcdHBvc2l0aW9uLmNvcHkoIHNjb3BlLnRhcmdldCApLmFkZCggb2Zmc2V0ICk7XG5cblx0XHRcdHNjb3BlLm9iamVjdC5sb29rQXQoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZURhbXBpbmcgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS5waGkgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNjYWxlID0gMTtcblx0XHRcdHBhbk9mZnNldC5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0Ly8gdXBkYXRlIGNvbmRpdGlvbiBpczpcblx0XHRcdC8vIG1pbihjYW1lcmEgZGlzcGxhY2VtZW50LCBjYW1lcmEgcm90YXRpb24gaW4gcmFkaWFucyleMiA+IEVQU1xuXHRcdFx0Ly8gdXNpbmcgc21hbGwtYW5nbGUgYXBwcm94aW1hdGlvbiBjb3MoeC8yKSA9IDEgLSB4XjIgLyA4XG5cblx0XHRcdGlmICggem9vbUNoYW5nZWQgfHxcblx0XHRcdFx0bGFzdFBvc2l0aW9uLmRpc3RhbmNlVG9TcXVhcmVkKCBzY29wZS5vYmplY3QucG9zaXRpb24gKSA+IEVQUyB8fFxuXHRcdFx0XHQ4ICogKCAxIC0gbGFzdFF1YXRlcm5pb24uZG90KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApICkgPiBFUFMgKSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0XHRsYXN0UG9zaXRpb24uY29weSggc2NvcGUub2JqZWN0LnBvc2l0aW9uICk7XG5cdFx0XHRcdGxhc3RRdWF0ZXJuaW9uLmNvcHkoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICk7XG5cdFx0XHRcdHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0dGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHRcdC8vc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZGlzcG9zZScgfSApOyAvLyBzaG91bGQgdGhpcyBiZSBhZGRlZCBoZXJlP1xuXG5cdH07XG5cblx0Ly9cblx0Ly8gaW50ZXJuYWxzXG5cdC8vXG5cblx0dmFyIHNjb3BlID0gdGhpcztcblxuXHR2YXIgY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XG5cdHZhciBzdGFydEV2ZW50ID0geyB0eXBlOiAnc3RhcnQnIH07XG5cdHZhciBlbmRFdmVudCA9IHsgdHlwZTogJ2VuZCcgfTtcblxuXHR2YXIgU1RBVEUgPSB7IE5PTkUgOiAtIDEsIFJPVEFURSA6IDAsIERPTExZIDogMSwgUEFOIDogMiwgVE9VQ0hfUk9UQVRFIDogMywgVE9VQ0hfRE9MTFkgOiA0LCBUT1VDSF9QQU4gOiA1IH07XG5cblx0dmFyIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR2YXIgRVBTID0gMC4wMDAwMDE7XG5cblx0Ly8gY3VycmVudCBwb3NpdGlvbiBpbiBzcGhlcmljYWwgY29vcmRpbmF0ZXNcblx0dmFyIHNwaGVyaWNhbCA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcblx0dmFyIHNwaGVyaWNhbERlbHRhID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXG5cdHZhciBzY2FsZSA9IDE7XG5cdHZhciBwYW5PZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHR2YXIgem9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHR2YXIgcm90YXRlU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcm90YXRlRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHJvdGF0ZURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHR2YXIgcGFuU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcGFuRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHBhbkRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHR2YXIgZG9sbHlTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBkb2xseUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBkb2xseURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRmdW5jdGlvbiBnZXRBdXRvUm90YXRpb25BbmdsZSgpIHtcblxuXHRcdHJldHVybiAyICogTWF0aC5QSSAvIDYwIC8gNjAgKiBzY29wZS5hdXRvUm90YXRlU3BlZWQ7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGdldFpvb21TY2FsZSgpIHtcblxuXHRcdHJldHVybiBNYXRoLnBvdyggMC45NSwgc2NvcGUuem9vbVNwZWVkICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHJvdGF0ZUxlZnQoIGFuZ2xlICkge1xuXG5cdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgLT0gYW5nbGU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHJvdGF0ZVVwKCBhbmdsZSApIHtcblxuXHRcdHNwaGVyaWNhbERlbHRhLnBoaSAtPSBhbmdsZTtcblxuXHR9XG5cblx0dmFyIHBhbkxlZnQgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW5MZWZ0KCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMCApOyAvLyBnZXQgWCBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCAtIGRpc3RhbmNlICk7XG5cblx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdHZhciBwYW5VcCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhblVwKCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMSApOyAvLyBnZXQgWSBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCBkaXN0YW5jZSApO1xuXG5cdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHQvLyBkZWx0YVggYW5kIGRlbHRhWSBhcmUgaW4gcGl4ZWxzOyByaWdodCBhbmQgZG93biBhcmUgcG9zaXRpdmVcblx0dmFyIHBhbiA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuICggZGVsdGFYLCBkZWx0YVkgKSB7XG5cblx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdC8vIHBlcnNwZWN0aXZlXG5cdFx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblx0XHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblx0XHRcdFx0dmFyIHRhcmdldERpc3RhbmNlID0gb2Zmc2V0Lmxlbmd0aCgpO1xuXG5cdFx0XHRcdC8vIGhhbGYgb2YgdGhlIGZvdiBpcyBjZW50ZXIgdG8gdG9wIG9mIHNjcmVlblxuXHRcdFx0XHR0YXJnZXREaXN0YW5jZSAqPSBNYXRoLnRhbiggKCBzY29wZS5vYmplY3QuZm92IC8gMiApICogTWF0aC5QSSAvIDE4MC4wICk7XG5cblx0XHRcdFx0Ly8gd2UgYWN0dWFsbHkgZG9uJ3QgdXNlIHNjcmVlbldpZHRoLCBzaW5jZSBwZXJzcGVjdGl2ZSBjYW1lcmEgaXMgZml4ZWQgdG8gc2NyZWVuIGhlaWdodFxuXHRcdFx0XHRwYW5MZWZ0KCAyICogZGVsdGFYICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRwYW5VcCggMiAqIGRlbHRhWSAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdC8vIG9ydGhvZ3JhcGhpY1xuXHRcdFx0XHRwYW5MZWZ0KCBkZWx0YVggKiAoIHNjb3BlLm9iamVjdC5yaWdodCAtIHNjb3BlLm9iamVjdC5sZWZ0ICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50V2lkdGgsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0cGFuVXAoIGRlbHRhWSAqICggc2NvcGUub2JqZWN0LnRvcCAtIHNjb3BlLm9iamVjdC5ib3R0b20gKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBjYW1lcmEgbmVpdGhlciBvcnRob2dyYXBoaWMgbm9yIHBlcnNwZWN0aXZlXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIHBhbiBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdHNjb3BlLmVuYWJsZVBhbiA9IGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHRmdW5jdGlvbiBkb2xseUluKCBkb2xseVNjYWxlICkge1xuXG5cdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0c2NhbGUgLz0gZG9sbHlTY2FsZTtcblxuXHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tICogZG9sbHlTY2FsZSApICk7XG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGRvbGx5T3V0KCBkb2xseVNjYWxlICkge1xuXG5cdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0c2NhbGUgKj0gZG9sbHlTY2FsZTtcblxuXHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tIC8gZG9sbHlTY2FsZSApICk7XG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8vXG5cdC8vIGV2ZW50IGNhbGxiYWNrcyAtIHVwZGF0ZSB0aGUgb2JqZWN0IHN0YXRlXG5cdC8vXG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Sb3RhdGUnICk7XG5cblx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93bkRvbGx5JyApO1xuXG5cdFx0ZG9sbHlTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25QYW4nICk7XG5cblx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVSb3RhdGUnICk7XG5cblx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcblx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZURvbGx5JyApO1xuXG5cdFx0ZG9sbHlFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH1cblxuXHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVBhbicgKTtcblxuXHRcdHBhbkVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuXHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VVcCggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VVcCcgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VXaGVlbCcgKTtcblxuXHRcdGlmICggZXZlbnQuZGVsdGFZIDwgMCApIHtcblxuXHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5kZWx0YVkgPiAwICkge1xuXG5cdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fVxuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZUtleURvd24oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZUtleURvd24nICk7XG5cblx0XHRzd2l0Y2ggKCBldmVudC5rZXlDb2RlICkge1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuVVA6XG5cdFx0XHRcdHBhbiggMCwgc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxuXHRcdFx0XHRwYW4oIDAsIC0gc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuTEVGVDpcblx0XHRcdFx0cGFuKCBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5SSUdIVDpcblx0XHRcdFx0cGFuKCAtIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydERvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0RG9sbHknICk7XG5cblx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXG5cdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0ZG9sbHlTdGFydC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRQYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRQYW4nICk7XG5cblx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUm90YXRlJyApO1xuXG5cdFx0cm90YXRlRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlRG9sbHknICk7XG5cblx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXG5cdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0ZG9sbHlFbmQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9XG5cblx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVQYW4nICk7XG5cblx0XHRwYW5FbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZCggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hFbmQnICk7XG5cblx0fVxuXG5cdC8vXG5cdC8vIGV2ZW50IGhhbmRsZXJzIC0gRlNNOiBsaXN0ZW4gZm9yIGV2ZW50cyBhbmQgcmVzZXQgc3RhdGVcblx0Ly9cblxuXHRmdW5jdGlvbiBvbk1vdXNlRG93biggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuT1JCSVQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLlJPVEFURTtcblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlpPT00gKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLkRPTExZO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuUEFOICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5QQU47XG5cblx0XHR9XG5cblx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmICggc3RhdGUgPT09IFNUQVRFLlJPVEFURSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuRE9MTFkgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLlBBTiApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VVcCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0aGFuZGxlTW91c2VVcCggZXZlbnQgKTtcblxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlIHx8ICggc3RhdGUgIT09IFNUQVRFLk5PTkUgJiYgc3RhdGUgIT09IFNUQVRFLlJPVEFURSApICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICk7XG5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7IC8vIG5vdCBzdXJlIHdoeSB0aGVzZSBhcmUgaGVyZS4uLlxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZUtleXMgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRoYW5kbGVLZXlEb3duKCBldmVudCApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoU3RhcnQoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRjYXNlIDE6XHQvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XHQvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ET0xMWTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoTW92ZSggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ST1RBVEUgKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfRE9MTFkgKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1BBTiApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaEVuZCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0aGFuZGxlVG91Y2hFbmQoIGV2ZW50ICk7XG5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbkNvbnRleHRNZW51KCBldmVudCApIHtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0fVxuXG5cdC8vXG5cblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSApO1xuXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHQvLyBmb3JjZSBhbiB1cGRhdGUgYXQgc3RhcnRcblxuXHR0aGlzLnVwZGF0ZSgpO1xuXG59O1xuXG5USFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUgKTtcblRIUkVFLk9yYml0Q29udHJvbHMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVEhSRUUuT3JiaXRDb250cm9scztcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFRIUkVFLk9yYml0Q29udHJvbHMucHJvdG90eXBlLCB7XG5cblx0Y2VudGVyOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmNlbnRlciBoYXMgYmVlbiByZW5hbWVkIHRvIC50YXJnZXQnICk7XG5cdFx0XHRyZXR1cm4gdGhpcy50YXJnZXQ7XG5cblx0XHR9XG5cblx0fSxcblxuXHQvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5cblx0bm9ab29tOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVpvb207XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlWm9vbSA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRub1JvdGF0ZToge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUm90YXRlO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVSb3RhdGUgPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0bm9QYW46IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVBhbjtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlUGFuID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdG5vS2V5czoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVLZXlzO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZUtleXMgPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0c3RhdGljTW92aW5nIDoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVEYW1waW5nO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZURhbXBpbmcgPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0ZHluYW1pY0RhbXBpbmdGYWN0b3IgOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiB0aGlzLmRhbXBpbmdGYWN0b3I7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5kYW1waW5nRmFjdG9yID0gdmFsdWU7XG5cblx0XHR9XG5cblx0fVxuXG59ICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy9PcmJpdENvbnRyb2xzLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogb3ZlclNjZW5lXG4gKiBEYXRlOiAxNy8wNi8xOVxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb3ZlclNjZW5lIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgIHRoaXMuc3RlcCA9IDA7XG4gICAgdGhpcy5rbm90ID0gbnVsbDsgLy8g57WQ44Gz55uuXG5cbiAgICAvL+ODiOODvOODqeOCueeUn+aIkOOBp+W/heimgeOBquODkeODqeODoeODvOOCv1xuXHRcdHRoaXMucmFkaXVzID0gNDA7XG5cdFx0dGhpcy50dWJlID0gMjguMjtcblx0XHR0aGlzLnJhZGlhbFNlZ21lbnRzID0gNjAwO1xuXHRcdHRoaXMudHVidWxhclNlZ21lbnRzID0gMTI7XG5cdFx0dGhpcy5wID0gNTtcblx0XHR0aGlzLnEgPSA0O1xuXHRcdHRoaXMuaGVpZ2h0U2NhbGUgPSA0O1xuXHRcdHRoaXMuYXNQYXJ0aWNsZXMgPSB0cnVlO1xuXHRcdHRoaXMucm90YXRlID0gdHJ1ZTtcblxuXHRcdHRoaXMuZ2VuZXJhdGVTcHJpdGUgPSB0aGlzLl9nZW5lcmF0ZVNwcml0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY3JlYXRlUGFydGljbGVTeXN0ZW0gPSB0aGlzLl9jcmVhdGVQYXJ0aWNsZVN5c3RlbS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY3JlYXRlTWVzaCA9IHRoaXMuX2NyZWF0ZU1lc2guYmluZCh0aGlzKTtcblxuXG4gICAgdGhpcy5jcmVhdGVTY2VuZSA9IHRoaXMuX2NyZWF0ZVNjZW5lLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLl91cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY3JlYXRlU2NlbmUoKTtcblxuICB9XG5cblx0Ly8gZnJvbSBUSFJFRS5qcyBleGFtcGxlc1xuXHRfZ2VuZXJhdGVTcHJpdGUoKSB7XG5cblx0XHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0XHRjYW52YXMud2lkdGggPSAxNjtcblx0XHRjYW52YXMuaGVpZ2h0ID0gMTY7XG5cblx0XHRjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cdFx0Y29uc3QgZ3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGNhbnZhcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyLCAwLCBjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiwgY2FudmFzLndpZHRoIC8gMik7XG5cdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwyNTUsMjU1LDEpJyk7XG5cdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuMiwgJ3JnYmEoMCwyNTUsMjU1LDEpJyk7XG5cdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuNCwgJ3JnYmEoMCwwLDY0LDEpJyk7XG5cdFx0Z3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDAsMCwwLDEpJyk7XG5cblx0XHRjb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xuXHRcdGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuXHRcdGNvbnN0IHRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZShjYW52YXMpO1xuXHRcdHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xuXHRcdHJldHVybiB0ZXh0dXJlO1xuXG5cdH1cblxuXHRfY3JlYXRlUGFydGljbGVTeXN0ZW0oZ2VvbSkge1xuXHRcdGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLlBhcnRpY2xlQmFzaWNNYXRlcmlhbCh7XG5cdFx0XHRjb2xvcjogMHhmZmZmZmYsXG5cdFx0XHRzaXplOiAzLFxuXHRcdFx0dHJhbnNwYXJlbnQ6IHRydWUsXG5cdFx0XHRibGVuZGluZzogVEhSRUUuQWRkaXRpdmVCbGVuZGluZyxcblx0XHRcdG1hcDogdGhpcy5nZW5lcmF0ZVNwcml0ZSgpXG5cdFx0fSk7XG5cblx0XHRjb25zdCBzeXN0ZW0gPSBuZXcgVEhSRUUuUGFydGljbGVTeXN0ZW0oZ2VvbSwgbWF0ZXJpYWwpO1xuXHRcdHN5c3RlbS5zb3J0UGFydGljbGVzID0gdHJ1ZTtcblx0XHRyZXR1cm4gc3lzdGVtO1xuXHR9XG5cblx0X2NyZWF0ZU1lc2goZ2VvbSkge1xuXG5cdFx0Ly8gYXNzaWduIHR3byBtYXRlcmlhbHNcblx0XHRjb25zdCBtZXNoTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaE5vcm1hbE1hdGVyaWFsKHt9KTtcblx0XHRtZXNoTWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XG5cblx0XHQvLyBjcmVhdGUgYSBtdWx0aW1hdGVyaWFsXG5cdFx0Y29uc3QgbWVzaCA9IFRIUkVFLlNjZW5lVXRpbHMuY3JlYXRlTXVsdGlNYXRlcmlhbE9iamVjdChnZW9tLCBbbWVzaE1hdGVyaWFsXSk7XG5cblx0XHRyZXR1cm4gbWVzaDtcblx0fVxuXG5cbiAgLyoqXG4gICAqIOOCt+ODvOODs+OCkuS9nOaIkOOAguOCquODluOCuOOCp+OCr+ODiOOCkuagvOe0jVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NyZWF0ZVNjZW5lKCl7XG5cbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7IC8v44K344O844Oz5L2c5oiQXG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgd2luZG93LmlubmVyV2lkdGgvd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSAtMzA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IDQwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1MDtcblx0XHR0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMTAsIDAsIDApKTtcblxuICAgIGlmICh0aGlzLmtub3QpIHRoaXMuc2NlbmUucmVtb3ZlKHRoaXMua25vdCk7XG4gICAgLy8gY3JlYXRlIGEgbmV3IG9uZVxuICAgIGxldCBnZW9tID0gbmV3IFRIUkVFLlRvcnVzS25vdEdlb21ldHJ5KHRoaXMucmFkaXVzLCB0aGlzLnR1YmUsIE1hdGgucm91bmQodGhpcy5yYWRpYWxTZWdtZW50cyksIE1hdGgucm91bmQodGhpcy50dWJ1bGFyU2VnbWVudHMpLCBNYXRoLnJvdW5kKHRoaXMucCksIE1hdGgucm91bmQodGhpcy5xKSwgdGhpcy5oZWlnaHRTY2FsZSk7XG5cbiAgICBpZiAodGhpcy5hc1BhcnRpY2xlcykge1xuICAgICAgdGhpcy5rbm90ID0gdGhpcy5jcmVhdGVQYXJ0aWNsZVN5c3RlbShnZW9tKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5rbm90ID0gdGhpcy5jcmVhdGVNZXNoKGdlb20pO1xuICAgIH1cblxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMua25vdCk7XG5cblxuICB9XG5cblxuICAvKipcbiAgICogdXBkYXRl6Zai5pWwXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXBkYXRlKCl7XG5cblx0XHRpZiAodGhpcy5yb3RhdGUpIHtcblx0XHRcdHRoaXMua25vdC5yb3RhdGlvbi55ID0gdGhpcy5zdGVwICs9IDAuMDA1O1xuXHRcdH1cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9vdmVyU2NlbmUuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBTY2VuZTAxXG4gKiBEYXRlOiAxNy8wNS8zMVxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUwMSBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2NlbmUgPSBudWxsO1xuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICAvLyB0aGlzLkJveCA9IG51bGw7XG4gICAgdGhpcy5jdWJlID0gbnVsbDtcbiAgICB0aGlzLnRpbWVyID0gMDtcblxuICAgIHRoaXMuZ3JvdXAgPSBudWxsO1xuXG4gICAgdGhpcy5yZW5kZXIgPSB0aGlzLl9yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY3JlYXRlU2NlbmUgPSB0aGlzLl9jcmVhdGVTY2VuZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlID0gdGhpcy5fdXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIOOCt+ODvOODs+OCkuS9nOaIkOOAguOCquODluOCuOOCp+OCr+ODiOOCkuagvOe0jVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NyZWF0ZVNjZW5lKCl7XG5cbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7IC8v44K344O844Oz5L2c5oiQXG5cbiAgICB0aGlzLmdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgY29uc3Qgc3RlcCA9MzA7XG4gICAgY29uc3QgbnVtID0gMTA7XG4gICAgZm9yIChsZXQgeCA9IDE7IHggPD0gbnVtOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSAxOyB5IDw9IG51bTsgeSsrKSB7XG4gICAgICAgIGZvciAobGV0IHogPSAxOyB6IDw9IG51bTsgeiArKykge1xuICAgICAgICAgIHRoaXMuY3ViZSA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgICAgICAgICBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDEwLCAxMCksXG4gICAgICAgICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKDB4ZmZmZmZmKVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jdWJlLnBvc2l0aW9uLnNldChcbiAgICAgICAgICAgICAgKHggLSBudW0gLyAyKSAqIHN0ZXAsXG4gICAgICAgICAgICAgICh5IC0gbnVtIC8gMikgKiBzdGVwLFxuICAgICAgICAgICAgICAoeiAtIG51bSAvIDIpICogc3RlcFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5ncm91cC5hZGQodGhpcy5jdWJlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLmdyb3VwKTtcblxuICAgIGNvbnN0IHBvaW50TGlnaHQgPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweGZmZmZmZik7XG4gICAgcG9pbnRMaWdodC5wb3NpdGlvbi5zZXQoMjAwLCAyMDAsIDIwMCk7XG4gICAgdGhpcy5zY2VuZS5hZGQocG9pbnRMaWdodCk7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgd2luZG93LmlubmVyV2lkdGgvd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAyMDA7XG5cbiAgfVxuXG5cbiAgX3JlbmRlcigpIHtcbiAgICB0aGlzLmdyb3VwLnJvdGF0aW9uLnggKz0gMC4wMTtcbiAgICB0aGlzLmdyb3VwLnJvdGF0aW9uLnkgKz0gMC4wMTtcbiAgICB0aGlzLmdyb3VwLnJvdGF0aW9uLnogKz0gMC4wMTtcbiAgICB0aGlzLmdyb3VwLnRyYXZlcnNlKGZ1bmN0aW9uKG9iaikge1xuICAgICAgaWYgKG9iaiAhPSB0aGlzLmdyb3VwKSB7XG4gICAgICAgIG9iai5yb3RhdGlvbi54ICs9IDAuMDE7XG4gICAgICAgIG9iai5yb3RhdGlvbi55ICs9IDAuMDE7XG4gICAgICAgIG9iai5yb3RhdGlvbi56ICs9IDAuMDE7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICAvLyBzdGF0cy51cGRhdGUoKTtcbiAgICAvLyByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gIH1cblxuXG4gIC8qKlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3VwZGF0ZSgpe1xuXG4gICAgLy8gd2luZG93LmNvbnNvbGUubG9nKCd1cGRhdGUwMScpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9TY2VuZTAxLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogU2NlbmUwMlxuICogRGF0ZTogMTcvMDUvMzFcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IEVudHJ5IGZyb20gJy4uL0NvcmUvRW50cnknO1xuaW1wb3J0IGF1ZGlvIGZyb20gXCIuL1V0aWxzL2F1ZGlvXCI7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUwMiBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2NlbmUgPSBudWxsO1xuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLkJveCA9IG51bGw7XG4gICAgdGhpcy50aW1lciA9IDA7XG5cbiAgICB0aGlzLmVsVm9sdW1lID0gbnVsbDtcbiAgICB0aGlzLmVsVm9sdW1lVmFsID0gbnVsbDtcblxuICAgIC8vIHRoaXMuYXVkaW8gPSB0aGlzLl9hdWRpby5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5jcmVhdGVTY2VuZSA9IHRoaXMuX2NyZWF0ZVNjZW5lLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLl91cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY3JlYXRlU2NlbmUoKTtcblxuICAgIHRoaXMuYXVkaW9Jbml0ID0gbmV3IGF1ZGlvKCk7XG4gICAgLy9cbiAgICAvLyB0aGlzLmFhYSA9IHRoaXMuYXVkaW9Jbml0LmV4ZWN1dGUoKTtcbiAgICAvLyB3aW5kb3cuY29uc29sZS5sb2codGhpcy5hYWEpO1xuICAgIFxuICAgIC8vIHRoaXMuYWFhID0gdGhpcy5hdWRpb0luaXQuZWxWb2x1bWVWYWwoKTtcbiAgICAvLyB3aW5kb3cuY29uc29sZS5sb2codGhpcy5hdWRpb0luaXQpO1xuXG4gICAgLy8gdGhpcy5hdWRpb0luaXQoKTsgLy9hdWRpb0luaXTlrp/ooYxcblxuICB9XG5cblxuICBhdWRpb0luaXQoKXtcblxuICAgIGxldCBjdHgsIGFuYWx5c2VyLCBmcmVxdWVuY2llcywgZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlLCBleGVjdXRlO1xuXG4gICAgd2luZG93LkF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbiAgICBjdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cbiAgICBhbmFseXNlciA9IGN0eC5jcmVhdGVBbmFseXNlcigpO1xuICAgIGZyZXF1ZW5jaWVzID0gbmV3IFVpbnQ4QXJyYXkoYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQpO1xuXG4gICAgZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShmcmVxdWVuY2llcyk7XG4gICAgICByZXR1cm4gZnJlcXVlbmNpZXMucmVkdWNlKGZ1bmN0aW9uKHByZXZpb3VzLCBjdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMgKyBjdXJyZW50O1xuICAgICAgICAgIH0pIC8gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgfTtcblxuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHthdWRpbzogdHJ1ZX0pXG4gICAgICAgIC50aGVuKChzdHJlYW0pID0+IHtcbiAgICAgICAgICB3aW5kb3cuaGFja0Zvck1venppbGEgPSBzdHJlYW07XG4gICAgICAgICAgY3R4LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHN0cmVhbSlcbiAgICAgICAgICAvLyBBbmFseXNlck5vZGXjgavmjqXntppcbiAgICAgICAgICAgICAgLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuXG4gICAgLy8g6Z+z6YeP44KS6KGo56S644GZ44KL6KaB57SgXG4gICAgdGhpcy5lbFZvbHVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2x1bWUnKTtcblxuICAgIC8vIOWPr+iDveOBqumZkOOCiumrmOOBhOODleODrOODvOODoOODrOODvOODiOOBp+mfs+mHj+OCkuWPluW+l+OBl+OAgeihqOekuuOCkuabtOaWsOOBmeOCi1xuICAgIGV4ZWN1dGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZWxWb2x1bWUuaW5uZXJIVE1MID0gTWF0aC5mbG9vcihnZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UoKSk7XG4gICAgICB0aGlzLmVsVm9sdW1lVmFsID0gTWF0aC5mbG9vcihnZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UoKSk7XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShleGVjdXRlKTtcbiAgICB9LmJpbmQodGhpcyk7XG5cbiAgICAvL1xuICAgIGV4ZWN1dGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjgrfjg7zjg7PjgpLkvZzmiJDjgILjgqrjg5bjgrjjgqfjgq/jg4jjgpLmoLzntI1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpOyAvL+OCt+ODvOODs+S9nOaIkFxuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoL3dpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwMCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDEwMDA7XG5cbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDUwLDUwLDUwKTtcbiAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKDB4ODg4ODg4KTtcblxuICAgIHRoaXMuQm94ID0gbmV3IFRIUkVFLk1lc2goXG4gICAgICAgIHRoaXMuZ2VvbWV0cnksXG4gICAgICAgIHRoaXMubWF0ZXJpYWxcbiAgICApO1xuXG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5Cb3gpO1xuXG4gIH1cblxuXG4gIC8qKlxuICAgKiB1cGRhdGXplqLmlbBcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91cGRhdGUoKXtcblxuICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmF1ZGlvSW5pdC5leGVjdXRlKCkpO1xuXG4gICAgdGhpcy50aW1lciArPSAwLjE7XG4gICAgdGhpcy5Cb3gucG9zaXRpb24ueSA9IDUwICogTWF0aC5zaW4odGhpcy50aW1lcik7XG4gICAgLy8gdGhpcy5Cb3gucG9zaXRpb24ueSA9IHRoaXMuZWxWb2x1bWVWYWwgKiBNYXRoLnNpbih0aGlzLnRpbWVyKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9TY2VuZTAyLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogYXVkaW9cbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBhdWRpbyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmVsVm9sdW1lID0gbnVsbDtcbiAgICB0aGlzLmVsVm9sdW1lVmFsID0gbnVsbDtcblxuICAgIHRoaXMuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlID0gbnVsbDtcblxuICAgIHRoaXMuZXhlY3V0ZSA9IHRoaXMuX2V4ZWN1dGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuZ2V0VmFsID0gdGhpcy5fZ2V0VmFsLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmF1ZGlvSW5pdCgpO1xuXG4gIH1cblxuICAvKipcbiAgICog5Yid5pyf5YyWXG4gICAqL1xuICBhdWRpb0luaXQoKXtcblxuICAgIGxldCBjdHgsIGFuYWx5c2VyLCBmcmVxdWVuY2llcztcblxuICAgIHdpbmRvdy5BdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG4gICAgY3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG4gICAgYW5hbHlzZXIgPSBjdHguY3JlYXRlQW5hbHlzZXIoKTtcbiAgICBmcmVxdWVuY2llcyA9IG5ldyBVaW50OEFycmF5KGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50KTtcblxuICAgIHRoaXMuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShmcmVxdWVuY2llcyk7XG4gICAgICByZXR1cm4gZnJlcXVlbmNpZXMucmVkdWNlKGZ1bmN0aW9uKHByZXZpb3VzLCBjdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMgKyBjdXJyZW50O1xuICAgICAgICAgIH0pIC8gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgfTtcblxuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHthdWRpbzogdHJ1ZX0pXG4gICAgICAgIC50aGVuKChzdHJlYW0pID0+IHtcbiAgICAgICAgICB3aW5kb3cuaGFja0Zvck1venppbGEgPSBzdHJlYW07XG4gICAgICAgICAgY3R4LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHN0cmVhbSlcbiAgICAgICAgICAvLyBBbmFseXNlck5vZGXjgavmjqXntppcbiAgICAgICAgICAgICAgLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuXG4gICAgdGhpcy5leGVjdXRlKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2V4ZWN1dGUoKXtcbiAgICAvLyDpn7Pph4/jgpLooajnpLrjgZnjgovopoHntKBcbiAgICB0aGlzLmVsVm9sdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvbHVtZScpO1xuXG4gICAgLy8g5Y+v6IO944Gq6ZmQ44KK6auY44GE44OV44Os44O844Og44Os44O844OI44Gn6Z+z6YeP44KS5Y+W5b6X44GX44CB6KGo56S644KS5pu05paw44GZ44KLXG4gICAgdGhpcy5lbFZvbHVtZS5pbm5lckhUTUwgPSBNYXRoLmZsb29yKHRoaXMuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlKCkpO1xuICAgIHRoaXMuZWxWb2x1bWVWYWwgPSBNYXRoLmZsb29yKHRoaXMuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlKCkpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZXhlY3V0ZSk7XG5cbiAgICByZXR1cm4odGhpcy5lbFZvbHVtZVZhbCk7XG4gIH1cblxuICBfZ2V0VmFsKCl7XG5cbiAgICByZXR1cm4odGhpcy5lbFZvbHVtZVZhbCk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvVXRpbHMvYXVkaW8uanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBTY2VuZTAzXG4gKiBEYXRlOiAxNy8wNi8xOVxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5pbXBvcnQgUGxhbmVTY2VuZTAzIGZyb20gJy4vUGxhbmVTY2VuZTAzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZTAzIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuXG4gICAgdGhpcy53aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcblxuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcblxuICAgIHRoaXMuY3JlYXRlU2NlbmUgPSB0aGlzLl9jcmVhdGVTY2VuZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMuX29uUmVzaXplLmJpbmQodGhpcyk7XG5cdFx0dGhpcy51cGRhdGUgPSB0aGlzLl91cGRhdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmxvYWRUZXh0dXJlID0gdGhpcy5fbG9hZFRleHR1cmUuYmluZCh0aGlzKTtcblxuXHRcdHRoaXMucGxhbmUgPSBuZXcgUGxhbmVTY2VuZTAzKCk7IC8vIHBsYW5lXG5cblx0XHR0aGlzLmluaXQoKTsgLy8g5Yid5pyf5YyW5a6f6KGMXG5cbiAgfVxuXG4gIC8qKlxuICAgKiDliJ3mnJ/ljJZcbiAgICovXG4gIGluaXQoKXtcblxuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKTtcblxuXHRcdHRoaXMubG9hZFRleHR1cmUoKTtcblxuICB9XG5cblxuXG4gIC8qKlxuICAgKuOAgOOCt+ODvOODs+S9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVNjZW5lKCl7XG5cbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7IC8v44K344O844Oz5L2c5oiQXG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxMDA7XG5cbiAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwwLDApKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOeUu+WDj+OCkuODreODvOODiVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0X2xvYWRUZXh0dXJlKCl7XG5cblx0XHR0aGlzLnBsYW5lLmxvYWRUZXh0dXJlKCcuLi8uLi8uLi8uLi9hc3NldHMvcmVzb3VyY2UvaW1nL3NoaWJ1eWEwMS5qcGcnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLnBsYW5lLm1lc2gpO1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcblx0XHRcdFx0dGhpcy5vblJlc2l6ZSgpO1xuXHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0dGhpcy5vblJlc2l6ZSgpO1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHR9KTtcblxuXHR9XG5cbiAgLyoqXG4gICAqIOabtOaWsFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3VwZGF0ZSgpIHtcblxuXHRcdHRoaXMucGxhbmUudW5pZm9ybXMudGltZS52YWx1ZSArPSAwLjA1O1xuXG5cdFx0Ly8gd2luZG93LmNvbnNvbGUubG9nKCcwMycpO1xuICB9XG5cbiAgLyoqXG4gICAq44CA55S76Z2i44Oq44K144Kk44K644Kk44OZ44Oz44OIXG4gICAqL1xuICBfb25SZXNpemUoKSB7XG5cdFx0Ly8gdGhpcy5jYW52YXMud2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIC8vIHRoaXMuY2FudmFzLmhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuXHRcdHRoaXMucGxhbmUubWVzaC5tYXRlcmlhbC51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG5cbiAgfVxuXG5cblx0c2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvU2NlbmUwMy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFBsYW5lXG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmVTY2VuZTAzIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG5cdFx0dGhpcy51bmlmb3JtcyA9IHt9O1xuXHRcdHRoaXMudGV4dHVyZSA9IG51bGw7XG5cdFx0dGhpcy5tZXNoID0gbnVsbDtcblxuXHRcdHRoaXMubG9hZFRleHR1cmUgPSB0aGlzLl9sb2FkVGV4dHVyZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY3JlYXRlTWVzaCA9IHRoaXMuX2NyZWF0ZU1lc2guYmluZCh0aGlzKTtcblx0XHQvLyB0aGlzLnJlbmRlciA9IHRoaXMuX3JlbmRlci5iaW5kKHRoaXMpO1xuXHRcdC8vIHRoaXMucmVzaXplID0gdGhpcy5fcmVzaXplLmJpbmQodGhpcyk7XG5cbiAgfVxuXG5cdF9sb2FkVGV4dHVyZShpbWFnZSwgY2FsbGJhY2spIHtcblx0XHRjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuXHRcdGxvYWRlci5sb2FkKGltYWdlLCAodGV4dHVyZSkgPT4ge1xuXHRcdFx0dGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5OZWFyZXN0RmlsdGVyO1xuICAgICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5OZWFyZXN0RmlsdGVyO1xuICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcbiAgICAgIHRoaXMubWVzaCA9IHRoaXMuY3JlYXRlTWVzaCgpO1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9KTtcblx0fVxuXG5cdF9jcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMudW5pZm9ybXMgPSB7XG5cdFx0XHR0aW1lOiB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXG5cdFx0XHRyZXNvbHV0aW9uOiB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCkgfSxcblx0XHRcdG1vdXNlOiB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCkgfVxuXHRcdH07XG5cdFx0cmV0dXJuIG5ldyBUSFJFRS5NZXNoKFxuXHRcdFx0bmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMiwgMiksXG5cdFx0XHRuZXcgVEhSRUUuUmF3U2hhZGVyTWF0ZXJpYWwoe1xuXHRcdFx0XHR1bmlmb3JtczogdGhpcy51bmlmb3Jtcyxcblx0XHRcdFx0dmVydGV4U2hhZGVyOiByZXF1aXJlKCcuLi8uLi8uLi8uLi9nbHNsL3NjZW5lMDMudmVydCcpLFxuXHRcdFx0XHRmcmFnbWVudFNoYWRlcjogcmVxdWlyZSgnLi4vLi4vLi4vLi4vZ2xzbC9zY2VuZTAzLmZyYWcnKSxcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0Ly8gX3JlbmRlcih0aW1lKSB7XG5cdC8vXG5cdFx0Ly8gaWYgKHRoaXMuc3RvcCkgcmV0dXJuO1xuXHRcdC8vIHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSArPSB0aW1lIC8gdGhpcy5pbnRlcnZhbDtcblx0XHQvLyBpZiAodGhpcy51bmlmb3Jtcy50aW1lLnZhbHVlID4gMSkge1xuXHRcdC8vIFx0dGhpcy51bmlmb3Jtcy50aW1lLnZhbHVlID0gMDtcblx0XHQvLyBcdHRoaXMucHJldl9udW0gPSB0aGlzLm5leHRfbnVtO1xuXHRcdC8vIFx0dGhpcy51bmlmb3Jtcy50ZXhQcmV2LnZhbHVlID0gdGhpcy50ZXh0dXJlc1t0aGlzLm5leHRfbnVtXTtcblx0XHQvLyBcdHdoaWxlICh0aGlzLm5leHRfbnVtID09IHRoaXMucHJldl9udW0pIHtcblx0XHQvLyBcdFx0dGhpcy5uZXh0X251bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGV4dHVyZXMubGVuZ3RoKTtcblx0XHQvLyBcdH1cblx0XHQvLyBcdHRoaXMudW5pZm9ybXMudGV4TmV4dC52YWx1ZSA9IHRoaXMudGV4dHVyZXNbdGhpcy5uZXh0X251bV07XG5cdFx0Ly8gfVxuICAvLyB9XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHQvLyBfcmVzaXplKCl7XG5cdC8vIFx0dGhpcy51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG5cdC8vIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1BsYW5lU2NlbmUwMy5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMyIHV2O1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG4gICAgdlV2ID0gdXY7XFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNChwb3NpdGlvbiwgMS4wKTtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zcmMvYXNzZXRzL2dsc2wvc2NlbmUwMy52ZXJ0XG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwicHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIGZsb2F0IHRpbWU7XFxudW5pZm9ybSB2ZWMyICBtb3VzZTtcXG51bmlmb3JtIHZlYzIgIHJlc29sdXRpb247XFxuY29uc3QgZmxvYXQgUEkgPSAzLjE0MTU5MjY1O1xcbnZlYzIgc3F1YXJlRnJhbWVfMV8wKHZlYzIgc2NyZWVuU2l6ZSkge1xcbiAgdmVjMiBwb3NpdGlvbiA9IDIuMCAqIChnbF9GcmFnQ29vcmQueHkgLyBzY3JlZW5TaXplLnh5KSAtIDEuMDtcXG4gIHBvc2l0aW9uLnggKj0gc2NyZWVuU2l6ZS54IC8gc2NyZWVuU2l6ZS55O1xcbiAgcmV0dXJuIHBvc2l0aW9uO1xcbn1cXG5cXG52ZWMyIHNxdWFyZUZyYW1lXzFfMCh2ZWMyIHNjcmVlblNpemUsIHZlYzIgY29vcmQpIHtcXG4gIHZlYzIgcG9zaXRpb24gPSAyLjAgKiAoY29vcmQueHkgLyBzY3JlZW5TaXplLnh5KSAtIDEuMDtcXG4gIHBvc2l0aW9uLnggKj0gc2NyZWVuU2l6ZS54IC8gc2NyZWVuU2l6ZS55O1xcbiAgcmV0dXJuIHBvc2l0aW9uO1xcbn1cXG5cXG5cXG5cXG5tYXQzIGNhbGNMb29rQXRNYXRyaXhfNV8xKHZlYzMgb3JpZ2luLCB2ZWMzIHRhcmdldCwgZmxvYXQgcm9sbCkge1xcbiAgdmVjMyByciA9IHZlYzMoc2luKHJvbGwpLCBjb3Mocm9sbCksIDAuMCk7XFxuICB2ZWMzIHd3ID0gbm9ybWFsaXplKHRhcmdldCAtIG9yaWdpbik7XFxuICB2ZWMzIHV1ID0gbm9ybWFsaXplKGNyb3NzKHd3LCBycikpO1xcbiAgdmVjMyB2diA9IG5vcm1hbGl6ZShjcm9zcyh1dSwgd3cpKTtcXG5cXG4gIHJldHVybiBtYXQzKHV1LCB2diwgd3cpO1xcbn1cXG5cXG5cXG5cXG5cXG52ZWMzIGdldFJheV8zXzIobWF0MyBjYW1NYXQsIHZlYzIgc2NyZWVuUG9zLCBmbG9hdCBsZW5zTGVuZ3RoKSB7XFxuICByZXR1cm4gbm9ybWFsaXplKGNhbU1hdCAqIHZlYzMoc2NyZWVuUG9zLCBsZW5zTGVuZ3RoKSk7XFxufVxcblxcbnZlYzMgZ2V0UmF5XzNfMih2ZWMzIG9yaWdpbiwgdmVjMyB0YXJnZXQsIHZlYzIgc2NyZWVuUG9zLCBmbG9hdCBsZW5zTGVuZ3RoKSB7XFxuICBtYXQzIGNhbU1hdCA9IGNhbGNMb29rQXRNYXRyaXhfNV8xKG9yaWdpbiwgdGFyZ2V0LCAwLjApO1xcbiAgcmV0dXJuIGdldFJheV8zXzIoY2FtTWF0LCBzY3JlZW5Qb3MsIGxlbnNMZW5ndGgpO1xcbn1cXG5cXG5cXG5cXG52ZWMyIG1hcCh2ZWMzIHApO1xcbi8vIE9yaWdpbmFsbHkgc291cmNlZCBmcm9tIGh0dHBzOi8vd3d3LnNoYWRlcnRveS5jb20vdmlldy9sZGZTV3NcXG4vLyBUaGFuayB5b3UgScOxaWdvIDopXFxuXFxudmVjMiBjYWxjUmF5SW50ZXJzZWN0aW9uXzRfMyh2ZWMzIHJheU9yaWdpbiwgdmVjMyByYXlEaXIsIGZsb2F0IG1heGQsIGZsb2F0IHByZWNpcywgZmxvYXQgcmVkdWN0aW9uKSB7XFxuICBmbG9hdCBsYXRlc3QgPSBwcmVjaXMgKiAyLjA7XFxuICBmbG9hdCBkaXN0ICAgPSArMC4wO1xcbiAgZmxvYXQgdHlwZSAgID0gLTEuMDtcXG4gIHZlYzIgIHJlcyAgICA9IHZlYzIoLTEuMCwgLTEuMCk7XFxuXFxuICBmb3IgKGludCBpID0gMDsgaSA8IDI1NjsgaSsrKSB7XFxuICAgIGlmIChsYXRlc3QgPCBwcmVjaXMgfHwgZGlzdCA+IG1heGQpIGJyZWFrO1xcblxcbiAgICB2ZWMyIHJlc3VsdCA9IG1hcChyYXlPcmlnaW4gKyByYXlEaXIgKiBkaXN0KTtcXG5cXG4gICAgbGF0ZXN0ID0gcmVzdWx0Lng7XFxuICAgIHR5cGUgICA9IHJlc3VsdC55O1xcbiAgICBkaXN0ICArPSBsYXRlc3QgKiByZWR1Y3Rpb247XFxuICB9XFxuXFxuICBpZiAoZGlzdCA8IG1heGQpIHtcXG4gICAgcmVzID0gdmVjMihkaXN0LCB0eXBlKTtcXG4gIH1cXG5cXG4gIHJldHVybiByZXM7XFxufVxcblxcbnZlYzIgY2FsY1JheUludGVyc2VjdGlvbl80XzModmVjMyByYXlPcmlnaW4sIHZlYzMgcmF5RGlyKSB7XFxuICByZXR1cm4gY2FsY1JheUludGVyc2VjdGlvbl80XzMocmF5T3JpZ2luLCByYXlEaXIsIDIwLjAsIDAuMDAxLCAxLjApO1xcbn1cXG5cXG5cXG5cXG4vLyBPcmlnaW5hbGx5IHNvdXJjZWQgZnJvbSBodHRwczovL3d3dy5zaGFkZXJ0b3kuY29tL3ZpZXcvbGRmU1dzXFxuLy8gVGhhbmsgeW91IEnDsWlnbyA6KVxcblxcbnZlYzMgY2FsY05vcm1hbF8yXzQodmVjMyBwb3MsIGZsb2F0IGVwcykge1xcbiAgY29uc3QgdmVjMyB2MSA9IHZlYzMoIDEuMCwtMS4wLC0xLjApO1xcbiAgY29uc3QgdmVjMyB2MiA9IHZlYzMoLTEuMCwtMS4wLCAxLjApO1xcbiAgY29uc3QgdmVjMyB2MyA9IHZlYzMoLTEuMCwgMS4wLC0xLjApO1xcbiAgY29uc3QgdmVjMyB2NCA9IHZlYzMoIDEuMCwgMS4wLCAxLjApO1xcblxcbiAgcmV0dXJuIG5vcm1hbGl6ZSggdjEgKiBtYXAoIHBvcyArIHYxKmVwcyApLnggK1xcbiAgICAgICAgICAgICAgICAgICAgdjIgKiBtYXAoIHBvcyArIHYyKmVwcyApLnggK1xcbiAgICAgICAgICAgICAgICAgICAgdjMgKiBtYXAoIHBvcyArIHYzKmVwcyApLnggK1xcbiAgICAgICAgICAgICAgICAgICAgdjQgKiBtYXAoIHBvcyArIHY0KmVwcyApLnggKTtcXG59XFxuXFxudmVjMyBjYWxjTm9ybWFsXzJfNCh2ZWMzIHBvcykge1xcbiAgcmV0dXJuIGNhbGNOb3JtYWxfMl80KHBvcywgMC4wMDIpO1xcbn1cXG5cXG5cXG5cXG4jZGVmaW5lIE5VTSAxLlxcbmZsb2F0IHQoKSB7XFxuICAgIHJldHVybiB0aW1lICogMy47XFxufVxcblxcbmZsb2F0IHJhbmRvbShpbiB2ZWMyIHApIHtcXG4gICAgcmV0dXJuIGZyYWN0KHNpbihkb3QocC54eSwgdmVjMigxMi4zNCwgNTYuNzgpKSkgKiA5MC4wKTtcXG59XFxuXFxuZmxvYXQgc2RHcm91bmQoaW4gdmVjMyBwKSB7XFxuICAgIHJldHVybiBwLnk7XFxufVxcblxcbmZsb2F0IHNkQnVpbGRpbmdzKGluIHZlYzMgcCkge1xcbiAgICB2ZWMzIHBwID0gbW9kKHAsIDEuKSAtIC41O1xcbiAgICBmbG9hdCBoZWlnaHQgPSByYW5kb20ocC54eiAtIG1vZChwLnh6LCAxLikpICozLjtcXG4gICAgZmxvYXQgbmVhcm5lc3MgPSBtYXgoZmxvb3IocC56KSAtIHQoKSAtIDIuLCAwLjMpO1xcbiAgICBuZWFybmVzcyA9IHBvdyhuZWFybmVzcywgLjMpO1xcbiAgICBwcC55ID0gcC55ICogMC40ICogbmVhcm5lc3MgLSBoZWlnaHQgKiAwLjE7XFxuICAgIHJldHVybiBsZW5ndGgobWF4KGFicyhwcCkgLSAuMjUsIC4wKSk7XFxufVxcblxcbnZlYzIgbWFwKHZlYzMgcCkge1xcbiAgICByZXR1cm4gdmVjMihtaW4oc2RHcm91bmQocCksIHNkQnVpbGRpbmdzKHApKSwgMC4pO1xcbn1cXG5cXG4vL1xcbnZvaWQgbWFpbiAodm9pZCkge1xcbiAgICB2ZWMzIHJheU9yaWdpbiA9IHZlYzMoMCwgMS41LCAwKTtcXG4gICAgcmF5T3JpZ2luLnggKz0gKHNpbih0KCkgKiAuNykgKyBjb3ModCgpICogLjY3KSkgKiAwLjA3O1xcbiAgICByYXlPcmlnaW4ueSArPSAoc2luKHQoKSAqIC44MSkgKyBjb3ModCgpICogLjgpKSAqIDAuMjtcXG4gICAgdmVjMyByYXlUYXJnZXQgPSB2ZWMzKDAsIDIsIDk5OTk5OTkuKTtcXG4gICAgcmF5T3JpZ2luLnogPSB0KCk7XFxuICAgIHZlYzMgcmF5RGlyZWN0aW9uID0gZ2V0UmF5XzNfMihyYXlPcmlnaW4sIHJheVRhcmdldCwgc3F1YXJlRnJhbWVfMV8wKHJlc29sdXRpb24ueHkpLCAyLik7XFxuXFxuICAgIHZlYzMgbGlnaHREaXIgPSBub3JtYWxpemUodmVjMygwLjMsIDMuLCAyLikpO1xcbiAgICB2ZWMzIGxpZ2h0ID0gdmVjMyguNCk7XFxuICAgIHZlYzMgYW1iaWVudCA9IHZlYzMoLjQsIC4zLCAuNSk7XFxuXFxuICAgIHZlYzIgY29sbGlzaW9uID0gY2FsY1JheUludGVyc2VjdGlvbl80XzMocmF5T3JpZ2luLCByYXlEaXJlY3Rpb24pO1xcbiAgICBpZiAoY29sbGlzaW9uLnggPiAwLikge1xcbiAgICAgICAgdmVjMyBwb3MgPSByYXlPcmlnaW4gKyByYXlEaXJlY3Rpb24gKiBjb2xsaXNpb24ueDtcXG4gICAgICAgIHZlYzMgbm9ybWFsID0gY2FsY05vcm1hbF8yXzQocG9zKTtcXG4gICAgICAgIGZsb2F0IGRpZmYgPSBjbGFtcChkb3QobGlnaHREaXIsIG5vcm1hbCksIDAuMSwgMS4wKTtcXG4gICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoZGlmZiAqIGxpZ2h0ICsgYW1iaWVudCAqIDEuL3Bvcy55LCAxLjApO1xcbiAgICB9XFxuICAgIGVsc2Uge1xcbiAgICAgICAgZmxvYXQgYyA9IGdsX0ZyYWdDb29yZC55IC8gcmVzb2x1dGlvbi55O1xcbiAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjICogMC4yLCAwLCBjICogMC4zLCAxKTtcXG4gICAgfVxcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3NyYy9hc3NldHMvZ2xzbC9zY2VuZTAzLmZyYWdcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IERpc3BsYXlcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBUZXh0dXJlQmcgZnJvbSBcIi4uL3Zpc3VhbC9UZXh0dXJlQmdcIjtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5VG9wIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8g44Ki44OL44Oh44O844K344On44Oz44Or44O844OX44K544K/44O844OIXG4gICAgLy8gZ2IuaW4udXAubG9vcCgpO1xuICAgIFxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgZ2IuaW4udGV4dHVyZUJnID0gbmV3IFRleHR1cmVCZygpO1xuXG4gICAgZ2IuaW4udGV4dHVyZUJnLmluaXQoKTtcblxuXG4gIH1cblxuICBzdGF0aWMgcnVuKCkge1xuXG5cdFx0Ly8gd2luZG93LmNvbnNvbGUubG9nKCdzdGF0aWNfUnVuJyk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUZXh0dXJlQmcuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBUZXh0dXJlQmdcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5JztcbmltcG9ydCBQbGFuZSBmcm9tICcuL1BsYW5lJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlQmcgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJnbC1vdXRwdXQnKTtcblxuICAgIHRoaXMud2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSA9IHRoaXMuX2NyZWF0ZUNhbWVyYS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIgPSB0aGlzLl9jcmVhdGVSZW5kZXJlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUgPSB0aGlzLl9jcmVhdGVTY2VuZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMuX29uUmVzaXplLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5VcGRhdGUgPSB0aGlzLl9VcGRhdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmxvYWRUZXh0dXJlID0gdGhpcy5fbG9hZFRleHR1cmUuYmluZCh0aGlzKTtcblxuXHRcdHRoaXMucGxhbmUgPSBuZXcgUGxhbmUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMllxuICAgKi9cbiAgaW5pdCgpe1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKTtcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuXG5cdFx0dGhpcy5VcGRhdGUoKTtcblxuXHRcdHRoaXMubG9hZFRleHR1cmUoKTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIOOCq+ODoeODqeS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZUNhbWVyYSgpe1xuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHRoaXMud2lkdGggLyB0aGlzLmhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi54ID0gMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gMDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTAwO1xuXG4gICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsMCwwKSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6zjg7Pjg4Djg6njg7zkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVSZW5kZXJlcigpe1xuXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgIGFscGhhICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgYW50aWFsaWFzICAgICAgICAgIDogZmFsc2UsXG4gICAgICBzdGVuY2lsICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIGRlcHRoICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBwcmVtdWx0aXBsaWVkQWxwaGEgOiBmYWxzZSxcbiAgICAgIGNhbnZhczogdGhpcy5jYW52YXNcblx0XHR9KTtcblxuICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweGZmZmZmZiwgMC4wKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICB9XG5cbiAgLyoqXG4gICAq44CA44K344O844Oz5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlU2NlbmUoKXtcblxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOeUu+WDj+OCkuODreODvOODiVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0X2xvYWRUZXh0dXJlKCl7XG5cblx0XHR0aGlzLnBsYW5lLmxvYWRUZXh0dXJlKCcuLi8uLi8uLi8uLi9hc3NldHMvcmVzb3VyY2UvaW1nL3NoaWJ1eWEwMS5qcGcnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLnBsYW5lLm1lc2gpO1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcblx0XHRcdFx0dGhpcy5vblJlc2l6ZSgpO1xuXHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0dGhpcy5vblJlc2l6ZSgpO1xuXHRcdFx0dGhpcy5VcGRhdGUoKTtcblx0XHR9KTtcblxuXHR9XG5cbiAgLyoqXG4gICAqIOabtOaWsFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX1VwZGF0ZSgpIHtcblxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuICAgICAgdGhpcy5VcGRhdGUoKTtcbiAgICB9KTtcblxuICB9XG5cbiAgLyoqXG4gICAq44CA55S76Z2i44Oq44K144Kk44K644Kk44OZ44Oz44OIXG4gICAqL1xuICBfb25SZXNpemUoKSB7XG5cdFx0dGhpcy5jYW52YXMud2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuXHRcdHRoaXMucGxhbmUubWVzaC5tYXRlcmlhbC51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG5cbiAgICB0aGlzLmNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICB9XG5cblxuXHRzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9UZXh0dXJlQmcuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBQbGFuZVxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IEVudHJ5IGZyb20gJy4uL0NvcmUvRW50cnknO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYW5lIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG5cdFx0dGhpcy51bmlmb3JtcyA9IHt9O1xuXHRcdHRoaXMudGV4dHVyZSA9IG51bGw7XG5cdFx0dGhpcy5tZXNoID0gbnVsbDtcblxuXHRcdHRoaXMubG9hZFRleHR1cmUgPSB0aGlzLl9sb2FkVGV4dHVyZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY3JlYXRlTWVzaCA9IHRoaXMuX2NyZWF0ZU1lc2guYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlbmRlciA9IHRoaXMuX3JlbmRlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVzaXplID0gdGhpcy5fcmVzaXplLmJpbmQodGhpcyk7XG5cbiAgfVxuXG5cdF9sb2FkVGV4dHVyZShpbWFnZSwgY2FsbGJhY2spIHtcblx0XHRjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuXHRcdGxvYWRlci5sb2FkKGltYWdlLCAodGV4dHVyZSkgPT4ge1xuXHRcdFx0dGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5OZWFyZXN0RmlsdGVyO1xuICAgICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5OZWFyZXN0RmlsdGVyO1xuICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcbiAgICAgIHRoaXMubWVzaCA9IHRoaXMuY3JlYXRlTWVzaCgpO1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9KTtcblx0fVxuXG5cdF9jcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMudW5pZm9ybXMgPSB7XG5cdFx0XHRyZXNvbHV0aW9uOiB7XG5cdFx0XHRcdHR5cGU6ICd2MicsXG5cdFx0XHRcdHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMihkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCksXG5cdFx0XHR9LFxuXHRcdFx0aW1hZ2VSZXNvbHV0aW9uOiB7XG5cdFx0XHRcdHR5cGU6ICd2MicsXG5cdFx0XHRcdHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMigyMDQ4LCAxMzU2KSxcblx0XHRcdH0sXG5cdFx0XHR0ZXh0dXJlOiB7XG5cdFx0XHRcdHR5cGU6ICd0Jyxcblx0XHRcdFx0dmFsdWU6IHRoaXMudGV4dHVyZSxcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiBuZXcgVEhSRUUuTWVzaChcblx0XHRcdG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDIsIDIpLFxuXHRcdFx0bmV3IFRIUkVFLlJhd1NoYWRlck1hdGVyaWFsKHtcblx0XHRcdFx0dW5pZm9ybXM6IHRoaXMudW5pZm9ybXMsXG5cdFx0XHRcdHZlcnRleFNoYWRlcjogcmVxdWlyZSgnLi4vLi4vLi4vLi4vZ2xzbC9jb3Zlci52ZXJ0JyksXG5cdFx0XHRcdGZyYWdtZW50U2hhZGVyOiByZXF1aXJlKCcuLi8uLi8uLi8uLi9nbHNsL2NvdmVyLmZyYWcnKSxcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0X3JlbmRlcih0aW1lKSB7XG5cblx0XHRpZiAodGhpcy5zdG9wKSByZXR1cm47XG5cdFx0dGhpcy51bmlmb3Jtcy50aW1lLnZhbHVlICs9IHRpbWUgLyB0aGlzLmludGVydmFsO1xuXHRcdGlmICh0aGlzLnVuaWZvcm1zLnRpbWUudmFsdWUgPiAxKSB7XG5cdFx0XHR0aGlzLnVuaWZvcm1zLnRpbWUudmFsdWUgPSAwO1xuXHRcdFx0dGhpcy5wcmV2X251bSA9IHRoaXMubmV4dF9udW07XG5cdFx0XHR0aGlzLnVuaWZvcm1zLnRleFByZXYudmFsdWUgPSB0aGlzLnRleHR1cmVzW3RoaXMubmV4dF9udW1dO1xuXHRcdFx0d2hpbGUgKHRoaXMubmV4dF9udW0gPT0gdGhpcy5wcmV2X251bSkge1xuXHRcdFx0XHR0aGlzLm5leHRfbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy50ZXh0dXJlcy5sZW5ndGgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy51bmlmb3Jtcy50ZXhOZXh0LnZhbHVlID0gdGhpcy50ZXh0dXJlc1t0aGlzLm5leHRfbnVtXTtcblx0XHR9XG4gIH1cblxuXHRfcmVzaXplKCl7XG5cdFx0dGhpcy51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1BsYW5lLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxuYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgdXY7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4odm9pZCkge1xcbiAgICB2VXYgPSB1djtcXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHBvc2l0aW9uLCAxLjApO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3NyYy9hc3NldHMvZ2xzbC9jb3Zlci52ZXJ0XG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcbiNkZWZpbmUgR0xTTElGWSAxXFxuXFxudW5pZm9ybSB2ZWMyIHJlc29sdXRpb247XFxudW5pZm9ybSB2ZWMyIGltYWdlUmVzb2x1dGlvbjtcXG51bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlO1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG4gICAgdmVjMiByYXRpbyA9IHZlYzIoXFxuICAgICAgICBtaW4oKHJlc29sdXRpb24ueCAvIHJlc29sdXRpb24ueSkgLyAoaW1hZ2VSZXNvbHV0aW9uLnggLyBpbWFnZVJlc29sdXRpb24ueSksIDEuMCksXFxuICAgICAgICBtaW4oKHJlc29sdXRpb24ueSAvIHJlc29sdXRpb24ueCkgLyAoaW1hZ2VSZXNvbHV0aW9uLnkgLyBpbWFnZVJlc29sdXRpb24ueCksIDEuMClcXG4gICAgKTtcXG5cXG4gICAgdmVjMiB1diA9IHZlYzIoXFxuICAgICAgICB2VXYueCAqIHJhdGlvLnggKyAoMS4wIC0gcmF0aW8ueCkgKiAwLjUsXFxuICAgICAgICB2VXYueSAqIHJhdGlvLnkgKyAoMS4wIC0gcmF0aW8ueSkgKiAwLjVcXG4gICAgKTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHRleHR1cmUsIHV2KTtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zcmMvYXNzZXRzL2dsc2wvY292ZXIuZnJhZ1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRGlzcGxheVxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuLy8gaW1wb3J0IFdlYkdMaW5pdCBmcm9tICcuL1dlYkdMaW5pdC5qcyc7XG5cbmltcG9ydCBDYW52YXMgZnJvbSBcIi4uL3Zpc3VhbC9DYW52YXNcIjtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5VG9wIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8g44Ki44OL44Oh44O844K344On44Oz44Or44O844OX44K544K/44O844OIXG4gICAgLy8gZ2IuaW4udXAubG9vcCgpO1xuICAgIFxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgZ2IuaW4uY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gICAgZ2IuaW4uY2FudmFzLmluaXQoKTtcblxuXG4gIH1cblxuICBzdGF0aWMgcnVuKCkge1xuXG5cdFx0Ly8gd2luZG93LmNvbnNvbGUubG9nKCdzdGF0aWNfUnVuJyk7XG5cbiAgfVxuXG4gIHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUZXh0dXJlTW92aWUuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBDYW52YXNcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5Jztcbi8vIGltcG9ydCBUaXRsZU9iamVjdCBmcm9tIFwiLi9UaXRsZU9iamVjdFwiO1xuLy8gaW1wb3J0IENhbWVyYSBmcm9tICcuL1V0aWxzL0NhbWVyYSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy51bmlmb3JtcyA9IHtcbiAgICAgIHVfdGltZTogeyB0eXBlOiBcImZcIiwgdmFsdWU6IDEuMCB9LFxuICAgICAgdV9yZXNvbHV0aW9uOiB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCkgfSxcbiAgICAgIHVfbW91c2U6IHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoKSB9XG4gICAgfTtcblxuICAgIC8vIHRoaXMudGl0bGVPYmplY3QgPSBuZXcgVGl0bGVPYmplY3QoKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYmdsLW91dHB1dCcpO1xuXG4gICAgdGhpcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIC8vIHRoaXMub3V0cHV0ID0gb3B0cy5vdXRwdXQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7XG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG5cdFx0dGhpcy5jdWJlID0gbnVsbDtcblxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhID0gdGhpcy5fY3JlYXRlQ2FtZXJhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlciA9IHRoaXMuX2NyZWF0ZVJlbmRlcmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTY2VuZSA9IHRoaXMuX2NyZWF0ZVNjZW5lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVPYmplY3QgPSB0aGlzLl9jcmVhdGVPYmplY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9yYml0Q29udHJvbHMgPSB0aGlzLl9vcmJpdENvbnRyb2xzLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnBsYW5lT2JqZWN0ID0gdGhpcy5fcGxhbmVPYmplY3QuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucmVuZGVyID0gdGhpcy5fcmVuZGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5fb25SZXNpemUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuVXBkYXRlID0gdGhpcy5fVXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDliJ3mnJ/ljJZcbiAgICovXG4gIGluaXQoKXtcblxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhKCk7XG5cdFx0dGhpcy5jcmVhdGVTY2VuZSgpO1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKTtcblxuXHRcdHRoaXMub3JiaXRDb250cm9scygpO1xuXHRcdC8vIHRoaXMuY3JlYXRlT2JqZWN0KCk7XG5cbiAgICB0aGlzLnBsYW5lT2JqZWN0KCk7XG5cbiAgICB0aGlzLlVwZGF0ZSgpO1xuXG4gICAgLy8gdGhpcy50aXRsZU9iamVjdC5sb2FkVGV4dHVyZSgoKSA9PiB7XG4gICAgLy8gICB0aGlzLnNjZW5lLmFkZCh0aGlzLnRpdGxlT2JqZWN0Lm9iaik7XG4gICAgLy8gfSk7XG5cbiAgICAvL+ODquOCteOCpOOCuuOCpOODmeODs+ODiOeZuueBq1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgfSwgZmFsc2UpO1xuXG4gIH1cblxuICAvKipcbiAgICog44Kr44Oh44Op5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlQ2FtZXJhKCl7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxMDA7XG5cbiAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwwLDApKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvOS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVJlbmRlcmVyKCl7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgYWxwaGEgICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICBhbnRpYWxpYXMgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIHN0ZW5jaWwgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgZGVwdGggICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIHByZW11bHRpcGxpZWRBbHBoYSA6IGZhbHNlLFxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhc1xuXHRcdH0pO1xuXG4gICAgLy8gdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHgwMDAwMDApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIC8vIHRoaXMub3V0cHV0LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKuOAgOOCt+ODvOODs+S9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVNjZW5lKCl7XG5cblx0XHR0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBPYmplY3TkvZzmiJBcbiAgICogQHByaXZhdGVcbiAgICovXG5cdF9jcmVhdGVPYmplY3QoKXtcblxuICAgIGxldCBjdWJlR2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNCwgNCwgNCk7XG4gICAgbGV0IGN1YmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogMHhmZmZmZmYsXG4gICAgICB3aXJlZnJhbWU6IHRydWVcbiAgICB9KTtcblxuICAgIHRoaXMuY3ViZSA9IG5ldyBUSFJFRS5NZXNoKGN1YmVHZW9tZXRyeSwgY3ViZU1hdGVyaWFsKTtcbiAgICB0aGlzLmN1YmUucG9zaXRpb24ueCA9IDM7XG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLnkgPSAzO1xuICAgIHRoaXMuY3ViZS5wb3NpdGlvbi56ID0gMztcblxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuY3ViZSk7XG5cblx0fVxuXG5cdF9wbGFuZU9iamVjdCgpe1xuICAgIHRoaXMucGxhbmUgPSBuZXcgVEhSRUUuTWVzaChcbiAgICAgICAgLy8gbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMjU2LCA2NCwgNDAsIDEwKSxcbiAgICAgICAgbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoNSwgMjAsIDMyKSxcbiAgICAgICAgbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcbiAgICAgICAgICB1bmlmb3JtczogdGhpcy51bmlmb3JtcyxcbiAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsc2wvaW5kZXgvdGVzdC52ZXJ0JyksXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsc2wvaW5kZXgvdGVzdC5mcmFnJyksXG4gICAgICAgIH0pXG4gICAgKVxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMucGxhbmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0X3JlbmRlcigpIHtcbiAgICBsZXQgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcbiAgICBsZXQgdGltZSA9IGNsb2NrLmdldERlbHRhKCk7XG5cbiAgICAvLyB0aGlzLnRpdGxlT2JqZWN0LnRpdHJlbmRlcih0aW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDmm7TmlrBcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9VcGRhdGUoKSB7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHtcbiAgICAgIHRoaXMuVXBkYXRlKCk7XG4gICAgfSk7XG4gICAgLy8gdGhpcy5jb250cm9scy51cGRhdGUoKTtcbiAgICB0aGlzLnVuaWZvcm1zLnVfdGltZS52YWx1ZSArPSAwLjA1O1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgfVxuXG4gIC8qKlxuICAgKuOAgOeUu+mdouODquOCteOCpOOCulxuICAgKi9cbiAgX29uUmVzaXplKCkge1xuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuXHQvKipcbiAgICog44Kr44Oh44Op44Kz44Oz44OI44Ot44O844OrXG5cdCAqL1xuXHRfb3JiaXRDb250cm9scygpe1xuXHRcdHRoaXMuY29udHJvbHMgPSBuZXcgVEhSRUUuT3JiaXRDb250cm9scyh0aGlzLmNhbWVyYSk7XG5cdFx0dGhpcy5jb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZTtcblx0XHRsZXQgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcblxuXHRcdGxldCBkZWx0YSA9IGNsb2NrLmdldERlbHRhKCk7XG5cdFx0dGhpcy5jb250cm9scy51cGRhdGUoZGVsdGEpO1xuICB9XG5cblx0c2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvQ2FudmFzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxuLy9hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNCggcG9zaXRpb24sIDEuMCApO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3NyYy9hc3NldHMvZ2xzbC9pbmRleC90ZXN0LnZlcnRcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gdmVjMiB1X3Jlc29sdXRpb247XFxudW5pZm9ybSBmbG9hdCB1X3RpbWU7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICB2ZWMyIHN0ID0gZ2xfRnJhZ0Nvb3JkLnh5L3VfcmVzb2x1dGlvbi54eTtcXG4gICAgZ2xfRnJhZ0NvbG9yPXZlYzQoc3QueCxzdC55LDAuMCwxLjApO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3NyYy9hc3NldHMvZ2xzbC9pbmRleC90ZXN0LmZyYWdcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=