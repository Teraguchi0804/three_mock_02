/**
 * fileOverview:
 * Project:
 * File: SceneManger
 * Date:
 * Author: Teraguchi
 */

import Entry from '../Core/Entry';

'use strict';




export default class SceneManger extends Entry{

  constructor() {

    super();

		this.NUM = 0; // 現在のシーンの番号
		this.scenes = []; // シーンを格納する配列

    this.renderer = THREE.Renderer; // Renderer

    this.addScene = this._addScene.bind(this);

		this.onResize = this._onResize.bind(this);
		this.checkNum = this._checkNum.bind(this);
		this.onKeyDown = this._onKeyDown.bind(this);
		this.draw = this._draw.bind(this);

    window.console.log(this.scenes);
    // this.uniforms = {
    //   u_time: { type: "f", value: 1.0 },
    //   u_resolution: { type: "v2", value: new THREE.Vector2() },
    //   u_mouse: { type: "v2", value: new THREE.Vector2() }
    // };
		//
    // // this.titleObject = new TitleObject();
		//
    // this.canvas = document.getElementById('webgl-output');
		//
    // this.width = window.innerWidth;
    // this.height = window.innerHeight;
    // // this.output = opts.output || document.createElement('div');
		//
    // this.camera = null;
    // this.renderer = null;
    // this.scene = null;
		// this.cube = null;
		//
    // this.createCamera = this._createCamera.bind(this);
    // this.createRenderer = this._createRenderer.bind(this);
    // this.createScene = this._createScene.bind(this);
    // this.createObject = this._createObject.bind(this);
    // this.orbitControls = this._orbitControls.bind(this);
		//
    // this.planeObject = this._planeObject.bind(this);
		//
    // this.render = this._render.bind(this);
		//

		//
    // this.Update = this._Update.bind(this);


		// this.init(); // 初期化処理後、イベント登録

  }

  /**
   * 初期化
   */
  init(){

		document.addEventListener( 'resize', this.onWindowResize, false );
		document.addEventListener("keydown", this.onKeyDown, true);

		// Rendererを作る

		this.renderer = new THREE.WebGLRenderer({antialias: true});
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.sortObjects = false;
		this.renderer.shadowMap.enabled = true;
		this.renderer.shadowMap.type = THREE.PCFShadowMap;
		this.renderer.domElement.id = "main";
		document.body.appendChild(this.renderer.domElement);

		//
    // this.createCamera();
		// this.createScene();
    // this.createRenderer();
		//
		// this.orbitControls();
		// this.createObject();
		//
    // this.planeObject();
		//
    // this.Update();

    // this.titleObject.loadTexture(() => {
    //   this.scene.add(this.titleObject.obj);
    // });

    //リサイズイベント発火
    // window.addEventListener('resize', () => {
    //   this.onResize();
    // }, false);

  }

	/**
   * 管理したいシーンを格納する関数
	 * @param scene
	 */
	_addScene(scene)
	{

		this.scenes.push(scene);

	}

  /**
   *　ウィンドウの幅が変わったときの処理
   * @private
   */
  _onResize() {
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
	_onKeyDown(KeyboardEvent){
		console.log(e);
		// console.log(this.NUM);
		if(e.key == "ArrowRight")
		{
			this.NUM++;
			this.checkNum();
		}
		if( e.key == "ArrowLeft")
		{

			this.NUM--;
			this.checkNum();
		}

		console.log(this.NUM);
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