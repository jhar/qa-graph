import * as THREE from 'three'

// Scene configuration
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xf7f6f5)

// Camera configuration
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.01,
  1000
)
camera.position.z = 5

// Renderer configuration
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
  canvas: document.getElementById('graph')
})
renderer.setSize(window.innerWidth, window.innerHeight)

// Constructs and returns a sphere mesh
function sphere(radius, sw, sh, color, opacity) {
  return new THREE.Mesh(
    new THREE.SphereBufferGeometry(radius, sw, sh),
    new THREE.MeshBasicMaterial({
      color: color,
      opacity: opacity,
      transparent: true,
      wireframe: true
    })
  )
}

// Recursively instantiate spheres and add them to the scene
function shapes(n, base) {
  if (n < base) {
    let rV = Math.random()
    let shape = sphere(
      Math.random(),
      8,
      8,
      new THREE.Color(rV, rV, rV),
      rV * 0.62
    )
    shape.position.set(
      Math.random() * 8 - 4,
      Math.random() * 8 - 4,
      Math.random() * 10 - 5,
    )
    shape.velocity = new THREE.Vector3(
      0,
      0,
      Math.random() * 0.02 - 0.01
    )
    scene.add(shape)
    return shapes(n + 1, base)
  }
}

function render() {
  const ctrl = requestAnimationFrame(render)
  scene.traverse(node => {
    if (node.velocity) {
      node.position.add(node.velocity)
      if (node.position.z > 5) node.position.z = -15
      if (node.position.z < -15) node.position.z = 5
    }
  })
  renderer.render(scene, camera)
  return ctrl
}

function startTitle() {
  shapes(0, 99)
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }, false)
  render()
}

export default startTitle
