var glslify = require('glslify');

export default class TitleObject {
  constructor() {
    this.uniforms = {
      time: {
        type: 'f',
        value: 0
      },
      resolution: {
        type: 'v2',
        value: new THREE.Vector2()
      },
      texture: {
        type: 't',
        value: null
      }
    };
    this.obj = null;
    this.isLoaded = false;
    this.titrender = this._titrender.bind(this);
  }
  loadTexture(callback) {
    const loader = new THREE.TextureLoader();
    loader.load('/assets/resource/img/tex_title.png', (texture) => {
      texture.magFilter = THREE.NearestFilter;
      texture.minFilter = THREE.NearestFilter;
      this.uniforms.texture.value = texture;
      this.obj = this.createObj();
      this.isLoaded = true;
      callback();
    });
  }
  createObj() {
    return new THREE.Mesh(
      new THREE.PlaneBufferGeometry(256, 64, 40, 10),
      new THREE.RawShaderMaterial({
        uniforms: this.uniforms,
        // vertexShader: glslify('../../../../glsl/index/titleObject.vert'),
        // fragmentShader: glslify('../../../../glsl/index/titleObject.frag'),
        vertexShader: require('../../../../glsl/index/titleObject.vert'),
        fragmentShader: require('../../../../glsl/index/titleObject.frag'),
        transparent: true,
      })
    )
  }
  // render(time) {
  _titrender(time) {
    if (!this.isLoaded) return;
    this.uniforms.time.value += time;
  }
}
