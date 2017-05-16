/**
 * fileOverview: Ua判別
 * Project:
 * File: checkEnvironment
 * Date:
 * Author: Teraguchi
 */

const parser = require("../../../libs/ua-parser.min.js");

'use strict'

export default class checkEnvironment {

  constructor() {

    this.ua = new parser();
  }

  isIE() {
    let browser = this.ua.getBrowser().name;
    return browser === 'IE' ? true : false;
  };

  isFIREFOX() {
    let browser = this.ua.getBrowser().name;
    return browser === 'IE' ? true : false;
  };

  isChrome() {
    let browser = this.ua.getBrowser().name;
    return browser === 'Chrome' ? true : false;
  };

  /*
   ** UAParser.jsはユーザーエージェント内に詳細情報がセットされていれば、
   **  isIOS9() , isWindows10(), isTablet()等のことも簡単にできます
   */
  // モバイルか判別
  isMobile() {
    let device = this.ua.getDevice().type;
    return device === 'mobile' ? true : null;
  }

  // OS名を取得
  // return: iOS, Windows, Mac OS ..
  os() {
    return this.ua.getOS().name;
  }

  // デバイス名を取得
  // iPad, iPhone .. モバイル以外だとnullを返す
  device_name() {
    const device = this.ua.device.model;
    // return lodash.set(device) ? device : null;
  }

  // ブラウザ名を取得
  // Chrome, Safari ...
  // browser() {
  //   return this.ua.browser.name;
  // }

  // ユーザーエージェント情報：全てを取得
  all() {
    return this.ua.getUA();
  }

}