/**
 * fileOverview:
 * Project:
 * File: Utils
 * Date:
 * Author:
 */

/**
 * animation
 */
import requestAnimationFrame from './animation/requestAnimationFrame';
import cancelAnimationFrame from './animation/cancelAnimationFrame';

import Array from './array/Array';
import checkEnvironment from "./ua/checkEnvironment";

import preloadImg from './img/preloadImg';
import setUpBtnTwitter from './sns/setUpBtnTwitter';
import setUpBtnLine from './sns/setUpBtnLine';
import setUpBtnFaceBook from './sns/setUpBtnFaceBook';


export default class Utils {

  constructor() {

    this._setup();
    
  }

  _setup() {
    // window.console.log('Utils_Setup!!');
    
    /**
     * array
     */
    this.Array = new Array();


    /**
     * ua
     */
    this.checkEnvironment = new checkEnvironment();
    if(this.checkEnvironment.isIE()){
      window.console.log('IEです');
    }else {
      window.console.log('IEじゃないです');
    }

    if(this.checkEnvironment.isChrome()){
      window.console.log('Chromeです');
    }else {
      window.console.log('Chromeじゃないです');
    }

    if(this.checkEnvironment.isMobile()){
      window.console.log('モバイルです');
    }else {
      window.console.log('モバイルじゃないです');
    }
    
    // window.console.log(this.checkEnvironment.all());

    // let name = this.checkEnvironment;
    // window.console.log(name);

    // let log = this.checkEnvironment.device_name();
    // window.console.log(log);

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

}