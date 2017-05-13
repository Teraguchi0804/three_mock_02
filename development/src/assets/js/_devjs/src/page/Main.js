/**
 * fileOverview:
 * Project:
 * File: Main
 * Date:
 * Author:
 */

import DisplayTop from '../Display/DisplayTop';

'use strict';

export default class Main {

  constructor() {

    this.onImmediate();
    this.setEvents();

  }

  onImmediate() {

  }

  onReady() {

    //pageページ別のIDを取得
    var page = $('body').data('id');

    window.console.log('現在のページIDは ', page);

		//pageのIDごとに発火するクラスの振り分け
    switch (page) {

      case 'top':

        new DisplayTop();

        break;

    }

  }

  onLoad() {

    
  }

  onRender() {


  }

  setEvents() {

    $(document).on('ready', this.onReady.bind(this));
    $(window).on('load', this.onLoad.bind(this));        

  }

}