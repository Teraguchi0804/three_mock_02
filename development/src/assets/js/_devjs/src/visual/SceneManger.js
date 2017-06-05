/**
 * fileOverview:
 * Project:
 * File: SceneManger
 * Date: 17/05/29
 * Author: Teraguchi
 */

import Entry from '../Core/Entry';

'use strict';

export default class SceneManger extends Entry{

  constructor() {

    super();

		this.NUM = 0; // 現在のシーンの番号
		this.scenes = []; // シーンを格納する配列
    this.fadeInOutTimer = -1; //

		this.canvas = null;
    this.renderer = null; // Renderer

    this.addScene = this._addScene.bind(this);

		this.onResize = this._onResize.bind(this);
		this.checkNum = this._checkNum.bind(this);
		this.onKeyDown = this._onKeyDown.bind(this);
		this.fadeInOut = this._fadeInOut.bind(this);
		this.draw = this._draw.bind(this);

		this.keyname = null;


		this.init(); // 初期化処理後、イベント登録

  }

  /**
   * 初期化
   */
  init(){

    window.addEventListener('resize', this.onResize, false );

		document.addEventListener("resize", this.onResize, false );
		document.addEventListener("keydown", this.onKeyDown, true);

		// Renderer作成
		this.renderer = new THREE.WebGLRenderer({antialias: true});
		this.renderer.setPixelRatio( window.devicePixelRatio );
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
	_addScene(scene) {

		this.scenes.push(scene);

	}

  /**
   *　ウィンドウの幅が変わったときの処理
   * @private
   */
  _onResize() {

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
	_checkNum(){
    window.console.log(this.keyname);
		if(this.NUM <0) {
			this.NUM = this.scenes.length-1;
		}

		if(this.NUM >= this.scenes.length) {
			this.NUM = 0;
		}
  }

	/**
   * ←→キーでシーン番号を足し引き
	 * @private
	 */
	_onKeyDown(){
		document.onkeydown = (e) => {
			// console.log(e);
      this.keyname = e.key;

      if(this.keyname == "ArrowRight" || this.keyname == "ArrowLeft") {
        // keyname = event.key;

        this.fadeInOutTimer = 0;
        //scenes[0].meshMaterial.color = 0xffffff*Math.random();
      }

			window.console.log('現在のシーン番号は',this.NUM);
		}
	}

  /**
	 * シーンチェンジ時のレイヤー
   * @private
   */
	_fadeInOut(){
    if(this.fadeInOutTimer <= Math.PI*2){
      this.fadeInOutTimer += 0.07;
      //screen.style.opacity = Math.sin(fadeInOutTimer);
      var op = Math.sin(this.fadeInOutTimer);

      $("#fadeInOut")
          .css({
            opacity: op
          });
    } else {

      this.fadeInOutTimer = -1;
      op = 0.0;
    }

    if(op > 0.95 && op <= 1.0)
    {
      switch (this.keyname) {
        case 'ArrowRight':
          // console.log(this.scenes[this.NUM].END);
          //scenes[NUM].endEnabled();
          this.NUM++;
          this.checkNum();
          // alphaReset();
          if(this.scenes.length == this.NUM){
            this.NUM=0;
          }
          break;

        case 'ArrowLeft':
          // console.log(this.scenes[this.NUM].END);
          // alphaReset();
          //scenes[NUM].endEnabled();
          this.NUM--;
          this.checkNum();

          if(this.NUM <0){
            this.NUM = this.scenes.length-1;
          }
          break;
      }
    }
	}


	/**
   * 最終的な描写処理と、アニメーション関数をワンフレームごとに実行
	 * @private
	 */
	_draw() {

		this.scenes[this.NUM].update();
		this.renderer.render(this.scenes[this.NUM].scene, this.scenes[this.NUM].camera);
		requestAnimationFrame(this.draw.bind(this));

    if(this.fadeInOutTimer >= 0)
    {
      this.fadeInOut();
    }

	}

}