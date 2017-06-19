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
    // this.Box = null;
    this.cube = null;
    this.timer = 0;

    this.group = null;

    this.render = this._render.bind(this);

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

    this.group = new THREE.Group();
    const step =30;
    const num = 10;
    for (let x = 1; x <= num; x++) {
      for (let y = 1; y <= num; y++) {
        for (let z = 1; z <= num; z ++) {
          this.cube = new THREE.Mesh(
              new THREE.BoxGeometry(10, 10, 10),
              new THREE.MeshLambertMaterial(0xffffff)
          );
          this.cube.position.set(
              (x - num / 2) * step,
              (y - num / 2) * step,
              (z - num / 2) * step
          );
          this.group.add(this.cube);
        }
      }
    }
    this.scene.add(this.group);

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(200, 200, 200);
    this.scene.add(pointLight);

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
    this.camera.position.z = 200;

  }


  _render() {
    this.group.rotation.x += 0.01;
    this.group.rotation.y += 0.01;
    this.group.rotation.z += 0.01;
    this.group.traverse(function(obj) {
      if (obj != this.group) {
        obj.rotation.x += 0.01;
        obj.rotation.y += 0.01;
        obj.rotation.z += 0.01;
      }
    }.bind(this));
    // stats.update();
    // renderer.render(scene, camera);
    // requestAnimationFrame(render);
  }


  /**
   *
   * @private
   */
  _update(){

    // window.console.log('update01');

    this.render();

  }

}