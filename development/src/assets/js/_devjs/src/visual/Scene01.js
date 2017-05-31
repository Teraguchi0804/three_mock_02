/**
 * fileOverview:
 * Project:
 * File: Scene01
 * Date: 17/05/31
 * Author: Teraguchi
 */

import Entry from '../Core/Entry';

'use strict';

export default class Scene01 extends Entry{

  constructor() {

    super();

    this.scene = null;
    this.camera = null;
    this.Box = null;
    this.timer = 0;

    this.createScene = this._createScene.bind(this);
    this.update = this._update.bind(this);

    this.createScene();

  }


  /**
   * シーンを作成。オブジェクトを格納
   * @private
   */
  _createScene(){

    this.scene = new THREE.Scene(); //シーン作成

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);
    this.camera.position.z = 1000;

    this.Box = new THREE.Mesh(
        new THREE.BoxGeometry(50,50,50),
        new THREE.MeshBasicMaterial(0xffffff)
    );

    this.scene.add(this.Box);

  }

  /**
   *
   * @private
   */
  _update(){

    this.timer += 0.1;
    this.Box.position.x = 50 * Math.sin(this.timer);

  }

}