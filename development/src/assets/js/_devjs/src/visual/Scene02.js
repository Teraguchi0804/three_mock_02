/**
 * fileOverview:
 * Project:
 * File: Scene02
 * Date: 17/05/31
 * Author: Teraguchi
 */

import Entry from '../Core/Entry';

'use strict';

export default class Scene02 extends Entry{

  constructor() {

    super();

    this.scene = null;
    this.camera = null;
    this.Box = null;
    this.timer = 0;

    this.audioCtx = null;
    this.analyser = null;
    this.waveData = null;

    this.getByteFrequencyDataAverage = this._getByteFrequencyDataAverage.bind(this);
    this.elVolume = document.getElementById('volume');

    this.audioInit = this._audioInit.bind(this);
    this.audio = this._audio.bind(this);

    this.createScene = this._createScene.bind(this);
    this.posUpdate = this._posUpdate.bind(this);
    this.update = this._update.bind(this);

    this.draw = this._draw.bind(this);

    this.createScene();

    this.audioInit();
    this.audio();

    this.draw();

  }


  /**
   * シーンを作成。オブジェクトを格納
   * @private
   */
  _createScene(){

    this.scene = new THREE.Scene(); //シーン作成

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 10000);
    this.camera.position.z = 1000;

    this.geometry = new THREE.BoxGeometry(50,50,50);
    this.material = new THREE.MeshBasicMaterial(0x888888);

    this.Box = new THREE.Mesh(
        this.geometry,
        this.material
    );

    this.scene.add(this.Box);

  }
  
  _audioInit(){
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioCtx = new AudioContext();
    this.analyser = this.audioCtx.createAnalyser();
    this.waveData = new Uint8Array(this.analyser.frequencyBinCount);
  }

  _audio(){
    navigator.mediaDevices.getUserMedia({audio: true})
        .then(function(stream) {
          window.hackForMozzila = stream;
          this.audioCtx.createMediaStreamSource(stream)
          // AnalyserNodeに接続
              .connect(this.analyser);
        })
        .catch(function(err) {
          console.log(err.message);
        });
  }

  _getByteFrequencyDataAverage(){
    this.analyser.getByteFrequencyData(this.waveData);
    return this.waveData.reduce(function(previous, current) {
          return previous + current;
        }) / this.analyser.frequencyBinCount;
  }



  _posUpdate(waveDate){

    // this.Box.geometry.verticesNeedUpdate = true;
    //
    // for (var i = 0; i < 4; i++) {
    //   // var vertex = this.Box.geometry.vertices[i];
    //   this.Box.position.y = waveDate[i%waveDate.length]*100;
    //
    //   window.console.log('this.Box.position.y',this.Box.position.y);
    // }

    // this.Box.position.y = 50 * Math.sin(waveDate);
    // this.Box.position.y = waveDate[waveDate.length]*100;
    //
    // window.console.log('this.Box.position.y',this.Box.position.y);

  }

  _draw() {
    // this.elVolume.innerHTML = Math.floor(this.getByteFrequencyDataAverage());
    // window.console.log('this.elVolume', this.getByteFrequencyDataAverage());
    requestAnimationFrame(this.draw);
  };

  /**
   * update関数
   * @private
   */
  _update(){

    // this.waveData = new Float32Array(this.analyser.frequencyBinCount);
    // this.analyser.getFloatTimeDomainData(this.waveData);

    // this.elVolume = Math.floor(this.getByteFrequencyDataAverage());
    // this.elVolume.innerHTML = Math.floor(this.getByteFrequencyDataAverage());

    // window.console.log(this.elVolume);
    //
    // this.posUpdate(this.waveData);

    // this.timer += 0.1;
    // this.Box.position.y = 50 * Math.sin(this.timer);

  }

}