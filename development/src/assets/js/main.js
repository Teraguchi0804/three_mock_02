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
	
	var _DisplayTextureBg = __webpack_require__(33);
	
	var _DisplayTextureBg2 = _interopRequireDefault(_DisplayTextureBg);
	
	var _DisplayTextureMovie = __webpack_require__(38);
	
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
	
	var _Scene = __webpack_require__(26);
	
	var _Scene2 = _interopRequireDefault(_Scene);
	
	var _Scene3 = __webpack_require__(28);
	
	var _Scene4 = _interopRequireDefault(_Scene3);
	
	var _Scene5 = __webpack_require__(29);
	
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
	
	// import OverScene from "../visual/overScene";
	
	
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
	
	    _this.overscene = []; // overscene
	
	
	    _this.overAlpha = 0;
	
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
	      this.renderer.setClearColor(new THREE.Color(0x000000, 0.0));
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
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * File: overScene02
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 17/06/21
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Author: Teraguchi
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	'use strict';
	
	var overScene02 = function (_Entry) {
	  _inherits(overScene02, _Entry);
	
	  function overScene02() {
	    _classCallCheck(this, overScene02);
	
	    var _this = _possibleConstructorReturn(this, (overScene02.__proto__ || Object.getPrototypeOf(overScene02)).call(this));
	
	    _this.timer = 0;
	    _this.UPDATE = true;
	    _this.END = false;
	    _this.scene = null;
	    _this.camera = null;
	
	    _this.createScene = _this._createScene.bind(_this);
	    _this.remove = _this._remove.bind(_this);
	    _this.endEnabled = _this._endEnabled.bind(_this);
	    _this.update = _this._update.bind(_this);
	
	    _this.createScene();
	
	    return _this;
	  }
	
	  /**
	   * シーンを作成。オブジェクトを格納
	   * @private
	   */
	
	
	  _createClass(overScene02, [{
	    key: '_createScene',
	    value: function _createScene() {
	
	      this.scene = new THREE.Scene(); //シーン作成
	
	      this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5000);
	      this.camera.position.x = 0;
	      this.camera.position.y = 0;
	      this.camera.position.z = 1400;
	      this.camera.lookAt(new THREE.Vector3(10, 0, 0));
	
	      this.geometry = new THREE.InstancedBufferGeometry();
	      this.geometry.copy(new THREE.CircleBufferGeometry(1, 6));
	
	      var particleCount = 10000;
	      var translateArray = new Float32Array(particleCount * 3);
	      for (var i = 0, i3 = 0, l = particleCount; i < l; i++, i3 += 3) {
	        translateArray[i3 + 0] = Math.random() * 2 - 1;
	        translateArray[i3 + 1] = Math.random() * 2 - 1;
	        translateArray[i3 + 2] = Math.random() * 2 - 1;
	      }
	      this.geometry.addAttribute("translate", new THREE.InstancedBufferAttribute(translateArray, 3, 1));
	      this.material = new THREE.RawShaderMaterial({
	        uniforms: {
	          map: { value: new THREE.TextureLoader().load("../../../../assets/resource/img/circle.png") },
	          time: { value: 0.0 }
	        },
	        vertexShader: __webpack_require__(24),
	        fragmentShader: __webpack_require__(25),
	        depthTest: true,
	        depthWrite: true
	      });
	      this.mesh = new THREE.Mesh(this.geometry, this.material);
	      this.mesh.scale.set(400, 400, 400);
	      this.scene.add(this.mesh);
	    }
	
	    /**
	    *
	     * @private
	     */
	
	  }, {
	    key: '_remove',
	    value: function _remove() {
	      while (this.scene.children.length != 0) {
	        this.scene.remove(this.scene.children[0]);
	        if (this.scene.children[0] == THREE.Mesh) {
	          this.scene.children[0].geometry.dispose();
	          this.scene.children[0].material.dispose();
	        }
	      };
	    }
	
	    /**
	    *
	     * @private
	     */
	
	  }, {
	    key: '_endEnabled',
	    value: function _endEnabled() {
	      this.UPDATE = false;
	    }
	
	    /**
	     * update関数
	     * @private
	     */
	
	  }, {
	    key: '_update',
	    value: function _update() {
	      this.timer += 0.01;
	      //console.log(this.END);
	      if (this.UPDATE == false) {
	        //this.scene.remove(this.scene.children[0]);
	        this.remove();
	        if (this.scene.children.length == 0) {
	          this.END = true;
	        }
	      }
	      var time = performance.now() * 0.0005;
	      this.material.uniforms.time.value = time;
	      this.mesh.rotation.x = time * 0.2;
	      this.mesh.rotation.y = time * 0.4;
	      // this.camera.position.y = 100*Math.sin(this.timer);
	      // this.camera.position.x = 100* Math.cos(this.timer);
	      var rad = 600 + Math.sin(this.timer) * 200;
	      this.camera.position.x = Math.sin(this.timer * 0.4) * Math.cos(this.timer * 0.3) * rad;
	      this.camera.position.y = Math.cos(this.timer * 0.4) * rad;
	      this.camera.position.z = Math.sin(this.timer * 0.4) * Math.sin(this.timer * 0.3) * rad; //+Math.sin(this.timer*0.5)*200;
	      this.camera.lookAt(new THREE.Vector3(0, 0, 100 * Math.cos(this.timer * 0.005)));
	    }
	  }]);
	
	  return overScene02;
	}(_Entry3.default);
	
	exports.default = overScene02;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float time;\nattribute vec3 position;\nattribute vec2 uv;\nattribute vec3 translate;\nvarying vec2 vUv;\nvarying float vScale;\nvoid main() {\n    vec4 mvPosition = modelViewMatrix * vec4( translate, 1.0 );\n    vec3 trTime = vec3(translate.x + time,translate.y + time,translate.z + time);\n    float scale =  sin( trTime.x * 2.1 ) + sin( trTime.y * 2.1 ) + sin( trTime.z * 2.1 );\n    vScale = scale;\n    //scale = scale * 10.0 + 10.0;\n    mvPosition.xyz += position * scale;\n    vUv = uv;\n    gl_Position = projectionMatrix * mvPosition;\n}"

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\nuniform sampler2D map;\nvarying vec2 vUv;\nvarying float vScale;\n// HSL to RGB Convertion helpers\n\n\nvec3 HUEtoRGB(float H){\n    H = mod(H,1.0);\n    float R = abs(H * 6.0 - 3.0) - 1.0;\n    float G = 2.0 - abs(H * 6.0 - 2.0);\n    float B = 2.0 - abs(H * 6.0 - 4.0);\n    return clamp(vec3(R,G,B),0.0,1.0);\n}\nvec3 HSLtoRGB(vec3 HSL){\n    vec3 RGB = HUEtoRGB(HSL.x);\n    float C = (1.0 - abs(2.0 * HSL.z - 1.0)) * HSL.y;\n    return (RGB - 0.5) * C + HSL.z;\n}\nvoid main() {\n    vec4 diffuseColor = texture2D( map, vUv );\n    gl_FragColor = vec4( diffuseColor.xyz * HSLtoRGB(vec3(vScale/5.0, 1.0, 0.5)), diffuseColor.w );\n    gl_FragColor = diffuseColor*vec4(1.0,1.0,1.0,1.0);\n    if ( diffuseColor.w < 0.5 ) discard;\n}"

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
	
	var _audio = __webpack_require__(27);
	
	var _audio2 = _interopRequireDefault(_audio);
	
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
	
	    _this.elVolume = null;
	    _this.elVolumeVal = null;
	
	    _this.group = null;
	
	    _this.render = _this._render.bind(_this);
	
	    _this.createScene = _this._createScene.bind(_this);
	    _this.update = _this._update.bind(_this);
	
	    _this.cube_update = _this._cube_update.bind(_this);
	
	    _this.createScene();
	
	    // this.audioInit = new audio();
	
	    _this.audioInit();
	
	    return _this;
	  }
	
	  _createClass(Scene01, [{
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
	
	      //可能な限り高いフレームレートで音量を取得し、表示を更新する
	      execute = function () {
	        this.elVolume.innerHTML = Math.floor(getByteFrequencyDataAverage());
	        this.elVolumeVal = Math.floor(getByteFrequencyDataAverage());
	
	        requestAnimationFrame(execute);
	      }.bind(this);
	
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
	
	      this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
	      this.camera.position.z = 200;
	    }
	  }, {
	    key: '_cube_update',
	    value: function _cube_update(waveData) {
	
	      this.group.scale.x = 1 + waveData / 50;
	      this.group.scale.y = 1 + waveData / 50;
	      this.group.scale.z = 1 + waveData / 50;
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
	    }
	
	    /**
	     *
	     * @private
	     */
	
	  }, {
	    key: '_update',
	    value: function _update() {
	
	      this.cube_update(this.elVolumeVal);
	
	      this.render();
	    }
	  }]);
	
	  return Scene01;
	}(_Entry3.default);
	
	exports.default = Scene01;

/***/ }),
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Entry2 = __webpack_require__(21);
	
	var _Entry3 = _interopRequireDefault(_Entry2);
	
	var _audio = __webpack_require__(27);
	
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
	    _this.step = 0;
	    _this.knot = null; // 結び目
	
	    _this.elVolume = null;
	    _this.elVolumeVal = null;
	
	    //トーラス生成で必要なパラメータ
	    _this.radius = 20;
	    _this.tube = 28.2;
	    _this.radialSegments = 600;
	    _this.tubularSegments = 12;
	    _this.p = 5;
	    _this.q = 4;
	    _this.heightScale = 4;
	    _this.asParticles = true;
	    _this.rotate = true;
	
	    _this.perMat = null;
	
	    _this.canvas = null;
	
	    _this.timer = 0;
	
	    _this.generateSprite = _this._generateSprite.bind(_this);
	    _this.createParticleSystem = _this._createParticleSystem.bind(_this);
	    _this.createMesh = _this._createMesh.bind(_this);
	
	    _this.circle_update = _this._circle_update.bind(_this);
	
	    _this.createScene = _this._createScene.bind(_this);
	    _this.update = _this._update.bind(_this);
	
	    _this.createScene();
	
	    _this.audioInit();
	
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
	
	    // from THREE.js examples
	
	  }, {
	    key: '_generateSprite',
	    value: function _generateSprite() {
	
	      this.canvas = document.createElement('canvas');
	      this.canvas.width = 16;
	      this.canvas.height = 16;
	
	      var context = this.canvas.getContext('2d');
	      var gradient = context.createRadialGradient(this.canvas.width / 2, this.canvas.height / 2, 0, this.canvas.width / 2, this.canvas.height / 2, this.canvas.width / 2);
	      gradient.addColorStop(0, 'rgba(255,255,255,1)');
	      gradient.addColorStop(0.2, 'rgba(0,255,255,1)');
	      gradient.addColorStop(0.4, 'rgba(0,0,64,1)');
	      gradient.addColorStop(1, 'rgba(0,0,0,1)');
	
	      context.fillStyle = gradient;
	      context.fillRect(0, 0, this.canvas.width, this.canvas.height);
	
	      var texture = new THREE.Texture(this.canvas);
	      texture.needsUpdate = true;
	      return texture;
	    }
	  }, {
	    key: '_createParticleSystem',
	    value: function _createParticleSystem(geom) {
	      this.perMat = new THREE.ParticleBasicMaterial({
	        color: 0xffffff,
	        size: 2,
	        transparent: true,
	        blending: THREE.AdditiveBlending,
	        map: this.generateSprite()
	      });
	
	      var system = new THREE.ParticleSystem(geom, this.perMat);
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
	
	      this.camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 5000);
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
	     *　画面リサイズイベント
	     */
	
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	      this.canvas.width = window.innerWidth;
	      this.canvas.height = window.innerHeight;
	      // this.plane.mesh.material.uniforms.resolution.value.set(this.canvas.width, this.canvas.height);
	    }
	  }, {
	    key: '_circle_update',
	    value: function _circle_update(waveData) {}
	
	    /**
	     * update関数
	     * @private
	     */
	
	  }, {
	    key: '_update',
	    value: function _update() {
	
	      // this.circle_update();
	
	      if (this.rotate) {
	        this.knot.rotation.x = this.step += 0.001;
	        this.knot.rotation.y = this.step += 0.001;
	        this.knot.rotation.z = this.step += 0.001;
	
	        this.timer += 0.01;
	        var rad = 10 + Math.sin(this.timer) * 10;
	        this.camera.position.x = Math.sin(this.timer * 0.4) * Math.cos(this.timer * 0.3) * rad;
	        this.camera.position.y = Math.cos(this.timer * 0.4) * rad;
	        this.camera.position.z = Math.sin(this.timer * 0.4) * Math.sin(this.timer * 0.3) * rad;
	        this.camera.lookAt(new THREE.Vector3(0, 0, 100 * Math.cos(this.timer * 0.005)));
	      }
	    }
	  }]);
	
	  return Scene02;
	}(_Entry3.default);
	
	exports.default = Scene02;

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
	
	var _PlaneScene = __webpack_require__(30);
	
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
/* 30 */
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
					vertexShader: __webpack_require__(31),
					fragmentShader: __webpack_require__(32)
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
/* 31 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}"

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	module.exports = "/* 精度修飾子の宣言 */\nprecision mediump float;\n#define GLSLIFY 1\n\n/* WebGLで受け渡された変数 */\nuniform float time; // time (1second == 1.0)\nuniform vec2  mouse; // mouse (-1.0 ~ 1.0)\nuniform vec2  resolution; // 解像度 (512.0, 512.0)\n\nconst float PI = 3.14159265;\n\nvec2 squareFrame_1_0(vec2 screenSize) {\n  vec2 position = 2.0 * (gl_FragCoord.xy / screenSize.xy) - 1.0;\n  position.x *= screenSize.x / screenSize.y;\n  return position;\n}\n\nvec2 squareFrame_1_0(vec2 screenSize, vec2 coord) {\n  vec2 position = 2.0 * (coord.xy / screenSize.xy) - 1.0;\n  position.x *= screenSize.x / screenSize.y;\n  return position;\n}\n\n\n\nmat3 calcLookAtMatrix_5_1(vec3 origin, vec3 target, float roll) {\n  vec3 rr = vec3(sin(roll), cos(roll), 0.0);\n  vec3 ww = normalize(target - origin);\n  vec3 uu = normalize(cross(ww, rr));\n  vec3 vv = normalize(cross(uu, ww));\n\n  return mat3(uu, vv, ww);\n}\n\n\n\n\nvec3 getRay_2_2(mat3 camMat, vec2 screenPos, float lensLength) {\n  return normalize(camMat * vec3(screenPos, lensLength));\n}\n\nvec3 getRay_2_2(vec3 origin, vec3 target, vec2 screenPos, float lensLength) {\n  mat3 camMat = calcLookAtMatrix_5_1(origin, target, 0.0);\n  return getRay_2_2(camMat, screenPos, lensLength);\n}\n\n\n\nvec2 map(vec3 p);\n// Originally sourced from https://www.shadertoy.com/view/ldfSWs\n// Thank you Iñigo :)\n\nvec2 calcRayIntersection_3_3(vec3 rayOrigin, vec3 rayDir, float maxd, float precis, float reduction) {\n  float latest = precis * 2.0;\n  float dist   = +0.0;\n  float type   = -1.0;\n  vec2  res    = vec2(-1.0, -1.0);\n\n  for (int i = 0; i < 256; i++) {\n    if (latest < precis || dist > maxd) break;\n\n    vec2 result = map(rayOrigin + rayDir * dist);\n\n    latest = result.x;\n    type   = result.y;\n    dist  += latest * reduction;\n  }\n\n  if (dist < maxd) {\n    res = vec2(dist, type);\n  }\n\n  return res;\n}\n\nvec2 calcRayIntersection_3_3(vec3 rayOrigin, vec3 rayDir) {\n  return calcRayIntersection_3_3(rayOrigin, rayDir, 20.0, 0.001, 1.0);\n}\n\n\n\n// Originally sourced from https://www.shadertoy.com/view/ldfSWs\n// Thank you Iñigo :)\n\nvec3 calcNormal_4_4(vec3 pos, float eps) {\n  const vec3 v1 = vec3( 1.0,-1.0,-1.0);\n  const vec3 v2 = vec3(-1.0,-1.0, 1.0);\n  const vec3 v3 = vec3(-1.0, 1.0,-1.0);\n  const vec3 v4 = vec3( 1.0, 1.0, 1.0);\n\n  return normalize( v1 * map( pos + v1*eps ).x +\n                    v2 * map( pos + v2*eps ).x +\n                    v3 * map( pos + v3*eps ).x +\n                    v4 * map( pos + v4*eps ).x );\n}\n\nvec3 calcNormal_4_4(vec3 pos) {\n  return calcNormal_4_4(pos, 0.002);\n}\n\n\n\n#define NUM 1.\nfloat t() {\n    return time * 3.;\n}\n\nfloat random(in vec2 p) {\n    return fract(sin(dot(p.xy, vec2(12.34, 56.78))) * 90.0);\n}\n\nfloat sdGround(in vec3 p) {\n    return p.y;\n}\n\nfloat sdBuildings(in vec3 p) {\n    vec3 pp = mod(p, 1.) - .5;\n    float height = random(p.xz - mod(p.xz, 1.)) *3.;\n    float nearness = max(floor(p.z) - t() - 2., 0.3);\n    nearness = pow(nearness, .3);\n    pp.y = p.y * 0.4 * nearness - height * 0.1;\n    return length(max(abs(pp) - .25, .0));\n}\n\nvec2 map(vec3 p) {\n    return vec2(min(sdGround(p), sdBuildings(p)), 0.);\n}\n\n//\nvoid main (void) {\n    vec3 rayOrigin = vec3(0, 1.5, 0);\n    rayOrigin.x += (sin(t() * .7) + cos(t() * .67)) * 0.07;\n    rayOrigin.y += (sin(t() * .81) + cos(t() * .8)) * 0.2;\n    vec3 rayTarget = vec3(0, 1, 9999999.);\n    rayOrigin.z = t();\n    vec3 rayDirection = getRay_2_2(rayOrigin, rayTarget, squareFrame_1_0(resolution.xy), 2.);\n\n    vec3 lightDir = normalize(vec3(0.3, 3., 2.));\n    vec3 light = vec3(.4);\n    vec3 ambient = vec3(.4, .3, .5);\n\n    vec2 collision = calcRayIntersection_3_3(rayOrigin, rayDirection);\n    if (collision.x > 0.) {\n        vec3 pos = rayOrigin + rayDirection * collision.x;\n        vec3 normal = calcNormal_4_4(pos);\n        float diff = clamp(dot(lightDir, normal), 0.1, 1.0);\n        gl_FragColor = vec4(diff * light + ambient * 1./pos.y, 1.0);\n    }\n    else {\n        float c = gl_FragCoord.y / resolution.y;\n        gl_FragColor = vec4(c * 0.2, 0, c * 0.3, 1);\n    }\n}"

