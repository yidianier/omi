import { Vector3, Stage, Cube, Camera } from '../../src/o3d'

const stage = new Stage({
  camera: new Camera({
    x: 0,
    y: 0,
    z: 1000,
    rotateX: 0,
    rotateY: 0,
    fov: 60,
    ratio: 600 / 600,
    front: 1,
    back: 1000
  }),
  renderTo: '#root',
  width: 600,
  height: 400,
  renderer: 'canvas'
});

const cube = new Cube(100, 100, 100, {
  center: new Vector3(0, 0, 200),
  rotate: {
    y: 30
  }
})

stage.add(cube)

stage.update()

animate()

function animate() {
  requestAnimationFrame(animate)
  cube.rotate.y += 1
  stage.update()
}
