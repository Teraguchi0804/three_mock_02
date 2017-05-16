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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTdiOTJjMTE4OGVhNzk4NWQ3MzQiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvcmUvQ29uZi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9VdGlsLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hbmltYXRpb24vcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL2NhbmNlbEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYXJyYXkvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy91YS9jaGVja0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy91YS1wYXJzZXIubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvaW1nL3ByZWxvYWRJbWcuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5Ud2l0dGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuTGluZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkZhY2VCb29rLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL0Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvQ2FudmFzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvQ29yZS9FbnRyeS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy9PcmJpdENvbnRyb2xzLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImdiIiwidW5kZWZpbmVkIiwiaW4iLCJjb21tb24iLCJtYWluIiwiQ29tbW9uIiwic2V0dXAiLCJzZXRFdmVudHMiLCJjb25mIiwidSIsImYiLCJ1dCIsIiQiLCJkb2N1bWVudCIsIm9uIiwib25SZWFkeSIsImJpbmQiLCJvbkxvYWQiLCJDb25mIiwiUkVMRUFTRSIsIkZMRyIsIkxPRyIsIlBBUkFNIiwiU1RBVFMiLCJkZWZXIiwiZGVmSCIsIlciLCJIIiwic3BXIiwic3BIIiwiYnAiLCJtb2RlIiwia2V5cyIsInN3aXRjaE1vZGUiLCJzZWMwMkltZ051bSIsInlvdXR1YmVJRDAxIiwieW91dHViZUlEMDIiLCJ3ZWJGb250TG9hZGVkIiwiaSIsImtleSIsImxlbiIsInBhcmFtIiwicmVmIiwicmVmMSIsInZhbHVlIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZXBsYWNlIiwic3BsaXQiLCJsZW5ndGgiLCJqIiwib2JqIiwiayIsInZhbCIsIlV0aWwiLCJpc1NldFNQU2l6ZSIsInN0YXJ0VGltZSIsImVsYXBzZWRUaW1lIiwibm93IiwiRGF0ZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIm1pbjEiLCJtYXgxIiwibWluMiIsIm1heDIiLCJoaXQiLCJyYW5nZSIsIm51bSIsInJlc01pbiIsInJlc01heCIsImJhc2VNaW4iLCJiYXNlTWF4IiwicCIsIm4iLCJwb3MiLCJTdHJpbmciLCJpbmRleE9mIiwic3Vic3RyIiwibnVtZXJhdG9yIiwiZGVub21pbmF0b3IiLCJyYWRpYW5zIiwiUEkiLCJhbmdsZSIsInAxIiwicDIiLCJzcXJ0IiwicG93IiwieCIsInkiLCJhcnIiLCJzb3J0IiwiYSIsImIiLCJnZXRUaW1lIiwiZmxnIiwiY3NzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImlzUmVzU1AiLCJpc1Jlc1BDIiwidXJsIiwiaHJlZiIsInBhcmFtSXRlbXMiLCJsaXN0IiwicGFyYW1JdGVtIiwiaGFzaCIsImwiLCJsZW4xIiwiY29va2llIiwiciIsImciLCJzdHIiLCJ0b1N0cmluZyIsIkFycmF5Iiwiam9pbiIsImNvbnRhaW4iLCJudW1iZXIiLCJfcG93Iiwicm91bmQiLCJyZXMiLCJvcmciLCJkZXN0IiwiYmVmb3JlIiwiYWZ0ZXIiLCJSZWdFeHAiLCJnZXROb3ciLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kIiwiZ2V0U2Vjb25kcyIsIm1pbGxTZWNvbmQiLCJnZXRNaWxsaXNlY29uZHMiLCJnZXREYXRlIiwibW9udGhkYXlzIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsIndlZWtEYXlKUCIsIndESiIsImdldERheSIsIndlZWtEYXlFTiIsIndERSIsImRhdGUiLCJOdW1iZXIiLCJpZ25vcmVBcnJheSIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCIkdGFyZ2V0IiwiJGltZyIsImVhY2giLCJ3Iiwid2lkdGgiLCJoIiwiaGVpZ2h0IiwiYXR0ciIsInRyaWdnZXIiLCJzZWxmIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib2ZmIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJwYXRobmFtZSIsImV2ZW50IiwicmV0dXJuVmFsdWUiLCJrZXlDb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ud2hlZWwiLCJvbm1vdXNld2hlZWwiLCJvbnRvdWNobW92ZSIsIm9ua2V5ZG93biIsInByZXZlbnREZWZhdWx0Rm9yU2Nyb2xsS2V5cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJVdGlscyIsIl9zZXR1cCIsImNoZWNrQ2xpZW50IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3RoaXMiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbGxiYWNrIiwic2V0VGltZW91dCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpZCIsImNsZWFyVGltZW91dCIsIkFyciIsInNsaWNlIiwidCIsInBhcnNlciIsInJlcXVpcmUiLCJ1YSIsImJyb3dzZXIiLCJnZXRCcm93c2VyIiwibmFtZSIsImRldmljZSIsImdldERldmljZSIsInR5cGUiLCJnZXRPUyIsImRldmljZV9uYW1lIiwidmVuZG9yIiwiZ2V0VUEiLCJzIiwibyIsImMiLCJkIiwidiIsIm0iLCJFIiwiUyIsImV4dGVuZCIsImNvbmNhdCIsImhhcyIsInRvTG93ZXJDYXNlIiwibG93ZXJpemUiLCJtYWpvciIsInRyaW0iLCJyZ3giLCJhcmd1bWVudHMiLCJoYXNPd25Qcm9wZXJ0eSIsImV4ZWMiLCJ0ZXN0IiwiVCIsIm9sZHNhZmFyaSIsInZlcnNpb24iLCJhbWF6b24iLCJtb2RlbCIsInNwcmludCIsIkhUQyIsIlNwcmludCIsIm9zIiwid2luZG93cyIsIk1FIiwiWFAiLCJWaXN0YSIsIlJUIiwiTiIsImNwdSIsImVuZ2luZSIsIkMiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJhcHBseSIsImdldENQVSIsImdldEVuZ2luZSIsImdldFJlc3VsdCIsInNldFVBIiwiVkVSU0lPTiIsIkJST1dTRVIiLCJOQU1FIiwiTUFKT1IiLCJDUFUiLCJBUkNISVRFQ1RVUkUiLCJERVZJQ0UiLCJNT0RFTCIsIlZFTkRPUiIsIlRZUEUiLCJDT05TT0xFIiwiTU9CSUxFIiwiU01BUlRUViIsIlRBQkxFVCIsIldFQVJBQkxFIiwiRU1CRURERUQiLCJFTkdJTkUiLCJPUyIsImV4cG9ydHMiLCJtb2R1bGUiLCJVQVBhcnNlciIsImpRdWVyeSIsIlplcHRvIiwiTCIsImdldCIsInNldCIsImltZ1BhdGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsImltZyIsIkltYWdlIiwiY2FsbGVlIiwic3JjIiwiJGJ0biIsInRleHQiLCJzaGFyZVVSTCIsImVuY29kZVVSSUNvbXBvbmVudCIsIm9wZW4iLCJkZXNjcmlwdGlvbiIsIkZ1bmMiLCJibGFuayIsImRlYnVnZ2VyIiwiZXhwYW5kalF1ZXJ5IiwibWV0aG9kcyIsImNvbnNvbGUiLCJwcmVwZW5kIiwiRlBTIiwid2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJ0aW1lciIsImZuIiwiYWRqdXN0IiwiYWRqdXN0VyIsImFkanVzdEgiLCJDU1MiLCJzdXBwb3J0cyIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImxvZyIsImlzSUUiLCJpc1BDIiwiaXNBbmRyb2lkVmVyc2lvbiIsImFsZXJ0IiwiTWFpbiIsInBhZ2UiLCJkYXRhIiwiRGlzcGxheVRvcCIsImNhbnZhcyIsIm91dHB1dCIsImdldEVsZW1lbnRCeUlkIiwiQ2FudmFzIiwib3B0cyIsImNyZWF0ZUVsZW1lbnQiLCJjYW1lcmEiLCJyZW5kZXJlciIsInNjZW5lIiwiY3ViZSIsImNyZWF0ZUNhbWVyYSIsIl9jcmVhdGVDYW1lcmEiLCJjcmVhdGVSZW5kZXJlciIsIl9jcmVhdGVSZW5kZXJlciIsImNyZWF0ZVNjZW5lIiwiX2NyZWF0ZVNjZW5lIiwiY3JlYXRlT2JqZWN0IiwiX2NyZWF0ZU9iamVjdCIsIm9yYml0Q29udHJvbHMiLCJfb3JiaXRDb250cm9scyIsIm9uUmVzaXplIiwiX29uUmVzaXplIiwiVXBkYXRlIiwiX1VwZGF0ZSIsIlRIUkVFIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJwb3NpdGlvbiIsInoiLCJsb29rQXQiLCJWZWN0b3IzIiwiV2ViR0xSZW5kZXJlciIsImFscGhhIiwiYW50aWFsaWFzIiwic3RlbmNpbCIsImRlcHRoIiwicHJlbXVsdGlwbGllZEFscGhhIiwic2V0Q2xlYXJDb2xvciIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsIlNjZW5lIiwiY3ViZUdlb21ldHJ5IiwiQm94R2VvbWV0cnkiLCJjdWJlTWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwid2lyZWZyYW1lIiwiTWVzaCIsInJlbmRlciIsImFzcGVjdCIsInVwZGF0ZVByb2plY3Rpb25NYXRyaXgiLCJjb250cm9scyIsIk9yYml0Q29udHJvbHMiLCJhdXRvUm90YXRlIiwiY2xvY2siLCJDbG9jayIsImRlbHRhIiwiZ2V0RGVsdGEiLCJ1cGRhdGUiLCJFbnRyeSIsIm9iamVjdCIsImVuYWJsZWQiLCJ0YXJnZXQiLCJtaW5EaXN0YW5jZSIsIm1heERpc3RhbmNlIiwiSW5maW5pdHkiLCJtaW5ab29tIiwibWF4Wm9vbSIsIm1pblBvbGFyQW5nbGUiLCJtYXhQb2xhckFuZ2xlIiwibWluQXppbXV0aEFuZ2xlIiwibWF4QXppbXV0aEFuZ2xlIiwiZW5hYmxlRGFtcGluZyIsImRhbXBpbmdGYWN0b3IiLCJlbmFibGVab29tIiwiem9vbVNwZWVkIiwiZW5hYmxlUm90YXRlIiwicm90YXRlU3BlZWQiLCJlbmFibGVQYW4iLCJrZXlQYW5TcGVlZCIsImF1dG9Sb3RhdGVTcGVlZCIsImVuYWJsZUtleXMiLCJMRUZUIiwiVVAiLCJSSUdIVCIsIkJPVFRPTSIsIm1vdXNlQnV0dG9ucyIsIk9SQklUIiwiTU9VU0UiLCJaT09NIiwiTUlERExFIiwiUEFOIiwidGFyZ2V0MCIsImNsb25lIiwicG9zaXRpb24wIiwiem9vbTAiLCJ6b29tIiwiZ2V0UG9sYXJBbmdsZSIsInNwaGVyaWNhbCIsInBoaSIsImdldEF6aW11dGhhbEFuZ2xlIiwidGhldGEiLCJyZXNldCIsInNjb3BlIiwiY29weSIsImRpc3BhdGNoRXZlbnQiLCJjaGFuZ2VFdmVudCIsInN0YXRlIiwiU1RBVEUiLCJOT05FIiwib2Zmc2V0IiwicXVhdCIsIlF1YXRlcm5pb24iLCJzZXRGcm9tVW5pdFZlY3RvcnMiLCJ1cCIsInF1YXRJbnZlcnNlIiwiaW52ZXJzZSIsImxhc3RQb3NpdGlvbiIsImxhc3RRdWF0ZXJuaW9uIiwic3ViIiwiYXBwbHlRdWF0ZXJuaW9uIiwic2V0RnJvbVZlY3RvcjMiLCJyb3RhdGVMZWZ0IiwiZ2V0QXV0b1JvdGF0aW9uQW5nbGUiLCJzcGhlcmljYWxEZWx0YSIsIm1ha2VTYWZlIiwicmFkaXVzIiwic2NhbGUiLCJwYW5PZmZzZXQiLCJzZXRGcm9tU3BoZXJpY2FsIiwiem9vbUNoYW5nZWQiLCJkaXN0YW5jZVRvU3F1YXJlZCIsIkVQUyIsImRvdCIsInF1YXRlcm5pb24iLCJkaXNwb3NlIiwib25Db250ZXh0TWVudSIsIm9uTW91c2VEb3duIiwib25Nb3VzZVdoZWVsIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsIm9uVG91Y2hNb3ZlIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJvbktleURvd24iLCJzdGFydEV2ZW50IiwiZW5kRXZlbnQiLCJST1RBVEUiLCJET0xMWSIsIlRPVUNIX1JPVEFURSIsIlRPVUNIX0RPTExZIiwiVE9VQ0hfUEFOIiwiU3BoZXJpY2FsIiwicm90YXRlU3RhcnQiLCJWZWN0b3IyIiwicm90YXRlRW5kIiwicm90YXRlRGVsdGEiLCJwYW5TdGFydCIsInBhbkVuZCIsInBhbkRlbHRhIiwiZG9sbHlTdGFydCIsImRvbGx5RW5kIiwiZG9sbHlEZWx0YSIsImdldFpvb21TY2FsZSIsInJvdGF0ZVVwIiwicGFuTGVmdCIsImRpc3RhbmNlIiwib2JqZWN0TWF0cml4Iiwic2V0RnJvbU1hdHJpeENvbHVtbiIsIm11bHRpcGx5U2NhbGFyIiwicGFuVXAiLCJwYW4iLCJkZWx0YVgiLCJkZWx0YVkiLCJlbGVtZW50IiwiYm9keSIsInRhcmdldERpc3RhbmNlIiwidGFuIiwiZm92IiwiY2xpZW50SGVpZ2h0IiwibWF0cml4IiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicmlnaHQiLCJsZWZ0IiwiY2xpZW50V2lkdGgiLCJ0b3AiLCJib3R0b20iLCJ3YXJuIiwiZG9sbHlJbiIsImRvbGx5U2NhbGUiLCJkb2xseU91dCIsImhhbmRsZU1vdXNlRG93blJvdGF0ZSIsImNsaWVudFgiLCJjbGllbnRZIiwiaGFuZGxlTW91c2VEb3duRG9sbHkiLCJoYW5kbGVNb3VzZURvd25QYW4iLCJoYW5kbGVNb3VzZU1vdmVSb3RhdGUiLCJzdWJWZWN0b3JzIiwiaGFuZGxlTW91c2VNb3ZlRG9sbHkiLCJoYW5kbGVNb3VzZU1vdmVQYW4iLCJoYW5kbGVNb3VzZVVwIiwiaGFuZGxlTW91c2VXaGVlbCIsImhhbmRsZUtleURvd24iLCJoYW5kbGVUb3VjaFN0YXJ0Um90YXRlIiwidG91Y2hlcyIsInBhZ2VYIiwicGFnZVkiLCJoYW5kbGVUb3VjaFN0YXJ0RG9sbHkiLCJkeCIsImR5IiwiaGFuZGxlVG91Y2hTdGFydFBhbiIsImhhbmRsZVRvdWNoTW92ZVJvdGF0ZSIsImhhbmRsZVRvdWNoTW92ZURvbGx5IiwiaGFuZGxlVG91Y2hNb3ZlUGFuIiwiaGFuZGxlVG91Y2hFbmQiLCJidXR0b24iLCJzdG9wUHJvcGFnYXRpb24iLCJjcmVhdGUiLCJFdmVudERpc3BhdGNoZXIiLCJjb25zdHJ1Y3RvciIsImRlZmluZVByb3BlcnRpZXMiLCJjZW50ZXIiLCJub1pvb20iLCJub1JvdGF0ZSIsIm5vUGFuIiwibm9LZXlzIiwic3RhdGljTW92aW5nIiwiZHluYW1pY0RhbXBpbmdGYWN0b3IiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM5QkE7Ozs7QUFDQTs7Ozs7O0FBVEE7Ozs7Ozs7O0FBV0EsRUFBQyxZQUFJOztBQUVIO0FBQ0EsT0FBSUEsT0FBT0MsRUFBUCxLQUFZQyxTQUFoQixFQUEyQkYsT0FBT0MsRUFBUCxHQUFZLEVBQVo7QUFDM0JELFVBQU9DLEVBQVAsQ0FBVUUsRUFBVixHQUFlLEVBQWYsQ0FKRyxDQUlnQjs7QUFFbkJGLE1BQUdFLEVBQUgsQ0FBTUMsTUFBTixHQUFlLHNCQUFmO0FBQ0FILE1BQUdFLEVBQUgsQ0FBTUUsSUFBTixHQUFhLG9CQUFiO0FBRUQsRUFURCxJOzs7Ozs7Ozs7Ozs7c2pCQ1hBOzs7Ozs7OztBQVFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBOztLQUVxQkMsTTtBQUVuQixxQkFBYztBQUFBOztBQUVaLFVBQUtDLEtBQUw7QUFDQSxVQUFLQyxTQUFMO0FBRUQ7Ozs7NkJBRU07O0FBRVA7Ozs7O0FBS0VQLFVBQUdFLEVBQUgsQ0FBTU0sSUFBTixHQUFhLG9CQUFiO0FBQ0FSLFVBQUdFLEVBQUgsQ0FBTU8sQ0FBTixHQUFVLG9CQUFWO0FBQ0FULFVBQUdFLEVBQUgsQ0FBTVEsQ0FBTixHQUFVLG9CQUFWOztBQUVBVixVQUFHRSxFQUFILENBQU1TLEVBQU4sR0FBVyxxQkFBWDtBQUVEOzs7K0JBRVMsQ0FHVDs7OzhCQUVRLENBR1I7OztpQ0FFVzs7QUFFVkMsU0FBRUMsUUFBRixFQUFZQyxFQUFaLENBQWUsT0FBZixF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QUFMLEdBQXFCLENBQUVsVyxLQUF2QjtBQUVBOztBQWRhLEdBdkZ3Qzs7QUF5R3ZENmYsd0JBQXVCOztBQUV0QmhSLFFBQUssZUFBWTs7QUFFaEJvQixZQUFRb04sSUFBUixDQUFjLDBGQUFkO0FBQ0EsV0FBTyxLQUFLbEgsYUFBWjtBQUVBLElBUHFCOztBQVN0QnJILFFBQUssYUFBVzlPLEtBQVgsRUFBbUI7O0FBRXZCaVEsWUFBUW9OLElBQVIsQ0FBYywwRkFBZDtBQUNBLFNBQUtsSCxhQUFMLEdBQXFCblcsS0FBckI7QUFFQTs7QUFkcUI7O0FBekdnQyxFQUF4RCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1N2I5MmMxMTg4ZWE3OTg1ZDczNCIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFRvcFxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgQ29tbW9uIGZyb20gJy4vcGFnZS9Db21tb24nO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9wYWdlL01haW4nO1xuXG4oKCk9PntcblxuICAvLyBnbG9iYWzjgqrjg5bjgrjjgqfjgq/jg4hcbiAgaWYgKHdpbmRvdy5nYj09PXVuZGVmaW5lZCkgd2luZG93LmdiID0ge307XG4gIHdpbmRvdy5nYi5pbiA9IHt9OyAvL2luc3RhbmNlXG5cbiAgZ2IuaW4uY29tbW9uID0gbmV3IENvbW1vbigpO1xuICBnYi5pbi5tYWluID0gbmV3IE1haW4oKTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1RvcC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENvbW1vblxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgQ29uZiBmcm9tICcuLi9Db3JlL0NvbmYnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vbXlsaWJzL1V0aWwnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL1V0aWxzJztcbmltcG9ydCBGdW5jIGZyb20gJy4uL215bGlicy9GdW5jJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb24ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG5cdHNldHVwKCkge1xuXG5cdFx0LyoqXG4gICAgICogQHR5cGUge0NvbmZ9IDog5Yid5pyf5YCk44Gu6Kit5a6a44O744OH44O844K/44Gu6YWN572uXG5cdFx0ICogQHR5cGUge1V0aWx9IDogVXRpbOmWouaVsOOBruWIneacn+WMllxuXHRcdCAqIEB0eXBlIHtGdW5jfSA6IOOCpOODmeODs+ODiOODnuODjeODvOOCuOODo+ODvOOBruioree9rlxuXHRcdCAqL1xuICAgIGdiLmluLmNvbmYgPSBuZXcgQ29uZigpO1xuICAgIGdiLmluLnUgPSBuZXcgVXRpbCgpO1xuICAgIGdiLmluLmYgPSBuZXcgRnVuYygpO1xuXG4gICAgZ2IuaW4udXQgPSBuZXcgVXRpbHMoKTtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvcGFnZS9Db21tb24uanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBDb25mXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbi8vIGltcG9ydCBTb3VuZERhdGEgZnJvbSAnLi9EYXRhL1NvdW5kLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg5pys55Wq44OV44Op44KwXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgIFxuICAgIHRoaXMuUkVMRUFTRSA9IHRydWU7XG4gICAgLy8gdGhpcy5SRUxFQVNFID0gZmFsc2U7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OV44Op44Kw6Zai6YCjXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5GTEcgPSB7XG4gICAgICBMT0c6dHJ1ZSwgIC8vIOODreOCsOWHuuWKm1xuICAgICAgUEFSQU06dHJ1ZSwgLy8g44OR44Op44Oh44O844K/44OB44Kn44OD44KvXG4gICAgICBTVEFUUzp0cnVlICAvLyBTdGF0c+ihqOekulxuICAgIH07XG4gICAgaWYgKCF0aGlzLlJFTEVBU0UpIHtcbiAgICAgIHRoaXMuRkxHID0ge1xuICAgICAgICBMT0c6ZmFsc2UsXG4gICAgICAgIFBBUkFNOmZhbHNlLFxuICAgICAgICBTVEFUUzpmYWxzZSBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOWfuuacrCB3aWR0aCBoZWlnaHRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmRlZlcgPSAxMzAwO1xuICAgIHRoaXMuZGVmSCA9IDg1MDtcblxuICAgIHRoaXMuVyA9IDEyMDA7XG4gICAgdGhpcy5IID0gNzUwO1xuXG4gICAgdGhpcy5zcFcgPSAzNzU7XG4gICAgdGhpcy5zcEggPSA2Njc7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OW44Os44Kk44Kv44Od44Kk44Oz44OIXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5icCA9IDc2ODtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBtb2RlXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB0aGlzLmtleXMgPSBbXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdtb3ZpZScsXG4gICAgICAgICAgJ3ZhbHVlJzogWydtb3JuaW5nJywnYWZ0ZXJub29uJywnbmlnaHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdkYXRhJyxcbiAgICAgICAgICAndmFsdWUnOiBbJ2RhdGEwMScsJ2RhdGEwMicsJ2RhdGEwMyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ3Byb2R1Y3QnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnMDEnXSxcbiAgICAgIH0sXG4gICAgXVxuICAgIHRoaXMuc3dpdGNoTW9kZSgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHNvdW5kIGRhdGFcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyB0aGlzLnNvdW5kRGF0YSA9IG5ldyBTb3VuZERhdGEoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBzZWMwMiBiZyBJbWcgTnVtXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5zZWMwMkltZ051bSA9IDM5NjtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICB5b3V0dWJlIElEXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy55b3V0dWJlSUQwMSA9ICd4VzJvTnBOcktkMCc7XG4gICAgdGhpcy55b3V0dWJlSUQwMiA9ICd0MldlUlJkQUZlSSc7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgd2ViIGZvbnQgbG9hZGVkXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy53ZWJGb250TG9hZGVkID0gZmFsc2U7XG5cbiAgfVxuXG5cbiAgc3dpdGNoTW9kZSgpe1xuXG4gICAgdmFyIGksIGtleSwgbGVuLCBwYXJhbSwgcmVmLCByZWYxLCB2YWx1ZTtcblxuICAgIHJlZiA9IGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHBhcmFtID0gcmVmW2ldO1xuICAgICAgcmVmMSA9IHBhcmFtLnNwbGl0KCc9JyksIGtleSA9IHJlZjFbMF0sIHZhbHVlID0gcmVmMVsxXTtcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmtleXMubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICB2YXIgb2JqID0gdGhpcy5rZXlzW2pdO1xuXG4gICAgICAgIC8vIOODkeODqeODoeODvOOCv+OBjOOCreODvOOBqOS4gOe3kuOBoOOBo+OBn+OCiVxuICAgICAgICBpZiAob2JqLmtleSA9PT0ga2V5KSB7XG5cbiAgICAgICAgICAvLyDlkITlgKTjgajmr5TovINcbiAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IG9iai52YWx1ZS5sZW5ndGg7IGsrKykge1xuXG4gICAgICAgICAgICB2YXIgdmFsID0gb2JqLnZhbHVlW2tdO1xuXG4gICAgICAgICAgICAvLyDjgq3jg7zjgpJ0aGlzLmtleXPjga5rZXnjgavjgIF2YWx1ZeOCkuavlOi8g+OBl+OBpuWQjOWApOOBoOOBo+OBn+OCguOBruOBq1xuICAgICAgICAgICAgaWYgKHZhbCA9PT0gdmFsdWUpIHRoaXNbb2JqLmtleV0gPSB2YWw7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9O1xuXG5cbiAgICAgICAgfTtcblxuICAgICAgICBcbiAgICAgIH07XG5cbiAgICB9XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0NvbmYuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzog5L6/5Yip6Zai5pWw44Kv44Op44K5XG4gKiBQcm9qZWN0OlxuICogRmlsZTogVXRpbFxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuaXNTZXRTUFNpemUgPSBmYWxzZTtcblxuICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gbnVsbDtcbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRoXG4gICAqL1xuXG5cbiAgLyoqXG4gICAqIOODqeODs+ODgOODoOOBquWApOOCkui/lOOBmVxuICAgKiBAcGFyYW0gbWluIDog5pyA5bCP5YCkKGludClcbiAgICogQHBhcmFtIG1heCA6IOacgOWkp+WApChpbnQpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IDogbWlu44GL44KJbWF444G+44Gn44Gu44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgICovXG4gIHJhbmRvbShtaW4sIG1heCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAoKG1heCArIDEpIC0gbWluKSArIG1pbikpO1xuXG4gIH1cblxuICAvKipcbiAgICog44Op44Oz44OA44Og44Gq5pW05pWw44KSMuOBpOOBruevhOWbsuOBi+OCieWPluW+l1xuICAgKiBAcGFyYW0gbWluMSA6IOacgOWwj+WApDEoaW50KVxuICAgKiBAcGFyYW0gbWF4MSA6IOacgOWkp+WApDEoaW50KVxuICAgKiBAcGFyYW0gbWluMiA6IOacgOWwj+WApDIoaW50KVxuICAgKiBAcGFyYW0gbWF4MiA6IOacgOWkp+WApDIoaW50KVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSA6IG1pbuOBi+OCiW1heOOBvuOBp+OBruODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gICAqL1xuICByYW5kb20yKG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbiAgICBcbiAgICBpZiAodGhpcy5oaXQoMikpIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmRvbShtaW4xLCBtYXgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmFuZG9tKG1pbjIsIG1heDIpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIDEvQHJhbmdl44Gu56K6546H44GndHJ1ZeOCkuWPluW+l1xuICAgKiBAcGFyYW0gcmFuZ2UgOiDmr43mlbAoaW50KVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gICAqL1xuICBoaXQocmFuZ2UpIHtcblxuICAgIHJldHVybiB0aGlzLnJhbmRvbSgwLCByYW5nZSAtIDEpID09PSAwO1xuXG4gIH1cbiAgXG4gIC8vIDDjgYvjgonnr4Tlm7LlhoXjgafjg6njg7Pjg4Djg6DjgarmlbTmlbDjgpLlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHZhbCA6IOevhOWbsihpbnQpXG4gIC8vIHJldHVybiA6IOODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJhbmdlKHZhbCkge1xuXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKC12YWwsIHZhbCk7XG5cbiAgfVxuICBcbiAgLy8g5YCk44KS44Oe44OD44OU44Oz44KwXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBudW0gOiDjg57jg4Pjg5Tjg7PjgrDjgZnjgovlgKQoTnVtYmVyKVxuICAvLyBAcmVzTWluIDog57WQ5p6c44Go44Gq44KL5YCk44Gu5pyA5bCP5YCkKE51bWJlcilcbiAgLy8gQHJlc01heCA6IOe1kOaenOOBqOOBquOCi+WApOOBruacgOWkp+WApChOdW1iZXIpXG4gIC8vIEBiYXNlTWluIDog5YWD44Go44Gq44KL5YCk44Gu5pyA5bCP5YCkKE51bWJlcilcbiAgLy8gQGJhc2VNYXggOiDlhYPjgajjgarjgovlgKTjga7mnIDlpKflgKQoTnVtYmVyKVxuICAvLyByZXR1cm4gOiDjg57jg4Pjg5Tjg7PjgrDjgZXjgozjgZ/lgKQoTnVtYmVyKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBtYXAobnVtLCByZXNNaW4sIHJlc01heCwgYmFzZU1pbiwgYmFzZU1heCkge1xuXG4gICAgdmFyIHA7XG4gICAgaWYgKG51bSA8IGJhc2VNaW4pIHtcbiAgICAgIHJldHVybiByZXNNaW47XG4gICAgfVxuICAgIGlmIChudW0gPiBiYXNlTWF4KSB7XG4gICAgICByZXR1cm4gcmVzTWF4O1xuICAgIH1cbiAgICBwID0gKHJlc01heCAtIHJlc01pbikgLyAoYmFzZU1heCAtIGJhc2VNaW4pO1xuXG4gICAgcmV0dXJuICgobnVtIC0gYmFzZU1pbikgKiBwKSArIHJlc01pbjtcblxuICB9ICAgIFxuICBcbiAgLy8g5pWw5YCk44Gr5bCP5pWw54K556ysQG7kvY3jgb7jgafjgpLjgaTjgZHjgZ/mloflrZfliJfjgpLov5TjgZlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG51bSA6IOWApChOdW1iZXIpXG4gIC8vIEBuIDog5bCP5pWw54K544Gu5L2NKGludClcbiAgLy8gcmV0dXJuIDog5aSJ5o+b44GV44KM44Gf5YCkKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGVjaW1hbChudW0sIG4pIHtcbiAgICB2YXIgaSwgcG9zO1xuICAgIG51bSA9IFN0cmluZyhudW0pO1xuICAgIHBvcyA9IG51bS5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bS5zcGxpdChcIi5cIilbMF07XG4gICAgfVxuICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICBudW0gKz0gXCIuXCI7XG4gICAgICBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgbikge1xuICAgICAgICBudW0gKz0gXCIwXCI7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW07XG4gICAgfVxuICAgIG51bSA9IG51bS5zdWJzdHIoMCwgcG9zKSArIG51bS5zdWJzdHIocG9zLCBuICsgMSk7XG4gICAgcmV0dXJuIG51bTtcbiAgfVxuXG4gIGNsYW1wKG51bWVyYXRvcixkZW5vbWluYXRvcix2YWwpIHtcblxuICAgIHJldHVybiB2YWwgKiAobnVtZXJhdG9yIC8gZGVub21pbmF0b3IpO1xuXG4gIH1cblxuXHQvKipcbiAgICog44Op44K444Ki44Oz44KS6KeS5bqm44Gr5aSJ5o+bXG5cdCAqIEBwYXJhbSByYWRpYW5zXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdCAqL1xuICBkZWdyZWUocmFkaWFucykge1xuXG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xuXG4gIH1cblxuICAvLyB0byByYWRpYW5zXG4gIHJhZGlhbihhbmdsZSkgeyBcblxuICAgIHJldHVybiBhbmdsZSAqIE1hdGguUEkgLyAxODA7IC8vMeW6puS9leODqeOCuOOCouODs+OBi1xuXG4gIH1cblxuICBkaXN0KHAxLCBwMikge1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xuXG4gIH1cblxuICBhc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgICAvLyB2YXIgYSA9IFs1LDMsOSwxLDEwXVxuICAgIC8vIOe1kOaenDoxMCw5LDUsMywxXG5cbiAgfVxuXG4gIGRlc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIC8vIHZhciBhID0gWzUsMyw5LDEsMTBdXG4gICAgLy8g57WQ5p6cOjEsMyw1LDksMTBcblxuICB9XG5cbiAgLy8gbWFwKHZhbHVlLCBtaW4wMSwgbWF4MDEsIG1pbjAyLCBtYXgwMikge1xuXG4gIC8vICAgdmFyIGRpczAxID0gbWF4MDEgLSBtaW4wMTtcbiAgLy8gICB2YXIgZGlzMDIgPSBtYXgwMiAtIG1pbjAyXG5cbiAgLy8gICB2YXIgcmF0ZSA9IGRpczAyIC8gZGlzMDE7XG5cbiAgLy8gICB2YWx1ZSA9IHZhbHVlICogcmF0ZTtcblxuICAvLyAgIHJldHVybiB2YWx1ZTtcbiAgLy8gfVxuXG4gIGNvbnN0cmFpbih2YWx1ZSwgbWluLCBtYXgpIHtcblxuICAgIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KHZhbHVlLCBtaW4pKTtcblxuICAgIC8vIGlmICh2YWx1ZSA8PSBsb3cpIHZhbHVlID0gbG93O1xuICAgIC8vIGlmICh2YWx1ZSA+PSBoaWdoKSB2YWx1ZSA9IGhpZ2g7ICAgICBcbiAgICAvLyByZXR1cm4gdmFsdWU7XG5cbiAgfVxuXG4gIC8vIOODpuODi+ODvOOCr0lE44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVuaXF1ZSgpIHtcblxuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICB9XG4gIFxuICAvLyAqKmpxdWFyeeS9v+eUqFxuICAvLyDjg5zjgr/jg7Pjg6Ljg7zjg4nlpInmm7RcbiAgLy8gdHJ1ZeOBquOCieOCq+ODvOOCveODq+OBjOODneOCpOODs+OCv+ODvOOBruW9ouOBq1xuICAvLyBmYWxzZeOBquOCieODh+ODleOCqeODq+ODiOOBruOCq+ODvOOCveODq+OBq1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAZmxnIDog6YGp55So44GZ44KL44GL44Gp44GG44GLKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJ1dHRvbk1vZGUoZmxnKSB7XG5cbiAgICBpZiAoZmxnKSB7XG4gICAgICByZXR1cm4gJChcImJvZHlcIikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLCBcImRlZmF1bHRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHBvcnRyYWl0IC8gbGFuZHNjYXBlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0RpcmVjdGlvbiAoKSB7XG5cbiAgICB2YXIgVyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBIID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYgKEggPiBXKSB7XG4gICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcInBvcnRyYWl0XCIpO1xuICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJsYW5kc2NhcGVcIik7XG4gICAgfWVsc2V7XG4gICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImxhbmRzY2FwZVwiKTtcbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwicG9ydHJhaXRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHJlc3BvbnNpdmUg5qiq5bmF44KS6KaL44KLXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1Jlc3BvbnNpdmUgKGJwKSB7XG5cbiAgICBpZiAoYnA9PXVuZGVmaW5lZCkgYnA9Mzc1O1xuXG4gICAgdmFyIFcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgSCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmIChXID4gYnApIHtcbiAgICAgIHRoaXMuaXNSZXNTUCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1Jlc1BDID0gdHJ1ZTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXNSZXNwb25zaXZlU1AnKTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNSZXNwb25zaXZlUEMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1Jlc1NQID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNSZXNQQyA9IGZhbHNlO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc1Jlc3BvbnNpdmVTUCcpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpc1Jlc3BvbnNpdmVQQycpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBVUkxcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHthcnJheX1cbiAgICovXG4gIGdldFBhcmFtKCkge1xuXG4gICAgdmFyIHVybCA9IGxvY2F0aW9uLmhyZWY7XG4gICAgdmFyIHBhcmFtID0gdXJsLnNwbGl0KCc/JylbMV07XG4gICAgaWYgKHBhcmFtPT11bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgdmFyIHBhcmFtSXRlbXMgPSBwYXJhbS5zcGxpdCgnJicpO1xuICAgIHZhciBsaXN0ID0ge307XG4gIFxuICAgIGZvciggdmFyIGkgPSAwOyBpPHBhcmFtSXRlbXMubGVuZ3RoOyBpKysgKXtcblxuICAgICAgICBwYXJhbUl0ZW0gPSBwYXJhbUl0ZW1zW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgIGxpc3RbcGFyYW1JdGVtWzBdXSA9IHBhcmFtSXRlbVsxXTtcblxuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xuXG4gIH1cblxuICAvKipcbiAgICog44OP44OD44K344Ol5Y+W5b6XIDogbG9jYXRpb24uaGFzaOOBriPjgpLliYrpmaTjgZfjgZ/jgoTjgaRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGhhc2goKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIGNvb2tpZeWPluW+l1xuICAgKiBAcGFyYW0ga2V5XG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZ2V0Q29va2llKGtleSkge1xuXG4gICAgdmFyIGEsIGFyciwgaSwgbCwgbGVuMSwgdmFsO1xuICAgIGlmIChkb2N1bWVudC5jb29raWUgPT09IHZvaWQgMCB8fCBkb2N1bWVudC5jb29raWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBhcnIgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTtcbiAgICBmb3IgKGkgPSBsID0gMCwgbGVuMSA9IGFyci5sZW5ndGg7IGwgPCBsZW4xOyBpID0gKytsKSB7XG4gICAgICB2YWwgPSBhcnJbaV07XG4gICAgICBhID0gdmFsLnNwbGl0KFwiPVwiKTtcbiAgICAgIGlmIChhWzBdID09PSBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGFbMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuXG4gIH0gICAgICBcblxuICAvKipcbiAgICogY29va2ll6Kit5a6aXG4gICAqIEBwYXJhbSBrZXkgOiDjg5Hjg6njg6Hjg7zjgr/lkI1cbiAgICogQHBhcmFtIHZhbCA6IOWApFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgc2V0Q29va2llKGtleSwgdmFsKSB7XG5cbiAgICByZXR1cm4gZG9jdW1lbnQuY29va2llID0ga2V5ICsgXCI9XCIgKyB2YWw7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgQ29sb3JcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gcmdi44GL44KJSEVY44Kr44Op44O85Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEByIDogMH4yNTVcbiAgLy8gQGcgOiAwfjI1NVxuICAvLyBAYiA6IDB+MjU1XG4gIC8vIHJldHVybiA6IGV4IFwiI0ZGRkZGRlwiXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldEhleENvbG9yKHIsZyxiKSB7XG4gICAgICB2YXIgc3RyO1xuICAgICAgc3RyID0gKHIgPDwgMTYgfCBnIDw8IDggfCBiKS50b1N0cmluZygxNik7XG4gICAgICByZXR1cm4gXCIjXCIgKyBuZXcgQXJyYXkoNyAtIHN0ci5sZW5ndGgpLmpvaW4oXCIwXCIpICsgc3RyO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBTdHJpbmdcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXNDb250YWluKHN0cixjb250YWluKSB7XG5cbiAgICAvLyBzdHLjga7kuK3jgassY29udGFpbuOBjOWtmOWcqOOBl+OBn+OCiVxuICAgIGlmICggc3RyLmluZGV4T2YoY29udGFpbikgIT0gLTEgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgfVxuXG4gIC8vIDDln4vjgoHjgacy5qGB44Gr44GZ44KL6Zai5pWwXG4gIGFkZDAoc3RyLG51bT0tMil7XG4gICAgXG4gICAgcmV0dXJuICggXCIwMDAwMDAwMDAwMDBcIiArIHN0ciApLnN1YnN0ciggbnVtICk7XG5cbiAgfVxuXG4gIGZsb2F0Rm9ybWF0KCBudW1iZXIsIG4gKSB7XG5cbiAgICB2YXIgX3BvdyA9IE1hdGgucG93KCAxMCAsIG4gKSA7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoIG51bWJlciAqIF9wb3cgKSAvIF9wb3cgO1xuXG4gIH1cbiAgICBcbiAgLy8g5YCk5q616KGo6KiYXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByaWNlKG51bSkge1xuXG4gICAgcmV0dXJuIFN0cmluZyhudW0pLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKD8hXFxkKSkvZywgJyQxLCcpO1xuXG4gIH1cblxuICAvLyDmloflrZfliJfjgpLlj43ou6JcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHN0ciA6IOaWh+Wtl+WIlyhTdHJpbmcpXG4gIC8vIHJldHVybiA6IOaWh+Wtl+WIlyhTdHJpbmcpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN0clJldmVyc2Uoc3RyKSB7XG5cbiAgICB2YXIgaSwgbGVuLCByZXM7XG4gICAgcmVzID0gXCJcIjtcbiAgICBsZW4gPSBzdHIubGVuZ3RoO1xuICAgIGkgPSAxO1xuICAgIHdoaWxlIChpIDw9IGxlbikge1xuICAgICAgcmVzICs9IHN0ci5zdWJzdHIoLWksIDEpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuXG4gIH1cbiAgXG4gIC8vIOaWh+Wtl+WIl+OBruWFqOe9ruaPm1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAdmFsICA6IOaWh+Wtl+WIl1xuICAvLyBAb2VnICA6IOe9ruaPm+WJjeOBruaWh+Wtl+WIl1xuICAvLyBAZGVzdCA6IOe9ruaPm+W+jOOBruaWh+Wtl+WIl1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXBsYWNlQWxsKHZhbCwgb3JnLCBkZXN0KSB7XG5cbiAgICByZXR1cm4gdmFsLnNwbGl0KG9yZykuam9pbihkZXN0KTtcblxuICB9ICAgIFxuICBcbiAgc3RyUmVwbGFjZShzdHIsIGJlZm9yZSwgYWZ0ZXIpIHtcblxuICAgIHZhciByID0gbmV3IFJlZ0V4cCggYmVmb3JlLCAnZycpO1xuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKCByICwgYWZ0ZXIgKTtcblxuICB9ICAgIFxuICBcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBEYXRlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldE5vdygpIHtcblxuICAgIHRoaXMubm93ID0gbmV3IERhdGUoKTtcblxuICB9XG5cbiAgc3RhcnQoKSB7XG5cbiAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMubm93LmdldFRpbWUoKTtcblxuICB9XG5cbiAgZWxhcHNlZCgpIHtcblxuICAgIHRoaXMuZWxhcHNlZFRpbWUgPSB0aGlzLm5vdy5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZTtcblxuICB9XG5cbiAgbSgpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKCB0aGlzLmVsYXBzZWRUaW1lICsgMTAwIC8gNjAgKTtcblxuICB9XG5cbiAgcygpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZWxhcHNlZFRpbWUgLyAxMDAwKTtcblxuICB9XG5cbiAgbXMoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5lbGFwc2VkVGltZTtcbiAgICBcbiAgfVxuXG4gIHRpbWUoKSB7XG5cbiAgICB0aGlzLmdldE5vdygpO1xuXG4gICAgdGhpcy5ob3VyID0gdGhpcy5ub3cuZ2V0SG91cnMoKTsgICAgICAgICAgLy8g5pmCXG4gICAgdGhpcy5taW51dGUgPSB0aGlzLm5vdy5nZXRNaW51dGVzKCk7ICAgICAgLy8g5YiGXG4gICAgdGhpcy5zZWNvbmQgPSB0aGlzLm5vdy5nZXRTZWNvbmRzKCk7XG4gICAgdGhpcy5taWxsU2Vjb25kID0gdGhpcy5ub3cuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cbiAgfVxuXG4gIGRhdGUoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0RGF0ZSgpO1xuXG4gIH1cblxuICBtb250aHMoKSB7XG5cbiAgICB2YXIgbW9udGhkYXlzID0gbmV3IEFycmF5KDMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzEpO1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldE1vbnRoKCkgKyAxO1xuXG4gIH1cblxuICB5ZWFyKCkge1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldEZ1bGxZZWFyKCk7XG5cbiAgfVxuXG4gIGRheSgpIHtcblxuICAgIC8vIOabnOaXpSAo5pel5pys6KqeKVxuICAgIHZhciB3ZWVrRGF5SlAgPSBbXCLml6VcIixcIuaciFwiLFwi54GrXCIsXCLmsLRcIixcIuacqFwiLFwi6YeRXCIsXCLlnJ9cIl0gO1xuICAgIHZhciB3REogPSB3ZWVrRGF5SlBbdGhpcy5ub3cuZ2V0RGF5KCldIDtcblxuICAgIC8vIOabnOaXpSAo6Iux6KqeKVxuICAgIHZhciB3ZWVrRGF5RU4gPSBbXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIl0gO1xuICAgIHZhciB3REUgPSB3ZWVrRGF5RU5bdGhpcy5ub3cuZ2V0RGF5KCldIDtcblxuICB9XG4gIFxuICAvLyDmlbDml6Xlvozjga5EYXRl44Kq44OW44K444Kn44Kv44OI5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFmdGVyRGF5KGRhdGUsIG51bSkge1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgTnVtYmVyKG51bSkgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBEYXRhIHR5cGUgY2hlY2tcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXNPYmplY3QodmFsdWUsIGlnbm9yZUFycmF5KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbDtcbiAgfVxuXG4gIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbiAgfVxuXG4gIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBpc0FycmF5KHZhbHVlKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfVxuXG4gIGlzTnVsbCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xuICB9XG5cbiAgaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBvdGhlclxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0SW1nU1BTaXplICgkdGFyZ2V0KXtcblxuICAgIC8vIHJlc3BvbnNpdmUgc3Djga7jgajjgY3lh6bnkIZcbiAgICBpZiAoIXRoaXMuaXNSZXNTUCkgcmV0dXJuO1xuICAgIC8vIOS4gOW6puOBoOOBkeWHpueQhlxuICAgIC8vIGlmICh0aGlzLmlzU2V0U1BTaXplKSByZXR1cm47XG4gICAgLy8gdGhpcy5pc1NldFNQU2l6ZSA9IHRydWU7XG5cbiAgICB2YXIgJGltZyA9ICR0YXJnZXQsXG4gICAgICAgIGxlbiA9ICRpbWcubGVuZ3RoO1xuXG4gICAgJGltZy5lYWNoKGZ1bmN0aW9uKGkpIHtcblxuICAgICAgICB2YXIgdyA9IE1hdGguZmxvb3IoJCh0aGlzKS53aWR0aCgpIC8gMiksXG4gICAgICAgICAgICBoID0gTWF0aC5mbG9vcigkKHRoaXMpLmhlaWdodCgpIC8gMik7XG5cbiAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICd3aWR0aCc6IHcsXG4gICAgICAgICAgICAnaGVpZ2h0JzogaCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGxlbiA9PSBpICsgMSkgJCh3aW5kb3cpLnRyaWdnZXIoJ3NldFNwWmllRW5kJyk7XG5cbiAgICB9KTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICDjgrnjg57jg5vmk43kvZznhKHlirlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldFByZXZlbnQoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAkKHdpbmRvdykub24oJ3RvdWNobW92ZS5ub0NvbnRyb2wnLCBmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7fSk7XG5cbiAgfVxuXG4gIHJlbW92ZVByZXZlbnQoKSB7XG5cbiAgICAkKHdpbmRvdykub2ZmKCd0b3VjaG1vdmUubm9Db250cm9sJyk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAgaG9zdCxwcm90Y29sXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcm90b2NvbCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wcm90b2NvbDtcblxuICB9XG4gICAgXG4gIGhvc3QoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24uaG9zdG5hbWU7XG4gICAgLy8gcmV0dXJuIGxvY2F0aW9uLmhvc3RcblxuICB9XG5cbiAgcG9ydCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wb3J0O1xuXG4gIH1cbiAgICAgICAgXG4gIHBhdGgoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0KGUpIHtcblxuICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcblxuICB9XG5cbiAgcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzKGUpIHtcblxuICAgIGlmIChrZXlzW2Uua2V5Q29kZV0pIHtcbiAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgfVxuXG4gIGRpc2FibGVTY3JvbGwoKSB7XG5cbiAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIC8vIG9sZGVyIEZGXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHRoaXMucHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICB3aW5kb3cub253aGVlbCA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG1vZGVybiBzdGFuZGFyZFxuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBvbGRlciBicm93c2VycywgSUVcbiAgICB3aW5kb3cub250b3VjaG1vdmUgID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gbW9iaWxlXG4gICAgZG9jdW1lbnQub25rZXlkb3duICA9IHRoaXMucHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzO1xuXG4gIH1cblxuICBlbmFibGVTY3JvbGwoKSB7XG5cbiAgICBpZiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHRoaXMucHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gbnVsbDsgXG4gICAgd2luZG93Lm9ud2hlZWwgPSBudWxsOyBcbiAgICB3aW5kb3cub250b3VjaG1vdmUgPSBudWxsO1xuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9teWxpYnMvVXRpbC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFV0aWxzXG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG4vKipcbiAqIGFuaW1hdGlvblxuICovXG5pbXBvcnQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gJy4vYW5pbWF0aW9uL3JlcXVlc3RBbmltYXRpb25GcmFtZSc7XG5pbXBvcnQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgZnJvbSAnLi9hbmltYXRpb24vY2FuY2VsQW5pbWF0aW9uRnJhbWUnO1xuXG5pbXBvcnQgQXJyYXkgZnJvbSAnLi9hcnJheS9BcnJheSc7XG5pbXBvcnQgY2hlY2tDbGllbnQgZnJvbSBcIi4vdWEvY2hlY2tDbGllbnRcIjtcblxuaW1wb3J0IHByZWxvYWRJbWcgZnJvbSAnLi9pbWcvcHJlbG9hZEltZyc7XG5pbXBvcnQgc2V0VXBCdG5Ud2l0dGVyIGZyb20gJy4vc25zL3NldFVwQnRuVHdpdHRlcic7XG5pbXBvcnQgc2V0VXBCdG5MaW5lIGZyb20gJy4vc25zL3NldFVwQnRuTGluZSc7XG5pbXBvcnQgc2V0VXBCdG5GYWNlQm9vayBmcm9tICcuL3Nucy9zZXRVcEJ0bkZhY2VCb29rJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLl9zZXR1cCgpO1xuICAgIFxuICB9XG5cbiAgX3NldHVwKCkge1xuICAgIC8vIHdpbmRvdy5jb25zb2xlLmxvZygnVXRpbHNfU2V0dXAhIScpO1xuICAgIFxuICAgIC8qKlxuICAgICAqIGFycmF5XG4gICAgICovXG4gICAgdGhpcy5BcnJheSA9IG5ldyBBcnJheSgpO1xuXG5cbiAgICAvKipcbiAgICAgKiB1YVxuICAgICAqL1xuICAgIHRoaXMuY2hlY2tDbGllbnQgPSBuZXcgY2hlY2tDbGllbnQoKTtcblxuXG4gICAgLyoqXG4gICAgICogaW1nXG4gICAgICovXG4gICAgLy8gdGhpcy5wcmVsb2FkSW1nID0gbmV3IHByZWxvYWRJbWcoKTtcblxuICAgIC8qKlxuICAgICAqIHNuc1xuICAgICAqL1xuICAgIC8vIHRoaXMuc2V0VXBCdG5Ud2l0dGVyID0gbmV3IHNldFVwQnRuVHdpdHRlcjtcbiAgICAvLyB0aGlzLnNldFVwQnRuTGluZSA9IG5ldyBzZXRVcEJ0bkxpbmU7XG4gICAgLy8gdGhpcy5zZXRVcEJ0bkZhY2VCb29rID0gbmV3IHNldFVwQnRuRmFjZUJvb2s7XG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvVXRpbHMuanMiLCIvKipcbiAqIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICovXG53aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKChmdW5jdGlvbihfdGhpcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gMzApO1xuICAgICAgICB9O1xuICB9O1xufSkodGhpcykpKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hbmltYXRpb24vcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwiLyoqXG4gKiBjYW5jZWxBbmltYXRpb25GcmFtZVxuICovXG53aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSAoKGZ1bmN0aW9uKF90aGlzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbihpZCkge1xuICAgICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgICB9O1xuICB9O1xufSkodGhpcykpKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hbmltYXRpb24vY2FuY2VsQW5pbWF0aW9uRnJhbWUuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzog6YWN5YiX44Gu5pON5L2c57O7XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQXJyYXlcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycmF5IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuXG4gIH1cblxuXHQvKipcblx0ICog6YWN5YiX5YaF44Gu44Op44Oz44OA44Og44Gq5YCk44KS44Gy44Go44Gk5Y+W5b6XXG5cdCAqIEBwYXJhbSBhcnIgOiDphY3liJdcblx0ICogQHJldHVybnMgeyp9IDog6YWN5YiX5YaF44Gu5YCkXG5cdCAqL1xuICBhcnJSYW5kKGFycikge1xuXG4gICAgcmV0dXJuIGFyclt0aGlzLnJhbmRvbSgwLCBhcnIubGVuZ3RoIC0gMSldO1xuXG4gIH1cblxuXHQvKipcbiAgICog6YWN5YiX44KS44Op44Oz44OA44Og44Gr5Lim44G55pu/44GIXG5cdCAqIEBwYXJhbSBhcnIgOiDphY3liJcoQXJyYXkpXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG4gIHNodWZmbGUoYXJyKSB7XG5cbiAgICBsZXQgQXJyID0gW107XG4gICAgQXJyID0gYXJyLnNsaWNlKCk7XG4gICAgdmFyIGkgPSBhcnIubGVuZ3RoO1xuICAgIHdoaWxlKGkpe1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqaSk7XG4gICAgICB2YXIgdCA9IEFyclstLWldO1xuICAgICAgQXJyW2ldID0gQXJyW2pdO1xuICAgICAgQXJyW2pdID0gdDtcbiAgICB9XG4gICAgcmV0dXJuIEFycjtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FycmF5L0FycmF5LmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6IFVh5Yik5YilXG4gKiBQcm9qZWN0OlxuICogRmlsZTogY2hlY2tDbGllbnRcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWJzL3VhLXBhcnNlci5taW4uanNcIik7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hlY2tDbGllbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy51YSA9IG5ldyBwYXJzZXIoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIElF44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNJRSgpIHtcbiAgICBsZXQgYnJvd3NlciA9IHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gICAgcmV0dXJuIGJyb3dzZXIgPT09ICdJRScgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRmlyZWZveOOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRmlyZWZveCgpIHtcbiAgICBsZXQgYnJvd3NlciA9IHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gICAgcmV0dXJuIGJyb3dzZXIgPT09ICdGaXJlZm94JyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaHJvbWXjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0Nocm9tZSgpIHtcbiAgICBsZXQgYnJvd3NlciA9IHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gICAgcmV0dXJuIGJyb3dzZXIgPT09ICdDaHJvbWUnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhZmFyaeOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzU2FmYXJpKCkge1xuICAgIGxldCBicm93c2VyID0gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgICByZXR1cm4gYnJvd3NlciA9PT0gJ1NhZmFyaScgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICog44Oi44OQ44Kk44Or44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgaXNNb2JpbGUoKSB7XG4gICAgbGV0IGRldmljZSA9IHRoaXMudWEuZ2V0RGV2aWNlKCkudHlwZTtcbiAgICByZXR1cm4gZGV2aWNlID09PSAnbW9iaWxlJyA/IHRydWUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCv+ODluODrOODg+ODiOOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGlzVGFibGV0KCkge1xuICAgIGxldCBkZXZpY2UgPSB0aGlzLnVhLmdldERldmljZSgpLnR5cGU7XG4gICAgcmV0dXJuIGRldmljZSA9PT0gJ3RhYmxldCcgPyB0cnVlIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPU+WQjeOCkuWPluW+l1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudWEuZ2V0T1MoKS5uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIOODh+ODkOOCpOOCueWQjeOCkuWPluW+l1xuICAgKiBAcmV0dXJucyB7dmVuZG9yfHtIVEMsIFNwcmludH19XG4gICAqL1xuICBkZXZpY2VfbmFtZSgpIHtcbiAgICBsZXQgZGV2aWNlX25hbWUgPSB0aGlzLnVhLmdldERldmljZSgpLnZlbmRvcjtcbiAgICByZXR1cm4gZGV2aWNlX25hbWU7XG4gIH1cblxuICAvKipcbiAgICog44OW44Op44Km44K25ZCN44KS5Y+W5b6XXG4gICAqL1xuICBicm93c2VyX25hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gIH1cblxuICAvKipcbiAgICog44Om44O844K244O844Ko44O844K444Kn44Oz44OI5oOF5aCx77ya5YWo44Gm44KS5Y+W5b6XXG4gICAqL1xuICBhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMudWEuZ2V0VUEoKTtcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy91YS9jaGVja0NsaWVudC5qcyIsIi8qKlxuICogVUFQYXJzZXIuanMgdjAuNy4xMlxuICogTGlnaHR3ZWlnaHQgSmF2YVNjcmlwdC1iYXNlZCBVc2VyLUFnZW50IHN0cmluZyBwYXJzZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWlzYWxtYW4vdWEtcGFyc2VyLWpzXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTItMjAxNiBGYWlzYWwgU2FsbWFuIDxmeXpsbWFuQGdtYWlsLmNvbT5cbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgR1BMdjIgJiBNSVRcbiAqLyhmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO3ZhciBuPVwiMC43LjEyXCIscj1cIlwiLGk9XCI/XCIscz1cImZ1bmN0aW9uXCIsbz1cInVuZGVmaW5lZFwiLHU9XCJvYmplY3RcIixhPVwic3RyaW5nXCIsZj1cIm1ham9yXCIsbD1cIm1vZGVsXCIsYz1cIm5hbWVcIixoPVwidHlwZVwiLHA9XCJ2ZW5kb3JcIixkPVwidmVyc2lvblwiLHY9XCJhcmNoaXRlY3R1cmVcIixtPVwiY29uc29sZVwiLGc9XCJtb2JpbGVcIix5PVwidGFibGV0XCIsYj1cInNtYXJ0dHZcIix3PVwid2VhcmFibGVcIixFPVwiZW1iZWRkZWRcIixTPXtleHRlbmQ6ZnVuY3Rpb24oZSx0KXt2YXIgbj17fTtmb3IodmFyIHIgaW4gZSl0W3JdJiZ0W3JdLmxlbmd0aCUyPT09MD9uW3JdPXRbcl0uY29uY2F0KGVbcl0pOm5bcl09ZVtyXTtyZXR1cm4gbn0saGFzOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHR5cGVvZiBlPT1cInN0cmluZ1wiP3QudG9Mb3dlckNhc2UoKS5pbmRleE9mKGUudG9Mb3dlckNhc2UoKSkhPT0tMTohMX0sbG93ZXJpemU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUudG9Mb3dlckNhc2UoKX0sbWFqb3I6ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlPT09YT9lLnJlcGxhY2UoL1teXFxkXFwuXS9nLFwiXCIpLnNwbGl0KFwiLlwiKVswXTp0fSx0cmltOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLFwiXCIpfX0seD17cmd4OmZ1bmN0aW9uKCl7dmFyIGUsbj0wLHIsaSxhLGYsbCxjLGg9YXJndW1lbnRzO3doaWxlKG48aC5sZW5ndGgmJiFsKXt2YXIgcD1oW25dLGQ9aFtuKzFdO2lmKHR5cGVvZiBlPT09byl7ZT17fTtmb3IoYSBpbiBkKWQuaGFzT3duUHJvcGVydHkoYSkmJihmPWRbYV0sdHlwZW9mIGY9PT11P2VbZlswXV09dDplW2ZdPXQpfXI9aT0wO3doaWxlKHI8cC5sZW5ndGgmJiFsKXtsPXBbcisrXS5leGVjKHRoaXMuZ2V0VUEoKSk7aWYoISFsKWZvcihhPTA7YTxkLmxlbmd0aDthKyspYz1sWysraV0sZj1kW2FdLHR5cGVvZiBmPT09dSYmZi5sZW5ndGg+MD9mLmxlbmd0aD09Mj90eXBlb2YgZlsxXT09cz9lW2ZbMF1dPWZbMV0uY2FsbCh0aGlzLGMpOmVbZlswXV09ZlsxXTpmLmxlbmd0aD09Mz90eXBlb2YgZlsxXT09PXMmJighZlsxXS5leGVjfHwhZlsxXS50ZXN0KT9lW2ZbMF1dPWM/ZlsxXS5jYWxsKHRoaXMsYyxmWzJdKTp0OmVbZlswXV09Yz9jLnJlcGxhY2UoZlsxXSxmWzJdKTp0OmYubGVuZ3RoPT00JiYoZVtmWzBdXT1jP2ZbM10uY2FsbCh0aGlzLGMucmVwbGFjZShmWzFdLGZbMl0pKTp0KTplW2ZdPWM/Yzp0fW4rPTJ9cmV0dXJuIGV9LHN0cjpmdW5jdGlvbihlLG4pe2Zvcih2YXIgciBpbiBuKWlmKHR5cGVvZiBuW3JdPT09dSYmbltyXS5sZW5ndGg+MCl7Zm9yKHZhciBzPTA7czxuW3JdLmxlbmd0aDtzKyspaWYoUy5oYXMobltyXVtzXSxlKSlyZXR1cm4gcj09PWk/dDpyfWVsc2UgaWYoUy5oYXMobltyXSxlKSlyZXR1cm4gcj09PWk/dDpyO3JldHVybiBlfX0sVD17YnJvd3Nlcjp7b2xkc2FmYXJpOnt2ZXJzaW9uOntcIjEuMFwiOlwiLzhcIiwxLjI6XCIvMVwiLDEuMzpcIi8zXCIsXCIyLjBcIjpcIi80MTJcIixcIjIuMC4yXCI6XCIvNDE2XCIsXCIyLjAuM1wiOlwiLzQxN1wiLFwiMi4wLjRcIjpcIi80MTlcIixcIj9cIjpcIi9cIn19fSxkZXZpY2U6e2FtYXpvbjp7bW9kZWw6e1wiRmlyZSBQaG9uZVwiOltcIlNEXCIsXCJLRlwiXX19LHNwcmludDp7bW9kZWw6e1wiRXZvIFNoaWZ0IDRHXCI6XCI3MzczS1RcIn0sdmVuZG9yOntIVEM6XCJBUEFcIixTcHJpbnQ6XCJTcHJpbnRcIn19fSxvczp7d2luZG93czp7dmVyc2lvbjp7TUU6XCI0LjkwXCIsXCJOVCAzLjExXCI6XCJOVDMuNTFcIixcIk5UIDQuMFwiOlwiTlQ0LjBcIiwyZTM6XCJOVCA1LjBcIixYUDpbXCJOVCA1LjFcIixcIk5UIDUuMlwiXSxWaXN0YTpcIk5UIDYuMFwiLDc6XCJOVCA2LjFcIiw4OlwiTlQgNi4yXCIsOC4xOlwiTlQgNi4zXCIsMTA6W1wiTlQgNi40XCIsXCJOVCAxMC4wXCJdLFJUOlwiQVJNXCJ9fX19LE49e2Jyb3dzZXI6W1svKG9wZXJhXFxzbWluaSlcXC8oW1xcd1xcLi1dKykvaSwvKG9wZXJhXFxzW21vYmlsZXRhYl0rKS4rdmVyc2lvblxcLyhbXFx3XFwuLV0rKS9pLC8ob3BlcmEpLit2ZXJzaW9uXFwvKFtcXHdcXC5dKykvaSwvKG9wZXJhKVtcXC9cXHNdKyhbXFx3XFwuXSspL2ldLFtjLGRdLFsvKG9waW9zKVtcXC9cXHNdKyhbXFx3XFwuXSspL2ldLFtbYyxcIk9wZXJhIE1pbmlcIl0sZF0sWy9cXHMob3ByKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIk9wZXJhXCJdLGRdLFsvKGtpbmRsZSlcXC8oW1xcd1xcLl0rKS9pLC8obHVuYXNjYXBlfG1heHRob258bmV0ZnJvbnR8amFzbWluZXxibGF6ZXIpW1xcL1xcc10/KFtcXHdcXC5dKykqL2ksLyhhdmFudFxcc3xpZW1vYmlsZXxzbGltfGJhaWR1KSg/OmJyb3dzZXIpP1tcXC9cXHNdPyhbXFx3XFwuXSopL2ksLyg/Om1zfFxcKCkoaWUpXFxzKFtcXHdcXC5dKykvaSwvKHJla29ucSlcXC8oW1xcd1xcLl0rKSovaSwvKGNocm9taXVtfGZsb2NrfHJvY2ttZWx0fG1pZG9yaXxlcGlwaGFueXxzaWxrfHNreWZpcmV8b3ZpYnJvd3Nlcnxib2x0fGlyb258dml2YWxkaXxpcmlkaXVtfHBoYW50b21qcylcXC8oW1xcd1xcLi1dKykvaV0sW2MsZF0sWy8odHJpZGVudCkuK3J2WzpcXHNdKFtcXHdcXC5dKykuK2xpa2VcXHNnZWNrby9pXSxbW2MsXCJJRVwiXSxkXSxbLyhlZGdlKVxcLygoXFxkKyk/W1xcd1xcLl0rKS9pXSxbYyxkXSxbLyh5YWJyb3dzZXIpXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiWWFuZGV4XCJdLGRdLFsvKGNvbW9kb19kcmFnb24pXFwvKFtcXHdcXC5dKykvaV0sW1tjLC9fL2csXCIgXCJdLGRdLFsvKG1pY3JvbWVzc2VuZ2VyKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIldlQ2hhdFwiXSxkXSxbL3hpYW9taVxcL21pdWlicm93c2VyXFwvKFtcXHdcXC5dKykvaV0sW2QsW2MsXCJNSVVJIEJyb3dzZXJcIl1dLFsvXFxzd3ZcXCkuKyhjaHJvbWUpXFwvKFtcXHdcXC5dKykvaV0sW1tjLC8oLispLyxcIiQxIFdlYlZpZXdcIl0sZF0sWy9hbmRyb2lkLitzYW1zdW5nYnJvd3NlclxcLyhbXFx3XFwuXSspL2ksL2FuZHJvaWQuK3ZlcnNpb25cXC8oW1xcd1xcLl0rKVxccysoPzptb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkqL2ldLFtkLFtjLFwiQW5kcm9pZCBCcm93c2VyXCJdXSxbLyhjaHJvbWV8b21uaXdlYnxhcm9yYXxbdGl6ZW5va2FdezV9XFxzP2Jyb3dzZXIpXFwvdj8oW1xcd1xcLl0rKS9pLC8ocXFicm93c2VyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ldLFtjLGRdLFsvKHVjXFxzP2Jyb3dzZXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaSwvdWN3ZWIuKyh1Y2Jyb3dzZXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaSwvanVjLisodWN3ZWIpW1xcL1xcc10/KFtcXHdcXC5dKykvaV0sW1tjLFwiVUNCcm93c2VyXCJdLGRdLFsvKGRvbGZpbilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJEb2xwaGluXCJdLGRdLFsvKCg/OmFuZHJvaWQuKyljcm1vfGNyaW9zKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIkNocm9tZVwiXSxkXSxbLztmYmF2XFwvKFtcXHdcXC5dKyk7L2ldLFtkLFtjLFwiRmFjZWJvb2tcIl1dLFsvZnhpb3NcXC8oW1xcd1xcLi1dKykvaV0sW2QsW2MsXCJGaXJlZm94XCJdXSxbL3ZlcnNpb25cXC8oW1xcd1xcLl0rKS4rP21vYmlsZVxcL1xcdytcXHMoc2FmYXJpKS9pXSxbZCxbYyxcIk1vYmlsZSBTYWZhcmlcIl1dLFsvdmVyc2lvblxcLyhbXFx3XFwuXSspLis/KG1vYmlsZVxccz9zYWZhcml8c2FmYXJpKS9pXSxbZCxjXSxbL3dlYmtpdC4rPyhtb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkoXFwvW1xcd1xcLl0rKS9pXSxbYyxbZCx4LnN0cixULmJyb3dzZXIub2xkc2FmYXJpLnZlcnNpb25dXSxbLyhrb25xdWVyb3IpXFwvKFtcXHdcXC5dKykvaSwvKHdlYmtpdHxraHRtbClcXC8oW1xcd1xcLl0rKS9pXSxbYyxkXSxbLyhuYXZpZ2F0b3J8bmV0c2NhcGUpXFwvKFtcXHdcXC4tXSspL2ldLFtbYyxcIk5ldHNjYXBlXCJdLGRdLFsvKHN3aWZ0Zm94KS9pLC8oaWNlZHJhZ29ufGljZXdlYXNlbHxjYW1pbm98Y2hpbWVyYXxmZW5uZWN8bWFlbW9cXHNicm93c2VyfG1pbmltb3xjb25rZXJvcilbXFwvXFxzXT8oW1xcd1xcLlxcK10rKS9pLC8oZmlyZWZveHxzZWFtb25rZXl8ay1tZWxlb258aWNlY2F0fGljZWFwZXxmaXJlYmlyZHxwaG9lbml4KVxcLyhbXFx3XFwuLV0rKS9pLC8obW96aWxsYSlcXC8oW1xcd1xcLl0rKS4rcnZcXDouK2dlY2tvXFwvXFxkKy9pLC8ocG9sYXJpc3xseW54fGRpbGxvfGljYWJ8ZG9yaXN8YW1heWF8dzNtfG5ldHN1cmZ8c2xlaXBuaXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaSwvKGxpbmtzKVxcc1xcKChbXFx3XFwuXSspL2ksLyhnb2Jyb3dzZXIpXFwvPyhbXFx3XFwuXSspKi9pLC8oaWNlXFxzP2Jyb3dzZXIpXFwvdj8oW1xcd1xcLl9dKykvaSwvKG1vc2FpYylbXFwvXFxzXShbXFx3XFwuXSspL2ldLFtjLGRdXSxjcHU6W1svKD86KGFtZHx4KD86KD86ODZ8NjQpW18tXSk/fHdvd3x3aW4pNjQpWztcXCldL2ldLFtbdixcImFtZDY0XCJdXSxbLyhpYTMyKD89OykpL2ldLFtbdixTLmxvd2VyaXplXV0sWy8oKD86aVszNDZdfHgpODYpWztcXCldL2ldLFtbdixcImlhMzJcIl1dLFsvd2luZG93c1xccyhjZXxtb2JpbGUpO1xcc3BwYzsvaV0sW1t2LFwiYXJtXCJdXSxbLygoPzpwcGN8cG93ZXJwYykoPzo2NCk/KSg/Olxcc21hY3w7fFxcKSkvaV0sW1t2LC9vd2VyLyxcIlwiLFMubG93ZXJpemVdXSxbLyhzdW40XFx3KVs7XFwpXS9pXSxbW3YsXCJzcGFyY1wiXV0sWy8oKD86YXZyMzJ8aWE2NCg/PTspKXw2OGsoPz1cXCkpfGFybSg/OjY0fCg/PXZcXGQrOykpfCg/PWF0bWVsXFxzKWF2cnwoPzppcml4fG1pcHN8c3BhcmMpKD86NjQpPyg/PTspfHBhLXJpc2MpL2ldLFtbdixTLmxvd2VyaXplXV1dLGRldmljZTpbWy9cXCgoaXBhZHxwbGF5Ym9vayk7W1xcd1xcc1xcKTstXSsocmltfGFwcGxlKS9pXSxbbCxwLFtoLHldXSxbL2FwcGxlY29yZW1lZGlhXFwvW1xcd1xcLl0rIFxcKChpcGFkKS9dLFtsLFtwLFwiQXBwbGVcIl0sW2gseV1dLFsvKGFwcGxlXFxzezAsMX10dikvaV0sW1tsLFwiQXBwbGUgVFZcIl0sW3AsXCJBcHBsZVwiXV0sWy8oYXJjaG9zKVxccyhnYW1lcGFkMj8pL2ksLyhocCkuKyh0b3VjaHBhZCkvaSwvKGhwKS4rKHRhYmxldCkvaSwvKGtpbmRsZSlcXC8oW1xcd1xcLl0rKS9pLC9cXHMobm9vaylbXFx3XFxzXStidWlsZFxcLyhcXHcrKS9pLC8oZGVsbClcXHMoc3RyZWFba3ByXFxzXFxkXSpbXFxka29dKS9pXSxbcCxsLFtoLHldXSxbLyhrZltBLXpdKylcXHNidWlsZFxcL1tcXHdcXC5dKy4qc2lsa1xcLy9pXSxbbCxbcCxcIkFtYXpvblwiXSxbaCx5XV0sWy8oc2R8a2YpWzAzNDloaWpvcnN0dXddK1xcc2J1aWxkXFwvW1xcd1xcLl0rLipzaWxrXFwvL2ldLFtbbCx4LnN0cixULmRldmljZS5hbWF6b24ubW9kZWxdLFtwLFwiQW1hem9uXCJdLFtoLGddXSxbL1xcKChpcFtob25lZHxcXHNcXHcqXSspOy4rKGFwcGxlKS9pXSxbbCxwLFtoLGddXSxbL1xcKChpcFtob25lZHxcXHNcXHcqXSspOy9pXSxbbCxbcCxcIkFwcGxlXCJdLFtoLGddXSxbLyhibGFja2JlcnJ5KVtcXHMtXT8oXFx3KykvaSwvKGJsYWNrYmVycnl8YmVucXxwYWxtKD89XFwtKXxzb255ZXJpY3Nzb258YWNlcnxhc3VzfGRlbGx8aHVhd2VpfG1laXp1fG1vdG9yb2xhfHBvbHl0cm9uKVtcXHNfLV0/KFtcXHctXSspKi9pLC8oaHApXFxzKFtcXHdcXHNdK1xcdykvaSwvKGFzdXMpLT8oXFx3KykvaV0sW3AsbCxbaCxnXV0sWy9cXChiYjEwO1xccyhcXHcrKS9pXSxbbCxbcCxcIkJsYWNrQmVycnlcIl0sW2gsZ11dLFsvYW5kcm9pZC4rKHRyYW5zZm9bcHJpbWVcXHNdezQsMTB9XFxzXFx3K3xlZWVwY3xzbGlkZXJcXHNcXHcrfG5leHVzIDd8cGFkZm9uZSkvaV0sW2wsW3AsXCJBc3VzXCJdLFtoLHldXSxbLyhzb255KVxccyh0YWJsZXRcXHNbcHNdKVxcc2J1aWxkXFwvL2ksLyhzb255KT8oPzpzZ3AuKylcXHNidWlsZFxcLy9pXSxbW3AsXCJTb255XCJdLFtsLFwiWHBlcmlhIFRhYmxldFwiXSxbaCx5XV0sWy8oPzpzb255KT8oPzooPzooPzpjfGQpXFxkezR9KXwoPzpzb1stbF0uKykpXFxzYnVpbGRcXC8vaV0sW1twLFwiU29ueVwiXSxbbCxcIlhwZXJpYSBQaG9uZVwiXSxbaCxnXV0sWy9cXHMob3V5YSlcXHMvaSwvKG5pbnRlbmRvKVxccyhbd2lkczN1XSspL2ldLFtwLGwsW2gsbV1dLFsvYW5kcm9pZC4rO1xccyhzaGllbGQpXFxzYnVpbGQvaV0sW2wsW3AsXCJOdmlkaWFcIl0sW2gsbV1dLFsvKHBsYXlzdGF0aW9uXFxzWzM0cG9ydGFibGV2aV0rKS9pXSxbbCxbcCxcIlNvbnlcIl0sW2gsbV1dLFsvKHNwcmludFxccyhcXHcrKSkvaV0sW1twLHguc3RyLFQuZGV2aWNlLnNwcmludC52ZW5kb3JdLFtsLHguc3RyLFQuZGV2aWNlLnNwcmludC5tb2RlbF0sW2gsZ11dLFsvKGxlbm92bylcXHM/KFMoPzo1MDAwfDYwMDApKyg/OlstXVtcXHcrXSkpL2ldLFtwLGwsW2gseV1dLFsvKGh0YylbO19cXHMtXSsoW1xcd1xcc10rKD89XFwpKXxcXHcrKSovaSwvKHp0ZSktKFxcdyspKi9pLC8oYWxjYXRlbHxnZWVrc3Bob25lfGh1YXdlaXxsZW5vdm98bmV4aWFufHBhbmFzb25pY3woPz07XFxzKXNvbnkpW19cXHMtXT8oW1xcdy1dKykqL2ldLFtwLFtsLC9fL2csXCIgXCJdLFtoLGddXSxbLyhuZXh1c1xcczkpL2ldLFtsLFtwLFwiSFRDXCJdLFtoLHldXSxbLyhuZXh1c1xcczZwKS9pXSxbbCxbcCxcIkh1YXdlaVwiXSxbaCxnXV0sWy8obWljcm9zb2Z0KTtcXHMobHVtaWFbXFxzXFx3XSspL2ldLFtwLGwsW2gsZ11dLFsvW1xcc1xcKDtdKHhib3goPzpcXHNvbmUpPylbXFxzXFwpO10vaV0sW2wsW3AsXCJNaWNyb3NvZnRcIl0sW2gsbV1dLFsvKGtpblxcLltvbmV0d117M30pL2ldLFtbbCwvXFwuL2csXCIgXCJdLFtwLFwiTWljcm9zb2Z0XCJdLFtoLGddXSxbL1xccyhtaWxlc3RvbmV8ZHJvaWQoPzpbMi00eF18XFxzKD86YmlvbmljfHgyfHByb3xyYXpyKSk/KDo/XFxzNGcpPylbXFx3XFxzXStidWlsZFxcLy9pLC9tb3RbXFxzLV0/KFxcdyspKi9pLC8oWFRcXGR7Myw0fSkgYnVpbGRcXC8vaSwvKG5leHVzXFxzNikvaV0sW2wsW3AsXCJNb3Rvcm9sYVwiXSxbaCxnXV0sWy9hbmRyb2lkLitcXHMobXo2MFxcZHx4b29tW1xcczJdezAsMn0pXFxzYnVpbGRcXC8vaV0sW2wsW3AsXCJNb3Rvcm9sYVwiXSxbaCx5XV0sWy9oYmJ0dlxcL1xcZCtcXC5cXGQrXFwuXFxkK1xccytcXChbXFx3XFxzXSo7XFxzKihcXHdbXjtdKik7KFteO10qKS9pXSxbW3AsUy50cmltXSxbbCxTLnRyaW1dLFtoLGJdXSxbL2hiYnR2LittYXBsZTsoXFxkKykvaV0sW1tsLC9eLyxcIlNtYXJ0VFZcIl0sW3AsXCJTYW1zdW5nXCJdLFtoLGJdXSxbL1xcKGR0dltcXCk7XS4rKGFxdW9zKS9pXSxbbCxbcCxcIlNoYXJwXCJdLFtoLGJdXSxbL2FuZHJvaWQuKygoc2NoLWlbODldMFxcZHxzaHctbTM4MHN8Z3QtcFxcZHs0fXxndC1uXFxkK3xzZ2gtdDhbNTZdOXxuZXh1cyAxMCkpL2ksLygoU00tVFxcdyspKS9pXSxbW3AsXCJTYW1zdW5nXCJdLGwsW2gseV1dLFsvc21hcnQtdHYuKyhzYW1zdW5nKS9pXSxbcCxbaCxiXSxsXSxbLygoc1tjZ3BdaC1cXHcrfGd0LVxcdyt8Z2FsYXh5XFxzbmV4dXN8c20tXFx3W1xcd1xcZF0rKSkvaSwvKHNhbVtzdW5nXSopW1xccy1dKihcXHcrLT9bXFx3LV0qKSovaSwvc2VjLSgoc2doXFx3KykpL2ldLFtbcCxcIlNhbXN1bmdcIl0sbCxbaCxnXV0sWy9zaWUtKFxcdyspKi9pXSxbbCxbcCxcIlNpZW1lbnNcIl0sW2gsZ11dLFsvKG1hZW1vfG5va2lhKS4qKG45MDB8bHVtaWFcXHNcXGQrKS9pLC8obm9raWEpW1xcc18tXT8oW1xcdy1dKykqL2ldLFtbcCxcIk5va2lhXCJdLGwsW2gsZ11dLFsvYW5kcm9pZFxcczNcXC5bXFxzXFx3Oy1dezEwfShhXFxkezN9KS9pXSxbbCxbcCxcIkFjZXJcIl0sW2gseV1dLFsvYW5kcm9pZFxcczNcXC5bXFxzXFx3Oy1dezEwfShsZz8pLShbMDZjdjldezMsNH0pL2ldLFtbcCxcIkxHXCJdLGwsW2gseV1dLFsvKGxnKSBuZXRjYXN0XFwudHYvaV0sW3AsbCxbaCxiXV0sWy8obmV4dXNcXHNbNDVdKS9pLC9sZ1tlO1xcc1xcLy1dKyhcXHcrKSovaV0sW2wsW3AsXCJMR1wiXSxbaCxnXV0sWy9hbmRyb2lkLisoaWRlYXRhYlthLXowLTlcXC1cXHNdKykvaV0sW2wsW3AsXCJMZW5vdm9cIl0sW2gseV1dLFsvbGludXg7LisoKGpvbGxhKSk7L2ldLFtwLGwsW2gsZ11dLFsvKChwZWJibGUpKWFwcFxcL1tcXGRcXC5dK1xccy9pXSxbcCxsLFtoLHddXSxbL2FuZHJvaWQuKztcXHMoZ2xhc3MpXFxzXFxkL2ldLFtsLFtwLFwiR29vZ2xlXCJdLFtoLHddXSxbL2FuZHJvaWQuKyhcXHcrKVxccytidWlsZFxcL2htXFwxL2ksL2FuZHJvaWQuKyhobVtcXHNcXC1fXSpub3RlP1tcXHNfXSooPzpcXGRcXHcpPylcXHMrYnVpbGQvaSwvYW5kcm9pZC4rKG1pW1xcc1xcLV9dKig/Om9uZXxvbmVbXFxzX11wbHVzfG5vdGUgbHRlKT9bXFxzX10qKD86XFxkXFx3KT8pXFxzK2J1aWxkL2ldLFtbbCwvXy9nLFwiIFwiXSxbcCxcIlhpYW9taVwiXSxbaCxnXV0sWy9hbmRyb2lkLithMDAwKDEpXFxzK2J1aWxkL2ldLFtsLFtwLFwiT25lUGx1c1wiXSxbaCxnXV0sWy9cXHModGFibGV0KVs7XFwvXS9pLC9cXHMobW9iaWxlKSg/Ols7XFwvXXxcXHNzYWZhcmkpL2ldLFtbaCxTLmxvd2VyaXplXSxwLGxdXSxlbmdpbmU6W1svd2luZG93cy4rXFxzZWRnZVxcLyhbXFx3XFwuXSspL2ldLFtkLFtjLFwiRWRnZUhUTUxcIl1dLFsvKHByZXN0bylcXC8oW1xcd1xcLl0rKS9pLC8od2Via2l0fHRyaWRlbnR8bmV0ZnJvbnR8bmV0c3VyZnxhbWF5YXxseW54fHczbSlcXC8oW1xcd1xcLl0rKS9pLC8oa2h0bWx8dGFzbWFufGxpbmtzKVtcXC9cXHNdXFwoPyhbXFx3XFwuXSspL2ksLyhpY2FiKVtcXC9cXHNdKFsyM11cXC5bXFxkXFwuXSspL2ldLFtjLGRdLFsvcnZcXDooW1xcd1xcLl0rKS4qKGdlY2tvKS9pXSxbZCxjXV0sb3M6W1svbWljcm9zb2Z0XFxzKHdpbmRvd3MpXFxzKHZpc3RhfHhwKS9pXSxbYyxkXSxbLyh3aW5kb3dzKVxcc250XFxzNlxcLjI7XFxzKGFybSkvaSwvKHdpbmRvd3NcXHNwaG9uZSg/Olxcc29zKSopW1xcc1xcL10/KFtcXGRcXC5cXHNdK1xcdykqL2ksLyh3aW5kb3dzXFxzbW9iaWxlfHdpbmRvd3MpW1xcc1xcL10/KFtudGNlXFxkXFwuXFxzXStcXHcpL2ldLFtjLFtkLHguc3RyLFQub3Mud2luZG93cy52ZXJzaW9uXV0sWy8od2luKD89M3w5fG4pfHdpblxcczl4XFxzKShbbnRcXGRcXC5dKykvaV0sW1tjLFwiV2luZG93c1wiXSxbZCx4LnN0cixULm9zLndpbmRvd3MudmVyc2lvbl1dLFsvXFwoKGJiKSgxMCk7L2ldLFtbYyxcIkJsYWNrQmVycnlcIl0sZF0sWy8oYmxhY2tiZXJyeSlcXHcqXFwvPyhbXFx3XFwuXSspKi9pLC8odGl6ZW4pW1xcL1xcc10oW1xcd1xcLl0rKS9pLC8oYW5kcm9pZHx3ZWJvc3xwYWxtXFxzb3N8cW54fGJhZGF8cmltXFxzdGFibGV0XFxzb3N8bWVlZ298Y29udGlraSlbXFwvXFxzLV0/KFtcXHdcXC5dKykqL2ksL2xpbnV4Oy4rKHNhaWxmaXNoKTsvaV0sW2MsZF0sWy8oc3ltYmlhblxccz9vc3xzeW1ib3N8czYwKD89OykpW1xcL1xccy1dPyhbXFx3XFwuXSspKi9pXSxbW2MsXCJTeW1iaWFuXCJdLGRdLFsvXFwoKHNlcmllczQwKTsvaV0sW2NdLFsvbW96aWxsYS4rXFwobW9iaWxlOy4rZ2Vja28uK2ZpcmVmb3gvaV0sW1tjLFwiRmlyZWZveCBPU1wiXSxkXSxbLyhuaW50ZW5kb3xwbGF5c3RhdGlvbilcXHMoW3dpZHMzNHBvcnRhYmxldnVdKykvaSwvKG1pbnQpW1xcL1xcc1xcKF0/KFxcdyspKi9pLC8obWFnZWlhfHZlY3RvcmxpbnV4KVs7XFxzXS9pLC8oam9saXxba3hsbl0/dWJ1bnR1fGRlYmlhbnxbb3Blbl0qc3VzZXxnZW50b298KD89XFxzKWFyY2h8c2xhY2t3YXJlfGZlZG9yYXxtYW5kcml2YXxjZW50b3N8cGNsaW51eG9zfHJlZGhhdHx6ZW53YWxrfGxpbnB1cylbXFwvXFxzLV0/KD8hY2hyb20pKFtcXHdcXC4tXSspKi9pLC8oaHVyZHxsaW51eClcXHM/KFtcXHdcXC5dKykqL2ksLyhnbnUpXFxzPyhbXFx3XFwuXSspKi9pXSxbYyxkXSxbLyhjcm9zKVxcc1tcXHddK1xccyhbXFx3XFwuXStcXHcpL2ldLFtbYyxcIkNocm9taXVtIE9TXCJdLGRdLFsvKHN1bm9zKVxccz8oW1xcd1xcLl0rXFxkKSovaV0sW1tjLFwiU29sYXJpc1wiXSxkXSxbL1xccyhbZnJlbnRvcGMtXXswLDR9YnNkfGRyYWdvbmZseSlcXHM/KFtcXHdcXC5dKykqL2ldLFtjLGRdLFsvKGhhaWt1KVxccyhcXHcrKS9pXSxbYyxkXSxbLyhpcFtob25lYWRdKykoPzouKm9zXFxzKFtcXHddKykqXFxzbGlrZVxcc21hY3w7XFxzb3BlcmEpL2ldLFtbYyxcImlPU1wiXSxbZCwvXy9nLFwiLlwiXV0sWy8obWFjXFxzb3NcXHN4KVxccz8oW1xcd1xcc1xcLl0rXFx3KSovaSwvKG1hY2ludG9zaHxtYWMoPz1fcG93ZXJwYylcXHMpL2ldLFtbYyxcIk1hYyBPU1wiXSxbZCwvXy9nLFwiLlwiXV0sWy8oKD86b3Blbik/c29sYXJpcylbXFwvXFxzLV0/KFtcXHdcXC5dKykqL2ksLyhhaXgpXFxzKChcXGQpKD89XFwufFxcKXxcXHMpW1xcd1xcLl0qKSovaSwvKHBsYW5cXHM5fG1pbml4fGJlb3N8b3NcXC8yfGFtaWdhb3N8bW9ycGhvc3xyaXNjXFxzb3N8b3BlbnZtcykvaSwvKHVuaXgpXFxzPyhbXFx3XFwuXSspKi9pXSxbYyxkXV19LEM9ZnVuY3Rpb24odCxuKXtpZih0aGlzIGluc3RhbmNlb2YgQyl7dmFyIGk9dHx8KGUmJmUubmF2aWdhdG9yJiZlLm5hdmlnYXRvci51c2VyQWdlbnQ/ZS5uYXZpZ2F0b3IudXNlckFnZW50OnIpLHM9bj9TLmV4dGVuZChOLG4pOk47cmV0dXJuIHRoaXMuZ2V0QnJvd3Nlcj1mdW5jdGlvbigpe3ZhciBlPXgucmd4LmFwcGx5KHRoaXMscy5icm93c2VyKTtyZXR1cm4gZS5tYWpvcj1TLm1ham9yKGUudmVyc2lvbiksZX0sdGhpcy5nZXRDUFU9ZnVuY3Rpb24oKXtyZXR1cm4geC5yZ3guYXBwbHkodGhpcyxzLmNwdSl9LHRoaXMuZ2V0RGV2aWNlPWZ1bmN0aW9uKCl7cmV0dXJuIHgucmd4LmFwcGx5KHRoaXMscy5kZXZpY2UpfSx0aGlzLmdldEVuZ2luZT1mdW5jdGlvbigpe3JldHVybiB4LnJneC5hcHBseSh0aGlzLHMuZW5naW5lKX0sdGhpcy5nZXRPUz1mdW5jdGlvbigpe3JldHVybiB4LnJneC5hcHBseSh0aGlzLHMub3MpfSx0aGlzLmdldFJlc3VsdD1mdW5jdGlvbigpe3JldHVybnt1YTp0aGlzLmdldFVBKCksYnJvd3Nlcjp0aGlzLmdldEJyb3dzZXIoKSxlbmdpbmU6dGhpcy5nZXRFbmdpbmUoKSxvczp0aGlzLmdldE9TKCksZGV2aWNlOnRoaXMuZ2V0RGV2aWNlKCksY3B1OnRoaXMuZ2V0Q1BVKCl9fSx0aGlzLmdldFVBPWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2V0VUE9ZnVuY3Rpb24oZSl7cmV0dXJuIGk9ZSx0aGlzfSx0aGlzfXJldHVybihuZXcgQyh0LG4pKS5nZXRSZXN1bHQoKX07Qy5WRVJTSU9OPW4sQy5CUk9XU0VSPXtOQU1FOmMsTUFKT1I6ZixWRVJTSU9OOmR9LEMuQ1BVPXtBUkNISVRFQ1RVUkU6dn0sQy5ERVZJQ0U9e01PREVMOmwsVkVORE9SOnAsVFlQRTpoLENPTlNPTEU6bSxNT0JJTEU6ZyxTTUFSVFRWOmIsVEFCTEVUOnksV0VBUkFCTEU6dyxFTUJFRERFRDpFfSxDLkVOR0lORT17TkFNRTpjLFZFUlNJT046ZH0sQy5PUz17TkFNRTpjLFZFUlNJT046ZH0sdHlwZW9mIGV4cG9ydHMhPT1vPyh0eXBlb2YgbW9kdWxlIT09byYmbW9kdWxlLmV4cG9ydHMmJihleHBvcnRzPW1vZHVsZS5leHBvcnRzPUMpLGV4cG9ydHMuVUFQYXJzZXI9Qyk6dHlwZW9mIGRlZmluZT09PXMmJmRlZmluZS5hbWQ/ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIEN9KTplLlVBUGFyc2VyPUM7dmFyIGs9ZS5qUXVlcnl8fGUuWmVwdG87aWYodHlwZW9mIGshPT1vKXt2YXIgTD1uZXcgQztrLnVhPUwuZ2V0UmVzdWx0KCksay51YS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gTC5nZXRVQSgpfSxrLnVhLnNldD1mdW5jdGlvbihlKXtMLnNldFVBKGUpO3ZhciB0PUwuZ2V0UmVzdWx0KCk7Zm9yKHZhciBuIGluIHQpay51YVtuXT10W25dfX19KSh0eXBlb2Ygd2luZG93PT1cIm9iamVjdFwiP3dpbmRvdzp0aGlzKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy91YS1wYXJzZXIubWluLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcImRlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdFwiKTsgfTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogcHJlbG9hZEltZ1xuICogQHBhcmFtIGltZ1BhdGhcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5leHBvcnQgZGVmYXVsdCAoaW1nUGF0aCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIHZhciBpbWc7XG4gICAgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBpbWcucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFyZ3VtZW50cy5jYWxsZWUpO1xuICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW1nLnNyYyA9IGltZ1BhdGg7XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvaW1nL3ByZWxvYWRJbWcuanMiLCIvKipcbiAqIHNldFVwQnRuVHdpdHRlclxuICogQHBhcmFtICRidG5cbiAqIEBwYXJhbSB0ZXh0XG4gKiBAcGFyYW0gc2hhcmVVUkxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCRidG4sIHRleHQsIHNoYXJlVVJMKSA9PiB7XG4gIHZhciB1cmw7XG4gIGlmIChzaGFyZVVSTCA9PSBudWxsKSB7XG4gICAgc2hhcmVVUkwgPSAnJztcbiAgfVxuICB1cmwgPSAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/JztcbiAgaWYgKHNoYXJlVVJMID09PSAnJykge1xuICAgIHVybCArPSBcInRleHQ9XCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKTtcbiAgfSBlbHNlIHtcbiAgICB1cmwgKz0gXCJ1cmw9XCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHNoYXJlVVJMKSkgKyBcIiZ0ZXh0PVwiICsgKGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSk7XG4gIH1cbiAgcmV0dXJuICRidG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHdpbmRvdy5vcGVuKHVybCwgJ3R3aXR0ZXJTaGFyZScsICd3aWR0aD02NzAsaGVpZ2h0PTQwMCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5Ud2l0dGVyLmpzIiwiLyoqXG4gKiBzZXRVcEJ0bkxpbmVcbiAqIEBwYXJhbSAkYnRuXG4gKiBAcGFyYW0gdGV4dFxuICogQHBhcmFtIHNoYXJlVVJMXG4gKi9cbmV4cG9ydCBkZWZhdWx0ICgkYnRuLCB0ZXh0LCBzaGFyZVVSTCA9ICcnKSA9PiB7XG4gIHZhciB1cmw7XG4gIGlmIChzaGFyZVVSTCA9PSBudWxsKSB7XG4gICAgc2hhcmVVUkwgPSAnJztcbiAgfVxuICB1cmwgPSAnaHR0cDovL2xpbmUubWUvbXNnL3RleHQvPyc7XG4gIGlmIChzaGFyZVVSTCA9PT0gJycpIHtcbiAgICB1cmwgKz0gXCJcIiArIChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpO1xuICB9IGVsc2Uge1xuICAgIHVybCArPSAoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKSArIFwiXFxuXCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHNoYXJlVVJMKSk7XG4gIH1cbiAgcmV0dXJuICRidG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHdpbmRvdy5vcGVuKHVybCwgJ2xpbmVTaGFyZScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5MaW5lLmpzIiwiLyoqXG4gKiBzZXRVcEJ0bkZhY2Vib29rXG4gKiBAcGFyYW0gJGJ0blxuICogQHBhcmFtIHNoYXJlVVJMXG4gKiBAcGFyYW0gZGVzY3JpcHRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCRidG4sIHNoYXJlVVJMLCBkZXNjcmlwdGlvbiA9ICcnKSA9PiB7XG4gIHZhciB1cmw7XG4gIGlmIChkZXNjcmlwdGlvbiA9PSBudWxsKSB7XG4gICAgZGVzY3JpcHRpb24gPSAnJztcbiAgfVxuICB1cmwgPSAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwPyZkaXNwbGF5PXBvcHVwJnU9JztcbiAgdXJsICs9IFwiXCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHNoYXJlVVJMKSk7XG4gIGlmIChkZXNjcmlwdGlvbikge1xuICAgIHVybCArPSBcIiZkZXNjcmlwdGlvbj1cIiArIChlbmNvZGVVUklDb21wb25lbnQoZGVzY3JpcHRpb24pKTtcbiAgfVxuICByZXR1cm4gJGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgd2luZG93Lm9wZW4odXJsLCBcImZhY2Vib29rU2hhcmVcIiArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSksICd3aWR0aD02NzAsaGVpZ2h0PTQwMCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5GYWNlQm9vay5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IEZ1bmNcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuYyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmJsYW5rKCk7XG4gICAgdGhpcy5kZWJ1Z2dlcigpO1xuICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG4gICAgdGhpcy5leHBhbmRqUXVlcnkoKTtcblxuICB9XG5cbiAgYmxhbmsoKSB7XG5cbiAgICAkKCgpPT57JCgnLmJsYW5rJykuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpO30pO1xuXG4gIH1cblxuICBkZWJ1Z2dlcigpIHtcblxuICAgIC8vIOODh+ODkOODg+OCsOODouODvOODieWIh+abv1xuICAgIHZhciBSRUxFQVNFID0gZ2IuaW4uY29uZi5SRUxFQVNFO1xuXG4gICAgLy8g572u5o+b5a++6LGh44Gu44Oh44K944OD44OJ44KS6YWN5YiX44Go44GX44Gm5L+d5oyB44GZ44KLXG4gICAgdmFyIG1ldGhvZHMgPSBbXG4gICAgICAnbG9nJyxcbiAgICAgICdkZWJ1ZycsXG4gICAgICAnaW5mbycsXG4gICAgICAnd2FybicsXG4gICAgICAnZXJyb3InLFxuICAgICAgJ2RpcicsXG4gICAgICAndHJhY2UnLFxuICAgICAgJ2Fzc2VydCcsXG4gICAgICAnZGlyeG1sJyxcbiAgICAgICdncm91cCcsXG4gICAgICAnZ3JvdXBFbmQnLFxuICAgICAgJ3RpbWUnLFxuICAgICAgJ3RpbWVFbmQnLFxuICAgICAgJ2NvdW50JyxcbiAgICAgICdwcm9maWxlJyxcbiAgICAgICdwcm9maWxlRW5kJ1xuICAgIF07XG5cbiAgICAvLyBjb25zb2xl44GM5L2/44GI44Gq44GE5aC05ZCI44Gv56m644Gu44Kq44OW44K444Kn44Kv44OI44KS6Kit5a6a44GX44Gm44GK44GPXG4gICAgaWYoIHR5cGVvZiB3aW5kb3cuY29uc29sZSA9PT0gXCJ1bmRlZmluZWRcIiApe1xuICAgICAgd2luZG93LmNvbnNvbGUgPSB7fTtcbiAgICB9XG5cbiAgICAvLyDlkITjg6Hjgr3jg4Pjg4njgpJ3aW5kb3fjgbjnm7TmjqXov73liqDjgZfjgabooYzjgY9cbiAgICBmb3IoIHZhciBpIGluIG1ldGhvZHMgKXtcbiAgICAgIChmdW5jdGlvbiggbSApe1xuXG4gICAgICAgLy8gY29uc29sZeOBq+OBguOCi++8n+ODh+ODkOODg+OCsOODouODvOODieOBr+acieWKue+8n2NvbnNvbGXjga7jgoLjga7jga/plqLmlbDvvJ9cbiAgICAgICBpZiggY29uc29sZVttXSAmJiAhUkVMRUFTRSAmJiB0eXBlb2YgY29uc29sZVttXSA9PT0gXCJmdW5jdGlvblwiICl7XG4gICAgICAgIHdpbmRvd1ttXSA9IGNvbnNvbGVbbV0uYmluZChjb25zb2xlKTtcbiAgICAgICB9IGVsc2Uge+OAgC8vIGRlYnVnTW9kZeOBjGZhbHNlLOOCguOBl+OBj+OBr+ipsuW9k+ODoeOCveODg+ODieOBjOWtmOWcqOOBl+OBquOBhOWgtOWQiOOBr+OAgeepuuOBruODoeOCveODg+ODieOCkueUqOaEj+OBmeOCi1xuICAgICAgICB3aW5kb3dbbV0gPSBmdW5jdGlvbigpe307XG4gICAgICAgfVxuXG4gICAgICB9KSggbWV0aG9kc1tpXSApO1xuICAgIH1cblxuICB9XG5cbiAgcHJlcGVuZChwYXJhbSkge1xuXG4gICAgJCgnYm9keScpLnByZXBlbmQocGFyYW0pO1xuXG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB7XG5cbiAgICB2YXIgRlBTID0gMTAwMC82MDtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IC8vIGNocm9tZeOChOacgOaWsOOBrlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IC8vIOWPpOOBhGZpcmVmb3jnlKhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAgLy8gc2FmYXJpNuS7peWJjeOAgWlPUzYgc2FmYXJp55SoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgRlBTKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCB0aW1lciApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07ICAgICAgXG5cbiAgfVxuXG4gIGV4cGFuZGpRdWVyeSgpIHtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgdzowLCBcbiAgICAgIGg6MCwgXG4gICAgICBhZGp1c3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ2xlZnQnOic1MCUnLFxuICAgICAgICAgICAgJ3RvcCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLWxlZnQnOictJyArICh3IC8gMikgKyAncHgnLFxuICAgICAgICAgICAgJ21hcmdpbi10b3AnOictJyArIChoIC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYWRqdXN0VzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAnbGVmdCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLWxlZnQnOictJyArICh3IC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYWRqdXN0SDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAndG9wJzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tdG9wJzonLScgKyAoaCAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICBjaGVja0Nzc0JsZW5kKCkge1xuXG4gICAgaWYgKCdDU1MnIGluIHdpbmRvdyAmJiAnc3VwcG9ydHMnIGluIHdpbmRvdy5DU1MpIHtcbiAgICAgIGlmICghd2luZG93LkNTUy5zdXBwb3J0cygnbWl4LWJsZW5kLW1vZGUnLCAnc29mdC1saWdodCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3QtbWl4LWJsZW5kLW1vZGUnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxvZyhnYi5pbi51LmlzSUUpO1xuXG4gICAgaWYgKGdiLmluLnUuaXNJRSkge1xuICAgICAgXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm90LW1peC1ibGVuZC1tb2RlJylcbiAgICAgIFxuICAgIH07XG5cbiAgfVxuXG4gIG5vdFNhdmVJbWcoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBwY1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB7XG5cbiAgICAgICQoKCk9PntcbiAgICAgICAgJChcImltZ1wiKS5vbihcImNvbnRleHRtZW51XCIsKCk9PntcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBzcCBhbmRyb2lkXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB2YXIgdiA9IGdiLmluLnUuaXNBbmRyb2lkVmVyc2lvbigpO1xuXG4gICAgaWYgKHY9PXVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIGlmICh2PDUpIHtcblxuICAgICAgdmFyIHRpbWVyO1xuICAgICAgJChcImltZ1wiKS5vbihcInRvdWNoc3RhcnRcIiwoKT0+e1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICBhbGVydChcIueUu+WDj+OBr+S/neWtmOOBp+OBjeOBvuOBm+OCk1wiKVxuICAgICAgICB9LDUwMClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgICQoXCJpbWdcIikub24oXCJ0b3VjaGVuZFwiLCgpPT57XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pICAgICAgXG5cbiAgICB9XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9teWxpYnMvRnVuYy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IE1haW5cbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IERpc3BsYXlUb3AgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5VG9wJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuICAgIC8vcGFnZeODmuODvOOCuOWIpeOBrklE44KS5Y+W5b6XXG4gICAgdmFyIHBhZ2UgPSAkKCdib2R5JykuZGF0YSgnaWQnKTtcblxuICAgIHdpbmRvdy5jb25zb2xlLmxvZygn54++5Zyo44Gu44Oa44O844K4SUTjga8gJywgcGFnZSk7XG5cblx0XHQvL3BhZ2Xjga5JROOBlOOBqOOBq+eZuueBq+OBmeOCi+OCr+ODqeOCueOBruaMr+OCiuWIhuOBkVxuICAgIHN3aXRjaCAocGFnZSkge1xuXG4gICAgICBjYXNlICd0b3AnOlxuXG4gICAgICAgIG5ldyBEaXNwbGF5VG9wKCk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIFxuICB9XG5cbiAgb25SZW5kZXIoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL01haW4uanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBEaXNwbGF5XG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbi8vIGltcG9ydCBXZWJHTGluaXQgZnJvbSAnLi9XZWJHTGluaXQuanMnO1xuXG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuLi92aXN1YWwvQ2FudmFzXCI7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzcGxheVRvcCB7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNldEV2ZW50cygpO1xuXG4gIH1cblxuICBzZXR1cCgpIHtcblxuICAgIC8vIOOCouODi+ODoeODvOOCt+ODp+ODs+ODq+ODvOODl+OCueOCv+ODvOODiFxuICAgIC8vIGdiLmluLnVwLmxvb3AoKTtcbiAgICBcbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIGdiLmluLmNhbnZhcyA9IG5ldyBDYW52YXMoe1xuICAgICAgb3V0cHV0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2ViZ2wtb3V0cHV0JylcbiAgICB9KTtcblxuICAgIC8vIGdiLmluLmNhbnZhcy5pbml0KCk7XG5cblxuICB9XG5cbiAgc3RhdGljIHJ1bigpIHtcblxuXHRcdC8vIHdpbmRvdy5jb25zb2xlLmxvZygnc3RhdGljX1J1bicpO1xuXG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTsgICAgICAgIFxuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VG9wLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQ2FudmFzXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5Jztcbi8vIGltcG9ydCBDYW1lcmEgZnJvbSAnLi9VdGlscy9DYW1lcmEuanMnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKG9wdHMgPSB7fSkge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLm91dHB1dCA9IG9wdHMub3V0cHV0IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuICAgIHRoaXMuc2NlbmUgPSBudWxsO1xuXHRcdHRoaXMuY3ViZSA9IG51bGw7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSA9IHRoaXMuX2NyZWF0ZUNhbWVyYS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIgPSB0aGlzLl9jcmVhdGVSZW5kZXJlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUgPSB0aGlzLl9jcmVhdGVTY2VuZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlT2JqZWN0ID0gdGhpcy5fY3JlYXRlT2JqZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcmJpdENvbnRyb2xzID0gdGhpcy5fb3JiaXRDb250cm9scy5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5vblJlc2l6ZSA9IHRoaXMuX29uUmVzaXplLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLlVwZGF0ZSA9IHRoaXMuX1VwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gIH1cblxuICAvKipcbiAgICog5Yid5pyf5YyWXG4gICAqL1xuICBpbml0KCl7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpO1xuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKCk7XG5cblx0XHR0aGlzLm9yYml0Q29udHJvbHMoKTtcblxuXHRcdHRoaXMuY3JlYXRlT2JqZWN0KCk7XG5cbiAgICB0aGlzLlVwZGF0ZSgpO1xuXG4gICAgLy/jg6rjgrXjgqTjgrrjgqTjg5njg7Pjg4jnmbrngatcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgIH0sIGZhbHNlKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOOCq+ODoeODqeS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZUNhbWVyYSgpe1xuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHRoaXMud2lkdGggLyB0aGlzLmhlaWdodCwgMC4xLCAxMDAwKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi54ID0gLTMwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSA0MDtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMzA7XG5cbiAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwwLDApKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvOS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVJlbmRlcmVyKCl7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgYWxwaGEgICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICBhbnRpYWxpYXMgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIHN0ZW5jaWwgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgZGVwdGggICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIHByZW11bHRpcGxpZWRBbHBoYSA6IGZhbHNlXG5cdFx0fSk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhmZmZmZmYpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIHRoaXMub3V0cHV0LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKuOAgOOCt+ODvOODs+S9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVNjZW5lKCl7XG5cblx0XHR0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgfVxuXG5cdC8qKlxuXHQgKuOAgE9iamVjdOS9nOaIkFxuXHQgKi9cblx0X2NyZWF0ZU9iamVjdCgpe1xuXG4gICAgbGV0IGN1YmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg0LCA0LCA0KTtcbiAgICBsZXQgY3ViZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiAweDAwMDAwMCxcbiAgICAgIHdpcmVmcmFtZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdGhpcy5jdWJlID0gbmV3IFRIUkVFLk1lc2goY3ViZUdlb21ldHJ5LCBjdWJlTWF0ZXJpYWwpO1xuICAgIHRoaXMuY3ViZS5wb3NpdGlvbi54ID0gMztcbiAgICB0aGlzLmN1YmUucG9zaXRpb24ueSA9IDM7XG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLnogPSAzO1xuXG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5jdWJlKTtcblxuXHR9XG5cbiAgLyoqXG4gICAq44CA5pu05pawXG4gICAqL1xuICBfVXBkYXRlKCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuICAgICAgdGhpcy5VcGRhdGUoKTtcbiAgICB9KTtcbiAgICAvLyB0aGlzLmNvbnRyb2xzLnVwZGF0ZSgpO1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgfVxuXG4gIC8qKlxuICAgKuOAgOeUu+mdouODquOCteOCpOOCulxuICAgKi9cbiAgX29uUmVzaXplKCkge1xuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuXHQvKipcbiAgICog44Kr44Oh44Op44Kz44Oz44OI44Ot44O844OrXG5cdCAqL1xuXHRfb3JiaXRDb250cm9scygpe1xuXHRcdHRoaXMuY29udHJvbHMgPSBuZXcgVEhSRUUuT3JiaXRDb250cm9scyh0aGlzLmNhbWVyYSk7XG5cdFx0dGhpcy5jb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZTtcblx0XHRsZXQgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcblxuXHRcdGxldCBkZWx0YSA9IGNsb2NrLmdldERlbHRhKCk7XG5cdFx0dGhpcy5jb250cm9scy51cGRhdGUoZGVsdGEpO1xuICB9XG5cblx0c2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvQ2FudmFzLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRW50cnlcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxucmVxdWlyZSgnLi4vLi4vbGlicy9PcmJpdENvbnRyb2xzLmpzJyk7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cnkge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXG5cdH1cblxuXHQvKipcblx0ICog5Yid5pyf5YyWXG5cdCAqL1xuXHRpbml0KCl7XG5cblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0VudHJ5LmpzIiwiLyoqXG4gKiBAYXV0aG9yIHFpYW8gLyBodHRwczovL2dpdGh1Yi5jb20vcWlhb1xuICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbVxuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cbiAqIEBhdXRob3IgV2VzdExhbmdsZXkgLyBodHRwOi8vZ2l0aHViLmNvbS9XZXN0TGFuZ2xleVxuICogQGF1dGhvciBlcmljaDY2NiAvIGh0dHA6Ly9lcmljaGFpbmVzLmNvbVxuICovXG5cbi8vIFRoaXMgc2V0IG9mIGNvbnRyb2xzIHBlcmZvcm1zIG9yYml0aW5nLCBkb2xseWluZyAoem9vbWluZyksIGFuZCBwYW5uaW5nLlxuLy8gVW5saWtlIFRyYWNrYmFsbENvbnRyb2xzLCBpdCBtYWludGFpbnMgdGhlIFwidXBcIiBkaXJlY3Rpb24gb2JqZWN0LnVwICgrWSBieSBkZWZhdWx0KS5cbi8vXG4vLyAgICBPcmJpdCAtIGxlZnQgbW91c2UgLyB0b3VjaDogb25lIGZpbmdlciBtb3ZlXG4vLyAgICBab29tIC0gbWlkZGxlIG1vdXNlLCBvciBtb3VzZXdoZWVsIC8gdG91Y2g6IHR3byBmaW5nZXIgc3ByZWFkIG9yIHNxdWlzaFxuLy8gICAgUGFuIC0gcmlnaHQgbW91c2UsIG9yIGFycm93IGtleXMgLyB0b3VjaDogdGhyZWUgZmludGVyIHN3aXBlXG5cblRIUkVFLk9yYml0Q29udHJvbHMgPSBmdW5jdGlvbiAoIG9iamVjdCwgZG9tRWxlbWVudCApIHtcblxuXHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblxuXHR0aGlzLmRvbUVsZW1lbnQgPSAoIGRvbUVsZW1lbnQgIT09IHVuZGVmaW5lZCApID8gZG9tRWxlbWVudCA6IGRvY3VtZW50O1xuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoaXMgY29udHJvbFxuXHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXG5cdC8vIFwidGFyZ2V0XCIgc2V0cyB0aGUgbG9jYXRpb24gb2YgZm9jdXMsIHdoZXJlIHRoZSBvYmplY3Qgb3JiaXRzIGFyb3VuZFxuXHR0aGlzLnRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIGRvbGx5IGluIGFuZCBvdXQgKCBQZXJzcGVjdGl2ZUNhbWVyYSBvbmx5IClcblx0dGhpcy5taW5EaXN0YW5jZSA9IDA7XG5cdHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gem9vbSBpbiBhbmQgb3V0ICggT3J0aG9ncmFwaGljQ2FtZXJhIG9ubHkgKVxuXHR0aGlzLm1pblpvb20gPSAwO1xuXHR0aGlzLm1heFpvb20gPSBJbmZpbml0eTtcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgdmVydGljYWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0Ly8gUmFuZ2UgaXMgMCB0byBNYXRoLlBJIHJhZGlhbnMuXG5cdHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcblx0dGhpcy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTsgLy8gcmFkaWFuc1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCBob3Jpem9udGFsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdC8vIElmIHNldCwgbXVzdCBiZSBhIHN1Yi1pbnRlcnZhbCBvZiB0aGUgaW50ZXJ2YWwgWyAtIE1hdGguUEksIE1hdGguUEkgXS5cblx0dGhpcy5taW5BemltdXRoQW5nbGUgPSAtIEluZmluaXR5OyAvLyByYWRpYW5zXG5cdHRoaXMubWF4QXppbXV0aEFuZ2xlID0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblxuXHQvLyBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgZGFtcGluZyAoaW5lcnRpYSlcblx0Ly8gSWYgZGFtcGluZyBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0dGhpcy5lbmFibGVEYW1waW5nID0gZmFsc2U7XG5cdHRoaXMuZGFtcGluZ0ZhY3RvciA9IDAuMjU7XG5cblx0Ly8gVGhpcyBvcHRpb24gYWN0dWFsbHkgZW5hYmxlcyBkb2xseWluZyBpbiBhbmQgb3V0OyBsZWZ0IGFzIFwiem9vbVwiIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgem9vbWluZ1xuXHR0aGlzLmVuYWJsZVpvb20gPSB0cnVlO1xuXHR0aGlzLnpvb21TcGVlZCA9IDEuMDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSByb3RhdGluZ1xuXHR0aGlzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XG5cdHRoaXMucm90YXRlU3BlZWQgPSAxLjA7XG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcGFubmluZ1xuXHR0aGlzLmVuYWJsZVBhbiA9IHRydWU7XG5cdHRoaXMua2V5UGFuU3BlZWQgPSA3LjA7XHQvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXG5cblx0Ly8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcblx0Ly8gSWYgYXV0by1yb3RhdGUgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdHRoaXMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xuXHR0aGlzLmF1dG9Sb3RhdGVTcGVlZCA9IDIuMDsgLy8gMzAgc2Vjb25kcyBwZXIgcm91bmQgd2hlbiBmcHMgaXMgNjBcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcblx0dGhpcy5lbmFibGVLZXlzID0gdHJ1ZTtcblxuXHQvLyBUaGUgZm91ciBhcnJvdyBrZXlzXG5cdHRoaXMua2V5cyA9IHsgTEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwIH07XG5cblx0Ly8gTW91c2UgYnV0dG9uc1xuXHR0aGlzLm1vdXNlQnV0dG9ucyA9IHsgT1JCSVQ6IFRIUkVFLk1PVVNFLkxFRlQsIFpPT006IFRIUkVFLk1PVVNFLk1JRERMRSwgUEFOOiBUSFJFRS5NT1VTRS5SSUdIVCB9O1xuXG5cdC8vIGZvciByZXNldFxuXHR0aGlzLnRhcmdldDAgPSB0aGlzLnRhcmdldC5jbG9uZSgpO1xuXHR0aGlzLnBvc2l0aW9uMCA9IHRoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XG5cdHRoaXMuem9vbTAgPSB0aGlzLm9iamVjdC56b29tO1xuXG5cdC8vXG5cdC8vIHB1YmxpYyBtZXRob2RzXG5cdC8vXG5cblx0dGhpcy5nZXRQb2xhckFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIHNwaGVyaWNhbC5waGk7XG5cblx0fTtcblxuXHR0aGlzLmdldEF6aW11dGhhbEFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIHNwaGVyaWNhbC50aGV0YTtcblxuXHR9O1xuXG5cdHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRzY29wZS50YXJnZXQuY29weSggc2NvcGUudGFyZ2V0MCApO1xuXHRcdHNjb3BlLm9iamVjdC5wb3NpdGlvbi5jb3B5KCBzY29wZS5wb3NpdGlvbjAgKTtcblx0XHRzY29wZS5vYmplY3Quem9vbSA9IHNjb3BlLnpvb20wO1xuXG5cdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0fTtcblxuXHQvLyB0aGlzIG1ldGhvZCBpcyBleHBvc2VkLCBidXQgcGVyaGFwcyBpdCB3b3VsZCBiZSBiZXR0ZXIgaWYgd2UgY2FuIG1ha2UgaXQgcHJpdmF0ZS4uLlxuXHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHQvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcblx0XHR2YXIgcXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKCBvYmplY3QudXAsIG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxLCAwICkgKTtcblx0XHR2YXIgcXVhdEludmVyc2UgPSBxdWF0LmNsb25lKCkuaW52ZXJzZSgpO1xuXG5cdFx0dmFyIGxhc3RQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdFx0dmFyIGxhc3RRdWF0ZXJuaW9uID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKCkge1xuXG5cdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cblx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgdG8gXCJ5LWF4aXMtaXMtdXBcIiBzcGFjZVxuXHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdCApO1xuXG5cdFx0XHQvLyBhbmdsZSBmcm9tIHotYXhpcyBhcm91bmQgeS1heGlzXG5cdFx0XHRzcGhlcmljYWwuc2V0RnJvbVZlY3RvcjMoIG9mZnNldCApO1xuXG5cdFx0XHRpZiAoIHNjb3BlLmF1dG9Sb3RhdGUgJiYgc3RhdGUgPT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdFx0cm90YXRlTGVmdCggZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdHNwaGVyaWNhbC50aGV0YSArPSBzcGhlcmljYWxEZWx0YS50aGV0YTtcblx0XHRcdHNwaGVyaWNhbC5waGkgKz0gc3BoZXJpY2FsRGVsdGEucGhpO1xuXG5cdFx0XHQvLyByZXN0cmljdCB0aGV0YSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRzcGhlcmljYWwudGhldGEgPSBNYXRoLm1heCggc2NvcGUubWluQXppbXV0aEFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4QXppbXV0aEFuZ2xlLCBzcGhlcmljYWwudGhldGEgKSApO1xuXG5cdFx0XHQvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnBoaSA9IE1hdGgubWF4KCBzY29wZS5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbiggc2NvcGUubWF4UG9sYXJBbmdsZSwgc3BoZXJpY2FsLnBoaSApICk7XG5cblx0XHRcdHNwaGVyaWNhbC5tYWtlU2FmZSgpO1xuXG5cblx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgKj0gc2NhbGU7XG5cblx0XHRcdC8vIHJlc3RyaWN0IHJhZGl1cyB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRzcGhlcmljYWwucmFkaXVzID0gTWF0aC5tYXgoIHNjb3BlLm1pbkRpc3RhbmNlLCBNYXRoLm1pbiggc2NvcGUubWF4RGlzdGFuY2UsIHNwaGVyaWNhbC5yYWRpdXMgKSApO1xuXG5cdFx0XHQvLyBtb3ZlIHRhcmdldCB0byBwYW5uZWQgbG9jYXRpb25cblx0XHRcdHNjb3BlLnRhcmdldC5hZGQoIHBhbk9mZnNldCApO1xuXG5cdFx0XHRvZmZzZXQuc2V0RnJvbVNwaGVyaWNhbCggc3BoZXJpY2FsICk7XG5cblx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgYmFjayB0byBcImNhbWVyYS11cC12ZWN0b3ItaXMtdXBcIiBzcGFjZVxuXHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbiggcXVhdEludmVyc2UgKTtcblxuXHRcdFx0cG9zaXRpb24uY29weSggc2NvcGUudGFyZ2V0ICkuYWRkKCBvZmZzZXQgKTtcblxuXHRcdFx0c2NvcGUub2JqZWN0Lmxvb2tBdCggc2NvcGUudGFyZ2V0ICk7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlRGFtcGluZyA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnBoaSAqPSAoIDEgLSBzY29wZS5kYW1waW5nRmFjdG9yICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c2NhbGUgPSAxO1xuXHRcdFx0cGFuT2Zmc2V0LnNldCggMCwgMCwgMCApO1xuXG5cdFx0XHQvLyB1cGRhdGUgY29uZGl0aW9uIGlzOlxuXHRcdFx0Ly8gbWluKGNhbWVyYSBkaXNwbGFjZW1lbnQsIGNhbWVyYSByb3RhdGlvbiBpbiByYWRpYW5zKV4yID4gRVBTXG5cdFx0XHQvLyB1c2luZyBzbWFsbC1hbmdsZSBhcHByb3hpbWF0aW9uIGNvcyh4LzIpID0gMSAtIHheMiAvIDhcblxuXHRcdFx0aWYgKCB6b29tQ2hhbmdlZCB8fFxuXHRcdFx0XHRsYXN0UG9zaXRpb24uZGlzdGFuY2VUb1NxdWFyZWQoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApID4gRVBTIHx8XG5cdFx0XHRcdDggKiAoIDEgLSBsYXN0UXVhdGVybmlvbi5kb3QoIHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uICkgKSA+IEVQUyApIHtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBjaGFuZ2VFdmVudCApO1xuXG5cdFx0XHRcdGxhc3RQb3NpdGlvbi5jb3B5KCBzY29wZS5vYmplY3QucG9zaXRpb24gKTtcblx0XHRcdFx0bGFzdFF1YXRlcm5pb24uY29weSggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKTtcblx0XHRcdFx0em9vbUNoYW5nZWQgPSBmYWxzZTtcblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHR0aGlzLmRpc3Bvc2UgPSBmdW5jdGlvbigpIHtcblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UgKTtcblxuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG5cdFx0Ly9zY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdkaXNwb3NlJyB9ICk7IC8vIHNob3VsZCB0aGlzIGJlIGFkZGVkIGhlcmU/XG5cblx0fTtcblxuXHQvL1xuXHQvLyBpbnRlcm5hbHNcblx0Ly9cblxuXHR2YXIgc2NvcGUgPSB0aGlzO1xuXG5cdHZhciBjaGFuZ2VFdmVudCA9IHsgdHlwZTogJ2NoYW5nZScgfTtcblx0dmFyIHN0YXJ0RXZlbnQgPSB7IHR5cGU6ICdzdGFydCcgfTtcblx0dmFyIGVuZEV2ZW50ID0geyB0eXBlOiAnZW5kJyB9O1xuXG5cdHZhciBTVEFURSA9IHsgTk9ORSA6IC0gMSwgUk9UQVRFIDogMCwgRE9MTFkgOiAxLCBQQU4gOiAyLCBUT1VDSF9ST1RBVEUgOiAzLCBUT1VDSF9ET0xMWSA6IDQsIFRPVUNIX1BBTiA6IDUgfTtcblxuXHR2YXIgc3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdHZhciBFUFMgPSAwLjAwMDAwMTtcblxuXHQvLyBjdXJyZW50IHBvc2l0aW9uIGluIHNwaGVyaWNhbCBjb29yZGluYXRlc1xuXHR2YXIgc3BoZXJpY2FsID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXHR2YXIgc3BoZXJpY2FsRGVsdGEgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cblx0dmFyIHNjYWxlID0gMTtcblx0dmFyIHBhbk9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdHZhciB6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdHZhciByb3RhdGVTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciByb3RhdGVFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcm90YXRlRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdHZhciBwYW5TdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBwYW5FbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcGFuRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdHZhciBkb2xseVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIGRvbGx5RW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIGRvbGx5RGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdGZ1bmN0aW9uIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkge1xuXG5cdFx0cmV0dXJuIDIgKiBNYXRoLlBJIC8gNjAgLyA2MCAqIHNjb3BlLmF1dG9Sb3RhdGVTcGVlZDtcblxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Wm9vbVNjYWxlKCkge1xuXG5cdFx0cmV0dXJuIE1hdGgucG93KCAwLjk1LCBzY29wZS56b29tU3BlZWQgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gcm90YXRlTGVmdCggYW5nbGUgKSB7XG5cblx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAtPSBhbmdsZTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gcm90YXRlVXAoIGFuZ2xlICkge1xuXG5cdFx0c3BoZXJpY2FsRGVsdGEucGhpIC09IGFuZ2xlO1xuXG5cdH1cblxuXHR2YXIgcGFuTGVmdCA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIHYgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbkxlZnQoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAwICk7IC8vIGdldCBYIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIC0gZGlzdGFuY2UgKTtcblxuXHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0dmFyIHBhblVwID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuVXAoIGRpc3RhbmNlLCBvYmplY3RNYXRyaXggKSB7XG5cblx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbiggb2JqZWN0TWF0cml4LCAxICk7IC8vIGdldCBZIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdHYubXVsdGlwbHlTY2FsYXIoIGRpc3RhbmNlICk7XG5cblx0XHRcdHBhbk9mZnNldC5hZGQoIHYgKTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdC8vIGRlbHRhWCBhbmQgZGVsdGFZIGFyZSBpbiBwaXhlbHM7IHJpZ2h0IGFuZCBkb3duIGFyZSBwb3NpdGl2ZVxuXHR2YXIgcGFuID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW4gKCBkZWx0YVgsIGRlbHRhWSApIHtcblxuXHRcdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdFx0Ly8gcGVyc3BlY3RpdmVcblx0XHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXHRcdFx0XHRvZmZzZXQuY29weSggcG9zaXRpb24gKS5zdWIoIHNjb3BlLnRhcmdldCApO1xuXHRcdFx0XHR2YXIgdGFyZ2V0RGlzdGFuY2UgPSBvZmZzZXQubGVuZ3RoKCk7XG5cblx0XHRcdFx0Ly8gaGFsZiBvZiB0aGUgZm92IGlzIGNlbnRlciB0byB0b3Agb2Ygc2NyZWVuXG5cdFx0XHRcdHRhcmdldERpc3RhbmNlICo9IE1hdGgudGFuKCAoIHNjb3BlLm9iamVjdC5mb3YgLyAyICkgKiBNYXRoLlBJIC8gMTgwLjAgKTtcblxuXHRcdFx0XHQvLyB3ZSBhY3R1YWxseSBkb24ndCB1c2Ugc2NyZWVuV2lkdGgsIHNpbmNlIHBlcnNwZWN0aXZlIGNhbWVyYSBpcyBmaXhlZCB0byBzY3JlZW4gaGVpZ2h0XG5cdFx0XHRcdHBhbkxlZnQoIDIgKiBkZWx0YVggKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdHBhblVwKCAyICogZGVsdGFZICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdFx0Ly8gb3J0aG9ncmFwaGljXG5cdFx0XHRcdHBhbkxlZnQoIGRlbHRhWCAqICggc2NvcGUub2JqZWN0LnJpZ2h0IC0gc2NvcGUub2JqZWN0LmxlZnQgKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRXaWR0aCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXHRcdFx0XHRwYW5VcCggZGVsdGFZICogKCBzY29wZS5vYmplY3QudG9wIC0gc2NvcGUub2JqZWN0LmJvdHRvbSApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIGNhbWVyYSBuZWl0aGVyIG9ydGhvZ3JhcGhpYyBub3IgcGVyc3BlY3RpdmVcblx0XHRcdFx0Y29uc29sZS53YXJuKCAnV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicgKTtcblx0XHRcdFx0c2NvcGUuZW5hYmxlUGFuID0gZmFsc2U7XG5cblx0XHRcdH1cblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdGZ1bmN0aW9uIGRvbGx5SW4oIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRzY2FsZSAvPSBkb2xseVNjYWxlO1xuXG5cdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gKiBkb2xseVNjYWxlICkgKTtcblx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gZG9sbHlPdXQoIGRvbGx5U2NhbGUgKSB7XG5cblx0XHRpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhICkge1xuXG5cdFx0XHRzY2FsZSAqPSBkb2xseVNjYWxlO1xuXG5cdFx0fSBlbHNlIGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhICkge1xuXG5cdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KCBzY29wZS5taW5ab29tLCBNYXRoLm1pbiggc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gLyBkb2xseVNjYWxlICkgKTtcblx0XHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicgKTtcblx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcblxuXHRcdH1cblxuXHR9XG5cblx0Ly9cblx0Ly8gZXZlbnQgY2FsbGJhY2tzIC0gdXBkYXRlIHRoZSBvYmplY3Qgc3RhdGVcblx0Ly9cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duRG9sbHknICk7XG5cblx0XHRkb2xseVN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blBhbicgKTtcblxuXHRcdHBhblN0YXJ0LnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKCByb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0ICk7XG5cblx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcblx0XHRyb3RhdGVMZWZ0KCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdHJvdGF0ZVVwKCAyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHRyb3RhdGVTdGFydC5jb3B5KCByb3RhdGVFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlRG9sbHknICk7XG5cblx0XHRkb2xseUVuZC5zZXQoIGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkgKTtcblxuXHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGRvbGx5RGVsdGEueSA8IDAgKSB7XG5cblx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fVxuXG5cdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUGFuJyApO1xuXG5cdFx0cGFuRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyggcGFuRW5kLCBwYW5TdGFydCApO1xuXG5cdFx0cGFuKCBwYW5EZWx0YS54LCBwYW5EZWx0YS55ICk7XG5cblx0XHRwYW5TdGFydC5jb3B5KCBwYW5FbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVVwJyApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVdoZWVsJyApO1xuXG5cdFx0aWYgKCBldmVudC5kZWx0YVkgPCAwICkge1xuXG5cdFx0XHRkb2xseU91dCggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmRlbHRhWSA+IDAgKSB7XG5cblx0XHRcdGRvbGx5SW4oIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlS2V5RG93biggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlS2V5RG93bicgKTtcblxuXHRcdHN3aXRjaCAoIGV2ZW50LmtleUNvZGUgKSB7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5VUDpcblx0XHRcdFx0cGFuKCAwLCBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5CT1RUT006XG5cdFx0XHRcdHBhbiggMCwgLSBzY29wZS5rZXlQYW5TcGVlZCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxuXHRcdFx0XHRwYW4oIHNjb3BlLmtleVBhblNwZWVkLCAwICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLlJJR0hUOlxuXHRcdFx0XHRwYW4oIC0gc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0Um90YXRlJyApO1xuXG5cdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnREb2xseScgKTtcblxuXHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcblx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cblx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRkb2xseVN0YXJ0LnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFBhbicgKTtcblxuXHRcdHBhblN0YXJ0LnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVSb3RhdGUnICk7XG5cblx0XHRyb3RhdGVFbmQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuXHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuXHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVEb2xseScgKTtcblxuXHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWDtcblx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgLSBldmVudC50b3VjaGVzWyAxIF0ucGFnZVk7XG5cblx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoIGR4ICogZHggKyBkeSAqIGR5ICk7XG5cblx0XHRkb2xseUVuZC5zZXQoIDAsIGRpc3RhbmNlICk7XG5cblx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoIGRvbGx5RW5kLCBkb2xseVN0YXJ0ICk7XG5cblx0XHRpZiAoIGRvbGx5RGVsdGEueSA+IDAgKSB7XG5cblx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH1cblxuXHRcdGRvbGx5U3RhcnQuY29weSggZG9sbHlFbmQgKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVBhbicgKTtcblxuXHRcdHBhbkVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cblx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaEVuZCcgKTtcblxuXHR9XG5cblx0Ly9cblx0Ly8gZXZlbnQgaGFuZGxlcnMgLSBGU006IGxpc3RlbiBmb3IgZXZlbnRzIGFuZCByZXNldCBzdGF0ZVxuXHQvL1xuXG5cdGZ1bmN0aW9uIG9uTW91c2VEb3duKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5PUkJJVCApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZURvd25Sb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuUk9UQVRFO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuYnV0dG9uID09PSBzY29wZS5tb3VzZUJ1dHRvbnMuWk9PTSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VEb3duRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuRE9MTFk7XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5QQU4gKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VEb3duUGFuKCBldmVudCApO1xuXG5cdFx0XHRzdGF0ZSA9IFNUQVRFLlBBTjtcblxuXHRcdH1cblxuXHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UgKTtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKCBzdGF0ZSA9PT0gU1RBVEUuUk9UQVRFICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5ET0xMWSApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHR9IGVsc2UgaWYgKCBzdGF0ZSA9PT0gU1RBVEUuUEFOICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZVVwKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRoYW5kbGVNb3VzZVVwKCBldmVudCApO1xuXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSApO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZVdoZWVsKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgfHwgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSAmJiBzdGF0ZSAhPT0gU1RBVEUuUk9UQVRFICkgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0aGFuZGxlTW91c2VXaGVlbCggZXZlbnQgKTtcblxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTsgLy8gbm90IHN1cmUgd2h5IHRoZXNlIGFyZSBoZXJlLi4uXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25LZXlEb3duKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlS2V5cyA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGhhbmRsZUtleURvd24oIGV2ZW50ICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hTdGFydCggZXZlbnQgKSB7XG5cblx0XHRpZiAoIHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdGNhc2UgMTpcdC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ST1RBVEU7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcdC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnREb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX0RPTExZO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1BBTjtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5OT05FICkge1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBzdGFydEV2ZW50ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0c3dpdGNoICggZXZlbnQudG91Y2hlcy5sZW5ndGggKSB7XG5cblx0XHRcdGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX1JPVEFURSApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6IC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9ET0xMWSApIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXG5cblx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUEFOICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVQYW4oIGV2ZW50ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoRW5kKCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRoYW5kbGVUb3VjaEVuZCggZXZlbnQgKTtcblxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGVuZEV2ZW50ICk7XG5cblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uQ29udGV4dE1lbnUoIGV2ZW50ICkge1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHR9XG5cblx0Ly9cblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlICk7XG5cblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlICk7XG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApO1xuXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSApO1xuXG5cdC8vIGZvcmNlIGFuIHVwZGF0ZSBhdCBzdGFydFxuXG5cdHRoaXMudXBkYXRlKCk7XG5cbn07XG5cblRIUkVFLk9yYml0Q29udHJvbHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSApO1xuVEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUSFJFRS5PcmJpdENvbnRyb2xzO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggVEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUsIHtcblxuXHRjZW50ZXI6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuY2VudGVyIGhhcyBiZWVuIHJlbmFtZWQgdG8gLnRhcmdldCcgKTtcblx0XHRcdHJldHVybiB0aGlzLnRhcmdldDtcblxuXHRcdH1cblxuXHR9LFxuXG5cdC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcblxuXHRub1pvb206IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlWm9vbTtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVab29tID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdG5vUm90YXRlOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVSb3RhdGU7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZVJvdGF0ZSA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRub1Bhbjoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlUGFuO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVQYW4gPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0bm9LZXlzOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZUtleXM7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlS2V5cyA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRzdGF0aWNNb3ZpbmcgOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZURhbXBpbmc7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlRGFtcGluZyA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRkeW5hbWljRGFtcGluZ0ZhY3RvciA6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuIHRoaXMuZGFtcGluZ0ZhY3RvcjtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmRhbXBpbmdGYWN0b3IgPSB2YWx1ZTtcblxuXHRcdH1cblxuXHR9XG5cbn0gKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9saWJzL09yYml0Q29udHJvbHMuanMiXSwic291cmNlUm9vdCI6IiJ9