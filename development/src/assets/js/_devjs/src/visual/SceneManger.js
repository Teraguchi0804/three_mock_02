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

		this.canvas = null;
    this.renderer = null; // Renderer

    this.addScene = this._addScene.bind(this);

		this.onResize = this._onResize.bind(this);
		this.checkNum = this._checkNum.bind(this);
		this.onKeyDown = this._onKeyDown.bind(this);
		this.draw = this._draw.bind(this);

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
			switch (e.key) {
				case "ArrowRight":
					this.NUM++;
					this.checkNum();
					break;
				case "ArrowRight":
					this.NUM--;
					this.checkNum();
					break;
				default:
			}
			window.console.log('現在のシーン番号は',this.NUM);
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

	}

}