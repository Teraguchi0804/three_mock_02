/**
 * fileOverview: Ua判別
 * Project:
 * File: checkEnvironment
 * Date:
 * Author:
 */

let UAParser = require("../../../libs/ua-parser.min.js");

export default class checkEnvironment {

  constructor() {

    this.parser = new UAParser();

    this.isIe();
  }

  isIe() {
    let browser = this.parser.getBrowser().name;
    return browser === 'IE' ? true : false;
  };

}