import { ModelRotator } from '../../../scripts/model-rotator.js';
import { AnimationMixer } from 'three';

const dog = new ModelRotator('dog-3d');
const model = '/students/MrWilkins/images/Fox.glb';
const scale = 0.05;
const position = {
  x: -5,
  y: 5,
  z: 5,
};

// dog.loadCube();
dog.load(model, scale, function (loadedModel) {
  // Animation
  const mixer = new AnimationMixer(loadedModel.scene);
  dog.setAnimationMixer(mixer);

  const action = mixer.clipAction(loadedModel.animations[2]);
  action.play();
});

dog.loadAxes(5);
dog.loadFloor(500);
dog.cameraPosition(position);

dog.animate();
