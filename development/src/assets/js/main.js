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
	
	        if (_this2.keyname == "ArrowRight" || _this2.keyname == "ArrowLeft") {
	          // keyname = event.key;
	
	          _this2.fadeInOutTimer = 0;
	          //scenes[0].meshMaterial.color = 0xffffff*Math.random();
	        }
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjgwZjFkYmJkZmU4YTdlYTNjMjgiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Ub3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL0NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvcmUvQ29uZi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL215bGlicy9VdGlsLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hbmltYXRpb24vcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYW5pbWF0aW9uL2NhbmNlbEFuaW1hdGlvbkZyYW1lLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvYXJyYXkvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy91YS9jaGVja0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy91YS1wYXJzZXIubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2FtZC1vcHRpb25zLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvaW1nL3ByZWxvYWRJbWcuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5Ud2l0dGVyLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvc25zL3NldFVwQnRuTGluZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL3Nucy9zZXRVcEJ0bkZhY2VCb29rLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvbXlsaWJzL0Z1bmMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL01haW4uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9EaXNwbGF5L0Rpc3BsYXlUb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvU2NlbmVNYW5nZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0VudHJ5LmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9saWJzL09yYml0Q29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvU2NlbmUwMS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9TY2VuZTAyLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VGV4dHVyZUJnLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1RleHR1cmVCZy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9QbGFuZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL2NvdmVyLnZlcnQiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hc3NldHMvZ2xzbC9jb3Zlci5mcmFnIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvRGlzcGxheS9EaXNwbGF5VGV4dHVyZU1vdmllLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL0NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QudmVydCIsIndlYnBhY2s6Ly8vLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QuZnJhZyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJnYiIsInVuZGVmaW5lZCIsImluIiwiY29tbW9uIiwibWFpbiIsIkNvbW1vbiIsInNldHVwIiwic2V0RXZlbnRzIiwiY29uZiIsInUiLCJmIiwidXQiLCIkIiwiZG9jdW1lbnQiLCJvbiIsIm9uUmVhZHkiLCJiaW5kIiwib25Mb2FkIiwiQ29uZiIsIlJFTEVBU0UiLCJGTEciLCJMT0ciLCJQQVJBTSIsIlNUQVRTIiwiZGVmVyIsImRlZkgiLCJXIiwiSCIsInNwVyIsInNwSCIsImJwIiwibW9kZSIsImtleXMiLCJzd2l0Y2hNb2RlIiwic2VjMDJJbWdOdW0iLCJ5b3V0dWJlSUQwMSIsInlvdXR1YmVJRDAyIiwid2ViRm9udExvYWRlZCIsImkiLCJrZXkiLCJsZW4iLCJwYXJhbSIsInJlZiIsInJlZjEiLCJ2YWx1ZSIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInNwbGl0IiwibGVuZ3RoIiwiaiIsIm9iaiIsImsiLCJ2YWwiLCJVdGlsIiwiaXNTZXRTUFNpemUiLCJzdGFydFRpbWUiLCJlbGFwc2VkVGltZSIsIm5vdyIsIkRhdGUiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtaW4xIiwibWF4MSIsIm1pbjIiLCJtYXgyIiwiaGl0IiwicmFuZ2UiLCJudW0iLCJyZXNNaW4iLCJyZXNNYXgiLCJiYXNlTWluIiwiYmFzZU1heCIsInAiLCJuIiwicG9zIiwiU3RyaW5nIiwiaW5kZXhPZiIsInN1YnN0ciIsIm51bWVyYXRvciIsImRlbm9taW5hdG9yIiwicmFkaWFucyIsIlBJIiwiYW5nbGUiLCJwMSIsInAyIiwic3FydCIsInBvdyIsIngiLCJ5IiwiYXJyIiwic29ydCIsImEiLCJiIiwiZ2V0VGltZSIsImZsZyIsImNzcyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJpc1Jlc1NQIiwiaXNSZXNQQyIsInVybCIsImhyZWYiLCJwYXJhbUl0ZW1zIiwibGlzdCIsInBhcmFtSXRlbSIsImhhc2giLCJsIiwibGVuMSIsImNvb2tpZSIsInIiLCJnIiwic3RyIiwidG9TdHJpbmciLCJBcnJheSIsImpvaW4iLCJjb250YWluIiwibnVtYmVyIiwiX3BvdyIsInJvdW5kIiwicmVzIiwib3JnIiwiZGVzdCIsImJlZm9yZSIsImFmdGVyIiwiUmVnRXhwIiwiZ2V0Tm93IiwiaG91ciIsImdldEhvdXJzIiwibWludXRlIiwiZ2V0TWludXRlcyIsInNlY29uZCIsImdldFNlY29uZHMiLCJtaWxsU2Vjb25kIiwiZ2V0TWlsbGlzZWNvbmRzIiwiZ2V0RGF0ZSIsIm1vbnRoZGF5cyIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJ3ZWVrRGF5SlAiLCJ3REoiLCJnZXREYXkiLCJ3ZWVrRGF5RU4iLCJ3REUiLCJkYXRlIiwiTnVtYmVyIiwiaWdub3JlQXJyYXkiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjYWxsIiwiJHRhcmdldCIsIiRpbWciLCJlYWNoIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsImF0dHIiLCJ0cmlnZ2VyIiwic2VsZiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9mZiIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwicGF0aG5hbWUiLCJldmVudCIsInJldHVyblZhbHVlIiwia2V5Q29kZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbndoZWVsIiwib25tb3VzZXdoZWVsIiwib250b3VjaG1vdmUiLCJvbmtleWRvd24iLCJwcmV2ZW50RGVmYXVsdEZvclNjcm9sbEtleXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiVXRpbHMiLCJfc2V0dXAiLCJjaGVja0NsaWVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl90aGlzIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJBcnIiLCJzbGljZSIsInQiLCJwYXJzZXIiLCJyZXF1aXJlIiwidWEiLCJicm93c2VyIiwiZ2V0QnJvd3NlciIsIm5hbWUiLCJkZXZpY2UiLCJnZXREZXZpY2UiLCJ0eXBlIiwiZ2V0T1MiLCJkZXZpY2VfbmFtZSIsInZlbmRvciIsImdldFVBIiwicyIsIm8iLCJjIiwiZCIsInYiLCJtIiwiRSIsIlMiLCJleHRlbmQiLCJjb25jYXQiLCJoYXMiLCJ0b0xvd2VyQ2FzZSIsImxvd2VyaXplIiwibWFqb3IiLCJ0cmltIiwicmd4IiwiYXJndW1lbnRzIiwiaGFzT3duUHJvcGVydHkiLCJleGVjIiwidGVzdCIsIlQiLCJvbGRzYWZhcmkiLCJ2ZXJzaW9uIiwiYW1hem9uIiwibW9kZWwiLCJzcHJpbnQiLCJIVEMiLCJTcHJpbnQiLCJvcyIsIndpbmRvd3MiLCJNRSIsIlhQIiwiVmlzdGEiLCJSVCIsIk4iLCJjcHUiLCJlbmdpbmUiLCJDIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiYXBwbHkiLCJnZXRDUFUiLCJnZXRFbmdpbmUiLCJnZXRSZXN1bHQiLCJzZXRVQSIsIlZFUlNJT04iLCJCUk9XU0VSIiwiTkFNRSIsIk1BSk9SIiwiQ1BVIiwiQVJDSElURUNUVVJFIiwiREVWSUNFIiwiTU9ERUwiLCJWRU5ET1IiLCJUWVBFIiwiQ09OU09MRSIsIk1PQklMRSIsIlNNQVJUVFYiLCJUQUJMRVQiLCJXRUFSQUJMRSIsIkVNQkVEREVEIiwiRU5HSU5FIiwiT1MiLCJleHBvcnRzIiwibW9kdWxlIiwiVUFQYXJzZXIiLCJqUXVlcnkiLCJaZXB0byIsIkwiLCJnZXQiLCJzZXQiLCJpbWdQYXRoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbWciLCJJbWFnZSIsImNhbGxlZSIsInNyYyIsIiRidG4iLCJ0ZXh0Iiwic2hhcmVVUkwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJvcGVuIiwiZGVzY3JpcHRpb24iLCJGdW5jIiwiYmxhbmsiLCJkZWJ1Z2dlciIsImV4cGFuZGpRdWVyeSIsIm1ldGhvZHMiLCJjb25zb2xlIiwicHJlcGVuZCIsIkZQUyIsIndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIiwidGltZXIiLCJmbiIsImFkanVzdCIsImFkanVzdFciLCJhZGp1c3RIIiwiQ1NTIiwic3VwcG9ydHMiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJsb2ciLCJpc0lFIiwiaXNQQyIsImlzQW5kcm9pZFZlcnNpb24iLCJhbGVydCIsIk1haW4iLCJwYWdlIiwiZGF0YSIsIkRpc3BsYXlUb3AiLCJzY2VuZU1hbmdlciIsInNjZW5lQm94QSIsInNjZW5lQm94QiIsImFkZFNjZW5lIiwiZHJhdyIsIlNjZW5lTWFuZ2VyIiwiTlVNIiwic2NlbmVzIiwiZmFkZUluT3V0VGltZXIiLCJjYW52YXMiLCJyZW5kZXJlciIsIl9hZGRTY2VuZSIsIm9uUmVzaXplIiwiX29uUmVzaXplIiwiY2hlY2tOdW0iLCJfY2hlY2tOdW0iLCJvbktleURvd24iLCJfb25LZXlEb3duIiwiZmFkZUluT3V0IiwiX2ZhZGVJbk91dCIsIl9kcmF3Iiwia2V5bmFtZSIsImluaXQiLCJUSFJFRSIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJzb3J0T2JqZWN0cyIsInNoYWRvd01hcCIsImVuYWJsZWQiLCJQQ0ZTaGFkb3dNYXAiLCJkb21FbGVtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwic2NlbmUiLCJwdXNoIiwiY2FtZXJhIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsIm9wIiwic2luIiwib3BhY2l0eSIsInVwZGF0ZSIsInJlbmRlciIsIkVudHJ5IiwiT3JiaXRDb250cm9scyIsIm9iamVjdCIsInRhcmdldCIsIlZlY3RvcjMiLCJtaW5EaXN0YW5jZSIsIm1heERpc3RhbmNlIiwiSW5maW5pdHkiLCJtaW5ab29tIiwibWF4Wm9vbSIsIm1pblBvbGFyQW5nbGUiLCJtYXhQb2xhckFuZ2xlIiwibWluQXppbXV0aEFuZ2xlIiwibWF4QXppbXV0aEFuZ2xlIiwiZW5hYmxlRGFtcGluZyIsImRhbXBpbmdGYWN0b3IiLCJlbmFibGVab29tIiwiem9vbVNwZWVkIiwiZW5hYmxlUm90YXRlIiwicm90YXRlU3BlZWQiLCJlbmFibGVQYW4iLCJrZXlQYW5TcGVlZCIsImF1dG9Sb3RhdGUiLCJhdXRvUm90YXRlU3BlZWQiLCJlbmFibGVLZXlzIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJCT1RUT00iLCJtb3VzZUJ1dHRvbnMiLCJPUkJJVCIsIk1PVVNFIiwiWk9PTSIsIk1JRERMRSIsIlBBTiIsInRhcmdldDAiLCJjbG9uZSIsInBvc2l0aW9uMCIsInBvc2l0aW9uIiwiem9vbTAiLCJ6b29tIiwiZ2V0UG9sYXJBbmdsZSIsInNwaGVyaWNhbCIsInBoaSIsImdldEF6aW11dGhhbEFuZ2xlIiwidGhldGEiLCJyZXNldCIsInNjb3BlIiwiY29weSIsImRpc3BhdGNoRXZlbnQiLCJjaGFuZ2VFdmVudCIsInN0YXRlIiwiU1RBVEUiLCJOT05FIiwib2Zmc2V0IiwicXVhdCIsIlF1YXRlcm5pb24iLCJzZXRGcm9tVW5pdFZlY3RvcnMiLCJ1cCIsInF1YXRJbnZlcnNlIiwiaW52ZXJzZSIsImxhc3RQb3NpdGlvbiIsImxhc3RRdWF0ZXJuaW9uIiwic3ViIiwiYXBwbHlRdWF0ZXJuaW9uIiwic2V0RnJvbVZlY3RvcjMiLCJyb3RhdGVMZWZ0IiwiZ2V0QXV0b1JvdGF0aW9uQW5nbGUiLCJzcGhlcmljYWxEZWx0YSIsIm1ha2VTYWZlIiwicmFkaXVzIiwic2NhbGUiLCJwYW5PZmZzZXQiLCJzZXRGcm9tU3BoZXJpY2FsIiwibG9va0F0Iiwiem9vbUNoYW5nZWQiLCJkaXN0YW5jZVRvU3F1YXJlZCIsIkVQUyIsImRvdCIsInF1YXRlcm5pb24iLCJkaXNwb3NlIiwib25Db250ZXh0TWVudSIsIm9uTW91c2VEb3duIiwib25Nb3VzZVdoZWVsIiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsIm9uVG91Y2hNb3ZlIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJzdGFydEV2ZW50IiwiZW5kRXZlbnQiLCJST1RBVEUiLCJET0xMWSIsIlRPVUNIX1JPVEFURSIsIlRPVUNIX0RPTExZIiwiVE9VQ0hfUEFOIiwiU3BoZXJpY2FsIiwicm90YXRlU3RhcnQiLCJWZWN0b3IyIiwicm90YXRlRW5kIiwicm90YXRlRGVsdGEiLCJwYW5TdGFydCIsInBhbkVuZCIsInBhbkRlbHRhIiwiZG9sbHlTdGFydCIsImRvbGx5RW5kIiwiZG9sbHlEZWx0YSIsImdldFpvb21TY2FsZSIsInJvdGF0ZVVwIiwicGFuTGVmdCIsImRpc3RhbmNlIiwib2JqZWN0TWF0cml4Iiwic2V0RnJvbU1hdHJpeENvbHVtbiIsIm11bHRpcGx5U2NhbGFyIiwicGFuVXAiLCJwYW4iLCJkZWx0YVgiLCJkZWx0YVkiLCJlbGVtZW50IiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ0YXJnZXREaXN0YW5jZSIsInRhbiIsImZvdiIsImNsaWVudEhlaWdodCIsIm1hdHJpeCIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInJpZ2h0IiwibGVmdCIsImNsaWVudFdpZHRoIiwidG9wIiwiYm90dG9tIiwid2FybiIsImRvbGx5SW4iLCJkb2xseVNjYWxlIiwiZG9sbHlPdXQiLCJoYW5kbGVNb3VzZURvd25Sb3RhdGUiLCJjbGllbnRYIiwiY2xpZW50WSIsImhhbmRsZU1vdXNlRG93bkRvbGx5IiwiaGFuZGxlTW91c2VEb3duUGFuIiwiaGFuZGxlTW91c2VNb3ZlUm90YXRlIiwic3ViVmVjdG9ycyIsImhhbmRsZU1vdXNlTW92ZURvbGx5IiwiaGFuZGxlTW91c2VNb3ZlUGFuIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZU1vdXNlV2hlZWwiLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlVG91Y2hTdGFydFJvdGF0ZSIsInRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiaGFuZGxlVG91Y2hTdGFydERvbGx5IiwiZHgiLCJkeSIsImhhbmRsZVRvdWNoU3RhcnRQYW4iLCJoYW5kbGVUb3VjaE1vdmVSb3RhdGUiLCJoYW5kbGVUb3VjaE1vdmVEb2xseSIsImhhbmRsZVRvdWNoTW92ZVBhbiIsImhhbmRsZVRvdWNoRW5kIiwiYnV0dG9uIiwic3RvcFByb3BhZ2F0aW9uIiwiY3JlYXRlIiwiRXZlbnREaXNwYXRjaGVyIiwiY29uc3RydWN0b3IiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiY2VudGVyIiwibm9ab29tIiwibm9Sb3RhdGUiLCJub1BhbiIsIm5vS2V5cyIsInN0YXRpY01vdmluZyIsImR5bmFtaWNEYW1waW5nRmFjdG9yIiwiU2NlbmUwMSIsIkJveCIsImNyZWF0ZVNjZW5lIiwiX2NyZWF0ZVNjZW5lIiwiX3VwZGF0ZSIsIlNjZW5lIiwieiIsIk1lc2giLCJCb3hHZW9tZXRyeSIsIk1lc2hCYXNpY01hdGVyaWFsIiwiU2NlbmUwMiIsInRleHR1cmVCZyIsIlRleHR1cmVCZyIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlQ2FtZXJhIiwiX2NyZWF0ZUNhbWVyYSIsImNyZWF0ZVJlbmRlcmVyIiwiX2NyZWF0ZVJlbmRlcmVyIiwiVXBkYXRlIiwiX1VwZGF0ZSIsImxvYWRUZXh0dXJlIiwiX2xvYWRUZXh0dXJlIiwicGxhbmUiLCJhbHBoYSIsInN0ZW5jaWwiLCJkZXB0aCIsInByZW11bHRpcGxpZWRBbHBoYSIsInNldENsZWFyQ29sb3IiLCJtZXNoIiwibWF0ZXJpYWwiLCJ1bmlmb3JtcyIsInJlc29sdXRpb24iLCJQbGFuZSIsInRleHR1cmUiLCJjcmVhdGVNZXNoIiwiX2NyZWF0ZU1lc2giLCJfcmVuZGVyIiwicmVzaXplIiwiX3Jlc2l6ZSIsImltYWdlIiwibG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsImxvYWQiLCJtYWdGaWx0ZXIiLCJOZWFyZXN0RmlsdGVyIiwibWluRmlsdGVyIiwiaW1hZ2VSZXNvbHV0aW9uIiwiUGxhbmVCdWZmZXJHZW9tZXRyeSIsIlJhd1NoYWRlck1hdGVyaWFsIiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJ0aW1lIiwic3RvcCIsImludGVydmFsIiwicHJldl9udW0iLCJuZXh0X251bSIsInRleFByZXYiLCJ0ZXh0dXJlcyIsInRleE5leHQiLCJDYW52YXMiLCJ1X3RpbWUiLCJ1X3Jlc29sdXRpb24iLCJ1X21vdXNlIiwiY3ViZSIsImNyZWF0ZU9iamVjdCIsIl9jcmVhdGVPYmplY3QiLCJvcmJpdENvbnRyb2xzIiwiX29yYml0Q29udHJvbHMiLCJwbGFuZU9iamVjdCIsIl9wbGFuZU9iamVjdCIsImN1YmVHZW9tZXRyeSIsImN1YmVNYXRlcmlhbCIsImNvbG9yIiwid2lyZWZyYW1lIiwiU2hhZGVyTWF0ZXJpYWwiLCJjbG9jayIsIkNsb2NrIiwiZ2V0RGVsdGEiLCJjb250cm9scyIsImRlbHRhIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDOUJBOzs7O0FBQ0E7Ozs7OztBQVRBOzs7Ozs7OztBQVdBLEVBQUMsWUFBSTs7QUFFSDtBQUNBLE9BQUlBLE9BQU9DLEVBQVAsS0FBWUMsU0FBaEIsRUFBMkJGLE9BQU9DLEVBQVAsR0FBWSxFQUFaO0FBQzNCRCxVQUFPQyxFQUFQLENBQVVFLEVB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Ozs7aUNBRVU7O0FBRVRqbUIsU0FBRWIsTUFBRixFQUFVZSxFQUFWLENBQWEsTUFBYixFQUFxQixLQUFLRyxNQUFMLENBQVlELElBQVosQ0FBaUIsSUFBakIsQ0FBckI7QUFFRDs7Ozs7O21CQXJNa0J5a0IsTTs7Ozs7O0FDZHJCLGdFQUErRCxpQkFBaUIsMENBQTBDLEdBQUcsRzs7Ozs7O0FDQTdILGdFQUErRCx1QkFBdUIsaUJBQWlCLGdEQUFnRCwyQ0FBMkMsR0FBRyxDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmODBmMWRiYmRmZThhN2VhM2MyOCIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFRvcFxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgQ29tbW9uIGZyb20gJy4vcGFnZS9Db21tb24nO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9wYWdlL01haW4nO1xuXG4oKCk9PntcblxuICAvLyBnbG9iYWzjgqrjg5bjgrjjgqfjgq/jg4hcbiAgaWYgKHdpbmRvdy5nYj09PXVuZGVmaW5lZCkgd2luZG93LmdiID0ge307XG4gIHdpbmRvdy5nYi5pbiA9IHt9OyAvL2luc3RhbmNlXG5cbiAgZ2IuaW4uY29tbW9uID0gbmV3IENvbW1vbigpO1xuICBnYi5pbi5tYWluID0gbmV3IE1haW4oKTtcblxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL1RvcC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENvbW1vblxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5pbXBvcnQgQ29uZiBmcm9tICcuLi9Db3JlL0NvbmYnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi4vbXlsaWJzL1V0aWwnO1xuaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL1V0aWxzJztcbmltcG9ydCBGdW5jIGZyb20gJy4uL215bGlicy9GdW5jJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21tb24ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG5cdHNldHVwKCkge1xuXG5cdFx0LyoqXG4gICAgICogQHR5cGUge0NvbmZ9IDog5Yid5pyf5YCk44Gu6Kit5a6a44O744OH44O844K/44Gu6YWN572uXG5cdFx0ICogQHR5cGUge1V0aWx9IDogVXRpbOmWouaVsOOBruWIneacn+WMllxuXHRcdCAqIEB0eXBlIHtGdW5jfSA6IOOCpOODmeODs+ODiOODnuODjeODvOOCuOODo+ODvOOBruioree9rlxuXHRcdCAqL1xuICAgIGdiLmluLmNvbmYgPSBuZXcgQ29uZigpO1xuICAgIGdiLmluLnUgPSBuZXcgVXRpbCgpO1xuICAgIGdiLmluLmYgPSBuZXcgRnVuYygpO1xuXG4gICAgZ2IuaW4udXQgPSBuZXcgVXRpbHMoKTtcblxuICB9XG5cbiAgb25SZWFkeSgpIHtcblxuXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvcGFnZS9Db21tb24uanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBDb25mXG4gKiBEYXRlOlxuICogQXV0aG9yOlxuICovXG5cbi8vIGltcG9ydCBTb3VuZERhdGEgZnJvbSAnLi9EYXRhL1NvdW5kLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZiB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg5pys55Wq44OV44Op44KwXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgIFxuICAgIHRoaXMuUkVMRUFTRSA9IHRydWU7XG4gICAgLy8gdGhpcy5SRUxFQVNFID0gZmFsc2U7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OV44Op44Kw6Zai6YCjXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5GTEcgPSB7XG4gICAgICBMT0c6dHJ1ZSwgIC8vIOODreOCsOWHuuWKm1xuICAgICAgUEFSQU06dHJ1ZSwgLy8g44OR44Op44Oh44O844K/44OB44Kn44OD44KvXG4gICAgICBTVEFUUzp0cnVlICAvLyBTdGF0c+ihqOekulxuICAgIH07XG4gICAgaWYgKCF0aGlzLlJFTEVBU0UpIHtcbiAgICAgIHRoaXMuRkxHID0ge1xuICAgICAgICBMT0c6ZmFsc2UsXG4gICAgICAgIFBBUkFNOmZhbHNlLFxuICAgICAgICBTVEFUUzpmYWxzZSBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIOWfuuacrCB3aWR0aCBoZWlnaHRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB0aGlzLmRlZlcgPSAxMzAwO1xuICAgIHRoaXMuZGVmSCA9IDg1MDtcblxuICAgIHRoaXMuVyA9IDEyMDA7XG4gICAgdGhpcy5IID0gNzUwO1xuXG4gICAgdGhpcy5zcFcgPSAzNzU7XG4gICAgdGhpcy5zcEggPSA2Njc7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAg44OW44Os44Kk44Kv44Od44Kk44Oz44OIXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5icCA9IDc2ODtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBtb2RlXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5tb2RlID0gbnVsbDtcbiAgICB0aGlzLmtleXMgPSBbXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdtb3ZpZScsXG4gICAgICAgICAgJ3ZhbHVlJzogWydtb3JuaW5nJywnYWZ0ZXJub29uJywnbmlnaHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgJ2tleSc6ICdkYXRhJyxcbiAgICAgICAgICAndmFsdWUnOiBbJ2RhdGEwMScsJ2RhdGEwMicsJ2RhdGEwMyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgICAna2V5JzogJ3Byb2R1Y3QnLFxuICAgICAgICAgICd2YWx1ZSc6IFsnMDEnXSxcbiAgICAgIH0sXG4gICAgXVxuICAgIHRoaXMuc3dpdGNoTW9kZSgpO1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIHNvdW5kIGRhdGFcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyB0aGlzLnNvdW5kRGF0YSA9IG5ldyBTb3VuZERhdGEoKTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBzZWMwMiBiZyBJbWcgTnVtXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy5zZWMwMkltZ051bSA9IDM5NjtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICB5b3V0dWJlIElEXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy55b3V0dWJlSUQwMSA9ICd4VzJvTnBOcktkMCc7XG4gICAgdGhpcy55b3V0dWJlSUQwMiA9ICd0MldlUlJkQUZlSSc7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgd2ViIGZvbnQgbG9hZGVkXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgdGhpcy53ZWJGb250TG9hZGVkID0gZmFsc2U7XG5cbiAgfVxuXG5cbiAgc3dpdGNoTW9kZSgpe1xuXG4gICAgdmFyIGksIGtleSwgbGVuLCBwYXJhbSwgcmVmLCByZWYxLCB2YWx1ZTtcblxuICAgIHJlZiA9IGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpLnNwbGl0KCcmJyk7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHBhcmFtID0gcmVmW2ldO1xuICAgICAgcmVmMSA9IHBhcmFtLnNwbGl0KCc9JyksIGtleSA9IHJlZjFbMF0sIHZhbHVlID0gcmVmMVsxXTtcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmtleXMubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICB2YXIgb2JqID0gdGhpcy5rZXlzW2pdO1xuXG4gICAgICAgIC8vIOODkeODqeODoeODvOOCv+OBjOOCreODvOOBqOS4gOe3kuOBoOOBo+OBn+OCiVxuICAgICAgICBpZiAob2JqLmtleSA9PT0ga2V5KSB7XG5cbiAgICAgICAgICAvLyDlkITlgKTjgajmr5TovINcbiAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IG9iai52YWx1ZS5sZW5ndGg7IGsrKykge1xuXG4gICAgICAgICAgICB2YXIgdmFsID0gb2JqLnZhbHVlW2tdO1xuXG4gICAgICAgICAgICAvLyDjgq3jg7zjgpJ0aGlzLmtleXPjga5rZXnjgavjgIF2YWx1ZeOCkuavlOi8g+OBl+OBpuWQjOWApOOBoOOBo+OBn+OCguOBruOBq1xuICAgICAgICAgICAgaWYgKHZhbCA9PT0gdmFsdWUpIHRoaXNbb2JqLmtleV0gPSB2YWw7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9O1xuXG5cbiAgICAgICAgfTtcblxuICAgICAgICBcbiAgICAgIH07XG5cbiAgICB9XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9Db3JlL0NvbmYuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzog5L6/5Yip6Zai5pWw44Kv44Op44K5XG4gKiBQcm9qZWN0OlxuICogRmlsZTogVXRpbFxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlsIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMuaXNTZXRTUFNpemUgPSBmYWxzZTtcblxuICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgICB0aGlzLmVsYXBzZWRUaW1lID0gbnVsbDtcbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBNYXRoXG4gICAqL1xuXG5cbiAgLyoqXG4gICAqIOODqeODs+ODgOODoOOBquWApOOCkui/lOOBmVxuICAgKiBAcGFyYW0gbWluIDog5pyA5bCP5YCkKGludClcbiAgICogQHBhcmFtIG1heCA6IOacgOWkp+WApChpbnQpXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IDogbWlu44GL44KJbWF444G+44Gn44Gu44Op44Oz44OA44Og44Gq5pW05pWwKGludClcbiAgICovXG4gIHJhbmRvbShtaW4sIG1heCkge1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAoKG1heCArIDEpIC0gbWluKSArIG1pbikpO1xuXG4gIH1cblxuICAvKipcbiAgICog44Op44Oz44OA44Og44Gq5pW05pWw44KSMuOBpOOBruevhOWbsuOBi+OCieWPluW+l1xuICAgKiBAcGFyYW0gbWluMSA6IOacgOWwj+WApDEoaW50KVxuICAgKiBAcGFyYW0gbWF4MSA6IOacgOWkp+WApDEoaW50KVxuICAgKiBAcGFyYW0gbWluMiA6IOacgOWwj+WApDIoaW50KVxuICAgKiBAcGFyYW0gbWF4MiA6IOacgOWkp+WApDIoaW50KVxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSA6IG1pbuOBi+OCiW1heOOBvuOBp+OBruODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gICAqL1xuICByYW5kb20yKG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbiAgICBcbiAgICBpZiAodGhpcy5oaXQoMikpIHtcbiAgICAgIHJldHVybiB0aGlzLnJhbmRvbShtaW4xLCBtYXgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmFuZG9tKG1pbjIsIG1heDIpO1xuICAgIH1cblxuICB9XG5cbiAgLyoqXG4gICAqIDEvQHJhbmdl44Gu56K6546H44GndHJ1ZeOCkuWPluW+l1xuICAgKiBAcGFyYW0gcmFuZ2UgOiDmr43mlbAoaW50KVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gOiB0cnVlIG9yIGZhbHNlKGJvb2xlYW4pXG4gICAqL1xuICBoaXQocmFuZ2UpIHtcblxuICAgIHJldHVybiB0aGlzLnJhbmRvbSgwLCByYW5nZSAtIDEpID09PSAwO1xuXG4gIH1cbiAgXG4gIC8vIDDjgYvjgonnr4Tlm7LlhoXjgafjg6njg7Pjg4Djg6DjgarmlbTmlbDjgpLlj5blvpdcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHZhbCA6IOevhOWbsihpbnQpXG4gIC8vIHJldHVybiA6IOODqeODs+ODgOODoOOBquaVtOaVsChpbnQpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHJhbmdlKHZhbCkge1xuXG4gICAgcmV0dXJuIHRoaXMucmFuZG9tKC12YWwsIHZhbCk7XG5cbiAgfVxuICBcbiAgLy8g5YCk44KS44Oe44OD44OU44Oz44KwXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEBudW0gOiDjg57jg4Pjg5Tjg7PjgrDjgZnjgovlgKQoTnVtYmVyKVxuICAvLyBAcmVzTWluIDog57WQ5p6c44Go44Gq44KL5YCk44Gu5pyA5bCP5YCkKE51bWJlcilcbiAgLy8gQHJlc01heCA6IOe1kOaenOOBqOOBquOCi+WApOOBruacgOWkp+WApChOdW1iZXIpXG4gIC8vIEBiYXNlTWluIDog5YWD44Go44Gq44KL5YCk44Gu5pyA5bCP5YCkKE51bWJlcilcbiAgLy8gQGJhc2VNYXggOiDlhYPjgajjgarjgovlgKTjga7mnIDlpKflgKQoTnVtYmVyKVxuICAvLyByZXR1cm4gOiDjg57jg4Pjg5Tjg7PjgrDjgZXjgozjgZ/lgKQoTnVtYmVyKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBtYXAobnVtLCByZXNNaW4sIHJlc01heCwgYmFzZU1pbiwgYmFzZU1heCkge1xuXG4gICAgdmFyIHA7XG4gICAgaWYgKG51bSA8IGJhc2VNaW4pIHtcbiAgICAgIHJldHVybiByZXNNaW47XG4gICAgfVxuICAgIGlmIChudW0gPiBiYXNlTWF4KSB7XG4gICAgICByZXR1cm4gcmVzTWF4O1xuICAgIH1cbiAgICBwID0gKHJlc01heCAtIHJlc01pbikgLyAoYmFzZU1heCAtIGJhc2VNaW4pO1xuXG4gICAgcmV0dXJuICgobnVtIC0gYmFzZU1pbikgKiBwKSArIHJlc01pbjtcblxuICB9ICAgIFxuICBcbiAgLy8g5pWw5YCk44Gr5bCP5pWw54K556ysQG7kvY3jgb7jgafjgpLjgaTjgZHjgZ/mloflrZfliJfjgpLov5TjgZlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQG51bSA6IOWApChOdW1iZXIpXG4gIC8vIEBuIDog5bCP5pWw54K544Gu5L2NKGludClcbiAgLy8gcmV0dXJuIDog5aSJ5o+b44GV44KM44Gf5YCkKFN0cmluZylcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZGVjaW1hbChudW0sIG4pIHtcbiAgICB2YXIgaSwgcG9zO1xuICAgIG51bSA9IFN0cmluZyhudW0pO1xuICAgIHBvcyA9IG51bS5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bS5zcGxpdChcIi5cIilbMF07XG4gICAgfVxuICAgIGlmIChwb3MgPT09IC0xKSB7XG4gICAgICBudW0gKz0gXCIuXCI7XG4gICAgICBpID0gMDtcbiAgICAgIHdoaWxlIChpIDwgbikge1xuICAgICAgICBudW0gKz0gXCIwXCI7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBudW07XG4gICAgfVxuICAgIG51bSA9IG51bS5zdWJzdHIoMCwgcG9zKSArIG51bS5zdWJzdHIocG9zLCBuICsgMSk7XG4gICAgcmV0dXJuIG51bTtcbiAgfVxuXG4gIGNsYW1wKG51bWVyYXRvcixkZW5vbWluYXRvcix2YWwpIHtcblxuICAgIHJldHVybiB2YWwgKiAobnVtZXJhdG9yIC8gZGVub21pbmF0b3IpO1xuXG4gIH1cblxuXHQvKipcbiAgICog44Op44K444Ki44Oz44KS6KeS5bqm44Gr5aSJ5o+bXG5cdCAqIEBwYXJhbSByYWRpYW5zXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdCAqL1xuICBkZWdyZWUocmFkaWFucykge1xuXG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xuXG4gIH1cblxuICAvLyB0byByYWRpYW5zXG4gIHJhZGlhbihhbmdsZSkgeyBcblxuICAgIHJldHVybiBhbmdsZSAqIE1hdGguUEkgLyAxODA7IC8vMeW6puS9leODqeOCuOOCouODs+OBi1xuXG4gIH1cblxuICBkaXN0KHAxLCBwMikge1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwMi54IC0gcDEueCwgMikgKyBNYXRoLnBvdyhwMi55IC0gcDEueSwgMikpO1xuXG4gIH1cblxuICBhc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcbiAgICAvLyB2YXIgYSA9IFs1LDMsOSwxLDEwXVxuICAgIC8vIOe1kOaenDoxMCw5LDUsMywxXG5cbiAgfVxuXG4gIGRlc2NlbmQoYXJyKSB7XG5cbiAgICBhcnIuc29ydChmdW5jdGlvbihhLGIpe1xuICAgICAgaWYoIGEgPCBiICkgcmV0dXJuIC0xO1xuICAgICAgaWYoIGEgPiBiICkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIC8vIHZhciBhID0gWzUsMyw5LDEsMTBdXG4gICAgLy8g57WQ5p6cOjEsMyw1LDksMTBcblxuICB9XG5cbiAgLy8gbWFwKHZhbHVlLCBtaW4wMSwgbWF4MDEsIG1pbjAyLCBtYXgwMikge1xuXG4gIC8vICAgdmFyIGRpczAxID0gbWF4MDEgLSBtaW4wMTtcbiAgLy8gICB2YXIgZGlzMDIgPSBtYXgwMiAtIG1pbjAyXG5cbiAgLy8gICB2YXIgcmF0ZSA9IGRpczAyIC8gZGlzMDE7XG5cbiAgLy8gICB2YWx1ZSA9IHZhbHVlICogcmF0ZTtcblxuICAvLyAgIHJldHVybiB2YWx1ZTtcbiAgLy8gfVxuXG4gIGNvbnN0cmFpbih2YWx1ZSwgbWluLCBtYXgpIHtcblxuICAgIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KHZhbHVlLCBtaW4pKTtcblxuICAgIC8vIGlmICh2YWx1ZSA8PSBsb3cpIHZhbHVlID0gbG93O1xuICAgIC8vIGlmICh2YWx1ZSA+PSBoaWdoKSB2YWx1ZSA9IGhpZ2g7ICAgICBcbiAgICAvLyByZXR1cm4gdmFsdWU7XG5cbiAgfVxuXG4gIC8vIOODpuODi+ODvOOCr0lE44KS5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHVuaXF1ZSgpIHtcblxuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICB9XG4gIFxuICAvLyAqKmpxdWFyeeS9v+eUqFxuICAvLyDjg5zjgr/jg7Pjg6Ljg7zjg4nlpInmm7RcbiAgLy8gdHJ1ZeOBquOCieOCq+ODvOOCveODq+OBjOODneOCpOODs+OCv+ODvOOBruW9ouOBq1xuICAvLyBmYWxzZeOBquOCieODh+ODleOCqeODq+ODiOOBruOCq+ODvOOCveODq+OBq1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAZmxnIDog6YGp55So44GZ44KL44GL44Gp44GG44GLKGJvb2xlYW4pXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGJ1dHRvbk1vZGUoZmxnKSB7XG5cbiAgICBpZiAoZmxnKSB7XG4gICAgICByZXR1cm4gJChcImJvZHlcIikuY3NzKFwiY3Vyc29yXCIsIFwicG9pbnRlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICQoXCJib2R5XCIpLmNzcyhcImN1cnNvclwiLCBcImRlZmF1bHRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHBvcnRyYWl0IC8gbGFuZHNjYXBlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc0RpcmVjdGlvbiAoKSB7XG5cbiAgICB2YXIgVyA9IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBIID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgaWYgKEggPiBXKSB7XG4gICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcInBvcnRyYWl0XCIpO1xuICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJsYW5kc2NhcGVcIik7XG4gICAgfWVsc2V7XG4gICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcImxhbmRzY2FwZVwiKTtcbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwicG9ydHJhaXRcIik7XG4gICAgfVxuXG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy9cbiAgLy8gIHJlc3BvbnNpdmUg5qiq5bmF44KS6KaL44KLXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpc1Jlc3BvbnNpdmUgKGJwKSB7XG5cbiAgICBpZiAoYnA9PXVuZGVmaW5lZCkgYnA9Mzc1O1xuXG4gICAgdmFyIFcgPSB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgSCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGlmIChXID4gYnApIHtcbiAgICAgIHRoaXMuaXNSZXNTUCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc1Jlc1BDID0gdHJ1ZTtcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXNSZXNwb25zaXZlU1AnKTtcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNSZXNwb25zaXZlUEMnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1Jlc1NQID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNSZXNQQyA9IGZhbHNlO1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdpc1Jlc3BvbnNpdmVTUCcpO1xuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdpc1Jlc3BvbnNpdmVQQycpO1xuICAgIH1cblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBVUkxcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHthcnJheX1cbiAgICovXG4gIGdldFBhcmFtKCkge1xuXG4gICAgdmFyIHVybCA9IGxvY2F0aW9uLmhyZWY7XG4gICAgdmFyIHBhcmFtID0gdXJsLnNwbGl0KCc/JylbMV07XG4gICAgaWYgKHBhcmFtPT11bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgdmFyIHBhcmFtSXRlbXMgPSBwYXJhbS5zcGxpdCgnJicpO1xuICAgIHZhciBsaXN0ID0ge307XG4gIFxuICAgIGZvciggdmFyIGkgPSAwOyBpPHBhcmFtSXRlbXMubGVuZ3RoOyBpKysgKXtcblxuICAgICAgICBwYXJhbUl0ZW0gPSBwYXJhbUl0ZW1zW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgIGxpc3RbcGFyYW1JdGVtWzBdXSA9IHBhcmFtSXRlbVsxXTtcblxuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xuXG4gIH1cblxuICAvKipcbiAgICog44OP44OD44K344Ol5Y+W5b6XIDogbG9jYXRpb24uaGFzaOOBriPjgpLliYrpmaTjgZfjgZ/jgoTjgaRcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGhhc2goKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24uaGFzaC5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIGNvb2tpZeWPluW+l1xuICAgKiBAcGFyYW0ga2V5XG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZ2V0Q29va2llKGtleSkge1xuXG4gICAgdmFyIGEsIGFyciwgaSwgbCwgbGVuMSwgdmFsO1xuICAgIGlmIChkb2N1bWVudC5jb29raWUgPT09IHZvaWQgMCB8fCBkb2N1bWVudC5jb29raWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBhcnIgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7IFwiKTtcbiAgICBmb3IgKGkgPSBsID0gMCwgbGVuMSA9IGFyci5sZW5ndGg7IGwgPCBsZW4xOyBpID0gKytsKSB7XG4gICAgICB2YWwgPSBhcnJbaV07XG4gICAgICBhID0gdmFsLnNwbGl0KFwiPVwiKTtcbiAgICAgIGlmIChhWzBdID09PSBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGFbMV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuXG4gIH0gICAgICBcblxuICAvKipcbiAgICogY29va2ll6Kit5a6aXG4gICAqIEBwYXJhbSBrZXkgOiDjg5Hjg6njg6Hjg7zjgr/lkI1cbiAgICogQHBhcmFtIHZhbCA6IOWApFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgc2V0Q29va2llKGtleSwgdmFsKSB7XG5cbiAgICByZXR1cm4gZG9jdW1lbnQuY29va2llID0ga2V5ICsgXCI9XCIgKyB2YWw7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvL1xuICAvLyAgQ29sb3JcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gcmdi44GL44KJSEVY44Kr44Op44O85Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEByIDogMH4yNTVcbiAgLy8gQGcgOiAwfjI1NVxuICAvLyBAYiA6IDB+MjU1XG4gIC8vIHJldHVybiA6IGV4IFwiI0ZGRkZGRlwiXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGdldEhleENvbG9yKHIsZyxiKSB7XG4gICAgICB2YXIgc3RyO1xuICAgICAgc3RyID0gKHIgPDwgMTYgfCBnIDw8IDggfCBiKS50b1N0cmluZygxNik7XG4gICAgICByZXR1cm4gXCIjXCIgKyBuZXcgQXJyYXkoNyAtIHN0ci5sZW5ndGgpLmpvaW4oXCIwXCIpICsgc3RyO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBTdHJpbmdcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXNDb250YWluKHN0cixjb250YWluKSB7XG5cbiAgICAvLyBzdHLjga7kuK3jgassY29udGFpbuOBjOWtmOWcqOOBl+OBn+OCiVxuICAgIGlmICggc3RyLmluZGV4T2YoY29udGFpbikgIT0gLTEgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgfVxuXG4gIC8vIDDln4vjgoHjgacy5qGB44Gr44GZ44KL6Zai5pWwXG4gIGFkZDAoc3RyLG51bT0tMil7XG4gICAgXG4gICAgcmV0dXJuICggXCIwMDAwMDAwMDAwMDBcIiArIHN0ciApLnN1YnN0ciggbnVtICk7XG5cbiAgfVxuXG4gIGZsb2F0Rm9ybWF0KCBudW1iZXIsIG4gKSB7XG5cbiAgICB2YXIgX3BvdyA9IE1hdGgucG93KCAxMCAsIG4gKSA7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoIG51bWJlciAqIF9wb3cgKSAvIF9wb3cgO1xuXG4gIH1cbiAgICBcbiAgLy8g5YCk5q616KGo6KiYXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHByaWNlKG51bSkge1xuXG4gICAgcmV0dXJuIFN0cmluZyhudW0pLnJlcGxhY2UoLyhcXGQpKD89KFxcZFxcZFxcZCkrKD8hXFxkKSkvZywgJyQxLCcpO1xuXG4gIH1cblxuICAvLyDmloflrZfliJfjgpLlj43ou6JcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gQHN0ciA6IOaWh+Wtl+WIlyhTdHJpbmcpXG4gIC8vIHJldHVybiA6IOaWh+Wtl+WIlyhTdHJpbmcpXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHN0clJldmVyc2Uoc3RyKSB7XG5cbiAgICB2YXIgaSwgbGVuLCByZXM7XG4gICAgcmVzID0gXCJcIjtcbiAgICBsZW4gPSBzdHIubGVuZ3RoO1xuICAgIGkgPSAxO1xuICAgIHdoaWxlIChpIDw9IGxlbikge1xuICAgICAgcmVzICs9IHN0ci5zdWJzdHIoLWksIDEpO1xuICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuXG4gIH1cbiAgXG4gIC8vIOaWh+Wtl+WIl+OBruWFqOe9ruaPm1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBAdmFsICA6IOaWh+Wtl+WIl1xuICAvLyBAb2VnICA6IOe9ruaPm+WJjeOBruaWh+Wtl+WIl1xuICAvLyBAZGVzdCA6IOe9ruaPm+W+jOOBruaWh+Wtl+WIl1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICByZXBsYWNlQWxsKHZhbCwgb3JnLCBkZXN0KSB7XG5cbiAgICByZXR1cm4gdmFsLnNwbGl0KG9yZykuam9pbihkZXN0KTtcblxuICB9ICAgIFxuICBcbiAgc3RyUmVwbGFjZShzdHIsIGJlZm9yZSwgYWZ0ZXIpIHtcblxuICAgIHZhciByID0gbmV3IFJlZ0V4cCggYmVmb3JlLCAnZycpO1xuXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKCByICwgYWZ0ZXIgKTtcblxuICB9ICAgIFxuICBcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBEYXRlXG4gIC8vXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldE5vdygpIHtcblxuICAgIHRoaXMubm93ID0gbmV3IERhdGUoKTtcblxuICB9XG5cbiAgc3RhcnQoKSB7XG5cbiAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMubm93LmdldFRpbWUoKTtcblxuICB9XG5cbiAgZWxhcHNlZCgpIHtcblxuICAgIHRoaXMuZWxhcHNlZFRpbWUgPSB0aGlzLm5vdy5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZTtcblxuICB9XG5cbiAgbSgpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKCB0aGlzLmVsYXBzZWRUaW1lICsgMTAwIC8gNjAgKTtcblxuICB9XG5cbiAgcygpIHtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMuZWxhcHNlZFRpbWUgLyAxMDAwKTtcblxuICB9XG5cbiAgbXMoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5lbGFwc2VkVGltZTtcbiAgICBcbiAgfVxuXG4gIHRpbWUoKSB7XG5cbiAgICB0aGlzLmdldE5vdygpO1xuXG4gICAgdGhpcy5ob3VyID0gdGhpcy5ub3cuZ2V0SG91cnMoKTsgICAgICAgICAgLy8g5pmCXG4gICAgdGhpcy5taW51dGUgPSB0aGlzLm5vdy5nZXRNaW51dGVzKCk7ICAgICAgLy8g5YiGXG4gICAgdGhpcy5zZWNvbmQgPSB0aGlzLm5vdy5nZXRTZWNvbmRzKCk7XG4gICAgdGhpcy5taWxsU2Vjb25kID0gdGhpcy5ub3cuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cbiAgfVxuXG4gIGRhdGUoKSB7XG5cbiAgICByZXR1cm4gdGhpcy5ub3cuZ2V0RGF0ZSgpO1xuXG4gIH1cblxuICBtb250aHMoKSB7XG5cbiAgICB2YXIgbW9udGhkYXlzID0gbmV3IEFycmF5KDMxLCAyOCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzEpO1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldE1vbnRoKCkgKyAxO1xuXG4gIH1cblxuICB5ZWFyKCkge1xuXG4gICAgcmV0dXJuIHRoaXMubm93LmdldEZ1bGxZZWFyKCk7XG5cbiAgfVxuXG4gIGRheSgpIHtcblxuICAgIC8vIOabnOaXpSAo5pel5pys6KqeKVxuICAgIHZhciB3ZWVrRGF5SlAgPSBbXCLml6VcIixcIuaciFwiLFwi54GrXCIsXCLmsLRcIixcIuacqFwiLFwi6YeRXCIsXCLlnJ9cIl0gO1xuICAgIHZhciB3REogPSB3ZWVrRGF5SlBbdGhpcy5ub3cuZ2V0RGF5KCldIDtcblxuICAgIC8vIOabnOaXpSAo6Iux6KqeKVxuICAgIHZhciB3ZWVrRGF5RU4gPSBbXCJTdW5cIixcIk1vblwiLFwiVHVlXCIsXCJXZWRcIixcIlRodVwiLFwiRnJpXCIsXCJTYXRcIl0gO1xuICAgIHZhciB3REUgPSB3ZWVrRGF5RU5bdGhpcy5ub3cuZ2V0RGF5KCldIDtcblxuICB9XG4gIFxuICAvLyDmlbDml6Xlvozjga5EYXRl44Kq44OW44K444Kn44Kv44OI5Y+W5b6XXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFmdGVyRGF5KGRhdGUsIG51bSkge1xuXG4gICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgTnVtYmVyKG51bSkgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBEYXRhIHR5cGUgY2hlY2tcbiAgLy9cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgaXNPYmplY3QodmFsdWUsIGlnbm9yZUFycmF5KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbDtcbiAgfVxuXG4gIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbiAgfVxuXG4gIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gIH1cblxuICBpc0FycmF5KHZhbHVlKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfVxuXG4gIGlzTnVsbCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xuICB9XG5cbiAgaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vXG4gIC8vICBvdGhlclxuICAvL1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc2V0SW1nU1BTaXplICgkdGFyZ2V0KXtcblxuICAgIC8vIHJlc3BvbnNpdmUgc3Djga7jgajjgY3lh6bnkIZcbiAgICBpZiAoIXRoaXMuaXNSZXNTUCkgcmV0dXJuO1xuICAgIC8vIOS4gOW6puOBoOOBkeWHpueQhlxuICAgIC8vIGlmICh0aGlzLmlzU2V0U1BTaXplKSByZXR1cm47XG4gICAgLy8gdGhpcy5pc1NldFNQU2l6ZSA9IHRydWU7XG5cbiAgICB2YXIgJGltZyA9ICR0YXJnZXQsXG4gICAgICAgIGxlbiA9ICRpbWcubGVuZ3RoO1xuXG4gICAgJGltZy5lYWNoKGZ1bmN0aW9uKGkpIHtcblxuICAgICAgICB2YXIgdyA9IE1hdGguZmxvb3IoJCh0aGlzKS53aWR0aCgpIC8gMiksXG4gICAgICAgICAgICBoID0gTWF0aC5mbG9vcigkKHRoaXMpLmhlaWdodCgpIC8gMik7XG5cbiAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICd3aWR0aCc6IHcsXG4gICAgICAgICAgICAnaGVpZ2h0JzogaCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGxlbiA9PSBpICsgMSkgJCh3aW5kb3cpLnRyaWdnZXIoJ3NldFNwWmllRW5kJyk7XG5cbiAgICB9KTtcblxuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vICDjgrnjg57jg5vmk43kvZznhKHlirlcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHNldFByZXZlbnQoKSB7XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAkKHdpbmRvdykub24oJ3RvdWNobW92ZS5ub0NvbnRyb2wnLCBmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7fSk7XG5cbiAgfVxuXG4gIHJlbW92ZVByZXZlbnQoKSB7XG5cbiAgICAkKHdpbmRvdykub2ZmKCd0b3VjaG1vdmUubm9Db250cm9sJyk7XG5cbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyAgaG9zdCxwcm90Y29sXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwcm90b2NvbCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wcm90b2NvbDtcblxuICB9XG4gICAgXG4gIGhvc3QoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24uaG9zdG5hbWU7XG4gICAgLy8gcmV0dXJuIGxvY2F0aW9uLmhvc3RcblxuICB9XG5cbiAgcG9ydCgpIHtcblxuICAgIHJldHVybiBsb2NhdGlvbi5wb3J0O1xuXG4gIH1cbiAgICAgICAgXG4gIHBhdGgoKSB7XG5cbiAgICByZXR1cm4gbG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgfVxuXG4gIHByZXZlbnREZWZhdWx0KGUpIHtcblxuICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdClcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcblxuICB9XG5cbiAgcHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzKGUpIHtcblxuICAgIGlmIChrZXlzW2Uua2V5Q29kZV0pIHtcbiAgICAgICAgcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgfVxuXG4gIGRpc2FibGVTY3JvbGwoKSB7XG5cbiAgICBpZiAod2luZG93LmFkZEV2ZW50TGlzdGVuZXIpIC8vIG9sZGVyIEZGXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHRoaXMucHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICB3aW5kb3cub253aGVlbCA9IHRoaXMucHJldmVudERlZmF1bHQ7IC8vIG1vZGVybiBzdGFuZGFyZFxuICAgIHdpbmRvdy5vbm1vdXNld2hlZWwgPSBkb2N1bWVudC5vbm1vdXNld2hlZWwgPSB0aGlzLnByZXZlbnREZWZhdWx0OyAvLyBvbGRlciBicm93c2VycywgSUVcbiAgICB3aW5kb3cub250b3VjaG1vdmUgID0gdGhpcy5wcmV2ZW50RGVmYXVsdDsgLy8gbW9iaWxlXG4gICAgZG9jdW1lbnQub25rZXlkb3duICA9IHRoaXMucHJldmVudERlZmF1bHRGb3JTY3JvbGxLZXlzO1xuXG4gIH1cblxuICBlbmFibGVTY3JvbGwoKSB7XG5cbiAgICBpZiAod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIpXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Nb3VzZVNjcm9sbCcsIHRoaXMucHJldmVudERlZmF1bHQsIGZhbHNlKTtcbiAgICB3aW5kb3cub25tb3VzZXdoZWVsID0gZG9jdW1lbnQub25tb3VzZXdoZWVsID0gbnVsbDsgXG4gICAgd2luZG93Lm9ud2hlZWwgPSBudWxsOyBcbiAgICB3aW5kb3cub250b3VjaG1vdmUgPSBudWxsO1xuICAgIGRvY3VtZW50Lm9ua2V5ZG93biA9IG51bGw7XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9teWxpYnMvVXRpbC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFV0aWxzXG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG4vKipcbiAqIGFuaW1hdGlvblxuICovXG5pbXBvcnQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gJy4vYW5pbWF0aW9uL3JlcXVlc3RBbmltYXRpb25GcmFtZSc7XG5pbXBvcnQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgZnJvbSAnLi9hbmltYXRpb24vY2FuY2VsQW5pbWF0aW9uRnJhbWUnO1xuXG5pbXBvcnQgQXJyYXkgZnJvbSAnLi9hcnJheS9BcnJheSc7XG5pbXBvcnQgY2hlY2tDbGllbnQgZnJvbSBcIi4vdWEvY2hlY2tDbGllbnRcIjtcblxuaW1wb3J0IHByZWxvYWRJbWcgZnJvbSAnLi9pbWcvcHJlbG9hZEltZyc7XG5pbXBvcnQgc2V0VXBCdG5Ud2l0dGVyIGZyb20gJy4vc25zL3NldFVwQnRuVHdpdHRlcic7XG5pbXBvcnQgc2V0VXBCdG5MaW5lIGZyb20gJy4vc25zL3NldFVwQnRuTGluZSc7XG5pbXBvcnQgc2V0VXBCdG5GYWNlQm9vayBmcm9tICcuL3Nucy9zZXRVcEJ0bkZhY2VCb29rJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVdGlscyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLl9zZXR1cCgpO1xuICAgIFxuICB9XG5cbiAgX3NldHVwKCkge1xuICAgIC8vIHdpbmRvdy5jb25zb2xlLmxvZygnVXRpbHNfU2V0dXAhIScpO1xuICAgIFxuICAgIC8qKlxuICAgICAqIGFycmF5XG4gICAgICovXG4gICAgdGhpcy5BcnJheSA9IG5ldyBBcnJheSgpO1xuXG5cbiAgICAvKipcbiAgICAgKiB1YVxuICAgICAqL1xuICAgIHRoaXMuY2hlY2tDbGllbnQgPSBuZXcgY2hlY2tDbGllbnQoKTtcblxuXG4gICAgLyoqXG4gICAgICogaW1nXG4gICAgICovXG4gICAgLy8gdGhpcy5wcmVsb2FkSW1nID0gbmV3IHByZWxvYWRJbWcoKTtcblxuICAgIC8qKlxuICAgICAqIHNuc1xuICAgICAqL1xuICAgIC8vIHRoaXMuc2V0VXBCdG5Ud2l0dGVyID0gbmV3IHNldFVwQnRuVHdpdHRlcjtcbiAgICAvLyB0aGlzLnNldFVwQnRuTGluZSA9IG5ldyBzZXRVcEJ0bkxpbmU7XG4gICAgLy8gdGhpcy5zZXRVcEJ0bkZhY2VCb29rID0gbmV3IHNldFVwQnRuRmFjZUJvb2s7XG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvVXRpbHMuanMiLCIvKipcbiAqIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICovXG53aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKChmdW5jdGlvbihfdGhpcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gMzApO1xuICAgICAgICB9O1xuICB9O1xufSkodGhpcykpKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hbmltYXRpb24vcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzIiwiLyoqXG4gKiBjYW5jZWxBbmltYXRpb25GcmFtZVxuICovXG53aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSAoKGZ1bmN0aW9uKF90aGlzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbihpZCkge1xuICAgICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xuICAgICAgICB9O1xuICB9O1xufSkodGhpcykpKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9hbmltYXRpb24vY2FuY2VsQW5pbWF0aW9uRnJhbWUuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzog6YWN5YiX44Gu5pON5L2c57O7XG4gKiBQcm9qZWN0OlxuICogRmlsZTogQXJyYXlcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycmF5IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuXG4gIH1cblxuXHQvKipcblx0ICog6YWN5YiX5YaF44Gu44Op44Oz44OA44Og44Gq5YCk44KS44Gy44Go44Gk5Y+W5b6XXG5cdCAqIEBwYXJhbSBhcnIgOiDphY3liJdcblx0ICogQHJldHVybnMgeyp9IDog6YWN5YiX5YaF44Gu5YCkXG5cdCAqL1xuICBhcnJSYW5kKGFycikge1xuXG4gICAgcmV0dXJuIGFyclt0aGlzLnJhbmRvbSgwLCBhcnIubGVuZ3RoIC0gMSldO1xuXG4gIH1cblxuXHQvKipcbiAgICog6YWN5YiX44KS44Op44Oz44OA44Og44Gr5Lim44G55pu/44GIXG5cdCAqIEBwYXJhbSBhcnIgOiDphY3liJcoQXJyYXkpXG5cdCAqIEByZXR1cm5zIHtBcnJheX1cblx0ICovXG4gIHNodWZmbGUoYXJyKSB7XG5cbiAgICBsZXQgQXJyID0gW107XG4gICAgQXJyID0gYXJyLnNsaWNlKCk7XG4gICAgdmFyIGkgPSBhcnIubGVuZ3RoO1xuICAgIHdoaWxlKGkpe1xuICAgICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqaSk7XG4gICAgICB2YXIgdCA9IEFyclstLWldO1xuICAgICAgQXJyW2ldID0gQXJyW2pdO1xuICAgICAgQXJyW2pdID0gdDtcbiAgICB9XG4gICAgcmV0dXJuIEFycjtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3V0aWxzL2FycmF5L0FycmF5LmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6IFVh5Yik5YilXG4gKiBQcm9qZWN0OlxuICogRmlsZTogY2hlY2tDbGllbnRcbiAqIERhdGU6XG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmNvbnN0IHBhcnNlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9saWJzL3VhLXBhcnNlci5taW4uanNcIik7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hlY2tDbGllbnQge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy51YSA9IG5ldyBwYXJzZXIoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIElF44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNJRSgpIHtcbiAgICBsZXQgYnJvd3NlciA9IHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gICAgcmV0dXJuIGJyb3dzZXIgPT09ICdJRScgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRmlyZWZveOOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzRmlyZWZveCgpIHtcbiAgICBsZXQgYnJvd3NlciA9IHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gICAgcmV0dXJuIGJyb3dzZXIgPT09ICdGaXJlZm94JyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaHJvbWXjgYvjganjgYbjgYvliKTlrppcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0Nocm9tZSgpIHtcbiAgICBsZXQgYnJvd3NlciA9IHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gICAgcmV0dXJuIGJyb3dzZXIgPT09ICdDaHJvbWUnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhZmFyaeOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzU2FmYXJpKCkge1xuICAgIGxldCBicm93c2VyID0gdGhpcy51YS5nZXRCcm93c2VyKCkubmFtZTtcbiAgICByZXR1cm4gYnJvd3NlciA9PT0gJ1NhZmFyaScgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICog44Oi44OQ44Kk44Or44GL44Gp44GG44GL5Yik5a6aXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgaXNNb2JpbGUoKSB7XG4gICAgbGV0IGRldmljZSA9IHRoaXMudWEuZ2V0RGV2aWNlKCkudHlwZTtcbiAgICByZXR1cm4gZGV2aWNlID09PSAnbW9iaWxlJyA/IHRydWUgOiBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIOOCv+ODluODrOODg+ODiOOBi+OBqeOBhuOBi+WIpOWumlxuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGlzVGFibGV0KCkge1xuICAgIGxldCBkZXZpY2UgPSB0aGlzLnVhLmdldERldmljZSgpLnR5cGU7XG4gICAgcmV0dXJuIGRldmljZSA9PT0gJ3RhYmxldCcgPyB0cnVlIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPU+WQjeOCkuWPluW+l1xuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgb3MoKSB7XG4gICAgcmV0dXJuIHRoaXMudWEuZ2V0T1MoKS5uYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIOODh+ODkOOCpOOCueWQjeOCkuWPluW+l1xuICAgKiBAcmV0dXJucyB7dmVuZG9yfHtIVEMsIFNwcmludH19XG4gICAqL1xuICBkZXZpY2VfbmFtZSgpIHtcbiAgICBsZXQgZGV2aWNlX25hbWUgPSB0aGlzLnVhLmdldERldmljZSgpLnZlbmRvcjtcbiAgICByZXR1cm4gZGV2aWNlX25hbWU7XG4gIH1cblxuICAvKipcbiAgICog44OW44Op44Km44K25ZCN44KS5Y+W5b6XXG4gICAqL1xuICBicm93c2VyX25hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudWEuZ2V0QnJvd3NlcigpLm5hbWU7XG4gIH1cblxuICAvKipcbiAgICog44Om44O844K244O844Ko44O844K444Kn44Oz44OI5oOF5aCx77ya5YWo44Gm44KS5Y+W5b6XXG4gICAqL1xuICBhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMudWEuZ2V0VUEoKTtcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy91YS9jaGVja0NsaWVudC5qcyIsIi8qKlxuICogVUFQYXJzZXIuanMgdjAuNy4xMlxuICogTGlnaHR3ZWlnaHQgSmF2YVNjcmlwdC1iYXNlZCBVc2VyLUFnZW50IHN0cmluZyBwYXJzZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWlzYWxtYW4vdWEtcGFyc2VyLWpzXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTItMjAxNiBGYWlzYWwgU2FsbWFuIDxmeXpsbWFuQGdtYWlsLmNvbT5cbiAqIER1YWwgbGljZW5zZWQgdW5kZXIgR1BMdjIgJiBNSVRcbiAqLyhmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO3ZhciBuPVwiMC43LjEyXCIscj1cIlwiLGk9XCI/XCIscz1cImZ1bmN0aW9uXCIsbz1cInVuZGVmaW5lZFwiLHU9XCJvYmplY3RcIixhPVwic3RyaW5nXCIsZj1cIm1ham9yXCIsbD1cIm1vZGVsXCIsYz1cIm5hbWVcIixoPVwidHlwZVwiLHA9XCJ2ZW5kb3JcIixkPVwidmVyc2lvblwiLHY9XCJhcmNoaXRlY3R1cmVcIixtPVwiY29uc29sZVwiLGc9XCJtb2JpbGVcIix5PVwidGFibGV0XCIsYj1cInNtYXJ0dHZcIix3PVwid2VhcmFibGVcIixFPVwiZW1iZWRkZWRcIixTPXtleHRlbmQ6ZnVuY3Rpb24oZSx0KXt2YXIgbj17fTtmb3IodmFyIHIgaW4gZSl0W3JdJiZ0W3JdLmxlbmd0aCUyPT09MD9uW3JdPXRbcl0uY29uY2F0KGVbcl0pOm5bcl09ZVtyXTtyZXR1cm4gbn0saGFzOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHR5cGVvZiBlPT1cInN0cmluZ1wiP3QudG9Mb3dlckNhc2UoKS5pbmRleE9mKGUudG9Mb3dlckNhc2UoKSkhPT0tMTohMX0sbG93ZXJpemU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUudG9Mb3dlckNhc2UoKX0sbWFqb3I6ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlPT09YT9lLnJlcGxhY2UoL1teXFxkXFwuXS9nLFwiXCIpLnNwbGl0KFwiLlwiKVswXTp0fSx0cmltOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoL15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLFwiXCIpfX0seD17cmd4OmZ1bmN0aW9uKCl7dmFyIGUsbj0wLHIsaSxhLGYsbCxjLGg9YXJndW1lbnRzO3doaWxlKG48aC5sZW5ndGgmJiFsKXt2YXIgcD1oW25dLGQ9aFtuKzFdO2lmKHR5cGVvZiBlPT09byl7ZT17fTtmb3IoYSBpbiBkKWQuaGFzT3duUHJvcGVydHkoYSkmJihmPWRbYV0sdHlwZW9mIGY9PT11P2VbZlswXV09dDplW2ZdPXQpfXI9aT0wO3doaWxlKHI8cC5sZW5ndGgmJiFsKXtsPXBbcisrXS5leGVjKHRoaXMuZ2V0VUEoKSk7aWYoISFsKWZvcihhPTA7YTxkLmxlbmd0aDthKyspYz1sWysraV0sZj1kW2FdLHR5cGVvZiBmPT09dSYmZi5sZW5ndGg+MD9mLmxlbmd0aD09Mj90eXBlb2YgZlsxXT09cz9lW2ZbMF1dPWZbMV0uY2FsbCh0aGlzLGMpOmVbZlswXV09ZlsxXTpmLmxlbmd0aD09Mz90eXBlb2YgZlsxXT09PXMmJighZlsxXS5leGVjfHwhZlsxXS50ZXN0KT9lW2ZbMF1dPWM/ZlsxXS5jYWxsKHRoaXMsYyxmWzJdKTp0OmVbZlswXV09Yz9jLnJlcGxhY2UoZlsxXSxmWzJdKTp0OmYubGVuZ3RoPT00JiYoZVtmWzBdXT1jP2ZbM10uY2FsbCh0aGlzLGMucmVwbGFjZShmWzFdLGZbMl0pKTp0KTplW2ZdPWM/Yzp0fW4rPTJ9cmV0dXJuIGV9LHN0cjpmdW5jdGlvbihlLG4pe2Zvcih2YXIgciBpbiBuKWlmKHR5cGVvZiBuW3JdPT09dSYmbltyXS5sZW5ndGg+MCl7Zm9yKHZhciBzPTA7czxuW3JdLmxlbmd0aDtzKyspaWYoUy5oYXMobltyXVtzXSxlKSlyZXR1cm4gcj09PWk/dDpyfWVsc2UgaWYoUy5oYXMobltyXSxlKSlyZXR1cm4gcj09PWk/dDpyO3JldHVybiBlfX0sVD17YnJvd3Nlcjp7b2xkc2FmYXJpOnt2ZXJzaW9uOntcIjEuMFwiOlwiLzhcIiwxLjI6XCIvMVwiLDEuMzpcIi8zXCIsXCIyLjBcIjpcIi80MTJcIixcIjIuMC4yXCI6XCIvNDE2XCIsXCIyLjAuM1wiOlwiLzQxN1wiLFwiMi4wLjRcIjpcIi80MTlcIixcIj9cIjpcIi9cIn19fSxkZXZpY2U6e2FtYXpvbjp7bW9kZWw6e1wiRmlyZSBQaG9uZVwiOltcIlNEXCIsXCJLRlwiXX19LHNwcmludDp7bW9kZWw6e1wiRXZvIFNoaWZ0IDRHXCI6XCI3MzczS1RcIn0sdmVuZG9yOntIVEM6XCJBUEFcIixTcHJpbnQ6XCJTcHJpbnRcIn19fSxvczp7d2luZG93czp7dmVyc2lvbjp7TUU6XCI0LjkwXCIsXCJOVCAzLjExXCI6XCJOVDMuNTFcIixcIk5UIDQuMFwiOlwiTlQ0LjBcIiwyZTM6XCJOVCA1LjBcIixYUDpbXCJOVCA1LjFcIixcIk5UIDUuMlwiXSxWaXN0YTpcIk5UIDYuMFwiLDc6XCJOVCA2LjFcIiw4OlwiTlQgNi4yXCIsOC4xOlwiTlQgNi4zXCIsMTA6W1wiTlQgNi40XCIsXCJOVCAxMC4wXCJdLFJUOlwiQVJNXCJ9fX19LE49e2Jyb3dzZXI6W1svKG9wZXJhXFxzbWluaSlcXC8oW1xcd1xcLi1dKykvaSwvKG9wZXJhXFxzW21vYmlsZXRhYl0rKS4rdmVyc2lvblxcLyhbXFx3XFwuLV0rKS9pLC8ob3BlcmEpLit2ZXJzaW9uXFwvKFtcXHdcXC5dKykvaSwvKG9wZXJhKVtcXC9cXHNdKyhbXFx3XFwuXSspL2ldLFtjLGRdLFsvKG9waW9zKVtcXC9cXHNdKyhbXFx3XFwuXSspL2ldLFtbYyxcIk9wZXJhIE1pbmlcIl0sZF0sWy9cXHMob3ByKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIk9wZXJhXCJdLGRdLFsvKGtpbmRsZSlcXC8oW1xcd1xcLl0rKS9pLC8obHVuYXNjYXBlfG1heHRob258bmV0ZnJvbnR8amFzbWluZXxibGF6ZXIpW1xcL1xcc10/KFtcXHdcXC5dKykqL2ksLyhhdmFudFxcc3xpZW1vYmlsZXxzbGltfGJhaWR1KSg/OmJyb3dzZXIpP1tcXC9cXHNdPyhbXFx3XFwuXSopL2ksLyg/Om1zfFxcKCkoaWUpXFxzKFtcXHdcXC5dKykvaSwvKHJla29ucSlcXC8oW1xcd1xcLl0rKSovaSwvKGNocm9taXVtfGZsb2NrfHJvY2ttZWx0fG1pZG9yaXxlcGlwaGFueXxzaWxrfHNreWZpcmV8b3ZpYnJvd3Nlcnxib2x0fGlyb258dml2YWxkaXxpcmlkaXVtfHBoYW50b21qcylcXC8oW1xcd1xcLi1dKykvaV0sW2MsZF0sWy8odHJpZGVudCkuK3J2WzpcXHNdKFtcXHdcXC5dKykuK2xpa2VcXHNnZWNrby9pXSxbW2MsXCJJRVwiXSxkXSxbLyhlZGdlKVxcLygoXFxkKyk/W1xcd1xcLl0rKS9pXSxbYyxkXSxbLyh5YWJyb3dzZXIpXFwvKFtcXHdcXC5dKykvaV0sW1tjLFwiWWFuZGV4XCJdLGRdLFsvKGNvbW9kb19kcmFnb24pXFwvKFtcXHdcXC5dKykvaV0sW1tjLC9fL2csXCIgXCJdLGRdLFsvKG1pY3JvbWVzc2VuZ2VyKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIldlQ2hhdFwiXSxkXSxbL3hpYW9taVxcL21pdWlicm93c2VyXFwvKFtcXHdcXC5dKykvaV0sW2QsW2MsXCJNSVVJIEJyb3dzZXJcIl1dLFsvXFxzd3ZcXCkuKyhjaHJvbWUpXFwvKFtcXHdcXC5dKykvaV0sW1tjLC8oLispLyxcIiQxIFdlYlZpZXdcIl0sZF0sWy9hbmRyb2lkLitzYW1zdW5nYnJvd3NlclxcLyhbXFx3XFwuXSspL2ksL2FuZHJvaWQuK3ZlcnNpb25cXC8oW1xcd1xcLl0rKVxccysoPzptb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkqL2ldLFtkLFtjLFwiQW5kcm9pZCBCcm93c2VyXCJdXSxbLyhjaHJvbWV8b21uaXdlYnxhcm9yYXxbdGl6ZW5va2FdezV9XFxzP2Jyb3dzZXIpXFwvdj8oW1xcd1xcLl0rKS9pLC8ocXFicm93c2VyKVtcXC9cXHNdPyhbXFx3XFwuXSspL2ldLFtjLGRdLFsvKHVjXFxzP2Jyb3dzZXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaSwvdWN3ZWIuKyh1Y2Jyb3dzZXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaSwvanVjLisodWN3ZWIpW1xcL1xcc10/KFtcXHdcXC5dKykvaV0sW1tjLFwiVUNCcm93c2VyXCJdLGRdLFsvKGRvbGZpbilcXC8oW1xcd1xcLl0rKS9pXSxbW2MsXCJEb2xwaGluXCJdLGRdLFsvKCg/OmFuZHJvaWQuKyljcm1vfGNyaW9zKVxcLyhbXFx3XFwuXSspL2ldLFtbYyxcIkNocm9tZVwiXSxkXSxbLztmYmF2XFwvKFtcXHdcXC5dKyk7L2ldLFtkLFtjLFwiRmFjZWJvb2tcIl1dLFsvZnhpb3NcXC8oW1xcd1xcLi1dKykvaV0sW2QsW2MsXCJGaXJlZm94XCJdXSxbL3ZlcnNpb25cXC8oW1xcd1xcLl0rKS4rP21vYmlsZVxcL1xcdytcXHMoc2FmYXJpKS9pXSxbZCxbYyxcIk1vYmlsZSBTYWZhcmlcIl1dLFsvdmVyc2lvblxcLyhbXFx3XFwuXSspLis/KG1vYmlsZVxccz9zYWZhcml8c2FmYXJpKS9pXSxbZCxjXSxbL3dlYmtpdC4rPyhtb2JpbGVcXHM/c2FmYXJpfHNhZmFyaSkoXFwvW1xcd1xcLl0rKS9pXSxbYyxbZCx4LnN0cixULmJyb3dzZXIub2xkc2FmYXJpLnZlcnNpb25dXSxbLyhrb25xdWVyb3IpXFwvKFtcXHdcXC5dKykvaSwvKHdlYmtpdHxraHRtbClcXC8oW1xcd1xcLl0rKS9pXSxbYyxkXSxbLyhuYXZpZ2F0b3J8bmV0c2NhcGUpXFwvKFtcXHdcXC4tXSspL2ldLFtbYyxcIk5ldHNjYXBlXCJdLGRdLFsvKHN3aWZ0Zm94KS9pLC8oaWNlZHJhZ29ufGljZXdlYXNlbHxjYW1pbm98Y2hpbWVyYXxmZW5uZWN8bWFlbW9cXHNicm93c2VyfG1pbmltb3xjb25rZXJvcilbXFwvXFxzXT8oW1xcd1xcLlxcK10rKS9pLC8oZmlyZWZveHxzZWFtb25rZXl8ay1tZWxlb258aWNlY2F0fGljZWFwZXxmaXJlYmlyZHxwaG9lbml4KVxcLyhbXFx3XFwuLV0rKS9pLC8obW96aWxsYSlcXC8oW1xcd1xcLl0rKS4rcnZcXDouK2dlY2tvXFwvXFxkKy9pLC8ocG9sYXJpc3xseW54fGRpbGxvfGljYWJ8ZG9yaXN8YW1heWF8dzNtfG5ldHN1cmZ8c2xlaXBuaXIpW1xcL1xcc10/KFtcXHdcXC5dKykvaSwvKGxpbmtzKVxcc1xcKChbXFx3XFwuXSspL2ksLyhnb2Jyb3dzZXIpXFwvPyhbXFx3XFwuXSspKi9pLC8oaWNlXFxzP2Jyb3dzZXIpXFwvdj8oW1xcd1xcLl9dKykvaSwvKG1vc2FpYylbXFwvXFxzXShbXFx3XFwuXSspL2ldLFtjLGRdXSxjcHU6W1svKD86KGFtZHx4KD86KD86ODZ8NjQpW18tXSk/fHdvd3x3aW4pNjQpWztcXCldL2ldLFtbdixcImFtZDY0XCJdXSxbLyhpYTMyKD89OykpL2ldLFtbdixTLmxvd2VyaXplXV0sWy8oKD86aVszNDZdfHgpODYpWztcXCldL2ldLFtbdixcImlhMzJcIl1dLFsvd2luZG93c1xccyhjZXxtb2JpbGUpO1xcc3BwYzsvaV0sW1t2LFwiYXJtXCJdXSxbLygoPzpwcGN8cG93ZXJwYykoPzo2NCk/KSg/Olxcc21hY3w7fFxcKSkvaV0sW1t2LC9vd2VyLyxcIlwiLFMubG93ZXJpemVdXSxbLyhzdW40XFx3KVs7XFwpXS9pXSxbW3YsXCJzcGFyY1wiXV0sWy8oKD86YXZyMzJ8aWE2NCg/PTspKXw2OGsoPz1cXCkpfGFybSg/OjY0fCg/PXZcXGQrOykpfCg/PWF0bWVsXFxzKWF2cnwoPzppcml4fG1pcHN8c3BhcmMpKD86NjQpPyg/PTspfHBhLXJpc2MpL2ldLFtbdixTLmxvd2VyaXplXV1dLGRldmljZTpbWy9cXCgoaXBhZHxwbGF5Ym9vayk7W1xcd1xcc1xcKTstXSsocmltfGFwcGxlKS9pXSxbbCxwLFtoLHldXSxbL2FwcGxlY29yZW1lZGlhXFwvW1xcd1xcLl0rIFxcKChpcGFkKS9dLFtsLFtwLFwiQXBwbGVcIl0sW2gseV1dLFsvKGFwcGxlXFxzezAsMX10dikvaV0sW1tsLFwiQXBwbGUgVFZcIl0sW3AsXCJBcHBsZVwiXV0sWy8oYXJjaG9zKVxccyhnYW1lcGFkMj8pL2ksLyhocCkuKyh0b3VjaHBhZCkvaSwvKGhwKS4rKHRhYmxldCkvaSwvKGtpbmRsZSlcXC8oW1xcd1xcLl0rKS9pLC9cXHMobm9vaylbXFx3XFxzXStidWlsZFxcLyhcXHcrKS9pLC8oZGVsbClcXHMoc3RyZWFba3ByXFxzXFxkXSpbXFxka29dKS9pXSxbcCxsLFtoLHldXSxbLyhrZltBLXpdKylcXHNidWlsZFxcL1tcXHdcXC5dKy4qc2lsa1xcLy9pXSxbbCxbcCxcIkFtYXpvblwiXSxbaCx5XV0sWy8oc2R8a2YpWzAzNDloaWpvcnN0dXddK1xcc2J1aWxkXFwvW1xcd1xcLl0rLipzaWxrXFwvL2ldLFtbbCx4LnN0cixULmRldmljZS5hbWF6b24ubW9kZWxdLFtwLFwiQW1hem9uXCJdLFtoLGddXSxbL1xcKChpcFtob25lZHxcXHNcXHcqXSspOy4rKGFwcGxlKS9pXSxbbCxwLFtoLGddXSxbL1xcKChpcFtob25lZHxcXHNcXHcqXSspOy9pXSxbbCxbcCxcIkFwcGxlXCJdLFtoLGddXSxbLyhibGFja2JlcnJ5KVtcXHMtXT8oXFx3KykvaSwvKGJsYWNrYmVycnl8YmVucXxwYWxtKD89XFwtKXxzb255ZXJpY3Nzb258YWNlcnxhc3VzfGRlbGx8aHVhd2VpfG1laXp1fG1vdG9yb2xhfHBvbHl0cm9uKVtcXHNfLV0/KFtcXHctXSspKi9pLC8oaHApXFxzKFtcXHdcXHNdK1xcdykvaSwvKGFzdXMpLT8oXFx3KykvaV0sW3AsbCxbaCxnXV0sWy9cXChiYjEwO1xccyhcXHcrKS9pXSxbbCxbcCxcIkJsYWNrQmVycnlcIl0sW2gsZ11dLFsvYW5kcm9pZC4rKHRyYW5zZm9bcHJpbWVcXHNdezQsMTB9XFxzXFx3K3xlZWVwY3xzbGlkZXJcXHNcXHcrfG5leHVzIDd8cGFkZm9uZSkvaV0sW2wsW3AsXCJBc3VzXCJdLFtoLHldXSxbLyhzb255KVxccyh0YWJsZXRcXHNbcHNdKVxcc2J1aWxkXFwvL2ksLyhzb255KT8oPzpzZ3AuKylcXHNidWlsZFxcLy9pXSxbW3AsXCJTb255XCJdLFtsLFwiWHBlcmlhIFRhYmxldFwiXSxbaCx5XV0sWy8oPzpzb255KT8oPzooPzooPzpjfGQpXFxkezR9KXwoPzpzb1stbF0uKykpXFxzYnVpbGRcXC8vaV0sW1twLFwiU29ueVwiXSxbbCxcIlhwZXJpYSBQaG9uZVwiXSxbaCxnXV0sWy9cXHMob3V5YSlcXHMvaSwvKG5pbnRlbmRvKVxccyhbd2lkczN1XSspL2ldLFtwLGwsW2gsbV1dLFsvYW5kcm9pZC4rO1xccyhzaGllbGQpXFxzYnVpbGQvaV0sW2wsW3AsXCJOdmlkaWFcIl0sW2gsbV1dLFsvKHBsYXlzdGF0aW9uXFxzWzM0cG9ydGFibGV2aV0rKS9pXSxbbCxbcCxcIlNvbnlcIl0sW2gsbV1dLFsvKHNwcmludFxccyhcXHcrKSkvaV0sW1twLHguc3RyLFQuZGV2aWNlLnNwcmludC52ZW5kb3JdLFtsLHguc3RyLFQuZGV2aWNlLnNwcmludC5tb2RlbF0sW2gsZ11dLFsvKGxlbm92bylcXHM/KFMoPzo1MDAwfDYwMDApKyg/OlstXVtcXHcrXSkpL2ldLFtwLGwsW2gseV1dLFsvKGh0YylbO19cXHMtXSsoW1xcd1xcc10rKD89XFwpKXxcXHcrKSovaSwvKHp0ZSktKFxcdyspKi9pLC8oYWxjYXRlbHxnZWVrc3Bob25lfGh1YXdlaXxsZW5vdm98bmV4aWFufHBhbmFzb25pY3woPz07XFxzKXNvbnkpW19cXHMtXT8oW1xcdy1dKykqL2ldLFtwLFtsLC9fL2csXCIgXCJdLFtoLGddXSxbLyhuZXh1c1xcczkpL2ldLFtsLFtwLFwiSFRDXCJdLFtoLHldXSxbLyhuZXh1c1xcczZwKS9pXSxbbCxbcCxcIkh1YXdlaVwiXSxbaCxnXV0sWy8obWljcm9zb2Z0KTtcXHMobHVtaWFbXFxzXFx3XSspL2ldLFtwLGwsW2gsZ11dLFsvW1xcc1xcKDtdKHhib3goPzpcXHNvbmUpPylbXFxzXFwpO10vaV0sW2wsW3AsXCJNaWNyb3NvZnRcIl0sW2gsbV1dLFsvKGtpblxcLltvbmV0d117M30pL2ldLFtbbCwvXFwuL2csXCIgXCJdLFtwLFwiTWljcm9zb2Z0XCJdLFtoLGddXSxbL1xccyhtaWxlc3RvbmV8ZHJvaWQoPzpbMi00eF18XFxzKD86YmlvbmljfHgyfHByb3xyYXpyKSk/KDo/XFxzNGcpPylbXFx3XFxzXStidWlsZFxcLy9pLC9tb3RbXFxzLV0/KFxcdyspKi9pLC8oWFRcXGR7Myw0fSkgYnVpbGRcXC8vaSwvKG5leHVzXFxzNikvaV0sW2wsW3AsXCJNb3Rvcm9sYVwiXSxbaCxnXV0sWy9hbmRyb2lkLitcXHMobXo2MFxcZHx4b29tW1xcczJdezAsMn0pXFxzYnVpbGRcXC8vaV0sW2wsW3AsXCJNb3Rvcm9sYVwiXSxbaCx5XV0sWy9oYmJ0dlxcL1xcZCtcXC5cXGQrXFwuXFxkK1xccytcXChbXFx3XFxzXSo7XFxzKihcXHdbXjtdKik7KFteO10qKS9pXSxbW3AsUy50cmltXSxbbCxTLnRyaW1dLFtoLGJdXSxbL2hiYnR2LittYXBsZTsoXFxkKykvaV0sW1tsLC9eLyxcIlNtYXJ0VFZcIl0sW3AsXCJTYW1zdW5nXCJdLFtoLGJdXSxbL1xcKGR0dltcXCk7XS4rKGFxdW9zKS9pXSxbbCxbcCxcIlNoYXJwXCJdLFtoLGJdXSxbL2FuZHJvaWQuKygoc2NoLWlbODldMFxcZHxzaHctbTM4MHN8Z3QtcFxcZHs0fXxndC1uXFxkK3xzZ2gtdDhbNTZdOXxuZXh1cyAxMCkpL2ksLygoU00tVFxcdyspKS9pXSxbW3AsXCJTYW1zdW5nXCJdLGwsW2gseV1dLFsvc21hcnQtdHYuKyhzYW1zdW5nKS9pXSxbcCxbaCxiXSxsXSxbLygoc1tjZ3BdaC1cXHcrfGd0LVxcdyt8Z2FsYXh5XFxzbmV4dXN8c20tXFx3W1xcd1xcZF0rKSkvaSwvKHNhbVtzdW5nXSopW1xccy1dKihcXHcrLT9bXFx3LV0qKSovaSwvc2VjLSgoc2doXFx3KykpL2ldLFtbcCxcIlNhbXN1bmdcIl0sbCxbaCxnXV0sWy9zaWUtKFxcdyspKi9pXSxbbCxbcCxcIlNpZW1lbnNcIl0sW2gsZ11dLFsvKG1hZW1vfG5va2lhKS4qKG45MDB8bHVtaWFcXHNcXGQrKS9pLC8obm9raWEpW1xcc18tXT8oW1xcdy1dKykqL2ldLFtbcCxcIk5va2lhXCJdLGwsW2gsZ11dLFsvYW5kcm9pZFxcczNcXC5bXFxzXFx3Oy1dezEwfShhXFxkezN9KS9pXSxbbCxbcCxcIkFjZXJcIl0sW2gseV1dLFsvYW5kcm9pZFxcczNcXC5bXFxzXFx3Oy1dezEwfShsZz8pLShbMDZjdjldezMsNH0pL2ldLFtbcCxcIkxHXCJdLGwsW2gseV1dLFsvKGxnKSBuZXRjYXN0XFwudHYvaV0sW3AsbCxbaCxiXV0sWy8obmV4dXNcXHNbNDVdKS9pLC9sZ1tlO1xcc1xcLy1dKyhcXHcrKSovaV0sW2wsW3AsXCJMR1wiXSxbaCxnXV0sWy9hbmRyb2lkLisoaWRlYXRhYlthLXowLTlcXC1cXHNdKykvaV0sW2wsW3AsXCJMZW5vdm9cIl0sW2gseV1dLFsvbGludXg7LisoKGpvbGxhKSk7L2ldLFtwLGwsW2gsZ11dLFsvKChwZWJibGUpKWFwcFxcL1tcXGRcXC5dK1xccy9pXSxbcCxsLFtoLHddXSxbL2FuZHJvaWQuKztcXHMoZ2xhc3MpXFxzXFxkL2ldLFtsLFtwLFwiR29vZ2xlXCJdLFtoLHddXSxbL2FuZHJvaWQuKyhcXHcrKVxccytidWlsZFxcL2htXFwxL2ksL2FuZHJvaWQuKyhobVtcXHNcXC1fXSpub3RlP1tcXHNfXSooPzpcXGRcXHcpPylcXHMrYnVpbGQvaSwvYW5kcm9pZC4rKG1pW1xcc1xcLV9dKig/Om9uZXxvbmVbXFxzX11wbHVzfG5vdGUgbHRlKT9bXFxzX10qKD86XFxkXFx3KT8pXFxzK2J1aWxkL2ldLFtbbCwvXy9nLFwiIFwiXSxbcCxcIlhpYW9taVwiXSxbaCxnXV0sWy9hbmRyb2lkLithMDAwKDEpXFxzK2J1aWxkL2ldLFtsLFtwLFwiT25lUGx1c1wiXSxbaCxnXV0sWy9cXHModGFibGV0KVs7XFwvXS9pLC9cXHMobW9iaWxlKSg/Ols7XFwvXXxcXHNzYWZhcmkpL2ldLFtbaCxTLmxvd2VyaXplXSxwLGxdXSxlbmdpbmU6W1svd2luZG93cy4rXFxzZWRnZVxcLyhbXFx3XFwuXSspL2ldLFtkLFtjLFwiRWRnZUhUTUxcIl1dLFsvKHByZXN0bylcXC8oW1xcd1xcLl0rKS9pLC8od2Via2l0fHRyaWRlbnR8bmV0ZnJvbnR8bmV0c3VyZnxhbWF5YXxseW54fHczbSlcXC8oW1xcd1xcLl0rKS9pLC8oa2h0bWx8dGFzbWFufGxpbmtzKVtcXC9cXHNdXFwoPyhbXFx3XFwuXSspL2ksLyhpY2FiKVtcXC9cXHNdKFsyM11cXC5bXFxkXFwuXSspL2ldLFtjLGRdLFsvcnZcXDooW1xcd1xcLl0rKS4qKGdlY2tvKS9pXSxbZCxjXV0sb3M6W1svbWljcm9zb2Z0XFxzKHdpbmRvd3MpXFxzKHZpc3RhfHhwKS9pXSxbYyxkXSxbLyh3aW5kb3dzKVxcc250XFxzNlxcLjI7XFxzKGFybSkvaSwvKHdpbmRvd3NcXHNwaG9uZSg/Olxcc29zKSopW1xcc1xcL10/KFtcXGRcXC5cXHNdK1xcdykqL2ksLyh3aW5kb3dzXFxzbW9iaWxlfHdpbmRvd3MpW1xcc1xcL10/KFtudGNlXFxkXFwuXFxzXStcXHcpL2ldLFtjLFtkLHguc3RyLFQub3Mud2luZG93cy52ZXJzaW9uXV0sWy8od2luKD89M3w5fG4pfHdpblxcczl4XFxzKShbbnRcXGRcXC5dKykvaV0sW1tjLFwiV2luZG93c1wiXSxbZCx4LnN0cixULm9zLndpbmRvd3MudmVyc2lvbl1dLFsvXFwoKGJiKSgxMCk7L2ldLFtbYyxcIkJsYWNrQmVycnlcIl0sZF0sWy8oYmxhY2tiZXJyeSlcXHcqXFwvPyhbXFx3XFwuXSspKi9pLC8odGl6ZW4pW1xcL1xcc10oW1xcd1xcLl0rKS9pLC8oYW5kcm9pZHx3ZWJvc3xwYWxtXFxzb3N8cW54fGJhZGF8cmltXFxzdGFibGV0XFxzb3N8bWVlZ298Y29udGlraSlbXFwvXFxzLV0/KFtcXHdcXC5dKykqL2ksL2xpbnV4Oy4rKHNhaWxmaXNoKTsvaV0sW2MsZF0sWy8oc3ltYmlhblxccz9vc3xzeW1ib3N8czYwKD89OykpW1xcL1xccy1dPyhbXFx3XFwuXSspKi9pXSxbW2MsXCJTeW1iaWFuXCJdLGRdLFsvXFwoKHNlcmllczQwKTsvaV0sW2NdLFsvbW96aWxsYS4rXFwobW9iaWxlOy4rZ2Vja28uK2ZpcmVmb3gvaV0sW1tjLFwiRmlyZWZveCBPU1wiXSxkXSxbLyhuaW50ZW5kb3xwbGF5c3RhdGlvbilcXHMoW3dpZHMzNHBvcnRhYmxldnVdKykvaSwvKG1pbnQpW1xcL1xcc1xcKF0/KFxcdyspKi9pLC8obWFnZWlhfHZlY3RvcmxpbnV4KVs7XFxzXS9pLC8oam9saXxba3hsbl0/dWJ1bnR1fGRlYmlhbnxbb3Blbl0qc3VzZXxnZW50b298KD89XFxzKWFyY2h8c2xhY2t3YXJlfGZlZG9yYXxtYW5kcml2YXxjZW50b3N8cGNsaW51eG9zfHJlZGhhdHx6ZW53YWxrfGxpbnB1cylbXFwvXFxzLV0/KD8hY2hyb20pKFtcXHdcXC4tXSspKi9pLC8oaHVyZHxsaW51eClcXHM/KFtcXHdcXC5dKykqL2ksLyhnbnUpXFxzPyhbXFx3XFwuXSspKi9pXSxbYyxkXSxbLyhjcm9zKVxcc1tcXHddK1xccyhbXFx3XFwuXStcXHcpL2ldLFtbYyxcIkNocm9taXVtIE9TXCJdLGRdLFsvKHN1bm9zKVxccz8oW1xcd1xcLl0rXFxkKSovaV0sW1tjLFwiU29sYXJpc1wiXSxkXSxbL1xccyhbZnJlbnRvcGMtXXswLDR9YnNkfGRyYWdvbmZseSlcXHM/KFtcXHdcXC5dKykqL2ldLFtjLGRdLFsvKGhhaWt1KVxccyhcXHcrKS9pXSxbYyxkXSxbLyhpcFtob25lYWRdKykoPzouKm9zXFxzKFtcXHddKykqXFxzbGlrZVxcc21hY3w7XFxzb3BlcmEpL2ldLFtbYyxcImlPU1wiXSxbZCwvXy9nLFwiLlwiXV0sWy8obWFjXFxzb3NcXHN4KVxccz8oW1xcd1xcc1xcLl0rXFx3KSovaSwvKG1hY2ludG9zaHxtYWMoPz1fcG93ZXJwYylcXHMpL2ldLFtbYyxcIk1hYyBPU1wiXSxbZCwvXy9nLFwiLlwiXV0sWy8oKD86b3Blbik/c29sYXJpcylbXFwvXFxzLV0/KFtcXHdcXC5dKykqL2ksLyhhaXgpXFxzKChcXGQpKD89XFwufFxcKXxcXHMpW1xcd1xcLl0qKSovaSwvKHBsYW5cXHM5fG1pbml4fGJlb3N8b3NcXC8yfGFtaWdhb3N8bW9ycGhvc3xyaXNjXFxzb3N8b3BlbnZtcykvaSwvKHVuaXgpXFxzPyhbXFx3XFwuXSspKi9pXSxbYyxkXV19LEM9ZnVuY3Rpb24odCxuKXtpZih0aGlzIGluc3RhbmNlb2YgQyl7dmFyIGk9dHx8KGUmJmUubmF2aWdhdG9yJiZlLm5hdmlnYXRvci51c2VyQWdlbnQ/ZS5uYXZpZ2F0b3IudXNlckFnZW50OnIpLHM9bj9TLmV4dGVuZChOLG4pOk47cmV0dXJuIHRoaXMuZ2V0QnJvd3Nlcj1mdW5jdGlvbigpe3ZhciBlPXgucmd4LmFwcGx5KHRoaXMscy5icm93c2VyKTtyZXR1cm4gZS5tYWpvcj1TLm1ham9yKGUudmVyc2lvbiksZX0sdGhpcy5nZXRDUFU9ZnVuY3Rpb24oKXtyZXR1cm4geC5yZ3guYXBwbHkodGhpcyxzLmNwdSl9LHRoaXMuZ2V0RGV2aWNlPWZ1bmN0aW9uKCl7cmV0dXJuIHgucmd4LmFwcGx5KHRoaXMscy5kZXZpY2UpfSx0aGlzLmdldEVuZ2luZT1mdW5jdGlvbigpe3JldHVybiB4LnJneC5hcHBseSh0aGlzLHMuZW5naW5lKX0sdGhpcy5nZXRPUz1mdW5jdGlvbigpe3JldHVybiB4LnJneC5hcHBseSh0aGlzLHMub3MpfSx0aGlzLmdldFJlc3VsdD1mdW5jdGlvbigpe3JldHVybnt1YTp0aGlzLmdldFVBKCksYnJvd3Nlcjp0aGlzLmdldEJyb3dzZXIoKSxlbmdpbmU6dGhpcy5nZXRFbmdpbmUoKSxvczp0aGlzLmdldE9TKCksZGV2aWNlOnRoaXMuZ2V0RGV2aWNlKCksY3B1OnRoaXMuZ2V0Q1BVKCl9fSx0aGlzLmdldFVBPWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2V0VUE9ZnVuY3Rpb24oZSl7cmV0dXJuIGk9ZSx0aGlzfSx0aGlzfXJldHVybihuZXcgQyh0LG4pKS5nZXRSZXN1bHQoKX07Qy5WRVJTSU9OPW4sQy5CUk9XU0VSPXtOQU1FOmMsTUFKT1I6ZixWRVJTSU9OOmR9LEMuQ1BVPXtBUkNISVRFQ1RVUkU6dn0sQy5ERVZJQ0U9e01PREVMOmwsVkVORE9SOnAsVFlQRTpoLENPTlNPTEU6bSxNT0JJTEU6ZyxTTUFSVFRWOmIsVEFCTEVUOnksV0VBUkFCTEU6dyxFTUJFRERFRDpFfSxDLkVOR0lORT17TkFNRTpjLFZFUlNJT046ZH0sQy5PUz17TkFNRTpjLFZFUlNJT046ZH0sdHlwZW9mIGV4cG9ydHMhPT1vPyh0eXBlb2YgbW9kdWxlIT09byYmbW9kdWxlLmV4cG9ydHMmJihleHBvcnRzPW1vZHVsZS5leHBvcnRzPUMpLGV4cG9ydHMuVUFQYXJzZXI9Qyk6dHlwZW9mIGRlZmluZT09PXMmJmRlZmluZS5hbWQ/ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIEN9KTplLlVBUGFyc2VyPUM7dmFyIGs9ZS5qUXVlcnl8fGUuWmVwdG87aWYodHlwZW9mIGshPT1vKXt2YXIgTD1uZXcgQztrLnVhPUwuZ2V0UmVzdWx0KCksay51YS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gTC5nZXRVQSgpfSxrLnVhLnNldD1mdW5jdGlvbihlKXtMLnNldFVBKGUpO3ZhciB0PUwuZ2V0UmVzdWx0KCk7Zm9yKHZhciBuIGluIHQpay51YVtuXT10W25dfX19KSh0eXBlb2Ygd2luZG93PT1cIm9iamVjdFwiP3dpbmRvdzp0aGlzKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvbGlicy91YS1wYXJzZXIubWluLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcImRlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdFwiKTsgfTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vYW1kLWRlZmluZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vYW1kLW9wdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogcHJlbG9hZEltZ1xuICogQHBhcmFtIGltZ1BhdGhcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxuICovXG5leHBvcnQgZGVmYXVsdCAoaW1nUGF0aCkgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgIHZhciBpbWc7XG4gICAgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbihlKSB7XG4gICAgICBpbWcucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGFyZ3VtZW50cy5jYWxsZWUpO1xuICAgICAgcmV0dXJuIHJlc29sdmUoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW1nLnNyYyA9IGltZ1BhdGg7XG4gIH0pO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdXRpbHMvaW1nL3ByZWxvYWRJbWcuanMiLCIvKipcbiAqIHNldFVwQnRuVHdpdHRlclxuICogQHBhcmFtICRidG5cbiAqIEBwYXJhbSB0ZXh0XG4gKiBAcGFyYW0gc2hhcmVVUkxcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCRidG4sIHRleHQsIHNoYXJlVVJMKSA9PiB7XG4gIHZhciB1cmw7XG4gIGlmIChzaGFyZVVSTCA9PSBudWxsKSB7XG4gICAgc2hhcmVVUkwgPSAnJztcbiAgfVxuICB1cmwgPSAnaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/JztcbiAgaWYgKHNoYXJlVVJMID09PSAnJykge1xuICAgIHVybCArPSBcInRleHQ9XCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKTtcbiAgfSBlbHNlIHtcbiAgICB1cmwgKz0gXCJ1cmw9XCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHNoYXJlVVJMKSkgKyBcIiZ0ZXh0PVwiICsgKGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSk7XG4gIH1cbiAgcmV0dXJuICRidG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHdpbmRvdy5vcGVuKHVybCwgJ3R3aXR0ZXJTaGFyZScsICd3aWR0aD02NzAsaGVpZ2h0PTQwMCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5Ud2l0dGVyLmpzIiwiLyoqXG4gKiBzZXRVcEJ0bkxpbmVcbiAqIEBwYXJhbSAkYnRuXG4gKiBAcGFyYW0gdGV4dFxuICogQHBhcmFtIHNoYXJlVVJMXG4gKi9cbmV4cG9ydCBkZWZhdWx0ICgkYnRuLCB0ZXh0LCBzaGFyZVVSTCA9ICcnKSA9PiB7XG4gIHZhciB1cmw7XG4gIGlmIChzaGFyZVVSTCA9PSBudWxsKSB7XG4gICAgc2hhcmVVUkwgPSAnJztcbiAgfVxuICB1cmwgPSAnaHR0cDovL2xpbmUubWUvbXNnL3RleHQvPyc7XG4gIGlmIChzaGFyZVVSTCA9PT0gJycpIHtcbiAgICB1cmwgKz0gXCJcIiArIChlbmNvZGVVUklDb21wb25lbnQodGV4dCkpO1xuICB9IGVsc2Uge1xuICAgIHVybCArPSAoZW5jb2RlVVJJQ29tcG9uZW50KHRleHQpKSArIFwiXFxuXCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHNoYXJlVVJMKSk7XG4gIH1cbiAgcmV0dXJuICRidG4ub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHdpbmRvdy5vcGVuKHVybCwgJ2xpbmVTaGFyZScpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5MaW5lLmpzIiwiLyoqXG4gKiBzZXRVcEJ0bkZhY2Vib29rXG4gKiBAcGFyYW0gJGJ0blxuICogQHBhcmFtIHNoYXJlVVJMXG4gKiBAcGFyYW0gZGVzY3JpcHRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCRidG4sIHNoYXJlVVJMLCBkZXNjcmlwdGlvbiA9ICcnKSA9PiB7XG4gIHZhciB1cmw7XG4gIGlmIChkZXNjcmlwdGlvbiA9PSBudWxsKSB7XG4gICAgZGVzY3JpcHRpb24gPSAnJztcbiAgfVxuICB1cmwgPSAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwPyZkaXNwbGF5PXBvcHVwJnU9JztcbiAgdXJsICs9IFwiXCIgKyAoZW5jb2RlVVJJQ29tcG9uZW50KHNoYXJlVVJMKSk7XG4gIGlmIChkZXNjcmlwdGlvbikge1xuICAgIHVybCArPSBcIiZkZXNjcmlwdGlvbj1cIiArIChlbmNvZGVVUklDb21wb25lbnQoZGVzY3JpcHRpb24pKTtcbiAgfVxuICByZXR1cm4gJGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgd2luZG93Lm9wZW4odXJsLCBcImZhY2Vib29rU2hhcmVcIiArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSksICd3aWR0aD02NzAsaGVpZ2h0PTQwMCcpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy91dGlscy9zbnMvc2V0VXBCdG5GYWNlQm9vay5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IEZ1bmNcbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuYyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLmJsYW5rKCk7XG4gICAgdGhpcy5kZWJ1Z2dlcigpO1xuICAgIHRoaXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG4gICAgdGhpcy5leHBhbmRqUXVlcnkoKTtcblxuICB9XG5cbiAgYmxhbmsoKSB7XG5cbiAgICAkKCgpPT57JCgnLmJsYW5rJykuYXR0cigndGFyZ2V0JywgJ19ibGFuaycpO30pO1xuXG4gIH1cblxuICBkZWJ1Z2dlcigpIHtcblxuICAgIC8vIOODh+ODkOODg+OCsOODouODvOODieWIh+abv1xuICAgIHZhciBSRUxFQVNFID0gZ2IuaW4uY29uZi5SRUxFQVNFO1xuXG4gICAgLy8g572u5o+b5a++6LGh44Gu44Oh44K944OD44OJ44KS6YWN5YiX44Go44GX44Gm5L+d5oyB44GZ44KLXG4gICAgdmFyIG1ldGhvZHMgPSBbXG4gICAgICAnbG9nJyxcbiAgICAgICdkZWJ1ZycsXG4gICAgICAnaW5mbycsXG4gICAgICAnd2FybicsXG4gICAgICAnZXJyb3InLFxuICAgICAgJ2RpcicsXG4gICAgICAndHJhY2UnLFxuICAgICAgJ2Fzc2VydCcsXG4gICAgICAnZGlyeG1sJyxcbiAgICAgICdncm91cCcsXG4gICAgICAnZ3JvdXBFbmQnLFxuICAgICAgJ3RpbWUnLFxuICAgICAgJ3RpbWVFbmQnLFxuICAgICAgJ2NvdW50JyxcbiAgICAgICdwcm9maWxlJyxcbiAgICAgICdwcm9maWxlRW5kJ1xuICAgIF07XG5cbiAgICAvLyBjb25zb2xl44GM5L2/44GI44Gq44GE5aC05ZCI44Gv56m644Gu44Kq44OW44K444Kn44Kv44OI44KS6Kit5a6a44GX44Gm44GK44GPXG4gICAgaWYoIHR5cGVvZiB3aW5kb3cuY29uc29sZSA9PT0gXCJ1bmRlZmluZWRcIiApe1xuICAgICAgd2luZG93LmNvbnNvbGUgPSB7fTtcbiAgICB9XG5cbiAgICAvLyDlkITjg6Hjgr3jg4Pjg4njgpJ3aW5kb3fjgbjnm7TmjqXov73liqDjgZfjgabooYzjgY9cbiAgICBmb3IoIHZhciBpIGluIG1ldGhvZHMgKXtcbiAgICAgIChmdW5jdGlvbiggbSApe1xuXG4gICAgICAgLy8gY29uc29sZeOBq+OBguOCi++8n+ODh+ODkOODg+OCsOODouODvOODieOBr+acieWKue+8n2NvbnNvbGXjga7jgoLjga7jga/plqLmlbDvvJ9cbiAgICAgICBpZiggY29uc29sZVttXSAmJiAhUkVMRUFTRSAmJiB0eXBlb2YgY29uc29sZVttXSA9PT0gXCJmdW5jdGlvblwiICl7XG4gICAgICAgIHdpbmRvd1ttXSA9IGNvbnNvbGVbbV0uYmluZChjb25zb2xlKTtcbiAgICAgICB9IGVsc2Uge+OAgC8vIGRlYnVnTW9kZeOBjGZhbHNlLOOCguOBl+OBj+OBr+ipsuW9k+ODoeOCveODg+ODieOBjOWtmOWcqOOBl+OBquOBhOWgtOWQiOOBr+OAgeepuuOBruODoeOCveODg+ODieOCkueUqOaEj+OBmeOCi1xuICAgICAgICB3aW5kb3dbbV0gPSBmdW5jdGlvbigpe307XG4gICAgICAgfVxuXG4gICAgICB9KSggbWV0aG9kc1tpXSApO1xuICAgIH1cblxuICB9XG5cbiAgcHJlcGVuZChwYXJhbSkge1xuXG4gICAgJCgnYm9keScpLnByZXBlbmQocGFyYW0pO1xuXG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKSB7XG5cbiAgICB2YXIgRlBTID0gMTAwMC82MDtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IC8vIGNocm9tZeOChOacgOaWsOOBrlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IC8vIOWPpOOBhGZpcmVmb3jnlKhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCAgLy8gc2FmYXJpNuS7peWJjeOAgWlPUzYgc2FmYXJp55SoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgRlBTKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCB0aW1lciApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07ICAgICAgXG5cbiAgfVxuXG4gIGV4cGFuZGpRdWVyeSgpIHtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgdzowLCBcbiAgICAgIGg6MCwgXG4gICAgICBhZGp1c3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB3ID0gJCh0aGlzKS5pbm5lcldpZHRoKCk7XG4gICAgICAgICAgdmFyIGggPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XG4gICAgICAgICAgJCh0aGlzKS5jc3Moe1xuICAgICAgICAgICAgJ3Bvc2l0aW9uJzonYWJzb2x1dGUnLFxuICAgICAgICAgICAgJ2xlZnQnOic1MCUnLFxuICAgICAgICAgICAgJ3RvcCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLWxlZnQnOictJyArICh3IC8gMikgKyAncHgnLFxuICAgICAgICAgICAgJ21hcmdpbi10b3AnOictJyArIChoIC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYWRqdXN0VzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAnbGVmdCc6JzUwJScsXG4gICAgICAgICAgICAnbWFyZ2luLWxlZnQnOictJyArICh3IC8gMikgKyAncHgnXG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYWRqdXN0SDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHcgPSAkKHRoaXMpLmlubmVyV2lkdGgoKTtcbiAgICAgICAgICB2YXIgaCA9ICQodGhpcykuaW5uZXJIZWlnaHQoKTtcbiAgICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICAncG9zaXRpb24nOidhYnNvbHV0ZScsXG4gICAgICAgICAgICAndG9wJzonNTAlJyxcbiAgICAgICAgICAgICdtYXJnaW4tdG9wJzonLScgKyAoaCAvIDIpICsgJ3B4J1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIH1cblxuICBjaGVja0Nzc0JsZW5kKCkge1xuXG4gICAgaWYgKCdDU1MnIGluIHdpbmRvdyAmJiAnc3VwcG9ydHMnIGluIHdpbmRvdy5DU1MpIHtcbiAgICAgIGlmICghd2luZG93LkNTUy5zdXBwb3J0cygnbWl4LWJsZW5kLW1vZGUnLCAnc29mdC1saWdodCcpKSB7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3QtbWl4LWJsZW5kLW1vZGUnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxvZyhnYi5pbi51LmlzSUUpO1xuXG4gICAgaWYgKGdiLmluLnUuaXNJRSkge1xuICAgICAgXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbm90LW1peC1ibGVuZC1tb2RlJylcbiAgICAgIFxuICAgIH07XG5cbiAgfVxuXG4gIG5vdFNhdmVJbWcoKSB7XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBwY1xuICAgIC8vXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBpZiAoZ2IuaW4udS5pc1BDKSB7XG5cbiAgICAgICQoKCk9PntcbiAgICAgICAgJChcImltZ1wiKS5vbihcImNvbnRleHRtZW51XCIsKCk9PntcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgfVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvL1xuICAgIC8vICBzcCBhbmRyb2lkXG4gICAgLy9cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB2YXIgdiA9IGdiLmluLnUuaXNBbmRyb2lkVmVyc2lvbigpO1xuXG4gICAgaWYgKHY9PXVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIGlmICh2PDUpIHtcblxuICAgICAgdmFyIHRpbWVyO1xuICAgICAgJChcImltZ1wiKS5vbihcInRvdWNoc3RhcnRcIiwoKT0+e1xuICAgICAgICB0aW1lciA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICBhbGVydChcIueUu+WDj+OBr+S/neWtmOOBp+OBjeOBvuOBm+OCk1wiKVxuICAgICAgICB9LDUwMClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgICQoXCJpbWdcIikub24oXCJ0b3VjaGVuZFwiLCgpPT57XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pICAgICAgXG5cbiAgICB9XG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9teWxpYnMvRnVuYy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IE1haW5cbiAqIERhdGU6XG4gKiBBdXRob3I6XG4gKi9cblxuaW1wb3J0IERpc3BsYXlUb3AgZnJvbSAnLi4vRGlzcGxheS9EaXNwbGF5VG9wJztcbmltcG9ydCBEaXNwbGF5VGV4dHVyZUJnIGZyb20gJy4uL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVCZyc7XG5pbXBvcnQgRGlzcGxheVRleHR1cmVNb3ZpZSBmcm9tICcuLi9EaXNwbGF5L0Rpc3BsYXlUZXh0dXJlTW92aWUnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gIH1cblxuICBvblJlYWR5KCkge1xuXG4gICAgLy9wYWdl44Oa44O844K45Yil44GuSUTjgpLlj5blvpdcbiAgICB2YXIgcGFnZSA9ICQoJ2JvZHknKS5kYXRhKCdpZCcpO1xuXG4gICAgd2luZG93LmNvbnNvbGUubG9nKCfnj77lnKjjga7jg5rjg7zjgrhJROOBryAnLCBwYWdlKTtcblxuXHRcdC8vcGFnZeOBrklE44GU44Go44Gr55m654Gr44GZ44KL44Kv44Op44K544Gu5oyv44KK5YiG44GRXG4gICAgc3dpdGNoIChwYWdlKSB7XG5cbiAgICAgIGNhc2UgJ3RvcCc6XG5cbiAgICAgICAgbmV3IERpc3BsYXlUb3AoKTtcblxuICAgICAgICBicmVhaztcblxuXHRcdFx0Y2FzZSAndGV4dHVyZUJnJzpcblxuXHRcdFx0XHRuZXcgRGlzcGxheVRleHR1cmVCZygpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICd0ZXh0dXJlTW92aWUnOlxuXG5cdFx0XHRcdG5ldyBEaXNwbGF5VGV4dHVyZU1vdmllKCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cbiAgICB9XG5cbiAgfVxuXG4gIG9uTG9hZCgpIHtcblxuICAgIFxuICB9XG5cbiAgb25SZW5kZXIoKSB7XG5cblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJChkb2N1bWVudCkub24oJ3JlYWR5JywgdGhpcy5vblJlYWR5LmJpbmQodGhpcykpO1xuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpOyAgICAgICAgXG5cbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy9wYWdlL01haW4uanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBEaXNwbGF5XG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgU2NlbmVNYW5nZXIgZnJvbSBcIi4uL3Zpc3VhbC9TY2VuZU1hbmdlclwiO1xuaW1wb3J0IFNjZW5lMDEgZnJvbSBcIi4uL3Zpc3VhbC9TY2VuZTAxXCI7XG5pbXBvcnQgU2NlbmUwMiBmcm9tIFwiLi4vdmlzdWFsL1NjZW5lMDJcIjtcblxuLy8gaW1wb3J0IFdlYkdMaW5pdCBmcm9tICcuL1dlYkdMaW5pdC5qcyc7XG5cbi8vIGltcG9ydCBDYW52YXMgZnJvbSBcIi4uL3Zpc3VhbC9DYW52YXNcIjtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNwbGF5VG9wIHtcblxuICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG5cbiAgfVxuXG4gIHNldHVwKCkge1xuXG4gICAgLy8g44Ki44OL44Oh44O844K344On44Oz44Or44O844OX44K544K/44O844OIXG4gICAgLy8gZ2IuaW4udXAubG9vcCgpO1xuICAgIFxuICB9XG5cbiAgb25Mb2FkKCkge1xuXG4gICAgZ2IuaW4uc2NlbmVNYW5nZXIgPSBuZXcgU2NlbmVNYW5nZXIoKTtcblxuICAgIGdiLmluLnNjZW5lQm94QSA9IG5ldyBTY2VuZTAxKCk7XG4gICAgZ2IuaW4uc2NlbmVCb3hCID0gbmV3IFNjZW5lMDIoKTtcblxuICAgIGdiLmluLnNjZW5lTWFuZ2VyLmFkZFNjZW5lKGdiLmluLnNjZW5lQm94QSk7XG4gICAgZ2IuaW4uc2NlbmVNYW5nZXIuYWRkU2NlbmUoZ2IuaW4uc2NlbmVCb3hCKTtcblxuICAgIGdiLmluLnNjZW5lTWFuZ2VyLmRyYXcoKTtcblxuICAgIC8vIGdiLmluLmNhbnZhcyA9IG5ldyBDYW52YXMoKTtcbiAgICAvLyBnYi5pbi5jYW52YXMuaW5pdCgpO1xuXG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblx0XHQvLyB3aW5kb3cuY29uc29sZS5sb2coJ3N0YXRpY19SdW4nKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRvcC5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFNjZW5lTWFuZ2VyXG4gKiBEYXRlOiAxNy8wNS8yOVxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVNYW5nZXIgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cblx0XHR0aGlzLk5VTSA9IDA7IC8vIOePvuWcqOOBruOCt+ODvOODs+OBrueVquWPt1xuXHRcdHRoaXMuc2NlbmVzID0gW107IC8vIOOCt+ODvOODs+OCkuagvOe0jeOBmeOCi+mFjeWIl1xuICAgIHRoaXMuZmFkZUluT3V0VGltZXIgPSAtMTsgLy9cblxuXHRcdHRoaXMuY2FudmFzID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDsgLy8gUmVuZGVyZXJcblxuICAgIHRoaXMuYWRkU2NlbmUgPSB0aGlzLl9hZGRTY2VuZS5iaW5kKHRoaXMpO1xuXG5cdFx0dGhpcy5vblJlc2l6ZSA9IHRoaXMuX29uUmVzaXplLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jaGVja051bSA9IHRoaXMuX2NoZWNrTnVtLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vbktleURvd24gPSB0aGlzLl9vbktleURvd24uYmluZCh0aGlzKTtcblx0XHR0aGlzLmZhZGVJbk91dCA9IHRoaXMuX2ZhZGVJbk91dC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZHJhdyA9IHRoaXMuX2RyYXcuYmluZCh0aGlzKTtcblxuXHRcdHRoaXMua2V5bmFtZSA9IG51bGw7XG5cblxuXHRcdHRoaXMuaW5pdCgpOyAvLyDliJ3mnJ/ljJblh6bnkIblvozjgIHjgqTjg5njg7Pjg4jnmbvpjLJcblxuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMllxuICAgKi9cbiAgaW5pdCgpe1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUsIGZhbHNlICk7XG5cblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemUsIGZhbHNlICk7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5vbktleURvd24sIHRydWUpO1xuXG5cdFx0Ly8gUmVuZGVyZXLkvZzmiJBcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe2FudGlhbGlhczogdHJ1ZX0pO1xuXHRcdHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyggd2luZG93LmRldmljZVBpeGVsUmF0aW8gKTtcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5cdFx0dGhpcy5yZW5kZXJlci5zb3J0T2JqZWN0cyA9IGZhbHNlO1xuXHRcdHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLmVuYWJsZWQgPSB0cnVlO1xuXHRcdHRoaXMucmVuZGVyZXIuc2hhZG93TWFwLnR5cGUgPSBUSFJFRS5QQ0ZTaGFkb3dNYXA7XG5cdFx0dGhpcy5yZW5kZXJlci5kb21FbGVtZW50LmlkID0gXCJtYWluXCI7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLnJlbmRlcmVyLmRvbUVsZW1lbnQ7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgfVxuXG5cdC8qKlxuICAgKiDnrqHnkIbjgZfjgZ/jgYTjgrfjg7zjg7PjgpLmoLzntI3jgZnjgovplqLmlbBcblx0ICogQHBhcmFtIHNjZW5lXG5cdCAqL1xuXHRfYWRkU2NlbmUoc2NlbmUpIHtcblxuXHRcdHRoaXMuc2NlbmVzLnB1c2goc2NlbmUpO1xuXG5cdH1cblxuICAvKipcbiAgICrjgIDjgqbjgqPjg7Pjg4njgqbjga7luYXjgYzlpInjgo/jgaPjgZ/jgajjgY3jga7lh6bnkIZcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vblJlc2l6ZSgpIHtcblxuICBcdC8vIOihqOekuuOBl+OBpuOBhOOCi+OCt+ODvOODs+OBlOOBqOOBq+OCq+ODoeODqeOBruODquOCteOCpOOCuuOCkui1sOOCieOBm+OCi1xuICAgIHRoaXMuc2NlbmVzW3RoaXMuTlVNXS5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5zY2VuZXNbdGhpcy5OVU1dLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cbiAgICAvLyByZW5kZXJlcuOBr+WFqOOBpuOBruOCt+ODvOODs+OBp+WFsemAmlxuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxuXG5cdC8qKlxuICAgKiDnj77lnKjjga7jgrfjg7zjg7Pnlarlj7fjgYzjgIHkuI3pganliIfjgarlgKTjgavjgarjgonjgarjgYTjgojjgYbjgavjg4Hjgqfjg4Pjgq9cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9jaGVja051bSgpe1xuICAgIHdpbmRvdy5jb25zb2xlLmxvZyh0aGlzLmtleW5hbWUpO1xuXHRcdGlmKHRoaXMuTlVNIDwwKSB7XG5cdFx0XHR0aGlzLk5VTSA9IHRoaXMuc2NlbmVzLmxlbmd0aC0xO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMuTlVNID49IHRoaXMuc2NlbmVzLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5OVU0gPSAwO1xuXHRcdH1cbiAgfVxuXG5cdC8qKlxuICAgKiDihpDihpLjgq3jg7zjgafjgrfjg7zjg7Pnlarlj7fjgpLotrPjgZflvJXjgY1cblx0ICogQHByaXZhdGVcblx0ICovXG5cdF9vbktleURvd24oKXtcblx0XHRkb2N1bWVudC5vbmtleWRvd24gPSAoZSkgPT4ge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coZSk7XG4gICAgICB0aGlzLmtleW5hbWUgPSBlLmtleTtcblxuICAgICAgaWYodGhpcy5rZXluYW1lID09IFwiQXJyb3dSaWdodFwiIHx8IHRoaXMua2V5bmFtZSA9PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICAgIC8vIGtleW5hbWUgPSBldmVudC5rZXk7XG5cbiAgICAgICAgdGhpcy5mYWRlSW5PdXRUaW1lciA9IDA7XG4gICAgICAgIC8vc2NlbmVzWzBdLm1lc2hNYXRlcmlhbC5jb2xvciA9IDB4ZmZmZmZmKk1hdGgucmFuZG9tKCk7XG4gICAgICB9XG5cblx0XHRcdHdpbmRvdy5jb25zb2xlLmxvZygn54++5Zyo44Gu44K344O844Oz55Wq5Y+344GvJyx0aGlzLk5VTSk7XG5cdFx0fVxuXHR9XG5cbiAgLyoqXG5cdCAqIOOCt+ODvOODs+ODgeOCp+ODs+OCuOaZguOBruODrOOCpOODpOODvFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0X2ZhZGVJbk91dCgpe1xuICAgIGlmKHRoaXMuZmFkZUluT3V0VGltZXIgPD0gTWF0aC5QSSoyKXtcbiAgICAgIHRoaXMuZmFkZUluT3V0VGltZXIgKz0gMC4wNztcbiAgICAgIC8vc2NyZWVuLnN0eWxlLm9wYWNpdHkgPSBNYXRoLnNpbihmYWRlSW5PdXRUaW1lcik7XG4gICAgICB2YXIgb3AgPSBNYXRoLnNpbih0aGlzLmZhZGVJbk91dFRpbWVyKTtcblxuICAgICAgJChcIiNmYWRlSW5PdXRcIilcbiAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IG9wXG4gICAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgdGhpcy5mYWRlSW5PdXRUaW1lciA9IC0xO1xuICAgICAgb3AgPSAwLjA7XG4gICAgfVxuXG4gICAgaWYob3AgPiAwLjk1ICYmIG9wIDw9IDEuMClcbiAgICB7XG4gICAgICBzd2l0Y2ggKHRoaXMua2V5bmFtZSkge1xuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNjZW5lc1t0aGlzLk5VTV0uRU5EKTtcbiAgICAgICAgICAvL3NjZW5lc1tOVU1dLmVuZEVuYWJsZWQoKTtcbiAgICAgICAgICB0aGlzLk5VTSsrO1xuICAgICAgICAgIHRoaXMuY2hlY2tOdW0oKTtcbiAgICAgICAgICAvLyBhbHBoYVJlc2V0KCk7XG4gICAgICAgICAgaWYodGhpcy5zY2VuZXMubGVuZ3RoID09IHRoaXMuTlVNKXtcbiAgICAgICAgICAgIHRoaXMuTlVNPTA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zY2VuZXNbdGhpcy5OVU1dLkVORCk7XG4gICAgICAgICAgLy8gYWxwaGFSZXNldCgpO1xuICAgICAgICAgIC8vc2NlbmVzW05VTV0uZW5kRW5hYmxlZCgpO1xuICAgICAgICAgIHRoaXMuTlVNLS07XG4gICAgICAgICAgdGhpcy5jaGVja051bSgpO1xuXG4gICAgICAgICAgaWYodGhpcy5OVU0gPDApe1xuICAgICAgICAgICAgdGhpcy5OVU0gPSB0aGlzLnNjZW5lcy5sZW5ndGgtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXHR9XG5cblxuXHQvKipcbiAgICog5pyA57WC55qE44Gq5o+P5YaZ5Yem55CG44Go44CB44Ki44OL44Oh44O844K344On44Oz6Zai5pWw44KS44Ov44Oz44OV44Os44O844Og44GU44Go44Gr5a6f6KGMXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRfZHJhdygpIHtcblxuXHRcdHRoaXMuc2NlbmVzW3RoaXMuTlVNXS51cGRhdGUoKTtcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lc1t0aGlzLk5VTV0uc2NlbmUsIHRoaXMuc2NlbmVzW3RoaXMuTlVNXS5jYW1lcmEpO1xuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmRyYXcuYmluZCh0aGlzKSk7XG5cbiAgICBpZih0aGlzLmZhZGVJbk91dFRpbWVyID49IDApXG4gICAge1xuICAgICAgdGhpcy5mYWRlSW5PdXQoKTtcbiAgICB9XG5cblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvU2NlbmVNYW5nZXIuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBFbnRyeVxuICogRGF0ZTpcbiAqIEF1dGhvcjpcbiAqL1xuXG5yZXF1aXJlKCcuLi8uLi9saWJzL09yYml0Q29udHJvbHMuanMnKTtcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyeSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiDliJ3mnJ/ljJZcblx0ICovXG5cdGluaXQoKXtcblxuXHR9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0NvcmUvRW50cnkuanMiLCIvKipcbiAqIEBhdXRob3IgcWlhbyAvIGh0dHBzOi8vZ2l0aHViLmNvbS9xaWFvXG4gKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuICogQGF1dGhvciBXZXN0TGFuZ2xleSAvIGh0dHA6Ly9naXRodWIuY29tL1dlc3RMYW5nbGV5XG4gKiBAYXV0aG9yIGVyaWNoNjY2IC8gaHR0cDovL2VyaWNoYWluZXMuY29tXG4gKi9cblxuLy8gVGhpcyBzZXQgb2YgY29udHJvbHMgcGVyZm9ybXMgb3JiaXRpbmcsIGRvbGx5aW5nICh6b29taW5nKSwgYW5kIHBhbm5pbmcuXG4vLyBVbmxpa2UgVHJhY2tiYWxsQ29udHJvbHMsIGl0IG1haW50YWlucyB0aGUgXCJ1cFwiIGRpcmVjdGlvbiBvYmplY3QudXAgKCtZIGJ5IGRlZmF1bHQpLlxuLy9cbi8vICAgIE9yYml0IC0gbGVmdCBtb3VzZSAvIHRvdWNoOiBvbmUgZmluZ2VyIG1vdmVcbi8vICAgIFpvb20gLSBtaWRkbGUgbW91c2UsIG9yIG1vdXNld2hlZWwgLyB0b3VjaDogdHdvIGZpbmdlciBzcHJlYWQgb3Igc3F1aXNoXG4vLyAgICBQYW4gLSByaWdodCBtb3VzZSwgb3IgYXJyb3cga2V5cyAvIHRvdWNoOiB0aHJlZSBmaW50ZXIgc3dpcGVcblxuVEhSRUUuT3JiaXRDb250cm9scyA9IGZ1bmN0aW9uICggb2JqZWN0LCBkb21FbGVtZW50ICkge1xuXG5cdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXG5cdHRoaXMuZG9tRWxlbWVudCA9ICggZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkICkgPyBkb21FbGVtZW50IDogZG9jdW1lbnQ7XG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXG5cdHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cblx0Ly8gXCJ0YXJnZXRcIiBzZXRzIHRoZSBsb2NhdGlvbiBvZiBmb2N1cywgd2hlcmUgdGhlIG9iamVjdCBvcmJpdHMgYXJvdW5kXG5cdHRoaXMudGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gZG9sbHkgaW4gYW5kIG91dCAoIFBlcnNwZWN0aXZlQ2FtZXJhIG9ubHkgKVxuXHR0aGlzLm1pbkRpc3RhbmNlID0gMDtcblx0dGhpcy5tYXhEaXN0YW5jZSA9IEluZmluaXR5O1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiB6b29tIGluIGFuZCBvdXQgKCBPcnRob2dyYXBoaWNDYW1lcmEgb25seSApXG5cdHRoaXMubWluWm9vbSA9IDA7XG5cdHRoaXMubWF4Wm9vbSA9IEluZmluaXR5O1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHQvLyBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFucy5cblx0dGhpcy5taW5Qb2xhckFuZ2xlID0gMDsgLy8gcmFkaWFuc1xuXHR0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IGhvcml6b250YWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cblx0Ly8gSWYgc2V0LCBtdXN0IGJlIGEgc3ViLWludGVydmFsIG9mIHRoZSBpbnRlcnZhbCBbIC0gTWF0aC5QSSwgTWF0aC5QSSBdLlxuXHR0aGlzLm1pbkF6aW11dGhBbmdsZSA9IC0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblx0dGhpcy5tYXhBemltdXRoQW5nbGUgPSBJbmZpbml0eTsgLy8gcmFkaWFuc1xuXG5cdC8vIFNldCB0byB0cnVlIHRvIGVuYWJsZSBkYW1waW5nIChpbmVydGlhKVxuXHQvLyBJZiBkYW1waW5nIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxuXHR0aGlzLmVuYWJsZURhbXBpbmcgPSBmYWxzZTtcblx0dGhpcy5kYW1waW5nRmFjdG9yID0gMC4yNTtcblxuXHQvLyBUaGlzIG9wdGlvbiBhY3R1YWxseSBlbmFibGVzIGRvbGx5aW5nIGluIGFuZCBvdXQ7IGxlZnQgYXMgXCJ6b29tXCIgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB6b29taW5nXG5cdHRoaXMuZW5hYmxlWm9vbSA9IHRydWU7XG5cdHRoaXMuem9vbVNwZWVkID0gMS4wO1xuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHJvdGF0aW5nXG5cdHRoaXMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcblx0dGhpcy5yb3RhdGVTcGVlZCA9IDEuMDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBwYW5uaW5nXG5cdHRoaXMuZW5hYmxlUGFuID0gdHJ1ZTtcblx0dGhpcy5rZXlQYW5TcGVlZCA9IDcuMDtcdC8vIHBpeGVscyBtb3ZlZCBwZXIgYXJyb3cga2V5IHB1c2hcblxuXHQvLyBTZXQgdG8gdHJ1ZSB0byBhdXRvbWF0aWNhbGx5IHJvdGF0ZSBhcm91bmQgdGhlIHRhcmdldFxuXHQvLyBJZiBhdXRvLXJvdGF0ZSBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0dGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XG5cdHRoaXMuYXV0b1JvdGF0ZVNwZWVkID0gMi4wOyAvLyAzMCBzZWNvbmRzIHBlciByb3VuZCB3aGVuIGZwcyBpcyA2MFxuXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHVzZSBvZiB0aGUga2V5c1xuXHR0aGlzLmVuYWJsZUtleXMgPSB0cnVlO1xuXG5cdC8vIFRoZSBmb3VyIGFycm93IGtleXNcblx0dGhpcy5rZXlzID0geyBMRUZUOiAzNywgVVA6IDM4LCBSSUdIVDogMzksIEJPVFRPTTogNDAgfTtcblxuXHQvLyBNb3VzZSBidXR0b25zXG5cdHRoaXMubW91c2VCdXR0b25zID0geyBPUkJJVDogVEhSRUUuTU9VU0UuTEVGVCwgWk9PTTogVEhSRUUuTU9VU0UuTUlERExFLCBQQU46IFRIUkVFLk1PVVNFLlJJR0hUIH07XG5cblx0Ly8gZm9yIHJlc2V0XG5cdHRoaXMudGFyZ2V0MCA9IHRoaXMudGFyZ2V0LmNsb25lKCk7XG5cdHRoaXMucG9zaXRpb24wID0gdGhpcy5vYmplY3QucG9zaXRpb24uY2xvbmUoKTtcblx0dGhpcy56b29tMCA9IHRoaXMub2JqZWN0Lnpvb207XG5cblx0Ly9cblx0Ly8gcHVibGljIG1ldGhvZHNcblx0Ly9cblxuXHR0aGlzLmdldFBvbGFyQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gc3BoZXJpY2FsLnBoaTtcblxuXHR9O1xuXG5cdHRoaXMuZ2V0QXppbXV0aGFsQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gc3BoZXJpY2FsLnRoZXRhO1xuXG5cdH07XG5cblx0dGhpcy5yZXNldCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHNjb3BlLnRhcmdldC5jb3B5KCBzY29wZS50YXJnZXQwICk7XG5cdFx0c2NvcGUub2JqZWN0LnBvc2l0aW9uLmNvcHkoIHNjb3BlLnBvc2l0aW9uMCApO1xuXHRcdHNjb3BlLm9iamVjdC56b29tID0gc2NvcGUuem9vbTA7XG5cblx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR9O1xuXG5cdC8vIHRoaXMgbWV0aG9kIGlzIGV4cG9zZWQsIGJ1dCBwZXJoYXBzIGl0IHdvdWxkIGJlIGJldHRlciBpZiB3ZSBjYW4gbWFrZSBpdCBwcml2YXRlLi4uXG5cdHRoaXMudXBkYXRlID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdC8vIHNvIGNhbWVyYS51cCBpcyB0aGUgb3JiaXQgYXhpc1xuXHRcdHZhciBxdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMoIG9iamVjdC51cCwgbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDEsIDAgKSApO1xuXHRcdHZhciBxdWF0SW52ZXJzZSA9IHF1YXQuY2xvbmUoKS5pbnZlcnNlKCk7XG5cblx0XHR2YXIgbGFzdFBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0XHR2YXIgbGFzdFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG5cblx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcblxuXHRcdFx0b2Zmc2V0LmNvcHkoIHBvc2l0aW9uICkuc3ViKCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0Ly8gcm90YXRlIG9mZnNldCB0byBcInktYXhpcy1pcy11cFwiIHNwYWNlXG5cdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0ICk7XG5cblx0XHRcdC8vIGFuZ2xlIGZyb20gei1heGlzIGFyb3VuZCB5LWF4aXNcblx0XHRcdHNwaGVyaWNhbC5zZXRGcm9tVmVjdG9yMyggb2Zmc2V0ICk7XG5cblx0XHRcdGlmICggc2NvcGUuYXV0b1JvdGF0ZSAmJiBzdGF0ZSA9PT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0XHRyb3RhdGVMZWZ0KCBnZXRBdXRvUm90YXRpb25BbmdsZSgpICk7XG5cblx0XHRcdH1cblxuXHRcdFx0c3BoZXJpY2FsLnRoZXRhICs9IHNwaGVyaWNhbERlbHRhLnRoZXRhO1xuXHRcdFx0c3BoZXJpY2FsLnBoaSArPSBzcGhlcmljYWxEZWx0YS5waGk7XG5cblx0XHRcdC8vIHJlc3RyaWN0IHRoZXRhIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdHNwaGVyaWNhbC50aGV0YSA9IE1hdGgubWF4KCBzY29wZS5taW5BemltdXRoQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhBemltdXRoQW5nbGUsIHNwaGVyaWNhbC50aGV0YSApICk7XG5cblx0XHRcdC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXG5cdFx0XHRzcGhlcmljYWwucGhpID0gTWF0aC5tYXgoIHNjb3BlLm1pblBvbGFyQW5nbGUsIE1hdGgubWluKCBzY29wZS5tYXhQb2xhckFuZ2xlLCBzcGhlcmljYWwucGhpICkgKTtcblxuXHRcdFx0c3BoZXJpY2FsLm1ha2VTYWZlKCk7XG5cblxuXHRcdFx0c3BoZXJpY2FsLnJhZGl1cyAqPSBzY2FsZTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgcmFkaXVzIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgPSBNYXRoLm1heCggc2NvcGUubWluRGlzdGFuY2UsIE1hdGgubWluKCBzY29wZS5tYXhEaXN0YW5jZSwgc3BoZXJpY2FsLnJhZGl1cyApICk7XG5cblx0XHRcdC8vIG1vdmUgdGFyZ2V0IHRvIHBhbm5lZCBsb2NhdGlvblxuXHRcdFx0c2NvcGUudGFyZ2V0LmFkZCggcGFuT2Zmc2V0ICk7XG5cblx0XHRcdG9mZnNldC5zZXRGcm9tU3BoZXJpY2FsKCBzcGhlcmljYWwgKTtcblxuXHRcdFx0Ly8gcm90YXRlIG9mZnNldCBiYWNrIHRvIFwiY2FtZXJhLXVwLXZlY3Rvci1pcy11cFwiIHNwYWNlXG5cdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKCBxdWF0SW52ZXJzZSApO1xuXG5cdFx0XHRwb3NpdGlvbi5jb3B5KCBzY29wZS50YXJnZXQgKS5hZGQoIG9mZnNldCApO1xuXG5cdFx0XHRzY29wZS5vYmplY3QubG9va0F0KCBzY29wZS50YXJnZXQgKTtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVEYW1waW5nID09PSB0cnVlICkge1xuXG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEucGhpICo9ICggMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzY2FsZSA9IDE7XG5cdFx0XHRwYW5PZmZzZXQuc2V0KCAwLCAwLCAwICk7XG5cblx0XHRcdC8vIHVwZGF0ZSBjb25kaXRpb24gaXM6XG5cdFx0XHQvLyBtaW4oY2FtZXJhIGRpc3BsYWNlbWVudCwgY2FtZXJhIHJvdGF0aW9uIGluIHJhZGlhbnMpXjIgPiBFUFNcblx0XHRcdC8vIHVzaW5nIHNtYWxsLWFuZ2xlIGFwcHJveGltYXRpb24gY29zKHgvMikgPSAxIC0geF4yIC8gOFxuXG5cdFx0XHRpZiAoIHpvb21DaGFuZ2VkIHx8XG5cdFx0XHRcdGxhc3RQb3NpdGlvbi5kaXN0YW5jZVRvU3F1YXJlZCggc2NvcGUub2JqZWN0LnBvc2l0aW9uICkgPiBFUFMgfHxcblx0XHRcdFx0OCAqICggMSAtIGxhc3RRdWF0ZXJuaW9uLmRvdCggc2NvcGUub2JqZWN0LnF1YXRlcm5pb24gKSApID4gRVBTICkge1xuXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIGNoYW5nZUV2ZW50ICk7XG5cblx0XHRcdFx0bGFzdFBvc2l0aW9uLmNvcHkoIHNjb3BlLm9iamVjdC5wb3NpdGlvbiApO1xuXHRcdFx0XHRsYXN0UXVhdGVybmlvbi5jb3B5KCBzY29wZS5vYmplY3QucXVhdGVybmlvbiApO1xuXHRcdFx0XHR6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSApO1xuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSApO1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XG5cblx0XHQvL3Njb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2Rpc3Bvc2UnIH0gKTsgLy8gc2hvdWxkIHRoaXMgYmUgYWRkZWQgaGVyZT9cblxuXHR9O1xuXG5cdC8vXG5cdC8vIGludGVybmFsc1xuXHQvL1xuXG5cdHZhciBzY29wZSA9IHRoaXM7XG5cblx0dmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuXHR2YXIgc3RhcnRFdmVudCA9IHsgdHlwZTogJ3N0YXJ0JyB9O1xuXHR2YXIgZW5kRXZlbnQgPSB7IHR5cGU6ICdlbmQnIH07XG5cblx0dmFyIFNUQVRFID0geyBOT05FIDogLSAxLCBST1RBVEUgOiAwLCBET0xMWSA6IDEsIFBBTiA6IDIsIFRPVUNIX1JPVEFURSA6IDMsIFRPVUNIX0RPTExZIDogNCwgVE9VQ0hfUEFOIDogNSB9O1xuXG5cdHZhciBzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0dmFyIEVQUyA9IDAuMDAwMDAxO1xuXG5cdC8vIGN1cnJlbnQgcG9zaXRpb24gaW4gc3BoZXJpY2FsIGNvb3JkaW5hdGVzXG5cdHZhciBzcGhlcmljYWwgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cdHZhciBzcGhlcmljYWxEZWx0YSA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcblxuXHR2YXIgc2NhbGUgPSAxO1xuXHR2YXIgcGFuT2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0dmFyIHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0dmFyIHJvdGF0ZVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHJvdGF0ZUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciByb3RhdGVEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0dmFyIHBhblN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIHBhbkVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBwYW5EZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0dmFyIGRvbGx5U3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgZG9sbHlFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgZG9sbHlEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0ZnVuY3Rpb24gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSB7XG5cblx0XHRyZXR1cm4gMiAqIE1hdGguUEkgLyA2MCAvIDYwICogc2NvcGUuYXV0b1JvdGF0ZVNwZWVkO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBnZXRab29tU2NhbGUoKSB7XG5cblx0XHRyZXR1cm4gTWF0aC5wb3coIDAuOTUsIHNjb3BlLnpvb21TcGVlZCApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiByb3RhdGVMZWZ0KCBhbmdsZSApIHtcblxuXHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhIC09IGFuZ2xlO1xuXG5cdH1cblxuXHRmdW5jdGlvbiByb3RhdGVVcCggYW5nbGUgKSB7XG5cblx0XHRzcGhlcmljYWxEZWx0YS5waGkgLT0gYW5nbGU7XG5cblx0fVxuXG5cdHZhciBwYW5MZWZ0ID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuTGVmdCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDAgKTsgLy8gZ2V0IFggY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuXHRcdFx0di5tdWx0aXBseVNjYWxhciggLSBkaXN0YW5jZSApO1xuXG5cdFx0XHRwYW5PZmZzZXQuYWRkKCB2ICk7XG5cblx0XHR9O1xuXG5cdH0oKTtcblxuXHR2YXIgcGFuVXAgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW5VcCggZGlzdGFuY2UsIG9iamVjdE1hdHJpeCApIHtcblxuXHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKCBvYmplY3RNYXRyaXgsIDEgKTsgLy8gZ2V0IFkgY29sdW1uIG9mIG9iamVjdE1hdHJpeFxuXHRcdFx0di5tdWx0aXBseVNjYWxhciggZGlzdGFuY2UgKTtcblxuXHRcdFx0cGFuT2Zmc2V0LmFkZCggdiApO1xuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0Ly8gZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGluIHBpeGVsczsgcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXG5cdHZhciBwYW4gPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbiAoIGRlbHRhWCwgZGVsdGFZICkge1xuXG5cdFx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcblxuXHRcdFx0aWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSApIHtcblxuXHRcdFx0XHQvLyBwZXJzcGVjdGl2ZVxuXHRcdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cdFx0XHRcdG9mZnNldC5jb3B5KCBwb3NpdGlvbiApLnN1Yiggc2NvcGUudGFyZ2V0ICk7XG5cdFx0XHRcdHZhciB0YXJnZXREaXN0YW5jZSA9IG9mZnNldC5sZW5ndGgoKTtcblxuXHRcdFx0XHQvLyBoYWxmIG9mIHRoZSBmb3YgaXMgY2VudGVyIHRvIHRvcCBvZiBzY3JlZW5cblx0XHRcdFx0dGFyZ2V0RGlzdGFuY2UgKj0gTWF0aC50YW4oICggc2NvcGUub2JqZWN0LmZvdiAvIDIgKSAqIE1hdGguUEkgLyAxODAuMCApO1xuXG5cdFx0XHRcdC8vIHdlIGFjdHVhbGx5IGRvbid0IHVzZSBzY3JlZW5XaWR0aCwgc2luY2UgcGVyc3BlY3RpdmUgY2FtZXJhIGlzIGZpeGVkIHRvIHNjcmVlbiBoZWlnaHRcblx0XHRcdFx0cGFuTGVmdCggMiAqIGRlbHRhWCAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXggKTtcblx0XHRcdFx0cGFuVXAoIDIgKiBkZWx0YVkgKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHNjb3BlLm9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSApIHtcblxuXHRcdFx0XHQvLyBvcnRob2dyYXBoaWNcblx0XHRcdFx0cGFuTGVmdCggZGVsdGFYICogKCBzY29wZS5vYmplY3QucmlnaHQgLSBzY29wZS5vYmplY3QubGVmdCApIC8gc2NvcGUub2JqZWN0Lnpvb20gLyBlbGVtZW50LmNsaWVudFdpZHRoLCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cdFx0XHRcdHBhblVwKCBkZWx0YVkgKiAoIHNjb3BlLm9iamVjdC50b3AgLSBzY29wZS5vYmplY3QuYm90dG9tICkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4ICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gY2FtZXJhIG5laXRoZXIgb3J0aG9ncmFwaGljIG5vciBwZXJzcGVjdGl2ZVxuXHRcdFx0XHRjb25zb2xlLndhcm4oICdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBwYW4gZGlzYWJsZWQuJyApO1xuXHRcdFx0XHRzY29wZS5lbmFibGVQYW4gPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0ZnVuY3Rpb24gZG9sbHlJbiggZG9sbHlTY2FsZSApIHtcblxuXHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdHNjYWxlIC89IGRvbGx5U2NhbGU7XG5cblx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAqIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBkb2xseU91dCggZG9sbHlTY2FsZSApIHtcblxuXHRcdGlmICggc2NvcGUub2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEgKSB7XG5cblx0XHRcdHNjYWxlICo9IGRvbGx5U2NhbGU7XG5cblx0XHR9IGVsc2UgaWYgKCBzY29wZS5vYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEgKSB7XG5cblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoIHNjb3BlLm1pblpvb20sIE1hdGgubWluKCBzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAvIGRvbGx5U2NhbGUgKSApO1xuXHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblx0XHRcdHpvb21DaGFuZ2VkID0gdHJ1ZTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyApO1xuXHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvL1xuXHQvLyBldmVudCBjYWxsYmFja3MgLSB1cGRhdGUgdGhlIG9iamVjdCBzdGF0ZVxuXHQvL1xuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duUm90YXRlJyApO1xuXG5cdFx0cm90YXRlU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bkRvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Eb2xseScgKTtcblxuXHRcdGRvbGx5U3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duUGFuJyApO1xuXG5cdFx0cGFuU3RhcnQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVJvdGF0ZSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUm90YXRlJyApO1xuXG5cdFx0cm90YXRlRW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMoIHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQgKTtcblxuXHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuXHRcdHJvdGF0ZUxlZnQoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0cm90YXRlVXAoIDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LmNvcHkoIHJvdGF0ZUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZURvbGx5KCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVEb2xseScgKTtcblxuXHRcdGRvbGx5RW5kLnNldCggZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSApO1xuXG5cdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKCBkb2xseUVuZCwgZG9sbHlTdGFydCApO1xuXG5cdFx0aWYgKCBkb2xseURlbHRhLnkgPiAwICkge1xuXG5cdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fSBlbHNlIGlmICggZG9sbHlEZWx0YS55IDwgMCApIHtcblxuXHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9XG5cblx0XHRkb2xseVN0YXJ0LmNvcHkoIGRvbGx5RW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVQYW4nICk7XG5cblx0XHRwYW5FbmQuc2V0KCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZICk7XG5cblx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKCBwYW5FbmQsIHBhblN0YXJ0ICk7XG5cblx0XHRwYW4oIHBhbkRlbHRhLngsIHBhbkRlbHRhLnkgKTtcblxuXHRcdHBhblN0YXJ0LmNvcHkoIHBhbkVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlVXAnICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlV2hlZWwnICk7XG5cblx0XHRpZiAoIGV2ZW50LmRlbHRhWSA8IDAgKSB7XG5cblx0XHRcdGRvbGx5T3V0KCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fSBlbHNlIGlmICggZXZlbnQuZGVsdGFZID4gMCApIHtcblxuXHRcdFx0ZG9sbHlJbiggZ2V0Wm9vbVNjYWxlKCkgKTtcblxuXHRcdH1cblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVLZXlEb3duKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVLZXlEb3duJyApO1xuXG5cdFx0c3dpdGNoICggZXZlbnQua2V5Q29kZSApIHtcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLlVQOlxuXHRcdFx0XHRwYW4oIDAsIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLkJPVFRPTTpcblx0XHRcdFx0cGFuKCAwLCAtIHNjb3BlLmtleVBhblNwZWVkICk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLkxFRlQ6XG5cdFx0XHRcdHBhbiggc2NvcGUua2V5UGFuU3BlZWQsIDAgKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuUklHSFQ6XG5cdFx0XHRcdHBhbiggLSBzY29wZS5rZXlQYW5TcGVlZCwgMCApO1xuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnRSb3RhdGUnICk7XG5cblx0XHRyb3RhdGVTdGFydC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnREb2xseSggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydERvbGx5JyApO1xuXG5cdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcblxuXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdGRvbGx5U3RhcnQuc2V0KCAwLCBkaXN0YW5jZSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0UGFuKCBldmVudCApIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0UGFuJyApO1xuXG5cdFx0cGFuU3RhcnQuc2V0KCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZUVuZC5zZXQoIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCwgZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VZICk7XG5cdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyggcm90YXRlRW5kLCByb3RhdGVTdGFydCApO1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0cm90YXRlTGVmdCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkICk7XG5cblx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcblx0XHRyb3RhdGVVcCggMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCApO1xuXG5cdFx0cm90YXRlU3RhcnQuY29weSggcm90YXRlRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlRG9sbHkoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZURvbGx5JyApO1xuXG5cdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sgMSBdLnBhZ2VYO1xuXHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbIDEgXS5wYWdlWTtcblxuXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydCggZHggKiBkeCArIGR5ICogZHkgKTtcblxuXHRcdGRvbGx5RW5kLnNldCggMCwgZGlzdGFuY2UgKTtcblxuXHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyggZG9sbHlFbmQsIGRvbGx5U3RhcnQgKTtcblxuXHRcdGlmICggZG9sbHlEZWx0YS55ID4gMCApIHtcblxuXHRcdFx0ZG9sbHlPdXQoIGdldFpvb21TY2FsZSgpICk7XG5cblx0XHR9IGVsc2UgaWYgKCBkb2xseURlbHRhLnkgPCAwICkge1xuXG5cdFx0XHRkb2xseUluKCBnZXRab29tU2NhbGUoKSApO1xuXG5cdFx0fVxuXG5cdFx0ZG9sbHlTdGFydC5jb3B5KCBkb2xseUVuZCApO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUGFuJyApO1xuXG5cdFx0cGFuRW5kLnNldCggZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYLCBldmVudC50b3VjaGVzWyAwIF0ucGFnZVkgKTtcblxuXHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMoIHBhbkVuZCwgcGFuU3RhcnQgKTtcblxuXHRcdHBhbiggcGFuRGVsdGEueCwgcGFuRGVsdGEueSApO1xuXG5cdFx0cGFuU3RhcnQuY29weSggcGFuRW5kICk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoRW5kJyApO1xuXG5cdH1cblxuXHQvL1xuXHQvLyBldmVudCBoYW5kbGVycyAtIEZTTTogbGlzdGVuIGZvciBldmVudHMgYW5kIHJlc2V0IHN0YXRlXG5cdC8vXG5cblx0ZnVuY3Rpb24gb25Nb3VzZURvd24oIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLk9SQklUICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdGhhbmRsZU1vdXNlRG93blJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5ST1RBVEU7XG5cblx0XHR9IGVsc2UgaWYgKCBldmVudC5idXR0b24gPT09IHNjb3BlLm1vdXNlQnV0dG9ucy5aT09NICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZURvd25Eb2xseSggZXZlbnQgKTtcblxuXHRcdFx0c3RhdGUgPSBTVEFURS5ET0xMWTtcblxuXHRcdH0gZWxzZSBpZiAoIGV2ZW50LmJ1dHRvbiA9PT0gc2NvcGUubW91c2VCdXR0b25zLlBBTiApIHtcblxuXHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZURvd25QYW4oIGV2ZW50ICk7XG5cblx0XHRcdHN0YXRlID0gU1RBVEUuUEFOO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuTk9ORSApIHtcblxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSApO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAoIHN0YXRlID09PSBTVEFURS5ST1RBVEUgKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VNb3ZlUm90YXRlKCBldmVudCApO1xuXG5cdFx0fSBlbHNlIGlmICggc3RhdGUgPT09IFNUQVRFLkRPTExZICkge1xuXG5cdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0XHRoYW5kbGVNb3VzZU1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdH0gZWxzZSBpZiAoIHN0YXRlID09PSBTVEFURS5QQU4gKSB7XG5cblx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0aGFuZGxlTW91c2VNb3ZlUGFuKCBldmVudCApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlVXAoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGhhbmRsZU1vdXNlVXAoIGV2ZW50ICk7XG5cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlICk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlICk7XG5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlV2hlZWwoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVab29tID09PSBmYWxzZSB8fCAoIHN0YXRlICE9PSBTVEFURS5OT05FICYmIHN0YXRlICE9PSBTVEFURS5ST1RBVEUgKSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRoYW5kbGVNb3VzZVdoZWVsKCBldmVudCApO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggc3RhcnRFdmVudCApOyAvLyBub3Qgc3VyZSB3aHkgdGhlc2UgYXJlIGhlcmUuLi5cblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KCBlbmRFdmVudCApO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbktleURvd24oIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVLZXlzID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXG5cdFx0aGFuZGxlS2V5RG93biggZXZlbnQgKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KCBldmVudCApIHtcblxuXHRcdGlmICggc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuXHRcdFx0Y2FzZSAxOlx0Ly8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRpZiAoIHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFJvdGF0ZSggZXZlbnQgKTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1JPVEFURTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAyOlx0Ly8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydERvbGx5KCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfRE9MTFk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0UGFuKCBldmVudCApO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUEFOO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHRcdH1cblxuXHRcdGlmICggc3RhdGUgIT09IFNUQVRFLk5PTkUgKSB7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoIHN0YXJ0RXZlbnQgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Ub3VjaE1vdmUoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRzd2l0Y2ggKCBldmVudC50b3VjaGVzLmxlbmd0aCApIHtcblxuXHRcdFx0Y2FzZSAxOiAvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSApIHJldHVybjtcblx0XHRcdFx0aWYgKCBzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUk9UQVRFICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVSb3RhdGUoIGV2ZW50ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjogLy8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxuXG5cdFx0XHRcdGlmICggc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgKSByZXR1cm47XG5cdFx0XHRcdGlmICggc3RhdGUgIT09IFNUQVRFLlRPVUNIX0RPTExZICkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVEb2xseSggZXZlbnQgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXG5cblx0XHRcdFx0aWYgKCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlICkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoIHN0YXRlICE9PSBTVEFURS5UT1VDSF9QQU4gKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVBhbiggZXZlbnQgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0aWYgKCBzY29wZS5lbmFibGVkID09PSBmYWxzZSApIHJldHVybjtcblxuXHRcdGhhbmRsZVRvdWNoRW5kKCBldmVudCApO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudCggZW5kRXZlbnQgKTtcblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Db250ZXh0TWVudSggZXZlbnQgKSB7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdH1cblxuXHQvL1xuXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UgKTtcblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UgKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlICk7XG5cblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UgKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlICk7XG5cblx0Ly8gZm9yY2UgYW4gdXBkYXRlIGF0IHN0YXJ0XG5cblx0dGhpcy51cGRhdGUoKTtcblxufTtcblxuVEhSRUUuT3JiaXRDb250cm9scy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBUSFJFRS5FdmVudERpc3BhdGNoZXIucHJvdG90eXBlICk7XG5USFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRIUkVFLk9yYml0Q29udHJvbHM7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBUSFJFRS5PcmJpdENvbnRyb2xzLnByb3RvdHlwZSwge1xuXG5cdGNlbnRlcjoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5jZW50ZXIgaGFzIGJlZW4gcmVuYW1lZCB0byAudGFyZ2V0JyApO1xuXHRcdFx0cmV0dXJuIHRoaXMudGFyZ2V0O1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0Ly8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuXG5cdG5vWm9vbToge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVab29tO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZVpvb20gPSAhIHZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0bm9Sb3RhdGU6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gISB0aGlzLmVuYWJsZVJvdGF0ZTtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZW5hYmxlUm90YXRlID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdG5vUGFuOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuICEgdGhpcy5lbmFibGVQYW47XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nICk7XG5cdFx0XHR0aGlzLmVuYWJsZVBhbiA9ICEgdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRub0tleXM6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlS2V5cztcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVLZXlzID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdHN0YXRpY01vdmluZyA6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicgKTtcblx0XHRcdHJldHVybiAhIHRoaXMuZW5hYmxlRGFtcGluZztcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJyApO1xuXHRcdFx0dGhpcy5lbmFibGVEYW1waW5nID0gISB2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdGR5bmFtaWNEYW1waW5nRmFjdG9yIDoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gdGhpcy5kYW1waW5nRmFjdG9yO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicgKTtcblx0XHRcdHRoaXMuZGFtcGluZ0ZhY3RvciA9IHZhbHVlO1xuXG5cdFx0fVxuXG5cdH1cblxufSApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL2xpYnMvT3JiaXRDb250cm9scy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFNjZW5lMDFcbiAqIERhdGU6IDE3LzA1LzMxXG4gKiBBdXRob3I6IFRlcmFndWNoaVxuICovXG5cbmltcG9ydCBFbnRyeSBmcm9tICcuLi9Db3JlL0VudHJ5JztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2VuZTAxIGV4dGVuZHMgRW50cnl7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zY2VuZSA9IG51bGw7XG4gICAgdGhpcy5jYW1lcmEgPSBudWxsO1xuICAgIHRoaXMuQm94ID0gbnVsbDtcbiAgICB0aGlzLnRpbWVyID0gMDtcblxuICAgIHRoaXMuY3JlYXRlU2NlbmUgPSB0aGlzLl9jcmVhdGVTY2VuZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlID0gdGhpcy5fdXBkYXRlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIOOCt+ODvOODs+OCkuS9nOaIkOOAguOCquODluOCuOOCp+OCr+ODiOOCkuagvOe0jVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NyZWF0ZVNjZW5lKCl7XG5cbiAgICB0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7IC8v44K344O844Oz5L2c5oiQXG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2luZG93LmlubmVyV2lkdGgvd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDAwKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMTAwMDtcblxuICAgIHRoaXMuQm94ID0gbmV3IFRIUkVFLk1lc2goXG4gICAgICAgIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg1MCw1MCw1MCksXG4gICAgICAgIG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCgweGZmZmZmZilcbiAgICApO1xuXG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5Cb3gpO1xuXG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF91cGRhdGUoKXtcblxuICAgIHRoaXMudGltZXIgKz0gMC4xO1xuICAgIHRoaXMuQm94LnBvc2l0aW9uLnggPSA1MCAqIE1hdGguc2luKHRoaXMudGltZXIpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1NjZW5lMDEuanMiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBTY2VuZTAyXG4gKiBEYXRlOiAxNy8wNS8zMVxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmUwMiBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2NlbmUgPSBudWxsO1xuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLkJveCA9IG51bGw7XG4gICAgdGhpcy50aW1lciA9IDA7XG5cbiAgICB0aGlzLmNyZWF0ZVNjZW5lID0gdGhpcy5fY3JlYXRlU2NlbmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMuX3VwZGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuXG4gIH1cblxuXG4gIC8qKlxuICAgKiDjgrfjg7zjg7PjgpLkvZzmiJDjgILjgqrjg5bjgrjjgqfjgq/jg4jjgpLmoLzntI1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG4gICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpOyAvL+OCt+ODvOODs+S9nOaIkFxuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoL3dpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwMCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDEwMDA7XG5cbiAgICB0aGlzLkJveCA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgICBuZXcgVEhSRUUuQm94R2VvbWV0cnkoNTAsNTAsNTApLFxuICAgICAgICBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoMHg4ODg4ODgpXG4gICAgKTtcblxuICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMuQm94KTtcblxuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfdXBkYXRlKCl7XG5cbiAgICB0aGlzLnRpbWVyICs9IDAuMTtcbiAgICB0aGlzLkJveC5wb3NpdGlvbi55ID0gNTAgKiBNYXRoLnNpbih0aGlzLnRpbWVyKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9TY2VuZTAyLmpzIiwiLyoqXG4gKiBmaWxlT3ZlcnZpZXc6XG4gKiBQcm9qZWN0OlxuICogRmlsZTogRGlzcGxheVxuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IFRleHR1cmVCZyBmcm9tIFwiLi4vdmlzdWFsL1RleHR1cmVCZ1wiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlUb3Age1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICAvLyBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBnYi5pbi50ZXh0dXJlQmcgPSBuZXcgVGV4dHVyZUJnKCk7XG5cbiAgICBnYi5pbi50ZXh0dXJlQmcuaW5pdCgpO1xuXG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblx0XHQvLyB3aW5kb3cuY29uc29sZS5sb2coJ3N0YXRpY19SdW4nKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVCZy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFRleHR1cmVCZ1xuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IEVudHJ5IGZyb20gJy4uL0NvcmUvRW50cnknO1xuaW1wb3J0IFBsYW5lIGZyb20gJy4vUGxhbmUnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHR1cmVCZyBleHRlbmRzIEVudHJ5e1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYmdsLW91dHB1dCcpO1xuXG4gICAgdGhpcy53aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodDtcblxuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcblxuICAgIHRoaXMuY3JlYXRlQ2FtZXJhID0gdGhpcy5fY3JlYXRlQ2FtZXJhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlciA9IHRoaXMuX2NyZWF0ZVJlbmRlcmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGVTY2VuZSA9IHRoaXMuX2NyZWF0ZVNjZW5lLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLm9uUmVzaXplID0gdGhpcy5fb25SZXNpemUuYmluZCh0aGlzKTtcblx0XHR0aGlzLlVwZGF0ZSA9IHRoaXMuX1VwZGF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMubG9hZFRleHR1cmUgPSB0aGlzLl9sb2FkVGV4dHVyZS5iaW5kKHRoaXMpO1xuXG5cdFx0dGhpcy5wbGFuZSA9IG5ldyBQbGFuZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICog5Yid5pyf5YyWXG4gICAqL1xuICBpbml0KCl7XG5cbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpO1xuXHRcdHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyKCk7XG5cblx0XHR0aGlzLlVwZGF0ZSgpO1xuXG5cdFx0dGhpcy5sb2FkVGV4dHVyZSgpO1xuICB9XG5cblxuICAvKipcbiAgICog44Kr44Oh44Op5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlQ2FtZXJhKCl7XG5cbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgdGhpcy53aWR0aCAvIHRoaXMuaGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAwO1xuICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAxMDA7XG5cbiAgICB0aGlzLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwwLDApKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOODrOODs+ODgOODqeODvOS9nOaIkFxuICAgKi9cbiAgX2NyZWF0ZVJlbmRlcmVyKCl7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgYWxwaGEgICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICBhbnRpYWxpYXMgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIHN0ZW5jaWwgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgZGVwdGggICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIHByZW11bHRpcGxpZWRBbHBoYSA6IGZhbHNlLFxuICAgICAgY2FudmFzOiB0aGlzLmNhbnZhc1xuXHRcdH0pO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4ZmZmZmZmLCAwLjApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDjgrfjg7zjg7PkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVTY2VuZSgpe1xuXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gIH1cblxuICAvKipcbiAgICog55S75YOP44KS44Ot44O844OJXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfbG9hZFRleHR1cmUoKXtcblxuXHRcdHRoaXMucGxhbmUubG9hZFRleHR1cmUoJy4uLy4uLy4uLy4uL2Fzc2V0cy9yZXNvdXJjZS9pbWcvc2hpYnV5YTAxLmpwZycsICgpID0+IHtcblx0XHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMucGxhbmUubWVzaCk7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLm9uUmVzaXplKCk7XG5cdFx0XHR9LCBmYWxzZSk7XG5cdFx0XHR0aGlzLm9uUmVzaXplKCk7XG5cdFx0XHR0aGlzLlVwZGF0ZSgpO1xuXHRcdH0pO1xuXG5cdH1cblxuICAvKipcbiAgICog5pu05pawXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfVXBkYXRlKCkge1xuXG5cdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKSA9PiB7XG4gICAgICB0aGlzLlVwZGF0ZSgpO1xuICAgIH0pO1xuXG4gIH1cblxuICAvKipcbiAgICrjgIDnlLvpnaLjg6rjgrXjgqTjgrrjgqTjg5njg7Pjg4hcbiAgICovXG4gIF9vblJlc2l6ZSgpIHtcblx0XHR0aGlzLmNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQ7XG5cdFx0dGhpcy5wbGFuZS5tZXNoLm1hdGVyaWFsLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcblxuICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuXG5cdHNldEV2ZW50cygpIHtcblxuICAgICQod2luZG93KS5vbignbG9hZCcsIHRoaXMub25Mb2FkLmJpbmQodGhpcykpO1xuXG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuLi9zcmMvYXNzZXRzL2pzL19kZXZqcy9zcmMvdmlzdWFsL1RleHR1cmVCZy5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IFBsYW5lXG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG5pbXBvcnQgRW50cnkgZnJvbSAnLi4vQ29yZS9FbnRyeSc7XG5cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhbmUgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cblx0XHR0aGlzLnVuaWZvcm1zID0ge307XG5cdFx0dGhpcy50ZXh0dXJlID0gbnVsbDtcblx0XHR0aGlzLm1lc2ggPSBudWxsO1xuXG5cdFx0dGhpcy5sb2FkVGV4dHVyZSA9IHRoaXMuX2xvYWRUZXh0dXJlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5jcmVhdGVNZXNoID0gdGhpcy5fY3JlYXRlTWVzaC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVuZGVyID0gdGhpcy5fcmVuZGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZXNpemUgPSB0aGlzLl9yZXNpemUuYmluZCh0aGlzKTtcblxuICB9XG5cblx0X2xvYWRUZXh0dXJlKGltYWdlLCBjYWxsYmFjaykge1xuXHRcdGNvbnN0IGxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XG5cdFx0bG9hZGVyLmxvYWQoaW1hZ2UsICh0ZXh0dXJlKSA9PiB7XG5cdFx0XHR0ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XG4gICAgICB0ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XG4gICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xuICAgICAgdGhpcy5tZXNoID0gdGhpcy5jcmVhdGVNZXNoKCk7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH0pO1xuXHR9XG5cblx0X2NyZWF0ZU1lc2goKSB7XG5cdFx0dGhpcy51bmlmb3JtcyA9IHtcblx0XHRcdHJlc29sdXRpb246IHtcblx0XHRcdFx0dHlwZTogJ3YyJyxcblx0XHRcdFx0dmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KSxcblx0XHRcdH0sXG5cdFx0XHRpbWFnZVJlc29sdXRpb246IHtcblx0XHRcdFx0dHlwZTogJ3YyJyxcblx0XHRcdFx0dmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKDIwNDgsIDEzNTYpLFxuXHRcdFx0fSxcblx0XHRcdHRleHR1cmU6IHtcblx0XHRcdFx0dHlwZTogJ3QnLFxuXHRcdFx0XHR2YWx1ZTogdGhpcy50ZXh0dXJlLFxuXHRcdFx0fVxuXHRcdH07XG5cdFx0cmV0dXJuIG5ldyBUSFJFRS5NZXNoKFxuXHRcdFx0bmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMiwgMiksXG5cdFx0XHRuZXcgVEhSRUUuUmF3U2hhZGVyTWF0ZXJpYWwoe1xuXHRcdFx0XHR1bmlmb3JtczogdGhpcy51bmlmb3Jtcyxcblx0XHRcdFx0dmVydGV4U2hhZGVyOiByZXF1aXJlKCcuLi8uLi8uLi8uLi9nbHNsL2NvdmVyLnZlcnQnKSxcblx0XHRcdFx0ZnJhZ21lbnRTaGFkZXI6IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2dsc2wvY292ZXIuZnJhZycpLFxuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG5cblxuICAvKipcbiAgICog44Os44Oz44OA44Op44O8XG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfcmVuZGVyKHRpbWUpIHtcblxuXHRcdGlmICh0aGlzLnN0b3ApIHJldHVybjtcblx0XHR0aGlzLnVuaWZvcm1zLnRpbWUudmFsdWUgKz0gdGltZSAvIHRoaXMuaW50ZXJ2YWw7XG5cdFx0aWYgKHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSA+IDEpIHtcblx0XHRcdHRoaXMudW5pZm9ybXMudGltZS52YWx1ZSA9IDA7XG5cdFx0XHR0aGlzLnByZXZfbnVtID0gdGhpcy5uZXh0X251bTtcblx0XHRcdHRoaXMudW5pZm9ybXMudGV4UHJldi52YWx1ZSA9IHRoaXMudGV4dHVyZXNbdGhpcy5uZXh0X251bV07XG5cdFx0XHR3aGlsZSAodGhpcy5uZXh0X251bSA9PSB0aGlzLnByZXZfbnVtKSB7XG5cdFx0XHRcdHRoaXMubmV4dF9udW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnRleHR1cmVzLmxlbmd0aCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnVuaWZvcm1zLnRleE5leHQudmFsdWUgPSB0aGlzLnRleHR1cmVzW3RoaXMubmV4dF9udW1dO1xuXHRcdH1cbiAgfVxuXG5cdF9yZXNpemUoKXtcblx0XHR0aGlzLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUuc2V0KGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgsIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KTtcblx0fVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4uL3NyYy9hc3NldHMvanMvX2RldmpzL3NyYy92aXN1YWwvUGxhbmUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiB1djtcXG5cXG52YXJ5aW5nIHZlYzIgdlV2O1xcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuICAgIHZVdiA9IHV2O1xcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQocG9zaXRpb24sIDEuMCk7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL2NvdmVyLnZlcnRcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJwcmVjaXNpb24gaGlnaHAgZmxvYXQ7XFxuI2RlZmluZSBHTFNMSUZZIDFcXG5cXG51bmlmb3JtIHZlYzIgcmVzb2x1dGlvbjtcXG51bmlmb3JtIHZlYzIgaW1hZ2VSZXNvbHV0aW9uO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHRleHR1cmU7XFxuXFxudmFyeWluZyB2ZWMyIHZVdjtcXG5cXG52b2lkIG1haW4odm9pZCkge1xcbiAgICB2ZWMyIHJhdGlvID0gdmVjMihcXG4gICAgICAgIG1pbigocmVzb2x1dGlvbi54IC8gcmVzb2x1dGlvbi55KSAvIChpbWFnZVJlc29sdXRpb24ueCAvIGltYWdlUmVzb2x1dGlvbi55KSwgMS4wKSxcXG4gICAgICAgIG1pbigocmVzb2x1dGlvbi55IC8gcmVzb2x1dGlvbi54KSAvIChpbWFnZVJlc29sdXRpb24ueSAvIGltYWdlUmVzb2x1dGlvbi54KSwgMS4wKVxcbiAgICApO1xcblxcbiAgICB2ZWMyIHV2ID0gdmVjMihcXG4gICAgICAgIHZVdi54ICogcmF0aW8ueCArICgxLjAgLSByYXRpby54KSAqIDAuNSxcXG4gICAgICAgIHZVdi55ICogcmF0aW8ueSArICgxLjAgLSByYXRpby55KSAqIDAuNVxcbiAgICApO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodGV4dHVyZSwgdXYpO1xcbn1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL3NyYy9hc3NldHMvZ2xzbC9jb3Zlci5mcmFnXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIGZpbGVPdmVydmlldzpcbiAqIFByb2plY3Q6XG4gKiBGaWxlOiBEaXNwbGF5XG4gKiBEYXRlOlxuICogQXV0aG9yOiBUZXJhZ3VjaGlcbiAqL1xuXG4vLyBpbXBvcnQgV2ViR0xpbml0IGZyb20gJy4vV2ViR0xpbml0LmpzJztcblxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi4vdmlzdWFsL0NhbnZhc1wiO1xuXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc3BsYXlUb3Age1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcblxuICB9XG5cbiAgc2V0dXAoKSB7XG5cbiAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7Pjg6vjg7zjg5fjgrnjgr/jg7zjg4hcbiAgICAvLyBnYi5pbi51cC5sb29wKCk7XG4gICAgXG4gIH1cblxuICBvbkxvYWQoKSB7XG5cbiAgICBnYi5pbi5jYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgICBnYi5pbi5jYW52YXMuaW5pdCgpO1xuXG5cbiAgfVxuXG4gIHN0YXRpYyBydW4oKSB7XG5cblx0XHQvLyB3aW5kb3cuY29uc29sZS5sb2coJ3N0YXRpY19SdW4nKTtcblxuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgdGhpcy5vbkxvYWQuYmluZCh0aGlzKSk7ICAgICAgICBcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL0Rpc3BsYXkvRGlzcGxheVRleHR1cmVNb3ZpZS5qcyIsIi8qKlxuICogZmlsZU92ZXJ2aWV3OlxuICogUHJvamVjdDpcbiAqIEZpbGU6IENhbnZhc1xuICogRGF0ZTpcbiAqIEF1dGhvcjogVGVyYWd1Y2hpXG4gKi9cblxuaW1wb3J0IEVudHJ5IGZyb20gJy4uL0NvcmUvRW50cnknO1xuLy8gaW1wb3J0IFRpdGxlT2JqZWN0IGZyb20gXCIuL1RpdGxlT2JqZWN0XCI7XG4vLyBpbXBvcnQgQ2FtZXJhIGZyb20gJy4vVXRpbHMvQ2FtZXJhJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMgZXh0ZW5kcyBFbnRyeXtcblxuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnVuaWZvcm1zID0ge1xuICAgICAgdV90aW1lOiB7IHR5cGU6IFwiZlwiLCB2YWx1ZTogMS4wIH0sXG4gICAgICB1X3Jlc29sdXRpb246IHsgdHlwZTogXCJ2MlwiLCB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoKSB9LFxuICAgICAgdV9tb3VzZTogeyB0eXBlOiBcInYyXCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMigpIH1cbiAgICB9O1xuXG4gICAgLy8gdGhpcy50aXRsZU9iamVjdCA9IG5ldyBUaXRsZU9iamVjdCgpO1xuXG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2ViZ2wtb3V0cHV0Jyk7XG5cbiAgICB0aGlzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgLy8gdGhpcy5vdXRwdXQgPSBvcHRzLm91dHB1dCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRoaXMuY2FtZXJhID0gbnVsbDtcbiAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcbiAgICB0aGlzLnNjZW5lID0gbnVsbDtcblx0XHR0aGlzLmN1YmUgPSBudWxsO1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEgPSB0aGlzLl9jcmVhdGVDYW1lcmEuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVJlbmRlcmVyID0gdGhpcy5fY3JlYXRlUmVuZGVyZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZVNjZW5lID0gdGhpcy5fY3JlYXRlU2NlbmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZU9iamVjdCA9IHRoaXMuX2NyZWF0ZU9iamVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3JiaXRDb250cm9scyA9IHRoaXMuX29yYml0Q29udHJvbHMuYmluZCh0aGlzKTtcblxuICAgIHRoaXMucGxhbmVPYmplY3QgPSB0aGlzLl9wbGFuZU9iamVjdC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5yZW5kZXIgPSB0aGlzLl9yZW5kZXIuYmluZCh0aGlzKTtcblxuICAgIHRoaXMub25SZXNpemUgPSB0aGlzLl9vblJlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5VcGRhdGUgPSB0aGlzLl9VcGRhdGUuYmluZCh0aGlzKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIOWIneacn+WMllxuICAgKi9cbiAgaW5pdCgpe1xuXG4gICAgdGhpcy5jcmVhdGVDYW1lcmEoKTtcblx0XHR0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgdGhpcy5jcmVhdGVSZW5kZXJlcigpO1xuXG5cdFx0dGhpcy5vcmJpdENvbnRyb2xzKCk7XG5cdFx0Ly8gdGhpcy5jcmVhdGVPYmplY3QoKTtcblxuICAgIHRoaXMucGxhbmVPYmplY3QoKTtcblxuICAgIHRoaXMuVXBkYXRlKCk7XG5cbiAgICAvLyB0aGlzLnRpdGxlT2JqZWN0LmxvYWRUZXh0dXJlKCgpID0+IHtcbiAgICAvLyAgIHRoaXMuc2NlbmUuYWRkKHRoaXMudGl0bGVPYmplY3Qub2JqKTtcbiAgICAvLyB9KTtcblxuICAgIC8v44Oq44K144Kk44K644Kk44OZ44Oz44OI55m654GrXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICB9LCBmYWxzZSk7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiDjgqvjg6Hjg6nkvZzmiJBcbiAgICovXG4gIF9jcmVhdGVDYW1lcmEoKXtcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQsIDAuMSwgMTAwMCk7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueCA9IDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IDA7XG4gICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDEwMDtcblxuICAgIHRoaXMuY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygwLDAsMCkpO1xuXG4gIH1cblxuICAvKipcbiAgICog44Os44Oz44OA44Op44O85L2c5oiQXG4gICAqL1xuICBfY3JlYXRlUmVuZGVyZXIoKXtcblxuXHRcdHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICBhbHBoYSAgICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgIGFudGlhbGlhcyAgICAgICAgICA6IGZhbHNlLFxuICAgICAgc3RlbmNpbCAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICBkZXB0aCAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgcHJlbXVsdGlwbGllZEFscGhhIDogZmFsc2UsXG4gICAgICBjYW52YXM6IHRoaXMuY2FudmFzXG5cdFx0fSk7XG5cbiAgICAvLyB0aGlzLnJlbmRlcmVyLnNldENsZWFyQ29sb3IoMHhmZmZmZmYpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweDAwMDAwMCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgLy8gdGhpcy5vdXRwdXQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJlci5kb21FbGVtZW50KTtcblxuICB9XG5cbiAgLyoqXG4gICAq44CA44K344O844Oz5L2c5oiQXG4gICAqL1xuICBfY3JlYXRlU2NlbmUoKXtcblxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICB9XG5cbiAgLyoqXG4gICAqIE9iamVjdOS9nOaIkFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cblx0X2NyZWF0ZU9iamVjdCgpe1xuXG4gICAgbGV0IGN1YmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg0LCA0LCA0KTtcbiAgICBsZXQgY3ViZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICAgIHdpcmVmcmFtZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdGhpcy5jdWJlID0gbmV3IFRIUkVFLk1lc2goY3ViZUdlb21ldHJ5LCBjdWJlTWF0ZXJpYWwpO1xuICAgIHRoaXMuY3ViZS5wb3NpdGlvbi54ID0gMztcbiAgICB0aGlzLmN1YmUucG9zaXRpb24ueSA9IDM7XG4gICAgdGhpcy5jdWJlLnBvc2l0aW9uLnogPSAzO1xuXG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5jdWJlKTtcblxuXHR9XG5cblx0X3BsYW5lT2JqZWN0KCl7XG4gICAgdGhpcy5wbGFuZSA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgICAvLyBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSgyNTYsIDY0LCA0MCwgMTApLFxuICAgICAgICBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSg1LCAyMCwgMzIpLFxuICAgICAgICBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgICAgICAgIHVuaWZvcm1zOiB0aGlzLnVuaWZvcm1zLFxuICAgICAgICAgIHZlcnRleFNoYWRlcjogcmVxdWlyZSgnLi4vLi4vLi4vLi4vZ2xzbC9pbmRleC90ZXN0LnZlcnQnKSxcbiAgICAgICAgICBmcmFnbWVudFNoYWRlcjogcmVxdWlyZSgnLi4vLi4vLi4vLi4vZ2xzbC9pbmRleC90ZXN0LmZyYWcnKSxcbiAgICAgICAgfSlcbiAgICApXG4gICAgdGhpcy5zY2VuZS5hZGQodGhpcy5wbGFuZSk7XG4gIH1cblxuICAvKipcbiAgICog44Os44Oz44OA44Op44O8XG4gICAqIEBwcml2YXRlXG4gICAqL1xuXHRfcmVuZGVyKCkge1xuICAgIGxldCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xuICAgIGxldCB0aW1lID0gY2xvY2suZ2V0RGVsdGEoKTtcblxuICAgIC8vIHRoaXMudGl0bGVPYmplY3QudGl0cmVuZGVyKHRpbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIOabtOaWsFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX1VwZGF0ZSgpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSggKCkgPT4ge1xuICAgICAgdGhpcy5VcGRhdGUoKTtcbiAgICB9KTtcbiAgICAvLyB0aGlzLmNvbnRyb2xzLnVwZGF0ZSgpO1xuICAgIHRoaXMudW5pZm9ybXMudV90aW1lLnZhbHVlICs9IDAuMDU7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuICB9XG5cbiAgLyoqXG4gICAq44CA55S76Z2i44Oq44K144Kk44K6XG4gICAqL1xuICBfb25SZXNpemUoKSB7XG4gICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxuXG5cdC8qKlxuICAgKiDjgqvjg6Hjg6njgrPjg7Pjg4jjg63jg7zjg6tcblx0ICovXG5cdF9vcmJpdENvbnRyb2xzKCl7XG5cdFx0dGhpcy5jb250cm9scyA9IG5ldyBUSFJFRS5PcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhKTtcblx0XHR0aGlzLmNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlO1xuXHRcdGxldCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xuXG5cdFx0bGV0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcblx0XHR0aGlzLmNvbnRyb2xzLnVwZGF0ZShkZWx0YSk7XG4gIH1cblxuXHRzZXRFdmVudHMoKSB7XG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCB0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKTtcblxuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi4vc3JjL2Fzc2V0cy9qcy9fZGV2anMvc3JjL3Zpc3VhbC9DYW52YXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG4vL2F0dHJpYnV0ZSB2ZWMzIHBvc2l0aW9uO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QudmVydFxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSB2ZWMyIHVfcmVzb2x1dGlvbjtcXG51bmlmb3JtIGZsb2F0IHVfdGltZTtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzIgc3QgPSBnbF9GcmFnQ29vcmQueHkvdV9yZXNvbHV0aW9uLnh5O1xcbiAgICBnbF9GcmFnQ29sb3I9dmVjNChzdC54LHN0LnksMC4wLDEuMCk7XFxufVwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vc3JjL2Fzc2V0cy9nbHNsL2luZGV4L3Rlc3QuZnJhZ1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==