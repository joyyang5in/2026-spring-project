import {
  AmbientLight,
  AxesHelper,
  BoxGeometry,
  Clock,
  Color,
  DirectionalLight,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.min.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.min.js';

class ModelRotator {
  camera;
  controls;
  mixer;
  model;
  renderer;
  scene;

  constructor(id) {
    // Canvas
    const canvas = document.getElementById(id);

    // Sizes
    const sizes = {
      width: canvas.offsetWidth,
      height: canvas.offsetHeight,
    };
    const aspectRatio = sizes.width / sizes.height;

    // Scene
    this.scene = new Scene();
    this.scene.background = new Color(0x9ddbff);

    // Lights
    const ambientLight = new AmbientLight(0xffffff, 2.4);
    this.scene.add(ambientLight);
    const directionalLight = new DirectionalLight(0xffffff, 1.8);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.set(1024, 1024);
    directionalLight.shadow.camera.far = 15;
    directionalLight.shadow.camera.left = -7;
    directionalLight.shadow.camera.top = 7;
    directionalLight.shadow.camera.right = 7;
    directionalLight.shadow.camera.bottom = -7;
    directionalLight.position.set(-5, 5, 0);
    this.scene.add(directionalLight);

    // Base camera
    this.camera = new PerspectiveCamera(75, aspectRatio, 0.1, 100);
    this.camera.position.y = 1;
    this.camera.position.z = 5;
    this.scene.add(this.camera);

    // Controls
    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.enableDamping = true;

    // Renderer
    this.renderer = new WebGLRenderer({
      canvas: canvas,
    });
    this.renderer.setSize(sizes.width, sizes.height);
  }

  setAnimationMixer(mixer) {
    this.mixer = mixer;
  }

  animate() {
    const clock = new Clock();
    let previousTime = 0;

    const camera = this.camera;
    const controls = this.controls;
    const renderer = this.renderer;
    const scene = this.scene;
    const thisModelRotator = this;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - previousTime;
      previousTime = elapsedTime;

      // Model animation
      if (thisModelRotator.mixer) {
        thisModelRotator.mixer.update(deltaTime);
      }

      // Update controls
      controls.update();

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
  }

  cameraPosition({ x, y, z }) {
    if (x) {
      this.camera.position.x = x;
    }
    if (y) {
      this.camera.position.y = y;
    }
    if (z) {
      this.camera.position.z = z;
    }
  }

  loadCube(size = 1) {
    const geometry = new BoxGeometry(size, size, size, 5, 5, 5);
    const materialRed = new MeshBasicMaterial({ color: 0xff0000 });
    // const materialGreen = new MeshBasicMaterial({ color: 0x00ff00 });
    // const materialBlue = new MeshBasicMaterial({ color: 0x0000ff });
    const mesh = new Mesh(geometry, materialRed);
    this.scene.add(mesh);
  }

  loadAxes(size = 2) {
    const axes = new AxesHelper(size);
    this.scene.add(axes);
  }

  loadFloor(size = 10, color = '#444444') {
    const floor = new Mesh(
      new PlaneGeometry(size, size),
      new MeshStandardMaterial({
        color: color,
        metalness: 0,
        roughness: 0.5,
      }),
    );
    floor.receiveShadow = true;
    floor.rotation.x = -Math.PI * 0.5;
    this.scene.add(floor);
  }

  load(path, scale = 1, callback = null) {
    const gltfLoader = new GLTFLoader();
    const scene = this.scene;
    const thisModelRotator = this;

    let webServerRoot = '/2026-spring-project';
    if (!new URL(import.meta.url).pathname.startsWith(`${webServerRoot}/`)) {
      webServerRoot = '';
    }

    gltfLoader.load(
      `${webServerRoot}${path}`,
      (gltf) => {
        console.log('Imported model', gltf);
        gltf.scene.scale.set(scale, scale, scale);
        thisModelRotator.model = gltf;
        scene.add(thisModelRotator.model.scene);

        if (callback) {
          callback(gltf);
        }
      },
      () => {
        console.log('progress');
      },
      (error) => {
        console.log(error);
      },
    );
  }
}

export { ModelRotator };
