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