/***/ }),
/* 33 */
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
	
	var _TextureBg = __webpack_require__(34);
	
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Entry2 = __webpack_require__(21);
	
	var _Entry3 = _interopRequireDefault(_Entry2);
	
	var _Plane = __webpack_require__(35);
	
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
/* 35 */
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
					vertexShader: __webpack_require__(36),
					fragmentShader: __webpack_require__(37)
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
/* 36 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}"

/***/ }),
/* 37 */
/***/ (function(module, exports) {

	module.exports = "precision highp float;\n#define GLSLIFY 1\n\nuniform vec2 resolution;\nuniform vec2 imageResolution;\nuniform sampler2D texture;\n\nvarying vec2 vUv;\n\nvoid main(void) {\n    vec2 ratio = vec2(\n        min((resolution.x / resolution.y) / (imageResolution.x / imageResolution.y), 1.0),\n        min((resolution.y / resolution.x) / (imageResolution.y / imageResolution.x), 1.0)\n    );\n\n    vec2 uv = vec2(\n        vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n        vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\n    );\n    gl_FragColor = texture2D(texture, uv);\n}"

/***/ }),
/* 38 */
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
	
	var _Canvas = __webpack_require__(39);
	
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
/* 39 */
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
	        vertexShader: __webpack_require__(40),
	        fragmentShader: __webpack_require__(41)
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
/* 40 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\n//attribute vec3 position;\n\nvoid main() {\n    gl_Position = vec4( position, 1.0 );\n}\n"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform vec2 u_resolution;\nuniform float u_time;\n\nvoid main() {\n    vec2 st = gl_FragCoord.xy/u_resolution.xy;\n    gl_FragColor=vec4(st.x,st.y,0.0,1.0);\n}"

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDhkNGMwMGRmMWI1Nzg0YjM1MzgiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvcmUvQ29uZi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9VdGlsLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hbmltYXRpb24vcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL2NhbmNlbEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYXJyYXkvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy91YS9jaGVja0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy91YS1wYXJzZXIubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvaW1nL3ByZWxvYWRJbWcuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5Ud2l0dGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuTGluZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkZhY2VCb29rLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL0Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvU2NlbmVNYW5nZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0VudHJ5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9saWJzL09yYml0Q29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvb3ZlclNjZW5lMDIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvZ2xzbC9vdmVyLnZlcnQiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvZ2xzbC9vdmVyLmZyYWciLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvU2NlbmUwMS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9VdGlscy9hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9TY2VuZTAyLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1NjZW5lMDMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvUGxhbmVTY2VuZTAzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2dsc2wvc2NlbmUwMy52ZXJ0Iiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2dsc2wvc2NlbmUwMy5mcmFnIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VGV4dHVyZUJnLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1RleHR1cmVCZy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9QbGFuZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL2NvdmVyLnZlcnQiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvZ2xzbC9jb3Zlci5mcmFnIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VGV4dHVyZU1vdmllLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL0NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QudmVydCIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QuZnJhZyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJnYiIsInVuZGVmaW5lZCIsImluIiwiY29tbW9uIiwibWFpbiIsIkNvbW1vbiIsInNldHVwIiwic2V0RXZlbnRzIiwiY29uZiIsInUiLCJmIiwidXQiLCIkIiwiZG9jdW1lbnQiLCJvbiIsIm9uUmVhZHkiLCJiaW5kIiwib25Mb2FkIiwiQ29uZiIsIlJFTEVBU0UiLCJGTEciLCJMT0ciLCJQQVJBTSIsIlNUQVRTIiwiZGVmVyIsImRlZkgiLCJXIiwiSCIsInNwVyIsInNwSCIsImJwIiwibW9kZSIsImtleXMiLCJzd2l0Y2hNb2RlIiwic2VjMDJJbWdOdW0iLCJ5b3V0dWJlSUQwMSIsInlvdXR1YmVJRDAyIiwid2ViRm9udExvYWRlZCIsImkiLCJrZXkiLCJsZW4iLCJwYXJhbSIsInJlZiIsInJlZjEiLCJ2YWx1ZSIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInNwbGl0IiwibGVuZ3RoIiwiaiIsIm9iaiIsImsiLCJ2YWwiLCJVdGlsIiwiaXNTZXRTUFNpemUiLCJzdGFydFRpbWUiLCJlbGFwc2VkVGltZSIsIm5vdyIsIkRhdGUiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtaW4xIiwibWF4MSIsIm1pbjIiLCJtYXgyIiwiaGl0IiwicmFuZ2UiLCJudW0iLCJyZXNNaW4iLCJyZXNNYXgiLCJiYXNlTWluIiwiYmFzZU1heCIsInAiLCJuIiwicG9zIiwiU3RyaW5nIiwiaW5kZXhPZiIsInN1YnN0ciIsIm51bWVyYXRvciIsImRlbm9taW5hdG9yIiwicmFkaWFucyIsIlBJIiwiYW5nbGUiLCJwMSIsInAyIiwic3FydCIsInBvdyIsIngiLCJ5IiwiYXJyIiwic29ydCIsImEiLCJiIiwiZ2V0VGltZSIsImZsZyIsImNzcyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJpc1Jlc1NQIiwiaXNSZXNQQyIsInVybCIsImhyZWYiLCJwYXJhbUl0ZW1zIiwibGlzdCIsInBhcmFtSXRlbSIsImhhc2giLCJsIiwibGVuMSIsImNvb2tpZSIsInIiLCJnIiwic3RyIiwidG9TdHJpbmciLCJBcnJheSIsImpvaW4iLCJjb250YWluIiwibnVtYmVyIiwiX3BvdyIsInJvdW5kIiwicmVzIiwib3JnIiwiZGVzdCIsImJlZm9yZSIsImFmdGVyIiwiUmVnRXhwIiwiZ2V0Tm93IiwiaG91ciIsImdldEhvdXJzIiwibWludXRlIiwiZ2V0TWludXRlcyIsInNlY29uZCIsImdldFNlY29uZHMiLCJtaWxsU2Vjb25kIiwiZ2V0TWlsbGlzZWNvbmRzIiwiZ2V0RGF0ZSIsIm1vbnRoZGF5cyIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ3ZWVrRGF5SlAiLCJ3REoiLCJnZXREYXkiLCJ3ZWVrRGF5RU4iLCJ3REUiLCJkYXRlIiwiTnVtYmVyIiwiaWdub3JlQXJyYXkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjYWxsIiwiJHRhcmdldCIsIiRpbWciLCJlYWNoIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImF0dHIiLCJ0cmlnZ2VyIiwic2VsZiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9mZiIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwicGF0aG5hbWUiLCJldmVudCIsInJldHVyblZhbHVlIiwia2V5Q29kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbndoZWVsIiwib25tb3VzZXdoZWVsIiwib250b3VjaG1vdmUiLCJvbmtleWRvd24iLCJwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiVXRpbHMiLCJfc2V0dXAiLCJjaGVja0NsaWVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl90aGlzIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJBcnIiLCJzbGljZSIsInQiLCJwYXJzZXIiLCJyZXF1aXJlIiwidWEiLCJicm93c2VyIiwiZ2V0QnJvd3NlciIsIm5hbWUiLCJkZXZpY2UiLCJnZXREZXZpY2UiLCJ0eXBlIiwiZ2V0T1MiLCJkZXZpY2VfbmFtZSIsInZlbmRvciIsImdldFVBIiwicyIsIm8iLCJjIiwiZCIsInYiLCJtIiwiRSIsIlMiLCJleHRlbmQiLCJjb25jYXQiLCJoYXMiLCJ0b0xvd2VyQ2FzZSIsImxvd2VyaXplIiwibWFqb3IiLCJ0cmltIiwicmd4IiwiYXJndW1lbnRzIiwiaGFzT3duUHJvcGVydHkiLCJleGVjIiwidGVzdCIsIlQiLCJvbGRzYWZhcmkiLCJ2ZXJzaW9uIiwiYW1hem9uIiwibW9kZWwiLCJzcHJpbnQiLCJIVEMiLCJTcHJpbnQiLCJvcyIsIndpbmRvd3MiLCJNRSIsIlhQIiwiVmlzdGEiLCJSVCIsIk4iLCJjcHUiLCJlbmdpbmUiLCJDIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiYXBwbHkiLCJnZXRDUFUiLCJnZXRFbmdpbmUiLCJnZXRSZXN1bHQiLCJzZXRVQSIsIlZFUlNJT04iLCJCUk9XU0VSIiwiTkFNRSIsIk1BSk9SIiwiQ1BVIiwiQVJDSElURUNUVVJFIiwiREVWSUNFIiwiTU9ERUwiLCJWRU5ET1IiLCJUWVBFIiwiQ09OU09MRSIsIk1PQklMRSIsIlNNQVJUVFYiLCJUQUJMRVQiLCJXRUFSQUJMRSIsIkVNQkVEREVEIiwiRU5HSU5FIiwiT1MiLCJleHBvcnRzIiwibW9kdWxlIiwiVUFQYXJzZXIiLCJqUXVlcnkiLCJaZXB0byIsIkwiLCJnZXQiLCJzZXQiLCJpbWdQYXRoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbWciLCJJbWFnZSIsImNhbGxlZSIsInNyYyIsIiRidG4iLCJ0ZXh0Iiwic2hhcmVVUkwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJvcGVuIiwiZGVzY3JpcHRpb24iLCJGdW5jIiwiYmxhbmsiLCJkZWJ1Z2dlciIsImV4cGFuZGpRdWVyeSIsIm1ldGhvZHMiLCJjb25zb2xlIiwicHJlcGVuZCIsIkZQUyIsIndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIiwidGltZXIiLCJmbiIsImFkanVzdCIsImFkanVzdFciLCJhZGp1c3RIIiwiQ1NTIiwic3VwcG9ydHMiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJsb2ciLCJpc0lFIiwiaXNQQyIsImlzQW5kcm9pZFZlcnNpb24iLCJhbGVydCIsIk1haW4iLCJwYWdlIiwiZGF0YSIsIkRpc3BsYXlUb3AiLCJzY2VuZU1hbmdlciIsInNjZW5lQm94QSIsInNjZW5lQm94QiIsInNjZW5lQm94QyIsInNjZW5lQm94RCIsImFkZFNjZW5lIiwiZHJhdyIsIlNjZW5lTWFuZ2VyIiwiTlVNIiwic2NlbmVzIiwiZmFkZUluT3V0VGltZXIiLCJvcCIsImNhbnZhcyIsInJlbmRlcmVyIiwicmVuZGVyZXIwMiIsIm92ZXJzY2VuZSIsIm92ZXJBbHBoYSIsIl9hZGRTY2VuZSIsIm9uUmVzaXplIiwiX29uUmVzaXplIiwiY2hlY2tOdW0iLCJfY2hlY2tOdW0iLCJvbktleURvd24iLCJfb25LZXlEb3duIiwiZmFkZUluT3V0IiwiX2ZhZGVJbk91dCIsIl9kcmF3IiwiYWxwaGFSZXNldCIsIl9hbHBoYVJlc2V0Iiwia2V5bmFtZSIsImluaXQiLCJwdXNoIiwiVEhSRUUiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJzZXRDbGVhckNvbG9yIiwiQ29sb3IiLCJzb3J0T2JqZWN0cyIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJQQ0ZTaGFkb3dNYXAiLCJkb21FbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiYW50aWFsaWFzIiwiY2FudmFzMDIiLCJzY2VuZSIsImNhbWVyYSIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJvcGFjaXR5Iiwic2luIiwidXBkYXRlIiwicmVuZGVyIiwiRW50cnkiLCJPcmJpdENvbnRyb2xzIiwib2JqZWN0IiwidGFyZ2V0IiwiVmVjdG9yMyIsIm1pbkRpc3RhbmNlIiwibWF4RGlzdGFuY2UiLCJJbmZpbml0eSIsIm1pblpvb20iLCJtYXhab29tIiwibWluUG9sYXJBbmdsZSIsIm1heFBvbGFyQW5nbGUiLCJtaW5BemltdXRoQW5nbGUiLCJtYXhBemltdXRoQW5nbGUiLCJlbmFibGVEYW1waW5nIiwiZGFtcGluZ0ZhY3RvciIsImVuYWJsZVpvb20iLCJ6b29tU3BlZWQiLCJlbmFibGVSb3RhdGUiLCJyb3RhdGVTcGVlZCIsImVuYWJsZVBhbiIsImtleVBhblNwZWVkIiwiYXV0b1JvdGF0ZSIsImF1dG9Sb3RhdGVTcGVlZCIsImVuYWJsZUtleXMiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkJPVFRPTSIsIm1vdXNlQnV0dG9ucyIsIk9SQklUIiwiTU9VU0UiLCJaT09NIiwiTUlERExFIiwiUEFOIiwidGFyZ2V0MCIsImNsb25lIiwicG9zaXRpb24wIiwicG9zaXRpb24iLCJ6b29tMCIsInpvb20iLCJnZXRQb2xhckFuZ2xlIiwic3BoZXJpY2FsIiwicGhpIiwiZ2V0QXppbXV0aGFsQW5nbGUiLCJ0aGV0YSIsInJlc2V0Iiwic2NvcGUiLCJjb3B5IiwiZGlzcGF0Y2hFdmVudCIsImNoYW5nZUV2ZW50Iiwic3RhdGUiLCJTVEFURSIsIk5PTkUiLCJvZmZzZXQiLCJxdWF0IiwiUXVhdGVybmlvbiIsInNldEZyb21Vbml0VmVjdG9ycyIsInVwIiwicXVhdEludmVyc2UiLCJpbnZlcnNlIiwibGFzdFBvc2l0aW9uIiwibGFzdFF1YXRlcm5pb24iLCJzdWIiLCJhcHBseVF1YXRlcm5pb24iLCJzZXRGcm9tVmVjdG9yMyIsInJvdGF0ZUxlZnQiLCJnZXRBdXRvUm90YXRpb25BbmdsZSIsInNwaGVyaWNhbERlbHRhIiwibWFrZVNhZmUiLCJyYWRpdXMiLCJzY2FsZSIsInBhbk9mZnNldCIsInNldEZyb21TcGhlcmljYWwiLCJsb29rQXQiLCJ6b29tQ2hhbmdlZCIsImRpc3RhbmNlVG9TcXVhcmVkIiwiRVBTIiwiZG90IiwicXVhdGVybmlvbiIsImRpc3Bvc2UiLCJvbkNvbnRleHRNZW51Iiwib25Nb3VzZURvd24iLCJvbk1vdXNlV2hlZWwiLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoRW5kIiwib25Ub3VjaE1vdmUiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsInN0YXJ0RXZlbnQiLCJlbmRFdmVudCIsIlJPVEFURSIsIkRPTExZIiwiVE9VQ0hfUk9UQVRFIiwiVE9VQ0hfRE9MTFkiLCJUT1VDSF9QQU4iLCJTcGhlcmljYWwiLCJyb3RhdGVTdGFydCIsIlZlY3RvcjIiLCJyb3RhdGVFbmQiLCJyb3RhdGVEZWx0YSIsInBhblN0YXJ0IiwicGFuRW5kIiwicGFuRGVsdGEiLCJkb2xseVN0YXJ0IiwiZG9sbHlFbmQiLCJkb2xseURlbHRhIiwiZ2V0Wm9vbVNjYWxlIiwicm90YXRlVXAiLCJwYW5MZWZ0IiwiZGlzdGFuY2UiLCJvYmplY3RNYXRyaXgiLCJzZXRGcm9tTWF0cml4Q29sdW1uIiwibXVsdGlwbHlTY2FsYXIiLCJwYW5VcCIsInBhbiIsImRlbHRhWCIsImRlbHRhWSIsImVsZW1lbnQiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInRhcmdldERpc3RhbmNlIiwidGFuIiwiZm92IiwiY2xpZW50SGVpZ2h0IiwibWF0cml4IiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicmlnaHQiLCJsZWZ0IiwiY2xpZW50V2lkdGgiLCJ0b3AiLCJib3R0b20iLCJ3YXJuIiwiZG9sbHlJbiIsImRvbGx5U2NhbGUiLCJkb2xseU91dCIsImhhbmRsZU1vdXNlRG93blJvdGF0ZSIsImNsaWVudFgiLCJjbGllbnRZIiwiaGFuZGxlTW91c2VEb3duRG9sbHkiLCJoYW5kbGVNb3VzZURvd25QYW4iLCJoYW5kbGVNb3VzZU1vdmVSb3RhdGUiLCJzdWJWZWN0b3JzIiwiaGFuZGxlTW91c2VNb3ZlRG9sbHkiLCJoYW5kbGVNb3VzZU1vdmVQYW4iLCJoYW5kbGVNb3VzZVVwIiwiaGFuZGxlTW91c2VXaGVlbCIsImhhbmRsZUtleURvd24iLCJoYW5kbGVUb3VjaFN0YXJ0Um90YXRlIiwidG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJoYW5kbGVUb3VjaFN0YXJ0RG9sbHkiLCJkeCIsImR5IiwiaGFuZGxlVG91Y2hTdGFydFBhbiIsImhhbmRsZVRvdWNoTW92ZVJvdGF0ZSIsImhhbmRsZVRvdWNoTW92ZURvbGx5IiwiaGFuZGxlVG91Y2hNb3ZlUGFuIiwiaGFuZGxlVG91Y2hFbmQiLCJidXR0b24iLCJzdG9wUHJvcGFnYXRpb24iLCJjcmVhdGUiLCJFdmVudERpc3BhdGNoZXIiLCJjb25zdHJ1Y3RvciIsImRlZmluZVByb3BlcnRpZXMiLCJjZW50ZXIiLCJub1pvb20iLCJub1JvdGF0ZSIsIm5vUGFuIiwibm9LZXlzIiwic3RhdGljTW92aW5nIiwiZHluYW1pY0RhbXBpbmdGYWN0b3IiLCJvdmVyU2NlbmUwMiIsIlVQREFURSIsIkVORCIsImNyZWF0ZVNjZW5lIiwiX2NyZWF0ZVNjZW5lIiwicmVtb3ZlIiwiX3JlbW92ZSIsImVuZEVuYWJsZWQiLCJfZW5kRW5hYmxlZCIsIl91cGRhdGUiLCJTY2VuZSIsInoiLCJnZW9tZXRyeSIsIkluc3RhbmNlZEJ1ZmZlckdlb21ldHJ5IiwiQ2lyY2xlQnVmZmVyR2VvbWV0cnkiLCJwYXJ0aWNsZUNvdW50IiwidHJhbnNsYXRlQXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJpMyIsImFkZEF0dHJpYnV0ZSIsIkluc3RhbmNlZEJ1ZmZlckF0dHJpYnV0ZSIsIm1hdGVyaWFsIiwiUmF3U2hhZGVyTWF0ZXJpYWwiLCJ1bmlmb3JtcyIsIm1hcCIsIlRleHR1cmVMb2FkZXIiLCJsb2FkIiwidGltZSIsInZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiZGVwdGhUZXN0IiwiZGVwdGhXcml0ZSIsIm1lc2giLCJNZXNoIiwiY2hpbGRyZW4iLCJwZXJmb3JtYW5jZSIsInJvdGF0aW9uIiwicmFkIiwiY29zIiwiU2NlbmUwMSIsImN1YmUiLCJlbFZvbHVtZSIsImVsVm9sdW1lVmFsIiwiZ3JvdXAiLCJfcmVuZGVyIiwiY3ViZV91cGRhdGUiLCJfY3ViZV91cGRhdGUiLCJhdWRpb0luaXQiLCJjdHgiLCJhbmFseXNlciIsImZyZXF1ZW5jaWVzIiwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlIiwiZXhlY3V0ZSIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImNyZWF0ZUFuYWx5c2VyIiwiVWludDhBcnJheSIsImZyZXF1ZW5jeUJpbkNvdW50IiwiZ2V0Qnl0ZUZyZXF1ZW5jeURhdGEiLCJyZWR1Y2UiLCJwcmV2aW91cyIsImN1cnJlbnQiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInRoZW4iLCJzdHJlYW0iLCJoYWNrRm9yTW96emlsYSIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiY29ubmVjdCIsImNhdGNoIiwiZXJyIiwibWVzc2FnZSIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiR3JvdXAiLCJzdGVwIiwiQm94R2VvbWV0cnkiLCJNZXNoTGFtYmVydE1hdGVyaWFsIiwicG9pbnRMaWdodCIsIlBvaW50TGlnaHQiLCJ3YXZlRGF0YSIsInRyYXZlcnNlIiwiX2V4ZWN1dGUiLCJnZXRWYWwiLCJfZ2V0VmFsIiwiU2NlbmUwMiIsImtub3QiLCJ0dWJlIiwicmFkaWFsU2VnbWVudHMiLCJ0dWJ1bGFyU2VnbWVudHMiLCJxIiwiaGVpZ2h0U2NhbGUiLCJhc1BhcnRpY2xlcyIsInJvdGF0ZSIsInBlck1hdCIsImdlbmVyYXRlU3ByaXRlIiwiX2dlbmVyYXRlU3ByaXRlIiwiY3JlYXRlUGFydGljbGVTeXN0ZW0iLCJfY3JlYXRlUGFydGljbGVTeXN0ZW0iLCJjcmVhdGVNZXNoIiwiX2NyZWF0ZU1lc2giLCJjaXJjbGVfdXBkYXRlIiwiX2NpcmNsZV91cGRhdGUiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJncmFkaWVudCIsImNyZWF0ZVJhZGlhbEdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ0ZXh0dXJlIiwiVGV4dHVyZSIsIm5lZWRzVXBkYXRlIiwiZ2VvbSIsIlBhcnRpY2xlQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwic2l6ZSIsInRyYW5zcGFyZW50IiwiYmxlbmRpbmciLCJBZGRpdGl2ZUJsZW5kaW5nIiwic3lzdGVtIiwiUGFydGljbGVTeXN0ZW0iLCJzb3J0UGFydGljbGVzIiwibWVzaE1hdGVyaWFsIiwiTWVzaE5vcm1hbE1hdGVyaWFsIiwic2lkZSIsIkRvdWJsZVNpZGUiLCJTY2VuZVV0aWxzIiwiY3JlYXRlTXVsdGlNYXRlcmlhbE9iamVjdCIsIlRvcnVzS25vdEdlb21ldHJ5IiwiU2NlbmUwMyIsImxvYWRUZXh0dXJlIiwiX2xvYWRUZXh0dXJlIiwicGxhbmUiLCJyZXNvbHV0aW9uIiwiUGxhbmVTY2VuZTAzIiwicmVzaXplIiwiX3Jlc2l6ZSIsImltYWdlIiwibG9hZGVyIiwibWFnRmlsdGVyIiwiTmVhcmVzdEZpbHRlciIsIm1pbkZpbHRlciIsIm1vdXNlIiwiUGxhbmVCdWZmZXJHZW9tZXRyeSIsInRleHR1cmVCZyIsIlRleHR1cmVCZyIsImNyZWF0ZUNhbWVyYSIsIl9jcmVhdGVDYW1lcmEiLCJjcmVhdGVSZW5kZXJlciIsIl9jcmVhdGVSZW5kZXJlciIsIlVwZGF0ZSIsIl9VcGRhdGUiLCJzdGVuY2lsIiwiZGVwdGgiLCJwcmVtdWx0aXBsaWVkQWxwaGEiLCJQbGFuZSIsImltYWdlUmVzb2x1dGlvbiIsInN0b3AiLCJpbnRlcnZhbCIsInByZXZfbnVtIiwibmV4dF9udW0iLCJ0ZXhQcmV2IiwidGV4dHVyZXMiLCJ0ZXhOZXh0IiwiQ2FudmFzIiwidV90aW1lIiwidV9yZXNvbHV0aW9uIiwidV9tb3VzZSIsImNyZWF0ZU9iamVjdCIsIl9jcmVhdGVPYmplY3QiLCJvcmJpdENvbnRyb2xzIiwiX29yYml0Q29udHJvbHMiLCJwbGFuZU9iamVjdCIsIl9wbGFuZU9iamVjdCIsImN1YmVHZW9tZXRyeSIsImN1YmVNYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwid2lyZWZyYW1lIiwiU2hhZGVyTWF0ZXJpYWwiLCJjbG9jayIsIkNsb2NrIiwiZ2V0RGVsdGEiLCJjb250cm9scyIsImRlbHRhIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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LE1BQU00WCxLQUFWLEVBQVo7O0FBRUEsV0FBSUcsUUFBUUosTUFBTUUsUUFBTixFQUFaO0FBQ0EsWUFBS0MsUUFBTCxDQUFjdlcsTUFBZCxDQUFxQndXLEtBQXJCO0FBQ0M7OztpQ0FFVTs7QUFFVHZ0QixTQUFFYixNQUFGLEVBQVVlLEVBQVYsQ0FBYSxNQUFiLEVBQXFCLEtBQUtHLE1BQUwsQ0FBWUQsSUFBWixDQUFpQixJQUFqQixDQUFyQjtBQUVEOzs7Ozs7bUJBck1rQmdzQixNOzs7Ozs7QUNkckIsZ0VBQStELGlCQUFpQiwwQ0FBMEMsR0FBRyxHOzs7Ozs7QUNBN0gsZ0VBQStELHVCQUF1QixpQkFBaUIsZ0RBQWdELDJDQUEyQyxHQUFHLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ4ZDRjMDBkZjFiNTc4NGIzNTM4IiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogVG9wXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBDb21tb24gZnJvbSAnLi9wYWdlL0NvbW1vbic7XG5pbXBvcnQgTWFpbiBmcm9tICcuL3BhZ2UvTWFpbic7XG5cbigoKT0+e1xuXG4gIC8vIGdsb2JhbOOCquODluOCuOOCp+OCr+ODiFxuICBpZiAod2luZG93LmdiPT09dW5kZWZpbmVkKSB3aW5kb3cuZ2IgPSB7fTtcbiAgd2luZG93LmdiLmluID0ge307IC8vaW5zdGFuY2VcblxuICBnYi5pbi5jb21tb24gPSBuZXcgQ29tbW9uKCk7XG4gIGdiLmluLm1haW4gPSBuZXcgTWFpbigpO1xuXG59KSgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvVG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ29tbW9uXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBDb25mIGZyb20gJy4uL0NvcmUvQ29uZic7XG5pbXBvcnQgVXRpbCBmcm9tICcuLi9teWxpYnMvVXRpbCc7XG5pbXBvcnQgVXRpbHMgZnJvbSAnLi4vdXRpbHMvVXRpbHMnO1xuaW1wb3J0IEZ1bmMgZnJvbSAnLi4vbXlsaWJzL0Z1bmMnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cblx0c2V0dXAoKSB7XG5cblx0XHQvKipcbiAgICAgKiBAdHlwZSB7Q29uZn0gOiDliJ3mnJ/lgKTjga7oqK3lrprjg7vjg4fjg7zjgr/jga7phY3nva5cblx0XHQgKiBAdHlwZSB7VXRpbH0gOiBVdGls6Zai5pWw44Gu5Yid5pyf5YyWXG5cdFx0ICogQHR5cGUge0Z1bmN9IDog44Kk44OZ44Oz44OI44Oe44ON44O844K444Oj44O844Gu6Kit572uXG5cdFx0ICovXG4gICAgZ2IuaW4uY29uZiA9IG5ldyBDb25mKCk7XG4gICAgZ2IuaW4udSA9IG5ldyBVdGlsKCk7XG4gICAgZ2IuaW4uZiA9IG5ldyBGdW5jKCk7XG5cbiAgICBnYi5pbi51dCA9IG5ldyBVdGlscygpO1xuXG4gIH1cblxuICBvblJlYWR5KCkge1xuXG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbigncmVhZHknLCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENvbmZcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuLy8gaW1wb3J0IFNvdW5kRGF0YSBmcm9tICcuL0RhdGEvU291bmQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25mIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDmnKznlarjg5Xjg6njgrBcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICAgXG4gICAgdGhpcy5SRUxFQVNFID0gdHJ1ZTtcbiAgICAvLyB0aGlzLlJFTEVBU0UgPSBmYWxzZTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5Xjg6njgrDplqLpgKNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLkZMRyA9IHtcbiAgICAgIExPRzp0cnVlLCAgLy8g44Ot44Kw5Ye65YqbXG4gICAgICBQQVJBTTp0cnVlLCAvLyDjg5Hjg6njg6Hjg7zjgr/jg4Hjgqfjg4Pjgq9cbiAgICAgIFNUQVRTOnRydWUgIC8vIFN0YXRz6KGo56S6XG4gICAgfTtcbiAgICBpZiAoIXRoaXMuUkVMRUFTRSkge1xuICAgICAgdGhpcy5GTEcgPSB7XG4gICAgICAgIExPRzpmYWxzZSxcbiAgICAgICAgUEFSQU06ZmFsc2UsXG4gICAgICAgIFNUQVRTOmZhbHNlIFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg5Z+65pysIHdpZHRoIGhlaWdodFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHRoaXMuZGVmVyA9IDEzMDA7XG4gICAgdGhpcy5kZWZIID0gODUwO1xuXG4gICAgdGhpcy5XID0gMTIwMDtcbiAgICB0aGlzLkggPSA3NTA7XG5cbiAgICB0aGlzLnNwVyA9IDM3NTtcbiAgICB0aGlzLnNwSCA9IDY2NztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICDjg5bjg6zjgqTjgq/jg53jgqTjg7Pjg4hcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmJwID0gNzY4O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIG1vZGVcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLm1vZGUgPSBudWxsO1xuICAgIHRoaXMua2V5cyA9IFtcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ21vdmllJyxcbiAgICAgICAgICAndmFsdWUnOiBbJ21vcm5pbmcnLCdhZnRlcm5vb24nLCduaWdodCddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ2RhdGEnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnZGF0YTAxJywnZGF0YTAyJywnZGF0YTAzJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgICdrZXknOiAncHJvZHVjdCcsXG4gICAgICAgICAgJ3ZhbHVlJzogWycwMSddLFxuICAgICAgfSxcbiAgICBdXG4gICAgdGhpcy5zd2l0Y2hNb2RlKCk7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgc291bmQgZGF0YVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIHRoaXMuc291bmREYXRhID0gbmV3IFNvdW5kRGF0YSgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHNlYzAyIGJnIEltZyBOdW1cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnNlYzAySW1nTnVtID0gMzk2O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHlvdXR1YmUgSURcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLnlvdXR1YmVJRDAxID0gJ3hXMm9OcE5yS2QwJztcbiAgICB0aGlzLnlvdXR1YmVJRDAyID0gJ3QyV2VSUmRBRmVJJztcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICB3ZWIgZm9udCBsb2FkZWRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLndlYkZvbnRMb2FkZWQgPSBmYWxzZTtcblxuICB9XG5cblxuICBzd2l0Y2hNb2RlKCl7XG5cbiAgICB2YXIgaSwga2V5LCBsZW4sIHBhcmFtLCByZWYsIHJlZjEsIHZhbHVlO1xuXG4gICAgcmVmID0gbG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykuc3BsaXQoJyYnKTtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgcGFyYW0gPSByZWZbaV07XG4gICAgICByZWYxID0gcGFyYW0uc3BsaXQoJz0nKSwga2V5ID0gcmVmMVswXSwgdmFsdWUgPSByZWYxWzFdO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMua2V5cy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgIHZhciBvYmogPSB0aGlzLmtleXNbal07XG5cbiAgICAgICAgLy8g44OR44Op44Oh44O844K/44GM44Kt44O844Go5LiA57eS44Gg44Gj44Gf44KJXG4gICAgICAgIGlmIChvYmoua2V5ID09PSBrZXkpIHtcblxuICAgICAgICAgIC8vIOWQhOWApOOBqOavlOi8g1xuICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgb2JqLnZhbHVlLmxlbmd0aDsgaysrKSB7XG5cbiAgICAgICAgICAgIHZhciB2YWwgPSBvYmoudmFsdWVba107XG5cbiAgICAgICAgICAgIC8vIOOCreODvOOCknRoaXMua2V5c+OBrmtleeOBq+OAgXZhbHVl44KS5q+U6LyD44GX44Gm5ZCM5YCk44Gg44Gj44Gf44KC44Gu44GrXG4gICAgICAgICAgICBpZiAodmFsID09PSB2YWx1ZSkgdGhpc1tvYmoua2V5XSA9IHZhbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH07XG5cblxuICAgICAgICB9O1xuXG4gICAgICAgIFxuICAgICAgfTtcblxuICAgIH1cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvcmUvQ29uZi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiDkvr/liKnplqLmlbDjgq/jg6njgrlcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBVdGlsXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWwge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5pc1NldFNQU2l6ZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5zdGFydFRpbWUgPSBudWxsO1xuICAgIHRoaXMuZWxhcHNlZFRpbWUgPSBudWxsO1xuICAgIHRoaXMubm93ID0gbmV3IERhdGUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIE1hdGhcbiAgICovXG5cblxuICAvKipcbiAgICog44Op44Oz44OA44Og44Gq5YCk44KS6L+U44GZXG4gICAqIEBwYXJhbSBtaW4gOiDmnIDlsI/lgKQoaW50KVxuICAgKiBAcGFyYW0gbWF4IDog5pyA5aSn5YCkKGludClcbiAgICogQHJldHVybnMge251bWJlcn0gOiBtaW7jgYvjgoltYXjjgb7jgafjga7jg6njg7Pjg4Djg6DjgarmlbTmlbAoaW50KVxuICAgKi9cbiAgcmFuZG9tKG1pbiwgbWF4KSB7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqICgobWF4ICsgMSkgLSBtaW4pICsgbWluKSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg6njg7Pjg4Djg6DjgarmlbTmlbDjgpIy44Gk44Gu56+E5Zuy44GL44KJ5Y+W5b6XXG4gICAqIEBwYXJhbSBtaW4xIDog5pyA5bCP5YCkMShpbnQpXG4gICAqIEBwYXJhbSBtYXgxIDog5pyA5aSn5YCkMShpbnQpXG4gICAqIEBwYXJhbSBtaW4yIDog5pyA5bCP5YCkMihpbnQpXG4gICAqIEBwYXJhbSBtYXgyIDog5pyA5aSn5YCkMihpbnQpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IDogbWlu44GL44KJbWF444G+44Gn44Gu44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgICovXG4gIHJhbmRvbTIobWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuICAgIFxuICAgIGlmICh0aGlzLmhpdCgyKSkge1xuICAgICAgcmV0dXJuIHRoaXMucmFuZG9tKG1pbjEsIG1heDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5kb20obWluMiwgbWF4Mik7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogMS9AcmFuZ2Xjga7norrnjofjgad0cnVl44KS5Y+W5b6XXG4gICAqIEBwYXJhbSByYW5nZSA6IOavjeaVsChpbnQpXG4gICAqIEByZXR1cm5zIHtib29sZWFufSA6IHRydWUgb3IgZmFsc2UoYm9vbGVhbilcbiAgICovXG4gIGhpdChyYW5nZSkge1xuXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKDAsIHJhbmdlIC0gMSkgPT09IDA7XG5cbiAgfVxuICBcbiAgLy8gMOOBi+OCieevhOWbsuWGheOBp+ODqeODs+ODgOODoOOBquaVtOaVsOOCkuWPluW+l1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAdmFsIDog56+E5ZuyKGludClcbiAgLy8gcmV0dXJuIDog44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcmFuZ2UodmFsKSB7XG5cbiAgICByZXR1cm4gdGhpcy5yYW5kb20oLXZhbCwgdmFsKTtcblxuICB9XG4gIFxuICAvLyDlgKTjgpLjg57jg4Pjg5Tjg7PjgrBcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG51bSA6IOODnuODg+ODlOODs+OCsOOBmeOCi+WApChOdW1iZXIpXG4gIC8vIEByZXNNaW4gOiDntZDmnpzjgajjgarjgovlgKTjga7mnIDlsI/lgKQoTnVtYmVyKVxuICAvLyBAcmVzTWF4IDog57WQ5p6c44Go44Gq44KL5YCk44Gu5pyA5aSn5YCkKE51bWJlcilcbiAgLy8gQGJhc2VNaW4gOiDlhYPjgajjgarjgovlgKTjga7mnIDlsI/lgKQoTnVtYmVyKVxuICAvLyBAYmFzZU1heCA6IOWFg+OBqOOBquOCi+WApOOBruacgOWkp+WApChOdW1iZXIpXG4gIC8vIHJldHVybiA6IOODnuODg+ODlOODs+OCsOOBleOCjOOBn+WApChOdW1iZXIpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIG1hcChudW0sIHJlc01pbiwgcmVzTWF4LCBiYXNlTWluLCBiYXNlTWF4KSB7XG5cbiAgICB2YXIgcDtcbiAgICBpZiAobnVtIDwgYmFzZU1pbikge1xuICAgICAgcmV0dXJuIHJlc01pbjtcbiAgICB9XG4gICAgaWYgKG51bSA+IGJhc2VNYXgpIHtcbiAgICAgIHJldHVybiByZXNNYXg7XG4gICAgfVxuICAgIHAgPSAocmVzTWF4IC0gcmVzTWluKSAvIChiYXNlTWF4IC0gYmFzZU1pbik7XG5cbiAgICByZXR1cm4gKChudW0gLSBiYXNlTWluKSAqIHApICsgcmVzTWluO1xuXG4gIH0gICAgXG4gIFxuICAvLyDmlbDlgKTjgavlsI/mlbDngrnnrKxAbuS9jeOBvuOBp+OCkuOBpOOBkeOBn+aWh+Wtl+WIl+OCkui/lOOBmVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAbnVtIDog5YCkKE51bWJlcilcbiAgLy8gQG4gOiDlsI/mlbDngrnjga7kvY0oaW50KVxuICAvLyByZXR1cm4gOiDlpInmj5vjgZXjgozjgZ/lgKQoU3RyaW5nKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBkZWNpbWFsKG51bSwgbikge1xuICAgIHZhciBpLCBwb3M7XG4gICAgbnVtID0gU3RyaW5nKG51bSk7XG4gICAgcG9zID0gbnVtLmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVtLnNwbGl0KFwiLlwiKVswXTtcbiAgICB9XG4gICAgaWYgKHBvcyA9PT0gLTEpIHtcbiAgICAgIG51bSArPSBcIi5cIjtcbiAgICAgIGkgPSAwO1xuICAgICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICAgIG51bSArPSBcIjBcIjtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bTtcbiAgICB9XG4gICAgbnVtID0gbnVtLnN1YnN0cigwLCBwb3MpICsgbnVtLnN1YnN0cihwb3MsIG4gKyAxKTtcbiAgICByZXR1cm4gbnVtO1xuICB9XG5cbiAgY2xhbXAobnVtZXJhdG9yLGRlbm9taW5hdG9yLHZhbCkge1xuXG4gICAgcmV0dXJuIHZhbCAqIChudW1lcmF0b3IgLyBkZW5vbWluYXRvcik7XG5cbiAgfVxuXG5cdC8qKlxuICAgKiDjg6njgrjjgqLjg7PjgpLop5LluqbjgavlpInmj5tcblx0ICogQHBhcmFtIHJhZGlhbnNcblx0ICogQHJldHVybnMge251bWJlcn1cblx0ICovXG4gIGRlZ3JlZShyYWRpYW5zKSB7XG5cbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG5cbiAgfVxuXG4gIC8vIHRvIHJhZGlhbnNcbiAgcmFkaWFuKGFuZ2xlKSB7IFxuXG4gICAgcmV0dXJuIGFuZ2xlICogTWF0aC5QSSAvIDE4MDsgLy8x5bqm5L2V44Op44K444Ki44Oz44GLXG5cbiAgfVxuXG4gIGRpc3QocDEsIHAyKSB7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHAyLnggLSBwMS54LCAyKSArIE1hdGgucG93KHAyLnkgLSBwMS55LCAyKSk7XG5cbiAgfVxuXG4gIGFzY2VuZChhcnIpIHtcblxuICAgIGFyci5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICBpZiggYSA+IGIgKSByZXR1cm4gLTE7XG4gICAgICBpZiggYSA8IGIgKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICAgIC8vIHZhciBhID0gWzUsMyw5LDEsMTBdXG4gICAgLy8g57WQ5p6cOjEwLDksNSwzLDFcblxuICB9XG5cbiAgZGVzY2VuZChhcnIpIHtcblxuICAgIGFyci5zb3J0KGZ1bmN0aW9uKGEsYil7XG4gICAgICBpZiggYSA8IGIgKSByZXR1cm4gLTE7XG4gICAgICBpZiggYSA+IGIgKSByZXR1cm4gMTtcbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuXG4gICAgLy8gdmFyIGEgPSBbNSwzLDksMSwxMF1cbiAgICAvLyDntZDmnpw6MSwzLDUsOSwxMFxuXG4gIH1cblxuICAvLyBtYXAodmFsdWUsIG1pbjAxLCBtYXgwMSwgbWluMDIsIG1heDAyKSB7XG5cbiAgLy8gICB2YXIgZGlzMDEgPSBtYXgwMSAtIG1pbjAxO1xuICAvLyAgIHZhciBkaXMwMiA9IG1heDAyIC0gbWluMDJcblxuICAvLyAgIHZhciByYXRlID0gZGlzMDIgLyBkaXMwMTtcblxuICAvLyAgIHZhbHVlID0gdmFsdWUgKiByYXRlO1xuXG4gIC8vICAgcmV0dXJuIHZhbHVlO1xuICAvLyB9XG5cbiAgY29uc3RyYWluKHZhbHVlLCBtaW4sIG1heCkge1xuXG4gICAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgodmFsdWUsIG1pbikpO1xuXG4gICAgLy8gaWYgKHZhbHVlIDw9IGxvdykgdmFsdWUgPSBsb3c7XG4gICAgLy8gaWYgKHZhbHVlID49IGhpZ2gpIHZhbHVlID0gaGlnaDsgICAgIFxuICAgIC8vIHJldHVybiB2YWx1ZTtcblxuICB9XG5cbiAgLy8g44Om44OL44O844KvSUTjgpLlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgdW5pcXVlKCkge1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gIH1cbiAgXG4gIC8vICoqanF1YXJ55L2/55SoXG4gIC8vIOODnOOCv+ODs+ODouODvOODieWkieabtFxuICAvLyB0cnVl44Gq44KJ44Kr44O844K944Or44GM44Od44Kk44Oz44K/44O844Gu5b2i44GrXG4gIC8vIGZhbHNl44Gq44KJ44OH44OV44Kp44Or44OI44Gu44Kr44O844K944Or44GrXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBmbGcgOiDpgannlKjjgZnjgovjgYvjganjgYbjgYsoYm9vbGVhbilcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYnV0dG9uTW9kZShmbGcpIHtcblxuICAgIGlmIChmbGcpIHtcbiAgICAgIHJldHVybiAkKFwiYm9keVwiKS5jc3MoXCJjdXJzb3JcIiwgXCJwb2ludGVyXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJChcImJvZHlcIikuY3NzKFwiY3Vyc29yXCIsIFwiZGVmYXVsdFwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgcG9ydHJhaXQgLyBsYW5kc2NhcGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzRGlyZWN0aW9uICgpIHtcblxuICAgIHZhciBXID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICAgIEggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAoSCA+IFcpIHtcbiAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwicG9ydHJhaXRcIik7XG4gICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImxhbmRzY2FwZVwiKTtcbiAgICB9ZWxzZXtcbiAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwibGFuZHNjYXBlXCIpO1xuICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJwb3J0cmFpdFwiKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgcmVzcG9uc2l2ZSDmqKrluYXjgpLopovjgotcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGlzUmVzcG9uc2l2ZSAoYnApIHtcblxuICAgIGlmIChicD09dW5kZWZpbmVkKSBicD0zNzU7XG5cbiAgICB2YXIgVyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBIID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYgKFcgPiBicCkge1xuICAgICAgdGhpcy5pc1Jlc1NQID0gZmFsc2U7XG4gICAgICB0aGlzLmlzUmVzUEMgPSB0cnVlO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpc1Jlc3BvbnNpdmVTUCcpO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc1Jlc3BvbnNpdmVQQycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzUmVzU1AgPSB0cnVlO1xuICAgICAgdGhpcy5pc1Jlc1BDID0gZmFsc2U7XG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzUmVzcG9uc2l2ZVNQJyk7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2lzUmVzcG9uc2l2ZVBDJyk7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFVSTFxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge2FycmF5fVxuICAgKi9cbiAgZ2V0UGFyYW0oKSB7XG5cbiAgICB2YXIgdXJsID0gbG9jYXRpb24uaHJlZjtcbiAgICB2YXIgcGFyYW0gPSB1cmwuc3BsaXQoJz8nKVsxXTtcbiAgICBpZiAocGFyYW09PXVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB2YXIgcGFyYW1JdGVtcyA9IHBhcmFtLnNwbGl0KCcmJyk7XG4gICAgdmFyIGxpc3QgPSB7fTtcbiAgXG4gICAgZm9yKCB2YXIgaSA9IDA7IGk8cGFyYW1JdGVtcy5sZW5ndGg7IGkrKyApe1xuXG4gICAgICAgIHBhcmFtSXRlbSA9IHBhcmFtSXRlbXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgbGlzdFtwYXJhbUl0ZW1bMF1dID0gcGFyYW1JdGVtWzFdO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjg4/jg4Pjgrfjg6Xlj5blvpcgOiBsb2NhdGlvbi5oYXNo44GuI+OCkuWJiumZpOOBl+OBn+OChOOBpFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgaGFzaCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5oYXNoLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xuXG4gIH1cblxuICAvKipcbiAgICogY29va2ll5Y+W5b6XXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBnZXRDb29raWUoa2V5KSB7XG5cbiAgICB2YXIgYSwgYXJyLCBpLCBsLCBsZW4xLCB2YWw7XG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZSA9PT0gdm9pZCAwIHx8IGRvY3VtZW50LmNvb2tpZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGFyciA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjsgXCIpO1xuICAgIGZvciAoaSA9IGwgPSAwLCBsZW4xID0gYXJyLmxlbmd0aDsgbCA8IGxlbjE7IGkgPSArK2wpIHtcbiAgICAgIHZhbCA9IGFycltpXTtcbiAgICAgIGEgPSB2YWwuc3BsaXQoXCI9XCIpO1xuICAgICAgaWYgKGFbMF0gPT09IGtleSkge1xuICAgICAgICByZXR1cm4gYVsxXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG5cbiAgfSAgICAgIFxuXG4gIC8qKlxuICAgKiBjb29raWXoqK3lrppcbiAgICogQHBhcmFtIGtleSA6IOODkeODqeODoeODvOOCv+WQjVxuICAgKiBAcGFyYW0gdmFsIDog5YCkXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBzZXRDb29raWUoa2V5LCB2YWwpIHtcblxuICAgIHJldHVybiBkb2N1bWVudC5jb29raWUgPSBrZXkgKyBcIj1cIiArIHZhbDtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBDb2xvclxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvLyByZ2LjgYvjgolIRVjjgqvjg6njg7zlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHIgOiAwfjI1NVxuICAvLyBAZyA6IDB+MjU1XG4gIC8vIEBiIDogMH4yNTVcbiAgLy8gcmV0dXJuIDogZXggXCIjRkZGRkZGXCJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0SGV4Q29sb3IocixnLGIpIHtcbiAgICAgIHZhciBzdHI7XG4gICAgICBzdHIgPSAociA8PCAxNiB8IGcgPDwgOCB8IGIpLnRvU3RyaW5nKDE2KTtcbiAgICAgIHJldHVybiBcIiNcIiArIG5ldyBBcnJheSg3IC0gc3RyLmxlbmd0aCkuam9pbihcIjBcIikgKyBzdHI7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIFN0cmluZ1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc0NvbnRhaW4oc3RyLGNvbnRhaW4pIHtcblxuICAgIC8vIHN0cuOBruS4reOBqyxjb250YWlu44GM5a2Y5Zyo44GX44Gf44KJXG4gICAgaWYgKCBzdHIuaW5kZXhPZihjb250YWluKSAhPSAtMSApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcblxuICB9XG5cbiAgLy8gMOWfi+OCgeOBpzLmoYHjgavjgZnjgovplqLmlbBcbiAgYWRkMChzdHIsbnVtPS0yKXtcbiAgICBcbiAgICByZXR1cm4gKCBcIjAwMDAwMDAwMDAwMFwiICsgc3RyICkuc3Vic3RyKCBudW0gKTtcblxuICB9XG5cbiAgZmxvYXRGb3JtYXQoIG51bWJlciwgbiApIHtcblxuICAgIHZhciBfcG93ID0gTWF0aC5wb3coIDEwICwgbiApIDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCggbnVtYmVyICogX3BvdyApIC8gX3BvdyA7XG5cbiAgfVxuICAgIFxuICAvLyDlgKTmrrXooajoqJhcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgcHJpY2UobnVtKSB7XG5cbiAgICByZXR1cm4gU3RyaW5nKG51bSkucmVwbGFjZSgvKFxcZCkoPz0oXFxkXFxkXFxkKSsoPyFcXGQpKS9nLCAnJDEsJyk7XG5cbiAgfVxuXG4gIC8vIOaWh+Wtl+WIl+OCkuWPjei7olxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAc3RyIDog5paH5a2X5YiXKFN0cmluZylcbiAgLy8gcmV0dXJuIDog5paH5a2X5YiXKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc3RyUmV2ZXJzZShzdHIpIHtcblxuICAgIHZhciBpLCBsZW4sIHJlcztcbiAgICByZXMgPSBcIlwiO1xuICAgIGxlbiA9IHN0ci5sZW5ndGg7XG4gICAgaSA9IDE7XG4gICAgd2hpbGUgKGkgPD0gbGVuKSB7XG4gICAgICByZXMgKz0gc3RyLnN1YnN0cigtaSwgMSk7XG4gICAgICBpKys7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG5cbiAgfVxuICBcbiAgLy8g5paH5a2X5YiX44Gu5YWo572u5o+bXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEB2YWwgIDog5paH5a2X5YiXXG4gIC8vIEBvZWcgIDog572u5o+b5YmN44Gu5paH5a2X5YiXXG4gIC8vIEBkZXN0IDog572u5o+b5b6M44Gu5paH5a2X5YiXXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJlcGxhY2VBbGwodmFsLCBvcmcsIGRlc3QpIHtcblxuICAgIHJldHVybiB2YWwuc3BsaXQob3JnKS5qb2luKGRlc3QpO1xuXG4gIH0gICAgXG4gIFxuICBzdHJSZXBsYWNlKHN0ciwgYmVmb3JlLCBhZnRlcikge1xuXG4gICAgdmFyIHIgPSBuZXcgUmVnRXhwKCBiZWZvcmUsICdnJyk7XG5cbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoIHIgLCBhZnRlciApO1xuXG4gIH0gICAgXG4gIFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIERhdGVcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgZ2V0Tm93KCkge1xuXG4gICAgdGhpcy5ub3cgPSBuZXcgRGF0ZSgpO1xuXG4gIH1cblxuICBzdGFydCgpIHtcblxuICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy5ub3cuZ2V0VGltZSgpO1xuXG4gIH1cblxuICBlbGFwc2VkKCkge1xuXG4gICAgdGhpcy5lbGFwc2VkVGltZSA9IHRoaXMubm93LmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lO1xuXG4gIH1cblxuICBtKCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoIHRoaXMuZWxhcHNlZFRpbWUgKyAxMDAgLyA2MCApO1xuXG4gIH1cblxuICBzKCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5lbGFwc2VkVGltZSAvIDEwMDApO1xuXG4gIH1cblxuICBtcygpIHtcblxuICAgIHJldHVybiB0aGlzLmVsYXBzZWRUaW1lO1xuICAgIFxuICB9XG5cbiAgdGltZSgpIHtcblxuICAgIHRoaXMuZ2V0Tm93KCk7XG5cbiAgICB0aGlzLmhvdXIgPSB0aGlzLm5vdy5nZXRIb3VycygpOyAgICAgICAgICAvLyDmmYJcbiAgICB0aGlzLm1pbnV0ZSA9IHRoaXMubm93LmdldE1pbnV0ZXMoKTsgICAgICAvLyDliIZcbiAgICB0aGlzLnNlY29uZCA9IHRoaXMubm93LmdldFNlY29uZHMoKTtcbiAgICB0aGlzLm1pbGxTZWNvbmQgPSB0aGlzLm5vdy5nZXRNaWxsaXNlY29uZHMoKTtcblxuICB9XG5cbiAgZGF0ZSgpIHtcblxuICAgIHJldHVybiB0aGlzLm5vdy5nZXREYXRlKCk7XG5cbiAgfVxuXG4gIG1vbnRocygpIHtcblxuICAgIHZhciBtb250aGRheXMgPSBuZXcgQXJyYXkoMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMSk7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0TW9udGgoKSArIDE7XG5cbiAgfVxuXG4gIHllYXIoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0RnVsbFllYXIoKTtcblxuICB9XG5cbiAgZGF5KCkge1xuXG4gICAgLy8g5puc5pelICjml6XmnKzoqp4pXG4gICAgdmFyIHdlZWtEYXlKUCA9IFtcIuaXpVwiLFwi5pyIXCIsXCLngatcIixcIuawtFwiLFwi5pyoXCIsXCLph5FcIixcIuWcn1wiXSA7XG4gICAgdmFyIHdESiA9IHdlZWtEYXlKUFt0aGlzLm5vdy5nZXREYXkoKV0gO1xuXG4gICAgLy8g5puc5pelICjoi7Hoqp4pXG4gICAgdmFyIHdlZWtEYXlFTiA9IFtcIlN1blwiLFwiTW9uXCIsXCJUdWVcIixcIldlZFwiLFwiVGh1XCIsXCJGcmlcIixcIlNhdFwiXSA7XG4gICAgdmFyIHdERSA9IHdlZWtEYXlFTlt0aGlzLm5vdy5nZXREYXkoKV0gO1xuXG4gIH1cbiAgXG4gIC8vIOaVsOaXpeW+jOOBrkRhdGXjgqrjg5bjgrjjgqfjgq/jg4jlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYWZ0ZXJEYXkoZGF0ZSwgbnVtKSB7XG5cbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyBOdW1iZXIobnVtKSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIERhdGEgdHlwZSBjaGVja1xuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBpc09iamVjdCh2YWx1ZSwgaWdub3JlQXJyYXkpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsO1xuICB9XG5cbiAgaXNOdW1iZXIodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xuICB9XG5cbiAgaXNTdHJpbmcodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGlzQXJyYXkodmFsdWUpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9XG5cbiAgaXNOdWxsKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG4gIH1cblxuICBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIG90aGVyXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBzZXRJbWdTUFNpemUgKCR0YXJnZXQpe1xuXG4gICAgLy8gcmVzcG9uc2l2ZSBzcOOBruOBqOOBjeWHpueQhlxuICAgIGlmICghdGhpcy5pc1Jlc1NQKSByZXR1cm47XG4gICAgLy8g5LiA5bqm44Gg44GR5Yem55CGXG4gICAgLy8gaWYgKHRoaXMuaXNTZXRTUFNpemUpIHJldHVybjtcbiAgICAvLyB0aGlzLmlzU2V0U1BTaXplID0gdHJ1ZTtcblxuICAgIHZhciAkaW1nID0gJHRhcmdldCxcbiAgICAgICAgbGVuID0gJGltZy5sZW5ndGg7XG5cbiAgICAkaW1nLmVhY2goZnVuY3Rpb24oaSkge1xuXG4gICAgICAgIHZhciB3ID0gTWF0aC5mbG9vcigkKHRoaXMpLndpZHRoKCkgLyAyKSxcbiAgICAgICAgICAgIGggPSBNYXRoLmZsb29yKCQodGhpcykuaGVpZ2h0KCkgLyAyKTtcblxuICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgJ3dpZHRoJzogdyxcbiAgICAgICAgICAgICdoZWlnaHQnOiBoLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobGVuID09IGkgKyAxKSAkKHdpbmRvdykudHJpZ2dlcignc2V0U3BaaWVFbmQnKTtcblxuICAgIH0pO1xuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gIOOCueODnuODm+aTjeS9nOeEoeWKuVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0UHJldmVudCgpIHtcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICQod2luZG93KS5vbigndG91Y2htb3ZlLm5vQ29udHJvbCcsIGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt9KTtcblxuICB9XG5cbiAgcmVtb3ZlUHJldmVudCgpIHtcblxuICAgICQod2luZG93KS5vZmYoJ3RvdWNobW92ZS5ub0NvbnRyb2wnKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICBob3N0LHByb3Rjb2xcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByb3RvY29sKCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnByb3RvY29sO1xuXG4gIH1cbiAgICBcbiAgaG9zdCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5ob3N0bmFtZTtcbiAgICAvLyByZXR1cm4gbG9jYXRpb24uaG9zdFxuXG4gIH1cblxuICBwb3J0KCkge1xuXG4gICAgcmV0dXJuIGxvY2F0aW9uLnBvcnQ7XG5cbiAgfVxuICAgICAgICBcbiAgcGF0aCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wYXRobmFtZTtcblxuICB9XG5cbiAgcHJldmVudERlZmF1bHQoZSkge1xuXG4gICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xuICAgIGlmIChlLnByZXZlbnREZWZhdWx0KVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXG4gIH1cblxuICBwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMoZSkge1xuXG4gICAgaWYgKGtleXNbZS5rZXlDb2RlXSkge1xuICAgICAgICBwcmV2ZW50RGVmYXVsdChlKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICB9XG5cbiAgZGlzYWJsZVNjcm9sbCgpIHtcblxuICAgIGlmICh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikgLy8gb2xkZXIgRkZcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIHdpbmRvdy5vbndoZWVsID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gbW9kZXJuIHN0YW5kYXJkXG4gICAgd2luZG93Lm9ubW91c2V3aGVlbCA9IGRvY3VtZW50Lm9ubW91c2V3aGVlbCA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG9sZGVyIGJyb3dzZXJzLCBJRVxuICAgIHdpbmRvdy5vbnRvdWNobW92ZSAgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBtb2JpbGVcbiAgICBkb2N1bWVudC5vbmtleWRvd24gID0gdGhpcy5wcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXM7XG5cbiAgfVxuXG4gIGVuYWJsZVNjcm9sbCgpIHtcblxuICAgIGlmICh3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTU1vdXNlU2Nyb2xsJywgdGhpcy5wcmV2ZW50RGVmYXVsdCwgZmFsc2UpO1xuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSBudWxsOyBcbiAgICB3aW5kb3cub253aGVlbCA9IG51bGw7IFxuICAgIHdpbmRvdy5vbnRvdWNobW92ZSA9IG51bGw7XG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9VdGlsLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogVXRpbHNcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbi8qKlxuICogYW5pbWF0aW9uXG4gKi9cbmltcG9ydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSAnLi9hbmltYXRpb24vcmVxdWVzdEFuaW1hdGlvbkZyYW1lJztcbmltcG9ydCBjYW5jZWxBbmltYXRpb25GcmFtZSBmcm9tICcuL2FuaW1hdGlvbi9jYW5jZWxBbmltYXRpb25GcmFtZSc7XG5cbmltcG9ydCBBcnJheSBmcm9tICcuL2FycmF5L0FycmF5JztcbmltcG9ydCBjaGVja0NsaWVudCBmcm9tIFwiLi91YS9jaGVja0NsaWVudFwiO1xuXG5pbXBvcnQgcHJlbG9hZEltZyBmcm9tICcuL2ltZy9wcmVsb2FkSW1nJztcbmltcG9ydCBzZXRVcEJ0blR3aXR0ZXIgZnJvbSAnLi9zbnMvc2V0VXBCdG5Ud2l0dGVyJztcbmltcG9ydCBzZXRVcEJ0bkxpbmUgZnJvbSAnLi9zbnMvc2V0VXBCdG5MaW5lJztcbmltcG9ydCBzZXRVcEJ0bkZhY2VCb29rIGZyb20gJy4vc25zL3NldFVwQnRuRmFjZUJvb2snO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuX3NldHVwKCk7XG4gICAgXG4gIH1cblxuICBfc2V0dXAoKSB7XG4gICAgLy8gd2luZG93LmNvbnNvbGUubG9nKCdVdGlsc19TZXR1cCEhJyk7XG4gICAgXG4gICAgLyoqXG4gICAgICogYXJyYXlcbiAgICAgKi9cbiAgICB0aGlzLkFycmF5ID0gbmV3IEFycmF5KCk7XG5cblxuICAgIC8qKlxuICAgICAqIHVhXG4gICAgICovXG4gICAgdGhpcy5jaGVja0NsaWVudCA9IG5ldyBjaGVja0NsaWVudCgpO1xuXG5cbiAgICAvKipcbiAgICAgKiBpbWdcbiAgICAgKi9cbiAgICAvLyB0aGlzLnByZWxvYWRJbWcgPSBuZXcgcHJlbG9hZEltZygpO1xuXG4gICAgLyoqXG4gICAgICogc25zXG4gICAgICovXG4gICAgLy8gdGhpcy5zZXRVcEJ0blR3aXR0ZXIgPSBuZXcgc2V0VXBCdG5Ud2l0dGVyO1xuICAgIC8vIHRoaXMuc2V0VXBCdG5MaW5lID0gbmV3IHNldFVwQnRuTGluZTtcbiAgICAvLyB0aGlzLnNldFVwQnRuRmFjZUJvb2sgPSBuZXcgc2V0VXBCdG5GYWNlQm9vaztcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9VdGlscy5qcyIsIi8qKlxuICogcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gKi9cbndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoKGZ1bmN0aW9uKF90aGlzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyAzMCk7XG4gICAgICAgIH07XG4gIH07XG59KSh0aGlzKSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FuaW1hdGlvbi9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMiLCIvKipcbiAqIGNhbmNlbEFuaW1hdGlvbkZyYW1lXG4gKi9cbndpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9ICgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG4gICAgICAgIH07XG4gIH07XG59KSh0aGlzKSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FuaW1hdGlvbi9jYW5jZWxBbmltYXRpb25GcmFtZS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OiDphY3liJfjga7mk43kvZzns7tcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBBcnJheVxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyYXkge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG5cbiAgfVxuXG5cdC8qKlxuXHQgKiDphY3liJflhoXjga7jg6njg7Pjg4Djg6DjgarlgKTjgpLjgbLjgajjgaTlj5blvpdcblx0ICogQHBhcmFtIGFyciA6IOmFjeWIl1xuXHQgKiBAcmV0dXJucyB7Kn0gOiDphY3liJflhoXjga7lgKRcblx0ICovXG4gIGFyclJhbmQoYXJyKSB7XG5cbiAgICByZXR1cm4gYXJyW3RoaXMucmFuZG9tKDAsIGFyci5sZW5ndGggLSAxKV07XG5cbiAgfVxuXG5cdC8qKlxuICAgKiDphY3liJfjgpLjg6njg7Pjg4Djg6DjgavkuKbjgbnmm7/jgYhcblx0ICogQHBhcmFtIGFyciA6IOmFjeWIlyhBcnJheSlcblx0ICogQHJldHVybnMge0FycmF5fVxuXHQgKi9cbiAgc2h1ZmZsZShhcnIpIHtcblxuICAgIGxldCBBcnIgPSBbXTtcbiAgICBBcnIgPSBhcnIuc2xpY2UoKTtcbiAgICB2YXIgaSA9IGFyci5sZW5ndGg7XG4gICAgd2hpbGUoaSl7XG4gICAgICB2YXIgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSppKTtcbiAgICAgIHZhciB0ID0gQXJyWy0taV07XG4gICAgICBBcnJbaV0gPSBBcnJbal07XG4gICAgICBBcnJbal0gPSB0O1xuICAgIH1cbiAgICByZXR1cm4gQXJyO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYXJyYXkvQXJyYXkuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzogVWHliKTliKVcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBjaGVja0NsaWVudFxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuY29uc3QgcGFyc2VyID0gcmVxdWlyZShcIi4uLy4uLy4uL2xpYnMvdWEtcGFyc2VyLm1pbi5qc1wiKTtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGVja0NsaWVudCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnVhID0gbmV3IHBhcnNlcigpO1xuXG4gIH1cblxuICAvKipcbiAgICogSUXjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0lFKCkge1xuICAgIGxldCBicm93c2VyID0gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgICByZXR1cm4gYnJvd3NlciA9PT0gJ0lFJyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZm9444GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNGaXJlZm94KCkge1xuICAgIGxldCBicm93c2VyID0gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgICByZXR1cm4gYnJvd3NlciA9PT0gJ0ZpcmVmb3gnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENocm9tZeOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzQ2hyb21lKCkge1xuICAgIGxldCBicm93c2VyID0gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgICByZXR1cm4gYnJvd3NlciA9PT0gJ0Nocm9tZScgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogU2FmYXJp44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNTYWZhcmkoKSB7XG4gICAgbGV0IGJyb3dzZXIgPSB0aGlzLnVhLmdldEJyb3dzZXIoKS5uYW1lO1xuICAgIHJldHVybiBicm93c2VyID09PSAnU2FmYXJpJyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6Ljg5DjgqTjg6vjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMgeyp9XG4gICAqL1xuICBpc01vYmlsZSgpIHtcbiAgICBsZXQgZGV2aWNlID0gdGhpcy51YS5nZXREZXZpY2UoKS50eXBlO1xuICAgIHJldHVybiBkZXZpY2UgPT09ICdtb2JpbGUnID8gdHJ1ZSA6IG51bGw7XG4gIH1cblxuICAvKipcbiAgICog44K/44OW44Os44OD44OI44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgaXNUYWJsZXQoKSB7XG4gICAgbGV0IGRldmljZSA9IHRoaXMudWEuZ2V0RGV2aWNlKCkudHlwZTtcbiAgICByZXR1cm4gZGV2aWNlID09PSAndGFibGV0JyA/IHRydWUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIE9T5ZCN44KS5Y+W5b6XXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBvcygpIHtcbiAgICByZXR1cm4gdGhpcy51YS5nZXRPUygpLm5hbWU7XG4gIH1cblxuICAvKipcbiAgICog44OH44OQ44Kk44K55ZCN44KS5Y+W5b6XXG4gICAqIEByZXR1cm5zIHt2ZW5kb3J8e0hUQywgU3ByaW50fX1cbiAgICovXG4gIGRldmljZV9uYW1lKCkge1xuICAgIGxldCBkZXZpY2VfbmFtZSA9IHRoaXMudWEuZ2V0RGV2aWNlKCkudmVuZG9yO1xuICAgIHJldHVybiBkZXZpY2VfbmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg5bjg6njgqbjgrblkI3jgpLlj5blvpdcbiAgICovXG4gIGJyb3dzZXJfbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDjg6bjg7zjgrbjg7zjgqjjg7zjgrjjgqfjg7Pjg4jmg4XloLHvvJrlhajjgabjgpLlj5blvpdcbiAgICovXG4gIGFsbCgpIHtcbiAgICByZXR1cm4gdGhpcy51YS5nZXRVQSgpO1xuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3VhL2NoZWNrQ2xpZW50LmpzIiwiLyoqXG4gKiBVQVBhcnNlci5qcyB2MC43LjEyXG4gKiBMaWdodHdlaWdodCBKYXZhU2NyaXB0LWJhc2VkIFVzZXItQWdlbnQgc3RyaW5nIHBhcnNlclxuICogaHR0cHM6Ly9naXRodWIuY29tL2ZhaXNhbG1hbi91YS1wYXJzZXItanNcbiAqXG4gKiBDb3B5cmlnaHQgwqkgMjAxMi0yMDE2IEZhaXNhbCBTYWxtYW4gPGZ5emxtYW5AZ21haWwuY29tPlxuICogRHVhbCBsaWNlbnNlZCB1bmRlciBHUEx2MiAmIE1JVFxuICovKGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49XCIwLjcuMTJcIixyPVwiXCIsaT1cIj9cIixzPVwiZnVuY3Rpb25cIixvPVwidW5kZWZpbmVkXCIsdT1cIm9iamVjdFwiLGE9XCJzdHJpbmdcIixmPVwibWFqb3JcIixsPVwibW9kZWxcIixjPVwibmFtZVwiLGg9XCJ0eXBlXCIscD1cInZlbmRvclwiLGQ9XCJ2ZXJzaW9uXCIsdj1cImFyY2hpdGVjdHVyZVwiLG09XCJjb25zb2xlXCIsZz1cIm1vYmlsZVwiLHk9XCJ0YWJsZXRcIixiPVwic21hcnR0dlwiLHc9XCJ3ZWFyYWJsZVwiLEU9XCJlbWJlZGRlZFwiLFM9e2V4dGVuZDpmdW5jdGlvbihlLHQpe3ZhciBuPXt9O2Zvcih2YXIgciBpbiBlKXRbcl0mJnRbcl0ubGVuZ3RoJTI9PT0wP25bcl09dFtyXS5jb25jYXQoZVtyXSk6bltyXT1lW3JdO3JldHVybiBufSxoYXM6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdHlwZW9mIGU9PVwic3RyaW5nXCI/dC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZS50b0xvd2VyQ2FzZSgpKSE9PS0xOiExfSxsb3dlcml6ZTpmdW5jdGlvbihlKXtyZXR1cm4gZS50b0xvd2VyQ2FzZSgpfSxtYWpvcjpmdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGU9PT1hP2UucmVwbGFjZSgvW15cXGRcXC5dL2csXCJcIikuc3BsaXQoXCIuXCIpWzBdOnR9LHRyaW06ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZSgvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csXCJcIil9fSx4PXtyZ3g6ZnVuY3Rpb24oKXt2YXIgZSxuPTAscixpLGEsZixsLGMsaD1hcmd1bWVudHM7d2hpbGUobjxoLmxlbmd0aCYmIWwpe3ZhciBwPWhbbl0sZD1oW24rMV07aWYodHlwZW9mIGU9PT1vKXtlPXt9O2ZvcihhIGluIGQpZC5oYXNPd25Qcm9wZXJ0eShhKSYmKGY9ZFthXSx0eXBlb2YgZj09PXU/ZVtmWzBdXT10OmVbZl09dCl9cj1pPTA7d2hpbGUocjxwLmxlbmd0aCYmIWwpe2w9cFtyKytdLmV4ZWModGhpcy5nZXRVQSgpKTtpZighIWwpZm9yKGE9MDthPGQubGVuZ3RoO2ErKyljPWxbKytpXSxmPWRbYV0sdHlwZW9mIGY9PT11JiZmLmxlbmd0aD4wP2YubGVuZ3RoPT0yP3R5cGVvZiBmWzFdPT1zP2VbZlswXV09ZlsxXS5jYWxsKHRoaXMsYyk6ZVtmWzBdXT1mWzFdOmYubGVuZ3RoPT0zP3R5cGVvZiBmWzFdPT09cyYmKCFmWzFdLmV4ZWN8fCFmWzFdLnRlc3QpP2VbZlswXV09Yz9mWzFdLmNhbGwodGhpcyxjLGZbMl0pOnQ6ZVtmWzBdXT1jP2MucmVwbGFjZShmWzFdLGZbMl0pOnQ6Zi5sZW5ndGg9PTQmJihlW2ZbMF1dPWM/ZlszXS5jYWxsKHRoaXMsYy5yZXBsYWNlKGZbMV0sZlsyXSkpOnQpOmVbZl09Yz9jOnR9bis9Mn1yZXR1cm4gZX0sc3RyOmZ1bmN0aW9uKGUsbil7Zm9yKHZhciByIGluIG4paWYodHlwZW9mIG5bcl09PT11JiZuW3JdLmxlbmd0aD4wKXtmb3IodmFyIHM9MDtzPG5bcl0ubGVuZ3RoO3MrKylpZihTLmhhcyhuW3JdW3NdLGUpKXJldHVybiByPT09aT90OnJ9ZWxzZSBpZihTLmhhcyhuW3JdLGUpKXJldHVybiByPT09aT90OnI7cmV0dXJuIGV9fSxUPXticm93c2VyOntvbGRzYWZhcmk6e3ZlcnNpb246e1wiMS4wXCI6XCIvOFwiLDEuMjpcIi8xXCIsMS4zOlwiLzNcIixcIjIuMFwiOlwiLzQxMlwiLFwiMi4wLjJcIjpcIi80MTZcIixcIjIuMC4zXCI6XCIvNDE3XCIsXCIyLjAuNFwiOlwiLzQxOVwiLFwiP1wiOlwiL1wifX19LGRldmljZTp7YW1hem9uOnttb2RlbDp7XCJGaXJlIFBob25lXCI6W1wiU0RcIixcIktGXCJdfX0sc3ByaW50Onttb2RlbDp7XCJFdm8gU2hpZnQgNEdcIjpcIjczNzNLVFwifSx2ZW5kb3I6e0hUQzpcIkFQQVwiLFNwcmludDpcIlNwcmludFwifX19LG9zOnt3aW5kb3dzOnt2ZXJzaW9uOntNRTpcIjQuOTBcIixcIk5UIDMuMTFcIjpcIk5UMy41MVwiLFwiTlQgNC4wXCI6XCJOVDQuMFwiLDJlMzpcIk5UIDUuMFwiLFhQOltcIk5UIDUuMVwiLFwiTlQgNS4yXCJdLFZpc3RhOlwiTlQgNi4wXCIsNzpcIk5UIDYuMVwiLDg6XCJOVCA2LjJcIiw4LjE6XCJOVCA2LjNcIiwxMDpbXCJOVCA2LjRcIixcIk5UIDEwLjBcIl0sUlQ6XCJBUk1cIn19fX0sTj17YnJvd3NlcjpbWy8ob3BlcmFcXHNtaW5pKVxcLyhbXFx3XFwuLV0rKS9pLC8ob3BlcmFcXHNbbW9iaWxldGFiXSspLit2ZXJzaW9uXFwvKFtcXHdcXC4tXSspL2ksLyhvcGVyYSkuK3ZlcnNpb25cXC8oW1xcd1xcLl0rKS9pLC8ob3BlcmEpW1xcL1xcc10rKFtcXHdcXC5dKykvaV0sW2MsZF0sWy8ob3Bpb3MpW1xcL1xcc10rKFtcXHdcXC5dKykvaV0sW1tjLFwiT3BlcmEgTWluaVwiXSxkXSxbL1xccyhvcHIpXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiT3BlcmFcIl0sZF0sWy8oa2luZGxlKVxcLyhbXFx3XFwuXSspL2ksLyhsdW5hc2NhcGV8bWF4dGhvbnxuZXRmcm9udHxqYXNtaW5lfGJsYXplcilbXFwvXFxzXT8oW1xcd1xcLl0rKSovaSwvKGF2YW50XFxzfGllbW9iaWxlfHNsaW18YmFpZHUpKD86YnJvd3Nlcik/W1xcL1xcc10/KFtcXHdcXC5dKikvaSwvKD86bXN8XFwoKShpZSlcXHMoW1xcd1xcLl0rKS9pLC8ocmVrb25xKVxcLyhbXFx3XFwuXSspKi9pLC8oY2hyb21pdW18ZmxvY2t8cm9ja21lbHR8bWlkb3JpfGVwaXBoYW55fHNpbGt8c2t5ZmlyZXxvdmlicm93c2VyfGJvbHR8aXJvbnx2aXZhbGRpfGlyaWRpdW18cGhhbnRvbWpzKVxcLyhbXFx3XFwuLV0rKS9pXSxbYyxkXSxbLyh0cmlkZW50KS4rcnZbOlxcc10oW1xcd1xcLl0rKS4rbGlrZVxcc2dlY2tvL2ldLFtbYyxcIklFXCJdLGRdLFsvKGVkZ2UpXFwvKChcXGQrKT9bXFx3XFwuXSspL2ldLFtjLGRdLFsvKHlhYnJvd3NlcilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJZYW5kZXhcIl0sZF0sWy8oY29tb2RvX2RyYWdvbilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsL18vZyxcIiBcIl0sZF0sWy8obWljcm9tZXNzZW5nZXIpXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiV2VDaGF0XCJdLGRdLFsveGlhb21pXFwvbWl1aWJyb3dzZXJcXC8oW1xcd1xcLl0rKS9pXSxbZCxbYyxcIk1JVUkgQnJvd3NlclwiXV0sWy9cXHN3dlxcKS4rKGNocm9tZSlcXC8oW1xcd1xcLl0rKS9pXSxbW2MsLyguKykvLFwiJDEgV2ViVmlld1wiXSxkXSxbL2FuZHJvaWQuK3NhbXN1bmdicm93c2VyXFwvKFtcXHdcXC5dKykvaSwvYW5kcm9pZC4rdmVyc2lvblxcLyhbXFx3XFwuXSspXFxzKyg/Om1vYmlsZVxccz9zYWZhcml8c2FmYXJpKSovaV0sW2QsW2MsXCJBbmRyb2lkIEJyb3dzZXJcIl1dLFsvKGNocm9tZXxvbW5pd2VifGFyb3JhfFt0aXplbm9rYV17NX1cXHM/YnJvd3NlcilcXC92PyhbXFx3XFwuXSspL2ksLyhxcWJyb3dzZXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaV0sW2MsZF0sWy8odWNcXHM/YnJvd3NlcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pLC91Y3dlYi4rKHVjYnJvd3NlcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pLC9qdWMuKyh1Y3dlYilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pXSxbW2MsXCJVQ0Jyb3dzZXJcIl0sZF0sWy8oZG9sZmluKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIkRvbHBoaW5cIl0sZF0sWy8oKD86YW5kcm9pZC4rKWNybW98Y3Jpb3MpXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiQ2hyb21lXCJdLGRdLFsvO2ZiYXZcXC8oW1xcd1xcLl0rKTsvaV0sW2QsW2MsXCJGYWNlYm9va1wiXV0sWy9meGlvc1xcLyhbXFx3XFwuLV0rKS9pXSxbZCxbYyxcIkZpcmVmb3hcIl1dLFsvdmVyc2lvblxcLyhbXFx3XFwuXSspLis/bW9iaWxlXFwvXFx3K1xccyhzYWZhcmkpL2ldLFtkLFtjLFwiTW9iaWxlIFNhZmFyaVwiXV0sWy92ZXJzaW9uXFwvKFtcXHdcXC5dKykuKz8obW9iaWxlXFxzP3NhZmFyaXxzYWZhcmkpL2ldLFtkLGNdLFsvd2Via2l0Lis/KG1vYmlsZVxccz9zYWZhcml8c2FmYXJpKShcXC9bXFx3XFwuXSspL2ldLFtjLFtkLHguc3RyLFQuYnJvd3Nlci5vbGRzYWZhcmkudmVyc2lvbl1dLFsvKGtvbnF1ZXJvcilcXC8oW1xcd1xcLl0rKS9pLC8od2Via2l0fGtodG1sKVxcLyhbXFx3XFwuXSspL2ldLFtjLGRdLFsvKG5hdmlnYXRvcnxuZXRzY2FwZSlcXC8oW1xcd1xcLi1dKykvaV0sW1tjLFwiTmV0c2NhcGVcIl0sZF0sWy8oc3dpZnRmb3gpL2ksLyhpY2VkcmFnb258aWNld2Vhc2VsfGNhbWlub3xjaGltZXJhfGZlbm5lY3xtYWVtb1xcc2Jyb3dzZXJ8bWluaW1vfGNvbmtlcm9yKVtcXC9cXHNdPyhbXFx3XFwuXFwrXSspL2ksLyhmaXJlZm94fHNlYW1vbmtleXxrLW1lbGVvbnxpY2VjYXR8aWNlYXBlfGZpcmViaXJkfHBob2VuaXgpXFwvKFtcXHdcXC4tXSspL2ksLyhtb3ppbGxhKVxcLyhbXFx3XFwuXSspLitydlxcOi4rZ2Vja29cXC9cXGQrL2ksLyhwb2xhcmlzfGx5bnh8ZGlsbG98aWNhYnxkb3Jpc3xhbWF5YXx3M218bmV0c3VyZnxzbGVpcG5pcilbXFwvXFxzXT8oW1xcd1xcLl0rKS9pLC8obGlua3MpXFxzXFwoKFtcXHdcXC5dKykvaSwvKGdvYnJvd3NlcilcXC8/KFtcXHdcXC5dKykqL2ksLyhpY2VcXHM/YnJvd3NlcilcXC92PyhbXFx3XFwuX10rKS9pLC8obW9zYWljKVtcXC9cXHNdKFtcXHdcXC5dKykvaV0sW2MsZF1dLGNwdTpbWy8oPzooYW1kfHgoPzooPzo4Nnw2NClbXy1dKT98d293fHdpbik2NClbO1xcKV0vaV0sW1t2LFwiYW1kNjRcIl1dLFsvKGlhMzIoPz07KSkvaV0sW1t2LFMubG93ZXJpemVdXSxbLygoPzppWzM0Nl18eCk4NilbO1xcKV0vaV0sW1t2LFwiaWEzMlwiXV0sWy93aW5kb3dzXFxzKGNlfG1vYmlsZSk7XFxzcHBjOy9pXSxbW3YsXCJhcm1cIl1dLFsvKCg/OnBwY3xwb3dlcnBjKSg/OjY0KT8pKD86XFxzbWFjfDt8XFwpKS9pXSxbW3YsL293ZXIvLFwiXCIsUy5sb3dlcml6ZV1dLFsvKHN1bjRcXHcpWztcXCldL2ldLFtbdixcInNwYXJjXCJdXSxbLygoPzphdnIzMnxpYTY0KD89OykpfDY4ayg/PVxcKSl8YXJtKD86NjR8KD89dlxcZCs7KSl8KD89YXRtZWxcXHMpYXZyfCg/OmlyaXh8bWlwc3xzcGFyYykoPzo2NCk/KD89Oyl8cGEtcmlzYykvaV0sW1t2LFMubG93ZXJpemVdXV0sZGV2aWNlOltbL1xcKChpcGFkfHBsYXlib29rKTtbXFx3XFxzXFwpOy1dKyhyaW18YXBwbGUpL2ldLFtsLHAsW2gseV1dLFsvYXBwbGVjb3JlbWVkaWFcXC9bXFx3XFwuXSsgXFwoKGlwYWQpL10sW2wsW3AsXCJBcHBsZVwiXSxbaCx5XV0sWy8oYXBwbGVcXHN7MCwxfXR2KS9pXSxbW2wsXCJBcHBsZSBUVlwiXSxbcCxcIkFwcGxlXCJdXSxbLyhhcmNob3MpXFxzKGdhbWVwYWQyPykvaSwvKGhwKS4rKHRvdWNocGFkKS9pLC8oaHApLisodGFibGV0KS9pLC8oa2luZGxlKVxcLyhbXFx3XFwuXSspL2ksL1xccyhub29rKVtcXHdcXHNdK2J1aWxkXFwvKFxcdyspL2ksLyhkZWxsKVxccyhzdHJlYVtrcHJcXHNcXGRdKltcXGRrb10pL2ldLFtwLGwsW2gseV1dLFsvKGtmW0Etel0rKVxcc2J1aWxkXFwvW1xcd1xcLl0rLipzaWxrXFwvL2ldLFtsLFtwLFwiQW1hem9uXCJdLFtoLHldXSxbLyhzZHxrZilbMDM0OWhpam9yc3R1d10rXFxzYnVpbGRcXC9bXFx3XFwuXSsuKnNpbGtcXC8vaV0sW1tsLHguc3RyLFQuZGV2aWNlLmFtYXpvbi5tb2RlbF0sW3AsXCJBbWF6b25cIl0sW2gsZ11dLFsvXFwoKGlwW2hvbmVkfFxcc1xcdypdKyk7LisoYXBwbGUpL2ldLFtsLHAsW2gsZ11dLFsvXFwoKGlwW2hvbmVkfFxcc1xcdypdKyk7L2ldLFtsLFtwLFwiQXBwbGVcIl0sW2gsZ11dLFsvKGJsYWNrYmVycnkpW1xccy1dPyhcXHcrKS9pLC8oYmxhY2tiZXJyeXxiZW5xfHBhbG0oPz1cXC0pfHNvbnllcmljc3NvbnxhY2VyfGFzdXN8ZGVsbHxodWF3ZWl8bWVpenV8bW90b3JvbGF8cG9seXRyb24pW1xcc18tXT8oW1xcdy1dKykqL2ksLyhocClcXHMoW1xcd1xcc10rXFx3KS9pLC8oYXN1cyktPyhcXHcrKS9pXSxbcCxsLFtoLGddXSxbL1xcKGJiMTA7XFxzKFxcdyspL2ldLFtsLFtwLFwiQmxhY2tCZXJyeVwiXSxbaCxnXV0sWy9hbmRyb2lkLisodHJhbnNmb1twcmltZVxcc117NCwxMH1cXHNcXHcrfGVlZXBjfHNsaWRlclxcc1xcdyt8bmV4dXMgN3xwYWRmb25lKS9pXSxbbCxbcCxcIkFzdXNcIl0sW2gseV1dLFsvKHNvbnkpXFxzKHRhYmxldFxcc1twc10pXFxzYnVpbGRcXC8vaSwvKHNvbnkpPyg/OnNncC4rKVxcc2J1aWxkXFwvL2ldLFtbcCxcIlNvbnlcIl0sW2wsXCJYcGVyaWEgVGFibGV0XCJdLFtoLHldXSxbLyg/OnNvbnkpPyg/Oig/Oig/OmN8ZClcXGR7NH0pfCg/OnNvWy1sXS4rKSlcXHNidWlsZFxcLy9pXSxbW3AsXCJTb255XCJdLFtsLFwiWHBlcmlhIFBob25lXCJdLFtoLGddXSxbL1xccyhvdXlhKVxccy9pLC8obmludGVuZG8pXFxzKFt3aWRzM3VdKykvaV0sW3AsbCxbaCxtXV0sWy9hbmRyb2lkLis7XFxzKHNoaWVsZClcXHNidWlsZC9pXSxbbCxbcCxcIk52aWRpYVwiXSxbaCxtXV0sWy8ocGxheXN0YXRpb25cXHNbMzRwb3J0YWJsZXZpXSspL2ldLFtsLFtwLFwiU29ueVwiXSxbaCxtXV0sWy8oc3ByaW50XFxzKFxcdyspKS9pXSxbW3AseC5zdHIsVC5kZXZpY2Uuc3ByaW50LnZlbmRvcl0sW2wseC5zdHIsVC5kZXZpY2Uuc3ByaW50Lm1vZGVsXSxbaCxnXV0sWy8obGVub3ZvKVxccz8oUyg/OjUwMDB8NjAwMCkrKD86Wy1dW1xcdytdKSkvaV0sW3AsbCxbaCx5XV0sWy8oaHRjKVs7X1xccy1dKyhbXFx3XFxzXSsoPz1cXCkpfFxcdyspKi9pLC8oenRlKS0oXFx3KykqL2ksLyhhbGNhdGVsfGdlZWtzcGhvbmV8aHVhd2VpfGxlbm92b3xuZXhpYW58cGFuYXNvbmljfCg/PTtcXHMpc29ueSlbX1xccy1dPyhbXFx3LV0rKSovaV0sW3AsW2wsL18vZyxcIiBcIl0sW2gsZ11dLFsvKG5leHVzXFxzOSkvaV0sW2wsW3AsXCJIVENcIl0sW2gseV1dLFsvKG5leHVzXFxzNnApL2ldLFtsLFtwLFwiSHVhd2VpXCJdLFtoLGddXSxbLyhtaWNyb3NvZnQpO1xccyhsdW1pYVtcXHNcXHddKykvaV0sW3AsbCxbaCxnXV0sWy9bXFxzXFwoO10oeGJveCg/Olxcc29uZSk/KVtcXHNcXCk7XS9pXSxbbCxbcCxcIk1pY3Jvc29mdFwiXSxbaCxtXV0sWy8oa2luXFwuW29uZXR3XXszfSkvaV0sW1tsLC9cXC4vZyxcIiBcIl0sW3AsXCJNaWNyb3NvZnRcIl0sW2gsZ11dLFsvXFxzKG1pbGVzdG9uZXxkcm9pZCg/OlsyLTR4XXxcXHMoPzpiaW9uaWN8eDJ8cHJvfHJhenIpKT8oOj9cXHM0Zyk/KVtcXHdcXHNdK2J1aWxkXFwvL2ksL21vdFtcXHMtXT8oXFx3KykqL2ksLyhYVFxcZHszLDR9KSBidWlsZFxcLy9pLC8obmV4dXNcXHM2KS9pXSxbbCxbcCxcIk1vdG9yb2xhXCJdLFtoLGddXSxbL2FuZHJvaWQuK1xccyhtejYwXFxkfHhvb21bXFxzMl17MCwyfSlcXHNidWlsZFxcLy9pXSxbbCxbcCxcIk1vdG9yb2xhXCJdLFtoLHldXSxbL2hiYnR2XFwvXFxkK1xcLlxcZCtcXC5cXGQrXFxzK1xcKFtcXHdcXHNdKjtcXHMqKFxcd1teO10qKTsoW147XSopL2ldLFtbcCxTLnRyaW1dLFtsLFMudHJpbV0sW2gsYl1dLFsvaGJidHYuK21hcGxlOyhcXGQrKS9pXSxbW2wsL14vLFwiU21hcnRUVlwiXSxbcCxcIlNhbXN1bmdcIl0sW2gsYl1dLFsvXFwoZHR2W1xcKTtdLisoYXF1b3MpL2ldLFtsLFtwLFwiU2hhcnBcIl0sW2gsYl1dLFsvYW5kcm9pZC4rKChzY2gtaVs4OV0wXFxkfHNody1tMzgwc3xndC1wXFxkezR9fGd0LW5cXGQrfHNnaC10OFs1Nl05fG5leHVzIDEwKSkvaSwvKChTTS1UXFx3KykpL2ldLFtbcCxcIlNhbXN1bmdcIl0sbCxbaCx5XV0sWy9zbWFydC10di4rKHNhbXN1bmcpL2ldLFtwLFtoLGJdLGxdLFsvKChzW2NncF1oLVxcdyt8Z3QtXFx3K3xnYWxheHlcXHNuZXh1c3xzbS1cXHdbXFx3XFxkXSspKS9pLC8oc2FtW3N1bmddKilbXFxzLV0qKFxcdystP1tcXHctXSopKi9pLC9zZWMtKChzZ2hcXHcrKSkvaV0sW1twLFwiU2Ftc3VuZ1wiXSxsLFtoLGddXSxbL3NpZS0oXFx3KykqL2ldLFtsLFtwLFwiU2llbWVuc1wiXSxbaCxnXV0sWy8obWFlbW98bm9raWEpLioobjkwMHxsdW1pYVxcc1xcZCspL2ksLyhub2tpYSlbXFxzXy1dPyhbXFx3LV0rKSovaV0sW1twLFwiTm9raWFcIl0sbCxbaCxnXV0sWy9hbmRyb2lkXFxzM1xcLltcXHNcXHc7LV17MTB9KGFcXGR7M30pL2ldLFtsLFtwLFwiQWNlclwiXSxbaCx5XV0sWy9hbmRyb2lkXFxzM1xcLltcXHNcXHc7LV17MTB9KGxnPyktKFswNmN2OV17Myw0fSkvaV0sW1twLFwiTEdcIl0sbCxbaCx5XV0sWy8obGcpIG5ldGNhc3RcXC50di9pXSxbcCxsLFtoLGJdXSxbLyhuZXh1c1xcc1s0NV0pL2ksL2xnW2U7XFxzXFwvLV0rKFxcdyspKi9pXSxbbCxbcCxcIkxHXCJdLFtoLGddXSxbL2FuZHJvaWQuKyhpZGVhdGFiW2EtejAtOVxcLVxcc10rKS9pXSxbbCxbcCxcIkxlbm92b1wiXSxbaCx5XV0sWy9saW51eDsuKygoam9sbGEpKTsvaV0sW3AsbCxbaCxnXV0sWy8oKHBlYmJsZSkpYXBwXFwvW1xcZFxcLl0rXFxzL2ldLFtwLGwsW2gsd11dLFsvYW5kcm9pZC4rO1xccyhnbGFzcylcXHNcXGQvaV0sW2wsW3AsXCJHb29nbGVcIl0sW2gsd11dLFsvYW5kcm9pZC4rKFxcdyspXFxzK2J1aWxkXFwvaG1cXDEvaSwvYW5kcm9pZC4rKGhtW1xcc1xcLV9dKm5vdGU/W1xcc19dKig/OlxcZFxcdyk/KVxccytidWlsZC9pLC9hbmRyb2lkLisobWlbXFxzXFwtX10qKD86b25lfG9uZVtcXHNfXXBsdXN8bm90ZSBsdGUpP1tcXHNfXSooPzpcXGRcXHcpPylcXHMrYnVpbGQvaV0sW1tsLC9fL2csXCIgXCJdLFtwLFwiWGlhb21pXCJdLFtoLGddXSxbL2FuZHJvaWQuK2EwMDAoMSlcXHMrYnVpbGQvaV0sW2wsW3AsXCJPbmVQbHVzXCJdLFtoLGddXSxbL1xccyh0YWJsZXQpWztcXC9dL2ksL1xccyhtb2JpbGUpKD86WztcXC9dfFxcc3NhZmFyaSkvaV0sW1toLFMubG93ZXJpemVdLHAsbF1dLGVuZ2luZTpbWy93aW5kb3dzLitcXHNlZGdlXFwvKFtcXHdcXC5dKykvaV0sW2QsW2MsXCJFZGdlSFRNTFwiXV0sWy8ocHJlc3RvKVxcLyhbXFx3XFwuXSspL2ksLyh3ZWJraXR8dHJpZGVudHxuZXRmcm9udHxuZXRzdXJmfGFtYXlhfGx5bnh8dzNtKVxcLyhbXFx3XFwuXSspL2ksLyhraHRtbHx0YXNtYW58bGlua3MpW1xcL1xcc11cXCg/KFtcXHdcXC5dKykvaSwvKGljYWIpW1xcL1xcc10oWzIzXVxcLltcXGRcXC5dKykvaV0sW2MsZF0sWy9ydlxcOihbXFx3XFwuXSspLiooZ2Vja28pL2ldLFtkLGNdXSxvczpbWy9taWNyb3NvZnRcXHMod2luZG93cylcXHModmlzdGF8eHApL2ldLFtjLGRdLFsvKHdpbmRvd3MpXFxzbnRcXHM2XFwuMjtcXHMoYXJtKS9pLC8od2luZG93c1xcc3Bob25lKD86XFxzb3MpKilbXFxzXFwvXT8oW1xcZFxcLlxcc10rXFx3KSovaSwvKHdpbmRvd3NcXHNtb2JpbGV8d2luZG93cylbXFxzXFwvXT8oW250Y2VcXGRcXC5cXHNdK1xcdykvaV0sW2MsW2QseC5zdHIsVC5vcy53aW5kb3dzLnZlcnNpb25dXSxbLyh3aW4oPz0zfDl8bil8d2luXFxzOXhcXHMpKFtudFxcZFxcLl0rKS9pXSxbW2MsXCJXaW5kb3dzXCJdLFtkLHguc3RyLFQub3Mud2luZG93cy52ZXJzaW9uXV0sWy9cXCgoYmIpKDEwKTsvaV0sW1tjLFwiQmxhY2tCZXJyeVwiXSxkXSxbLyhibGFja2JlcnJ5KVxcdypcXC8/KFtcXHdcXC5dKykqL2ksLyh0aXplbilbXFwvXFxzXShbXFx3XFwuXSspL2ksLyhhbmRyb2lkfHdlYm9zfHBhbG1cXHNvc3xxbnh8YmFkYXxyaW1cXHN0YWJsZXRcXHNvc3xtZWVnb3xjb250aWtpKVtcXC9cXHMtXT8oW1xcd1xcLl0rKSovaSwvbGludXg7Lisoc2FpbGZpc2gpOy9pXSxbYyxkXSxbLyhzeW1iaWFuXFxzP29zfHN5bWJvc3xzNjAoPz07KSlbXFwvXFxzLV0/KFtcXHdcXC5dKykqL2ldLFtbYyxcIlN5bWJpYW5cIl0sZF0sWy9cXCgoc2VyaWVzNDApOy9pXSxbY10sWy9tb3ppbGxhLitcXChtb2JpbGU7LitnZWNrby4rZmlyZWZveC9pXSxbW2MsXCJGaXJlZm94IE9TXCJdLGRdLFsvKG5pbnRlbmRvfHBsYXlzdGF0aW9uKVxccyhbd2lkczM0cG9ydGFibGV2dV0rKS9pLC8obWludClbXFwvXFxzXFwoXT8oXFx3KykqL2ksLyhtYWdlaWF8dmVjdG9ybGludXgpWztcXHNdL2ksLyhqb2xpfFtreGxuXT91YnVudHV8ZGViaWFufFtvcGVuXSpzdXNlfGdlbnRvb3woPz1cXHMpYXJjaHxzbGFja3dhcmV8ZmVkb3JhfG1hbmRyaXZhfGNlbnRvc3xwY2xpbnV4b3N8cmVkaGF0fHplbndhbGt8bGlucHVzKVtcXC9cXHMtXT8oPyFjaHJvbSkoW1xcd1xcLi1dKykqL2ksLyhodXJkfGxpbnV4KVxccz8oW1xcd1xcLl0rKSovaSwvKGdudSlcXHM/KFtcXHdcXC5dKykqL2ldLFtjLGRdLFsvKGNyb3MpXFxzW1xcd10rXFxzKFtcXHdcXC5dK1xcdykvaV0sW1tjLFwiQ2hyb21pdW0gT1NcIl0sZF0sWy8oc3Vub3MpXFxzPyhbXFx3XFwuXStcXGQpKi9pXSxbW2MsXCJTb2xhcmlzXCJdLGRdLFsvXFxzKFtmcmVudG9wYy1dezAsNH1ic2R8ZHJhZ29uZmx5KVxccz8oW1xcd1xcLl0rKSovaV0sW2MsZF0sWy8oaGFpa3UpXFxzKFxcdyspL2ldLFtjLGRdLFsvKGlwW2hvbmVhZF0rKSg/Oi4qb3NcXHMoW1xcd10rKSpcXHNsaWtlXFxzbWFjfDtcXHNvcGVyYSkvaV0sW1tjLFwiaU9TXCJdLFtkLC9fL2csXCIuXCJdXSxbLyhtYWNcXHNvc1xcc3gpXFxzPyhbXFx3XFxzXFwuXStcXHcpKi9pLC8obWFjaW50b3NofG1hYyg/PV9wb3dlcnBjKVxccykvaV0sW1tjLFwiTWFjIE9TXCJdLFtkLC9fL2csXCIuXCJdXSxbLygoPzpvcGVuKT9zb2xhcmlzKVtcXC9cXHMtXT8oW1xcd1xcLl0rKSovaSwvKGFpeClcXHMoKFxcZCkoPz1cXC58XFwpfFxccylbXFx3XFwuXSopKi9pLC8ocGxhblxcczl8bWluaXh8YmVvc3xvc1xcLzJ8YW1pZ2Fvc3xtb3JwaG9zfHJpc2NcXHNvc3xvcGVudm1zKS9pLC8odW5peClcXHM/KFtcXHdcXC5dKykqL2ldLFtjLGRdXX0sQz1mdW5jdGlvbih0LG4pe2lmKHRoaXMgaW5zdGFuY2VvZiBDKXt2YXIgaT10fHwoZSYmZS5uYXZpZ2F0b3ImJmUubmF2aWdhdG9yLnVzZXJBZ2VudD9lLm5hdmlnYXRvci51c2VyQWdlbnQ6cikscz1uP1MuZXh0ZW5kKE4sbik6TjtyZXR1cm4gdGhpcy5nZXRCcm93c2VyPWZ1bmN0aW9uKCl7dmFyIGU9eC5yZ3guYXBwbHkodGhpcyxzLmJyb3dzZXIpO3JldHVybiBlLm1ham9yPVMubWFqb3IoZS52ZXJzaW9uKSxlfSx0aGlzLmdldENQVT1mdW5jdGlvbigpe3JldHVybiB4LnJneC5hcHBseSh0aGlzLHMuY3B1KX0sdGhpcy5nZXREZXZpY2U9ZnVuY3Rpb24oKXtyZXR1cm4geC5yZ3guYXBwbHkodGhpcyxzLmRldmljZSl9LHRoaXMuZ2V0RW5naW5lPWZ1bmN0aW9uKCl7cmV0dXJuIHgucmd4LmFwcGx5KHRoaXMscy5lbmdpbmUpfSx0aGlzLmdldE9TPWZ1bmN0aW9uKCl7cmV0dXJuIHgucmd4LmFwcGx5KHRoaXMscy5vcyl9LHRoaXMuZ2V0UmVzdWx0PWZ1bmN0aW9uKCl7cmV0dXJue3VhOnRoaXMuZ2V0VUEoKSxicm93c2VyOnRoaXMuZ2V0QnJvd3NlcigpLGVuZ2luZTp0aGlzLmdldEVuZ2luZSgpLG9zOnRoaXMuZ2V0T1MoKSxkZXZpY2U6dGhpcy5nZXREZXZpY2UoKSxjcHU6dGhpcy5nZXRDUFUoKX19LHRoaXMuZ2V0VUE9ZnVuY3Rpb24oKXtyZXR1cm4gaX0sdGhpcy5zZXRVQT1mdW5jdGlvbihlKXtyZXR1cm4gaT1lLHRoaXN9LHRoaXN9cmV0dXJuKG5ldyBDKHQsbikpLmdldFJlc3VsdCgpfTtDLlZFUlNJT049bixDLkJST1dTRVI9e05BTUU6YyxNQUpPUjpmLFZFUlNJT046ZH0sQy5DUFU9e0FSQ0hJVEVDVFVSRTp2fSxDLkRFVklDRT17TU9ERUw6bCxWRU5ET1I6cCxUWVBFOmgsQ09OU09MRTptLE1PQklMRTpnLFNNQVJUVFY6YixUQUJMRVQ6eSxXRUFSQUJMRTp3LEVNQkVEREVEOkV9LEMuRU5HSU5FPXtOQU1FOmMsVkVSU0lPTjpkfSxDLk9TPXtOQU1FOmMsVkVSU0lPTjpkfSx0eXBlb2YgZXhwb3J0cyE9PW8/KHR5cGVvZiBtb2R1bGUhPT1vJiZtb2R1bGUuZXhwb3J0cyYmKGV4cG9ydHM9bW9kdWxlLmV4cG9ydHM9QyksZXhwb3J0cy5VQVBhcnNlcj1DKTp0eXBlb2YgZGVmaW5lPT09cyYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gQ30pOmUuVUFQYXJzZXI9Qzt2YXIgaz1lLmpRdWVyeXx8ZS5aZXB0bztpZih0eXBlb2YgayE9PW8pe3ZhciBMPW5ldyBDO2sudWE9TC5nZXRSZXN1bHQoKSxrLnVhLmdldD1mdW5jdGlvbigpe3JldHVybiBMLmdldFVBKCl9LGsudWEuc2V0PWZ1bmN0aW9uKGUpe0wuc2V0VUEoZSk7dmFyIHQ9TC5nZXRSZXN1bHQoKTtmb3IodmFyIG4gaW4gdClrLnVhW25dPXRbbl19fX0pKHR5cGVvZiB3aW5kb3c9PVwib2JqZWN0XCI/d2luZG93OnRoaXMpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9saWJzL3VhLXBhcnNlci5taW4uanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiZGVmaW5lIGNhbm5vdCBiZSB1c2VkIGluZGlyZWN0XCIpOyB9O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBwcmVsb2FkSW1nXG4gKiBAcGFyYW0gaW1nUGF0aFxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IChpbWdQYXRoKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgdmFyIGltZztcbiAgICBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGltZy5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgYXJndW1lbnRzLmNhbGxlZSk7XG4gICAgICByZXR1cm4gcmVzb2x2ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiBpbWcuc3JjID0gaW1nUGF0aDtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9pbWcvcHJlbG9hZEltZy5qcyIsIi8qKlxuICogc2V0VXBCdG5Ud2l0dGVyXG4gKiBAcGFyYW0gJGJ0blxuICogQHBhcmFtIHRleHRcbiAqIEBwYXJhbSBzaGFyZVVSTFxuICovXG5leHBvcnQgZGVmYXVsdCAoJGJ0biwgdGV4dCwgc2hhcmVVUkwpID0+IHtcbiAgdmFyIHVybDtcbiAgaWYgKHNoYXJlVVJMID09IG51bGwpIHtcbiAgICBzaGFyZVVSTCA9ICcnO1xuICB9XG4gIHVybCA9ICdodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD8nO1xuICBpZiAoc2hhcmVVUkwgPT09ICcnKSB7XG4gICAgdXJsICs9IFwidGV4dD1cIiArIChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpO1xuICB9IGVsc2Uge1xuICAgIHVybCArPSBcInVybD1cIiArIChlbmNvZGVVUklDb21wb25lbnQoc2hhcmVVUkwpKSArIFwiJnRleHQ9XCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKTtcbiAgfVxuICByZXR1cm4gJGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgd2luZG93Lm9wZW4odXJsLCAndHdpdHRlclNoYXJlJywgJ3dpZHRoPTY3MCxoZWlnaHQ9NDAwJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0blR3aXR0ZXIuanMiLCIvKipcbiAqIHNldFVwQnRuTGluZVxuICogQHBhcmFtICRidG5cbiAqIEBwYXJhbSB0ZXh0XG4gKiBAcGFyYW0gc2hhcmVVUkxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCRidG4sIHRleHQsIHNoYXJlVVJMID0gJycpID0+IHtcbiAgdmFyIHVybDtcbiAgaWYgKHNoYXJlVVJMID09IG51bGwpIHtcbiAgICBzaGFyZVVSTCA9ICcnO1xuICB9XG4gIHVybCA9ICdodHRwOi8vbGluZS5tZS9tc2cvdGV4dC8/JztcbiAgaWYgKHNoYXJlVVJMID09PSAnJykge1xuICAgIHVybCArPSBcIlwiICsgKGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSk7XG4gIH0gZWxzZSB7XG4gICAgdXJsICs9IChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpICsgXCJcXG5cIiArIChlbmNvZGVVUklDb21wb25lbnQoc2hhcmVVUkwpKTtcbiAgfVxuICByZXR1cm4gJGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgd2luZG93Lm9wZW4odXJsLCAnbGluZVNoYXJlJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkxpbmUuanMiLCIvKipcbiAqIHNldFVwQnRuRmFjZWJvb2tcbiAqIEBwYXJhbSAkYnRuXG4gKiBAcGFyYW0gc2hhcmVVUkxcbiAqIEBwYXJhbSBkZXNjcmlwdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCAoJGJ0biwgc2hhcmVVUkwsIGRlc2NyaXB0aW9uID0gJycpID0+IHtcbiAgdmFyIHVybDtcbiAgaWYgKGRlc2NyaXB0aW9uID09IG51bGwpIHtcbiAgICBkZXNjcmlwdGlvbiA9ICcnO1xuICB9XG4gIHVybCA9ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/JmRpc3BsYXk9cG9wdXAmdT0nO1xuICB1cmwgKz0gXCJcIiArIChlbmNvZGVVUklDb21wb25lbnQoc2hhcmVVUkwpKTtcbiAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgdXJsICs9IFwiJmRlc2NyaXB0aW9uPVwiICsgKGVuY29kZVVSSUNvbXBvbmVudChkZXNjcmlwdGlvbikpO1xuICB9XG4gIHJldHVybiAkYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICB3aW5kb3cub3Blbih1cmwsIFwiZmFjZWJvb2tTaGFyZVwiICsgKG5ldyBEYXRlKCkuZ2V0VGltZSgpKSwgJ3dpZHRoPTY3MCxoZWlnaHQ9NDAwJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkZhY2VCb29rLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRnVuY1xuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuYmxhbmsoKTtcbiAgICB0aGlzLmRlYnVnZ2VyKCk7XG4gICAgdGhpcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcbiAgICB0aGlzLmV4cGFuZGpRdWVyeSgpO1xuXG4gIH1cblxuICBibGFuaygpIHtcblxuICAgICQoKCk9PnskKCcuYmxhbmsnKS5hdHRyKCd0YXJnZXQnLCAnX2JsYW5rJyk7fSk7XG5cbiAgfVxuXG4gIGRlYnVnZ2VyKCkge1xuXG4gICAgLy8g44OH44OQ44OD44Kw44Oi44O844OJ5YiH5pu/XG4gICAgdmFyIFJFTEVBU0UgPSBnYi5pbi5jb25mLlJFTEVBU0U7XG5cbiAgICAvLyDnva7mj5vlr77osaHjga7jg6Hjgr3jg4Pjg4njgpLphY3liJfjgajjgZfjgabkv53mjIHjgZnjgotcbiAgICB2YXIgbWV0aG9kcyA9IFtcbiAgICAgICdsb2cnLFxuICAgICAgJ2RlYnVnJyxcbiAgICAgICdpbmZvJyxcbiAgICAgICd3YXJuJyxcbiAgICAgICdlcnJvcicsXG4gICAgICAnZGlyJyxcbiAgICAgICd0cmFjZScsXG4gICAgICAnYXNzZXJ0JyxcbiAgICAgICdkaXJ4bWwnLFxuICAgICAgJ2dyb3VwJyxcbiAgICAgICdncm91cEVuZCcsXG4gICAgICAndGltZScsXG4gICAgICAndGltZUVuZCcsXG4gICAgICAnY291bnQnLFxuICAgICAgJ3Byb2ZpbGUnLFxuICAgICAgJ3Byb2ZpbGVFbmQnXG4gICAgXTtcblxuICAgIC8vIGNvbnNvbGXjgYzkvb/jgYjjgarjgYTloLTlkIjjga/nqbrjga7jgqrjg5bjgrjjgqfjgq/jg4jjgpLoqK3lrprjgZfjgabjgYrjgY9cbiAgICBpZiggdHlwZW9mIHdpbmRvdy5jb25zb2xlID09PSBcInVuZGVmaW5lZFwiICl7XG4gICAgICB3aW5kb3cuY29uc29sZSA9IHt9O1xuICAgIH1cblxuICAgIC8vIOWQhOODoeOCveODg+ODieOCkndpbmRvd+OBuOebtOaOpei/veWKoOOBl+OBpuihjOOBj1xuICAgIGZvciggdmFyIGkgaW4gbWV0aG9kcyApe1xuICAgICAgKGZ1bmN0aW9uKCBtICl7XG5cbiAgICAgICAvLyBjb25zb2xl44Gr44GC44KL77yf44OH44OQ44OD44Kw44Oi44O844OJ44Gv5pyJ5Yq577yfY29uc29sZeOBruOCguOBruOBr+mWouaVsO+8n1xuICAgICAgIGlmKCBjb25zb2xlW21dICYmICFSRUxFQVNFICYmIHR5cGVvZiBjb25zb2xlW21dID09PSBcImZ1bmN0aW9uXCIgKXtcbiAgICAgICAgd2luZG93W21dID0gY29uc29sZVttXS5iaW5kKGNvbnNvbGUpO1xuICAgICAgIH0gZWxzZSB744CALy8gZGVidWdNb2Rl44GMZmFsc2Us44KC44GX44GP44Gv6Kmy5b2T44Oh44K944OD44OJ44GM5a2Y5Zyo44GX44Gq44GE5aC05ZCI44Gv44CB56m644Gu44Oh44K944OD44OJ44KS55So5oSP44GZ44KLXG4gICAgICAgIHdpbmRvd1ttXSA9IGZ1bmN0aW9uKCl7fTtcbiAgICAgICB9XG5cbiAgICAgIH0pKCBtZXRob2RzW2ldICk7XG4gICAgfVxuXG4gIH1cblxuICBwcmVwZW5kKHBhcmFtKSB7XG5cbiAgICAkKCdib2R5JykucHJlcGVuZChwYXJhbSk7XG5cbiAgfVxuXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgpIHtcblxuICAgIHZhciBGUFMgPSAxMDAwLzYwO1xuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgLy8gY2hyb21l44KE5pyA5paw44GuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgLy8g5Y+k44GEZmlyZWZveOeUqFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICAvLyBzYWZhcmk25Lul5YmN44CBaU9TNiBzYWZhcmnnlKhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCBGUFMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oIHRpbWVyICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTsgICAgICBcblxuICB9XG5cbiAgZXhwYW5kalF1ZXJ5KCkge1xuXG4gICAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgICB3OjAsIFxuICAgICAgaDowLCBcbiAgICAgIGFkanVzdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAnbGVmdCc6JzUwJScsXG4gICAgICAgICAgICAndG9wJzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6Jy0nICsgKHcgLyAyKSArICdweCcsXG4gICAgICAgICAgICAnbWFyZ2luLXRvcCc6Jy0nICsgKGggLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBhZGp1c3RXOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICdsZWZ0JzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tbGVmdCc6Jy0nICsgKHcgLyAyKSArICdweCdcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBhZGp1c3RIOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdyA9ICQodGhpcykuaW5uZXJXaWR0aCgpO1xuICAgICAgICAgIHZhciBoID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xuICAgICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgICdwb3NpdGlvbic6J2Fic29sdXRlJyxcbiAgICAgICAgICAgICd0b3AnOic1MCUnLFxuICAgICAgICAgICAgJ21hcmdpbi10b3AnOictJyArIChoIC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgfVxuXG4gIGNoZWNrQ3NzQmxlbmQoKSB7XG5cbiAgICBpZiAoJ0NTUycgaW4gd2luZG93ICYmICdzdXBwb3J0cycgaW4gd2luZG93LkNTUykge1xuICAgICAgaWYgKCF3aW5kb3cuQ1NTLnN1cHBvcnRzKCdtaXgtYmxlbmQtbW9kZScsICdzb2Z0LWxpZ2h0JykpIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1taXgtYmxlbmQtbW9kZScpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9nKGdiLmluLnUuaXNJRSk7XG5cbiAgICBpZiAoZ2IuaW4udS5pc0lFKSB7XG4gICAgICBcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3QtbWl4LWJsZW5kLW1vZGUnKVxuICAgICAgXG4gICAgfTtcblxuICB9XG5cbiAgbm90U2F2ZUltZygpIHtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIHBjXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGlmIChnYi5pbi51LmlzUEMpIHtcblxuICAgICAgJCgoKT0+e1xuICAgICAgICAkKFwiaW1nXCIpLm9uKFwiY29udGV4dG1lbnVcIiwoKT0+e1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vXG4gICAgLy8gIHNwIGFuZHJvaWRcbiAgICAvL1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHZhciB2ID0gZ2IuaW4udS5pc0FuZHJvaWRWZXJzaW9uKCk7XG5cbiAgICBpZiAodj09dW5kZWZpbmVkKSByZXR1cm47XG4gICAgaWYgKHY8NSkge1xuXG4gICAgICB2YXIgdGltZXI7XG4gICAgICAkKFwiaW1nXCIpLm9uKFwidG91Y2hzdGFydFwiLCgpPT57XG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIGFsZXJ0KFwi55S75YOP44Gv5L+d5a2Y44Gn44GN44G+44Gb44KTXCIpXG4gICAgICAgIH0sNTAwKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9KVxuICAgICAgJChcImltZ1wiKS5vbihcInRvdWNoZW5kXCIsKCk9PntcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSkgICAgICBcblxuICAgIH1cblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9GdW5jLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogTWFpblxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgRGlzcGxheVRvcCBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlUb3AnO1xuaW1wb3J0IERpc3BsYXlUZXh0dXJlQmcgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5VGV4dHVyZUJnJztcbmltcG9ydCBEaXNwbGF5VGV4dHVyZU1vdmllIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVNb3ZpZSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG5cbiAgICAvL3BhZ2Xjg5rjg7zjgrjliKXjga5JROOCkuWPluW+l1xuICAgIHZhciBwYWdlID0gJCgnYm9keScpLmRhdGEoJ2lkJyk7XG5cbiAgICB3aW5kb3cuY29uc29sZS5sb2coJ+ePvuWcqOOBruODmuODvOOCuElE44GvICcsIHBhZ2UpO1xuXG5cdFx0Ly9wYWdl44GuSUTjgZTjgajjgavnmbrngavjgZnjgovjgq/jg6njgrnjga7mjK/jgorliIbjgZFcbiAgICBzd2l0Y2ggKHBhZ2UpIHtcblxuICAgICAgY2FzZSAndG9wJzpcblxuICAgICAgICBuZXcgRGlzcGxheVRvcCgpO1xuXG4gICAgICAgIGJyZWFrO1xuXG5cdFx0XHRjYXNlICd0ZXh0dXJlQmcnOlxuXG5cdFx0XHRcdG5ldyBEaXNwbGF5VGV4dHVyZUJnKCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3RleHR1cmVNb3ZpZSc6XG5cblx0XHRcdFx0bmV3IERpc3BsYXlUZXh0dXJlTW92aWUoKTtcblxuXHRcdFx0XHRicmVhaztcblxuICAgIH1cblxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgXG4gIH1cblxuICBvblJlbmRlcigpIHtcblxuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKGRvY3VtZW50KS5vbigncmVhZHknLCB0aGlzLm9uUmVhZHkuYmluZCh0aGlzKSk7XG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3BhZ2UvTWFpbi5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IERpc3BsYXlcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBTY2VuZU1hbmdlciBmcm9tIFwiLi4vdmlzdWFsL1NjZW5lTWFuZ2VyXCI7XG5pbXBvcnQgU2NlbmUwMSBmcm9tIFwiLi4vdmlzdWFsL1NjZW5lMDFcIjtcbmltcG9ydCBTY2VuZTAyIGZyb20gXCIuLi92aXN1YWwvU2NlbmUwMlwiO1xuaW1wb3J0IFNjZW5lMDMgZnJvbSBcIi4uL3Zpc3VhbC9TY2VuZTAzXCI7XG4vLyBpbXBvcnQgT3ZlclNjZW5lIGZyb20gXCIuLi92aXN1YWwvb3ZlclNjZW5lXCI7XG5cbi8vIGltcG9ydCBXZWJHTGluaXQgZnJvbSAnLi9XZWJHTGluaXQuanMnO1xuXG4vLyBpbXBvcnQgQ2FudmFzIGZyb20gXCIuLi92aXN1YWwvQ2FudmFzXCI7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheVRvcCB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIOOCouODi+ODoeODvOOCt+ODp+ODs+ODq+ODvOODl+OCueOCv+ODvOODiFxuICAgIC8vIGdiLmluLnVwLmxvb3AoKTtcbiAgICBcbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIGdiLmluLnNjZW5lTWFuZ2VyID0gbmV3IFNjZW5lTWFuZ2VyKCk7XG5cbiAgICBnYi5pbi5zY2VuZUJveEEgPSBuZXcgU2NlbmUwMSgpO1xuICAgIGdiLmluLnNjZW5lQm94QiA9IG5ldyBTY2VuZTAyKCk7XG4gICAgZ2IuaW4uc2NlbmVCb3hDID0gbmV3IFNjZW5lMDMoKTtcbiAgICBnYi5pbi5zY2VuZUJveEQgPSBuZXcgU2NlbmUwMigpO1xuICAgIC8vIGdiLmluLnNjZW5lT3ZlciA9IG5ldyBPdmVyU2NlbmUoKTtcblxuICAgIGdiLmluLnNjZW5lTWFuZ2VyLmFkZFNjZW5lKGdiLmluLnNjZW5lQm94QSk7XG4gICAgZ2IuaW4uc2NlbmVNYW5nZXIuYWRkU2NlbmUoZ2IuaW4uc2NlbmVCb3hCKTtcbiAgICBnYi5pbi5zY2VuZU1hbmdlci5hZGRTY2VuZShnYi5pbi5zY2VuZUJveEMpO1xuICAgIGdiLmluLnNjZW5lTWFuZ2VyLmFkZFNjZW5lKGdiLmluLnNjZW5lQm94RCk7XG4gICAgLy8gZ2IuaW4uc2NlbmVNYW5nZXIuYWRkU2NlbmUoZ2IuaW4uc2NlbmVPdmVyKTtcblxuICAgIGdiLmluLnNjZW5lTWFuZ2VyLmRyYXcoKTtcblxuICAgIC8vIGdiLmluLmNhbnZhcyA9IG5ldyBDYW52YXMoKTtcbiAgICAvLyBnYi5pbi5jYW52YXMuaW5pdCgpO1xuXG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblx0XHQvLyB3aW5kb3cuY29uc29sZS5sb2coJ3N0YXRpY19SdW4nKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFNjZW5lTWFuZ2VyXG4gKiBEYXRlOiAxNy8wNS8yOVxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG4vLyBpbXBvcnQgT3ZlclNjZW5lIGZyb20gXCIuLi92aXN1YWwvb3ZlclNjZW5lXCI7XG5pbXBvcnQgT3ZlclNjZW5lMDIgZnJvbSBcIi4uL3Zpc3VhbC9vdmVyU2NlbmUwMlwiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lTWFuZ2VyIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG5cdFx0dGhpcy5OVU0gPSAwOyAvLyDnj77lnKjjga7jgrfjg7zjg7Pjga7nlarlj7dcblx0XHR0aGlzLnNjZW5lcyA9IFtdOyAvLyDjgrfjg7zjg7PjgpLmoLzntI3jgZnjgovphY3liJdcbiAgICB0aGlzLmZhZGVJbk91dFRpbWVyID0gLTE7IC8vXG4gICAgdGhpcy5vcCA9IDA7XG5cblx0XHR0aGlzLmNhbnZhcyA9IG51bGw7XG4gICAgdGhpcy5yZW5kZXJlciA9IG51bGw7IC8vIFJlbmRlcmVyXG4gICAgdGhpcy5yZW5kZXJlcjAyID0gbnVsbDsgLy8gUmVuZGVyZXIwMlxuXG4gICAgdGhpcy5vdmVyc2NlbmUgPSBbXTsgLy8gb3ZlcnNjZW5lXG5cblxuXG4gICAgdGhpcy5vdmVyQWxwaGEgPSAwO1xuXG4gICAgdGhpcy5hZGRTY2VuZSA9IHRoaXMuX2FkZFNjZW5lLmJpbmQodGhpcyk7XG5cblx0XHR0aGlzLm9uUmVzaXplID0gdGhpcy5fb25SZXNpemUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNoZWNrTnVtID0gdGhpcy5fY2hlY2tOdW0uYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uS2V5RG93biA9IHRoaXMuX29uS2V5RG93bi5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZmFkZUluT3V0ID0gdGhpcy5fZmFkZUluT3V0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5kcmF3ID0gdGhpcy5fZHJhdy5iaW5kKHRoaXMpO1xuXG5cblx0XHR0aGlzLmFscGhhUmVzZXQgPSB0aGlzLl9hbHBoYVJlc2V0LmJpbmQodGhpcyk7XG5cblx0XHR0aGlzLmtleW5hbWUgPSBudWxsO1xuXG5cblx0XHR0aGlzLmluaXQoKTsgLy8g5Yid5pyf5YyW5Yem55CG5b6M44CB44Kk44OZ44Oz44OI55m76YyyXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSwgZmFsc2UgKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLm9uS2V5RG93biwgdHJ1ZSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDliJ3mnJ/ljJZcbiAgICovXG4gIGluaXQoKXtcblxuICAgIHRoaXMub3ZlcnNjZW5lLnB1c2gobmV3IE92ZXJTY2VuZTAyKCkpO1xuXG5cdFx0Ly8gUmVuZGVyZXLkvZzmiJBcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2FscGhhOiB0cnVlfSk7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyApO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IobmV3IFRIUkVFLkNvbG9yKDB4MDAwMDAwLCAwLjApKTtcblx0XHR0aGlzLnJlbmRlcmVyLnNvcnRPYmplY3RzID0gZmFsc2U7XG5cdFx0dGhpcy5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XG5cdFx0dGhpcy5yZW5kZXJlci5zaGFkb3dNYXAudHlwZSA9IFRIUkVFLlBDRlNoYWRvd01hcDtcblx0XHR0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQuaWQgPSBcIm1haW5cIjtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudDtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuICAgIC8vIFJlbmRlcmVyMDLkvZzmiJBcbiAgICB0aGlzLnJlbmRlcmVyMDIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7YW50aWFsaWFzOiB0cnVlLCBhbHBoYTogdHJ1ZX0pO1xuICAgIHRoaXMucmVuZGVyZXIwMi5zZXRQaXhlbFJhdGlvKCB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyApO1xuICAgIHRoaXMucmVuZGVyZXIwMi5zZXRTaXplKCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0ICk7XG4gICAgdGhpcy5yZW5kZXJlcjAyLnNvcnRPYmplY3RzID0gZmFsc2U7XG4gICAgdGhpcy5yZW5kZXJlcjAyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLnJlbmRlcmVyMDIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTaGFkb3dNYXA7XG4gICAgdGhpcy5yZW5kZXJlcjAyLmRvbUVsZW1lbnQuaWQgPSBcInN1YlwiO1xuICAgIHRoaXMucmVuZGVyZXIwMi5zZXRDbGVhckNvbG9yKDB4MDAwMDAwLCAwLjUpO1xuICAgIHRoaXMuY2FudmFzMDIgPSB0aGlzLnJlbmRlcmVyMDIuZG9tRWxlbWVudDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzMDIpO1xuXG4gIH1cblxuXHQvKipcbiAgICog566h55CG44GX44Gf44GE44K344O844Oz44KS5qC857SN44GZ44KL6Zai5pWwXG5cdCAqIEBwYXJhbSBzY2VuZVxuXHQgKi9cblx0X2FkZFNjZW5lKHNjZW5lKSB7XG5cblx0XHR0aGlzLnNjZW5lcy5wdXNoKHNjZW5lKTtcblxuXHR9XG5cbiAgLyoqXG4gICAq44CA44Km44Kj44Oz44OJ44Km44Gu5bmF44GM5aSJ44KP44Gj44Gf44Go44GN44Gu5Yem55CGXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25SZXNpemUoKSB7XG5cbiAgXHQvLyDooajnpLrjgZfjgabjgYTjgovjgrfjg7zjg7PjgZTjgajjgavjgqvjg6Hjg6njga7jg6rjgrXjgqTjgrrjgpLotbDjgonjgZvjgotcbiAgICB0aGlzLnNjZW5lc1t0aGlzLk5VTV0uY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuc2NlbmVzW3RoaXMuTlVNXS5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgIC8vIHJlbmRlcmVy44Gv5YWo44Gm44Gu44K344O844Oz44Gn5YWx6YCaXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuXG4gICAgdGhpcy5vdmVyc2NlbmVbMF0uY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMub3ZlcnNjZW5lWzBdLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgdGhpcy5yZW5kZXJlcjAyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuXHQvKipcbiAgICog54++5Zyo44Gu44K344O844Oz55Wq5Y+344GM44CB5LiN6YGp5YiH44Gq5YCk44Gr44Gq44KJ44Gq44GE44KI44GG44Gr44OB44Kn44OD44KvXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfY2hlY2tOdW0oKXtcblxuXHRcdGlmKHRoaXMuTlVNIDwgMCkge1xuXHRcdCAgd2luZG93LmNvbnNvbGUubG9nKCdhYScpO1xuXHRcdFx0dGhpcy5OVU0gPSB0aGlzLnNjZW5lcy5sZW5ndGgtMTtcblx0XHR9XG5cblx0XHRpZih0aGlzLk5VTSA+PSB0aGlzLnNjZW5lcy5sZW5ndGgpIHtcbiAgICAgIHdpbmRvdy5jb25zb2xlLmxvZygnYmInKTtcblx0XHRcdHRoaXMuTlVNID0gMDtcblx0XHR9XG5cdFx0XG4gIH1cblxuXHQvKipcbiAgICog4oaQ4oaS44Kt44O844Gn44K344O844Oz55Wq5Y+344KS6Laz44GX5byV44GNXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfb25LZXlEb3duKCl7XG5cdFx0d2luZG93Lm9ua2V5ZG93biA9IChlKSA9PiB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHRoaXMua2V5bmFtZSA9IGUua2V5O1xuXG4gICAgICBpZih0aGlzLmtleW5hbWUgPT0gXCJBcnJvd1JpZ2h0XCIpe1xuICAgICAgICB0aGlzLmNoZWNrTnVtKCk7XG4gICAgICAgIHRoaXMuYWxwaGFSZXNldCgpO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLmtleW5hbWUgPT0gXCJBcnJvd0xlZnRcIil7XG4gICAgICAgIHRoaXMuY2hlY2tOdW0oKTtcblx0XHRcdFx0dGhpcy5hbHBoYVJlc2V0KCk7XG5cbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5rZXluYW1lID09IFwiQXJyb3dSaWdodFwiIHx8IHRoaXMua2V5bmFtZSA9PSBcIkFycm93TGVmdFwiKSB7XG5cbiAgICAgICAgdGhpcy5mYWRlSW5PdXRUaW1lciA9IDA7XG5cbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5rZXluYW1lID09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgIC8vIHdpbmRvdy5jb25zb2xlLmxvZygnVXAnKTtcblxuICAgICAgICB0aGlzLm92ZXJBbHBoYSs9MC4wNTtcbiAgICAgICAgaWYodGhpcy5vdmVyQWxwaGEgPiAxKXtcbiAgICAgICAgICB0aGlzLm92ZXJBbHBoYSA9IDEuMDtcbiAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMua2V5bmFtZSA9PSBcIkFycm93RG93blwiKSB7XG4gICAgICAgIC8vIHdpbmRvdy5jb25zb2xlLmxvZygnRG93bicpO1xuXG4gICAgICAgIHRoaXMub3ZlckFscGhhLT0wLjA1O1xuICAgICAgICBpZih0aGlzLm92ZXJBbHBoYSA8IDApe1xuICAgICAgICAgIHRoaXMub3ZlckFscGhhID0gMC4wO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgd2luZG93LmNvbnNvbGUubG9nKCd0aGlzLm92ZXJBbHBoYScsdGhpcy5vdmVyQWxwaGEpO1xuICAgICAgLy8gd2luZG93LmNvbnNvbGUubG9nKCQoXCIjc3ViXCIpKTtcbiAgICAgICQoXCIjc3ViXCIpLmNzcyh7IG9wYWNpdHk6IHRoaXMub3ZlckFscGhhIH0pO1xuXHRcdFx0d2luZG93LmNvbnNvbGUubG9nKCfnj77lnKjjga7jgrfjg7zjg7Pnlarlj7fjga8nLHRoaXMuTlVNKTtcblx0XHR9XG5cdH1cblxuICAvKipcblx0ICog44K344O844Oz44OB44Kn44Oz44K45pmC44Gu44Os44Kk44Ok44O8XG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfZmFkZUluT3V0KCl7XG4gICAgaWYodGhpcy5mYWRlSW5PdXRUaW1lciA8PSBNYXRoLlBJKjIpe1xuICAgICAgdGhpcy5mYWRlSW5PdXRUaW1lciArPSAwLjA3O1xuICAgICAgLy9zY3JlZW4uc3R5bGUub3BhY2l0eSA9IE1hdGguc2luKGZhZGVJbk91dFRpbWVyKTtcbiAgICAgIHRoaXMub3AgPSBNYXRoLnNpbih0aGlzLmZhZGVJbk91dFRpbWVyKTtcblxuICAgICAgJChcIiNmYWRlSW5PdXRcIilcbiAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IHRoaXMub3BcbiAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICB0aGlzLmZhZGVJbk91dFRpbWVyID0gLTE7XG4gICAgICB0aGlzLm9wID0gMC4wO1xuICAgIH1cblxuICAgIGlmKHRoaXMub3AgPiAwLjk1ICYmIHRoaXMub3AgPD0gMS4wKSB7XG4gICAgICBcbiAgICAgIHN3aXRjaCAodGhpcy5rZXluYW1lKSB7XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuXG4gICAgICAgICAgdGhpcy5OVU0rKztcbiAgICAgICAgICB0aGlzLmNoZWNrTnVtKCk7XG5cbiAgICAgICAgICAvLyBpZih0aGlzLnNjZW5lcy5sZW5ndGggPT0gdGhpcy5OVU0pe1xuICAgICAgICAgIC8vICAgdGhpcy5OVU09MDtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcblxuICAgICAgICAgIHRoaXMuTlVNLS07XG4gICAgICAgICAgdGhpcy5jaGVja051bSgpO1xuXG4gICAgICAgICAgLy8gaWYodGhpcy5OVU0gPDApe1xuICAgICAgICAgIC8vICAgdGhpcy5OVU0gPSB0aGlzLnNjZW5lcy5sZW5ndGgtMTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXHR9XG5cbiAgX2FscGhhUmVzZXQoKSB7XG4gICAgdGhpcy5vdmVyQWxwaGEgPSAwLjA7XG5cbiAgICAkKFwiI3N1YlwiKS5jc3Moe29wYWNpdHk6IHRoaXMub3ZlckFscGhhfSk7XG4gIH1cblxuXG5cdC8qKlxuICAgKiDmnIDntYLnmoTjgarmj4/lhpnlh6bnkIbjgajjgIHjgqLjg4vjg6Hjg7zjgrfjg6fjg7PplqLmlbDjgpLjg6/jg7Pjg5Xjg6zjg7zjg6DjgZTjgajjgavlrp/ooYxcblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9kcmF3KCkge1xuICAgIFxuICAgIC8vIHdpbmRvdy5jb25zb2xlLmxvZyh0aGlzLm92ZXJzY2VuZVswXSk7XG4gICAgXG5cdFx0dGhpcy5zY2VuZXNbdGhpcy5OVU1dLnVwZGF0ZSgpO1xuXHRcdC8vIHRoaXMub3ZlcnNjZW5lW3RoaXMuTlVNXS51cGRhdGUoKTtcblx0XHR0aGlzLm92ZXJzY2VuZVswXS51cGRhdGUoKTtcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lc1t0aGlzLk5VTV0uc2NlbmUsIHRoaXMuc2NlbmVzW3RoaXMuTlVNXS5jYW1lcmEpO1xuXHRcdHRoaXMucmVuZGVyZXIwMi5yZW5kZXIodGhpcy5vdmVyc2NlbmVbMF0uc2NlbmUsIHRoaXMub3ZlcnNjZW5lWzBdLmNhbWVyYSk7XG5cdFx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJhdy5iaW5kKHRoaXMpKTtcblxuICAgIGlmKHRoaXMuZmFkZUluT3V0VGltZXIgPj0gMClcbiAgICB7XG4gICAgICB0aGlzLmZhZGVJbk91dCgpO1xuICAgIH1cblxuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9TY2VuZU1hbmdlci5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IEVudHJ5XG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbnJlcXVpcmUoJy4uLy4uL2xpYnMvT3JiaXRDb250cm9scy5qcycpO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudHJ5IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblxuXHR9XG5cblx0LyoqXG5cdCAqIOWIneacn+WMllxuXHQgKi9cblx0aW5pdCgpe1xuXG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvQ29yZS9FbnRyeS5qcyIsIi8qKlxuICogQGF1dGhvciBxaWFvIC8gaHR0cHM6Ly9naXRodWIuY29tL3FpYW9cbiAqIEBhdXRob3IgbXJkb29iIC8gaHR0cDovL21yZG9vYi5jb21cbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXG4gKiBAYXV0aG9yIFdlc3RMYW5nbGV5IC8gaHR0cDovL2dpdGh1Yi5jb20vV2VzdExhbmdsZXlcbiAqIEBhdXRob3IgZXJpY2g2NjYgLyBodHRwOi8vZXJpY2hhaW5lcy5jb21cbiAqL1xuXG4vLyBUaGlzIHNldCBvZiBjb250cm9scyBwZXJmb3JtcyBvcmJpdGluZywgZG9sbHlpbmcgKHpvb21pbmcpLCBhbmQgcGFubmluZy5cbi8vIFVubGlrZSBUcmFja2JhbGxDb250cm9scywgaXQgbWFpbnRhaW5zIHRoZSBcInVwXCIgZGlyZWN0aW9uIG9iamVjdC51cCAoK1kgYnkgZGVmYXVsdCkuXG4vL1xuLy8gICAgT3JiaXQgLSBsZWZ0IG1vdXNlIC8gdG91Y2g6IG9uZSBmaW5nZXIgbW92ZVxuLy8gICAgWm9vbSAtIG1pZGRsZSBtb3VzZSwgb3IgbW91c2V3aGVlbCAvIHRvdWNoOiB0d28gZmluZ2VyIHNwcmVhZCBvciBzcXVpc2hcbi8vICAgIFBhbiAtIHJpZ2h0IG1vdXNlLCBvciBhcnJvdyBrZXlzIC8gdG91Y2g6IHRocmVlIGZpbnRlciBzd2lwZVxuXG5USFJFRS5PcmJpdENvbnRyb2xzID0gZnVuY3Rpb24gKCBvYmplY3QsIGRvbUVsZW1lbnQgKSB7XG5cblx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XG5cblx0dGhpcy5kb21FbGVtZW50ID0gKCBkb21FbGVtZW50ICE9PSB1bmRlZmluZWQgKSA/IGRvbUVsZW1lbnQgOiBkb2N1bWVudDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcblx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuXHQvLyBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgb2JqZWN0IG9yYml0cyBhcm91bmRcblx0dGhpcy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBkb2xseSBpbiBhbmQgb3V0ICggUGVyc3BlY3RpdmVDYW1lcmEgb25seSApXG5cdHRoaXMubWluRGlzdGFuY2UgPSAwO1xuXHR0aGlzLm1heERpc3RhbmNlID0gSW5maW5pdHk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIHpvb20gaW4gYW5kIG91dCAoIE9ydGhvZ3JhcGhpY0NhbWVyYSBvbmx5IClcblx0dGhpcy5taW5ab29tID0gMDtcblx0dGhpcy5tYXhab29tID0gSW5maW5pdHk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IHZlcnRpY2FsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxuXHR0aGlzLm1pblBvbGFyQW5nbGUgPSAwOyAvLyByYWRpYW5zXG5cdHRoaXMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEk7IC8vIHJhZGlhbnNcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgaG9yaXpvbnRhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHQvLyBJZiBzZXQsIG11c3QgYmUgYSBzdWItaW50ZXJ2YWwgb2YgdGhlIGludGVydmFsIFsgLSBNYXRoLlBJLCBNYXRoLlBJIF0uXG5cdHRoaXMubWluQXppbXV0aEFuZ2xlID0gLSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXHR0aGlzLm1heEF6aW11dGhBbmdsZSA9IEluZmluaXR5OyAvLyByYWRpYW5zXG5cblx0Ly8gU2V0IHRvIHRydWUgdG8gZW5hYmxlIGRhbXBpbmcgKGluZXJ0aWEpXG5cdC8vIElmIGRhbXBpbmcgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdHRoaXMuZW5hYmxlRGFtcGluZyA9IGZhbHNlO1xuXHR0aGlzLmRhbXBpbmdGYWN0b3IgPSAwLjI1O1xuXG5cdC8vIFRoaXMgb3B0aW9uIGFjdHVhbGx5IGVuYWJsZXMgZG9sbHlpbmcgaW4gYW5kIG91dDsgbGVmdCBhcyBcInpvb21cIiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHpvb21pbmdcblx0dGhpcy5lbmFibGVab29tID0gdHJ1ZTtcblx0dGhpcy56b29tU3BlZWQgPSAxLjA7XG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcm90YXRpbmdcblx0dGhpcy5lbmFibGVSb3RhdGUgPSB0cnVlO1xuXHR0aGlzLnJvdGF0ZVNwZWVkID0gMS4wO1xuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHBhbm5pbmdcblx0dGhpcy5lbmFibGVQYW4gPSB0cnVlO1xuXHR0aGlzLmtleVBhblNwZWVkID0gNy4wO1x0Ly8gcGl4ZWxzIG1vdmVkIHBlciBhcnJvdyBrZXkgcHVzaFxuXG5cdC8vIFNldCB0byB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgcm90YXRlIGFyb3VuZCB0aGUgdGFyZ2V0XG5cdC8vIElmIGF1dG8tcm90YXRlIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHR0aGlzLmF1dG9Sb3RhdGUgPSBmYWxzZTtcblx0dGhpcy5hdXRvUm90YXRlU3BlZWQgPSAyLjA7IC8vIDMwIHNlY29uZHMgcGVyIHJvdW5kIHdoZW4gZnBzIGlzIDYwXG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdXNlIG9mIHRoZSBrZXlzXG5cdHRoaXMuZW5hYmxlS2V5cyA9IHRydWU7XG5cblx0Ly8gVGhlIGZvdXIgYXJyb3cga2V5c1xuXHR0aGlzLmtleXMgPSB7IExFRlQ6IDM3LCBVUDogMzgsIFJJR0hUOiAzOSwgQk9UVE9NOiA0MCB9O1xuXG5cdC8vIE1vdXNlIGJ1dHRvbnNcblx0dGhpcy5tb3VzZUJ1dHRvbnMgPSB7IE9SQklUOiBUSFJFRS5NT1VTRS5MRUZULCBaT09NOiBUSFJFRS5NT1VTRS5NSURETEUsIFBBTjogVEhSRUUuTU9VU0UuUklHSFQgfTtcblxuXHQvLyBmb3IgcmVzZXRcblx0dGhpcy50YXJnZXQwID0gdGhpcy50YXJnZXQuY2xvbmUoKTtcblx0dGhpcy5wb3NpdGlvbjAgPSB0aGlzLm9iamVjdC5wb3NpdGlvbi5jbG9uZSgpO1xuXHR0aGlzLnpvb20wID0gdGhpcy5vYmplY3Quem9vbTtcblxuXHQvL1xuXHQvLyBwdWJsaWMgbWV0aG9kc1xuXHQvL1xuXG5cdHRoaXMuZ2V0UG9sYXJBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBzcGhlcmljYWwucGhpO1xuXG5cdH07XG5cblx0dGhpcy5nZXRBemltdXRoYWxBbmdsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBzcGhlcmljYWwudGhldGE7XG5cblx0fTtcblxuXHR0aGlzLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0c2NvcGUudGFyZ2V0LmNvcHkoIHNjb3BlLnRhcmdldDAgKTtcblx0XHRzY29wZS5vYmplY3QucG9zaXRpb24uY29weSggc2NvcGUucG9zaXRpb24wICk7XG5cdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBzY29wZS56b29tMDtcblxuXHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH07XG5cblx0Ly8gdGhpcyBtZXRob2QgaXMgZXhwb3NlZCwgYnV0IHBlcmhhcHMgaXQgd291bGQgYmUgYmV0dGVyIGlmIHdlIGNhbiBtYWtlIGl0IHByaXZhdGUuLi5cblx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0Ly8gc28gY2FtZXJhLnVwIGlzIHRoZSBvcmJpdCBheGlzXG5cdFx0dmFyIHF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyggb2JqZWN0LnVwLCBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApICk7XG5cdFx0dmFyIHF1YXRJbnZlcnNlID0gcXVhdC5jbG9uZSgpLmludmVyc2UoKTtcblxuXHRcdHZhciBsYXN0UG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHRcdHZhciBsYXN0UXVhdGVybmlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlICgpIHtcblxuXHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXG5cdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHQvLyByb3RhdGUgb2Zmc2V0IHRvIFwieS1heGlzLWlzLXVwXCIgc3BhY2Vcblx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXQgKTtcblxuXHRcdFx0Ly8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xuXHRcdFx0c3BoZXJpY2FsLnNldEZyb21WZWN0b3IzKCBvZmZzZXQgKTtcblxuXHRcdFx0aWYgKCBzY29wZS5hdXRvUm90YXRlICYmIHN0YXRlID09PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRcdHJvdGF0ZUxlZnQoIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzcGhlcmljYWwudGhldGEgKz0gc3BoZXJpY2FsRGVsdGEudGhldGE7XG5cdFx0XHRzcGhlcmljYWwucGhpICs9IHNwaGVyaWNhbERlbHRhLnBoaTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgdGhldGEgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnRoZXRhID0gTWF0aC5tYXgoIHNjb3BlLm1pbkF6aW11dGhBbmdsZSwgTWF0aC5taW4oIHNjb3BlLm1heEF6aW11dGhBbmdsZSwgc3BoZXJpY2FsLnRoZXRhICkgKTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdHNwaGVyaWNhbC5waGkgPSBNYXRoLm1heCggc2NvcGUubWluUG9sYXJBbmdsZSwgTWF0aC5taW4oIHNjb3BlLm1heFBvbGFyQW5nbGUsIHNwaGVyaWNhbC5waGkgKSApO1xuXG5cdFx0XHRzcGhlcmljYWwubWFrZVNhZmUoKTtcblxuXG5cdFx0XHRzcGhlcmljYWwucmFkaXVzICo9IHNjYWxlO1xuXG5cdFx0XHQvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnJhZGl1cyA9IE1hdGgubWF4KCBzY29wZS5taW5EaXN0YW5jZSwgTWF0aC5taW4oIHNjb3BlLm1heERpc3RhbmNlLCBzcGhlcmljYWwucmFkaXVzICkgKTtcblxuXHRcdFx0Ly8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXG5cdFx0XHRzY29wZS50YXJnZXQuYWRkKCBwYW5PZmZzZXQgKTtcblxuXHRcdFx0b2Zmc2V0LnNldEZyb21TcGhlcmljYWwoIHNwaGVyaWNhbCApO1xuXG5cdFx0XHQvLyByb3RhdGUgb2Zmc2V0IGJhY2sgdG8gXCJjYW1lcmEtdXAtdmVjdG9yLWlzLXVwXCIgc3BhY2Vcblx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24oIHF1YXRJbnZlcnNlICk7XG5cblx0XHRcdHBvc2l0aW9uLmNvcHkoIHNjb3BlLnRhcmdldCApLmFkZCggb2Zmc2V0ICk7XG5cblx0XHRcdHNjb3BlLm9iamVjdC5sb29rQXQoIHNjb3BlLnRhcmdldCApO1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZURhbXBpbmcgPT09IHRydWUgKSB7XG5cblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS5waGkgKj0gKCAxIC0gc2NvcGUuZGFtcGluZ0ZhY3RvciApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNjYWxlID0gMTtcblx0XHRcdHBhbk9mZnNldC5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0Ly8gdXBkYXRlIGNvbmRpdGlvbiBpczpcblx0XHRcdC8vIG1pbihjYW1lcmEgZGlzcGxhY2VtZW50LCBjYW1lcmEgcm90YXRpb24gaW4gcmFkaWFucyleMiA+IEVQU1xuXHRcdFx0Ly8gdXNpbmcgc21hbGwtYW5nbGUgYXBwcm94aW1hdGlvbiBjb3MoeC8yKSA9IDEgLSB4XjIgLyA4XG5cblx0XHRcdGlmICggem9vbUNoYW5nZWQgfHxcblx0XHRcdFx0bGFzdFBvc2l0aW9uLmRpc3RhbmNlVG9TcXVhcmVkKCBzY29wZS5vYmplY3QucG9zaXRpb24gKSA+IEVQUyB8fFxuXHRcdFx0XHQ4ICogKCAxIC0gbGFzdFF1YXRlcm5pb24uZG90KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApICkgPiBFUFMgKSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggY2hhbmdlRXZlbnQgKTtcblxuXHRcdFx0XHRsYXN0UG9zaXRpb24uY29weSggc2NvcGUub2JqZWN0LnBvc2l0aW9uICk7XG5cdFx0XHRcdGxhc3RRdWF0ZXJuaW9uLmNvcHkoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICk7XG5cdFx0XHRcdHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0dGhpcy5kaXNwb3NlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHRcdC8vc2NvcGUuZGlzcGF0Y2hFdmVudCggeyB0eXBlOiAnZGlzcG9zZScgfSApOyAvLyBzaG91bGQgdGhpcyBiZSBhZGRlZCBoZXJlP1xuXG5cdH07XG5cblx0Ly9cblx0Ly8gaW50ZXJuYWxzXG5cdC8vXG5cblx0dmFyIHNjb3BlID0gdGhpcztcblxuXHR2YXIgY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XG5cdHZhciBzdGFydEV2ZW50ID0geyB0eXBlOiAnc3RhcnQnIH07XG5cdHZhciBlbmRFdmVudCA9IHsgdHlwZTogJ2VuZCcgfTtcblxuXHR2YXIgU1RBVEUgPSB7IE5PTkUgOiAtIDEsIFJPVEFURSA6IDAsIERPTExZIDogMSwgUEFOIDogMiwgVE9VQ0hfUk9UQVRFIDogMywgVE9VQ0hfRE9MTFkgOiA0LCBUT1VDSF9QQU4gOiA1IH07XG5cblx0dmFyIHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR2YXIgRVBTID0gMC4wMDAwMDE7XG5cblx0Ly8gY3VycmVudCBwb3NpdGlvbiBpbiBzcGhlcmljYWwgY29vcmRpbmF0ZXNcblx0dmFyIHNwaGVyaWNhbCA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcblx0dmFyIHNwaGVyaWNhbERlbHRhID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXG5cdHZhciBzY2FsZSA9IDE7XG5cdHZhciBwYW5PZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHR2YXIgem9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHR2YXIgcm90YXRlU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcm90YXRlRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHJvdGF0ZURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHR2YXIgcGFuU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcGFuRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHBhbkRlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHR2YXIgZG9sbHlTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBkb2xseUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBkb2xseURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblxuXHRmdW5jdGlvbiBnZXRBdXRvUm90YXRpb25BbmdsZSgpIHtcblxuXHRcdHJldHVybiAyICogTWF0aC5QSSAvIDYwIC8gNjAgKiBzY29wZS5hdXRvUm90YXRlU3BlZWQ7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGdldFpvb21TY2FsZSgpIHtcblxuXHRcdHJldHVybiBNYXRoLnBvdyggMC45NSwgc2NvcGUuem9vbVNwZWVkICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHJvdGF0ZUxlZnQoIGFuZ2xlICkge1xuXG5cdFx0c3BoZXJpY2FsRGVsdGEudGhldGEgLT0gYW5nbGU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHJvdGF0ZVVwKCBhbmdsZSApIHtcblxuXHRcdHNwaGVyaWNhbERlbHRhLnBoaSAtPSBhbmdsZTtcblxuXHR9XG5cblx0dmFyIHBhbkxlZnQgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW5MZWZ0KCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMCApOyAvLyBnZXQgWCBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCAtIGRpc3RhbmNlICk7XG5cblx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdHZhciBwYW5VcCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhblVwKCBkaXN0YW5jZSwgb2JqZWN0TWF0cml4ICkge1xuXG5cdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4oIG9iamVjdE1hdHJpeCwgMSApOyAvLyBnZXQgWSBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHR2Lm11bHRpcGx5U2NhbGFyKCBkaXN0YW5jZSApO1xuXG5cdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHQvLyBkZWx0YVggYW5kIGRlbHRhWSBhcmUgaW4gcGl4ZWxzOyByaWdodCBhbmQgZG93biBhcmUgcG9zaXRpdmVcblx0dmFyIHBhbiA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuICggZGVsdGFYLCBkZWx0YVkgKSB7XG5cblx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRcdC8vIHBlcnNwZWN0aXZlXG5cdFx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblx0XHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblx0XHRcdFx0dmFyIHRhcmdldERpc3RhbmNlID0gb2Zmc2V0Lmxlbmd0aCgpO1xuXG5cdFx0XHRcdC8vIGhhbGYgb2YgdGhlIGZvdiBpcyBjZW50ZXIgdG8gdG9wIG9mIHNjcmVlblxuXHRcdFx0XHR0YXJnZXREaXN0YW5jZSAqPSBNYXRoLnRhbiggKCBzY29wZS5vYmplY3QuZm92IC8gMiApICogTWF0aC5QSSAvIDE4MC4wICk7XG5cblx0XHRcdFx0Ly8gd2UgYWN0dWFsbHkgZG9uJ3QgdXNlIHNjcmVlbldpZHRoLCBzaW5jZSBwZXJzcGVjdGl2ZSBjYW1lcmEgaXMgZml4ZWQgdG8gc2NyZWVuIGhlaWdodFxuXHRcdFx0XHRwYW5MZWZ0KCAyICogZGVsdGFYICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRwYW5VcCggMiAqIGRlbHRhWSAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRcdC8vIG9ydGhvZ3JhcGhpY1xuXHRcdFx0XHRwYW5MZWZ0KCBkZWx0YVggKiAoIHNjb3BlLm9iamVjdC5yaWdodCAtIHNjb3BlLm9iamVjdC5sZWZ0ICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50V2lkdGgsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0cGFuVXAoIGRlbHRhWSAqICggc2NvcGUub2JqZWN0LnRvcCAtIHNjb3BlLm9iamVjdC5ib3R0b20gKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBjYW1lcmEgbmVpdGhlciBvcnRob2dyYXBoaWMgbm9yIHBlcnNwZWN0aXZlXG5cdFx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIHBhbiBkaXNhYmxlZC4nICk7XG5cdFx0XHRcdHNjb3BlLmVuYWJsZVBhbiA9IGZhbHNlO1xuXG5cdFx0XHR9XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHRmdW5jdGlvbiBkb2xseUluKCBkb2xseVNjYWxlICkge1xuXG5cdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0c2NhbGUgLz0gZG9sbHlTY2FsZTtcblxuXHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tICogZG9sbHlTY2FsZSApICk7XG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGRvbGx5T3V0KCBkb2xseVNjYWxlICkge1xuXG5cdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0c2NhbGUgKj0gZG9sbHlTY2FsZTtcblxuXHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heCggc2NvcGUubWluWm9vbSwgTWF0aC5taW4oIHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tIC8gZG9sbHlTY2FsZSApICk7XG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nICk7XG5cdFx0XHRzY29wZS5lbmFibGVab29tID0gZmFsc2U7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8vXG5cdC8vIGV2ZW50IGNhbGxiYWNrcyAtIHVwZGF0ZSB0aGUgb2JqZWN0IHN0YXRlXG5cdC8vXG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Sb3RhdGUnICk7XG5cblx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93bkRvbGx5JyApO1xuXG5cdFx0ZG9sbHlTdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25QYW4nICk7XG5cblx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVSb3RhdGUnICk7XG5cblx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcblx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZURvbGx5JyApO1xuXG5cdFx0ZG9sbHlFbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH1cblxuXHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVBhbicgKTtcblxuXHRcdHBhbkVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuXHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VVcCggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VVcCcgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VXaGVlbCcgKTtcblxuXHRcdGlmICggZXZlbnQuZGVsdGFZIDwgMCApIHtcblxuXHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5kZWx0YVkgPiAwICkge1xuXG5cdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fVxuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZUtleURvd24oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZUtleURvd24nICk7XG5cblx0XHRzd2l0Y2ggKCBldmVudC5rZXlDb2RlICkge1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuVVA6XG5cdFx0XHRcdHBhbiggMCwgc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxuXHRcdFx0XHRwYW4oIDAsIC0gc2NvcGUua2V5UGFuU3BlZWQgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuTEVGVDpcblx0XHRcdFx0cGFuKCBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5SSUdIVDpcblx0XHRcdFx0cGFuKCAtIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydERvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0RG9sbHknICk7XG5cblx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXG5cdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0ZG9sbHlTdGFydC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRQYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRQYW4nICk7XG5cblx0XHRwYW5TdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUm90YXRlJyApO1xuXG5cdFx0cm90YXRlRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlRG9sbHknICk7XG5cblx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVggLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVg7XG5cdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VZO1xuXG5cdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KCBkeCAqIGR4ICsgZHkgKiBkeSApO1xuXG5cdFx0ZG9sbHlFbmQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9XG5cblx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVQYW4nICk7XG5cblx0XHRwYW5FbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZCggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hFbmQnICk7XG5cblx0fVxuXG5cdC8vXG5cdC8vIGV2ZW50IGhhbmRsZXJzIC0gRlNNOiBsaXN0ZW4gZm9yIGV2ZW50cyBhbmQgcmVzZXQgc3RhdGVcblx0Ly9cblxuXHRmdW5jdGlvbiBvbk1vdXNlRG93biggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuT1JCSVQgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VEb3duUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLlJPVEFURTtcblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlpPT00gKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLkRPTExZO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuUEFOICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5QQU47XG5cblx0XHR9XG5cblx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmICggc3RhdGUgPT09IFNUQVRFLlJPVEFURSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuRE9MTFkgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLlBBTiApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZU1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VVcCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0aGFuZGxlTW91c2VVcCggZXZlbnQgKTtcblxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UgKTtcblxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VXaGVlbCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlIHx8ICggc3RhdGUgIT09IFNUQVRFLk5PTkUgJiYgc3RhdGUgIT09IFNUQVRFLlJPVEFURSApICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICk7XG5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7IC8vIG5vdCBzdXJlIHdoeSB0aGVzZSBhcmUgaGVyZS4uLlxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZUtleXMgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRoYW5kbGVLZXlEb3duKCBldmVudCApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoU3RhcnQoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRjYXNlIDE6XHQvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6XHQvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ET0xMWTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoTW92ZSggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdHN3aXRjaCAoIGV2ZW50LnRvdWNoZXMubGVuZ3RoICkge1xuXG5cdFx0XHRjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ST1RBVEUgKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfRE9MTFkgKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1BBTiApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaEVuZCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0aGFuZGxlVG91Y2hFbmQoIGV2ZW50ICk7XG5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbkNvbnRleHRNZW51KCBldmVudCApIHtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0fVxuXG5cdC8vXG5cblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSApO1xuXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UgKTtcblxuXHQvLyBmb3JjZSBhbiB1cGRhdGUgYXQgc3RhcnRcblxuXHR0aGlzLnVwZGF0ZSgpO1xuXG59O1xuXG5USFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUgKTtcblRIUkVFLk9yYml0Q29udHJvbHMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVEhSRUUuT3JiaXRDb250cm9scztcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFRIUkVFLk9yYml0Q29udHJvbHMucHJvdG90eXBlLCB7XG5cblx0Y2VudGVyOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmNlbnRlciBoYXMgYmVlbiByZW5hbWVkIHRvIC50YXJnZXQnICk7XG5cdFx0XHRyZXR1cm4gdGhpcy50YXJnZXQ7XG5cblx0XHR9XG5cblx0fSxcblxuXHQvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG5cblx0bm9ab29tOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVpvb207XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlWm9vbSA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRub1JvdGF0ZToge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUm90YXRlO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVSb3RhdGUgPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0bm9QYW46IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVBhbjtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlUGFuID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdG5vS2V5czoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVLZXlzO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZUtleXMgPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0c3RhdGljTW92aW5nIDoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVEYW1waW5nO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZURhbXBpbmcgPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0ZHluYW1pY0RhbXBpbmdGYWN0b3IgOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiB0aGlzLmRhbXBpbmdGYWN0b3I7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5kYW1waW5nRmFjdG9yID0gdmFsdWU7XG5cblx0XHR9XG5cblx0fVxuXG59ICk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy9PcmJpdENvbnRyb2xzLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogb3ZlclNjZW5lMDJcbiAqIERhdGU6IDE3LzA2LzIxXG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5JztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBvdmVyU2NlbmUwMiBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudGltZXIgPSAwO1xuICAgIHRoaXMuVVBEQVRFID0gdHJ1ZTtcbiAgICB0aGlzLkVORCA9IGZhbHNlO1xuICAgIHRoaXMuc2NlbmUgPSBudWxsO1xuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcblxuICAgIHRoaXMuY3JlYXRlU2NlbmUgPSB0aGlzLl9jcmVhdGVTY2VuZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVtb3ZlID0gdGhpcy5fcmVtb3ZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5lbmRFbmFibGVkID0gdGhpcy5fZW5kRW5hYmxlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlID0gdGhpcy5fdXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjgrfjg7zjg7PjgpLkvZzmiJDjgILjgqrjg5bjgrjjgqfjgq/jg4jjgpLmoLzntI1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpOyAvL+OCt+ODvOODs+S9nOaIkFxuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNTAsIHdpbmRvdy5pbm5lcldpZHRoL3dpbmRvdy5pbm5lckhlaWdodCwgMSwgNTAwMCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDE0MDA7XG5cdFx0dGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDEwLCAwLCAwKSk7XG5cbiAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFRIUkVFLkluc3RhbmNlZEJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgdGhpcy5nZW9tZXRyeS5jb3B5KG5ldyBUSFJFRS5DaXJjbGVCdWZmZXJHZW9tZXRyeSgxLCA2KSk7XG5cblxuICAgIGxldCBwYXJ0aWNsZUNvdW50ID0gMTAwMDA7XG4gICAgbGV0IHRyYW5zbGF0ZUFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShwYXJ0aWNsZUNvdW50ICogMyk7XG4gICAgZm9yIChsZXQgaSA9IDAsIGkzID0gMCwgbCA9IHBhcnRpY2xlQ291bnQ7IGkgPCBsOyBpKyssIGkzICs9IDMpIHtcbiAgICAgIHRyYW5zbGF0ZUFycmF5W2kzICsgMF0gPSBNYXRoLnJhbmRvbSgpICogMiAtIDE7XG4gICAgICB0cmFuc2xhdGVBcnJheVtpMyArIDFdID0gTWF0aC5yYW5kb20oKSAqIDIgLSAxO1xuICAgICAgdHJhbnNsYXRlQXJyYXlbaTMgKyAyXSA9IE1hdGgucmFuZG9tKCkgKiAyIC0gMTtcbiAgICB9XG4gICAgdGhpcy5nZW9tZXRyeS5hZGRBdHRyaWJ1dGUoXCJ0cmFuc2xhdGVcIiwgbmV3IFRIUkVFLkluc3RhbmNlZEJ1ZmZlckF0dHJpYnV0ZSh0cmFuc2xhdGVBcnJheSwgMywgMSkpO1xuICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuUmF3U2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgbWFwOiB7IHZhbHVlOiBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQoXCIuLi8uLi8uLi8uLi9hc3NldHMvcmVzb3VyY2UvaW1nL2NpcmNsZS5wbmdcIikgfSxcbiAgICAgICAgdGltZTogeyB2YWx1ZTogMC4wIH1cbiAgICAgIH0sXG4gICAgICB2ZXJ0ZXhTaGFkZXI6IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsc2wvb3Zlci52ZXJ0JyksXG4gICAgICBmcmFnbWVudFNoYWRlcjogcmVxdWlyZSgnLi4vLi4vLi4vLi4vZ2xzbC9vdmVyLmZyYWcnKSxcbiAgICAgIGRlcHRoVGVzdDogdHJ1ZSxcbiAgICAgIGRlcHRoV3JpdGU6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLm1lc2ggPSBuZXcgVEhSRUUuTWVzaCh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcbiAgICB0aGlzLm1lc2guc2NhbGUuc2V0KDQwMCwgNDAwLCA0MDApO1xuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubWVzaCk7XG5cblxuICB9XG5cbiAgLyoqXG5cdCAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfcmVtb3ZlKCl7XG4gICAgd2hpbGUgKHRoaXMuc2NlbmUuY2hpbGRyZW4ubGVuZ3RoICE9IDApIHtcbiAgICAgIHRoaXMuc2NlbmUucmVtb3ZlKHRoaXMuc2NlbmUuY2hpbGRyZW5bMF0pO1xuICAgICAgaWYgKHRoaXMuc2NlbmUuY2hpbGRyZW5bMF0gPT0gVEhSRUUuTWVzaCkge1xuICAgICAgICB0aGlzLnNjZW5lLmNoaWxkcmVuWzBdLmdlb21ldHJ5LmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5zY2VuZS5jaGlsZHJlblswXS5tYXRlcmlhbC5kaXNwb3NlKCk7XG4gICAgICB9XG4gICAgfTtcblx0fVxuXG4gIC8qKlxuXHQgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2VuZEVuYWJsZWQoKXtcbiAgICB0aGlzLlVQREFURSA9IGZhbHNlO1xuXHR9XG5cblxuICAvKipcbiAgICogdXBkYXRl6Zai5pWwXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXBkYXRlKCl7XG4gICAgdGhpcy50aW1lciArPSAwLjAxO1xuICAgIC8vY29uc29sZS5sb2codGhpcy5FTkQpO1xuICAgIGlmICh0aGlzLlVQREFURSA9PSBmYWxzZSkge1xuICAgICAgLy90aGlzLnNjZW5lLnJlbW92ZSh0aGlzLnNjZW5lLmNoaWxkcmVuWzBdKTtcbiAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICBpZiAodGhpcy5zY2VuZS5jaGlsZHJlbi5sZW5ndGggPT0gMCkge1xuICAgICAgICB0aGlzLkVORCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCB0aW1lID0gcGVyZm9ybWFuY2Uubm93KCkgKiAwLjAwMDU7XG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50aW1lLnZhbHVlID0gdGltZTtcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueCA9IHRpbWUgKiAwLjI7XG4gICAgdGhpcy5tZXNoLnJvdGF0aW9uLnkgPSB0aW1lICogMC40O1xuICAgIC8vIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAxMDAqTWF0aC5zaW4odGhpcy50aW1lcik7XG4gICAgLy8gdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IDEwMCogTWF0aC5jb3ModGhpcy50aW1lcik7XG4gICAgbGV0IHJhZCA9IDYwMCArIE1hdGguc2luKHRoaXMudGltZXIpICogMjAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSBNYXRoLnNpbih0aGlzLnRpbWVyICogMC40KSAqIE1hdGguY29zKHRoaXMudGltZXIgKiAwLjMpICogcmFkO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSBNYXRoLmNvcyh0aGlzLnRpbWVyICogMC40KSAqIHJhZDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gTWF0aC5zaW4odGhpcy50aW1lciAqIDAuNCkgKiBNYXRoLnNpbih0aGlzLnRpbWVyICogMC4zKSAqIHJhZDsgLy8rTWF0aC5zaW4odGhpcy50aW1lciowLjUpKjIwMDtcbiAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMTAwICogTWF0aC5jb3ModGhpcy50aW1lciAqIDAuMDA1KSkpO1xuXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvb3ZlclNjZW5lMDIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwicHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcbiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSBtYXQ0IG1vZGVsVmlld01hdHJpeDtcXG51bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcXG51bmlmb3JtIGZsb2F0IHRpbWU7XFxuYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgdXY7XFxuYXR0cmlidXRlIHZlYzMgdHJhbnNsYXRlO1xcbnZhcnlpbmcgdmVjMiB2VXY7XFxudmFyeWluZyBmbG9hdCB2U2NhbGU7XFxudm9pZCBtYWluKCkge1xcbiAgICB2ZWM0IG12UG9zaXRpb24gPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCB0cmFuc2xhdGUsIDEuMCApO1xcbiAgICB2ZWMzIHRyVGltZSA9IHZlYzModHJhbnNsYXRlLnggKyB0aW1lLHRyYW5zbGF0ZS55ICsgdGltZSx0cmFuc2xhdGUueiArIHRpbWUpO1xcbiAgICBmbG9hdCBzY2FsZSA9ICBzaW4oIHRyVGltZS54ICogMi4xICkgKyBzaW4oIHRyVGltZS55ICogMi4xICkgKyBzaW4oIHRyVGltZS56ICogMi4xICk7XFxuICAgIHZTY2FsZSA9IHNjYWxlO1xcbiAgICAvL3NjYWxlID0gc2NhbGUgKiAxMC4wICsgMTAuMDtcXG4gICAgbXZQb3NpdGlvbi54eXogKz0gcG9zaXRpb24gKiBzY2FsZTtcXG4gICAgdlV2ID0gdXY7XFxuICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG12UG9zaXRpb247XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL292ZXIudmVydFxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInByZWNpc2lvbiBoaWdocCBmbG9hdDtcXG4jZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gc2FtcGxlcjJEIG1hcDtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnZhcnlpbmcgZmxvYXQgdlNjYWxlO1xcbi8vIEhTTCB0byBSR0IgQ29udmVydGlvbiBoZWxwZXJzXFxuXFxuXFxudmVjMyBIVUV0b1JHQihmbG9hdCBIKXtcXG4gICAgSCA9IG1vZChILDEuMCk7XFxuICAgIGZsb2F0IFIgPSBhYnMoSCAqIDYuMCAtIDMuMCkgLSAxLjA7XFxuICAgIGZsb2F0IEcgPSAyLjAgLSBhYnMoSCAqIDYuMCAtIDIuMCk7XFxuICAgIGZsb2F0IEIgPSAyLjAgLSBhYnMoSCAqIDYuMCAtIDQuMCk7XFxuICAgIHJldHVybiBjbGFtcCh2ZWMzKFIsRyxCKSwwLjAsMS4wKTtcXG59XFxudmVjMyBIU0x0b1JHQih2ZWMzIEhTTCl7XFxuICAgIHZlYzMgUkdCID0gSFVFdG9SR0IoSFNMLngpO1xcbiAgICBmbG9hdCBDID0gKDEuMCAtIGFicygyLjAgKiBIU0wueiAtIDEuMCkpICogSFNMLnk7XFxuICAgIHJldHVybiAoUkdCIC0gMC41KSAqIEMgKyBIU0wuejtcXG59XFxudm9pZCBtYWluKCkge1xcbiAgICB2ZWM0IGRpZmZ1c2VDb2xvciA9IHRleHR1cmUyRCggbWFwLCB2VXYgKTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCggZGlmZnVzZUNvbG9yLnh5eiAqIEhTTHRvUkdCKHZlYzModlNjYWxlLzUuMCwgMS4wLCAwLjUpKSwgZGlmZnVzZUNvbG9yLncgKTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gZGlmZnVzZUNvbG9yKnZlYzQoMS4wLDEuMCwxLjAsMS4wKTtcXG4gICAgaWYgKCBkaWZmdXNlQ29sb3IudyA8IDAuNSApIGRpc2NhcmQ7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL292ZXIuZnJhZ1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogU2NlbmUwMVxuICogRGF0ZTogMTcvMDUvMzFcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IEVudHJ5IGZyb20gJy4uL0NvcmUvRW50cnknO1xuXG5cbmltcG9ydCBhdWRpbyBmcm9tIFwiLi9VdGlscy9hdWRpb1wiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lMDEgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcbiAgICB0aGlzLmNhbWVyYSA9IG51bGw7XG4gICAgLy8gdGhpcy5Cb3ggPSBudWxsO1xuICAgIHRoaXMuY3ViZSA9IG51bGw7XG5cbiAgICB0aGlzLnRpbWVyID0gMDtcblxuICAgIHRoaXMuZWxWb2x1bWUgPSBudWxsO1xuICAgIHRoaXMuZWxWb2x1bWVWYWwgPSBudWxsO1xuXG4gICAgdGhpcy5ncm91cCA9IG51bGw7XG5cbiAgICB0aGlzLnJlbmRlciA9IHRoaXMuX3JlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5jcmVhdGVTY2VuZSA9IHRoaXMuX2NyZWF0ZVNjZW5lLmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLl91cGRhdGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuY3ViZV91cGRhdGUgPSB0aGlzLl9jdWJlX3VwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuXG4gICAgLy8gdGhpcy5hdWRpb0luaXQgPSBuZXcgYXVkaW8oKTtcblxuICAgIHRoaXMuYXVkaW9Jbml0KCk7XG5cbiAgfVxuXG4gIGF1ZGlvSW5pdCgpe1xuXG4gICAgbGV0IGN0eCwgYW5hbHlzZXIsIGZyZXF1ZW5jaWVzLCBnZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UsIGV4ZWN1dGU7XG5cbiAgICB3aW5kb3cuQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuICAgIGN0eCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcblxuICAgIGFuYWx5c2VyID0gY3R4LmNyZWF0ZUFuYWx5c2VyKCk7XG4gICAgZnJlcXVlbmNpZXMgPSBuZXcgVWludDhBcnJheShhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudCk7XG5cbiAgICBnZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGZyZXF1ZW5jaWVzKTtcbiAgICAgIHJldHVybiBmcmVxdWVuY2llcy5yZWR1Y2UoZnVuY3Rpb24ocHJldmlvdXMsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmV2aW91cyArIGN1cnJlbnQ7XG4gICAgICAgICAgfSkgLyBhbmFseXNlci5mcmVxdWVuY3lCaW5Db3VudDtcbiAgICB9O1xuXG4gICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe2F1ZGlvOiB0cnVlfSlcbiAgICAgICAgLnRoZW4oKHN0cmVhbSkgPT4ge1xuICAgICAgICAgIHdpbmRvdy5oYWNrRm9yTW96emlsYSA9IHN0cmVhbTtcbiAgICAgICAgICBjdHguY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2Uoc3RyZWFtKVxuICAgICAgICAgIC8vIEFuYWx5c2VyTm9kZeOBq+aOpee2mlxuICAgICAgICAgICAgICAuY29ubmVjdChhbmFseXNlcik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgd2luZG93LmNvbnNvbGUubG9nKGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICAvLyDpn7Pph4/jgpLooajnpLrjgZnjgovopoHntKBcbiAgICB0aGlzLmVsVm9sdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvbHVtZScpO1xuXG4gICAgLy/lj6/og73jgarpmZDjgorpq5jjgYTjg5Xjg6zjg7zjg6Djg6zjg7zjg4jjgafpn7Pph4/jgpLlj5blvpfjgZfjgIHooajnpLrjgpLmm7TmlrDjgZnjgotcbiAgICBleGVjdXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmVsVm9sdW1lLmlubmVySFRNTCA9IE1hdGguZmxvb3IoZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlKCkpO1xuICAgICAgdGhpcy5lbFZvbHVtZVZhbCA9IE1hdGguZmxvb3IoZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlKCkpO1xuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZXhlY3V0ZSk7XG4gICAgfS5iaW5kKHRoaXMpO1xuXG5cbiAgICBleGVjdXRlKCk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiDjgrfjg7zjg7PjgpLkvZzmiJDjgILjgqrjg5bjgrjjgqfjgq/jg4jjgpLmoLzntI1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG5cbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7IC8v44K344O844Oz5L2c5oiQXG5cbiAgICB0aGlzLmdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgY29uc3Qgc3RlcCA9MzA7XG4gICAgY29uc3QgbnVtID0gMTA7XG4gICAgZm9yIChsZXQgeCA9IDE7IHggPD0gbnVtOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSAxOyB5IDw9IG51bTsgeSsrKSB7XG4gICAgICAgIGZvciAobGV0IHogPSAxOyB6IDw9IG51bTsgeiArKykge1xuICAgICAgICAgIHRoaXMuY3ViZSA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgICAgICAgICBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAsIDEwLCAxMCksXG4gICAgICAgICAgICAgIG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKDB4ZmZmZmZmKVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5jdWJlLnBvc2l0aW9uLnNldChcbiAgICAgICAgICAgICAgKHggLSBudW0gLyAyKSAqIHN0ZXAsXG4gICAgICAgICAgICAgICh5IC0gbnVtIC8gMikgKiBzdGVwLFxuICAgICAgICAgICAgICAoeiAtIG51bSAvIDIpICogc3RlcFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICB0aGlzLmdyb3VwLmFkZCh0aGlzLmN1YmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuZ3JvdXApO1xuXG4gICAgY29uc3QgcG9pbnRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmZmZmZmKTtcbiAgICBwb2ludExpZ2h0LnBvc2l0aW9uLnNldCgyMDAsIDIwMCwgMjAwKTtcbiAgICB0aGlzLnNjZW5lLmFkZChwb2ludExpZ2h0KTtcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDcwLCB3aW5kb3cuaW5uZXJXaWR0aC93aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDIwMDtcblxuICB9XG5cblxuICBfY3ViZV91cGRhdGUod2F2ZURhdGEpXG4gIHtcblxuICAgIHRoaXMuZ3JvdXAuc2NhbGUueCA9IDEgKyB3YXZlRGF0YS81MDtcbiAgICB0aGlzLmdyb3VwLnNjYWxlLnkgPSAxICsgd2F2ZURhdGEvNTA7XG4gICAgdGhpcy5ncm91cC5zY2FsZS56ID0gMSArIHdhdmVEYXRhLzUwO1xuXG4gIH1cblxuXG4gIF9yZW5kZXIoKSB7XG4gICAgdGhpcy5ncm91cC5yb3RhdGlvbi54ICs9IDAuMDE7XG4gICAgdGhpcy5ncm91cC5yb3RhdGlvbi55ICs9IDAuMDE7XG4gICAgdGhpcy5ncm91cC5yb3RhdGlvbi56ICs9IDAuMDE7XG4gICAgdGhpcy5ncm91cC50cmF2ZXJzZShmdW5jdGlvbihvYmopIHtcbiAgICAgIGlmIChvYmogIT0gdGhpcy5ncm91cCkge1xuICAgICAgICBvYmoucm90YXRpb24ueCArPSAwLjAxO1xuICAgICAgICBvYmoucm90YXRpb24ueSArPSAwLjAxO1xuICAgICAgICBvYmoucm90YXRpb24ueiArPSAwLjAxO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXBkYXRlKCl7XG5cbiAgICB0aGlzLmN1YmVfdXBkYXRlKHRoaXMuZWxWb2x1bWVWYWwpO1xuXG4gICAgdGhpcy5yZW5kZXIoKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9TY2VuZTAxLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogYXVkaW9cbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBhdWRpbyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmVsVm9sdW1lID0gbnVsbDtcbiAgICB0aGlzLmVsVm9sdW1lVmFsID0gbnVsbDtcblxuICAgIHRoaXMuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlID0gbnVsbDtcblxuICAgIHRoaXMuZXhlY3V0ZSA9IHRoaXMuX2V4ZWN1dGUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuZ2V0VmFsID0gdGhpcy5fZ2V0VmFsLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmF1ZGlvSW5pdCgpO1xuXG4gIH1cblxuICAvKipcbiAgICog5Yid5pyf5YyWXG4gICAqL1xuICBhdWRpb0luaXQoKXtcblxuICAgIGxldCBjdHgsIGFuYWx5c2VyLCBmcmVxdWVuY2llcztcblxuICAgIHdpbmRvdy5BdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG4gICAgY3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG4gICAgYW5hbHlzZXIgPSBjdHguY3JlYXRlQW5hbHlzZXIoKTtcbiAgICBmcmVxdWVuY2llcyA9IG5ldyBVaW50OEFycmF5KGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50KTtcblxuICAgIHRoaXMuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShmcmVxdWVuY2llcyk7XG4gICAgICByZXR1cm4gZnJlcXVlbmNpZXMucmVkdWNlKGZ1bmN0aW9uKHByZXZpb3VzLCBjdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMgKyBjdXJyZW50O1xuICAgICAgICAgIH0pIC8gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgfTtcblxuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHthdWRpbzogdHJ1ZX0pXG4gICAgICAgIC50aGVuKChzdHJlYW0pID0+IHtcbiAgICAgICAgICB3aW5kb3cuaGFja0Zvck1venppbGEgPSBzdHJlYW07XG4gICAgICAgICAgY3R4LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHN0cmVhbSlcbiAgICAgICAgICAvLyBBbmFseXNlck5vZGXjgavmjqXntppcbiAgICAgICAgICAgICAgLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuXG4gICAgdGhpcy5leGVjdXRlKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2V4ZWN1dGUoKXtcbiAgICAvLyDpn7Pph4/jgpLooajnpLrjgZnjgovopoHntKBcbiAgICB0aGlzLmVsVm9sdW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvbHVtZScpO1xuXG4gICAgLy8g5Y+v6IO944Gq6ZmQ44KK6auY44GE44OV44Os44O844Og44Os44O844OI44Gn6Z+z6YeP44KS5Y+W5b6X44GX44CB6KGo56S644KS5pu05paw44GZ44KLXG4gICAgdGhpcy5lbFZvbHVtZS5pbm5lckhUTUwgPSBNYXRoLmZsb29yKHRoaXMuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlKCkpO1xuICAgIHRoaXMuZWxWb2x1bWVWYWwgPSBNYXRoLmZsb29yKHRoaXMuZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlKCkpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZXhlY3V0ZSk7XG5cbiAgICByZXR1cm4odGhpcy5lbFZvbHVtZVZhbCk7XG4gIH1cblxuICBfZ2V0VmFsKCl7XG5cbiAgICByZXR1cm4odGhpcy5lbFZvbHVtZVZhbCk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvVXRpbHMvYXVkaW8uanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBTY2VuZTAyXG4gKiBEYXRlOiAxNy8wNS8zMVxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5pbXBvcnQgYXVkaW8gZnJvbSBcIi4vVXRpbHMvYXVkaW9cIjtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZTAyIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgIHRoaXMuc3RlcCA9IDA7XG4gICAgdGhpcy5rbm90ID0gbnVsbDsgLy8g57WQ44Gz55uuXG5cbiAgICB0aGlzLmVsVm9sdW1lID0gbnVsbDtcbiAgICB0aGlzLmVsVm9sdW1lVmFsID0gbnVsbDtcblxuICAgIC8v44OI44O844Op44K555Sf5oiQ44Gn5b+F6KaB44Gq44OR44Op44Oh44O844K/XG4gICAgdGhpcy5yYWRpdXMgPSAyMDtcbiAgICB0aGlzLnR1YmUgPSAyOC4yO1xuICAgIHRoaXMucmFkaWFsU2VnbWVudHMgPSA2MDA7XG4gICAgdGhpcy50dWJ1bGFyU2VnbWVudHMgPSAxMjtcbiAgICB0aGlzLnAgPSA1O1xuICAgIHRoaXMucSA9IDQ7XG4gICAgdGhpcy5oZWlnaHRTY2FsZSA9IDQ7XG4gICAgdGhpcy5hc1BhcnRpY2xlcyA9IHRydWU7XG4gICAgdGhpcy5yb3RhdGUgPSB0cnVlO1xuXG4gICAgdGhpcy5wZXJNYXQgPSBudWxsO1xuXG4gICAgdGhpcy5jYW52YXMgPSBudWxsO1xuXG4gICAgdGhpcy50aW1lciA9IDA7XG5cbiAgICB0aGlzLmdlbmVyYXRlU3ByaXRlID0gdGhpcy5fZ2VuZXJhdGVTcHJpdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVBhcnRpY2xlU3lzdGVtID0gdGhpcy5fY3JlYXRlUGFydGljbGVTeXN0ZW0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZU1lc2ggPSB0aGlzLl9jcmVhdGVNZXNoLmJpbmQodGhpcyk7XG4gICAgXG4gICAgdGhpcy5jaXJjbGVfdXBkYXRlID0gdGhpcy5fY2lyY2xlX3VwZGF0ZS5iaW5kKHRoaXMpO1xuXG5cbiAgICB0aGlzLmNyZWF0ZVNjZW5lID0gdGhpcy5fY3JlYXRlU2NlbmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMuX3VwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuXG4gICAgdGhpcy5hdWRpb0luaXQoKTtcblxuICB9XG5cblxuICBhdWRpb0luaXQoKXtcblxuICAgIGxldCBjdHgsIGFuYWx5c2VyLCBmcmVxdWVuY2llcywgZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlLCBleGVjdXRlO1xuXG4gICAgd2luZG93LkF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbiAgICBjdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cbiAgICBhbmFseXNlciA9IGN0eC5jcmVhdGVBbmFseXNlcigpO1xuICAgIGZyZXF1ZW5jaWVzID0gbmV3IFVpbnQ4QXJyYXkoYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQpO1xuXG4gICAgZ2V0Qnl0ZUZyZXF1ZW5jeURhdGFBdmVyYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICBhbmFseXNlci5nZXRCeXRlRnJlcXVlbmN5RGF0YShmcmVxdWVuY2llcyk7XG4gICAgICByZXR1cm4gZnJlcXVlbmNpZXMucmVkdWNlKGZ1bmN0aW9uKHByZXZpb3VzLCBjdXJyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMgKyBjdXJyZW50O1xuICAgICAgICAgIH0pIC8gYW5hbHlzZXIuZnJlcXVlbmN5QmluQ291bnQ7XG4gICAgfTtcblxuICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHthdWRpbzogdHJ1ZX0pXG4gICAgICAgIC50aGVuKChzdHJlYW0pID0+IHtcbiAgICAgICAgICB3aW5kb3cuaGFja0Zvck1venppbGEgPSBzdHJlYW07XG4gICAgICAgICAgY3R4LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKHN0cmVhbSlcbiAgICAgICAgICAvLyBBbmFseXNlck5vZGXjgavmjqXntppcbiAgICAgICAgICAgICAgLmNvbm5lY3QoYW5hbHlzZXIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuXG4gICAgLy8g6Z+z6YeP44KS6KGo56S644GZ44KL6KaB57SgXG4gICAgdGhpcy5lbFZvbHVtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2x1bWUnKTtcblxuICAgIC8vIOWPr+iDveOBqumZkOOCiumrmOOBhOODleODrOODvOODoOODrOODvOODiOOBp+mfs+mHj+OCkuWPluW+l+OBl+OAgeihqOekuuOCkuabtOaWsOOBmeOCi1xuICAgIGV4ZWN1dGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZWxWb2x1bWUuaW5uZXJIVE1MID0gTWF0aC5mbG9vcihnZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UoKSk7XG4gICAgICB0aGlzLmVsVm9sdW1lVmFsID0gTWF0aC5mbG9vcihnZXRCeXRlRnJlcXVlbmN5RGF0YUF2ZXJhZ2UoKSk7XG5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShleGVjdXRlKTtcbiAgICB9LmJpbmQodGhpcyk7XG5cbiAgICAvL1xuICAgIGV4ZWN1dGUoKTtcbiAgfVxuXG4gIC8vIGZyb20gVEhSRUUuanMgZXhhbXBsZXNcbiAgX2dlbmVyYXRlU3ByaXRlKCkge1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDE2O1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IDE2O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3QgZ3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHRoaXMuY2FudmFzLndpZHRoIC8gMiwgdGhpcy5jYW52YXMuaGVpZ2h0IC8gMiwgMCwgdGhpcy5jYW52YXMud2lkdGggLyAyLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyAyLCB0aGlzLmNhbnZhcy53aWR0aCAvIDIpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsMjU1LDI1NSwxKScpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjIsICdyZ2JhKDAsMjU1LDI1NSwxKScpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjQsICdyZ2JhKDAsMCw2NCwxKScpO1xuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAncmdiYSgwLDAsMCwxKScpO1xuXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKHRoaXMuY2FudmFzKTtcbiAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICByZXR1cm4gdGV4dHVyZTtcblxuICB9XG5cbiAgX2NyZWF0ZVBhcnRpY2xlU3lzdGVtKGdlb20pIHtcbiAgICB0aGlzLnBlck1hdCA9IG5ldyBUSFJFRS5QYXJ0aWNsZUJhc2ljTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IDB4ZmZmZmZmLFxuICAgICAgc2l6ZTogMixcbiAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxuICAgICAgYmxlbmRpbmc6IFRIUkVFLkFkZGl0aXZlQmxlbmRpbmcsXG4gICAgICBtYXA6IHRoaXMuZ2VuZXJhdGVTcHJpdGUoKVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3lzdGVtID0gbmV3IFRIUkVFLlBhcnRpY2xlU3lzdGVtKGdlb20sIHRoaXMucGVyTWF0KTtcbiAgICBzeXN0ZW0uc29ydFBhcnRpY2xlcyA9IHRydWU7XG4gICAgcmV0dXJuIHN5c3RlbTtcbiAgfVxuXG4gIF9jcmVhdGVNZXNoKGdlb20pIHtcblxuICAgIC8vIGFzc2lnbiB0d28gbWF0ZXJpYWxzXG4gICAgY29uc3QgbWVzaE1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hOb3JtYWxNYXRlcmlhbCh7fSk7XG4gICAgbWVzaE1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xuXG4gICAgLy8gY3JlYXRlIGEgbXVsdGltYXRlcmlhbFxuICAgIGNvbnN0IG1lc2ggPSBUSFJFRS5TY2VuZVV0aWxzLmNyZWF0ZU11bHRpTWF0ZXJpYWxPYmplY3QoZ2VvbSwgW21lc2hNYXRlcmlhbF0pO1xuXG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cblxuICAvKipcbiAgICog44K344O844Oz44KS5L2c5oiQ44CC44Kq44OW44K444Kn44Kv44OI44KS5qC857SNXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfY3JlYXRlU2NlbmUoKXtcblxuICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTsgLy/jgrfjg7zjg7PkvZzmiJBcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDM1LCB3aW5kb3cuaW5uZXJXaWR0aC93aW5kb3cuaW5uZXJIZWlnaHQsIDEsIDUwMDApO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSAtMzA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IDQwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSA1MDtcbiAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMTAsIDAsIDApKTtcblxuICAgIGlmICh0aGlzLmtub3QpIHRoaXMuc2NlbmUucmVtb3ZlKHRoaXMua25vdCk7XG4gICAgLy8gY3JlYXRlIGEgbmV3IG9uZVxuICAgIGxldCBnZW9tID0gbmV3IFRIUkVFLlRvcnVzS25vdEdlb21ldHJ5KHRoaXMucmFkaXVzLCB0aGlzLnR1YmUsIE1hdGgucm91bmQodGhpcy5yYWRpYWxTZWdtZW50cyksIE1hdGgucm91bmQodGhpcy50dWJ1bGFyU2VnbWVudHMpLCBNYXRoLnJvdW5kKHRoaXMucCksIE1hdGgucm91bmQodGhpcy5xKSwgdGhpcy5oZWlnaHRTY2FsZSk7XG5cbiAgICBpZiAodGhpcy5hc1BhcnRpY2xlcykge1xuICAgICAgdGhpcy5rbm90ID0gdGhpcy5jcmVhdGVQYXJ0aWNsZVN5c3RlbShnZW9tKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5rbm90ID0gdGhpcy5jcmVhdGVNZXNoKGdlb20pO1xuICAgIH1cblxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMua25vdCk7XG5cblxuICB9XG5cbiAgLyoqXG4gICAq44CA55S76Z2i44Oq44K144Kk44K644Kk44OZ44Oz44OIXG4gICAqL1xuICBfb25SZXNpemUoKSB7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgLy8gdGhpcy5wbGFuZS5tZXNoLm1hdGVyaWFsLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gIH1cblxuICBfY2lyY2xlX3VwZGF0ZSh3YXZlRGF0YSlcbiAge1xuXG5cblxuICB9XG5cblxuICAvKipcbiAgICogdXBkYXRl6Zai5pWwXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXBkYXRlKCl7XG5cbiAgICAvLyB0aGlzLmNpcmNsZV91cGRhdGUoKTtcblxuICAgIGlmICh0aGlzLnJvdGF0ZSkge1xuICAgICAgdGhpcy5rbm90LnJvdGF0aW9uLnggPSB0aGlzLnN0ZXAgKz0gMC4wMDE7XG4gICAgICB0aGlzLmtub3Qucm90YXRpb24ueSA9IHRoaXMuc3RlcCArPSAwLjAwMTtcbiAgICAgIHRoaXMua25vdC5yb3RhdGlvbi56ID0gdGhpcy5zdGVwICs9IDAuMDAxO1xuXG4gICAgICB0aGlzLnRpbWVyICs9IDAuMDE7XG4gICAgICBsZXQgcmFkID0gMTAgKyBNYXRoLnNpbih0aGlzLnRpbWVyKSAqIDEwO1xuICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IE1hdGguc2luKHRoaXMudGltZXIgKiAwLjQpICogTWF0aC5jb3ModGhpcy50aW1lciAqIDAuMykgKiByYWQ7XG4gICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gTWF0aC5jb3ModGhpcy50aW1lciAqIDAuNCkgKiByYWQ7XG4gICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gTWF0aC5zaW4odGhpcy50aW1lciAqIDAuNCkgKiBNYXRoLnNpbih0aGlzLnRpbWVyICogMC4zKSAqIHJhZDtcbiAgICAgIHRoaXMuY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAxMDAgKiBNYXRoLmNvcyh0aGlzLnRpbWVyICogMC4wMDUpKSk7XG5cbiAgICB9XG5cblxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1NjZW5lMDIuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBTY2VuZTAzXG4gKiBEYXRlOiAxNy8wNi8xOVxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5pbXBvcnQgUGxhbmVTY2VuZTAzIGZyb20gJy4vUGxhbmVTY2VuZTAzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZTAzIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuXG4gICAgdGhpcy53aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcblxuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcblxuICAgIHRoaXMuY3JlYXRlU2NlbmUgPSB0aGlzLl9jcmVhdGVTY2VuZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMuX29uUmVzaXplLmJpbmQodGhpcyk7XG5cdFx0dGhpcy51cGRhdGUgPSB0aGlzLl91cGRhdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmxvYWRUZXh0dXJlID0gdGhpcy5fbG9hZFRleHR1cmUuYmluZCh0aGlzKTtcblxuXHRcdHRoaXMucGxhbmUgPSBuZXcgUGxhbmVTY2VuZTAzKCk7IC8vIHBsYW5lXG5cblx0XHR0aGlzLmluaXQoKTsgLy8g5Yid5pyf5YyW5a6f6KGMXG5cbiAgfVxuXG4gIC8qKlxuICAgKiDliJ3mnJ/ljJZcbiAgICovXG4gIGluaXQoKXtcblxuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKTtcblxuXHRcdHRoaXMubG9hZFRleHR1cmUoKTtcblxuICB9XG5cblxuXG4gIC8qKlxuICAgKuOAgOOCt+ODvOODs+S9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVNjZW5lKCl7XG5cbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7IC8v44K344O844Oz5L2c5oiQXG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxMDA7XG5cbiAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwwLDApKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOeUu+WDj+OCkuODreODvOODiVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0X2xvYWRUZXh0dXJlKCl7XG5cblx0XHR0aGlzLnBsYW5lLmxvYWRUZXh0dXJlKCcuLi8uLi8uLi8uLi9hc3NldHMvcmVzb3VyY2UvaW1nL3NoaWJ1eWEwMS5qcGcnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLnBsYW5lLm1lc2gpO1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcblx0XHRcdFx0dGhpcy5vblJlc2l6ZSgpO1xuXHRcdFx0fSwgZmFsc2UpO1xuXHRcdFx0dGhpcy5vblJlc2l6ZSgpO1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHR9KTtcblxuXHR9XG5cbiAgLyoqXG4gICAqIOabtOaWsFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3VwZGF0ZSgpIHtcblxuXHRcdHRoaXMucGxhbmUudW5pZm9ybXMudGltZS52YWx1ZSArPSAwLjA1O1xuXG5cdFx0Ly8gd2luZG93LmNvbnNvbGUubG9nKCcwMycpO1xuICB9XG5cbiAgLyoqXG4gICAq44CA55S76Z2i44Oq44K144Kk44K644Kk44OZ44Oz44OIXG4gICAqL1xuICBfb25SZXNpemUoKSB7XG5cdFx0dGhpcy5jYW52YXMud2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0O1xuXHRcdHRoaXMucGxhbmUubWVzaC5tYXRlcmlhbC51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG5cbiAgfVxuXG5cblx0c2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvU2NlbmUwMy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFBsYW5lXG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmVTY2VuZTAzIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG5cdFx0dGhpcy51bmlmb3JtcyA9IHt9O1xuXHRcdHRoaXMudGV4dHVyZSA9IG51bGw7XG5cdFx0dGhpcy5tZXNoID0gbnVsbDtcblxuXHRcdHRoaXMubG9hZFRleHR1cmUgPSB0aGlzLl9sb2FkVGV4dHVyZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY3JlYXRlTWVzaCA9IHRoaXMuX2NyZWF0ZU1lc2guYmluZCh0aGlzKTtcblx0XHQvLyB0aGlzLnJlbmRlciA9IHRoaXMuX3JlbmRlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVzaXplID0gdGhpcy5fcmVzaXplLmJpbmQodGhpcyk7XG5cbiAgfVxuXG5cdF9sb2FkVGV4dHVyZShpbWFnZSwgY2FsbGJhY2spIHtcblx0XHRjb25zdCBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xuXHRcdGxvYWRlci5sb2FkKGltYWdlLCAodGV4dHVyZSkgPT4ge1xuXHRcdFx0dGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5OZWFyZXN0RmlsdGVyO1xuICAgICAgdGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5OZWFyZXN0RmlsdGVyO1xuICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcbiAgICAgIHRoaXMubWVzaCA9IHRoaXMuY3JlYXRlTWVzaCgpO1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9KTtcblx0fVxuXG5cdF9jcmVhdGVNZXNoKCkge1xuXHRcdHRoaXMudW5pZm9ybXMgPSB7XG5cdFx0XHR0aW1lOiB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXG5cdFx0XHRyZXNvbHV0aW9uOiB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCkgfSxcblx0XHRcdG1vdXNlOiB7IHR5cGU6IFwidjJcIiwgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKCkgfVxuXHRcdH07XG5cdFx0cmV0dXJuIG5ldyBUSFJFRS5NZXNoKFxuXHRcdFx0bmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMiwgMiksXG5cdFx0XHRuZXcgVEhSRUUuUmF3U2hhZGVyTWF0ZXJpYWwoe1xuXHRcdFx0XHR1bmlmb3JtczogdGhpcy51bmlmb3Jtcyxcblx0XHRcdFx0dmVydGV4U2hhZGVyOiByZXF1aXJlKCcuLi8uLi8uLi8uLi9nbHNsL3NjZW5lMDMudmVydCcpLFxuXHRcdFx0XHRmcmFnbWVudFNoYWRlcjogcmVxdWlyZSgnLi4vLi4vLi4vLi4vZ2xzbC9zY2VuZTAzLmZyYWcnKSxcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0Ly8gX3JlbmRlcih0aW1lKSB7XG5cdC8vXG5cdFx0Ly8gaWYgKHRoaXMuc3RvcCkgcmV0dXJuO1xuXHRcdC8vIHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSArPSB0aW1lIC8gdGhpcy5pbnRlcnZhbDtcblx0XHQvLyBpZiAodGhpcy51bmlmb3Jtcy50aW1lLnZhbHVlID4gMSkge1xuXHRcdC8vIFx0dGhpcy51bmlmb3Jtcy50aW1lLnZhbHVlID0gMDtcblx0XHQvLyBcdHRoaXMucHJldl9udW0gPSB0aGlzLm5leHRfbnVtO1xuXHRcdC8vIFx0dGhpcy51bmlmb3Jtcy50ZXhQcmV2LnZhbHVlID0gdGhpcy50ZXh0dXJlc1t0aGlzLm5leHRfbnVtXTtcblx0XHQvLyBcdHdoaWxlICh0aGlzLm5leHRfbnVtID09IHRoaXMucHJldl9udW0pIHtcblx0XHQvLyBcdFx0dGhpcy5uZXh0X251bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMudGV4dHVyZXMubGVuZ3RoKTtcblx0XHQvLyBcdH1cblx0XHQvLyBcdHRoaXMudW5pZm9ybXMudGV4TmV4dC52YWx1ZSA9IHRoaXMudGV4dHVyZXNbdGhpcy5uZXh0X251bV07XG5cdFx0Ly8gfVxuICAvLyB9XG5cblx0LyoqXG5cdCAqXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfcmVzaXplKCl7XG5cdFx0dGhpcy51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnNldChkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLCBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCk7XG5cdH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1BsYW5lU2NlbmUwMy5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMyIHV2O1xcblxcbnZhcnlpbmcgdmVjMiB2VXY7XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG4gICAgdlV2ID0gdXY7XFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNChwb3NpdGlvbiwgMS4wKTtcXG59XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9zcmMvYXNzZXRzL2dsc2wvc2NlbmUwMy52ZXJ0XG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLyog57K+5bqm5L+u6aO+5a2Q44Gu5a6j6KiAICovXFxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG4vKiBXZWJHTOOBp+WPl+OBkea4oeOBleOCjOOBn+WkieaVsCAqL1xcbnVuaWZvcm0gZmxvYXQgdGltZTsgLy8gdGltZSAoMXNlY29uZCA9PSAxLjApXFxudW5pZm9ybSB2ZWMyICBtb3VzZTsgLy8gbW91c2UgKC0xLjAgfiAxLjApXFxudW5pZm9ybSB2ZWMyICByZXNvbHV0aW9uOyAvLyDop6Plg4/luqYgKDUxMi4wLCA1MTIuMClcXG5cXG5jb25zdCBmbG9hdCBQSSA9IDMuMTQxNTkyNjU7XFxuXFxudmVjMiBzcXVhcmVGcmFtZV8xXzAodmVjMiBzY3JlZW5TaXplKSB7XFxuICB2ZWMyIHBvc2l0aW9uID0gMi4wICogKGdsX0ZyYWdDb29yZC54eSAvIHNjcmVlblNpemUueHkpIC0gMS4wO1xcbiAgcG9zaXRpb24ueCAqPSBzY3JlZW5TaXplLnggLyBzY3JlZW5TaXplLnk7XFxuICByZXR1cm4gcG9zaXRpb247XFxufVxcblxcbnZlYzIgc3F1YXJlRnJhbWVfMV8wKHZlYzIgc2NyZWVuU2l6ZSwgdmVjMiBjb29yZCkge1xcbiAgdmVjMiBwb3NpdGlvbiA9IDIuMCAqIChjb29yZC54eSAvIHNjcmVlblNpemUueHkpIC0gMS4wO1xcbiAgcG9zaXRpb24ueCAqPSBzY3JlZW5TaXplLnggLyBzY3JlZW5TaXplLnk7XFxuICByZXR1cm4gcG9zaXRpb247XFxufVxcblxcblxcblxcbm1hdDMgY2FsY0xvb2tBdE1hdHJpeF81XzEodmVjMyBvcmlnaW4sIHZlYzMgdGFyZ2V0LCBmbG9hdCByb2xsKSB7XFxuICB2ZWMzIHJyID0gdmVjMyhzaW4ocm9sbCksIGNvcyhyb2xsKSwgMC4wKTtcXG4gIHZlYzMgd3cgPSBub3JtYWxpemUodGFyZ2V0IC0gb3JpZ2luKTtcXG4gIHZlYzMgdXUgPSBub3JtYWxpemUoY3Jvc3Mod3csIHJyKSk7XFxuICB2ZWMzIHZ2ID0gbm9ybWFsaXplKGNyb3NzKHV1LCB3dykpO1xcblxcbiAgcmV0dXJuIG1hdDModXUsIHZ2LCB3dyk7XFxufVxcblxcblxcblxcblxcbnZlYzMgZ2V0UmF5XzJfMihtYXQzIGNhbU1hdCwgdmVjMiBzY3JlZW5Qb3MsIGZsb2F0IGxlbnNMZW5ndGgpIHtcXG4gIHJldHVybiBub3JtYWxpemUoY2FtTWF0ICogdmVjMyhzY3JlZW5Qb3MsIGxlbnNMZW5ndGgpKTtcXG59XFxuXFxudmVjMyBnZXRSYXlfMl8yKHZlYzMgb3JpZ2luLCB2ZWMzIHRhcmdldCwgdmVjMiBzY3JlZW5Qb3MsIGZsb2F0IGxlbnNMZW5ndGgpIHtcXG4gIG1hdDMgY2FtTWF0ID0gY2FsY0xvb2tBdE1hdHJpeF81XzEob3JpZ2luLCB0YXJnZXQsIDAuMCk7XFxuICByZXR1cm4gZ2V0UmF5XzJfMihjYW1NYXQsIHNjcmVlblBvcywgbGVuc0xlbmd0aCk7XFxufVxcblxcblxcblxcbnZlYzIgbWFwKHZlYzMgcCk7XFxuLy8gT3JpZ2luYWxseSBzb3VyY2VkIGZyb20gaHR0cHM6Ly93d3cuc2hhZGVydG95LmNvbS92aWV3L2xkZlNXc1xcbi8vIFRoYW5rIHlvdSBJw7FpZ28gOilcXG5cXG52ZWMyIGNhbGNSYXlJbnRlcnNlY3Rpb25fM18zKHZlYzMgcmF5T3JpZ2luLCB2ZWMzIHJheURpciwgZmxvYXQgbWF4ZCwgZmxvYXQgcHJlY2lzLCBmbG9hdCByZWR1Y3Rpb24pIHtcXG4gIGZsb2F0IGxhdGVzdCA9IHByZWNpcyAqIDIuMDtcXG4gIGZsb2F0IGRpc3QgICA9ICswLjA7XFxuICBmbG9hdCB0eXBlICAgPSAtMS4wO1xcbiAgdmVjMiAgcmVzICAgID0gdmVjMigtMS4wLCAtMS4wKTtcXG5cXG4gIGZvciAoaW50IGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcXG4gICAgaWYgKGxhdGVzdCA8IHByZWNpcyB8fCBkaXN0ID4gbWF4ZCkgYnJlYWs7XFxuXFxuICAgIHZlYzIgcmVzdWx0ID0gbWFwKHJheU9yaWdpbiArIHJheURpciAqIGRpc3QpO1xcblxcbiAgICBsYXRlc3QgPSByZXN1bHQueDtcXG4gICAgdHlwZSAgID0gcmVzdWx0Lnk7XFxuICAgIGRpc3QgICs9IGxhdGVzdCAqIHJlZHVjdGlvbjtcXG4gIH1cXG5cXG4gIGlmIChkaXN0IDwgbWF4ZCkge1xcbiAgICByZXMgPSB2ZWMyKGRpc3QsIHR5cGUpO1xcbiAgfVxcblxcbiAgcmV0dXJuIHJlcztcXG59XFxuXFxudmVjMiBjYWxjUmF5SW50ZXJzZWN0aW9uXzNfMyh2ZWMzIHJheU9yaWdpbiwgdmVjMyByYXlEaXIpIHtcXG4gIHJldHVybiBjYWxjUmF5SW50ZXJzZWN0aW9uXzNfMyhyYXlPcmlnaW4sIHJheURpciwgMjAuMCwgMC4wMDEsIDEuMCk7XFxufVxcblxcblxcblxcbi8vIE9yaWdpbmFsbHkgc291cmNlZCBmcm9tIGh0dHBzOi8vd3d3LnNoYWRlcnRveS5jb20vdmlldy9sZGZTV3NcXG4vLyBUaGFuayB5b3UgScOxaWdvIDopXFxuXFxudmVjMyBjYWxjTm9ybWFsXzRfNCh2ZWMzIHBvcywgZmxvYXQgZXBzKSB7XFxuICBjb25zdCB2ZWMzIHYxID0gdmVjMyggMS4wLC0xLjAsLTEuMCk7XFxuICBjb25zdCB2ZWMzIHYyID0gdmVjMygtMS4wLC0xLjAsIDEuMCk7XFxuICBjb25zdCB2ZWMzIHYzID0gdmVjMygtMS4wLCAxLjAsLTEuMCk7XFxuICBjb25zdCB2ZWMzIHY0ID0gdmVjMyggMS4wLCAxLjAsIDEuMCk7XFxuXFxuICByZXR1cm4gbm9ybWFsaXplKCB2MSAqIG1hcCggcG9zICsgdjEqZXBzICkueCArXFxuICAgICAgICAgICAgICAgICAgICB2MiAqIG1hcCggcG9zICsgdjIqZXBzICkueCArXFxuICAgICAgICAgICAgICAgICAgICB2MyAqIG1hcCggcG9zICsgdjMqZXBzICkueCArXFxuICAgICAgICAgICAgICAgICAgICB2NCAqIG1hcCggcG9zICsgdjQqZXBzICkueCApO1xcbn1cXG5cXG52ZWMzIGNhbGNOb3JtYWxfNF80KHZlYzMgcG9zKSB7XFxuICByZXR1cm4gY2FsY05vcm1hbF80XzQocG9zLCAwLjAwMik7XFxufVxcblxcblxcblxcbiNkZWZpbmUgTlVNIDEuXFxuZmxvYXQgdCgpIHtcXG4gICAgcmV0dXJuIHRpbWUgKiAzLjtcXG59XFxuXFxuZmxvYXQgcmFuZG9tKGluIHZlYzIgcCkge1xcbiAgICByZXR1cm4gZnJhY3Qoc2luKGRvdChwLnh5LCB2ZWMyKDEyLjM0LCA1Ni43OCkpKSAqIDkwLjApO1xcbn1cXG5cXG5mbG9hdCBzZEdyb3VuZChpbiB2ZWMzIHApIHtcXG4gICAgcmV0dXJuIHAueTtcXG59XFxuXFxuZmxvYXQgc2RCdWlsZGluZ3MoaW4gdmVjMyBwKSB7XFxuICAgIHZlYzMgcHAgPSBtb2QocCwgMS4pIC0gLjU7XFxuICAgIGZsb2F0IGhlaWdodCA9IHJhbmRvbShwLnh6IC0gbW9kKHAueHosIDEuKSkgKjMuO1xcbiAgICBmbG9hdCBuZWFybmVzcyA9IG1heChmbG9vcihwLnopIC0gdCgpIC0gMi4sIDAuMyk7XFxuICAgIG5lYXJuZXNzID0gcG93KG5lYXJuZXNzLCAuMyk7XFxuICAgIHBwLnkgPSBwLnkgKiAwLjQgKiBuZWFybmVzcyAtIGhlaWdodCAqIDAuMTtcXG4gICAgcmV0dXJuIGxlbmd0aChtYXgoYWJzKHBwKSAtIC4yNSwgLjApKTtcXG59XFxuXFxudmVjMiBtYXAodmVjMyBwKSB7XFxuICAgIHJldHVybiB2ZWMyKG1pbihzZEdyb3VuZChwKSwgc2RCdWlsZGluZ3MocCkpLCAwLik7XFxufVxcblxcbi8vXFxudm9pZCBtYWluICh2b2lkKSB7XFxuICAgIHZlYzMgcmF5T3JpZ2luID0gdmVjMygwLCAxLjUsIDApO1xcbiAgICByYXlPcmlnaW4ueCArPSAoc2luKHQoKSAqIC43KSArIGNvcyh0KCkgKiAuNjcpKSAqIDAuMDc7XFxuICAgIHJheU9yaWdpbi55ICs9IChzaW4odCgpICogLjgxKSArIGNvcyh0KCkgKiAuOCkpICogMC4yO1xcbiAgICB2ZWMzIHJheVRhcmdldCA9IHZlYzMoMCwgMSwgOTk5OTk5OS4pO1xcbiAgICByYXlPcmlnaW4ueiA9IHQoKTtcXG4gICAgdmVjMyByYXlEaXJlY3Rpb24gPSBnZXRSYXlfMl8yKHJheU9yaWdpbiwgcmF5VGFyZ2V0LCBzcXVhcmVGcmFtZV8xXzAocmVzb2x1dGlvbi54eSksIDIuKTtcXG5cXG4gICAgdmVjMyBsaWdodERpciA9IG5vcm1hbGl6ZSh2ZWMzKDAuMywgMy4sIDIuKSk7XFxuICAgIHZlYzMgbGlnaHQgPSB2ZWMzKC40KTtcXG4gICAgdmVjMyBhbWJpZW50ID0gdmVjMyguNCwgLjMsIC41KTtcXG5cXG4gICAgdmVjMiBjb2xsaXNpb24gPSBjYWxjUmF5SW50ZXJzZWN0aW9uXzNfMyhyYXlPcmlnaW4sIHJheURpcmVjdGlvbik7XFxuICAgIGlmIChjb2xsaXNpb24ueCA+IDAuKSB7XFxuICAgICAgICB2ZWMzIHBvcyA9IHJheU9yaWdpbiArIHJheURpcmVjdGlvbiAqIGNvbGxpc2lvbi54O1xcbiAgICAgICAgdmVjMyBub3JtYWwgPSBjYWxjTm9ybWFsXzRfNChwb3MpO1xcbiAgICAgICAgZmxvYXQgZGlmZiA9IGNsYW1wKGRvdChsaWdodERpciwgbm9ybWFsKSwgMC4xLCAxLjApO1xcbiAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChkaWZmICogbGlnaHQgKyBhbWJpZW50ICogMS4vcG9zLnksIDEuMCk7XFxuICAgIH1cXG4gICAgZWxzZSB7XFxuICAgICAgICBmbG9hdCBjID0gZ2xfRnJhZ0Nvb3JkLnkgLyByZXNvbHV0aW9uLnk7XFxuICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGMgKiAwLjIsIDAsIGMgKiAwLjMsIDEpO1xcbiAgICB9XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL3NjZW5lMDMuZnJhZ1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRGlzcGxheVxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IFRleHR1cmVCZyBmcm9tIFwiLi4vdmlzdWFsL1RleHR1cmVCZ1wiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlUb3Age1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICAvLyBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBnYi5pbi50ZXh0dXJlQmcgPSBuZXcgVGV4dHVyZUJnKCk7XG5cbiAgICBnYi5pbi50ZXh0dXJlQmcuaW5pdCgpO1xuXG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblx0XHQvLyB3aW5kb3cuY29uc29sZS5sb2coJ3N0YXRpY19SdW4nKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVCZy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFRleHR1cmVCZ1xuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IEVudHJ5IGZyb20gJy4uL0NvcmUvRW50cnknO1xuaW1wb3J0IFBsYW5lIGZyb20gJy4vUGxhbmUnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVCZyBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYmdsLW91dHB1dCcpO1xuXG4gICAgdGhpcy53aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcblxuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcblxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhID0gdGhpcy5fY3JlYXRlQ2FtZXJhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlciA9IHRoaXMuX2NyZWF0ZVJlbmRlcmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTY2VuZSA9IHRoaXMuX2NyZWF0ZVNjZW5lLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5fb25SZXNpemUuYmluZCh0aGlzKTtcblx0XHR0aGlzLlVwZGF0ZSA9IHRoaXMuX1VwZGF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMubG9hZFRleHR1cmUgPSB0aGlzLl9sb2FkVGV4dHVyZS5iaW5kKHRoaXMpO1xuXG5cdFx0dGhpcy5wbGFuZSA9IG5ldyBQbGFuZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICog5Yid5pyf5YyWXG4gICAqL1xuICBpbml0KCl7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpO1xuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKCk7XG5cblx0XHR0aGlzLlVwZGF0ZSgpO1xuXG5cdFx0dGhpcy5sb2FkVGV4dHVyZSgpO1xuICB9XG5cblxuICAvKipcbiAgICog44Kr44Oh44Op5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlQ2FtZXJhKCl7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxMDA7XG5cbiAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwwLDApKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvOS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVJlbmRlcmVyKCl7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgYWxwaGEgICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICBhbnRpYWxpYXMgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIHN0ZW5jaWwgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgZGVwdGggICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIHByZW11bHRpcGxpZWRBbHBoYSA6IGZhbHNlLFxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhc1xuXHRcdH0pO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmLCAwLjApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDjgrfjg7zjg7PkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICog55S75YOP44KS44Ot44O844OJXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfbG9hZFRleHR1cmUoKXtcblxuXHRcdHRoaXMucGxhbmUubG9hZFRleHR1cmUoJy4uLy4uLy4uLy4uL2Fzc2V0cy9yZXNvdXJjZS9pbWcvc2hpYnV5YTAxLmpwZycsICgpID0+IHtcblx0XHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMucGxhbmUubWVzaCk7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9uUmVzaXplKCk7XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHR0aGlzLm9uUmVzaXplKCk7XG5cdFx0XHR0aGlzLlVwZGF0ZSgpO1xuXHRcdH0pO1xuXG5cdH1cblxuICAvKipcbiAgICog5pu05pawXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfVXBkYXRlKCkge1xuXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG4gICAgICB0aGlzLlVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDnlLvpnaLjg6rjgrXjgqTjgrrjgqTjg5njg7Pjg4hcbiAgICovXG4gIF9vblJlc2l6ZSgpIHtcblx0XHR0aGlzLmNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cdFx0dGhpcy5wbGFuZS5tZXNoLm1hdGVyaWFsLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcblxuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuXG5cdHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1RleHR1cmVCZy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFBsYW5lXG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmUgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cblx0XHR0aGlzLnVuaWZvcm1zID0ge307XG5cdFx0dGhpcy50ZXh0dXJlID0gbnVsbDtcblx0XHR0aGlzLm1lc2ggPSBudWxsO1xuXG5cdFx0dGhpcy5sb2FkVGV4dHVyZSA9IHRoaXMuX2xvYWRUZXh0dXJlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jcmVhdGVNZXNoID0gdGhpcy5fY3JlYXRlTWVzaC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVuZGVyID0gdGhpcy5fcmVuZGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZXNpemUgPSB0aGlzLl9yZXNpemUuYmluZCh0aGlzKTtcblxuICB9XG5cblx0X2xvYWRUZXh0dXJlKGltYWdlLCBjYWxsYmFjaykge1xuXHRcdGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG5cdFx0bG9hZGVyLmxvYWQoaW1hZ2UsICh0ZXh0dXJlKSA9PiB7XG5cdFx0XHR0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XG4gICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XG4gICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xuICAgICAgdGhpcy5tZXNoID0gdGhpcy5jcmVhdGVNZXNoKCk7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH0pO1xuXHR9XG5cblx0X2NyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy51bmlmb3JtcyA9IHtcblx0XHRcdHJlc29sdXRpb246IHtcblx0XHRcdFx0dHlwZTogJ3YyJyxcblx0XHRcdFx0dmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KSxcblx0XHRcdH0sXG5cdFx0XHRpbWFnZVJlc29sdXRpb246IHtcblx0XHRcdFx0dHlwZTogJ3YyJyxcblx0XHRcdFx0dmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKDIwNDgsIDEzNTYpLFxuXHRcdFx0fSxcblx0XHRcdHRleHR1cmU6IHtcblx0XHRcdFx0dHlwZTogJ3QnLFxuXHRcdFx0XHR2YWx1ZTogdGhpcy50ZXh0dXJlLFxuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIG5ldyBUSFJFRS5NZXNoKFxuXHRcdFx0bmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMiwgMiksXG5cdFx0XHRuZXcgVEhSRUUuUmF3U2hhZGVyTWF0ZXJpYWwoe1xuXHRcdFx0XHR1bmlmb3JtczogdGhpcy51bmlmb3Jtcyxcblx0XHRcdFx0dmVydGV4U2hhZGVyOiByZXF1aXJlKCcuLi8uLi8uLi8uLi9nbHNsL2NvdmVyLnZlcnQnKSxcblx0XHRcdFx0ZnJhZ21lbnRTaGFkZXI6IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsc2wvY292ZXIuZnJhZycpLFxuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblxuICAvKipcbiAgICog44Os44Oz44OA44Op44O8XG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfcmVuZGVyKHRpbWUpIHtcblxuXHRcdGlmICh0aGlzLnN0b3ApIHJldHVybjtcblx0XHR0aGlzLnVuaWZvcm1zLnRpbWUudmFsdWUgKz0gdGltZSAvIHRoaXMuaW50ZXJ2YWw7XG5cdFx0aWYgKHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSA+IDEpIHtcblx0XHRcdHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSA9IDA7XG5cdFx0XHR0aGlzLnByZXZfbnVtID0gdGhpcy5uZXh0X251bTtcblx0XHRcdHRoaXMudW5pZm9ybXMudGV4UHJldi52YWx1ZSA9IHRoaXMudGV4dHVyZXNbdGhpcy5uZXh0X251bV07XG5cdFx0XHR3aGlsZSAodGhpcy5uZXh0X251bSA9PSB0aGlzLnByZXZfbnVtKSB7XG5cdFx0XHRcdHRoaXMubmV4dF9udW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRleHR1cmVzLmxlbmd0aCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnVuaWZvcm1zLnRleE5leHQudmFsdWUgPSB0aGlzLnRleHR1cmVzW3RoaXMubmV4dF9udW1dO1xuXHRcdH1cbiAgfVxuXG5cdF9yZXNpemUoKXtcblx0XHR0aGlzLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvUGxhbmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiB1djtcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuICAgIHZVdiA9IHV2O1xcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocG9zaXRpb24sIDEuMCk7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL2NvdmVyLnZlcnRcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcXG51bmlmb3JtIHZlYzIgaW1hZ2VSZXNvbHV0aW9uO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4odm9pZCkge1xcbiAgICB2ZWMyIHJhdGlvID0gdmVjMihcXG4gICAgICAgIG1pbigocmVzb2x1dGlvbi54IC8gcmVzb2x1dGlvbi55KSAvIChpbWFnZVJlc29sdXRpb24ueCAvIGltYWdlUmVzb2x1dGlvbi55KSwgMS4wKSxcXG4gICAgICAgIG1pbigocmVzb2x1dGlvbi55IC8gcmVzb2x1dGlvbi54KSAvIChpbWFnZVJlc29sdXRpb24ueSAvIGltYWdlUmVzb2x1dGlvbi54KSwgMS4wKVxcbiAgICApO1xcblxcbiAgICB2ZWMyIHV2ID0gdmVjMihcXG4gICAgICAgIHZVdi54ICogcmF0aW8ueCArICgxLjAgLSByYXRpby54KSAqIDAuNSxcXG4gICAgICAgIHZVdi55ICogcmF0aW8ueSArICgxLjAgLSByYXRpby55KSAqIDAuNVxcbiAgICApO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodGV4dHVyZSwgdXYpO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3NyYy9hc3NldHMvZ2xzbC9jb3Zlci5mcmFnXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBEaXNwbGF5XG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG4vLyBpbXBvcnQgV2ViR0xpbml0IGZyb20gJy4vV2ViR0xpbml0LmpzJztcblxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi4vdmlzdWFsL0NhbnZhc1wiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlUb3Age1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICAvLyBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBnYi5pbi5jYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgICBnYi5pbi5jYW52YXMuaW5pdCgpO1xuXG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblx0XHQvLyB3aW5kb3cuY29uc29sZS5sb2coJ3N0YXRpY19SdW4nKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVNb3ZpZS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENhbnZhc1xuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IEVudHJ5IGZyb20gJy4uL0NvcmUvRW50cnknO1xuLy8gaW1wb3J0IFRpdGxlT2JqZWN0IGZyb20gXCIuL1RpdGxlT2JqZWN0XCI7XG4vLyBpbXBvcnQgQ2FtZXJhIGZyb20gJy4vVXRpbHMvQ2FtZXJhJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnVuaWZvcm1zID0ge1xuICAgICAgdV90aW1lOiB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXG4gICAgICB1X3Jlc29sdXRpb246IHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoKSB9LFxuICAgICAgdV9tb3VzZTogeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMigpIH1cbiAgICB9O1xuXG4gICAgLy8gdGhpcy50aXRsZU9iamVjdCA9IG5ldyBUaXRsZU9iamVjdCgpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2ViZ2wtb3V0cHV0Jyk7XG5cbiAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgLy8gdGhpcy5vdXRwdXQgPSBvcHRzLm91dHB1dCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcblx0XHR0aGlzLmN1YmUgPSBudWxsO1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEgPSB0aGlzLl9jcmVhdGVDYW1lcmEuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyID0gdGhpcy5fY3JlYXRlUmVuZGVyZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVNjZW5lID0gdGhpcy5fY3JlYXRlU2NlbmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZU9iamVjdCA9IHRoaXMuX2NyZWF0ZU9iamVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3JiaXRDb250cm9scyA9IHRoaXMuX29yYml0Q29udHJvbHMuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucGxhbmVPYmplY3QgPSB0aGlzLl9wbGFuZU9iamVjdC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5yZW5kZXIgPSB0aGlzLl9yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25SZXNpemUgPSB0aGlzLl9vblJlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5VcGRhdGUgPSB0aGlzLl9VcGRhdGUuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMllxuICAgKi9cbiAgaW5pdCgpe1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKTtcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuXG5cdFx0dGhpcy5vcmJpdENvbnRyb2xzKCk7XG5cdFx0Ly8gdGhpcy5jcmVhdGVPYmplY3QoKTtcblxuICAgIHRoaXMucGxhbmVPYmplY3QoKTtcblxuICAgIHRoaXMuVXBkYXRlKCk7XG5cbiAgICAvLyB0aGlzLnRpdGxlT2JqZWN0LmxvYWRUZXh0dXJlKCgpID0+IHtcbiAgICAvLyAgIHRoaXMuc2NlbmUuYWRkKHRoaXMudGl0bGVPYmplY3Qub2JqKTtcbiAgICAvLyB9KTtcblxuICAgIC8v44Oq44K144Kk44K644Kk44OZ44Oz44OI55m654GrXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICB9LCBmYWxzZSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjgqvjg6Hjg6nkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVDYW1lcmEoKXtcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDEwMDtcblxuICAgIHRoaXMuY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygwLDAsMCkpO1xuXG4gIH1cblxuICAvKipcbiAgICog44Os44Oz44OA44Op44O85L2c5oiQXG4gICAqL1xuICBfY3JlYXRlUmVuZGVyZXIoKXtcblxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICBhbHBoYSAgICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIGFudGlhbGlhcyAgICAgICAgICA6IGZhbHNlLFxuICAgICAgc3RlbmNpbCAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICBkZXB0aCAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgcHJlbXVsdGlwbGllZEFscGhhIDogZmFsc2UsXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzXG5cdFx0fSk7XG5cbiAgICAvLyB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhmZmZmZmYpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweDAwMDAwMCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgLy8gdGhpcy5vdXRwdXQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcblxuICB9XG5cbiAgLyoqXG4gICAq44CA44K344O844Oz5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlU2NlbmUoKXtcblxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIE9iamVjdOS9nOaIkFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0X2NyZWF0ZU9iamVjdCgpe1xuXG4gICAgbGV0IGN1YmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg0LCA0LCA0KTtcbiAgICBsZXQgY3ViZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICAgIHdpcmVmcmFtZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdGhpcy5jdWJlID0gbmV3IFRIUkVFLk1lc2goY3ViZUdlb21ldHJ5LCBjdWJlTWF0ZXJpYWwpO1xuICAgIHRoaXMuY3ViZS5wb3NpdGlvbi54ID0gMztcbiAgICB0aGlzLmN1YmUucG9zaXRpb24ueSA9IDM7XG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLnogPSAzO1xuXG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5jdWJlKTtcblxuXHR9XG5cblx0X3BsYW5lT2JqZWN0KCl7XG4gICAgdGhpcy5wbGFuZSA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgICAvLyBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSgyNTYsIDY0LCA0MCwgMTApLFxuICAgICAgICBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSg1LCAyMCwgMzIpLFxuICAgICAgICBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgICAgIHVuaWZvcm1zOiB0aGlzLnVuaWZvcm1zLFxuICAgICAgICAgIHZlcnRleFNoYWRlcjogcmVxdWlyZSgnLi4vLi4vLi4vLi4vZ2xzbC9pbmRleC90ZXN0LnZlcnQnKSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlcjogcmVxdWlyZSgnLi4vLi4vLi4vLi4vZ2xzbC9pbmRleC90ZXN0LmZyYWcnKSxcbiAgICAgICAgfSlcbiAgICApXG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5wbGFuZSk7XG4gIH1cblxuICAvKipcbiAgICog44Os44Oz44OA44Op44O8XG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfcmVuZGVyKCkge1xuICAgIGxldCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xuICAgIGxldCB0aW1lID0gY2xvY2suZ2V0RGVsdGEoKTtcblxuICAgIC8vIHRoaXMudGl0bGVPYmplY3QudGl0cmVuZGVyKHRpbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOabtOaWsFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX1VwZGF0ZSgpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuICAgICAgdGhpcy5VcGRhdGUoKTtcbiAgICB9KTtcbiAgICAvLyB0aGlzLmNvbnRyb2xzLnVwZGF0ZSgpO1xuICAgIHRoaXMudW5pZm9ybXMudV90aW1lLnZhbHVlICs9IDAuMDU7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICB9XG5cbiAgLyoqXG4gICAq44CA55S76Z2i44Oq44K144Kk44K6XG4gICAqL1xuICBfb25SZXNpemUoKSB7XG4gICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxuXG5cdC8qKlxuICAgKiDjgqvjg6Hjg6njgrPjg7Pjg4jjg63jg7zjg6tcblx0ICovXG5cdF9vcmJpdENvbnRyb2xzKCl7XG5cdFx0dGhpcy5jb250cm9scyA9IG5ldyBUSFJFRS5PcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhKTtcblx0XHR0aGlzLmNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlO1xuXHRcdGxldCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xuXG5cdFx0bGV0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcblx0XHR0aGlzLmNvbnRyb2xzLnVwZGF0ZShkZWx0YSk7XG4gIH1cblxuXHRzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9DYW52YXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG4vL2F0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QudmVydFxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSB2ZWMyIHVfcmVzb2x1dGlvbjtcXG51bmlmb3JtIGZsb2F0IHVfdGltZTtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzIgc3QgPSBnbF9GcmFnQ29vcmQueHkvdV9yZXNvbHV0aW9uLnh5O1xcbiAgICBnbF9GcmFnQ29sb3I9dmVjNChzdC54LHN0LnksMC4wLDEuMCk7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QuZnJhZ1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==