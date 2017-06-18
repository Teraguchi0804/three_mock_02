/**
 * fileOverview:
 * Project:
 * File: Scene02
 * Date: 17/06/15
 * Author: Teraguchi
 */

import Entry from '../Core/Entry';

'use strict';

export default class overScene extends Entry{

  constructor() {

    super();

    this.scene = null;
    this.camera = null;
    this.step = 0;
    this.knot = null;

    //
		this.radius = 40;
		this.tube = 28.2;
		this.radialSegments = 600;
		this.tubularSegments = 12;
		this.p = 5;
		this.q = 4;
		this.heightScale = 4;
		this.asParticles = true;
		this.rotate = true;

    this.controls = this._controls.bind(this);
    this.createScene = this._createScene.bind(this);
    this.update = this._update.bind(this);

		// this.controls.redraw();

    this.createScene();

  }

  _controls(){
		this.redraw = function () {
			// remove the old plane
			if (this.knot) this.scene.remove(this.knot);
			// create a new one
			let geom = new THREE.TorusKnotGeometry(this.controls.radius, this.controls.tube, Math.round(this.controls.radialSegments), Math.round(this.controls.tubularSegments), Math.round(this.controls.p), Math.round(this.controls.q), this.controls.heightScale);

			if (this.controls.asParticles) {
				this.knot = this.createParticleSystem(geom);
			} else {
				this.knot = this.createMesh(geom);
			}

			// add it to the scene.
			this.scene.add(this.knot);
		}.bind(this);
  }

	// from THREE.js examples
	generateSprite() {

		var canvas = document.createElement('canvas');
		canvas.width = 16;
		canvas.height = 16;

		var context = canvas.getContext('2d');
		var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
		gradient.addColorStop(0, 'rgba(255,255,255,1)');
		gradient.addColorStop(0.2, 'rgba(0,255,255,1)');
		gradient.addColorStop(0.4, 'rgba(0,0,64,1)');
		gradient.addColorStop(1, 'rgba(0,0,0,1)');

		context.fillStyle = gradient;
		context.fillRect(0, 0, canvas.width, canvas.height);

		var texture = new THREE.Texture(canvas);
		texture.needsUpdate = true;
		return texture;

	}

	createParticleSystem(geom) {
		var material = new THREE.ParticleBasicMaterial({
			color: 0xffffff,
			size: 3,
			transparent: true,
			blending: THREE.AdditiveBlending,
			map: this.generateSprite()
		});

		var system = new THREE.ParticleSystem(geom, material);
		system.sortParticles = true;
		return system;
	}

	createMesh(geom) {

		// assign two materials
		var meshMaterial = new THREE.MeshNormalMaterial({});
		meshMaterial.side = THREE.DoubleSide;

		// create a multimaterial
		var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

		return mesh;
	}

	// render() {
	// 	stats.update();
	//
	// 	if (controls.rotate) {
	// 		knot.rotation.y = step += 0.01;
	// 	}
	//
	// 	// render using requestAnimationFrame
	// 	requestAnimationFrame(render);
	// 	webGLRenderer.render(scene, camera);
	// }


  /**
   * シーンを作成。オブジェクトを格納
   * @private
   */
  _createScene(){

    this.scene = new THREE.Scene(); //シーン作成

    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
    this.camera.position.x = -30;
    this.camera.position.y = 40;
    this.camera.position.z = 50;
		this.camera.lookAt(new THREE.Vector3(10, 0, 0));

    this.geometry = new THREE.BoxGeometry(50,50,50);
    this.material = new THREE.MeshBasicMaterial(0x888888);

    this.Box = new THREE.Mesh(
        this.geometry,
        this.material
    );

    this.scene.add(this.Box);

  }


  /**
   * update関数
   * @private
   */
  _update(){

		if (this.controls.rotate) {
			this.knot.rotation.y = this.step += 0.01;
		}

    // requestAnimationFrame(this.audioInit.execute());

    // this.timer += 0.1;
    // this.Box.position.y = 50 * Math.sin(this.timer);
    // this.Box.position.y = this.elVolumeVal * Math.sin(this.timer);

  }

}