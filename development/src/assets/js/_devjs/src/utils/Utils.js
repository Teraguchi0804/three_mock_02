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
import checkClient from "./ua/checkClient";

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
    this.checkClient = new checkClient();
    // if(this.checkClient.isIE()){
    //   window.console.log('IEです');
    // }else {
    //   window.console.log('IEじゃないです');
    // }
    //
    // if(this.checkClient.isFirefox()){
    //   window.console.log('Firefoxです');
    // }else {
    //   window.console.log('Firefoxじゃないです');
    // }
    //
    // if(this.checkClient.isChrome()){
    //   window.console.log('Chromeです');
    // }else {
    //   window.console.log('Chromeじゃないです');
    // }
    //
    // if(this.checkClient.isSafari()){
    //   window.console.log('Safariです');
    // }else {
    //   window.console.log('Safariじゃないです');
    // }
    //
    // if(this.checkClient.isMobile()){
    //   window.console.log('モバイルです');
    // }else {
    //   window.console.log('モバイルじゃないです');
    // }
    //
    // if(this.checkClient.isTablet()){
    //   window.console.log('Tabletです');
    // }else {
    //   window.console.log('Tabletじゃないです');
    // }
    //
    // window.console.log(this.checkClient.device_name());


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